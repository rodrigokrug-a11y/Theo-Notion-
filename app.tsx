export default function MyApp(props: any) {
  return (
    <BeaUI.ToastProvider>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Caveat:wght@500;600;700&display=swap');
        /* Redesign "papel quente": fundo #FBFAF6, tinta #1B1A17, acento índigo #5B45D9 */
        :root, .dark { --primary: 249 66% 56%; --primary-foreground: 0 0% 100%; --ring: 249 66% 56%; --destructive: 343 53% 53%; --destructive-foreground: 0 0% 100%; }
        :root {
          --background: 48 33% 97%; --foreground: 45 9% 11%;
          --card: 0 0% 100%; --card-foreground: 45 9% 11%;
          --popover: 0 0% 100%; --popover-foreground: 45 9% 11%;
          --muted: 44 27% 92%; --muted-foreground: 40 8% 49%;
          --accent: 45 22% 92%; --accent-foreground: 42 13% 22%;
          --secondary: 44 26% 93%; --secondary-foreground: 42 13% 22%;
          --border: 42 22% 88%; --input: 42 22% 88%;
        }
        .dark {
          --background: 40 8% 9%; --foreground: 45 14% 87%;
          --card: 40 7% 13%; --card-foreground: 45 14% 87%;
          --popover: 40 7% 13%; --popover-foreground: 45 14% 87%;
          --muted: 40 6% 16%; --muted-foreground: 42 9% 60%;
          --accent: 40 6% 19%; --accent-foreground: 45 14% 87%;
          --secondary: 40 6% 19%; --secondary-foreground: 45 14% 87%;
          --border: 40 6% 22%; --input: 40 6% 22%;
          --primary: 249 72% 68%; --ring: 249 72% 68%;
        }
        [style*="hsl(var(--card))"], .bg-card, .bg-popover { background-color: rgb(255 255 255) !important; }
        .dark [style*="hsl(var(--card))"], .dark .bg-card, .dark .bg-popover { background-color: rgb(34 32 28) !important; }
        .canvas-pill { background-color: rgb(255 255 255 / 0.97) !important; }
        .dark .canvas-pill { background-color: rgb(34 32 28 / 0.97) !important; }
        @media (hover: none) and (pointer: coarse) { .touch-show { opacity: 1 !important; } }
        body, button, input, textarea, select { font-family: 'Hanken Grotesk', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
        body { overscroll-behavior-y: none; background-color: hsl(var(--background)); color: hsl(var(--foreground)); -webkit-font-smoothing: antialiased; }
        /* Títulos com serifa elegante (Newsreader) */
        .dc-serif { font-family: 'Newsreader', Georgia, 'Times New Roman', serif !important; letter-spacing: -0.01em; }
        .dc-hand { font-family: 'Caveat', ui-rounded, cursive; }
        *::-webkit-scrollbar { width: 11px; height: 11px; }
        *::-webkit-scrollbar-thumb { background: hsl(var(--border)); border-radius: 10px; border: 3px solid transparent; background-clip: content-box; }
        *::-webkit-scrollbar-thumb:hover { background: hsl(var(--muted-foreground) / 0.4); background-clip: content-box; }
      `}</style>
      <AppContent {...props} />
    </BeaUI.ToastProvider>
  );
}

const HASH = "mqo532";
const TBL = "app_notion_pages_mqo532";

const SLASH_ITEMS = [
  { type: "newpage", label: "Nova página", desc: "Criar uma subpágina e linká-la aqui", display: "📄", style: "", kw: "pagina nova subpagina criar pagelink" },
  { type: "pagelink", label: "Link de página", desc: "Citar e linkar uma página existente", display: "🔗", style: "", kw: "link pagina citar referencia mencao" },
  { type: "paragraph", label: "Texto", desc: "Texto simples", display: "Aa", style: "text-base font-bold" },
  { type: "h1", label: "Título 1", desc: "Cabeçalho grande", display: "H1", style: "text-sm font-bold" },
  { type: "h2", label: "Título 2", desc: "Cabeçalho médio", display: "H2", style: "text-sm font-bold" },
  { type: "h3", label: "Título 3", desc: "Cabeçalho pequeno", display: "H3", style: "text-xs font-bold" },
  { type: "bullet", label: "Lista com marcadores", desc: "Lista simples", display: "•", style: "text-2xl leading-none" },
  { type: "numbered", label: "Lista numerada", desc: "Lista com números", display: "1.", style: "text-sm font-semibold" },
  { type: "todo", label: "Lista de tarefas", desc: "Tarefas com checkbox", display: "☑", style: "text-lg" },
  { type: "toggle", label: "Alternar", desc: "Bloco que abre e fecha", display: "▶", style: "text-xs" },
  { type: "quote", label: "Citação", desc: "Capture uma citação", display: '"', style: "text-3xl font-serif leading-none" },
  { type: "callout", label: "Destaque", desc: "Destaque informações", display: "💡", style: "" },
  { type: "code", label: "Código", desc: "Trecho de código", display: "{}", style: "text-xs font-mono font-bold" },
  { type: "divider", label: "Divisor", desc: "Linha separadora", display: "—", style: "text-xl leading-none" },
  { type: "toc", label: "Sumário", desc: "Índice com os títulos da página", display: "≡", style: "text-lg leading-none", kw: "sumario indice toc conteudos titulos" },
  { type: "bookmark", label: "Bookmark de link", desc: "Cartão clicável para uma URL", display: "🔖", style: "", kw: "bookmark link url site web favorito" },
  { type: "image", label: "Imagem", desc: "Insira uma imagem", display: "🖼", style: "" },
  { type: "table", label: "Tabela", desc: "Tabela editável", display: "⊞", style: "text-xl leading-none" },
  { type: "sketch", label: "Manuscrito", desc: "Bloco para escrever à mão", display: "✍️", style: "" },
  { type: "embed_diagram", label: "Diagrama", desc: "Inserir um diagrama (novo ou existente)", display: "🗺️", style: "" },
  { type: "embed_canvas", label: "Caderno", desc: "Inserir um caderno de desenho", display: "🎨", style: "" },
  { type: "mermaid", label: "Diagrama por texto (Mermaid)", desc: "Escreva e vire fluxograma", display: "🧜", style: "" },
];

const EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😕 🙁 😣 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😲 🥱 😴 🤤 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👻 💀 👽 👾 🤖 🎃 🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 👌 ✋ 👋 🤙 💪 🦾 🙏 👁 👀 🧠 🗣 👤 👥 👶 👧 🧒 👦 👩 🧑 👨 👵 🧓 👴 🧕 👮 👷 💂 🕵 👰 🤵 👸 🤴 🦸 🦹 🧙 🧝 🧛 🧟 🧞 🧜 🧚 👼 🤰 💃 🕺 🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐸 🐵 🐔 🐧 🐦 🐤 🐣 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐞 🐜 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🐘 🦏 🐪 🦒 🐃 🐂 🐄 🐎 🐖 🐑 🦙 🐐 🦌 🐕 🐈 🐓 🦃 🦚 🦜 🐇 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 🍀 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🌺 🌸 🌼 🌻 🌞 🌝 🌜 🌙 🌎 🌍 🌏 ⭐ 🌟 ✨ ⚡ 🔥 🌈 ☀️ ☁️ ❄️ ☃️ ⛄ 💨 💧 💦 🌊 🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍒 🍑 🥭 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥒 🌶 🌽 🥕 🥔 🍠 🥐 🍞 🥖 🥨 🧀 🥚 🍳 🥞 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🥪 🌮 🌯 🥗 🍝 🍜 🍲 🍛 🍣 🍱 🍤 🍙 🍚 🍘 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🌰 🍯 🥛 🍼 ☕ 🍵 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 ⚽ 🏀 🏈 ⚾ 🎾 🏐 🏉 🎱 🏓 🏸 🥅 ⛳ 🏹 🎣 🥊 🥋 🛹 🎿 ⛷ 🏂 🏆 🥇 🥈 🥉 🏅 🎖 🎫 🎟 🎪 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🎲 🎯 🎳 🎮 🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛵 🏍 🚨 🚔 🚍 🚘 🚖 🚲 🛴 🚀 🛸 🚁 ✈️ 🚂 🚆 🚇 🚊 🚉 🛳 ⛵ 🚢 ⚓ 🚧 🚦 🗺 🗽 🏰 🏯 🏟 🎡 🎢 🎠 🏖 🏝 🏜 🌋 🏔 🗻 🏕 🏠 🏡 🏘 🏗 🏭 🏢 🏬 🏥 🏦 🏨 🏪 🏫 🏩 🏛 ⛪ 🕌 🕍 🌅 🌄 🌠 🌇 🌆 🏙 🌃 🌌 🌉 🌁 ⌚ 📱 💻 🖥 🖨 🖱 💾 💿 📷 📹 🎥 📞 ☎ 📺 📻 🔋 🔌 💡 🔦 🕯 💵 💴 💶 💷 💰 💳 💎 🔧 🔨 🛠 🔩 ⚙ 🧱 🔫 💣 🔪 🛡 🔮 📿 🔬 🔭 🩺 💊 💉 🧬 🧪 🌡 🧹 🚽 🚿 🛁 🧼 🛎 🔑 🚪 🛏 🛋 🧸 🛍 🛒 🎁 🎈 🎀 🎊 🎉 🎎 🏮 🧧 ✉ 📩 📨 📧 📥 📤 📦 📪 📫 📬 📮 📯 📜 📄 📑 🧾 📊 📈 📉 🗒 🗓 📆 📅 🗑 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 📎 📐 📏 📌 📍 ✂ 🖊 🖋 🖌 🖍 📝 ✏ 🔍 🔎 🔏 🔐 🔒 🔓".split(" ");

// ========================================================================
// Ícones planos (Flaticon UIcons) — base alternativa aos emojis para páginas
// ========================================================================
// Conjunto de ícones planos embutidos (SVG monocromático, usa currentColor).
const ICON_SVGS: Record<string, string> = {
  "a-arrow-down": "<path d=\"m14 12 4 4 4-4\"/><path d=\"M18 16V7\"/><path d=\"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16\"/><path d=\"M3.304 13h6.392\"/>",
  "a-arrow-up": "<path d=\"m14 11 4-4 4 4\"/><path d=\"M18 16V7\"/><path d=\"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16\"/><path d=\"M3.304 13h6.392\"/>",
  "a-large-small": "<path d=\"m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16\"/><path d=\"M15.697 14h5.606\"/><path d=\"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16\"/><path d=\"M3.304 13h6.392\"/>",
  "accessibility": "<circle cx=\"16\" cy=\"4\" r=\"1\"/><path d=\"m18 19 1-7-6 1\"/><path d=\"m5 8 3-3 5.5 3-2.36 3.5\"/><path d=\"M4.24 14.5a5 5 0 0 0 6.88 6\"/><path d=\"M13.76 17.5a5 5 0 0 0-6.88-6\"/>",
  "activity": "<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"/>",
  "ad": "<path d=\"M10 13H6\"/><path d=\"M10 15v-4a2 2 0 0 0-4 0v4\"/><path d=\"M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z\"/><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/>",
  "air-vent": "<path d=\"M18 17.5a2.5 2.5 0 1 1-4 2.03V12\"/><path d=\"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"/><path d=\"M6 8h12\"/><path d=\"M6.6 15.572A2 2 0 1 0 10 17v-5\"/>",
  "airplay": "<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"/><path d=\"m12 15 5 6H7Z\"/>",
  "alarm-clock-check": "<circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M5 3 2 6\"/><path d=\"m22 6-3-3\"/><path d=\"M6.38 18.7 4 21\"/><path d=\"M17.64 18.67 20 21\"/><path d=\"m9 13 2 2 4-4\"/>",
  "alarm-clock-minus": "<circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M5 3 2 6\"/><path d=\"m22 6-3-3\"/><path d=\"M6.38 18.7 4 21\"/><path d=\"M17.64 18.67 20 21\"/><path d=\"M9 13h6\"/>",
  "alarm-clock-off": "<path d=\"M6.87 6.87a8 8 0 1 0 11.26 11.26\"/><path d=\"M19.9 14.25a8 8 0 0 0-9.15-9.15\"/><path d=\"m22 6-3-3\"/><path d=\"M6.26 18.67 4 21\"/><path d=\"m2 2 20 20\"/><path d=\"M4 4 2 6\"/>",
  "alarm-clock-plus": "<circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M5 3 2 6\"/><path d=\"m22 6-3-3\"/><path d=\"M6.38 18.7 4 21\"/><path d=\"M17.64 18.67 20 21\"/><path d=\"M12 10v6\"/><path d=\"M9 13h6\"/>",
  "alarm-clock": "<circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M12 9v4l2 2\"/><path d=\"M5 3 2 6\"/><path d=\"m22 6-3-3\"/><path d=\"M6.38 18.7 4 21\"/><path d=\"M17.64 18.67 20 21\"/>",
  "alarm-smoke": "<path d=\"M11 21c0-2.5 2-2.5 2-5\"/><path d=\"M16 21c0-2.5 2-2.5 2-5\"/><path d=\"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8\"/><path d=\"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z\"/><path d=\"M6 21c0-2.5 2-2.5 2-5\"/>",
  "album": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><polyline points=\"11 3 11 11 14 8 17 11 17 3\"/>",
  "align-center-horizontal": "<path d=\"M2 12h20\"/><path d=\"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4\"/><path d=\"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4\"/><path d=\"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1\"/><path d=\"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1\"/>",
  "align-center-vertical": "<path d=\"M12 2v20\"/><path d=\"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4\"/><path d=\"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4\"/><path d=\"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1\"/><path d=\"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1\"/>",
  "align-end-horizontal": "<rect width=\"6\" height=\"16\" x=\"4\" y=\"2\" rx=\"2\"/><rect width=\"6\" height=\"9\" x=\"14\" y=\"9\" rx=\"2\"/><path d=\"M22 22H2\"/>",
  "align-end-vertical": "<rect width=\"16\" height=\"6\" x=\"2\" y=\"4\" rx=\"2\"/><rect width=\"9\" height=\"6\" x=\"9\" y=\"14\" rx=\"2\"/><path d=\"M22 22V2\"/>",
  "align-horizontal-distribute-center": "<rect width=\"6\" height=\"14\" x=\"4\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"14\" y=\"7\" rx=\"2\"/><path d=\"M17 22v-5\"/><path d=\"M17 7V2\"/><path d=\"M7 22v-3\"/><path d=\"M7 5V2\"/>",
  "align-horizontal-distribute-end": "<rect width=\"6\" height=\"14\" x=\"4\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"14\" y=\"7\" rx=\"2\"/><path d=\"M10 2v20\"/><path d=\"M20 2v20\"/>",
  "align-horizontal-distribute-start": "<rect width=\"6\" height=\"14\" x=\"4\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"14\" y=\"7\" rx=\"2\"/><path d=\"M4 2v20\"/><path d=\"M14 2v20\"/>",
  "align-horizontal-justify-center": "<rect width=\"6\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"16\" y=\"7\" rx=\"2\"/><path d=\"M12 2v20\"/>",
  "align-horizontal-justify-end": "<rect width=\"6\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"12\" y=\"7\" rx=\"2\"/><path d=\"M22 2v20\"/>",
  "align-horizontal-justify-start": "<rect width=\"6\" height=\"14\" x=\"6\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"16\" y=\"7\" rx=\"2\"/><path d=\"M2 2v20\"/>",
  "align-horizontal-space-around": "<rect width=\"6\" height=\"10\" x=\"9\" y=\"7\" rx=\"2\"/><path d=\"M4 22V2\"/><path d=\"M20 22V2\"/>",
  "align-horizontal-space-between": "<rect width=\"6\" height=\"14\" x=\"3\" y=\"5\" rx=\"2\"/><rect width=\"6\" height=\"10\" x=\"15\" y=\"7\" rx=\"2\"/><path d=\"M3 2v20\"/><path d=\"M21 2v20\"/>",
  "align-start-horizontal": "<rect width=\"6\" height=\"16\" x=\"4\" y=\"6\" rx=\"2\"/><rect width=\"6\" height=\"9\" x=\"14\" y=\"6\" rx=\"2\"/><path d=\"M22 2H2\"/>",
  "align-start-vertical": "<rect width=\"9\" height=\"6\" x=\"6\" y=\"14\" rx=\"2\"/><rect width=\"16\" height=\"6\" x=\"6\" y=\"4\" rx=\"2\"/><path d=\"M2 2v20\"/>",
  "align-vertical-distribute-center": "<path d=\"M22 17h-3\"/><path d=\"M22 7h-5\"/><path d=\"M5 17H2\"/><path d=\"M7 7H2\"/><rect x=\"5\" y=\"14\" width=\"14\" height=\"6\" rx=\"2\"/><rect x=\"7\" y=\"4\" width=\"10\" height=\"6\" rx=\"2\"/>",
  "align-vertical-distribute-end": "<rect width=\"14\" height=\"6\" x=\"5\" y=\"14\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"4\" rx=\"2\"/><path d=\"M2 20h20\"/><path d=\"M2 10h20\"/>",
  "align-vertical-distribute-start": "<rect width=\"14\" height=\"6\" x=\"5\" y=\"14\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"4\" rx=\"2\"/><path d=\"M2 14h20\"/><path d=\"M2 4h20\"/>",
  "align-vertical-justify-center": "<rect width=\"14\" height=\"6\" x=\"5\" y=\"16\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"2\" rx=\"2\"/><path d=\"M2 12h20\"/>",
  "align-vertical-justify-end": "<rect width=\"14\" height=\"6\" x=\"5\" y=\"12\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"2\" rx=\"2\"/><path d=\"M2 22h20\"/>",
  "align-vertical-justify-start": "<rect width=\"14\" height=\"6\" x=\"5\" y=\"16\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"6\" rx=\"2\"/><path d=\"M2 2h20\"/>",
  "align-vertical-space-around": "<rect width=\"10\" height=\"6\" x=\"7\" y=\"9\" rx=\"2\"/><path d=\"M22 20H2\"/><path d=\"M22 4H2\"/>",
  "align-vertical-space-between": "<rect width=\"14\" height=\"6\" x=\"5\" y=\"15\" rx=\"2\"/><rect width=\"10\" height=\"6\" x=\"7\" y=\"3\" rx=\"2\"/><path d=\"M2 21h20\"/><path d=\"M2 3h20\"/>",
  "ambulance": "<path d=\"M10 10H6\"/><path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2\"/><path d=\"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14\"/><path d=\"M8 8v4\"/><path d=\"M9 18h6\"/><circle cx=\"17\" cy=\"18\" r=\"2\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/>",
  "ampersand": "<path d=\"M16 12h3\"/><path d=\"M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13\"/>",
  "ampersands": "<path d=\"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5\"/><path d=\"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5\"/>",
  "amphora": "<path d=\"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8\"/><path d=\"M10 5H8a2 2 0 0 0 0 4h.68\"/><path d=\"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8\"/><path d=\"M14 5h2a2 2 0 0 1 0 4h-.68\"/><path d=\"M18 22H6\"/><path d=\"M9 2h6\"/>",
  "anchor": "<circle cx=\"12\" cy=\"5\" r=\"3\"/><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"8\"/><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"/>",
  "angry": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"/><path d=\"M7.5 8 10 9\"/><path d=\"m14 9 2.5-1\"/><path d=\"M9 10h.01\"/><path d=\"M15 10h.01\"/>",
  "annoyed": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 15h8\"/><path d=\"M8 9h2\"/><path d=\"M14 9h2\"/>",
  "antenna": "<path d=\"M2 12 7 2\"/><path d=\"m7 12 5-10\"/><path d=\"m12 12 5-10\"/><path d=\"m17 12 5-10\"/><path d=\"M4.5 7h15\"/><path d=\"M12 16v6\"/>",
  "anvil": "<path d=\"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4\"/><path d=\"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z\"/><path d=\"M9 12v5\"/><path d=\"M15 12v5\"/><path d=\"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1\"/>",
  "aperture": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m14.31 8 5.74 9.94\"/><path d=\"M9.69 8h11.48\"/><path d=\"m7.38 12 5.74-9.94\"/><path d=\"M9.69 16 3.95 6.06\"/><path d=\"M14.31 16H2.83\"/><path d=\"m16.62 12-5.74 9.94\"/>",
  "app-window-mac": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M6 8h.01\"/><path d=\"M10 8h.01\"/><path d=\"M14 8h.01\"/>",
  "app-window": "<rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/><path d=\"M10 4v4\"/><path d=\"M2 8h20\"/><path d=\"M6 4v4\"/>",
  "apple": "<path d=\"M12 6.528V3a1 1 0 0 1 1-1h0\"/><path d=\"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21\"/>",
  "archive-restore": "<rect width=\"20\" height=\"5\" x=\"2\" y=\"3\" rx=\"1\"/><path d=\"M4 8v11a2 2 0 0 0 2 2h2\"/><path d=\"M20 8v11a2 2 0 0 1-2 2h-2\"/><path d=\"m9 15 3-3 3 3\"/><path d=\"M12 12v9\"/>",
  "archive-x": "<rect width=\"20\" height=\"5\" x=\"2\" y=\"3\" rx=\"1\"/><path d=\"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8\"/><path d=\"m9.5 17 5-5\"/><path d=\"m9.5 12 5 5\"/>",
  "archive": "<polyline points=\"21 8 21 21 3 21 3 8\"/><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"/><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"/>",
  "armchair": "<path d=\"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3\"/><path d=\"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z\"/><path d=\"M5 18v2\"/><path d=\"M19 18v2\"/>",
  "arrow-big-down-dash": "<path d=\"M14 8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-6.939 6.939a1.207 1.207 0 0 1-1.708 0l-6.94-6.94a.707.707 0 0 1 .5-1.206H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1z\"/><path d=\"M9 4h6\"/>",
  "arrow-big-down": "<path d=\"M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z\"/>",
  "arrow-big-left-dash": "<path d=\"M13 9a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707l6.94 6.94a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z\"/><path d=\"M20 9v6\"/>",
  "arrow-big-left": "<path d=\"M10.793 19.793a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707z\"/>",
  "arrow-big-right-dash": "<path d=\"M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z\"/><path d=\"M4 9v6\"/>",
  "arrow-big-right": "<path d=\"M13.207 19.793a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707z\"/>",
  "arrow-big-up-dash": "<path d=\"M14 16a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-6.939-6.939a1.207 1.207 0 0 0-1.708 0l-6.94 6.94a.707.707 0 0 0 .5 1.206H8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1z\"/><path d=\"M9 20h6\"/>",
  "arrow-big-up": "<path d=\"M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z\"/>",
  "arrow-down-0-1": "<path d=\"m3 16 4 4 4-4\"/><path d=\"M7 20V4\"/><rect x=\"15\" y=\"4\" width=\"4\" height=\"6\" ry=\"2\"/><path d=\"M17 20v-6h-2\"/><path d=\"M15 20h4\"/>",
  "arrow-down-1-0": "<path d=\"m3 16 4 4 4-4\"/><path d=\"M7 20V4\"/><path d=\"M17 10V4h-2\"/><path d=\"M15 10h4\"/><rect x=\"15\" y=\"14\" width=\"4\" height=\"6\" ry=\"2\"/>",
  "arrow-down-a-z": "<path d=\"m3 16 4 4 4-4\"/><path d=\"M7 20V4\"/><path d=\"M20 8h-5\"/><path d=\"M15 10V6.5a2.5 2.5 0 0 1 5 0V10\"/><path d=\"M15 14h5l-5 6h5\"/>",
  "arrow-down-from-line": "<path d=\"M19 3H5\"/><path d=\"M12 21V7\"/><path d=\"m6 15 6 6 6-6\"/>",
  "arrow-down-left": "<path d=\"M17 7 7 17\"/><path d=\"M17 17H7V7\"/>",
  "arrow-down-narrow-wide": "<path d=\"m3 16 4 4 4-4\"/><path d=\"M7 20V4\"/><path d=\"M11 4h4\"/><path d=\"M11 8h7\"/><path d=\"M11 12h10\"/>",
  "arrow-down-right": "<path d=\"m7 7 10 10\"/><path d=\"M17 7v10H7\"/>",
  "arrow-down-to-dot": "<path d=\"M12 2v14\"/><path d=\"m19 9-7 7-7-7\"/><circle cx=\"12\" cy=\"21\" r=\"1\"/>",
  "arrow-down-to-line": "<path d=\"M12 17V3\"/><path d=\"m6 11 6 6 6-6\"/><path d=\"M19 21H5\"/>",
  "arrow-down-up": "<path d=\"m3 16 4 4 4-4\"/><path d=\"M7 20V4\"/><path d=\"m21 8-4-4-4 4\"/><path d=\"M17 4v16\"/>",
  "arrow-down-wide-narrow": "<path d=\"m3 16 4 4 4-4\"/><path d=\"M7 20V4\"/><path d=\"M11 4h10\"/><path d=\"M11 8h7\"/><path d=\"M11 12h4\"/>",
  "arrow-down-z-a": "<path d=\"m3 16 4 4 4-4\"/><path d=\"M7 4v16\"/><path d=\"M15 4h5l-5 6h5\"/><path d=\"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20\"/><path d=\"M20 18h-5\"/>",
  "arrow-down": "<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"/><polyline points=\"19 12 12 19 5 12\"/>",
  "arrow-left-from-line": "<path d=\"m9 6-6 6 6 6\"/><path d=\"M3 12h14\"/><path d=\"M21 19V5\"/>",
  "arrow-left-right": "<path d=\"M8 3 4 7l4 4\"/><path d=\"M4 7h16\"/><path d=\"m16 21 4-4-4-4\"/><path d=\"M20 17H4\"/>",
  "arrow-left-to-line": "<path d=\"M3 19V5\"/><path d=\"m13 6-6 6 6 6\"/><path d=\"M7 12h14\"/>",
  "arrow-left": "<line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"/><polyline points=\"12 19 5 12 12 5\"/>",
  "arrow-right-from-line": "<path d=\"M3 5v14\"/><path d=\"M21 12H7\"/><path d=\"m15 18 6-6-6-6\"/>",
  "arrow-right-left": "<path d=\"m16 3 4 4-4 4\"/><path d=\"M20 7H4\"/><path d=\"m8 21-4-4 4-4\"/><path d=\"M4 17h16\"/>",
  "arrow-right-to-line": "<path d=\"M17 12H3\"/><path d=\"m11 18 6-6-6-6\"/><path d=\"M21 5v14\"/>",
  "arrow-right": "<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/><polyline points=\"12 5 19 12 12 19\"/>",
  "arrow-up-0-1": "<path d=\"m3 8 4-4 4 4\"/><path d=\"M7 4v16\"/><rect x=\"15\" y=\"4\" width=\"4\" height=\"6\" ry=\"2\"/><path d=\"M17 20v-6h-2\"/><path d=\"M15 20h4\"/>",
  "arrow-up-1-0": "<path d=\"m3 8 4-4 4 4\"/><path d=\"M7 4v16\"/><path d=\"M17 10V4h-2\"/><path d=\"M15 10h4\"/><rect x=\"15\" y=\"14\" width=\"4\" height=\"6\" ry=\"2\"/>",
  "arrow-up-a-z": "<path d=\"m3 8 4-4 4 4\"/><path d=\"M7 4v16\"/><path d=\"M20 8h-5\"/><path d=\"M15 10V6.5a2.5 2.5 0 0 1 5 0V10\"/><path d=\"M15 14h5l-5 6h5\"/>",
  "arrow-up-down": "<path d=\"m21 16-4 4-4-4\"/><path d=\"M17 20V4\"/><path d=\"m3 8 4-4 4 4\"/><path d=\"M7 4v16\"/>",
  "arrow-up-from-dot": "<path d=\"m5 9 7-7 7 7\"/><path d=\"M12 16V2\"/><circle cx=\"12\" cy=\"21\" r=\"1\"/>",
  "arrow-up-from-line": "<path d=\"m18 9-6-6-6 6\"/><path d=\"M12 3v14\"/><path d=\"M5 21h14\"/>",
  "arrow-up-left": "<path d=\"M7 17V7h10\"/><path d=\"M17 17 7 7\"/>",
  "arrow-up-narrow-wide": "<path d=\"m3 8 4-4 4 4\"/><path d=\"M7 4v16\"/><path d=\"M11 12h4\"/><path d=\"M11 16h7\"/><path d=\"M11 20h10\"/>",
  "arrow-up-right": "<path d=\"M7 7h10v10\"/><path d=\"M7 17 17 7\"/>",
  "arrow-up-to-line": "<path d=\"M5 3h14\"/><path d=\"m18 13-6-6-6 6\"/><path d=\"M12 7v14\"/>",
  "arrow-up-wide-narrow": "<path d=\"m3 8 4-4 4 4\"/><path d=\"M7 4v16\"/><path d=\"M11 12h10\"/><path d=\"M11 16h7\"/><path d=\"M11 20h4\"/>",
  "arrow-up-z-a": "<path d=\"m3 8 4-4 4 4\"/><path d=\"M7 4v16\"/><path d=\"M15 4h5l-5 6h5\"/><path d=\"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20\"/><path d=\"M20 18h-5\"/>",
  "arrow-up": "<line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"/><polyline points=\"5 12 12 5 19 12\"/>",
  "arrows-up-from-line": "<path d=\"m4 6 3-3 3 3\"/><path d=\"M7 17V3\"/><path d=\"m14 6 3-3 3 3\"/><path d=\"M17 17V3\"/><path d=\"M4 21h16\"/>",
  "asterisk": "<path d=\"M12 6v12\"/><path d=\"M17.196 9 6.804 15\"/><path d=\"m6.804 9 10.392 6\"/>",
  "astroid": "<path d=\"M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203\"/>",
  "at-sign": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8\"/>",
  "atom": "<circle cx=\"12\" cy=\"12\" r=\"1\"/><path d=\"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z\"/><path d=\"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z\"/>",
  "audio-lines": "<path d=\"M2 10v3\"/><path d=\"M6 6v11\"/><path d=\"M10 3v18\"/><path d=\"M14 8v7\"/><path d=\"M18 5v13\"/><path d=\"M22 10v3\"/>",
  "audio-waveform": "<path d=\"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2\"/>",
  "award": "<circle cx=\"12\" cy=\"8\" r=\"7\"/><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"/>",
  "axe": "<path d=\"m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9\"/><path d=\"M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z\"/>",
  "axis-3d": "<path d=\"M13.5 10.5 15 9\"/><path d=\"M4 4v15a1 1 0 0 0 1 1h15\"/><path d=\"M4.293 19.707 6 18\"/><path d=\"m9 15 1.5-1.5\"/>",
  "baby": "<path d=\"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5\"/><path d=\"M15 12h.01\"/><path d=\"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1\"/><path d=\"M9 12h.01\"/>",
  "backpack": "<path d=\"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/><path d=\"M8 10h8\"/><path d=\"M8 18h8\"/><path d=\"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6\"/><path d=\"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2\"/>",
  "badge-alert": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"/><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"/>",
  "badge-cent": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><path d=\"M12 7v10\"/><path d=\"M15.4 10a4 4 0 1 0 0 4\"/>",
  "badge-check": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><path d=\"m9 12 2 2 4-4\"/>",
  "badge-dollar-sign": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\"/><path d=\"M12 18V6\"/>",
  "badge-euro": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><path d=\"M7 12h5\"/><path d=\"M15 9.4a4 4 0 1 0 0 5.2\"/>",
  "badge-indian-rupee": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><path d=\"M8 8h8\"/><path d=\"M8 12h8\"/><path d=\"m13 17-5-1h1a4 4 0 0 0 0-8\"/>",
  "badge-info": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><line x1=\"12\" x2=\"12\" y1=\"16\" y2=\"12\"/><line x1=\"12\" x2=\"12.01\" y1=\"8\" y2=\"8\"/>",
  "badge-japanese-yen": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><path d=\"m9 8 3 3v7\"/><path d=\"m12 11 3-3\"/><path d=\"M9 12h6\"/><path d=\"M9 16h6\"/>",
  "badge-minus": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><line x1=\"8\" x2=\"16\" y1=\"12\" y2=\"12\"/>",
  "badge-percent": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><path d=\"m15 9-6 6\"/><path d=\"M9 9h.01\"/><path d=\"M15 15h.01\"/>",
  "badge-plus": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"16\"/><line x1=\"8\" x2=\"16\" y1=\"12\" y2=\"12\"/>",
  "badge-pound-sterling": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><path d=\"M8 12h4\"/><path d=\"M10 16V9.5a2.5 2.5 0 0 1 5 0\"/><path d=\"M8 16h7\"/>",
  "badge-question-mark": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><line x1=\"12\" x2=\"12.01\" y1=\"17\" y2=\"17\"/>",
  "badge-russian-ruble": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><path d=\"M9 16h5\"/><path d=\"M9 12h5a2 2 0 1 0 0-4h-3v9\"/>",
  "badge-swiss-franc": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><path d=\"M11 17V8h4\"/><path d=\"M11 12h3\"/><path d=\"M9 16h4\"/>",
  "badge-turkish-lira": "<path d=\"M11 7v10a5 5 0 0 0 5-5\"/><path d=\"m15 8-6 3\"/><path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76\"/>",
  "badge-x": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/><line x1=\"15\" x2=\"9\" y1=\"9\" y2=\"15\"/><line x1=\"9\" x2=\"15\" y1=\"9\" y2=\"15\"/>",
  "badge": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"/>",
  "baggage-claim": "<path d=\"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2\"/><path d=\"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10\"/><rect width=\"13\" height=\"8\" x=\"8\" y=\"6\" rx=\"1\"/><circle cx=\"18\" cy=\"20\" r=\"2\"/><circle cx=\"9\" cy=\"20\" r=\"2\"/>",
  "balloon": "<path d=\"M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1\"/><path d=\"M12 6a2 2 0 0 1 2 2\"/><path d=\"M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0\"/>",
  "ban": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M4.929 4.929 19.07 19.071\"/>",
  "banana": "<path d=\"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5\"/><path d=\"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z\"/>",
  "bandage": "<path d=\"M10 10.01h.01\"/><path d=\"M10 14.01h.01\"/><path d=\"M14 10.01h.01\"/><path d=\"M14 14.01h.01\"/><path d=\"M18 6v12\"/><path d=\"M6 6v12\"/><rect x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"/>",
  "banknote-arrow-down": "<path d=\"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5\"/><path d=\"m16 19 3 3 3-3\"/><path d=\"M18 12h.01\"/><path d=\"M19 16v6\"/><path d=\"M6 12h.01\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>",
  "banknote-arrow-up": "<path d=\"M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5\"/><path d=\"M18 12h.01\"/><path d=\"M19 22v-6\"/><path d=\"m22 19-3-3-3 3\"/><path d=\"M6 12h.01\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>",
  "banknote-check": "<path d=\"M11.748 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.875\"/><path d=\"m16 19 2 2 4-4\"/><path d=\"M18 12h.01\"/><path d=\"M6 12h.01\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>",
  "banknote-x": "<path d=\"M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5\"/><path d=\"m17 17 5 5\"/><path d=\"M18 12h.01\"/><path d=\"m22 17-5 5\"/><path d=\"M6 12h.01\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>",
  "banknote": "<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M6 12h.01M18 12h.01\"/>",
  "barcode": "<path d=\"M3 5v14\"/><path d=\"M8 5v14\"/><path d=\"M12 5v14\"/><path d=\"M17 5v14\"/><path d=\"M21 5v14\"/>",
  "barrel": "<path d=\"M10 3a41 41 0 0 0 0 18\"/><path d=\"M14 3a41 41 0 0 1 0 18\"/><path d=\"M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z\"/><path d=\"M3.84 17h16.32\"/><path d=\"M3.84 7h16.32\"/>",
  "baseline": "<path d=\"M4 20h16\"/><path d=\"m6 16 6-12 6 12\"/><path d=\"M8 12h8\"/>",
  "bath": "<path d=\"M10 4 8 6\"/><path d=\"M17 19v2\"/><path d=\"M2 12h20\"/><path d=\"M7 19v2\"/><path d=\"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5\"/>",
  "battery-charging": "<path d=\"m11 7-3 5h4l-3 5\"/><path d=\"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935\"/><path d=\"M22 14v-4\"/><path d=\"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936\"/>",
  "battery-full": "<path d=\"M10 10v4\"/><path d=\"M14 10v4\"/><path d=\"M22 14v-4\"/><path d=\"M6 10v4\"/><rect x=\"2\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\"/>",
  "battery-low": "<path d=\"M22 14v-4\"/><path d=\"M6 14v-4\"/><rect x=\"2\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\"/>",
  "battery-medium": "<path d=\"M10 14v-4\"/><path d=\"M22 14v-4\"/><path d=\"M6 14v-4\"/><rect x=\"2\" y=\"6\" width=\"16\" height=\"12\" rx=\"2\"/>",
  "battery-plus": "<path d=\"M10 9v6\"/><path d=\"M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605\"/><path d=\"M22 14v-4\"/><path d=\"M7 12h6\"/><path d=\"M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606\"/>",
  "battery-warning": "<path d=\"M10 17h.01\"/><path d=\"M10 7v6\"/><path d=\"M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2\"/><path d=\"M22 14v-4\"/><path d=\"M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2\"/>",
  "battery": "<rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"/><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"/>",
  "beaker": "<path d=\"M4.5 3h15\"/><path d=\"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3\"/><path d=\"M6 14h12\"/>",
  "bean-off": "<path d=\"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1\"/><path d=\"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66\"/><path d=\"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
  "bean": "<path d=\"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z\"/><path d=\"M5.341 10.62a4 4 0 1 0 5.279-5.28\"/>",
  "bed-double": "<path d=\"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8\"/><path d=\"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4\"/><path d=\"M12 4v6\"/><path d=\"M2 18h20\"/>",
  "bed-single": "<path d=\"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8\"/><path d=\"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4\"/><path d=\"M3 18h18\"/>",
  "bed": "<path d=\"M2 4v16\"/><path d=\"M2 8h18a2 2 0 0 1 2 2v10\"/><path d=\"M2 17h20\"/><path d=\"M6 8v9\"/>",
  "beef-off": "<path d=\"M11.771 6.109a2.5 2.5 0 0 1 3.12 3.12\"/><path d=\"M17.852 12.185a6.5 6.5 0 0 0-9.035-9.04\"/><path d=\"M18.013 18.013C15.029 20.349 10.831 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5\"/><path d=\"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-.139 4.393\"/><path d=\"m2 2 20 20\"/><path d=\"M6.355 6.37a7 7 0 0 0-.075.23c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.356 0 6.993-1.267 9.85-3.151\"/>",
  "beef": "<path d=\"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3\"/><path d=\"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5\"/><circle cx=\"12.5\" cy=\"8.5\" r=\"2.5\"/>",
  "beer-off": "<path d=\"M13 13v5\"/><path d=\"M17 11.47V8\"/><path d=\"M17 11h1a3 3 0 0 1 2.745 4.211\"/><path d=\"m2 2 20 20\"/><path d=\"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3\"/><path d=\"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268\"/><path d=\"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12\"/><path d=\"M9 14.6V18\"/>",
  "beer": "<path d=\"M17 11h1a3 3 0 0 1 0 6h-1\"/><path d=\"M9 12v6\"/><path d=\"M13 12v6\"/><path d=\"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z\"/><path d=\"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8\"/>",
  "bell-check": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/><path d=\"m15 8 2 2 4-4\"/><path d=\"M16.8607 4.4824A6 6 0 0 0 6 8C6 12.499 4.589 13.956 3.262 15.326\"/><path d=\"M3.262 15.326A1 1 0 0 0 4 17H20A1 1 0 0 0 20.74 15.327C20.209 14.779 19.665 14.218 19.203 13.454\"/>",
  "bell-dot": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/><path d=\"M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348\"/><circle cx=\"18\" cy=\"5\" r=\"3\"/>",
  "bell-electric": "<path d=\"M18.518 17.347A7 7 0 0 1 14 19\"/><path d=\"M18.8 4A11 11 0 0 1 20 9\"/><path d=\"M9 9h.01\"/><circle cx=\"20\" cy=\"16\" r=\"2\"/><circle cx=\"9\" cy=\"9\" r=\"7\"/><rect x=\"4\" y=\"16\" width=\"10\" height=\"6\" rx=\"2\"/>",
  "bell-minus": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/><path d=\"M15 8h6\"/><path d=\"M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12\"/>",
  "bell-off": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/><path d=\"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742\"/><path d=\"m2 2 20 20\"/><path d=\"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05\"/>",
  "bell-plus": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/><path d=\"M15 8h6\"/><path d=\"M18 5v6\"/><path d=\"M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332\"/>",
  "bell-ring": "<path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/><path d=\"M22 8c0-2.3-.8-4.3-2-6\"/><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"/><path d=\"M4 2C2.8 3.7 2 5.7 2 8\"/>",
  "bell": "<path d=\"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9\"/><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"/>",
  "between-horizontal-end": "<rect width=\"13\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><path d=\"m22 15-3-3 3-3\"/><rect width=\"13\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/>",
  "between-horizontal-start": "<rect width=\"13\" height=\"7\" x=\"8\" y=\"3\" rx=\"1\"/><path d=\"m2 9 3 3-3 3\"/><rect width=\"13\" height=\"7\" x=\"8\" y=\"14\" rx=\"1\"/>",
  "between-vertical-end": "<rect width=\"7\" height=\"13\" x=\"3\" y=\"3\" rx=\"1\"/><path d=\"m9 22 3-3 3 3\"/><rect width=\"7\" height=\"13\" x=\"14\" y=\"3\" rx=\"1\"/>",
  "between-vertical-start": "<rect width=\"7\" height=\"13\" x=\"3\" y=\"8\" rx=\"1\"/><path d=\"m15 2-3 3-3-3\"/><rect width=\"7\" height=\"13\" x=\"14\" y=\"8\" rx=\"1\"/>",
  "biceps-flexed": "<path d=\"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1\"/><path d=\"M15 14a5 5 0 0 0-7.584 2\"/><path d=\"M9.964 6.825C8.019 7.977 9.5 13 8 15\"/>",
  "bike": "<circle cx=\"18.5\" cy=\"17.5\" r=\"3.5\"/><circle cx=\"5.5\" cy=\"17.5\" r=\"3.5\"/><circle cx=\"15\" cy=\"5\" r=\"1\"/><path d=\"M12 17.5V14l-3-3 4-3 2 3h2\"/>",
  "binary": "<rect x=\"14\" y=\"14\" width=\"4\" height=\"6\" rx=\"2\"/><rect x=\"6\" y=\"4\" width=\"4\" height=\"6\" rx=\"2\"/><path d=\"M6 20h4\"/><path d=\"M14 10h4\"/><path d=\"M6 14h2v6\"/><path d=\"M14 4h2v6\"/>",
  "binoculars": "<path d=\"M10 10h4\"/><path d=\"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3\"/><path d=\"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z\"/><path d=\"M 22 16 L 2 16\"/><path d=\"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z\"/><path d=\"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3\"/>",
  "biohazard": "<circle cx=\"12\" cy=\"11.9\" r=\"2\"/><path d=\"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6\"/><path d=\"m8.9 10.1 1.4.8\"/><path d=\"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5\"/><path d=\"m15.1 10.1-1.4.8\"/><path d=\"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2\"/><path d=\"M12 13.9v1.6\"/><path d=\"M13.5 5.4c-1-.2-2-.2-3 0\"/><path d=\"M17 16.4c.7-.7 1.2-1.6 1.5-2.5\"/><path d=\"M5.5 13.9c.3.9.8 1.8 1.5 2.5\"/>",
  "bird": "<path d=\"M16 7h.01\"/><path d=\"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20\"/><path d=\"m20 7 2 .5-2 .5\"/><path d=\"M10 18v3\"/><path d=\"M14 17.75V21\"/><path d=\"M7 18a6 6 0 0 0 3.84-10.61\"/>",
  "birdhouse": "<path d=\"M12 18v4\"/><path d=\"m17 18 1.956-11.468\"/><path d=\"m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8\"/><path d=\"M4 18h16\"/><path d=\"M7 18 5.044 6.532\"/><circle cx=\"12\" cy=\"10\" r=\"2\"/>",
  "bitcoin": "<path d=\"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727\"/>",
  "blend": "<circle cx=\"9\" cy=\"9\" r=\"7\"/><circle cx=\"15\" cy=\"15\" r=\"7\"/>",
  "blender": "<path d=\"M8 14a2 2 0 0 0-1.963 1.615l-1.018 5.193A1 1 0 0 0 6 22h12a1 1 0 0 0 .981-1.192l-1.018-5.193A2 2 0 0 0 16 14z\"/><path d=\"m17 2-1 12\"/><path d=\"M8.006 14 7 2\"/><path d=\"M7.565 8.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75\"/><path d=\"M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5\"/><path d=\"M12 18h.01\"/>",
  "blinds": "<path d=\"M3 3h18\"/><path d=\"M20 7H8\"/><path d=\"M20 11H8\"/><path d=\"M10 19h10\"/><path d=\"M8 15h12\"/><path d=\"M4 3v14\"/><circle cx=\"4\" cy=\"19\" r=\"2\"/>",
  "blocks": "<path d=\"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2\"/><rect x=\"14\" y=\"2\" width=\"8\" height=\"8\" rx=\"1\"/>",
  "bluetooth-connected": "<path d=\"m7 7 10 10-5 5V2l5 5L7 17\"/><line x1=\"18\" x2=\"21\" y1=\"12\" y2=\"12\"/><line x1=\"3\" x2=\"6\" y1=\"12\" y2=\"12\"/>",
  "bluetooth-off": "<path d=\"m17 17-5 5V12l-5 5\"/><path d=\"m2 2 20 20\"/><path d=\"M14.5 9.5 17 7l-5-5v4.5\"/>",
  "bluetooth-searching": "<path d=\"m7 7 10 10-5 5V2l5 5L7 17\"/><path d=\"M20.83 14.83a4 4 0 0 0 0-5.66\"/><path d=\"M18 12h.01\"/>",
  "bluetooth": "<path d=\"m7 7 10 10-5 5V2l5 5L7 17\"/>",
  "bold": "<path d=\"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8\"/>",
  "bolt": "<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/>",
  "bomb": "<circle cx=\"11\" cy=\"13\" r=\"9\"/><path d=\"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95\"/><path d=\"m22 2-1.5 1.5\"/>",
  "bone-fracture": "<path d=\"M14 4.5a1 1 0 0 1 5 0 .5.5 0 0 0 .5.5 1 1 0 0 1 0 5c-.81 0-1.8-.7-2.5 0l-1.958 1.957a.15.15 0 0 1-.252-.072l-.493-2.07a.15.15 0 0 0-.111-.112l-2.072-.494a.15.15 0 0 1-.072-.252L14 7c.7-.7 0-1.69 0-2.5\"/><path d=\"m16 20-1-2\"/><path d=\"m20 16-2-1\"/><path d=\"m4 8 2 1\"/><path d=\"m8 4 1 2\"/><path d=\"M9.698 14.19a.15.15 0 0 0 .112.112l2.074.489a.15.15 0 0 1 .072.252L10 17c-.7.7 0 1.69 0 2.5a1 1 0 0 1-5 0 .495.495 0 0 0-.5-.5 1 1 0 0 1 0-5c.81 0 1.8.7 2.5 0l1.956-1.957a.15.15 0 0 1 .252.072z\"/>",
  "bone": "<path d=\"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z\"/>",
  "book-a": "<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"m8 13 4-7 4 7\"/><path d=\"M9.1 11h5.7\"/>",
  "book-alert": "<path d=\"M12 13h.01\"/><path d=\"M12 6v3\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/>",
  "book-audio": "<path d=\"M12 6v7\"/><path d=\"M16 8v3\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M8 8v3\"/>",
  "book-check": "<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"m9 9.5 2 2 4-4\"/>",
  "book-copy": "<path d=\"M5 7a2 2 0 0 0-2 2v11\"/><path d=\"M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21\"/><path d=\"M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10\"/>",
  "book-dashed": "<path d=\"M12 17h1.5\"/><path d=\"M12 22h1.5\"/><path d=\"M12 2h1.5\"/><path d=\"M17.5 22H19a1 1 0 0 0 1-1\"/><path d=\"M17.5 2H19a1 1 0 0 1 1 1v1.5\"/><path d=\"M20 14v3h-2.5\"/><path d=\"M20 8.5V10\"/><path d=\"M4 10V8.5\"/><path d=\"M4 19.5V14\"/><path d=\"M4 4.5A2.5 2.5 0 0 1 6.5 2H8\"/><path d=\"M8 22H6.5a1 1 0 0 1 0-5H8\"/>",
  "book-down": "<path d=\"M12 13V7\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"m9 10 3 3 3-3\"/>",
  "book-headphones": "<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M8 12v-2a4 4 0 0 1 8 0v2\"/><circle cx=\"15\" cy=\"12\" r=\"1\"/><circle cx=\"9\" cy=\"12\" r=\"1\"/>",
  "book-heart": "<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z\"/>",
  "book-image": "<path d=\"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><circle cx=\"10\" cy=\"8\" r=\"2\"/>",
  "book-key": "<path d=\"M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15\"/><path d=\"M17 2v6\"/><path d=\"M17 4h2\"/><path d=\"M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><circle cx=\"17\" cy=\"10\" r=\"2\"/>",
  "book-lock": "<path d=\"M18 6V4a2 2 0 1 0-4 0v2\"/><path d=\"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10\"/><rect x=\"12\" y=\"6\" width=\"8\" height=\"5\" rx=\"1\"/>",
  "book-marked": "<path d=\"M10 2v8l3-3 3 3V2\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/>",
  "book-minus": "<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M9 10h6\"/>",
  "book-open-check": "<path d=\"M12 21V7\"/><path d=\"m16 12 2 2 4-4\"/><path d=\"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3\"/>",
  "book-open-text": "<path d=\"M12 7v14\"/><path d=\"M16 12h2\"/><path d=\"M16 8h2\"/><path d=\"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z\"/><path d=\"M6 12h2\"/><path d=\"M6 8h2\"/>",
  "book-open": "<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"/><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"/>",
  "book-plus": "<path d=\"M12 7v6\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M9 10h6\"/>",
  "book-search": "<path d=\"M11 22H5.5a1 1 0 0 1 0-5h4.501\"/><path d=\"m21 22-1.879-1.878\"/><path d=\"M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8\"/><circle cx=\"17\" cy=\"18\" r=\"3\"/>",
  "book-text": "<path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M8 11h8\"/><path d=\"M8 7h6\"/>",
  "book-type": "<path d=\"M10 13h4\"/><path d=\"M12 6v7\"/><path d=\"M16 8V6H8v2\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/>",
  "book-up-2": "<path d=\"M12 13V7\"/><path d=\"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2\"/><path d=\"m9 10 3-3 3 3\"/><path d=\"m9 5 3-3 3 3\"/>",
  "book-up": "<path d=\"M12 13V7\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"m9 10 3-3 3 3\"/>",
  "book-user": "<path d=\"M15 13a3 3 0 1 0-6 0\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><circle cx=\"12\" cy=\"8\" r=\"2\"/>",
  "book-x": "<path d=\"m14.5 7-5 5\"/><path d=\"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20\"/><path d=\"m9.5 7 5 5\"/>",
  "book": "<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"/><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"/>",
  "bookmark-check": "<path d=\"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z\"/><path d=\"m9 10 2 2 4-4\"/>",
  "bookmark-minus": "<path d=\"M15 10H9\"/><path d=\"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z\"/>",
  "bookmark-off": "<path d=\"M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5\"/><path d=\"m2 2 20 20\"/><path d=\"M8.656 3H17a2 2 0 0 1 2 2v8.344\"/>",
  "bookmark-plus": "<path d=\"M12 7v6\"/><path d=\"M15 10H9\"/><path d=\"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z\"/>",
  "bookmark-x": "<path d=\"m14.5 7.5-5 5\"/><path d=\"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z\"/><path d=\"m9.5 7.5 5 5\"/>",
  "bookmark": "<path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"/>",
  "boom-box": "<path d=\"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4\"/><path d=\"M8 8v1\"/><path d=\"M12 8v1\"/><path d=\"M16 8v1\"/><rect width=\"20\" height=\"12\" x=\"2\" y=\"9\" rx=\"2\"/><circle cx=\"8\" cy=\"15\" r=\"2\"/><circle cx=\"16\" cy=\"15\" r=\"2\"/>",
  "bot-message-square": "<path d=\"M12 6V2H8\"/><path d=\"M15 11v2\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z\"/><path d=\"M9 11v2\"/>",
  "bot-off": "<path d=\"M13.67 8H18a2 2 0 0 1 2 2v4.33\"/><path d=\"M2 14h2\"/><path d=\"M20 14h2\"/><path d=\"M22 22 2 2\"/><path d=\"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586\"/><path d=\"M9 13v2\"/><path d=\"M9.67 4H12v2.33\"/>",
  "bot": "<path d=\"M12 8V4H8\"/><rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\"/><path d=\"M2 14h2\"/><path d=\"M20 14h2\"/><path d=\"M15 13v2\"/><path d=\"M9 13v2\"/>",
  "bottle-wine": "<path d=\"M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z\"/><path d=\"M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4\"/>",
  "bow-arrow": "<path d=\"M17 3h4v4\"/><path d=\"M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17\"/><path d=\"M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05\"/><path d=\"M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z\"/><path d=\"M9.707 14.293 21 3\"/>",
  "box": "<path d=\"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z\"/><path d=\"m3.3 7 8.7 5 8.7-5\"/><path d=\"M12 22V12\"/>",
  "boxes": "<path d=\"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z\"/><path d=\"m7 16.5-4.74-2.85\"/><path d=\"m7 16.5 5-3\"/><path d=\"M7 16.5v5.17\"/><path d=\"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z\"/><path d=\"m17 16.5-5-3\"/><path d=\"m17 16.5 4.74-2.85\"/><path d=\"M17 16.5v5.17\"/><path d=\"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z\"/><path d=\"M12 8 7.26 5.15\"/><path d=\"m12 8 4.74-2.85\"/><path d=\"M12 13.5V8\"/>",
  "braces": "<path d=\"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1\"/><path d=\"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1\"/>",
  "brackets": "<path d=\"M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3\"/><path d=\"M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3\"/>",
  "brain-circuit": "<path d=\"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z\"/><path d=\"M9 13a4.5 4.5 0 0 0 3-4\"/><path d=\"M6.003 5.125A3 3 0 0 0 6.401 6.5\"/><path d=\"M3.477 10.896a4 4 0 0 1 .585-.396\"/><path d=\"M6 18a4 4 0 0 1-1.967-.516\"/><path d=\"M12 13h4\"/><path d=\"M12 18h6a2 2 0 0 1 2 2v1\"/><path d=\"M12 8h8\"/><path d=\"M16 8V5a2 2 0 0 1 2-2\"/><circle cx=\"16\" cy=\"13\" r=\".5\"/><circle cx=\"18\" cy=\"3\" r=\".5\"/><circle cx=\"20\" cy=\"21\" r=\".5\"/><circle cx=\"20\" cy=\"8\" r=\".5\"/>",
  "brain-cog": "<path d=\"m10.852 14.772-.383.923\"/><path d=\"m10.852 9.228-.383-.923\"/><path d=\"m13.148 14.772.382.924\"/><path d=\"m13.531 8.305-.383.923\"/><path d=\"m14.772 10.852.923-.383\"/><path d=\"m14.772 13.148.923.383\"/><path d=\"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771\"/><path d=\"M17.998 5.125a4 4 0 0 1 2.525 5.771\"/><path d=\"M19.505 10.294a4 4 0 0 1-1.5 7.706\"/><path d=\"M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516\"/><path d=\"M4.5 10.291A4 4 0 0 0 6 18\"/><path d=\"M6.002 5.125a3 3 0 0 0 .4 1.375\"/><path d=\"m9.228 10.852-.923-.383\"/><path d=\"m9.228 13.148-.923.383\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
  "brain": "<path d=\"M12 18V5\"/><path d=\"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4\"/><path d=\"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5\"/><path d=\"M17.997 5.125a4 4 0 0 1 2.526 5.77\"/><path d=\"M18 18a4 4 0 0 0 2-7.464\"/><path d=\"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517\"/><path d=\"M6 18a4 4 0 0 1-2-7.464\"/><path d=\"M6.003 5.125a4 4 0 0 0-2.526 5.77\"/>",
  "brick-wall-fire": "<path d=\"M16 3v2.107\"/><path d=\"M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9\"/><path d=\"M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938\"/><path d=\"M3 15h5.253\"/><path d=\"M3 9h8.228\"/><path d=\"M8 15v6\"/><path d=\"M8 3v6\"/>",
  "brick-wall-shield": "<path d=\"M12 9v1.258\"/><path d=\"M16 3v5.46\"/><path d=\"M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75\"/><path d=\"M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z\"/><path d=\"M3 15h7\"/><path d=\"M3 9h12.142\"/><path d=\"M8 15v6\"/><path d=\"M8 3v6\"/>",
  "brick-wall": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 9v6\"/><path d=\"M16 15v6\"/><path d=\"M16 3v6\"/><path d=\"M3 15h18\"/><path d=\"M3 9h18\"/><path d=\"M8 15v6\"/><path d=\"M8 3v6\"/>",
  "briefcase-business": "<path d=\"M12 12h.01\"/><path d=\"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2\"/><path d=\"M22 13a18.15 18.15 0 0 1-20 0\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"/>",
  "briefcase-conveyor-belt": "<path d=\"M10 20v2\"/><path d=\"M14 20v2\"/><path d=\"M18 20v2\"/><path d=\"M21 20H3\"/><path d=\"M6 20v2\"/><path d=\"M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12\"/><rect x=\"4\" y=\"6\" width=\"16\" height=\"10\" rx=\"2\"/>",
  "briefcase-medical": "<path d=\"M12 11v4\"/><path d=\"M14 13h-4\"/><path d=\"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2\"/><path d=\"M18 6v14\"/><path d=\"M6 6v14\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\"/>",
  "briefcase": "<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"/><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"/>",
  "bring-to-front": "<rect x=\"8\" y=\"8\" width=\"8\" height=\"8\" rx=\"2\"/><path d=\"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2\"/><path d=\"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2\"/>",
  "broccoli": "<path d=\"M10 13a3 3 0 0 1-2.121-5.121\"/><path d=\"M15.606 14.204c-3.5 1.5-5.899 4.503-8.899 7.503A1 1 0 0 1 6 22c-2 0-4-2-4-4a1 1 0 0 1 .293-.707c1.911-1.911 3.823-3.578 5.347-5.441\"/><path d=\"M16.573 14.737A4 4 0 0 1 14 11\"/><path d=\"M7.14 10.907a4 4 0 1 1 2.756-7.43A4 4 0 0 1 16.7 4.48a2 2 0 0 1 2.82 2.82 4 4 0 0 1 1.002 6.805A4 4 0 1 1 13 16\"/>",
  "brush-cleaning": "<path d=\"m16 22-1-4\"/><path d=\"M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1\"/><path d=\"M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z\"/><path d=\"m8 22 1-4\"/>",
  "brush": "<path d=\"M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08\"/><path d=\"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z\"/>",
  "bubbles": "<path d=\"M7.001 15.085A1.5 1.5 0 0 1 9 16.5\"/><circle cx=\"18.5\" cy=\"8.5\" r=\"3.5\"/><circle cx=\"7.5\" cy=\"16.5\" r=\"5.5\"/><circle cx=\"7.5\" cy=\"4.5\" r=\"2.5\"/>",
  "bug-off": "<path d=\"M12 20v-8\"/><path d=\"M12.656 7H14a4 4 0 0 1 4 4v1.344\"/><path d=\"M14.12 3.88 16 2\"/><path d=\"M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287\"/><path d=\"m2 2 20 20\"/><path d=\"M21 5a4 4 0 0 1-3.55 3.97\"/><path d=\"M22 13h-3.344\"/><path d=\"M3 21a4 4 0 0 1 3.81-4\"/><path d=\"M3 5a4 4 0 0 0 3.55 3.97\"/><path d=\"M6 13H2\"/><path d=\"m8 2 1.88 1.88\"/><path d=\"M9.712 4.06A3 3 0 0 1 15 6v1.13\"/>",
  "bug-play": "<path d=\"M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97\"/><path d=\"M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z\"/><path d=\"M14.12 3.88 16 2\"/><path d=\"M21 5a4 4 0 0 1-3.55 3.97\"/><path d=\"M3 21a4 4 0 0 1 3.81-4\"/><path d=\"M3 5a4 4 0 0 0 3.55 3.97\"/><path d=\"M6 13H2\"/><path d=\"m8 2 1.88 1.88\"/><path d=\"M9 7.13V6a3 3 0 1 1 6 0v1.13\"/>",
  "bug": "<path d=\"M12 20v-9\"/><path d=\"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z\"/><path d=\"M14.12 3.88 16 2\"/><path d=\"M21 21a4 4 0 0 0-3.81-4\"/><path d=\"M21 5a4 4 0 0 1-3.55 3.97\"/><path d=\"M22 13h-4\"/><path d=\"M3 21a4 4 0 0 1 3.81-4\"/><path d=\"M3 5a4 4 0 0 0 3.55 3.97\"/><path d=\"M6 13H2\"/><path d=\"m8 2 1.88 1.88\"/><path d=\"M9 7.13V6a3 3 0 1 1 6 0v1.13\"/>",
  "building-2": "<path d=\"M10 12h4\"/><path d=\"M10 8h4\"/><path d=\"M14 21v-3a2 2 0 0 0-4 0v3\"/><path d=\"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2\"/><path d=\"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16\"/>",
  "building": "<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\"/><path d=\"M9 22v-4h6v4\"/><line x1=\"8\" y1=\"6\" x2=\"8.01\" y2=\"6\"/><line x1=\"12\" y1=\"6\" x2=\"12.01\" y2=\"6\"/><line x1=\"16\" y1=\"6\" x2=\"16.01\" y2=\"6\"/><line x1=\"8\" y1=\"10\" x2=\"8.01\" y2=\"10\"/><line x1=\"12\" y1=\"10\" x2=\"12.01\" y2=\"10\"/><line x1=\"16\" y1=\"10\" x2=\"16.01\" y2=\"10\"/>",
  "bus-front": "<path d=\"M4 6 2 7\"/><path d=\"M10 6h4\"/><path d=\"m22 7-2-1\"/><rect width=\"16\" height=\"16\" x=\"4\" y=\"3\" rx=\"2\"/><path d=\"M4 11h16\"/><path d=\"M8 15h.01\"/><path d=\"M16 15h.01\"/><path d=\"M6 19v2\"/><path d=\"M18 21v-2\"/>",
  "bus": "<path d=\"M8 6v6\"/><path d=\"M15 6v6\"/><path d=\"M2 12h19.6\"/><path d=\"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/><path d=\"M9 18h5\"/><circle cx=\"16\" cy=\"18\" r=\"2\"/>",
  "cable-car": "<path d=\"M10 3h.01\"/><path d=\"M14 2h.01\"/><path d=\"m2 9 20-5\"/><path d=\"M12 12V6.5\"/><rect width=\"16\" height=\"10\" x=\"4\" y=\"12\" rx=\"3\"/><path d=\"M9 12v5\"/><path d=\"M15 12v5\"/><path d=\"M4 17h16\"/>",
  "cable": "<path d=\"M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z\"/><path d=\"M17 21v-2\"/><path d=\"M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10\"/><path d=\"M21 21v-2\"/><path d=\"M3 5V3\"/><path d=\"M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z\"/><path d=\"M7 5V3\"/>",
  "cake-slice": "<path d=\"M16 13H3\"/><path d=\"M16 17H3\"/><path d=\"m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6\"/><circle cx=\"9\" cy=\"7\" r=\"2\"/>",
  "cake": "<path d=\"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8\"/><path d=\"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1\"/><path d=\"M2 21h20\"/><path d=\"M7 8v3\"/><path d=\"M12 8v3\"/><path d=\"M17 8v3\"/><path d=\"M7 4h.01\"/><path d=\"M12 4h.01\"/><path d=\"M17 4h.01\"/>",
  "calculator": "<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><line x1=\"8\" x2=\"16\" y1=\"6\" y2=\"6\"/><line x1=\"16\" x2=\"16\" y1=\"14\" y2=\"18\"/><path d=\"M16 10h.01\"/><path d=\"M12 10h.01\"/><path d=\"M8 10h.01\"/><path d=\"M12 14h.01\"/><path d=\"M8 14h.01\"/><path d=\"M12 18h.01\"/><path d=\"M8 18h.01\"/>",
  "calendar-1": "<path d=\"M11 14h1v4\"/><path d=\"M16 2v4\"/><path d=\"M3 10h18\"/><path d=\"M8 2v4\"/><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "calendar-arrow-down": "<path d=\"m14 18 4 4 4-4\"/><path d=\"M16 2v4\"/><path d=\"M18 14v8\"/><path d=\"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343\"/><path d=\"M3 10h18\"/><path d=\"M8 2v4\"/>",
  "calendar-arrow-up": "<path d=\"m14 18 4-4 4 4\"/><path d=\"M16 2v4\"/><path d=\"M18 22v-8\"/><path d=\"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9\"/><path d=\"M3 10h18\"/><path d=\"M8 2v4\"/>",
  "calendar-check-2": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><path d=\"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8\"/><path d=\"M3 10h18\"/><path d=\"m16 20 2 2 4-4\"/>",
  "calendar-check": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/><path d=\"m9 16 2 2 4-4\"/>",
  "calendar-clock": "<path d=\"M16 14v2.2l1.6 1\"/><path d=\"M16 2v4\"/><path d=\"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5\"/><path d=\"M3 10h5\"/><path d=\"M8 2v4\"/><circle cx=\"16\" cy=\"16\" r=\"6\"/>",
  "calendar-cog": "<path d=\"m15.228 16.852-.923-.383\"/><path d=\"m15.228 19.148-.923.383\"/><path d=\"M16 2v4\"/><path d=\"m16.47 14.305.382.923\"/><path d=\"m16.852 20.772-.383.924\"/><path d=\"m19.148 15.228.383-.923\"/><path d=\"m19.53 21.696-.382-.924\"/><path d=\"m20.772 16.852.924-.383\"/><path d=\"m20.772 19.148.924.383\"/><path d=\"M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6\"/><path d=\"M3 10h18\"/><path d=\"M8 2v4\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/>",
  "calendar-days": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/><path d=\"M8 14h.01\"/><path d=\"M12 14h.01\"/><path d=\"M16 14h.01\"/><path d=\"M8 18h.01\"/><path d=\"M12 18h.01\"/><path d=\"M16 18h.01\"/>",
  "calendar-fold": "<path d=\"M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z\"/><path d=\"M15 22v-5a1 1 0 0 1 1-1h5\"/><path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><path d=\"M3 10h18\"/>",
  "calendar-heart": "<path d=\"M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125\"/><path d=\"M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z\"/><path d=\"M16 2v4\"/><path d=\"M3 10h18\"/><path d=\"M8 2v4\"/>",
  "calendar-minus-2": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/><path d=\"M10 16h4\"/>",
  "calendar-minus": "<path d=\"M16 19h6\"/><path d=\"M16 2v4\"/><path d=\"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5\"/><path d=\"M3 10h18\"/><path d=\"M8 2v4\"/>",
  "calendar-off": "<path d=\"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18\"/><path d=\"M21 15.5V6a2 2 0 0 0-2-2H9.5\"/><path d=\"M16 2v4\"/><path d=\"M3 10h7\"/><path d=\"M21 10h-5.5\"/><path d=\"m2 2 20 20\"/>",
  "calendar-plus-2": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/><path d=\"M10 16h4\"/><path d=\"M12 14v4\"/>",
  "calendar-plus": "<path d=\"M16 19h6\"/><path d=\"M16 2v4\"/><path d=\"M19 16v6\"/><path d=\"M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5\"/><path d=\"M3 10h18\"/><path d=\"M8 2v4\"/>",
  "calendar-range": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M16 2v4\"/><path d=\"M3 10h18\"/><path d=\"M8 2v4\"/><path d=\"M17 14h-6\"/><path d=\"M13 18H7\"/><path d=\"M7 14h.01\"/><path d=\"M17 18h.01\"/>",
  "calendar-search": "<path d=\"M16 2v4\"/><path d=\"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25\"/><path d=\"m22 22-1.875-1.875\"/><path d=\"M3 10h18\"/><path d=\"M8 2v4\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/>",
  "calendar-sync": "<path d=\"M11 10v4h4\"/><path d=\"m11 14 1.535-1.605a5 5 0 0 1 8 1.5\"/><path d=\"M16 2v4\"/><path d=\"m21 18-1.535 1.605a5 5 0 0 1-8-1.5\"/><path d=\"M21 22v-4h-4\"/><path d=\"M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3\"/><path d=\"M3 10h4\"/><path d=\"M8 2v4\"/>",
  "calendar-x-2": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><path d=\"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8\"/><path d=\"M3 10h18\"/><path d=\"m17 22 5-5\"/><path d=\"m17 17 5 5\"/>",
  "calendar-x": "<path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/><path d=\"m14 14-4 4\"/><path d=\"m10 14 4 4\"/>",
  "calendar": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"/><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"/>",
  "calendars": "<path d=\"M12 2v2\"/><path d=\"M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2\"/><path d=\"M18 2v2\"/><path d=\"M2 13h2\"/><path d=\"M8 8h14\"/><rect x=\"8\" y=\"3\" width=\"14\" height=\"14\" rx=\"2\"/>",
  "camera-off": "<path d=\"M14.564 14.558a3 3 0 1 1-4.122-4.121\"/><path d=\"m2 2 20 20\"/><path d=\"M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175\"/><path d=\"M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344\"/>",
  "camera": "<path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"/><circle cx=\"12\" cy=\"13\" r=\"4\"/>",
  "candy-cane": "<path d=\"m10.8 5 2.111 4.223\"/><path d=\"M17.75 7 15 2.1\"/><path d=\"m4.874 14.647 2.12 4.24\"/><path d=\"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2z\"/><path d=\"m7.906 9.712 2.005 4.411\"/>",
  "candy-off": "<path d=\"M10 10v7.9\"/><path d=\"M11.802 6.145a5 5 0 0 1 6.053 6.053\"/><path d=\"M14 6.1v2.243\"/><path d=\"m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965\"/><path d=\"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4\"/><path d=\"m2 2 20 20\"/><path d=\"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4\"/>",
  "candy": "<path d=\"M10 7v10.9\"/><path d=\"M14 6.1V17\"/><path d=\"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4\"/><path d=\"M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07\"/><path d=\"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4\"/>",
  "cannabis-off": "<path d=\"M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5\"/><path d=\"M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9\"/><path d=\"M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684\"/><path d=\"m2 2 20 20\"/><path d=\"M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907\"/><path d=\"M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3\"/>",
  "cannabis": "<path d=\"M12 22v-4\"/><path d=\"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6\"/>",
  "captions-off": "<path d=\"M10.5 5H19a2 2 0 0 1 2 2v8.5\"/><path d=\"M17 11h-.5\"/><path d=\"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2\"/><path d=\"m2 2 20 20\"/><path d=\"M7 11h4\"/><path d=\"M7 15h2.5\"/>",
  "captions": "<rect width=\"18\" height=\"14\" x=\"3\" y=\"5\" rx=\"2\" ry=\"2\"/><path d=\"M7 15h4M15 15h2M7 11h2M13 11h4\"/>",
  "car-front": "<path d=\"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8\"/><path d=\"M7 14h.01\"/><path d=\"M17 14h.01\"/><rect width=\"18\" height=\"8\" x=\"3\" y=\"10\" rx=\"2\"/><path d=\"M5 18v2\"/><path d=\"M19 18v2\"/>",
  "car-taxi-front": "<path d=\"M10 2h4\"/><path d=\"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8\"/><path d=\"M7 14h.01\"/><path d=\"M17 14h.01\"/><rect width=\"18\" height=\"8\" x=\"3\" y=\"10\" rx=\"2\"/><path d=\"M5 18v2\"/><path d=\"M19 18v2\"/>",
  "car": "<path d=\"M5 17H3a1 1 0 0 1-1-1v-3.28a1 1 0 0 1 .684-.948l1.923-.641a1 1 0 0 0 .578-.502l1.539-3.076A1 1 0 0 1 8.618 7h6.764a1 1 0 0 1 .894.553l1.539 3.076a1 1 0 0 0 .578.502l1.923.641a1 1 0 0 1 .684.949V16a1 1 0 0 1-1 1h-2\"/><circle cx=\"7\" cy=\"17\" r=\"2\"/><circle cx=\"17\" cy=\"17\" r=\"2\"/>",
  "caravan": "<path d=\"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2\"/><path d=\"M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2\"/><path d=\"M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9\"/><circle cx=\"8\" cy=\"19\" r=\"2\"/>",
  "card-sim": "<path d=\"M12 14v4\"/><path d=\"M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z\"/><path d=\"M8 14h8\"/><rect x=\"8\" y=\"10\" width=\"8\" height=\"8\" rx=\"1\"/>",
  "carrot": "<path d=\"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46\"/><path d=\"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z\"/><path d=\"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z\"/>",
  "case-lower": "<path d=\"M10 9v7\"/><path d=\"M14 6v10\"/><circle cx=\"17.5\" cy=\"12.5\" r=\"3.5\"/><circle cx=\"6.5\" cy=\"12.5\" r=\"3.5\"/>",
  "case-sensitive": "<path d=\"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16\"/><path d=\"M22 9v7\"/><path d=\"M3.304 13h6.392\"/><circle cx=\"18.5\" cy=\"12.5\" r=\"3.5\"/>",
  "case-upper": "<path d=\"M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5\"/><path d=\"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16\"/><path d=\"M3.304 13h6.392\"/>",
  "cassette-tape": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><circle cx=\"8\" cy=\"10\" r=\"2\"/><path d=\"M8 12h8\"/><circle cx=\"16\" cy=\"10\" r=\"2\"/><path d=\"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3\"/>",
  "cast": "<path d=\"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"/><path d=\"M2 12a9 9 0 0 1 8 8\"/><path d=\"M2 16a5 5 0 0 1 4 4\"/><line x1=\"2\" x2=\"2.01\" y1=\"20\" y2=\"20\"/>",
  "castle": "<path d=\"M10 5V3\"/><path d=\"M14 5V3\"/><path d=\"M15 21v-3a3 3 0 0 0-6 0v3\"/><path d=\"M18 3v8\"/><path d=\"M18 5H6\"/><path d=\"M22 11H2\"/><path d=\"M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9\"/><path d=\"M6 3v8\"/>",
  "cat": "<path d=\"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z\"/><path d=\"M8 14v.5\"/><path d=\"M16 14v.5\"/><path d=\"M11.25 16.25h1.5L12 17l-.75-.75Z\"/>",
  "cctv-off": "<path d=\"m12.309 6.652 4.797 2.401a1 1 0 0 1 .447 1.341l-.501 1.001.605.605h2.725a1 1 0 0 1 .894 1.447l-.724 1.448\"/><path d=\"m15.166 15.166-.719 1.439a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 .873-1.037\"/><path d=\"M2 19h3.76a2 2 0 0 0 1.8-1.1l1.441-2.902\"/><path d=\"m2 2 20 20\"/><path d=\"M2 21v-4\"/><path d=\"M7 9h.01\"/>",
  "cctv": "<path d=\"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97\"/><path d=\"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z\"/><path d=\"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15\"/><path d=\"M2 21v-4\"/><path d=\"M7 9h.01\"/>",
  "chart-area": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z\"/>",
  "chart-bar-big": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><rect x=\"7\" y=\"13\" width=\"9\" height=\"4\" rx=\"1\"/><rect x=\"7\" y=\"5\" width=\"12\" height=\"4\" rx=\"1\"/>",
  "chart-bar-decreasing": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M7 11h8\"/><path d=\"M7 16h3\"/><path d=\"M7 6h12\"/>",
  "chart-bar-increasing": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M7 11h8\"/><path d=\"M7 16h12\"/><path d=\"M7 6h3\"/>",
  "chart-bar-stacked": "<path d=\"M11 13v4\"/><path d=\"M15 5v4\"/><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><rect x=\"7\" y=\"13\" width=\"9\" height=\"4\" rx=\"1\"/><rect x=\"7\" y=\"5\" width=\"12\" height=\"4\" rx=\"1\"/>",
  "chart-bar": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M7 16h8\"/><path d=\"M7 11h12\"/><path d=\"M7 6h3\"/>",
  "chart-candlestick": "<path d=\"M9 5v4\"/><rect width=\"4\" height=\"6\" x=\"7\" y=\"9\" rx=\"1\"/><path d=\"M9 15v2\"/><path d=\"M17 3v2\"/><rect width=\"4\" height=\"8\" x=\"15\" y=\"5\" rx=\"1\"/><path d=\"M17 13v3\"/><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/>",
  "chart-column-big": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><rect x=\"15\" y=\"5\" width=\"4\" height=\"12\" rx=\"1\"/><rect x=\"7\" y=\"8\" width=\"4\" height=\"9\" rx=\"1\"/>",
  "chart-column-decreasing": "<path d=\"M13 17V9\"/><path d=\"M18 17v-3\"/><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M8 17V5\"/>",
  "chart-column-increasing": "<path d=\"M13 17V9\"/><path d=\"M18 17V5\"/><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M8 17v-3\"/>",
  "chart-column-stacked": "<path d=\"M11 13H7\"/><path d=\"M19 9h-4\"/><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><rect x=\"15\" y=\"5\" width=\"4\" height=\"12\" rx=\"1\"/><rect x=\"7\" y=\"8\" width=\"4\" height=\"9\" rx=\"1\"/>",
  "chart-column": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M18 17V9\"/><path d=\"M13 17V5\"/><path d=\"M8 17v-3\"/>",
  "chart-gantt": "<path d=\"M10 6h8\"/><path d=\"M12 16h6\"/><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M8 11h7\"/>",
  "chart-line": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"m19 9-5 5-4-4-3 3\"/>",
  "chart-network": "<path d=\"m13.11 7.664 1.78 2.672\"/><path d=\"m14.162 12.788-3.324 1.424\"/><path d=\"m20 4-6.06 1.515\"/><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><circle cx=\"12\" cy=\"6\" r=\"2\"/><circle cx=\"16\" cy=\"12\" r=\"2\"/><circle cx=\"9\" cy=\"15\" r=\"2\"/>",
  "chart-no-axes-column-decreasing": "<path d=\"M5 21V3\"/><path d=\"M12 21V9\"/><path d=\"M19 21v-6\"/>",
  "chart-no-axes-column-increasing": "<path d=\"M5 21v-6\"/><path d=\"M12 21V9\"/><path d=\"M19 21V3\"/>",
  "chart-no-axes-column": "<path d=\"M5 21v-6\"/><path d=\"M12 21V3\"/><path d=\"M19 21V9\"/>",
  "chart-no-axes-combined": "<path d=\"M12 16v5\"/><path d=\"M16 14.639V21\"/><path d=\"M20 10.656V21\"/><path d=\"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15\"/><path d=\"M4 18.463V21\"/><path d=\"M8 14.656V21\"/>",
  "chart-no-axes-gantt": "<path d=\"M6 5h12\"/><path d=\"M4 12h10\"/><path d=\"M12 19h8\"/>",
  "chart-pie": "<path d=\"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z\"/><path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"/>",
  "chart-scatter": "<circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"18.5\" cy=\"5.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"11.5\" cy=\"11.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"7.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"17.5\" cy=\"14.5\" r=\".5\" fill=\"currentColor\"/><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/>",
  "chart-spline": "<path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7\"/>",
  "check-check": "<path d=\"M18 6 7 17l-5-5\"/><path d=\"m22 10-7.5 7.5L13 16\"/>",
  "check-line": "<path d=\"M20 4L9 15\"/><path d=\"M21 19L3 19\"/><path d=\"M9 15L4 10\"/>",
  "check": "<polyline points=\"20 6 9 17 4 12\"/>",
  "chef-hat": "<path d=\"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z\"/><path d=\"M6 17h12\"/>",
  "cherry": "<path d=\"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z\"/><path d=\"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z\"/><path d=\"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12\"/><path d=\"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z\"/>",
  "chess-bishop": "<path d=\"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z\"/><path d=\"M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18\"/><path d=\"m16 7-2.5 2.5\"/><path d=\"M9 2h6\"/>",
  "chess-king": "<path d=\"M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z\"/><path d=\"m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1\"/><path d=\"M10 4h4\"/><path d=\"M12 2v6.818\"/>",
  "chess-knight": "<path d=\"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z\"/><path d=\"M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456\"/><path d=\"m15 5 1.425-1.425\"/><path d=\"m17 8 1.53-1.53\"/><path d=\"M9.713 12.185 7 18\"/>",
  "chess-pawn": "<path d=\"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z\"/><path d=\"m14.5 10 1.5 8\"/><path d=\"M7 10h10\"/><path d=\"m8 18 1.5-8\"/><circle cx=\"12\" cy=\"6\" r=\"4\"/>",
  "chess-queen": "<path d=\"M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z\"/><path d=\"m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402\"/><path d=\"m20 9-3 9\"/><path d=\"m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34\"/><path d=\"M7 18 4 9\"/><circle cx=\"12\" cy=\"4\" r=\"2\"/><circle cx=\"20\" cy=\"7\" r=\"2\"/><circle cx=\"4\" cy=\"7\" r=\"2\"/>",
  "chess-rook": "<path d=\"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z\"/><path d=\"M10 2v2\"/><path d=\"M14 2v2\"/><path d=\"m17 18-1-9\"/><path d=\"M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2\"/><path d=\"M6 4h12\"/><path d=\"m7 18 1-9\"/>",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\"/>",
  "chevron-first": "<path d=\"m17 18-6-6 6-6\"/><path d=\"M7 6v12\"/>",
  "chevron-last": "<path d=\"m7 18 6-6-6-6\"/><path d=\"M17 6v12\"/>",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\"/>",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\"/>",
  "chevron-up": "<path d=\"m18 15-6-6-6 6\"/>",
  "chevrons-down-up": "<path d=\"m7 20 5-5 5 5\"/><path d=\"m7 4 5 5 5-5\"/>",
  "chevrons-down": "<path d=\"m7 6 5 5 5-5\"/><path d=\"m7 13 5 5 5-5\"/>",
  "chevrons-left-right-ellipsis": "<path d=\"M12 12h.01\"/><path d=\"M16 12h.01\"/><path d=\"m17 7 5 5-5 5\"/><path d=\"m7 7-5 5 5 5\"/><path d=\"M8 12h.01\"/>",
  "chevrons-left-right": "<path d=\"m9 7-5 5 5 5\"/><path d=\"m15 7 5 5-5 5\"/>",
  "chevrons-left": "<path d=\"m11 17-5-5 5-5\"/><path d=\"m18 17-5-5 5-5\"/>",
  "chevrons-right-left": "<path d=\"m20 17-5-5 5-5\"/><path d=\"m4 17 5-5-5-5\"/>",
  "chevrons-right": "<path d=\"m6 17 5-5-5-5\"/><path d=\"m13 17 5-5-5-5\"/>",
  "chevrons-up-down": "<path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/>",
  "chevrons-up": "<path d=\"m17 11-5-5-5 5\"/><path d=\"m17 18-5-5-5 5\"/>",
  "church": "<path d=\"M10 9h4\"/><path d=\"M12 7v5\"/><path d=\"M14 21v-3a2 2 0 0 0-4 0v3\"/><path d=\"m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9\"/><path d=\"M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14\"/>",
  "cigarette-off": "<path d=\"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13\"/><path d=\"M18 8c0-2.5-2-2.5-2-5\"/><path d=\"m2 2 20 20\"/><path d=\"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866\"/><path d=\"M22 8c0-2.5-2-2.5-2-5\"/><path d=\"M7 12v4\"/>",
  "cigarette": "<path d=\"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14\"/><path d=\"M18 8c0-2.5-2-2.5-2-5\"/><path d=\"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path d=\"M22 8c0-2.5-2-2.5-2-5\"/><path d=\"M7 12v4\"/>",
  "circle-alert": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"/><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"/>",
  "circle-arrow-down": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v8\"/><path d=\"m8 12 4 4 4-4\"/>",
  "circle-arrow-left": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m12 8-4 4 4 4\"/><path d=\"M16 12H8\"/>",
  "circle-arrow-out-down-left": "<path d=\"M2 12a10 10 0 1 1 10 10\"/><path d=\"m2 22 10-10\"/><path d=\"M8 22H2v-6\"/>",
  "circle-arrow-out-down-right": "<path d=\"M12 22a10 10 0 1 1 10-10\"/><path d=\"M22 22 12 12\"/><path d=\"M22 16v6h-6\"/>",
  "circle-arrow-out-up-left": "<path d=\"M2 8V2h6\"/><path d=\"m2 2 10 10\"/><path d=\"M12 2A10 10 0 1 1 2 12\"/>",
  "circle-arrow-out-up-right": "<path d=\"M22 12A10 10 0 1 1 12 2\"/><path d=\"M22 2 12 12\"/><path d=\"M16 2h6v6\"/>",
  "circle-arrow-right": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m12 16 4-4-4-4\"/><path d=\"M8 12h8\"/>",
  "circle-arrow-up": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m16 12-4-4-4 4\"/><path d=\"M12 16V8\"/>",
  "circle-check-big": "<path d=\"M21.801 10A10 10 0 1 1 17 3.335\"/><path d=\"m9 11 3 3L22 4\"/>",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12 2 2 4-4\"/>",
  "circle-chevron-down": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m16 10-4 4-4-4\"/>",
  "circle-chevron-left": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m14 16-4-4 4-4\"/>",
  "circle-chevron-right": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m10 8 4 4-4 4\"/>",
  "circle-chevron-up": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m8 14 4-4 4 4\"/>",
  "circle-dashed": "<path d=\"M10.1 2.182a10 10 0 0 1 3.8 0\"/><path d=\"M13.9 21.818a10 10 0 0 1-3.8 0\"/><path d=\"M17.609 3.721a10 10 0 0 1 2.69 2.7\"/><path d=\"M2.182 13.9a10 10 0 0 1 0-3.8\"/><path d=\"M20.279 17.609a10 10 0 0 1-2.7 2.69\"/><path d=\"M21.818 10.1a10 10 0 0 1 0 3.8\"/><path d=\"M3.721 6.391a10 10 0 0 1 2.7-2.69\"/><path d=\"M6.391 20.279a10 10 0 0 1-2.69-2.7\"/>",
  "circle-divide": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"8\" x2=\"16\" y1=\"12\" y2=\"12\"/><line x1=\"12\" x2=\"12\" y1=\"16\" y2=\"16\"/><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"8\"/>",
  "circle-dollar-sign": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8\"/><path d=\"M12 18V6\"/>",
  "circle-dot-dashed": "<path d=\"M10.1 2.18a9.93 9.93 0 0 1 3.8 0\"/><path d=\"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7\"/><path d=\"M21.82 10.1a9.93 9.93 0 0 1 0 3.8\"/><path d=\"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69\"/><path d=\"M13.9 21.82a9.94 9.94 0 0 1-3.8 0\"/><path d=\"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7\"/><path d=\"M2.18 13.9a9.93 9.93 0 0 1 0-3.8\"/><path d=\"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/>",
  "circle-dot": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/>",
  "circle-ellipsis": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M17 12h.01\"/><path d=\"M12 12h.01\"/><path d=\"M7 12h.01\"/>",
  "circle-equal": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M7 10h10\"/><path d=\"M7 14h10\"/>",
  "circle-fading-arrow-up": "<path d=\"M12 2a10 10 0 0 1 7.38 16.75\"/><path d=\"m16 12-4-4-4 4\"/><path d=\"M12 16V8\"/><path d=\"M2.5 8.875a10 10 0 0 0-.5 3\"/><path d=\"M2.83 16a10 10 0 0 0 2.43 3.4\"/><path d=\"M4.636 5.235a10 10 0 0 1 .891-.857\"/><path d=\"M8.644 21.42a10 10 0 0 0 7.631-.38\"/>",
  "circle-fading-plus": "<path d=\"M12 2a10 10 0 0 1 7.38 16.75\"/><path d=\"M12 8v8\"/><path d=\"M16 12H8\"/><path d=\"M2.5 8.875a10 10 0 0 0-.5 3\"/><path d=\"M2.83 16a10 10 0 0 0 2.43 3.4\"/><path d=\"M4.636 5.235a10 10 0 0 1 .891-.857\"/><path d=\"M8.644 21.42a10 10 0 0 0 7.631-.38\"/>",
  "circle-gauge": "<path d=\"M15.6 2.7a10 10 0 1 0 5.7 5.7\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M13.4 10.6 19 5\"/>",
  "circle-minus": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 12h8\"/>",
  "circle-off": "<path d=\"m2 2 20 20\"/><path d=\"M8.35 2.69A10 10 0 0 1 21.3 15.65\"/><path d=\"M19.08 19.08A10 10 0 1 1 4.92 4.92\"/>",
  "circle-parking-off": "<path d=\"M12.656 7H13a3 3 0 0 1 2.984 3.307\"/><path d=\"M13 13H9\"/><path d=\"M19.071 19.071A1 1 0 0 1 4.93 4.93\"/><path d=\"m2 2 20 20\"/><path d=\"M8.357 2.687a10 10 0 0 1 12.956 12.956\"/><path d=\"M9 17V9\"/>",
  "circle-parking": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9 17V7h4a3 3 0 0 1 0 6H9\"/>",
  "circle-pause": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"10\" x2=\"10\" y1=\"15\" y2=\"9\"/><line x1=\"14\" x2=\"14\" y1=\"15\" y2=\"9\"/>",
  "circle-percent": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m15 9-6 6\"/><path d=\"M9 9h.01\"/><path d=\"M15 15h.01\"/>",
  "circle-pile": "<circle cx=\"12\" cy=\"19\" r=\"2\"/><circle cx=\"12\" cy=\"5\" r=\"2\"/><circle cx=\"16\" cy=\"12\" r=\"2\"/><circle cx=\"20\" cy=\"19\" r=\"2\"/><circle cx=\"4\" cy=\"19\" r=\"2\"/><circle cx=\"8\" cy=\"12\" r=\"2\"/>",
  "circle-play": "<path d=\"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/>",
  "circle-plus": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 12h8\"/><path d=\"M12 8v8\"/>",
  "circle-pound-sterling": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M10 16V9.5a1 1 0 0 1 5 0\"/><path d=\"M8 12h4\"/><path d=\"M8 16h7\"/>",
  "circle-power": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 7v4\"/><path d=\"M7.998 9.003a5 5 0 1 0 8-.005\"/>",
  "circle-question-mark": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/>",
  "circle-slash-2": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M22 2 2 22\"/>",
  "circle-slash": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"9\" x2=\"15\" y1=\"15\" y2=\"9\"/>",
  "circle-small": "<circle cx=\"12\" cy=\"12\" r=\"6\"/>",
  "circle-star": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z\"/>",
  "circle-stop": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\" rx=\"1\"/>",
  "circle-user-round": "<path d=\"M17.925 20.056a6 6 0 0 0-11.851.001\"/><circle cx=\"12\" cy=\"11\" r=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/>",
  "circle-user": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662\"/>",
  "circle-x": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m15 9-6 6\"/><path d=\"m9 9 6 6\"/>",
  "circle": "<circle cx=\"12\" cy=\"12\" r=\"10\"/>",
  "circuit-board": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M11 9h4a2 2 0 0 0 2-2V3\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"M7 21v-4a2 2 0 0 1 2-2h4\"/><circle cx=\"15\" cy=\"15\" r=\"2\"/>",
  "citrus": "<path d=\"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z\"/><path d=\"M19.65 15.66A8 8 0 0 1 8.35 4.34\"/><path d=\"m14 10-5.5 5.5\"/><path d=\"M14 17.85V10H6.15\"/>",
  "clapperboard": "<path d=\"m12.296 3.464 3.02 3.956\"/><path d=\"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z\"/><path d=\"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"m6.18 5.276 3.1 3.899\"/>",
  "clipboard-check": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><path d=\"m9 14 2 2 4-4\"/>",
  "clipboard-clock": "<path d=\"M16 14v2.2l1.6 1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v.832\"/><path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2\"/><circle cx=\"16\" cy=\"16\" r=\"6\"/><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\"/>",
  "clipboard-copy": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v4\"/><path d=\"M21 14H11\"/><path d=\"m15 10-4 4 4 4\"/>",
  "clipboard-list": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><path d=\"M12 11h4\"/><path d=\"M12 16h4\"/><path d=\"M8 11h.01\"/><path d=\"M8 16h.01\"/>",
  "clipboard-minus": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><path d=\"M9 14h6\"/>",
  "clipboard-paste": "<path d=\"M11 14h10\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v1.344\"/><path d=\"m17 18 4-4-4-4\"/><path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113\"/><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\"/>",
  "clipboard-pen-line": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\"/><path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5\"/><path d=\"M16 4h2a2 2 0 0 1 1.73 1\"/><path d=\"M8 18h1\"/><path d=\"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/>",
  "clipboard-pen": "<path d=\"M16 4h2a2 2 0 0 1 2 2v2\"/><path d=\"M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/><path d=\"M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\"/>",
  "clipboard-plus": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><path d=\"M9 14h6\"/><path d=\"M12 17v-6\"/>",
  "clipboard-type": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><path d=\"M9 12v-1h6v1\"/><path d=\"M11 17h2\"/><path d=\"M12 11v6\"/>",
  "clipboard-x": "<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><path d=\"m15 11-6 6\"/><path d=\"m9 11 6 6\"/>",
  "clipboard": "<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"/>",
  "clock-1": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l2-4\"/>",
  "clock-10": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l-4-2\"/>",
  "clock-11": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l-2-4\"/>",
  "clock-12": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6\"/>",
  "clock-2": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4-2\"/>",
  "clock-3": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6h4\"/>",
  "clock-4": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/>",
  "clock-5": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l2 4\"/>",
  "clock-6": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v10\"/>",
  "clock-7": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l-2 4\"/>",
  "clock-8": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l-4 2\"/>",
  "clock-9": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6H8\"/>",
  "clock-alert": "<path d=\"M12 6v6l4 2\"/><path d=\"M20 12v5\"/><path d=\"M20 21h.01\"/><path d=\"M21.25 8.2A10 10 0 1 0 16 21.16\"/>",
  "clock-arrow-down": "<path d=\"M12 6v6l2 1\"/><path d=\"M12.337 21.994a10 10 0 1 1 9.588-8.767\"/><path d=\"m14 18 4 4 4-4\"/><path d=\"M18 14v8\"/>",
  "clock-arrow-left": "<path d=\"M12 6v6l1.5.8\"/><path d=\"M12.338 21.994a10 10 0 1 1 9.587-8.767\"/><path d=\"M14 18h8\"/><path d=\"m18 22-4-4 4-4\"/>",
  "clock-arrow-right": "<path d=\"M12 6v6l2 1\"/><path d=\"M13.5 21.885A10 10 0 1 1 22 12\"/><path d=\"M14 18h8\"/><path d=\"m18 22 4-4-4-4\"/>",
  "clock-arrow-up": "<path d=\"M12 6v6l1.56.78\"/><path d=\"M13.227 21.925a10 10 0 1 1 8.767-9.588\"/><path d=\"m14 18 4-4 4 4\"/><path d=\"M18 22v-8\"/>",
  "clock-check": "<path d=\"M12 6v6l4 2\"/><path d=\"M22 12a10 10 0 1 0-11 9.95\"/><path d=\"m22 16-5.5 5.5L14 19\"/>",
  "clock-fading": "<path d=\"M12 2a10 10 0 0 1 7.38 16.75\"/><path d=\"M12 6v6l4 2\"/><path d=\"M2.5 8.875a10 10 0 0 0-.5 3\"/><path d=\"M2.83 16a10 10 0 0 0 2.43 3.4\"/><path d=\"M4.636 5.235a10 10 0 0 1 .891-.857\"/><path d=\"M8.644 21.42a10 10 0 0 0 7.631-.38\"/>",
  "clock-plus": "<path d=\"M12 6v6l3.644 1.822\"/><path d=\"M16 19h6\"/><path d=\"M19 16v6\"/><path d=\"M21.92 13.267a10 10 0 1 0-8.653 8.653\"/>",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"12 6 12 12 16 14\"/>",
  "closed-caption": "<path d=\"M10 9.17a3 3 0 1 0 0 5.66\"/><path d=\"M17 9.17a3 3 0 1 0 0 5.66\"/><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/>",
  "cloud-alert": "<path d=\"M12 12v4\"/><path d=\"M12 20h.01\"/><path d=\"M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642\"/>",
  "cloud-backup": "<path d=\"M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607\"/><path d=\"M7 11v4h4\"/><path d=\"M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15\"/>",
  "cloud-check": "<path d=\"m17 15-5.5 5.5L9 18\"/><path d=\"M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327\"/>",
  "cloud-cog": "<path d=\"m10.852 19.772-.383.924\"/><path d=\"m13.148 14.228.383-.923\"/><path d=\"M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923\"/><path d=\"m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544\"/><path d=\"m14.772 15.852.923-.383\"/><path d=\"m14.772 18.148.923.383\"/><path d=\"M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2\"/><path d=\"m9.228 15.852-.923-.383\"/><path d=\"m9.228 18.148-.923.383\"/>",
  "cloud-download": "<path d=\"M12 13v8l-4-4\"/><path d=\"m12 21 4-4\"/><path d=\"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284\"/>",
  "cloud-drizzle": "<path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"/><path d=\"M8 19v1\"/><path d=\"M8 14v1\"/><path d=\"M16 19v1\"/><path d=\"M16 14v1\"/><path d=\"M12 21v1\"/><path d=\"M12 16v1\"/>",
  "cloud-fog": "<path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"/><path d=\"M16 17H7\"/><path d=\"M17 21H9\"/>",
  "cloud-hail": "<path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"/><path d=\"M16 14v2\"/><path d=\"M8 14v2\"/><path d=\"M16 20h.01\"/><path d=\"M8 20h.01\"/><path d=\"M12 16v2\"/><path d=\"M12 22h.01\"/>",
  "cloud-lightning": "<path d=\"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973\"/><path d=\"m13 12-3 5h4l-3 5\"/>",
  "cloud-moon-rain": "<path d=\"M11 20v2\"/><path d=\"M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36\"/><path d=\"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24\"/><path d=\"M7 19v2\"/>",
  "cloud-moon": "<path d=\"M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z\"/><path d=\"M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36\"/>",
  "cloud-off": "<path d=\"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057\"/><path d=\"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78\"/><path d=\"m2 2 20 20\"/>",
  "cloud-rain-wind": "<path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"/><path d=\"m9.2 22 3-7\"/><path d=\"m9 13-3 7\"/><path d=\"m17 13-3 7\"/>",
  "cloud-rain": "<path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"/><path d=\"M16 14v6\"/><path d=\"M8 14v6\"/><path d=\"M12 16v6\"/>",
  "cloud-snow": "<path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"/><path d=\"M8 15h.01\"/><path d=\"M8 19h.01\"/><path d=\"M12 17h.01\"/><path d=\"M12 21h.01\"/><path d=\"M16 15h.01\"/><path d=\"M16 19h.01\"/>",
  "cloud-sun-rain": "<path d=\"M12 2v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"M20 12h2\"/><path d=\"m19.07 4.93-1.41 1.41\"/><path d=\"M15.947 12.65a4 4 0 0 0-5.925-4.128\"/><path d=\"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24\"/><path d=\"M11 20v2\"/><path d=\"M7 19v2\"/>",
  "cloud-sun": "<path d=\"M12 2v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"M20 12h2\"/><path d=\"m19.07 4.93-1.41 1.41\"/><path d=\"M15.947 12.65a4 4 0 0 0-5.925-4.128\"/><path d=\"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z\"/>",
  "cloud-sync": "<path d=\"m17 18-1.535 1.605a5 5 0 0 1-8-1.5\"/><path d=\"M17 22v-4h-4\"/><path d=\"M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607\"/><path d=\"M7 10v4h4\"/><path d=\"m7 14 1.535-1.605a5 5 0 0 1 8 1.5\"/>",
  "cloud-upload": "<path d=\"M12 13v8\"/><path d=\"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242\"/><path d=\"m8 17 4-4 4 4\"/>",
  "cloud": "<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"/>",
  "cloudy": "<path d=\"M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z\"/><path d=\"M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61\"/>",
  "clover": "<path d=\"M16.17 7.83 2 22\"/><path d=\"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12\"/><path d=\"m7.83 7.83 8.34 8.34\"/>",
  "club": "<path d=\"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z\"/><path d=\"M12 17.66L12 22\"/>",
  "code-xml": "<path d=\"m18 16 4-4-4-4\"/><path d=\"m6 8-4 4 4 4\"/><path d=\"m14.5 4-5 16\"/>",
  "code": "<polyline points=\"16 18 22 12 16 6\"/><polyline points=\"8 6 2 12 8 18\"/>",
  "coffee": "<path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"/><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"/><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"/><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"/><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"/>",
  "cog": "<path d=\"M11 10.27 7 3.34\"/><path d=\"m11 13.73-4 6.93\"/><path d=\"M12 22v-2\"/><path d=\"M12 2v2\"/><path d=\"M14 12h8\"/><path d=\"m17 20.66-1-1.73\"/><path d=\"m17 3.34-1 1.73\"/><path d=\"M2 12h2\"/><path d=\"m20.66 17-1.73-1\"/><path d=\"m20.66 7-1.73 1\"/><path d=\"m3.34 17 1.73-1\"/><path d=\"m3.34 7 1.73 1\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"8\"/>",
  "coins": "<path d=\"M13.744 17.736a6 6 0 1 1-7.48-7.48\"/><path d=\"M15 6h1v4\"/><path d=\"m6.134 14.768.866-.5 2 3.464\"/><circle cx=\"16\" cy=\"8\" r=\"6\"/>",
  "columns-2": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 3v18\"/>",
  "columns-3-cog": "<path d=\"M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5\"/><path d=\"m14.3 19.6 1-.4\"/><path d=\"M15 3v7.5\"/><path d=\"m15.2 16.9-.9-.3\"/><path d=\"m16.6 21.7.3-.9\"/><path d=\"m16.8 15.3-.4-1\"/><path d=\"m19.1 15.2.3-.9\"/><path d=\"m19.6 21.7-.4-1\"/><path d=\"m20.7 16.8 1-.4\"/><path d=\"m21.7 19.4-.9-.3\"/><path d=\"M9 3v18\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/>",
  "columns-3": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 3v18\"/><path d=\"M15 3v18\"/>",
  "columns-4": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7.5 3v18\"/><path d=\"M12 3v18\"/><path d=\"M16.5 3v18\"/>",
  "combine": "<path d=\"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1\"/><path d=\"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1\"/><path d=\"m7 15 3 3\"/><path d=\"m7 21 3-3H5a2 2 0 0 1-2-2v-2\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/>",
  "command": "<path d=\"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3\"/>",
  "compass": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"/>",
  "component": "<path d=\"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z\"/><path d=\"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z\"/><path d=\"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z\"/><path d=\"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z\"/>",
  "computer": "<rect width=\"14\" height=\"8\" x=\"5\" y=\"2\" rx=\"2\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6 18h2\"/><path d=\"M12 18h6\"/>",
  "concierge-bell": "<path d=\"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z\"/><path d=\"M20 16a8 8 0 1 0-16 0\"/><path d=\"M12 4v4\"/><path d=\"M10 4h4\"/>",
  "cone": "<path d=\"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98\"/><ellipse cx=\"12\" cy=\"19\" rx=\"9\" ry=\"3\"/>",
  "construction": "<rect x=\"2\" y=\"6\" width=\"20\" height=\"8\" rx=\"1\"/><path d=\"M17 14v7\"/><path d=\"M7 14v7\"/><path d=\"M17 3v3\"/><path d=\"M7 3v3\"/><path d=\"M10 14 2.3 6.3\"/><path d=\"m14 6 7.7 7.7\"/><path d=\"m8 6 8 8\"/>",
  "contact-round": "<path d=\"M16 2v2\"/><path d=\"M17.915 22a6 6 0 0 0-12 0\"/><path d=\"M8 2v2\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "contact": "<path d=\"M16 2v2\"/><path d=\"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2\"/><path d=\"M8 2v2\"/><circle cx=\"12\" cy=\"11\" r=\"3\"/><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "container": "<path d=\"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z\"/><path d=\"M10 21.9V14L2.1 9.1\"/><path d=\"m10 14 11.9-6.9\"/><path d=\"M14 19.8v-8.1\"/><path d=\"M18 17.5V9.4\"/>",
  "contrast": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 18a6 6 0 0 0 0-12v12z\"/>",
  "cookie": "<path d=\"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5\"/><path d=\"M8.5 8.5v.01\"/><path d=\"M16 15.5v.01\"/><path d=\"M12 12v.01\"/><path d=\"M11 17v.01\"/><path d=\"M7 14v.01\"/>",
  "cooking-pot": "<path d=\"M2 12h20\"/><path d=\"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8\"/><path d=\"m4 8 16-4\"/><path d=\"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8\"/>",
  "copy-check": "<path d=\"m12 15 2 2 4-4\"/><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/>",
  "copy-minus": "<line x1=\"12\" x2=\"18\" y1=\"15\" y2=\"15\"/><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/>",
  "copy-plus": "<line x1=\"15\" x2=\"15\" y1=\"12\" y2=\"18\"/><line x1=\"12\" x2=\"18\" y1=\"15\" y2=\"15\"/><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/>",
  "copy-slash": "<line x1=\"12\" x2=\"18\" y1=\"18\" y2=\"12\"/><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/>",
  "copy-x": "<line x1=\"12\" x2=\"18\" y1=\"12\" y2=\"18\"/><line x1=\"12\" x2=\"18\" y1=\"18\" y2=\"12\"/><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/>",
  "copy": "<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"/><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"/>",
  "copyleft": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.17 14.83a4 4 0 1 0 0-5.66\"/>",
  "copyright": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M14.83 14.83a4 4 0 1 1 0-5.66\"/>",
  "corner-down-left": "<path d=\"M20 4v7a4 4 0 0 1-4 4H4\"/><path d=\"m9 10-5 5 5 5\"/>",
  "corner-down-right": "<path d=\"m15 10 5 5-5 5\"/><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"/>",
  "corner-left-down": "<path d=\"m14 15-5 5-5-5\"/><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"/>",
  "corner-left-up": "<path d=\"M14 9 9 4 4 9\"/><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"/>",
  "corner-right-down": "<path d=\"m10 15 5 5 5-5\"/><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"/>",
  "corner-right-up": "<path d=\"m10 9 5-5 5 5\"/><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"/>",
  "corner-up-left": "<path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"/><path d=\"M9 14 4 9l5-5\"/>",
  "corner-up-right": "<path d=\"m15 14 5-5-5-5\"/><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"/>",
  "cpu": "<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"/><line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"/><line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"/><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"/><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"/><line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"/><line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"/><line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"/><line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"/>",
  "creative-commons": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1\"/><path d=\"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1\"/>",
  "credit-card": "<rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"/><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"/>",
  "croissant": "<path d=\"M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487\"/><path d=\"M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132\"/><path d=\"M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42\"/><path d=\"M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14\"/><path d=\"M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676\"/>",
  "crop": "<path d=\"M6 2v14a2 2 0 0 0 2 2h14\"/><path d=\"M18 22V8a2 2 0 0 0-2-2H2\"/>",
  "cross": "<path d=\"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z\"/>",
  "crosshair": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"22\" x2=\"18\" y1=\"12\" y2=\"12\"/><line x1=\"6\" x2=\"2\" y1=\"12\" y2=\"12\"/><line x1=\"12\" x2=\"12\" y1=\"6\" y2=\"2\"/><line x1=\"12\" x2=\"12\" y1=\"22\" y2=\"18\"/>",
  "crown": "<path d=\"M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z\"/><line x1=\"5\" y1=\"20\" x2=\"19\" y2=\"20\"/>",
  "cuboid": "<path d=\"M10 22v-8\"/><path d=\"M2.336 8.89 10 14l11.715-7.029\"/><path d=\"M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z\"/>",
  "cup-soda": "<path d=\"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8\"/><path d=\"M5 8h14\"/><path d=\"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0\"/><path d=\"m12 8 1-6h2\"/>",
  "currency": "<circle cx=\"12\" cy=\"12\" r=\"8\"/><line x1=\"3\" x2=\"6\" y1=\"3\" y2=\"6\"/><line x1=\"21\" x2=\"18\" y1=\"3\" y2=\"6\"/><line x1=\"3\" x2=\"6\" y1=\"21\" y2=\"18\"/><line x1=\"21\" x2=\"18\" y1=\"21\" y2=\"18\"/>",
  "cylinder": "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 5v14a9 3 0 0 0 18 0V5\"/>",
  "dam": "<path d=\"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/><path d=\"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/><path d=\"M2 10h4\"/><path d=\"M2 14h4\"/><path d=\"M2 18h4\"/><path d=\"M2 6h4\"/><path d=\"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z\"/>",
  "database-backup": "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 12a9 3 0 0 0 5 2.69\"/><path d=\"M21 9.3V5\"/><path d=\"M3 5v14a9 3 0 0 0 6.47 2.88\"/><path d=\"M12 12v4h4\"/><path d=\"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16\"/>",
  "database-search": "<path d=\"M21 11.693V5\"/><path d=\"m22 22-1.875-1.875\"/><path d=\"M3 12a9 3 0 0 0 8.697 2.998\"/><path d=\"M3 5v14a9 3 0 0 0 9.28 2.999\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/><ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/>",
  "database-zap": "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M3 5V19A9 3 0 0 0 15 21.84\"/><path d=\"M21 5V8\"/><path d=\"M21 12L18 17H22L19 22\"/><path d=\"M3 12A9 3 0 0 0 14.59 14.87\"/>",
  "database": "<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"/><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"/><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"/>",
  "decimals-arrow-left": "<path d=\"m13 21-3-3 3-3\"/><path d=\"M20 18H10\"/><path d=\"M3 11h.01\"/><rect x=\"6\" y=\"3\" width=\"5\" height=\"8\" rx=\"2.5\"/>",
  "decimals-arrow-right": "<path d=\"M10 18h10\"/><path d=\"m17 21 3-3-3-3\"/><path d=\"M3 11h.01\"/><rect x=\"15\" y=\"3\" width=\"5\" height=\"8\" rx=\"2.5\"/><rect x=\"6\" y=\"3\" width=\"5\" height=\"8\" rx=\"2.5\"/>",
  "delete": "<path d=\"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z\"/><path d=\"m12 9 6 6\"/><path d=\"m18 9-6 6\"/>",
  "dessert": "<path d=\"M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826\"/><path d=\"M20.804 14.869a9 9 0 0 1-17.608 0\"/><circle cx=\"12\" cy=\"4\" r=\"2\"/>",
  "diameter": "<circle cx=\"19\" cy=\"19\" r=\"2\"/><circle cx=\"5\" cy=\"5\" r=\"2\"/><path d=\"M6.48 3.66a10 10 0 0 1 13.86 13.86\"/><path d=\"m6.41 6.41 11.18 11.18\"/><path d=\"M3.66 6.48a10 10 0 0 0 13.86 13.86\"/>",
  "diamond-minus": "<path d=\"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z\"/><path d=\"M8 12h8\"/>",
  "diamond-percent": "<path d=\"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z\"/><path d=\"M9.2 9.2h.01\"/><path d=\"m14.5 9.5-5 5\"/><path d=\"M14.7 14.8h.01\"/>",
  "diamond-plus": "<path d=\"M12 8v8\"/><path d=\"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z\"/><path d=\"M8 12h8\"/>",
  "diamond": "<path d=\"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z\"/>",
  "dice-1": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M12 12h.01\"/>",
  "dice-2": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M15 9h.01\"/><path d=\"M9 15h.01\"/>",
  "dice-3": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M16 8h.01\"/><path d=\"M12 12h.01\"/><path d=\"M8 16h.01\"/>",
  "dice-4": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M16 8h.01\"/><path d=\"M8 8h.01\"/><path d=\"M8 16h.01\"/><path d=\"M16 16h.01\"/>",
  "dice-5": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M16 8h.01\"/><path d=\"M8 8h.01\"/><path d=\"M8 16h.01\"/><path d=\"M16 16h.01\"/><path d=\"M12 12h.01\"/>",
  "dice-6": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M16 8h.01\"/><path d=\"M16 12h.01\"/><path d=\"M16 16h.01\"/><path d=\"M8 8h.01\"/><path d=\"M8 12h.01\"/><path d=\"M8 16h.01\"/>",
  "dices": "<rect width=\"12\" height=\"12\" x=\"2\" y=\"10\" rx=\"2\" ry=\"2\"/><path d=\"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6\"/><path d=\"M6 18h.01\"/><path d=\"M10 14h.01\"/><path d=\"M15 6h.01\"/><path d=\"M18 9h.01\"/>",
  "diff": "<path d=\"M12 3v14\"/><path d=\"M5 10h14\"/><path d=\"M5 21h14\"/>",
  "disc-2": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 12h.01\"/>",
  "disc-3": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M6 12c0-1.7.7-3.2 1.8-4.2\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M18 12c0 1.7-.7 3.2-1.8 4.2\"/>",
  "disc-album": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/><path d=\"M12 12h.01\"/>",
  "disc": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>",
  "divide": "<circle cx=\"12\" cy=\"6\" r=\"1\"/><line x1=\"5\" x2=\"19\" y1=\"12\" y2=\"12\"/><circle cx=\"12\" cy=\"18\" r=\"1\"/>",
  "dna-off": "<path d=\"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8\"/><path d=\"m17 6-2.891-2.891\"/><path d=\"M2 15c3.333-3 6.667-3 10-3\"/><path d=\"m2 2 20 20\"/><path d=\"m20 9 .891.891\"/><path d=\"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1\"/><path d=\"M3.109 14.109 4 15\"/><path d=\"m6.5 12.5 1 1\"/><path d=\"m7 18 2.891 2.891\"/><path d=\"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16\"/>",
  "dna": "<path d=\"m10 16 1.5 1.5\"/><path d=\"m14 8-1.5-1.5\"/><path d=\"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993\"/><path d=\"m16.5 10.5 1 1\"/><path d=\"m17 6-2.891-2.891\"/><path d=\"M2 15c6.667-6 13.333 0 20-6\"/><path d=\"m20 9 .891.891\"/><path d=\"M3.109 14.109 4 15\"/><path d=\"m6.5 12.5 1 1\"/><path d=\"m7 18 2.891 2.891\"/><path d=\"M9 22c1.798-1.998 2.518-3.995 2.807-5.993\"/>",
  "dock": "<path d=\"M2 8h20\"/><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M6 16h12\"/>",
  "dog": "<path d=\"M11.25 16.25h1.5L12 17z\"/><path d=\"M16 14v.5\"/><path d=\"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309\"/><path d=\"M8 14v.5\"/><path d=\"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5\"/>",
  "dollar-sign": "<line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"22\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/>",
  "donut": "<path d=\"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
  "door-closed-locked": "<path d=\"M10 12h.01\"/><path d=\"M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14\"/><path d=\"M2 20h8\"/><path d=\"M20 17v-2a2 2 0 1 0-4 0v2\"/><rect x=\"14\" y=\"17\" width=\"8\" height=\"5\" rx=\"1\"/>",
  "door-closed": "<path d=\"M10 12h.01\"/><path d=\"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14\"/><path d=\"M2 20h20\"/>",
  "door-open": "<path d=\"M11 20H2\"/><path d=\"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z\"/><path d=\"M11 4H8a2 2 0 0 0-2 2v14\"/><path d=\"M14 12h.01\"/><path d=\"M22 20h-3\"/>",
  "dot": "<circle cx=\"12.1\" cy=\"12.1\" r=\"1\"/>",
  "download": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"/>",
  "drafting-compass": "<path d=\"m12.99 6.74 1.93 3.44\"/><path d=\"M19.136 12a10 10 0 0 1-14.271 0\"/><path d=\"m21 21-2.16-3.84\"/><path d=\"m3 21 8.02-14.26\"/><circle cx=\"12\" cy=\"5\" r=\"2\"/>",
  "drama": "<path d=\"M10 11h.01\"/><path d=\"M14 6h.01\"/><path d=\"M18 6h.01\"/><path d=\"M6.5 13.1h.01\"/><path d=\"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3\"/><path d=\"M17.4 9.9c-.8.8-2 .8-2.8 0\"/><path d=\"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7\"/><path d=\"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4\"/>",
  "drill": "<path d=\"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z\"/><path d=\"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8\"/><path d=\"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3\"/><path d=\"M18 6h4\"/><path d=\"m5 10-2 8\"/><path d=\"m7 18 2-8\"/>",
  "drone": "<path d=\"M10 10 7 7\"/><path d=\"m10 14-3 3\"/><path d=\"m14 10 3-3\"/><path d=\"m14 14 3 3\"/><path d=\"M14.205 4.139a4 4 0 1 1 5.439 5.863\"/><path d=\"M19.637 14a4 4 0 1 1-5.432 5.868\"/><path d=\"M4.367 10a4 4 0 1 1 5.438-5.862\"/><path d=\"M9.795 19.862a4 4 0 1 1-5.429-5.873\"/><rect x=\"10\" y=\"8\" width=\"4\" height=\"8\" rx=\"1\"/>",
  "droplet-off": "<path d=\"M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586\"/><path d=\"m2 2 20 20\"/><path d=\"M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208\"/>",
  "droplet": "<path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"/>",
  "droplets": "<path d=\"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z\"/><path d=\"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97\"/>",
  "drum": "<path d=\"m2 2 8 8\"/><path d=\"m22 2-8 8\"/><ellipse cx=\"12\" cy=\"9\" rx=\"10\" ry=\"5\"/><path d=\"M7 13.4v7.9\"/><path d=\"M12 14v8\"/><path d=\"M17 13.4v7.9\"/><path d=\"M2 9v8a10 5 0 0 0 20 0V9\"/>",
  "drumstick": "<path d=\"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23\"/><path d=\"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59\"/>",
  "dumbbell": "<path d=\"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z\"/><path d=\"m2.5 21.5 1.4-1.4\"/><path d=\"m20.1 3.9 1.4-1.4\"/><path d=\"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z\"/><path d=\"m9.6 14.4 4.8-4.8\"/>",
  "ear-off": "<path d=\"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46\"/><path d=\"M6 8.5c0-.75.13-1.47.36-2.14\"/><path d=\"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76\"/><path d=\"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
  "ear": "<path d=\"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0\"/><path d=\"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4\"/>",
  "earth-lock": "<path d=\"M7 3.34V5a3 3 0 0 0 3 3\"/><path d=\"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05\"/><path d=\"M21.54 15H17a2 2 0 0 0-2 2v4.54\"/><path d=\"M12 2a10 10 0 1 0 9.54 13\"/><path d=\"M20 6V4a2 2 0 1 0-4 0v2\"/><rect width=\"8\" height=\"5\" x=\"14\" y=\"6\" rx=\"1\"/>",
  "earth": "<path d=\"M21.54 15H17a2 2 0 0 0-2 2v4.54\"/><path d=\"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17\"/><path d=\"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/>",
  "eclipse": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a7 7 0 1 0 10 10\"/>",
  "egg-fried": "<circle cx=\"11.5\" cy=\"12.5\" r=\"3.5\"/><path d=\"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z\"/>",
  "egg-off": "<path d=\"m2 2 20 20\"/><path d=\"M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19\"/><path d=\"M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568\"/>",
  "egg": "<path d=\"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12\"/>",
  "ellipse": "<ellipse cx=\"12\" cy=\"12\" rx=\"10\" ry=\"6\"/>",
  "ellipsis-vertical": "<circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"12\" cy=\"5\" r=\"1\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/>",
  "ellipsis": "<circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"19\" cy=\"12\" r=\"1\"/><circle cx=\"5\" cy=\"12\" r=\"1\"/>",
  "equal-approximately": "<path d=\"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0\"/><path d=\"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0\"/>",
  "equal-not": "<line x1=\"5\" x2=\"19\" y1=\"9\" y2=\"9\"/><line x1=\"5\" x2=\"19\" y1=\"15\" y2=\"15\"/><line x1=\"19\" x2=\"5\" y1=\"5\" y2=\"19\"/>",
  "equal": "<line x1=\"5\" x2=\"19\" y1=\"9\" y2=\"9\"/><line x1=\"5\" x2=\"19\" y1=\"15\" y2=\"15\"/>",
  "eraser": "<path d=\"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21\"/><path d=\"m5.082 11.09 8.828 8.828\"/>",
  "ethernet-port": "<path d=\"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z\"/><path d=\"M6 8v1\"/><path d=\"M10 8v1\"/><path d=\"M14 8v1\"/><path d=\"M18 8v1\"/>",
  "euro": "<path d=\"M4 10h12\"/><path d=\"M4 14h9\"/><path d=\"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2\"/>",
  "ev-charger": "<path d=\"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5\"/><path d=\"M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16\"/><path d=\"M2 21h13\"/><path d=\"M3 7h11\"/><path d=\"m9 11-2 3h3l-2 3\"/>",
  "expand": "<path d=\"m15 15 6 6\"/><path d=\"m15 9 6-6\"/><path d=\"M21 16v5h-5\"/><path d=\"M21 8V3h-5\"/><path d=\"M3 16v5h5\"/><path d=\"m3 21 6-6\"/><path d=\"M3 8V3h5\"/><path d=\"M9 9 3 3\"/>",
  "external-link": "<path d=\"M15 3h6v6\"/><path d=\"M10 14 21 3\"/><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"/>",
  "eye-closed": "<path d=\"m15 18-.722-3.25\"/><path d=\"M2 8a10.645 10.645 0 0 0 20 0\"/><path d=\"m20 15-1.726-2.05\"/><path d=\"m4 15 1.726-2.05\"/><path d=\"m9 18 .722-3.25\"/>",
  "eye-dashed": "<path d=\"M13.054 18.946a11 11 0 0 1-2.11 0\"/><path d=\"M13.054 5.054a11 11 0 0 0-2.11-.001\"/><path d=\"M17.072 6.274a11 11 0 0 1 1.753 1.173\"/><path d=\"M18.825 16.552a11 11 0 0 1-1.753 1.174\"/><path d=\"M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697 11 11 0 0 1 .45-.955\"/><path d=\"M21.485 10.697a11 11 0 0 1 .453.955 1 1 0 0 1 0 .697 11 11 0 0 1-.453.954\"/><path d=\"M5.173 7.448a11 11 0 0 1 1.753-1.174\"/><path d=\"M6.926 17.726a11 11 0 0 1-1.753-1.174\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
  "eye-off": "<path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"/><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"/>",
  "eye": "<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
  "factory": "<path d=\"M12 16h.01\"/><path d=\"M16 16h.01\"/><path d=\"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z\"/><path d=\"M8 16h.01\"/>",
  "fan": "<path d=\"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z\"/><path d=\"M12 12v.01\"/>",
  "fast-forward": "<path d=\"M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z\"/><path d=\"M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z\"/>",
  "feather": "<path d=\"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z\"/><path d=\"M16 8 2 22\"/><path d=\"M17.5 15H9\"/>",
  "fence": "<path d=\"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z\"/><path d=\"M6 8h4\"/><path d=\"M6 18h4\"/><path d=\"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z\"/><path d=\"M14 8h4\"/><path d=\"M14 18h4\"/><path d=\"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z\"/>",
  "ferris-wheel": "<circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M12 2v4\"/><path d=\"m6.8 15-3.5 2\"/><path d=\"m20.7 7-3.5 2\"/><path d=\"M6.8 9 3.3 7\"/><path d=\"m20.7 17-3.5-2\"/><path d=\"m9 22 3-8 3 8\"/><path d=\"M8 22h8\"/><path d=\"M18 18.7a9 9 0 1 0-12 0\"/>",
  "file-archive": "<path d=\"M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M8 12v-1\"/><path d=\"M8 18v-2\"/><path d=\"M8 7V6\"/><circle cx=\"8\" cy=\"20\" r=\"2\"/>",
  "file-axis-3d": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m8 18 4-4\"/><path d=\"M8 10v8h8\"/>",
  "file-badge": "<path d=\"M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88\"/><circle cx=\"6\" cy=\"14\" r=\"3\"/>",
  "file-box": "<path d=\"M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M11.7 14.2 7 17l-4.7-2.8\"/><path d=\"M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z\"/><path d=\"M7 17v5\"/>",
  "file-braces-corner": "<path d=\"M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1\"/><path d=\"M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1\"/>",
  "file-braces": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1\"/><path d=\"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1\"/>",
  "file-chart-column-increasing": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M8 18v-2\"/><path d=\"M12 18v-4\"/><path d=\"M16 18v-6\"/>",
  "file-chart-column": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M8 18v-1\"/><path d=\"M12 18v-6\"/><path d=\"M16 18v-3\"/>",
  "file-chart-line": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m16 13-3.5 3.5-2-2L8 17\"/>",
  "file-chart-pie": "<path d=\"M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M4.017 11.512a6 6 0 1 0 8.466 8.475\"/><path d=\"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z\"/>",
  "file-check-corner": "<path d=\"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m14 20 2 2 4-4\"/>",
  "file-check": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m9 15 2 2 4-4\"/>",
  "file-clock": "<path d=\"M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M8 14v2.2l1.6 1\"/><circle cx=\"8\" cy=\"16\" r=\"6\"/>",
  "file-code-corner": "<path d=\"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m5 16-3 3 3 3\"/><path d=\"m9 22 3-3-3-3\"/>",
  "file-code": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M10 12.5 8 15l2 2.5\"/><path d=\"m14 12.5 2 2.5-2 2.5\"/>",
  "file-cog": "<path d=\"M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z\"/><path d=\"M20 8v12a2 2 0 0 1-2 2h-4.182\"/><path d=\"m3.305 19.53.923-.382\"/><path d=\"M4 10.592V4a2 2 0 0 1 2-2h8\"/><path d=\"m4.228 16.852-.924-.383\"/><path d=\"m5.852 15.228-.383-.923\"/><path d=\"m5.852 20.772-.383.924\"/><path d=\"m8.148 15.228.383-.923\"/><path d=\"m8.53 21.696-.382-.924\"/><path d=\"m9.773 16.852.922-.383\"/><path d=\"m9.773 19.148.922.383\"/><circle cx=\"7\" cy=\"18\" r=\"3\"/>",
  "file-diff": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M9 10h6\"/><path d=\"M12 13V7\"/><path d=\"M9 17h6\"/>",
  "file-digit": "<path d=\"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M10 16h2v6\"/><path d=\"M10 22h4\"/><rect x=\"2\" y=\"16\" width=\"4\" height=\"6\" rx=\"2\"/>",
  "file-down": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M12 18v-6\"/><path d=\"m9 15 3 3 3-3\"/>",
  "file-exclamation-point": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/>",
  "file-headphone": "<path d=\"M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0\"/>",
  "file-heart": "<path d=\"M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z\"/>",
  "file-image": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><circle cx=\"10\" cy=\"12\" r=\"2\"/><path d=\"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22\"/>",
  "file-input": "<path d=\"M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M2 15h10\"/><path d=\"m9 18 3-3-3-3\"/>",
  "file-key": "<path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M4 12v6\"/><path d=\"M4 14h2\"/><path d=\"M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4\"/><circle cx=\"4\" cy=\"20\" r=\"2\"/>",
  "file-lock": "<path d=\"M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M9 17v-2a2 2 0 0 0-4 0v2\"/><rect width=\"8\" height=\"5\" x=\"3\" y=\"17\" rx=\"1\"/>",
  "file-minus-corner": "<path d=\"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M14 18h6\"/>",
  "file-minus": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M9 15h6\"/>",
  "file-music": "<path d=\"M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M8 20v-7l3 1.474\"/><circle cx=\"6\" cy=\"20\" r=\"2\"/>",
  "file-output": "<path d=\"M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m5 11-3 3\"/><path d=\"m5 17-3-3h10\"/>",
  "file-pen-line": "<path d=\"M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z\"/><path d=\"M14.487 7.858A1 1 0 0 1 14 7V2\"/><path d=\"M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516\"/><path d=\"M8 18h1\"/>",
  "file-pen": "<path d=\"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z\"/>",
  "file-play": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z\"/>",
  "file-plus-corner": "<path d=\"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M14 19h6\"/><path d=\"M17 16v6\"/>",
  "file-plus": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M9 15h6\"/><path d=\"M12 18v-6\"/>",
  "file-question-mark": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M12 17h.01\"/><path d=\"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3\"/>",
  "file-scan": "<path d=\"M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M16 14a2 2 0 0 0-2 2\"/><path d=\"M16 22a2 2 0 0 1-2-2\"/><path d=\"M20 14a2 2 0 0 1 2 2\"/><path d=\"M20 22a2 2 0 0 0 2-2\"/>",
  "file-search-corner": "<path d=\"M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m21 22-2.88-2.88\"/><circle cx=\"16\" cy=\"17\" r=\"3\"/>",
  "file-search": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><circle cx=\"11.5\" cy=\"14.5\" r=\"2.5\"/><path d=\"M13.3 16.3 15 18\"/>",
  "file-signal": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M8 15h.01\"/><path d=\"M11.5 13.5a2.5 2.5 0 0 1 0 3\"/><path d=\"M15 12a5 5 0 0 1 0 6\"/>",
  "file-sliders": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M8 12h8\"/><path d=\"M10 11v2\"/><path d=\"M8 17h8\"/><path d=\"M14 16v2\"/>",
  "file-spreadsheet": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M8 13h2\"/><path d=\"M14 13h2\"/><path d=\"M8 17h2\"/><path d=\"M14 17h2\"/>",
  "file-stack": "<path d=\"M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1\"/><path d=\"M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1\"/><path d=\"M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z\"/>",
  "file-symlink": "<path d=\"M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m10 18 3-3-3-3\"/>",
  "file-terminal": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m8 16 2-2-2-2\"/><path d=\"M12 18h4\"/>",
  "file-text": "<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/><polyline points=\"10 9 9 9 8 9\"/>",
  "file-type-corner": "<path d=\"M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16\"/><path d=\"M6 22h2\"/><path d=\"M7 14v8\"/>",
  "file-type": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M11 18h2\"/><path d=\"M12 12v6\"/><path d=\"M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5\"/>",
  "file-up": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M12 12v6\"/><path d=\"m15 15-3-3-3 3\"/>",
  "file-user": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M16 22a4 4 0 0 0-8 0\"/><circle cx=\"12\" cy=\"15\" r=\"3\"/>",
  "file-video-camera": "<path d=\"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157\"/><rect width=\"7\" height=\"6\" x=\"3\" y=\"16\" rx=\"1\"/>",
  "file-volume": "<path d=\"M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M12 15a5 5 0 0 1 0 6\"/><path d=\"M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z\"/>",
  "file-x-corner": "<path d=\"M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m15 17 5 5\"/><path d=\"m20 17-5 5\"/>",
  "file-x": "<path d=\"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"m14.5 12.5-5 5\"/><path d=\"m9.5 12.5 5 5\"/>",
  "file": "<path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"/><polyline points=\"13 2 13 9 20 9\"/>",
  "files": "<path d=\"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8\"/><path d=\"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z\"/><path d=\"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1\"/>",
  "film": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 3v18\"/><path d=\"M3 7.5h4\"/><path d=\"M3 12h18\"/><path d=\"M3 16.5h4\"/><path d=\"M17 3v18\"/><path d=\"M17 7.5h4\"/><path d=\"M17 16.5h4\"/>",
  "fingerprint-pattern": "<path d=\"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4\"/><path d=\"M14 13.12c0 2.38 0 6.38-1 8.88\"/><path d=\"M17.29 21.02c.12-.6.43-2.3.5-3.02\"/><path d=\"M2 12a10 10 0 0 1 18-6\"/><path d=\"M2 16h.01\"/><path d=\"M21.8 16c.2-2 .131-5.354 0-6\"/><path d=\"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2\"/><path d=\"M8.65 22c.21-.66.45-1.32.57-2\"/><path d=\"M9 6.8a6 6 0 0 1 9 5.2v2\"/>",
  "fire-extinguisher": "<path d=\"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5\"/><path d=\"M9 18h8\"/><path d=\"M18 3h-3\"/><path d=\"M11 3a6 6 0 0 0-6 6v11\"/><path d=\"M5 13h4\"/><path d=\"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z\"/>",
  "fish-off": "<path d=\"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058\"/><path d=\"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618\"/><path d=\"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20\"/>",
  "fish-symbol": "<path d=\"M2 16s9-15 20-4C11 23 2 8 2 8\"/>",
  "fish": "<path d=\"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z\"/><path d=\"M18 12v.5\"/><path d=\"M16 17.93a9.77 9.77 0 0 1 0-11.86\"/><path d=\"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33\"/><path d=\"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4\"/><path d=\"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98\"/>",
  "fishing-hook": "<path d=\"m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10\"/><path d=\"M20.414 8.586 22 7\"/><circle cx=\"19\" cy=\"10\" r=\"2\"/>",
  "fishing-rod": "<path d=\"M4 11h1\"/><path d=\"M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/>",
  "flag-off": "<path d=\"M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528\"/><path d=\"m2 2 20 20\"/><path d=\"M4 22V4\"/><path d=\"M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347\"/>",
  "flag-triangle-left": "<path d=\"M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5\"/>",
  "flag-triangle-right": "<path d=\"M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5\"/>",
  "flag": "<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"/><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"/>",
  "flame-kindling": "<path d=\"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z\"/><path d=\"m5 22 14-4\"/><path d=\"m5 18 14 4\"/>",
  "flame": "<path d=\"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4\"/>",
  "flashlight-off": "<path d=\"M11.652 6H18\"/><path d=\"M12 13v1\"/><path d=\"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6\"/><path d=\"m2 2 20 20\"/><path d=\"M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007\"/>",
  "flashlight": "<path d=\"M12 13v1\"/><path d=\"M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z\"/><path d=\"M6 6h12\"/>",
  "flask-conical-off": "<path d=\"M10 2v2.343\"/><path d=\"M14 2v6.343\"/><path d=\"m2 2 20 20\"/><path d=\"M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563\"/><path d=\"M6.453 15H15\"/><path d=\"M8.5 2h7\"/>",
  "flask-conical": "<path d=\"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2\"/><path d=\"M6.453 15h11.094\"/><path d=\"M8.5 2h7\"/>",
  "flask-round": "<path d=\"M10 2v6.292a7 7 0 1 0 4 0V2\"/><path d=\"M5 15h14\"/><path d=\"M8.5 2h7\"/>",
  "flip-horizontal-2": "<path d=\"m3 7 5 5-5 5V7\"/><path d=\"m21 7-5 5 5 5V7\"/><path d=\"M12 20v2\"/><path d=\"M12 14v2\"/><path d=\"M12 8v2\"/><path d=\"M12 2v2\"/>",
  "flip-vertical-2": "<path d=\"m17 3-5 5-5-5h10\"/><path d=\"m17 21-5-5-5 5h10\"/><path d=\"M4 12H2\"/><path d=\"M10 12H8\"/><path d=\"M16 12h-2\"/><path d=\"M22 12h-2\"/>",
  "flower-2": "<path d=\"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1\"/><circle cx=\"12\" cy=\"8\" r=\"2\"/><path d=\"M12 10v12\"/><path d=\"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z\"/><path d=\"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z\"/>",
  "flower": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5\"/><path d=\"M12 7.5V9\"/><path d=\"M7.5 12H9\"/><path d=\"M16.5 12H15\"/><path d=\"M12 16.5V15\"/><path d=\"m8 8 1.88 1.88\"/><path d=\"M14.12 9.88 16 8\"/><path d=\"m8 16 1.88-1.88\"/><path d=\"M14.12 14.12 16 16\"/>",
  "focus": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/>",
  "fold-horizontal": "<path d=\"M2 12h6\"/><path d=\"M22 12h-6\"/><path d=\"M12 2v2\"/><path d=\"M12 8v2\"/><path d=\"M12 14v2\"/><path d=\"M12 20v2\"/><path d=\"m19 9-3 3 3 3\"/><path d=\"m5 15 3-3-3-3\"/>",
  "fold-vertical": "<path d=\"M12 22v-6\"/><path d=\"M12 8V2\"/><path d=\"M4 12H2\"/><path d=\"M10 12H8\"/><path d=\"M16 12h-2\"/><path d=\"M22 12h-2\"/><path d=\"m15 19-3-3-3 3\"/><path d=\"m15 5-3 3-3-3\"/>",
  "folder-archive": "<circle cx=\"15\" cy=\"19\" r=\"2\"/><path d=\"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1\"/><path d=\"M15 11v-1\"/><path d=\"M15 17v-2\"/>",
  "folder-bookmark": "<path d=\"M12 6v8l3-3 3 3V6\"/><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z\"/>",
  "folder-check": "<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/><path d=\"m9 13 2 2 4-4\"/>",
  "folder-clock": "<path d=\"M16 14v2.2l1.6 1\"/><path d=\"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2\"/><circle cx=\"16\" cy=\"16\" r=\"6\"/>",
  "folder-closed": "<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/><path d=\"M2 10h20\"/>",
  "folder-code": "<path d=\"M10 10.5 8 13l2 2.5\"/><path d=\"m14 10.5 2 2.5-2 2.5\"/><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z\"/>",
  "folder-cog": "<path d=\"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3\"/><path d=\"m14.305 19.53.923-.382\"/><path d=\"m15.228 16.852-.923-.383\"/><path d=\"m16.852 15.228-.383-.923\"/><path d=\"m16.852 20.772-.383.924\"/><path d=\"m19.148 15.228.383-.923\"/><path d=\"m19.53 21.696-.382-.924\"/><path d=\"m20.772 16.852.924-.383\"/><path d=\"m20.772 19.148.924.383\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/>",
  "folder-dot": "<path d=\"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z\"/><circle cx=\"12\" cy=\"13\" r=\"1\"/>",
  "folder-down": "<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/><path d=\"M12 10v6\"/><path d=\"m15 13-3 3-3-3\"/>",
  "folder-git-2": "<path d=\"M18 19a5 5 0 0 1-5-5v8\"/><path d=\"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5\"/><circle cx=\"13\" cy=\"12\" r=\"2\"/><circle cx=\"20\" cy=\"19\" r=\"2\"/>",
  "folder-git": "<circle cx=\"12\" cy=\"13\" r=\"2\"/><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/><path d=\"M14 13h3\"/><path d=\"M7 13h3\"/>",
  "folder-heart": "<path d=\"M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417\"/><path d=\"M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z\"/>",
  "folder-input": "<path d=\"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1\"/><path d=\"M2 13h10\"/><path d=\"m9 16 3-3-3-3\"/>",
  "folder-kanban": "<path d=\"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z\"/><path d=\"M8 10v4\"/><path d=\"M12 10v2\"/><path d=\"M16 10v6\"/>",
  "folder-key": "<path d=\"M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36\"/><path d=\"M19 12v6\"/><path d=\"M19 14h2\"/><circle cx=\"19\" cy=\"20\" r=\"2\"/>",
  "folder-lock": "<rect width=\"8\" height=\"5\" x=\"14\" y=\"17\" rx=\"1\"/><path d=\"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5\"/><path d=\"M20 17v-2a2 2 0 1 0-4 0v2\"/>",
  "folder-minus": "<path d=\"M9 13h6\"/><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/>",
  "folder-open-dot": "<path d=\"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2\"/><circle cx=\"14\" cy=\"15\" r=\"1\"/>",
  "folder-open": "<path d=\"M6 14l1.5-2.5h10L22 14\"/><path d=\"M2 19a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v3\"/>",
  "folder-output": "<path d=\"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5\"/><path d=\"M2 13h10\"/><path d=\"m5 10-3 3 3 3\"/>",
  "folder-pen": "<path d=\"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5\"/><path d=\"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/>",
  "folder-plus": "<path d=\"M12 10v6\"/><path d=\"M9 13h6\"/><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/>",
  "folder-root": "<path d=\"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z\"/><circle cx=\"12\" cy=\"13\" r=\"2\"/><path d=\"M12 15v5\"/>",
  "folder-search-2": "<circle cx=\"11.5\" cy=\"12.5\" r=\"2.5\"/><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/><path d=\"M13.3 14.3 15 16\"/>",
  "folder-search": "<path d=\"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1\"/><path d=\"m21 21-1.9-1.9\"/><circle cx=\"17\" cy=\"17\" r=\"3\"/>",
  "folder-symlink": "<path d=\"M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7\"/><path d=\"m8 16 3-3-3-3\"/>",
  "folder-sync": "<path d=\"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5\"/><path d=\"M12 10v4h4\"/><path d=\"m12 14 1.535-1.605a5 5 0 0 1 8 1.5\"/><path d=\"M22 22v-4h-4\"/><path d=\"m22 18-1.535 1.605a5 5 0 0 1-8-1.5\"/>",
  "folder-tree": "<path d=\"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z\"/><path d=\"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z\"/><path d=\"M3 5a2 2 0 0 0 2 2h3\"/><path d=\"M3 3v13a2 2 0 0 0 2 2h3\"/>",
  "folder-up": "<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/><path d=\"M12 10v6\"/><path d=\"m9 13 3-3 3 3\"/>",
  "folder-x": "<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/><path d=\"m9.5 10.5 5 5\"/><path d=\"m14.5 10.5-5 5\"/>",
  "folder": "<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"/>",
  "folders": "<path d=\"M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z\"/><path d=\"M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1\"/>",
  "footprints": "<path d=\"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z\"/><path d=\"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z\"/><path d=\"M16 17h4\"/><path d=\"M4 13h4\"/>",
  "forklift": "<path d=\"M12 12H5a2 2 0 0 0-2 2v5\"/><path d=\"M15 19h7\"/><path d=\"M16 19V2\"/><path d=\"M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828\"/><path d=\"M7 19h4\"/><circle cx=\"13\" cy=\"19\" r=\"2\"/><circle cx=\"5\" cy=\"19\" r=\"2\"/>",
  "form": "<path d=\"M4 14h6\"/><path d=\"M4 2h10\"/><rect x=\"4\" y=\"18\" width=\"16\" height=\"4\" rx=\"1\"/><rect x=\"4\" y=\"6\" width=\"16\" height=\"4\" rx=\"1\"/>",
  "forward": "<path d=\"m15 17 5-5-5-5\"/><path d=\"M4 18v-2a4 4 0 0 1 4-4h12\"/>",
  "frame": "<line x1=\"22\" x2=\"2\" y1=\"6\" y2=\"6\"/><line x1=\"22\" x2=\"2\" y1=\"18\" y2=\"18\"/><line x1=\"6\" x2=\"6\" y1=\"2\" y2=\"22\"/><line x1=\"18\" x2=\"18\" y1=\"2\" y2=\"22\"/>",
  "frown": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"/><line x1=\"9\" x2=\"9.01\" y1=\"9\" y2=\"9\"/><line x1=\"15\" x2=\"15.01\" y1=\"9\" y2=\"9\"/>",
  "fuel": "<path d=\"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5\"/><path d=\"M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16\"/><path d=\"M2 21h13\"/><path d=\"M3 9h11\"/>",
  "fullscreen": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><rect width=\"10\" height=\"8\" x=\"7\" y=\"8\" rx=\"1\"/>",
  "funnel-plus": "<path d=\"M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348\"/><path d=\"M16 6h6\"/><path d=\"M19 3v6\"/>",
  "funnel-x": "<path d=\"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473\"/><path d=\"m16.5 3.5 5 5\"/><path d=\"m21.5 3.5-5 5\"/>",
  "funnel": "<path d=\"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z\"/>",
  "gallery-horizontal-end": "<path d=\"M2 7v10\"/><path d=\"M6 5v14\"/><rect width=\"12\" height=\"18\" x=\"10\" y=\"3\" rx=\"2\"/>",
  "gallery-horizontal": "<path d=\"M2 3v18\"/><rect width=\"12\" height=\"18\" x=\"6\" y=\"3\" rx=\"2\"/><path d=\"M22 3v18\"/>",
  "gallery-thumbnails": "<rect width=\"18\" height=\"14\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M4 21h1\"/><path d=\"M9 21h1\"/><path d=\"M14 21h1\"/><path d=\"M19 21h1\"/>",
  "gallery-vertical-end": "<path d=\"M7 2h10\"/><path d=\"M5 6h14\"/><rect width=\"18\" height=\"12\" x=\"3\" y=\"10\" rx=\"2\"/>",
  "gallery-vertical": "<path d=\"M3 2h18\"/><rect width=\"18\" height=\"12\" x=\"3\" y=\"6\" rx=\"2\"/><path d=\"M3 22h18\"/>",
  "gamepad-2": "<line x1=\"6\" x2=\"10\" y1=\"11\" y2=\"11\"/><line x1=\"8\" x2=\"8\" y1=\"9\" y2=\"13\"/><line x1=\"15\" x2=\"15.01\" y1=\"12\" y2=\"12\"/><line x1=\"18\" x2=\"18.01\" y1=\"10\" y2=\"10\"/><path d=\"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z\"/>",
  "gamepad-directional": "<path d=\"M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z\"/><path d=\"M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z\"/><path d=\"M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z\"/><path d=\"M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z\"/>",
  "gamepad": "<line x1=\"6\" x2=\"10\" y1=\"12\" y2=\"12\"/><line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\"/><line x1=\"15\" x2=\"15.01\" y1=\"13\" y2=\"13\"/><line x1=\"18\" x2=\"18.01\" y1=\"11\" y2=\"11\"/><rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/>",
  "gauge": "<path d=\"m12 14 4-4\"/><path d=\"M3.34 19a10 10 0 1 1 17.32 0\"/>",
  "gavel": "<path d=\"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381\"/><path d=\"m16 16 6-6\"/><path d=\"m21.5 10.5-8-8\"/><path d=\"m8 8 6-6\"/><path d=\"m8.5 7.5 8 8\"/>",
  "gem": "<path d=\"M10.5 3 8 9l4 13 4-13-2.5-6\"/><path d=\"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z\"/><path d=\"M2 9h20\"/>",
  "georgian-lari": "<path d=\"M11.5 21a7.5 7.5 0 1 1 7.35-9\"/><path d=\"M13 12V3\"/><path d=\"M4 21h16\"/><path d=\"M9 12V3\"/>",
  "ghost": "<path d=\"M9 10h.01\"/><path d=\"M15 10h.01\"/><path d=\"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z\"/>",
  "gift": "<polyline points=\"20 12 20 22 4 22 4 12\"/><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"/><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"/><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"/><path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"/>",
  "git-branch-minus": "<path d=\"M15 6a9 9 0 0 0-9 9V3\"/><path d=\"M21 18h-6\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/>",
  "git-branch-plus": "<path d=\"M6 3v12\"/><path d=\"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/><path d=\"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/><path d=\"M15 6a9 9 0 0 0-9 9\"/><path d=\"M18 15v6\"/><path d=\"M21 18h-6\"/>",
  "git-branch": "<path d=\"M15 6a9 9 0 0 0-9 9V3\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/>",
  "git-commit-horizontal": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><line x1=\"3\" x2=\"9\" y1=\"12\" y2=\"12\"/><line x1=\"15\" x2=\"21\" y1=\"12\" y2=\"12\"/>",
  "git-commit-vertical": "<path d=\"M12 3v6\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 15v6\"/>",
  "git-compare-arrows": "<circle cx=\"5\" cy=\"6\" r=\"3\"/><path d=\"M12 6h5a2 2 0 0 1 2 2v7\"/><path d=\"m15 9-3-3 3-3\"/><circle cx=\"19\" cy=\"18\" r=\"3\"/><path d=\"M12 18H7a2 2 0 0 1-2-2V9\"/><path d=\"m9 15 3 3-3 3\"/>",
  "git-compare": "<circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"/><path d=\"M11 18H8a2 2 0 0 1-2-2V9\"/>",
  "git-fork": "<circle cx=\"12\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/><path d=\"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9\"/><path d=\"M12 12v3\"/>",
  "git-graph": "<circle cx=\"5\" cy=\"6\" r=\"3\"/><path d=\"M5 9v6\"/><circle cx=\"5\" cy=\"18\" r=\"3\"/><path d=\"M12 3v18\"/><circle cx=\"19\" cy=\"6\" r=\"3\"/><path d=\"M16 15.7A9 9 0 0 0 19 9\"/>",
  "git-merge-conflict": "<path d=\"M12 6h4a2 2 0 0 1 2 2v7\"/><path d=\"M6 12v9\"/><path d=\"M9 3 3 9\"/><path d=\"M9 9 3 3\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/>",
  "git-merge": "<circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M6 21V9a9 9 0 0 0 9 9\"/>",
  "git-pull-request-arrow": "<circle cx=\"5\" cy=\"6\" r=\"3\"/><path d=\"M5 9v12\"/><circle cx=\"19\" cy=\"18\" r=\"3\"/><path d=\"m15 9-3-3 3-3\"/><path d=\"M12 6h5a2 2 0 0 1 2 2v7\"/>",
  "git-pull-request-closed": "<circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M6 9v12\"/><path d=\"m21 3-6 6\"/><path d=\"m21 9-6-6\"/><path d=\"M18 11.5V15\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/>",
  "git-pull-request-create-arrow": "<circle cx=\"5\" cy=\"6\" r=\"3\"/><path d=\"M5 9v12\"/><path d=\"m15 9-3-3 3-3\"/><path d=\"M12 6h5a2 2 0 0 1 2 2v3\"/><path d=\"M19 15v6\"/><path d=\"M22 18h-6\"/>",
  "git-pull-request-create": "<circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M6 9v12\"/><path d=\"M13 6h3a2 2 0 0 1 2 2v3\"/><path d=\"M18 15v6\"/><path d=\"M21 18h-6\"/>",
  "git-pull-request-draft": "<circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M18 6V5\"/><path d=\"M18 11v-1\"/><line x1=\"6\" x2=\"6\" y1=\"9\" y2=\"21\"/>",
  "git-pull-request": "<circle cx=\"18\" cy=\"18\" r=\"3\"/><circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"/><line x1=\"6\" x2=\"6\" y1=\"9\" y2=\"21\"/>",
  "glass-water": "<path d=\"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z\"/><path d=\"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0\"/>",
  "glasses": "<circle cx=\"6\" cy=\"15\" r=\"4\"/><circle cx=\"18\" cy=\"15\" r=\"4\"/><path d=\"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2\"/><path d=\"M2.5 13 5 7c.7-1.3 1.4-2 3-2\"/><path d=\"M21.5 13 19 7c-.7-1.3-1.5-2-3-2\"/>",
  "globe-check": "<path d=\"m15 6 2 2 4-4\"/><path d=\"M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10\"/>",
  "globe-lock": "<path d=\"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13\"/><path d=\"M2 12h8.5\"/><path d=\"M20 6V4a2 2 0 1 0-4 0v2\"/><rect width=\"8\" height=\"5\" x=\"14\" y=\"6\" rx=\"1\"/>",
  "globe-off": "<path d=\"M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643\"/><path d=\"M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929\"/><path d=\"M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687\"/><path d=\"M17.656 12H22\"/><path d=\"M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45\"/><path d=\"M2 12h10\"/><path d=\"m2 2 20 20\"/>",
  "globe-x": "<path d=\"m16 3 5 5\"/><path d=\"M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10\"/><path d=\"m21 3-5 5\"/>",
  "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"/><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"/>",
  "goal": "<path d=\"M12 13V2l8 4-8 4\"/><path d=\"M20.561 10.222a9 9 0 1 1-12.55-5.29\"/><path d=\"M8.002 9.997a5 5 0 1 0 8.9 2.02\"/>",
  "gpu": "<path d=\"M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2\"/><path d=\"M2 21V3\"/><path d=\"M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3\"/><circle cx=\"16\" cy=\"11\" r=\"2\"/><circle cx=\"8\" cy=\"11\" r=\"2\"/>",
  "graduation-cap": "<path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\"/><path d=\"M22 10v6\"/><path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\"/>",
  "grape": "<path d=\"M22 5V2l-5.89 5.89\"/><circle cx=\"16.6\" cy=\"15.89\" r=\"3\"/><circle cx=\"8.11\" cy=\"7.4\" r=\"3\"/><circle cx=\"12.35\" cy=\"11.65\" r=\"3\"/><circle cx=\"13.91\" cy=\"5.85\" r=\"3\"/><circle cx=\"18.15\" cy=\"10.09\" r=\"3\"/><circle cx=\"6.56\" cy=\"13.2\" r=\"3\"/><circle cx=\"10.8\" cy=\"17.44\" r=\"3\"/><circle cx=\"5\" cy=\"19\" r=\"3\"/>",
  "grid-2x2-check": "<path d=\"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3\"/><path d=\"m16 19 2 2 4-4\"/>",
  "grid-2x2-plus": "<path d=\"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3\"/><path d=\"M16 19h6\"/><path d=\"M19 22v-6\"/>",
  "grid-2x2-x": "<path d=\"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3\"/><path d=\"m16 16 5 5\"/><path d=\"m16 21 5-5\"/>",
  "grid-2x2": "<path d=\"M12 3v18\"/><path d=\"M3 12h18\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "grid-3x2": "<path d=\"M15 3v18\"/><path d=\"M3 12h18\"/><path d=\"M9 3v18\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "grid-3x3": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"M3 15h18\"/><path d=\"M9 3v18\"/><path d=\"M15 3v18\"/>",
  "grip-horizontal": "<circle cx=\"12\" cy=\"9\" r=\"1\"/><circle cx=\"19\" cy=\"9\" r=\"1\"/><circle cx=\"5\" cy=\"9\" r=\"1\"/><circle cx=\"12\" cy=\"15\" r=\"1\"/><circle cx=\"19\" cy=\"15\" r=\"1\"/><circle cx=\"5\" cy=\"15\" r=\"1\"/>",
  "grip-vertical": "<circle cx=\"9\" cy=\"12\" r=\"1\"/><circle cx=\"9\" cy=\"5\" r=\"1\"/><circle cx=\"9\" cy=\"19\" r=\"1\"/><circle cx=\"15\" cy=\"12\" r=\"1\"/><circle cx=\"15\" cy=\"5\" r=\"1\"/><circle cx=\"15\" cy=\"19\" r=\"1\"/>",
  "grip": "<circle cx=\"12\" cy=\"5\" r=\"1\"/><circle cx=\"19\" cy=\"5\" r=\"1\"/><circle cx=\"5\" cy=\"5\" r=\"1\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"19\" cy=\"12\" r=\"1\"/><circle cx=\"5\" cy=\"12\" r=\"1\"/><circle cx=\"12\" cy=\"19\" r=\"1\"/><circle cx=\"19\" cy=\"19\" r=\"1\"/><circle cx=\"5\" cy=\"19\" r=\"1\"/>",
  "group": "<path d=\"M3 7V5c0-1.1.9-2 2-2h2\"/><path d=\"M17 3h2c1.1 0 2 .9 2 2v2\"/><path d=\"M21 17v2c0 1.1-.9 2-2 2h-2\"/><path d=\"M7 21H5c-1.1 0-2-.9-2-2v-2\"/><rect width=\"7\" height=\"5\" x=\"7\" y=\"7\" rx=\"1\"/><rect width=\"7\" height=\"5\" x=\"10\" y=\"12\" rx=\"1\"/>",
  "guitar": "<path d=\"m11.9 12.1 4.514-4.514\"/><path d=\"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z\"/><path d=\"m6 16 2 2\"/><path d=\"M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z\"/>",
  "ham": "<path d=\"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856\"/><path d=\"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288\"/><path d=\"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025\"/><path d=\"m8.5 16.5-1-1\"/>",
  "hamburger": "<path d=\"M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25\"/><path d=\"M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2\"/><path d=\"M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0\"/><path d=\"m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2\"/>",
  "hammer": "<path d=\"M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9\"/><path d=\"M17.64 15L22 10.64\"/><path d=\"M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h.86c.85 0 1.65.33 2.25.93l1.25 1.25\"/>",
  "hand-coins": "<path d=\"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17\"/><path d=\"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\"/><path d=\"m2 16 6 6\"/><circle cx=\"16\" cy=\"9\" r=\"2.9\"/><circle cx=\"6\" cy=\"5\" r=\"3\"/>",
  "hand-fist": "<path d=\"M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0\"/><path d=\"M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5\"/><path d=\"M9 5A2 2 0 1 0 5 5V10\"/><path d=\"M9 7V4A2 2 0 1 1 13 4V7.268\"/>",
  "hand-grab": "<path d=\"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4\"/><path d=\"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2\"/><path d=\"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5\"/><path d=\"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2\"/><path d=\"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0\"/>",
  "hand-heart": "<path d=\"M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16\"/><path d=\"m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95\"/><path d=\"m2 15 6 6\"/><path d=\"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91\"/>",
  "hand-helping": "<path d=\"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14\"/><path d=\"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9\"/><path d=\"m2 13 6 6\"/>",
  "hand-metal": "<path d=\"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4\"/><path d=\"M14 11V9a2 2 0 1 0-4 0v2\"/><path d=\"M10 10.5V5a2 2 0 1 0-4 0v9\"/><path d=\"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5\"/>",
  "hand-platter": "<path d=\"M12 3V2\"/><path d=\"m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5\"/><path d=\"M2 14h12a2 2 0 0 1 0 4h-2\"/><path d=\"M4 10h16\"/><path d=\"M5 10a7 7 0 0 1 14 0\"/><path d=\"M5 14v6a1 1 0 0 1-1 1H2\"/>",
  "hand": "<path d=\"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2\"/><path d=\"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2\"/><path d=\"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8\"/><path d=\"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\"/>",
  "handbag": "<path d=\"M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z\"/><path d=\"M8 11V6a4 4 0 0 1 8 0v5\"/>",
  "handshake": "<path d=\"m11 17 2 2a1 1 0 1 0 3-3\"/><path d=\"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4\"/><path d=\"m21 3 1 11h-2\"/><path d=\"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3\"/><path d=\"M3 4h8\"/>",
  "hard-drive-download": "<path d=\"M12 2v8\"/><path d=\"m16 6-4 4-4-4\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6 18h.01\"/><path d=\"M10 18h.01\"/>",
  "hard-drive-upload": "<path d=\"m16 6-4-4-4 4\"/><path d=\"M12 2v8\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6 18h.01\"/><path d=\"M10 18h.01\"/>",
  "hard-drive": "<path d=\"M10 16h.01\"/><path d=\"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"/><path d=\"M21.946 12.013H2.054\"/><path d=\"M6 16h.01\"/>",
  "hard-hat": "<path d=\"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5\"/><path d=\"M14 6a6 6 0 0 1 6 6v3\"/><path d=\"M4 15v-3a6 6 0 0 1 6-6\"/><rect x=\"2\" y=\"15\" width=\"20\" height=\"4\" rx=\"1\"/>",
  "hash": "<line x1=\"4\" x2=\"20\" y1=\"9\" y2=\"9\"/><line x1=\"4\" x2=\"20\" y1=\"15\" y2=\"15\"/><line x1=\"10\" x2=\"8\" y1=\"3\" y2=\"21\"/><line x1=\"16\" x2=\"14\" y1=\"3\" y2=\"21\"/>",
  "hat-glasses": "<path d=\"M14 18a2 2 0 0 0-4 0\"/><path d=\"m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11\"/><path d=\"M2 11h20\"/><circle cx=\"17\" cy=\"18\" r=\"3\"/><circle cx=\"7\" cy=\"18\" r=\"3\"/>",
  "haze": "<path d=\"m5.2 6.2 1.4 1.4\"/><path d=\"M2 13h2\"/><path d=\"M20 13h2\"/><path d=\"m17.4 7.6 1.4-1.4\"/><path d=\"M22 17H2\"/><path d=\"M22 21H2\"/><path d=\"M16 13a4 4 0 0 0-8 0\"/><path d=\"M12 5V2.5\"/>",
  "hd": "<path d=\"M10 12H6\"/><path d=\"M10 15V9\"/><path d=\"M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z\"/><path d=\"M6 15V9\"/><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/>",
  "hdmi-port": "<path d=\"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z\"/><path d=\"M7.5 12h9\"/>",
  "heading-1": "<path d=\"M4 12h8\"/><path d=\"M4 18V6\"/><path d=\"M12 18V6\"/><path d=\"m17 12 3-2v8\"/>",
  "heading-2": "<path d=\"M4 12h8\"/><path d=\"M4 18V6\"/><path d=\"M12 18V6\"/><path d=\"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1\"/>",
  "heading-3": "<path d=\"M4 12h8\"/><path d=\"M4 18V6\"/><path d=\"M12 18V6\"/><path d=\"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2\"/><path d=\"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2\"/>",
  "heading-4": "<path d=\"M12 18V6\"/><path d=\"M17 10v3a1 1 0 0 0 1 1h3\"/><path d=\"M21 10v8\"/><path d=\"M4 12h8\"/><path d=\"M4 18V6\"/>",
  "heading-5": "<path d=\"M4 12h8\"/><path d=\"M4 18V6\"/><path d=\"M12 18V6\"/><path d=\"M17 13v-3h4\"/><path d=\"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17\"/>",
  "heading-6": "<path d=\"M4 12h8\"/><path d=\"M4 18V6\"/><path d=\"M12 18V6\"/><circle cx=\"19\" cy=\"16\" r=\"2\"/><path d=\"M20 10c-2 2-3 3.5-3 6\"/>",
  "heading": "<path d=\"M6 12h12\"/><path d=\"M6 20V4\"/><path d=\"M18 20V4\"/>",
  "headphone-off": "<path d=\"M21 14h-1.343\"/><path d=\"M9.128 3.47A9 9 0 0 1 21 12v3.343\"/><path d=\"m2 2 20 20\"/><path d=\"M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3\"/><path d=\"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364\"/>",
  "headphones": "<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"/><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"/>",
  "headset": "<path d=\"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z\"/><path d=\"M21 16v2a4 4 0 0 1-4 4h-5\"/>",
  "heart-crack": "<path d=\"M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15\"/><path d=\"M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z\"/>",
  "heart-handshake": "<path d=\"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762\"/>",
  "heart-minus": "<path d=\"m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572\"/><path d=\"M15 15h6\"/>",
  "heart-off": "<path d=\"M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655\"/><path d=\"m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761\"/><path d=\"m2 2 20 20\"/>",
  "heart-plus": "<path d=\"m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49\"/><path d=\"M15 15h6\"/><path d=\"M18 12v6\"/>",
  "heart-pulse": "<path d=\"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5\"/><path d=\"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\"/>",
  "heart-x": "<path d=\"m15.5 12.5 5 5\"/><path d=\"m20.5 12.5-5 5\"/><path d=\"M21.955 8.774a5.5 5.5 0 0 0-9.546-2.95.6.6 0 0 1-.818 0A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.508 5.332a2 2 0 0 0 2.57.352\"/>",
  "heart": "<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"/>",
  "heater": "<path d=\"M11 8c2-3-2-3 0-6\"/><path d=\"M15.5 8c2-3-2-3 0-6\"/><path d=\"M6 10h.01\"/><path d=\"M6 14h.01\"/><path d=\"M10 16v-4\"/><path d=\"M14 16v-4\"/><path d=\"M18 16v-4\"/><path d=\"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3\"/><path d=\"M5 20v2\"/><path d=\"M19 20v2\"/>",
  "helicopter": "<path d=\"M11 17v4\"/><path d=\"M14 3v8a2 2 0 0 0 2 2h5.865\"/><path d=\"M17 17v4\"/><path d=\"M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z\"/><path d=\"M2 10v5\"/><path d=\"M6 3h16\"/><path d=\"M7 21h14\"/><path d=\"M8 13H2\"/>",
  "hexagon": "<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"/>",
  "highlighter": "<path d=\"m9 11-6 6v3h9l3-3\"/><path d=\"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4\"/>",
  "history": "<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/><path d=\"M12 7v5l4 2\"/>",
  "hop-off": "<path d=\"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27\"/><path d=\"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28\"/><path d=\"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26\"/><path d=\"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25\"/><path d=\"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75\"/><path d=\"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24\"/><path d=\"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28\"/><path d=\"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05\"/><path d=\"m2 2 20 20\"/>",
  "hop": "<path d=\"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18\"/><path d=\"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88\"/><path d=\"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36\"/><path d=\"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87\"/><path d=\"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08\"/><path d=\"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57\"/><path d=\"M4.93 4.93 3 3a.7.7 0 0 1 0-1\"/><path d=\"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15\"/>",
  "hospital": "<path d=\"M12 7v4\"/><path d=\"M14 21v-3a2 2 0 0 0-4 0v3\"/><path d=\"M14 9h-4\"/><path d=\"M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2\"/><path d=\"M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16\"/>",
  "hotel": "<path d=\"M10 22v-6.57\"/><path d=\"M12 11h.01\"/><path d=\"M12 7h.01\"/><path d=\"M14 15.43V22\"/><path d=\"M15 16a5 5 0 0 0-6 0\"/><path d=\"M16 11h.01\"/><path d=\"M16 7h.01\"/><path d=\"M8 11h.01\"/><path d=\"M8 7h.01\"/><rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\"/>",
  "hourglass": "<path d=\"M5 22h14\"/><path d=\"M5 2h14\"/><path d=\"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22\"/><path d=\"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2\"/>",
  "house-heart": "<path d=\"M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>",
  "house-plug": "<path d=\"M10 12V8.964\"/><path d=\"M14 12V8.964\"/><path d=\"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z\"/><path d=\"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2\"/>",
  "house-plus": "<path d=\"M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35\"/><path d=\"M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8\"/><path d=\"M15 18h6\"/><path d=\"M18 15v6\"/>",
  "house-wifi": "<path d=\"M9.5 13.866a4 4 0 0 1 5 .01\"/><path d=\"M12 17h.01\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><path d=\"M7 10.754a8 8 0 0 1 10 0\"/>",
  "house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>",
  "ice-cream-bowl": "<path d=\"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0\"/><path d=\"M12.14 11a3.5 3.5 0 1 1 6.71 0\"/><path d=\"M15.5 6.5a3.5 3.5 0 1 0-7 0\"/>",
  "ice-cream-cone": "<path d=\"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11\"/><path d=\"M17 7A5 5 0 0 0 7 7\"/><path d=\"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4\"/>",
  "id-card-lanyard": "<path d=\"M13.5 8h-3\"/><path d=\"m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3\"/><path d=\"M16.899 22A5 5 0 0 0 7.1 22\"/><path d=\"m9 2 3 6\"/><circle cx=\"12\" cy=\"15\" r=\"3\"/>",
  "id-card": "<path d=\"M16 10h2\"/><path d=\"M16 14h2\"/><path d=\"M6.17 15a3 3 0 0 1 5.66 0\"/><circle cx=\"9\" cy=\"11\" r=\"2\"/><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/>",
  "image-down": "<path d=\"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21\"/><path d=\"m14 19 3 3v-5.5\"/><path d=\"m17 22 3-3\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/>",
  "image-minus": "<path d=\"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7\"/><line x1=\"16\" x2=\"22\" y1=\"5\" y2=\"5\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"/>",
  "image-off": "<line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/><path d=\"M10.41 10.41a2 2 0 1 1-2.83-2.83\"/><line x1=\"13.5\" x2=\"6\" y1=\"13.5\" y2=\"21\"/><line x1=\"18\" x2=\"21\" y1=\"12\" y2=\"15\"/><path d=\"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59\"/><path d=\"M21 15V5a2 2 0 0 0-2-2H9\"/>",
  "image-play": "<path d=\"M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z\"/><path d=\"M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6\"/><path d=\"m6 21 5-5\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/>",
  "image-plus": "<path d=\"M16 5h6\"/><path d=\"M19 2v6\"/><path d=\"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5\"/><path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/>",
  "image-up": "<path d=\"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21\"/><path d=\"m14 19.5 3-3 3 3\"/><path d=\"M17 22v-5.5\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/>",
  "image-upscale": "<path d=\"M16 3h5v5\"/><path d=\"M17 21h2a2 2 0 0 0 2-2\"/><path d=\"M21 12v3\"/><path d=\"m21 3-5 5\"/><path d=\"M3 7V5a2 2 0 0 1 2-2\"/><path d=\"m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19\"/><path d=\"M9 3h3\"/><rect x=\"3\" y=\"11\" width=\"10\" height=\"10\" rx=\"1\"/>",
  "image": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/>",
  "images": "<path d=\"m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16\"/><path d=\"M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2\"/><circle cx=\"13\" cy=\"7\" r=\"1\" fill=\"currentColor\"/><rect x=\"8\" y=\"2\" width=\"14\" height=\"14\" rx=\"2\"/>",
  "import": "<path d=\"M12 3v12\"/><path d=\"m8 11 4 4 4-4\"/><path d=\"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4\"/>",
  "inbox": "<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"/><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"/>",
  "indian-rupee": "<path d=\"M6 3h12\"/><path d=\"M6 8h12\"/><path d=\"m6 13 8.5 8\"/><path d=\"M6 13h3\"/><path d=\"M9 13c6.667 0 6.667-10 0-10\"/>",
  "infinity": "<path d=\"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8\"/>",
  "info": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"/>",
  "inspection-panel": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 7h.01\"/><path d=\"M17 7h.01\"/><path d=\"M7 17h.01\"/><path d=\"M17 17h.01\"/>",
  "italic": "<line x1=\"19\" x2=\"10\" y1=\"4\" y2=\"4\"/><line x1=\"14\" x2=\"5\" y1=\"20\" y2=\"20\"/><line x1=\"15\" x2=\"9\" y1=\"4\" y2=\"20\"/>",
  "iteration-ccw": "<path d=\"m16 14 4 4-4 4\"/><path d=\"M20 10a8 8 0 1 0-8 8h8\"/>",
  "iteration-cw": "<path d=\"M4 10a8 8 0 1 1 8 8H4\"/><path d=\"m8 22-4-4 4-4\"/>",
  "japanese-yen": "<path d=\"M12 9.5V21m0-11.5L6 3m6 6.5L18 3\"/><path d=\"M6 15h12\"/><path d=\"M6 11h12\"/>",
  "joystick": "<path d=\"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z\"/><path d=\"M6 15v-2\"/><path d=\"M12 15V9\"/><circle cx=\"12\" cy=\"6\" r=\"3\"/>",
  "kanban": "<path d=\"M5 3v14\"/><path d=\"M12 3v8\"/><path d=\"M19 3v18\"/>",
  "kayak": "<path d=\"M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z\"/><path d=\"M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61\"/><path d=\"m6.707 6.707 10.586 10.586\"/><path d=\"M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z\"/>",
  "key-round": "<path d=\"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z\"/><circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/>",
  "key-square": "<path d=\"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z\"/><path d=\"m14 7 3 3\"/><path d=\"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814\"/>",
  "key": "<path d=\"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4\"/><path d=\"m21 2-9.6 9.6\"/><circle cx=\"7.5\" cy=\"15.5\" r=\"5.5\"/>",
  "keyboard-music": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M6 8h4\"/><path d=\"M14 8h.01\"/><path d=\"M18 8h.01\"/><path d=\"M2 12h20\"/><path d=\"M6 12v4\"/><path d=\"M10 12v4\"/><path d=\"M14 12v4\"/><path d=\"M18 12v4\"/>",
  "keyboard-off": "<path d=\"M 20 4 A2 2 0 0 1 22 6\"/><path d=\"M 22 6 L 22 16.41\"/><path d=\"M 7 16 L 16 16\"/><path d=\"M 9.69 4 L 20 4\"/><path d=\"M14 8h.01\"/><path d=\"M18 8h.01\"/><path d=\"m2 2 20 20\"/><path d=\"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2\"/><path d=\"M6 8h.01\"/><path d=\"M8 12h.01\"/>",
  "keyboard": "<path d=\"M10 8h.01\"/><path d=\"M12 12h.01\"/><path d=\"M14 8h.01\"/><path d=\"M16 12h.01\"/><path d=\"M18 8h.01\"/><path d=\"M6 8h.01\"/><path d=\"M7 16h10\"/><path d=\"M8 12h.01\"/><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/>",
  "lamp-ceiling": "<path d=\"M12 2v5\"/><path d=\"M14.829 15.998a3 3 0 1 1-5.658 0\"/><path d=\"M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z\"/>",
  "lamp-desk": "<path d=\"M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z\"/><path d=\"m14.207 4.793-3.414 3.414\"/><path d=\"M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"/><path d=\"m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18\"/>",
  "lamp-floor": "<path d=\"M12 10v12\"/><path d=\"M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z\"/><path d=\"M9 22h6\"/>",
  "lamp-wall-down": "<path d=\"M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z\"/><path d=\"M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z\"/><path d=\"M8 6h4a2 2 0 0 1 2 2v5\"/>",
  "lamp-wall-up": "<path d=\"M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z\"/><path d=\"M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z\"/><path d=\"M8 18h4a2 2 0 0 0 2-2v-5\"/>",
  "lamp": "<path d=\"M12 12v6\"/><path d=\"M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z\"/><path d=\"M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z\"/>",
  "land-plot": "<path d=\"m12 8 6-3-6-3v10\"/><path d=\"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12\"/><path d=\"m6.49 12.85 11.02 6.3\"/><path d=\"M17.51 12.85 6.5 19.15\"/>",
  "landmark": "<path d=\"M10 18v-7\"/><path d=\"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z\"/><path d=\"M14 18v-7\"/><path d=\"M18 18v-7\"/><path d=\"M3 22h18\"/><path d=\"M6 18v-7\"/>",
  "languages": "<path d=\"m5 8 6 6\"/><path d=\"m4 14 6-6 2-3\"/><path d=\"M2 5h12\"/><path d=\"M7 2h1\"/><path d=\"m22 22-5-10-5 10\"/><path d=\"M14 18h6\"/>",
  "laptop-minimal-check": "<path d=\"M2 20h20\"/><path d=\"m9 10 2 2 4-4\"/><rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/>",
  "laptop-minimal": "<rect width=\"18\" height=\"12\" x=\"3\" y=\"4\" rx=\"2\" ry=\"2\"/><line x1=\"2\" x2=\"22\" y1=\"20\" y2=\"20\"/>",
  "laptop": "<path d=\"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z\"/><path d=\"M20.054 15.987H3.946\"/>",
  "lasso-select": "<path d=\"M7 22a5 5 0 0 1-2-4\"/><path d=\"M7 16.93c.96.43 1.96.74 2.99.91\"/><path d=\"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2\"/><path d=\"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z\"/><path d=\"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z\"/>",
  "lasso": "<path d=\"M3.704 14.467a10 8 0 1 1 3.115 2.375\"/><path d=\"M7 22a5 5 0 0 1-2-3.994\"/><circle cx=\"5\" cy=\"16\" r=\"2\"/>",
  "laugh": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z\"/><line x1=\"9\" x2=\"9.01\" y1=\"9\" y2=\"9\"/><line x1=\"15\" x2=\"15.01\" y1=\"9\" y2=\"9\"/>",
  "layers-2": "<path d=\"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z\"/><path d=\"m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845\"/>",
  "layers-minus": "<path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.832z\"/><path d=\"M16 17h6\"/><path d=\"M2.003 11.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18\"/><path d=\"M2.003 16.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l2.11-.96\"/><path d=\"M22.018 12.004a1 1 0 0 1-.598.916l-.177.08\"/>",
  "layers-plus": "<path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z\"/><path d=\"M16 17h6\"/><path d=\"M19 14v6\"/><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178\"/><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962\"/>",
  "layers": "<path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\"/><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\"/><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\"/>",
  "layout-dashboard": "<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\"/><rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"/>",
  "layout-grid": "<rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/>",
  "layout-list": "<rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/><path d=\"M14 4h7\"/><path d=\"M14 9h7\"/><path d=\"M14 15h7\"/><path d=\"M14 20h7\"/>",
  "layout-panel-left": "<rect width=\"7\" height=\"18\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\"/>",
  "layout-panel-top": "<rect width=\"18\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\"/>",
  "layout-template": "<rect width=\"18\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"9\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/><rect width=\"5\" height=\"7\" x=\"16\" y=\"14\" rx=\"1\"/>",
  "leaf": "<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z\"/><path d=\"M2 21c0-3 1.85-5.36 5.08-6\"/>",
  "leafy-green": "<path d=\"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22\"/><path d=\"M2 22 17 7\"/>",
  "lectern": "<path d=\"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3\"/><path d=\"M18 6V3a1 1 0 0 0-1-1h-3\"/><rect width=\"8\" height=\"12\" x=\"8\" y=\"10\" rx=\"1\"/>",
  "lens-concave": "<path d=\"M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z\"/>",
  "lens-convex": "<path d=\"M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z\"/>",
  "library-big": "<rect width=\"8\" height=\"18\" x=\"3\" y=\"3\" rx=\"1\"/><path d=\"M7 3v18\"/><path d=\"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z\"/>",
  "library": "<path d=\"m16 6 4 14\"/><path d=\"M12 6v14\"/><path d=\"M8 8v12\"/><path d=\"M4 4v16\"/>",
  "life-buoy": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m4.93 4.93 4.24 4.24\"/><path d=\"m14.83 9.17 4.24-4.24\"/><path d=\"m14.83 14.83 4.24 4.24\"/><path d=\"m9.17 14.83-4.24 4.24\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/>",
  "ligature": "<path d=\"M14 12h2v8\"/><path d=\"M14 20h4\"/><path d=\"M6 12h4\"/><path d=\"M6 20h4\"/><path d=\"M8 20V8a4 4 0 0 1 7.464-2\"/>",
  "lightbulb-off": "<path d=\"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5\"/><path d=\"m2 2 20 20\"/><path d=\"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5\"/><path d=\"M9 18h6\"/><path d=\"M10 22h4\"/>",
  "lightbulb": "<path d=\"M9 18h6\"/><path d=\"M10 22h4\"/><path d=\"M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14\"/>",
  "line-dot-right-horizontal": "<path d=\"M 3 12 L 15 12\"/><circle cx=\"18\" cy=\"12\" r=\"3\"/>",
  "line-squiggle": "<path d=\"M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2\"/>",
  "line-style": "<path d=\"M11 5h2\"/><path d=\"M15 12h6\"/><path d=\"M19 5h2\"/><path d=\"M3 12h6\"/><path d=\"M3 19h18\"/><path d=\"M3 5h2\"/>",
  "link-2-off": "<path d=\"M9 17H7A5 5 0 0 1 7 7\"/><path d=\"M15 7h2a5 5 0 0 1 4 8\"/><line x1=\"8\" x2=\"12\" y1=\"12\" y2=\"12\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
  "link-2": "<path d=\"M9 17H7A5 5 0 0 1 7 7h2\"/><path d=\"M15 7h2a5 5 0 1 1 0 10h-2\"/><line x1=\"8\" x2=\"16\" y1=\"12\" y2=\"12\"/>",
  "link": "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/>",
  "list-check": "<path d=\"M16 5H3\"/><path d=\"M16 12H3\"/><path d=\"M11 19H3\"/><path d=\"m15 18 2 2 4-4\"/>",
  "list-checks": "<path d=\"M13 5h8\"/><path d=\"M13 12h8\"/><path d=\"M13 19h8\"/><path d=\"m3 17 2 2 4-4\"/><path d=\"m3 7 2 2 4-4\"/>",
  "list-chevrons-down-up": "<path d=\"M3 5h8\"/><path d=\"M3 12h8\"/><path d=\"M3 19h8\"/><path d=\"m15 5 3 3 3-3\"/><path d=\"m15 19 3-3 3 3\"/>",
  "list-chevrons-up-down": "<path d=\"M3 5h8\"/><path d=\"M3 12h8\"/><path d=\"M3 19h8\"/><path d=\"m15 8 3-3 3 3\"/><path d=\"m15 16 3 3 3-3\"/>",
  "list-collapse": "<path d=\"M10 5h11\"/><path d=\"M10 12h11\"/><path d=\"M10 19h11\"/><path d=\"m3 10 3-3-3-3\"/><path d=\"m3 20 3-3-3-3\"/>",
  "list-end": "<path d=\"M16 5H3\"/><path d=\"M16 12H3\"/><path d=\"M9 19H3\"/><path d=\"m16 16-3 3 3 3\"/><path d=\"M21 5v12a2 2 0 0 1-2 2h-6\"/>",
  "list-filter-plus": "<path d=\"M12 5H2\"/><path d=\"M6 12h12\"/><path d=\"M9 19h6\"/><path d=\"M16 5h6\"/><path d=\"M19 8V2\"/>",
  "list-filter": "<path d=\"M2 5h20\"/><path d=\"M6 12h12\"/><path d=\"M9 19h6\"/>",
  "list-indent-decrease": "<path d=\"M21 5H11\"/><path d=\"M21 12H11\"/><path d=\"M21 19H11\"/><path d=\"m7 8-4 4 4 4\"/>",
  "list-indent-increase": "<path d=\"M21 5H11\"/><path d=\"M21 12H11\"/><path d=\"M21 19H11\"/><path d=\"m3 8 4 4-4 4\"/>",
  "list-minus": "<path d=\"M16 5H3\"/><path d=\"M11 12H3\"/><path d=\"M16 19H3\"/><path d=\"M21 12h-6\"/>",
  "list-music": "<path d=\"M16 5H3\"/><path d=\"M11 12H3\"/><path d=\"M11 19H3\"/><path d=\"M21 16V5\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/>",
  "list-ordered": "<path d=\"M11 5h10\"/><path d=\"M11 12h10\"/><path d=\"M11 19h10\"/><path d=\"M4 4h1v5\"/><path d=\"M4 9h2\"/><path d=\"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02\"/>",
  "list-plus": "<path d=\"M16 5H3\"/><path d=\"M11 12H3\"/><path d=\"M16 19H3\"/><path d=\"M18 9v6\"/><path d=\"M21 12h-6\"/>",
  "list-restart": "<path d=\"M21 5H3\"/><path d=\"M7 12H3\"/><path d=\"M7 19H3\"/><path d=\"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14\"/><path d=\"M11 10v4h4\"/>",
  "list-sort-ascending": "<path d=\"M3 19h18\"/><path d=\"M15 12H3\"/><path d=\"M9 5H3\"/>",
  "list-sort-descending": "<path d=\"M15 12H3\"/><path d=\"M3 5h18\"/><path d=\"M9 19H3\"/>",
  "list-start": "<path d=\"M3 5h6\"/><path d=\"M3 12h13\"/><path d=\"M3 19h13\"/><path d=\"m16 8-3-3 3-3\"/><path d=\"M21 19V7a2 2 0 0 0-2-2h-6\"/>",
  "list-todo": "<path d=\"M13 5h8\"/><path d=\"M13 12h8\"/><path d=\"M13 19h8\"/><path d=\"m3 17 2 2 4-4\"/><rect x=\"3\" y=\"4\" width=\"6\" height=\"6\" rx=\"1\"/>",
  "list-tree": "<path d=\"M8 5h13\"/><path d=\"M13 12h8\"/><path d=\"M13 19h8\"/><path d=\"M3 10a2 2 0 0 0 2 2h3\"/><path d=\"M3 5v12a2 2 0 0 0 2 2h3\"/>",
  "list-video": "<path d=\"M21 5H3\"/><path d=\"M10 12H3\"/><path d=\"M10 19H3\"/><path d=\"M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z\"/>",
  "list-x": "<path d=\"M16 5H3\"/><path d=\"M11 12H3\"/><path d=\"M16 19H3\"/><path d=\"m15.5 9.5 5 5\"/><path d=\"m20.5 9.5-5 5\"/>",
  "list": "<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"/><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"/><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"/><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"/><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"/><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"/>",
  "loader-circle": "<path d=\"M21 12a9 9 0 1 1-6.219-8.56\"/>",
  "loader-pinwheel": "<path d=\"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0\"/><path d=\"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6\"/><path d=\"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/>",
  "loader": "<path d=\"M12 2v4\"/><path d=\"m16.2 7.8 2.9-2.9\"/><path d=\"M18 12h4\"/><path d=\"m16.2 16.2 2.9 2.9\"/><path d=\"M12 18v4\"/><path d=\"m4.9 19.1 2.9-2.9\"/><path d=\"M2 12h4\"/><path d=\"m4.9 4.9 2.9 2.9\"/>",
  "locate-fixed": "<line x1=\"2\" x2=\"5\" y1=\"12\" y2=\"12\"/><line x1=\"19\" x2=\"22\" y1=\"12\" y2=\"12\"/><line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"5\"/><line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"22\"/><circle cx=\"12\" cy=\"12\" r=\"7\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
  "locate-off": "<path d=\"M12 19v3\"/><path d=\"M12 2v3\"/><path d=\"M18.89 13.24a7 7 0 0 0-8.13-8.13\"/><path d=\"M19 12h3\"/><path d=\"M2 12h3\"/><path d=\"m2 2 20 20\"/><path d=\"M7.05 7.05a7 7 0 0 0 9.9 9.9\"/>",
  "locate": "<line x1=\"2\" x2=\"5\" y1=\"12\" y2=\"12\"/><line x1=\"19\" x2=\"22\" y1=\"12\" y2=\"12\"/><line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"5\"/><line x1=\"12\" x2=\"12\" y1=\"19\" y2=\"22\"/><circle cx=\"12\" cy=\"12\" r=\"7\"/>",
  "lock-keyhole-open": "<circle cx=\"12\" cy=\"16\" r=\"1\"/><rect width=\"18\" height=\"12\" x=\"3\" y=\"10\" rx=\"2\"/><path d=\"M7 10V7a5 5 0 0 1 9.33-2.5\"/>",
  "lock-keyhole": "<circle cx=\"12\" cy=\"16\" r=\"1\"/><rect x=\"3\" y=\"10\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M7 10V7a5 5 0 0 1 10 0v3\"/>",
  "lock-open": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"/>",
  "lock": "<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>",
  "log-in": "<path d=\"m10 17 5-5-5-5\"/><path d=\"M15 12H3\"/><path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"/>",
  "log-out": "<path d=\"m16 17 5-5-5-5\"/><path d=\"M21 12H9\"/><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/>",
  "logs": "<path d=\"M3 5h1\"/><path d=\"M3 12h1\"/><path d=\"M3 19h1\"/><path d=\"M8 5h1\"/><path d=\"M8 12h1\"/><path d=\"M8 19h1\"/><path d=\"M13 5h8\"/><path d=\"M13 12h8\"/><path d=\"M13 19h8\"/>",
  "lollipop": "<circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/><path d=\"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0\"/>",
  "luggage": "<path d=\"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2\"/><path d=\"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14\"/><path d=\"M10 20h4\"/><circle cx=\"16\" cy=\"20\" r=\"2\"/><circle cx=\"8\" cy=\"20\" r=\"2\"/>",
  "magnet": "<path d=\"m12 15 4 4\"/><path d=\"M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z\"/><path d=\"m5 8 4 4\"/>",
  "mail-check": "<path d=\"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/><path d=\"m16 19 2 2 4-4\"/>",
  "mail-minus": "<path d=\"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/><path d=\"M16 19h6\"/>",
  "mail-open": "<path d=\"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z\"/><path d=\"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10\"/>",
  "mail-plus": "<path d=\"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/><path d=\"M19 16v6\"/><path d=\"M16 19h6\"/>",
  "mail-question-mark": "<path d=\"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/><path d=\"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2\"/><path d=\"M20 22v.01\"/>",
  "mail-search": "<path d=\"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/><path d=\"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/><path d=\"m22 22-1.5-1.5\"/>",
  "mail-warning": "<path d=\"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/><path d=\"M20 14v4\"/><path d=\"M20 22v.01\"/>",
  "mail-x": "<path d=\"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/><path d=\"m17 17 4 4\"/><path d=\"m21 17-4 4\"/>",
  "mail": "<rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/><polyline points=\"22 6 12 13 2 6\"/>",
  "mailbox": "<path d=\"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z\"/><polyline points=\"15,9 18,9 18,11\"/><path d=\"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2\"/><line x1=\"6\" x2=\"7\" y1=\"10\" y2=\"10\"/>",
  "mails": "<path d=\"M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732\"/><path d=\"m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5\"/><rect x=\"7\" y=\"3\" width=\"15\" height=\"12\" rx=\"2\"/>",
  "map-minus": "<path d=\"m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14\"/><path d=\"M15 5.764V14\"/><path d=\"M21 18h-6\"/><path d=\"M9 3.236v15\"/>",
  "map-pin-check-inside": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><path d=\"m9 10 2 2 4-4\"/>",
  "map-pin-check": "<path d=\"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"m16 18 2 2 4-4\"/>",
  "map-pin-house": "<path d=\"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z\"/><path d=\"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2\"/><path d=\"M18 22v-3\"/><circle cx=\"10\" cy=\"10\" r=\"3\"/>",
  "map-pin-minus-inside": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><path d=\"M9 10h6\"/>",
  "map-pin-minus": "<path d=\"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M16 18h6\"/>",
  "map-pin-off": "<path d=\"M12.75 7.09a3 3 0 0 1 2.16 2.16\"/><path d=\"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568\"/><path d=\"m2 2 20 20\"/><path d=\"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533\"/><path d=\"M9.13 9.13a3 3 0 0 0 3.74 3.74\"/>",
  "map-pin-pen": "<path d=\"M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468\"/><path d=\"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/><circle cx=\"10\" cy=\"10\" r=\"3\"/>",
  "map-pin-plus-inside": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><path d=\"M12 7v6\"/><path d=\"M9 10h6\"/>",
  "map-pin-plus": "<path d=\"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M16 18h6\"/><path d=\"M19 15v6\"/>",
  "map-pin-search": "<path d=\"M 12.248 21.969 a 1 1 0 0 1 -0.849 -0.17 C 9.539 20.193 4 14.993 4 10 a 8 8 0 0 1 16 0 C 20 10.42 19.961 10.841 19.888 11.262\"/><path d=\"m22 22-1.88-1.88\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/>",
  "map-pin-x-inside": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><path d=\"m14.5 7.5-5 5\"/><path d=\"m9.5 7.5 5 5\"/>",
  "map-pin-x": "<path d=\"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"m21.5 15.5-5 5\"/><path d=\"m21.5 20.5-5-5\"/>",
  "map-pin": "<path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>",
  "map-pinned": "<path d=\"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0\"/><circle cx=\"12\" cy=\"8\" r=\"2\"/><path d=\"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712\"/>",
  "map-plus": "<path d=\"m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12\"/><path d=\"M15 5.764V12\"/><path d=\"M18 15v6\"/><path d=\"M21 18h-6\"/><path d=\"M9 3.236v15\"/>",
  "map": "<polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"/><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"/><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"/>",
  "mars-stroke": "<path d=\"m14 6 4 4\"/><path d=\"M17 3h4v4\"/><path d=\"m21 3-7.75 7.75\"/><circle cx=\"9\" cy=\"15\" r=\"6\"/>",
  "mars": "<path d=\"M16 3h5v5\"/><path d=\"m21 3-6.75 6.75\"/><circle cx=\"10\" cy=\"14\" r=\"6\"/>",
  "martini": "<path d=\"M12 12 4.207 4.207A.707.707 0 0 1 4.707 3h14.586a.707.707 0 0 1 .5 1.207z\"/><path d=\"M12 12v10\"/><path d=\"M7 22h10\"/>",
  "maximize-2": "<path d=\"M15 3h6v6\"/><path d=\"m21 3-7 7\"/><path d=\"m3 21 7-7\"/><path d=\"M9 21H3v-6\"/>",
  "maximize": "<path d=\"M8 3H5a2 2 0 0 0-2 2v3\"/><path d=\"M21 8V5a2 2 0 0 0-2-2h-3\"/><path d=\"M3 16v3a2 2 0 0 0 2 2h3\"/><path d=\"M16 21h3a2 2 0 0 0 2-2v-3\"/>",
  "medal": "<path d=\"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15\"/><path d=\"M11 12 5.12 2.2\"/><path d=\"m13 12 5.88-9.8\"/><path d=\"M8 7h8\"/><circle cx=\"12\" cy=\"17\" r=\"5\"/><path d=\"M12 18v-2h-.5\"/>",
  "megaphone-off": "<path d=\"M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344\"/><path d=\"M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1\"/><path d=\"m2 2 20 20\"/><path d=\"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14\"/><path d=\"M8 8v6\"/>",
  "megaphone": "<path d=\"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z\"/><path d=\"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14\"/><path d=\"M8 6v8\"/>",
  "meh": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"8\" x2=\"16\" y1=\"15\" y2=\"15\"/><line x1=\"9\" x2=\"9.01\" y1=\"9\" y2=\"9\"/><line x1=\"15\" x2=\"15.01\" y1=\"9\" y2=\"9\"/>",
  "memory-stick": "<path d=\"M12 12v-2\"/><path d=\"M12 18v-2\"/><path d=\"M16 12v-2\"/><path d=\"M16 18v-2\"/><path d=\"M2 11h1.5\"/><path d=\"M20 18v-2\"/><path d=\"M20.5 11H22\"/><path d=\"M4 18v-2\"/><path d=\"M8 12v-2\"/><path d=\"M8 18v-2\"/><rect x=\"2\" y=\"6\" width=\"20\" height=\"10\" rx=\"2\"/>",
  "menu": "<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"/><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"/><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"/>",
  "merge": "<path d=\"m8 6 4-4 4 4\"/><path d=\"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22\"/><path d=\"m20 22-5-5\"/>",
  "message-circle-check": "<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/><path d=\"m9 12 2 2 4-4\"/>",
  "message-circle-code": "<path d=\"m10 9-3 3 3 3\"/><path d=\"m14 15 3-3-3-3\"/><path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/>",
  "message-circle-dashed": "<path d=\"M10.1 2.182a10 10 0 0 1 3.8 0\"/><path d=\"M13.9 21.818a10 10 0 0 1-3.8 0\"/><path d=\"M17.609 3.72a10 10 0 0 1 2.69 2.7\"/><path d=\"M2.182 13.9a10 10 0 0 1 0-3.8\"/><path d=\"M20.28 17.61a10 10 0 0 1-2.7 2.69\"/><path d=\"M21.818 10.1a10 10 0 0 1 0 3.8\"/><path d=\"M3.721 6.391a10 10 0 0 1 2.7-2.69\"/><path d=\"m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98\"/>",
  "message-circle-heart": "<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/><path d=\"M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z\"/>",
  "message-circle-more": "<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/><path d=\"M8 12h.01\"/><path d=\"M12 12h.01\"/><path d=\"M16 12h.01\"/>",
  "message-circle-off": "<path d=\"m2 2 20 20\"/><path d=\"M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989\"/><path d=\"M8.35 2.69A10 10 0 0 1 21.3 15.65\"/>",
  "message-circle-plus": "<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/><path d=\"M8 12h8\"/><path d=\"M12 8v8\"/>",
  "message-circle-question-mark": "<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/>",
  "message-circle-reply": "<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/><path d=\"m10 15-3-3 3-3\"/><path d=\"M7 12h8a2 2 0 0 1 2 2v1\"/>",
  "message-circle-warning": "<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/><path d=\"M12 8v4\"/><path d=\"M12 16h.01\"/>",
  "message-circle-x": "<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/><path d=\"m15 9-6 6\"/><path d=\"m9 9 6 6\"/>",
  "message-circle": "<path d=\"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719\"/>",
  "message-square-check": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/><path d=\"m9 11 2 2 4-4\"/>",
  "message-square-code": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/><path d=\"m10 8-3 3 3 3\"/><path d=\"m14 14 3-3-3-3\"/>",
  "message-square-dashed": "<path d=\"M14 3h2\"/><path d=\"M16 19h-2\"/><path d=\"M2 12v-2\"/><path d=\"M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149\"/><path d=\"M20 19a2 2 0 0 0 2-2v-1\"/><path d=\"M22 10v2\"/><path d=\"M22 6V5a2 2 0 0 0-2-2\"/><path d=\"M4 3a2 2 0 0 0-2 2v1\"/><path d=\"M8 19h2\"/><path d=\"M8 3h2\"/>",
  "message-square-diff": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/><path d=\"M10 15h4\"/><path d=\"M10 9h4\"/><path d=\"M12 7v4\"/>",
  "message-square-dot": "<path d=\"M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7\"/><circle cx=\"19\" cy=\"6\" r=\"3\"/>",
  "message-square-heart": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/><path d=\"M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5\"/>",
  "message-square-lock": "<path d=\"M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10\"/><path d=\"M20 15v-2a2 2 0 0 0-4 0v2\"/><rect x=\"14\" y=\"15\" width=\"8\" height=\"5\" rx=\"1\"/>",
  "message-square-more": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/><path d=\"M12 11h.01\"/><path d=\"M16 11h.01\"/><path d=\"M8 11h.01\"/>",
  "message-square-off": "<path d=\"M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826\"/><path d=\"m2 2 20 20\"/><path d=\"M8.656 3H20a2 2 0 0 1 2 2v11.344\"/>",
  "message-square-plus": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/><path d=\"M12 8v6\"/><path d=\"M9 11h6\"/>",
  "message-square-quote": "<path d=\"M14 14a2 2 0 0 0 2-2V8h-2\"/><path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/><path d=\"M8 14a2 2 0 0 0 2-2V8H8\"/>",
  "message-square-reply": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/><path d=\"m10 8-3 3 3 3\"/><path d=\"M17 14v-1a2 2 0 0 0-2-2H7\"/>",
  "message-square-share": "<path d=\"M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4\"/><path d=\"M16 3h6v6\"/><path d=\"m16 9 6-6\"/>",
  "message-square-text": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/><path d=\"M7 11h10\"/><path d=\"M7 15h6\"/><path d=\"M7 7h8\"/>",
  "message-square-warning": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/><path d=\"M12 15h.01\"/><path d=\"M12 7v4\"/>",
  "message-square-x": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/><path d=\"m14.5 8.5-5 5\"/><path d=\"m9.5 8.5 5 5\"/>",
  "message-square": "<path d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/>",
  "messages-square": "<path d=\"M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"/><path d=\"M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1\"/>",
  "metronome": "<path d=\"M12 11.4V9.1\"/><path d=\"m12 17 6.59-6.59\"/><path d=\"m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2\"/><circle cx=\"20\" cy=\"9\" r=\"2\"/>",
  "mic-off": "<path d=\"M12 19v3\"/><path d=\"M15 9.34V5a3 3 0 0 0-5.68-1.33\"/><path d=\"M16.95 16.95A7 7 0 0 1 5 12v-2\"/><path d=\"M18.89 13.23A7 7 0 0 0 19 12v-2\"/><path d=\"m2 2 20 20\"/><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12\"/>",
  "mic-vocal": "<path d=\"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12\"/><path d=\"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5\"/><circle cx=\"16\" cy=\"7\" r=\"5\"/>",
  "mic": "<path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"/><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"/><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"/><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"/>",
  "microchip": "<path d=\"M10 12h4\"/><path d=\"M10 17h4\"/><path d=\"M10 7h4\"/><path d=\"M18 12h2\"/><path d=\"M18 18h2\"/><path d=\"M18 6h2\"/><path d=\"M4 12h2\"/><path d=\"M4 18h2\"/><path d=\"M4 6h2\"/><rect x=\"6\" y=\"2\" width=\"12\" height=\"20\" rx=\"2\"/>",
  "microscope": "<path d=\"M6 18h8\"/><path d=\"M3 22h18\"/><path d=\"M14 22a7 7 0 1 0 0-14h-1\"/><path d=\"M9 14h2\"/><path d=\"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z\"/><path d=\"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3\"/>",
  "microwave": "<rect width=\"20\" height=\"15\" x=\"2\" y=\"4\" rx=\"2\"/><rect width=\"8\" height=\"7\" x=\"6\" y=\"8\" rx=\"1\"/><path d=\"M18 8v7\"/><path d=\"M6 19v2\"/><path d=\"M18 19v2\"/>",
  "milestone": "<path d=\"M12 13v8\"/><path d=\"M12 3v3\"/><path d=\"M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z\"/>",
  "milk-off": "<path d=\"M8 2h8\"/><path d=\"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3\"/><path d=\"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
  "milk": "<path d=\"M8 2h8\"/><path d=\"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2\"/><path d=\"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0\"/>",
  "minimize-2": "<path d=\"m14 10 7-7\"/><path d=\"M20 10h-6V4\"/><path d=\"m3 21 7-7\"/><path d=\"M4 14h6v6\"/>",
  "minimize": "<path d=\"M8 3v3a2 2 0 0 1-2 2H3\"/><path d=\"M21 8h-3a2 2 0 0 1-2-2V3\"/><path d=\"M3 16h3a2 2 0 0 1 2 2v3\"/><path d=\"M16 21v-3a2 2 0 0 1 2-2h3\"/>",
  "minus": "<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/>",
  "mirror-rectangular": "<path d=\"M11 6 8 9\"/><path d=\"m16 7-8 8\"/><rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\"/>",
  "mirror-round": "<path d=\"M10 6.6 8.6 8\"/><path d=\"M12 18v4\"/><path d=\"M15 7.5 9.5 13\"/><path d=\"M7 22h10\"/><circle cx=\"12\" cy=\"10\" r=\"8\"/>",
  "monitor-check": "<path d=\"m9 10 2 2 4-4\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4\"/><path d=\"M8 21h8\"/>",
  "monitor-cloud": "<path d=\"M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z\"/><path d=\"M12 17v4\"/><path d=\"M8 21h8\"/><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/>",
  "monitor-cog": "<path d=\"M12 17v4\"/><path d=\"m14.305 7.53.923-.382\"/><path d=\"m15.228 4.852-.923-.383\"/><path d=\"m16.852 3.228-.383-.924\"/><path d=\"m16.852 8.772-.383.923\"/><path d=\"m19.148 3.228.383-.924\"/><path d=\"m19.53 9.696-.382-.924\"/><path d=\"m20.772 4.852.924-.383\"/><path d=\"m20.772 7.148.924.383\"/><path d=\"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7\"/><path d=\"M8 21h8\"/><circle cx=\"18\" cy=\"6\" r=\"3\"/>",
  "monitor-dot": "<path d=\"M12 17v4\"/><path d=\"M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693\"/><path d=\"M8 21h8\"/><circle cx=\"19\" cy=\"6\" r=\"3\"/>",
  "monitor-down": "<path d=\"M12 13V7\"/><path d=\"m15 10-3 3-3-3\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4\"/><path d=\"M8 21h8\"/>",
  "monitor-off": "<path d=\"M12 17v4\"/><path d=\"M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826\"/><path d=\"m2 2 20 20\"/><path d=\"M8 21h8\"/><path d=\"M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042\"/>",
  "monitor-pause": "<path d=\"M10 13V7\"/><path d=\"M14 13V7\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4\"/><path d=\"M8 21h8\"/>",
  "monitor-play": "<path d=\"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z\"/><path d=\"M12 17v4\"/><path d=\"M8 21h8\"/><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/>",
  "monitor-smartphone": "<path d=\"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8\"/><path d=\"M10 19v-3.96 3.15\"/><path d=\"M7 19h5\"/><rect width=\"6\" height=\"10\" x=\"16\" y=\"12\" rx=\"2\"/>",
  "monitor-speaker": "<path d=\"M5.5 20H8\"/><path d=\"M17 9h.01\"/><rect width=\"10\" height=\"16\" x=\"12\" y=\"4\" rx=\"2\"/><path d=\"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4\"/><circle cx=\"17\" cy=\"15\" r=\"1\"/>",
  "monitor-stop": "<path d=\"M12 17v4\"/><path d=\"M8 21h8\"/><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/><rect x=\"9\" y=\"7\" width=\"6\" height=\"6\" rx=\"1\"/>",
  "monitor-up": "<path d=\"m9 10 3-3 3 3\"/><path d=\"M12 13V7\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4\"/><path d=\"M8 21h8\"/>",
  "monitor-x": "<path d=\"m14.5 12.5-5-5\"/><path d=\"m9.5 12.5 5-5\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/><path d=\"M12 17v4\"/><path d=\"M8 21h8\"/>",
  "monitor": "<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"/><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"/><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"/>",
  "moon-star": "<path d=\"M18 5h4\"/><path d=\"M20 3v4\"/><path d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\"/>",
  "moon": "<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"/>",
  "motorbike": "<path d=\"m18 14-1-3\"/><path d=\"m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81\"/><path d=\"M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5\"/><circle cx=\"19\" cy=\"17\" r=\"3\"/><circle cx=\"5\" cy=\"17\" r=\"3\"/>",
  "mountain-snow": "<path d=\"m8 3 4 8 5-5 5 15H2L8 3z\"/><path d=\"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19\"/>",
  "mountain": "<path d=\"m8 3 4 8 5-5 5 15H2L8 3z\"/>",
  "mouse-left": "<path d=\"M12 7.318V10\"/><path d=\"M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7\"/><circle cx=\"7\" cy=\"4\" r=\"2\"/>",
  "mouse-off": "<path d=\"M12 6v.343\"/><path d=\"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218\"/><path d=\"M19 13.343V9A7 7 0 0 0 8.56 2.902\"/><path d=\"M22 22 2 2\"/>",
  "mouse-pointer-2-off": "<path d=\"m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551\"/><path d=\"M22 2 2 22\"/><path d=\"m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779\"/>",
  "mouse-pointer-2": "<path d=\"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z\"/>",
  "mouse-pointer-ban": "<path d=\"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z\"/><circle cx=\"16\" cy=\"16\" r=\"6\"/><path d=\"m11.8 11.8 8.4 8.4\"/>",
  "mouse-pointer-click": "<path d=\"M14 4.1 12 6\"/><path d=\"m5.1 8-2.9-.8\"/><path d=\"m6 12-1.9 2\"/><path d=\"M7.2 2.2 8 5.1\"/><path d=\"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z\"/>",
  "mouse-pointer": "<path d=\"M12.586 12.586 19 19\"/><path d=\"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z\"/>",
  "mouse-right": "<path d=\"M12 7.318V10\"/><path d=\"M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7\"/><circle cx=\"17\" cy=\"4\" r=\"2\"/>",
  "mouse": "<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"7\"/><path d=\"M12 6v4\"/>",
  "move-3d": "<path d=\"M5 3v16h16\"/><path d=\"m5 19 6-6\"/><path d=\"m2 6 3-3 3 3\"/><path d=\"m18 16 3 3-3 3\"/>",
  "move-diagonal-2": "<path d=\"M19 13v6h-6\"/><path d=\"M5 11V5h6\"/><path d=\"m5 5 14 14\"/>",
  "move-diagonal": "<path d=\"M11 19H5v-6\"/><path d=\"M13 5h6v6\"/><path d=\"M19 5 5 19\"/>",
  "move-down-left": "<path d=\"M11 19H5V13\"/><path d=\"M19 5L5 19\"/>",
  "move-down-right": "<path d=\"M19 13V19H13\"/><path d=\"M5 5L19 19\"/>",
  "move-down": "<path d=\"M8 18L12 22L16 18\"/><path d=\"M12 2V22\"/>",
  "move-horizontal": "<path d=\"m18 8 4 4-4 4\"/><path d=\"M2 12h20\"/><path d=\"m6 8-4 4 4 4\"/>",
  "move-left": "<path d=\"M6 8L2 12L6 16\"/><path d=\"M2 12H22\"/>",
  "move-right": "<path d=\"M18 8L22 12L18 16\"/><path d=\"M2 12H22\"/>",
  "move-up-left": "<path d=\"M5 11V5H11\"/><path d=\"M5 5L19 19\"/>",
  "move-up-right": "<path d=\"M13 5H19V11\"/><path d=\"M19 5L5 19\"/>",
  "move-up": "<path d=\"M8 6L12 2L16 6\"/><path d=\"M12 2V22\"/>",
  "move-vertical": "<path d=\"M12 2v20\"/><path d=\"m8 18 4 4 4-4\"/><path d=\"m8 6 4-4 4 4\"/>",
  "move": "<path d=\"M12 2v20\"/><path d=\"m15 19-3 3-3-3\"/><path d=\"m19 9 3 3-3 3\"/><path d=\"M2 12h20\"/><path d=\"m5 9-3 3 3 3\"/><path d=\"m9 5 3-3 3 3\"/>",
  "music-2": "<circle cx=\"8\" cy=\"18\" r=\"4\"/><path d=\"M12 18V2l7 4\"/>",
  "music-3": "<circle cx=\"12\" cy=\"18\" r=\"4\"/><path d=\"M16 18V2\"/>",
  "music-4": "<path d=\"M9 18V5l12-2v13\"/><path d=\"m9 9 12-2\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/>",
  "music": "<path d=\"M9 18V5l12-2v13\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><circle cx=\"18\" cy=\"16\" r=\"3\"/>",
  "navigation-2-off": "<path d=\"M9.31 9.31 5 21l7-4 7 4-1.17-3.17\"/><path d=\"M14.53 8.88 12 2l-1.17 3.17\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
  "navigation-2": "<polygon points=\"12 2 19 21 12 17 5 21 12 2\"/>",
  "navigation-off": "<path d=\"M8.43 8.43 3 11l8 2 2 8 2.57-5.43\"/><path d=\"M17.39 11.73 22 2l-9.73 4.61\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
  "navigation": "<polygon points=\"3 11 22 2 13 21 11 13 3 11\"/>",
  "network": "<rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/><path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\"/><path d=\"M12 12V8\"/>",
  "newspaper": "<path d=\"M15 18h-5\"/><path d=\"M18 14h-8\"/><path d=\"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2\"/><rect width=\"8\" height=\"4\" x=\"10\" y=\"6\" rx=\"1\"/>",
  "nfc": "<path d=\"M6 8.32a7.43 7.43 0 0 1 0 7.36\"/><path d=\"M9.46 6.21a11.76 11.76 0 0 1 0 11.58\"/><path d=\"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8\"/><path d=\"M16.37 2a20.16 20.16 0 0 1 0 20\"/>",
  "non-binary": "<path d=\"M12 2v10\"/><path d=\"m8.5 4 7 4\"/><path d=\"m8.5 8 7-4\"/><circle cx=\"12\" cy=\"17\" r=\"5\"/>",
  "notebook-pen": "<path d=\"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4\"/><path d=\"M2 6h4\"/><path d=\"M2 10h4\"/><path d=\"M2 14h4\"/><path d=\"M2 18h4\"/><path d=\"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/>",
  "notebook-tabs": "<path d=\"M2 6h4\"/><path d=\"M2 10h4\"/><path d=\"M2 14h4\"/><path d=\"M2 18h4\"/><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><path d=\"M15 2v20\"/><path d=\"M15 7h5\"/><path d=\"M15 12h5\"/><path d=\"M15 17h5\"/>",
  "notebook-text": "<path d=\"M2 6h4\"/><path d=\"M2 10h4\"/><path d=\"M2 14h4\"/><path d=\"M2 18h4\"/><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><path d=\"M9.5 8h5\"/><path d=\"M9.5 12H16\"/><path d=\"M9.5 16H14\"/>",
  "notebook": "<path d=\"M2 6h4\"/><path d=\"M2 10h4\"/><path d=\"M2 14h4\"/><path d=\"M2 18h4\"/><rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><path d=\"M16 2v20\"/>",
  "notepad-text-dashed": "<path d=\"M8 2v4\"/><path d=\"M12 2v4\"/><path d=\"M16 2v4\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v2\"/><path d=\"M20 12v2\"/><path d=\"M20 18v2a2 2 0 0 1-2 2h-1\"/><path d=\"M13 22h-2\"/><path d=\"M7 22H6a2 2 0 0 1-2-2v-2\"/><path d=\"M4 14v-2\"/><path d=\"M4 8V6a2 2 0 0 1 2-2h2\"/><path d=\"M8 10h6\"/><path d=\"M8 14h8\"/><path d=\"M8 18h5\"/>",
  "notepad-text": "<path d=\"M8 2v4\"/><path d=\"M12 2v4\"/><path d=\"M16 2v4\"/><rect width=\"16\" height=\"18\" x=\"4\" y=\"4\" rx=\"2\"/><path d=\"M8 10h6\"/><path d=\"M8 14h8\"/><path d=\"M8 18h5\"/>",
  "nut-off": "<path d=\"M12 4V2\"/><path d=\"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939\"/><path d=\"M19 10v3.343\"/><path d=\"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
  "nut": "<path d=\"M12 4V2\"/><path d=\"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4\"/><path d=\"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z\"/>",
  "octagon-alert": "<path d=\"M12 16h.01\"/><path d=\"M12 8v4\"/><path d=\"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z\"/>",
  "octagon-minus": "<path d=\"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z\"/><path d=\"M8 12h8\"/>",
  "octagon-pause": "<path d=\"M10 15V9\"/><path d=\"M14 15V9\"/><path d=\"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z\"/>",
  "octagon-x": "<path d=\"m15 9-6 6\"/><path d=\"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z\"/><path d=\"m9 9 6 6\"/>",
  "octagon": "<path d=\"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z\"/>",
  "omega": "<path d=\"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21\"/>",
  "option": "<path d=\"M3 3h6l6 18h6\"/><path d=\"M14 3h7\"/>",
  "orbit": "<path d=\"M20.341 6.484A10 10 0 0 1 10.266 21.85\"/><path d=\"M3.659 17.516A10 10 0 0 1 13.74 2.152\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><circle cx=\"19\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"19\" r=\"2\"/>",
  "origami": "<path d=\"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025\"/><path d=\"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009\"/><path d=\"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027\"/>",
  "package-2": "<path d=\"M12 3v6\"/><path d=\"M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z\"/><path d=\"M3.054 9.013h17.893\"/>",
  "package-check": "<path d=\"M12 22V12\"/><path d=\"m16 17 2 2 4-4\"/><path d=\"M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753\"/><path d=\"M3.29 7 12 12l8.71-5\"/><path d=\"m7.5 4.27 8.997 5.148\"/>",
  "package-minus": "<path d=\"M12 22V12\"/><path d=\"M16 17h6\"/><path d=\"M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955\"/><path d=\"M3.29 7 12 12l8.71-5\"/><path d=\"m7.5 4.27 8.997 5.148\"/>",
  "package-open": "<path d=\"M12 22v-9\"/><path d=\"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z\"/><path d=\"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13\"/><path d=\"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z\"/>",
  "package-plus": "<path d=\"M12 22V12\"/><path d=\"M16 17h6\"/><path d=\"M19 14v6\"/><path d=\"M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955\"/><path d=\"M3.29 7 12 12l8.71-5\"/><path d=\"m7.5 4.27 8.997 5.148\"/>",
  "package-search": "<path d=\"M12 22V12\"/><path d=\"M20.27 18.27 22 20\"/><path d=\"M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559\"/><path d=\"M3.29 7 12 12l8.71-5\"/><path d=\"m7.5 4.27 8.997 5.148\"/><circle cx=\"18.5\" cy=\"16.5\" r=\"2.5\"/>",
  "package-x": "<path d=\"M12 22V12\"/><path d=\"m16.5 14.5 5 5\"/><path d=\"m16.5 19.5 5-5\"/><path d=\"M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074\"/><path d=\"M3.29 7 12 12l8.71-5\"/><path d=\"m7.5 4.27 8.997 5.148\"/>",
  "package": "<path d=\"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z\"/><path d=\"M12 22V12\"/><polyline points=\"3.29 7 12 12 20.71 7\"/><path d=\"m7.5 4.27 9 5.15\"/>",
  "paint-bucket": "<path d=\"M11 7 6 2\"/><path d=\"M18.992 12H2.041\"/><path d=\"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595\"/><path d=\"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33\"/>",
  "paint-roller": "<rect width=\"16\" height=\"6\" x=\"2\" y=\"2\" rx=\"2\"/><path d=\"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2\"/><rect width=\"4\" height=\"6\" x=\"8\" y=\"16\" rx=\"1\"/>",
  "paintbrush-vertical": "<path d=\"M10 2v2\"/><path d=\"M14 2v4\"/><path d=\"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z\"/><path d=\"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1\"/>",
  "paintbrush": "<path d=\"m14.622 17.897-10.68-2.913\"/><path d=\"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z\"/><path d=\"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15\"/>",
  "palette": "<path d=\"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z\"/><circle cx=\"13.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"17.5\" cy=\"10.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"6.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\"/><circle cx=\"8.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/>",
  "panda": "<path d=\"M11.25 17.25h1.5L12 18z\"/><path d=\"m15 12 2 2\"/><path d=\"M18 6.5a.5.5 0 0 0-.5-.5\"/><path d=\"M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83\"/><path d=\"M6 6.5a.495.495 0 0 1 .5-.5\"/><path d=\"m9 12-2 2\"/>",
  "panel-bottom-close": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 15h18\"/><path d=\"m15 8-3 3-3-3\"/>",
  "panel-bottom-dashed": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M14 15h1\"/><path d=\"M19 15h2\"/><path d=\"M3 15h2\"/><path d=\"M9 15h1\"/>",
  "panel-bottom-open": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 15h18\"/><path d=\"m9 10 3-3 3 3\"/>",
  "panel-bottom": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 15h18\"/>",
  "panel-left-close": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 3v18\"/><path d=\"m16 15-3-3 3-3\"/>",
  "panel-left-dashed": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 14v1\"/><path d=\"M9 19v2\"/><path d=\"M9 3v2\"/><path d=\"M9 9v1\"/>",
  "panel-left-open": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 3v18\"/><path d=\"m14 9 3 3-3 3\"/>",
  "panel-left-right-dashed": "<path d=\"M15 10V9\"/><path d=\"M15 15v-1\"/><path d=\"M15 21v-2\"/><path d=\"M15 5V3\"/><path d=\"M9 10V9\"/><path d=\"M9 15v-1\"/><path d=\"M9 21v-2\"/><path d=\"M9 5V3\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "panel-left": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 3v18\"/>",
  "panel-right-close": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M15 3v18\"/><path d=\"m8 9 3 3-3 3\"/>",
  "panel-right-dashed": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M15 14v1\"/><path d=\"M15 19v2\"/><path d=\"M15 3v2\"/><path d=\"M15 9v1\"/>",
  "panel-right-open": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M15 3v18\"/><path d=\"m10 15-3-3 3-3\"/>",
  "panel-right": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M15 3v18\"/>",
  "panel-top-bottom-dashed": "<path d=\"M14 15h1\"/><path d=\"M14 9h1\"/><path d=\"M19 15h2\"/><path d=\"M19 9h2\"/><path d=\"M3 15h2\"/><path d=\"M3 9h2\"/><path d=\"M9 15h1\"/><path d=\"M9 9h1\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "panel-top-close": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"m9 16 3-3 3 3\"/>",
  "panel-top-dashed": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M14 9h1\"/><path d=\"M19 9h2\"/><path d=\"M3 9h2\"/><path d=\"M9 9h1\"/>",
  "panel-top-open": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"m15 14-3 3-3-3\"/>",
  "panel-top": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/>",
  "panels-left-bottom": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 3v18\"/><path d=\"M9 15h12\"/>",
  "panels-right-bottom": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 15h12\"/><path d=\"M15 3v18\"/>",
  "panels-top-left": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"M9 21V9\"/>",
  "paperclip": "<path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"/>",
  "parasol": "<path d=\"M12.5 11.134 18.196 21\"/><path d=\"M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413\"/><path d=\"M21 21H3\"/>",
  "parentheses": "<path d=\"M8 21s-4-3-4-9 4-9 4-9\"/><path d=\"M16 3s4 3 4 9-4 9-4 9\"/>",
  "parking-meter": "<path d=\"M11 15h2\"/><path d=\"M12 12v3\"/><path d=\"M12 19v3\"/><path d=\"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z\"/><path d=\"M9 9a3 3 0 1 1 6 0\"/>",
  "party-popper": "<path d=\"M5.8 11.3 2 22l10.7-3.79\"/><path d=\"M4 3h.01\"/><path d=\"M22 8h.01\"/><path d=\"M15 2h.01\"/><path d=\"M22 20h.01\"/><path d=\"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10\"/><path d=\"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17\"/><path d=\"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7\"/><path d=\"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z\"/>",
  "pause": "<rect x=\"14\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\"/><rect x=\"5\" y=\"3\" width=\"5\" height=\"18\" rx=\"1\"/>",
  "paw-print": "<circle cx=\"11\" cy=\"4\" r=\"2\"/><circle cx=\"18\" cy=\"8\" r=\"2\"/><circle cx=\"20\" cy=\"16\" r=\"2\"/><path d=\"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z\"/>",
  "pc-case": "<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\"/><path d=\"M15 14h.01\"/><path d=\"M9 6h6\"/><path d=\"M9 10h6\"/>",
  "pen-line": "<path d=\"M13 21h8\"/><path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/>",
  "pen-off": "<path d=\"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982\"/><path d=\"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353\"/><path d=\"m2 2 20 20\"/>",
  "pen-tool": "<path d=\"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z\"/><path d=\"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18\"/><path d=\"m2.3 2.3 7.286 7.286\"/><circle cx=\"11\" cy=\"11\" r=\"2\"/>",
  "pen": "<path d=\"M12 19l7-7 3 3-7 7-3-3z\"/><path d=\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\"/><path d=\"M2 2l7.586 7.586\"/><circle cx=\"11\" cy=\"11\" r=\"2\"/>",
  "pencil-line": "<path d=\"M13 21h8\"/><path d=\"m15 5 4 4\"/><path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/>",
  "pencil-off": "<path d=\"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982\"/><path d=\"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353\"/><path d=\"m15 5 4 4\"/><path d=\"m2 2 20 20\"/>",
  "pencil-ruler": "<path d=\"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13\"/><path d=\"m8 6 2-2\"/><path d=\"m18 16 2-2\"/><path d=\"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17\"/><path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/><path d=\"m15 5 4 4\"/>",
  "pencil-sparkles": "<path d=\"M10 3H8\"/><path d=\"m15.007 5.008 3.987 3.986\"/><path d=\"M20 15v4\"/><path d=\"M21.174 6.813a2.82 2.82 0 0 0-3.986-3.987L3.842 16.175a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/><path d=\"M22 17h-4\"/><path d=\"M4 5v4\"/><path d=\"M6 7H2\"/><path d=\"M9 2v2\"/>",
  "pencil": "<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\"/><path d=\"m15 5 4 4\"/>",
  "pentagon": "<path d=\"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z\"/>",
  "percent": "<line x1=\"19\" x2=\"5\" y1=\"5\" y2=\"19\"/><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"/>",
  "person-standing": "<circle cx=\"12\" cy=\"5\" r=\"1\"/><path d=\"m9 20 3-6 3 6\"/><path d=\"m6 8 6 2 6-2\"/><path d=\"M12 10v4\"/>",
  "philippine-peso": "<path d=\"M20 11H4\"/><path d=\"M20 7H4\"/><path d=\"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7\"/>",
  "phone-call": "<path d=\"M13 2a9 9 0 0 1 9 9\"/><path d=\"M13 6a5 5 0 0 1 5 5\"/><path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\"/>",
  "phone-forwarded": "<path d=\"M14 6h8\"/><path d=\"m18 2 4 4-4 4\"/><path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\"/>",
  "phone-incoming": "<path d=\"M16 2v6h6\"/><path d=\"m22 2-6 6\"/><path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\"/>",
  "phone-missed": "<path d=\"m16 2 6 6\"/><path d=\"m22 2-6 6\"/><path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\"/>",
  "phone-off": "<path d=\"M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272\"/><path d=\"M22 2 2 22\"/><path d=\"M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473\"/>",
  "phone-outgoing": "<path d=\"m16 8 6-6\"/><path d=\"M22 8V2h-6\"/><path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\"/>",
  "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"/>",
  "pi": "<line x1=\"9\" x2=\"9\" y1=\"4\" y2=\"20\"/><path d=\"M4 7c0-1.7 1.3-3 3-3h13\"/><path d=\"M18 20c-1.7 0-3-1.3-3-3V4\"/>",
  "piano": "<path d=\"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8\"/><path d=\"M2 14h20\"/><path d=\"M6 14v4\"/><path d=\"M10 14v4\"/><path d=\"M14 14v4\"/><path d=\"M18 14v4\"/>",
  "pickaxe": "<path d=\"m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999\"/><path d=\"M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024\"/><path d=\"M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069\"/><path d=\"M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z\"/>",
  "picture-in-picture-2": "<path d=\"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4\"/><rect width=\"10\" height=\"7\" x=\"12\" y=\"13\" rx=\"2\"/>",
  "picture-in-picture": "<path d=\"M2 10h6V4\"/><path d=\"m2 4 6 6\"/><path d=\"M21 10V7a2 2 0 0 0-2-2h-7\"/><path d=\"M3 14v2a2 2 0 0 0 2 2h3\"/><rect x=\"12\" y=\"14\" width=\"10\" height=\"7\" rx=\"1\"/>",
  "piggy-bank": "<path d=\"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z\"/><path d=\"M16 10h.01\"/><path d=\"M2 8v1a2 2 0 0 0 2 2h1\"/>",
  "pilcrow-left": "<path d=\"M14 3v11\"/><path d=\"M14 9h-3a3 3 0 0 1 0-6h9\"/><path d=\"M18 3v11\"/><path d=\"M22 18H2l4-4\"/><path d=\"m6 22-4-4\"/>",
  "pilcrow-right": "<path d=\"M10 3v11\"/><path d=\"M10 9H7a1 1 0 0 1 0-6h8\"/><path d=\"M14 3v11\"/><path d=\"m18 14 4 4H2\"/><path d=\"m22 18-4 4\"/>",
  "pilcrow": "<path d=\"M13 4v16\"/><path d=\"M17 4v16\"/><path d=\"M19 4H9.5a4.5 4.5 0 0 0 0 9H13\"/>",
  "pill-bottle": "<path d=\"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4\"/><path d=\"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7\"/><rect width=\"16\" height=\"5\" x=\"4\" y=\"2\" rx=\"1\"/>",
  "pill": "<path d=\"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z\"/><path d=\"m8.5 8.5 7 7\"/>",
  "pin-off": "<path d=\"M12 17v5\"/><path d=\"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89\"/><path d=\"m2 2 20 20\"/><path d=\"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11\"/>",
  "pin": "<line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"22\"/><path d=\"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24z\"/>",
  "pipette": "<path d=\"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12\"/><path d=\"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z\"/><path d=\"m2 22 .414-.414\"/>",
  "pizza": "<path d=\"m12 14-1 1\"/><path d=\"m13.75 18.25-1.25 1.42\"/><path d=\"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12\"/><path d=\"M18.8 9.3a1 1 0 0 0 2.1 7.7\"/><path d=\"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z\"/>",
  "plane-landing": "<path d=\"M2 22h20\"/><path d=\"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z\"/>",
  "plane-takeoff": "<path d=\"M2 22h20\"/><path d=\"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z\"/>",
  "plane": "<path d=\"M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z\"/>",
  "play-off": "<path d=\"m10.215 4.56 9.79 5.71a2 2 0 0 1 .003 3.458l-.393.23\"/><path d=\"m16.042 16.042-8.034 4.686A2 2 0 0 1 5 19V5\"/><path d=\"m2 2 20 20\"/>",
  "play": "<polygon points=\"5 3 19 12 5 21 5 3\"/>",
  "plug-2": "<path d=\"M9 2v6\"/><path d=\"M15 2v6\"/><path d=\"M12 17v5\"/><path d=\"M5 8h14\"/><path d=\"M6 11V8h12v3a6 6 0 1 1-12 0Z\"/>",
  "plug-zap": "<path d=\"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z\"/><path d=\"m2 22 3-3\"/><path d=\"M7.5 13.5 10 11\"/><path d=\"M10.5 16.5 13 14\"/><path d=\"m18 3-4 4h6l-4 4\"/>",
  "plug": "<path d=\"M12 22v-5\"/><path d=\"M15 8V2\"/><path d=\"M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z\"/><path d=\"M9 8V2\"/>",
  "plus": "<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"/><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"/>",
  "pocket-knife": "<path d=\"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2\"/><path d=\"M18 6h.01\"/><path d=\"M6 18h.01\"/><path d=\"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z\"/><path d=\"M18 11.66V22a4 4 0 0 0 4-4V6\"/>",
  "podcast": "<path d=\"M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z\" fill=\"currentColor\"/><path d=\"M16.85 18.58a9 9 0 1 0-9.7 0\"/><path d=\"M8 14a5 5 0 1 1 8 0\"/><circle cx=\"12\" cy=\"11\" r=\"1\" fill=\"currentColor\"/>",
  "podium": "<path d=\"M12 6V2h-1\"/><path d=\"M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1\"/><path d=\"M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10\"/>",
  "pointer-off": "<path d=\"M10 4.5V4a2 2 0 0 0-2.41-1.957\"/><path d=\"M13.9 8.4a2 2 0 0 0-1.26-1.295\"/><path d=\"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158\"/><path d=\"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343\"/><path d=\"M6 6v8\"/><path d=\"m2 2 20 20\"/>",
  "pointer": "<path d=\"M22 14a8 8 0 0 1-8 8\"/><path d=\"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2\"/><path d=\"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1\"/><path d=\"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10\"/><path d=\"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15\"/>",
  "popcorn": "<path d=\"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4\"/><path d=\"M10 22 9 8\"/><path d=\"m14 22 1-14\"/><path d=\"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z\"/>",
  "popsicle": "<path d=\"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z\"/><path d=\"m22 22-5.5-5.5\"/>",
  "pound-sterling": "<path d=\"M18 7c0-5.333-8-5.333-8 0\"/><path d=\"M10 7v14\"/><path d=\"M6 21h12\"/><path d=\"M6 13h10\"/>",
  "power-off": "<path d=\"M18.36 6.64A9 9 0 0 1 20.77 15\"/><path d=\"M6.16 6.16a9 9 0 1 0 12.68 12.68\"/><path d=\"M12 2v4\"/><path d=\"m2 2 20 20\"/>",
  "power": "<path d=\"M12 2v10\"/><path d=\"M18.4 6.6a9 9 0 1 1-12.77.04\"/>",
  "presentation": "<path d=\"M2 3h20\"/><path d=\"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3\"/><path d=\"m7 21 5-5 5 5\"/>",
  "printer-check": "<path d=\"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5\"/><path d=\"m16 19 2 2 4-4\"/><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2\"/><path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\"/>",
  "printer-x": "<path d=\"M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377\"/><path d=\"m16.5 16.5 5 5\"/><path d=\"m16.5 21.5 5-5\"/><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5\"/><path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\"/>",
  "printer": "<path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"/><path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\"/><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\" rx=\"1\"/>",
  "projector": "<path d=\"M5 7 3 5\"/><path d=\"M9 6V3\"/><path d=\"m13 7 2-2\"/><circle cx=\"9\" cy=\"13\" r=\"3\"/><path d=\"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17\"/><path d=\"M16 16h2\"/>",
  "proportions": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M12 9v11\"/><path d=\"M2 9h13a2 2 0 0 1 2 2v9\"/>",
  "puzzle": "<path d=\"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z\"/>",
  "pyramid": "<path d=\"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z\"/><path d=\"M12 2v20\"/>",
  "qr-code": "<rect width=\"5\" height=\"5\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"16\" y=\"3\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\"/><path d=\"M21 16h-3a2 2 0 0 0-2 2v3\"/><path d=\"M21 21v.01\"/><path d=\"M12 7v3a2 2 0 0 1-2 2H7\"/><path d=\"M3 12h.01\"/><path d=\"M12 3h.01\"/><path d=\"M12 16v.01\"/><path d=\"M16 12h1\"/><path d=\"M21 12v.01\"/><path d=\"M12 21v-1\"/>",
  "quote": "<path d=\"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z\"/><path d=\"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z\"/>",
  "rabbit": "<path d=\"M13 16a3 3 0 0 1 2.24 5\"/><path d=\"M18 12h.01\"/><path d=\"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3\"/><path d=\"M20 8.54V4a2 2 0 1 0-4 0v3\"/><path d=\"M7.612 12.524a3 3 0 1 0-1.6 4.3\"/>",
  "radar": "<path d=\"M19.07 4.93A10 10 0 0 0 6.99 3.34\"/><path d=\"M4 6h.01\"/><path d=\"M2.29 9.62A10 10 0 1 0 21.31 8.35\"/><path d=\"M16.24 7.76A6 6 0 1 0 8.23 16.67\"/><path d=\"M12 18h.01\"/><path d=\"M17.99 11.66A6 6 0 0 1 15.77 16.67\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"m13.41 10.59 5.66-5.66\"/>",
  "radiation": "<path d=\"M12 12h.01\"/><path d=\"M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z\"/><path d=\"M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z\"/><path d=\"M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z\"/>",
  "radical": "<path d=\"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21\"/>",
  "radio-off": "<path d=\"M13.414 13.414a2 2 0 1 1-2.828-2.828\"/><path d=\"M16.247 7.761a6 6 0 0 1 1.744 4.572\"/><path d=\"M19.075 4.933a10 10 0 0 1 2.234 10.72\"/><path d=\"m2 2 20 20\"/><path d=\"M4.925 19.067a10 10 0 0 1 0-14.134\"/><path d=\"M7.753 16.239a6 6 0 0 1 0-8.478\"/>",
  "radio-receiver": "<path d=\"M5 16v2\"/><path d=\"M19 16v2\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"8\" rx=\"2\"/><path d=\"M18 12h.01\"/>",
  "radio-tower": "<path d=\"M4.9 16.1C1 12.2 1 5.8 4.9 1.9\"/><path d=\"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5\"/><circle cx=\"12\" cy=\"9\" r=\"2\"/><path d=\"M16.2 4.8c2 2 2.26 5.11.8 7.47\"/><path d=\"M19.1 1.9a9.96 9.96 0 0 1 0 14.1\"/><path d=\"M9.5 18h5\"/><path d=\"m8 22 4-11 4 11\"/>",
  "radio": "<path d=\"M16.247 7.761a6 6 0 0 1 0 8.478\"/><path d=\"M19.075 4.933a10 10 0 0 1 0 14.134\"/><path d=\"M4.925 19.067a10 10 0 0 1 0-14.134\"/><path d=\"M7.753 16.239a6 6 0 0 1 0-8.478\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>",
  "radius": "<path d=\"M20.34 17.52a10 10 0 1 0-2.82 2.82\"/><circle cx=\"19\" cy=\"19\" r=\"2\"/><path d=\"m13.41 13.41 4.18 4.18\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>",
  "rainbow": "<path d=\"M22 17a10 10 0 0 0-20 0\"/><path d=\"M6 17a6 6 0 0 1 12 0\"/><path d=\"M10 17a2 2 0 0 1 4 0\"/>",
  "rat": "<path d=\"M13 22H4a2 2 0 0 1 0-4h12\"/><path d=\"M13.236 18a3 3 0 0 0-2.2-5\"/><path d=\"M16 9h.01\"/><path d=\"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3\"/><path d=\"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18\"/>",
  "ratio": "<rect width=\"12\" height=\"20\" x=\"6\" y=\"2\" rx=\"2\"/><rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/>",
  "receipt-cent": "<path d=\"M12 7v10\"/><path d=\"M14.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0\"/><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"/>",
  "receipt-euro": "<path d=\"M15.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0\"/><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"/><path d=\"M8 12h5\"/>",
  "receipt-indian-rupee": "<path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"/><path d=\"M8 11h8\"/><path d=\"M8 7h8\"/><path d=\"M9 7a4 4 0 0 1 0 8H8l3 2\"/>",
  "receipt-japanese-yen": "<path d=\"m12 10 3-3\"/><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"/><path d=\"M9 11h6\"/><path d=\"M9 15h6\"/><path d=\"m9 7 3 3v7\"/>",
  "receipt-pound-sterling": "<path d=\"M10 17V9.5a1 1 0 0 1 5 0\"/><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"/><path d=\"M8 13h5\"/><path d=\"M8 17h7\"/>",
  "receipt-russian-ruble": "<path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"/><path d=\"M8 11h5a2 2 0 0 0 0-4h-3v10\"/><path d=\"M8 15h5\"/>",
  "receipt-swiss-franc": "<path d=\"M10 11h4\"/><path d=\"M10 17V7h5\"/><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"/><path d=\"M8 15h5\"/>",
  "receipt-text": "<path d=\"M13 16H8\"/><path d=\"M14 8H8\"/><path d=\"M16 12H8\"/><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"/>",
  "receipt-turkish-lira": "<path d=\"M10 7v10a5 5 0 0 0 5-5\"/><path d=\"m14 8-6 3\"/><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"/>",
  "receipt": "<path d=\"M12 17V7\"/><path d=\"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8\"/><path d=\"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z\"/>",
  "rectangle-circle": "<path d=\"M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z\"/><circle cx=\"14\" cy=\"12\" r=\"8\"/>",
  "rectangle-ellipsis": "<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/><path d=\"M12 12h.01\"/><path d=\"M17 12h.01\"/><path d=\"M7 12h.01\"/>",
  "rectangle-goggles": "<path d=\"M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z\"/>",
  "rectangle-horizontal": "<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\"/>",
  "rectangle-vertical": "<rect width=\"12\" height=\"20\" x=\"6\" y=\"2\" rx=\"2\"/>",
  "recycle": "<path d=\"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5\"/><path d=\"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12\"/><path d=\"m14 16-3 3 3 3\"/><path d=\"M8.293 13.596 7.196 9.5 3.1 10.598\"/><path d=\"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843\"/><path d=\"m13.378 9.633 4.096 1.098 1.097-4.096\"/>",
  "redo-2": "<path d=\"m15 14 5-5-5-5\"/><path d=\"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13\"/>",
  "redo-dot": "<circle cx=\"12\" cy=\"17\" r=\"1\"/><path d=\"M21 7v6h-6\"/><path d=\"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7\"/>",
  "redo": "<path d=\"M21 7v6h-6\"/><path d=\"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7\"/>",
  "refresh-ccw-dot": "<path d=\"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/><path d=\"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16\"/><path d=\"M16 16h5v5\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/>",
  "refresh-ccw": "<path d=\"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/><path d=\"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16\"/><path d=\"M16 16h5v5\"/>",
  "refresh-cw-off": "<path d=\"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47\"/><path d=\"M8 16H3v5\"/><path d=\"M3 12C3 9.51 4 7.26 5.64 5.64\"/><path d=\"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64\"/><path d=\"M21 12c0 1-.16 1.97-.47 2.87\"/><path d=\"M21 3v5h-5\"/><path d=\"M22 22 2 2\"/>",
  "refresh-cw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\"/><path d=\"M21 3v5h-5\"/><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\"/><path d=\"M8 16H3v5\"/>",
  "refrigerator": "<path d=\"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z\"/><path d=\"M5 10h14\"/><path d=\"M15 7v6\"/>",
  "regex": "<path d=\"M17 3v10\"/><path d=\"m12.67 5.5 8.66 5\"/><path d=\"m12.67 10.5 8.66-5\"/><path d=\"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z\"/>",
  "remove-formatting": "<path d=\"M4 7V4h16v3\"/><path d=\"M5 20h6\"/><path d=\"M13 4 8 20\"/><path d=\"m15 15 5 5\"/><path d=\"m20 15-5 5\"/>",
  "repeat-1": "<path d=\"m17 2 4 4-4 4\"/><path d=\"M3 11v-1a4 4 0 0 1 4-4h14\"/><path d=\"m7 22-4-4 4-4\"/><path d=\"M21 13v1a4 4 0 0 1-4 4H3\"/><path d=\"M11 10h1v4\"/>",
  "repeat-2": "<path d=\"m2 9 3-3 3 3\"/><path d=\"M13 18H7a2 2 0 0 1-2-2V6\"/><path d=\"m22 15-3 3-3-3\"/><path d=\"M11 6h6a2 2 0 0 1 2 2v10\"/>",
  "repeat-off": "<path d=\"M11.656 6H21l-4-4\"/><path d=\"M17.898 17.898A4 4 0 0 1 17 18H3l4-4\"/><path d=\"m2 2 20 20\"/><path d=\"M21 13v1a4 4 0 0 1-.171 1.159\"/><path d=\"m21 6-4 4\"/><path d=\"M3 11v-1a4 4 0 0 1 3.102-3.898\"/><path d=\"m7 22-4-4\"/>",
  "repeat": "<path d=\"m17 2 4 4-4 4\"/><path d=\"M3 11v-1a4 4 0 0 1 4-4h14\"/><path d=\"m7 22-4-4 4-4\"/><path d=\"M21 13v1a4 4 0 0 1-4 4H3\"/>",
  "replace-all": "<path d=\"M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1\"/><path d=\"M14 4a1 1 0 0 1 1-1\"/><path d=\"M15 10a1 1 0 0 1-1-1\"/><path d=\"M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1\"/><path d=\"M21 4a1 1 0 0 0-1-1\"/><path d=\"M21 9a1 1 0 0 1-1 1\"/><path d=\"m3 7 3 3 3-3\"/><path d=\"M6 10V5a2 2 0 0 1 2-2h2\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>",
  "replace": "<path d=\"M14 4a1 1 0 0 1 1-1\"/><path d=\"M15 10a1 1 0 0 1-1-1\"/><path d=\"M21 4a1 1 0 0 0-1-1\"/><path d=\"M21 9a1 1 0 0 1-1 1\"/><path d=\"m3 7 3 3 3-3\"/><path d=\"M6 10V5a2 2 0 0 1 2-2h2\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/>",
  "reply-all": "<path d=\"m12 17-5-5 5-5\"/><path d=\"M22 18v-2a4 4 0 0 0-4-4H7\"/><path d=\"m7 17-5-5 5-5\"/>",
  "reply": "<path d=\"M20 18v-2a4 4 0 0 0-4-4H4\"/><path d=\"m9 17-5-5 5-5\"/>",
  "rewind": "<path d=\"M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z\"/><path d=\"M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z\"/>",
  "ribbon": "<path d=\"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22\"/><path d=\"m12 18 2.57-3.5\"/><path d=\"M6.243 9.016a7 7 0 0 1 11.507-.009\"/><path d=\"M9.35 14.53 12 11.22\"/><path d=\"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z\"/>",
  "road": "<path d=\"M12 17v4\"/><path d=\"M12 5V3\"/><path d=\"M12 9v3\"/><path d=\"M2.077 18.449A2 2 0 0 0 4 21h16a2 2 0 0 0 1.924-2.55l-4-14A2 2 0 0 0 16 3H8a2 2 0 0 0-1.924 1.45z\"/>",
  "rocket": "<path d=\"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z\"/><path d=\"M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z\"/><path d=\"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0\"/><path d=\"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5\"/>",
  "rocking-chair": "<path d=\"m15 13 3.708 7.416\"/><path d=\"M3 19a15 15 0 0 0 18 0\"/><path d=\"m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18\"/><path d=\"m9 13-3.708 7.416\"/>",
  "roller-coaster": "<path d=\"M6 19V5\"/><path d=\"M10 19V6.8\"/><path d=\"M14 19v-7.8\"/><path d=\"M18 5v4\"/><path d=\"M18 19v-6\"/><path d=\"M22 19V9\"/><path d=\"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65\"/>",
  "rose": "<path d=\"M17 10h-1a4 4 0 1 1 4-4v.534\"/><path d=\"M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31\"/><path d=\"M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2\"/><path d=\"M9.77 12C4 15 2 22 2 22\"/><circle cx=\"17\" cy=\"8\" r=\"2\"/>",
  "rotate-3d": "<path d=\"m15.194 13.707 3.814 1.86-1.86 3.814\"/><path d=\"M16.47214 7.52786 A 5 10 0 1 0 13 21.79796\"/><path d=\"M21.79796 11 A 10 5 0 1 0 19 15.57071\"/>",
  "rotate-ccw-key": "<path d=\"M12 7v6\"/><path d=\"M12 9h2\"/><path d=\"M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/><circle cx=\"12\" cy=\"15\" r=\"2\"/>",
  "rotate-ccw-square": "<path d=\"M20 9V7a2 2 0 0 0-2-2h-6\"/><path d=\"m15 2-3 3 3 3\"/><path d=\"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2\"/>",
  "rotate-ccw": "<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5\"/>",
  "rotate-cw-square": "<path d=\"M12 5H6a2 2 0 0 0-2 2v3\"/><path d=\"m9 8 3-3-3-3\"/><path d=\"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2\"/>",
  "rotate-cw": "<path d=\"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8\"/><path d=\"M21 3v5h-5\"/>",
  "route-off": "<circle cx=\"6\" cy=\"19\" r=\"3\"/><path d=\"M9 19h8.5c.4 0 .9-.1 1.3-.2\"/><path d=\"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12\"/><path d=\"m2 2 20 20\"/><path d=\"M21 15.3a3.5 3.5 0 0 0-3.3-3.3\"/><path d=\"M15 5h-4.3\"/><circle cx=\"18\" cy=\"5\" r=\"3\"/>",
  "route": "<circle cx=\"6\" cy=\"19\" r=\"3\"/><path d=\"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15\"/><circle cx=\"18\" cy=\"5\" r=\"3\"/>",
  "router": "<rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\"/><path d=\"M6.01 18H6\"/><path d=\"M10.01 18H10\"/><path d=\"M15 10v4\"/><path d=\"M17.84 7.17a4 4 0 0 0-5.66 0\"/><path d=\"M20.66 4.34a8 8 0 0 0-11.31 0\"/>",
  "rows-2": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 12h18\"/>",
  "rows-3": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M21 9H3\"/><path d=\"M21 15H3\"/>",
  "rows-4": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M21 7.5H3\"/><path d=\"M21 12H3\"/><path d=\"M21 16.5H3\"/>",
  "rss": "<path d=\"M4 11a9 9 0 0 1 9 9\"/><path d=\"M4 4a16 16 0 0 1 16 16\"/><circle cx=\"5\" cy=\"19\" r=\"1\"/>",
  "ruler-dimension-line": "<path d=\"M10 15v-3\"/><path d=\"M14 15v-3\"/><path d=\"M18 15v-3\"/><path d=\"M2 8V4\"/><path d=\"M22 6H2\"/><path d=\"M22 8V4\"/><path d=\"M6 15v-3\"/><rect x=\"2\" y=\"12\" width=\"20\" height=\"8\" rx=\"2\"/>",
  "ruler": "<path d=\"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z\"/><path d=\"m14.5 12.5 2-2\"/><path d=\"m11.5 9.5 2-2\"/><path d=\"m8.5 6.5 2-2\"/><path d=\"m17.5 15.5 2-2\"/>",
  "russian-ruble": "<path d=\"M6 11h8a4 4 0 0 0 0-8H9v18\"/><path d=\"M6 15h8\"/>",
  "sailboat": "<path d=\"M10 2v15\"/><path d=\"M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z\"/><path d=\"M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z\"/>",
  "salad": "<path d=\"M7 21h10\"/><path d=\"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z\"/><path d=\"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1\"/><path d=\"m13 12 4-4\"/><path d=\"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2\"/>",
  "sandwich": "<path d=\"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777\"/><path d=\"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25\"/><path d=\"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9\"/><path d=\"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2\"/><rect width=\"20\" height=\"4\" x=\"2\" y=\"11\" rx=\"1\"/>",
  "satellite-dish": "<path d=\"M4 10a7.31 7.31 0 0 0 10 10Z\"/><path d=\"m9 15 3-3\"/><path d=\"M17 13a6 6 0 0 0-6-6\"/><path d=\"M21 13A10 10 0 0 0 11 3\"/>",
  "satellite": "<path d=\"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5\"/><path d=\"M16.5 7.5 19 5\"/><path d=\"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5\"/><path d=\"M9 21a6 6 0 0 0-6-6\"/><path d=\"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z\"/>",
  "saudi-riyal": "<path d=\"m20 19.5-5.5 1.2\"/><path d=\"M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2\"/><path d=\"m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2\"/><path d=\"M20 10 4 13.5\"/>",
  "save-all": "<path d=\"M10 2v3a1 1 0 0 0 1 1h5\"/><path d=\"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6\"/><path d=\"M18 22H4a2 2 0 0 1-2-2V6\"/><path d=\"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z\"/>",
  "save-check": "<path d=\"M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35\"/><path d=\"m16 19 2 2 4-4\"/><path d=\"M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7\"/><path d=\"M7 3v4a1 1 0 0 0 1 1h7\"/>",
  "save-off": "<path d=\"M13 13H8a1 1 0 0 0-1 1v7\"/><path d=\"M14 8h1\"/><path d=\"M17 21v-4\"/><path d=\"m2 2 20 20\"/><path d=\"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41\"/><path d=\"M29.5 11.5s5 5 4 5\"/><path d=\"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15\"/>",
  "save-pen": "<path d=\"M13.33 13H8a1 1 0 00-1 1v7\"/><path d=\"M14.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l4.013-4.009a1 1 0 10-3.004-3.004z\"/><path d=\"M7 3v4a1 1 0 001 1h7\"/><path d=\"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h10.2a2 2 0 011.4.6l3.8 3.8a2 2 0 01.6 1.4v.3\"/>",
  "save-plus": "<path d=\"M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V12\"/><path d=\"M16 13H8a1 1 0 0 0-1 1v7\"/><path d=\"M19 22v-6\"/><path d=\"M22 19h-6\"/><path d=\"M7 3v4a1 1 0 0 0 1 1h7\"/>",
  "save": "<path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"/><polyline points=\"17 21 17 13 7 13 7 21\"/><polyline points=\"7 3 7 8 15 8\"/>",
  "scale-3d": "<path d=\"M5 7v11a1 1 0 0 0 1 1h11\"/><path d=\"M5.293 18.707 11 13\"/><circle cx=\"19\" cy=\"19\" r=\"2\"/><circle cx=\"5\" cy=\"5\" r=\"2\"/>",
  "scale": "<path d=\"M12 3v18\"/><path d=\"m19 8 3 8a5 5 0 0 1-6 0zV7\"/><path d=\"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1\"/><path d=\"m5 8 3 8a5 5 0 0 1-6 0zV7\"/><path d=\"M7 21h10\"/>",
  "scaling": "<path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M14 15H9v-5\"/><path d=\"M16 3h5v5\"/><path d=\"M21 3 9 15\"/>",
  "scan-barcode": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><path d=\"M8 7v10\"/><path d=\"M12 7v10\"/><path d=\"M17 7v10\"/>",
  "scan-eye": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/><path d=\"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0\"/>",
  "scan-face": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"/><path d=\"M9 9h.01\"/><path d=\"M15 9h.01\"/>",
  "scan-heart": "<path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><path d=\"M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z\"/>",
  "scan-line": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><path d=\"M7 12h10\"/>",
  "scan-qr-code": "<path d=\"M17 12v4a1 1 0 0 1-1 1h-4\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M17 8V7\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M7 17h.01\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><rect x=\"7\" y=\"7\" width=\"5\" height=\"5\" rx=\"1\"/>",
  "scan-search": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"m16 16-1.9-1.9\"/>",
  "scan-text": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/><path d=\"M7 8h8\"/><path d=\"M7 12h10\"/><path d=\"M7 16h6\"/>",
  "scan": "<path d=\"M3 7V5a2 2 0 0 1 2-2h2\"/><path d=\"M17 3h2a2 2 0 0 1 2 2v2\"/><path d=\"M21 17v2a2 2 0 0 1-2 2h-2\"/><path d=\"M7 21H5a2 2 0 0 1-2-2v-2\"/>",
  "school": "<path d=\"M14 21v-3a2 2 0 0 0-4 0v3\"/><path d=\"M18 4.933V21\"/><path d=\"m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6\"/><path d=\"m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11\"/><path d=\"M6 4.933V21\"/><circle cx=\"12\" cy=\"9\" r=\"2\"/>",
  "scissors-line-dashed": "<path d=\"M5.42 9.42 8 12\"/><circle cx=\"4\" cy=\"8\" r=\"2\"/><path d=\"m14 6-8.58 8.58\"/><circle cx=\"4\" cy=\"16\" r=\"2\"/><path d=\"M10.8 14.8 14 18\"/><path d=\"M16 12h-2\"/><path d=\"M22 12h-2\"/>",
  "scissors": "<circle cx=\"6\" cy=\"6\" r=\"3\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"/><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"/><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"/>",
  "scooter": "<path d=\"M21 4h-3.5l2 11.05\"/><path d=\"M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009\"/><circle cx=\"19.5\" cy=\"17.5\" r=\"2.5\"/><circle cx=\"4.5\" cy=\"17.5\" r=\"2.5\"/>",
  "screen-share-off": "<path d=\"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3\"/><path d=\"M8 21h8\"/><path d=\"M12 17v4\"/><path d=\"m22 3-5 5\"/><path d=\"m17 3 5 5\"/>",
  "screen-share": "<path d=\"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3\"/><path d=\"M8 21h8\"/><path d=\"M12 17v4\"/><path d=\"m17 8 5-5\"/><path d=\"M17 3h5v5\"/>",
  "scroll-text": "<path d=\"M15 12h-5\"/><path d=\"M15 8h-5\"/><path d=\"M19 17V5a2 2 0 0 0-2-2H4\"/><path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\"/>",
  "scroll": "<path d=\"M19 17V5a2 2 0 0 0-2-2H4\"/><path d=\"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3\"/>",
  "search-alert": "<circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/><path d=\"M11 7v4\"/><path d=\"M11 15h.01\"/>",
  "search-check": "<path d=\"m8 11 2 2 4-4\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/>",
  "search-code": "<path d=\"m13 13.5 2-2.5-2-2.5\"/><path d=\"m21 21-4.3-4.3\"/><path d=\"M9 8.5 7 11l2 2.5\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/>",
  "search-slash": "<path d=\"m13.5 8.5-5 5\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/>",
  "search-x": "<path d=\"m13.5 8.5-5 5\"/><path d=\"m8.5 8.5 5 5\"/><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/>",
  "search": "<circle cx=\"11\" cy=\"11\" r=\"8\"/><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"/>",
  "section": "<path d=\"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0\"/><path d=\"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0\"/>",
  "send-horizontal": "<path d=\"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z\"/><path d=\"M6 12h16\"/>",
  "send-to-back": "<rect x=\"14\" y=\"14\" width=\"8\" height=\"8\" rx=\"2\"/><rect x=\"2\" y=\"2\" width=\"8\" height=\"8\" rx=\"2\"/><path d=\"M7 14v1a2 2 0 0 0 2 2h1\"/><path d=\"M14 7h1a2 2 0 0 1 2 2v1\"/>",
  "send": "<line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"/><polygon points=\"22 2 15 22 11 13 2 9 22 2\"/>",
  "separator-horizontal": "<path d=\"m16 16-4 4-4-4\"/><path d=\"M3 12h18\"/><path d=\"m8 8 4-4 4 4\"/>",
  "separator-vertical": "<path d=\"M12 3v18\"/><path d=\"m16 16 4-4-4-4\"/><path d=\"m8 8-4 4 4 4\"/>",
  "server-cog": "<path d=\"m10.852 14.772-.383.923\"/><path d=\"M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923\"/><path d=\"m13.148 9.228.383-.923\"/><path d=\"m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544\"/><path d=\"m14.772 10.852.923-.383\"/><path d=\"m14.772 13.148.923.383\"/><path d=\"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5\"/><path d=\"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5\"/><path d=\"M6 18h.01\"/><path d=\"M6 6h.01\"/><path d=\"m9.228 10.852-.923-.383\"/><path d=\"m9.228 13.148-.923.383\"/>",
  "server-crash": "<path d=\"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2\"/><path d=\"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2\"/><path d=\"M6 6h.01\"/><path d=\"M6 18h.01\"/><path d=\"m13 6-4 6h6l-4 6\"/>",
  "server-off": "<path d=\"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5\"/><path d=\"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z\"/><path d=\"M22 17v-1a2 2 0 0 0-2-2h-1\"/><path d=\"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z\"/><path d=\"M6 18h.01\"/><path d=\"m2 2 20 20\"/>",
  "server": "<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"/><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"/><line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"/><line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"/>",
  "settings-2": "<path d=\"M14 17H5\"/><path d=\"M19 7h-9\"/><circle cx=\"17\" cy=\"17\" r=\"3\"/><circle cx=\"7\" cy=\"7\" r=\"3\"/>",
  "settings": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z\"/>",
  "shapes": "<path d=\"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"3.5\"/>",
  "share-2": "<circle cx=\"18\" cy=\"5\" r=\"3\"/><circle cx=\"6\" cy=\"12\" r=\"3\"/><circle cx=\"18\" cy=\"19\" r=\"3\"/><line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\"/><line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\"/>",
  "share": "<circle cx=\"18\" cy=\"5\" r=\"3\"/><circle cx=\"6\" cy=\"12\" r=\"3\"/><circle cx=\"18\" cy=\"19\" r=\"3\"/><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"/><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"/>",
  "sheet": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><line x1=\"3\" x2=\"21\" y1=\"9\" y2=\"9\"/><line x1=\"3\" x2=\"21\" y1=\"15\" y2=\"15\"/><line x1=\"9\" x2=\"9\" y1=\"9\" y2=\"21\"/><line x1=\"15\" x2=\"15\" y1=\"9\" y2=\"21\"/>",
  "shell": "<path d=\"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44\"/>",
  "shelving-unit": "<path d=\"M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3\"/><path d=\"M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3\"/><path d=\"M20 22V2\"/><path d=\"M4 12h16\"/><path d=\"M4 20h16\"/><path d=\"M4 2v20\"/><path d=\"M4 4h16\"/>",
  "shield-alert": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"M12 8v4\"/><path d=\"M12 16h.01\"/>",
  "shield-ban": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m4.243 5.21 14.39 12.472\"/>",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9 12 2 2 4-4\"/>",
  "shield-cog-corner": "<path d=\"M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4\"/><path d=\"M14.923 16.547 14 16.164\"/><path d=\"m14.923 18.843-.923.383\"/><path d=\"M16.547 14.923 16.164 14\"/><path d=\"m16.547 20.467-.383.924\"/><path d=\"m18.843 14.923.383-.923\"/><path d=\"m19.225 21.391-.382-.924\"/><path d=\"m20.467 16.547.923-.383\"/><path d=\"m20.467 18.843.923.383\"/><circle cx=\"17.695\" cy=\"17.695\" r=\"3\"/>",
  "shield-cog": "<path d=\"m10.929 14.467-.383.924\"/><path d=\"M10.929 8.923 10.546 8\"/><path d=\"M13.225 8.923 13.608 8\"/><path d=\"m13.607 15.391-.382-.924\"/><path d=\"m14.849 10.547.923-.383\"/><path d=\"m14.849 12.843.923.383\"/><path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m9.305 10.547-.923-.383\"/><path d=\"m9.305 12.843-.923.383\"/><circle cx=\"12.077\" cy=\"11.695\" r=\"3\"/>",
  "shield-ellipsis": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"M8 12h.01\"/><path d=\"M12 12h.01\"/><path d=\"M16 12h.01\"/>",
  "shield-half": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"M12 22V2\"/>",
  "shield-minus": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"M9 12h6\"/>",
  "shield-off": "<path d=\"m2 2 20 20\"/><path d=\"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71\"/><path d=\"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264\"/>",
  "shield-plus": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"M9 12h6\"/><path d=\"M12 9v6\"/>",
  "shield-question-mark": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/>",
  "shield-user": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"M6.376 18.91a6 6 0 0 1 11.249.003\"/><circle cx=\"12\" cy=\"11\" r=\"4\"/>",
  "shield-x": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"/><path d=\"m14.5 9.5-5 5\"/><path d=\"m9.5 9.5 5 5\"/>",
  "shield": "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/>",
  "ship-wheel": "<circle cx=\"12\" cy=\"12\" r=\"8\"/><path d=\"M12 2v7.5\"/><path d=\"m19 5-5.23 5.23\"/><path d=\"M22 12h-7.5\"/><path d=\"m19 19-5.23-5.23\"/><path d=\"M12 14.5V22\"/><path d=\"M10.23 13.77 5 19\"/><path d=\"M9.5 12H2\"/><path d=\"M10.23 10.23 5 5\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\"/>",
  "ship": "<path d=\"M12 10.189V14\"/><path d=\"M12 2v3\"/><path d=\"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6\"/><path d=\"M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76\"/><path d=\"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/>",
  "shirt": "<path d=\"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z\"/>",
  "shopping-bag": "<path d=\"M16 10a4 4 0 0 1-8 0\"/><path d=\"M3.103 6.034h17.794\"/><path d=\"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z\"/>",
  "shopping-basket": "<path d=\"m15 11-1 9\"/><path d=\"m19 11-4-7\"/><path d=\"M2 11h20\"/><path d=\"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4\"/><path d=\"M4.5 15.5h15\"/><path d=\"m5 11 4-7\"/><path d=\"m9 11 1 9\"/>",
  "shopping-cart": "<circle cx=\"8\" cy=\"21\" r=\"1\"/><circle cx=\"19\" cy=\"21\" r=\"1\"/><path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\"/>",
  "shovel": "<path d=\"M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z\"/><path d=\"M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z\"/><path d=\"m9 15 7.879-7.878\"/>",
  "shower-head": "<path d=\"m4 4 2.5 2.5\"/><path d=\"M13.5 6.5a4.95 4.95 0 0 0-7 7\"/><path d=\"M15 5 5 15\"/><path d=\"M14 17v.01\"/><path d=\"M10 16v.01\"/><path d=\"M13 13v.01\"/><path d=\"M16 10v.01\"/><path d=\"M11 20v.01\"/><path d=\"M17 14v.01\"/><path d=\"M20 11v.01\"/>",
  "shredder": "<path d=\"M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5\"/><path d=\"M14 2v5a1 1 0 0 0 1 1h5\"/><path d=\"M10 22v-5\"/><path d=\"M14 19v-2\"/><path d=\"M18 20v-3\"/><path d=\"M2 13h20\"/><path d=\"M6 20v-3\"/>",
  "shrimp": "<path d=\"M11 12h.01\"/><path d=\"M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1\"/><path d=\"M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8\"/><path d=\"M14 8a8.5 8.5 0 0 1 0 8\"/><path d=\"M16 16c2 0 4.5-4 4-6\"/>",
  "shrink": "<path d=\"m15 15 6 6m-6-6v4.8m0-4.8h4.8\"/><path d=\"M9 19.8V15m0 0H4.2M9 15l-6 6\"/><path d=\"M15 4.2V9m0 0h4.8M15 9l6-6\"/><path d=\"M9 4.2V9m0 0H4.2M9 9 3 3\"/>",
  "shrub": "<path d=\"M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5\"/><path d=\"M14.5 14.5 12 17\"/><path d=\"M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z\"/>",
  "shuffle": "<path d=\"m18 14 4 4-4 4\"/><path d=\"m18 2 4 4-4 4\"/><path d=\"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22\"/><path d=\"M2 6h1.972a4 4 0 0 1 3.6 2.2\"/><path d=\"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45\"/>",
  "sigma": "<path d=\"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2\"/>",
  "signal-high": "<path d=\"M2 20h.01\"/><path d=\"M7 20v-4\"/><path d=\"M12 20v-8\"/><path d=\"M17 20V8\"/>",
  "signal-low": "<path d=\"M2 20h.01\"/><path d=\"M7 20v-4\"/>",
  "signal-medium": "<path d=\"M2 20h.01\"/><path d=\"M7 20v-4\"/><path d=\"M12 20v-8\"/>",
  "signal-zero": "<path d=\"M2 20h.01\"/>",
  "signal": "<path d=\"M2 20h.01\"/><path d=\"M7 20v-4\"/><path d=\"M12 20v-8\"/><path d=\"M17 20V8\"/><path d=\"M22 4v16\"/>",
  "signature": "<path d=\"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284\"/><path d=\"M3 21h18\"/>",
  "signpost-big": "<path d=\"M10 9H4L2 7l2-2h6\"/><path d=\"M14 5h6l2 2-2 2h-6\"/><path d=\"M10 22V4a2 2 0 1 1 4 0v18\"/><path d=\"M8 22h8\"/>",
  "signpost": "<path d=\"M12 13v8\"/><path d=\"M12 3v3\"/><path d=\"M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z\"/>",
  "siren": "<path d=\"M7 18v-6a5 5 0 1 1 10 0v6\"/><path d=\"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z\"/><path d=\"M21 12h1\"/><path d=\"M18.5 4.5 18 5\"/><path d=\"M2 12h1\"/><path d=\"M12 2v1\"/><path d=\"m4.929 4.929.707.707\"/><path d=\"M12 12v6\"/>",
  "skip-back": "<path d=\"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z\"/><path d=\"M3 20V4\"/>",
  "skip-forward": "<path d=\"M21 4v16\"/><path d=\"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z\"/>",
  "skull": "<path d=\"m12.5 17-.5-1-.5 1h1z\"/><path d=\"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z\"/><circle cx=\"15\" cy=\"12\" r=\"1\"/><circle cx=\"9\" cy=\"12\" r=\"1\"/>",
  "slash": "<path d=\"M22 2 2 22\"/>",
  "slice": "<path d=\"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14\"/>",
  "sliders-horizontal": "<path d=\"M10 5H3\"/><path d=\"M12 19H3\"/><path d=\"M14 3v4\"/><path d=\"M16 17v4\"/><path d=\"M21 12h-9\"/><path d=\"M21 19h-5\"/><path d=\"M21 5h-7\"/><path d=\"M8 10v4\"/><path d=\"M8 12H3\"/>",
  "sliders-vertical": "<path d=\"M10 8h4\"/><path d=\"M12 21v-9\"/><path d=\"M12 8V3\"/><path d=\"M17 16h4\"/><path d=\"M19 12V3\"/><path d=\"M19 21v-5\"/><path d=\"M3 14h4\"/><path d=\"M5 10V3\"/><path d=\"M5 21v-7\"/>",
  "smartphone-charging": "<rect width=\"14\" height=\"20\" x=\"5\" y=\"2\" rx=\"2\" ry=\"2\"/><path d=\"M12.667 8 10 12h4l-2.667 4\"/>",
  "smartphone-nfc": "<rect width=\"7\" height=\"12\" x=\"2\" y=\"6\" rx=\"1\"/><path d=\"M13 8.32a7.43 7.43 0 0 1 0 7.36\"/><path d=\"M16.46 6.21a11.76 11.76 0 0 1 0 11.58\"/><path d=\"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8\"/>",
  "smartphone": "<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"/><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"/>",
  "smile-plus": "<path d=\"M22 11v1a10 10 0 1 1-9-10\"/><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"/><line x1=\"9\" x2=\"9.01\" y1=\"9\" y2=\"9\"/><line x1=\"15\" x2=\"15.01\" y1=\"9\" y2=\"9\"/><path d=\"M16 5h6\"/><path d=\"M19 2v6\"/>",
  "smile": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"/><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"/><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"/>",
  "snail": "<path d=\"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0\"/><circle cx=\"10\" cy=\"13\" r=\"8\"/><path d=\"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6\"/><path d=\"M18 3 19.1 5.2\"/><path d=\"M22 3 20.9 5.2\"/>",
  "snowflake": "<path d=\"m10 20-1.25-2.5L6 18\"/><path d=\"M10 4 8.75 6.5 6 6\"/><path d=\"m14 20 1.25-2.5L18 18\"/><path d=\"m14 4 1.25 2.5L18 6\"/><path d=\"m17 21-3-6h-4\"/><path d=\"m17 3-3 6 1.5 3\"/><path d=\"M2 12h6.5L10 9\"/><path d=\"m20 10-1.5 2 1.5 2\"/><path d=\"M22 12h-6.5L14 15\"/><path d=\"m4 10 1.5 2L4 14\"/><path d=\"m7 21 3-6-1.5-3\"/><path d=\"m7 3 3 6h4\"/>",
  "soap-dispenser-droplet": "<path d=\"M10.5 2v4\"/><path d=\"M14 2H7a2 2 0 0 0-2 2\"/><path d=\"M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19\"/><path d=\"M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3\"/>",
  "sofa": "<path d=\"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3\"/><path d=\"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z\"/><path d=\"M4 18v2\"/><path d=\"M20 18v2\"/><path d=\"M12 4v9\"/>",
  "solar-panel": "<path d=\"M11 2h2\"/><path d=\"m14.28 14-4.56 8\"/><path d=\"m21 22-1.558-4H4.558\"/><path d=\"M3 10v2\"/><path d=\"M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z\"/><path d=\"M7 2a4 4 0 0 1-4 4\"/><path d=\"m8.66 7.66 1.41 1.41\"/>",
  "soup": "<path d=\"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z\"/><path d=\"M7 21h10\"/><path d=\"M19.5 12 22 6\"/><path d=\"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62\"/><path d=\"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62\"/><path d=\"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62\"/>",
  "space": "<path d=\"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1\"/>",
  "spade": "<path d=\"M12 18v4\"/><path d=\"M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5\"/>",
  "sparkle": "<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\"/>",
  "sparkles": "<path d=\"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z\"/><path d=\"M20 2v4\"/><path d=\"M22 4h-4\"/><circle cx=\"4\" cy=\"20\" r=\"2\"/>",
  "speaker": "<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><path d=\"M12 6h.01\"/><circle cx=\"12\" cy=\"14\" r=\"4\"/><path d=\"M12 14h.01\"/>",
  "speech": "<path d=\"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20\"/><path d=\"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603\"/><path d=\"M17 15a3.5 3.5 0 0 0-.025-4.975\"/>",
  "spell-check-2": "<path d=\"m6 16 6-12 6 12\"/><path d=\"M8 12h8\"/><path d=\"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1\"/>",
  "spell-check": "<path d=\"m6 16 6-12 6 12\"/><path d=\"M8 12h8\"/><path d=\"m16 20 2 2 4-4\"/>",
  "spline-pointer": "<path d=\"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z\"/><path d=\"M5 17A12 12 0 0 1 17 5\"/><circle cx=\"19\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"19\" r=\"2\"/>",
  "spline": "<circle cx=\"19\" cy=\"5\" r=\"2\"/><circle cx=\"5\" cy=\"19\" r=\"2\"/><path d=\"M5 17A12 12 0 0 1 17 5\"/>",
  "split": "<path d=\"M16 3h5v5\"/><path d=\"M8 3H3v5\"/><path d=\"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3\"/><path d=\"m15 9 6-6\"/>",
  "spool": "<path d=\"M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66\"/><path d=\"m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178\"/>",
  "sport-shoe": "<path d=\"m15 10.42 4.8-5.07\"/><path d=\"M19 18h3\"/><path d=\"M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14\"/>",
  "spotlight": "<path d=\"M15.295 19.562 16 22\"/><path d=\"m17 16 3.758 2.098\"/><path d=\"m19 12.5 3.026-.598\"/><path d=\"M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z\"/><path d=\"M8 9V2\"/>",
  "spray-can": "<path d=\"M3 3h.01\"/><path d=\"M7 5h.01\"/><path d=\"M11 7h.01\"/><path d=\"M3 7h.01\"/><path d=\"M7 9h.01\"/><path d=\"M3 11h.01\"/><rect width=\"4\" height=\"4\" x=\"15\" y=\"5\"/><path d=\"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2\"/><path d=\"m13 14 8-2\"/><path d=\"m13 19 8-2\"/>",
  "sprout": "<path d=\"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3\"/><path d=\"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4\"/><path d=\"M5 21h14\"/>",
  "square-activity": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M17 12h-2l-2 5-2-10-2 5H7\"/>",
  "square-arrow-down-left": "<path d=\"M15 15H9l6-6\"/><path d=\"M9 15V9\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "square-arrow-down-right": "<path d=\"M15 15 9 9\"/><path d=\"M9 15h6V9\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "square-arrow-down": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 8v8\"/><path d=\"m8 12 4 4 4-4\"/>",
  "square-arrow-left": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m12 8-4 4 4 4\"/><path d=\"M16 12H8\"/>",
  "square-arrow-out-down-left": "<path d=\"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6\"/><path d=\"m3 21 9-9\"/><path d=\"M9 21H3v-6\"/>",
  "square-arrow-out-down-right": "<path d=\"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6\"/><path d=\"m21 21-9-9\"/><path d=\"M21 15v6h-6\"/>",
  "square-arrow-out-up-left": "<path d=\"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6\"/><path d=\"m3 3 9 9\"/><path d=\"M3 9V3h6\"/>",
  "square-arrow-out-up-right": "<path d=\"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6\"/><path d=\"m21 3-9 9\"/><path d=\"M15 3h6v6\"/>",
  "square-arrow-right-enter": "<path d=\"m10 16 4-4-4-4\"/><path d=\"M3 12h11\"/><path d=\"M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3\"/>",
  "square-arrow-right-exit": "<path d=\"M10 12h11\"/><path d=\"m17 16 4-4-4-4\"/><path d=\"M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344\"/>",
  "square-arrow-right": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 12h8\"/><path d=\"m12 16 4-4-4-4\"/>",
  "square-arrow-up-left": "<path d=\"M15 15 9 9\"/><path d=\"M9 15V9h6\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "square-arrow-up-right": "<path d=\"M15 15V9H9\"/><path d=\"m9 15 6-6\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "square-arrow-up": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m16 12-4-4-4 4\"/><path d=\"M12 16V8\"/>",
  "square-asterisk": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 8v8\"/><path d=\"m8.5 14 7-4\"/><path d=\"m8.5 10 7 4\"/>",
  "square-bottom-dashed-scissors": "<line x1=\"5\" y1=\"3\" x2=\"19\" y2=\"3\"/><line x1=\"3\" y1=\"5\" x2=\"3\" y2=\"19\"/><line x1=\"21\" y1=\"5\" x2=\"21\" y2=\"19\"/><line x1=\"9\" y1=\"21\" x2=\"10\" y2=\"21\"/><line x1=\"14\" y1=\"21\" x2=\"15\" y2=\"21\"/><path d=\"M 3 5 A2 2 0 0 1 5 3\"/><path d=\"M 19 3 A2 2 0 0 1 21 5\"/><path d=\"M 5 21 A2 2 0 0 1 3 19\"/><path d=\"M 21 19 A2 2 0 0 1 19 21\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><line x1=\"9.56066\" y1=\"9.56066\" x2=\"12\" y2=\"12\"/><line x1=\"17\" y1=\"17\" x2=\"14.82\" y2=\"14.82\"/><circle cx=\"8.5\" cy=\"15.5\" r=\"1.5\"/><line x1=\"9.56066\" y1=\"14.43934\" x2=\"17\" y2=\"7\"/>",
  "square-centerline-dashed-horizontal": "<path d=\"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3\"/><path d=\"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3\"/><path d=\"M12 20v2\"/><path d=\"M12 14v2\"/><path d=\"M12 8v2\"/><path d=\"M12 2v2\"/>",
  "square-centerline-dashed-vertical": "<path d=\"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3\"/><path d=\"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3\"/><path d=\"M4 12H2\"/><path d=\"M10 12H8\"/><path d=\"M16 12h-2\"/><path d=\"M22 12h-2\"/>",
  "square-chart-gantt": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 8h7\"/><path d=\"M8 12h6\"/><path d=\"M11 16h5\"/>",
  "square-check-big": "<path d=\"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344\"/><path d=\"m9 11 3 3L22 4\"/>",
  "square-check": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m9 12 2 2 4-4\"/>",
  "square-chevron-down": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m16 10-4 4-4-4\"/>",
  "square-chevron-left": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m14 16-4-4 4-4\"/>",
  "square-chevron-right": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m10 8 4 4-4 4\"/>",
  "square-chevron-up": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m8 14 4-4 4 4\"/>",
  "square-code": "<path d=\"m10 9-3 3 3 3\"/><path d=\"m14 15 3-3-3-3\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "square-dashed-bottom-code": "<path d=\"M10 9.5 8 12l2 2.5\"/><path d=\"M14 21h1\"/><path d=\"m14 9.5 2 2.5-2 2.5\"/><path d=\"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2\"/><path d=\"M9 21h1\"/>",
  "square-dashed-bottom": "<path d=\"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2\"/><path d=\"M9 21h1\"/><path d=\"M14 21h1\"/>",
  "square-dashed-kanban": "<path d=\"M8 7v7\"/><path d=\"M12 7v4\"/><path d=\"M16 7v9\"/><path d=\"M5 3a2 2 0 0 0-2 2\"/><path d=\"M9 3h1\"/><path d=\"M14 3h1\"/><path d=\"M19 3a2 2 0 0 1 2 2\"/><path d=\"M21 9v1\"/><path d=\"M21 14v1\"/><path d=\"M21 19a2 2 0 0 1-2 2\"/><path d=\"M14 21h1\"/><path d=\"M9 21h1\"/><path d=\"M5 21a2 2 0 0 1-2-2\"/><path d=\"M3 14v1\"/><path d=\"M3 9v1\"/>",
  "square-dashed-mouse-pointer": "<path d=\"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z\"/><path d=\"M5 3a2 2 0 0 0-2 2\"/><path d=\"M19 3a2 2 0 0 1 2 2\"/><path d=\"M5 21a2 2 0 0 1-2-2\"/><path d=\"M9 3h1\"/><path d=\"M9 21h2\"/><path d=\"M14 3h1\"/><path d=\"M3 9v1\"/><path d=\"M21 9v2\"/><path d=\"M3 14v1\"/>",
  "square-dashed-text": "<path d=\"M14 21h1\"/><path d=\"M14 3h1\"/><path d=\"M19 3a2 2 0 0 1 2 2\"/><path d=\"M21 14v1\"/><path d=\"M21 19a2 2 0 0 1-2 2\"/><path d=\"M21 9v1\"/><path d=\"M3 14v1\"/><path d=\"M3 9v1\"/><path d=\"M5 21a2 2 0 0 1-2-2\"/><path d=\"M5 3a2 2 0 0 0-2 2\"/><path d=\"M7 12h10\"/><path d=\"M7 16h6\"/><path d=\"M7 8h8\"/><path d=\"M9 21h1\"/><path d=\"M9 3h1\"/>",
  "square-dashed-top-solid": "<path d=\"M14 21h1\"/><path d=\"M21 14v1\"/><path d=\"M21 19a2 2 0 0 1-2 2\"/><path d=\"M21 9v1\"/><path d=\"M3 14v1\"/><path d=\"M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2\"/><path d=\"M3 9v1\"/><path d=\"M5 21a2 2 0 0 1-2-2\"/><path d=\"M9 21h1\"/>",
  "square-dashed": "<path d=\"M5 3a2 2 0 0 0-2 2\"/><path d=\"M19 3a2 2 0 0 1 2 2\"/><path d=\"M21 19a2 2 0 0 1-2 2\"/><path d=\"M5 21a2 2 0 0 1-2-2\"/><path d=\"M9 3h1\"/><path d=\"M9 21h1\"/><path d=\"M14 3h1\"/><path d=\"M14 21h1\"/><path d=\"M3 9v1\"/><path d=\"M21 9v1\"/><path d=\"M3 14v1\"/><path d=\"M21 14v1\"/>",
  "square-divide": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><line x1=\"8\" x2=\"16\" y1=\"12\" y2=\"12\"/><line x1=\"12\" x2=\"12\" y1=\"16\" y2=\"16\"/><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"8\"/>",
  "square-dot": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/>",
  "square-equal": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 10h10\"/><path d=\"M7 14h10\"/>",
  "square-function": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3\"/><path d=\"M9 11.2h5.7\"/>",
  "square-kanban": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 7v7\"/><path d=\"M12 7v4\"/><path d=\"M16 7v9\"/>",
  "square-library": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 7v10\"/><path d=\"M11 7v10\"/><path d=\"m15 7 2 10\"/>",
  "square-m": "<path d=\"M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "square-menu": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 8h10\"/><path d=\"M7 12h10\"/><path d=\"M7 16h10\"/>",
  "square-minus": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 12h8\"/>",
  "square-mouse-pointer": "<path d=\"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z\"/><path d=\"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6\"/>",
  "square-parking-off": "<path d=\"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41\"/><path d=\"M3 8.7V19a2 2 0 0 0 2 2h10.3\"/><path d=\"m2 2 20 20\"/><path d=\"M13 13a3 3 0 1 0 0-6H9v2\"/><path d=\"M9 17v-2.3\"/>",
  "square-parking": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 17V7h4a3 3 0 0 1 0 6H9\"/>",
  "square-pause": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><line x1=\"10\" x2=\"10\" y1=\"15\" y2=\"9\"/><line x1=\"14\" x2=\"14\" y1=\"15\" y2=\"9\"/>",
  "square-pen": "<path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z\"/>",
  "square-percent": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"m15 9-6 6\"/><path d=\"M9 9h.01\"/><path d=\"M15 15h.01\"/>",
  "square-pi": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 7h10\"/><path d=\"M10 7v10\"/><path d=\"M16 17a2 2 0 0 1-2-2V7\"/>",
  "square-pilcrow": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M12 12H9.5a2.5 2.5 0 0 1 0-5H17\"/><path d=\"M12 7v10\"/><path d=\"M16 7v10\"/>",
  "square-play": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z\"/>",
  "square-plus": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M8 12h8\"/><path d=\"M12 8v8\"/>",
  "square-power": "<path d=\"M12 7v4\"/><path d=\"M7.998 9.003a5 5 0 1 0 8-.005\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "square-radical": "<path d=\"M7 12h2l2 5 2-10h4\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "square-round-corner": "<path d=\"M21 11a8 8 0 0 0-8-8\"/><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/>",
  "square-scissors": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><line x1=\"9.56066\" y1=\"9.56066\" x2=\"12\" y2=\"12\"/><line x1=\"17\" y1=\"17\" x2=\"14.82\" y2=\"14.82\"/><circle cx=\"8.5\" cy=\"15.5\" r=\"1.5\"/><line x1=\"9.56066\" y1=\"14.43934\" x2=\"17\" y2=\"7\"/>",
  "square-sigma": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M16 8.9V7H8l4 5-4 5h8v-1.9\"/>",
  "square-slash": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><line x1=\"9\" x2=\"15\" y1=\"15\" y2=\"9\"/>",
  "square-split-horizontal": "<path d=\"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3\"/><path d=\"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3\"/><line x1=\"12\" x2=\"12\" y1=\"4\" y2=\"20\"/>",
  "square-split-vertical": "<path d=\"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3\"/><path d=\"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3\"/><line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"/>",
  "square-square": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><rect x=\"8\" y=\"8\" width=\"8\" height=\"8\" rx=\"1\"/>",
  "square-stack": "<path d=\"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2\"/><path d=\"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2\"/><rect width=\"8\" height=\"8\" x=\"14\" y=\"14\" rx=\"2\"/>",
  "square-star": "<path d=\"M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "square-stop": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\" rx=\"1\"/>",
  "square-terminal": "<path d=\"m7 11 2-2-2-2\"/><path d=\"M11 13h4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/>",
  "square-user-round": "<path d=\"M18 21a6 6 0 0 0-12 0\"/><circle cx=\"12\" cy=\"11\" r=\"4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/>",
  "square-user": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2\"/>",
  "square-x": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><path d=\"m15 9-6 6\"/><path d=\"m9 9 6 6\"/>",
  "square": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/>",
  "squares-exclude": "<path d=\"M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0\"/><path d=\"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2\"/>",
  "squares-intersect": "<path d=\"M10 22a2 2 0 0 1-2-2\"/><path d=\"M14 2a2 2 0 0 1 2 2\"/><path d=\"M16 22h-2\"/><path d=\"M2 10V8\"/><path d=\"M2 4a2 2 0 0 1 2-2\"/><path d=\"M20 8a2 2 0 0 1 2 2\"/><path d=\"M22 14v2\"/><path d=\"M22 20a2 2 0 0 1-2 2\"/><path d=\"M4 16a2 2 0 0 1-2-2\"/><path d=\"M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z\"/><path d=\"M8 2h2\"/>",
  "squares-subtract": "<path d=\"M10 22a2 2 0 0 1-2-2\"/><path d=\"M16 22h-2\"/><path d=\"M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z\"/><path d=\"M20 8a2 2 0 0 1 2 2\"/><path d=\"M22 14v2\"/><path d=\"M22 20a2 2 0 0 1-2 2\"/>",
  "squares-unite": "<path d=\"M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z\"/>",
  "squircle-dashed": "<path d=\"M13.77 3.043a34 34 0 0 0-3.54 0\"/><path d=\"M13.771 20.956a33 33 0 0 1-3.541.001\"/><path d=\"M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44\"/><path d=\"M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438\"/><path d=\"M20.957 10.23a33 33 0 0 1 0 3.54\"/><path d=\"M3.043 10.23a34 34 0 0 0 .001 3.541\"/><path d=\"M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438\"/><path d=\"M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44\"/>",
  "squircle": "<path d=\"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9\"/>",
  "squirrel": "<path d=\"M15.236 22a3 3 0 0 0-2.2-5\"/><path d=\"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4\"/><path d=\"M18 13h.01\"/><path d=\"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10\"/>",
  "stamp": "<path d=\"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13\"/><path d=\"M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z\"/><path d=\"M5 22h14\"/>",
  "star-check": "<path d=\"m19.06 12.501 2.78-2.707a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014\"/><path d=\"m15 18 2 2 4-4\"/>",
  "star-half": "<path d=\"M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2\"/>",
  "star-minus": "<path d=\"M15 18h6\"/><path d=\"M17.688 14a2.1 2.1 0 0 1 .416-.568l3.736-3.638a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014\"/>",
  "star-off": "<path d=\"m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152\"/><path d=\"m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099\"/><path d=\"m2 2 20 20\"/>",
  "star-plus": "<path d=\"M11.013 18.582 6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904L20 11.5\"/><path d=\"M15 18h6\"/><path d=\"M18 15v6\"/>",
  "star-x": "<path d=\"m15.5 15.5 5 5\"/><path d=\"m20.063 11.525 1.777-1.731a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428a2.1 2.1 0 0 1 .987-.243 2 2 0 0 1 .132.004\"/><path d=\"m20.5 15.5-5 5\"/>",
  "star": "<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"/>",
  "step-back": "<path d=\"M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z\"/><path d=\"M21 20V4\"/>",
  "step-forward": "<path d=\"M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z\"/><path d=\"M3 4v16\"/>",
  "stethoscope": "<path d=\"M11 2v2\"/><path d=\"M5 2v2\"/><path d=\"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1\"/><path d=\"M8 15a6 6 0 0 0 12 0v-3\"/><circle cx=\"20\" cy=\"10\" r=\"2\"/>",
  "sticker": "<path d=\"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z\"/><path d=\"M15 3v5a1 1 0 0 0 1 1h5\"/><path d=\"M8 13h.01\"/><path d=\"M16 13h.01\"/><path d=\"M10 16s.8 1 2 1c1.3 0 2-1 2-1\"/>",
  "sticky-note-check": "<path d=\"m15 19 2 2 4-4\"/><path d=\"M15 3v5a1 1 0 0 0 1 1h5\"/><path d=\"M21 13V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.5\"/>",
  "sticky-note-minus": "<path d=\"M15 3v5a1 1 0 0 0 1 1h5\"/><path d=\"M21 14V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35\"/><path d=\"M21 18h-6\"/>",
  "sticky-note-off": "<path d=\"M15 3v5a1 1 0 0 0 1 1h5\"/><path d=\"m2 2 20 20\"/><path d=\"M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586\"/><path d=\"M8.656 3H15a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 9v6.344\"/>",
  "sticky-note-plus": "<path d=\"M15 3v5a1 1 0 0 0 1 1h5\"/><path d=\"M18 15v6\"/><path d=\"M21 12.356V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.355\"/><path d=\"M21 18h-6\"/>",
  "sticky-note-x": "<path d=\"M15 3v5a1 1 0 0 0 1 1h5\"/><path d=\"m16 16 5 5\"/><path d=\"M21 12V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7\"/><path d=\"m21 16-5 5\"/>",
  "sticky-note": "<path d=\"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z\"/><path d=\"M15 3v5a1 1 0 0 0 1 1h5\"/>",
  "sticky-notes": "<path d=\"M10 8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 16 14v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z\"/><path d=\"M10 8v5a1 1 0 0 0 1 1h5\"/><path d=\"M8 4a2 2 0 0 1 2-2h6a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 22 8v6a2 2 0 0 1-2 2\"/><path d=\"M16 2v5a1 1 0 0 0 1 1h5\"/>",
  "stone": "<path d=\"M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z\"/><path d=\"M11.99 22 14 12l7.822 3.184\"/><path d=\"M14 12 8.47 2.302\"/>",
  "store": "<path d=\"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5\"/><path d=\"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244\"/><path d=\"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05\"/>",
  "stretch-horizontal": "<rect width=\"20\" height=\"6\" x=\"2\" y=\"4\" rx=\"2\"/><rect width=\"20\" height=\"6\" x=\"2\" y=\"14\" rx=\"2\"/>",
  "stretch-vertical": "<rect width=\"6\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\"/><rect width=\"6\" height=\"20\" x=\"14\" y=\"2\" rx=\"2\"/>",
  "strikethrough": "<path d=\"M16 4H9a3 3 0 0 0-2.83 4\"/><path d=\"M14 12a4 4 0 0 1 0 8H6\"/><line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"/>",
  "subscript": "<path d=\"m4 5 8 8\"/><path d=\"m12 5-8 8\"/><path d=\"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07\"/>",
  "summary": "<path d=\"M15 4H7\"/><path d=\"m18 16 3 3-3 3\"/><path d=\"M3 4v13a2 2 0 0 0 2 2h16\"/><path d=\"M7 14h7\"/><path d=\"M7 9h12\"/>",
  "sun-dim": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 4h.01\"/><path d=\"M20 12h.01\"/><path d=\"M12 20h.01\"/><path d=\"M4 12h.01\"/><path d=\"M17.657 6.343h.01\"/><path d=\"M17.657 17.657h.01\"/><path d=\"M6.343 17.657h.01\"/><path d=\"M6.343 6.343h.01\"/>",
  "sun-medium": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 3v1\"/><path d=\"M12 20v1\"/><path d=\"M3 12h1\"/><path d=\"M20 12h1\"/><path d=\"m18.364 5.636-.707.707\"/><path d=\"m6.343 17.657-.707.707\"/><path d=\"m5.636 5.636.707.707\"/><path d=\"m17.657 17.657.707.707\"/>",
  "sun-moon": "<path d=\"M12 2v2\"/><path d=\"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715\"/><path d=\"M16 12a4 4 0 0 0-4-4\"/><path d=\"m19 5-1.256 1.256\"/><path d=\"M20 12h2\"/>",
  "sun-snow": "<path d=\"M10 21v-1\"/><path d=\"M10 4V3\"/><path d=\"M10 9a3 3 0 0 0 0 6\"/><path d=\"m14 20 1.25-2.5L18 18\"/><path d=\"m14 4 1.25 2.5L18 6\"/><path d=\"m17 21-3-6 1.5-3H22\"/><path d=\"m17 3-3 6 1.5 3\"/><path d=\"M2 12h1\"/><path d=\"m20 10-1.5 2 1.5 2\"/><path d=\"m3.64 18.36.7-.7\"/><path d=\"m4.34 6.34-.7-.7\"/>",
  "sun": "<circle cx=\"12\" cy=\"12\" r=\"5\"/><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"/><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"/><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"/><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"/><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"/><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"/><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"/><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"/>",
  "sunrise": "<path d=\"M12 2v8\"/><path d=\"m4.93 10.93 1.41 1.41\"/><path d=\"M2 18h2\"/><path d=\"M20 18h2\"/><path d=\"m19.07 10.93-1.41 1.41\"/><path d=\"M22 22H2\"/><path d=\"m8 6 4-4 4 4\"/><path d=\"M16 18a4 4 0 0 0-8 0\"/>",
  "sunset": "<path d=\"M12 10V2\"/><path d=\"m4.93 10.93 1.41 1.41\"/><path d=\"M2 18h2\"/><path d=\"M20 18h2\"/><path d=\"m19.07 10.93-1.41 1.41\"/><path d=\"M22 22H2\"/><path d=\"m16 6-4 4-4-4\"/><path d=\"M16 18a4 4 0 0 0-8 0\"/>",
  "superscript": "<path d=\"m4 19 8-8\"/><path d=\"m12 19-8-8\"/><path d=\"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06\"/>",
  "swatch-book": "<path d=\"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z\"/><path d=\"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7\"/><path d=\"M 7 17h.01\"/><path d=\"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8\"/>",
  "swiss-franc": "<path d=\"M10 21V3h8\"/><path d=\"M6 16h9\"/><path d=\"M10 9.5h7\"/>",
  "switch-camera": "<path d=\"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5\"/><path d=\"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"m18 22-3-3 3-3\"/><path d=\"m6 2 3 3-3 3\"/>",
  "sword": "<path d=\"m11 19-6-6\"/><path d=\"m5 21-2-2\"/><path d=\"m8 16-4 4\"/><path d=\"M9.5 17.5 21 6V3h-3L6.5 14.5\"/>",
  "swords": "<polyline points=\"14.5 17.5 3 6 3 3 6 3 17.5 14.5\"/><line x1=\"13\" x2=\"19\" y1=\"19\" y2=\"13\"/><line x1=\"16\" x2=\"20\" y1=\"16\" y2=\"20\"/><line x1=\"19\" x2=\"21\" y1=\"21\" y2=\"19\"/><polyline points=\"14.5 6.5 18 3 21 3 21 6 17.5 9.5\"/><line x1=\"5\" x2=\"9\" y1=\"14\" y2=\"18\"/><line x1=\"7\" x2=\"4\" y1=\"17\" y2=\"20\"/><line x1=\"3\" x2=\"5\" y1=\"19\" y2=\"21\"/>",
  "syringe": "<path d=\"m18 2 4 4\"/><path d=\"m17 7 3-3\"/><path d=\"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5\"/><path d=\"m9 11 4 4\"/><path d=\"m5 19-3 3\"/><path d=\"m14 4 6 6\"/>",
  "table-2": "<path d=\"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18\"/>",
  "table-cells-merge": "<path d=\"M12 21v-6\"/><path d=\"M12 9V3\"/><path d=\"M3 15h18\"/><path d=\"M3 9h18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/>",
  "table-cells-split": "<path d=\"M12 15V9\"/><path d=\"M3 15h18\"/><path d=\"M3 9h18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/>",
  "table-columns-split": "<path d=\"M14 14v2\"/><path d=\"M14 20v2\"/><path d=\"M14 2v2\"/><path d=\"M14 8v2\"/><path d=\"M2 15h8\"/><path d=\"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2\"/><path d=\"M2 9h8\"/><path d=\"M22 15h-4\"/><path d=\"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2\"/><path d=\"M22 9h-4\"/><path d=\"M5 3v18\"/>",
  "table-of-contents": "<path d=\"M16 5H3\"/><path d=\"M16 12H3\"/><path d=\"M16 19H3\"/><path d=\"M21 5h.01\"/><path d=\"M21 12h.01\"/><path d=\"M21 19h.01\"/>",
  "table-properties": "<path d=\"M15 3v18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M21 9H3\"/><path d=\"M21 15H3\"/>",
  "table-rows-split": "<path d=\"M14 10h2\"/><path d=\"M15 22v-8\"/><path d=\"M15 2v4\"/><path d=\"M2 10h2\"/><path d=\"M20 10h2\"/><path d=\"M3 19h18\"/><path d=\"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6\"/><path d=\"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2\"/><path d=\"M8 10h2\"/><path d=\"M9 22v-8\"/><path d=\"M9 2v4\"/>",
  "table": "<path d=\"M12 3v18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"M3 15h18\"/>",
  "tablet-smartphone": "<rect width=\"10\" height=\"14\" x=\"3\" y=\"8\" rx=\"2\"/><path d=\"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4\"/><path d=\"M8 18h.01\"/>",
  "tablet": "<rect width=\"16\" height=\"20\" x=\"4\" y=\"2\" rx=\"2\" ry=\"2\"/><line x1=\"12\" x2=\"12.01\" y1=\"18\" y2=\"18\"/>",
  "tablets": "<circle cx=\"7\" cy=\"7\" r=\"5\"/><circle cx=\"17\" cy=\"17\" r=\"5\"/><path d=\"M12 17h10\"/><path d=\"m3.46 10.54 7.08-7.08\"/>",
  "tag-plus": "<path d=\"M16 13h6\"/><path d=\"m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l1.79-1.79\"/><path d=\"M19 10v6\"/><circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/>",
  "tag-x": "<path d=\"m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.43 2.43 0 0 0 3.42 0l1.79-1.79\"/><path d=\"m16.5 10.5 5 5\"/><path d=\"m21.5 10.5-5 5\"/><circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/>",
  "tag": "<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"/><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"/>",
  "tags": "<path d=\"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z\"/><path d=\"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193\"/><circle cx=\"10.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\"/>",
  "tally-1": "<path d=\"M4 4v16\"/>",
  "tally-2": "<path d=\"M4 4v16\"/><path d=\"M9 4v16\"/>",
  "tally-3": "<path d=\"M4 4v16\"/><path d=\"M9 4v16\"/><path d=\"M14 4v16\"/>",
  "tally-4": "<path d=\"M4 4v16\"/><path d=\"M9 4v16\"/><path d=\"M14 4v16\"/><path d=\"M19 4v16\"/>",
  "tally-5": "<path d=\"M4 4v16\"/><path d=\"M9 4v16\"/><path d=\"M14 4v16\"/><path d=\"M19 4v16\"/><path d=\"M22 6 2 18\"/>",
  "tangent": "<circle cx=\"17\" cy=\"4\" r=\"2\"/><path d=\"M15.59 5.41 5.41 15.59\"/><circle cx=\"4\" cy=\"17\" r=\"2\"/><path d=\"M12 22s-4-9-1.5-11.5S22 12 22 12\"/>",
  "target": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>",
  "telescope": "<path d=\"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44\"/><path d=\"m13.56 11.747 4.332-.924\"/><path d=\"m16 21-3.105-6.21\"/><path d=\"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z\"/><path d=\"m6.158 8.633 1.114 4.456\"/><path d=\"m8 21 3.105-6.21\"/><circle cx=\"12\" cy=\"13\" r=\"2\"/>",
  "tent-tree": "<circle cx=\"4\" cy=\"4\" r=\"2\"/><path d=\"m14 5 3-3 3 3\"/><path d=\"m14 10 3-3 3 3\"/><path d=\"M17 14V2\"/><path d=\"M17 14H7l-5 8h20Z\"/><path d=\"M8 14v8\"/><path d=\"m9 14 5 8\"/>",
  "tent": "<path d=\"M3.5 21 14 3\"/><path d=\"M20.5 21 10 3\"/><path d=\"M15.5 21 12 15l-3.5 6\"/><path d=\"M2 21h20\"/>",
  "terminal": "<polyline points=\"4 17 10 11 4 5\"/><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"/>",
  "test-tube-diagonal": "<path d=\"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3\"/><path d=\"m16 2 6 6\"/><path d=\"M12 16H4\"/>",
  "test-tube": "<path d=\"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2\"/><path d=\"M8.5 2h7\"/><path d=\"M14.5 16h-5\"/>",
  "test-tubes": "<path d=\"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2\"/><path d=\"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2\"/><path d=\"M3 2h7\"/><path d=\"M14 2h7\"/><path d=\"M9 16H4\"/><path d=\"M20 16h-5\"/>",
  "text-align-center": "<path d=\"M21 5H3\"/><path d=\"M17 12H7\"/><path d=\"M19 19H5\"/>",
  "text-align-end": "<path d=\"M21 5H3\"/><path d=\"M21 12H9\"/><path d=\"M21 19H7\"/>",
  "text-align-justify": "<path d=\"M3 5h18\"/><path d=\"M3 12h18\"/><path d=\"M3 19h18\"/>",
  "text-align-start": "<path d=\"M21 5H3\"/><path d=\"M15 12H3\"/><path d=\"M17 19H3\"/>",
  "text-cursor-input": "<path d=\"M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6\"/><path d=\"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7\"/><path d=\"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1\"/><path d=\"M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1\"/><path d=\"M9 6v12\"/>",
  "text-cursor": "<path d=\"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1\"/><path d=\"M7 22h1a4 4 0 0 0 4-4\"/><path d=\"M7 2h1a4 4 0 0 1 4 4\"/>",
  "text-initial": "<path d=\"M15 5h6\"/><path d=\"M15 12h6\"/><path d=\"M3 19h18\"/><path d=\"m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12\"/><path d=\"M3.92 10h6.16\"/>",
  "text-quote": "<path d=\"M17 5H3\"/><path d=\"M21 12H8\"/><path d=\"M21 19H8\"/><path d=\"M3 12v7\"/>",
  "text-search": "<path d=\"M21 5H3\"/><path d=\"M10 12H3\"/><path d=\"M10 19H3\"/><circle cx=\"17\" cy=\"15\" r=\"3\"/><path d=\"m21 19-1.9-1.9\"/>",
  "text-wrap": "<path d=\"m16 16-3 3 3 3\"/><path d=\"M3 12h14.5a1 1 0 0 1 0 7H13\"/><path d=\"M3 19h6\"/><path d=\"M3 5h18\"/>",
  "theater": "<path d=\"M2 10s3-3 3-8\"/><path d=\"M22 10s-3-3-3-8\"/><path d=\"M10 2c0 4.4-3.6 8-8 8\"/><path d=\"M14 2c0 4.4 3.6 8 8 8\"/><path d=\"M2 10s2 2 2 5\"/><path d=\"M22 10s-2 2-2 5\"/><path d=\"M8 15h8\"/><path d=\"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1\"/><path d=\"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1\"/>",
  "thermometer-snowflake": "<path d=\"m10 20-1.25-2.5L6 18\"/><path d=\"M10 4 8.75 6.5 6 6\"/><path d=\"M10.585 15H10\"/><path d=\"M2 12h6.5L10 9\"/><path d=\"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z\"/><path d=\"m4 10 1.5 2L4 14\"/><path d=\"m7 21 3-6-1.5-3\"/><path d=\"m7 3 3 6h2\"/>",
  "thermometer-sun": "<path d=\"M12 2v2\"/><path d=\"M12 8a4 4 0 0 0-1.645 7.647\"/><path d=\"M2 12h2\"/><path d=\"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m6.34 17.66-1.41 1.41\"/>",
  "thermometer": "<path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"/>",
  "thumbs-down": "<path d=\"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z\"/><path d=\"M17 14V2\"/>",
  "thumbs-up": "<path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"/>",
  "ticket-check": "<path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"/><path d=\"m9 12 2 2 4-4\"/>",
  "ticket-minus": "<path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"/><path d=\"M9 12h6\"/>",
  "ticket-percent": "<path d=\"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"/><path d=\"M9 9h.01\"/><path d=\"m15 9-6 6\"/><path d=\"M15 15h.01\"/>",
  "ticket-plus": "<path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"/><path d=\"M9 12h6\"/><path d=\"M12 9v6\"/>",
  "ticket-slash": "<path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"/><path d=\"m9.5 14.5 5-5\"/>",
  "ticket-x": "<path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"/><path d=\"m9.5 14.5 5-5\"/><path d=\"m9.5 9.5 5 5\"/>",
  "ticket": "<path d=\"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z\"/><path d=\"M13 5v2\"/><path d=\"M13 17v2\"/><path d=\"M13 11v2\"/>",
  "tickets-plane": "<path d=\"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12\"/><path d=\"m12 13.5 3.794.506\"/><path d=\"m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8\"/><path d=\"M6 10V8\"/><path d=\"M6 14v1\"/><path d=\"M6 19v2\"/><rect x=\"2\" y=\"8\" width=\"20\" height=\"13\" rx=\"2\"/>",
  "tickets": "<path d=\"m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8\"/><path d=\"M6 10V8\"/><path d=\"M6 14v1\"/><path d=\"M6 19v2\"/><rect x=\"2\" y=\"8\" width=\"20\" height=\"13\" rx=\"2\"/>",
  "timeline": "<path d=\"M4 12h.01\"/><path d=\"M4 16h.01\"/><path d=\"M4 20h.01\"/><path d=\"M4 4h.01\"/><path d=\"M4 8h.01\"/><path d=\"M9.414 13.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 12z\"/><path d=\"M9.414 21.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 20z\"/><path d=\"M9.414 5.414A2 2 0 0 0 10.828 6H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 4z\"/>",
  "timer-off": "<path d=\"M10 2h4\"/><path d=\"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7\"/><path d=\"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2\"/><path d=\"m2 2 20 20\"/><path d=\"M12 12v-2\"/>",
  "timer-reset": "<path d=\"M10 2h4\"/><path d=\"M12 14v-4\"/><path d=\"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6\"/><path d=\"M9 17H4v5\"/>",
  "timer": "<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\"/><line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\"/><circle cx=\"12\" cy=\"14\" r=\"8\"/>",
  "toggle-left": "<circle cx=\"9\" cy=\"12\" r=\"3\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"7\"/>",
  "toggle-right": "<circle cx=\"15\" cy=\"12\" r=\"3\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"7\"/>",
  "toilet": "<path d=\"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18\"/><path d=\"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8\"/>",
  "tool-case": "<path d=\"M10 15h4\"/><path d=\"m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27\"/><path d=\"m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122\"/><path d=\"M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z\"/>",
  "toolbox": "<path d=\"M16 12v4\"/><path d=\"M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z\"/><path d=\"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2\"/><path d=\"M2 14h20\"/><path d=\"M8 12v4\"/>",
  "tornado": "<path d=\"M21 4H3\"/><path d=\"M18 8H6\"/><path d=\"M19 12H9\"/><path d=\"M16 16h-6\"/><path d=\"M11 20H9\"/>",
  "torus": "<ellipse cx=\"12\" cy=\"11\" rx=\"3\" ry=\"2\"/><ellipse cx=\"12\" cy=\"12.5\" rx=\"10\" ry=\"8.5\"/>",
  "touchpad-off": "<path d=\"M12 20v-6\"/><path d=\"M19.656 14H22\"/><path d=\"M2 14h12\"/><path d=\"m2 2 20 20\"/><path d=\"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2\"/><path d=\"M9.656 4H20a2 2 0 0 1 2 2v10.344\"/>",
  "touchpad": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M2 14h20\"/><path d=\"M12 20v-6\"/>",
  "towel-rack": "<path d=\"M22 7h-2\"/><path d=\"M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4\"/><path d=\"M9 7H2\"/>",
  "tower-control": "<path d=\"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z\"/><path d=\"M8 13v9\"/><path d=\"M16 22v-9\"/><path d=\"m9 6 1 7\"/><path d=\"m15 6-1 7\"/><path d=\"M12 6V2\"/><path d=\"M13 2h-2\"/>",
  "toy-brick": "<rect width=\"18\" height=\"12\" x=\"3\" y=\"8\" rx=\"1\"/><path d=\"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3\"/><path d=\"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3\"/>",
  "tractor": "<path d=\"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20\"/><path d=\"M16 18h-5\"/><path d=\"M18 5a1 1 0 0 0-1 1v5.573\"/><path d=\"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246\"/><path d=\"M4 11V4\"/><path d=\"M7 15h.01\"/><path d=\"M8 10.1V4\"/><circle cx=\"18\" cy=\"18\" r=\"2\"/><circle cx=\"7\" cy=\"15\" r=\"5\"/>",
  "traffic-cone": "<path d=\"M16.05 10.966a5 2.5 0 0 1-8.1 0\"/><path d=\"m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04\"/><path d=\"M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z\"/><path d=\"M9.194 6.57a5 2.5 0 0 0 5.61 0\"/>",
  "train-front-tunnel": "<path d=\"M2 22V12a10 10 0 1 1 20 0v10\"/><path d=\"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8\"/><path d=\"M10 15h.01\"/><path d=\"M14 15h.01\"/><path d=\"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z\"/><path d=\"m9 19-2 3\"/><path d=\"m15 19 2 3\"/>",
  "train-front": "<path d=\"M8 3.1V7a4 4 0 0 0 8 0V3.1\"/><path d=\"m9 15-1-1\"/><path d=\"m15 15 1-1\"/><path d=\"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z\"/><path d=\"m8 19-2 3\"/><path d=\"m16 19 2 3\"/>",
  "train-track": "<path d=\"M2 17 17 2\"/><path d=\"m2 14 8 8\"/><path d=\"m5 11 8 8\"/><path d=\"m8 8 8 8\"/><path d=\"m11 5 8 8\"/><path d=\"m14 2 8 8\"/><path d=\"M7 22 22 7\"/>",
  "tram-front": "<rect width=\"16\" height=\"16\" x=\"4\" y=\"3\" rx=\"2\"/><path d=\"M4 11h16\"/><path d=\"M12 3v8\"/><path d=\"m8 19-2 3\"/><path d=\"m18 22-2-3\"/><path d=\"M8 15h.01\"/><path d=\"M16 15h.01\"/>",
  "transgender": "<path d=\"M12 16v6\"/><path d=\"M14 20h-4\"/><path d=\"M18 2h4v4\"/><path d=\"m2 2 7.17 7.17\"/><path d=\"M2 5.355V2h3.357\"/><path d=\"m22 2-7.17 7.17\"/><path d=\"M8 5 5 8\"/><circle cx=\"12\" cy=\"12\" r=\"4\"/>",
  "trash-2": "<path d=\"M10 11v6\"/><path d=\"M14 11v6\"/><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"/><path d=\"M3 6h18\"/><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/>",
  "trash": "<polyline points=\"3 6 5 6 21 6\"/><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"/><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"/>",
  "tree-deciduous": "<path d=\"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z\"/><path d=\"M12 19v3\"/>",
  "tree-palm": "<path d=\"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4\"/><path d=\"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3\"/><path d=\"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35\"/><path d=\"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14\"/>",
  "tree-pine": "<path d=\"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z\"/><path d=\"M12 22v-3\"/>",
  "trees": "<path d=\"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z\"/><path d=\"M7 16v6\"/><path d=\"M13 19v3\"/><path d=\"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5\"/>",
  "trending-down": "<path d=\"M16 17h6v-6\"/><path d=\"m22 17-8.5-8.5-5 5L2 7\"/>",
  "trending-up-down": "<path d=\"M14.828 14.828 21 21\"/><path d=\"M21 16v5h-5\"/><path d=\"m21 3-9 9-4-4-6 6\"/><path d=\"M21 8V3h-5\"/>",
  "trending-up": "<polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"/><polyline points=\"17 6 23 6 23 12\"/>",
  "triangle-alert": "<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/>",
  "triangle-dashed": "<path d=\"M10.17 4.193a2 2 0 0 1 3.666.013\"/><path d=\"M14 21h2\"/><path d=\"m15.874 7.743 1 1.732\"/><path d=\"m18.849 12.952 1 1.732\"/><path d=\"M21.824 18.18a2 2 0 0 1-1.835 2.824\"/><path d=\"M4.024 21a2 2 0 0 1-1.839-2.839\"/><path d=\"m5.136 12.952-1 1.732\"/><path d=\"M8 21h2\"/><path d=\"m8.102 7.743-1 1.732\"/>",
  "triangle-right": "<path d=\"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z\"/>",
  "triangle": "<path d=\"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z\"/>",
  "trophy": "<path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\"/><path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\"/><path d=\"M4 22h16\"/><path d=\"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22\"/><path d=\"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22\"/><path d=\"M18 2H6v7a6 6 0 0 0 12 0V2z\"/>",
  "truck-electric": "<path d=\"M14 19V7a2 2 0 0 0-2-2H9\"/><path d=\"M15 19H9\"/><path d=\"M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14\"/><path d=\"M2 13v5a1 1 0 0 0 1 1h2\"/><path d=\"M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02\"/><circle cx=\"17\" cy=\"19\" r=\"2\"/><circle cx=\"7\" cy=\"19\" r=\"2\"/>",
  "truck": "<rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"/><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"/><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"/><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"/>",
  "turkish-lira": "<path d=\"M15 4 5 9\"/><path d=\"m15 8.5-10 5\"/><path d=\"M18 12a9 9 0 0 1-9 9V3\"/>",
  "turntable": "<path d=\"M10 12.01h.01\"/><path d=\"M18 8v4a8 8 0 0 1-1.07 4\"/><circle cx=\"10\" cy=\"12\" r=\"4\"/><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/>",
  "turtle": "<path d=\"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z\"/><path d=\"M4.82 7.9 8 10\"/><path d=\"M15.18 7.9 12 10\"/><path d=\"M16.93 10H20a2 2 0 0 1 0 4H2\"/>",
  "tv-minimal-play": "<path d=\"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z\"/><path d=\"M7 21h10\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/>",
  "tv-minimal": "<path d=\"M7 21h10\"/><rect width=\"20\" height=\"14\" x=\"2\" y=\"3\" rx=\"2\"/>",
  "tv": "<path d=\"m17 2-5 5-5-5\"/><rect width=\"20\" height=\"15\" x=\"2\" y=\"7\" rx=\"2\"/>",
  "type-outline": "<path d=\"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z\"/>",
  "type": "<path d=\"M12 4v16\"/><path d=\"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2\"/><path d=\"M9 20h6\"/>",
  "umbrella-off": "<path d=\"M12 13v7a2 2 0 0 0 4 0\"/><path d=\"M12 2v2\"/><path d=\"M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51\"/><path d=\"m2 2 20 20\"/><path d=\"M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10\"/>",
  "umbrella": "<path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\"/>",
  "underline": "<path d=\"M6 4v6a6 6 0 0 0 12 0V4\"/><line x1=\"4\" x2=\"20\" y1=\"20\" y2=\"20\"/>",
  "undo-2": "<path d=\"M9 14 4 9l5-5\"/><path d=\"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11\"/>",
  "undo-dot": "<path d=\"M21 17a9 9 0 0 0-15-6.7L3 13\"/><path d=\"M3 7v6h6\"/><circle cx=\"12\" cy=\"17\" r=\"1\"/>",
  "undo": "<path d=\"M3 7v6h6\"/><path d=\"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13\"/>",
  "unfold-horizontal": "<path d=\"M16 12h6\"/><path d=\"M8 12H2\"/><path d=\"M12 2v2\"/><path d=\"M12 8v2\"/><path d=\"M12 14v2\"/><path d=\"M12 20v2\"/><path d=\"m19 15 3-3-3-3\"/><path d=\"m5 9-3 3 3 3\"/>",
  "unfold-vertical": "<path d=\"M12 22v-6\"/><path d=\"M12 8V2\"/><path d=\"M4 12H2\"/><path d=\"M10 12H8\"/><path d=\"M16 12h-2\"/><path d=\"M22 12h-2\"/><path d=\"m15 19-3 3-3-3\"/><path d=\"m15 5-3-3-3 3\"/>",
  "ungroup": "<rect width=\"8\" height=\"6\" x=\"5\" y=\"4\" rx=\"1\"/><rect width=\"8\" height=\"6\" x=\"11\" y=\"14\" rx=\"1\"/>",
  "university": "<path d=\"M14 21v-3a2 2 0 0 0-4 0v3\"/><path d=\"M18 12h.01\"/><path d=\"M18 16h.01\"/><path d=\"M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z\"/><path d=\"M6 12h.01\"/><path d=\"M6 16h.01\"/><circle cx=\"12\" cy=\"10\" r=\"2\"/>",
  "unlink-2": "<path d=\"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2\"/>",
  "unlink": "<path d=\"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71\"/><path d=\"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71\"/><line x1=\"8\" x2=\"8\" y1=\"2\" y2=\"5\"/><line x1=\"2\" x2=\"5\" y1=\"8\" y2=\"8\"/><line x1=\"16\" x2=\"16\" y1=\"19\" y2=\"22\"/><line x1=\"19\" x2=\"22\" y1=\"16\" y2=\"16\"/>",
  "unplug": "<path d=\"m19 5 3-3\"/><path d=\"m2 22 3-3\"/><path d=\"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z\"/><path d=\"M7.5 13.5 10 11\"/><path d=\"M10.5 16.5 13 14\"/><path d=\"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z\"/>",
  "upload": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"17 8 12 3 7 8\"/><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"/>",
  "usb": "<circle cx=\"10\" cy=\"7\" r=\"1\"/><circle cx=\"4\" cy=\"20\" r=\"1\"/><path d=\"M4.7 19.3 19 5\"/><path d=\"m21 3-3 1 2 2Z\"/><path d=\"M9.26 7.68 5 12l2 5\"/><path d=\"m10 14 5 2 3.5-3.5\"/><path d=\"m18 12 1-1 1 1-1 1Z\"/>",
  "user-check": "<path d=\"m16 11 2 2 4-4\"/><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/>",
  "user-cog": "<path d=\"M10 15H6a4 4 0 0 0-4 4v2\"/><path d=\"m14.305 16.53.923-.382\"/><path d=\"m15.228 13.852-.923-.383\"/><path d=\"m16.852 12.228-.383-.923\"/><path d=\"m16.852 17.772-.383.924\"/><path d=\"m19.148 12.228.383-.923\"/><path d=\"m19.53 18.696-.382-.924\"/><path d=\"m20.772 13.852.924-.383\"/><path d=\"m20.772 16.148.924.383\"/><circle cx=\"18\" cy=\"15\" r=\"3\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/>",
  "user-key": "<path d=\"M20 11v6\"/><path d=\"M20 13h2\"/><path d=\"M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578\"/><circle cx=\"10\" cy=\"7\" r=\"4\"/><circle cx=\"20\" cy=\"19\" r=\"2\"/>",
  "user-lock": "<path d=\"M19 16v-2a2 2 0 0 0-4 0v2\"/><path d=\"M9.5 15H7a4 4 0 0 0-4 4v2\"/><circle cx=\"10\" cy=\"7\" r=\"4\"/><rect x=\"13\" y=\"16\" width=\"8\" height=\"5\" rx=\".899\"/>",
  "user-minus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\"/>",
  "user-pen": "<path d=\"M11.5 15H7a4 4 0 0 0-4 4v2\"/><path d=\"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/><circle cx=\"10\" cy=\"7\" r=\"4\"/>",
  "user-plus": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\"/><line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\"/>",
  "user-round-arrow-left": "<path d=\"m19 16-3 3\"/><path d=\"M2 21a8 8 0 0 1 12.664-6.5\"/><path d=\"M22 19h-6l3 3\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/>",
  "user-round-check": "<path d=\"M2 21a8 8 0 0 1 13.292-6\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"m16 19 2 2 4-4\"/>",
  "user-round-cog": "<path d=\"m14.305 19.53.923-.382\"/><path d=\"m15.228 16.852-.923-.383\"/><path d=\"m16.852 15.228-.383-.923\"/><path d=\"m16.852 20.772-.383.924\"/><path d=\"m19.148 15.228.383-.923\"/><path d=\"m19.53 21.696-.382-.924\"/><path d=\"M2 21a8 8 0 0 1 10.434-7.62\"/><path d=\"m20.772 16.852.924-.383\"/><path d=\"m20.772 19.148.924.383\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/>",
  "user-round-key": "<path d=\"M19 11v6\"/><path d=\"M19 13h2\"/><path d=\"M2 21a8 8 0 0 1 12.868-6.349\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><circle cx=\"19\" cy=\"19\" r=\"2\"/>",
  "user-round-minus": "<path d=\"M2 21a8 8 0 0 1 13.292-6\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"M22 19h-6\"/>",
  "user-round-pen": "<path d=\"M2 21a8 8 0 0 1 10.821-7.487\"/><path d=\"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/>",
  "user-round-plus": "<path d=\"M2 21a8 8 0 0 1 13.292-6\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"M19 16v6\"/><path d=\"M22 19h-6\"/>",
  "user-round-search": "<circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"M2 21a8 8 0 0 1 10.434-7.62\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/><path d=\"m22 22-1.9-1.9\"/>",
  "user-round-x": "<path d=\"M2 21a8 8 0 0 1 11.873-7\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"m17 17 5 5\"/><path d=\"m22 17-5 5\"/>",
  "user-round": "<circle cx=\"12\" cy=\"8\" r=\"5\"/><path d=\"M20 21a8 8 0 0 0-16 0\"/>",
  "user-search": "<circle cx=\"10\" cy=\"7\" r=\"4\"/><path d=\"M10.3 15H7a4 4 0 0 0-4 4v2\"/><circle cx=\"17\" cy=\"17\" r=\"3\"/><path d=\"m21 21-1.9-1.9\"/>",
  "user-star": "<path d=\"M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z\"/><path d=\"M8 15H7a4 4 0 0 0-4 4v2\"/><circle cx=\"10\" cy=\"7\" r=\"4\"/>",
  "user-x": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><line x1=\"17\" x2=\"22\" y1=\"8\" y2=\"13\"/><line x1=\"22\" x2=\"17\" y1=\"8\" y2=\"13\"/>",
  "user": "<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>",
  "users-round": "<path d=\"M18 21a8 8 0 0 0-16 0\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3\"/>",
  "users": "<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/>",
  "utensils-crossed": "<path d=\"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8\"/><path d=\"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7\"/><path d=\"m2.1 21.8 6.4-6.3\"/><path d=\"m19 5-7 7\"/>",
  "utensils": "<path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\"/><path d=\"M7 2v20\"/><path d=\"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\"/>",
  "utility-pole": "<path d=\"M12 2v20\"/><path d=\"M2 5h20\"/><path d=\"M3 3v2\"/><path d=\"M7 3v2\"/><path d=\"M17 3v2\"/><path d=\"M21 3v2\"/><path d=\"m19 5-7 7-7-7\"/>",
  "van": "<path d=\"M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3\"/><path d=\"M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2\"/><path d=\"M9 18h5\"/><circle cx=\"16\" cy=\"18\" r=\"2\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/>",
  "variable": "<path d=\"M8 21s-4-3-4-9 4-9 4-9\"/><path d=\"M16 3s4 3 4 9-4 9-4 9\"/><line x1=\"15\" x2=\"9\" y1=\"9\" y2=\"15\"/><line x1=\"9\" x2=\"15\" y1=\"9\" y2=\"15\"/>",
  "vault": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/><path d=\"m7.9 7.9 2.7 2.7\"/><circle cx=\"16.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"/><path d=\"m13.4 10.6 2.7-2.7\"/><circle cx=\"7.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"/><path d=\"m7.9 16.1 2.7-2.7\"/><circle cx=\"16.5\" cy=\"16.5\" r=\".5\" fill=\"currentColor\"/><path d=\"m13.4 13.4 2.7 2.7\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>",
  "vector-square": "<path d=\"M19.5 7a24 24 0 0 1 0 10\"/><path d=\"M4.5 7a24 24 0 0 0 0 10\"/><path d=\"M7 19.5a24 24 0 0 0 10 0\"/><path d=\"M7 4.5a24 24 0 0 1 10 0\"/><rect x=\"17\" y=\"17\" width=\"5\" height=\"5\" rx=\"1\"/><rect x=\"17\" y=\"2\" width=\"5\" height=\"5\" rx=\"1\"/><rect x=\"2\" y=\"17\" width=\"5\" height=\"5\" rx=\"1\"/><rect x=\"2\" y=\"2\" width=\"5\" height=\"5\" rx=\"1\"/>",
  "vegan": "<path d=\"M16 8q6 0 6-6-6 0-6 6\"/><path d=\"M17.41 3.59a10 10 0 1 0 3 3\"/><path d=\"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14\"/>",
  "venetian-mask": "<path d=\"M18 11c-1.5 0-2.5.5-3 2\"/><path d=\"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z\"/><path d=\"M6 11c1.5 0 2.5.5 3 2\"/>",
  "venus-and-mars": "<path d=\"M10 20h4\"/><path d=\"M12 16v6\"/><path d=\"M17 2h4v4\"/><path d=\"m21 2-5.46 5.46\"/><circle cx=\"12\" cy=\"11\" r=\"5\"/>",
  "venus": "<path d=\"M12 15v7\"/><path d=\"M9 19h6\"/><circle cx=\"12\" cy=\"9\" r=\"6\"/>",
  "vibrate-off": "<path d=\"m2 8 2 2-2 2 2 2-2 2\"/><path d=\"m22 8-2 2 2 2-2 2 2 2\"/><path d=\"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2\"/><path d=\"M16 10.34V6c0-.55-.45-1-1-1h-4.34\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
  "vibrate": "<path d=\"m2 8 2 2-2 2 2 2-2 2\"/><path d=\"m22 8-2 2 2 2-2 2 2 2\"/><rect width=\"8\" height=\"14\" x=\"8\" y=\"5\" rx=\"1\"/>",
  "video-off": "<path d=\"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196\"/><path d=\"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2\"/><path d=\"m2 2 20 20\"/>",
  "video": "<polygon points=\"23 7 16 12 23 17 23 7\"/><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"/>",
  "videotape": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M2 8h20\"/><circle cx=\"8\" cy=\"14\" r=\"2\"/><path d=\"M8 12h8\"/><circle cx=\"16\" cy=\"14\" r=\"2\"/>",
  "view": "<path d=\"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2\"/><path d=\"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/><path d=\"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0\"/>",
  "voicemail": "<circle cx=\"6\" cy=\"12\" r=\"4\"/><circle cx=\"18\" cy=\"12\" r=\"4\"/><line x1=\"6\" x2=\"18\" y1=\"16\" y2=\"16\"/>",
  "volleyball": "<path d=\"M11 7a16 16 20 0 1 10.98 4.362\"/><path d=\"M12 12a13 13 0 0 1-8.66 5\"/><path d=\"M16.83 13.634a16 16 0 0 1-9.267 7.328\"/><path d=\"M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10\"/><path d=\"M8.17 15.366a16 16 0 0 1-1.713-11.69\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/>",
  "volume-1": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\"/><path d=\"M16 9a5 5 0 0 1 0 6\"/>",
  "volume-2": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\"/><path d=\"M16 9a5 5 0 0 1 0 6\"/><path d=\"M19.364 18.364a9 9 0 0 0 0-12.728\"/>",
  "volume-off": "<path d=\"M16 9a5 5 0 0 1 .95 2.293\"/><path d=\"M19.364 5.636a9 9 0 0 1 1.889 9.96\"/><path d=\"m2 2 20 20\"/><path d=\"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11\"/><path d=\"M9.828 4.172A.686.686 0 0 1 11 4.657v.686\"/>",
  "volume-x": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\"/><line x1=\"22\" x2=\"16\" y1=\"9\" y2=\"15\"/><line x1=\"16\" x2=\"22\" y1=\"9\" y2=\"15\"/>",
  "volume": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\"/>",
  "vote": "<path d=\"m9 12 2 2 4-4\"/><path d=\"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z\"/><path d=\"M22 19H2\"/>",
  "wallet-cards": "<path d=\"M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21\"/><path d=\"M3 7h18\"/><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/>",
  "wallet-minimal": "<path d=\"M17 14h.01\"/><path d=\"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14\"/>",
  "wallet": "<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"/><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"/>",
  "wallpaper": "<path d=\"M12 17v4\"/><path d=\"M8 21h8\"/><path d=\"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15\"/><circle cx=\"8\" cy=\"9\" r=\"2\"/><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\"/>",
  "wand-sparkles": "<path d=\"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72\"/><path d=\"m14 7 3 3\"/><path d=\"M5 6v4\"/><path d=\"M19 14v4\"/><path d=\"M10 2v2\"/><path d=\"M7 8H3\"/><path d=\"M21 16h-4\"/><path d=\"M11 3H9\"/>",
  "wand": "<path d=\"M15 4V2\"/><path d=\"M15 16v-2\"/><path d=\"M8 9h2\"/><path d=\"M20 9h2\"/><path d=\"M17.8 11.8 19 13\"/><path d=\"M15 9h.01\"/><path d=\"M17.8 6.2 19 5\"/><path d=\"m3 21 9-9\"/><path d=\"M12.2 6.2 11 5\"/>",
  "warehouse": "<path d=\"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11\"/><path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z\"/><path d=\"M6 13h12\"/><path d=\"M6 17h12\"/>",
  "washing-machine": "<path d=\"M3 6h3\"/><path d=\"M17 6h.01\"/><rect width=\"18\" height=\"20\" x=\"3\" y=\"2\" rx=\"2\"/><circle cx=\"12\" cy=\"13\" r=\"5\"/><path d=\"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5\"/>",
  "watch": "<path d=\"M12 10v2.2l1.6 1\"/><path d=\"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05\"/><path d=\"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/>",
  "waves-arrow-down": "<path d=\"M12 10L12 2\"/><path d=\"M16 6L12 10L8 6\"/><path d=\"M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15\"/><path d=\"M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21\"/>",
  "waves-arrow-up": "<path d=\"M12 2v8\"/><path d=\"M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/><path d=\"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/><path d=\"m8 6 4-4 4 4\"/>",
  "waves-horizontal": "<path d=\"M2 12q2.5 2 5 0t5 0 5 0 5 0\"/><path d=\"M2 19q2.5 2 5 0t5 0 5 0 5 0\"/><path d=\"M2 5q2.5 2 5 0t5 0 5 0 5 0\"/>",
  "waves-ladder": "<path d=\"M19 5a2 2 0 0 0-2 2v11\"/><path d=\"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1\"/><path d=\"M7 13h10\"/><path d=\"M7 9h10\"/><path d=\"M9 5a2 2 0 0 0-2 2v11\"/>",
  "waves-vertical": "<path d=\"M12 2q2 2.5 0 5t0 5 0 5 0 5\"/><path d=\"M19 2q2 2.5 0 5t0 5 0 5 0 5\"/><path d=\"M5 2q2 2.5 0 5t0 5 0 5 0 5\"/>",
  "waypoints": "<path d=\"m10.586 5.414-5.172 5.172\"/><path d=\"m18.586 13.414-5.172 5.172\"/><path d=\"M6 12h12\"/><circle cx=\"12\" cy=\"20\" r=\"2\"/><circle cx=\"12\" cy=\"4\" r=\"2\"/><circle cx=\"20\" cy=\"12\" r=\"2\"/><circle cx=\"4\" cy=\"12\" r=\"2\"/>",
  "webcam-off": "<path d=\"M12 22v-4\"/><path d=\"M12.754 7.096a3 3 0 0 1 2.15 2.15\"/><path d=\"M12.863 12.873a3 3 0 0 1-3.736-3.735\"/><path d=\"M16.566 16.57A8 8 0 0 1 5.43 5.433\"/><path d=\"m2 2 20 20\"/><path d=\"M7 22h10\"/><path d=\"M8.478 2.817a8 8 0 0 1 10.705 10.705\"/>",
  "webcam": "<circle cx=\"12\" cy=\"10\" r=\"8\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M7 22h10\"/><path d=\"M12 22v-4\"/>",
  "webhook-off": "<path d=\"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15\"/><path d=\"M9 3.4a4 4 0 0 1 6.52.66\"/><path d=\"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05\"/><path d=\"M20.3 20.3a4 4 0 0 1-2.3.7\"/><path d=\"M18.6 13a4 4 0 0 1 3.357 3.414\"/><path d=\"m12 6 .6 1\"/><path d=\"m2 2 20 20\"/>",
  "webhook": "<path d=\"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2\"/><path d=\"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06\"/><path d=\"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8\"/>",
  "weight-tilde": "<path d=\"M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z\"/><path d=\"M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0\"/><circle cx=\"12\" cy=\"5\" r=\"3\"/>",
  "weight": "<circle cx=\"12\" cy=\"5\" r=\"3\"/><path d=\"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z\"/>",
  "wheat-off": "<path d=\"m2 22 10-10\"/><path d=\"m16 8-1.17 1.17\"/><path d=\"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z\"/><path d=\"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97\"/><path d=\"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62\"/><path d=\"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z\"/><path d=\"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z\"/><path d=\"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98\"/><path d=\"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
  "wheat": "<path d=\"M2 22 16 8\"/><path d=\"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z\"/><path d=\"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z\"/><path d=\"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z\"/><path d=\"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z\"/><path d=\"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z\"/><path d=\"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z\"/><path d=\"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z\"/>",
  "whole-word": "<circle cx=\"7\" cy=\"12\" r=\"3\"/><path d=\"M10 9v6\"/><circle cx=\"17\" cy=\"12\" r=\"3\"/><path d=\"M14 7v8\"/><path d=\"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1\"/>",
  "wifi-cog": "<path d=\"m14.305 19.53.923-.382\"/><path d=\"m15.228 16.852-.923-.383\"/><path d=\"m16.852 15.228-.383-.923\"/><path d=\"m16.852 20.772-.383.924\"/><path d=\"m19.148 15.228.383-.923\"/><path d=\"m19.53 21.696-.382-.924\"/><path d=\"M2 7.82a15 15 0 0 1 20 0\"/><path d=\"m20.772 16.852.924-.383\"/><path d=\"m20.772 19.148.924.383\"/><path d=\"M5 11.858a10 10 0 0 1 11.5-1.785\"/><path d=\"M8.5 15.429a5 5 0 0 1 2.413-1.31\"/><circle cx=\"18\" cy=\"18\" r=\"3\"/>",
  "wifi-high": "<path d=\"M12 20h.01\"/><path d=\"M5 12.859a10 10 0 0 1 14 0\"/><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"/>",
  "wifi-low": "<path d=\"M12 20h.01\"/><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"/>",
  "wifi-off": "<path d=\"M12 20h.01\"/><path d=\"M8.5 16.429a5 5 0 0 1 7 0\"/><path d=\"M5 12.859a10 10 0 0 1 5.17-2.69\"/><path d=\"M19 12.859a10 10 0 0 0-2.007-1.523\"/><path d=\"M2 8.82a15 15 0 0 1 4.177-2.643\"/><path d=\"M22 8.82a15 15 0 0 0-11.288-3.764\"/><path d=\"m2 2 20 20\"/>",
  "wifi-pen": "<path d=\"M2 8.82a15 15 0 0 1 20 0\"/><path d=\"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/><path d=\"M5 12.859a10 10 0 0 1 10.5-2.222\"/><path d=\"M8.5 16.429a5 5 0 0 1 3-1.406\"/>",
  "wifi-sync": "<path d=\"M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5\"/><path d=\"M11.965 14.105h4\"/><path d=\"M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5\"/><path d=\"M2 8.82a15 15 0 0 1 20 0\"/><path d=\"M21.965 22.105v-4\"/><path d=\"M5 12.86a10 10 0 0 1 3-2.032\"/><path d=\"M8.5 16.429h.01\"/>",
  "wifi-zero": "<path d=\"M12 20h.01\"/>",
  "wifi": "<path d=\"M5 12.55a11 11 0 0 1 14.08 0\"/><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"/><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"/><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"/>",
  "wind-arrow-down": "<path d=\"M10 2v8\"/><path d=\"M12.8 21.6A2 2 0 1 0 14 18H2\"/><path d=\"M17.5 10a2.5 2.5 0 1 1 2 4H2\"/><path d=\"m6 6 4 4 4-4\"/>",
  "wind": "<path d=\"M12.8 19.6A2 2 0 1 0 14 16H2\"/><path d=\"M17.5 8a2.5 2.5 0 1 1 2 4H2\"/><path d=\"M9.8 4.4A2 2 0 1 1 11 8H2\"/>",
  "wine-off": "<path d=\"M8 22h8\"/><path d=\"M7 10h3m7 0h-1.343\"/><path d=\"M12 15v7\"/><path d=\"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
  "wine": "<path d=\"M8 22h8\"/><path d=\"M7 10h10\"/><path d=\"M12 15v7\"/><path d=\"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z\"/>",
  "workflow": "<rect width=\"8\" height=\"8\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M7 11v4a2 2 0 0 0 2 2h4\"/><rect width=\"8\" height=\"8\" x=\"13\" y=\"13\" rx=\"2\"/>",
  "worm": "<path d=\"m19 12-1.5 3\"/><path d=\"M19.63 18.81 22 20\"/><path d=\"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z\"/>",
  "wrench-off": "<path d=\"M10.747 5.093a6 6 0 0 1 6.841-2.882c.438.12.54.662.219.984L14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-2.882 6.842\"/><path d=\"m13.5 13.5-7.88 7.88a1 1 0 0 1-2.999-3l7.88-7.88\"/><path d=\"m2 2 20 20\"/>",
  "wrench": "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z\"/>",
  "x-line-top": "<path d=\"M18 4H6\"/><path d=\"M18 8 6 20\"/><path d=\"m6 8 12 12\"/>",
  "x": "<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/>",
  "zap-off": "<path d=\"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317\"/><path d=\"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773\"/><path d=\"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643\"/><path d=\"m2 2 20 20\"/>",
  "zap": "<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/>",
  "zodiac-aquarius": "<path d=\"m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10\"/><path d=\"m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002\"/>",
  "zodiac-aries": "<path d=\"M12 7.5a4.5 4.5 0 1 1 5 4.5\"/><path d=\"M7 12a4.5 4.5 0 1 1 5-4.5V21\"/>",
  "zodiac-cancer": "<path d=\"M21 14.5A9 6.5 0 0 1 5.5 19\"/><path d=\"M3 9.5A9 6.5 0 0 1 18.5 5\"/><circle cx=\"17.5\" cy=\"14.5\" r=\"3.5\"/><circle cx=\"6.5\" cy=\"9.5\" r=\"3.5\"/>",
  "zodiac-capricorn": "<path d=\"M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0\"/><path d=\"M7 19V6a3 3 0 0 0-3-3h0\"/><circle cx=\"17\" cy=\"17\" r=\"3\"/>",
  "zodiac-gemini": "<path d=\"M16 4.525v14.948\"/><path d=\"M20 3A17 17 0 0 1 4 3\"/><path d=\"M4 21a17 17 0 0 1 16 0\"/><path d=\"M8 4.525v14.948\"/>",
  "zodiac-leo": "<path d=\"M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0\"/><circle cx=\"7\" cy=\"16\" r=\"3\"/>",
  "zodiac-libra": "<path d=\"M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21\"/><path d=\"M3 20h18\"/>",
  "zodiac-ophiuchus": "<path d=\"M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10\"/><path d=\"M6 3v12a6 6 0 0 0 12 0V3\"/>",
  "zodiac-pisces": "<path d=\"M19 21a15 15 0 0 1 0-18\"/><path d=\"M20 12H4\"/><path d=\"M5 3a15 15 0 0 1 0 18\"/>",
  "zodiac-sagittarius": "<path d=\"M15 3h6v6\"/><path d=\"M21 3 3 21\"/><path d=\"m9 9 6 6\"/>",
  "zodiac-scorpio": "<path d=\"M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3\"/><path d=\"m22 19-3 3\"/><path d=\"M5 19V5.5a1 1 0 0 1 5 0\"/><path d=\"M5 5.5A2.5 2.5 0 0 0 2.5 3\"/>",
  "zodiac-taurus": "<circle cx=\"12\" cy=\"15\" r=\"6\"/><path d=\"M18 3A6 6 0 0 1 6 3\"/>",
  "zodiac-virgo": "<path d=\"M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5\"/><path d=\"M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5\"/><path d=\"M6 19V6a3 3 0 0 0-3-3h0\"/><path d=\"M6 5.5a1 1 0 0 1 5 0V19\"/>",
  "zoom-in": "<circle cx=\"11\" cy=\"11\" r=\"8\"/><line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\"/><line x1=\"11\" x2=\"11\" y1=\"8\" y2=\"14\"/><line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\"/>",
  "zoom-out": "<circle cx=\"11\" cy=\"11\" r=\"8\"/><line x1=\"21\" x2=\"16.65\" y1=\"21\" y2=\"16.65\"/><line x1=\"8\" x2=\"14\" y1=\"11\" y2=\"11\"/>",
  "home": "<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><polyline points=\"9 22 9 12 15 12 15 22\"/>",
  "edit": "<path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z\"/>",
  "message": "<path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"/>",
  "fire": "<path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/>",
  "cart": "<circle cx=\"9\" cy=\"21\" r=\"1\"/><circle cx=\"20\" cy=\"21\" r=\"1\"/><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"/>",
  "bag": "<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"/><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"/><path d=\"M16 10a4 4 0 0 1-8 0\"/>",
  "dollar": "<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/>",
  "bar-chart": "<line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"10\"/><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"16\"/>",
  "pie-chart": "<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"/><path d=\"M22 12A10 10 0 0 0 12 2v10z\"/>",
  "check-circle": "<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><polyline points=\"22 4 12 14.01 9 11.01\"/>",
  "grid": "<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"/>",
  "filter": "<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/>",
  "refresh": "<polyline points=\"23 4 23 10 17 10\"/><polyline points=\"1 20 1 14 7 14\"/><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"/>",
  "unlock": "<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"/>",
  "alert": "<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/>",
  "help": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/>",
  "tool": "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"/>",
};
const ICON_LIST: { n: string; kw: string }[] = [
  { n: "ic:home", kw: "home casa inicio principal" },
  { n: "ic:file", kw: "file arquivo documento pagina" },
  { n: "ic:file-text", kw: "file text arquivo texto documento nota" },
  { n: "ic:folder", kw: "folder pasta diretorio" },
  { n: "ic:folder-open", kw: "folder open pasta aberta" },
  { n: "ic:edit", kw: "edit editar lapis escrever" },
  { n: "ic:trash", kw: "trash lixo excluir apagar deletar" },
  { n: "ic:copy", kw: "copy copiar duplicar" },
  { n: "ic:save", kw: "save salvar guardar disco" },
  { n: "ic:search", kw: "search buscar procurar lupa pesquisar" },
  { n: "ic:settings", kw: "settings config ajustes engrenagem opcoes" },
  { n: "ic:user", kw: "user usuario pessoa perfil conta" },
  { n: "ic:users", kw: "users usuarios pessoas equipe grupo time" },
  { n: "ic:heart", kw: "heart coracao amor favorito curtir" },
  { n: "ic:star", kw: "star estrela favorito destaque" },
  { n: "ic:bookmark", kw: "bookmark marcador salvar favorito" },
  { n: "ic:flag", kw: "flag bandeira marcar sinalizar" },
  { n: "ic:tag", kw: "tag etiqueta rotulo marcador preco" },
  { n: "ic:bell", kw: "bell sino notificacao aviso alerta" },
  { n: "ic:calendar", kw: "calendar calendario data agenda" },
  { n: "ic:clock", kw: "clock relogio hora tempo" },
  { n: "ic:mail", kw: "mail email correio envelope mensagem" },
  { n: "ic:message", kw: "message chat conversa balao mensagem" },
  { n: "ic:phone", kw: "phone telefone ligar contato" },
  { n: "ic:send", kw: "send enviar aviao mensagem" },
  { n: "ic:camera", kw: "camera foto fotografia" },
  { n: "ic:image", kw: "image imagem foto figura" },
  { n: "ic:video", kw: "video filme camera gravar" },
  { n: "ic:music", kw: "music musica som audio nota" },
  { n: "ic:play", kw: "play reproduzir tocar iniciar" },
  { n: "ic:headphones", kw: "headphones fone audio ouvir" },
  { n: "ic:mic", kw: "mic microfone gravar voz" },
  { n: "ic:book", kw: "book livro leitura" },
  { n: "ic:book-open", kw: "book open livro aberto leitura" },
  { n: "ic:pen", kw: "pen caneta pena escrever" },
  { n: "ic:brush", kw: "brush pincel pintar desenhar" },
  { n: "ic:lightbulb", kw: "lightbulb ideia lampada luz" },
  { n: "ic:target", kw: "target alvo objetivo meta foco" },
  { n: "ic:trophy", kw: "trophy trofeu premio vitoria" },
  { n: "ic:crown", kw: "crown coroa rei vip premium" },
  { n: "ic:gift", kw: "gift presente caixa surpresa" },
  { n: "ic:fire", kw: "fire fogo chama quente" },
  { n: "ic:rocket", kw: "rocket foguete lancar nave" },
  { n: "ic:map-pin", kw: "map pin local localizacao mapa marcador" },
  { n: "ic:map", kw: "map mapa localizacao" },
  { n: "ic:compass", kw: "compass bussola direcao navegar" },
  { n: "ic:globe", kw: "globe mundo globo planeta web" },
  { n: "ic:plane", kw: "plane aviao viagem voo" },
  { n: "ic:car", kw: "car carro veiculo automovel" },
  { n: "ic:truck", kw: "truck caminhao entrega frete" },
  { n: "ic:cart", kw: "cart carrinho compras loja" },
  { n: "ic:bag", kw: "bag sacola bolsa compras" },
  { n: "ic:credit-card", kw: "credit card cartao pagamento" },
  { n: "ic:dollar", kw: "dollar dinheiro cifrao pagamento valor" },
  { n: "ic:bar-chart", kw: "bar chart grafico barras dados" },
  { n: "ic:pie-chart", kw: "pie chart grafico pizza dados" },
  { n: "ic:trending-up", kw: "trending up crescimento subir grafico" },
  { n: "ic:briefcase", kw: "briefcase maleta trabalho negocio" },
  { n: "ic:building", kw: "building predio empresa escritorio" },
  { n: "ic:clipboard", kw: "clipboard prancheta lista area transferencia" },
  { n: "ic:archive", kw: "archive arquivo caixa guardar" },
  { n: "ic:inbox", kw: "inbox caixa entrada mensagens" },
  { n: "ic:paperclip", kw: "paperclip clipe anexo" },
  { n: "ic:pin", kw: "pin alfinete fixar pregar" },
  { n: "ic:link", kw: "link corrente url conexao" },
  { n: "ic:share", kw: "share compartilhar conexao nos diagrama" },
  { n: "ic:check", kw: "check certo confirmar ok feito" },
  { n: "ic:check-circle", kw: "check circle confirmado concluido ok" },
  { n: "ic:x", kw: "x fechar cancelar erro" },
  { n: "ic:plus", kw: "plus mais adicionar novo" },
  { n: "ic:minus", kw: "minus menos remover" },
  { n: "ic:menu", kw: "menu lista hamburguer opcoes" },
  { n: "ic:grid", kw: "grid grade quadros painel" },
  { n: "ic:list", kw: "list lista itens" },
  { n: "ic:filter", kw: "filter filtro funil" },
  { n: "ic:refresh", kw: "refresh atualizar recarregar sincronizar" },
  { n: "ic:download", kw: "download baixar salvar" },
  { n: "ic:upload", kw: "upload enviar subir" },
  { n: "ic:cloud", kw: "cloud nuvem armazenamento" },
  { n: "ic:lock", kw: "lock cadeado bloquear seguranca" },
  { n: "ic:unlock", kw: "unlock cadeado aberto desbloquear" },
  { n: "ic:shield", kw: "shield escudo seguranca protecao" },
  { n: "ic:eye", kw: "eye olho ver visualizar" },
  { n: "ic:eye-off", kw: "eye off olho oculto esconder" },
  { n: "ic:info", kw: "info informacao detalhes" },
  { n: "ic:alert", kw: "alert alerta aviso atencao perigo" },
  { n: "ic:help", kw: "help ajuda duvida pergunta interrogacao" },
  { n: "ic:code", kw: "code codigo programar dev" },
  { n: "ic:terminal", kw: "terminal console comando" },
  { n: "ic:database", kw: "database banco dados" },
  { n: "ic:server", kw: "server servidor" },
  { n: "ic:cpu", kw: "cpu processador chip" },
  { n: "ic:monitor", kw: "monitor tela computador" },
  { n: "ic:smartphone", kw: "smartphone celular telefone" },
  { n: "ic:wifi", kw: "wifi internet rede sinal" },
  { n: "ic:battery", kw: "battery bateria energia" },
  { n: "ic:sun", kw: "sun sol dia claro" },
  { n: "ic:moon", kw: "moon lua noite escuro" },
  { n: "ic:umbrella", kw: "umbrella guarda chuva" },
  { n: "ic:coffee", kw: "coffee cafe bebida xicara" },
  { n: "ic:leaf", kw: "leaf folha planta natureza" },
  { n: "ic:zap", kw: "zap raio energia rapido" },
  { n: "ic:droplet", kw: "droplet gota agua" },
  { n: "ic:anchor", kw: "anchor ancora barco mar" },
  { n: "ic:award", kw: "award medalha premio conquista" },
  { n: "ic:activity", kw: "activity atividade pulso saude grafico" },
  { n: "ic:scissors", kw: "scissors tesoura cortar recortar" },
  { n: "ic:tool", kw: "tool ferramenta chave configurar" },
  { n: "ic:hammer", kw: "hammer martelo construir" },
  { n: "ic:thermometer", kw: "thermometer termometro temperatura" },
  { n: "ic:smile", kw: "smile sorriso feliz emocao" },
  { n: "ic:thumbs-up", kw: "thumbs up curtir like positivo" },
  { n: "ic:arrow-up", kw: "arrow up seta cima" },
  { n: "ic:arrow-down", kw: "arrow down seta baixo" },
  { n: "ic:arrow-left", kw: "arrow left seta esquerda" },
  { n: "ic:arrow-right", kw: "arrow right seta direita" },
  { n: "ic:a-arrow-down", kw: "a arrow down seta flecha" },
  { n: "ic:a-arrow-up", kw: "a arrow up seta flecha" },
  { n: "ic:a-large-small", kw: "a large small" },
  { n: "ic:accessibility", kw: "accessibility" },
  { n: "ic:ad", kw: "ad" },
  { n: "ic:air-vent", kw: "air vent" },
  { n: "ic:airplay", kw: "airplay" },
  { n: "ic:alarm-clock", kw: "alarm clock alarme despertador relogio hora tempo" },
  { n: "ic:alarm-clock-check", kw: "alarm clock check alarme despertador relogio hora tempo certo confirmar ok" },
  { n: "ic:alarm-clock-minus", kw: "alarm clock minus alarme despertador relogio hora tempo menos remover" },
  { n: "ic:alarm-clock-off", kw: "alarm clock off alarme despertador relogio hora tempo" },
  { n: "ic:alarm-clock-plus", kw: "alarm clock plus alarme despertador relogio hora tempo mais adicionar novo" },
  { n: "ic:alarm-smoke", kw: "alarm smoke alarme despertador" },
  { n: "ic:album", kw: "album" },
  { n: "ic:align-center-horizontal", kw: "align center horizontal" },
  { n: "ic:align-center-vertical", kw: "align center vertical" },
  { n: "ic:align-end-horizontal", kw: "align end horizontal" },
  { n: "ic:align-end-vertical", kw: "align end vertical" },
  { n: "ic:align-horizontal-distribute-center", kw: "align horizontal distribute center" },
  { n: "ic:align-horizontal-distribute-end", kw: "align horizontal distribute end" },
  { n: "ic:align-horizontal-distribute-start", kw: "align horizontal distribute start" },
  { n: "ic:align-horizontal-justify-center", kw: "align horizontal justify center" },
  { n: "ic:align-horizontal-justify-end", kw: "align horizontal justify end" },
  { n: "ic:align-horizontal-justify-start", kw: "align horizontal justify start" },
  { n: "ic:align-horizontal-space-around", kw: "align horizontal space around" },
  { n: "ic:align-horizontal-space-between", kw: "align horizontal space between" },
  { n: "ic:align-start-horizontal", kw: "align start horizontal" },
  { n: "ic:align-start-vertical", kw: "align start vertical" },
  { n: "ic:align-vertical-distribute-center", kw: "align vertical distribute center" },
  { n: "ic:align-vertical-distribute-end", kw: "align vertical distribute end" },
  { n: "ic:align-vertical-distribute-start", kw: "align vertical distribute start" },
  { n: "ic:align-vertical-justify-center", kw: "align vertical justify center" },
  { n: "ic:align-vertical-justify-end", kw: "align vertical justify end" },
  { n: "ic:align-vertical-justify-start", kw: "align vertical justify start" },
  { n: "ic:align-vertical-space-around", kw: "align vertical space around" },
  { n: "ic:align-vertical-space-between", kw: "align vertical space between" },
  { n: "ic:ambulance", kw: "ambulance" },
  { n: "ic:ampersand", kw: "ampersand" },
  { n: "ic:ampersands", kw: "ampersands" },
  { n: "ic:amphora", kw: "amphora" },
  { n: "ic:angry", kw: "angry" },
  { n: "ic:annoyed", kw: "annoyed" },
  { n: "ic:antenna", kw: "antenna" },
  { n: "ic:anvil", kw: "anvil" },
  { n: "ic:aperture", kw: "aperture" },
  { n: "ic:app-window", kw: "app window" },
  { n: "ic:app-window-mac", kw: "app window mac" },
  { n: "ic:apple", kw: "apple maca fruta maca fruta" },
  { n: "ic:archive-restore", kw: "archive restore arquivo caixa" },
  { n: "ic:archive-x", kw: "archive x arquivo caixa fechar cancelar" },
  { n: "ic:armchair", kw: "armchair" },
  { n: "ic:arrow-big-down", kw: "arrow big down seta flecha" },
  { n: "ic:arrow-big-down-dash", kw: "arrow big down dash seta flecha" },
  { n: "ic:arrow-big-left", kw: "arrow big left seta flecha" },
  { n: "ic:arrow-big-left-dash", kw: "arrow big left dash seta flecha" },
  { n: "ic:arrow-big-right", kw: "arrow big right seta flecha" },
  { n: "ic:arrow-big-right-dash", kw: "arrow big right dash seta flecha" },
  { n: "ic:arrow-big-up", kw: "arrow big up seta flecha" },
  { n: "ic:arrow-big-up-dash", kw: "arrow big up dash seta flecha" },
  { n: "ic:arrow-down-0-1", kw: "arrow down 0 1 seta flecha" },
  { n: "ic:arrow-down-1-0", kw: "arrow down 1 0 seta flecha" },
  { n: "ic:arrow-down-a-z", kw: "arrow down a z seta flecha" },
  { n: "ic:arrow-down-from-line", kw: "arrow down from line seta flecha" },
  { n: "ic:arrow-down-left", kw: "arrow down left seta flecha" },
  { n: "ic:arrow-down-narrow-wide", kw: "arrow down narrow wide seta flecha" },
  { n: "ic:arrow-down-right", kw: "arrow down right seta flecha" },
  { n: "ic:arrow-down-to-dot", kw: "arrow down to dot seta flecha" },
  { n: "ic:arrow-down-to-line", kw: "arrow down to line seta flecha" },
  { n: "ic:arrow-down-up", kw: "arrow down up seta flecha" },
  { n: "ic:arrow-down-wide-narrow", kw: "arrow down wide narrow seta flecha" },
  { n: "ic:arrow-down-z-a", kw: "arrow down z a seta flecha" },
  { n: "ic:arrow-left-from-line", kw: "arrow left from line seta flecha" },
  { n: "ic:arrow-left-right", kw: "arrow left right seta flecha" },
  { n: "ic:arrow-left-to-line", kw: "arrow left to line seta flecha" },
  { n: "ic:arrow-right-from-line", kw: "arrow right from line seta flecha" },
  { n: "ic:arrow-right-left", kw: "arrow right left seta flecha" },
  { n: "ic:arrow-right-to-line", kw: "arrow right to line seta flecha" },
  { n: "ic:arrow-up-0-1", kw: "arrow up 0 1 seta flecha" },
  { n: "ic:arrow-up-1-0", kw: "arrow up 1 0 seta flecha" },
  { n: "ic:arrow-up-a-z", kw: "arrow up a z seta flecha" },
  { n: "ic:arrow-up-down", kw: "arrow up down seta flecha" },
  { n: "ic:arrow-up-from-dot", kw: "arrow up from dot seta flecha" },
  { n: "ic:arrow-up-from-line", kw: "arrow up from line seta flecha" },
  { n: "ic:arrow-up-left", kw: "arrow up left seta flecha" },
  { n: "ic:arrow-up-narrow-wide", kw: "arrow up narrow wide seta flecha" },
  { n: "ic:arrow-up-right", kw: "arrow up right seta flecha" },
  { n: "ic:arrow-up-to-line", kw: "arrow up to line seta flecha" },
  { n: "ic:arrow-up-wide-narrow", kw: "arrow up wide narrow seta flecha" },
  { n: "ic:arrow-up-z-a", kw: "arrow up z a seta flecha" },
  { n: "ic:arrows-up-from-line", kw: "arrows up from line" },
  { n: "ic:asterisk", kw: "asterisk" },
  { n: "ic:astroid", kw: "astroid" },
  { n: "ic:at-sign", kw: "at sign" },
  { n: "ic:atom", kw: "atom" },
  { n: "ic:audio-lines", kw: "audio lines" },
  { n: "ic:audio-waveform", kw: "audio waveform" },
  { n: "ic:axe", kw: "axe" },
  { n: "ic:axis-3d", kw: "axis 3d" },
  { n: "ic:baby", kw: "baby" },
  { n: "ic:backpack", kw: "backpack" },
  { n: "ic:badge", kw: "badge" },
  { n: "ic:badge-alert", kw: "badge alert alerta aviso atencao" },
  { n: "ic:badge-cent", kw: "badge cent" },
  { n: "ic:badge-check", kw: "badge check certo confirmar ok" },
  { n: "ic:badge-dollar-sign", kw: "badge dollar sign dinheiro cifrao valor" },
  { n: "ic:badge-euro", kw: "badge euro" },
  { n: "ic:badge-indian-rupee", kw: "badge indian rupee" },
  { n: "ic:badge-info", kw: "badge info informacao" },
  { n: "ic:badge-japanese-yen", kw: "badge japanese yen" },
  { n: "ic:badge-minus", kw: "badge minus menos remover" },
  { n: "ic:badge-percent", kw: "badge percent" },
  { n: "ic:badge-plus", kw: "badge plus mais adicionar novo" },
  { n: "ic:badge-pound-sterling", kw: "badge pound sterling" },
  { n: "ic:badge-question-mark", kw: "badge question mark pergunta duvida" },
  { n: "ic:badge-russian-ruble", kw: "badge russian ruble" },
  { n: "ic:badge-swiss-franc", kw: "badge swiss franc" },
  { n: "ic:badge-turkish-lira", kw: "badge turkish lira" },
  { n: "ic:badge-x", kw: "badge x fechar cancelar" },
  { n: "ic:baggage-claim", kw: "baggage claim" },
  { n: "ic:balloon", kw: "balloon" },
  { n: "ic:ban", kw: "ban" },
  { n: "ic:banana", kw: "banana" },
  { n: "ic:bandage", kw: "bandage" },
  { n: "ic:banknote", kw: "banknote dinheiro nota dinheiro nota" },
  { n: "ic:banknote-arrow-down", kw: "banknote arrow down dinheiro nota seta flecha" },
  { n: "ic:banknote-arrow-up", kw: "banknote arrow up dinheiro nota seta flecha" },
  { n: "ic:banknote-check", kw: "banknote check dinheiro nota certo confirmar ok" },
  { n: "ic:banknote-x", kw: "banknote x dinheiro nota fechar cancelar" },
  { n: "ic:barcode", kw: "barcode" },
  { n: "ic:barrel", kw: "barrel" },
  { n: "ic:baseline", kw: "baseline" },
  { n: "ic:bath", kw: "bath" },
  { n: "ic:battery-charging", kw: "battery charging bateria energia" },
  { n: "ic:battery-full", kw: "battery full bateria energia" },
  { n: "ic:battery-low", kw: "battery low bateria energia" },
  { n: "ic:battery-medium", kw: "battery medium bateria energia" },
  { n: "ic:battery-plus", kw: "battery plus bateria energia mais adicionar novo" },
  { n: "ic:battery-warning", kw: "battery warning bateria energia" },
  { n: "ic:beaker", kw: "beaker" },
  { n: "ic:bean", kw: "bean" },
  { n: "ic:bean-off", kw: "bean off" },
  { n: "ic:bed", kw: "bed" },
  { n: "ic:bed-double", kw: "bed double" },
  { n: "ic:bed-single", kw: "bed single" },
  { n: "ic:beef", kw: "beef" },
  { n: "ic:beef-off", kw: "beef off" },
  { n: "ic:beer", kw: "beer" },
  { n: "ic:beer-off", kw: "beer off" },
  { n: "ic:bell-check", kw: "bell check sino notificacao aviso certo confirmar ok" },
  { n: "ic:bell-dot", kw: "bell dot sino notificacao aviso" },
  { n: "ic:bell-electric", kw: "bell electric sino notificacao aviso" },
  { n: "ic:bell-minus", kw: "bell minus sino notificacao aviso menos remover" },
  { n: "ic:bell-off", kw: "bell off sino notificacao aviso" },
  { n: "ic:bell-plus", kw: "bell plus sino notificacao aviso mais adicionar novo" },
  { n: "ic:bell-ring", kw: "bell ring sino notificacao aviso" },
  { n: "ic:between-horizontal-end", kw: "between horizontal end" },
  { n: "ic:between-horizontal-start", kw: "between horizontal start" },
  { n: "ic:between-vertical-end", kw: "between vertical end" },
  { n: "ic:between-vertical-start", kw: "between vertical start" },
  { n: "ic:biceps-flexed", kw: "biceps flexed" },
  { n: "ic:bike", kw: "bike bicicleta bicicleta" },
  { n: "ic:binary", kw: "binary" },
  { n: "ic:binoculars", kw: "binoculars" },
  { n: "ic:biohazard", kw: "biohazard" },
  { n: "ic:bird", kw: "bird passaro passaro" },
  { n: "ic:birdhouse", kw: "birdhouse" },
  { n: "ic:bitcoin", kw: "bitcoin" },
  { n: "ic:blend", kw: "blend" },
  { n: "ic:blender", kw: "blender" },
  { n: "ic:blinds", kw: "blinds" },
  { n: "ic:blocks", kw: "blocks" },
  { n: "ic:bluetooth", kw: "bluetooth bluetooth bluetooth" },
  { n: "ic:bluetooth-connected", kw: "bluetooth connected bluetooth" },
  { n: "ic:bluetooth-off", kw: "bluetooth off bluetooth" },
  { n: "ic:bluetooth-searching", kw: "bluetooth searching bluetooth" },
  { n: "ic:bold", kw: "bold" },
  { n: "ic:bolt", kw: "bolt" },
  { n: "ic:bomb", kw: "bomb" },
  { n: "ic:bone", kw: "bone" },
  { n: "ic:bone-fracture", kw: "bone fracture" },
  { n: "ic:book-a", kw: "book a livro" },
  { n: "ic:book-alert", kw: "book alert livro alerta aviso atencao" },
  { n: "ic:book-audio", kw: "book audio livro" },
  { n: "ic:book-check", kw: "book check livro certo confirmar ok" },
  { n: "ic:book-copy", kw: "book copy livro copiar" },
  { n: "ic:book-dashed", kw: "book dashed livro" },
  { n: "ic:book-down", kw: "book down livro" },
  { n: "ic:book-headphones", kw: "book headphones livro fone audio" },
  { n: "ic:book-heart", kw: "book heart livro coracao favorito" },
  { n: "ic:book-image", kw: "book image livro imagem foto" },
  { n: "ic:book-key", kw: "book key livro chave" },
  { n: "ic:book-lock", kw: "book lock livro cadeado bloquear seguranca" },
  { n: "ic:book-marked", kw: "book marked livro" },
  { n: "ic:book-minus", kw: "book minus livro menos remover" },
  { n: "ic:book-open-check", kw: "book open check livro certo confirmar ok" },
  { n: "ic:book-open-text", kw: "book open text livro" },
  { n: "ic:book-plus", kw: "book plus livro mais adicionar novo" },
  { n: "ic:book-search", kw: "book search livro buscar procurar lupa" },
  { n: "ic:book-text", kw: "book text livro" },
  { n: "ic:book-type", kw: "book type livro" },
  { n: "ic:book-up", kw: "book up livro" },
  { n: "ic:book-up-2", kw: "book up 2 livro" },
  { n: "ic:book-user", kw: "book user livro usuario pessoa" },
  { n: "ic:book-x", kw: "book x livro fechar cancelar" },
  { n: "ic:bookmark-check", kw: "bookmark check marcador favorito certo confirmar ok" },
  { n: "ic:bookmark-minus", kw: "bookmark minus marcador favorito menos remover" },
  { n: "ic:bookmark-off", kw: "bookmark off marcador favorito" },
  { n: "ic:bookmark-plus", kw: "bookmark plus marcador favorito mais adicionar novo" },
  { n: "ic:bookmark-x", kw: "bookmark x marcador favorito fechar cancelar" },
  { n: "ic:boom-box", kw: "boom box caixa" },
  { n: "ic:bot", kw: "bot" },
  { n: "ic:bot-message-square", kw: "bot message square mensagem chat conversa" },
  { n: "ic:bot-off", kw: "bot off" },
  { n: "ic:bottle-wine", kw: "bottle wine" },
  { n: "ic:bow-arrow", kw: "bow arrow seta flecha" },
  { n: "ic:box", kw: "box caixa caixa" },
  { n: "ic:boxes", kw: "boxes" },
  { n: "ic:braces", kw: "braces" },
  { n: "ic:brackets", kw: "brackets" },
  { n: "ic:brain", kw: "brain" },
  { n: "ic:brain-circuit", kw: "brain circuit" },
  { n: "ic:brain-cog", kw: "brain cog" },
  { n: "ic:brick-wall", kw: "brick wall" },
  { n: "ic:brick-wall-fire", kw: "brick wall fire fogo chama" },
  { n: "ic:brick-wall-shield", kw: "brick wall shield escudo seguranca protecao" },
  { n: "ic:briefcase-business", kw: "briefcase business maleta trabalho negocio" },
  { n: "ic:briefcase-conveyor-belt", kw: "briefcase conveyor belt maleta trabalho negocio" },
  { n: "ic:briefcase-medical", kw: "briefcase medical maleta trabalho negocio" },
  { n: "ic:bring-to-front", kw: "bring to front" },
  { n: "ic:broccoli", kw: "broccoli" },
  { n: "ic:brush-cleaning", kw: "brush cleaning pincel pintar" },
  { n: "ic:bubbles", kw: "bubbles" },
  { n: "ic:bug", kw: "bug" },
  { n: "ic:bug-off", kw: "bug off" },
  { n: "ic:bug-play", kw: "bug play reproduzir tocar" },
  { n: "ic:building-2", kw: "building 2 predio empresa escritorio" },
  { n: "ic:bus", kw: "bus onibus onibus" },
  { n: "ic:bus-front", kw: "bus front onibus" },
  { n: "ic:cable", kw: "cable" },
  { n: "ic:cable-car", kw: "cable car carro veiculo" },
  { n: "ic:cake", kw: "cake" },
  { n: "ic:cake-slice", kw: "cake slice" },
  { n: "ic:calculator", kw: "calculator" },
  { n: "ic:calendar-1", kw: "calendar 1 calendario data agenda" },
  { n: "ic:calendar-arrow-down", kw: "calendar arrow down calendario data agenda seta flecha" },
  { n: "ic:calendar-arrow-up", kw: "calendar arrow up calendario data agenda seta flecha" },
  { n: "ic:calendar-check", kw: "calendar check calendario data agenda certo confirmar ok" },
  { n: "ic:calendar-check-2", kw: "calendar check 2 calendario data agenda certo confirmar ok" },
  { n: "ic:calendar-clock", kw: "calendar clock calendario data agenda relogio hora tempo" },
  { n: "ic:calendar-cog", kw: "calendar cog calendario data agenda" },
  { n: "ic:calendar-days", kw: "calendar days calendario data agenda" },
  { n: "ic:calendar-fold", kw: "calendar fold calendario data agenda" },
  { n: "ic:calendar-heart", kw: "calendar heart calendario data agenda coracao favorito" },
  { n: "ic:calendar-minus", kw: "calendar minus calendario data agenda menos remover" },
  { n: "ic:calendar-minus-2", kw: "calendar minus 2 calendario data agenda menos remover" },
  { n: "ic:calendar-off", kw: "calendar off calendario data agenda" },
  { n: "ic:calendar-plus", kw: "calendar plus calendario data agenda mais adicionar novo" },
  { n: "ic:calendar-plus-2", kw: "calendar plus 2 calendario data agenda mais adicionar novo" },
  { n: "ic:calendar-range", kw: "calendar range calendario data agenda" },
  { n: "ic:calendar-search", kw: "calendar search calendario data agenda buscar procurar lupa" },
  { n: "ic:calendar-sync", kw: "calendar sync calendario data agenda" },
  { n: "ic:calendar-x", kw: "calendar x calendario data agenda fechar cancelar" },
  { n: "ic:calendar-x-2", kw: "calendar x 2 calendario data agenda fechar cancelar" },
  { n: "ic:calendars", kw: "calendars" },
  { n: "ic:camera-off", kw: "camera off foto camera" },
  { n: "ic:candy", kw: "candy" },
  { n: "ic:candy-cane", kw: "candy cane" },
  { n: "ic:candy-off", kw: "candy off" },
  { n: "ic:cannabis", kw: "cannabis" },
  { n: "ic:cannabis-off", kw: "cannabis off" },
  { n: "ic:captions", kw: "captions" },
  { n: "ic:captions-off", kw: "captions off" },
  { n: "ic:car-front", kw: "car front carro veiculo" },
  { n: "ic:car-taxi-front", kw: "car taxi front carro veiculo" },
  { n: "ic:caravan", kw: "caravan" },
  { n: "ic:card-sim", kw: "card sim cartao" },
  { n: "ic:carrot", kw: "carrot" },
  { n: "ic:case-lower", kw: "case lower" },
  { n: "ic:case-sensitive", kw: "case sensitive" },
  { n: "ic:case-upper", kw: "case upper" },
  { n: "ic:cassette-tape", kw: "cassette tape" },
  { n: "ic:cast", kw: "cast" },
  { n: "ic:castle", kw: "castle" },
  { n: "ic:cat", kw: "cat gato pet gato pet" },
  { n: "ic:cctv", kw: "cctv" },
  { n: "ic:cctv-off", kw: "cctv off" },
  { n: "ic:chart-area", kw: "chart area grafico dados" },
  { n: "ic:chart-bar", kw: "chart bar grafico dados" },
  { n: "ic:chart-bar-big", kw: "chart bar big grafico dados" },
  { n: "ic:chart-bar-decreasing", kw: "chart bar decreasing grafico dados" },
  { n: "ic:chart-bar-increasing", kw: "chart bar increasing grafico dados" },
  { n: "ic:chart-bar-stacked", kw: "chart bar stacked grafico dados" },
  { n: "ic:chart-candlestick", kw: "chart candlestick grafico dados" },
  { n: "ic:chart-column", kw: "chart column grafico dados" },
  { n: "ic:chart-column-big", kw: "chart column big grafico dados" },
  { n: "ic:chart-column-decreasing", kw: "chart column decreasing grafico dados" },
  { n: "ic:chart-column-increasing", kw: "chart column increasing grafico dados" },
  { n: "ic:chart-column-stacked", kw: "chart column stacked grafico dados" },
  { n: "ic:chart-gantt", kw: "chart gantt grafico dados" },
  { n: "ic:chart-line", kw: "chart line grafico dados" },
  { n: "ic:chart-network", kw: "chart network grafico dados" },
  { n: "ic:chart-no-axes-column", kw: "chart no axes column grafico dados" },
  { n: "ic:chart-no-axes-column-decreasing", kw: "chart no axes column decreasing grafico dados" },
  { n: "ic:chart-no-axes-column-increasing", kw: "chart no axes column increasing grafico dados" },
  { n: "ic:chart-no-axes-combined", kw: "chart no axes combined grafico dados" },
  { n: "ic:chart-no-axes-gantt", kw: "chart no axes gantt grafico dados" },
  { n: "ic:chart-pie", kw: "chart pie grafico dados" },
  { n: "ic:chart-scatter", kw: "chart scatter grafico dados" },
  { n: "ic:chart-spline", kw: "chart spline grafico dados" },
  { n: "ic:check-check", kw: "check check certo confirmar ok certo confirmar ok" },
  { n: "ic:check-line", kw: "check line certo confirmar ok" },
  { n: "ic:chef-hat", kw: "chef hat" },
  { n: "ic:cherry", kw: "cherry" },
  { n: "ic:chess-bishop", kw: "chess bishop" },
  { n: "ic:chess-king", kw: "chess king" },
  { n: "ic:chess-knight", kw: "chess knight" },
  { n: "ic:chess-pawn", kw: "chess pawn" },
  { n: "ic:chess-queen", kw: "chess queen" },
  { n: "ic:chess-rook", kw: "chess rook" },
  { n: "ic:chevron-down", kw: "chevron down" },
  { n: "ic:chevron-first", kw: "chevron first" },
  { n: "ic:chevron-last", kw: "chevron last" },
  { n: "ic:chevron-left", kw: "chevron left" },
  { n: "ic:chevron-right", kw: "chevron right" },
  { n: "ic:chevron-up", kw: "chevron up" },
  { n: "ic:chevrons-down", kw: "chevrons down" },
  { n: "ic:chevrons-down-up", kw: "chevrons down up" },
  { n: "ic:chevrons-left", kw: "chevrons left" },
  { n: "ic:chevrons-left-right", kw: "chevrons left right" },
  { n: "ic:chevrons-left-right-ellipsis", kw: "chevrons left right ellipsis" },
  { n: "ic:chevrons-right", kw: "chevrons right" },
  { n: "ic:chevrons-right-left", kw: "chevrons right left" },
  { n: "ic:chevrons-up", kw: "chevrons up" },
  { n: "ic:chevrons-up-down", kw: "chevrons up down" },
  { n: "ic:church", kw: "church" },
  { n: "ic:cigarette", kw: "cigarette" },
  { n: "ic:cigarette-off", kw: "cigarette off" },
  { n: "ic:circle", kw: "circle" },
  { n: "ic:circle-alert", kw: "circle alert alerta aviso atencao" },
  { n: "ic:circle-arrow-down", kw: "circle arrow down seta flecha" },
  { n: "ic:circle-arrow-left", kw: "circle arrow left seta flecha" },
  { n: "ic:circle-arrow-out-down-left", kw: "circle arrow out down left seta flecha" },
  { n: "ic:circle-arrow-out-down-right", kw: "circle arrow out down right seta flecha" },
  { n: "ic:circle-arrow-out-up-left", kw: "circle arrow out up left seta flecha" },
  { n: "ic:circle-arrow-out-up-right", kw: "circle arrow out up right seta flecha" },
  { n: "ic:circle-arrow-right", kw: "circle arrow right seta flecha" },
  { n: "ic:circle-arrow-up", kw: "circle arrow up seta flecha" },
  { n: "ic:circle-check", kw: "circle check certo confirmar ok" },
  { n: "ic:circle-check-big", kw: "circle check big certo confirmar ok" },
  { n: "ic:circle-chevron-down", kw: "circle chevron down" },
  { n: "ic:circle-chevron-left", kw: "circle chevron left" },
  { n: "ic:circle-chevron-right", kw: "circle chevron right" },
  { n: "ic:circle-chevron-up", kw: "circle chevron up" },
  { n: "ic:circle-dashed", kw: "circle dashed" },
  { n: "ic:circle-divide", kw: "circle divide" },
  { n: "ic:circle-dollar-sign", kw: "circle dollar sign dinheiro cifrao valor" },
  { n: "ic:circle-dot", kw: "circle dot" },
  { n: "ic:circle-dot-dashed", kw: "circle dot dashed" },
  { n: "ic:circle-ellipsis", kw: "circle ellipsis" },
  { n: "ic:circle-equal", kw: "circle equal" },
  { n: "ic:circle-fading-arrow-up", kw: "circle fading arrow up seta flecha" },
  { n: "ic:circle-fading-plus", kw: "circle fading plus mais adicionar novo" },
  { n: "ic:circle-gauge", kw: "circle gauge" },
  { n: "ic:circle-minus", kw: "circle minus menos remover" },
  { n: "ic:circle-off", kw: "circle off" },
  { n: "ic:circle-parking", kw: "circle parking" },
  { n: "ic:circle-parking-off", kw: "circle parking off" },
  { n: "ic:circle-pause", kw: "circle pause pausa" },
  { n: "ic:circle-percent", kw: "circle percent" },
  { n: "ic:circle-pile", kw: "circle pile" },
  { n: "ic:circle-play", kw: "circle play reproduzir tocar" },
  { n: "ic:circle-plus", kw: "circle plus mais adicionar novo" },
  { n: "ic:circle-pound-sterling", kw: "circle pound sterling" },
  { n: "ic:circle-power", kw: "circle power" },
  { n: "ic:circle-question-mark", kw: "circle question mark pergunta duvida" },
  { n: "ic:circle-slash", kw: "circle slash" },
  { n: "ic:circle-slash-2", kw: "circle slash 2" },
  { n: "ic:circle-small", kw: "circle small" },
  { n: "ic:circle-star", kw: "circle star estrela favorito" },
  { n: "ic:circle-stop", kw: "circle stop" },
  { n: "ic:circle-user", kw: "circle user usuario pessoa" },
  { n: "ic:circle-user-round", kw: "circle user round usuario pessoa" },
  { n: "ic:circle-x", kw: "circle x fechar cancelar" },
  { n: "ic:circuit-board", kw: "circuit board" },
  { n: "ic:citrus", kw: "citrus" },
  { n: "ic:clapperboard", kw: "clapperboard" },
  { n: "ic:clipboard-check", kw: "clipboard check prancheta lista certo confirmar ok" },
  { n: "ic:clipboard-clock", kw: "clipboard clock prancheta lista relogio hora tempo" },
  { n: "ic:clipboard-copy", kw: "clipboard copy prancheta lista copiar" },
  { n: "ic:clipboard-list", kw: "clipboard list prancheta lista lista" },
  { n: "ic:clipboard-minus", kw: "clipboard minus prancheta lista menos remover" },
  { n: "ic:clipboard-paste", kw: "clipboard paste prancheta lista" },
  { n: "ic:clipboard-pen", kw: "clipboard pen prancheta lista caneta" },
  { n: "ic:clipboard-pen-line", kw: "clipboard pen line prancheta lista caneta" },
  { n: "ic:clipboard-plus", kw: "clipboard plus prancheta lista mais adicionar novo" },
  { n: "ic:clipboard-type", kw: "clipboard type prancheta lista" },
  { n: "ic:clipboard-x", kw: "clipboard x prancheta lista fechar cancelar" },
  { n: "ic:clock-1", kw: "clock 1 relogio hora tempo" },
  { n: "ic:clock-10", kw: "clock 10 relogio hora tempo" },
  { n: "ic:clock-11", kw: "clock 11 relogio hora tempo" },
  { n: "ic:clock-12", kw: "clock 12 relogio hora tempo" },
  { n: "ic:clock-2", kw: "clock 2 relogio hora tempo" },
  { n: "ic:clock-3", kw: "clock 3 relogio hora tempo" },
  { n: "ic:clock-4", kw: "clock 4 relogio hora tempo" },
  { n: "ic:clock-5", kw: "clock 5 relogio hora tempo" },
  { n: "ic:clock-6", kw: "clock 6 relogio hora tempo" },
  { n: "ic:clock-7", kw: "clock 7 relogio hora tempo" },
  { n: "ic:clock-8", kw: "clock 8 relogio hora tempo" },
  { n: "ic:clock-9", kw: "clock 9 relogio hora tempo" },
  { n: "ic:clock-alert", kw: "clock alert relogio hora tempo alerta aviso atencao" },
  { n: "ic:clock-arrow-down", kw: "clock arrow down relogio hora tempo seta flecha" },
  { n: "ic:clock-arrow-left", kw: "clock arrow left relogio hora tempo seta flecha" },
  { n: "ic:clock-arrow-right", kw: "clock arrow right relogio hora tempo seta flecha" },
  { n: "ic:clock-arrow-up", kw: "clock arrow up relogio hora tempo seta flecha" },
  { n: "ic:clock-check", kw: "clock check relogio hora tempo certo confirmar ok" },
  { n: "ic:clock-fading", kw: "clock fading relogio hora tempo" },
  { n: "ic:clock-plus", kw: "clock plus relogio hora tempo mais adicionar novo" },
  { n: "ic:closed-caption", kw: "closed caption" },
  { n: "ic:cloud-alert", kw: "cloud alert nuvem alerta aviso atencao" },
  { n: "ic:cloud-backup", kw: "cloud backup nuvem" },
  { n: "ic:cloud-check", kw: "cloud check nuvem certo confirmar ok" },
  { n: "ic:cloud-cog", kw: "cloud cog nuvem" },
  { n: "ic:cloud-download", kw: "cloud download nuvem baixar" },
  { n: "ic:cloud-drizzle", kw: "cloud drizzle nuvem" },
  { n: "ic:cloud-fog", kw: "cloud fog nuvem" },
  { n: "ic:cloud-hail", kw: "cloud hail nuvem" },
  { n: "ic:cloud-lightning", kw: "cloud lightning nuvem" },
  { n: "ic:cloud-moon", kw: "cloud moon nuvem lua noite" },
  { n: "ic:cloud-moon-rain", kw: "cloud moon rain nuvem lua noite" },
  { n: "ic:cloud-off", kw: "cloud off nuvem" },
  { n: "ic:cloud-rain", kw: "cloud rain nuvem" },
  { n: "ic:cloud-rain-wind", kw: "cloud rain wind nuvem" },
  { n: "ic:cloud-snow", kw: "cloud snow nuvem" },
  { n: "ic:cloud-sun", kw: "cloud sun nuvem sol dia" },
  { n: "ic:cloud-sun-rain", kw: "cloud sun rain nuvem sol dia" },
  { n: "ic:cloud-sync", kw: "cloud sync nuvem" },
  { n: "ic:cloud-upload", kw: "cloud upload nuvem enviar subir" },
  { n: "ic:cloudy", kw: "cloudy" },
  { n: "ic:clover", kw: "clover" },
  { n: "ic:club", kw: "club" },
  { n: "ic:code-xml", kw: "code xml codigo programar dev" },
  { n: "ic:cog", kw: "cog" },
  { n: "ic:coins", kw: "coins moedas dinheiro moedas dinheiro" },
  { n: "ic:columns-2", kw: "columns 2" },
  { n: "ic:columns-3", kw: "columns 3" },
  { n: "ic:columns-3-cog", kw: "columns 3 cog" },
  { n: "ic:columns-4", kw: "columns 4" },
  { n: "ic:combine", kw: "combine" },
  { n: "ic:command", kw: "command" },
  { n: "ic:component", kw: "component" },
  { n: "ic:computer", kw: "computer" },
  { n: "ic:concierge-bell", kw: "concierge bell sino notificacao aviso" },
  { n: "ic:cone", kw: "cone" },
  { n: "ic:construction", kw: "construction" },
  { n: "ic:contact", kw: "contact" },
  { n: "ic:contact-round", kw: "contact round" },
  { n: "ic:container", kw: "container" },
  { n: "ic:contrast", kw: "contrast" },
  { n: "ic:cookie", kw: "cookie" },
  { n: "ic:cooking-pot", kw: "cooking pot" },
  { n: "ic:copy-check", kw: "copy check copiar certo confirmar ok" },
  { n: "ic:copy-minus", kw: "copy minus copiar menos remover" },
  { n: "ic:copy-plus", kw: "copy plus copiar mais adicionar novo" },
  { n: "ic:copy-slash", kw: "copy slash copiar" },
  { n: "ic:copy-x", kw: "copy x copiar fechar cancelar" },
  { n: "ic:copyleft", kw: "copyleft" },
  { n: "ic:copyright", kw: "copyright" },
  { n: "ic:corner-down-left", kw: "corner down left" },
  { n: "ic:corner-down-right", kw: "corner down right" },
  { n: "ic:corner-left-down", kw: "corner left down" },
  { n: "ic:corner-left-up", kw: "corner left up" },
  { n: "ic:corner-right-down", kw: "corner right down" },
  { n: "ic:corner-right-up", kw: "corner right up" },
  { n: "ic:corner-up-left", kw: "corner up left" },
  { n: "ic:corner-up-right", kw: "corner up right" },
  { n: "ic:creative-commons", kw: "creative commons" },
  { n: "ic:croissant", kw: "croissant" },
  { n: "ic:crop", kw: "crop" },
  { n: "ic:cross", kw: "cross" },
  { n: "ic:crosshair", kw: "crosshair" },
  { n: "ic:cuboid", kw: "cuboid" },
  { n: "ic:cup-soda", kw: "cup soda" },
  { n: "ic:currency", kw: "currency" },
  { n: "ic:cylinder", kw: "cylinder" },
  { n: "ic:dam", kw: "dam" },
  { n: "ic:database-backup", kw: "database backup banco dados" },
  { n: "ic:database-search", kw: "database search banco dados buscar procurar lupa" },
  { n: "ic:database-zap", kw: "database zap banco dados raio energia rapido" },
  { n: "ic:decimals-arrow-left", kw: "decimals arrow left seta flecha" },
  { n: "ic:decimals-arrow-right", kw: "decimals arrow right seta flecha" },
  { n: "ic:delete", kw: "delete" },
  { n: "ic:dessert", kw: "dessert" },
  { n: "ic:diameter", kw: "diameter" },
  { n: "ic:diamond", kw: "diamond" },
  { n: "ic:diamond-minus", kw: "diamond minus menos remover" },
  { n: "ic:diamond-percent", kw: "diamond percent" },
  { n: "ic:diamond-plus", kw: "diamond plus mais adicionar novo" },
  { n: "ic:dice-1", kw: "dice 1" },
  { n: "ic:dice-2", kw: "dice 2" },
  { n: "ic:dice-3", kw: "dice 3" },
  { n: "ic:dice-4", kw: "dice 4" },
  { n: "ic:dice-5", kw: "dice 5" },
  { n: "ic:dice-6", kw: "dice 6" },
  { n: "ic:dices", kw: "dices" },
  { n: "ic:diff", kw: "diff" },
  { n: "ic:disc", kw: "disc" },
  { n: "ic:disc-2", kw: "disc 2" },
  { n: "ic:disc-3", kw: "disc 3" },
  { n: "ic:disc-album", kw: "disc album" },
  { n: "ic:divide", kw: "divide" },
  { n: "ic:dna", kw: "dna" },
  { n: "ic:dna-off", kw: "dna off" },
  { n: "ic:dock", kw: "dock" },
  { n: "ic:dog", kw: "dog cachorro pet cachorro pet" },
  { n: "ic:dollar-sign", kw: "dollar sign dinheiro cifrao valor" },
  { n: "ic:donut", kw: "donut" },
  { n: "ic:door-closed", kw: "door closed" },
  { n: "ic:door-closed-locked", kw: "door closed locked" },
  { n: "ic:door-open", kw: "door open" },
  { n: "ic:dot", kw: "dot" },
  { n: "ic:drafting-compass", kw: "drafting compass bussola direcao" },
  { n: "ic:drama", kw: "drama" },
  { n: "ic:drill", kw: "drill" },
  { n: "ic:drone", kw: "drone" },
  { n: "ic:droplet-off", kw: "droplet off gota agua" },
  { n: "ic:droplets", kw: "droplets" },
  { n: "ic:drum", kw: "drum" },
  { n: "ic:drumstick", kw: "drumstick" },
  { n: "ic:dumbbell", kw: "dumbbell" },
  { n: "ic:ear", kw: "ear" },
  { n: "ic:ear-off", kw: "ear off" },
  { n: "ic:earth", kw: "earth mundo terra planeta mundo terra planeta" },
  { n: "ic:earth-lock", kw: "earth lock mundo terra planeta cadeado bloquear seguranca" },
  { n: "ic:eclipse", kw: "eclipse" },
  { n: "ic:egg", kw: "egg" },
  { n: "ic:egg-fried", kw: "egg fried" },
  { n: "ic:egg-off", kw: "egg off" },
  { n: "ic:ellipse", kw: "ellipse" },
  { n: "ic:ellipsis", kw: "ellipsis" },
  { n: "ic:ellipsis-vertical", kw: "ellipsis vertical" },
  { n: "ic:equal", kw: "equal" },
  { n: "ic:equal-approximately", kw: "equal approximately" },
  { n: "ic:equal-not", kw: "equal not" },
  { n: "ic:eraser", kw: "eraser" },
  { n: "ic:ethernet-port", kw: "ethernet port" },
  { n: "ic:euro", kw: "euro" },
  { n: "ic:ev-charger", kw: "ev charger" },
  { n: "ic:expand", kw: "expand" },
  { n: "ic:external-link", kw: "external link link corrente url" },
  { n: "ic:eye-closed", kw: "eye closed olho ver visualizar" },
  { n: "ic:eye-dashed", kw: "eye dashed olho ver visualizar" },
  { n: "ic:factory", kw: "factory" },
  { n: "ic:fan", kw: "fan" },
  { n: "ic:fast-forward", kw: "fast forward" },
  { n: "ic:feather", kw: "feather" },
  { n: "ic:fence", kw: "fence" },
  { n: "ic:ferris-wheel", kw: "ferris wheel" },
  { n: "ic:file-archive", kw: "file archive arquivo documento arquivo caixa" },
  { n: "ic:file-axis-3d", kw: "file axis 3d arquivo documento" },
  { n: "ic:file-badge", kw: "file badge arquivo documento" },
  { n: "ic:file-box", kw: "file box arquivo documento caixa" },
  { n: "ic:file-braces", kw: "file braces arquivo documento" },
  { n: "ic:file-braces-corner", kw: "file braces corner arquivo documento" },
  { n: "ic:file-chart-column", kw: "file chart column arquivo documento grafico dados" },
  { n: "ic:file-chart-column-increasing", kw: "file chart column increasing arquivo documento grafico dados" },
  { n: "ic:file-chart-line", kw: "file chart line arquivo documento grafico dados" },
  { n: "ic:file-chart-pie", kw: "file chart pie arquivo documento grafico dados" },
  { n: "ic:file-check", kw: "file check arquivo documento certo confirmar ok" },
  { n: "ic:file-check-corner", kw: "file check corner arquivo documento certo confirmar ok" },
  { n: "ic:file-clock", kw: "file clock arquivo documento relogio hora tempo" },
  { n: "ic:file-code", kw: "file code arquivo documento codigo programar dev" },
  { n: "ic:file-code-corner", kw: "file code corner arquivo documento codigo programar dev" },
  { n: "ic:file-cog", kw: "file cog arquivo documento" },
  { n: "ic:file-diff", kw: "file diff arquivo documento" },
  { n: "ic:file-digit", kw: "file digit arquivo documento" },
  { n: "ic:file-down", kw: "file down arquivo documento" },
  { n: "ic:file-exclamation-point", kw: "file exclamation point arquivo documento" },
  { n: "ic:file-headphone", kw: "file headphone arquivo documento" },
  { n: "ic:file-heart", kw: "file heart arquivo documento coracao favorito" },
  { n: "ic:file-image", kw: "file image arquivo documento imagem foto" },
  { n: "ic:file-input", kw: "file input arquivo documento" },
  { n: "ic:file-key", kw: "file key arquivo documento chave" },
  { n: "ic:file-lock", kw: "file lock arquivo documento cadeado bloquear seguranca" },
  { n: "ic:file-minus", kw: "file minus arquivo documento menos remover" },
  { n: "ic:file-minus-corner", kw: "file minus corner arquivo documento menos remover" },
  { n: "ic:file-music", kw: "file music arquivo documento musica som" },
  { n: "ic:file-output", kw: "file output arquivo documento" },
  { n: "ic:file-pen", kw: "file pen arquivo documento caneta" },
  { n: "ic:file-pen-line", kw: "file pen line arquivo documento caneta" },
  { n: "ic:file-play", kw: "file play arquivo documento reproduzir tocar" },
  { n: "ic:file-plus", kw: "file plus arquivo documento mais adicionar novo" },
  { n: "ic:file-plus-corner", kw: "file plus corner arquivo documento mais adicionar novo" },
  { n: "ic:file-question-mark", kw: "file question mark arquivo documento pergunta duvida" },
  { n: "ic:file-scan", kw: "file scan arquivo documento" },
  { n: "ic:file-search", kw: "file search arquivo documento buscar procurar lupa" },
  { n: "ic:file-search-corner", kw: "file search corner arquivo documento buscar procurar lupa" },
  { n: "ic:file-signal", kw: "file signal arquivo documento" },
  { n: "ic:file-sliders", kw: "file sliders arquivo documento" },
  { n: "ic:file-spreadsheet", kw: "file spreadsheet arquivo documento" },
  { n: "ic:file-stack", kw: "file stack arquivo documento" },
  { n: "ic:file-symlink", kw: "file symlink arquivo documento" },
  { n: "ic:file-terminal", kw: "file terminal arquivo documento console comando" },
  { n: "ic:file-type", kw: "file type arquivo documento" },
  { n: "ic:file-type-corner", kw: "file type corner arquivo documento" },
  { n: "ic:file-up", kw: "file up arquivo documento" },
  { n: "ic:file-user", kw: "file user arquivo documento usuario pessoa" },
  { n: "ic:file-video-camera", kw: "file video camera arquivo documento video filme foto camera" },
  { n: "ic:file-volume", kw: "file volume arquivo documento" },
  { n: "ic:file-x", kw: "file x arquivo documento fechar cancelar" },
  { n: "ic:file-x-corner", kw: "file x corner arquivo documento fechar cancelar" },
  { n: "ic:files", kw: "files" },
  { n: "ic:film", kw: "film" },
  { n: "ic:fingerprint-pattern", kw: "fingerprint pattern" },
  { n: "ic:fire-extinguisher", kw: "fire extinguisher fogo chama" },
  { n: "ic:fish", kw: "fish peixe peixe" },
  { n: "ic:fish-off", kw: "fish off peixe" },
  { n: "ic:fish-symbol", kw: "fish symbol peixe" },
  { n: "ic:fishing-hook", kw: "fishing hook" },
  { n: "ic:fishing-rod", kw: "fishing rod" },
  { n: "ic:flag-off", kw: "flag off bandeira" },
  { n: "ic:flag-triangle-left", kw: "flag triangle left bandeira triangulo alerta" },
  { n: "ic:flag-triangle-right", kw: "flag triangle right bandeira triangulo alerta" },
  { n: "ic:flame", kw: "flame fogo chama fogo chama" },
  { n: "ic:flame-kindling", kw: "flame kindling fogo chama" },
  { n: "ic:flashlight", kw: "flashlight" },
  { n: "ic:flashlight-off", kw: "flashlight off" },
  { n: "ic:flask-conical", kw: "flask conical" },
  { n: "ic:flask-conical-off", kw: "flask conical off" },
  { n: "ic:flask-round", kw: "flask round" },
  { n: "ic:flip-horizontal-2", kw: "flip horizontal 2" },
  { n: "ic:flip-vertical-2", kw: "flip vertical 2" },
  { n: "ic:flower", kw: "flower flor flor" },
  { n: "ic:flower-2", kw: "flower 2 flor" },
  { n: "ic:focus", kw: "focus" },
  { n: "ic:fold-horizontal", kw: "fold horizontal" },
  { n: "ic:fold-vertical", kw: "fold vertical" },
  { n: "ic:folder-archive", kw: "folder archive pasta arquivo caixa" },
  { n: "ic:folder-bookmark", kw: "folder bookmark pasta marcador favorito" },
  { n: "ic:folder-check", kw: "folder check pasta certo confirmar ok" },
  { n: "ic:folder-clock", kw: "folder clock pasta relogio hora tempo" },
  { n: "ic:folder-closed", kw: "folder closed pasta" },
  { n: "ic:folder-code", kw: "folder code pasta codigo programar dev" },
  { n: "ic:folder-cog", kw: "folder cog pasta" },
  { n: "ic:folder-dot", kw: "folder dot pasta" },
  { n: "ic:folder-down", kw: "folder down pasta" },
  { n: "ic:folder-git", kw: "folder git pasta" },
  { n: "ic:folder-git-2", kw: "folder git 2 pasta" },
  { n: "ic:folder-heart", kw: "folder heart pasta coracao favorito" },
  { n: "ic:folder-input", kw: "folder input pasta" },
  { n: "ic:folder-kanban", kw: "folder kanban pasta" },
  { n: "ic:folder-key", kw: "folder key pasta chave" },
  { n: "ic:folder-lock", kw: "folder lock pasta cadeado bloquear seguranca" },
  { n: "ic:folder-minus", kw: "folder minus pasta menos remover" },
  { n: "ic:folder-open-dot", kw: "folder open dot pasta" },
  { n: "ic:folder-output", kw: "folder output pasta" },
  { n: "ic:folder-pen", kw: "folder pen pasta caneta" },
  { n: "ic:folder-plus", kw: "folder plus pasta mais adicionar novo" },
  { n: "ic:folder-root", kw: "folder root pasta" },
  { n: "ic:folder-search", kw: "folder search pasta buscar procurar lupa" },
  { n: "ic:folder-search-2", kw: "folder search 2 pasta buscar procurar lupa" },
  { n: "ic:folder-symlink", kw: "folder symlink pasta" },
  { n: "ic:folder-sync", kw: "folder sync pasta" },
  { n: "ic:folder-tree", kw: "folder tree pasta arvore planta" },
  { n: "ic:folder-up", kw: "folder up pasta" },
  { n: "ic:folder-x", kw: "folder x pasta fechar cancelar" },
  { n: "ic:folders", kw: "folders" },
  { n: "ic:footprints", kw: "footprints" },
  { n: "ic:forklift", kw: "forklift" },
  { n: "ic:form", kw: "form" },
  { n: "ic:forward", kw: "forward" },
  { n: "ic:frame", kw: "frame" },
  { n: "ic:frown", kw: "frown" },
  { n: "ic:fuel", kw: "fuel" },
  { n: "ic:fullscreen", kw: "fullscreen" },
  { n: "ic:funnel", kw: "funnel" },
  { n: "ic:funnel-plus", kw: "funnel plus mais adicionar novo" },
  { n: "ic:funnel-x", kw: "funnel x fechar cancelar" },
  { n: "ic:gallery-horizontal", kw: "gallery horizontal" },
  { n: "ic:gallery-horizontal-end", kw: "gallery horizontal end" },
  { n: "ic:gallery-thumbnails", kw: "gallery thumbnails" },
  { n: "ic:gallery-vertical", kw: "gallery vertical" },
  { n: "ic:gallery-vertical-end", kw: "gallery vertical end" },
  { n: "ic:gamepad", kw: "gamepad" },
  { n: "ic:gamepad-2", kw: "gamepad 2" },
  { n: "ic:gamepad-directional", kw: "gamepad directional" },
  { n: "ic:gauge", kw: "gauge" },
  { n: "ic:gavel", kw: "gavel" },
  { n: "ic:gem", kw: "gem" },
  { n: "ic:georgian-lari", kw: "georgian lari" },
  { n: "ic:ghost", kw: "ghost" },
  { n: "ic:git-branch", kw: "git branch" },
  { n: "ic:git-branch-minus", kw: "git branch minus menos remover" },
  { n: "ic:git-branch-plus", kw: "git branch plus mais adicionar novo" },
  { n: "ic:git-commit-horizontal", kw: "git commit horizontal" },
  { n: "ic:git-commit-vertical", kw: "git commit vertical" },
  { n: "ic:git-compare", kw: "git compare" },
  { n: "ic:git-compare-arrows", kw: "git compare arrows" },
  { n: "ic:git-fork", kw: "git fork" },
  { n: "ic:git-graph", kw: "git graph" },
  { n: "ic:git-merge", kw: "git merge" },
  { n: "ic:git-merge-conflict", kw: "git merge conflict" },
  { n: "ic:git-pull-request", kw: "git pull request" },
  { n: "ic:git-pull-request-arrow", kw: "git pull request arrow seta flecha" },
  { n: "ic:git-pull-request-closed", kw: "git pull request closed" },
  { n: "ic:git-pull-request-create", kw: "git pull request create" },
  { n: "ic:git-pull-request-create-arrow", kw: "git pull request create arrow seta flecha" },
  { n: "ic:git-pull-request-draft", kw: "git pull request draft" },
  { n: "ic:glass-water", kw: "glass water" },
  { n: "ic:glasses", kw: "glasses" },
  { n: "ic:globe-check", kw: "globe check mundo globo planeta certo confirmar ok" },
  { n: "ic:globe-lock", kw: "globe lock mundo globo planeta cadeado bloquear seguranca" },
  { n: "ic:globe-off", kw: "globe off mundo globo planeta" },
  { n: "ic:globe-x", kw: "globe x mundo globo planeta fechar cancelar" },
  { n: "ic:goal", kw: "goal" },
  { n: "ic:gpu", kw: "gpu" },
  { n: "ic:graduation-cap", kw: "graduation cap formatura escola educacao" },
  { n: "ic:grape", kw: "grape" },
  { n: "ic:grid-2x2", kw: "grid 2x2 grade painel" },
  { n: "ic:grid-2x2-check", kw: "grid 2x2 check grade painel certo confirmar ok" },
  { n: "ic:grid-2x2-plus", kw: "grid 2x2 plus grade painel mais adicionar novo" },
  { n: "ic:grid-2x2-x", kw: "grid 2x2 x grade painel fechar cancelar" },
  { n: "ic:grid-3x2", kw: "grid 3x2 grade painel" },
  { n: "ic:grid-3x3", kw: "grid 3x3 grade painel" },
  { n: "ic:grip", kw: "grip" },
  { n: "ic:grip-horizontal", kw: "grip horizontal" },
  { n: "ic:grip-vertical", kw: "grip vertical" },
  { n: "ic:group", kw: "group" },
  { n: "ic:guitar", kw: "guitar" },
  { n: "ic:ham", kw: "ham" },
  { n: "ic:hamburger", kw: "hamburger" },
  { n: "ic:hand", kw: "hand" },
  { n: "ic:hand-coins", kw: "hand coins moedas dinheiro" },
  { n: "ic:hand-fist", kw: "hand fist" },
  { n: "ic:hand-grab", kw: "hand grab" },
  { n: "ic:hand-heart", kw: "hand heart coracao favorito" },
  { n: "ic:hand-helping", kw: "hand helping" },
  { n: "ic:hand-metal", kw: "hand metal" },
  { n: "ic:hand-platter", kw: "hand platter" },
  { n: "ic:handbag", kw: "handbag" },
  { n: "ic:handshake", kw: "handshake" },
  { n: "ic:hard-drive", kw: "hard drive" },
  { n: "ic:hard-drive-download", kw: "hard drive download baixar" },
  { n: "ic:hard-drive-upload", kw: "hard drive upload enviar subir" },
  { n: "ic:hard-hat", kw: "hard hat" },
  { n: "ic:hash", kw: "hash" },
  { n: "ic:hat-glasses", kw: "hat glasses" },
  { n: "ic:haze", kw: "haze" },
  { n: "ic:hd", kw: "hd" },
  { n: "ic:hdmi-port", kw: "hdmi port" },
  { n: "ic:heading", kw: "heading" },
  { n: "ic:heading-1", kw: "heading 1" },
  { n: "ic:heading-2", kw: "heading 2" },
  { n: "ic:heading-3", kw: "heading 3" },
  { n: "ic:heading-4", kw: "heading 4" },
  { n: "ic:heading-5", kw: "heading 5" },
  { n: "ic:heading-6", kw: "heading 6" },
  { n: "ic:headphone-off", kw: "headphone off" },
  { n: "ic:headset", kw: "headset" },
  { n: "ic:heart-crack", kw: "heart crack coracao favorito" },
  { n: "ic:heart-handshake", kw: "heart handshake coracao favorito" },
  { n: "ic:heart-minus", kw: "heart minus coracao favorito menos remover" },
  { n: "ic:heart-off", kw: "heart off coracao favorito" },
  { n: "ic:heart-plus", kw: "heart plus coracao favorito mais adicionar novo" },
  { n: "ic:heart-pulse", kw: "heart pulse coracao favorito" },
  { n: "ic:heart-x", kw: "heart x coracao favorito fechar cancelar" },
  { n: "ic:heater", kw: "heater" },
  { n: "ic:helicopter", kw: "helicopter" },
  { n: "ic:hexagon", kw: "hexagon" },
  { n: "ic:highlighter", kw: "highlighter" },
  { n: "ic:history", kw: "history" },
  { n: "ic:hop", kw: "hop" },
  { n: "ic:hop-off", kw: "hop off" },
  { n: "ic:hospital", kw: "hospital" },
  { n: "ic:hotel", kw: "hotel" },
  { n: "ic:hourglass", kw: "hourglass ampulheta tempo ampulheta tempo" },
  { n: "ic:house", kw: "house casa inicio casa inicio" },
  { n: "ic:house-heart", kw: "house heart casa inicio coracao favorito" },
  { n: "ic:house-plug", kw: "house plug casa inicio" },
  { n: "ic:house-plus", kw: "house plus casa inicio mais adicionar novo" },
  { n: "ic:house-wifi", kw: "house wifi casa inicio internet rede sinal" },
  { n: "ic:ice-cream-bowl", kw: "ice cream bowl" },
  { n: "ic:ice-cream-cone", kw: "ice cream cone" },
  { n: "ic:id-card", kw: "id card cartao" },
  { n: "ic:id-card-lanyard", kw: "id card lanyard cartao" },
  { n: "ic:image-down", kw: "image down imagem foto" },
  { n: "ic:image-minus", kw: "image minus imagem foto menos remover" },
  { n: "ic:image-off", kw: "image off imagem foto" },
  { n: "ic:image-play", kw: "image play imagem foto reproduzir tocar" },
  { n: "ic:image-plus", kw: "image plus imagem foto mais adicionar novo" },
  { n: "ic:image-up", kw: "image up imagem foto" },
  { n: "ic:image-upscale", kw: "image upscale imagem foto" },
  { n: "ic:images", kw: "images" },
  { n: "ic:import", kw: "import" },
  { n: "ic:indian-rupee", kw: "indian rupee" },
  { n: "ic:infinity", kw: "infinity" },
  { n: "ic:inspection-panel", kw: "inspection panel" },
  { n: "ic:italic", kw: "italic" },
  { n: "ic:iteration-ccw", kw: "iteration ccw" },
  { n: "ic:iteration-cw", kw: "iteration cw" },
  { n: "ic:japanese-yen", kw: "japanese yen" },
  { n: "ic:joystick", kw: "joystick" },
  { n: "ic:kanban", kw: "kanban" },
  { n: "ic:kayak", kw: "kayak" },
  { n: "ic:key", kw: "key chave chave" },
  { n: "ic:key-round", kw: "key round chave" },
  { n: "ic:key-square", kw: "key square chave" },
  { n: "ic:keyboard", kw: "keyboard teclado teclado" },
  { n: "ic:keyboard-music", kw: "keyboard music teclado musica som" },
  { n: "ic:keyboard-off", kw: "keyboard off teclado" },
  { n: "ic:lamp", kw: "lamp lampada luz lampada luz" },
  { n: "ic:lamp-ceiling", kw: "lamp ceiling lampada luz" },
  { n: "ic:lamp-desk", kw: "lamp desk lampada luz" },
  { n: "ic:lamp-floor", kw: "lamp floor lampada luz" },
  { n: "ic:lamp-wall-down", kw: "lamp wall down lampada luz" },
  { n: "ic:lamp-wall-up", kw: "lamp wall up lampada luz" },
  { n: "ic:land-plot", kw: "land plot" },
  { n: "ic:landmark", kw: "landmark" },
  { n: "ic:languages", kw: "languages" },
  { n: "ic:laptop", kw: "laptop notebook computador notebook computador" },
  { n: "ic:laptop-minimal", kw: "laptop minimal notebook computador" },
  { n: "ic:laptop-minimal-check", kw: "laptop minimal check notebook computador certo confirmar ok" },
  { n: "ic:lasso", kw: "lasso" },
  { n: "ic:lasso-select", kw: "lasso select" },
  { n: "ic:laugh", kw: "laugh" },
  { n: "ic:layers", kw: "layers" },
  { n: "ic:layers-2", kw: "layers 2" },
  { n: "ic:layers-minus", kw: "layers minus menos remover" },
  { n: "ic:layers-plus", kw: "layers plus mais adicionar novo" },
  { n: "ic:layout-dashboard", kw: "layout dashboard" },
  { n: "ic:layout-grid", kw: "layout grid grade painel" },
  { n: "ic:layout-list", kw: "layout list lista" },
  { n: "ic:layout-panel-left", kw: "layout panel left" },
  { n: "ic:layout-panel-top", kw: "layout panel top" },
  { n: "ic:layout-template", kw: "layout template" },
  { n: "ic:leafy-green", kw: "leafy green" },
  { n: "ic:lectern", kw: "lectern" },
  { n: "ic:lens-concave", kw: "lens concave" },
  { n: "ic:lens-convex", kw: "lens convex" },
  { n: "ic:library", kw: "library" },
  { n: "ic:library-big", kw: "library big" },
  { n: "ic:life-buoy", kw: "life buoy" },
  { n: "ic:ligature", kw: "ligature" },
  { n: "ic:lightbulb-off", kw: "lightbulb off ideia lampada luz" },
  { n: "ic:line-dot-right-horizontal", kw: "line dot right horizontal" },
  { n: "ic:line-squiggle", kw: "line squiggle" },
  { n: "ic:line-style", kw: "line style" },
  { n: "ic:link-2", kw: "link 2 link corrente url" },
  { n: "ic:link-2-off", kw: "link 2 off link corrente url" },
  { n: "ic:list-check", kw: "list check lista certo confirmar ok" },
  { n: "ic:list-checks", kw: "list checks lista" },
  { n: "ic:list-chevrons-down-up", kw: "list chevrons down up lista" },
  { n: "ic:list-chevrons-up-down", kw: "list chevrons up down lista" },
  { n: "ic:list-collapse", kw: "list collapse lista" },
  { n: "ic:list-end", kw: "list end lista" },
  { n: "ic:list-filter", kw: "list filter lista filtro funil" },
  { n: "ic:list-filter-plus", kw: "list filter plus lista filtro funil mais adicionar novo" },
  { n: "ic:list-indent-decrease", kw: "list indent decrease lista" },
  { n: "ic:list-indent-increase", kw: "list indent increase lista" },
  { n: "ic:list-minus", kw: "list minus lista menos remover" },
  { n: "ic:list-music", kw: "list music lista musica som" },
  { n: "ic:list-ordered", kw: "list ordered lista" },
  { n: "ic:list-plus", kw: "list plus lista mais adicionar novo" },
  { n: "ic:list-restart", kw: "list restart lista" },
  { n: "ic:list-sort-ascending", kw: "list sort ascending lista" },
  { n: "ic:list-sort-descending", kw: "list sort descending lista" },
  { n: "ic:list-start", kw: "list start lista" },
  { n: "ic:list-todo", kw: "list todo lista" },
  { n: "ic:list-tree", kw: "list tree lista arvore planta" },
  { n: "ic:list-video", kw: "list video lista video filme" },
  { n: "ic:list-x", kw: "list x lista fechar cancelar" },
  { n: "ic:loader", kw: "loader" },
  { n: "ic:loader-circle", kw: "loader circle" },
  { n: "ic:loader-pinwheel", kw: "loader pinwheel" },
  { n: "ic:locate", kw: "locate" },
  { n: "ic:locate-fixed", kw: "locate fixed" },
  { n: "ic:locate-off", kw: "locate off" },
  { n: "ic:lock-keyhole", kw: "lock keyhole cadeado bloquear seguranca" },
  { n: "ic:lock-keyhole-open", kw: "lock keyhole open cadeado bloquear seguranca" },
  { n: "ic:lock-open", kw: "lock open cadeado bloquear seguranca" },
  { n: "ic:log-in", kw: "log in" },
  { n: "ic:log-out", kw: "log out" },
  { n: "ic:logs", kw: "logs" },
  { n: "ic:lollipop", kw: "lollipop" },
  { n: "ic:luggage", kw: "luggage" },
  { n: "ic:magnet", kw: "magnet" },
  { n: "ic:mail-check", kw: "mail check email correio certo confirmar ok" },
  { n: "ic:mail-minus", kw: "mail minus email correio menos remover" },
  { n: "ic:mail-open", kw: "mail open email correio" },
  { n: "ic:mail-plus", kw: "mail plus email correio mais adicionar novo" },
  { n: "ic:mail-question-mark", kw: "mail question mark email correio pergunta duvida" },
  { n: "ic:mail-search", kw: "mail search email correio buscar procurar lupa" },
  { n: "ic:mail-warning", kw: "mail warning email correio" },
  { n: "ic:mail-x", kw: "mail x email correio fechar cancelar" },
  { n: "ic:mailbox", kw: "mailbox" },
  { n: "ic:mails", kw: "mails" },
  { n: "ic:map-minus", kw: "map minus mapa menos remover" },
  { n: "ic:map-pin-check", kw: "map pin check mapa alfinete fixar certo confirmar ok" },
  { n: "ic:map-pin-check-inside", kw: "map pin check inside mapa alfinete fixar certo confirmar ok" },
  { n: "ic:map-pin-house", kw: "map pin house mapa alfinete fixar casa inicio" },
  { n: "ic:map-pin-minus", kw: "map pin minus mapa alfinete fixar menos remover" },
  { n: "ic:map-pin-minus-inside", kw: "map pin minus inside mapa alfinete fixar menos remover" },
  { n: "ic:map-pin-off", kw: "map pin off mapa alfinete fixar" },
  { n: "ic:map-pin-pen", kw: "map pin pen mapa alfinete fixar caneta" },
  { n: "ic:map-pin-plus", kw: "map pin plus mapa alfinete fixar mais adicionar novo" },
  { n: "ic:map-pin-plus-inside", kw: "map pin plus inside mapa alfinete fixar mais adicionar novo" },
  { n: "ic:map-pin-search", kw: "map pin search mapa alfinete fixar buscar procurar lupa" },
  { n: "ic:map-pin-x", kw: "map pin x mapa alfinete fixar fechar cancelar" },
  { n: "ic:map-pin-x-inside", kw: "map pin x inside mapa alfinete fixar fechar cancelar" },
  { n: "ic:map-pinned", kw: "map pinned mapa" },
  { n: "ic:map-plus", kw: "map plus mapa mais adicionar novo" },
  { n: "ic:mars", kw: "mars" },
  { n: "ic:mars-stroke", kw: "mars stroke" },
  { n: "ic:martini", kw: "martini" },
  { n: "ic:maximize", kw: "maximize" },
  { n: "ic:maximize-2", kw: "maximize 2" },
  { n: "ic:medal", kw: "medal" },
  { n: "ic:megaphone", kw: "megaphone" },
  { n: "ic:megaphone-off", kw: "megaphone off" },
  { n: "ic:meh", kw: "meh" },
  { n: "ic:memory-stick", kw: "memory stick" },
  { n: "ic:merge", kw: "merge" },
  { n: "ic:message-circle", kw: "message circle mensagem chat conversa" },
  { n: "ic:message-circle-check", kw: "message circle check mensagem chat conversa certo confirmar ok" },
  { n: "ic:message-circle-code", kw: "message circle code mensagem chat conversa codigo programar dev" },
  { n: "ic:message-circle-dashed", kw: "message circle dashed mensagem chat conversa" },
  { n: "ic:message-circle-heart", kw: "message circle heart mensagem chat conversa coracao favorito" },
  { n: "ic:message-circle-more", kw: "message circle more mensagem chat conversa" },
  { n: "ic:message-circle-off", kw: "message circle off mensagem chat conversa" },
  { n: "ic:message-circle-plus", kw: "message circle plus mensagem chat conversa mais adicionar novo" },
  { n: "ic:message-circle-question-mark", kw: "message circle question mark mensagem chat conversa pergunta duvida" },
  { n: "ic:message-circle-reply", kw: "message circle reply mensagem chat conversa" },
  { n: "ic:message-circle-warning", kw: "message circle warning mensagem chat conversa" },
  { n: "ic:message-circle-x", kw: "message circle x mensagem chat conversa fechar cancelar" },
  { n: "ic:message-square", kw: "message square mensagem chat conversa" },
  { n: "ic:message-square-check", kw: "message square check mensagem chat conversa certo confirmar ok" },
  { n: "ic:message-square-code", kw: "message square code mensagem chat conversa codigo programar dev" },
  { n: "ic:message-square-dashed", kw: "message square dashed mensagem chat conversa" },
  { n: "ic:message-square-diff", kw: "message square diff mensagem chat conversa" },
  { n: "ic:message-square-dot", kw: "message square dot mensagem chat conversa" },
  { n: "ic:message-square-heart", kw: "message square heart mensagem chat conversa coracao favorito" },
  { n: "ic:message-square-lock", kw: "message square lock mensagem chat conversa cadeado bloquear seguranca" },
  { n: "ic:message-square-more", kw: "message square more mensagem chat conversa" },
  { n: "ic:message-square-off", kw: "message square off mensagem chat conversa" },
  { n: "ic:message-square-plus", kw: "message square plus mensagem chat conversa mais adicionar novo" },
  { n: "ic:message-square-quote", kw: "message square quote mensagem chat conversa" },
  { n: "ic:message-square-reply", kw: "message square reply mensagem chat conversa" },
  { n: "ic:message-square-share", kw: "message square share mensagem chat conversa compartilhar" },
  { n: "ic:message-square-text", kw: "message square text mensagem chat conversa" },
  { n: "ic:message-square-warning", kw: "message square warning mensagem chat conversa" },
  { n: "ic:message-square-x", kw: "message square x mensagem chat conversa fechar cancelar" },
  { n: "ic:messages-square", kw: "messages square" },
  { n: "ic:metronome", kw: "metronome" },
  { n: "ic:mic-off", kw: "mic off microfone voz" },
  { n: "ic:mic-vocal", kw: "mic vocal microfone voz" },
  { n: "ic:microchip", kw: "microchip" },
  { n: "ic:microscope", kw: "microscope" },
  { n: "ic:microwave", kw: "microwave" },
  { n: "ic:milestone", kw: "milestone" },
  { n: "ic:milk", kw: "milk" },
  { n: "ic:milk-off", kw: "milk off" },
  { n: "ic:minimize", kw: "minimize" },
  { n: "ic:minimize-2", kw: "minimize 2" },
  { n: "ic:mirror-rectangular", kw: "mirror rectangular" },
  { n: "ic:mirror-round", kw: "mirror round" },
  { n: "ic:monitor-check", kw: "monitor check tela computador certo confirmar ok" },
  { n: "ic:monitor-cloud", kw: "monitor cloud tela computador nuvem" },
  { n: "ic:monitor-cog", kw: "monitor cog tela computador" },
  { n: "ic:monitor-dot", kw: "monitor dot tela computador" },
  { n: "ic:monitor-down", kw: "monitor down tela computador" },
  { n: "ic:monitor-off", kw: "monitor off tela computador" },
  { n: "ic:monitor-pause", kw: "monitor pause tela computador pausa" },
  { n: "ic:monitor-play", kw: "monitor play tela computador reproduzir tocar" },
  { n: "ic:monitor-smartphone", kw: "monitor smartphone tela computador celular telefone" },
  { n: "ic:monitor-speaker", kw: "monitor speaker tela computador" },
  { n: "ic:monitor-stop", kw: "monitor stop tela computador" },
  { n: "ic:monitor-up", kw: "monitor up tela computador" },
  { n: "ic:monitor-x", kw: "monitor x tela computador fechar cancelar" },
  { n: "ic:moon-star", kw: "moon star lua noite estrela favorito" },
  { n: "ic:motorbike", kw: "motorbike" },
  { n: "ic:mountain", kw: "mountain" },
  { n: "ic:mountain-snow", kw: "mountain snow" },
  { n: "ic:mouse", kw: "mouse mouse mouse" },
  { n: "ic:mouse-left", kw: "mouse left mouse" },
  { n: "ic:mouse-off", kw: "mouse off mouse" },
  { n: "ic:mouse-pointer", kw: "mouse pointer mouse" },
  { n: "ic:mouse-pointer-2", kw: "mouse pointer 2 mouse" },
  { n: "ic:mouse-pointer-2-off", kw: "mouse pointer 2 off mouse" },
  { n: "ic:mouse-pointer-ban", kw: "mouse pointer ban mouse" },
  { n: "ic:mouse-pointer-click", kw: "mouse pointer click mouse" },
  { n: "ic:mouse-right", kw: "mouse right mouse" },
  { n: "ic:move", kw: "move" },
  { n: "ic:move-3d", kw: "move 3d" },
  { n: "ic:move-diagonal", kw: "move diagonal" },
  { n: "ic:move-diagonal-2", kw: "move diagonal 2" },
  { n: "ic:move-down", kw: "move down" },
  { n: "ic:move-down-left", kw: "move down left" },
  { n: "ic:move-down-right", kw: "move down right" },
  { n: "ic:move-horizontal", kw: "move horizontal" },
  { n: "ic:move-left", kw: "move left" },
  { n: "ic:move-right", kw: "move right" },
  { n: "ic:move-up", kw: "move up" },
  { n: "ic:move-up-left", kw: "move up left" },
  { n: "ic:move-up-right", kw: "move up right" },
  { n: "ic:move-vertical", kw: "move vertical" },
  { n: "ic:music-2", kw: "music 2 musica som" },
  { n: "ic:music-3", kw: "music 3 musica som" },
  { n: "ic:music-4", kw: "music 4 musica som" },
  { n: "ic:navigation", kw: "navigation" },
  { n: "ic:navigation-2", kw: "navigation 2" },
  { n: "ic:navigation-2-off", kw: "navigation 2 off" },
  { n: "ic:navigation-off", kw: "navigation off" },
  { n: "ic:network", kw: "network" },
  { n: "ic:newspaper", kw: "newspaper" },
  { n: "ic:nfc", kw: "nfc" },
  { n: "ic:non-binary", kw: "non binary" },
  { n: "ic:notebook", kw: "notebook" },
  { n: "ic:notebook-pen", kw: "notebook pen caneta" },
  { n: "ic:notebook-tabs", kw: "notebook tabs" },
  { n: "ic:notebook-text", kw: "notebook text" },
  { n: "ic:notepad-text", kw: "notepad text" },
  { n: "ic:notepad-text-dashed", kw: "notepad text dashed" },
  { n: "ic:nut", kw: "nut" },
  { n: "ic:nut-off", kw: "nut off" },
  { n: "ic:octagon", kw: "octagon" },
  { n: "ic:octagon-alert", kw: "octagon alert alerta aviso atencao" },
  { n: "ic:octagon-minus", kw: "octagon minus menos remover" },
  { n: "ic:octagon-pause", kw: "octagon pause pausa" },
  { n: "ic:octagon-x", kw: "octagon x fechar cancelar" },
  { n: "ic:omega", kw: "omega" },
  { n: "ic:option", kw: "option" },
  { n: "ic:orbit", kw: "orbit" },
  { n: "ic:origami", kw: "origami" },
  { n: "ic:package", kw: "package pacote caixa entrega pacote caixa entrega" },
  { n: "ic:package-2", kw: "package 2 pacote caixa entrega" },
  { n: "ic:package-check", kw: "package check pacote caixa entrega certo confirmar ok" },
  { n: "ic:package-minus", kw: "package minus pacote caixa entrega menos remover" },
  { n: "ic:package-open", kw: "package open pacote caixa entrega" },
  { n: "ic:package-plus", kw: "package plus pacote caixa entrega mais adicionar novo" },
  { n: "ic:package-search", kw: "package search pacote caixa entrega buscar procurar lupa" },
  { n: "ic:package-x", kw: "package x pacote caixa entrega fechar cancelar" },
  { n: "ic:paint-bucket", kw: "paint bucket tinta pintar" },
  { n: "ic:paint-roller", kw: "paint roller tinta pintar" },
  { n: "ic:paintbrush", kw: "paintbrush" },
  { n: "ic:paintbrush-vertical", kw: "paintbrush vertical" },
  { n: "ic:palette", kw: "palette paleta cores paleta cores" },
  { n: "ic:panda", kw: "panda" },
  { n: "ic:panel-bottom", kw: "panel bottom" },
  { n: "ic:panel-bottom-close", kw: "panel bottom close" },
  { n: "ic:panel-bottom-dashed", kw: "panel bottom dashed" },
  { n: "ic:panel-bottom-open", kw: "panel bottom open" },
  { n: "ic:panel-left", kw: "panel left" },
  { n: "ic:panel-left-close", kw: "panel left close" },
  { n: "ic:panel-left-dashed", kw: "panel left dashed" },
  { n: "ic:panel-left-open", kw: "panel left open" },
  { n: "ic:panel-left-right-dashed", kw: "panel left right dashed" },
  { n: "ic:panel-right", kw: "panel right" },
  { n: "ic:panel-right-close", kw: "panel right close" },
  { n: "ic:panel-right-dashed", kw: "panel right dashed" },
  { n: "ic:panel-right-open", kw: "panel right open" },
  { n: "ic:panel-top", kw: "panel top" },
  { n: "ic:panel-top-bottom-dashed", kw: "panel top bottom dashed" },
  { n: "ic:panel-top-close", kw: "panel top close" },
  { n: "ic:panel-top-dashed", kw: "panel top dashed" },
  { n: "ic:panel-top-open", kw: "panel top open" },
  { n: "ic:panels-left-bottom", kw: "panels left bottom" },
  { n: "ic:panels-right-bottom", kw: "panels right bottom" },
  { n: "ic:panels-top-left", kw: "panels top left" },
  { n: "ic:parasol", kw: "parasol" },
  { n: "ic:parentheses", kw: "parentheses" },
  { n: "ic:parking-meter", kw: "parking meter" },
  { n: "ic:party-popper", kw: "party popper" },
  { n: "ic:pause", kw: "pause pausa pausa" },
  { n: "ic:paw-print", kw: "paw print" },
  { n: "ic:pc-case", kw: "pc case" },
  { n: "ic:pen-line", kw: "pen line caneta" },
  { n: "ic:pen-off", kw: "pen off caneta" },
  { n: "ic:pen-tool", kw: "pen tool caneta" },
  { n: "ic:pencil", kw: "pencil lapis editar lapis editar" },
  { n: "ic:pencil-line", kw: "pencil line lapis editar" },
  { n: "ic:pencil-off", kw: "pencil off lapis editar" },
  { n: "ic:pencil-ruler", kw: "pencil ruler lapis editar" },
  { n: "ic:pencil-sparkles", kw: "pencil sparkles lapis editar" },
  { n: "ic:pentagon", kw: "pentagon" },
  { n: "ic:percent", kw: "percent" },
  { n: "ic:person-standing", kw: "person standing" },
  { n: "ic:philippine-peso", kw: "philippine peso" },
  { n: "ic:phone-call", kw: "phone call telefone" },
  { n: "ic:phone-forwarded", kw: "phone forwarded telefone" },
  { n: "ic:phone-incoming", kw: "phone incoming telefone" },
  { n: "ic:phone-missed", kw: "phone missed telefone" },
  { n: "ic:phone-off", kw: "phone off telefone" },
  { n: "ic:phone-outgoing", kw: "phone outgoing telefone" },
  { n: "ic:pi", kw: "pi" },
  { n: "ic:piano", kw: "piano" },
  { n: "ic:pickaxe", kw: "pickaxe" },
  { n: "ic:picture-in-picture", kw: "picture in picture" },
  { n: "ic:picture-in-picture-2", kw: "picture in picture 2" },
  { n: "ic:piggy-bank", kw: "piggy bank" },
  { n: "ic:pilcrow", kw: "pilcrow" },
  { n: "ic:pilcrow-left", kw: "pilcrow left" },
  { n: "ic:pilcrow-right", kw: "pilcrow right" },
  { n: "ic:pill", kw: "pill" },
  { n: "ic:pill-bottle", kw: "pill bottle" },
  { n: "ic:pin-off", kw: "pin off alfinete fixar" },
  { n: "ic:pipette", kw: "pipette" },
  { n: "ic:pizza", kw: "pizza pizza comida pizza comida" },
  { n: "ic:plane-landing", kw: "plane landing aviao voo viagem" },
  { n: "ic:plane-takeoff", kw: "plane takeoff aviao voo viagem" },
  { n: "ic:play-off", kw: "play off reproduzir tocar" },
  { n: "ic:plug", kw: "plug" },
  { n: "ic:plug-2", kw: "plug 2" },
  { n: "ic:plug-zap", kw: "plug zap raio energia rapido" },
  { n: "ic:pocket-knife", kw: "pocket knife" },
  { n: "ic:podcast", kw: "podcast" },
  { n: "ic:podium", kw: "podium" },
  { n: "ic:pointer", kw: "pointer" },
  { n: "ic:pointer-off", kw: "pointer off" },
  { n: "ic:popcorn", kw: "popcorn" },
  { n: "ic:popsicle", kw: "popsicle" },
  { n: "ic:pound-sterling", kw: "pound sterling" },
  { n: "ic:power", kw: "power" },
  { n: "ic:power-off", kw: "power off" },
  { n: "ic:presentation", kw: "presentation" },
  { n: "ic:printer", kw: "printer impressora impressora" },
  { n: "ic:printer-check", kw: "printer check impressora certo confirmar ok" },
  { n: "ic:printer-x", kw: "printer x impressora fechar cancelar" },
  { n: "ic:projector", kw: "projector" },
  { n: "ic:proportions", kw: "proportions" },
  { n: "ic:puzzle", kw: "puzzle" },
  { n: "ic:pyramid", kw: "pyramid" },
  { n: "ic:qr-code", kw: "qr code codigo programar dev" },
  { n: "ic:quote", kw: "quote" },
  { n: "ic:rabbit", kw: "rabbit" },
  { n: "ic:radar", kw: "radar" },
  { n: "ic:radiation", kw: "radiation" },
  { n: "ic:radical", kw: "radical" },
  { n: "ic:radio", kw: "radio" },
  { n: "ic:radio-off", kw: "radio off" },
  { n: "ic:radio-receiver", kw: "radio receiver" },
  { n: "ic:radio-tower", kw: "radio tower" },
  { n: "ic:radius", kw: "radius" },
  { n: "ic:rainbow", kw: "rainbow" },
  { n: "ic:rat", kw: "rat" },
  { n: "ic:ratio", kw: "ratio" },
  { n: "ic:receipt", kw: "receipt" },
  { n: "ic:receipt-cent", kw: "receipt cent" },
  { n: "ic:receipt-euro", kw: "receipt euro" },
  { n: "ic:receipt-indian-rupee", kw: "receipt indian rupee" },
  { n: "ic:receipt-japanese-yen", kw: "receipt japanese yen" },
  { n: "ic:receipt-pound-sterling", kw: "receipt pound sterling" },
  { n: "ic:receipt-russian-ruble", kw: "receipt russian ruble" },
  { n: "ic:receipt-swiss-franc", kw: "receipt swiss franc" },
  { n: "ic:receipt-text", kw: "receipt text" },
  { n: "ic:receipt-turkish-lira", kw: "receipt turkish lira" },
  { n: "ic:rectangle-circle", kw: "rectangle circle" },
  { n: "ic:rectangle-ellipsis", kw: "rectangle ellipsis" },
  { n: "ic:rectangle-goggles", kw: "rectangle goggles" },
  { n: "ic:rectangle-horizontal", kw: "rectangle horizontal" },
  { n: "ic:rectangle-vertical", kw: "rectangle vertical" },
  { n: "ic:recycle", kw: "recycle" },
  { n: "ic:redo", kw: "redo" },
  { n: "ic:redo-2", kw: "redo 2" },
  { n: "ic:redo-dot", kw: "redo dot" },
  { n: "ic:refresh-ccw", kw: "refresh ccw atualizar recarregar" },
  { n: "ic:refresh-ccw-dot", kw: "refresh ccw dot atualizar recarregar" },
  { n: "ic:refresh-cw", kw: "refresh cw atualizar recarregar" },
  { n: "ic:refresh-cw-off", kw: "refresh cw off atualizar recarregar" },
  { n: "ic:refrigerator", kw: "refrigerator" },
  { n: "ic:regex", kw: "regex" },
  { n: "ic:remove-formatting", kw: "remove formatting" },
  { n: "ic:repeat", kw: "repeat" },
  { n: "ic:repeat-1", kw: "repeat 1" },
  { n: "ic:repeat-2", kw: "repeat 2" },
  { n: "ic:repeat-off", kw: "repeat off" },
  { n: "ic:replace", kw: "replace" },
  { n: "ic:replace-all", kw: "replace all" },
  { n: "ic:reply", kw: "reply" },
  { n: "ic:reply-all", kw: "reply all" },
  { n: "ic:rewind", kw: "rewind" },
  { n: "ic:ribbon", kw: "ribbon" },
  { n: "ic:road", kw: "road" },
  { n: "ic:rocking-chair", kw: "rocking chair" },
  { n: "ic:roller-coaster", kw: "roller coaster" },
  { n: "ic:rose", kw: "rose" },
  { n: "ic:rotate-3d", kw: "rotate 3d" },
  { n: "ic:rotate-ccw", kw: "rotate ccw" },
  { n: "ic:rotate-ccw-key", kw: "rotate ccw key chave" },
  { n: "ic:rotate-ccw-square", kw: "rotate ccw square" },
  { n: "ic:rotate-cw", kw: "rotate cw" },
  { n: "ic:rotate-cw-square", kw: "rotate cw square" },
  { n: "ic:route", kw: "route" },
  { n: "ic:route-off", kw: "route off" },
  { n: "ic:router", kw: "router" },
  { n: "ic:rows-2", kw: "rows 2" },
  { n: "ic:rows-3", kw: "rows 3" },
  { n: "ic:rows-4", kw: "rows 4" },
  { n: "ic:rss", kw: "rss" },
  { n: "ic:ruler", kw: "ruler" },
  { n: "ic:ruler-dimension-line", kw: "ruler dimension line" },
  { n: "ic:russian-ruble", kw: "russian ruble" },
  { n: "ic:sailboat", kw: "sailboat" },
  { n: "ic:salad", kw: "salad" },
  { n: "ic:sandwich", kw: "sandwich" },
  { n: "ic:satellite", kw: "satellite" },
  { n: "ic:satellite-dish", kw: "satellite dish" },
  { n: "ic:saudi-riyal", kw: "saudi riyal" },
  { n: "ic:save-all", kw: "save all salvar" },
  { n: "ic:save-check", kw: "save check salvar certo confirmar ok" },
  { n: "ic:save-off", kw: "save off salvar" },
  { n: "ic:save-pen", kw: "save pen salvar caneta" },
  { n: "ic:save-plus", kw: "save plus salvar mais adicionar novo" },
  { n: "ic:scale", kw: "scale" },
  { n: "ic:scale-3d", kw: "scale 3d" },
  { n: "ic:scaling", kw: "scaling" },
  { n: "ic:scan", kw: "scan" },
  { n: "ic:scan-barcode", kw: "scan barcode" },
  { n: "ic:scan-eye", kw: "scan eye olho ver visualizar" },
  { n: "ic:scan-face", kw: "scan face" },
  { n: "ic:scan-heart", kw: "scan heart coracao favorito" },
  { n: "ic:scan-line", kw: "scan line" },
  { n: "ic:scan-qr-code", kw: "scan qr code codigo programar dev" },
  { n: "ic:scan-search", kw: "scan search buscar procurar lupa" },
  { n: "ic:scan-text", kw: "scan text" },
  { n: "ic:school", kw: "school escola educacao escola educacao" },
  { n: "ic:scissors-line-dashed", kw: "scissors line dashed tesoura cortar" },
  { n: "ic:scooter", kw: "scooter" },
  { n: "ic:screen-share", kw: "screen share compartilhar" },
  { n: "ic:screen-share-off", kw: "screen share off compartilhar" },
  { n: "ic:scroll", kw: "scroll" },
  { n: "ic:scroll-text", kw: "scroll text" },
  { n: "ic:search-alert", kw: "search alert buscar procurar lupa alerta aviso atencao" },
  { n: "ic:search-check", kw: "search check buscar procurar lupa certo confirmar ok" },
  { n: "ic:search-code", kw: "search code buscar procurar lupa codigo programar dev" },
  { n: "ic:search-slash", kw: "search slash buscar procurar lupa" },
  { n: "ic:search-x", kw: "search x buscar procurar lupa fechar cancelar" },
  { n: "ic:section", kw: "section" },
  { n: "ic:send-horizontal", kw: "send horizontal enviar" },
  { n: "ic:send-to-back", kw: "send to back enviar" },
  { n: "ic:separator-horizontal", kw: "separator horizontal" },
  { n: "ic:separator-vertical", kw: "separator vertical" },
  { n: "ic:server-cog", kw: "server cog servidor" },
  { n: "ic:server-crash", kw: "server crash servidor" },
  { n: "ic:server-off", kw: "server off servidor" },
  { n: "ic:settings-2", kw: "settings 2 config ajustes engrenagem" },
  { n: "ic:shapes", kw: "shapes" },
  { n: "ic:share-2", kw: "share 2 compartilhar" },
  { n: "ic:sheet", kw: "sheet" },
  { n: "ic:shell", kw: "shell" },
  { n: "ic:shelving-unit", kw: "shelving unit" },
  { n: "ic:shield-alert", kw: "shield alert escudo seguranca protecao alerta aviso atencao" },
  { n: "ic:shield-ban", kw: "shield ban escudo seguranca protecao" },
  { n: "ic:shield-check", kw: "shield check escudo seguranca protecao certo confirmar ok" },
  { n: "ic:shield-cog", kw: "shield cog escudo seguranca protecao" },
  { n: "ic:shield-cog-corner", kw: "shield cog corner escudo seguranca protecao" },
  { n: "ic:shield-ellipsis", kw: "shield ellipsis escudo seguranca protecao" },
  { n: "ic:shield-half", kw: "shield half escudo seguranca protecao" },
  { n: "ic:shield-minus", kw: "shield minus escudo seguranca protecao menos remover" },
  { n: "ic:shield-off", kw: "shield off escudo seguranca protecao" },
  { n: "ic:shield-plus", kw: "shield plus escudo seguranca protecao mais adicionar novo" },
  { n: "ic:shield-question-mark", kw: "shield question mark escudo seguranca protecao pergunta duvida" },
  { n: "ic:shield-user", kw: "shield user escudo seguranca protecao usuario pessoa" },
  { n: "ic:shield-x", kw: "shield x escudo seguranca protecao fechar cancelar" },
  { n: "ic:ship", kw: "ship" },
  { n: "ic:ship-wheel", kw: "ship wheel" },
  { n: "ic:shirt", kw: "shirt" },
  { n: "ic:shopping-bag", kw: "shopping bag compras loja sacola bolsa compras" },
  { n: "ic:shopping-basket", kw: "shopping basket compras loja" },
  { n: "ic:shopping-cart", kw: "shopping cart compras loja carrinho compras" },
  { n: "ic:shovel", kw: "shovel" },
  { n: "ic:shower-head", kw: "shower head" },
  { n: "ic:shredder", kw: "shredder" },
  { n: "ic:shrimp", kw: "shrimp" },
  { n: "ic:shrink", kw: "shrink" },
  { n: "ic:shrub", kw: "shrub" },
  { n: "ic:shuffle", kw: "shuffle" },
  { n: "ic:sigma", kw: "sigma" },
  { n: "ic:signal", kw: "signal" },
  { n: "ic:signal-high", kw: "signal high" },
  { n: "ic:signal-low", kw: "signal low" },
  { n: "ic:signal-medium", kw: "signal medium" },
  { n: "ic:signal-zero", kw: "signal zero" },
  { n: "ic:signature", kw: "signature" },
  { n: "ic:signpost", kw: "signpost" },
  { n: "ic:signpost-big", kw: "signpost big" },
  { n: "ic:siren", kw: "siren" },
  { n: "ic:skip-back", kw: "skip back" },
  { n: "ic:skip-forward", kw: "skip forward" },
  { n: "ic:skull", kw: "skull" },
  { n: "ic:slash", kw: "slash" },
  { n: "ic:slice", kw: "slice" },
  { n: "ic:sliders-horizontal", kw: "sliders horizontal" },
  { n: "ic:sliders-vertical", kw: "sliders vertical" },
  { n: "ic:smartphone-charging", kw: "smartphone charging celular telefone" },
  { n: "ic:smartphone-nfc", kw: "smartphone nfc celular telefone" },
  { n: "ic:smile-plus", kw: "smile plus sorriso feliz mais adicionar novo" },
  { n: "ic:snail", kw: "snail" },
  { n: "ic:snowflake", kw: "snowflake" },
  { n: "ic:soap-dispenser-droplet", kw: "soap dispenser droplet gota agua" },
  { n: "ic:sofa", kw: "sofa" },
  { n: "ic:solar-panel", kw: "solar panel" },
  { n: "ic:soup", kw: "soup" },
  { n: "ic:space", kw: "space" },
  { n: "ic:spade", kw: "spade" },
  { n: "ic:sparkle", kw: "sparkle" },
  { n: "ic:sparkles", kw: "sparkles" },
  { n: "ic:speaker", kw: "speaker" },
  { n: "ic:speech", kw: "speech" },
  { n: "ic:spell-check", kw: "spell check certo confirmar ok" },
  { n: "ic:spell-check-2", kw: "spell check 2 certo confirmar ok" },
  { n: "ic:spline", kw: "spline" },
  { n: "ic:spline-pointer", kw: "spline pointer" },
  { n: "ic:split", kw: "split" },
  { n: "ic:spool", kw: "spool" },
  { n: "ic:sport-shoe", kw: "sport shoe" },
  { n: "ic:spotlight", kw: "spotlight" },
  { n: "ic:spray-can", kw: "spray can" },
  { n: "ic:sprout", kw: "sprout" },
  { n: "ic:square", kw: "square" },
  { n: "ic:square-activity", kw: "square activity atividade pulso" },
  { n: "ic:square-arrow-down", kw: "square arrow down seta flecha" },
  { n: "ic:square-arrow-down-left", kw: "square arrow down left seta flecha" },
  { n: "ic:square-arrow-down-right", kw: "square arrow down right seta flecha" },
  { n: "ic:square-arrow-left", kw: "square arrow left seta flecha" },
  { n: "ic:square-arrow-out-down-left", kw: "square arrow out down left seta flecha" },
  { n: "ic:square-arrow-out-down-right", kw: "square arrow out down right seta flecha" },
  { n: "ic:square-arrow-out-up-left", kw: "square arrow out up left seta flecha" },
  { n: "ic:square-arrow-out-up-right", kw: "square arrow out up right seta flecha" },
  { n: "ic:square-arrow-right", kw: "square arrow right seta flecha" },
  { n: "ic:square-arrow-right-enter", kw: "square arrow right enter seta flecha" },
  { n: "ic:square-arrow-right-exit", kw: "square arrow right exit seta flecha" },
  { n: "ic:square-arrow-up", kw: "square arrow up seta flecha" },
  { n: "ic:square-arrow-up-left", kw: "square arrow up left seta flecha" },
  { n: "ic:square-arrow-up-right", kw: "square arrow up right seta flecha" },
  { n: "ic:square-asterisk", kw: "square asterisk" },
  { n: "ic:square-bottom-dashed-scissors", kw: "square bottom dashed scissors tesoura cortar" },
  { n: "ic:square-centerline-dashed-horizontal", kw: "square centerline dashed horizontal" },
  { n: "ic:square-centerline-dashed-vertical", kw: "square centerline dashed vertical" },
  { n: "ic:square-chart-gantt", kw: "square chart gantt grafico dados" },
  { n: "ic:square-check", kw: "square check certo confirmar ok" },
  { n: "ic:square-check-big", kw: "square check big certo confirmar ok" },
  { n: "ic:square-chevron-down", kw: "square chevron down" },
  { n: "ic:square-chevron-left", kw: "square chevron left" },
  { n: "ic:square-chevron-right", kw: "square chevron right" },
  { n: "ic:square-chevron-up", kw: "square chevron up" },
  { n: "ic:square-code", kw: "square code codigo programar dev" },
  { n: "ic:square-dashed", kw: "square dashed" },
  { n: "ic:square-dashed-bottom", kw: "square dashed bottom" },
  { n: "ic:square-dashed-bottom-code", kw: "square dashed bottom code codigo programar dev" },
  { n: "ic:square-dashed-kanban", kw: "square dashed kanban" },
  { n: "ic:square-dashed-mouse-pointer", kw: "square dashed mouse pointer mouse" },
  { n: "ic:square-dashed-text", kw: "square dashed text" },
  { n: "ic:square-dashed-top-solid", kw: "square dashed top solid" },
  { n: "ic:square-divide", kw: "square divide" },
  { n: "ic:square-dot", kw: "square dot" },
  { n: "ic:square-equal", kw: "square equal" },
  { n: "ic:square-function", kw: "square function" },
  { n: "ic:square-kanban", kw: "square kanban" },
  { n: "ic:square-library", kw: "square library" },
  { n: "ic:square-m", kw: "square m" },
  { n: "ic:square-menu", kw: "square menu menu lista opcoes" },
  { n: "ic:square-minus", kw: "square minus menos remover" },
  { n: "ic:square-mouse-pointer", kw: "square mouse pointer mouse" },
  { n: "ic:square-parking", kw: "square parking" },
  { n: "ic:square-parking-off", kw: "square parking off" },
  { n: "ic:square-pause", kw: "square pause pausa" },
  { n: "ic:square-pen", kw: "square pen caneta" },
  { n: "ic:square-percent", kw: "square percent" },
  { n: "ic:square-pi", kw: "square pi" },
  { n: "ic:square-pilcrow", kw: "square pilcrow" },
  { n: "ic:square-play", kw: "square play reproduzir tocar" },
  { n: "ic:square-plus", kw: "square plus mais adicionar novo" },
  { n: "ic:square-power", kw: "square power" },
  { n: "ic:square-radical", kw: "square radical" },
  { n: "ic:square-round-corner", kw: "square round corner" },
  { n: "ic:square-scissors", kw: "square scissors tesoura cortar" },
  { n: "ic:square-sigma", kw: "square sigma" },
  { n: "ic:square-slash", kw: "square slash" },
  { n: "ic:square-split-horizontal", kw: "square split horizontal" },
  { n: "ic:square-split-vertical", kw: "square split vertical" },
  { n: "ic:square-square", kw: "square square" },
  { n: "ic:square-stack", kw: "square stack" },
  { n: "ic:square-star", kw: "square star estrela favorito" },
  { n: "ic:square-stop", kw: "square stop" },
  { n: "ic:square-terminal", kw: "square terminal console comando" },
  { n: "ic:square-user", kw: "square user usuario pessoa" },
  { n: "ic:square-user-round", kw: "square user round usuario pessoa" },
  { n: "ic:square-x", kw: "square x fechar cancelar" },
  { n: "ic:squares-exclude", kw: "squares exclude" },
  { n: "ic:squares-intersect", kw: "squares intersect" },
  { n: "ic:squares-subtract", kw: "squares subtract" },
  { n: "ic:squares-unite", kw: "squares unite" },
  { n: "ic:squircle", kw: "squircle" },
  { n: "ic:squircle-dashed", kw: "squircle dashed" },
  { n: "ic:squirrel", kw: "squirrel" },
  { n: "ic:stamp", kw: "stamp" },
  { n: "ic:star-check", kw: "star check estrela favorito certo confirmar ok" },
  { n: "ic:star-half", kw: "star half estrela favorito" },
  { n: "ic:star-minus", kw: "star minus estrela favorito menos remover" },
  { n: "ic:star-off", kw: "star off estrela favorito" },
  { n: "ic:star-plus", kw: "star plus estrela favorito mais adicionar novo" },
  { n: "ic:star-x", kw: "star x estrela favorito fechar cancelar" },
  { n: "ic:step-back", kw: "step back" },
  { n: "ic:step-forward", kw: "step forward" },
  { n: "ic:stethoscope", kw: "stethoscope" },
  { n: "ic:sticker", kw: "sticker" },
  { n: "ic:sticky-note", kw: "sticky note" },
  { n: "ic:sticky-note-check", kw: "sticky note check certo confirmar ok" },
  { n: "ic:sticky-note-minus", kw: "sticky note minus menos remover" },
  { n: "ic:sticky-note-off", kw: "sticky note off" },
  { n: "ic:sticky-note-plus", kw: "sticky note plus mais adicionar novo" },
  { n: "ic:sticky-note-x", kw: "sticky note x fechar cancelar" },
  { n: "ic:sticky-notes", kw: "sticky notes" },
  { n: "ic:stone", kw: "stone" },
  { n: "ic:store", kw: "store loja loja" },
  { n: "ic:stretch-horizontal", kw: "stretch horizontal" },
  { n: "ic:stretch-vertical", kw: "stretch vertical" },
  { n: "ic:strikethrough", kw: "strikethrough" },
  { n: "ic:subscript", kw: "subscript" },
  { n: "ic:summary", kw: "summary" },
  { n: "ic:sun-dim", kw: "sun dim sol dia" },
  { n: "ic:sun-medium", kw: "sun medium sol dia" },
  { n: "ic:sun-moon", kw: "sun moon sol dia lua noite" },
  { n: "ic:sun-snow", kw: "sun snow sol dia" },
  { n: "ic:sunrise", kw: "sunrise" },
  { n: "ic:sunset", kw: "sunset" },
  { n: "ic:superscript", kw: "superscript" },
  { n: "ic:swatch-book", kw: "swatch book livro" },
  { n: "ic:swiss-franc", kw: "swiss franc" },
  { n: "ic:switch-camera", kw: "switch camera foto camera" },
  { n: "ic:sword", kw: "sword" },
  { n: "ic:swords", kw: "swords" },
  { n: "ic:syringe", kw: "syringe" },
  { n: "ic:table", kw: "table" },
  { n: "ic:table-2", kw: "table 2" },
  { n: "ic:table-cells-merge", kw: "table cells merge" },
  { n: "ic:table-cells-split", kw: "table cells split" },
  { n: "ic:table-columns-split", kw: "table columns split" },
  { n: "ic:table-of-contents", kw: "table of contents" },
  { n: "ic:table-properties", kw: "table properties" },
  { n: "ic:table-rows-split", kw: "table rows split" },
  { n: "ic:tablet", kw: "tablet" },
  { n: "ic:tablet-smartphone", kw: "tablet smartphone celular telefone" },
  { n: "ic:tablets", kw: "tablets" },
  { n: "ic:tag-plus", kw: "tag plus etiqueta rotulo mais adicionar novo" },
  { n: "ic:tag-x", kw: "tag x etiqueta rotulo fechar cancelar" },
  { n: "ic:tags", kw: "tags" },
  { n: "ic:tally-1", kw: "tally 1" },
  { n: "ic:tally-2", kw: "tally 2" },
  { n: "ic:tally-3", kw: "tally 3" },
  { n: "ic:tally-4", kw: "tally 4" },
  { n: "ic:tally-5", kw: "tally 5" },
  { n: "ic:tangent", kw: "tangent" },
  { n: "ic:telescope", kw: "telescope" },
  { n: "ic:tent", kw: "tent" },
  { n: "ic:tent-tree", kw: "tent tree arvore planta" },
  { n: "ic:test-tube", kw: "test tube" },
  { n: "ic:test-tube-diagonal", kw: "test tube diagonal" },
  { n: "ic:test-tubes", kw: "test tubes" },
  { n: "ic:text-align-center", kw: "text align center" },
  { n: "ic:text-align-end", kw: "text align end" },
  { n: "ic:text-align-justify", kw: "text align justify" },
  { n: "ic:text-align-start", kw: "text align start" },
  { n: "ic:text-cursor", kw: "text cursor" },
  { n: "ic:text-cursor-input", kw: "text cursor input" },
  { n: "ic:text-initial", kw: "text initial" },
  { n: "ic:text-quote", kw: "text quote" },
  { n: "ic:text-search", kw: "text search buscar procurar lupa" },
  { n: "ic:text-wrap", kw: "text wrap" },
  { n: "ic:theater", kw: "theater" },
  { n: "ic:thermometer-snowflake", kw: "thermometer snowflake termometro temperatura" },
  { n: "ic:thermometer-sun", kw: "thermometer sun termometro temperatura sol dia" },
  { n: "ic:thumbs-down", kw: "thumbs down" },
  { n: "ic:ticket", kw: "ticket" },
  { n: "ic:ticket-check", kw: "ticket check certo confirmar ok" },
  { n: "ic:ticket-minus", kw: "ticket minus menos remover" },
  { n: "ic:ticket-percent", kw: "ticket percent" },
  { n: "ic:ticket-plus", kw: "ticket plus mais adicionar novo" },
  { n: "ic:ticket-slash", kw: "ticket slash" },
  { n: "ic:ticket-x", kw: "ticket x fechar cancelar" },
  { n: "ic:tickets", kw: "tickets" },
  { n: "ic:tickets-plane", kw: "tickets plane aviao voo viagem" },
  { n: "ic:timeline", kw: "timeline" },
  { n: "ic:timer", kw: "timer cronometro tempo cronometro tempo" },
  { n: "ic:timer-off", kw: "timer off cronometro tempo" },
  { n: "ic:timer-reset", kw: "timer reset cronometro tempo" },
  { n: "ic:toggle-left", kw: "toggle left" },
  { n: "ic:toggle-right", kw: "toggle right" },
  { n: "ic:toilet", kw: "toilet" },
  { n: "ic:tool-case", kw: "tool case" },
  { n: "ic:toolbox", kw: "toolbox" },
  { n: "ic:tornado", kw: "tornado" },
  { n: "ic:torus", kw: "torus" },
  { n: "ic:touchpad", kw: "touchpad" },
  { n: "ic:touchpad-off", kw: "touchpad off" },
  { n: "ic:towel-rack", kw: "towel rack" },
  { n: "ic:tower-control", kw: "tower control" },
  { n: "ic:toy-brick", kw: "toy brick" },
  { n: "ic:tractor", kw: "tractor" },
  { n: "ic:traffic-cone", kw: "traffic cone" },
  { n: "ic:train-front", kw: "train front" },
  { n: "ic:train-front-tunnel", kw: "train front tunnel" },
  { n: "ic:train-track", kw: "train track" },
  { n: "ic:tram-front", kw: "tram front" },
  { n: "ic:transgender", kw: "transgender" },
  { n: "ic:trash-2", kw: "trash 2 lixo excluir apagar" },
  { n: "ic:tree-deciduous", kw: "tree deciduous arvore planta" },
  { n: "ic:tree-palm", kw: "tree palm arvore planta" },
  { n: "ic:tree-pine", kw: "tree pine arvore planta" },
  { n: "ic:trees", kw: "trees" },
  { n: "ic:trending-down", kw: "trending down" },
  { n: "ic:trending-up-down", kw: "trending up down" },
  { n: "ic:triangle", kw: "triangle triangulo alerta triangulo alerta" },
  { n: "ic:triangle-alert", kw: "triangle alert triangulo alerta alerta aviso atencao" },
  { n: "ic:triangle-dashed", kw: "triangle dashed triangulo alerta" },
  { n: "ic:triangle-right", kw: "triangle right triangulo alerta" },
  { n: "ic:truck-electric", kw: "truck electric caminhao entrega" },
  { n: "ic:turkish-lira", kw: "turkish lira" },
  { n: "ic:turntable", kw: "turntable" },
  { n: "ic:turtle", kw: "turtle" },
  { n: "ic:tv", kw: "tv" },
  { n: "ic:tv-minimal", kw: "tv minimal" },
  { n: "ic:tv-minimal-play", kw: "tv minimal play reproduzir tocar" },
  { n: "ic:type", kw: "type" },
  { n: "ic:type-outline", kw: "type outline" },
  { n: "ic:umbrella-off", kw: "umbrella off guarda chuva" },
  { n: "ic:underline", kw: "underline" },
  { n: "ic:undo", kw: "undo" },
  { n: "ic:undo-2", kw: "undo 2" },
  { n: "ic:undo-dot", kw: "undo dot" },
  { n: "ic:unfold-horizontal", kw: "unfold horizontal" },
  { n: "ic:unfold-vertical", kw: "unfold vertical" },
  { n: "ic:ungroup", kw: "ungroup" },
  { n: "ic:university", kw: "university" },
  { n: "ic:unlink", kw: "unlink" },
  { n: "ic:unlink-2", kw: "unlink 2" },
  { n: "ic:unplug", kw: "unplug" },
  { n: "ic:usb", kw: "usb" },
  { n: "ic:user-check", kw: "user check usuario pessoa certo confirmar ok" },
  { n: "ic:user-cog", kw: "user cog usuario pessoa" },
  { n: "ic:user-key", kw: "user key usuario pessoa chave" },
  { n: "ic:user-lock", kw: "user lock usuario pessoa cadeado bloquear seguranca" },
  { n: "ic:user-minus", kw: "user minus usuario pessoa menos remover" },
  { n: "ic:user-pen", kw: "user pen usuario pessoa caneta" },
  { n: "ic:user-plus", kw: "user plus usuario pessoa mais adicionar novo" },
  { n: "ic:user-round", kw: "user round usuario pessoa" },
  { n: "ic:user-round-arrow-left", kw: "user round arrow left usuario pessoa seta flecha" },
  { n: "ic:user-round-check", kw: "user round check usuario pessoa certo confirmar ok" },
  { n: "ic:user-round-cog", kw: "user round cog usuario pessoa" },
  { n: "ic:user-round-key", kw: "user round key usuario pessoa chave" },
  { n: "ic:user-round-minus", kw: "user round minus usuario pessoa menos remover" },
  { n: "ic:user-round-pen", kw: "user round pen usuario pessoa caneta" },
  { n: "ic:user-round-plus", kw: "user round plus usuario pessoa mais adicionar novo" },
  { n: "ic:user-round-search", kw: "user round search usuario pessoa buscar procurar lupa" },
  { n: "ic:user-round-x", kw: "user round x usuario pessoa fechar cancelar" },
  { n: "ic:user-search", kw: "user search usuario pessoa buscar procurar lupa" },
  { n: "ic:user-star", kw: "user star usuario pessoa estrela favorito" },
  { n: "ic:user-x", kw: "user x usuario pessoa fechar cancelar" },
  { n: "ic:users-round", kw: "users round usuarios pessoas equipe" },
  { n: "ic:utensils", kw: "utensils talheres comida restaurante talheres comida restaurante" },
  { n: "ic:utensils-crossed", kw: "utensils crossed talheres comida restaurante" },
  { n: "ic:utility-pole", kw: "utility pole" },
  { n: "ic:van", kw: "van" },
  { n: "ic:variable", kw: "variable" },
  { n: "ic:vault", kw: "vault" },
  { n: "ic:vector-square", kw: "vector square" },
  { n: "ic:vegan", kw: "vegan" },
  { n: "ic:venetian-mask", kw: "venetian mask" },
  { n: "ic:venus", kw: "venus" },
  { n: "ic:venus-and-mars", kw: "venus and mars" },
  { n: "ic:vibrate", kw: "vibrate" },
  { n: "ic:vibrate-off", kw: "vibrate off" },
  { n: "ic:video-off", kw: "video off video filme" },
  { n: "ic:videotape", kw: "videotape" },
  { n: "ic:view", kw: "view" },
  { n: "ic:voicemail", kw: "voicemail" },
  { n: "ic:volleyball", kw: "volleyball" },
  { n: "ic:volume", kw: "volume" },
  { n: "ic:volume-1", kw: "volume 1" },
  { n: "ic:volume-2", kw: "volume 2" },
  { n: "ic:volume-off", kw: "volume off" },
  { n: "ic:volume-x", kw: "volume x fechar cancelar" },
  { n: "ic:vote", kw: "vote" },
  { n: "ic:wallet", kw: "wallet carteira dinheiro carteira dinheiro" },
  { n: "ic:wallet-cards", kw: "wallet cards carteira dinheiro" },
  { n: "ic:wallet-minimal", kw: "wallet minimal carteira dinheiro" },
  { n: "ic:wallpaper", kw: "wallpaper" },
  { n: "ic:wand", kw: "wand" },
  { n: "ic:wand-sparkles", kw: "wand sparkles" },
  { n: "ic:warehouse", kw: "warehouse" },
  { n: "ic:washing-machine", kw: "washing machine" },
  { n: "ic:watch", kw: "watch relogio relogio" },
  { n: "ic:waves-arrow-down", kw: "waves arrow down seta flecha" },
  { n: "ic:waves-arrow-up", kw: "waves arrow up seta flecha" },
  { n: "ic:waves-horizontal", kw: "waves horizontal" },
  { n: "ic:waves-ladder", kw: "waves ladder" },
  { n: "ic:waves-vertical", kw: "waves vertical" },
  { n: "ic:waypoints", kw: "waypoints" },
  { n: "ic:webcam", kw: "webcam" },
  { n: "ic:webcam-off", kw: "webcam off" },
  { n: "ic:webhook", kw: "webhook" },
  { n: "ic:webhook-off", kw: "webhook off" },
  { n: "ic:weight", kw: "weight" },
  { n: "ic:weight-tilde", kw: "weight tilde" },
  { n: "ic:wheat", kw: "wheat" },
  { n: "ic:wheat-off", kw: "wheat off" },
  { n: "ic:whole-word", kw: "whole word" },
  { n: "ic:wifi-cog", kw: "wifi cog internet rede sinal" },
  { n: "ic:wifi-high", kw: "wifi high internet rede sinal" },
  { n: "ic:wifi-low", kw: "wifi low internet rede sinal" },
  { n: "ic:wifi-off", kw: "wifi off internet rede sinal" },
  { n: "ic:wifi-pen", kw: "wifi pen internet rede sinal caneta" },
  { n: "ic:wifi-sync", kw: "wifi sync internet rede sinal" },
  { n: "ic:wifi-zero", kw: "wifi zero internet rede sinal" },
  { n: "ic:wind", kw: "wind" },
  { n: "ic:wind-arrow-down", kw: "wind arrow down seta flecha" },
  { n: "ic:wine", kw: "wine" },
  { n: "ic:wine-off", kw: "wine off" },
  { n: "ic:workflow", kw: "workflow" },
  { n: "ic:worm", kw: "worm" },
  { n: "ic:wrench", kw: "wrench ferramenta chave ferramenta chave" },
  { n: "ic:wrench-off", kw: "wrench off ferramenta chave" },
  { n: "ic:x-line-top", kw: "x line top fechar cancelar" },
  { n: "ic:zap-off", kw: "zap off raio energia rapido" },
  { n: "ic:zodiac-aquarius", kw: "zodiac aquarius" },
  { n: "ic:zodiac-aries", kw: "zodiac aries" },
  { n: "ic:zodiac-cancer", kw: "zodiac cancer" },
  { n: "ic:zodiac-capricorn", kw: "zodiac capricorn" },
  { n: "ic:zodiac-gemini", kw: "zodiac gemini" },
  { n: "ic:zodiac-leo", kw: "zodiac leo" },
  { n: "ic:zodiac-libra", kw: "zodiac libra" },
  { n: "ic:zodiac-ophiuchus", kw: "zodiac ophiuchus" },
  { n: "ic:zodiac-pisces", kw: "zodiac pisces" },
  { n: "ic:zodiac-sagittarius", kw: "zodiac sagittarius" },
  { n: "ic:zodiac-scorpio", kw: "zodiac scorpio" },
  { n: "ic:zodiac-taurus", kw: "zodiac taurus" },
  { n: "ic:zodiac-virgo", kw: "zodiac virgo" },
  { n: "ic:zoom-in", kw: "zoom in" },
  { n: "ic:zoom-out", kw: "zoom out" },
];
const ICON_NAMES = ICON_LIST.map((i) => i.n);

const isUicon = (s: any) => typeof s === "string" && (s.indexOf("ic:") === 0 || s.indexOf("ri-") === 0 || s.indexOf("fi-") === 0);
function svgIcon(inner: string) {
  return <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "-0.125em" }} dangerouslySetInnerHTML={{ __html: inner }} />;
}
function pageIconNode(icon: any) {
  if (typeof icon === "string") {
    if (icon.indexOf("ic:") === 0) { const inner = ICON_SVGS[icon.slice(3)]; if (inner) return svgIcon(inner); }
    if (icon.indexOf("ri-") === 0) return <i className={icon} style={{ fontStyle: "normal", lineHeight: 1, display: "inline-block" }} />;
    if (icon.indexOf("fi-") === 0) return <i className={"fi " + icon} style={{ fontStyle: "normal", lineHeight: 1, display: "inline-block" }} />;
  }
  return icon;
}
// HTML do "chip" de link para outra página (usado em menções @ e no /link)
function pageIconHtml(icon: any) {
  const icoSvg = (typeof icon === "string" && icon.indexOf("ic:") === 0) ? ICON_SVGS[icon.slice(3)] : null;
  if (icoSvg) return '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-0.125em">' + icoSvg + '</svg>';
  if (typeof icon === "string" && icon.indexOf("ri-") === 0) return '<i class="' + icon + '" style="font-style:normal"></i>';
  if (typeof icon === "string" && icon.indexOf("fi-") === 0) return '<i class="fi ' + icon + '" style="font-style:normal"></i>';
  return icon || "📄";
}
function pageChipHtml(page: any) {
  const title = (page.title || "Sem título").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return '<span data-page-id="' + page.id + '" contenteditable="false" class="inline-flex items-center gap-1 text-primary font-semibold px-1 rounded bg-primary/10 hover:bg-primary/20 cursor-pointer select-none transition-colors mx-1"><span class="text-xs pointer-events-none">' + pageIconHtml(page.icon) + '</span><span class="pointer-events-none underline decoration-primary/30 underline-offset-2">' + title + '</span></span>&nbsp;';
}
// Detecta se um bloco (recursivo) contém um link/menção para a página alvo.
function blockLinksToId(b: any, targetId: string): boolean {
  if (!b) return false;
  const needle = 'data-page-id="' + targetId + '"';
  if (typeof b.html === "string" && b.html.indexOf(needle) !== -1) return true;
  if (b.type === "pageref" && b.pageId === targetId) return true;
  if (Array.isArray(b.children) && b.children.some((c: any) => blockLinksToId(c, targetId))) return true;
  if (Array.isArray(b.rows)) { for (const row of b.rows) { if (Array.isArray(row)) { for (const cell of row) { if (typeof cell === "string" && cell.indexOf(needle) !== -1) return true; } } } }
  return false;
}
function pageLinksToId(page: any, targetId: string): boolean {
  const content = Array.isArray(page.content) ? page.content : [];
  return content.some((b: any) => blockLinksToId(b, targetId));
}
// Compatibilidade: webfonts antigas (Remix) ainda injetadas p/ ícones ri- já salvos.
const UICON_CSS = ["https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css"];
let uiconsLinked = false;
function linkUicons() {
  if (uiconsLinked || typeof document === "undefined") return;
  uiconsLinked = true;
  for (const href of UICON_CSS) {
    if (document.querySelector('link[data-uicon="1"][href="' + href + '"]')) continue;
    const l = document.createElement("link");
    l.rel = "stylesheet"; l.href = href; l.setAttribute("data-uicon", "1");
    document.head.appendChild(l);
  }
}

const TEXT_COLORS = [
  { n: "Padrão", fg: "inherit" },
  { n: "Cinza", fg: "#9ca3af" },
  { n: "Marrom", fg: "#a16207" },
  { n: "Laranja", fg: "#f97316" },
  { n: "Amarelo", fg: "#ca8a04" },
  { n: "Verde", fg: "#16a34a" },
  { n: "Azul", fg: "#2563eb" },
  { n: "Roxo", fg: "#9333ea" },
  { n: "Rosa", fg: "#db2777" },
  { n: "Vermelho", fg: "#dc2626" },
];

const BG_COLORS = [
  { n: "Sem fundo", bg: "transparent" },
  { n: "Cinza", bg: "#e5e7eb" },
  { n: "Marrom", bg: "#fde68a" },
  { n: "Laranja", bg: "#fed7aa" },
  { n: "Amarelo", bg: "#fef08a" },
  { n: "Verde", bg: "#bbf7d0" },
  { n: "Azul", bg: "#bfdbfe" },
  { n: "Roxo", bg: "#e9d5ff" },
  { n: "Rosa", bg: "#fbcfe8" },
  { n: "Vermelho", bg: "#fecaca" },
];

const uid = () => (typeof crypto !== "undefined" && (crypto as any).randomUUID ? (crypto as any).randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => { const r = (Math.random() * 16) | 0; const v = c === "x" ? r : (r & 0x3) | 0x8; return v.toString(16); }));

const htmlToText = (html: string) => { if (!html) return ""; const t = document.createElement("div"); t.innerHTML = html; return t.textContent || ""; };

const blocksToText = (blocks: any[]): string => { if (!Array.isArray(blocks)) return ""; let o = ""; for (const b of blocks) { if (b.html) o += " " + htmlToText(b.html); if (b.caption) o += " " + b.caption; if (b.rows) for (const r of b.rows) for (const c of r) o += " " + htmlToText(c); if (b.children) o += " " + blocksToText(b.children); } return o; };

const newBlock = (type = "paragraph", extra: any = {}) => ({ id: uid(), type, html: "", ...extra });

// ========================================================================
// Caderno de desenho (caneta) — nova feature, não altera o editor de texto
// ========================================================================
const isCanvasPage = (p: any) => !!(p && Array.isArray(p.content) && p.content[0] && p.content[0].type === "canvas");

// ========================================================================
// Diagramas conectados (tipo Miro) — novo módulo dentro de Páginas
// ========================================================================
const isDiagramPage = (p: any) => !!(p && Array.isArray(p.content) && p.content[0] && p.content[0].type === "diagram");

const CANVAS_COLORS = ["#1e293b", "#ffffff", "#64748b", "#ef4444", "#f97316", "#eab308", "#16a34a", "#0ea5e9", "#6366f1", "#a855f7", "#ec4899"];
const CANVAS_PAPERS = [
  { id: "blank", label: "Em branco", icon: "▢" },
  { id: "lines", label: "Pautada", icon: "☰" },
  { id: "dots", label: "Pontilhada", icon: "⠿" },
  { id: "grid", label: "Quadriculada", icon: "▦" },
  { id: "blueprint", label: "Blueprint", icon: "📐" },
];
const CANVAS_SHEETS = [
  { id: "infinite", label: "Infinito" },
  { id: "a4", label: "A4", w: 794, h: 1123 },
  { id: "a3", label: "A3", w: 1123, h: 1587 },
  { id: "a2", label: "A2", w: 1587, h: 2245 },
];
const CANVAS_STROKES = [
  { w: 2, label: "Fino" },
  { w: 4, label: "Médio" },
  { w: 8, label: "Grosso" },
  { w: 14, label: "Marcador" },
];
const CANVAS_PENS = [
  { id: "pen", label: "Caneta", short: "Caneta", icon: "🖊️", key: "P" },
  { id: "pencil", label: "Lápis", short: "Lápis", icon: "✏️", key: "L" },
  { id: "marker", label: "Hidrográfica", short: "Hidro", icon: "🖌️", key: "M" },
  { id: "highlighter", label: "Marca-texto", short: "Marca", icon: "🖍️", key: "G" },
];
const CANVAS_PENS_EXTRA = [
  { id: "brush", label: "Pincel — pressão dramática", short: "Pincel", icon: "🪶" },
  { id: "calligraphy", label: "Caligrafia — pena a 45°", short: "Caligr.", icon: "✒️" },
  { id: "neon", label: "Neon — traço que brilha", short: "Neon", icon: "✨" },
  { id: "dashed", label: "Tracejada", short: "Tracej.", icon: "┅" },
];
const PEN_TOOL_IDS = CANVAS_PENS.map((p) => p.id).concat(CANVAS_PENS_EXTRA.map((p) => p.id));
function isPenTool(t: string) { return PEN_TOOL_IDS.indexOf(t) !== -1; }
const CANVAS_SHAPES = [
  { id: "rect", label: "Retângulo", icon: "▭" },
  { id: "ellipse", label: "Círculo", icon: "◯" },
  { id: "triangle", label: "Triângulo", icon: "△" },
  { id: "diamond", label: "Losango", icon: "◇" },
  { id: "pentagon", label: "Pentágono", icon: "⬠" },
  { id: "hexagon", label: "Hexágono", icon: "⬡" },
  { id: "octagon", label: "Octógono", icon: "⛶" },
  { id: "star", label: "Estrela", icon: "☆" },
  { id: "heart", label: "Coração", icon: "♡" },
  { id: "parallelogram", label: "Paralelogramo", icon: "▱" },
  { id: "trapezoid", label: "Trapézio", icon: "⏢" },
  { id: "cross", label: "Cruz", icon: "✚" },
  { id: "line", label: "Linha", icon: "─" },
  { id: "arrow", label: "Seta", icon: "↗" },
  { id: "darrow", label: "Seta dupla", icon: "↔" },
];
const POLY_SHAPES = ["diamond", "pentagon", "hexagon", "octagon", "star", "parallelogram", "trapezoid", "cross"];
const LINE_KINDS = ["line", "arrow", "darrow"];
const SHAPE_KINDS = ["rect", "ellipse", "triangle", "heart"].concat(POLY_SHAPES, LINE_KINDS);
function rotPt(p: any, deg: number, c: any) {
  const a = (deg * Math.PI) / 180;
  const s = Math.sin(a), co = Math.cos(a);
  const dx = p.x - c.x, dy = p.y - c.y;
  return { x: c.x + dx * co - dy * s, y: c.y + dx * s + dy * co };
}
function heartPath(el: any) {
  const r = normRect(el);
  const X = (u: number) => r.x + u * r.w;
  const Y = (v: number) => r.y + v * r.h;
  return "M " + X(0.5) + " " + Y(0.3) +
    " C " + X(0.5) + " " + Y(0.12) + " " + X(0.34) + " " + Y(0.02) + " " + X(0.22) + " " + Y(0.02) +
    " C " + X(0.06) + " " + Y(0.02) + " " + X(0) + " " + Y(0.16) + " " + X(0) + " " + Y(0.3) +
    " C " + X(0) + " " + Y(0.52) + " " + X(0.2) + " " + Y(0.66) + " " + X(0.5) + " " + Y(0.96) +
    " C " + X(0.8) + " " + Y(0.66) + " " + X(1) + " " + Y(0.52) + " " + X(1) + " " + Y(0.3) +
    " C " + X(1) + " " + Y(0.16) + " " + X(0.94) + " " + Y(0.02) + " " + X(0.78) + " " + Y(0.02) +
    " C " + X(0.66) + " " + Y(0.02) + " " + X(0.5) + " " + Y(0.12) + " " + X(0.5) + " " + Y(0.3) + " Z";
}
function shapePoints(el: any) {
  const r = normRect(el);
  const cx = r.x + r.w / 2, cy = r.y + r.h / 2, rx = Math.max(1, r.w / 2), ry = Math.max(1, r.h / 2);
  if (el.kind === "diamond") return cx + "," + r.y + " " + (r.x + r.w) + "," + cy + " " + cx + "," + (r.y + r.h) + " " + r.x + "," + cy;
  const pt = (a: number, f = 1) => (cx + Math.sin(a) * rx * f) + "," + (cy - Math.cos(a) * ry * f);
  if (el.kind === "parallelogram") {
    const off = r.w * 0.25;
    return (r.x + off) + "," + r.y + " " + (r.x + r.w) + "," + r.y + " " + (r.x + r.w - off) + "," + (r.y + r.h) + " " + r.x + "," + (r.y + r.h);
  }
  if (el.kind === "trapezoid") {
    return (r.x + r.w * 0.25) + "," + r.y + " " + (r.x + r.w * 0.75) + "," + r.y + " " + (r.x + r.w) + "," + (r.y + r.h) + " " + r.x + "," + (r.y + r.h);
  }
  if (el.kind === "cross") {
    const a = 0.34, b = 0.66;
    const U = (u: number) => r.x + u * r.w, V = (v: number) => r.y + v * r.h;
    return [[a,0],[b,0],[b,a],[1,a],[1,b],[b,b],[b,1],[a,1],[a,b],[0,b],[0,a],[a,a]].map((q) => U(q[0]) + "," + V(q[1])).join(" ");
  }
  if (el.kind === "pentagon" || el.kind === "hexagon" || el.kind === "octagon") {
    const n = el.kind === "pentagon" ? 5 : el.kind === "hexagon" ? 6 : 8;
    const a0 = el.kind === "pentagon" ? 0 : Math.PI / n;
    const ps = [];
    for (let i = 0; i < n; i++) ps.push(pt(a0 + (i * 2 * Math.PI) / n));
    return ps.join(" ");
  }
  if (el.kind === "star") {
    const ps = [];
    for (let i = 0; i < 10; i++) ps.push(pt((i * Math.PI) / 5, i % 2 ? 0.45 : 1));
    return ps.join(" ");
  }
  return "";
}
function penWidth(baseW: number, pr: number, pen?: string) {
  const q = Math.max(0, Math.min(1, pr));
  // Cada pincel tem seu próprio contraste de largura — bem mais visível que antes
  if (pen === "brush") return Math.max(0.6, baseW * (0.12 + q * q * 2.4));        // fio fino → pincelada gorda
  if (pen === "calligraphy") return Math.max(0.5, baseW * (0.18 + q * 2.1));      // fita fina ↔ larga pelo ângulo
  if (pen === "pencil") return Math.max(0.7, baseW * (0.55 + q * 0.6));           // lápis mais uniforme
  return Math.max(0.7, baseW * (0.45 + q * 0.85));                                  // caneta padrão
}
function isDarkColor(hex: string) {
  if (!hex || hex[0] !== "#") return false;
  const h = hex.length === 4 ? "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3] : hex;
  const r = parseInt(h.slice(1, 3), 16) || 0, g = parseInt(h.slice(3, 5), 16) || 0, b = parseInt(h.slice(5, 7), 16) || 0;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.55;
}
const CANVAS_BGS = [
  { id: "transparent", label: "Tema", c: "transparent" },
  { id: "#ffffff", label: "Branco", c: "#ffffff" },
  { id: "#fffbeb", label: "Creme", c: "#fffbeb" },
  { id: "#f0f9ff", label: "Azul claro", c: "#f0f9ff" },
  { id: "#305cde", label: "Blueprint", c: "#305cde" },
  { id: "#0f172a", label: "Escuro", c: "#0f172a" },
];
const BLUEPRINT_BLUE = "#305cde"; // Royal Blue — exemplo enviado pelo usuário
const CANVAS_TEXT_SIZES = [
  { s: 18, label: "P" },
  { s: 28, label: "M" },
  { s: 40, label: "G" },
  { s: 64, label: "GG" },
];

// Formas e cores do módulo de diagramas (tipo Miro)
const DIAGRAM_SHAPES = [
  { id: "rect", label: "Caixa", icon: "▭" },
  { id: "ellipse", label: "Elipse", icon: "◯" },
  { id: "diamond", label: "Decisão", icon: "◇" },
  { id: "triangle", label: "Triângulo", icon: "△" },
  { id: "parallelogram", label: "Dado", icon: "▱" },
  { id: "hexagon", label: "Hexágono", icon: "⬡" },
  { id: "pentagon", label: "Pentágono", icon: "⬠" },
  { id: "octagon", label: "Octógono", icon: "⛶" },
  { id: "star", label: "Estrela", icon: "☆" },
  { id: "trapezoid", label: "Trapézio", icon: "⏢" },
  { id: "cross", label: "Cruz", icon: "✚" },
  { id: "line", label: "Linha", icon: "─" },
  { id: "arrow", label: "Seta", icon: "↗" },
  { id: "darrow", label: "Seta dupla", icon: "↔" },
];
const DIAGRAM_LINE_SHAPES = ["line", "arrow", "darrow"];
// Linha/seta tratadas como vetor: as duas pontas vivem em cantos opostos da
// bbox (x,y,w,h); flip escolhe a diagonal e rev qual ponta é o início/fim.
function lineEnds(n: any) {
  let x1, y1, x2, y2;
  if (n.flip) { x1 = n.x; y1 = n.y; x2 = n.x + n.w; y2 = n.y + n.h; }
  else { x1 = n.x; y1 = n.y + n.h; x2 = n.x + n.w; y2 = n.y; }
  if (n.rev) return { x1: x2, y1: y2, x2: x1, y2: y1 };
  return { x1, y1, x2, y2 };
}
// Calcula bbox + orientação a partir de dois pontos (início p1 → fim/ponta p2).
function lineBoxFromPoints(p1: any, p2: any) {
  const x = Math.min(p1.x, p2.x), y = Math.min(p1.y, p2.y);
  const w = Math.max(1, Math.abs(p2.x - p1.x)), h = Math.max(1, Math.abs(p2.y - p1.y));
  const dx = p2.x - p1.x, dy = p2.y - p1.y;
  const flip = (dx >= 0) === (dy >= 0);
  const rev = flip ? !(dx >= 0 && dy >= 0) : !(dx >= 0 && dy < 0);
  return { x: Math.round(x), y: Math.round(y), w: Math.round(w), h: Math.round(h), flip, rev };
}
const DIAGRAM_PALETTE = [
  { bg: "#ffffff", border: "#334155", text: "#0f172a" },
  { bg: "#dbeafe", border: "#2563eb", text: "#1e3a8a" },
  { bg: "#dcfce7", border: "#16a34a", text: "#14532d" },
  { bg: "#fef9c3", border: "#ca8a04", text: "#713f12" },
  { bg: "#fee2e2", border: "#dc2626", text: "#7f1d1d" },
  { bg: "#f3e8ff", border: "#9333ea", text: "#581c87" },
  { bg: "#ffedd5", border: "#ea580c", text: "#7c2d12" },
  { bg: "#1e293b", border: "#0f172a", text: "#ffffff" },
];

const clone = (o: any) => JSON.parse(JSON.stringify(o));
// Área de transferência interna (copiar/colar entre cadernos e diagramas)
let CANVAS_CLIP: any[] = [];
let DIAGRAM_CLIP: any = null;
const r2 = (v: number) => Math.round(v * 100) / 100;
const dist2 = (ax: number, ay: number, bx: number, by: number) => Math.hypot(ax - bx, ay - by);

function normRect(el: any) {
  const x = Math.min(el.x, el.x + el.w);
  const y = Math.min(el.y, el.y + el.h);
  return { x, y, w: Math.abs(el.w), h: Math.abs(el.h) };
}
function strokePath(pts: { x: number; y: number }[]) {
  if (!pts || pts.length === 0) return "";
  if (pts.length === 1) { const p = pts[0]; return "M " + p.x + " " + p.y + " L " + (p.x + 0.1) + " " + p.y; }
  let d = "M " + pts[0].x + " " + pts[0].y;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i].x + pts[i + 1].x) / 2;
    const my = (pts[i].y + pts[i + 1].y) / 2;
    d += " Q " + pts[i].x + " " + pts[i].y + " " + mx + " " + my;
  }
  const last = pts[pts.length - 1];
  d += " L " + last.x + " " + last.y;
  return d;
}
// Tinta com espessura variável (pressão da caneta ou velocidade do mouse).
// Gera o contorno preenchido do traço, com pontas afinadas — parece tinta de verdade.
function inkOutline(ptsIn: any[], baseW: number, pen?: string) {
  const pts = ptsIn || [];
  const f = (v: number) => Math.round(v * 100) / 100;
  const wOf = (p: any) => penWidth(baseW, p && p.p != null ? p.p : 0.6, pen);
  if (pts.length === 0) return "";
  if (pts.length === 1) {
    const p = pts[0]; const r = Math.max(0.6, wOf(p) / 2);
    return "M " + f(p.x - r) + " " + f(p.y) + " a " + f(r) + " " + f(r) + " 0 1 0 " + f(r * 2) + " 0 a " + f(r) + " " + f(r) + " 0 1 0 " + f(-r * 2) + " 0 Z";
  }
  const n = pts.length;
  const w: number[] = new Array(n);
  for (let i = 0; i < n; i++) w[i] = wOf(pts[i]);
  for (let k = 0; k < 2; k++) for (let i = 1; i < n - 1; i++) w[i] = (w[i - 1] + w[i] * 2 + w[i + 1]) / 4;
  w[0] = Math.max(0.7, w[0] * 0.55);
  w[n - 1] = Math.max(0.7, w[n - 1] * 0.5);
  const left: any[] = []; const right: any[] = [];
  for (let i = 0; i < n; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)];
    let dx = b.x - a.x, dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1; dx /= len; dy /= len;
    const hw = w[i] / 2;
    left.push({ x: pts[i].x - dy * hw, y: pts[i].y + dx * hw });
    right.push({ x: pts[i].x + dy * hw, y: pts[i].y - dx * hw });
  }
  const loop = left.concat(right.reverse());
  let d = "M " + f(loop[0].x) + " " + f(loop[0].y);
  for (let i = 1; i < loop.length; i++) {
    const a = loop[i], b = loop[(i + 1) % loop.length];
    d += " Q " + f(a.x) + " " + f(a.y) + " " + f((a.x + b.x) / 2) + " " + f((a.y + b.y) / 2);
  }
  return d + " Z";
}
function arrowHeadAt(x1: number, y1: number, x2: number, y2: number, s: number) {
  // Ponta triangular com o bico exatamente em (x2,y2); a haste deve parar na base (bx,by)
  const R = (v: number) => Math.round(v * 100) / 100;
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len, px = -uy, py = ux;
  const L = Math.min(s * 1.5, len * 0.45);
  const W = Math.max(1, L * 0.62);
  const bx = x2 - ux * L, by = y2 - uy * L;
  return {
    poly: R(x2) + "," + R(y2) + " " + R(bx + px * W) + "," + R(by + py * W) + " " + R(bx - px * W) + "," + R(by - py * W),
    bx: R(bx), by: R(by),
  };
}
function pointInBox(p: any, b: any, pad = 0) {
  return p.x >= b.x - pad && p.x <= b.x + b.w + pad && p.y >= b.y - pad && p.y <= b.y + b.h + pad;
}
function distToSeg(p: any, a: any, b: any) {
  const vx = b.x - a.x, vy = b.y - a.y;
  const wx = p.x - a.x, wy = p.y - a.y;
  const c1 = vx * wx + vy * wy;
  if (c1 <= 0) return dist2(p.x, p.y, a.x, a.y);
  const c2 = vx * vx + vy * vy;
  if (c2 <= c1) return dist2(p.x, p.y, b.x, b.y);
  const t = c1 / c2;
  return dist2(p.x, p.y, a.x + t * vx, a.y + t * vy);
}
function canvasBBox(el: any) {
  if (el.kind === "path") {
    const pts = el.pts || [];
    if (pts.length === 0) return { x: 0, y: 0, w: 0, h: 0 };
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const p of pts) {
      if (p.x < minX) minX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.x > maxX) maxX = p.x;
      if (p.y > maxY) maxY = p.y;
    }
    const pad = (el.sw || 4) / 2;
    return { x: minX - pad, y: minY - pad, w: Math.max(1, maxX - minX + pad * 2), h: Math.max(1, maxY - minY + pad * 2) };
  }
  if (LINE_KINDS.indexOf(el.kind) !== -1) {
    return { x: Math.min(el.x1, el.x2), y: Math.min(el.y1, el.y2), w: Math.abs(el.x2 - el.x1), h: Math.abs(el.y2 - el.y1) };
  }
  if (el.kind === "image") {
    return { x: el.x || 0, y: el.y || 0, w: Math.max(1, el.w || 1), h: Math.max(1, el.h || 1) };
  }
  if (el.kind === "text") {
    const s = el.size || 16;
    const w = Math.max(20, (el.text || " ").length * s * 0.6);
    return { x: el.x, y: el.y - s, w, h: s * 1.35 };
  }
  return normRect(el);
}
function canvasHit(el: any, p: any, extra = 0) {
  if (el.rot) {
    const b0 = canvasBBox(el);
    p = rotPt(p, -el.rot, { x: b0.x + b0.w / 2, y: b0.y + b0.h / 2 });
  }
  if (el.kind === "path") {
    const pts = el.pts || [];
    const t = (el.sw || 4) / 2 + 7 + extra;
    if (pts.length === 1) return dist2(p.x, p.y, pts[0].x, pts[0].y) <= t;
    for (let i = 0; i < pts.length - 1; i++) {
      if (distToSeg(p, pts[i], pts[i + 1]) <= t) return true;
    }
    return false;
  }
  if (LINE_KINDS.indexOf(el.kind) !== -1) {
    return distToSeg(p, { x: el.x1, y: el.y1 }, { x: el.x2, y: el.y2 }) <= (el.sw || 4) / 2 + 7 + extra;
  }
  return pointInBox(p, canvasBBox(el), 2 + extra);
}
function translateEl(el: any, dx: number, dy: number) {
  const e = clone(el);
  if (e.kind === "path") { e.pts = (e.pts || []).map((pt: any) => ({ ...pt, x: pt.x + dx, y: pt.y + dy })); delete e.d; }
  else if (LINE_KINDS.indexOf(e.kind) !== -1) { e.x1 += dx; e.y1 += dy; e.x2 += dx; e.y2 += dy; }
  else { e.x += dx; e.y += dy; }
  return e;
}
function scaleEl(el: any, ox: number, oy: number, sx: number, sy: number) {
  const e = clone(el);
  const fAvg = (Math.abs(sx) + Math.abs(sy)) / 2;
  if (e.kind === "path") {
    e.pts = (e.pts || []).map((pt: any) => ({ ...pt, x: ox + (pt.x - ox) * sx, y: oy + (pt.y - oy) * sy }));
    e.sw = Math.max(0.5, (e.sw || 4) * fAvg);
    delete e.d;
  } else if (LINE_KINDS.indexOf(e.kind) !== -1) {
    e.x1 = ox + (e.x1 - ox) * sx; e.y1 = oy + (e.y1 - oy) * sy;
    e.x2 = ox + (e.x2 - ox) * sx; e.y2 = oy + (e.y2 - oy) * sy;
    e.sw = Math.max(0.5, (e.sw || 4) * fAvg);
  } else if (e.kind === "text") {
    e.x = ox + (e.x - ox) * sx; e.y = oy + (e.y - oy) * sy;
    e.size = Math.max(8, (e.size || 24) * fAvg);
  } else {
    e.x = ox + (e.x - ox) * sx; e.y = oy + (e.y - oy) * sy;
    e.w = e.w * sx; e.h = e.h * sy;
  }
  return e;
}
function elToSvgString(el: any) {
  const o = el.opacity != null ? el.opacity : 1;
  const c = el.color || "#1e293b";
  const sw = el.sw || 4;
  if (el.kind === "path" && el.ink) return '<path d="' + (el.d || inkOutline(el.pts || [], sw, el.pen)) + '" fill="' + c + '" stroke="' + c + '" stroke-width="0.5" stroke-linejoin="round" opacity="' + o + '"/>';
  if (el.kind === "path" && el.pen === "neon") {
    const dN = strokePath(el.pts || []);
    return '<g opacity="' + o + '"><path d="' + dN + '" stroke="' + c + '" stroke-width="' + (sw * 4.5) + '" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.22"/><path d="' + dN + '" stroke="' + c + '" stroke-width="' + (sw * 2.2) + '" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.45"/><path d="' + dN + '" stroke="#ffffff" stroke-width="' + Math.max(1, sw * 0.5) + '" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/></g>';
  }
  if (el.kind === "path") return '<path d="' + strokePath(el.pts || []) + '" stroke="' + c + '" stroke-width="' + sw + '" fill="none" stroke-linecap="' + (el.pen === "highlighter" ? "butt" : "round") + '"' + (el.pen === "dashed" ? ' stroke-dasharray="' + (sw * 1.2) + ' ' + (sw * 3) + '"' : '') + ' stroke-linejoin="round" opacity="' + o + '"/>';
  if (el.kind === "line") return '<line x1="' + el.x1 + '" y1="' + el.y1 + '" x2="' + el.x2 + '" y2="' + el.y2 + '" stroke="' + c + '" stroke-width="' + sw + '" stroke-linecap="round" opacity="' + o + '"/>';
  if (el.kind === "arrow") {
    const ah = arrowHeadAt(el.x1, el.y1, el.x2, el.y2, sw * (el.head || 4));
    return '<line x1="' + el.x1 + '" y1="' + el.y1 + '" x2="' + ah.bx + '" y2="' + ah.by + '" stroke="' + c + '" stroke-width="' + sw + '" stroke-linecap="round" opacity="' + o + '"/><polygon points="' + ah.poly + '" fill="' + c + '" opacity="' + o + '"/>';
  }
  if (el.kind === "darrow") {
    const sd2 = sw * (el.head || 4);
    const h1 = arrowHeadAt(el.x1, el.y1, el.x2, el.y2, sd2);
    const h2 = arrowHeadAt(el.x2, el.y2, el.x1, el.y1, sd2);
    return '<line x1="' + h2.bx + '" y1="' + h2.by + '" x2="' + h1.bx + '" y2="' + h1.by + '" stroke="' + c + '" stroke-width="' + sw + '" stroke-linecap="round" opacity="' + o + '"/><polygon points="' + h1.poly + '" fill="' + c + '" opacity="' + o + '"/><polygon points="' + h2.poly + '" fill="' + c + '" opacity="' + o + '"/>';
  }
  if (el.kind === "heart") return '<path d="' + heartPath(el) + '" stroke="' + c + '" stroke-width="' + sw + '" fill="' + (el.fill ? c : "none") + '" stroke-linejoin="round" opacity="' + o + '"/>';
  if (el.kind === "rect") { const r = normRect(el); return '<rect x="' + r.x + '" y="' + r.y + '" width="' + Math.max(1, r.w) + '" height="' + Math.max(1, r.h) + '" stroke="' + c + '" stroke-width="' + sw + '" fill="' + (el.fill ? c : "none") + '" rx="8" opacity="' + o + '"/>'; }
  if (el.kind === "ellipse") { const r = normRect(el); return '<ellipse cx="' + (r.x + r.w / 2) + '" cy="' + (r.y + r.h / 2) + '" rx="' + Math.max(1, r.w / 2) + '" ry="' + Math.max(1, r.h / 2) + '" stroke="' + c + '" stroke-width="' + sw + '" fill="' + (el.fill ? c : "none") + '" opacity="' + o + '"/>'; }
  if (el.kind === "triangle") { const r = normRect(el); return '<polygon points="' + (r.x + r.w / 2) + ',' + r.y + ' ' + r.x + ',' + (r.y + r.h) + ' ' + (r.x + r.w) + ',' + (r.y + r.h) + '" stroke="' + c + '" stroke-width="' + sw + '" fill="' + (el.fill ? c : "none") + '" stroke-linejoin="round" opacity="' + o + '"/>'; }
  if (POLY_SHAPES.indexOf(el.kind) !== -1) { return '<polygon points="' + shapePoints(el) + '" stroke="' + c + '" stroke-width="' + sw + '" fill="' + (el.fill ? c : "none") + '" stroke-linejoin="round" opacity="' + o + '"/>'; }
  if (el.kind === "image") return '<image href="' + (el.src || "") + '" x="' + el.x + '" y="' + el.y + '" width="' + Math.max(1, el.w) + '" height="' + Math.max(1, el.h) + '" preserveAspectRatio="none" opacity="' + o + '"/>';
  if (el.kind === "text") { const s = el.size || 24; return '<text x="' + el.x + '" y="' + el.y + '" fill="' + c + '" font-size="' + s + '" font-family="sans-serif" font-weight="600" opacity="' + o + '">' + escapeHtml(el.text || "") + '</text>'; }
  return "";
}
function elToSvgStringR(el: any) {
  const s = elToSvgString(el);
  if (!el || !el.rot || !s) return s;
  const b = canvasBBox(el);
  return '<g transform="rotate(' + el.rot + ' ' + (b.x + b.w / 2) + ' ' + (b.y + b.h / 2) + ')">' + s + "</g>";
}
function ShapeIcon({ kind, size = 15 }: any) {
  const el: any = { kind, x: 2, y: 2, w: size - 4, h: size - 4 };
  let node: any = null;
  if (kind === "rect") node = <rect x={2} y={2} width={size - 4} height={size - 4} rx={2} fill="none" stroke="currentColor" strokeWidth={1.5} />;
  else if (kind === "ellipse") node = <ellipse cx={size / 2} cy={size / 2} rx={(size - 4) / 2} ry={(size - 4) / 2} fill="none" stroke="currentColor" strokeWidth={1.5} />;
  else if (kind === "triangle") node = <polygon points={(size / 2) + ",2 2," + (size - 2) + " " + (size - 2) + "," + (size - 2)} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />;
  else if (kind === "heart") node = <path d={heartPath(el)} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />;
  else if (kind === "line") node = <line x1={2} y1={size - 3} x2={size - 2} y2={3} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />;
  else if (kind === "arrow" || kind === "darrow") {
    const i1 = arrowHeadAt(3, size - 4, size - 3, 4, 3.4);
    const i2 = arrowHeadAt(size - 3, 4, 3, size - 4, 3.4);
    node = (
      <g>
        <line x1={kind === "darrow" ? i2.bx : 3} y1={kind === "darrow" ? i2.by : size - 4} x2={i1.bx} y2={i1.by} stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
        <polygon points={i1.poly} fill="currentColor" />
        {kind === "darrow" && <polygon points={i2.poly} fill="currentColor" />}
      </g>
    );
  }
  else node = <polygon points={shapePoints(el)} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />;
  return <svg width={size} height={size} viewBox={"0 0 " + size + " " + size} className="shrink-0">{node}</svg>;
}
const PDFJS_URLS = [
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
  "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js",
  "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.min.js",
];
function loadScriptOnce(srcUrl: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = srcUrl;
    s.async = true;
    s.crossOrigin = "anonymous";
    s.onload = () => resolve();
    s.onerror = () => { s.remove(); reject(new Error("falhou " + srcUrl)); };
    document.head.appendChild(s);
  });
}
let pdfjsPromise: Promise<any> | null = null;
function ensurePdfJs() {
  if ((window as any).pdfjsLib) return Promise.resolve((window as any).pdfjsLib);
  if (pdfjsPromise) return pdfjsPromise;
  pdfjsPromise = (async () => {
    let lastErr: any = null;
    for (const u of PDFJS_URLS) {
      try {
        await loadScriptOnce(u);
        const lib = (window as any).pdfjsLib;
        if (lib) {
          lib.GlobalWorkerOptions.workerSrc = u.replace("pdf.min.js", "pdf.worker.min.js");
          return lib;
        }
      } catch (e) { lastErr = e; }
    }
    pdfjsPromise = null;
    throw lastErr || new Error("pdf.js indisponível");
  })();
  return pdfjsPromise;
}
function readFileAsDataURL(f: any) {
  return new Promise<string>((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = () => reject(new Error("não consegui ler o arquivo"));
    r.readAsDataURL(f);
  });
}
function imageDims(srcUrl: string) {
  return new Promise<{ w: number; h: number }>((resolve, reject) => {
    const im = new Image();
    im.onload = () => resolve({ w: im.naturalWidth || 1, h: im.naturalHeight || 1 });
    im.onerror = () => reject(new Error("imagem inválida"));
    im.src = srcUrl;
  });
}
// Monta um PDF de 1 página embutindo um JPEG (DCTDecode) — sem biblioteca externa.
function buildPdfFromJpeg(jpeg: Uint8Array, w: number, h: number): Blob {
  const enc = (s: string) => { const a = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i) & 0xff; return a; };
  const parts: Uint8Array[] = [];
  let pos = 0;
  const off: number[] = [];
  const put = (u: Uint8Array) => { parts.push(u); pos += u.length; };
  const puts = (s: string) => put(enc(s));
  puts("%PDF-1.3\n");
  off[1] = pos; puts("1 0 obj\n<</Type/Catalog/Pages 2 0 R>>\nendobj\n");
  off[2] = pos; puts("2 0 obj\n<</Type/Pages/Kids[3 0 R]/Count 1>>\nendobj\n");
  off[3] = pos; puts("3 0 obj\n<</Type/Page/Parent 2 0 R/MediaBox[0 0 " + w + " " + h + "]/Resources<</XObject<</Im0 4 0 R>>>>/Contents 5 0 R>>\nendobj\n");
  off[4] = pos; puts("4 0 obj\n<</Type/XObject/Subtype/Image/Width " + w + "/Height " + h + "/ColorSpace/DeviceRGB/BitsPerComponent 8/Filter/DCTDecode/Length " + jpeg.length + ">>\nstream\n");
  put(jpeg); puts("\nendstream\nendobj\n");
  const content = "q " + w + " 0 0 " + h + " 0 0 cm /Im0 Do Q\n";
  off[5] = pos; puts("5 0 obj\n<</Length " + content.length + ">>\nstream\n" + content + "endstream\nendobj\n");
  const xref = pos;
  let x = "xref\n0 6\n0000000000 65535 f \n";
  for (let i = 1; i <= 5; i++) x += String(off[i]).padStart(10, "0") + " 00000 n \n";
  puts(x);
  puts("trailer\n<</Size 6/Root 1 0 R>>\nstartxref\n" + xref + "\n%%EOF");
  return new Blob(parts as any, { type: "application/pdf" });
}
function makeImportedPage(title: string, srcUrl: string, iw: number, ih: number) {
  const def: any = CANVAS_SHEETS.find((s: any) => s.id === "a4");
  const landscape = iw > ih;
  const W = landscape ? def.h : def.w;
  const H = landscape ? def.w : def.h;
  const sc = Math.min(W / iw, H / ih);
  const w = Math.round(iw * sc), h = Math.round(ih * sc);
  return {
    title,
    content: [{ id: uid(), type: "canvas", paper: "blank", bg: "transparent", sheet: "a4", orient: landscape ? "landscape" : "portrait", els: [{ id: uid(), kind: "image", x: Math.round((W - w) / 2), y: Math.round((H - h) / 2), w, h, src: srcUrl }] }],
  };
}

// ========================================================================
// Markdown paste support
// ========================================================================
const escapeHtml = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function parseMarkdownInline(text: string): string {
  text = escapeHtml(text);
  const codeSpans: string[] = [];
  text = text.replace(/`([^`\n]+)`/g, (_, code) => {
    codeSpans.push(code);
    return "CODE" + (codeSpans.length - 1) + "";
  });
  text = text.replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__([^_\n]+)__/g, "<strong>$1</strong>");
  text = text.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");
  text = text.replace(/(^|[^a-zA-Z0-9_])_([^_\n]+)_(?=$|[^a-zA-Z0-9_])/g, "$1<em>$2</em>");
  text = text.replace(/~~([^~\n]+)~~/g, "<s>$1</s>");
  text = text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" class="text-primary underline" target="_blank" rel="noopener">$1</a>');
  text = text.replace(/CODE(\d+)/g, (_, idx) => {
    return '<code class="px-1 py-0.5 rounded bg-muted text-foreground font-mono text-[0.9em]">' + codeSpans[parseInt(idx)] + "</code>";
  });
  return text;
}

function parseMarkdownToBlocks(text: string): any[] {
  text = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const lines = text.split("\n");
  const blocks: any[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const codeOpen = line.match(/^```(\w*)\s*$/);
    if (codeOpen) {
      const lang = codeOpen[1] || "text";
      let code = "";
      i++;
      while (i < lines.length && !lines[i].match(/^```\s*$/)) {
        code += (code ? "\n" : "") + lines[i];
        i++;
      }
      blocks.push(newBlock("code", { html: code, language: lang }));
      i++;
      continue;
    }
    const h3 = line.match(/^###\s+(.+)$/);
    const h2 = line.match(/^##\s+(.+)$/);
    const h1 = line.match(/^#\s+(.+)$/);
    if (h3) blocks.push(newBlock("h3", { html: parseMarkdownInline(h3[1]) }));
    else if (h2) blocks.push(newBlock("h2", { html: parseMarkdownInline(h2[1]) }));
    else if (h1) blocks.push(newBlock("h1", { html: parseMarkdownInline(h1[1]) }));
    else if (line.match(/^>\s?/)) blocks.push(newBlock("quote", { html: parseMarkdownInline(line.replace(/^>\s?/, "")) }));
    else if (line.match(/^\s*[-*_]{3,}\s*$/)) blocks.push(newBlock("divider"));
    else if (line.match(/^\s*[-*+]\s+\[\s\]\s+/)) blocks.push(newBlock("todo", { html: parseMarkdownInline(line.replace(/^\s*[-*+]\s+\[\s\]\s+/, "")), checked: false }));
    else if (line.match(/^\s*[-*+]\s+\[x\]\s+/i)) blocks.push(newBlock("todo", { html: parseMarkdownInline(line.replace(/^\s*[-*+]\s+\[x\]\s+/i, "")), checked: true }));
    else if (line.match(/^\s*[-*+]\s+/)) blocks.push(newBlock("bullet", { html: parseMarkdownInline(line.replace(/^\s*[-*+]\s+/, "")) }));
    else if (line.match(/^\s*\d+\.\s+/)) blocks.push(newBlock("numbered", { html: parseMarkdownInline(line.replace(/^\s*\d+\.\s+/, "")) }));
    else if (line.trim() === "") { /* skip */ }
    else blocks.push(newBlock("paragraph", { html: parseMarkdownInline(line) }));
    i++;
  }
  return blocks;
}

function looksLikeMarkdown(text: string): boolean {
  if (text.includes("\n")) return true;
  return /\*\*[^*]+\*\*|__[^_]+__|~~[^~]+~~|`[^`]+`|\[[^\]]+\]\([^)]+\)/.test(text);
}

const PanelLeftCloseIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>
  </svg>
);

const PanelLeftOpenIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/>
  </svg>
);

const EraserIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"/><path d="M22 21H7"/><path d="m5 11 9 9"/>
  </svg>
);

const CursorIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m4 4 7.07 17 2.51-7.39L21 11.07z"/>
  </svg>
);

// ========================================================================
// CustomDialog — substitui BeaUI.Dialog que herdava cor rosada do tema
// ========================================================================
function CustomDialog({ open, onClose, title, children, maxWidth = "max-w-md" }: any) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in p-4" onClick={onClose}>
      <div
        className={"rounded-2xl border-2 border-border w-full " + maxWidth + " shadow-2xl overflow-hidden animate-scale-in flex flex-col max-h-[85vh]"}
        style={{ backgroundColor: "hsl(var(--card))" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b-2 border-border shrink-0">
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          <button onClick={onClose} className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors text-lg leading-none" type="button">×</button>
        </div>
        <div className="p-5 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

function CustomMenu({ items, triggerCls, triggerIconName, triggerIconSize, triggerLabel, triggerContent }: any) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (open) { setOpen(false); return; }
    if (triggerRef.current) {
      const r = triggerRef.current.getBoundingClientRect();
      const menuWidth = 230;
      const menuHeight = items.length * 36 + 16;
      let top = r.bottom + 6;
      let left = r.right - menuWidth;
      if (left < 8) left = Math.min(r.left, 8);
      if (top + menuHeight > window.innerHeight - 8) top = Math.max(8, r.top - menuHeight - 6);
      setPos({ top, left });
      setOpen(true);
    }
  };

  useEffect(() => {
    if (!open) return;
    const handler = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && triggerRef.current && !triggerRef.current.contains(e.target)) setOpen(false);
    };
    const t = setTimeout(() => document.addEventListener("mousedown", handler), 0);
    return () => { clearTimeout(t); document.removeEventListener("mousedown", handler); };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        onClick={handleClick}
        onMouseDown={(e) => e.stopPropagation()}
        className={triggerCls || "h-6 w-6 flex items-center justify-center rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"}
        title={triggerLabel || "Mais opções"}
        type="button"
      >
        {triggerContent || (triggerIconName ? <span>⚙️</span> : <span style={{ letterSpacing: "1px" }}>•••</span>)}
      </button>
      {open && pos && (
        <div
          ref={menuRef}
          style={{ position: "fixed", top: pos.top, left: pos.left, zIndex: 99999, width: 230, backgroundColor: "hsl(var(--card))" }}
          className="rounded-xl border-2 border-border shadow-2xl py-1.5 animate-fade-in"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          {(Array.isArray(items)?items:[]).map((item: any, i: number) => (
            <div key={i}>
              {item.divider && i > 0 && <div className="my-1 border-t border-border/60" />}
              <button
                onClick={(e) => { e.stopPropagation(); item.onClick(); setOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors text-foreground hover:bg-accent"
                type="button"
              >
                {item.icon && <span className="shrink-0 w-4 flex items-center justify-center">{item.icon}</span>}
                <span className="truncate flex-1">{item.label}</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function AppContent({ db, user, files }: any) {
  const { toast } = BeaUI.useToast();
  const bootstrapped = useRef(false);
  const [ready, setReady] = useState(false);
  const [bootError, setBootError] = useState<string | null>(null);
  const [pages, setPages] = useState<any[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [view, setView] = useState<"page" | "trash">("page");
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  // Como no Notion: ao abrir uma página, toda a cadeia de pais expande na
  // árvore lateral — subpáginas nunca ficam "sumidas"
  useEffect(() => {
    if (!activeId) return;
    setExpanded((ex) => {
      const next: any = { ...ex };
      let cur: any = (Array.isArray(pages)?pages:[]).find((pg) => pg.id === activeId);
      let guard = 0;
      while (cur && cur.parent_id && guard++ < 50) {
        next[cur.parent_id] = true;
        cur = (Array.isArray(pages)?pages:[]).find((pg) => pg.id === cur.parent_id);
      }
      return next;
    });
  }, [activeId, pages.length]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(max-width: 767px)").matches);
  const [sidebarOpen, setSidebarOpen] = useState(() => !(typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(max-width: 767px)").matches));
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [isResizing, setIsResizing] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(max-width: 767px)");
    const on = () => setIsMobile(mq.matches);
    on();
    if (mq.addEventListener) mq.addEventListener("change", on); else mq.addListener(on);
    return () => { if (mq.removeEventListener) mq.removeEventListener("change", on); else mq.removeListener(on); };
  }, []);
  // Ao alternar entre celular e desktop, ajusta o estado padrão da barra lateral.
  useEffect(() => { setSidebarOpen(!isMobile); }, [isMobile]);
  const closeSidebarOnMobile = () => { if (isMobile) setSidebarOpen(false); };
  const [showIconPicker, setShowIconPicker] = useState(false);
  const [showCoverPicker, setShowCoverPicker] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [moveTarget, setMoveTarget] = useState<any>(null);
  const canEdit = user.role === "admin" || user.role === "builder";

  const pendingChanges = useRef<Record<string, any>>({});
  const saveTimer = useRef<any>(null);

  const parseRows = (rows: any[]) => (Array.isArray(rows)?rows:[]).map((r: any) => {
    let content = r.content;
    if (typeof content === "string") {
      try { content = JSON.parse(content); } catch { content = []; }
    }
    return { ...r, content };
  });

  useEffect(() => { linkUicons(); }, []);

  useEffect(() => {
    if (bootstrapped.current) return;
    bootstrapped.current = true;
    (async () => {
      try {
        await db.execute("CREATE TABLE IF NOT EXISTS " + TBL + " (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), owner_id TEXT NOT NULL, parent_id UUID, title TEXT NOT NULL DEFAULT '', icon TEXT NOT NULL DEFAULT '📄', cover_url TEXT, content JSONB NOT NULL DEFAULT '[]'::jsonb, is_favorite BOOLEAN NOT NULL DEFAULT false, sort_order INTEGER NOT NULL DEFAULT 0, deleted_at TIMESTAMP, created_at TIMESTAMP DEFAULT NOW(), updated_at TIMESTAMP DEFAULT NOW())");
        await db.execute("CREATE INDEX IF NOT EXISTS idx_" + HASH + "_owner ON " + TBL + "(owner_id)");
        await db.execute("CREATE INDEX IF NOT EXISTS idx_" + HASH + "_parent ON " + TBL + "(parent_id)");
        const rows = await db.query("SELECT * FROM " + TBL + " WHERE owner_id = $1 ORDER BY sort_order ASC, created_at ASC", [user.id]);
        setPages(parseRows(rows));
        setReady(true);
      } catch (e) {
        setBootError(e instanceof Error ? e.message : String(e));
      }
    })();
  }, []);

  const reload = async () => {
    const rows = await db.query("SELECT * FROM " + TBL + " WHERE owner_id = $1 ORDER BY sort_order ASC, created_at ASC", [user.id]);
    const parsed = parseRows(rows);
    setPages(parsed);
    return parsed;
  };

  const createPage = async (parentId: string | null, kind: "doc" | "canvas" | "diagram" = "doc") => {
    if (!canEdit) return;
    try {
      const siblings = (Array.isArray(pages)?pages:[]).filter((p) => p.parent_id === parentId && !p.deleted_at);
      const sortOrder = siblings.length;
      const isCanvas = kind === "canvas";
      const isDiagram = kind === "diagram";
      const content = isDiagram
        ? [{ id: uid(), type: "diagram", nodes: [], edges: [] }]
        : isCanvas
        ? [{ id: uid(), type: "canvas", paper: "lines", bg: "transparent", els: [] }]
        : [newBlock()];
      const newTitle = isDiagram ? "Novo diagrama" : isCanvas ? "Novo caderno" : "";
      const newIcon = isDiagram ? "ic:share" : isCanvas ? "ic:edit" : "ic:file-text";
      const r = await db.query<any>("INSERT INTO " + TBL + " (owner_id, parent_id, title, icon, content, sort_order) VALUES ($1, $2, $3, $4, $5::jsonb, $6) RETURNING *", [user.id, parentId, newTitle, newIcon, JSON.stringify(content), sortOrder]);
      const np = parseRows(r)[0];
      setPages((prev) => [...prev, np]);
      if (parentId) setExpanded((e) => ({ ...e, [parentId]: true }));
      setActiveId(np.id);
      setView("page");
    } catch (e: any) {
      toast("Erro ao criar página: " + e.message, "error");
    }
  };

  // Cria uma subpágina e a retorna SEM navegar (usada pelo /pagina no texto)
  const createLinkedPage = async (parentId: string | null, title: string) => {
    if (!canEdit) return null;
    try {
      const siblings = (Array.isArray(pages) ? pages : []).filter((p) => p.parent_id === parentId && !p.deleted_at);
      const sortOrder = siblings.length;
      const content = [newBlock()];
      const r = await db.query<any>("INSERT INTO " + TBL + " (owner_id, parent_id, title, icon, content, sort_order) VALUES ($1, $2, $3, $4, $5::jsonb, $6) RETURNING *", [user.id, parentId, title || "", "ic:file-text", JSON.stringify(content), sortOrder]);
      const np = parseRows(r)[0];
      setPages((prev) => [...prev, np]);
      if (parentId) setExpanded((e) => ({ ...e, [parentId]: true }));
      return np;
    } catch (e: any) {
      toast("Erro ao criar página: " + e.message, "error");
      return null;
    }
  };

  const createImportedPages = async (parentId: string | null, items: any[]) => {
    if (!canEdit || !Array.isArray(items) || !items.length) return;
    try {
      const siblings = (Array.isArray(pages)?pages:[]).filter((p) => p.parent_id === parentId && !p.deleted_at);
      let sortOrder = siblings.length;
      const created: any[] = [];
      for (const it of items) {
        const r = await db.query<any>("INSERT INTO " + TBL + " (owner_id, parent_id, title, icon, content, sort_order) VALUES ($1, $2, $3, $4, $5::jsonb, $6) RETURNING *", [user.id, parentId, it.title || "Página importada", "ic:file-text", JSON.stringify(it.content || []), sortOrder++]);
        created.push(parseRows(r)[0]);
      }
      setPages((prev) => [...prev, ...created]);
      if (parentId) setExpanded((e) => ({ ...e, [parentId]: true }));
      if (created[0]) { setActiveId(created[0].id); setView("page"); }
    } catch (e: any) {
      toast("Erro ao importar páginas: " + e.message, "error");
    }
  };

  // Cria um diagrama/caderno como subpágina SEM navegar — para incorporar em blocos
  const createEmbeddedPage = async (parentId: string | null, kind: "diagram" | "canvas"): Promise<string | null> => {
    if (!canEdit) return null;
    try {
      const siblings = (Array.isArray(pages)?pages:[]).filter((p) => p.parent_id === parentId && !p.deleted_at);
      const isDiagram = kind === "diagram";
      const content = isDiagram ? [{ id: uid(), type: "diagram", nodes: [], edges: [] }] : [{ id: uid(), type: "canvas", paper: "lines", bg: "transparent", els: [] }];
      const r = await db.query<any>("INSERT INTO " + TBL + " (owner_id, parent_id, title, icon, content, sort_order) VALUES ($1, $2, $3, $4, $5::jsonb, $6) RETURNING *", [user.id, parentId, isDiagram ? "Novo diagrama" : "Novo caderno", isDiagram ? "🗺️" : "🎨", JSON.stringify(content), siblings.length]);
      const np = parseRows(r)[0];
      setPages((prev) => [...prev, np]);
      if (parentId) setExpanded((e) => ({ ...e, [parentId]: true }));
      return np.id;
    } catch (e: any) {
      toast("Erro ao criar: " + e.message, "error");
      return null;
    }
  };

  // Duplica uma página e todas as suas subpáginas (estrutura completa)
  const duplicatePage = async (id: string) => {
    if (!canEdit) return;
    try {
      const byId = new Map((Array.isArray(pages) ? pages : []).map((p) => [p.id, p]));
      const src = byId.get(id);
      if (!src) return;
      const childrenOf = (pid: string) => (Array.isArray(pages) ? pages : []).filter((p) => p.parent_id === pid && !p.deleted_at).sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
      const created: any[] = [];
      const cloneRec = async (origId: string, newParentId: string | null, suffix: string): Promise<any> => {
        const o = byId.get(origId);
        if (!o) return null;
        const sibCount = (Array.isArray(pages) ? pages : []).filter((p) => p.parent_id === newParentId && !p.deleted_at).length + created.filter((p) => p.parent_id === newParentId).length;
        const r = await db.query<any>("INSERT INTO " + TBL + " (owner_id, parent_id, title, icon, content, sort_order) VALUES ($1, $2, $3, $4, $5::jsonb, $6) RETURNING *", [user.id, newParentId, (o.title || "Sem título") + suffix, o.icon || "ic:file-text", JSON.stringify(o.content || []), sibCount]);
        const np = parseRows(r)[0];
        created.push(np);
        for (const k of childrenOf(origId)) await cloneRec(k.id, np.id, "");
        return np;
      };
      const root = await cloneRec(id, src.parent_id, " (cópia)");
      setPages((prev) => [...prev, ...created]);
      if (root) {
        if (src.parent_id) setExpanded((e) => ({ ...e, [src.parent_id]: true }));
        setActiveId(root.id);
        setView("page");
      }
      toast(created.length > 1 ? "Página e " + (created.length - 1) + " subpágina(s) duplicadas" : "Página duplicada", "success");
    } catch (e: any) {
      toast("Erro ao duplicar: " + e.message, "error");
    }
  };

  const flushSavesNow = async () => {
    if (saveTimer.current) { clearTimeout(saveTimer.current); saveTimer.current = null; }
    const changes = pendingChanges.current;
    if (!Object.keys(changes).length) return;
    pendingChanges.current = {};
    for (const [pid, f] of Object.entries(changes)) {
      try {
        const sets: string[] = [];
        const params: any[] = [];
        let i = 1;
        for (const [k, v] of Object.entries(f as any)) {
          if (k === "content") { sets.push("content = $" + i + "::jsonb"); params.push(JSON.stringify(v)); }
          else { sets.push(k + " = $" + i); params.push(v); }
          i++;
        }
        sets.push("updated_at = NOW()");
        params.push(pid, user.id);
        await db.execute("UPDATE " + TBL + " SET " + sets.join(", ") + " WHERE id = $" + i + " AND owner_id = $" + (i + 1), params);
      } catch (e: any) {
        toast("Erro ao salvar: " + e.message, "error");
      }
    }
  };

  const queueSave = (id: string, fields: any) => {
    setPages((prev) => (Array.isArray(prev)?prev:[]).map((p) => (p.id === id ? { ...p, ...fields, updated_at: new Date().toISOString() } : p)));
    pendingChanges.current[id] = { ...(pendingChanges.current[id] || {}), ...fields };
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => { saveTimer.current = null; flushSavesNow(); }, 700);
  };

  // O debounce não sobrevive a fechar/recarregar a aba: grava na hora
  useEffect(() => {
    const onHide = () => { flushSavesNow(); };
    const onVis = () => { if (document.visibilityState === "hidden") flushSavesNow(); };
    window.addEventListener("pagehide", onHide);
    document.addEventListener("visibilitychange", onVis);
    return () => { window.removeEventListener("pagehide", onHide); document.removeEventListener("visibilitychange", onVis); };
  }, []);

  const reorderPages = async (id: string, newParentId: string | null, targetIndex: number) => {
    if (!canEdit) return;
    try {
      const targetSiblings = (Array.isArray(pages)?pages:[]).filter(p => p.parent_id === newParentId && p.id !== id && !p.deleted_at).sort((a, b) => a.sort_order - b.sort_order);
      const movingPage = (Array.isArray(pages)?pages:[]).find(p => p.id === id);
      if (!movingPage) return;
      const newSiblings = [...targetSiblings];
      newSiblings.splice(targetIndex, 0, movingPage);
      const updates = (Array.isArray(newSiblings)?newSiblings:[]).map((p, i) => ({ id: p.id, sort_order: i, parent_id: newParentId }));
      setPages(prev => (Array.isArray(prev)?prev:[]).map(p => {
        const u = (Array.isArray(updates)?updates:[]).find(x => x.id === p.id);
        if (u) return { ...p, sort_order: u.sort_order, parent_id: u.parent_id };
        return p;
      }));
      for (const u of updates) {
        queueSave(u.id, { sort_order: u.sort_order, parent_id: u.parent_id });
      }
    } catch (e: any) {
      toast("Erro ao reordenar: " + e.message, "error");
    }
  };

  const softDelete = async (id: string) => {
    if (!canEdit) return;
    try {
      const collectIds = (pid: string): string[] => {
        const kids = (Array.isArray(pages)?pages:[]).filter((p) => p.parent_id === pid).map((p) => p.id);
        return [pid, ...kids.flatMap(collectIds)];
      };
      const ids = collectIds(id);
      await db.execute("UPDATE " + TBL + " SET deleted_at = NOW() WHERE owner_id = $1 AND id = ANY($2::uuid[])", [user.id, ids]);
      await reload();
      if (activeId && ids.includes(activeId)) setActiveId(null);
      toast("Movido para a lixeira", "success");
    } catch (e: any) {
      toast("Erro ao deletar: " + e.message, "error");
    }
  };

  const restore = async (id: string) => {
    try {
      await db.execute("UPDATE " + TBL + " SET deleted_at = NULL WHERE id = $1 AND owner_id = $2", [id, user.id]);
      await reload();
      toast("Página restaurada", "success");
    } catch (e: any) { toast("Erro ao restaurar: " + e.message, "error"); }
  };

  const hardDelete = async (id: string) => {
    try {
      await db.execute("DELETE FROM " + TBL + " WHERE id = $1 AND owner_id = $2", [id, user.id]);
      await reload();
      toast("Excluído permanentemente", "success");
    } catch (e: any) { toast("Erro ao excluir: " + e.message, "error"); }
  };

  const emptyTrash = async () => {
    if (!confirm("Excluir permanentemente todas as páginas da lixeira?")) return;
    try {
      await db.execute("DELETE FROM " + TBL + " WHERE owner_id = $1 AND deleted_at IS NOT NULL", [user.id]);
      await reload();
      toast("Lixeira esvaziada", "success");
    } catch (e: any) { toast("Erro: " + e.message, "error"); }
  };

  const toggleFav = (id: string) => {
    const p = (Array.isArray(pages)?pages:[]).find((x) => x.id === id);
    if (!p) return;
    queueSave(id, { is_favorite: !p.is_favorite });
  };

  const movePage = (id: string, newParentId: string | null) => {
    if (id === newParentId) return;
    const isDescendant = (anc: string, target: string): boolean => {
      const kids = (Array.isArray(pages)?pages:[]).filter((p) => p.parent_id === anc);
      for (const k of kids) { if (k.id === target) return true; if (isDescendant(k.id, target)) return true; }
      return false;
    };
    if (newParentId && isDescendant(id, newParentId)) { toast("Não é possível mover para uma página descendente", "error"); return; }
    if (newParentId) setExpanded((prev) => ({ ...prev, [newParentId]: true }));
    queueSave(id, { parent_id: newParentId });
    toast(newParentId ? "Página movida" : "Movida para a raiz", "success");
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === "k") { e.preventDefault(); setSearchOpen(true); }
      else if (meta && e.key.toLowerCase() === "n" && canEdit) { e.preventDefault(); createPage(null); }
      else if (meta && e.key === "\\") { e.preventDefault(); setSidebarOpen((s) => !s); }
      else if (e.key === "Escape") { setSearchOpen(false); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [canEdit, pages]);

  if (bootError) return <div className="min-h-screen bg-background flex items-center justify-center p-6"><div className="rounded-xl border-2 border-destructive bg-destructive/10 p-6 max-w-md"><div className="font-semibold text-destructive mb-2">Erro de inicialização</div><div className="text-sm text-foreground">{bootError}</div></div></div>;
  if (!ready) return <div className="min-h-screen bg-background flex items-center justify-center"><BeaUI.LoadingState message="Carregando seu workspace..." /></div>;

  const activePage = (Array.isArray(pages)?pages:[]).find((p) => p.id === activeId && !p.deleted_at);
  // Caderno e diagrama ocupam a tela inteira (têm barra própria), sem o header padrão
  const isCanvasView = view === "page" && activePage && (isCanvasPage(activePage) || isDiagramPage(activePage));
  const pageHeaderActions = activePage && view === "page" ? (
    <div className="flex items-center gap-1 shrink-0">
      {canEdit && (<button onClick={() => toggleFav(activePage.id)} className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-accent transition-colors" title={activePage.is_favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"} type="button">{activePage.is_favorite ? "⭐" : "☆"}</button>)}
      {canEdit && (
        <CustomMenu
          triggerCls="h-8 w-8 flex items-center justify-center rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors text-base font-bold leading-none pb-1"
          triggerContent={<span style={{ letterSpacing: "1px" }}>•••</span>}
          items={[
            { label: "Alterar ícone", icon: <span className="text-base">{pageIconNode(activePage.icon)}</span>, onClick: () => setShowIconPicker(true) },
            ...(!isCanvasPage(activePage) && !isDiagramPage(activePage) ? [
              { label: activePage.cover_url ? "Trocar capa/cor" : "Adicionar capa/cor", icon: <span className="text-sm">🖼️</span>, onClick: () => setShowCoverPicker(true) },
              ...(activePage.cover_url ? [{ label: "Remover capa", icon: <span className="text-sm">🚫</span>, onClick: () => queueSave(activePage.id, { cover_url: null }) }] : []),
            ] : []),
            { label: "Nova subpágina", icon: <span className="text-sm">➕</span>, onClick: () => createPage(activePage.id), divider: true },
            { label: "Novo caderno (subpágina)", icon: <span className="text-sm">✏️</span>, onClick: () => createPage(activePage.id, "canvas") },
            { label: "Novo diagrama (subpágina)", icon: <span className="text-sm">🗺️</span>, onClick: () => createPage(activePage.id, "diagram") },
            { label: "Duplicar página", icon: <span className="text-sm">⧉</span>, onClick: () => duplicatePage(activePage.id), divider: true },
            { label: "Mover para...", icon: <span className="text-sm">📁</span>, onClick: () => setMoveTarget(activePage) },
            { label: "Excluir página", icon: <span className="text-sm">🗑️</span>, onClick: () => { if (confirm("Mover \"" + (activePage.title || "Sem título") + "\" e suas subpáginas para a lixeira?")) softDelete(activePage.id); }, divider: true },
          ]}
        />
      )}
    </div>
  ) : null;

  return (
    <div className="min-h-screen flex bg-background">
      {/* Backdrop do menu lateral no celular */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setSidebarOpen(false)} />
      )}
      <div
        className={
          isMobile
            ? ("fixed inset-y-0 left-0 z-50 h-screen shadow-2xl transition-transform duration-200 ease-out " + (sidebarOpen ? "translate-x-0" : "-translate-x-full"))
            : ("relative shrink-0 overflow-hidden h-screen sticky top-0 " + (isResizing ? "" : "transition-[width] duration-200 ease-out"))
        }
        style={isMobile ? { width: Math.min(sidebarWidth, 300) + "px" } : { width: sidebarOpen ? sidebarWidth + "px" : "0px" }}
      >
        <Sidebar
          pages={pages} activeId={activeId} expanded={expanded} setExpanded={setExpanded}
          onSelect={(id: string) => { setActiveId(id); setView("page"); closeSidebarOnMobile(); }}
          onCreate={createPage} onToggleFav={toggleFav} onDelete={softDelete} onMove={movePage} onDuplicate={duplicatePage}
          onReorder={reorderPages}
          onShowTrash={() => { setView("trash"); closeSidebarOnMobile(); }} onShowSearch={() => { setSearchOpen(true); closeSidebarOnMobile(); }}
          onClose={() => setSidebarOpen(false)} user={user} canEdit={canEdit} view={view}
          onMoveDialog={(p: any) => setMoveTarget(p)}
          onGoHome={() => { setActiveId(null); setView("page"); closeSidebarOnMobile(); }}
          width={isMobile ? Math.min(sidebarWidth, 300) : sidebarWidth}
        />
        {sidebarOpen && !isMobile && (
          <div
            className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-primary/40 z-40 transition-colors"
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const startX = e.clientX;
              const startWidth = sidebarWidth;
              setIsResizing(true);
              const onMove = (ev: MouseEvent) => {
                const newWidth = startWidth + (ev.clientX - startX);
                setSidebarWidth(Math.max(200, Math.min(480, newWidth)));
              };
              const onUp = () => {
                setIsResizing(false);
                document.removeEventListener("mousemove", onMove);
                document.removeEventListener("mouseup", onUp);
                document.body.style.userSelect = "";
                document.body.style.cursor = "";
              };
              document.body.style.userSelect = "none";
              document.body.style.cursor = "col-resize";
              document.addEventListener("mousemove", onMove);
              document.addEventListener("mouseup", onUp);
            }}
            title="Arrastar para redimensionar"
          />
        )}
      </div>
      <div className="flex-1 flex flex-col min-w-0">
        {!isCanvasView && (
        <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-xl">
          <div className="px-3 sm:px-4 h-12 flex items-center gap-2">
            <button onClick={() => setSidebarOpen((s) => !s)} className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors shrink-0" title="Alternar barra lateral (⌘\\)" type="button">
              {sidebarOpen ? <PanelLeftCloseIcon size={16} /> : <PanelLeftOpenIcon size={16} />}
            </button>
            {view === "trash" ? (
              <div className="flex-1 flex items-center gap-2 text-sm font-medium"><span>🗑️</span><span>Lixeira</span></div>
            ) : activePage ? (
              <>
                <Breadcrumbs pages={pages} activePage={activePage} onSelect={(id: string) => setActiveId(id)} />
                {isCanvasPage(activePage) && (
                  <span className="shrink-0 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-wider">✏️ Caderno</span>
                )}
                {isDiagramPage(activePage) && (
                  <span className="shrink-0 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-wider">🗺️ Diagrama</span>
                )}
              </>
            ) : (
              <span className="flex-1 text-sm text-muted-foreground">Página inicial</span>
            )}
            {pageHeaderActions}
          </div>
        </header>
        )}
        <main className="flex-1 overflow-y-auto">
          {view === "trash" ? (
            <TrashView pages={pages} onRestore={restore} onHardDelete={hardDelete} onEmpty={emptyTrash} />
          ) : activePage ? (
            isCanvasPage(activePage) ? (
              <CanvasEditor
                key={activePage.id} page={activePage} canEdit={canEdit}
                onUpdate={(f: any) => queueSave(activePage.id, f)}
                onImportPages={(items: any[]) => createImportedPages(activePage.id, items)}
                headerLeft={<button onClick={() => setSidebarOpen((s) => !s)} className="h-8 w-8 flex items-center justify-center rounded-xl hover:bg-accent text-muted-foreground hover:text-foreground transition-colors shrink-0" title="Alternar barra lateral" type="button">{sidebarOpen ? <PanelLeftCloseIcon size={16} /> : <PanelLeftOpenIcon size={16} />}</button>}
                headerRight={pageHeaderActions}
                showIconPicker={showIconPicker} setShowIconPicker={setShowIconPicker}
              />
            ) : isDiagramPage(activePage) ? (
              <DiagramEditor
                key={activePage.id} page={activePage} canEdit={canEdit}
                onUpdate={(f: any) => queueSave(activePage.id, f)}
                headerLeft={<button onClick={() => setSidebarOpen((s) => !s)} className="h-8 w-8 flex items-center justify-center rounded-xl hover:bg-accent text-muted-foreground hover:text-foreground transition-colors shrink-0" title="Alternar barra lateral" type="button">{sidebarOpen ? <PanelLeftCloseIcon size={16} /> : <PanelLeftOpenIcon size={16} />}</button>}
                headerRight={pageHeaderActions}
                showIconPicker={showIconPicker} setShowIconPicker={setShowIconPicker}
              />
            ) : (
              <PageEditor
                key={activePage.id} page={activePage} pages={pages} canEdit={canEdit} files={files}
                onUpdate={(f: any) => queueSave(activePage.id, f)}
                showIconPicker={showIconPicker} setShowIconPicker={setShowIconPicker}
                showCoverPicker={showCoverPicker} setShowCoverPicker={setShowCoverPicker}
                showColorPicker={showColorPicker} setShowColorPicker={setShowColorPicker}
                onSelectPage={(id: string) => setActiveId(id)} onCreateSubpage={() => createPage(activePage.id)}
                onCreateEmbed={(kind: "diagram" | "canvas") => createEmbeddedPage(activePage.id, kind)}
                onCreatePageLink={(title: string) => createLinkedPage(activePage.id, title)}
              />
            )
          ) : (
            <div className="h-full flex items-center justify-center p-6">
              <div className="text-center max-w-md">
                <div className="text-7xl mb-6 inline-block">📝</div>
                <h2 className="dc-serif text-4xl font-semibold text-foreground mb-3">Bem-vindo, {user.name.split(" ")[0]}</h2>
                <p className="text-muted-foreground mb-8">Crie sua primeira página para começar a organizar suas ideias.</p>
                {canEdit && (
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <button onClick={() => createPage(null)} className="h-10 px-5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-lg shadow-primary/20"><span>➕</span>Nova página</button>
                    <button onClick={() => createPage(null, "canvas")} className="h-10 px-5 rounded-md border-2 border-border text-sm font-semibold text-foreground hover:bg-accent transition-colors inline-flex items-center gap-2" style={{ backgroundColor: "hsl(var(--card))" }} type="button"><span>✏️</span>Novo caderno</button>
                    <button onClick={() => createPage(null, "diagram")} className="h-10 px-5 rounded-md border-2 border-border text-sm font-semibold text-foreground hover:bg-accent transition-colors inline-flex items-center gap-2" style={{ backgroundColor: "hsl(var(--card))" }} type="button"><span>🗺️</span>Novo diagrama</button>
                  </div>
                )}
                <div className="mt-8 text-xs text-muted-foreground">
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <kbd className="px-2 py-1 rounded-md bg-muted border border-border shadow-sm">⌘N</kbd><span>nova</span>
                    <span className="mx-1">·</span>
                    <kbd className="px-2 py-1 rounded-md bg-muted border border-border shadow-sm">⌘K</kbd><span>buscar</span>
                    <span className="mx-1">·</span>
                    <kbd className="px-2 py-1 rounded-md bg-muted border border-border shadow-sm">⌘\</kbd><span>recolher</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      {searchOpen && (<CommandPalette pages={pages} onClose={() => setSearchOpen(false)} onSelect={(id: string) => { setActiveId(id); setView("page"); setSearchOpen(false); }} />)}
      {moveTarget && (<MoveDialog page={moveTarget} pages={pages} onClose={() => setMoveTarget(null)} onMove={(parentId: string | null) => { movePage(moveTarget.id, parentId); setMoveTarget(null); }} />)}
      {canEdit && <FormatToolbar />}
    </div>
  );
}

function MoveDialog({ page, pages, onClose, onMove }: any) {
  const [search, setSearch] = useState("");

  const forbidden = useMemo(() => {
    const set = new Set<string>();
    const collect = (id: string) => {
      set.add(id);
      (Array.isArray(pages)?pages:[]).filter((p: any) => p.parent_id === id).forEach((p: any) => collect(p.id));
    };
    collect(page.id);
    return set;
  }, [page.id, pages]);

  const renderTree = (parentId: string | null, level: number): any[] => {
    const items = (Array.isArray(pages)?pages:[]).filter((p: any) => p.parent_id === parentId && !p.deleted_at && !forbidden.has(p.id)).sort((a: any, b: any) => a.sort_order - b.sort_order);
    const out: any[] = [];
    for (const p of items) {
      const matchesSelf = !search || (p.title || "").toLowerCase().indexOf(search.toLowerCase()) !== -1;
      const childRows = renderTree(p.id, level + 1);
      if (matchesSelf || childRows.length > 0) {
        out.push(
          <button
            key={p.id}
            onClick={() => onMove(p.id)}
            className={"w-full flex items-center gap-2 py-1.5 rounded-md hover:bg-accent text-left text-sm group " + (p.id === page.parent_id ? "bg-accent/40" : "")}
            style={{ paddingLeft: 8 + level * 16, paddingRight: 8 }}
            type="button"
          >
            <span className="text-base shrink-0">{pageIconNode(p.icon)}</span>
            <span className="truncate flex-1 text-foreground">{p.title || "Sem título"}</span>
            {p.id === page.parent_id && <span className="text-[10px] text-muted-foreground shrink-0">atual</span>}
          </button>
        );
        out.push(...childRows);
      }
    }
    return out;
  };

  const tree = renderTree(null, 0);

  return (
    <CustomDialog open={true} onClose={onClose} title={"Mover \"" + (page.title || "Sem título") + "\" para..."}>
      <div className="space-y-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar destino..."
          className="w-full h-9 px-3 rounded-md border-2 border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          autoFocus
        />
        <div className="max-h-72 overflow-y-auto -mx-1 border-t border-border">
          <button
            onClick={() => onMove(null)}
            className={"w-full flex items-center gap-2 px-3 py-2 hover:bg-accent text-left text-sm font-medium border-b border-border " + (!page.parent_id ? "bg-accent/40" : "")}
            type="button"
          >
            <span>🏠</span>
            <span className="flex-1 text-foreground">Raiz (sem pai)</span>
            {!page.parent_id && <span className="text-[10px] text-muted-foreground">atual</span>}
          </button>
          {tree.length > 0 ? tree : (<div className="px-3 py-6 text-center text-xs text-muted-foreground italic">Nenhuma página disponível como destino</div>)}
        </div>
        <div className="text-[11px] text-muted-foreground italic pt-1">Subpáginas e descendentes não aparecem na lista.</div>
      </div>
    </CustomDialog>
  );
}

function Breadcrumbs({ pages, activePage, onSelect }: any) {
  const path: any[] = [];
  let cur = activePage;
  while (cur) {
    path.unshift(cur);
    cur = cur.parent_id ? (Array.isArray(pages)?pages:[]).find((p: any) => p.id === cur.parent_id && !p.deleted_at) : null;
  }
  return (
    <div className="flex-1 flex items-center min-w-0 overflow-hidden">
      {(Array.isArray(path)?path:[]).map((p, i) => (
        <span key={p.id} className="flex items-center min-w-0">
          {i > 0 && <span className="text-muted-foreground/50 shrink-0 mx-0.5">/</span>}
          <button onClick={() => onSelect(p.id)} className={"flex items-center gap-1 hover:bg-accent rounded-md px-1.5 py-1 transition-colors min-w-0 " + (i === path.length - 1 ? "text-foreground" : "text-muted-foreground hover:text-foreground")} type="button">
            <span className="shrink-0 text-sm">{pageIconNode(p.icon)}</span>
            <span className={"truncate text-sm " + (i === path.length - 1 ? "font-medium" : "")}>{p.title || "Sem título"}</span>
          </button>
        </span>
      ))}
    </div>
  );
}

function Sidebar({ pages, activeId, expanded, setExpanded, onSelect, onCreate, onToggleFav, onDelete, onMove, onDuplicate, onReorder, onShowTrash, onShowSearch, onClose, user, canEdit, view, onMoveDialog, onGoHome, width = 256 }: any) {
  const roots = (Array.isArray(pages)?pages:[]).filter((p: any) => !p.parent_id && !p.deleted_at).sort((a: any, b: any) => a.sort_order - b.sort_order);
  const favs = (Array.isArray(pages)?pages:[]).filter((p: any) => p.is_favorite && !p.deleted_at);
  const recentes = [...pages]
    .filter((p: any) => !p.deleted_at)
    .sort((a: any, b: any) => new Date(b.updated_at || 0).getTime() - new Date(a.updated_at || 0).getTime())
    .slice(0, 6);
  const trashCount = (Array.isArray(pages)?pages:[]).filter((p: any) => p.deleted_at).length;
  const [dragId, setDragId] = useState<string | null>(null);
  const [dropTargetId, setDropTargetId] = useState<string | null>(null);
  // Seções recolhíveis: Recentes e Páginas iniciam recolhidas
  const [secOpen, setSecOpen] = useState<{ recentes: boolean; paginas: boolean }>({ recentes: false, paginas: false });
  const toggleSec = (k: "recentes" | "paginas") => setSecOpen((s) => ({ ...s, [k]: !s[k] }));
  // Subpágina ativa = caminho sempre visível: a seção Páginas abre sozinha
  useEffect(() => {
    const ap = (Array.isArray(pages)?pages:[]).find((p: any) => p.id === activeId);
    if (ap && ap.parent_id) setSecOpen((s) => (s.paginas ? s : { ...s, paginas: true }));
  }, [activeId]);

  const handleDropOnList = (e: any, parentId: string | null) => {
    e.preventDefault();
    if (!dragId) return;
    const targetEl = (e.target as HTMLElement).closest('[data-id]');
    if (targetEl) {
      const targetId = targetEl.getAttribute('data-id');
      if (targetId && targetId !== dragId) {
        const siblings = (Array.isArray(pages)?pages:[]).filter((p: any) => p.parent_id === parentId && !p.deleted_at).sort((a: any, b: any) => a.sort_order - b.sort_order);
        const targetIndex = (Array.isArray(siblings)?siblings:[]).findIndex((p: any) => p.id === targetId);
        if (targetIndex !== -1) {
          const rect = targetEl.getBoundingClientRect();
          const dropY = e.clientY - rect.top;
          const insertIndex = dropY > rect.height / 2 ? targetIndex + 1 : targetIndex;
          onReorder(dragId, parentId, insertIndex);
        }
      }
    } else {
      onMove(dragId, parentId);
    }
    setDragId(null);
    setDropTargetId(null);
  };

  const itemCls = (active: boolean) =>
    "w-full flex items-center gap-2 px-2 h-7 rounded-md text-sm transition-colors group " +
    (active ? "bg-accent text-foreground" : "text-foreground/75 hover:bg-accent hover:text-foreground");

  return (
    <aside className="border-r border-border flex flex-col h-full" style={{ width: width + "px", backgroundColor: "hsl(var(--muted) / 0.6)" }}>
      {/* Header — workspace */}
      <div className="px-3 pt-3 pb-1 flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="h-6 w-6 rounded-md flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0 bg-primary">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="text-sm font-semibold text-foreground truncate">
            {user.name.split(" ")[0]}
          </div>
        </div>
        <button onClick={onClose} className="h-6 w-6 flex items-center justify-center rounded-md hover:bg-accent text-muted-foreground hover:text-foreground shrink-0" title="Recolher (⌘\\)" type="button">
          <PanelLeftCloseIcon size={14} />
        </button>
      </div>

      {/* Quick actions */}
      <div className="px-2 py-2 space-y-0.5 shrink-0">
        <button onClick={onShowSearch} className="w-full flex items-center gap-2 px-2 h-7 rounded-md hover:bg-accent text-sm text-muted-foreground hover:text-foreground transition-colors" type="button">
          <span className="text-[13px]">🔍</span><span>Buscar</span>
          <kbd className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-background/80 border border-border text-muted-foreground">⌘K</kbd>
        </button>
        <button onClick={onGoHome} className={"w-full flex items-center gap-2 px-2 h-7 rounded-md text-sm transition-colors " + (!activeId && view === "page" ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground")} type="button">
          <span className="text-[13px]">🏠</span><span>Página inicial</span>
        </button>
        {canEdit && (
          <button onClick={() => onCreate(null)} className="w-full flex items-center gap-2 px-2 h-7 rounded-md hover:bg-accent text-sm text-muted-foreground hover:text-foreground transition-colors" type="button">
            <span className="text-[13px] font-bold leading-none">+</span><span>Nova página</span>
            <kbd className="ml-auto text-[10px] px-1.5 py-0.5 rounded bg-background/80 border border-border text-muted-foreground">⌘N</kbd>
          </button>
        )}
        {canEdit && (
          <button onClick={() => onCreate(null, "canvas")} className="w-full flex items-center gap-2 px-2 h-7 rounded-md hover:bg-accent text-sm text-muted-foreground hover:text-foreground transition-colors" type="button">
            <span className="text-[13px]">✏️</span><span>Novo caderno</span>
          </button>
        )}
        {canEdit && (
          <button onClick={() => onCreate(null, "diagram")} className="w-full flex items-center gap-2 px-2 h-7 rounded-md hover:bg-accent text-sm text-muted-foreground hover:text-foreground transition-colors" type="button">
            <span className="text-[13px]">🗺️</span><span>Novo diagrama</span>
          </button>
        )}
      </div>

      {/* Scrollable content */}
      <div
        className="flex-1 overflow-y-auto px-2 pb-12 flex flex-col gap-4"
        onDragOver={(e) => { e.preventDefault(); setDropTargetId("__root__"); }}
        onDrop={(e) => handleDropOnList(e, null)}
      >
        {favs.length > 0 && (
          <div>
            <div className="px-2 py-1 text-xs text-muted-foreground/80 mb-0.5">Favoritos</div>
            <div className="flex flex-col gap-0.5">
              {(Array.isArray(favs)?favs:[]).map((p: any) => (
                <button key={p.id} onClick={() => onSelect(p.id)} className={itemCls(activeId === p.id && view === "page")} type="button">
                  <span className="text-[13px] shrink-0">{pageIconNode(p.icon)}</span>
                  <span className="truncate">{p.title || "Sem título"}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {recentes.length > 0 && (
          <div>
            <button onClick={() => toggleSec("recentes")} className="w-full flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground/80 hover:text-foreground transition-colors mb-0.5" type="button">
              <span className="w-3 text-[9px] leading-none">{secOpen.recentes ? "▼" : "▶"}</span>
              <span>Recentes</span>
            </button>
            {secOpen.recentes && (
            <div className="flex flex-col gap-0.5">
              {(Array.isArray(recentes)?recentes:[]).map((p: any) => (
                <button key={p.id} onClick={() => onSelect(p.id)} className={itemCls(activeId === p.id && view === "page")} type="button">
                  <span className="text-[13px] shrink-0">{pageIconNode(p.icon)}</span>
                  <span className="truncate">{p.title || "Sem título"}</span>
                </button>
              ))}
            </div>
            )}
          </div>
        )}

        <div className="flex-1">
          <div className="px-2 py-1 text-xs text-muted-foreground/80 flex items-center justify-between mb-0.5">
            <button onClick={() => toggleSec("paginas")} className="flex items-center gap-1 hover:text-foreground transition-colors" type="button">
              <span className="w-3 text-[9px] leading-none">{secOpen.paginas ? "▼" : "▶"}</span>
              <span>Páginas</span>
            </button>
            {canEdit && <button onClick={() => { setSecOpen((s) => ({ ...s, paginas: true })); onCreate(null); }} className="h-5 w-5 flex items-center justify-center rounded-md hover:bg-accent text-muted-foreground hover:text-foreground text-base font-bold leading-none" title="Nova página raiz" type="button">+</button>}
          </div>
          {secOpen.paginas && (
            <>
              {(Array.isArray(roots)?roots:[]).map((p: any) => (
                <PageNode key={p.id} page={p} pages={pages} level={0} activeId={activeId} expanded={expanded} setExpanded={setExpanded} onSelect={onSelect} onCreate={onCreate} onToggleFav={onToggleFav} onDelete={onDelete} onMove={onMove} onDuplicate={onDuplicate} onReorder={onReorder} dragId={dragId} setDragId={setDragId} dropTargetId={dropTargetId} setDropTargetId={setDropTargetId} canEdit={canEdit} viewActive={view === "page"} onMoveDialog={onMoveDialog} />
              ))}
              {roots.length === 0 && (<div className="px-2 py-3 text-xs text-muted-foreground italic text-center">Nenhuma página ainda.<br />{canEdit && "Clique em + acima para criar."}</div>)}
            </>
          )}
          <div className={"h-12 w-full mt-1 rounded-md transition-colors " + (dropTargetId === "__root__" ? "bg-primary/10 border border-primary/40" : "")} />
        </div>
      </div>

      {/* Lixeira */}
      <div className="p-2 border-t border-border/40 bg-background/30 backdrop-blur-sm shrink-0">
        <button onClick={onShowTrash} className={"w-full flex items-center gap-2 px-2 h-7 rounded-md hover:bg-accent text-sm transition-colors " + (view === "trash" ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground")} type="button">
          <span className="text-[13px]">🗑️</span><span>Lixeira</span>
          {trashCount > 0 && (<span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground">{trashCount}</span>)}
        </button>
      </div>
    </aside>
  );
}

function PageNode({ page, pages, level, activeId, expanded, setExpanded, onSelect, onCreate, onToggleFav, onDelete, onMove, onDuplicate, onReorder, dragId, setDragId, dropTargetId, setDropTargetId, canEdit, viewActive, onMoveDialog }: any) {
  const children = (Array.isArray(pages)?pages:[]).filter((p: any) => p.parent_id === page.id && !p.deleted_at).sort((a: any, b: any) => a.sort_order - b.sort_order);
  const isOpen = !!expanded[page.id];
  const hasChildren = children.length > 0;
  const active = activeId === page.id && viewActive;

  return (
    <div data-id={page.id}>
      <div
        draggable={canEdit}
        onDragStart={(e) => { if (!canEdit) return; setDragId(page.id); e.dataTransfer.effectAllowed = "move"; }}
        onDragEnd={() => { setDragId(null); setDropTargetId(null); }}
        onDragOver={(e) => { if (dragId && dragId !== page.id) { e.preventDefault(); setDropTargetId(page.id); } }}
        onDragLeave={() => setDropTargetId((p: string) => (p === page.id ? null : p))}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (dragId && dragId !== page.id) {
            const rect = (e.target as HTMLElement).closest('[data-id]')?.getBoundingClientRect();
            if (rect) {
              const dropY = e.clientY - rect.top;
              if (dropY > rect.height * 0.75) {
                const siblings = (Array.isArray(pages)?pages:[]).filter((p: any) => p.parent_id === page.parent_id && !p.deleted_at).sort((a: any, b: any) => a.sort_order - b.sort_order);
                const targetIndex = (Array.isArray(siblings)?siblings:[]).findIndex((p: any) => p.id === page.id) + 1;
                onReorder(dragId, page.parent_id, targetIndex);
              } else if (dropY < rect.height * 0.25) {
                const siblings = (Array.isArray(pages)?pages:[]).filter((p: any) => p.parent_id === page.parent_id && !p.deleted_at).sort((a: any, b: any) => a.sort_order - b.sort_order);
                const targetIndex = (Array.isArray(siblings)?siblings:[]).findIndex((p: any) => p.id === page.id);
                onReorder(dragId, page.parent_id, targetIndex);
              } else {
                onMove(dragId, page.id);
                setExpanded((x: any) => ({ ...x, [page.id]: true }));
              }
            } else {
              onMove(dragId, page.id);
              setExpanded((x: any) => ({ ...x, [page.id]: true }));
            }
          }
          setDragId(null);
          setDropTargetId(null);
        }}
        className={"flex items-center h-7 px-1 rounded-md transition-colors cursor-pointer group " + (active ? "bg-accent text-foreground" : "hover:bg-accent text-foreground/75 hover:text-foreground") + " " + (dropTargetId === page.id ? "ring-2 ring-primary bg-primary/10" : "")}
        onClick={() => onSelect(page.id)}
      >
        <button
          onClick={(e) => { e.stopPropagation(); if (hasChildren) setExpanded((x: any) => ({ ...x, [page.id]: !isOpen })); }}
          className={"h-5 w-5 flex items-center justify-center rounded shrink-0 transition-colors text-[10px] " + (hasChildren ? "text-muted-foreground hover:bg-muted hover:text-foreground" : "text-transparent group-hover:text-muted-foreground/30")}
          type="button"
        >
          {hasChildren ? (isOpen ? "▼" : "▶") : "·"}
        </button>
        <span className="text-[13px] shrink-0 mx-1">{pageIconNode(page.icon)}</span>
        <span className={"flex-1 text-sm truncate " + (active ? "font-medium" : "")}>{page.title || "Sem título"}</span>
        {canEdit && (
          <div className="touch-show flex items-center gap-0.5 shrink-0 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
            <CustomMenu
              triggerCls="h-5 w-5 flex items-center justify-center rounded hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-colors text-base font-bold leading-none pb-1"
              triggerLabel="Opções"
              triggerContent={<span style={{ letterSpacing: "1px" }}>•••</span>}
              items={[
                { label: page.is_favorite ? "Remover dos favoritos" : "Favoritar", icon: <span className="text-sm">⭐</span>, onClick: () => onToggleFav(page.id) },
                { label: "Nova subpágina", icon: <span className="text-sm">➕</span>, onClick: () => { setExpanded((x: any) => ({ ...x, [page.id]: true })); onCreate(page.id); } },
                { label: "Novo caderno (subpágina)", icon: <span className="text-sm">✏️</span>, onClick: () => { setExpanded((x: any) => ({ ...x, [page.id]: true })); onCreate(page.id, "canvas"); } },
                { label: "Novo diagrama (subpágina)", icon: <span className="text-sm">🗺️</span>, onClick: () => { setExpanded((x: any) => ({ ...x, [page.id]: true })); onCreate(page.id, "diagram"); } },
                { label: "Duplicar", icon: <span className="text-sm">⧉</span>, onClick: () => onDuplicate && onDuplicate(page.id) },
                { label: "Mover para...", icon: <span className="text-sm">📁</span>, onClick: () => onMoveDialog(page) },
                { label: "Excluir página" + (hasChildren ? " e subpáginas" : ""), icon: <span className="text-sm">🗑️</span>, onClick: () => { if (confirm("Mover \"" + (page.title || "Sem título") + "\"" + (hasChildren ? " e suas " + children.length + " subpágina(s)" : "") + " para a lixeira?")) onDelete(page.id); }, divider: true },
              ]}
            />
            <button onClick={(e) => { e.stopPropagation(); setExpanded((x: any) => ({ ...x, [page.id]: true })); onCreate(page.id); }} className="h-5 w-5 flex items-center justify-center rounded hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-colors text-base font-bold leading-none" title="Adicionar subpágina" type="button"><span>+</span></button>
          </div>
        )}
        {!canEdit && hasChildren && (<span className="text-[10px] text-muted-foreground bg-muted/70 px-1.5 rounded-md shrink-0" title={children.length + " subpágina(s)"}>{children.length}</span>)}
      </div>
      {isOpen && hasChildren && (
        <div className="ml-3 pl-1 border-l border-border/40">
          {(Array.isArray(children)?children:[]).map((c: any) => (
            <PageNode key={c.id} page={c} pages={pages} level={level + 1} activeId={activeId} expanded={expanded} setExpanded={setExpanded} onSelect={onSelect} onCreate={onCreate} onToggleFav={onToggleFav} onDelete={onDelete} onMove={onMove} onDuplicate={onDuplicate} onReorder={onReorder} dragId={dragId} setDragId={setDragId} dropTargetId={dropTargetId} setDropTargetId={setDropTargetId} canEdit={canEdit} viewActive={viewActive} onMoveDialog={onMoveDialog} />
          ))}
        </div>
      )}
    </div>
  );
}

function PageEditor({ page, pages, canEdit, files, onUpdate, showIconPicker, setShowIconPicker, showCoverPicker, setShowCoverPicker, showColorPicker, setShowColorPicker, onSelectPage, onCreateSubpage, onCreateEmbed, onCreatePageLink }: any) {
  const titleRef = useRef<HTMLTextAreaElement | null>(null);
  const [title, setTitle] = useState(page.title || "");

  useEffect(() => { setTitle(page.title || ""); }, [page.id]);
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = "auto";
      const h = Math.max(titleRef.current.scrollHeight, 60);
      titleRef.current.style.height = h + "px";
    }
  }, [title]);

  const updateBlocks = (next: any[]) => onUpdate({ content: next });
  const blocks = page.content || [];
  const subs = (Array.isArray(pages)?pages:[]).filter((p: any) => p.parent_id === page.id && !p.deleted_at);
  const backlinks = (Array.isArray(pages)?pages:[]).filter((p: any) => p.id !== page.id && !p.deleted_at && pageLinksToId(p, page.id));

  const isCoverColor = page.cover_url?.startsWith("#");
  const hasCover = !!page.cover_url;
  const coverBg = isCoverColor ? page.cover_url : 'transparent';
  const coverImg = !isCoverColor && page.cover_url ? page.cover_url : null;

  return (
    <div className="pb-16">
      {hasCover ? (
        <div className="relative h-40 sm:h-56 w-full group border-b-2 border-border" style={{ backgroundColor: coverBg }}>
          {coverImg && <img src={coverImg} alt="" className="w-full h-full object-cover" onError={(e: any) => { e.currentTarget.style.display = "none"; }} />}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          {canEdit && (
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => setShowCoverPicker(true)} className="h-8 px-3 rounded-md border-2 border-border text-xs font-medium text-foreground hover:scale-105 transition-transform shadow-sm" style={{ backgroundColor: "hsl(var(--card))" }} type="button">Alterar capa</button>
              <button onClick={() => setShowColorPicker(true)} className="h-8 px-3 rounded-md border-2 border-border text-xs font-medium text-foreground hover:scale-105 transition-transform shadow-sm" style={{ backgroundColor: "hsl(var(--card))" }} type="button">Cor</button>
              <button onClick={() => onUpdate({ cover_url: null })} className="h-8 px-3 rounded-md border-2 border-border text-xs font-medium text-foreground hover:scale-105 transition-transform shadow-sm" style={{ backgroundColor: "hsl(var(--card))" }} type="button">Remover</button>
            </div>
          )}
        </div>
      ) : null}
      <div className="max-w-3xl mx-auto px-4 sm:px-12 min-h-[600px]">
        <div className={(hasCover ? "-mt-10" : "pt-10") + " relative flex items-end gap-3 mb-2"}>
          <button onClick={() => canEdit && setShowIconPicker(true)} className={"h-[72px] w-[72px] rounded-[20px] flex items-center justify-center text-5xl leading-none bg-primary/10 text-primary border-[3px] border-background shadow-[0_6px_16px_-6px_rgba(91,69,217,0.4)] select-none transition-transform " + (canEdit ? "hover:scale-105 cursor-pointer" : "")} disabled={!canEdit} type="button">{pageIconNode(page.icon)}</button>
        </div>
        {canEdit && !hasCover && (
          <div className="flex items-center gap-3 mb-3">
            <button onClick={() => setShowCoverPicker(true)} className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1" type="button"><span>🖼️</span>Adicionar capa</button>
            <button onClick={() => setShowColorPicker(true)} className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1" type="button"><span>🎨</span>Adicionar cor</button>
          </div>
        )}
        <textarea
          ref={titleRef}
          value={title}
          onChange={(e) => { setTitle(e.target.value); onUpdate({ title: e.target.value }); }}
          placeholder="Sem título"
          rows={1}
          disabled={!canEdit}
          className="dc-serif w-full bg-transparent font-semibold outline-none resize-none border-0 p-0 mb-4 block text-foreground placeholder:text-muted-foreground/40"
          style={{ fontSize: "46px", lineHeight: "1.08", minHeight: "58px" }}
        />
        <BlocksEditor blocks={blocks} onChange={updateBlocks} canEdit={canEdit} files={files} pages={pages} onSelectPage={onSelectPage} onCreateEmbed={onCreateEmbed} onCreatePageLink={onCreatePageLink} />

        <div className="mt-12 pt-5 border-t border-border/60">
          <div className="flex items-center justify-between mb-3">
            <h3 className="dc-serif text-xl font-semibold text-foreground inline-flex items-center gap-2"><span>📁</span>Subpáginas {subs.length > 0 && <span className="text-xs text-muted-foreground font-normal bg-muted rounded-full px-2 py-0.5">{subs.length}</span>}</h3>
            {canEdit && <button onClick={onCreateSubpage} className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 hover:bg-accent px-2 py-1 rounded-md transition-colors" type="button"><span className="text-base font-bold leading-none">+</span>Nova subpágina</button>}
          </div>
          {subs.length === 0 ? (
            <p className="text-xs text-muted-foreground italic">Nenhuma subpágina ainda. Use o botão acima para criar uma.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(Array.isArray(subs)?subs:[]).map((s: any) => (
                <button key={s.id} onClick={() => onSelectPage(s.id)} className="group w-full flex items-center gap-3 p-3 rounded-2xl border border-border hover:border-primary transition-all text-left hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-14px_rgba(91,69,217,0.45)]" style={{ backgroundColor: "hsl(var(--card))" }} type="button">
                  <span className="h-9 w-9 rounded-xl bg-accent flex items-center justify-center text-base text-foreground shrink-0 transition-colors group-hover:bg-primary/10 group-hover:text-primary">{pageIconNode(s.icon)}</span>
                  <span className="text-sm font-medium text-foreground truncate flex-1">{s.title || "Sem título"}</span>
                  <svg className="opacity-0 group-hover:opacity-100 text-primary transition-opacity shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
                </button>
              ))}
            </div>
          )}
        </div>

        {backlinks.length > 0 && (
          <div className="mt-8 pt-5 border-t border-border/60">
            <h3 className="dc-serif text-xl font-semibold text-foreground inline-flex items-center gap-2 mb-3"><span>🔗</span>Referências <span className="text-xs text-muted-foreground font-normal bg-muted rounded-full px-2 py-0.5">{backlinks.length}</span></h3>
            <div className="space-y-1">
              {(Array.isArray(backlinks)?backlinks:[]).map((p: any) => (
                <button key={p.id} onClick={() => onSelectPage(p.id)} className="w-full flex items-center gap-2 px-2 py-1.5 text-left rounded-md hover:bg-accent transition-colors group" type="button">
                  <span className="text-base shrink-0">{pageIconNode(p.icon)}</span>
                  <span className="text-sm text-foreground truncate flex-1">{p.title || "Sem título"}</span>
                  <span className="text-muted-foreground opacity-0 group-hover:opacity-100 text-xs">›</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {showIconPicker && (
        <IconPicker
          onClose={() => setShowIconPicker(false)}
          onPick={(icon: string) => { onUpdate({ icon }); setShowIconPicker(false); }}
        />
      )}
      {showCoverPicker && (<CoverPicker files={files} onClose={() => setShowCoverPicker(false)} onPick={(url: string) => { onUpdate({ cover_url: url }); setShowCoverPicker(false); }} />)}
      {showColorPicker && (
        <CustomDialog open={true} onClose={() => setShowColorPicker(false)} title="Cor da Capa">
          <div className="grid grid-cols-5 gap-2">
            {[
              "#f87171", "#fb923c", "#fbbf24", "#a3e635", "#4ade80",
              "#34d399", "#2dd4bf", "#22d3ee", "#38bdf8", "#60a5fa",
              "#818cf8", "#a78bfa", "#c084fc", "#e879f9", "#f472b6",
              "#fb7185", "#f43f5e", "#9ca3af", "#6b7280", "#1f2937"
            ].map(c => (
              <button
                key={c}
                onClick={() => { onUpdate({ cover_url: c }); setShowColorPicker(false); }}
                className="h-10 rounded-md border-2 border-border/50 hover:scale-105 transition-transform shadow-sm"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <div className="mt-4 pt-4 border-t-2 border-border flex justify-between">
            <button onClick={() => { onUpdate({ cover_url: null }); setShowColorPicker(false); }} className="text-sm text-muted-foreground hover:text-foreground">Remover cor</button>
          </div>
        </CustomDialog>
      )}
    </div>
  );
}

// ========================================================================
// DiagramEditor — Diagramas conectados (tipo Miro)
// Formas com texto dentro, ligadas por setas que acompanham as formas.
// Tudo editável: mover, redimensionar, escrever, recolorir, conectar.
// ========================================================================
function DiagramEditor({ page, canEdit, onUpdate, headerLeft, headerRight, showIconPicker, setShowIconPicker }: any) {
  const initBlock = (Array.isArray(page.content) && page.content[0]) || { id: uid(), type: "diagram", nodes: [], edges: [] };
  const blockIdRef = useRef(initBlock.id || uid());

  const [title, setTitle] = useState(page.title || "");
  const [nodes, setNodes] = useState<any[]>(() => (Array.isArray(initBlock.nodes) ? initBlock.nodes : []));
  const [edges, setEdges] = useState<any[]>(() => (Array.isArray(initBlock.edges) ? initBlock.edges : []));
  const [tool, setTool] = useState("select");
  const [pendingShape, setPendingShape] = useState("rect");
  const [drawShape, setDrawShape] = useState<string | null>(null); // linha/seta armada p/ desenhar como vetor
  const [lineDraft, setLineDraft] = useState<any>(null); // prévia enquanto arrasta
  const [paletteIdx, setPaletteIdx] = useState(1);
  const [selected, setSelected] = useState<any>(null); // {type:'node'|'edge', id}
  const [multiSel, setMultiSel] = useState<string[]>([]); // ids de nós (laço / grupo)
  const [clipReady, setClipReady] = useState<boolean>(!!(DIAGRAM_CLIP && DIAGRAM_CLIP.length)); // habilita botão "Colar"
  const [marquee, setMarquee] = useState<any>(null);
  const marqueeRef = useRef<any>(null);
  const [editing, setEditing] = useState<any>(null);   // {id, value, edge?}
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [hoverNode, setHoverNode] = useState<string | null>(null);
  const [edgeDraft, setEdgeDraft] = useState<any>(null); // {fromId, x, y, targetId}
  const [shapePanel, setShapePanel] = useState(false);
  const [past, setPast] = useState<any[]>([]);
  const [future, setFuture] = useState<any[]>([]);
  const [importing, setImporting] = useState<string | null>(null);
  const [exportMenu, setExportMenu] = useState(false);
  const dgFileRef = useRef<HTMLInputElement | null>(null);
  const { toast } = BeaUI.useToast();

  const nodesRef = useRef(nodes);
  const edgesRef = useRef(edges);
  useEffect(() => { nodesRef.current = nodes; }, [nodes]);
  useEffect(() => { edgesRef.current = edges; }, [edges]);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const gestureRef = useRef<any>(null);
  const editRef = useRef<any>(null);
  const pointersRef = useRef<Map<number, any>>(new Map());
  const pinchRef = useRef<any>(null);
  const pastRef = useRef<any[]>([]);
  const futureRef = useRef<any[]>([]);

  useEffect(() => { editRef.current = editing; }, [editing]);

  const persist = (ns: any[], es: any[]) => onUpdate({ content: [{ id: blockIdRef.current, type: "diagram", nodes: ns, edges: es }] });
  const snap = () => ({ nodes: nodesRef.current, edges: edgesRef.current });
  const setData = (ns: any[], es: any[]) => { nodesRef.current = ns; edgesRef.current = es; setNodes(ns); setEdges(es); };

  const commitFrom = (prev: any, ns: any[], es: any[]) => {
    pastRef.current = [...pastRef.current, prev].slice(-120);
    futureRef.current = [];
    setPast(pastRef.current); setFuture([]);
    setData(ns, es);
    persist(ns, es);
  };
  const commit = (ns: any[], es: any[]) => commitFrom(snap(), ns, es);

  const commitEditing = () => {
    const ed = editRef.current;
    if (!ed) return;
    editRef.current = null;
    const val = (ed.value || "").trim();
    setEditing(null);
    if (ed.edge) {
      const orig = edgesRef.current.find((x: any) => x.id === ed.id);
      if (!orig || orig.label === val) return;
      commit(nodesRef.current, edgesRef.current.map((x: any) => (x.id === ed.id ? { ...x, label: val } : x)));
    } else {
      const orig = nodesRef.current.find((n: any) => n.id === ed.id);
      if (!orig || orig.text === val) return;
      commit(nodesRef.current.map((n: any) => (n.id === ed.id ? { ...n, text: val } : n)), edgesRef.current);
    }
  };
  const cancelEditing = () => { editRef.current = null; setEditing(null); };

  const undo = () => {
    if (editRef.current) commitEditing();
    if (!pastRef.current.length) return;
    const prev = pastRef.current[pastRef.current.length - 1];
    pastRef.current = pastRef.current.slice(0, -1);
    futureRef.current = [snap(), ...futureRef.current];
    setPast(pastRef.current); setFuture(futureRef.current);
    setData(prev.nodes, prev.edges);
    persist(prev.nodes, prev.edges);
    setSelected(null);
  };
  const redo = () => {
    if (!futureRef.current.length) return;
    const next = futureRef.current[0];
    futureRef.current = futureRef.current.slice(1);
    pastRef.current = [...pastRef.current, snap()];
    setPast(pastRef.current); setFuture(futureRef.current);
    setData(next.nodes, next.edges);
    persist(next.nodes, next.edges);
    setSelected(null);
  };

  const getPos = (e: any) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const r = svgRef.current.getBoundingClientRect();
    return { x: (e.clientX - r.left - tx) / scale, y: (e.clientY - r.top - ty) / scale };
  };

  const nodeById = (id: string) => nodesRef.current.find((n: any) => n.id === id);
  const centerOf = (n: any) => ({ x: n.x + n.w / 2, y: n.y + n.h / 2 });
  const borderPoint = (n: any, towardX: number, towardY: number) => {
    const cx = n.x + n.w / 2, cy = n.y + n.h / 2;
    const dx = towardX - cx, dy = towardY - cy;
    if (dx === 0 && dy === 0) return { x: cx, y: cy };
    const hw = n.w / 2, hh = n.h / 2;
    const sx = dx !== 0 ? hw / Math.abs(dx) : Infinity;
    const sy = dy !== 0 ? hh / Math.abs(dy) : Infinity;
    const s = Math.min(sx, sy);
    return { x: cx + dx * s, y: cy + dy * s };
  };
  // Curvatura automática: separa setas paralelas e de ida/volta entre o mesmo par
  const autoCurveOf = (ed: any) => {
    const list = edgesRef.current;
    const key = (e: any) => (e.from < e.to ? e.from + "|" + e.to : e.to + "|" + e.from);
    const k = key(ed);
    const group = list.filter((e: any) => key(e) === k);
    if (group.length <= 1) return 0;
    const i = group.findIndex((e: any) => e.id === ed.id);
    return (i - (group.length - 1) / 2) * 52;
  };
  const anchorPt = (n: any, anc: any) => (anc ? { x: n.x + anc.ax * n.w, y: n.y + anc.ay * n.h } : null);
  const edgeGeom = (ed: any) => {
    const a = nodeById(ed.from), b = nodeById(ed.to);
    if (!a || !b) return null;
    const ca = centerOf(a), cb = centerOf(b);
    const aFix = anchorPt(a, ed.fromAnchor), bFix = anchorPt(b, ed.toAnchor);
    // Perpendicular fixa pelo par (não depende do sentido) → ida e volta ficam em lados opostos
    const lowFirst = ed.from < ed.to;
    const PA = lowFirst ? (aFix || ca) : (bFix || cb), PB = lowFirst ? (bFix || cb) : (aFix || ca);
    const vx = PB.x - PA.x, vy = PB.y - PA.y, vl = Math.hypot(vx, vy) || 1;
    const nx = -vy / vl, ny = vx / vl;
    const cv = ed.curve != null ? ed.curve : autoCurveOf(ed);
    let p1 = aFix || borderPoint(a, (bFix || cb).x, (bFix || cb).y);
    let p2 = bFix || borderPoint(b, (aFix || ca).x, (aFix || ca).y);
    if (cv) {
      const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
      const cp = { x: mx + nx * cv, y: my + ny * cv };
      // Pontas livres miram o ponto de controle; pontas fixas (âncoras) não se mexem
      if (!aFix) p1 = borderPoint(a, cp.x, cp.y);
      if (!bFix) p2 = borderPoint(b, cp.x, cp.y);
      return { p1, p2, cp, cv };
    }
    return { p1, p2, cp: { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 }, cv: 0 };
  };
  const bezierPt = (p1: any, cp: any, p2: any, t: number) => {
    const u = 1 - t;
    return { x: u * u * p1.x + 2 * u * t * cp.x + t * t * p2.x, y: u * u * p1.y + 2 * u * t * cp.y + t * t * p2.y };
  };
  const edgeHit = (ed: any, p: any) => {
    const g = edgeGeom(ed);
    if (!g) return false;
    const thr = 9 / scale;
    if (!g.cv) return distToSeg(p, g.p1, g.p2) <= thr;
    let prev = g.p1;
    for (let i = 1; i <= 14; i++) {
      const cur = bezierPt(g.p1, g.cp, g.p2, i / 14);
      if (distToSeg(p, prev, cur) <= thr) return true;
      prev = cur;
    }
    return false;
  };
  const anchorsOf = (n: any) => [
    { side: "top", x: n.x + n.w / 2, y: n.y },
    { side: "right", x: n.x + n.w, y: n.y + n.h / 2 },
    { side: "bottom", x: n.x + n.w / 2, y: n.y + n.h },
    { side: "left", x: n.x, y: n.y + n.h / 2 },
  ];
  const nodeUnder = (p: any) => [...nodesRef.current].reverse().find((n: any) => pointInBox(p, { x: n.x, y: n.y, w: n.w, h: n.h }, 0));

  const newNode = (shape: string, cx: number, cy: number) => {
    const pal = DIAGRAM_PALETTE[paletteIdx] || DIAGRAM_PALETTE[1];
    const isText = shape === "text";
    const w = 160, h = isText ? 44 : 80;
    return { id: uid(), shape, x: Math.round(cx - w / 2), y: Math.round(cy - h / 2), w, h, text: "", bg: isText ? "transparent" : pal.bg, color: isText ? "transparent" : pal.border, textColor: isText ? "#0f172a" : pal.text, fontSize: isText ? 18 : 15 };
  };
  const addNodeAt = (shape: string, p: any) => {
    const n = newNode(shape, p.x, p.y);
    commit([...nodesRef.current, n], edgesRef.current);
    setSelected({ type: "node", id: n.id });
    setEditing({ id: n.id, value: "" });
  };
  const addNode = (shape: string) => {
    const r = svgRef.current?.getBoundingClientRect();
    const cx = r ? (r.width / 2 - tx) / scale : 200;
    const cy = r ? (r.height / 2 - ty) / scale : 200;
    addNodeAt(shape, { x: cx, y: cy });
  };
  const newLineNode = (shape: string, box: any) => {
    const pal = DIAGRAM_PALETTE[paletteIdx] || DIAGRAM_PALETTE[1];
    return { id: uid(), shape, x: box.x, y: box.y, w: box.w, h: box.h, flip: box.flip, rev: box.rev, text: "", bg: "transparent", color: pal.border, textColor: pal.text, fontSize: 15, lw: 3 };
  };
  const addOrSetShape = (shape: string) => {
    setPendingShape(shape);
    if (selected && selected.type === "node") {
      setDrawShape(null);
      commit(nodesRef.current.map((n: any) => (n.id === selected.id ? { ...n, shape } : n)), edgesRef.current);
    } else if (DIAGRAM_LINE_SHAPES.indexOf(shape) !== -1) {
      // linha/seta: arma o modo "desenhar vetor" — arraste de uma ponta à outra
      setDrawShape(shape);
      setSelected(null); setMultiSel([]);
    } else {
      setDrawShape(null);
      addNode(shape);
    }
  };

  const startEditNode = (n: any) => { setSelected({ type: "node", id: n.id }); setEditing({ id: n.id, value: n.text || "" }); };
  const startEditEdge = (ed: any) => { setSelected({ type: "edge", id: ed.id }); setEditing({ id: ed.id, edge: true, value: ed.label || "" }); };

  // ---- seleção múltipla / grupos ----
  const groupMembers = (id: string) => {
    const n = nodeById(id);
    if (!n) return [] as string[];
    if (!n.group) return [id];
    return nodesRef.current.filter((x: any) => x.group === n.group).map((x: any) => x.id);
  };
  const selectedNodeIds = (): string[] => (multiSel.length ? multiSel : (selected && selected.type === "node" ? [selected.id] : []));
  const groupSelected = () => {
    const ids = selectedNodeIds();
    if (ids.length < 2) return;
    const g = uid();
    commit(nodesRef.current.map((n: any) => (ids.indexOf(n.id) !== -1 ? { ...n, group: g } : n)), edgesRef.current);
  };
  const ungroupSelected = () => {
    const ids = selectedNodeIds();
    if (!ids.length) return;
    commit(nodesRef.current.map((n: any) => (ids.indexOf(n.id) !== -1 ? { ...n, group: undefined } : n)), edgesRef.current);
  };

  // Copiar / colar / recortar (Ctrl+C / Ctrl+V / Ctrl+X) — 1 ou vários
  const copyDiagram = () => {
    const ids = selectedNodeIds();
    if (!ids.length) return false;
    DIAGRAM_CLIP = ids.map((id) => nodeById(id)).filter(Boolean).map((n: any) => clone(n));
    setClipReady(DIAGRAM_CLIP.length > 0);
    return DIAGRAM_CLIP.length > 0;
  };
  const pasteDiagram = () => {
    if (!DIAGRAM_CLIP || !DIAGRAM_CLIP.length) return false;
    const gmap: any = {};
    const copies = DIAGRAM_CLIP.map((n: any) => {
      const c = { ...clone(n), id: uid(), x: (n.x || 0) + 32, y: (n.y || 0) + 32 };
      if (c.group) { if (!gmap[c.group]) gmap[c.group] = uid(); c.group = gmap[c.group]; }
      return c;
    });
    commit([...nodesRef.current, ...copies], edgesRef.current);
    if (copies.length > 1) { setMultiSel(copies.map((c: any) => c.id)); setSelected({ type: "node", id: copies[0].id }); }
    else { setSelected({ type: "node", id: copies[0].id }); setMultiSel([]); }
    DIAGRAM_CLIP = copies.map((c: any) => clone(c)); // colagem em cascata
    setClipReady(true);
    return true;
  };

  const deleteSelected = () => {
    const ids = selectedNodeIds();
    if (ids.length) {
      commit(nodesRef.current.filter((n: any) => ids.indexOf(n.id) === -1), edgesRef.current.filter((e: any) => ids.indexOf(e.from) === -1 && ids.indexOf(e.to) === -1));
      setSelected(null); setMultiSel([]);
      return;
    }
    if (selected && selected.type === "edge") {
      commit(nodesRef.current, edgesRef.current.filter((e: any) => e.id !== selected.id));
    }
    setSelected(null);
  };
  const applyPalette = (idx: number) => {
    setPaletteIdx(idx);
    const pal = DIAGRAM_PALETTE[idx];
    if (selected && selected.type === "node") {
      commit(nodesRef.current.map((n: any) => (n.id === selected.id ? { ...n, bg: pal.bg, color: pal.border, textColor: pal.text } : n)), edgesRef.current);
    } else if (selected && selected.type === "edge") {
      commit(nodesRef.current, edgesRef.current.map((e: any) => (e.id === selected.id ? { ...e, color: pal.border } : e)));
    }
  };
  const patchEdge = (patch: any) => {
    if (!selected || selected.type !== "edge") return;
    commit(nodesRef.current, edgesRef.current.map((e: any) => (e.id === selected.id ? { ...e, ...(typeof patch === "function" ? patch(e) : patch) } : e)));
  };

  const zoomBy = (factor: number) => {
    const r = svgRef.current?.getBoundingClientRect();
    const cx = r ? r.width / 2 : 400, cy = r ? r.height / 2 : 300;
    const ns = Math.min(4, Math.max(0.2, scale * factor));
    setTx(cx - ((cx - tx) / scale) * ns);
    setTy(cy - ((cy - ty) / scale) * ns);
    setScale(ns);
  };
  const resetView = () => { setScale(1); setTx(0); setTy(0); };
  const fitView = () => {
    if (!nodesRef.current.length || !svgRef.current) { resetView(); return; }
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    nodesRef.current.forEach((n: any) => { minX = Math.min(minX, n.x); minY = Math.min(minY, n.y); maxX = Math.max(maxX, n.x + n.w); maxY = Math.max(maxY, n.y + n.h); });
    const pad = 80;
    const r = svgRef.current.getBoundingClientRect();
    const bw = Math.max(1, maxX - minX + pad * 2), bh = Math.max(1, maxY - minY + pad * 2);
    const ns = Math.min(2, Math.max(0.2, Math.min(r.width / bw, r.height / bh)));
    setScale(ns);
    setTx(r.width / 2 - (minX + (maxX - minX) / 2) * ns);
    setTy(r.height / 2 - (minY + (maxY - minY) / 2) * ns);
  };

  // ---- Importar imagens / PDF como nós de imagem ----
  const addImageNodes = (imgs: any[]) => {
    const r = svgRef.current ? svgRef.current.getBoundingClientRect() : ({ width: 800, height: 600 } as any);
    const cx0 = (r.width / 2 - tx) / scale, cy0 = (r.height / 2 - ty) / scale;
    const maxW = (r.width * 0.6) / scale, maxH = (r.height * 0.6) / scale;
    const created: any[] = [];
    let off = 0;
    for (const im of imgs) {
      if (!im.iw || !im.ih) continue;
      const sc = Math.min(maxW / im.iw, maxH / im.ih, 1.5);
      const w = Math.max(40, Math.round(im.iw * sc)), h = Math.max(40, Math.round(im.ih * sc));
      created.push({ id: uid(), shape: "image", x: Math.round(cx0 - w / 2 + off), y: Math.round(cy0 - h / 2 + off), w, h, src: im.src, bg: "transparent", color: "transparent", text: "" });
      off += 28;
    }
    if (!created.length) return;
    commit([...nodesRef.current, ...created], edgesRef.current);
    if (created.length > 1) { setMultiSel(created.map((c) => c.id)); setSelected({ type: "node", id: created[0].id }); }
    else { setSelected({ type: "node", id: created[0].id }); setMultiSel([]); }
  };
  const handleDiagramImport = async (fl: any) => {
    if (!fl || !fl.length) return;
    const arr = Array.from(fl) as any[];
    const out: any[] = [];
    try {
      for (const fcur of arr) {
        if (fcur.type === "application/pdf" || /\.pdf$/i.test(fcur.name || "")) {
          setImporting("Carregando leitor de PDF…");
          const lib = await ensurePdfJs();
          const buf = await fcur.arrayBuffer();
          const pdf = await lib.getDocument({ data: buf }).promise;
          const base = (fcur.name || "PDF").replace(/\.pdf$/i, "");
          for (let i = 1; i <= pdf.numPages; i++) {
            setImporting(base + " — página " + i + " de " + pdf.numPages + "…");
            const pg = await pdf.getPage(i);
            let vp = pg.getViewport({ scale: 1 });
            const sc = Math.min(2.2, 1600 / Math.max(vp.width, vp.height));
            vp = pg.getViewport({ scale: sc });
            const cv = document.createElement("canvas");
            cv.width = Math.ceil(vp.width); cv.height = Math.ceil(vp.height);
            const cx = cv.getContext("2d");
            if (!cx) continue;
            await pg.render({ canvasContext: cx, viewport: vp }).promise;
            out.push({ src: cv.toDataURL("image/jpeg", 0.82), iw: cv.width, ih: cv.height });
          }
        } else if ((fcur.type || "").indexOf("image/") === 0) {
          setImporting("Lendo " + (fcur.name || "imagem") + "…");
          const srcUrl = await readFileAsDataURL(fcur);
          const dim = await imageDims(srcUrl);
          out.push({ src: srcUrl, iw: dim.w, ih: dim.h });
        }
      }
      if (dgFileRef.current) dgFileRef.current.value = "";
      setImporting(null);
      if (!out.length) { toast("Nada para importar — escolha imagens ou PDF", "error"); return; }
      addImageNodes(out);
      toast(out.length === 1 ? "Imagem adicionada ao diagrama" : out.length + " imagens adicionadas", "success");
    } catch (e: any) {
      setImporting(null);
      toast("Não consegui importar (o leitor de PDF pode estar bloqueado pela rede)", "error");
    }
  };

  // ---- Exportar diagrama (PNG / PDF) — gera SVG puro e rasteriza ----
  const xmlEsc = (v: any) => String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const nodeTextSvg = (n: any) => {
    if (!n.text) return "";
    const fsz = n.fontSize || 15, col = n.textColor || "#0f172a";
    const lines = String(n.text).split("\n");
    const lh = fsz * 1.25, cx = n.x + n.w / 2;
    const startY = n.y + n.h / 2 - ((lines.length - 1) * lh) / 2;
    let t = '<text x="' + cx + '" y="' + startY + '" font-size="' + fsz + '" fill="' + col + '" font-family="ui-sans-serif,system-ui,sans-serif" font-weight="500" text-anchor="middle" dominant-baseline="middle">';
    lines.forEach((ln, i) => { t += '<tspan x="' + cx + '" dy="' + (i === 0 ? 0 : lh) + '">' + xmlEsc(ln) + '</tspan>'; });
    return t + '</text>';
  };
  const nodeToSvgString = (n: any) => {
    const fill = n.bg && n.bg !== "transparent" ? n.bg : "none";
    const stroke = n.color && n.color !== "transparent" ? n.color : "none";
    const sw = 2;
    if (n.shape === "image") {
      let out = '<image xlink:href="' + n.src + '" href="' + n.src + '" x="' + n.x + '" y="' + n.y + '" width="' + Math.max(1, n.w) + '" height="' + Math.max(1, n.h) + '" preserveAspectRatio="xMidYMid meet"/>';
      if (stroke !== "none") out += '<rect x="' + n.x + '" y="' + n.y + '" width="' + Math.max(1, n.w) + '" height="' + Math.max(1, n.h) + '" rx="6" fill="none" stroke="' + stroke + '" stroke-width="' + sw + '"/>';
      return out;
    }
    if (DIAGRAM_LINE_SHAPES.indexOf(n.shape) !== -1) {
      const c = n.color && n.color !== "transparent" ? n.color : "#334155";
      const lw = n.lw || 3, hsz = lw * 4 + 4;
      const le = lineEnds(n); let x1 = le.x1, y1 = le.y1, x2 = le.x2, y2 = le.y2;
      let heads = "";
      if (n.shape !== "line") { const ah = arrowHeadAt(x1, y1, x2, y2, hsz); heads += '<polygon points="' + ah.poly + '" fill="' + c + '"/>'; x2 = ah.bx; y2 = ah.by; }
      if (n.shape === "darrow") { const sh = arrowHeadAt(le.x2, le.y2, le.x1, le.y1, hsz); heads += '<polygon points="' + sh.poly + '" fill="' + c + '"/>'; x1 = sh.bx; y1 = sh.by; }
      return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + c + '" stroke-width="' + lw + '" stroke-linecap="round"/>' + heads;
    }
    let sh = "";
    if (n.shape === "rect") sh = '<rect x="' + n.x + '" y="' + n.y + '" width="' + Math.max(1, n.w) + '" height="' + Math.max(1, n.h) + '" rx="12" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '"/>';
    else if (n.shape === "ellipse") sh = '<ellipse cx="' + (n.x + n.w / 2) + '" cy="' + (n.y + n.h / 2) + '" rx="' + Math.max(1, n.w / 2) + '" ry="' + Math.max(1, n.h / 2) + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '"/>';
    else if (n.shape === "triangle") sh = '<polygon points="' + ((n.x + n.w / 2) + "," + n.y + " " + n.x + "," + (n.y + n.h) + " " + (n.x + n.w) + "," + (n.y + n.h)) + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '" stroke-linejoin="round"/>';
    else if (n.shape !== "text") sh = '<polygon points="' + shapePoints({ kind: n.shape, x: n.x, y: n.y, w: n.w, h: n.h }) + '" fill="' + fill + '" stroke="' + stroke + '" stroke-width="' + sw + '" stroke-linejoin="round"/>';
    return sh + nodeTextSvg(n);
  };
  const edgeToSvgString = (ed: any) => {
    const g = edgeGeom(ed);
    if (!g) return "";
    const col = ed.color || "#64748b";
    const sw = ed.sw || 2, hsz = sw * 4 + 3;
    const dash = ed.style === "dashed" ? ' stroke-dasharray="' + (sw * 3) + " " + (sw * 2.5) + '"' : ed.style === "dotted" ? ' stroke-dasharray="' + Math.max(0.4, sw * 0.1) + " " + (sw * 2.2) + '"' : "";
    const endTan = g.cv ? g.cp : g.p1, startTan = g.cv ? g.cp : g.p2;
    const ah = ed.arrowEnd !== false ? arrowHeadAt(endTan.x, endTan.y, g.p2.x, g.p2.y, hsz) : null;
    const sh = ed.arrowStart ? arrowHeadAt(startTan.x, startTan.y, g.p1.x, g.p1.y, hsz) : null;
    const d = "M " + g.p1.x + " " + g.p1.y + (g.cv ? " Q " + g.cp.x + " " + g.cp.y + " " + g.p2.x + " " + g.p2.y : " L " + g.p2.x + " " + g.p2.y);
    let out = '<path d="' + d + '" stroke="' + col + '" stroke-width="' + sw + '" fill="none" stroke-linecap="round"' + dash + '/>';
    if (ah) out += '<polygon points="' + ah.poly + '" fill="' + col + '"/>';
    if (sh) out += '<polygon points="' + sh.poly + '" fill="' + col + '"/>';
    if (ed.label) { const mid = bezierPt(g.p1, g.cp, g.p2, 0.5); out += '<text x="' + mid.x + '" y="' + mid.y + '" font-size="12" fill="#0f172a" font-family="ui-sans-serif,system-ui,sans-serif" text-anchor="middle" dominant-baseline="middle">' + xmlEsc(ed.label) + '</text>'; }
    return out;
  };
  const buildDiagramSvg = () => {
    const ns = nodesRef.current, es = edgesRef.current;
    if (!ns.length) return null;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    ns.forEach((n: any) => { minX = Math.min(minX, n.x); minY = Math.min(minY, n.y); maxX = Math.max(maxX, n.x + n.w); maxY = Math.max(maxY, n.y + n.h); });
    es.forEach((ed: any) => { const g = edgeGeom(ed); if (g) { [g.p1, g.p2, g.cp].forEach((pt: any) => { if (pt) { minX = Math.min(minX, pt.x); minY = Math.min(minY, pt.y); maxX = Math.max(maxX, pt.x); maxY = Math.max(maxY, pt.y); } }); } });
    const pad = 48;
    const vbx = minX - pad, vby = minY - pad, vbw = (maxX - minX) + pad * 2, vbh = (maxY - minY) + pad * 2;
    const inner = es.map(edgeToSvgString).join("") + ns.map(nodeToSvgString).join("");
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + vbw + '" height="' + vbh + '" viewBox="' + vbx + ' ' + vby + ' ' + vbw + ' ' + vbh + '"><rect x="' + vbx + '" y="' + vby + '" width="' + vbw + '" height="' + vbh + '" fill="#ffffff"/>' + inner + '</svg>';
    return { svg, vbw, vbh };
  };
  const exportDiagram = (format: string) => {
    setExportMenu(false);
    try {
      const built = buildDiagramSvg();
      if (!built) { toast("Diagrama vazio — nada para exportar", "error"); return; }
      const vbw = built.vbw, vbh = built.vbh;
      const img = new Image();
      const url = URL.createObjectURL(new Blob([built.svg], { type: "image/svg+xml;charset=utf-8" }));
      img.onload = () => {
        const c = document.createElement("canvas");
        const sc = Math.max(1, Math.min(3, 6000 / Math.max(vbw, vbh, 1)));
        c.width = Math.max(1, Math.round(vbw * sc));
        c.height = Math.max(1, Math.round(vbh * sc));
        const ctx = c.getContext("2d");
        if (!ctx) { URL.revokeObjectURL(url); return; }
        ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        const name = (title || page.title || "diagrama").replace(/\s+/g, "_");
        if (format === "pdf") {
          c.toBlob(async (blob) => {
            if (!blob) { toast("Falha ao exportar", "error"); return; }
            const bytes = new Uint8Array(await blob.arrayBuffer());
            const pdf = buildPdfFromJpeg(bytes, c.width, c.height);
            const a = document.createElement("a");
            a.href = URL.createObjectURL(pdf); a.download = name + ".pdf"; a.click();
            setTimeout(() => URL.revokeObjectURL(a.href), 1000);
            toast("PDF exportado!", "success");
          }, "image/jpeg", 0.92);
        } else {
          c.toBlob((blob) => {
            if (!blob) { toast("Falha ao exportar", "error"); return; }
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob); a.download = name + ".png"; a.click();
            setTimeout(() => URL.revokeObjectURL(a.href), 1000);
            toast("PNG exportado!", "success");
          }, "image/png");
        }
      };
      img.onerror = () => { URL.revokeObjectURL(url); toast("Falha ao exportar", "error"); };
      img.src = url;
    } catch (e: any) {
      toast("Não foi possível exportar", "error");
    }
  };

  // Mouse no PC: rolagem = zoom no cursor. Shift+rolagem = mover na horizontal.
  // (No tablet/touch o controle é por pinça/arraste — ver pinchRef.)
  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.shiftKey) { setTx((t) => t - (e.deltaY || e.deltaX)); return; }
      const r = node.getBoundingClientRect();
      const cx = e.clientX - r.left, cy = e.clientY - r.top;
      const factor = Math.exp(-e.deltaY * 0.0016);
      setScale((s) => {
        const ns = Math.min(4, Math.max(0.2, s * factor));
        setTx((t) => cx - ((cx - t) / s) * ns);
        setTy((t) => cy - ((cy - t) / s) * ns);
        return ns;
      });
    };
    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, []);

  // Bloqueia gestos do sistema na folha (Safari/iPadOS)
  useEffect(() => {
    const node: any = svgRef.current;
    if (!node) return;
    const block = (e: TouchEvent) => { if (e.cancelable) e.preventDefault(); };
    node.addEventListener("touchstart", block, { passive: false });
    node.addEventListener("touchmove", block, { passive: false });
    return () => { node.removeEventListener("touchstart", block); node.removeEventListener("touchmove", block); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t: any = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (!canEdit) return;
      const meta = e.ctrlKey || e.metaKey;
      if (meta && e.key.toLowerCase() === "z" && !e.shiftKey) { e.preventDefault(); undo(); return; }
      if (meta && (e.key.toLowerCase() === "y" || (e.key.toLowerCase() === "z" && e.shiftKey))) { e.preventDefault(); redo(); return; }
      if (meta && e.key.toLowerCase() === "c") { if (copyDiagram()) e.preventDefault(); return; }
      if (meta && e.key.toLowerCase() === "x") { if (copyDiagram()) { e.preventDefault(); deleteSelected(); } return; }
      if (meta && e.key.toLowerCase() === "v") { if (pasteDiagram()) e.preventDefault(); return; }
      if (meta && e.key.toLowerCase() === "g" && !e.shiftKey) { e.preventDefault(); groupSelected(); return; }
      if (meta && (e.key.toLowerCase() === "g" && e.shiftKey)) { e.preventDefault(); ungroupSelected(); return; }
      if ((e.key === "Delete" || e.key === "Backspace") && (selected || multiSel.length)) { e.preventDefault(); deleteSelected(); return; }
      if (e.key === "Escape") { setSelected(null); setMultiSel([]); setShapePanel(false); setDrawShape(null); setLineDraft(null); return; }
      if (e.key === "Enter" && selected && selected.type === "node") { e.preventDefault(); const n = nodeById(selected.id); if (n) startEditNode(n); return; }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, multiSel, canEdit, past, future]);

  const effTool = canEdit ? tool : "pan";

  const onPointerDown = (e: any) => {
    // Botão do meio do mouse: move a tela em todas as direções (PC).
    if (e.pointerType === "mouse" && e.button === 1) {
      e.preventDefault();
      try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
      setEdgeDraft(null);
      gestureRef.current = { kind: "pan", x: e.clientX, y: e.clientY, tx, ty };
      return;
    }
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (editRef.current) commitEditing();
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType });
    // pinça com 2 dedos
    if (e.pointerType === "touch") {
      const touches = Array.from(pointersRef.current.values()).filter((pp: any) => pp.type === "touch");
      if (touches.length >= 2) {
        gestureRef.current = null;
        setEdgeDraft(null);
        const r = svgRef.current ? svgRef.current.getBoundingClientRect() : ({ left: 0, top: 0 } as any);
        const a: any = touches[0], b: any = touches[1];
        pinchRef.current = { d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, mx0: (a.x + b.x) / 2 - r.left, my0: (a.y + b.y) / 2 - r.top, s0: scale, tx0: tx, ty0: ty };
        return;
      }
    }
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
    const p = getPos(e);

    if (effTool === "pan") { gestureRef.current = { kind: "pan", x: e.clientX, y: e.clientY, tx, ty }; return; }

    // Linha/seta armada: arraste de uma ponta à outra (posiciona como vetor)
    if (canEdit && drawShape) {
      gestureRef.current = { kind: "drawline", shape: drawShape, x0: p.x, y0: p.y, snap: snap() };
      setLineDraft({ x1: p.x, y1: p.y, x2: p.x, y2: p.y, shape: drawShape });
      return;
    }

    // Pontas da linha/seta selecionada (mover cada extremidade do vetor)
    if (canEdit && selected && selected.type === "node" && multiSel.length <= 1) {
      const ln = nodeById(selected.id);
      if (ln && DIAGRAM_LINE_SHAPES.indexOf(ln.shape) !== -1) {
        const le2 = lineEnds(ln); const R = 13 / scale;
        if (Math.hypot(p.x - le2.x1, p.y - le2.y1) <= R) { gestureRef.current = { kind: "lineend", id: ln.id, end: 1, moved: false, snap: snap() }; return; }
        if (Math.hypot(p.x - le2.x2, p.y - le2.y2) <= R) { gestureRef.current = { kind: "lineend", id: ln.id, end: 2, moved: false, snap: snap() }; return; }
      }
    }

    // Alças da seta selecionada: pontas (reconectar/mover ponto) e alça de curvar
    if (canEdit && selected && selected.type === "edge") {
      const ed = edgesRef.current.find((x: any) => x.id === selected.id);
      const g = ed ? edgeGeom(ed) : null;
      if (ed && g) {
        const R = 13 / scale;
        if (Math.hypot(p.x - g.p1.x, p.y - g.p1.y) <= R) { gestureRef.current = { kind: "edgept", id: ed.id, end: "from", moved: false, snap: snap() }; return; }
        if (Math.hypot(p.x - g.p2.x, p.y - g.p2.y) <= R) { gestureRef.current = { kind: "edgept", id: ed.id, end: "to", moved: false, snap: snap() }; return; }
        const apex = bezierPt(g.p1, g.cp, g.p2, 0.5);
        if (Math.hypot(p.x - apex.x, p.y - apex.y) <= R) {
          const a = nodeById(ed.from), b = nodeById(ed.to);
          const ca = centerOf(a), cb = centerOf(b);
          const aFix = anchorPt(a, ed.fromAnchor), bFix = anchorPt(b, ed.toAnchor);
          const lowFirst = ed.from < ed.to;
          const PA = lowFirst ? (aFix || ca) : (bFix || cb), PB = lowFirst ? (bFix || cb) : (aFix || ca);
          const vx = PB.x - PA.x, vy = PB.y - PA.y, vl = Math.hypot(vx, vy) || 1;
          const bp1 = aFix || borderPoint(a, cb.x, cb.y), bp2 = bFix || borderPoint(b, ca.x, ca.y);
          gestureRef.current = { kind: "edgecurve", id: ed.id, mbx: (bp1.x + bp2.x) / 2, mby: (bp1.y + bp2.y) / 2, nx: -vy / vl, ny: vx / vl, moved: false, snap: snap() };
          return;
        }
      }
    }

    // alças de redimensionamento (só com 1 nó selecionado; linhas usam as pontas)
    if (canEdit && selected && selected.type === "node" && multiSel.length <= 1) {
      const n = nodeById(selected.id);
      if (n && DIAGRAM_LINE_SHAPES.indexOf(n.shape) === -1) {
        const corners = [
          { x: n.x, y: n.y, ox: n.x + n.w, oy: n.y + n.h },
          { x: n.x + n.w, y: n.y, ox: n.x, oy: n.y + n.h },
          { x: n.x + n.w, y: n.y + n.h, ox: n.x, oy: n.y },
          { x: n.x, y: n.y + n.h, ox: n.x + n.w, oy: n.y },
        ];
        for (const c of corners) {
          if (Math.hypot(p.x - c.x, p.y - c.y) <= 10 / scale) {
            gestureRef.current = { kind: "resize", id: n.id, fx: c.ox, fy: c.oy, moved: false, snap: snap() };
            return;
          }
        }
      }
    }
    // âncoras → conectar (apenas no nó destacado/sob o cursor)
    if (canEdit) {
      for (const n of [...nodesRef.current].reverse()) {
        if (!(hoverNode === n.id || (selected && selected.type === "node" && selected.id === n.id))) continue;
        let hit: any = null;
        for (const a of anchorsOf(n)) { if (Math.hypot(p.x - a.x, p.y - a.y) <= 11 / scale) { hit = a; break; } }
        if (hit) { gestureRef.current = { kind: "connect", fromId: n.id }; setEdgeDraft({ fromId: n.id, x: p.x, y: p.y, targetId: null }); return; }
      }
    }
    // corpo do nó → selecionar/arrastar (grupo e multi-seleção movem juntos)
    const hn = nodeUnder(p);
    if (hn) {
      let ids: string[];
      if (multiSel.length && multiSel.indexOf(hn.id) !== -1) ids = multiSel;
      else { const mem = groupMembers(hn.id); if (mem.length > 1) { ids = mem; setMultiSel(mem); } else { ids = [hn.id]; setMultiSel([]); } }
      setSelected({ type: "node", id: hn.id });
      if (canEdit) {
        const base = ids.map((id) => { const nn = nodeById(id); return { id, x: nn.x, y: nn.y }; });
        gestureRef.current = { kind: "drag", ids, p0: p, base, moved: false, snap: snap() };
      }
      return;
    }
    // aresta → selecionar
    const he = [...edgesRef.current].reverse().find((ed: any) => edgeHit(ed, p));
    if (he) { setSelected({ type: "edge", id: he.id }); setMultiSel([]); gestureRef.current = { kind: "none" }; return; }
    // fundo → laço de seleção (ferramenta selecionar) ou mover a tela
    setSelected(null); setMultiSel([]);
    if (effTool === "select") { marqueeRef.current = { x0: p.x, y0: p.y }; setMarquee({ x: p.x, y: p.y, w: 0, h: 0 }); gestureRef.current = { kind: "marquee" }; }
    else { gestureRef.current = { kind: "pan", x: e.clientX, y: e.clientY, tx, ty }; }
  };

  const moveNodeTo = (id: string, x: number, y: number) => { const ns = nodesRef.current.map((n: any) => (n.id === id ? { ...n, x, y } : n)); nodesRef.current = ns; setNodes(ns); };
  const moveNodesBy = (base: any[], dx: number, dy: number) => { const ns = nodesRef.current.map((n: any) => { const b = base.find((x: any) => x.id === n.id); return b ? { ...n, x: Math.round(b.x + dx), y: Math.round(b.y + dy) } : n; }); nodesRef.current = ns; setNodes(ns); };
  const sizeNode = (id: string, x: number, y: number, w: number, h: number) => { const ns = nodesRef.current.map((n: any) => (n.id === id ? { ...n, x, y, w, h } : n)); nodesRef.current = ns; setNodes(ns); };

  const onPointerMove = (e: any) => {
    if (pointersRef.current.has(e.pointerId)) pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType });
    if (pinchRef.current && e.pointerType === "touch") {
      const touches = Array.from(pointersRef.current.values()).filter((pp: any) => pp.type === "touch");
      if (touches.length >= 2 && svgRef.current) {
        const r = svgRef.current.getBoundingClientRect();
        const a: any = touches[0], b: any = touches[1];
        const d = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        const mx = (a.x + b.x) / 2 - r.left, my = (a.y + b.y) / 2 - r.top;
        const pi = pinchRef.current;
        const ns = Math.min(4, Math.max(0.2, pi.s0 * (d / pi.d0)));
        setScale(ns);
        setTx(mx - ((pi.mx0 - pi.tx0) / pi.s0) * ns);
        setTy(my - ((pi.my0 - pi.ty0) / pi.s0) * ns);
      }
      return;
    }
    const g = gestureRef.current;
    if (!g) {
      if (canEdit && effTool === "select") { const p = getPos(e); const hn = nodeUnder(p); setHoverNode(hn ? hn.id : null); }
      return;
    }
    const p = getPos(e);
    if (g.kind === "pan") { setTx(g.tx + (e.clientX - g.x)); setTy(g.ty + (e.clientY - g.y)); return; }
    if (g.kind === "drag") {
      const dx = p.x - g.p0.x, dy = p.y - g.p0.y;
      if (Math.abs(dx) + Math.abs(dy) > 1) g.moved = true;
      moveNodesBy(g.base, dx, dy);
      return;
    }
    if (g.kind === "marquee") {
      const m0 = marqueeRef.current;
      if (m0) setMarquee({ x: Math.min(m0.x0, p.x), y: Math.min(m0.y0, p.y), w: Math.abs(p.x - m0.x0), h: Math.abs(p.y - m0.y0) });
      return;
    }
    if (g.kind === "resize") {
      const nx = Math.min(g.fx, p.x), ny = Math.min(g.fy, p.y);
      const nw = Math.max(40, Math.abs(p.x - g.fx)), nh = Math.max(30, Math.abs(p.y - g.fy));
      g.moved = true;
      sizeNode(g.id, Math.round(nx), Math.round(ny), Math.round(nw), Math.round(nh));
      return;
    }
    if (g.kind === "connect") {
      const tgt = nodeUnder(p);
      setEdgeDraft({ fromId: g.fromId, x: p.x, y: p.y, targetId: tgt && tgt.id !== g.fromId ? tgt.id : null });
      return;
    }
    if (g.kind === "drawline") { setLineDraft({ x1: g.x0, y1: g.y0, x2: p.x, y2: p.y, shape: g.shape }); return; }
    if (g.kind === "lineend") {
      const n = nodeById(g.id);
      if (n) {
        const le2 = lineEnds(n);
        const p1 = g.end === 1 ? p : { x: le2.x1, y: le2.y1 };
        const p2 = g.end === 2 ? p : { x: le2.x2, y: le2.y2 };
        const box = lineBoxFromPoints(p1, p2);
        g.moved = true;
        setData(nodesRef.current.map((nn: any) => (nn.id === g.id ? { ...nn, x: box.x, y: box.y, w: box.w, h: box.h, flip: box.flip, rev: box.rev } : nn)), edgesRef.current);
      }
      return;
    }
    if (g.kind === "edgecurve") {
      const cv = Math.max(-400, Math.min(400, Math.round(2 * ((p.x - g.mbx) * g.nx + (p.y - g.mby) * g.ny))));
      g.moved = true;
      setData(nodesRef.current, edgesRef.current.map((e: any) => (e.id === g.id ? { ...e, curve: cv } : e)));
      return;
    }
    if (g.kind === "edgept") {
      const tgt = nodeUnder(p);
      if (tgt) {
        let ax = Math.min(1, Math.max(0, (p.x - tgt.x) / Math.max(1, tgt.w)));
        let ay = Math.min(1, Math.max(0, (p.y - tgt.y) / Math.max(1, tgt.h)));
        const dl = ax, dr = 1 - ax, dt = ay, dbm = 1 - ay, m = Math.min(dl, dr, dt, dbm);
        if (m === dl) ax = 0; else if (m === dr) ax = 1; else if (m === dt) ay = 0; else ay = 1;
        const anc = { ax: Math.round(ax * 100) / 100, ay: Math.round(ay * 100) / 100 };
        const e0 = edgesRef.current.find((e: any) => e.id === g.id);
        if (e0) {
          const newFrom = g.end === "from" ? tgt.id : e0.from;
          const newTo = g.end === "to" ? tgt.id : e0.to;
          if (newFrom !== newTo) {
            const patch = g.end === "from" ? { from: tgt.id, fromAnchor: anc } : { to: tgt.id, toAnchor: anc };
            g.moved = true;
            setData(nodesRef.current, edgesRef.current.map((e: any) => (e.id === g.id ? { ...e, ...patch } : e)));
          }
        }
      }
      return;
    }
  };

  const onPointerUp = (e: any) => {
    pointersRef.current.delete(e.pointerId);
    if (pinchRef.current) { const touches = Array.from(pointersRef.current.values()).filter((pp: any) => pp.type === "touch"); if (touches.length < 2) pinchRef.current = null; }
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (err) {}
    const g = gestureRef.current;
    gestureRef.current = null;
    if (!g) return;
    if (g.kind === "drawline") {
      const d = lineDraft; setLineDraft(null); setDrawShape(null);
      let p1 = { x: g.x0, y: g.y0 }, p2 = d ? { x: d.x2, y: d.y2 } : p1;
      if (Math.hypot(p2.x - p1.x, p2.y - p1.y) < 12) { p2 = { x: p1.x + 140, y: p1.y - 90 }; } // clique simples → linha padrão
      const box = lineBoxFromPoints(p1, p2);
      const nn = newLineNode(g.shape, box);
      commit([...nodesRef.current, nn], edgesRef.current);
      setSelected({ type: "node", id: nn.id });
      return;
    }
    if (g.kind === "lineend" && g.moved) { commitFrom(g.snap, nodesRef.current, edgesRef.current); }
    else if (g.kind === "drag" && g.moved) { commitFrom(g.snap, nodesRef.current, edgesRef.current); }
    else if (g.kind === "resize" && g.moved) { commitFrom(g.snap, nodesRef.current, edgesRef.current); }
    else if ((g.kind === "edgecurve" || g.kind === "edgept") && g.moved) { commitFrom(g.snap, nodesRef.current, edgesRef.current); }
    else if (g.kind === "marquee") {
      const m = marquee; marqueeRef.current = null; setMarquee(null);
      if (m && (m.w > 5 || m.h > 5)) {
        const ids = nodesRef.current.filter((n: any) => n.x < m.x + m.w && n.x + n.w > m.x && n.y < m.y + m.h && n.y + n.h > m.y).map((n: any) => n.id);
        if (ids.length > 1) { setMultiSel(ids); setSelected({ type: "node", id: ids[0] }); }
        else if (ids.length === 1) { setMultiSel([]); setSelected({ type: "node", id: ids[0] }); }
      }
    }
    else if (g.kind === "connect") {
      const p = getPos(e);
      const tgt = nodeUnder(p);
      if (tgt && tgt.id !== g.fromId) {
        const ne = { id: uid(), from: g.fromId, to: tgt.id, color: "#64748b", label: "", arrowEnd: true, style: "solid" };
        commit(nodesRef.current, [...edgesRef.current, ne]);
        setSelected({ type: "edge", id: ne.id });
      }
      setEdgeDraft(null);
    }
  };

  const onDoubleClick = (e: any) => {
    if (!canEdit) return;
    if (drawShape) return; // no modo vetor, o arraste cria a linha/seta
    const p = getPos(e);
    const hn = nodeUnder(p);
    if (hn) { startEditNode(hn); return; }
    const he = [...edgesRef.current].reverse().find((ed: any) => edgeHit(ed, p));
    if (he) { startEditEdge(he); return; }
    addNodeAt(pendingShape, p);
  };

  const renderNodeShape = (n: any) => {
    const fill = n.bg && n.bg !== "transparent" ? n.bg : "transparent";
    const stroke = n.color && n.color !== "transparent" ? n.color : "transparent";
    const sw = 2;
    if (n.shape === "text") return null;
    if (DIAGRAM_LINE_SHAPES.indexOf(n.shape) !== -1) {
      const c = n.color && n.color !== "transparent" ? n.color : "#334155";
      const lw = n.lw || 3, hsz = lw * 4 + 4;
      const le = lineEnds(n); let x1 = le.x1, y1 = le.y1, x2 = le.x2, y2 = le.y2;
      const heads: any[] = [];
      if (n.shape !== "line") { const ah = arrowHeadAt(x1, y1, x2, y2, hsz); heads.push(<polygon key="he" points={ah.poly} fill={c} />); x2 = ah.bx; y2 = ah.by; }
      if (n.shape === "darrow") { const sh = arrowHeadAt(le.x2, le.y2, le.x1, le.y1, hsz); heads.push(<polygon key="hs" points={sh.poly} fill={c} />); x1 = sh.bx; y1 = sh.by; }
      return <g><line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={lw} strokeLinecap="round" />{heads}</g>;
    }
    if (n.shape === "image") return (
      <g>
        <image href={n.src} xlinkHref={n.src} x={n.x} y={n.y} width={Math.max(1, n.w)} height={Math.max(1, n.h)} preserveAspectRatio="xMidYMid meet" style={{ pointerEvents: "none" }} />
        {stroke !== "transparent" && <rect x={n.x} y={n.y} width={Math.max(1, n.w)} height={Math.max(1, n.h)} rx={6} fill="none" stroke={stroke} strokeWidth={sw} />}
      </g>
    );
    if (n.shape === "rect") return <rect x={n.x} y={n.y} width={Math.max(1, n.w)} height={Math.max(1, n.h)} rx={12} fill={fill} stroke={stroke} strokeWidth={sw} />;
    if (n.shape === "ellipse") return <ellipse cx={n.x + n.w / 2} cy={n.y + n.h / 2} rx={Math.max(1, n.w / 2)} ry={Math.max(1, n.h / 2)} fill={fill} stroke={stroke} strokeWidth={sw} />;
    if (n.shape === "triangle") return <polygon points={(n.x + n.w / 2) + "," + n.y + " " + n.x + "," + (n.y + n.h) + " " + (n.x + n.w) + "," + (n.y + n.h)} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />;
    return <polygon points={shapePoints({ kind: n.shape, x: n.x, y: n.y, w: n.w, h: n.h })} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />;
  };
  const renderNode = (n: any) => (
    <g key={n.id}>
      {renderNodeShape(n)}
      {!(editing && editing.id === n.id) && (n.text || DIAGRAM_LINE_SHAPES.indexOf(n.shape) === -1) && (
        <foreignObject x={n.x} y={n.y} width={Math.max(1, n.w)} height={Math.max(1, n.h)} style={{ pointerEvents: "none" }}>
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "6px 10px", boxSizing: "border-box", color: n.textColor || "#0f172a", fontSize: (n.fontSize || 15) + "px", lineHeight: 1.25, textAlign: "center", whiteSpace: "pre-wrap", wordBreak: "break-word", overflow: "hidden", fontWeight: 500 }}>
            {n.text}
          </div>
        </foreignObject>
      )}
    </g>
  );
  const renderEdge = (ed: any) => {
    const g = edgeGeom(ed);
    if (!g) return null;
    const col = ed.color || "#64748b";
    const sw = ed.sw || 2;
    const hsz = sw * 4 + 3; // ponta proporcional à espessura
    const dash = ed.style === "dashed" ? (sw * 3) + " " + (sw * 2.5) : ed.style === "dotted" ? (Math.max(0.4, sw * 0.1)) + " " + (sw * 2.2) : undefined;
    // Ponta da seta orientada pela tangente da curva (controle → ponta)
    const endTan = g.cv ? g.cp : g.p1;
    const startTan = g.cv ? g.cp : g.p2;
    const ah = ed.arrowEnd !== false ? arrowHeadAt(endTan.x, endTan.y, g.p2.x, g.p2.y, hsz) : null;
    const sh = ed.arrowStart ? arrowHeadAt(startTan.x, startTan.y, g.p1.x, g.p1.y, hsz) : null;
    const d = "M " + g.p1.x + " " + g.p1.y + (g.cv ? " Q " + g.cp.x + " " + g.cp.y + " " + g.p2.x + " " + g.p2.y : " L " + g.p2.x + " " + g.p2.y);
    const mid = bezierPt(g.p1, g.cp, g.p2, 0.5);
    const mx = mid.x, my = mid.y;
    const isSel = selected && selected.type === "edge" && selected.id === ed.id;
    return (
      <g key={ed.id}>
        {isSel && <path d={d} stroke="hsl(var(--primary))" strokeWidth={sw + 5} fill="none" opacity={0.25} strokeLinecap="round" />}
        <path d={d} stroke={col} strokeWidth={sw} fill="none" strokeLinecap="round" strokeDasharray={dash} />
        {ah && <polygon points={ah.poly} fill={col} />}
        {sh && <polygon points={sh.poly} fill={col} />}
        {ed.label && !(editing && editing.id === ed.id) && (
          <foreignObject x={mx - 70} y={my - 13} width={140} height={26} style={{ pointerEvents: "none", overflow: "visible" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
              <span style={{ background: "hsl(var(--card))", color: "hsl(var(--foreground))", fontSize: "12px", padding: "1px 6px", borderRadius: "8px", border: "1px solid hsl(var(--border))", whiteSpace: "nowrap" }}>{ed.label}</span>
            </div>
          </foreignObject>
        )}
      </g>
    );
  };

  const selNode = selected && selected.type === "node" ? nodeById(selected.id) : null;
  const showAnchorsFor = (id: string) => canEdit && effTool === "select" && !editing && (hoverNode === id || (selected && selected.type === "node" && selected.id === id));

  const tBtn = (active: boolean) => "h-10 w-10 flex items-center justify-center rounded-full transition-all text-lg leading-none " + (active ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105" : "text-muted-foreground hover:bg-accent hover:text-foreground");
  const eBtn = "h-8 px-2.5 flex items-center gap-1.5 rounded-xl text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors";

  return (
    <div ref={wrapRef} className="relative w-full overflow-hidden select-none" style={{ height: "calc(100dvh - 48px)", WebkitUserSelect: "none" }}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: "none", cursor: drawShape ? "crosshair" : effTool === "pan" ? "grab" : "default", backgroundColor: "hsl(var(--background))" }}
        onMouseDown={(e) => { if (e.button === 1) e.preventDefault(); }}
        onAuxClick={(e) => { if (e.button === 1) e.preventDefault(); }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={onDoubleClick}
      >
        <defs>
          <pattern id="diagram-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="hsl(var(--muted-foreground))" fillOpacity={0.25} />
          </pattern>
        </defs>
        <g transform={"translate(" + tx + " " + ty + ") scale(" + scale + ")"}>
          <rect x={-100000} y={-100000} width={200000} height={200000} fill="url(#diagram-dots)" />
          {(Array.isArray(edges) ? edges : []).map(renderEdge)}
          {(Array.isArray(nodes) ? nodes : []).map(renderNode)}
          {edgeDraft && (() => {
            const from = nodeById(edgeDraft.fromId);
            if (!from) return null;
            const sp = borderPoint(from, edgeDraft.x, edgeDraft.y);
            return <line x1={sp.x} y1={sp.y} x2={edgeDraft.x} y2={edgeDraft.y} stroke="hsl(var(--primary))" strokeWidth={2} strokeDasharray="5 4" strokeLinecap="round" />;
          })()}
          {edgeDraft && edgeDraft.targetId && (() => {
            const t = nodeById(edgeDraft.targetId);
            if (!t) return null;
            return <rect x={t.x - 4} y={t.y - 4} width={t.w + 8} height={t.h + 8} rx={14} fill="none" stroke="hsl(var(--primary))" strokeWidth={2 / scale} strokeDasharray={(5 / scale) + " " + (4 / scale)} />;
          })()}
          {/* prévia da linha/seta sendo desenhada como vetor */}
          {lineDraft && (
            <line x1={lineDraft.x1} y1={lineDraft.y1} x2={lineDraft.x2} y2={lineDraft.y2} stroke="hsl(var(--primary))" strokeWidth={2.5 / scale} strokeDasharray={(6 / scale) + " " + (4 / scale)} strokeLinecap="round" />
          )}
          {/* âncoras de conexão */}
          {(Array.isArray(nodes) ? nodes : []).map((n: any) => (showAnchorsFor(n.id) ? (
            <g key={"a-" + n.id}>
              {anchorsOf(n).map((a: any, i: number) => (
                <circle key={i} cx={a.x} cy={a.y} r={5 / scale} fill="#ffffff" stroke="hsl(var(--primary))" strokeWidth={1.6 / scale} />
              ))}
            </g>
          ) : null))}
          {/* laço de seleção */}
          {marquee && (
            <rect x={marquee.x} y={marquee.y} width={marquee.w} height={marquee.h} fill="hsl(var(--primary) / 0.08)" stroke="hsl(var(--primary))" strokeWidth={1 / scale} strokeDasharray={(4 / scale) + " " + (3 / scale)} />
          )}
          {/* seleção múltipla / grupo */}
          {canEdit && effTool === "select" && multiSel.length > 1 && (() => {
            const sel = nodesRef.current.filter((n: any) => multiSel.indexOf(n.id) !== -1);
            if (!sel.length) return null;
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            sel.forEach((n: any) => { minX = Math.min(minX, n.x); minY = Math.min(minY, n.y); maxX = Math.max(maxX, n.x + n.w); maxY = Math.max(maxY, n.y + n.h); });
            return (
              <g>
                {sel.map((n: any) => (<rect key={"ms-" + n.id} x={n.x - 3} y={n.y - 3} width={n.w + 6} height={n.h + 6} rx={6} fill="none" stroke="hsl(var(--primary))" strokeWidth={1.2 / scale} opacity={0.7} />))}
                <rect x={minX - 8} y={minY - 8} width={maxX - minX + 16} height={maxY - minY + 16} rx={8} fill="hsl(var(--primary) / 0.05)" stroke="hsl(var(--primary))" strokeWidth={1.5 / scale} strokeDasharray={(6 / scale) + " " + (4 / scale)} />
              </g>
            );
          })()}
          {/* caixa de seleção do nó (formas) OU pontas do vetor (linha/seta) */}
          {selNode && canEdit && effTool === "select" && multiSel.length <= 1 && DIAGRAM_LINE_SHAPES.indexOf(selNode.shape) !== -1 && (() => {
            const le2 = lineEnds(selNode); const r = 7 / scale;
            return (
              <g>
                <circle cx={le2.x1} cy={le2.y1} r={r} fill="#ffffff" stroke="hsl(var(--primary))" strokeWidth={1.8 / scale} />
                <circle cx={le2.x2} cy={le2.y2} r={r} fill="hsl(var(--primary))" stroke="#ffffff" strokeWidth={1.6 / scale} />
              </g>
            );
          })()}
          {selNode && canEdit && effTool === "select" && multiSel.length <= 1 && DIAGRAM_LINE_SHAPES.indexOf(selNode.shape) === -1 && (
            <g>
              <rect x={selNode.x - 5} y={selNode.y - 5} width={selNode.w + 10} height={selNode.h + 10} rx={6} fill="none" stroke="hsl(var(--primary))" strokeWidth={1.5 / scale} strokeDasharray={(6 / scale) + " " + (4 / scale)} />
              {[
                { x: selNode.x, y: selNode.y }, { x: selNode.x + selNode.w, y: selNode.y },
                { x: selNode.x + selNode.w, y: selNode.y + selNode.h }, { x: selNode.x, y: selNode.y + selNode.h },
              ].map((c, i) => (
                <rect key={i} x={c.x - 5 / scale} y={c.y - 5 / scale} width={10 / scale} height={10 / scale} rx={2.5 / scale} fill="#ffffff" stroke="hsl(var(--primary))" strokeWidth={1.6 / scale} />
              ))}
            </g>
          )}
          {/* Alças da seta selecionada: pontas (reconectar/mover) + curvar arrastando */}
          {canEdit && effTool === "select" && selected && selected.type === "edge" && (() => {
            const ed = edgesRef.current.find((x: any) => x.id === selected.id);
            const g = ed ? edgeGeom(ed) : null;
            if (!g) return null;
            const apex = bezierPt(g.p1, g.cp, g.p2, 0.5);
            const r = 6 / scale;
            return (
              <g>
                <circle cx={g.p1.x} cy={g.p1.y} r={r} fill="#ffffff" stroke="hsl(var(--primary))" strokeWidth={1.8 / scale} />
                <circle cx={g.p2.x} cy={g.p2.y} r={r} fill="#ffffff" stroke="hsl(var(--primary))" strokeWidth={1.8 / scale} />
                <circle cx={apex.x} cy={apex.y} r={r * 1.05} fill="hsl(var(--primary))" stroke="#ffffff" strokeWidth={1.6 / scale} />
              </g>
            );
          })()}
        </g>
      </svg>

      {/* editor de texto dentro da forma */}
      {editing && !editing.edge && (() => {
        const n = nodeById(editing.id);
        if (!n) return null;
        return (
          <div className="absolute z-40" style={{ left: n.x * scale + tx, top: n.y * scale + ty, width: n.w * scale, height: n.h * scale }} onPointerDown={(e) => e.stopPropagation()}>
            <textarea
              autoFocus
              value={editing.value}
              onChange={(ev) => setEditing((te: any) => (te ? { ...te, value: ev.target.value } : te))}
              onBlur={commitEditing}
              onKeyDown={(ev) => { ev.stopPropagation(); if (ev.key === "Enter" && !ev.shiftKey) { ev.preventDefault(); commitEditing(); } else if (ev.key === "Escape") { ev.preventDefault(); cancelEditing(); } }}
              placeholder="Escreva..."
              className="w-full h-full bg-transparent outline-none resize-none text-center placeholder:text-muted-foreground/40"
              style={{ fontSize: (n.fontSize || 15) * scale + "px", lineHeight: 1.25, color: n.textColor || "#0f172a", fontWeight: 500, padding: "6px 10px", overflow: "hidden" }}
            />
          </div>
        );
      })()}

      {/* editor de rótulo da seta */}
      {editing && editing.edge && (() => {
        const ed = edgesRef.current.find((x: any) => x.id === editing.id);
        const g = ed ? edgeGeom(ed) : null;
        if (!g) return null;
        const mid = bezierPt(g.p1, g.cp, g.p2, 0.5); const mx = mid.x, my = mid.y;
        return (
          <div className="absolute z-40" style={{ left: mx * scale + tx - 70, top: my * scale + ty - 14 }} onPointerDown={(e) => e.stopPropagation()}>
            <input
              autoFocus
              value={editing.value}
              onChange={(ev) => setEditing((te: any) => (te ? { ...te, value: ev.target.value } : te))}
              onBlur={commitEditing}
              onKeyDown={(ev) => { ev.stopPropagation(); if (ev.key === "Enter") { ev.preventDefault(); commitEditing(); } else if (ev.key === "Escape") { ev.preventDefault(); cancelEditing(); } }}
              placeholder="Rótulo..."
              className="h-7 px-2 text-center text-xs rounded-lg border-2 border-primary bg-card text-foreground outline-none"
              style={{ width: "140px" }}
            />
          </div>
        );
      })()}

      {/* Barra superior: nome do diagrama, navegação e ações */}
      <div className="canvas-pill absolute top-3 left-3 right-3 z-20 rounded-2xl border border-border/70 shadow-lg px-2 py-1 flex items-center gap-1">
        {headerLeft}
        <button onClick={() => canEdit && setShowIconPicker(true)} className={"text-base leading-none shrink-0 " + (canEdit ? "hover:scale-110 transition-transform" : "")} disabled={!canEdit} title="Alterar ícone" type="button">{pageIconNode(page.icon)}</button>
        <input
          value={title}
          onChange={(e) => { setTitle(e.target.value); onUpdate({ title: e.target.value }); }}
          placeholder="Sem título"
          disabled={!canEdit}
          className="dc-serif bg-transparent outline-none text-[15px] font-semibold text-foreground flex-1 min-w-[4rem] placeholder:text-muted-foreground/50"
        />
        {canEdit && (
          <>
            <button onClick={undo} disabled={!past.length} className={"h-8 w-8 shrink-0 flex items-center justify-center rounded-xl transition-colors text-base " + (past.length ? "text-muted-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground/30 cursor-not-allowed")} title="Desfazer (Ctrl+Z)" type="button">↩</button>
            <button onClick={redo} disabled={!future.length} className={"h-8 w-8 shrink-0 flex items-center justify-center rounded-xl transition-colors text-base " + (future.length ? "text-muted-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground/30 cursor-not-allowed")} title="Refazer (Ctrl+Y)" type="button">↪</button>
          </>
        )}
        {canEdit && (() => {
          const ids = selectedNodeIds();
          const hasSel = ids.length > 0;
          const selNodes = nodesRef.current.filter((n: any) => ids.indexOf(n.id) !== -1);
          const groups = new Set(selNodes.map((n: any) => n.group || null));
          const canGroup = ids.length >= 2 && !(groups.size === 1 && !groups.has(null));
          const canUngroup = selNodes.some((n: any) => !!n.group);
          const tb = (on: boolean) => "h-8 px-2 shrink-0 hidden md:flex items-center rounded-xl text-xs font-medium transition-colors " + (on ? "text-muted-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground/30 cursor-not-allowed");
          return (
            <>
              <div className="w-px h-5 bg-border mx-0.5 shrink-0 hidden md:block" />
              <button onClick={() => copyDiagram()} disabled={!hasSel} className={tb(hasSel)} title="Copiar seleção (Ctrl+C)" type="button">⧉ Copiar</button>
              <button onClick={() => pasteDiagram()} disabled={!clipReady} className={tb(clipReady)} title="Colar (Ctrl+V)" type="button">📋 Colar</button>
              <button onClick={groupSelected} disabled={!canGroup} className={tb(canGroup)} title="Agrupar — movem juntos (Ctrl+G)" type="button">⊞ Agrupar</button>
              <button onClick={ungroupSelected} disabled={!canUngroup} className={tb(canUngroup)} title="Desagrupar (Ctrl+Shift+G)" type="button">⊟ Desagrupar</button>
            </>
          );
        })()}
        <div className="w-px h-5 bg-border mx-0.5 shrink-0 hidden sm:block" />
        <button onClick={() => zoomBy(1 / 1.2)} className="h-8 w-8 shrink-0 hidden sm:flex items-center justify-center rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground transition-colors text-lg font-bold" title="Diminuir zoom" type="button">−</button>
        <button onClick={resetView} className="h-8 px-1 shrink-0 flex items-center justify-center rounded-xl text-xs font-semibold text-muted-foreground hover:bg-accent hover:text-foreground transition-colors min-w-[2.6rem]" title="Restaurar zoom (100%)" type="button">{Math.round(scale * 100)}%</button>
        <button onClick={() => zoomBy(1.2)} className="h-8 w-8 shrink-0 hidden sm:flex items-center justify-center rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground transition-colors text-lg font-bold" title="Aumentar zoom" type="button">+</button>
        <button onClick={fitView} className="h-8 w-8 shrink-0 flex items-center justify-center rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground transition-colors text-sm" title="Ajustar conteúdo à tela" type="button">⤢</button>
        <div className="w-px h-5 bg-border mx-0.5 shrink-0 hidden sm:block" />
        {canEdit && (
          <button onClick={() => { if (dgFileRef.current) dgFileRef.current.click(); }} className="h-8 px-2 shrink-0 flex items-center justify-center gap-1 rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground transition-colors text-[11px] font-semibold" title="Importar imagens ou PDF para o diagrama" type="button">📥<span className="hidden lg:inline">Importar</span></button>
        )}
        <div className="relative shrink-0">
          <button onClick={() => setExportMenu((v) => !v)} className="h-8 px-2 shrink-0 flex items-center justify-center gap-1 rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground transition-colors text-[11px] font-semibold" title="Exportar o diagrama (PNG ou PDF)" type="button">⤓<span className="hidden lg:inline">Exportar</span></button>
          {exportMenu && (
            <>
              <div className="fixed inset-0 z-40" onPointerDown={() => setExportMenu(false)} />
              <div className="bg-card canvas-pill absolute right-0 top-full mt-1 z-50 rounded-xl border border-border/70 shadow-2xl p-1 w-40" onPointerDown={(e) => e.stopPropagation()}>
                <button onClick={() => exportDiagram("png")} className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-accent transition-colors text-xs font-medium text-foreground" type="button">🖼️ Imagem PNG</button>
                <button onClick={() => exportDiagram("pdf")} className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-accent transition-colors text-xs font-medium text-foreground" type="button">📄 Documento PDF</button>
              </div>
            </>
          )}
        </div>
        {canEdit && <input ref={dgFileRef} type="file" accept="application/pdf,image/*" multiple className="hidden" onChange={(e: any) => handleDiagramImport(e.target.files)} />}
        {headerRight}
      </div>

      {/* Progresso de importação */}
      {importing && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm">
          <div className="bg-card canvas-pill rounded-2xl border border-border/70 shadow-2xl px-5 py-4 flex items-center gap-3">
            <div className="h-5 w-5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            <span className="text-sm font-medium text-foreground">{importing}</span>
          </div>
        </div>
      )}

      {/* Barra de ferramentas lateral */}
      {canEdit && (
        <div className="canvas-pill absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full border border-border/70 shadow-2xl p-1.5 flex flex-col items-center gap-1.5">
          <button onClick={() => setTool("select")} className={tBtn(tool === "select")} title="Selecionar, mover, conectar (passe nas bolinhas)" type="button"><CursorIcon size={17} /></button>
          <button onClick={() => setTool("pan")} className={tBtn(tool === "pan")} title="Mover a tela" type="button">✋</button>
          <div className="w-5 h-px bg-border my-0.5" />
          {DIAGRAM_SHAPES.slice(0, 4).map((s) => (
            <button key={s.id} onClick={() => addOrSetShape(s.id)} className={tBtn(!!selNode && selNode.shape === s.id)} title={s.label + " — clique para adicionar (ou trocar a forma selecionada)"} type="button"><ShapeIcon kind={s.id} size={16} /></button>
          ))}
          <button onClick={() => setShapePanel((v) => !v)} className="h-10 w-10 flex items-center justify-center rounded-full text-muted-foreground hover:bg-accent text-sm leading-none" title="Mais formas" type="button">…</button>
          <button onClick={() => addOrSetShape("text")} className={tBtn(!!selNode && selNode.shape === "text") + " text-[15px] font-bold"} title="Texto livre" type="button">T</button>
          <div className="w-5 h-px bg-border my-0.5" />
          <button onClick={deleteSelected} disabled={!selected} className={"h-10 w-10 flex items-center justify-center rounded-full transition-all text-base " + (selected ? "text-muted-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground/30 cursor-not-allowed")} title="Excluir selecionado (Delete)" type="button">🗑️</button>
        </div>
      )}

      {/* Painel com todas as formas */}
      {shapePanel && (
        <>
          <div className="absolute inset-0 z-30" onPointerDown={() => setShapePanel(false)} />
          <div className="bg-card canvas-pill absolute left-16 top-1/2 -translate-y-1/2 z-40 rounded-2xl border border-border/70 shadow-2xl p-2 w-[176px]" onPointerDown={(e) => e.stopPropagation()}>
            <div className="text-[11px] font-semibold text-muted-foreground mb-1.5 px-0.5">Formas</div>
            <div className="grid grid-cols-4 gap-1">
              {DIAGRAM_SHAPES.map((s) => (
                <button key={s.id} onClick={() => { addOrSetShape(s.id); setShapePanel(false); }} className={"w-8 h-8 flex items-center justify-center rounded-lg transition-colors " + (pendingShape === s.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent")} title={s.label} type="button"><ShapeIcon kind={s.id} size={16} /></button>
              ))}
              <button onClick={() => { addOrSetShape("text"); setShapePanel(false); }} className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-accent text-sm font-bold" title="Texto livre" type="button">T</button>
            </div>
          </div>
        </>
      )}

      {/* Paleta de cores */}
      {canEdit && (
        <div className="canvas-pill absolute bottom-4 left-1/2 -translate-x-1/2 z-20 rounded-full border border-border/70 shadow-2xl p-1.5 flex items-center gap-1.5">
          {DIAGRAM_PALETTE.map((pal, i) => (
            <button key={i} onClick={() => applyPalette(i)} className={"w-7 h-7 rounded-full border transition-transform " + (paletteIdx === i ? "ring-2 ring-primary scale-110" : "hover:scale-110")} style={{ backgroundColor: pal.bg === "transparent" ? "#ffffff" : pal.bg, borderColor: pal.border }} title="Aplicar cor" type="button" />
          ))}
        </div>
      )}

      {/* Barra da multi-seleção: agrupar / desagrupar */}
      {canEdit && effTool === "select" && multiSel.length > 1 && !editing && (() => {
        const sel = nodesRef.current.filter((n: any) => multiSel.indexOf(n.id) !== -1);
        const groups = new Set(sel.map((n: any) => n.group || null));
        const oneGroup = sel.length > 1 && groups.size === 1 && !groups.has(null);
        return (
          <div className="canvas-pill absolute top-16 left-1/2 -translate-x-1/2 z-20 rounded-2xl border border-border/70 shadow-lg p-1 flex items-center gap-0.5">
            {oneGroup ? (
              <button onClick={ungroupSelected} className="h-8 px-2.5 flex items-center gap-1.5 rounded-xl text-xs font-semibold text-primary hover:bg-accent transition-colors" title="Desagrupar (Ctrl+Shift+G)" type="button">⧉ Desagrupar ({sel.length})</button>
            ) : (
              <button onClick={groupSelected} className="h-8 px-2.5 flex items-center gap-1.5 rounded-xl text-xs font-semibold text-primary hover:bg-accent transition-colors" title="Agrupar — movem juntos (Ctrl+G)" type="button">⧉ Agrupar ({sel.length})</button>
            )}
            <div className="w-px h-5 bg-border" />
            <button onClick={() => { copyDiagram(); pasteDiagram(); }} className={eBtn} title="Duplicar" type="button">📋 Duplicar</button>
            <div className="w-px h-5 bg-border" />
            <button onClick={deleteSelected} className={eBtn} title="Excluir selecionados (Delete)" type="button">🗑️ Excluir</button>
            <div className="w-px h-5 bg-border" />
            <button onClick={() => { setMultiSel([]); setSelected(null); }} className="h-8 px-2 flex items-center rounded-xl text-xs text-muted-foreground hover:bg-accent transition-colors" title="Cancelar seleção" type="button">✕</button>
          </div>
        );
      })()}

      {/* Barra da seta selecionada — opções completas */}
      {canEdit && selected && selected.type === "edge" && !editing && (() => {
        const ed = edgesRef.current.find((x: any) => x.id === selected.id);
        if (!ed) return null;
        const aEnd = ed.arrowEnd !== false, aStart = !!ed.arrowStart;
        const endsMode = (!aStart && !aEnd) ? "none" : (aStart && aEnd) ? "both" : aStart ? "start" : "end";
        const style = ed.style || "solid";
        const sw = ed.sw || 2;
        const cur = ed.curve != null ? ed.curve : 0;
        const seg = (active: boolean) => "h-7 min-w-[1.9rem] px-1 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors " + (active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent");
        const EDGE_COLORS = ["#64748b", "#0f172a", "#2563eb", "#16a34a", "#dc2626", "#ea580c", "#9333ea"];
        return (
          <div className="canvas-pill absolute top-16 left-1/2 -translate-x-1/2 z-20 rounded-2xl border border-border/70 shadow-lg p-1 flex items-center gap-1 max-w-[94vw] overflow-x-auto">
            <button onClick={() => startEditEdge(ed)} className={eBtn} title="Editar rótulo" type="button">🏷️ Rótulo</button>
            <div className="w-px h-5 bg-border" />
            {/* Pontas */}
            <div className="flex items-center gap-0.5" title="Pontas da seta">
              <button onClick={() => patchEdge({ arrowStart: false, arrowEnd: false })} className={seg(endsMode === "none")} title="Sem ponta (linha)" type="button">—</button>
              <button onClick={() => patchEdge({ arrowStart: false, arrowEnd: true })} className={seg(endsMode === "end")} title="Ponta no fim" type="button">→</button>
              <button onClick={() => patchEdge({ arrowStart: true, arrowEnd: false })} className={seg(endsMode === "start")} title="Ponta no início" type="button">←</button>
              <button onClick={() => patchEdge({ arrowStart: true, arrowEnd: true })} className={seg(endsMode === "both")} title="Pontas dos dois lados" type="button">↔</button>
            </div>
            <div className="w-px h-5 bg-border" />
            {/* Espessura */}
            <div className="flex items-center gap-0.5" title="Espessura da linha">
              {[1.5, 3, 5].map((w, i) => (
                <button key={w} onClick={() => patchEdge({ sw: w })} className={seg(Math.abs(sw - w) < 0.6)} title={"Espessura " + ["fina", "média", "grossa"][i]} type="button"><span className="rounded-full bg-current" style={{ width: (3 + i * 3) + "px", height: (3 + i * 3) + "px" }} /></button>
              ))}
            </div>
            <div className="w-px h-5 bg-border" />
            {/* Estilo do traço */}
            <div className="flex items-center gap-0.5" title="Estilo do traço">
              <button onClick={() => patchEdge({ style: "solid" })} className={seg(style === "solid")} title="Sólida" type="button">─</button>
              <button onClick={() => patchEdge({ style: "dashed" })} className={seg(style === "dashed")} title="Tracejada" type="button">┄</button>
              <button onClick={() => patchEdge({ style: "dotted" })} className={seg(style === "dotted")} title="Pontilhada" type="button">⋯</button>
            </div>
            <div className="w-px h-5 bg-border" />
            {/* Curvatura */}
            <div className="flex items-center gap-1 px-1" title="Curvar a seta (arraste); 0 = reta">
              <span className="text-xs">〰️</span>
              <input type="range" min={-160} max={160} step={4} value={cur} onChange={(e) => patchEdge({ curve: parseFloat(e.target.value) })} className="w-16 accent-primary" />
              <button onClick={() => patchEdge({ curve: 0 })} className="h-7 px-2 rounded-lg text-[11px] font-semibold text-muted-foreground hover:bg-accent transition-colors" title="Deixar reta" type="button">Reta</button>
            </div>
            <div className="w-px h-5 bg-border" />
            {/* Cor da seta */}
            <div className="flex items-center gap-0.5" title="Cor da seta">
              {EDGE_COLORS.map((c) => (
                <button key={c} onClick={() => patchEdge({ color: c })} className={"w-5 h-5 rounded-full border transition-transform " + ((ed.color || "#64748b") === c ? "ring-2 ring-primary scale-110" : "hover:scale-110")} style={{ backgroundColor: c, borderColor: "hsl(var(--border))" }} title={c} type="button" />
              ))}
            </div>
            <div className="w-px h-5 bg-border" />
            <button onClick={deleteSelected} className={eBtn} title="Excluir seta (Delete)" type="button">🗑️</button>
          </div>
        );
      })()}

      {/* Aviso do modo "desenhar linha/seta como vetor" */}
      {canEdit && drawShape && (
        <div className="canvas-pill absolute top-16 left-1/2 -translate-x-1/2 z-20 rounded-2xl border border-primary/40 shadow-lg px-3 py-1.5 flex items-center gap-2">
          <span className="text-xs font-medium text-foreground">✏️ Arraste de uma ponta à outra para desenhar a {drawShape === "line" ? "linha" : "seta"}</span>
          <button onClick={() => { setDrawShape(null); setLineDraft(null); }} className="h-6 px-2 rounded-lg text-xs text-muted-foreground hover:bg-accent transition-colors" type="button">Cancelar</button>
        </div>
      )}

      {/* Dica em diagrama vazio */}
      {canEdit && nodes.length === 0 && !editing && !drawShape && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-muted-foreground/50 px-6">
            <div className="text-6xl mb-3">🗺️</div>
            <p className="text-sm font-medium">Clique numa forma à esquerda para começar — ou dê um duplo clique no quadro</p>
            <p className="text-xs mt-1.5">Arraste pelas bolinhas para conectar (várias setas entre os mesmos itens, indo e voltando, vários→um e um→vários) · selecione a seta para curvar · duplo clique escreve dentro · Ctrl+C/Ctrl+V copia e cola · arraste no vazio para laçar vários e Ctrl+G agrupa · arraste os cantos para redimensionar · no PC a rolagem dá zoom e o botão do meio move a tela · no tablet use a pinça · 📥 importa imagens/PDF e ⤓ exporta PNG/PDF</p>
          </div>
        </div>
      )}

      {showIconPicker && (
        <IconPicker
          onClose={() => setShowIconPicker(false)}
          onPick={(icon: string) => { onUpdate({ icon }); setShowIconPicker(false); }}
        />
      )}
    </div>
  );
}

// ========================================================================
// CanvasEditor — Caderno de escrita e desenho (caneta)
// Baixa latência: traço ao vivo direto no DOM (fora do React), eventos
// coalescidos (240Hz do Apple Pencil) + pontos previstos pelo navegador.
// ========================================================================
function CanvasEditor({ page, canEdit, onUpdate, onImportPages, headerLeft, headerRight, showIconPicker, setShowIconPicker }: any) {
  const { toast } = BeaUI.useToast();
  const initBlock = (Array.isArray(page.content) && page.content[0]) || { id: uid(), type: "canvas", paper: "lines", bg: "transparent", els: [] };
  const blockIdRef = useRef(initBlock.id || uid());

  const [title, setTitle] = useState(page.title || "");
  const [els, setEls] = useState<any[]>(() => {
    const arr = Array.isArray(initBlock.els) ? initBlock.els : [];
    return (Array.isArray(arr)?arr:[]).map((el: any) => (el && el.kind === "path" && el.ink && !el.d ? { ...el, d: inkOutline(el.pts || [], el.sw || 4, el.pen) } : el));
  });
  const [paper, setPaper] = useState(initBlock.paper || "lines");
  const [bg, setBg] = useState(initBlock.bg || "transparent");
  const [sheet, setSheet] = useState(initBlock.sheet || "infinite");
  const [orient, setOrient] = useState(initBlock.orient || "portrait");
  const orientRef = useRef(initBlock.orient || "portrait");
  const [smooth, setSmooth] = useState(initBlock.smooth != null ? initBlock.smooth : 0.5);
  const smoothRef = useRef(initBlock.smooth != null ? initBlock.smooth : 0.5);
  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState(CANVAS_COLORS[7]);
  const [sw, setSw] = useState(CANVAS_STROKES[1].w);
  const [opacity, setOpacity] = useState(1);
  const [shapeType, setShapeType] = useState("rect");
  const [fill, setFill] = useState(false);
  const [textSize, setTextSize] = useState(28);
  const [drawing, setDrawing] = useState<any>(null); // apenas formas (rect/elipse/linha/seta)
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [past, setPast] = useState<any[][]>([]);
  const [future, setFuture] = useState<any[][]>([]);
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [penOnly, setPenOnly] = useState(false);
  const [textEdit, setTextEdit] = useState<any>(null);
  const [colorPanel, setColorPanel] = useState(false);
  const [shapePanel, setShapePanel] = useState(false);
  const [pagePanel, setPagePanel] = useState(false);
  const [penPanel, setPenPanel] = useState(false);
  const [importMenu, setImportMenu] = useState(false);
  const importModeRef = useRef<string>("pages");
  const [multiSel, setMultiSel] = useState<string[] | null>([]);
  const [clipReady, setClipReady] = useState<boolean>(!!(CANVAS_CLIP && CANVAS_CLIP.length)); // habilita botão "Colar"
  const [marquee, setMarquee] = useState<any>(null);
  const marqueeRef = useRef<any>(null);
  const [aspectLock, setAspectLock] = useState(true);
  const [importing, setImporting] = useState<string | null>(null);
  const [arrowHead, setArrowHead] = useState(4);
  const rotRef = useRef<any>(null);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const liveCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const predCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const dragGRef = useRef<SVGGElement | null>(null);
  const eraserRingRef = useRef<HTMLDivElement | null>(null);
  const elsRef = useRef(els);
  const paperRef = useRef(paper);
  const bgRef = useRef(bg);
  const sheetRef = useRef(sheet);
  const teRef = useRef<any>(null);
  const liveRef = useRef<any>(null);       // traço de caneta em andamento (fora do React)
  const panStart = useRef<any>(null);
  const gestureStart = useRef<any[] | null>(null);
  const gestureTool = useRef<string>("");
  const dragSel = useRef<any>(null);
  const resizeRef = useRef<any>(null);
  const pointersRef = useRef<Map<number, any>>(new Map());
  const pinchRef = useRef<any>(null);
  const lastPtRef = useRef<any>(null);
  const lastPenTsRef = useRef<number>(0);
  const lastInputTsRef = useRef<number>(Date.now());
  const colorUseRef = useRef<Record<string, number> | null>(null);
  if (colorUseRef.current === null) {
    const m: Record<string, number> = {};
    (Array.isArray(initBlock.els) ? initBlock.els : []).forEach((el: any) => { if (el && el.color) m[el.color] = (m[el.color] || 0) + 1; });
    colorUseRef.current = m;
  }
  const bumpColor = (c: string) => { if (c) { const m: any = colorUseRef.current; m[c] = (m[c] || 0) + 1; } };
  const shapeUseRef = useRef<Record<string, number> | null>(null);
  if (shapeUseRef.current === null) {
    const m: Record<string, number> = {};
    (Array.isArray(initBlock.els) ? initBlock.els : []).forEach((el: any) => { if (el && SHAPE_KINDS.indexOf(el.kind) !== -1) m[el.kind] = (m[el.kind] || 0) + 1; });
    shapeUseRef.current = m;
  }
  const bumpShape = (k: string) => { if (k) { const m: any = shapeUseRef.current; m[k] = (m[k] || 0) + 1; } };
  const rafRef = useRef<any>({});
  const toolbarTimer = useRef<any>(null);
  const persistTimer = useRef<any>(null);
  const pendingRef = useRef<any>(null);      // traços já desenhados aguardando o commit no React
  const flushTimer = useRef<any>(null);
  const pastRef = useRef<any[][]>([]);
  const futureRef = useRef<any[][]>([]);

  useEffect(() => { elsRef.current = els; }, [els]);
  useEffect(() => { paperRef.current = paper; }, [paper]);
  useEffect(() => { bgRef.current = bg; }, [bg]);
  useEffect(() => { sheetRef.current = sheet; }, [sheet]);
  useEffect(() => { teRef.current = textEdit; }, [textEdit]);
  useEffect(() => { if (textEdit) hideToolbarNow(); else showToolbarSoon(); }, [textEdit]);
  useEffect(() => { if (dragGRef.current) dragGRef.current.setAttribute("transform", ""); }, [selectedId, tool]);
  useEffect(() => { if (tool !== "eraser" && eraserRingRef.current) eraserRingRef.current.style.display = "none"; }, [tool]);
  useEffect(() => () => {
    Object.values(rafRef.current).forEach((id: any) => id && cancelAnimationFrame(id));
    if (toolbarTimer.current) clearTimeout(toolbarTimer.current);
    if (flushTimer.current) clearTimeout(flushTimer.current);
    if (persistTimer.current) { clearTimeout(persistTimer.current); persistNow(true); }
  }, []);

  // Ao ocultar/fechar a aba: grava o caderno na hora (fase de captura)
  useEffect(() => {
    const onHide = () => persistNow(true);
    const onVis = () => { if (document.visibilityState === "hidden") persistNow(true); };
    window.addEventListener("pagehide", onHide, true);
    document.addEventListener("visibilitychange", onVis, true);
    return () => { window.removeEventListener("pagehide", onHide, true); document.removeEventListener("visibilitychange", onVis, true); };
  }, []);

  const eraserR = sw * 2.2 + 6;

  const schedule = (key: string, fn: () => void) => {
    if (rafRef.current[key]) return;
    rafRef.current[key] = requestAnimationFrame(() => { rafRef.current[key] = 0; fn(); });
  };

  // Salvamento agrupado: várias letras seguidas geram UM update no app
  const persistNow = (force = false) => {
    if (!force) {
      const idle = Date.now() - lastInputTsRef.current;
      if (idle > 2500 && !liveRef.current && gestureTool.current) { gestureTool.current = ""; pinchRef.current = null; }
      if ((liveRef.current || gestureTool.current) && idle < 800) { persistSoon(); return; }
    }
    const slim = elsRef.current.map((el: any) => {
      if (el && el.kind === "path" && el.d) { const { d, ...rest } = el; return rest; }
      return el;
    });
    onUpdate({ content: [{ id: blockIdRef.current, type: "canvas", paper: paperRef.current, bg: bgRef.current, sheet: sheetRef.current, orient: orientRef.current, smooth: smoothRef.current, els: slim }] });
  };
  const persistSoon = () => {
    if (persistTimer.current) clearTimeout(persistTimer.current);
    persistTimer.current = setTimeout(() => { persistTimer.current = null; persistNow(); }, 1000);
  };

  // Toolbar imperativa: esconde no 1º traço, volta após pausa
  const hideToolbarNow = () => {
    if (toolbarTimer.current) { clearTimeout(toolbarTimer.current); toolbarTimer.current = null; }
    const tb = toolbarRef.current;
    if (tb) { tb.style.opacity = "0"; tb.style.transform = "translate(-50%, 6rem)"; tb.style.pointerEvents = "none"; }
  };
  const showToolbarNow = () => {
    if (toolbarTimer.current) { clearTimeout(toolbarTimer.current); toolbarTimer.current = null; }
    const tb = toolbarRef.current;
    if (tb) { tb.style.opacity = ""; tb.style.transform = ""; tb.style.pointerEvents = ""; }
  };
  const showToolbarSoon = () => {
    if (toolbarTimer.current) clearTimeout(toolbarTimer.current);
    toolbarTimer.current = setTimeout(() => {
      toolbarTimer.current = null;
      const tb = toolbarRef.current;
      if (tb) { tb.style.opacity = ""; tb.style.transform = ""; tb.style.pointerEvents = ""; }
    }, 1200);
  };

  // ---- commit adiado: várias letras viram UMA atualização do React ----
  const flushPendingNow = () => {
    if (flushTimer.current) { clearTimeout(flushTimer.current); flushTimer.current = null; }
    const pend = pendingRef.current;
    if (!pend) return;
    pendingRef.current = null;
    pastRef.current = [...pastRef.current, ...pend.snaps];
    futureRef.current = [];
    setPast(pastRef.current);
    setFuture([]);
    setEls([...elsRef.current]);
    requestAnimationFrame(() => { if (liveRef.current) return; clearCanvas(liveCanvasRef.current); clearCanvas(predCanvasRef.current); });
  };
  const schedulePendingFlush = () => {
    if (flushTimer.current) clearTimeout(flushTimer.current);
    flushTimer.current = setTimeout(() => {
      flushTimer.current = null;
      if (liveRef.current) { schedulePendingFlush(); return; }
      flushPendingNow();
    }, 600);
  };

  const applyEls = (snapshot: any[], nextEls: any[]) => {
    flushPendingNow();
    pastRef.current = [...pastRef.current, snapshot];
    futureRef.current = [];
    setPast(pastRef.current);
    setFuture([]);
    elsRef.current = nextEls;
    setEls(nextEls);
    persistSoon();
  };

  const undo = () => {
    flushPendingNow();
    if (!pastRef.current.length) return;
    const prev = pastRef.current[pastRef.current.length - 1];
    pastRef.current = pastRef.current.slice(0, -1);
    futureRef.current = [elsRef.current, ...futureRef.current];
    elsRef.current = prev;
    setPast(pastRef.current);
    setFuture(futureRef.current);
    setEls(prev);
    setSelectedId(null);
    persistSoon();
  };
  const redo = () => {
    flushPendingNow();
    if (!futureRef.current.length) return;
    const next = futureRef.current[0];
    futureRef.current = futureRef.current.slice(1);
    pastRef.current = [...pastRef.current, elsRef.current];
    elsRef.current = next;
    setPast(pastRef.current);
    setFuture(futureRef.current);
    setEls(next);
    setSelectedId(null);
    persistSoon();
  };

  // ---- texto inline (sem popup) ----
  const openTextEditor = (p: any) => {
    const hit = [...elsRef.current].reverse().find((el) => el.kind === "text" && canvasHit(el, p, 6));
    setSelectedId(null);
    if (hit) setTextEdit({ id: hit.id, x: hit.x, y: hit.y, value: hit.text || "", size: hit.size || textSize, color: hit.color || color, snapshot: elsRef.current });
    else setTextEdit({ id: null, x: p.x, y: p.y, value: "", size: textSize, color, snapshot: elsRef.current });
  };
  const commitText = () => {
    const te = teRef.current;
    if (!te) return;
    teRef.current = null;
    setTextEdit(null);
    const snap = te.snapshot || elsRef.current;
    const v = (te.value || "").replace(/\s+/g, " ").trim();
    if (te.id) {
      const orig = elsRef.current.find((el: any) => el.id === te.id);
      if (orig && orig.text === v && orig.size === te.size && orig.color === te.color) return;
      const next = v === "" ? elsRef.current.filter((el: any) => el.id !== te.id) : elsRef.current.map((el: any) => (el.id === te.id ? { ...el, text: v, size: te.size, color: te.color } : el));
      applyEls(snap, next);
      if (v !== "") { setSelectedId(te.id); bumpColor(te.color); }
    } else {
      if (v === "") return;
      const nid = uid();
      applyEls(snap, [...elsRef.current, { id: nid, kind: "text", x: te.x, y: te.y, text: v, size: te.size, color: te.color, opacity }]);
      setSelectedId(nid);
      bumpColor(te.color);
    }
  };
  const cancelText = () => { teRef.current = null; setTextEdit(null); };

  const clearAll = () => {
    if (!els.length) return;
    cancelText();
    if (confirm("Limpar todo o caderno?")) { applyEls(els, []); setSelectedId(null); }
  };
  const groupIdsOf = (id: string | null) => {
    if (!id) return [] as string[];
    const sel = elsRef.current.find((el) => el.id === id);
    if (!sel) return [] as string[];
    if (!sel.group) return [id];
    return elsRef.current.filter((el) => el.group === sel.group).map((el) => el.id);
  };
  const groupSelected = () => {
    if (!multiSel || multiSel.length < 2) return;
    const g = uid();
    applyEls(elsRef.current, elsRef.current.map((el) => (multiSel.indexOf(el.id) !== -1 ? { ...el, group: g } : el)));
    setSelectedId(multiSel[0]);
    setMultiSel(null);
  };
  const ungroupSelected = () => {
    const ids = groupIdsOf(selectedId);
    if (ids.length < 2) return;
    applyEls(elsRef.current, elsRef.current.map((el) => (ids.indexOf(el.id) !== -1 ? { ...el, group: undefined } : el)));
  };
  const deleteSelected = () => {
    const ids = multiSel && multiSel.length ? multiSel : groupIdsOf(selectedId);
    if (!ids.length) return;
    applyEls(els, (Array.isArray(els)?els:[]).filter((el) => ids.indexOf(el.id) === -1));
    setSelectedId(null);
    setMultiSel(null);
  };
  const moveLayer = (dir: number) => {
    if (!selectedId || groupIdsOf(selectedId).length > 1) return;
    const arr = [...elsRef.current];
    const i = (Array.isArray(arr)?arr:[]).findIndex((el) => el.id === selectedId);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= arr.length) return;
    const snap = elsRef.current;
    const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    applyEls(snap, arr);
  };
  const recolorSelected = (c: string) => {
    const ids = multiSel && multiSel.length ? multiSel : groupIdsOf(selectedId);
    if (!ids.length) return;
    if (ids.length === 1) {
      const sel = elsRef.current.find((el) => el.id === ids[0]);
      if (!sel || sel.color === c) return;
    }
    applyEls(elsRef.current, elsRef.current.map((el) => (ids.indexOf(el.id) !== -1 ? { ...el, color: c } : el)));
  };
  const applyTextSizeToSelected = (v: number) => {
    if (!selectedId) return;
    const sel = elsRef.current.find((el) => el.id === selectedId);
    if (!sel || sel.kind !== "text" || sel.size === v) return;
    applyEls(elsRef.current, elsRef.current.map((el) => (el.id === selectedId ? { ...el, size: v } : el)));
  };
  const bumpTextSize = (d: number) => {
    const v = Math.min(120, Math.max(8, Math.round((textSize || 24) + d)));
    setTextSize(v);
    applyTextSizeToSelected(v);
  };
  const reopacifySelected = () => {
    if (!selectedId) return;
    const sel = elsRef.current.find((el) => el.id === selectedId);
    if (!sel || sel.opacity === opacity) return;
    applyEls(elsRef.current, elsRef.current.map((el) => (el.id === selectedId ? { ...el, opacity } : el)));
  };
  const retypeSelected = (kind: string, sid?: string | null) => {
    const id = sid !== undefined ? sid : selectedId;
    if (!id || SHAPE_KINDS.indexOf(kind) === -1) return;
    if (groupIdsOf(id).length > 1) return;
    const sel = elsRef.current.find((el) => el.id === id);
    if (!sel || SHAPE_KINDS.indexOf(sel.kind) === -1 || sel.kind === kind) return;
    const wasLine = LINE_KINDS.indexOf(sel.kind) !== -1;
    const isLine = LINE_KINDS.indexOf(kind) !== -1;
    let next: any = { ...sel, kind };
    if (isLine && !wasLine) {
      const b = canvasBBox(sel);
      next = { id: sel.id, kind, color: sel.color, sw: sel.sw, opacity: sel.opacity, rot: sel.rot, x1: b.x, y1: b.y + b.h, x2: b.x + b.w, y2: b.y, head: sel.head || arrowHead };
    } else if (!isLine && wasLine) {
      const b = canvasBBox(sel);
      next = { id: sel.id, kind, color: sel.color, sw: sel.sw, opacity: sel.opacity, rot: sel.rot, x: b.x, y: b.y, w: Math.max(40, b.w), h: Math.max(40, b.h), fill: false };
    } else if (isLine) {
      next.head = sel.head || arrowHead;
    }
    applyEls(elsRef.current, elsRef.current.map((el) => (el.id === id ? next : el)));
    setSelectedId(id);
  };
  const duplicateSelected = () => {
    const fromMarquee = !!(multiSel && multiSel.length);
    const ids = fromMarquee ? multiSel! : groupIdsOf(selectedId);
    if (!ids.length) return;
    const g = !fromMarquee && ids.length > 1 ? uid() : undefined;
    const copies: any[] = [];
    for (const id of ids) {
      const el = (Array.isArray(els)?els:[]).find((e) => e.id === id);
      if (el) copies.push(translateEl({ ...clone(el), id: uid(), group: g }, 24, 24));
    }
    if (!copies.length) return;
    applyEls(els, [...els, ...copies]);
    setSelectedId(copies[copies.length - 1].id);
    setMultiSel(fromMarquee ? (Array.isArray(copies)?copies:[]).map((c) => c.id) : null);
  };
  // Copiar / colar / recortar (Ctrl+C / Ctrl+V / Ctrl+X)
  const copySelection = () => {
    const ids = multiSel && multiSel.length ? multiSel : groupIdsOf(selectedId);
    if (!ids.length) return false;
    CANVAS_CLIP = ids.map((id) => elsRef.current.find((el) => el.id === id)).filter(Boolean).map((el) => clone(el));
    setClipReady(CANVAS_CLIP.length > 0);
    return CANVAS_CLIP.length > 0;
  };
  const pasteClipboard = () => {
    if (!CANVAS_CLIP.length) return false;
    flushPendingNow();
    const gmap: any = {};
    const copies = CANVAS_CLIP.map((el) => {
      const t = translateEl(el, 28, 28);
      t.id = uid();
      if (t.group) { if (!gmap[t.group]) gmap[t.group] = uid(); t.group = gmap[t.group]; }
      return t;
    });
    if (tool !== "select") pickTool("select");
    applyEls(elsRef.current, [...elsRef.current, ...copies]);
    const ids = copies.map((c) => c.id);
    if (ids.length > 1) { setMultiSel(ids); setSelectedId(null); }
    else { setSelectedId(ids[0]); setMultiSel(null); }
    CANVAS_CLIP = copies.map((c) => clone(c)); // próxima colagem segue em cascata
    setClipReady(true);
    return true;
  };

  const pickTool = (t: string) => {
    if (teRef.current) commitText();
    setTool(t);
    if (t !== "select") { setSelectedId(null); setMultiSel(null); }
  };

  // ---- zoom / navegação ----
  const zoomBy = (factor: number) => {
    flushPendingNow();
    const rect = svgRef.current?.getBoundingClientRect();
    const cx = rect ? rect.width / 2 : 400;
    const cy = rect ? rect.height / 2 : 300;
    const ns = Math.min(6, Math.max(0.25, scale * factor));
    const wx = (cx - tx) / scale, wy = (cy - ty) / scale;
    setTx(cx - wx * ns); setTy(cy - wy * ns); setScale(ns);
  };
  const resetView = () => { flushPendingNow(); setScale(1); setTx(0); setTy(0); };
  const fitSheet = (w: number, h: number) => {
    if (!svgRef.current) return;
    const r = svgRef.current.getBoundingClientRect();
    const fit = Math.min((r.width - 60) / w, (r.height - 150) / h);
    const ns = Math.min(2, Math.max(0.2, fit));
    setScale(ns); setTx((r.width - w * ns) / 2); setTy(Math.max(64, (r.height - h * ns) / 2));
  };
  const fitView = () => {
    flushPendingNow();
    if (!elsRef.current.length || !svgRef.current) { resetView(); return; }
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    elsRef.current.forEach((el) => {
      const b = canvasBBox(el);
      minX = Math.min(minX, b.x); minY = Math.min(minY, b.y);
      maxX = Math.max(maxX, b.x + b.w); maxY = Math.max(maxY, b.y + b.h);
    });
    const pad = 60;
    const rect = svgRef.current.getBoundingClientRect();
    const bw = Math.max(1, maxX - minX + pad * 2), bh = Math.max(1, maxY - minY + pad * 2);
    const ns = Math.min(3, Math.max(0.25, Math.min(rect.width / bw, rect.height / bh)));
    setScale(ns);
    setTx(rect.width / 2 - (minX + (maxX - minX) / 2) * ns);
    setTy(rect.height / 2 - (minY + (maxY - minY) / 2) * ns);
  };

  // Scroll do trackpad/mouse: rolar move a tela; Ctrl/Cmd + scroll dá zoom
  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (pendingRef.current) flushPendingNow();
      if (e.ctrlKey || e.metaKey) {
        const rect = node.getBoundingClientRect();
        const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
        const factor = Math.exp(-e.deltaY * 0.0016);
        setScale((s) => {
          const ns = Math.min(6, Math.max(0.25, s * factor));
          setTx((t) => cx - ((cx - t) / s) * ns);
          setTy((t) => cy - ((cy - t) / s) * ns);
          return ns;
        });
      } else {
        setTx((t) => t - e.deltaX);
        setTy((t) => t - e.deltaY);
      }
    };
    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, []);

  // Safari/iPadOS: bloquear touchstart/touchmove (não-passivo) na folha
  useEffect(() => {
    const node: any = svgRef.current;
    if (!node) return;
    const block = (e: TouchEvent) => { if (e.cancelable) e.preventDefault(); };
    node.addEventListener("touchstart", block, { passive: false });
    node.addEventListener("touchmove", block, { passive: false });
    return () => { node.removeEventListener("touchstart", block); node.removeEventListener("touchmove", block); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t: any = e.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)) return;
      if (!canEdit) return;
      const meta = e.ctrlKey || e.metaKey;
      if (meta && e.key.toLowerCase() === "z" && !e.shiftKey) { e.preventDefault(); undo(); return; }
      if (meta && (e.key.toLowerCase() === "y" || (e.key.toLowerCase() === "z" && e.shiftKey))) { e.preventDefault(); redo(); return; }
      if (meta && e.key.toLowerCase() === "c") { if (copySelection()) e.preventDefault(); return; }
      if (meta && e.key.toLowerCase() === "x") { if (copySelection()) { e.preventDefault(); deleteSelected(); } return; }
      if (meta && e.key.toLowerCase() === "v") { if (pasteClipboard()) e.preventDefault(); return; }
      if (meta && e.key.toLowerCase() === "g" && !e.shiftKey) { e.preventDefault(); groupSelected(); return; }
      if (meta && e.key.toLowerCase() === "g" && e.shiftKey) { e.preventDefault(); ungroupSelected(); return; }
      if ((e.key === "Delete" || e.key === "Backspace") && (selectedId || (multiSel && multiSel.length))) { e.preventDefault(); deleteSelected(); return; }
      if (e.key === "Escape") { setSelectedId(null); return; }
      if (!meta && !e.altKey && !e.shiftKey) {
        const k = e.key.toLowerCase();
        if (k === "f") { e.preventDefault(); fitView(); return; }
        const map: any = { v: "select", h: "pan", p: "pen", l: "pencil", m: "marker", g: "highlighter", e: "eraser", s: "shape", t: "text" };
        if (map[k]) { e.preventDefault(); pickTool(map[k]); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [past, future, els, selectedId, multiSel, tool, paper, bg, canEdit, textEdit]);

  const getPos = (e: any) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const rect = svgRef.current.getBoundingClientRect();
    const rx = e.clientX - rect.left, ry = e.clientY - rect.top;
    return { x: (rx - tx) / scale, y: (ry - ty) / scale };
  };

  // Pressão: usa a da caneta; no mouse/dedo, deriva da velocidade
  const computePressure = (ev: any) => {
    const t = ev.timeStamp || performance.now();
    const lp = lastPtRef.current;
    let pr: number;
    if (ev.pointerType === "pen" && typeof ev.pressure === "number" && ev.pressure > 0) {
      pr = Math.min(1, Math.max(0.08, ev.pressure));
    } else {
      pr = 0.6;
      if (lp) {
        const dt = Math.max(1, t - lp.t);
        const v = Math.hypot(ev.clientX - lp.x, ev.clientY - lp.y) / dt;
        pr = Math.min(1, Math.max(0.22, 1 - v * 0.45));
        pr = lp.pr * 0.6 + pr * 0.4;
      }
    }
    lastPtRef.current = { x: ev.clientX, y: ev.clientY, t, pr };
    return pr;
  };

  // ---- traço ao vivo em <canvas> 2D, incremental e fora do React ----
  const sizeCanvases = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const dpr = Math.min(3, Math.max(2, window.devicePixelRatio || 1));
    const w = Math.round(wrap.clientWidth * dpr), h = Math.round(wrap.clientHeight * dpr);
    const willResize = [liveCanvasRef.current, predCanvasRef.current].some((c) => c && (c.width !== w || c.height !== h));
    if (willResize && pendingRef.current) flushPendingNow();
    [liveCanvasRef.current, predCanvasRef.current].forEach((c) => {
      if (c && (c.width !== w || c.height !== h)) { c.width = w; c.height = h; }
    });
  };
  useEffect(() => {
    sizeCanvases();
    let ro: any = null;
    try {
      ro = new (window as any).ResizeObserver(() => sizeCanvases());
      if (wrapRef.current) ro.observe(wrapRef.current);
    } catch (err) {}
    window.addEventListener("resize", sizeCanvases);
    return () => { window.removeEventListener("resize", sizeCanvases); if (ro) { try { ro.disconnect(); } catch (err) {} } };
  }, []);

  const inkW = (baseW: number, pr: number, pen?: string) => penWidth(baseW, pr, pen);
  const setupCtx = (c: HTMLCanvasElement | null, view: any, colorStr: string) => {
    if (!c) return null;
    const ctx = c.getContext("2d");
    if (!ctx) return null;
    const dpr = Math.min(3, Math.max(2, window.devicePixelRatio || 1));
    ctx.setTransform(dpr * view.scale, 0, 0, dpr * view.scale, dpr * view.tx, dpr * view.ty);
    ctx.fillStyle = colorStr;
    ctx.strokeStyle = colorStr;
    ctx.lineJoin = "round";
    return ctx;
  };
  const clearCanvas = (c: HTMLCanvasElement | null) => {
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, c.width, c.height);
  };
  const drawInkDot = (ctx: any, p: any, w: number) => {
    ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0.35, w / 2), 0, Math.PI * 2); ctx.fill();
  };
  const drawInkSeg = (ctx: any, p0: any, w0: number, p1: any, w1: number) => {
    const dx = p1.x - p0.x, dy = p1.y - p0.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len, ny = dx / len;
    ctx.beginPath();
    ctx.moveTo(p0.x + (nx * w0) / 2, p0.y + (ny * w0) / 2);
    ctx.lineTo(p1.x + (nx * w1) / 2, p1.y + (ny * w1) / 2);
    ctx.lineTo(p1.x - (nx * w1) / 2, p1.y - (ny * w1) / 2);
    ctx.lineTo(p0.x - (nx * w0) / 2, p0.y - (ny * w0) / 2);
    ctx.closePath();
    ctx.fill();
    drawInkDot(ctx, p1, w1);
  };
  const drawFlatSeg = (ctx: any, p0: any, p1: any, w: number, cap: string) => {
    ctx.lineWidth = w; ctx.lineCap = cap;
    ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.lineTo(p1.x, p1.y); ctx.stroke();
  };

  const startLiveStroke = (e: any, t: string, p: any) => {
    const ne = e.nativeEvent || e;
    const rect = svgRef.current ? svgRef.current.getBoundingClientRect() : ({ left: 0, top: 0 } as any);
    const view = { left: rect.left, top: rect.top, tx, ty, scale };
    lastPtRef.current = null;
    const ink = t === "pen" || t === "pencil" || t === "brush" || t === "calligraphy";
    const strokeW = t === "highlighter" ? Math.max(sw, 18) : t === "marker" ? Math.max(sw, 8) : t === "neon" ? Math.max(sw, 5) : t === "pencil" ? Math.max(1.5, sw * 0.8) : t === "brush" ? Math.max(3, sw * 1.5) : sw;
    const strokeO = t === "highlighter" ? 0.4 : t === "pencil" ? Math.min(opacity, 0.85) : opacity;
    const first: any = { x: r2(p.x), y: r2(p.y) };
    if (ink) first.p = Math.round(computePressure(ne) * 100) / 100;
    const el: any = { id: uid(), kind: "path", pts: [first], color, sw: strokeW, pen: t, opacity: strokeO };
    if (ink) el.ink = true;
    const blend = t === "highlighter" ? "multiply" : "";
    if (pendingRef.current && (pendingRef.current.blend !== blend || pendingRef.current.opacity !== String(strokeO))) flushPendingNow();
    sizeCanvases();
    const lc = liveCanvasRef.current, pc = predCanvasRef.current;
    if (lc) { lc.style.opacity = String(strokeO); (lc.style as any).mixBlendMode = blend; }
    if (pc) { pc.style.opacity = String(strokeO); (pc.style as any).mixBlendMode = blend; }
    const w0 = ink ? inkW(strokeW, first.p, t) : strokeW;
    const ctx = setupCtx(lc, view, color);
    if (ctx) {
      if (ink) drawInkDot(ctx, first, w0 * 0.7);
      else if (t === "marker") drawInkDot(ctx, first, strokeW);
    }
    const t0 = ne.timeStamp || performance.now();
    liveRef.current = { el, view, pointerId: e.pointerId, ptype: e.pointerType, lastDrawn: first, lastW: w0, velX: 0, velY: 0, lastT: t0 };
  };

  const moveLiveStroke = (e: any) => {
    const lv = liveRef.current;
    if (!lv) return;
    const ne = e.nativeEvent || e;
    const view = lv.view;
    const toWorld = (cx: number, cy: number) => ({ x: (cx - view.left - view.tx) / view.scale, y: (cy - view.top - view.ty) / view.scale });
    let evs: any[] = [ne];
    try { if (ne.getCoalescedEvents) { const ce = ne.getCoalescedEvents(); if (ce && ce.length) evs = ce; } } catch (err) {}
    const ctx = setupCtx(liveCanvasRef.current, view, lv.el.color);
    const ink = !!lv.el.ink;
    const sm = smoothRef.current != null ? smoothRef.current : 0.5;
    const keepPos = Math.min(0.9, Math.max(0, sm * 0.9));
    const keepW = Math.min(0.92, 0.4 + sm * 0.7);
    const cap = lv.el.pen === "highlighter" ? "butt" : "round";
    if (ctx) {
      if (lv.el.pen === "neon") { ctx.shadowColor = lv.el.color; ctx.shadowBlur = Math.max(10, lv.el.sw * 2.2) * view.scale; }
      else if (ctx.shadowBlur) ctx.shadowBlur = 0;
    }
    const pts = lv.el.pts;
    for (let i = 0; i < evs.length; i++) {
      const ev = evs[i];
      const wpRaw = toWorld(ev.clientX, ev.clientY);
      const wp = ink
        ? { x: r2(lv.lastDrawn.x * keepPos + wpRaw.x * (1 - keepPos)), y: r2(lv.lastDrawn.y * keepPos + wpRaw.y * (1 - keepPos)) }
        : { x: r2(wpRaw.x), y: r2(wpRaw.y) };
      const last = pts[pts.length - 1];
      if (last && Math.hypot(last.x - wp.x, last.y - wp.y) * view.scale < 1.1) continue;
      const tNow = ev.timeStamp || performance.now();
      const dt = Math.max(1, tNow - lv.lastT);
      lv.velX = lv.velX * 0.5 + ((wp.x - lv.lastDrawn.x) / dt) * 0.5;
      lv.velY = lv.velY * 0.5 + ((wp.y - lv.lastDrawn.y) / dt) * 0.5;
      lv.lastT = tNow;
      if (ink) {
        let pr = Math.round(computePressure(ev) * 100) / 100;
        if (lv.el.pen === "brush") {
          const spd = Math.hypot(lv.velX, lv.velY);
          const slow = Math.max(0, 1 - Math.min(1, spd / 1.8));
          const drive = Math.max(pr, 0.25 + slow * 0.75);
          pr = Math.round(Math.min(1, Math.pow(drive, 1.5) * 1.3) * 100) / 100;
        } else if (lv.el.pen === "calligraphy") {
          const ang = Math.atan2(wpRaw.y - lv.lastDrawn.y, wpRaw.x - lv.lastDrawn.x);
          const f = Math.abs(Math.sin(ang - Math.PI / 4));
          pr = Math.round(Math.max(0.05, Math.min(1, 0.05 + f * f * 1.05)) * 100) / 100;
        }
        const wTarget = inkW(lv.el.sw, pr, lv.el.pen);
        const kw = (lv.el.pen === "brush" || lv.el.pen === "calligraphy") ? Math.min(keepW, 0.55) : keepW;
        const w = lv.lastW * kw + wTarget * (1 - kw);
        pts.push({ x: wp.x, y: wp.y, p: pr });
        if (ctx) drawInkSeg(ctx, lv.lastDrawn, lv.lastW, wp, w);
        lv.lastW = w;
      } else {
        pts.push(wp);
        if (ctx) drawFlatSeg(ctx, lv.lastDrawn, wp, lv.el.sw, cap);
      }
      lv.lastDrawn = wp;
    }
    const pc = predCanvasRef.current;
    clearCanvas(pc);
    const speed = Math.hypot(lv.velX, lv.velY);
    if (speed * view.scale > 0.05) {
      const pctx = setupCtx(pc, view, lv.el.color);
      if (pctx) {
        const horizon = 12;
        const maxLen = 16 / view.scale;
        let ex = lv.velX * horizon, ey = lv.velY * horizon;
        const eLen = Math.hypot(ex, ey) || 1;
        if (eLen > maxLen) { ex = (ex / eLen) * maxLen; ey = (ey / eLen) * maxLen; }
        const mid = { x: lv.lastDrawn.x + ex * 0.5, y: lv.lastDrawn.y + ey * 0.5 };
        const tip = { x: lv.lastDrawn.x + ex, y: lv.lastDrawn.y + ey };
        if (ink) {
          drawInkSeg(pctx, lv.lastDrawn, lv.lastW, mid, lv.lastW);
          drawInkSeg(pctx, mid, lv.lastW, tip, Math.max(0.7, lv.lastW * 0.85));
        } else {
          drawFlatSeg(pctx, lv.lastDrawn, tip, lv.el.sw, cap);
        }
      }
    }
  };

  const endLiveStroke = () => {
    const lv = liveRef.current;
    if (!lv) return;
    liveRef.current = null;
    const finished = lv.el.ink ? { ...lv.el, d: inkOutline(lv.el.pts, lv.el.sw) } : lv.el;
    bumpColor(finished.color);
    const snapshot = gestureStart.current || elsRef.current;
    gestureStart.current = null;
    elsRef.current = [...elsRef.current, finished];
    if (!pendingRef.current) pendingRef.current = { snaps: [], blend: lv.el.pen === "highlighter" ? "multiply" : "", opacity: String(lv.el.opacity != null ? lv.el.opacity : 1) };
    pendingRef.current.snaps.push(snapshot);
    persistSoon();
    schedulePendingFlush();
  };

  const discardLiveStroke = () => {
    if (!liveRef.current) return;
    liveRef.current = null;
    clearCanvas(liveCanvasRef.current);
    clearCanvas(predCanvasRef.current);
    gestureStart.current = null;
  };

  const moveEraserRing = (e: any) => {
    const ring = eraserRingRef.current;
    if (!ring || !svgRef.current) return;
    const r = svgRef.current.getBoundingClientRect();
    const R = eraserR * scale;
    ring.style.display = "block";
    ring.style.left = (e.clientX - r.left - R) + "px";
    ring.style.top = (e.clientY - r.top - R) + "px";
    ring.style.width = (R * 2) + "px";
    ring.style.height = (R * 2) + "px";
  };

  const eraseAt = (p: any) => {
    if (!elsRef.current.some((el) => el.kind !== "image" && canvasHit(el, p, eraserR))) return;
    setEls((prev: any[]) => {
      const next = (Array.isArray(prev) ? prev : []).filter((el) => el.kind === "image" || !canvasHit(el, p, eraserR));
      elsRef.current = next;
      return next;
    });
  };

  const startSelect = (p: any) => {
    gestureStart.current = elsRef.current;
    const hit = [...elsRef.current].reverse().find((el) => canvasHit(el, p));
    if (hit) {
      let ids: string[];
      if (multiSel && multiSel.length && multiSel.indexOf(hit.id) !== -1) {
        ids = multiSel;
      } else {
        setMultiSel(null);
        ids = groupIdsOf(hit.id);
      }
      setSelectedId(hit.id);
      dragSel.current = { id: hit.id, ids, startX: p.x, startY: p.y, dx: 0, dy: 0, moved: false };
    } else {
      setSelectedId(null);
      setMultiSel(null);
      dragSel.current = null;
      gestureTool.current = "marquee";
      marqueeRef.current = { x0: p.x, y0: p.y };
      setMarquee({ x: p.x, y: p.y, w: 0, h: 0 });
    }
  };

  const onPointerDown = (e: any) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    lastInputTsRef.current = Date.now();
    if (e.pointerType !== "mouse" && e.cancelable !== false) e.preventDefault();
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType, ts: Date.now() });
    if (e.pointerType === "pen") lastPenTsRef.current = Date.now();

    if (e.pointerType === "touch" && liveRef.current && liveRef.current.ptype === "pen") return;

    if (e.pointerType === "touch") {
      const nowTs = Date.now();
      const touches = Array.from(pointersRef.current.entries())
        .filter((en: any) => en[1].type === "touch")
        .sort((a: any, b: any) => (b[1].ts || 0) - (a[1].ts || 0));
      if (touches.length >= 2) {
        const idA = (touches[0] as any)[0], pA = (touches[0] as any)[1];
        const idB = (touches[1] as any)[0], pB = (touches[1] as any)[1];
        if (Math.abs((pA.ts || 0) - (pB.ts || 0)) < 400 && nowTs - (pB.ts || 0) < 600) {
          flushPendingNow();
          discardLiveStroke();
          setDrawing(null); dragSel.current = null; panStart.current = null; resizeRef.current = null;
          gestureTool.current = "pinch";
          hideToolbarNow();
          const rect = svgRef.current ? svgRef.current.getBoundingClientRect() : ({ left: 0, top: 0 } as any);
          pinchRef.current = {
            ids: [idA, idB],
            d0: Math.hypot(pA.x - pB.x, pA.y - pB.y) || 1,
            mx0: (pA.x + pB.x) / 2 - rect.left,
            my0: (pA.y + pB.y) / 2 - rect.top,
            s0: scale, tx0: tx, ty0: ty,
            zooming: false,
          };
          return;
        }
      }
      if (liveRef.current) return;
    }
    if (teRef.current) { commitText(); return; }

    const baseTool = canEdit ? tool : "pan";
    const autoPalm = e.pointerType === "touch" && (penOnly || Date.now() - lastPenTsRef.current < 1500);
    const t = (autoPalm && baseTool !== "pan") ? "pan" : baseTool;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch (err) {}
    const p = getPos(e);
    if (!isPenTool(t) && t !== "pan") flushPendingNow();

    if ((t === "select" || t === "text" || t === "shape") && selectedId && groupIdsOf(selectedId).length <= 1) {
      const sel = elsRef.current.find((el) => el.id === selectedId);
      if (sel) {
        const b = canvasBBox(sel);
        const ctr = { x: b.x + b.w / 2, y: b.y + b.h / 2 };
        const hp = sel.rot ? rotPt(p, -sel.rot, ctr) : p;
        if (canEdit && Math.hypot(hp.x - (ctr.x + 26 / scale), hp.y - (b.y - 26 / scale)) < 11 / scale) {
          setAspectLock((v) => !v);
          return;
        }
        if (canEdit && Math.hypot(hp.x - ctr.x, hp.y - (b.y - 26 / scale)) < 14 / scale) {
          gestureTool.current = "rotate";
          rotRef.current = { id: sel.id, cx: ctr.x, cy: ctr.y, base: sel.rot || 0, val: sel.rot || 0, snapshot: elsRef.current };
          hideToolbarNow();
          return;
        }
        const corners = [
          { hx: b.x - 6, hy: b.y - 6, ox: b.x + b.w, oy: b.y + b.h, px: b.x, py: b.y },
          { hx: b.x + b.w + 6, hy: b.y - 6, ox: b.x, oy: b.y + b.h, px: b.x + b.w, py: b.y },
          { hx: b.x + b.w + 6, hy: b.y + b.h + 6, ox: b.x, oy: b.y, px: b.x + b.w, py: b.y + b.h },
          { hx: b.x - 6, hy: b.y + b.h + 6, ox: b.x + b.w, oy: b.y, px: b.x, py: b.y + b.h },
        ];
        const rIn = 14 / scale;
        for (const c of corners) {
          if (Math.hypot(hp.x - c.hx, hp.y - c.hy) < rIn) {
            gestureTool.current = "resize";
            resizeRef.current = { id: sel.id, el: sel, ox: c.ox, oy: c.oy, dx0: (c.px - c.ox) || 1, dy0: (c.py - c.oy) || 1, sx: 1, sy: 1, moved: false, rot: sel.rot || 0, cx: ctr.x, cy: ctr.y, snapshot: elsRef.current };
            return;
          }
        }
      }
    }

    gestureTool.current = t;
    if (t === "pan") { panStart.current = { x: e.clientX, y: e.clientY, tx, ty, palm: autoPalm, go: false, downTs: Date.now() }; return; }
    if (t === "text") {
      const hitT = [...elsRef.current].reverse().find((el) => el.kind === "text" && canvasHit(el, p, 6));
      if (hitT) {
        gestureTool.current = "textdrag";
        setSelectedId(hitT.id);
        gestureStart.current = elsRef.current;
        dragSel.current = { id: hitT.id, startX: p.x, startY: p.y, dx: 0, dy: 0, moved: false };
        return;
      }
      gestureTool.current = "";
      setSelectedId(null);
      openTextEditor(p);
      return;
    }
    if (t === "select") { startSelect(p); return; }

    if (t === "shape") {
      const hitS = [...elsRef.current].reverse().find((el) => SHAPE_KINDS.indexOf(el.kind) !== -1 && canvasHit(el, p, 4));
      if (hitS) {
        gestureTool.current = "shapedrag";
        setSelectedId(hitS.id);
        gestureStart.current = elsRef.current;
        dragSel.current = { id: hitS.id, startX: p.x, startY: p.y, dx: 0, dy: 0, moved: false };
        return;
      }
      setSelectedId(null);
    }

    gestureStart.current = elsRef.current;
    hideToolbarNow();

    if (isPenTool(t)) {
      startLiveStroke(e, t, p);
    } else if (t === "shape") {
      setDrawing({ id: uid(), kind: shapeType, x: p.x, y: p.y, w: 0, h: 0, x1: p.x, y1: p.y, x2: p.x, y2: p.y, color, sw, fill, opacity, head: arrowHead });
    } else if (t === "eraser") {
      moveEraserRing(e);
      eraseAt(p);
    }
  };

  const onPointerMove = (e: any) => {
    lastInputTsRef.current = Date.now();
    const prevPt = pointersRef.current.get(e.pointerId);
    if (prevPt) pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY, type: e.pointerType, ts: prevPt.ts });
    if (tool === "eraser" && canEdit && e.pointerType !== "touch") moveEraserRing(e);
    if (gestureTool.current === "pinch") {
      const pi = pinchRef.current;
      if (!pi || !svgRef.current) return;
      const pA = pointersRef.current.get(pi.ids[0]);
      const pB = pointersRef.current.get(pi.ids[1]);
      if (!pA || !pB) return;
      const rect = svgRef.current.getBoundingClientRect();
      const d = Math.hypot(pA.x - pB.x, pA.y - pB.y) || 1;
      const mx = (pA.x + pB.x) / 2 - rect.left;
      const my = (pA.y + pB.y) / 2 - rect.top;
      let ratio = d / pi.d0;
      if (!pi.zooming && Math.abs(ratio - 1) < 0.05) ratio = 1; else pi.zooming = true;
      const ns = Math.min(6, Math.max(0.25, pi.s0 * ratio));
      setScale(ns);
      setTx(mx - ((pi.mx0 - pi.tx0) / pi.s0) * ns);
      setTy(my - ((pi.my0 - pi.ty0) / pi.s0) * ns);
      return;
    }
    if (liveRef.current) {
      if (e.pointerId === liveRef.current.pointerId) moveLiveStroke(e);
      return;
    }
    const t = gestureTool.current;
    if (!t) return;
    const p = getPos(e);

    if (t === "rotate") {
      const rr = rotRef.current;
      if (!rr) return;
      let ang = (Math.atan2(p.y - rr.cy, p.x - rr.cx) * 180) / Math.PI + 90;
      if (e.shiftKey) ang = Math.round(ang / 15) * 15;
      rr.val = ang;
      schedule("xf", () => {
        const r2 = rotRef.current;
        if (r2 && dragGRef.current) dragGRef.current.setAttribute("transform", "rotate(" + (r2.val - r2.base) + " " + r2.cx + " " + r2.cy + ")");
      });
      return;
    }
    if (t === "resize") {
      const rz = resizeRef.current;
      if (!rz) return;
      const pr = rz.rot ? rotPt(p, -rz.rot, { x: rz.cx, y: rz.cy }) : p;
      const cl = (v: number) => { const s = v < 0 ? -1 : 1; return s * Math.min(20, Math.max(0.02, Math.abs(v))); };
      let sx = cl((pr.x - rz.ox) / rz.dx0);
      let sy = cl((pr.y - rz.oy) / rz.dy0);
      if (aspectLock || e.shiftKey) { const u = Math.max(Math.abs(sx), Math.abs(sy)); sx = (sx < 0 ? -1 : 1) * u; sy = (sy < 0 ? -1 : 1) * u; }
      rz.sx = sx; rz.sy = sy;
      if (Math.abs(sx - 1) + Math.abs(sy - 1) > 0.01) rz.moved = true;
      schedule("xf", () => {
        const rz2 = resizeRef.current;
        if (rz2 && dragGRef.current) dragGRef.current.setAttribute("transform", "translate(" + rz2.ox + " " + rz2.oy + ") scale(" + rz2.sx + " " + rz2.sy + ") translate(" + (-rz2.ox) + " " + (-rz2.oy) + ")");
      });
      return;
    }
    if (t === "pan") {
      if (!panStart.current || (e.pointerType === "mouse" && e.buttons !== 1)) return;
      const pdx = e.clientX - panStart.current.x, pdy = e.clientY - panStart.current.y;
      if (panStart.current.palm && !panStart.current.go) {
        if (Math.hypot(pdx, pdy) < 10) return;
        panStart.current.go = true;
      }
      if (pendingRef.current) flushPendingNow();
      setTx(panStart.current.tx + pdx);
      setTy(panStart.current.ty + pdy);
      return;
    }
    if (t === "marquee") {
      const m0 = marqueeRef.current;
      if (!m0) return;
      setMarquee({ x: Math.min(m0.x0, p.x), y: Math.min(m0.y0, p.y), w: Math.abs(p.x - m0.x0), h: Math.abs(p.y - m0.y0) });
      return;
    }
    if (t === "select" || t === "textdrag" || t === "shapedrag") {
      if (!dragSel.current || (e.pointerType === "mouse" && e.buttons !== 1)) return;
      const ds = dragSel.current;
      ds.dx = p.x - ds.startX;
      ds.dy = p.y - ds.startY;
      if (Math.abs(ds.dx) + Math.abs(ds.dy) > 0.5) ds.moved = true;
      schedule("xf", () => {
        const d2 = dragSel.current;
        if (d2 && dragGRef.current) dragGRef.current.setAttribute("transform", "translate(" + d2.dx + " " + d2.dy + ")");
      });
      return;
    }
    if (t === "eraser") {
      if (e.pointerType === "mouse" && e.buttons !== 1) return;
      eraseAt(p);
      return;
    }
    if (drawing) {
      if (LINE_KINDS.indexOf(drawing.kind) !== -1) {
        setDrawing((d: any) => (d ? { ...d, x2: p.x, y2: p.y } : d));
      } else {
        setDrawing((d: any) => (d ? { ...d, w: p.x - d.x, h: p.y - d.y } : d));
      }
    }
  };

  const onPointerUp = (e: any) => {
    lastInputTsRef.current = Date.now();
    pointersRef.current.delete(e.pointerId);
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (err) {}
    if (gestureTool.current === "pinch" && e.pointerType === "touch") {
      const pi = pinchRef.current;
      if (!pi || pi.ids.indexOf(e.pointerId) !== -1) { gestureTool.current = ""; pinchRef.current = null; showToolbarSoon(); }
      return;
    }
    if (liveRef.current && e.pointerId !== liveRef.current.pointerId) return;

    const t = gestureTool.current;
    gestureTool.current = "";
    showToolbarSoon();

    if (liveRef.current) { endLiveStroke(); return; }

    if (t === "rotate") {
      const rr = rotRef.current;
      rotRef.current = null;
      if (dragGRef.current) dragGRef.current.setAttribute("transform", "");
      if (rr) {
        let v = Math.round(rr.val) % 360;
        if (v < 0) v += 360;
        applyEls(rr.snapshot, rr.snapshot.map((el: any) => (el.id === rr.id ? { ...el, rot: v || undefined } : el)));
      }
      return;
    }
    if (t === "resize") {
      const rz = resizeRef.current;
      resizeRef.current = null;
      if (dragGRef.current) dragGRef.current.setAttribute("transform", "");
      if (rz && rz.moved) {
        const scaled = scaleEl(rz.el, rz.ox, rz.oy, rz.sx, rz.sy);
        applyEls(rz.snapshot, elsRef.current.map((el) => (el.id === rz.id ? scaled : el)));
      }
      return;
    }
    if (t === "pan") {
      const ps = panStart.current;
      panStart.current = null;
      if (ps && ps.palm && !ps.go && Date.now() - (ps.downTs || 0) < 300) showToolbarNow();
      return;
    }
    if (t === "marquee") {
      const m = marquee;
      marqueeRef.current = null;
      setMarquee(null);
      gestureStart.current = null;
      if (m && (m.w > 6 || m.h > 6)) {
        const hitIds = elsRef.current.filter((el) => {
          const b = canvasBBox(el);
          return b.x < m.x + m.w && b.x + b.w > m.x && b.y < m.y + m.h && b.y + b.h > m.y;
        }).map((el) => el.id);
        if (hitIds.length > 1) { setMultiSel(hitIds); setSelectedId(null); }
        else if (hitIds.length === 1) { setSelectedId(hitIds[0]); setMultiSel(null); }
      }
      return;
    }
    if (t === "select" || t === "textdrag" || t === "shapedrag") {
      const ds = dragSel.current;
      dragSel.current = null;
      if (dragGRef.current) dragGRef.current.setAttribute("transform", "");
      if (ds && ds.moved && gestureStart.current) {
        const ids = ds.ids && ds.ids.length ? ds.ids : groupIdsOf(ds.id);
        applyEls(gestureStart.current, elsRef.current.map((el) => (ids.indexOf(el.id) !== -1 ? translateEl(el, ds.dx, ds.dy) : el)));
      } else if (t === "textdrag" && ds && !ds.moved) {
        gestureStart.current = null;
        openTextEditor(getPos(e));
        return;
      }
      gestureStart.current = null;
      return;
    }
    if (t === "eraser") {
      if (gestureStart.current && gestureStart.current.length !== elsRef.current.length) applyEls(gestureStart.current, elsRef.current);
      gestureStart.current = null;
      return;
    }
    if (drawing) {
      let keep = true;
      if (drawing.kind !== "line" && drawing.kind !== "arrow") keep = Math.abs(drawing.w || 0) > 3 || Math.abs(drawing.h || 0) > 3;
      if (LINE_KINDS.indexOf(drawing.kind) !== -1) keep = dist2(drawing.x1, drawing.y1, drawing.x2, drawing.y2) > 4;
      const snapshot = gestureStart.current || elsRef.current;
      const finished = drawing;
      setDrawing(null);
      if (keep) { bumpColor(finished.color); bumpShape(finished.kind); applyEls(snapshot, [...elsRef.current, finished]); setSelectedId(finished.id); }
      gestureStart.current = null;
    }
  };

  const onDoubleClick = (e: any) => {
    if (!canEdit) return;
    const p = getPos(e);
    const hitText = [...elsRef.current].reverse().find((el) => el.kind === "text" && canvasHit(el, p, 6));
    if (hitText) { openTextEditor(p); return; }
    if (tool === "select" || tool === "pan") openTextEditor(p);
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleImportFiles = async (fl: any) => {
    if (!fl || !fl.length) return;
    const files = Array.from(fl) as any[];
    const out: any[] = [];
    try {
      for (const f of files) {
        if (f.type === "application/pdf" || /\.pdf$/i.test(f.name || "")) {
          setImporting("Carregando leitor de PDF…");
          const lib = await ensurePdfJs();
          const buf = await f.arrayBuffer();
          const pdf = await lib.getDocument({ data: buf }).promise;
          const base = (f.name || "PDF").replace(/\.pdf$/i, "");
          for (let i = 1; i <= pdf.numPages; i++) {
            setImporting(base + " — página " + i + " de " + pdf.numPages + "…");
            const pg = await pdf.getPage(i);
            let vp = pg.getViewport({ scale: 1 });
            const sc = Math.min(2.2, 1600 / Math.max(vp.width, vp.height));
            vp = pg.getViewport({ scale: sc });
            const cv = document.createElement("canvas");
            cv.width = Math.ceil(vp.width); cv.height = Math.ceil(vp.height);
            const cx = cv.getContext("2d");
            if (!cx) continue;
            await pg.render({ canvasContext: cx, viewport: vp }).promise;
            out.push({ title: pdf.numPages > 1 ? base + " — pág. " + i : base, src: cv.toDataURL("image/jpeg", 0.82), iw: cv.width, ih: cv.height });
          }
        } else if ((f.type || "").indexOf("image/") === 0) {
          setImporting("Lendo " + f.name + "…");
          const srcUrl = await readFileAsDataURL(f);
          const dim = await imageDims(srcUrl);
          out.push({ title: (f.name || "Imagem").replace(/\.[^.]+$/, ""), src: srcUrl, iw: dim.w, ih: dim.h });
        }
      }
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (out.length && importModeRef.current === "insert") {
        let cx0: number, cy0: number, maxW: number, maxH: number;
        if (sheetDims) { maxW = sheetDims.w * 0.85; maxH = sheetDims.h * 0.85; cx0 = sheetDims.w / 2; cy0 = sheetDims.h / 2; }
        else {
          const r = svgRef.current ? svgRef.current.getBoundingClientRect() : { width: 800, height: 600 };
          cx0 = (r.width / 2 - tx) / scale; cy0 = (r.height / 2 - ty) / scale;
          maxW = (r.width * 0.7) / scale; maxH = (r.height * 0.7) / scale;
        }
        const snap = elsRef.current;
        const newEls: any[] = [];
        let off = 0;
        for (const im of out) {
          if (!im.iw || !im.ih) continue;
          const sc = Math.min(maxW / im.iw, maxH / im.ih, 1.5);
          const w = Math.round(im.iw * sc), hh = Math.round(im.ih * sc);
          newEls.push({ id: uid(), kind: "image", x: Math.round(cx0 - w / 2 + off), y: Math.round(cy0 - hh / 2 + off), w, h: hh, src: im.src });
          off += 28;
        }
        applyEls(snap, [...snap, ...newEls]);
        setSelectedId(newEls[newEls.length - 1].id);
        pickTool("select");
        toast(newEls.length === 1 ? "Imagem inserida — posicione e escreva por cima!" : newEls.length + " páginas inseridas — posicione e escreva por cima!", "success");
        setImporting(null);
        return;
      }
      if (out.length && onImportPages) {
        toast(out.length === 1 ? "1 página criada dentro deste caderno" : out.length + " páginas criadas dentro deste caderno", "success");
        setImporting(null);
        await onImportPages((Array.isArray(out)?out:[]).map((it: any) => makeImportedPage(it.title, it.src, it.iw, it.ih)));
        return;
      }
      toast("Nada para importar — escolha um PDF ou imagens", "error");
    } catch (err: any) {
      toast("Não consegui abrir o PDF (leitor bloqueado pela rede) — você pode importar imagens das páginas", "error");
    }
    setImporting(null);
  };

  const exportPng = () => {
    flushPendingNow();
    const list: any[] = elsRef.current;
    try {
      if (!list.length) return;
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      (Array.isArray(list)?list:[]).forEach((el) => {
        const b = canvasBBox(el);
        if (b.x < minX) minX = b.x;
        if (b.y < minY) minY = b.y;
        if (b.x + b.w > maxX) maxX = b.x + b.w;
        if (b.y + b.h > maxY) maxY = b.y + b.h;
      });
      const pad = 40;
      let vbx = minX - pad, vby = minY - pad, vbw = (maxX - minX) + pad * 2, vbh = (maxY - minY) + pad * 2;
      const sd: any = CANVAS_SHEETS.find((s: any) => s.id === sheetRef.current && (s as any).w);
      if (sd) { const L = orientRef.current === "landscape"; vbx = 0; vby = 0; vbw = L ? sd.h : sd.w; vbh = L ? sd.w : sd.h; }
      const inner = (Array.isArray(list)?list:[]).map(elToSvgStringR).join("");
      const bgFill = bg && bg !== "transparent" ? bg : (paper === "blueprint" ? BLUEPRINT_BLUE : "#ffffff");
      const svgStr = '<svg xmlns="http://www.w3.org/2000/svg" width="' + vbw + '" height="' + vbh + '" viewBox="' + vbx + ' ' + vby + ' ' + vbw + ' ' + vbh + '"><rect x="' + vbx + '" y="' + vby + '" width="' + vbw + '" height="' + vbh + '" fill="' + bgFill + '"/>' + inner + '</svg>';
      const img = new Image();
      const url = URL.createObjectURL(new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" }));
      img.onload = () => {
        const c = document.createElement("canvas");
        const sc = Math.max(1, Math.min(3, 8192 / Math.max(vbw, vbh, 1)));
        c.width = Math.max(1, Math.round(vbw * sc));
        c.height = Math.max(1, Math.round(vbh * sc));
        const ctx = c.getContext("2d");
        if (!ctx) { URL.revokeObjectURL(url); return; }
        ctx.scale(sc, sc);
        ctx.drawImage(img, 0, 0);
        URL.revokeObjectURL(url);
        c.toBlob((blob) => {
          if (!blob) { toast("Falha ao exportar", "error"); return; }
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = (page.title || "caderno").replace(/\s+/g, "_") + ".png";
          a.click();
          setTimeout(() => URL.revokeObjectURL(a.href), 1000);
          toast("Imagem exportada!", "success");
        });
      };
      img.onerror = () => { URL.revokeObjectURL(url); toast("Falha ao exportar", "error"); };
      img.src = url;
    } catch (e) {
      toast("Não foi possível exportar", "error");
    }
  };

  const renderEl = (el: any) => {
    const op = el.opacity != null ? el.opacity : 1;
    if (el.kind === "path" && el.ink)
      return <path key={el.id} d={el.d || inkOutline(el.pts || [], el.sw || 4)} fill={el.color} stroke={el.color} strokeWidth={0.5} strokeLinejoin="round" opacity={op} />;
    if (el.kind === "path") {
      if (el.pen === "neon") {
        const d = strokePath(el.pts || []);
        return (
          <g key={el.id} opacity={op}>
            <path d={d} stroke={el.color} strokeWidth={(el.sw || 4) * 4.5} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={0.22} />
            <path d={d} stroke={el.color} strokeWidth={(el.sw || 4) * 2.2} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={0.45} />
            <path d={d} stroke="#ffffff" strokeWidth={Math.max(1, (el.sw || 4) * 0.5)} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={0.95} />
          </g>
        );
      }
      const blendStyle: any = el.pen === "highlighter" ? { mixBlendMode: "multiply" } : undefined;
      return <path key={el.id} d={strokePath(el.pts || [])} stroke={el.color} strokeWidth={el.sw} fill="none" strokeLinecap={el.pen === "highlighter" ? "butt" : "round"} strokeLinejoin="round" opacity={op} strokeDasharray={el.pen === "dashed" ? (el.sw || 4) * 1.2 + " " + (el.sw || 4) * 3 : undefined} style={blendStyle} />;
    }
    if (el.kind === "line")
      return <line key={el.id} x1={el.x1} y1={el.y1} x2={el.x2} y2={el.y2} stroke={el.color} strokeWidth={el.sw} strokeLinecap="round" opacity={op} />;
    if (el.kind === "arrow") {
      const ah = arrowHeadAt(el.x1, el.y1, el.x2, el.y2, (el.sw || 2) * (el.head || 4));
      return (
        <g key={el.id} opacity={op}>
          <line x1={el.x1} y1={el.y1} x2={ah.bx} y2={ah.by} stroke={el.color} strokeWidth={el.sw} strokeLinecap="round" />
          <polygon points={ah.poly} fill={el.color} />
        </g>
      );
    }
    if (el.kind === "darrow") {
      const s2 = (el.sw || 2) * (el.head || 4);
      const h1 = arrowHeadAt(el.x1, el.y1, el.x2, el.y2, s2);
      const h2 = arrowHeadAt(el.x2, el.y2, el.x1, el.y1, s2);
      return (
        <g key={el.id} opacity={op}>
          <line x1={h2.bx} y1={h2.by} x2={h1.bx} y2={h1.by} stroke={el.color} strokeWidth={el.sw} strokeLinecap="round" />
          <polygon points={h1.poly} fill={el.color} />
          <polygon points={h2.poly} fill={el.color} />
        </g>
      );
    }
    if (el.kind === "heart")
      return <path key={el.id} d={heartPath(el)} stroke={el.color} strokeWidth={el.sw} fill={el.fill ? el.color : "none"} strokeLinejoin="round" opacity={op} />;
    if (el.kind === "rect") {
      const r = normRect(el);
      return <rect key={el.id} x={r.x} y={r.y} width={Math.max(1, r.w)} height={Math.max(1, r.h)} stroke={el.color} strokeWidth={el.sw} fill={el.fill ? el.color : "none"} rx={8} opacity={op} />;
    }
    if (el.kind === "ellipse") {
      const r = normRect(el);
      return <ellipse key={el.id} cx={r.x + r.w / 2} cy={r.y + r.h / 2} rx={Math.max(1, r.w / 2)} ry={Math.max(1, r.h / 2)} stroke={el.color} strokeWidth={el.sw} fill={el.fill ? el.color : "none"} opacity={op} />;
    }
    if (el.kind === "triangle") {
      const r = normRect(el);
      return <polygon key={el.id} points={(r.x + r.w / 2) + "," + r.y + " " + r.x + "," + (r.y + r.h) + " " + (r.x + r.w) + "," + (r.y + r.h)} stroke={el.color} strokeWidth={el.sw} fill={el.fill ? el.color : "none"} strokeLinejoin="round" opacity={op} />;
    }
    if (POLY_SHAPES.indexOf(el.kind) !== -1)
      return <polygon key={el.id} points={shapePoints(el)} stroke={el.color} strokeWidth={el.sw} fill={el.fill ? el.color : "none"} strokeLinejoin="round" opacity={op} />;
    if (el.kind === "image")
      return <image key={el.id} href={el.src} x={el.x} y={el.y} width={Math.max(1, el.w)} height={Math.max(1, el.h)} preserveAspectRatio="none" opacity={op} />;
    if (el.kind === "text")
      return <text key={el.id} x={el.x} y={el.y} fill={el.color} fontSize={el.size || 24} fontWeight={600} opacity={op} style={{ userSelect: "none" }}>{el.text}</text>;
    return null;
  };

  const renderElR = (el: any) => {
    const node = renderEl(el);
    if (!el || !el.rot || !node) return node;
    const b = canvasBBox(el);
    return (
      <g key={el.id} transform={"rotate(" + el.rot + " " + (b.x + b.w / 2) + " " + (b.y + b.h / 2) + ")"}>{node}</g>
    );
  };

  const selEl = selectedId ? (Array.isArray(els)?els:[]).find((e) => e.id === selectedId) : null;
  const selBox = selEl ? canvasBBox(selEl) : null;
  const selIds = multiSel && multiSel.length ? multiSel : (selectedId ? groupIdsOf(selectedId) : []);
  const selEls = selIds.length > 1 ? (Array.isArray(els)?els:[]).filter((e) => selIds.indexOf(e.id) !== -1) : [];
  const selUnion = selEls.length ? (Array.isArray(selEls)?selEls:[]).reduce((acc: any, e: any) => {
    const b = canvasBBox(e);
    if (!acc) return { x: b.x, y: b.y, x2: b.x + b.w, y2: b.y + b.h };
    return { x: Math.min(acc.x, b.x), y: Math.min(acc.y, b.y), x2: Math.max(acc.x2, b.x + b.w), y2: Math.max(acc.y2, b.y + b.h) };
  }, null) : null;
  const selUBox = selUnion ? { x: selUnion.x, y: selUnion.y, w: selUnion.x2 - selUnion.x, h: selUnion.y2 - selUnion.y } : null;

  const committedNodes = useMemo(() => {
    const hideText = textEdit && textEdit.id ? textEdit.id : null;
    const showSel = tool === "select" || tool === "text" || tool === "shape";
    const hideIds: any = {};
    if (showSel) {
      const ids = multiSel && multiSel.length ? multiSel : (selectedId ? groupIdsOf(selectedId) : []);
      (Array.isArray(ids)?ids:[]).forEach((id: string) => { hideIds[id] = true; });
    }
    return (Array.isArray(els)?els:[]).filter((el) => el.id !== hideText && !hideIds[el.id]).map(renderElR);
  }, [els, textEdit, selectedId, multiSel, tool]);

  const sheetDef: any = CANVAS_SHEETS.find((s: any) => s.id === sheet && (s as any).w) || null;
  const sheetDims = sheetDef ? (orient === "landscape" ? { w: sheetDef.h, h: sheetDef.w } : { w: sheetDef.w, h: sheetDef.h }) : null;
  const sheetBase = bg !== "transparent" ? bg : (paper === "blueprint" ? BLUEPRINT_BLUE : null);
  const darkSheet = !!sheetBase && isDarkColor(sheetBase);
  const gridStroke = darkSheet ? "#ffffff" : "hsl(var(--border))";
  const dotFill = darkSheet ? "#ffffff" : "hsl(var(--muted-foreground))";
  const bpStroke = darkSheet ? "#ffffff" : "#2563eb";
  const effTool = canEdit ? tool : "pan";
  const cursor = effTool === "pan" ? "grab" : effTool === "select" ? "default" : effTool === "text" ? "text" : effTool === "eraser" ? "none" : "crosshair";
  const showOptions = canEdit && tool === "text";
  const topColors = (() => {
    const m: any = colorUseRef.current || {};
    const ranked = Object.keys(m).filter((c) => c && c[0] === "#").sort((a, b) => (m[b] || 0) - (m[a] || 0));
    const list: string[] = [];
    for (const c of ranked) if (list.length < 5 && list.indexOf(c) === -1) list.push(c);
    for (const c of CANVAS_COLORS) if (list.length < 5 && list.indexOf(c) === -1) list.push(c);
    if (list.indexOf(color) === -1) list[list.length - 1] = color;
    return list;
  })();
  const topShapes = (() => {
    const m: any = shapeUseRef.current || {};
    const ranked = Object.keys(m).sort((a, b) => (m[b] || 0) - (m[a] || 0));
    const list: string[] = [];
    for (const k of ranked) if (list.length < 5 && list.indexOf(k) === -1) list.push(k);
    for (const s of CANVAS_SHAPES) if (list.length < 5 && list.indexOf(s.id) === -1) list.push(s.id);
    if (list.indexOf(shapeType) === -1) list[list.length - 1] = shapeType;
    return list;
  })();
  const tBtn = (active: boolean) => "h-10 w-10 flex items-center justify-center rounded-xl transition-all text-lg leading-none " + (active ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105" : "text-muted-foreground hover:bg-accent hover:text-foreground");
  const pillStyle: any = {};

  return (
    <div ref={wrapRef} className="relative w-full overflow-hidden select-none" style={{ height: "calc(100dvh - 48px)", WebkitTouchCallout: "none", WebkitUserSelect: "none" }}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full touch-none"
        style={{ cursor, touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={() => { if (eraserRingRef.current) eraserRingRef.current.style.display = "none"; }}
        onDoubleClick={onDoubleClick}
      >
        <defs>
          <pattern id="canvas-lines" width="100" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="40" x2="100" y2="40" stroke={gridStroke} strokeWidth="1" strokeOpacity={darkSheet ? 0.25 : 0.6} />
          </pattern>
          <pattern id="canvas-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke={gridStroke} strokeWidth="1" strokeOpacity={darkSheet ? 0.22 : 0.5} />
          </pattern>
          <pattern id="canvas-dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill={dotFill} fillOpacity={darkSheet ? 0.35 : 0.25} />
          </pattern>
          <pattern id="canvas-blueprint" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 20 0 V 100 M 40 0 V 100 M 60 0 V 100 M 80 0 V 100 M 0 20 H 100 M 0 40 H 100 M 0 60 H 100 M 0 80 H 100" stroke={bpStroke} strokeWidth="1" strokeOpacity={darkSheet ? 0.18 : 0.3} fill="none" />
            <rect width="100" height="100" fill="none" stroke={bpStroke} strokeWidth="1.4" strokeOpacity={darkSheet ? 0.45 : 0.6} />
          </pattern>
        </defs>

        <g transform={"translate(" + tx + " " + ty + ") scale(" + scale + ")"}>
          {sheetDef ? (
            <>
              <rect x={-20000} y={-20000} width={40000} height={40000} fill="hsl(var(--muted))" fillOpacity="0.55" />
              <rect x={7} y={9} width={sheetDims.w} height={sheetDims.h} rx={2} fill="#000000" opacity={0.14} />
              <rect x={0} y={0} width={sheetDims.w} height={sheetDims.h} rx={2} fill={bg !== "transparent" ? bg : (paper === "blueprint" ? BLUEPRINT_BLUE : "#ffffff")} stroke="hsl(var(--border))" strokeWidth={1.5} />
              {paper !== "blank" && <rect x={0} y={0} width={sheetDims.w} height={sheetDims.h} rx={2} fill={"url(#canvas-" + paper + ")"} />}
            </>
          ) : (
            <>
              {bg !== "transparent" ? (
                <rect x={-5000} y={-5000} width={10000} height={10000} fill={bg} />
              ) : (paper === "blueprint" && (
                <rect x={-5000} y={-5000} width={10000} height={10000} fill={BLUEPRINT_BLUE} />
              ))}
              {paper !== "blank" && <rect x={-5000} y={-5000} width={10000} height={10000} fill={"url(#canvas-" + paper + ")"} />}
            </>
          )}
          {committedNodes}
          {drawing && renderElR(drawing)}
          {selUBox && (tool === "select" || tool === "text" || tool === "shape") && (
            <g ref={dragGRef}>
              {(Array.isArray(selEls)?selEls:[]).map(renderElR)}
              <rect x={selUBox.x - 8} y={selUBox.y - 8} width={selUBox.w + 16} height={selUBox.h + 16} fill="none" stroke="hsl(var(--primary))" strokeWidth={1.5 / scale} strokeDasharray={(6 / scale) + " " + (4 / scale)} />
            </g>
          )}
          {marquee && (
            <rect x={marquee.x} y={marquee.y} width={marquee.w} height={marquee.h} fill="hsl(var(--primary) / 0.08)" stroke="hsl(var(--primary))" strokeWidth={1 / scale} strokeDasharray={(4 / scale) + " " + (3 / scale)} />
          )}
          {selEl && selIds.length <= 1 && (tool === "select" || tool === "text" || tool === "shape") && selBox && (
            <g ref={dragGRef}>
              <g transform={selEl.rot ? "rotate(" + selEl.rot + " " + (selBox.x + selBox.w / 2) + " " + (selBox.y + selBox.h / 2) + ")" : undefined}>
                {renderEl(selEl)}
                <rect
                  x={selBox.x - 6}
                  y={selBox.y - 6}
                  width={selBox.w + 12}
                  height={selBox.h + 12}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth={1.5 / scale}
                  strokeDasharray={(6 / scale) + " " + (4 / scale)}
                />
                {canEdit && (
                  <g>
                    <line x1={selBox.x + selBox.w / 2} y1={selBox.y - 6} x2={selBox.x + selBox.w / 2} y2={selBox.y - 26 / scale} stroke="hsl(var(--primary))" strokeWidth={1.5 / scale} />
                    <circle cx={selBox.x + selBox.w / 2} cy={selBox.y - 26 / scale} r={7 / scale} fill="#ffffff" stroke="hsl(var(--primary))" strokeWidth={1.6 / scale} />
                    <g style={{ cursor: "pointer" }}>
                      <title>{aspectLock ? "Proporção travada — toque para liberar" : "Proporção livre — toque para travar"}</title>
                      <circle cx={selBox.x + selBox.w / 2 + 26 / scale} cy={selBox.y - 26 / scale} r={9 / scale} fill="#ffffff" stroke={aspectLock ? "hsl(var(--primary))" : "hsl(var(--border))"} strokeWidth={1.4 / scale} />
                      <text x={selBox.x + selBox.w / 2 + 26 / scale} y={selBox.y - 26 / scale} textAnchor="middle" dominantBaseline="central" fontSize={10 / scale} style={{ userSelect: "none", pointerEvents: "none" }}>{aspectLock ? "🔒" : "🔓"}</text>
                    </g>
                  </g>
                )}
                {canEdit && [
                  { hx: selBox.x - 6, hy: selBox.y - 6 },
                  { hx: selBox.x + selBox.w + 6, hy: selBox.y - 6 },
                  { hx: selBox.x + selBox.w + 6, hy: selBox.y + selBox.h + 6 },
                  { hx: selBox.x - 6, hy: selBox.y + selBox.h + 6 },
                ].map((h, i) => (
                  <rect key={i} x={h.hx - 5 / scale} y={h.hy - 5 / scale} width={10 / scale} height={10 / scale} rx={2.5 / scale} fill="#ffffff" stroke="hsl(var(--primary))" strokeWidth={1.6 / scale} />
                ))}
              </g>
            </g>
          )}
        </g>
      </svg>

      {/* Camadas do traço ao vivo */}
      <canvas ref={liveCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <canvas ref={predCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Painéis laterais: tocar fora fecha */}
      {(colorPanel || shapePanel || pagePanel || penPanel || importMenu) && (
        <div className="absolute inset-0 z-30" onPointerDown={() => { setColorPanel(false); setShapePanel(false); setPagePanel(false); setPenPanel(false); setImportMenu(false); }} />
      )}
      {colorPanel && (
        <div className="bg-card canvas-pill absolute right-[6.6rem] bottom-[4.75rem] z-40 rounded-2xl border border-border/70 shadow-2xl p-2 w-[176px]" style={pillStyle} onPointerDown={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-1.5 px-0.5">
            <span className="text-[11px] font-semibold text-muted-foreground">Cores</span>
            <button onClick={() => setColorPanel(false)} className="w-5 h-5 rounded-md text-muted-foreground hover:bg-accent text-xs leading-none" type="button">✕</button>
          </div>
          <div className="grid grid-cols-5 gap-1.5">
            {CANVAS_COLORS.map((c) => (
              <button key={c} onClick={() => { setColor(c); recolorSelected(c); }} className={"w-7 h-7 rounded-full border border-border/60 transition-transform " + (color === c ? "ring-2 ring-primary scale-110" : "hover:scale-110")} style={{ backgroundColor: c }} title={c} type="button" />
            ))}
            <label className="w-7 h-7 rounded-full border border-border cursor-pointer relative overflow-hidden flex items-center justify-center text-[12px]" title="Cor personalizada">
              🎨
              <input type="color" value={color} onChange={(e) => { setColor(e.target.value); recolorSelected(e.target.value); }} className="absolute inset-0 opacity-0 cursor-pointer" />
            </label>
          </div>
        </div>
      )}
      {shapePanel && (
        <div className="bg-card canvas-pill absolute left-[3.6rem] bottom-[17rem] z-40 rounded-2xl border border-border/70 shadow-2xl p-2 w-[196px]" style={pillStyle} onPointerDown={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-1.5 px-0.5">
            <span className="text-[11px] font-semibold text-muted-foreground">Formas</span>
            <button onClick={() => setShapePanel(false)} className="w-5 h-5 rounded-md text-muted-foreground hover:bg-accent text-xs leading-none" type="button">✕</button>
          </div>
          <div className="grid grid-cols-5 gap-1">
            {CANVAS_SHAPES.map((s) => (
              <button key={s.id} onClick={() => { const sid = selectedId; pickTool("shape"); setShapeType(s.id); retypeSelected(s.id, sid); }} className={"w-8 h-8 flex items-center justify-center rounded-lg transition-colors " + (tool === "shape" && shapeType === s.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent")} title={s.label} type="button"><ShapeIcon kind={s.id} size={16} /></button>
            ))}
          </div>
          <div className="flex items-center gap-1.5 mt-2">
            <button onClick={() => { setFill((f) => !f); if (selectedId) { const sel = elsRef.current.find((el) => el.id === selectedId); if (sel && SHAPE_KINDS.indexOf(sel.kind) !== -1 && LINE_KINDS.indexOf(sel.kind) === -1) applyEls(elsRef.current, elsRef.current.map((el) => (el.id === selectedId ? { ...el, fill: !sel.fill } : el))); } }} className={"h-7 px-2.5 rounded-lg text-[11px] font-semibold transition-colors " + (fill ? "bg-primary text-primary-foreground" : "text-muted-foreground bg-accent/60 hover:bg-accent")} type="button">Preencher</button>
          </div>
          <div className="mt-2 px-0.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">Ponta da seta</span>
              <span className="text-[10px] text-muted-foreground">{arrowHead}x</span>
            </div>
            <input type="range" min={2} max={10} step={0.5} value={arrowHead} onChange={(e) => setArrowHead(parseFloat(e.target.value))} onPointerUp={() => { if (!selectedId) return; const sel = elsRef.current.find((el) => el.id === selectedId); if (sel && (sel.kind === "arrow" || sel.kind === "darrow") && sel.head !== arrowHead) applyEls(elsRef.current, elsRef.current.map((el) => (el.id === selectedId ? { ...el, head: arrowHead } : el))); }} className="w-full accent-primary" />
          </div>
        </div>
      )}

      {/* Painel de pincéis */}
      {penPanel && (
        <div className="bg-card canvas-pill absolute left-[3.6rem] bottom-4 z-40 rounded-2xl border border-border/70 shadow-2xl p-2 w-[224px]" style={pillStyle} onPointerDown={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-1.5 px-0.5">
            <span className="text-[11px] font-semibold text-muted-foreground">Pincéis</span>
            <button onClick={() => setPenPanel(false)} className="w-5 h-5 rounded-md text-muted-foreground hover:bg-accent text-xs leading-none" type="button">✕</button>
          </div>
          <div className="grid grid-cols-4 gap-1">
            {CANVAS_PENS.concat(CANVAS_PENS_EXTRA).map((pn: any) => (
              <button key={pn.id} onClick={() => { pickTool(pn.id); setPenPanel(false); }} className={"h-12 flex flex-col items-center justify-center gap-0.5 rounded-lg transition-colors " + (tool === pn.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent")} title={pn.label} type="button">
                <span className="text-base leading-none">{pn.icon}</span>
                <span className="text-[8px] font-semibold leading-none">{pn.short || pn.label}</span>
              </button>
            ))}
          </div>
          <div className="text-[9px] text-muted-foreground/60 px-0.5 mt-1.5 leading-tight">Pincel responde forte à pressão · Caligrafia faz fitas pela direção · Neon brilha · Tracejada pontilha ao soltar.</div>
        </div>
      )}

      {/* Pincéis fixos */}
      {canEdit && (
        <div className="canvas-pill absolute left-3 bottom-4 rounded-full border border-border/70 shadow-2xl p-1.5 flex flex-col items-center gap-1.5 z-20" style={pillStyle}>
          {CANVAS_PENS.map((pen) => (
            <button key={pen.id} onClick={() => pickTool(pen.id)} className={"w-7 h-7 flex items-center justify-center rounded-full text-sm leading-none transition-all " + (tool === pen.id ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:bg-accent")} title={pen.label} type="button">{pen.icon}</button>
          ))}
          <button onClick={() => pickTool("eraser")} className={"w-7 h-7 flex items-center justify-center rounded-full transition-all " + (tool === "eraser" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:bg-accent")} title="Borracha (E)" type="button"><EraserIcon size={14} /></button>
          <button onClick={() => pickTool("text")} className={"w-7 h-7 flex items-center justify-center rounded-full text-[13px] font-bold transition-all " + (tool === "text" ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:bg-accent")} title="Texto (T)" type="button">T</button>
          <button onClick={() => { setPenPanel(true); setShapePanel(false); setColorPanel(false); setPagePanel(false); }} className="w-7 h-7 flex items-center justify-center rounded-full text-muted-foreground hover:bg-accent text-sm leading-none" title="Mais pincéis e efeitos" type="button">…</button>
        </div>
      )}

      {/* Espessura da linha */}
      {canEdit && (
        <div className="canvas-pill absolute left-[3.6rem] bottom-4 rounded-full border border-border/70 shadow-2xl flex flex-col items-center z-20" style={{ width: "36px", height: "210px", paddingTop: "10px", paddingBottom: "8px" }}>
          <div className="relative flex-1 w-full flex items-center justify-center overflow-visible">
            <input
              type="range"
              min={1}
              max={18}
              step={0.5}
              value={sw}
              onChange={(e) => setSw(parseFloat(e.target.value))}
              className="accent-primary absolute"
              style={{ width: "150px", transform: "rotate(-90deg)" }}
              title={"Espessura do traço: " + sw}
            />
          </div>
          <div className="w-5 h-5 flex items-center justify-center shrink-0">
            <span className="rounded-full border border-border/60" style={{ width: Math.min(18, Math.max(3, sw)) + "px", height: Math.min(18, Math.max(3, sw)) + "px", backgroundColor: color }} />
          </div>
        </div>
      )}

      {/* Formas fixas */}
      {canEdit && (
        <div className="canvas-pill absolute left-3 bottom-[17rem] rounded-full border border-border/70 shadow-2xl p-1.5 flex flex-col items-center gap-1.5 z-20" style={pillStyle}>
          {(Array.isArray(topShapes)?topShapes:[]).map((k) => {
            const s: any = CANVAS_SHAPES.find((x) => x.id === k) || { id: k, icon: "?", label: k };
            return (
              <button key={k} onClick={() => { const sid = selectedId; pickTool("shape"); setShapeType(k); retypeSelected(k, sid); }} className={"w-7 h-7 flex items-center justify-center rounded-full transition-all " + (tool === "shape" && shapeType === k ? "bg-primary text-primary-foreground shadow" : "text-muted-foreground hover:bg-accent")} title={s.label} type="button"><ShapeIcon kind={k} size={15} /></button>
            );
          })}
          <button onClick={() => { pickTool("shape"); setShapePanel(true); setColorPanel(false); setPenPanel(false); }} className="w-7 h-7 flex items-center justify-center rounded-full text-muted-foreground hover:bg-accent text-sm leading-none" title="Todas as formas" type="button">…</button>
        </div>
      )}

      {/* Transparência */}
      {canEdit && (
        <div className="canvas-pill absolute right-[3.6rem] bottom-[4.75rem] rounded-full border border-border/70 shadow-2xl flex flex-col items-center z-20" style={{ width: "36px", height: "186px", paddingTop: "10px", paddingBottom: "8px" }}>
          <div className="relative flex-1 w-full flex items-center justify-center overflow-visible">
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.05}
              value={opacity}
              onChange={(e) => setOpacity(parseFloat(e.target.value))}
              onPointerUp={() => reopacifySelected()}
              className="accent-primary absolute"
              style={{ width: "128px", transform: "rotate(-90deg)" }}
              title={"Transparência: " + Math.round(opacity * 100) + "%"}
            />
          </div>
          <div className="w-5 h-5 flex items-center justify-center shrink-0" title={Math.round(opacity * 100) + "%"}>
            <span className="rounded-full w-4 h-4 border border-border/60" style={{ backgroundColor: color, opacity: opacity }} />
          </div>
        </div>
      )}

      {/* Paleta fixa */}
      {canEdit && (
        <div className="canvas-pill absolute right-3 bottom-[4.75rem] rounded-full border border-border/70 shadow-2xl p-1.5 flex flex-col items-center gap-1.5 z-20" style={pillStyle}>
          {(Array.isArray(topColors)?topColors:[]).map((c) => (
            <button key={c} onClick={() => { setColor(c); recolorSelected(c); }} className={"w-6 h-6 rounded-full border border-border/60 transition-transform " + (color === c ? "ring-2 ring-primary scale-110" : "hover:scale-110")} style={{ backgroundColor: c }} title={c} type="button" />
          ))}
          <button onClick={() => { setColorPanel(true); setShapePanel(false); setPenPanel(false); }} className="w-6 h-6 rounded-full border border-border text-muted-foreground hover:bg-accent text-[13px] font-bold leading-none" title="Todas as cores" type="button">…</button>
        </div>
      )}

      {/* Botão fixo: abre/fecha canetas e opções */}
      {canEdit && (
        <button
          onClick={() => { const tb = toolbarRef.current; if (!tb) return; if (tb.style.opacity === "0") showToolbarNow(); else hideToolbarNow(); }}
          className="canvas-pill absolute bottom-4 right-3 h-11 w-11 rounded-full border border-border/70 shadow-2xl flex items-center justify-center text-lg z-20"
          title="Mostrar/ocultar canetas e opções"
          type="button"
        >✏️</button>
      )}

      {/* Cursor circular da borracha */}
      <div
        ref={eraserRingRef}
        className="absolute pointer-events-none rounded-full border-2 border-foreground/50"
        style={{ display: "none", backgroundColor: "hsl(var(--foreground) / 0.06)" }}
      />

      {/* Editor de texto direto no caderno */}
      {textEdit && (
        <div
          className="absolute z-40"
          style={{ left: textEdit.x * scale + tx, top: (textEdit.y - textEdit.size) * scale + ty }}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <input
            autoFocus
            value={textEdit.value}
            onChange={(e) => setTextEdit((te: any) => (te ? { ...te, value: e.target.value } : te))}
            onBlur={commitText}
            onKeyDown={(e) => {
              e.stopPropagation();
              if (e.key === "Enter") { e.preventDefault(); commitText(); }
              else if (e.key === "Escape") { e.preventDefault(); cancelText(); }
            }}
            placeholder="Digite..."
            className="bg-transparent outline-none border-b-2 border border-primary/70 font-semibold placeholder:text-muted-foreground/40"
            style={{ fontSize: textEdit.size * scale + "px", lineHeight: 1.15, color: textEdit.color, caretColor: textEdit.color, width: Math.max(6, (textEdit.value || "").length + 2) + "ch", minWidth: "80px", padding: 0 }}
          />
        </div>
      )}

      {/* Dica em caderno vazio */}
      {canEdit && els.length === 0 && !textEdit && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center text-muted-foreground/40 px-6">
            <div className="text-6xl mb-3">✏️</div>
            <p className="text-sm font-medium">Escolha uma ferramenta e desenhe — a espessura segue a pressão da caneta ou a velocidade do mouse</p>
            <p className="text-xs mt-1.5">Duplo clique cria texto · Ctrl+C/Ctrl+V copia e cola · laço seleciona vários e Ctrl+G agrupa · pinça dá zoom · 📄 importa PDF para escrever por cima</p>
          </div>
        </div>
      )}

      {/* Barra superior */}
      <div className="canvas-pill absolute top-3 left-3 right-3 z-20 rounded-2xl border border-border/70 shadow-lg px-2 py-1 flex items-center gap-1" style={pillStyle}>
        {headerLeft}
        <button onClick={() => canEdit && setShowIconPicker(true)} className={"text-base leading-none shrink-0 " + (canEdit ? "hover:scale-110 transition-transform" : "")} disabled={!canEdit} title="Alterar ícone" type="button">{pageIconNode(page.icon)}</button>
        <input
          value={title}
          onChange={(e) => { setTitle(e.target.value); onUpdate({ title: e.target.value }); }}
          placeholder="Sem título"
          disabled={!canEdit}
          className="dc-serif bg-transparent outline-none text-[15px] font-semibold text-foreground flex-1 min-w-[4rem] placeholder:text-muted-foreground/50"
        />
        {canEdit && (
          <>
            <button onClick={undo} disabled={!past.length} className={"h-8 w-8 shrink-0 flex items-center justify-center rounded-xl transition-colors text-base " + (past.length ? "text-muted-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground/30 cursor-not-allowed")} title="Desfazer (Ctrl+Z)" type="button">↩</button>
            <button onClick={redo} disabled={!future.length} className={"h-8 w-8 shrink-0 flex items-center justify-center rounded-xl transition-colors text-base " + (future.length ? "text-muted-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground/30 cursor-not-allowed")} title="Refazer (Ctrl+Y)" type="button">↪</button>
          </>
        )}
        {canEdit && (() => {
          const ids = multiSel && multiSel.length ? multiSel : (selectedId ? groupIdsOf(selectedId) : []);
          const hasSel = ids.length > 0;
          const canGroup = !!(multiSel && multiSel.length > 1);
          const canUngroup = !canGroup && ids.length > 1;
          const tb = (on: boolean) => "h-8 px-2 shrink-0 hidden lg:flex items-center rounded-xl text-xs font-medium transition-colors " + (on ? "text-muted-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground/30 cursor-not-allowed");
          return (
            <>
              <div className="w-px h-5 bg-border mx-0.5 shrink-0 hidden lg:block" />
              <button onClick={() => copySelection()} disabled={!hasSel} className={tb(hasSel)} title="Copiar seleção (Ctrl+C)" type="button">⧉ Copiar</button>
              <button onClick={() => pasteClipboard()} disabled={!clipReady} className={tb(clipReady)} title="Colar (Ctrl+V)" type="button">📋 Colar</button>
              <button onClick={groupSelected} disabled={!canGroup} className={tb(canGroup)} title="Agrupar — movem juntos (Ctrl+G)" type="button">⊞ Agrupar</button>
              <button onClick={ungroupSelected} disabled={!canUngroup} className={tb(canUngroup)} title="Desagrupar (Ctrl+Shift+G)" type="button">⊟ Desagrupar</button>
            </>
          );
        })()}
        <div className="w-px h-5 bg-border mx-0.5 shrink-0 hidden sm:block" />
        <button onClick={() => zoomBy(1 / 1.2)} className="h-8 w-8 shrink-0 hidden sm:flex items-center justify-center rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground transition-colors text-lg font-bold" title="Diminuir zoom" type="button">−</button>
        <button onClick={resetView} className="h-8 px-1 shrink-0 flex items-center justify-center rounded-xl text-xs font-semibold text-muted-foreground hover:bg-accent hover:text-foreground transition-colors min-w-[2.6rem]" title="Restaurar zoom (100%)" type="button">{Math.round(scale * 100)}%</button>
        <button onClick={() => zoomBy(1.2)} className="h-8 w-8 shrink-0 hidden sm:flex items-center justify-center rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground transition-colors text-lg font-bold" title="Aumentar zoom" type="button">+</button>
        <button onClick={fitView} className="h-8 w-8 shrink-0 flex items-center justify-center rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground transition-colors text-sm" title="Ajustar conteúdo à tela (F)" type="button">⤢</button>
        <div className="w-px h-5 bg-border mx-0.5 shrink-0" />
        {canEdit && (
          <button onClick={() => { setImportMenu((v) => !v); setPagePanel(false); setColorPanel(false); setShapePanel(false); setPenPanel(false); }} className="h-8 px-2 shrink-0 flex items-center justify-center gap-1 rounded-xl text-muted-foreground hover:bg-accent hover:text-foreground transition-colors text-[11px] font-semibold" title="Importar PDF ou imagens" type="button">📄 PDF</button>
        )}
        <button onClick={exportPng} disabled={!els.length} className={"h-8 px-2 shrink-0 flex items-center justify-center rounded-xl transition-colors text-[10px] font-bold " + (els.length ? "text-muted-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground/30 cursor-not-allowed")} title="Exportar como imagem PNG" type="button">PNG</button>
        {canEdit && (
          <button onClick={clearAll} disabled={!els.length} className={"h-8 w-8 shrink-0 flex items-center justify-center rounded-xl transition-colors text-sm " + (els.length ? "text-muted-foreground hover:bg-accent hover:text-foreground" : "text-muted-foreground/30 cursor-not-allowed")} title="Limpar tudo" type="button">🗑️</button>
        )}
        <button onClick={() => { setPagePanel((v: boolean) => !v); setColorPanel(false); setShapePanel(false); setPenPanel(false); }} className={"h-8 w-8 shrink-0 flex items-center justify-center rounded-xl transition-colors text-sm " + (pagePanel ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground")} title="Configurações da página (papel, folha, fundo)" type="button">⚙️</button>
        {headerRight}
      </div>
      {canEdit && <input ref={fileInputRef} type="file" accept="application/pdf,image/*" multiple className="hidden" onChange={(e: any) => handleImportFiles(e.target.files)} />}

      {/* Menu de importação */}
      {importMenu && (
        <div className="bg-card canvas-pill absolute top-16 right-24 z-40 rounded-2xl border border-border/70 shadow-2xl p-1.5 w-[230px]" style={pillStyle} onPointerDown={(e) => e.stopPropagation()}>
          <button onClick={() => { importModeRef.current = "insert"; setImportMenu(false); if (fileInputRef.current) fileInputRef.current.click(); }} className="w-full text-left px-2.5 py-2 rounded-xl hover:bg-accent transition-colors" type="button">
            <div className="text-xs font-semibold text-foreground">🖼️ Inserir nesta página</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">A imagem ou as páginas do PDF entram aqui no caderno, para escrever por cima</div>
          </button>
          <button onClick={() => { importModeRef.current = "pages"; setImportMenu(false); if (fileInputRef.current) fileInputRef.current.click(); }} className="w-full text-left px-2.5 py-2 rounded-xl hover:bg-accent transition-colors" type="button">
            <div className="text-xs font-semibold text-foreground">📑 Criar páginas novas</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">Cada página do PDF vira uma subpágina deste caderno</div>
          </button>
        </div>
      )}

      {/* Painel vertical de configurações da página */}
      {pagePanel && (
        <div className="bg-card canvas-pill absolute top-16 right-3 z-40 rounded-2xl border border-border/70 shadow-2xl p-2 w-[180px] max-h-[72vh] overflow-y-auto" style={pillStyle} onPointerDown={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-1 px-0.5">
            <span className="text-[11px] font-semibold text-muted-foreground">Página</span>
            <button onClick={() => setPagePanel(false)} className="w-5 h-5 rounded-md text-muted-foreground hover:bg-accent text-xs leading-none" type="button">✕</button>
          </div>
          <div className="text-[10px] font-medium text-muted-foreground/70 px-0.5 mt-1">Papel</div>
          <div className="grid grid-cols-5 gap-1 mt-1">
            {CANVAS_PAPERS.map((pp: any) => (
              <button key={pp.id} onClick={() => { setPaper(pp.id); paperRef.current = pp.id; if (pp.id === "blueprint" && color !== "#ffffff") setColor("#ffffff"); persistSoon(); }} disabled={!canEdit} className={"w-7 h-7 flex items-center justify-center rounded-lg text-sm transition-colors " + (paper === pp.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent")} title={pp.label} type="button">{pp.icon}</button>
            ))}
          </div>
          <div className="text-[10px] font-medium text-muted-foreground/70 px-0.5 mt-2">Folha</div>
          <div className="grid grid-cols-4 gap-1 mt-1">
            {CANVAS_SHEETS.map((s: any) => (
              <button key={s.id} onClick={() => { flushPendingNow(); setSheet(s.id); sheetRef.current = s.id; persistSoon(); if (s.w) fitSheet(orient === "landscape" ? s.h : s.w, orient === "landscape" ? s.w : s.h); }} disabled={!canEdit} className={"h-7 flex items-center justify-center rounded-lg text-[11px] font-semibold transition-colors " + (sheet === s.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent")} title={s.label} type="button">{s.id === "infinite" ? "∞" : s.label}</button>
            ))}
          </div>
          {sheetDef && (
            <div className="flex items-center gap-1 mt-1.5">
              <button onClick={() => { setOrient("portrait"); orientRef.current = "portrait"; persistSoon(); fitSheet(sheetDef.w, sheetDef.h); }} disabled={!canEdit} className={"flex-1 h-7 flex items-center justify-center gap-1 rounded-lg text-[11px] font-semibold transition-colors " + (orient !== "landscape" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent")} title="Retrato (folha em pé)" type="button">▯ Retrato</button>
              <button onClick={() => { setOrient("landscape"); orientRef.current = "landscape"; persistSoon(); fitSheet(sheetDef.h, sheetDef.w); }} disabled={!canEdit} className={"flex-1 h-7 flex items-center justify-center gap-1 rounded-lg text-[11px] font-semibold transition-colors " + (orient === "landscape" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent")} title="Paisagem (folha deitada)" type="button">▭ Paisagem</button>
            </div>
          )}
          <div className="text-[10px] font-medium text-muted-foreground/70 px-0.5 mt-2">Fundo</div>
          <div className="grid grid-cols-6 gap-1 mt-1">
            {CANVAS_BGS.map((b) => (
              <button key={b.id} onClick={() => { setBg(b.id); bgRef.current = b.id; persistSoon(); }} disabled={!canEdit} className={"w-6 h-6 rounded-md transition-transform border " + (bg === b.id ? "scale-110 ring-2 ring-primary " : "hover:scale-110 ") + (b.id === "transparent" ? "border border-muted-foreground" : "border-border")} style={{ backgroundColor: b.c === "transparent" ? undefined : b.c }} title={b.label} type="button" />
            ))}
            <label className="w-6 h-6 rounded-md border border-border cursor-pointer relative overflow-hidden flex items-center justify-center text-[10px]" title="Cor personalizada do fundo">
              🎨
              <input type="color" value={bg !== "transparent" && bg[0] === "#" ? bg : "#ffffff"} onChange={(e) => { setBg(e.target.value); bgRef.current = e.target.value; persistSoon(); }} disabled={!canEdit} className="absolute inset-0 opacity-0 cursor-pointer" />
            </label>
          </div>
          <div className="text-[10px] font-medium text-muted-foreground/70 px-0.5 mt-2 flex items-center justify-between"><span>Suavização do traço</span><span>{Math.round(smooth * 100)}%</span></div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={smooth}
            onChange={(e) => { const v = parseFloat(e.target.value); setSmooth(v); smoothRef.current = v; persistSoon(); }}
            disabled={!canEdit}
            className="w-full accent-primary mt-1"
            title="0% segue cada tremor da mão; 100% deixa a linha bem lisa"
          />
          <div className="text-[9px] text-muted-foreground/60 px-0.5 mt-0.5 leading-tight">Letras pequenas saindo estranhas? Diminua. Linha tremida? Aumente. Vale para os próximos traços.</div>
          {canEdit && (
            <button onClick={() => setPenOnly((v) => !v)} className={"w-full h-7 mt-2 rounded-lg text-[11px] font-semibold transition-colors inline-flex items-center justify-center gap-1.5 " + (penOnly ? "bg-primary text-primary-foreground" : "text-muted-foreground bg-accent/60 hover:bg-accent")} title="Rejeição de palma total: o dedo sempre move a tela e só a caneta desenha" type="button">✍️ Só caneta</button>
          )}
        </div>
      )}

      {/* Importando PDF: progresso */}
      {importing && (
        <div className="absolute inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: "rgba(0,0,0,0.25)" }}>
          <div className="bg-card canvas-pill rounded-2xl border border-border/70 shadow-2xl px-5 py-4 flex items-center gap-3" style={pillStyle}>
            <span className="inline-block w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            <span className="text-sm font-medium text-foreground">{importing}</span>
          </div>
        </div>
      )}

      {/* Ações da seleção */}
      {canEdit && (tool === "select" || tool === "text" || tool === "shape") && (selectedId || (multiSel && multiSel.length > 1)) && !textEdit && (
        <div className="canvas-pill absolute top-16 left-1/2 -translate-x-1/2 rounded-2xl border border-border/70 shadow-lg p-1 flex items-center gap-0.5 animate-fade-in max-w-[94vw] overflow-x-auto" style={pillStyle}>
          {multiSel && multiSel.length > 1 ? (
            <>
              <button onClick={groupSelected} className="h-8 px-2.5 flex items-center gap-1.5 rounded-xl text-xs font-semibold text-primary hover:bg-accent transition-colors" title="Agrupar os selecionados (movem juntos)" type="button">⧉ Agrupar ({multiSel.length})</button>
              <div className="w-px h-5 bg-border" />
              <button onClick={duplicateSelected} className="h-8 px-2.5 flex items-center gap-1.5 rounded-xl text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="Duplicar" type="button">📋 Duplicar</button>
              <div className="w-px h-5 bg-border" />
              <button onClick={deleteSelected} className="h-8 px-2.5 flex items-center gap-1.5 rounded-xl text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="Excluir todos" type="button">🗑️ Excluir</button>
              <div className="w-px h-5 bg-border" />
              <button onClick={() => setMultiSel(null)} className="h-8 px-2 flex items-center rounded-xl text-xs text-muted-foreground hover:bg-accent transition-colors" title="Cancelar seleção" type="button">✕</button>
            </>
          ) : selIds.length > 1 ? (
            <>
              <button onClick={ungroupSelected} className="h-8 px-2.5 flex items-center gap-1.5 rounded-xl text-xs font-semibold text-primary hover:bg-accent transition-colors" title="Desagrupar (voltam a ser independentes)" type="button">⧉ Desagrupar ({selIds.length})</button>
              <div className="w-px h-5 bg-border" />
              <button onClick={duplicateSelected} className="h-8 px-2.5 flex items-center gap-1.5 rounded-xl text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="Duplicar o grupo" type="button">📋 Duplicar</button>
              <div className="w-px h-5 bg-border" />
              <button onClick={deleteSelected} className="h-8 px-2.5 flex items-center gap-1.5 rounded-xl text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="Excluir o grupo" type="button">🗑️ Excluir</button>
            </>
          ) : (
            <>
              <button onClick={() => moveLayer(1)} className="h-8 px-2 flex items-center gap-1 rounded-xl text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="Trazer para frente (camada acima)" type="button">⬆ Frente</button>
              <button onClick={() => moveLayer(-1)} className="h-8 px-2 flex items-center gap-1 rounded-xl text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="Enviar para trás (camada abaixo)" type="button">⬇ Trás</button>
              <div className="w-px h-5 bg-border" />
              <button onClick={duplicateSelected} className="h-8 px-2.5 flex items-center gap-1.5 rounded-xl text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="Duplicar" type="button">📋 Duplicar</button>
              <div className="w-px h-5 bg-border" />
              <button onClick={deleteSelected} className="h-8 px-2.5 flex items-center gap-1.5 rounded-xl text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" title="Excluir (Delete)" type="button">🗑️ Excluir</button>
              <div className="w-px h-5 bg-border" />
              <span className="px-2 text-[10px] text-muted-foreground hidden sm:inline">arraste os cantos para redimensionar</span>
            </>
          )}
        </div>
      )}

      {/* Toolbar inferior (opções contextuais) */}
      {canEdit && (
        <div ref={toolbarRef} className="absolute bottom-[4.6rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-200">
          {showOptions && (
            <div className="bg-card canvas-pill rounded-2xl border border-border/70 shadow-2xl px-3 py-2 flex items-center gap-2.5 max-w-[94vw] overflow-x-auto" style={pillStyle}>
              {tool === "text" && (
                <div className="flex items-center gap-1" title="Tamanho da fonte (pt)">
                  <button onClick={() => bumpTextSize(-2)} className="w-8 h-8 flex items-center justify-center rounded-xl text-muted-foreground hover:bg-accent text-base font-bold" type="button">−</button>
                  <input
                    type="number"
                    min={8}
                    max={120}
                    value={textSize}
                    onChange={(e) => { const v = parseFloat(e.target.value); if (!isNaN(v)) setTextSize(Math.min(120, Math.max(8, Math.round(v)))); }}
                    onBlur={() => applyTextSizeToSelected(textSize)}
                    onKeyDown={(e) => { e.stopPropagation(); if (e.key === "Enter") applyTextSizeToSelected(textSize); }}
                    className="w-14 h-8 text-center text-xs font-semibold bg-accent/50 rounded-xl outline-none focus:ring-2 focus:ring-primary"
                  />
                  <span className="text-[10px] text-muted-foreground">pt</span>
                  <button onClick={() => bumpTextSize(2)} className="w-8 h-8 flex items-center justify-center rounded-xl text-muted-foreground hover:bg-accent text-base font-bold" type="button">+</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Selecionar / Mover a tela: sempre visíveis */}
      {canEdit && (
        <div className="bg-card canvas-pill absolute bottom-4 left-1/2 -translate-x-1/2 z-20 rounded-2xl border border-border/70 shadow-2xl p-1.5 flex items-center gap-1" style={pillStyle}>
          <button onClick={() => pickTool("select")} className={tBtn(tool === "select")} title="Selecionar, mover, agrupar (V) — arraste no vazio para laçar vários" type="button"><CursorIcon size={17} /></button>
          <button onClick={() => pickTool("pan")} className={tBtn(tool === "pan")} title="Mover a tela (H)" type="button">✋</button>
        </div>
      )}

      {showIconPicker && (
        <IconPicker
          onClose={() => setShowIconPicker(false)}
          onPick={(icon: string) => { onUpdate({ icon }); setShowIconPicker(false); }}
        />
      )}
    </div>
  );
}

function IconPicker({ onClose, onPick }: any) {
  const [tab, setTab] = useState<"icons" | "emoji">("icons");
  const [search, setSearch] = useState("");

  const q = search.trim().toLowerCase();
  const filteredList = q ? ICON_LIST.filter((it) => it.kw.indexOf(q) !== -1 || it.n.indexOf(q) !== -1) : ICON_LIST;
  const shownIcons = filteredList.slice(0, 500).map((it) => it.n);
  const filteredEmojis = EMOJIS; // emojis não têm nome p/ busca

  const tabBtn = (active: boolean) => "h-8 px-3 rounded-md text-sm font-medium transition-colors " + (active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent");

  return (
    <CustomDialog open={true} onClose={onClose} title="Escolher ícone" maxWidth="max-w-lg">
      <div className="flex items-center gap-2 mb-3">
        <button onClick={() => setTab("icons")} className={tabBtn(tab === "icons")} type="button">🎯 Ícones</button>
        <button onClick={() => setTab("emoji")} className={tabBtn(tab === "emoji")} type="button">😀 Emoji</button>
        {tab === "icons" && (
          <input
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar ícone (ex.: home, user, calendar)..."
            className="flex-1 h-8 px-3 rounded-md border-2 border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        )}
      </div>

      {tab === "icons" ? (
        <>
          <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 max-h-72 overflow-y-auto p-1">
            {(Array.isArray(shownIcons) ? shownIcons : []).map((n) => (
              <button key={n} onClick={() => onPick(n)} title={n.replace(/^ic:/, "").replace(/-/g, " ")} className="h-9 w-9 flex items-center justify-center text-lg rounded-md hover:bg-accent text-foreground transition-colors hover:scale-110" type="button">
                {pageIconNode(n)}
              </button>
            ))}
          </div>
          <div className="mt-2 text-[11px] text-muted-foreground">
            {filteredList.length + " ícones planos" + (filteredList.length > shownIcons.length ? " — refine a busca para ver mais" : "")}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 max-h-72 overflow-y-auto p-1">
          {(Array.isArray(filteredEmojis) ? filteredEmojis : []).map((e) => (
            <button key={e} onClick={() => onPick(e)} className="h-9 w-9 flex items-center justify-center text-xl rounded-md hover:bg-accent transition-colors hover:scale-110" type="button">
              {e}
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 pt-3 border-t-2 border-border flex items-center justify-between">
        <span className="text-[11px] text-muted-foreground">Ícones planos monocromáticos</span>
        <button onClick={() => onPick("ic:file-text")} className="h-8 px-3 rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-accent border border-transparent" type="button">
          Restaurar padrão
        </button>
      </div>
    </CustomDialog>
  );
}

function CoverPicker({ files, onClose, onPick }: any) {
  const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const presets = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200",
    "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1200",
  ];
  const handleFile = async (e: any) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setUploading(true);
    try { const r = await files.upload(f); onPick(r.url); } catch (err: any) { alert("Erro: " + err.message); } finally { setUploading(false); }
  };
  return (
    <CustomDialog open={true} onClose={onClose} title="Adicionar capa">
      <div className="space-y-4">
        <div>
          <div className="text-xs font-medium text-muted-foreground mb-2">Imagens sugeridas</div>
          <div className="grid grid-cols-3 gap-2">
            {(Array.isArray(presets)?presets:[]).map((u) => (<button key={u} onClick={() => onPick(u)} className="aspect-video rounded-md overflow-hidden border-2 border-border hover:ring-2 hover:ring-primary transition-all" type="button"><img src={u} className="w-full h-full object-cover" /></button>))}
          </div>
        </div>
        <div>
          <div className="text-xs font-medium text-muted-foreground mb-2">Enviar imagem</div>
          <label className="flex items-center justify-center h-20 rounded-md border-2 border-input bg-background hover:bg-accent cursor-pointer transition-colors">
            <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
            <span className="text-sm text-muted-foreground">{uploading ? "Enviando..." : "Clique para escolher um arquivo"}</span>
          </label>
        </div>
        <div>
          <div className="text-xs font-medium text-muted-foreground mb-2">Ou cole uma URL</div>
          <div className="flex gap-2">
            <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." className="flex-1 h-9 px-3 rounded-md border-2 border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <button onClick={() => url && onPick(url)} disabled={!url} className="h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50" type="button">Aplicar</button>
          </div>
        </div>
      </div>
    </CustomDialog>
  );
}

function FormatToolbar() {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const [picker, setPicker] = useState<"" | "textColor" | "bgColor">("");

  useEffect(() => {
    const update = () => {
      try {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed || sel.rangeCount === 0) { setPos(null); setPicker(""); return; }
        const r = sel.getRangeAt(0);
        const c: any = r.commonAncestorContainer;
        const node: any = c.nodeType === 1 ? c : c.parentElement;
        if (!node || !node.closest || !node.closest('[contenteditable="true"]')) { setPos(null); setPicker(""); return; }
        const rect = r.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) { setPos(null); return; }
        const top = rect.top - 48 < 8 ? rect.bottom + 8 : rect.top - 48;
        const left = Math.max(8, Math.min(rect.left + rect.width / 2 - 200, window.innerWidth - 408));
        setPos({ top, left });
      } catch (e) {
        setPos(null);
        setPicker("");
      }
    };
    document.addEventListener("selectionchange", update);
    return () => document.removeEventListener("selectionchange", update);
  }, []);

  if (!pos) return null;

  const exec = (cmd: string, val?: string) => {
    try {
      document.execCommand("styleWithCSS", false, "true");
      document.execCommand(cmd, false, val);
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      const c: any = sel.getRangeAt(0).commonAncestorContainer;
      const el: any = c?.nodeType === 1 ? c : c?.parentElement;
      const editable = el && el.closest && el.closest('[contenteditable="true"]');
      if (editable) editable.dispatchEvent(new Event("input", { bubbles: true }));
    } catch (e) {}
  };

  const applyTextColor = (color: string) => {
    try {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
      const range = sel.getRangeAt(0);
      const span = document.createElement("span");
      span.style.color = color;
      span.appendChild(range.extractContents());
      range.insertNode(span);
      sel.removeAllRanges();
      const newRange = document.createRange();
      newRange.selectNodeContents(span);
      sel.addRange(newRange);
      const c: any = sel.getRangeAt(0).commonAncestorContainer;
      const el: any = c?.nodeType === 1 ? c : c?.parentElement;
      const editable = el && el.closest && el.closest('[contenteditable="true"]');
      if (editable) editable.dispatchEvent(new Event("input", { bubbles: true }));
    } catch (e) {}
    setPicker("");
  };

  const applyBgColor = (color: string) => {
    try {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
      const range = sel.getRangeAt(0);
      const span = document.createElement("span");
      if (color !== "transparent") {
        span.style.backgroundColor = color;
        span.style.borderRadius = "2px";
        span.style.padding = "0 2px";
      }
      span.appendChild(range.extractContents());
      range.insertNode(span);
      sel.removeAllRanges();
      const newRange = document.createRange();
      newRange.selectNodeContents(span);
      sel.addRange(newRange);
      const c: any = sel.getRangeAt(0).commonAncestorContainer;
      const el: any = c?.nodeType === 1 ? c : c?.parentElement;
      const editable = el && el.closest && el.closest('[contenteditable="true"]');
      if (editable) editable.dispatchEvent(new Event("input", { bubbles: true }));
    } catch (e) {}
    setPicker("");
  };

  const wrapInlineCode = () => {
    try {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
      const r = sel.getRangeAt(0);
      const span = document.createElement("code");
      span.className = "px-1 py-0.5 rounded bg-muted text-foreground font-mono text-[0.9em]";
      span.appendChild(r.extractContents());
      r.insertNode(span);
      const c: any = sel.getRangeAt(0).commonAncestorContainer;
      const el: any = c?.nodeType === 1 ? c : c?.parentElement;
      const editable = el && el.closest && el.closest('[contenteditable="true"]');
      if (editable) editable.dispatchEvent(new Event("input", { bubbles: true }));
    } catch (e) {}
  };

  const btnCls = "h-8 w-8 flex items-center justify-center rounded-md hover:bg-accent text-foreground transition-colors";

  return (
    <div style={{ position: "fixed", top: pos.top, left: pos.left, zIndex: 99999, backgroundColor: "hsl(var(--card))" }} className="rounded-xl border-2 border-border shadow-2xl flex items-center p-1 gap-0.5 animate-fade-in" onMouseDown={(e) => e.preventDefault()}>
      <button onClick={() => exec("bold")} className={btnCls + " font-bold"} title="Negrito (Ctrl+B)" type="button">B</button>
      <button onClick={() => exec("italic")} className={btnCls + " italic"} title="Itálico (Ctrl+I)" type="button">I</button>
      <button onClick={() => exec("underline")} className={btnCls + " underline"} title="Sublinhado (Ctrl+U)" type="button">U</button>
      <button onClick={() => exec("strikeThrough")} className={btnCls + " line-through"} title="Tachado" type="button">S</button>
      <button onClick={wrapInlineCode} className={btnCls + " font-mono text-xs"} title="Código inline" type="button">{"{}"}</button>
      <div className="w-px h-5 bg-border mx-0.5" />
      <button onClick={() => setPicker(picker === "textColor" ? "" : "textColor")} className={btnCls + " font-bold relative"} title="Cor do texto" type="button">
        A<span className="absolute bottom-1 left-1.5 right-1.5 h-0.5 bg-muted-foreground rounded" />
      </button>
      <button onClick={() => setPicker(picker === "bgColor" ? "" : "bgColor")} className={btnCls} title="Realce (cor de fundo)" type="button">
        <span className="px-1 rounded-sm font-bold text-xs" style={{ background: "#fef08a", color: "#000" }}>A</span>
      </button>
      <div className="w-px h-5 bg-border mx-0.5" />
      <button onClick={() => { const url = prompt("URL do link:"); if (url) exec("createLink", url); }} className={btnCls} title="Link" type="button">🔗</button>
      <button onClick={() => exec("removeFormat")} className={btnCls} title="Limpar formatação" type="button">✖</button>

      {picker === "textColor" && (
        <div className="bg-card absolute top-full left-0 mt-2 rounded-xl border-2 border-border shadow-2xl p-2 w-56 z-[99999]" style={{ backgroundColor: "hsl(var(--card))" }}>
          <div className="text-[11px] text-muted-foreground mb-1.5 font-medium">Cor do texto</div>
          <div className="grid grid-cols-5 gap-1">
            {TEXT_COLORS.map((c) => (
              <button key={c.n} onClick={() => applyTextColor(c.fg)} className="h-7 rounded-md border-2 border-border flex items-center justify-center text-xs font-bold hover:scale-105 transition-transform" style={{ color: c.fg === "inherit" ? "currentColor" : c.fg }} title={c.n} type="button">A</button>
            ))}
          </div>
        </div>
      )}

      {picker === "bgColor" && (
        <div className="bg-card absolute top-full left-0 mt-2 rounded-xl border-2 border-border shadow-2xl p-2 w-56 z-[99999]" style={{ backgroundColor: "hsl(var(--card))" }}>
          <div className="text-[11px] text-muted-foreground mb-1.5 font-medium">Cor de fundo (realce)</div>
          <div className="grid grid-cols-5 gap-1">
            {BG_COLORS.map((c) => (
              <button key={c.n} onClick={() => applyBgColor(c.bg)} className="h-7 rounded-md border-2 border-border flex items-center justify-center text-xs font-bold hover:scale-105 transition-transform" style={{ background: c.bg === "transparent" ? "transparent" : c.bg, color: c.bg === "transparent" ? "currentColor" : "#000" }} title={c.n} type="button">A</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function BlocksEditor({ blocks, onChange, canEdit, files, pages, onSelectPage, onCreateEmbed, onCreatePageLink }: any) {
  const [focusId, setFocusId] = useState<string | null>(null);
  const [slash, setSlash] = useState<{ blockId: string; rect: DOMRect; query: string } | null>(null);
  const [mention, setMention] = useState<{ blockId: string; rect: DOMRect; query: string } | null>(null);
  const [pageLinkFor, setPageLinkFor] = useState<{ blockId: string; query: string } | null>(null);
  const [newPageFor, setNewPageFor] = useState<{ blockId: string; query: string } | null>(null);

  const list: any[] = Array.isArray(blocks) && blocks.length > 0 ? blocks : [newBlock()];

  const updateBlock = (id: string, patch: any) => onChange((Array.isArray(list)?list:[]).map((b) => (b.id === id ? { ...b, ...patch } : b)));

  const insertAfter = (id: string, block: any, focus = true) => {
    const idx = (Array.isArray(list)?list:[]).findIndex((b) => b.id === id);
    const next = [...list]; next.splice(idx + 1, 0, block); onChange(next);
    if (focus) setFocusId(block.id);
  };

  const removeBlock = (id: string) => {
    const idx = (Array.isArray(list)?list:[]).findIndex((b) => b.id === id);
    if (list.length === 1) { onChange([newBlock()]); return; }
    onChange((Array.isArray(list)?list:[]).filter((b) => b.id !== id));
    if (idx > 0) setFocusId(list[idx - 1].id);
  };

  const splitBlock = (id: string, beforeHtml: string, afterHtml: string) => {
    const idx = (Array.isArray(list)?list:[]).findIndex((b) => b.id === id);
    const cur = list[idx];
    let nextType = "paragraph";
    if (cur.type === "bullet" || cur.type === "numbered" || cur.type === "todo") nextType = cur.type;
    const nb: any = newBlock(nextType, { html: afterHtml, indent: cur.indent || 0 });
    if (nextType === "todo") nb.checked = false;
    const next = [...list];
    next[idx] = { ...cur, html: beforeHtml };
    next.splice(idx + 1, 0, nb);
    onChange(next);
    setFocusId(nb.id);
  };

  const convertBlock = (id: string, type: string, triggerQuery?: string) => {
    const idx = (Array.isArray(list)?list:[]).findIndex((b) => b.id === id);
    const cur = list[idx];
    let patch: any = { type };

    if (triggerQuery !== undefined) {
      const htmlStr = cur.html || "";
      const searchStr = "/" + triggerQuery;
      const lastIdx = htmlStr.lastIndexOf(searchStr);
      if (lastIdx >= 0) {
        patch.html = htmlStr.substring(0, lastIdx) + htmlStr.substring(lastIdx + searchStr.length);
      } else {
        const fallbackIdx = htmlStr.lastIndexOf("/");
        if (fallbackIdx >= 0) {
          patch.html = htmlStr.substring(0, fallbackIdx);
        }
      }
    }

    if (type === "todo") patch.checked = false;
    if (type === "callout") patch.emoji = "💡";
    if (type === "code") patch.language = "javascript";
    if (type === "image") patch.url = "";
    if (type === "table") patch.rows = [["", "", ""], ["", "", ""], ["", "", ""]];
    if (type === "sketch") { patch.h = 220; patch.els = []; patch.html = ""; }
    if (type === "toggle") { patch.open = false; patch.children = [newBlock()]; }
    if (type === "embed_diagram" || type === "embed_canvas") { patch.type = "pageref"; patch.refKind = type === "embed_diagram" ? "diagram" : "canvas"; patch.pageId = null; patch.html = ""; }
    if (type === "mermaid") { patch.html = "graph TD\n  A[Início] --> B{Decisão}\n  B -->|Sim| C[Faz isso]\n  B -->|Não| D[Faz aquilo]"; }
    if (type === "bookmark") { patch.url = ""; patch.html = ""; }
    if (type === "toc") { patch.html = ""; }
    const realType = patch.type || type;
    const next = [...list]; next[idx] = { ...cur, ...patch };

    if (realType === "divider" || realType === "sketch" || realType === "toc") {
      const nb = newBlock("paragraph");
      next.splice(idx + 1, 0, nb);
      onChange(next); setSlash(null); setFocusId(nb.id);
    } else {
      onChange(next); setSlash(null); setFocusId(id);
    }
  };

  const handlePasteBlocks = (currentBlockId: string, beforeHtml: string, afterHtml: string, mdBlocks: any[]) => {
    if (mdBlocks.length === 0) return;
    const idx = (Array.isArray(list)?list:[]).findIndex((b) => b.id === currentBlockId);
    if (idx === -1) return;
    const cur = list[idx];
    const next = [...list];

    if (mdBlocks.length === 1 && mdBlocks[0].type === "paragraph") {
      next[idx] = { ...cur, html: beforeHtml + mdBlocks[0].html + afterHtml };
      onChange(next);
      return;
    }

    const wasEmpty = !beforeHtml && !afterHtml && (!cur.html || cur.html === "<br>" || cur.html.trim() === "");

    if (wasEmpty) {
      next.splice(idx, 1, ...mdBlocks);
    } else {
      next[idx] = { ...cur, html: beforeHtml };
      const insertions = [...mdBlocks];
      if (afterHtml) {
        insertions.push(newBlock("paragraph", { html: afterHtml }));
      }
      next.splice(idx + 1, 0, ...insertions);
    }

    onChange(next);
    const lastInserted = mdBlocks[mdBlocks.length - 1];
    setFocusId(lastInserted.id);
  };

  const moveBlockUp = (id: string) => {
    const idx = (Array.isArray(list)?list:[]).findIndex((b) => b.id === id);
    if (idx > 0) {
      const next = [...list];
      const temp = next[idx];
      next[idx] = next[idx - 1];
      next[idx - 1] = temp;
      onChange(next);
      setFocusId(id);
    }
  };

  const moveBlockDown = (id: string) => {
    const idx = (Array.isArray(list)?list:[]).findIndex((b) => b.id === id);
    if (idx < list.length - 1) {
      const next = [...list];
      const temp = next[idx];
      next[idx] = next[idx + 1];
      next[idx + 1] = temp;
      onChange(next);
      setFocusId(id);
    }
  };

  const indentBlock = (id: string) => {
    const idx = (Array.isArray(list)?list:[]).findIndex((b) => b.id === id);
    if (idx <= 0) return;
    const cur = list[idx];
    const prev = list[idx - 1];
    const maxIndent = (prev.indent || 0) + 1;
    const newIndent = Math.min((cur.indent || 0) + 1, maxIndent, 4);
    updateBlock(id, { indent: newIndent });
  };

  const outdentBlock = (id: string) => {
    const idx = (Array.isArray(list)?list:[]).findIndex((b) => b.id === id);
    if (idx < 0) return;
    const cur = list[idx];
    const newIndent = Math.max((cur.indent || 0) - 1, 0);
    updateBlock(id, { indent: newIndent });
  };

  const insertMention = (page: any) => {
    try {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0 || !mention) return;
      const range = sel.getRangeAt(0);

      const node = sel.focusNode;
      if (node && node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        const matchIdx = text.lastIndexOf("@" + mention.query);
        if (matchIdx !== -1) {
          range.setStart(node, matchIdx);
          range.setEnd(node, matchIdx + mention.query.length + 1);
          range.deleteContents();

          const el = document.createElement("span");
          el.className = "inline-flex items-center gap-1 text-primary font-semibold px-1 rounded bg-primary/10 hover:bg-primary/20 cursor-pointer select-none transition-colors mx-1";
          el.dataset.pageId = page.id;
          el.contentEditable = "false";
          const icoSvg = (typeof page.icon === "string" && page.icon.indexOf("ic:") === 0) ? ICON_SVGS[page.icon.slice(3)] : null;
          const icoHtml = icoSvg ? '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-0.125em">' + icoSvg + '</svg>' : (typeof page.icon === "string" && page.icon.indexOf("ri-") === 0) ? '<i class="' + page.icon + '" style="font-style:normal"></i>' : (typeof page.icon === "string" && page.icon.indexOf("fi-") === 0) ? '<i class="fi ' + page.icon + '" style="font-style:normal"></i>' : (page.icon || "📄");
          el.innerHTML = `<span class="text-xs pointer-events-none">${icoHtml}</span><span class="pointer-events-none underline decoration-primary/30 underline-offset-2">${page.title || "Sem título"}</span>`;
          range.insertNode(el);

          const space = document.createTextNode(" ");
          range.setEndAfter(el);
          range.collapse(false);
          range.insertNode(space);
          range.setEndAfter(space);
          range.collapse(false);
          sel.removeAllRanges();
          sel.addRange(range);

          const editorNode = el.closest('[contenteditable="true"]');
          if (editorNode) {
             editorNode.dispatchEvent(new Event("input", { bubbles: true }));
          }
        }
      }
    } catch(e) {}
    setMention(null);
  };

  // Insere o "chip" de link de página no HTML do bloco (no lugar do "/query")
  const insertChipInBlock = (blockId: string, query: string, page: any) => {
    const idx = (Array.isArray(list) ? list : []).findIndex((b) => b.id === blockId);
    if (idx === -1) return;
    const cur = list[idx];
    const htmlStr = cur.html || "";
    const chip = pageChipHtml(page);
    const searchStr = "/" + query;
    let html;
    const lastIdx = htmlStr.lastIndexOf(searchStr);
    if (lastIdx >= 0) html = htmlStr.substring(0, lastIdx) + chip + htmlStr.substring(lastIdx + searchStr.length);
    else { const fb = htmlStr.lastIndexOf("/"); html = fb >= 0 ? (htmlStr.substring(0, fb) + chip + htmlStr.substring(fb + 1)) : (htmlStr + chip); }
    const next = [...list]; next[idx] = { ...cur, html };
    onChange(next); setFocusId(blockId);
  };
  // "/" → linkar página existente
  const insertPageLink = (page: any) => {
    const pl = pageLinkFor;
    if (!pl) return;
    insertChipInBlock(pl.blockId, pl.query, page);
    setPageLinkFor(null);
  };
  // "/" → criar nova subpágina e linká-la aqui
  const createAndLinkPage = async (title: string) => {
    const np = newPageFor;
    if (!np || !onCreatePageLink) { setNewPageFor(null); return; }
    const created = await onCreatePageLink(title);
    if (created) insertChipInBlock(np.blockId, np.query, created);
    setNewPageFor(null);
  };

  return (
    <div className="space-y-1 relative">
      {(Array.isArray(list)?list:[]).map((block, i) => (
        <div key={block.id} id={"blk-" + block.id} className="group/block relative flex items-start -ml-10 pl-10 pr-2 py-0.5">
          {canEdit && (
            <div contentEditable={false} className="absolute left-2 top-1.5 opacity-0 group-hover/block:opacity-100 transition-opacity flex items-center justify-center select-none z-50">
              <CustomMenu
                triggerCls="h-6 w-6 flex items-center justify-center rounded-md hover:bg-accent text-muted-foreground transition-colors cursor-pointer"
                triggerContent={
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="9" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/>
                    <circle cx="15" cy="6" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="15" cy="18" r="1.5"/>
                  </svg>
                }
                items={[
                  { label: "Excluir bloco", icon: <span className="text-sm">🗑️</span>, onClick: () => removeBlock(block.id) },
                  { label: "Mover para cima", icon: <span className="text-sm">↑</span>, onClick: () => moveBlockUp(block.id), divider: true },
                  { label: "Mover para baixo", icon: <span className="text-sm">↓</span>, onClick: () => moveBlockDown(block.id) },
                ]}
              />
            </div>
          )}
          <div className="flex-1 min-w-0 transition-[margin] duration-200" style={{ marginLeft: (block.indent || 0) * 24 }}>
            <BlockRenderer
              block={block}
              autoFocus={focusId === block.id}
              onAutoFocused={() => setFocusId(null)}
              onUpdate={(patch: any) => updateBlock(block.id, patch)}
              onSplit={(b: string, a: string) => splitBlock(block.id, b, a)}
              onBackspace={() => removeBlock(block.id)}
              onSlashOpen={(rect: DOMRect, q: string) => setSlash({ blockId: block.id, rect, query: q })}
              onSlashClose={() => setSlash(null)}
              onMentionOpen={(rect: DOMRect, q: string) => setMention({ blockId: block.id, rect, query: q })}
              onMentionClose={() => setMention(null)}
              onConvert={(type: string, q?: string) => convertBlock(block.id, type, q)}
              onInsertAfter={(type = "paragraph") => insertAfter(block.id, newBlock(type))}
              onPasteBlocks={(before: string, after: string, mdBlocks: any[]) => handlePasteBlocks(block.id, before, after, mdBlocks)}
              onSelectPage={onSelectPage} pages={pages} onCreateEmbed={onCreateEmbed} onCreatePageLink={onCreatePageLink}
              onIndent={() => indentBlock(block.id)}
              onOutdent={() => outdentBlock(block.id)}
              canEdit={canEdit} files={files} listIndex={i} allBlocks={list}
            />
          </div>
        </div>
      ))}
      {slash && (<SlashMenu triggerRect={slash.rect} query={slash.query} onSelect={(t: string) => { if (!slash) return; if (t === "pagelink") { setPageLinkFor({ blockId: slash.blockId, query: slash.query }); setSlash(null); } else if (t === "newpage") { setNewPageFor({ blockId: slash.blockId, query: slash.query }); setSlash(null); } else { convertBlock(slash.blockId, t, slash.query); } }} onClose={() => setSlash(null)} />)}
      {mention && (<MentionMenu triggerRect={mention.rect} query={mention.query} pages={pages} onSelect={insertMention} onClose={() => setMention(null)} />)}
      {pageLinkFor && (<PageLinkDialog pages={pages} onClose={() => setPageLinkFor(null)} onPick={insertPageLink} />)}
      {newPageFor && (<NewPageDialog onClose={() => setNewPageFor(null)} onCreate={createAndLinkPage} />)}
    </div>
  );
}

function SketchBlock({ block, onUpdate, onBackspace, canEdit }: any) {
  const els: any[] = Array.isArray(block.els) ? block.els : [];
  const h = block.h || 220;
  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState(CANVAS_COLORS[0]);
  const [sw, setSw] = useState(3);
  const [hLive, setHLive] = useState<number | null>(null);
  const svgRef = useRef<any>(null);
  const pathRef = useRef<any>(null);
  const liveRef = useRef<any>(null);
  const resizeRef = useRef<any>(null);
  const histRef = useRef<any[][]>([]);
  const elsRef = useRef(els);
  elsRef.current = els;
  const gripRef = useRef<any>(null);
  useEffect(() => {
    const stop = (ev: any) => { ev.preventDefault(); };
    const nodes = [svgRef.current, gripRef.current].filter(Boolean);
    (Array.isArray(nodes)?nodes:[]).forEach((n: any) => {
      n.addEventListener("touchstart", stop, { passive: false });
      n.addEventListener("touchmove", stop, { passive: false });
    });
    return () => (Array.isArray(nodes)?nodes:[]).forEach((n: any) => {
      n.removeEventListener("touchstart", stop);
      n.removeEventListener("touchmove", stop);
    });
  }, []);

  const getPos = (e: any) => {
    const r = svgRef.current.getBoundingClientRect();
    return { x: Math.round((e.clientX - r.left) * 100) / 100, y: Math.round((e.clientY - r.top) * 100) / 100 };
  };
  const press = (e: any) => (e.pointerType === "pen" && e.pressure > 0 ? Math.min(1, e.pressure * 1.25) : 0.6);
  const eraseAt = (p: any) => {
    if (!elsRef.current.some((el) => canvasHit(el, p, 8))) return;
    histRef.current.push(elsRef.current);
    onUpdate({ els: elsRef.current.filter((el) => !canvasHit(el, p, 8)) });
  };
  const updateLive = () => {
    const lv = liveRef.current;
    if (!lv || !pathRef.current) return;
    if (lv.ink) {
      pathRef.current.setAttribute("d", inkOutline(lv.pts, sw, "pen"));
      pathRef.current.setAttribute("fill", color);
      pathRef.current.setAttribute("stroke", "none");
    } else {
      pathRef.current.setAttribute("d", strokePath(lv.pts));
      pathRef.current.setAttribute("fill", "none");
      pathRef.current.setAttribute("stroke", color);
      pathRef.current.setAttribute("stroke-width", String(Math.max(sw, 6)));
      pathRef.current.setAttribute("stroke-linecap", "round");
      pathRef.current.setAttribute("stroke-linejoin", "round");
      pathRef.current.setAttribute("opacity", "0.85");
    }
  };
  const down = (e: any) => {
    if (!canEdit) return;
    e.preventDefault();
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
    const p = getPos(e);
    if (tool === "eraser") { eraseAt(p); liveRef.current = { erase: true, id: e.pointerId }; return; }
    liveRef.current = { id: e.pointerId, ink: tool === "pen", pts: [{ ...p, p: Math.round(press(e) * 100) / 100 }] };
    updateLive();
  };
  const move = (e: any) => {
    const lv = liveRef.current;
    if (!lv || lv.id !== e.pointerId) return;
    e.preventDefault();
    if (lv.erase) { eraseAt(getPos(e)); return; }
    const evs = e.nativeEvent && e.nativeEvent.getCoalescedEvents ? e.nativeEvent.getCoalescedEvents() : [e];
    for (const ev of evs) {
      const q = getPos(ev);
      const last = lv.pts[lv.pts.length - 1];
      if (Math.hypot(q.x - last.x, q.y - last.y) < 0.5) continue;
      const qs = lv.ink ? { x: Math.round((last.x * 0.3 + q.x * 0.7) * 100) / 100, y: Math.round((last.y * 0.3 + q.y * 0.7) * 100) / 100 } : q;
      lv.pts.push({ ...qs, p: Math.round(press(ev) * 100) / 100 });
    }
    updateLive();
  };
  const up = (e: any) => {
    const lv = liveRef.current;
    if (!lv || lv.id !== e.pointerId) return;
    liveRef.current = null;
    if (pathRef.current) pathRef.current.setAttribute("d", "");
    if (lv.erase || !lv.pts || !lv.pts.length) return;
    histRef.current.push(elsRef.current);
    const el: any = lv.ink
      ? { id: uid(), kind: "path", ink: true, pen: "pen", pts: lv.pts, d: inkOutline(lv.pts, sw, "pen"), color, sw }
      : { id: uid(), kind: "path", pen: "marker", pts: lv.pts, color, sw: Math.max(sw, 6), opacity: 0.85 };
    onUpdate({ els: [...elsRef.current, el] });
  };
  const undoStroke = () => { const prev = histRef.current.pop(); if (prev) onUpdate({ els: prev }); };
  const rdown = (e: any) => {
    if (!canEdit) return;
    e.preventDefault(); e.stopPropagation();
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
    resizeRef.current = { y0: e.clientY, h0: h };
  };
  const rmove = (e: any) => {
    const rz = resizeRef.current;
    if (!rz) return;
    e.preventDefault();
    const nh = Math.max(120, Math.min(900, Math.round(rz.h0 + (e.clientY - rz.y0))));
    rz.hv = nh;
    setHLive(nh);
  };
  const rup = () => {
    const rz = resizeRef.current;
    resizeRef.current = null;
    if (rz && rz.hv != null && rz.hv !== h) onUpdate({ h: rz.hv });
    setHLive(null);
  };
  const mini = (act: boolean) => "w-6 h-6 flex items-center justify-center rounded-md text-xs transition-colors " + (act ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent");
  return (
    <div className="my-2 rounded-xl border border-border/70 overflow-hidden bg-card group/sketch">
      {canEdit && (
        <div className="flex items-center gap-1 px-2 py-1 border-b border-border/50 bg-muted/40 flex-wrap">
          <button onClick={() => setTool("pen")} className={mini(tool === "pen")} title="Caneta (pressão)" type="button">🖊️</button>
          <button onClick={() => setTool("marker")} className={mini(tool === "marker")} title="Hidrográfica" type="button">🖌️</button>
          <button onClick={() => setTool("eraser")} className={mini(tool === "eraser")} title="Borracha" type="button"><EraserIcon size={12} /></button>
          <div className="w-px h-4 bg-border mx-0.5" />
          {CANVAS_COLORS.slice(0, 5).map((c: string) => (
            <button key={c} onClick={() => { setColor(c); setTool(tool === "eraser" ? "pen" : tool); }} className={"w-4 h-4 rounded-full border border-border/60 transition-transform " + (color === c ? "ring-2 ring-primary scale-110" : "hover:scale-110")} style={{ backgroundColor: c }} type="button" />
          ))}
          <div className="w-px h-4 bg-border mx-0.5" />
          {[2, 3.5, 6].map((s) => (
            <button key={s} onClick={() => setSw(s)} className={mini(sw === s)} title={"Espessura " + s} type="button"><span className="rounded-full bg-current" style={{ width: s + 2, height: s + 2 }} /></button>
          ))}
          <div className="w-px h-4 bg-border mx-0.5" />
          {[["P", 160], ["M", 260], ["G", 420]].map((opt: any) => (
            <button key={opt[0]} onClick={() => onUpdate({ h: opt[1] })} className={mini(h === opt[1])} title={"Altura " + opt[0] + " (ou arraste a barra de baixo)"} type="button"><span className="text-[9px] font-bold">{opt[0]}</span></button>
          ))}
          <div className="flex-1" />
          <button onClick={undoStroke} className={mini(false)} title="Desfazer traço" type="button">↩</button>
          <button onClick={() => { if (els.length) { histRef.current.push(elsRef.current); onUpdate({ els: [] }); } }} className={mini(false)} title="Limpar tudo" type="button">🧹</button>
          <button onClick={() => onBackspace && onBackspace()} className={mini(false)} title="Remover bloco" type="button">✕</button>
        </div>
      )}
      <svg
        ref={svgRef}
        width="100%"
        height={hLive != null ? hLive : h}
        style={{ touchAction: "none", WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none", display: "block", backgroundImage: "repeating-linear-gradient(transparent, transparent 27px, hsl(var(--border) / 0.55) 27px, hsl(var(--border) / 0.55) 28px)", backgroundPositionY: "10px", cursor: canEdit ? "crosshair" : "default" }}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
      >
        {(Array.isArray(els)?els:[]).map((el: any) =>
          el.ink
            ? <path key={el.id} d={el.d || inkOutline(el.pts || [], el.sw || 3, el.pen)} fill={el.color} opacity={el.opacity != null ? el.opacity : 1} />
            : <path key={el.id} d={strokePath(el.pts || [])} stroke={el.color} strokeWidth={el.sw || 6} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity={el.opacity != null ? el.opacity : 0.85} />
        )}
        <path ref={pathRef} d="" />
      </svg>
      {canEdit && (
        <div
          ref={gripRef}
          className="h-6 flex items-center justify-center gap-1.5 cursor-ns-resize text-muted-foreground/70 hover:bg-accent/60 hover:text-foreground transition-colors select-none"
          style={{ touchAction: "none" }}
          onPointerDown={rdown}
          onPointerMove={rmove}
          onPointerUp={rup}
          onPointerCancel={rup}
          title="Arraste para baixo para crescer o campo"
        >
          <div className="w-8 h-1 rounded-full bg-border" />
          <svg width="18" height="9" viewBox="0 0 18 9"><path d="M2 2 L9 7 L16 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <div className="w-8 h-1 rounded-full bg-border" />
        </div>
      )}
    </div>
  );
}

// ========================================================================
// Incorporar diagrama/caderno em páginas (prévia clicável) + Mermaid
// ========================================================================
function dgCenter(n: any) { return { x: n.x + n.w / 2, y: n.y + n.h / 2 }; }
function dgBorderPoint(n: any, tx2: number, ty2: number) {
  const cx = n.x + n.w / 2, cy = n.y + n.h / 2;
  const dx = tx2 - cx, dy = ty2 - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const hw = n.w / 2, hh = n.h / 2;
  const sx = dx !== 0 ? hw / Math.abs(dx) : Infinity;
  const sy = dy !== 0 ? hh / Math.abs(dy) : Infinity;
  const s = Math.min(sx, sy);
  return { x: cx + dx * s, y: cy + dy * s };
}
function dgAutoCurve(ed: any, edges: any[]) {
  const key = (e: any) => (e.from < e.to ? e.from + "|" + e.to : e.to + "|" + e.from);
  const k = key(ed);
  const group = edges.filter((e: any) => key(e) === k);
  if (group.length <= 1) return 0;
  const i = group.findIndex((e: any) => e.id === ed.id);
  return (i - (group.length - 1) / 2) * 52;
}
function dgAnchorPt(n: any, anc: any) { return anc ? { x: n.x + anc.ax * n.w, y: n.y + anc.ay * n.h } : null; }
function dgEdgeGeom(ed: any, nodes: any[], edges: any[]) {
  const a = nodes.find((n: any) => n.id === ed.from), b = nodes.find((n: any) => n.id === ed.to);
  if (!a || !b) return null;
  const ca = dgCenter(a), cb = dgCenter(b);
  const aFix = dgAnchorPt(a, ed.fromAnchor), bFix = dgAnchorPt(b, ed.toAnchor);
  const lowFirst = ed.from < ed.to;
  const PA = lowFirst ? (aFix || ca) : (bFix || cb), PB = lowFirst ? (bFix || cb) : (aFix || ca);
  const vx = PB.x - PA.x, vy = PB.y - PA.y, vl = Math.hypot(vx, vy) || 1;
  const nx = -vy / vl, ny = vx / vl;
  const cv = ed.curve != null ? ed.curve : dgAutoCurve(ed, edges);
  let p1 = aFix || dgBorderPoint(a, (bFix || cb).x, (bFix || cb).y);
  let p2 = bFix || dgBorderPoint(b, (aFix || ca).x, (aFix || ca).y);
  if (cv) {
    const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
    const cp = { x: mx + nx * cv, y: my + ny * cv };
    if (!aFix) p1 = dgBorderPoint(a, cp.x, cp.y);
    if (!bFix) p2 = dgBorderPoint(b, cp.x, cp.y);
    return { p1, p2, cp, cv };
  }
  return { p1, p2, cp: { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 }, cv: 0 };
}

function DiagramPreview({ content }: any) {
  const block = (Array.isArray(content) && content[0]) || {};
  const nodes = Array.isArray(block.nodes) ? block.nodes : [];
  const edges = Array.isArray(block.edges) ? block.edges : [];
  if (!nodes.length) return <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground italic">Diagrama vazio — clique para editar</div>;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  nodes.forEach((n: any) => { minX = Math.min(minX, n.x); minY = Math.min(minY, n.y); maxX = Math.max(maxX, n.x + n.w); maxY = Math.max(maxY, n.y + n.h); });
  const pad = 60;
  const vbx = minX - pad, vby = minY - pad, vbw = Math.max(1, maxX - minX + pad * 2), vbh = Math.max(1, maxY - minY + pad * 2);
  return (
    <svg viewBox={vbx + " " + vby + " " + vbw + " " + vbh} preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", display: "block" }}>
      {(Array.isArray(edges) ? edges : []).map((ed: any) => {
        const g = dgEdgeGeom(ed, nodes, edges);
        if (!g) return null;
        const col = ed.color || "#64748b";
        const sw = ed.sw || 2;
        const hsz = sw * 4 + 3;
        const dash = ed.style === "dashed" ? (sw * 3) + " " + (sw * 2.5) : ed.style === "dotted" ? (Math.max(0.4, sw * 0.1)) + " " + (sw * 2.2) : undefined;
        const endTan = g.cv ? g.cp : g.p1, startTan = g.cv ? g.cp : g.p2;
        const ah = ed.arrowEnd !== false ? arrowHeadAt(endTan.x, endTan.y, g.p2.x, g.p2.y, hsz) : null;
        const sh = ed.arrowStart ? arrowHeadAt(startTan.x, startTan.y, g.p1.x, g.p1.y, hsz) : null;
        const d = "M " + g.p1.x + " " + g.p1.y + (g.cv ? " Q " + g.cp.x + " " + g.cp.y + " " + g.p2.x + " " + g.p2.y : " L " + g.p2.x + " " + g.p2.y);
        return (
          <g key={ed.id}>
            <path d={d} stroke={col} strokeWidth={sw} fill="none" strokeLinecap="round" strokeDasharray={dash} />
            {ah && <polygon points={ah.poly} fill={col} />}
            {sh && <polygon points={sh.poly} fill={col} />}
          </g>
        );
      })}
      {(Array.isArray(nodes) ? nodes : []).map((n: any) => {
        const fill = n.bg && n.bg !== "transparent" ? n.bg : "transparent";
        const stroke = n.color && n.color !== "transparent" ? n.color : "transparent";
        let shape: any = null;
        if (n.shape === "line" || n.shape === "arrow" || n.shape === "darrow") {
          const c = n.color && n.color !== "transparent" ? n.color : "#334155";
          const lw = n.lw || 3, hsz = lw * 4 + 4;
          const le = lineEnds(n); let x1 = le.x1, y1 = le.y1, x2 = le.x2, y2 = le.y2;
          const heads: any[] = [];
          if (n.shape !== "line") { const ah = arrowHeadAt(x1, y1, x2, y2, hsz); heads.push(<polygon key="he" points={ah.poly} fill={c} />); x2 = ah.bx; y2 = ah.by; }
          if (n.shape === "darrow") { const sh = arrowHeadAt(le.x2, le.y2, le.x1, le.y1, hsz); heads.push(<polygon key="hs" points={sh.poly} fill={c} />); x1 = sh.bx; y1 = sh.by; }
          shape = <g><line x1={x1} y1={y1} x2={x2} y2={y2} stroke={c} strokeWidth={lw} strokeLinecap="round" />{heads}</g>;
        }
        else if (n.shape === "rect") shape = <rect x={n.x} y={n.y} width={Math.max(1, n.w)} height={Math.max(1, n.h)} rx={12} fill={fill} stroke={stroke} strokeWidth={2} />;
        else if (n.shape === "ellipse") shape = <ellipse cx={n.x + n.w / 2} cy={n.y + n.h / 2} rx={Math.max(1, n.w / 2)} ry={Math.max(1, n.h / 2)} fill={fill} stroke={stroke} strokeWidth={2} />;
        else if (n.shape === "triangle") shape = <polygon points={(n.x + n.w / 2) + "," + n.y + " " + n.x + "," + (n.y + n.h) + " " + (n.x + n.w) + "," + (n.y + n.h)} fill={fill} stroke={stroke} strokeWidth={2} strokeLinejoin="round" />;
        else if (n.shape !== "text") shape = <polygon points={shapePoints({ kind: n.shape, x: n.x, y: n.y, w: n.w, h: n.h })} fill={fill} stroke={stroke} strokeWidth={2} strokeLinejoin="round" />;
        const showTxt = n.text || (n.shape !== "line" && n.shape !== "arrow" && n.shape !== "darrow");
        return (
          <g key={n.id}>
            {shape}
            {showTxt && (
            <foreignObject x={n.x} y={n.y} width={Math.max(1, n.w)} height={Math.max(1, n.h)}>
              <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", padding: "6px 10px", boxSizing: "border-box", color: n.textColor || "#0f172a", fontSize: (n.fontSize || 15) + "px", lineHeight: 1.25, textAlign: "center", whiteSpace: "pre-wrap", wordBreak: "break-word", overflow: "hidden", fontWeight: 500 }}>{n.text}</div>
            </foreignObject>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function CanvasPreview({ content }: any) {
  const block = (Array.isArray(content) && content[0]) || {};
  const els = Array.isArray(block.els) ? block.els : [];
  if (!els.length) return <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground italic">Caderno vazio — clique para editar</div>;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  els.forEach((el: any) => { const b = canvasBBox(el); minX = Math.min(minX, b.x); minY = Math.min(minY, b.y); maxX = Math.max(maxX, b.x + b.w); maxY = Math.max(maxY, b.y + b.h); });
  const pad = 24;
  const vbx = minX - pad, vby = minY - pad, vbw = Math.max(1, maxX - minX + pad * 2), vbh = Math.max(1, maxY - minY + pad * 2);
  const bgFill = block.bg && block.bg !== "transparent" ? block.bg : (block.paper === "blueprint" ? BLUEPRINT_BLUE : "transparent");
  const inner = (bgFill !== "transparent" ? '<rect x="' + vbx + '" y="' + vby + '" width="' + vbw + '" height="' + vbh + '" fill="' + bgFill + '"/>' : "") + (Array.isArray(els) ? els : []).map(elToSvgStringR).join("");
  return <svg viewBox={vbx + " " + vby + " " + vbw + " " + vbh} preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%", display: "block" }} dangerouslySetInnerHTML={{ __html: inner }} />;
}

function PageRefBlock({ block, onUpdate, onBackspace, canEdit, pages, onSelectPage, onCreateEmbed, autoFocus, onAutoFocused }: any) {
  useEffect(() => { if (autoFocus) onAutoFocused(); }, [autoFocus]);
  const [busy, setBusy] = useState(false);
  const refKind = block.refKind === "canvas" ? "canvas" : "diagram";
  const labelKind = refKind === "diagram" ? "diagrama" : "caderno";
  const iconKind = refKind === "diagram" ? "🗺️" : "🎨";
  const page = (Array.isArray(pages) ? pages : []).find((p: any) => p.id === block.pageId && !p.deleted_at);
  const list = (Array.isArray(pages) ? pages : []).filter((p: any) => !p.deleted_at && (refKind === "diagram" ? isDiagramPage(p) : isCanvasPage(p)));

  if (!page) {
    return (
      <div className="my-2 rounded-xl border-2 border-dashed border-border bg-muted/20 p-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base">{iconKind}</span>
          <span className="text-sm font-medium text-foreground">Inserir {labelKind}</span>
          {canEdit && <button onClick={onBackspace} className="ml-auto text-xs text-muted-foreground hover:text-foreground" type="button">remover bloco</button>}
        </div>
        {!canEdit ? (
          <div className="text-xs text-muted-foreground italic">Nada selecionado.</div>
        ) : (
          <>
            {onCreateEmbed && (
              <button disabled={busy} onClick={async () => { setBusy(true); try { const id = await onCreateEmbed(refKind); if (id) onUpdate({ pageId: id }); } finally { setBusy(false); } }} className="w-full h-9 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 disabled:opacity-50" type="button"><span>➕</span>{busy ? "Criando..." : "Criar novo " + labelKind}</button>
            )}
            {list.length > 0 && <div className="text-[11px] text-muted-foreground mt-3 mb-1">Ou escolher um existente:</div>}
            <div className="max-h-44 overflow-y-auto flex flex-col gap-1">
              {(Array.isArray(list) ? list : []).map((p: any) => (
                <button key={p.id} onClick={() => onUpdate({ pageId: p.id })} className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md border border-border hover:bg-accent transition-colors text-left text-sm" style={{ backgroundColor: "hsl(var(--card))" }} type="button">
                  <span className="text-base shrink-0">{pageIconNode(p.icon)}</span>
                  <span className="truncate flex-1 text-foreground">{p.title || "Sem título"}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="my-2 rounded-xl border-2 border-border overflow-hidden shadow-sm group/embed" style={{ backgroundColor: "hsl(var(--card))" }}>
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-border/60 bg-muted/40">
        <span className="text-sm shrink-0">{pageIconNode(page.icon)}</span>
        <span className="text-sm font-medium text-foreground truncate flex-1">{page.title || "Sem título"}</span>
        <span className="shrink-0 text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">{refKind === "diagram" ? "🗺️ Diagrama" : "🎨 Caderno"}</span>
        <button onClick={() => onSelectPage(page.id)} className="shrink-0 text-xs font-semibold text-primary hover:underline" type="button">Abrir ›</button>
        {canEdit && <button onClick={() => onUpdate({ pageId: null })} className="shrink-0 text-xs text-muted-foreground hover:text-foreground" title="Trocar" type="button">Trocar</button>}
        {canEdit && <button onClick={onBackspace} className="shrink-0 text-xs text-muted-foreground hover:text-foreground" title="Remover bloco" type="button">🗑️</button>}
      </div>
      <button onClick={() => onSelectPage(page.id)} className="block w-full text-left cursor-pointer" title="Abrir para editar" type="button">
        <div className="w-full overflow-hidden" style={{ height: 280, backgroundColor: "hsl(var(--muted) / 0.25)" }}>
          {refKind === "diagram" ? <DiagramPreview content={page.content} /> : <CanvasPreview content={page.content} />}
        </div>
      </button>
    </div>
  );
}

const MERMAID_URLS = [
  "https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.1/mermaid.min.js",
  "https://unpkg.com/mermaid@10.9.1/dist/mermaid.min.js",
];
let mermaidPromise: Promise<any> | null = null;
function ensureMermaid() {
  if ((window as any).mermaid) return Promise.resolve((window as any).mermaid);
  if (mermaidPromise) return mermaidPromise;
  mermaidPromise = (async () => {
    let lastErr: any = null;
    for (const u of MERMAID_URLS) {
      try {
        await loadScriptOnce(u);
        const lib = (window as any).mermaid;
        if (lib) { try { lib.initialize({ startOnLoad: false, securityLevel: "loose", theme: "default" }); } catch (e) {} return lib; }
      } catch (e) { lastErr = e; }
    }
    mermaidPromise = null;
    throw lastErr || new Error("mermaid indisponível");
  })();
  return mermaidPromise;
}

function MermaidBlock({ block, onUpdate, onBackspace, autoFocus, onAutoFocused, canEdit }: any) {
  const [editing, setEditing] = useState(false);
  const [svg, setSvg] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const seqRef = useRef(0);
  useEffect(() => { if (autoFocus) { onAutoFocused(); setEditing(true); } }, [autoFocus]);

  useEffect(() => {
    let cancelled = false;
    const code = (block.html || "").trim();
    if (!code) { setSvg(""); setErr(""); setLoading(false); return; }
    setLoading(true);
    const t = setTimeout(() => {
      ensureMermaid().then(async (m) => {
        try {
          const rid = "mmd" + String(block.id || "x").replace(/[^a-zA-Z0-9]/g, "") + "_" + (seqRef.current++);
          const out = await m.render(rid, code);
          if (!cancelled) { setSvg(out && out.svg ? out.svg : ""); setErr(""); }
        } catch (e: any) {
          if (!cancelled) { setErr((e && e.message ? e.message : "Erro de sintaxe no Mermaid").split("\n")[0]); }
        } finally { if (!cancelled) setLoading(false); }
      }).catch(() => { if (!cancelled) { setErr("Não consegui carregar o Mermaid (rede bloqueada)."); setLoading(false); } });
    }, 350);
    return () => { cancelled = true; clearTimeout(t); };
  }, [block.html, block.id]);

  const showEditor = canEdit && (editing || (!svg && !loading && !err));

  return (
    <div className="my-2 rounded-xl border-2 border-border overflow-hidden bg-card">
      {canEdit && (
        <div className="flex items-center gap-1 px-2 py-1 border-b border-border/50 bg-muted/40">
          <span className="text-sm">🧜</span>
          <span className="text-xs font-medium text-foreground">Mermaid</span>
          <a href="https://mermaid.js.org/intro/syntax-reference.html" target="_blank" rel="noopener" className="text-[10px] text-muted-foreground hover:text-foreground underline ml-1">sintaxe</a>
          <div className="flex-1" />
          <button onClick={() => setEditing((v) => !v)} className="h-7 px-2 rounded-md text-xs text-muted-foreground hover:bg-accent hover:text-foreground transition-colors" type="button">{showEditor ? "Pré-visualizar" : "Editar código"}</button>
          <button onClick={() => onBackspace && onBackspace()} className="h-7 w-7 flex items-center justify-center rounded-md text-xs text-muted-foreground hover:bg-accent" title="Remover bloco" type="button">✕</button>
        </div>
      )}
      {showEditor && (
        <textarea
          defaultValue={block.html || ""}
          onChange={(e) => onUpdate({ html: e.target.value })}
          placeholder={"graph TD\n  A[Início] --> B{Decisão}\n  B -->|Sim| C[Faz isso]\n  B -->|Não| D[Faz aquilo]"}
          spellCheck={false}
          className="w-full px-3 py-2 bg-muted/30 text-sm font-mono text-foreground outline-none resize-y min-h-[120px] border-b border-border/50"
        />
      )}
      <div className="p-3 overflow-x-auto flex items-center justify-center min-h-[64px]">
        {loading ? (
          <span className="text-xs text-muted-foreground inline-flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full border-2 border-primary border-t-transparent animate-spin" />Renderizando…</span>
        ) : err ? (
          <span className="text-xs text-destructive text-center">⚠ {err}</span>
        ) : svg ? (
          <div className="w-full flex justify-center [&_svg]:max-w-full [&_svg]:h-auto" dangerouslySetInnerHTML={{ __html: svg }} />
        ) : (
          <span className="text-xs text-muted-foreground italic">Escreva o código acima para gerar o diagrama</span>
        )}
      </div>
    </div>
  );
}

function TocBlock({ allBlocks }: any) {
  const heads = (Array.isArray(allBlocks) ? allBlocks : []).filter((b: any) => b.type === "h1" || b.type === "h2" || b.type === "h3");
  const go = (id: string) => { try { const el = document.getElementById("blk-" + id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {} };
  return (
    <div className="my-1 border-l-2 border-border pl-3 py-1" contentEditable={false}>
      <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">Sumário</div>
      {heads.length === 0 ? (
        <div className="text-sm text-muted-foreground italic">Adicione títulos (H1/H2/H3) para gerar o índice</div>
      ) : (
        (Array.isArray(heads) ? heads : []).map((b: any) => (
          <button key={b.id} onClick={() => go(b.id)} className={"block w-full text-left text-sm text-muted-foreground hover:text-primary hover:underline py-0.5 truncate " + (b.type === "h2" ? "pl-3" : b.type === "h3" ? "pl-6" : "font-medium")} type="button">
            {htmlToText(b.html) || "Sem título"}
          </button>
        ))
      )}
    </div>
  );
}

function BookmarkBlock({ block, onUpdate, onBackspace, canEdit }: any) {
  const [editing, setEditing] = useState(!block.url);
  const [val, setVal] = useState(block.url || "");
  const save = () => {
    let u = (val || "").trim();
    if (u && !/^https?:\/\//i.test(u)) u = "https://" + u;
    onUpdate({ url: u });
    setEditing(false);
  };
  if (editing && canEdit) {
    return (
      <div className="my-1 border-2 border-border rounded-lg p-2" style={{ backgroundColor: "hsl(var(--card))" }} contentEditable={false}>
        <input
          autoFocus
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); save(); } else if (e.key === "Backspace" && !val) { onBackspace && onBackspace(); } }}
          placeholder="Cole uma URL (ex.: https://exemplo.com)"
          className="w-full h-9 px-2 rounded-md border-2 border-input bg-background text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/40"
        />
        <div className="flex justify-end gap-2 mt-2">
          <button onClick={() => { if (block.url) { setVal(block.url); setEditing(false); } else if (onBackspace) onBackspace(); }} className="h-7 px-2 text-xs text-muted-foreground hover:bg-accent rounded-md transition-colors" type="button">Cancelar</button>
          <button onClick={save} className="h-7 px-3 text-xs font-semibold bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity" type="button">Salvar</button>
        </div>
      </div>
    );
  }
  let domain = block.url || "";
  try { domain = new URL(block.url).hostname.replace(/^www\./, ""); } catch (e) {}
  return (
    <div className="my-1" contentEditable={false}>
      <a href={block.url} target="_blank" rel="noreferrer noopener" className="flex items-center gap-3 border-2 border-border rounded-lg px-3 py-2.5 hover:bg-accent transition-colors no-underline group/bm" style={{ backgroundColor: "hsl(var(--card))" }}>
        <span className="text-xl shrink-0">🌐</span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium text-foreground truncate">{domain || block.url}</span>
          <span className="block text-xs text-muted-foreground truncate">{block.url}</span>
        </span>
        {canEdit && <button onClick={(e) => { e.preventDefault(); setVal(block.url || ""); setEditing(true); }} className="opacity-0 group-hover/bm:opacity-100 text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded-md hover:bg-background shrink-0 transition-opacity" type="button">Editar</button>}
      </a>
    </div>
  );
}

function BlockRenderer(props: any) {
  const { block } = props;
  switch (block.type) {
    case "h1": case "h2": case "h3": case "paragraph": case "bullet": case "numbered": case "quote": return <TextBlock {...props} />;
    case "todo": return <TodoBlock {...props} />;
    case "callout": return <CalloutBlock {...props} />;
    case "code": return <CodeBlock {...props} />;
    case "toggle": return <ToggleBlock {...props} />;
    case "image": return <ImageBlock {...props} />;
    case "table": return <TableBlock {...props} />;
    case "divider": return <DividerBlock {...props} />;
    case "sketch": return <SketchBlock {...props} />;
    case "pageref": return <PageRefBlock {...props} />;
    case "mermaid": return <MermaidBlock {...props} />;
    case "toc": return <TocBlock {...props} />;
    case "bookmark": return <BookmarkBlock {...props} />;
    default: return <TextBlock {...props} />;
  }
}

function useEditable(block: any, autoFocus: boolean, onAutoFocused: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);
  const lastIdRef = useRef<string>("");
  useEffect(() => {
    if (ref.current && lastIdRef.current !== block.id + "-" + block.type) {
      ref.current.innerHTML = block.html || "";
      lastIdRef.current = block.id + "-" + block.type;
    }
  }, [block.id, block.type]);
  // Resincroniza o DOM quando o html muda de fora (ex.: inserir link de página
  // via "/") e o bloco não está focado — não mexe no cursor durante a digitação.
  useEffect(() => {
    if (ref.current && document.activeElement !== ref.current && (ref.current.innerHTML || "") !== (block.html || "")) {
      ref.current.innerHTML = block.html || "";
    }
  }, [block.html]);
  useEffect(() => {
    if (autoFocus && ref.current) {
      try {
        ref.current.focus();
        const sel = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(ref.current);
        range.collapse(false);
        sel?.removeAllRanges(); sel?.addRange(range);
      } catch (e) {}
      onAutoFocused();
    }
  }, [autoFocus]);
  return ref;
}

function getBeforeAfterHtml(el: HTMLElement) {
  try {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return { before: el.innerHTML, after: "" };
    const range = sel.getRangeAt(0);
    if (!el.contains(range.endContainer)) return { before: el.innerHTML, after: "" };
    const before = document.createRange(); before.setStart(el, 0); before.setEnd(range.endContainer, range.endOffset);
    const after = document.createRange(); after.setStart(range.endContainer, range.endOffset); after.setEnd(el, el.childNodes.length);
    const bd = document.createElement("div"); bd.appendChild(before.cloneContents());
    const ad = document.createElement("div"); ad.appendChild(after.cloneContents());
    return { before: bd.innerHTML, after: ad.innerHTML };
  } catch(e) {
    return { before: el.innerHTML, after: "" };
  }
}

function handleMarkdownPaste(e: any, onPasteBlocks: any) {
  const text = e.clipboardData?.getData("text/plain") || "";
  if (!text || !looksLikeMarkdown(text)) return false;
  e.preventDefault();
  const mdBlocks = parseMarkdownToBlocks(text);
  if (mdBlocks.length === 0) return true;
  const { before, after } = getBeforeAfterHtml(e.currentTarget);
  onPasteBlocks(before, after, mdBlocks);
  return true;
}

function TextBlock({ block, autoFocus, onAutoFocused, onUpdate, onSplit, onBackspace, onSlashOpen, onSlashClose, onMentionOpen, onMentionClose, onSelectPage, onConvert, onIndent, onOutdent, onPasteBlocks, canEdit, listIndex, allBlocks }: any) {
  const ref = useEditable(block, autoFocus, onAutoFocused);

  const baseCls: any = {
    paragraph: "text-[15px] leading-7 text-foreground py-1",
    h1: "dc-serif text-[34px] font-semibold text-foreground py-2 mt-4",
    h2: "dc-serif text-[26px] font-semibold text-foreground py-2 mt-3",
    h3: "dc-serif text-[21px] font-semibold text-foreground py-1.5 mt-2",
    bullet: "text-[15px] leading-7 text-foreground py-0.5",
    numbered: "text-[15px] leading-7 text-foreground py-0.5",
    quote: "text-[15px] leading-7 text-foreground py-1 italic border-l-4 border-primary pl-4 my-1 bg-muted/30 rounded-r-md",
  };
  const placeholders: any = {
    paragraph: (listIndex === 0 && allBlocks?.length === 1) ? "Digite '/' para comandos e links, '@' para páginas" : "",
    h1: "Título 1", h2: "Título 2", h3: "Título 3",
    bullet: "Item da lista", numbered: "Item da lista", quote: "Citação...",
  };

  const onInput = (e: any) => {
    const html = e.currentTarget.innerHTML;
    onUpdate({ html });
    const text = (e.currentTarget.textContent || "").replace(/ /g, ' ');
    const sel = window.getSelection();
    let rect = e.currentTarget.getBoundingClientRect();
    try {
      const r = (sel && sel.rangeCount > 0) ? sel.getRangeAt(0).getBoundingClientRect() : e.currentTarget.getBoundingClientRect();
      rect = (r.width === 0 && r.height === 0) ? e.currentTarget.getBoundingClientRect() : r;
    } catch(err) {}
    const slashMatch = text.match(/(?:^|\s)\/([^/\s]*)$/);
    const mentionMatch = text.match(/(?:^|\s)@([^@\s]*)$/);
    if (slashMatch) { onSlashOpen(rect, slashMatch[1]); onMentionClose(); }
    else if (mentionMatch) { onMentionOpen(rect, mentionMatch[1]); onSlashClose(); }
    else { onSlashClose(); onMentionClose(); }
  };

  const onPaste = (e: any) => { handleMarkdownPaste(e, onPasteBlocks); };

  const onKeyDown = (e: any) => {
    if (e.defaultPrevented) return;
    if (e.key === "Tab") {
      e.preventDefault();
      if (e.shiftKey) onOutdent();
      else onIndent();
      return;
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const text = e.currentTarget.textContent || "";
      if ((block.type === "bullet" || block.type === "numbered") && text === "") { onConvert("paragraph"); return; }
      const { before, after } = getBeforeAfterHtml(e.currentTarget);
      onUpdate({ html: before }); onSplit(before, after);
      onSlashClose(); onMentionClose();
    } else if (e.key === "Backspace") {
      const text = e.currentTarget.textContent || "";
      if (text === "") { e.preventDefault(); onBackspace(); }
    } else if (e.key === "Escape") {
      onSlashClose(); onMentionClose();
    }
  };

  const onClick = (e: any) => {
    const target = e.target as HTMLElement;
    const link = target.closest("[data-page-id]") as HTMLElement;
    if (link && link.dataset.pageId) onSelectPage(link.dataset.pageId);
  };

  const inner = (
    <div ref={ref as any} contentEditable={canEdit} suppressContentEditableWarning onInput={onInput} onPaste={onPaste} onKeyDown={onKeyDown} onClick={onClick} data-placeholder={placeholders[block.type] || ""} className={"outline-none break-words " + baseCls[block.type] + " empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground empty:before:pointer-events-none"} />
  );

  if (block.type === "bullet") return (<div className="flex items-start gap-2 group"><span className="text-foreground pt-1.5 select-none leading-none">•</span><div className="flex-1 min-w-0">{inner}</div></div>);
  if (block.type === "numbered") {
    let n = 1;
    if (Array.isArray(allBlocks) && typeof listIndex === "number") {
      for (let i = listIndex - 1; i >= 0; i--) {
        if (allBlocks[i]?.type === "numbered" && (allBlocks[i]?.indent || 0) === (block.indent || 0)) n++;
        else if ((allBlocks[i]?.indent || 0) < (block.indent || 0)) break;
      }
    }
    return (<div className="flex items-start gap-2 group"><span className="text-foreground pt-1 select-none text-[15px] tabular-nums">{n}.</span><div className="flex-1 min-w-0">{inner}</div></div>);
  }
  return inner;
}

function TodoBlock({ block, autoFocus, onAutoFocused, onUpdate, onSplit, onBackspace, onSlashOpen, onSlashClose, onMentionOpen, onMentionClose, onSelectPage, onConvert, onIndent, onOutdent, onPasteBlocks, canEdit }: any) {
  const ref = useEditable(block, autoFocus, onAutoFocused);

  const onInput = (e: any) => {
    const html = e.currentTarget.innerHTML;
    onUpdate({ html });
    const text = (e.currentTarget.textContent || "").replace(/ /g, ' ');
    const sel = window.getSelection();
    let rect = e.currentTarget.getBoundingClientRect();
    try {
      const r = (sel && sel.rangeCount > 0) ? sel.getRangeAt(0).getBoundingClientRect() : e.currentTarget.getBoundingClientRect();
      rect = (r.width === 0 && r.height === 0) ? e.currentTarget.getBoundingClientRect() : r;
    } catch(err) {}
    const slashMatch = text.match(/(?:^|\s)\/([^/\s]*)$/);
    const mentionMatch = text.match(/(?:^|\s)@([^@\s]*)$/);
    if (slashMatch) { onSlashOpen(rect, slashMatch[1]); onMentionClose(); }
    else if (mentionMatch) { onMentionOpen(rect, mentionMatch[1]); onSlashClose(); }
    else { onSlashClose(); onMentionClose(); }
  };

  const onPaste = (e: any) => { handleMarkdownPaste(e, onPasteBlocks); };

  const onKeyDown = (e: any) => {
    if (e.defaultPrevented) return;
    if (e.key === "Tab") {
      e.preventDefault();
      if (e.shiftKey) onOutdent();
      else onIndent();
      return;
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const text = e.currentTarget.textContent || "";
      if (text === "") { onConvert("paragraph"); return; }
      const { before, after } = getBeforeAfterHtml(e.currentTarget);
      onUpdate({ html: before }); onSplit(before, after);
      onSlashClose(); onMentionClose();
    } else if (e.key === "Backspace") {
      if ((e.currentTarget.textContent || "") === "") { e.preventDefault(); onBackspace(); }
    } else if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      onUpdate({ checked: !block.checked });
    } else if (e.key === "Escape") {
      onSlashClose(); onMentionClose();
    }
  };

  const onClick = (e: any) => {
    const target = e.target as HTMLElement;
    const link = target.closest("[data-page-id]") as HTMLElement;
    if (link && link.dataset.pageId) onSelectPage(link.dataset.pageId);
  };

  return (
    <div className="flex items-start gap-2 py-0.5">
      <button onClick={() => canEdit && onUpdate({ checked: !block.checked })} className={"mt-1.5 h-4 w-4 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors text-[10px] font-bold " + (block.checked ? "bg-primary border-primary text-primary-foreground" : "border-input bg-background hover:border-primary text-transparent")} disabled={!canEdit} type="button">✓</button>
      <div ref={ref as any} contentEditable={canEdit} suppressContentEditableWarning onInput={onInput} onPaste={onPaste} onKeyDown={onKeyDown} onClick={onClick} data-placeholder="Tarefa" className={"flex-1 min-w-0 outline-none text-[15px] leading-7 py-0.5 break-words empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground empty:before:pointer-events-none " + (block.checked ? "line-through text-muted-foreground" : "text-foreground")} />
    </div>
  );
}

function CalloutBlock({ block, autoFocus, onAutoFocused, onUpdate, onSplit, onBackspace, onSlashOpen, onSlashClose, onMentionOpen, onMentionClose, onSelectPage, onIndent, onOutdent, onPasteBlocks, canEdit }: any) {
  const ref = useEditable(block, autoFocus, onAutoFocused);
  const [pickerOpen, setPickerOpen] = useState(false);

  const onInput = (e: any) => {
    const html = e.currentTarget.innerHTML;
    onUpdate({ html });
    const text = (e.currentTarget.textContent || "").replace(/ /g, ' ');
    const sel = window.getSelection();
    let rect = e.currentTarget.getBoundingClientRect();
    try {
      const r = (sel && sel.rangeCount > 0) ? sel.getRangeAt(0).getBoundingClientRect() : e.currentTarget.getBoundingClientRect();
      rect = (r.width === 0 && r.height === 0) ? e.currentTarget.getBoundingClientRect() : r;
    } catch(err) {}
    const slashMatch = text.match(/(?:^|\s)\/([^/\s]*)$/);
    const mentionMatch = text.match(/(?:^|\s)@([^@\s]*)$/);
    if (slashMatch) { onSlashOpen(rect, slashMatch[1]); onMentionClose(); }
    else if (mentionMatch) { onMentionOpen(rect, mentionMatch[1]); onSlashClose(); }
    else { onSlashClose(); onMentionClose(); }
  };

  const onPaste = (e: any) => { handleMarkdownPaste(e, onPasteBlocks); };

  const onKeyDown = (e: any) => {
    if (e.defaultPrevented) return;
    if (e.key === "Tab") {
      e.preventDefault();
      if (e.shiftKey) onOutdent();
      else onIndent();
      return;
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const { before, after } = getBeforeAfterHtml(e.currentTarget);
      onUpdate({ html: before }); onSplit(before, after);
      onSlashClose(); onMentionClose();
    } else if (e.key === "Backspace") {
      if ((e.currentTarget.textContent || "") === "") { e.preventDefault(); onBackspace(); }
    } else if (e.key === "Escape") {
      onSlashClose(); onMentionClose();
    }
  };

  const onClick = (e: any) => {
    const target = e.target as HTMLElement;
    const link = target.closest("[data-page-id]") as HTMLElement;
    if (link && link.dataset.pageId) onSelectPage(link.dataset.pageId);
  };

  return (
    <div className="my-2 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 p-4 flex items-start gap-3 relative shadow-sm">
      <button onClick={() => canEdit && setPickerOpen(true)} className={"text-2xl shrink-0 leading-none " + (canEdit ? "hover:scale-110 transition-transform" : "")} disabled={!canEdit} type="button">{block.emoji || "💡"}</button>
      <div ref={ref as any} contentEditable={canEdit} suppressContentEditableWarning onInput={onInput} onPaste={onPaste} onKeyDown={onKeyDown} onClick={onClick} data-placeholder="Digite algo..." className="flex-1 min-w-0 outline-none text-[15px] leading-7 text-foreground py-1 break-words empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground" />
      {pickerOpen && (
        <CustomDialog open={pickerOpen} onClose={() => setPickerOpen(false)} title="Escolher emoji">
          <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 max-h-80 overflow-y-auto">
            {EMOJIS.map((e) => (<button key={e} onClick={() => { onUpdate({ emoji: e }); setPickerOpen(false); }} className="h-9 w-9 flex items-center justify-center text-xl rounded-md hover:bg-accent" type="button">{e}</button>))}
          </div>
        </CustomDialog>
      )}
    </div>
  );
}

function CodeBlock({ block, autoFocus, onAutoFocused, onUpdate, onBackspace, canEdit }: any) {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const lastIdRef = useRef("");
  useEffect(() => { if (ref.current && lastIdRef.current !== block.id) { ref.current.value = block.html || ""; lastIdRef.current = block.id; } }, [block.id]);
  useEffect(() => { if (autoFocus && ref.current) { ref.current.focus(); ref.current.setSelectionRange(ref.current.value.length, ref.current.value.length); onAutoFocused(); } }, [autoFocus]);
  useEffect(() => { if (ref.current) { ref.current.style.height = "auto"; ref.current.style.height = ref.current.scrollHeight + "px"; } }, [block.html]);
  const onKeyDown = (e: any) => {
    if (e.key === "Backspace" && (!ref.current?.value)) { e.preventDefault(); onBackspace(); }
    if (e.key === "Tab") { e.preventDefault(); const start = e.currentTarget.selectionStart; const end = e.currentTarget.selectionEnd; const v = e.currentTarget.value; e.currentTarget.value = v.substring(0, start) + "  " + v.substring(end); e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 2; onUpdate({ html: e.currentTarget.value }); }
  };
  return (
    <div className="my-2 rounded-xl bg-muted border-2 border-border overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-3 py-1.5 border-b-2 border-border bg-muted/80">
        <input type="text" value={block.language || ""} onChange={(e) => onUpdate({ language: e.target.value })} placeholder="javascript" className="bg-transparent text-xs text-muted-foreground outline-none w-24" disabled={!canEdit} />
        <button onClick={() => navigator.clipboard.writeText(block.html || "")} className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1" type="button">📋 Copiar</button>
      </div>
      <textarea ref={ref} defaultValue={block.html || ""} onChange={(e) => { onUpdate({ html: e.target.value }); e.currentTarget.style.height = "auto"; e.currentTarget.style.height = e.currentTarget.scrollHeight + "px"; }} onKeyDown={onKeyDown} placeholder="// código aqui..." className="w-full px-3 py-2 bg-transparent text-sm font-mono text-foreground outline-none resize-none min-h-[2rem] placeholder:text-muted-foreground/40" disabled={!canEdit} rows={1} />
    </div>
  );
}

function DividerBlock({ autoFocus, onAutoFocused }: any) {
  useEffect(() => { if (autoFocus) onAutoFocused(); }, [autoFocus]);
  return (<div className="py-2"><hr className="border-border border-t-2" /></div>);
}

function ImageBlock({ block, onUpdate, onBackspace, autoFocus, onAutoFocused, canEdit, files }: any) {
  const [uploading, setUploading] = useState(false);
  const [showUrl, setShowUrl] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loadFailed, setLoadFailed] = useState(false);
  useEffect(() => { if (autoFocus) onAutoFocused(); }, [autoFocus]);
  useEffect(() => { setLoadFailed(false); }, [block.url]);

  const handleFile = async (f: File) => {
    if (!f.type.startsWith("image/")) { setErrorMsg("O arquivo precisa ser uma imagem"); return; }
    if (f.size > 10 * 1024 * 1024) { setErrorMsg("Imagem muito grande (máx. 10MB)"); return; }
    setUploading(true); setErrorMsg("");
    try {
      const r = await files.upload(f);
      onUpdate({ url: r.url });
    } catch (e: any) {
      setErrorMsg(e.message || "Falha ao enviar");
    } finally { setUploading(false); }
  };

  if (!block.url) {
    return (
      <div className="my-2 rounded-xl border-2 border-input bg-muted/30 p-4">
        <div className="flex items-center gap-3 mb-2"><span className="text-lg">🖼️</span><span className="text-sm font-medium text-foreground">Imagem</span></div>
        {showUrl ? (
          <div className="flex gap-2">
            <input value={urlInput} onChange={(e) => setUrlInput(e.target.value)} placeholder="https://..." autoFocus className="flex-1 h-8 px-2 rounded-md border-2 border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" onKeyDown={(e) => { if (e.key === "Enter" && urlInput) { onUpdate({ url: urlInput }); } }} />
            <button onClick={() => { if (urlInput) onUpdate({ url: urlInput }); }} className="h-8 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium" type="button">Inserir</button>
            <button onClick={() => setShowUrl(false)} className="h-8 px-2 rounded-md hover:bg-accent text-xs text-muted-foreground" type="button">Cancelar</button>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            <label className={"h-8 px-3 rounded-md border-2 border-input bg-background text-xs font-medium hover:bg-accent inline-flex items-center gap-1.5 " + (canEdit ? "cursor-pointer" : "cursor-not-allowed opacity-50")}>
              <input type="file" accept="image/*" disabled={!canEdit} onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }} className="hidden" />
              <span>📤</span>{uploading ? "Enviando..." : "Enviar arquivo"}
            </label>
            <button onClick={() => setShowUrl(true)} disabled={!canEdit} className="h-8 px-3 rounded-md border-2 border-input bg-background text-xs font-medium hover:bg-accent inline-flex items-center gap-1.5 disabled:opacity-50" type="button">🔗 Inserir URL</button>
          </div>
        )}
        {errorMsg && <div className="mt-2 text-xs text-muted-foreground">{errorMsg}</div>}
      </div>
    );
  }

  return (
    <div className="my-2 group">
      <div className="relative rounded-xl overflow-hidden border-2 border-border shadow-sm">
        {loadFailed ? (
          <div className="w-full h-40 bg-muted flex flex-col items-center justify-center gap-2 p-4">
            <span className="text-2xl">🚫</span>
            <div className="text-xs text-muted-foreground text-center">Imagem não carregou</div>
            <div className="text-[10px] text-muted-foreground/70 text-center break-all max-w-md">{block.url}</div>
            {canEdit && <button onClick={() => onUpdate({ url: "" })} className="h-7 px-3 rounded-md border border-border bg-background text-xs hover:bg-accent" type="button">Tentar outra imagem</button>}
          </div>
        ) : (
          <img src={block.url} alt={block.caption || ""} onError={() => setLoadFailed(true)} className="w-full max-h-[600px] object-contain bg-muted" />
        )}
        {canEdit && !loadFailed && (
          <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => onUpdate({ url: "" })} className="h-7 px-2 rounded-md border border-border text-foreground text-xs hover:scale-105 transition-transform shadow-sm" style={{ backgroundColor: "hsl(var(--card))" }} type="button">Trocar</button>
            <button onClick={onBackspace} className="h-7 w-7 rounded-md border border-border flex items-center justify-center hover:bg-accent text-foreground text-xs hover:scale-105 transition-transform shadow-sm" style={{ backgroundColor: "hsl(var(--card))" }} type="button">🗑️</button>
          </div>
        )}
      </div>
      <input type="text" value={block.caption || ""} onChange={(e) => onUpdate({ caption: e.target.value })} placeholder="Legenda (opcional)" disabled={!canEdit} className="w-full mt-1 bg-transparent text-xs text-muted-foreground italic text-center outline-none placeholder:text-muted-foreground/40" />
    </div>
  );
}

function TableBlock({ block, onUpdate, canEdit, autoFocus, onAutoFocused }: any) {
  useEffect(() => { if (autoFocus) onAutoFocused(); }, [autoFocus]);
  const rows: string[][] = block.rows || [["", "", ""], ["", "", ""]];
  const updateCell = (r: number, c: number, v: string) => onUpdate({ rows: (Array.isArray(rows)?rows:[]).map((row, i) => (Array.isArray(row)?row:[]).map((cell, j) => (i === r && j === c ? v : cell))) });
  const addRow = () => onUpdate({ rows: [...rows, new Array(rows[0].length).fill("")] });
  const addCol = () => onUpdate({ rows: (Array.isArray(rows)?rows:[]).map((r) => [...r, ""]) });
  const removeRow = (r: number) => { if (rows.length <= 1) return; onUpdate({ rows: (Array.isArray(rows)?rows:[]).filter((_, i) => i !== r) }); };
  const removeCol = (c: number) => { if (rows[0].length <= 1) return; onUpdate({ rows: (Array.isArray(rows)?rows:[]).map((r) => (Array.isArray(r)?r:[]).filter((_, j) => j !== c)) }); };

  return (
    <div className="my-2 group/table">
      <div className="overflow-x-auto rounded-xl border-2 border-border shadow-sm" style={{ backgroundColor: "hsl(var(--card))" }}>
        <table className="w-full">
          <tbody>
            {(Array.isArray(rows)?rows:[]).map((row, r) => (
              <tr key={r} className={r === 0 ? "bg-muted/50" : ""}>
                {(Array.isArray(row)?row:[]).map((cell, c) => (
                  <td key={c} className="border border-border p-0 relative group">
                    <input value={cell} onChange={(e) => updateCell(r, c, e.target.value)} placeholder={r === 0 ? "Coluna " + (c + 1) : ""} className={"w-full px-2 py-1.5 bg-transparent text-sm text-foreground outline-none focus:bg-accent/30 " + (r === 0 ? "font-semibold" : "")} disabled={!canEdit} />
                    {canEdit && r === 0 && (<button onClick={() => removeCol(c)} className="absolute -top-2 right-1 h-4 w-4 rounded-md bg-muted-foreground text-white opacity-0 group-hover:opacity-100 text-[10px] flex items-center justify-center" title="Remover coluna" type="button">×</button>)}
                  </td>
                ))}
                {canEdit && (<td className="w-6"><button onClick={() => removeRow(r)} className="h-full w-full flex items-center justify-center opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-foreground text-xs" title="Remover linha" type="button">×</button></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {canEdit && (
        <div className="flex gap-2 mt-1 opacity-0 group-hover/table:opacity-100 transition-opacity">
          <button onClick={addRow} className="h-7 px-2 rounded-md text-xs text-muted-foreground hover:bg-accent inline-flex items-center gap-1" type="button">+ Linha</button>
          <button onClick={addCol} className="h-7 px-2 rounded-md text-xs text-muted-foreground hover:bg-accent inline-flex items-center gap-1" type="button">+ Coluna</button>
        </div>
      )}
    </div>
  );
}

function ToggleBlock({ block, autoFocus, onAutoFocused, onUpdate, onSplit, onBackspace, onSlashOpen, onSlashClose, onMentionOpen, onMentionClose, onSelectPage, onPasteBlocks, canEdit, files, pages, onCreateEmbed, onCreatePageLink }: any) {
  const ref = useEditable(block, autoFocus, onAutoFocused);

  const onInput = (e: any) => {
    const html = e.currentTarget.innerHTML;
    onUpdate({ html });
    const text = (e.currentTarget.textContent || "").replace(/ /g, ' ');
    const sel = window.getSelection();
    let rect = e.currentTarget.getBoundingClientRect();
    try {
      const r = (sel && sel.rangeCount > 0) ? sel.getRangeAt(0).getBoundingClientRect() : e.currentTarget.getBoundingClientRect();
      rect = (r.width === 0 && r.height === 0) ? e.currentTarget.getBoundingClientRect() : r;
    } catch(err) {}
    const slashMatch = text.match(/(?:^|\s)\/([^/\s]*)$/);
    const mentionMatch = text.match(/(?:^|\s)@([^@\s]*)$/);
    if (slashMatch) { onSlashOpen(rect, slashMatch[1]); onMentionClose(); }
    else if (mentionMatch) { onMentionOpen(rect, mentionMatch[1]); onSlashClose(); }
    else { onSlashClose(); onMentionClose(); }
  };

  const onPaste = (e: any) => { handleMarkdownPaste(e, onPasteBlocks); };

  const onKeyDown = (e: any) => {
    if (e.defaultPrevented) return;
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const { before, after } = getBeforeAfterHtml(e.currentTarget);
      onUpdate({ html: before }); onSplit(before, after);
      onSlashClose(); onMentionClose();
    } else if (e.key === "Backspace") {
      if ((e.currentTarget.textContent || "") === "") { e.preventDefault(); onBackspace(); }
    } else if (e.key === "Escape") {
      onSlashClose(); onMentionClose();
    }
  };

  const onClick = (e: any) => {
    const target = e.target as HTMLElement;
    const link = target.closest("[data-page-id]") as HTMLElement;
    if (link && link.dataset.pageId) onSelectPage(link.dataset.pageId);
  };

  return (
    <div className="my-1">
      <div className="flex items-start gap-1 group">
        <button onClick={() => onUpdate({ open: !block.open })} className="h-7 w-5 flex items-center justify-center text-muted-foreground hover:text-foreground shrink-0 text-xs" type="button">
          {block.open ? "▼" : "▶"}
        </button>
        <div ref={ref as any} contentEditable={canEdit} suppressContentEditableWarning onInput={onInput} onPaste={onPaste} onKeyDown={onKeyDown} onClick={onClick} data-placeholder="Alternar" className="flex-1 min-w-0 outline-none text-[15px] leading-7 text-foreground py-1 break-words empty:before:content-[attr(data-placeholder)] empty:before:text-muted-foreground/40" />
      </div>
      {block.open && (
        <div className="ml-6 pl-3 border-l-2 border-border">
          <BlocksEditor blocks={block.children || [newBlock()]} onChange={(next: any[]) => onUpdate({ children: next })} canEdit={canEdit} files={files} pages={pages} onSelectPage={onSelectPage} onCreateEmbed={onCreateEmbed} onCreatePageLink={onCreatePageLink} />
        </div>
      )}
    </div>
  );
}

function MentionMenu({ triggerRect, query, pages, onSelect, onClose }: any) {
  const q = (query || "").toLowerCase();
  const filtered = (Array.isArray(pages)?pages:[]).filter((p: any) => !p.deleted_at && (p.title || "Sem título").toLowerCase().indexOf(q) !== -1).slice(0, 10);
  const [active, setActive] = useState(0);

  useEffect(() => { setActive(0); }, [query]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (filtered.length === 0) return;
      if (e.key === "ArrowDown") { e.preventDefault(); e.stopPropagation(); setActive((a) => Math.min(filtered.length - 1, a + 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); e.stopPropagation(); setActive((a) => Math.max(0, a - 1)); }
      else if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); if (filtered[active]) onSelect(filtered[active]); }
      else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); onClose(); }
    };
    window.addEventListener("keydown", h, true);
    return () => window.removeEventListener("keydown", h, true);
  }, [filtered, active, onSelect, onClose]);

  if (filtered.length === 0) return null;

  const top = Math.min(triggerRect.bottom + 4, window.innerHeight - 320);
  const left = Math.min(triggerRect.left, window.innerWidth - 300);

  return (
    <div style={{ position: "fixed", top, left, zIndex: 99999, width: 250, backgroundColor: "hsl(var(--card))" }} className="rounded-xl border-2 border-border shadow-2xl overflow-hidden animate-fade-in">
      <div className="px-3 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b-2 border-border">Mencionar página</div>
      <div className="max-h-72 overflow-y-auto p-1">
        {(Array.isArray(filtered)?filtered:[]).map((it: any, i: number) => (
          <button key={it.id} onClick={() => onSelect(it)} onMouseEnter={() => setActive(i)} className={"w-full flex items-center gap-2 px-2 py-1.5 text-left rounded-md transition-colors " + (i === active ? "bg-accent" : "hover:bg-accent")} type="button">
            <span className="text-base shrink-0">{pageIconNode(it.icon)}</span>
            <span className="text-sm text-foreground truncate flex-1">{it.title || "Sem título"}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function PageLinkDialog({ pages, onClose, onPick }: any) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  const ql = q.trim().toLowerCase();
  const filtered = (Array.isArray(pages) ? pages : []).filter((p: any) => !p.deleted_at && (p.title || "Sem título").toLowerCase().indexOf(ql) !== -1).slice(0, 60);
  return (
    <CustomDialog open={true} onClose={onClose} title="Linkar página">
      <input
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Buscar página pelo nome..."
        className="w-full h-9 px-3 mb-2 rounded-md border-2 border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <div className="max-h-72 overflow-y-auto space-y-0.5">
        {filtered.length === 0 ? (
          <div className="text-sm text-muted-foreground px-2 py-6 text-center">Nenhuma página encontrada</div>
        ) : (
          (Array.isArray(filtered) ? filtered : []).map((p: any) => (
            <button key={p.id} onClick={() => onPick(p)} className="w-full flex items-center gap-2 px-2 py-2 text-left rounded-md hover:bg-accent transition-colors" type="button">
              <span className="text-base shrink-0">{pageIconNode(p.icon)}</span>
              <span className="text-sm text-foreground truncate flex-1">{p.title || "Sem título"}</span>
            </button>
          ))
        )}
      </div>
    </CustomDialog>
  );
}

function NewPageDialog({ onClose, onCreate }: any) {
  const [pageTitle, setPageTitle] = useState("");
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  const submit = async () => { if (busy) return; setBusy(true); try { await onCreate(pageTitle.trim()); } finally { setBusy(false); } };
  return (
    <CustomDialog open={true} onClose={onClose} title="Criar página linkada">
      <input
        ref={inputRef}
        value={pageTitle}
        onChange={(e) => setPageTitle(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); submit(); } }}
        placeholder="Título da nova página..."
        className="w-full h-9 px-3 mb-3 rounded-md border-2 border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
      <div className="flex justify-end gap-2">
        <button onClick={onClose} className="h-9 px-3 rounded-md text-sm text-muted-foreground hover:bg-accent transition-colors" type="button">Cancelar</button>
        <button onClick={submit} disabled={busy} className="h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50" type="button">{busy ? "Criando..." : "Criar e linkar"}</button>
      </div>
    </CustomDialog>
  );
}

function SlashMenu({ triggerRect, query, onSelect, onClose }: any) {
  const norm = (x: string) => (x || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const filtered = SLASH_ITEMS.filter((it: any) => { if (!query) return true; const q = norm(query); return norm(it.label).includes(q) || it.type.includes(q) || (it.kw && norm(it.kw).includes(q)); });
  const [active, setActive] = useState(0);

  useEffect(() => { setActive(0); }, [query]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (filtered.length === 0) return;
      if (e.key === "ArrowDown") { e.preventDefault(); e.stopPropagation(); setActive((a) => Math.min(filtered.length - 1, a + 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); e.stopPropagation(); setActive((a) => Math.max(0, a - 1)); }
      else if (e.key === "Enter") { e.preventDefault(); e.stopPropagation(); if (filtered[active]) onSelect(filtered[active].type); }
      else if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); onClose(); }
    };
    window.addEventListener("keydown", h, true);
    return () => window.removeEventListener("keydown", h, true);
  }, [filtered, active, onSelect, onClose]);

  if (filtered.length === 0) return null;

  const top = Math.min(triggerRect.bottom + 4, window.innerHeight - 320);
  const left = Math.min(triggerRect.left, window.innerWidth - 320);

  return (
    <div style={{ position: "fixed", top, left, zIndex: 99999, width: 300, backgroundColor: "hsl(var(--card))" }} className="rounded-xl border-2 border-border shadow-2xl overflow-hidden animate-fade-in">
      <div className="px-3 py-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider border-b-2 border-border">Blocos básicos</div>
      <div className="max-h-72 overflow-y-auto p-1">
        {(Array.isArray(filtered)?filtered:[]).map((it: any, i: number) => (
          <button key={it.type} onClick={() => onSelect(it.type)} onMouseEnter={() => setActive(i)} className={"w-full flex items-center gap-3 px-2 py-1.5 text-left rounded-md transition-colors " + (i === active ? "bg-accent" : "hover:bg-accent")} type="button">
            <div className={"h-9 w-9 rounded-md bg-background border-2 border-border flex items-center justify-center shrink-0 text-foreground " + (it.style || "")}>{it.display}</div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-foreground truncate">{it.label}</div>
              <div className="text-xs text-muted-foreground truncate">{it.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function CommandPalette({ pages, onClose, onSelect }: any) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const matches = pages
    .filter((p: any) => !p.deleted_at)
    .map((p: any) => {
      const titleLc = (p.title || "Sem título").toLowerCase();
      const body = blocksToText(p.content || []).toLowerCase().slice(0, 500);
      const ql = q.toLowerCase().trim();
      if (!ql) return { p, score: 0, hit: "" };
      if (titleLc.indexOf(ql) !== -1) return { p, score: 10, hit: p.title || "Sem título" };
      if (body.includes(ql)) {
        const idx = body.indexOf(ql);
        return { p, score: 5, hit: "..." + body.slice(Math.max(0, idx - 20), Math.min(body.length, idx + ql.length + 30)) + "..." };
      }
      return { p, score: 0, hit: "" };
    })
    .filter((m: any) => !q || m.score > 0)
    .sort((a: any, b: any) => b.score - a.score)
    .slice(0, 10);

  useEffect(() => { setActive(0); }, [q]);
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(matches.length - 1, a + 1)); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(0, a - 1)); }
      else if (e.key === "Enter") { e.preventDefault(); if (matches[active]) onSelect(matches[active].p.id); }
      else if (e.key === "Escape") { e.preventDefault(); onClose(); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [matches, active]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <div className="bg-card shadow-xl border-2 border-border rounded-xl w-full max-w-lg mx-4 shadow-2xl overflow-hidden animate-scale-in" style={{ backgroundColor: "hsl(var(--card))" }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 border-b-2 border-border px-3">
          <span className="text-muted-foreground">🔍</span>
          <input ref={inputRef} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar páginas..." className="flex-1 h-11 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none" />
          <kbd className="text-[10px] px-1.5 py-0.5 rounded-md bg-muted border border-border text-muted-foreground">esc</kbd>
        </div>
        <div className="max-h-80 overflow-y-auto p-1">
          {matches.length === 0 ? (
            <div className="px-3 py-6 text-center text-sm text-muted-foreground">{q ? "Nenhum resultado" : "Comece a digitar para buscar"}</div>
          ) : (Array.isArray(matches)?matches:[]).map((m: any, i: number) => (
            <button key={m.p.id} onClick={() => onSelect(m.p.id)} onMouseEnter={() => setActive(i)} className={"w-full flex items-start gap-3 px-2 py-2 rounded-md text-left transition-colors " + (i === active ? "bg-accent" : "hover:bg-accent/60")} type="button">
              <span className="text-base shrink-0">{pageIconNode(m.p.icon)}</span>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-foreground truncate">{m.p.title || "Sem título"}</div>
                {m.hit && m.score < 10 && (<div className="text-xs text-muted-foreground truncate">{m.hit}</div>)}
              </div>
            </button>
          ))}
        </div>
        <div className="border-t-2 border-border px-3 py-2 flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1"><kbd className="px-1 py-0.5 rounded-md bg-muted border border-border">↑↓</kbd> navegar</span>
          <span className="inline-flex items-center gap-1"><kbd className="px-1 py-0.5 rounded-md bg-muted border border-border">↵</kbd> abrir</span>
        </div>
      </div>
    </div>
  );
}

function TrashView({ pages, onRestore, onHardDelete, onEmpty }: any) {
  const trashed = (Array.isArray(pages)?pages:[]).filter((p: any) => p.deleted_at).sort((a: any, b: any) => new Date(b.deleted_at).getTime() - new Date(a.deleted_at).getTime());
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Lixeira</h1>
          <p className="text-sm text-muted-foreground">Páginas excluídas. Você pode restaurar ou apagar permanentemente.</p>
        </div>
        {trashed.length > 0 && (<button onClick={onEmpty} className="h-9 px-4 rounded-md bg-muted text-foreground border-2 border-border text-sm font-medium hover:bg-accent inline-flex items-center gap-2" type="button"><span>🗑️</span>Esvaziar lixeira</button>)}
      </div>
      {trashed.length === 0 ? (
        <BeaUI.EmptyState icon={<div className="text-4xl">🗑️</div>} title="Lixeira vazia" description="Nenhuma página excluída no momento." />
      ) : (
        <div className="rounded-xl border-2 border-border overflow-hidden divide-y divide-border" style={{ backgroundColor: "hsl(var(--card))" }}>
          {(Array.isArray(trashed)?trashed:[]).map((p: any) => (
            <div key={p.id} className="flex items-center gap-3 p-3 hover:bg-accent/30 transition-colors">
              <span className="text-lg">{pageIconNode(p.icon)}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-foreground truncate">{p.title || "Sem título"}</div>
                <div className="text-xs text-muted-foreground">Excluída em {new Date(p.deleted_at).toLocaleDateString("pt-BR")}</div>
              </div>
              <button onClick={() => onRestore(p.id)} className="h-8 px-3 rounded-md border-2 border-border bg-background text-xs font-medium hover:bg-accent inline-flex items-center gap-1.5" type="button">↩ Restaurar</button>
              <button onClick={() => { if (confirm("Excluir permanentemente?")) onHardDelete(p.id); }} className="h-8 w-8 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground flex items-center justify-center text-sm" title="Excluir permanentemente" type="button">🗑️</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
