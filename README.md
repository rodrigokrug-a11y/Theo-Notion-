# Theo-Notion — clone do Notion (arquivo único)

App estilo **Notion** (páginas, cadernos de desenho e diagramas tipo Miro)
escrito em **React + TypeScript (TSX)**, rodando na plataforma **theo**.

> ⚠️ **Tudo vive em um único arquivo: [`app.tsx`](./app.tsx).**
> Não há `package.json`, `node_modules` nem passo de build próprio — a
> plataforma theo compila e executa o `app.tsx` diretamente. Para desenvolver
> em outro computador você só precisa de **Git** e (opcional) **Node.js** para
> validar o arquivo antes de enviar.

---

## 1. Começando em outra máquina

```bash
# 1. Clonar o repositório
git clone https://github.com/rodrigokrug-a11y/Theo-Notion-.git
cd Theo-Notion-

# 2. Entrar na branch de desenvolvimento
git checkout claude/gifted-bohr-q95s6n   # ou: git checkout main

# 3. Editar o app — é só este arquivo:
#    app.tsx
```

Edite o `app.tsx` em qualquer editor (VS Code recomendado, com a extensão
oficial de TypeScript/React para realce e autocomplete).

---

## 2. Validar antes de enviar (recomendado)

Como não há build local, valide que o arquivo **compila** e que **não tem
bytes nulos** (NUL) que corrompem o Git. Precisa de Node.js instalado.

```bash
# Verifica se o TSX faz parse / compila (não gera saída, só valida):
npx --yes esbuild@0.21.5 app.tsx --bundle=false --log-level=warning --outfile=/dev/null

# Confirma 0 bytes NUL (se aparecer outro número, o arquivo está corrompido):
python3 -c "print('NUL:', open('app.tsx','rb').read().count(b'\x00'))"
```

Se o esbuild imprimir um erro com `(linha:coluna)`, corrija ali antes de
commitar. `NUL: 0` é o esperado.

> Dica: você pode copiar esses dois comandos para um script `check.sh`
> e rodar `bash check.sh` antes de cada commit.

---

## 3. Publicar / usar no theo

A plataforma theo é a **única** que executa o app de verdade (ela fornece o
banco, o usuário logado e o upload de arquivos — veja o contrato abaixo).
Fluxo típico:

1. Faça e valide suas mudanças no `app.tsx`.
2. Cole o conteúdo completo do `app.tsx` no editor do app no theo
   (ou conecte o repositório, conforme sua configuração).
3. O theo compila e mostra o resultado.

O Git aqui serve como **fonte da verdade / backup versionado** do `app.tsx`.

---

## 4. Como o app está organizado

Componente raiz e contrato com a plataforma (início do `app.tsx`):

```tsx
export default function MyApp(props: any) { ... <AppContent {...props} /> ... }
function AppContent({ db, user, files }: any) { ... }
```

**Globais fornecidos pela plataforma (não importe nada disso — já existe):**

| Global   | O que é | Uso no código |
|----------|---------|---------------|
| `React`  | React (hooks: `useState`, `useEffect`, `useRef`…) | em todo lugar |
| `BeaUI`  | biblioteca de UI da plataforma | `BeaUI.ToastProvider`, toasts |
| `db`     | banco **PostgreSQL** | `db.query(...)`, `db.execute(...)` |
| `user`   | usuário logado | `user.id`, `user.name`, `user.role` |
| `files`  | upload de arquivos | `await files.upload(file)` → `{ url }` |

**Estilo:** classes utilitárias tipo **Tailwind** + um bloco `<style>` no topo
com a paleta do Notion (variáveis CSS `--background`, `--foreground`, etc.,
com tema claro/escuro). Permissão de edição: `user.role === "admin"` ou
`"builder"` (`canEdit`).

### Banco de dados

Tudo é guardado numa única tabela criada na primeira execução:

- Tabela: `app_notion_pages_mqo532`  (constante `TBL`; `HASH = "mqo532"`)
- Colunas principais: `id`, `owner_id`, `parent_id` (hierarquia de páginas),
  `title`, `icon`, `cover_url`, `content` (**JSONB** — o conteúdo real da
  página), `is_favorite`, `sort_order`, `deleted_at` (lixeira), timestamps.

O `content` (JSONB) define o **tipo da página**, detectado pelo primeiro item:

| Tipo      | Como é detectado                     | O que é |
|-----------|--------------------------------------|---------|
| `doc`     | lista de blocos (parágrafo, h1, lista, tabela, código, callout, imagem, embeds…) | página de texto estilo Notion |
| `canvas`  | `content[0].type` de caderno         | caderno de desenho à mão |
| `diagram` | `content[0].type` de diagrama        | quadro tipo **Miro** (nós + setas) |

### Principais módulos dentro do `app.tsx`

- **Editor de documentos** — blocos via menu `/` (`SLASH_ITEMS`): texto,
  títulos, listas, tarefas, toggle, citação, callout, código, divisor,
  imagem, tabela, manuscrito, **embeds** de diagrama/caderno, **Mermaid**
  (texto → fluxograma), **link de página** (`/` → "Link de página", ou `@`),
  **nova página linkada** (`/` → "Nova página"), **sumário** (`/sumário` —
  índice clicável dos títulos) e **bookmark** (`/bookmark` — cartão de URL).
  Formatação inline via barra flutuante (negrito/itálico/sublinhado/tachado/
  código/cor/realce/link).
- **Referências (backlinks)** — cada página lista, no rodapé, as páginas que
  linkam para ela (varre o conteúdo por `data-page-id`).
- **Duplicar página** — no menu da página (cabeçalho e barra lateral): copia a
  página e todas as subpáginas.
- **CanvasEditor** — caderno de desenho (SVG, pan/zoom, ferramentas) com
  multi-seleção por laço, **copiar/colar/recortar** e **agrupar/desagrupar**
  (Ctrl+C / Ctrl+V / Ctrl+X / Ctrl+G e botões na barra do topo).
- **DiagramEditor** — diagramas conectados tipo Miro: formas, texto dentro
  das formas, setas curvas (ponta em um ou nos dois lados), múltiplas setas,
  multi-seleção por laço, **agrupar/desagrupar**, **copiar/colar/recortar**
  (Ctrl+C / Ctrl+V / Ctrl+X e botões na barra do topo), desfazer/refazer,
  paleta de cores.
- **IconPicker** — ~1750 ícones flat **SVG embutidos** (monocromáticos, base
  Lucide + curados, sem CDN; busca em português) + emojis.

### CDNs externos carregados sob demanda

- **Mermaid** — para o bloco "Diagrama por texto".
- **pdf.js** — para importação/leitura de PDF.

> Os ícones planos NÃO usam CDN: são SVGs embutidos no `app.tsx`
> (`ICON_SVGS`/`ICON_LIST`), gerados a partir do pacote `lucide-static`.

Carregados via `<link>`/`loadScriptOnce` com URLs de fallback — exigem
acesso à internet no ambiente onde o app roda.

---

## 5. Convenções (mantenha ao editar)

- **Um arquivo só.** Todo o código fica em `app.tsx`. Sem `import`/`require`
  de pacotes — use apenas os globais (`React`, `BeaUI`, `db`, `user`, `files`).
- **Interface em português (pt-BR).** Textos visíveis ao usuário em português.
- **Edições cirúrgicas.** Preserve as funcionalidades existentes; altere o
  mínimo necessário.
- **Sem bytes NUL.** Para placeholders/sentinelas em strings, use caracteres
  da área de uso privado (ex.: `U+E000`), nunca `U+0000`.
- **Valide** com o esbuild + checagem de NUL antes de commitar.

---

## 6. Fluxo de Git

Branch de desenvolvimento: **`claude/gifted-bohr-q95s6n`**.

```bash
# depois de editar e validar app.tsx:
git add app.tsx
git commit -m "descreva a mudança aqui"

git push -u origin claude/gifted-bohr-q95s6n      # branch de trabalho
git push origin claude/gifted-bohr-q95s6n:main    # opcional: atualizar o main
```

> Atualizar o `main` faz o arquivo aparecer na página inicial do repositório
> no GitHub.

---

## 7. Resolução de problemas

| Sintoma | Causa provável | Solução |
|--------|----------------|---------|
| `Unexpected token (linha:coluna)` no theo | erro de sintaxe TSX | rode o esbuild local e corrija na linha apontada |
| Git trata o arquivo como binário / diff some | bytes NUL no arquivo | rode a checagem de NUL; substitua `U+0000` por `U+E000` |
| Ícones flat não aparecem (só emojis) | CDN de ícones bloqueado | confira acesso a `cdn.jsdelivr.net`; Remix Icon é a base padrão |
| Mermaid/PDF não funcionam | sem internet no ambiente | os CDNs precisam carregar em runtime |
| App não salva nada | sem `db`/`user` | o app só persiste rodando dentro do theo |
