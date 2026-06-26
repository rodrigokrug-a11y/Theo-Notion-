export default function MyApp(props: any) {
  return (
    <BeaUI.ToastProvider>
      <style>{`
        /* Paleta do Notion: tinta #37352F, cinzas quentes, azul #2383E2 */
        :root, .dark { --primary: 210 77% 51%; --primary-foreground: 0 0% 100%; --ring: 210 77% 51%; --destructive: 220 9% 46%; --destructive-foreground: 0 0% 100%; }
        :root {
          --background: 0 0% 100%; --foreground: 45 8% 20%;
          --card: 0 0% 100%; --card-foreground: 45 8% 20%;
          --popover: 0 0% 100%; --popover-foreground: 45 8% 20%;
          --muted: 60 11% 96%; --muted-foreground: 45 3% 46%;
          --accent: 60 6% 94%; --accent-foreground: 45 8% 20%;
          --secondary: 60 7% 94%; --secondary-foreground: 45 8% 20%;
          --border: 60 4% 91%; --input: 60 4% 91%;
        }
        .dark {
          --background: 0 0% 10%; --foreground: 0 0% 83%;
          --card: 0 0% 15%; --card-foreground: 0 0% 83%;
          --popover: 0 0% 15%; --popover-foreground: 0 0% 83%;
          --muted: 0 0% 13%; --muted-foreground: 0 0% 61%;
          --accent: 0 0% 17%; --accent-foreground: 0 0% 83%;
          --secondary: 0 0% 17%; --secondary-foreground: 0 0% 83%;
          --border: 0 0% 22%; --input: 0 0% 22%;
          --primary: 210 77% 58%; --ring: 210 77% 58%;
        }
        [style*="hsl(var(--card))"], .bg-card, .bg-popover { background-color: rgb(255 255 255) !important; }
        .dark [style*="hsl(var(--card))"], .dark .bg-card, .dark .bg-popover { background-color: rgb(37 37 37) !important; }
        .canvas-pill { background-color: rgb(255 255 255 / 0.97) !important; }
        .dark .canvas-pill { background-color: rgb(37 37 37 / 0.97) !important; }
        @media (hover: none) and (pointer: coarse) { .touch-show { opacity: 1 !important; } }
        body, button, input, textarea, select { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
        body { overscroll-behavior-y: none; background-color: hsl(var(--background)); color: hsl(var(--foreground)); }
      `}</style>
      <AppContent {...props} />
    </BeaUI.ToastProvider>
  );
}

const HASH = "mqo532";
const TBL = "app_notion_pages_mqo532";

const SLASH_ITEMS = [
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
  "home": '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  "file": '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>',
  "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  "folder": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
  "folder-open": '<path d="M6 14l1.5-2.5h10L22 14"/><path d="M2 19a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v3"/>',
  "edit": '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>',
  "trash": '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
  "copy": '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  "save": '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
  "search": '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  "settings": '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  "user": '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  "heart": '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  "bookmark": '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  "flag": '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
  "tag": '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
  "bell": '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  "calendar": '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  "clock": '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  "mail": '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/>',
  "message": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
  "send": '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  "camera": '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  "image": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  "video": '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
  "music": '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  "play": '<polygon points="5 3 19 12 5 21 5 3"/>',
  "headphones": '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  "mic": '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',
  "book": '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  "pen": '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  "brush": '<path d="M9.06 11.9l8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/>',
  "lightbulb": '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>',
  "target": '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  "trophy": '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>',
  "crown": '<path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z"/><line x1="5" y1="20" x2="19" y2="20"/>',
  "gift": '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
  "fire": '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  "rocket": '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  "map": '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',
  "compass": '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  "globe": '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  "plane": '<path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  "car": '<path d="M5 17H3a1 1 0 0 1-1-1v-3.28a1 1 0 0 1 .684-.948l1.923-.641a1 1 0 0 0 .578-.502l1.539-3.076A1 1 0 0 1 8.618 7h6.764a1 1 0 0 1 .894.553l1.539 3.076a1 1 0 0 0 .578.502l1.923.641a1 1 0 0 1 .684.949V16a1 1 0 0 1-1 1h-2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
  "truck": '<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  "cart": '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
  "bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  "dollar": '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
  "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
  "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  "briefcase": '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  "building": '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><line x1="8" y1="6" x2="8.01" y2="6"/><line x1="12" y1="6" x2="12.01" y2="6"/><line x1="16" y1="6" x2="16.01" y2="6"/><line x1="8" y1="10" x2="8.01" y2="10"/><line x1="12" y1="10" x2="12.01" y2="10"/><line x1="16" y1="10" x2="16.01" y2="10"/>',
  "clipboard": '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>',
  "archive": '<polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>',
  "inbox": '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  "paperclip": '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  "pin": '<line x1="12" y1="17" x2="12" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24z"/>',
  "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  "share": '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  "check": '<polyline points="20 6 9 17 4 12"/>',
  "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  "x": '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  "plus": '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  "minus": '<line x1="5" y1="12" x2="19" y2="12"/>',
  "menu": '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
  "grid": '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  "list": '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  "filter": '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  "refresh": '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
  "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  "upload": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>',
  "cloud": '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>',
  "lock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  "unlock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
  "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  "eye": '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>',
  "info": '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  "alert": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  "help": '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  "code": '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  "terminal": '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
  "database": '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
  "server": '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
  "cpu": '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
  "monitor": '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
  "smartphone": '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
  "wifi": '<path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
  "battery": '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/>',
  "sun": '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
  "moon": '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  "umbrella": '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>',
  "coffee": '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
  "leaf": '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  "zap": '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  "droplet": '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
  "anchor": '<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>',
  "award": '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  "activity": '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  "scissors": '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>',
  "tool": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  "hammer": '<path d="M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9"/><path d="M17.64 15L22 10.64"/><path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h.86c.85 0 1.65.33 2.25.93l1.25 1.25"/>',
  "thermometer": '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>',
  "smile": '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>',
  "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>',
  "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>',
  "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>',
  "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [isResizing, setIsResizing] = useState(false);
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
            { label: "Mover para...", icon: <span className="text-sm">📁</span>, onClick: () => setMoveTarget(activePage) },
            { label: "Excluir página", icon: <span className="text-sm">🗑️</span>, onClick: () => { if (confirm("Mover \"" + (activePage.title || "Sem título") + "\" e suas subpáginas para a lixeira?")) softDelete(activePage.id); }, divider: true },
          ]}
        />
      )}
    </div>
  ) : null;

  return (
    <div className="min-h-screen flex bg-background">
      <div
        className={"relative shrink-0 overflow-hidden h-screen sticky top-0 " + (isResizing ? "" : "transition-[width] duration-200 ease-out")}
        style={{ width: sidebarOpen ? sidebarWidth + "px" : "0px" }}
      >
        <Sidebar
          pages={pages} activeId={activeId} expanded={expanded} setExpanded={setExpanded}
          onSelect={(id: string) => { setActiveId(id); setView("page"); }}
          onCreate={createPage} onToggleFav={toggleFav} onDelete={softDelete} onMove={movePage}
          onReorder={reorderPages}
          onShowTrash={() => setView("trash")} onShowSearch={() => setSearchOpen(true)}
          onClose={() => setSidebarOpen(false)} user={user} canEdit={canEdit} view={view}
          onMoveDialog={(p: any) => setMoveTarget(p)}
          onGoHome={() => { setActiveId(null); setView("page"); }}
          width={sidebarWidth}
        />
        {sidebarOpen && (
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
              />
            )
          ) : (
            <div className="h-full flex items-center justify-center p-6">
              <div className="text-center max-w-md">
                <div className="text-7xl mb-6 inline-block">📝</div>
                <h2 className="text-3xl font-bold text-foreground mb-3">Bem-vindo, {user.name.split(" ")[0]}</h2>
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
      const matchesSelf = !search || (p.title || "").toLowerCase().includes(search.toLowerCase());
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

function Sidebar({ pages, activeId, expanded, setExpanded, onSelect, onCreate, onToggleFav, onDelete, onMove, onReorder, onShowTrash, onShowSearch, onClose, user, canEdit, view, onMoveDialog, onGoHome, width = 256 }: any) {
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
    <aside className="border-r border-border/50 flex flex-col h-full" style={{ width: width + "px", backgroundColor: "hsl(var(--muted) / 0.35)" }}>
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
                <PageNode key={p.id} page={p} pages={pages} level={0} activeId={activeId} expanded={expanded} setExpanded={setExpanded} onSelect={onSelect} onCreate={onCreate} onToggleFav={onToggleFav} onDelete={onDelete} onMove={onMove} onReorder={onReorder} dragId={dragId} setDragId={setDragId} dropTargetId={dropTargetId} setDropTargetId={setDropTargetId} canEdit={canEdit} viewActive={view === "page"} onMoveDialog={onMoveDialog} />
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

function PageNode({ page, pages, level, activeId, expanded, setExpanded, onSelect, onCreate, onToggleFav, onDelete, onMove, onReorder, dragId, setDragId, dropTargetId, setDropTargetId, canEdit, viewActive, onMoveDialog }: any) {
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
            <PageNode key={c.id} page={c} pages={pages} level={level + 1} activeId={activeId} expanded={expanded} setExpanded={setExpanded} onSelect={onSelect} onCreate={onCreate} onToggleFav={onToggleFav} onDelete={onDelete} onMove={onMove} onReorder={onReorder} dragId={dragId} setDragId={setDragId} dropTargetId={dropTargetId} setDropTargetId={setDropTargetId} canEdit={canEdit} viewActive={viewActive} onMoveDialog={onMoveDialog} />
          ))}
        </div>
      )}
    </div>
  );
}

function PageEditor({ page, pages, canEdit, files, onUpdate, showIconPicker, setShowIconPicker, showCoverPicker, setShowCoverPicker, showColorPicker, setShowColorPicker, onSelectPage, onCreateSubpage, onCreateEmbed }: any) {
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
          <button onClick={() => canEdit && setShowIconPicker(true)} className={"text-7xl select-none transition-transform leading-none " + (canEdit ? "hover:scale-110 cursor-pointer" : "")} disabled={!canEdit} type="button" style={{ filter: "drop-shadow(0 4px 6px rgb(0 0 0 / 0.1))" }}>{pageIconNode(page.icon)}</button>
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
          className="w-full bg-transparent font-bold outline-none resize-none border-0 p-0 mb-4 block text-foreground placeholder:text-muted-foreground/50"
          style={{ fontSize: "44px", lineHeight: "1.2", minHeight: "60px", fontFamily: "inherit" }}
        />
        <BlocksEditor blocks={blocks} onChange={updateBlocks} canEdit={canEdit} files={files} pages={pages} onSelectPage={onSelectPage} onCreateEmbed={onCreateEmbed} />

        <div className="mt-12 pt-5 border-t border-border/60">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-foreground inline-flex items-center gap-2"><span>📁</span>Subpáginas {subs.length > 0 && <span className="text-xs text-muted-foreground font-normal">({subs.length})</span>}</h3>
            {canEdit && <button onClick={onCreateSubpage} className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 hover:bg-accent px-2 py-1 rounded-md transition-colors" type="button"><span className="text-base font-bold leading-none">+</span>Nova subpágina</button>}
          </div>
          {subs.length === 0 ? (
            <p className="text-xs text-muted-foreground italic">Nenhuma subpágina ainda. Use o botão acima para criar uma.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(Array.isArray(subs)?subs:[]).map((s: any) => (
                <button key={s.id} onClick={() => onSelectPage(s.id)} className="w-full flex items-center gap-2 px-3 py-2 rounded-xl border-2 border-border hover:bg-accent transition-colors text-left shadow-sm group" style={{ backgroundColor: "hsl(var(--card))" }} type="button">
                  <span className="text-base">{pageIconNode(s.icon)}</span>
                  <span className="text-sm text-foreground truncate flex-1">{s.title || "Sem título"}</span>
                  <span className="text-muted-foreground opacity-0 group-hover:opacity-100 text-xs">›</span>
                </button>
              ))}
            </div>
          )}
        </div>
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
  const addOrSetShape = (shape: string) => {
    setPendingShape(shape);
    if (selected && selected.type === "node") {
      commit(nodesRef.current.map((n: any) => (n.id === selected.id ? { ...n, shape } : n)), edgesRef.current);
    } else {
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
      let x1 = n.x, y1 = n.y + n.h, x2 = n.x + n.w, y2 = n.y;
      let heads = "";
      if (n.shape !== "line") { const ah = arrowHeadAt(x1, y1, x2, y2, hsz); heads += '<polygon points="' + ah.poly + '" fill="' + c + '"/>'; x2 = ah.bx; y2 = ah.by; }
      if (n.shape === "darrow") { const sh = arrowHeadAt(n.x + n.w, n.y, n.x, n.y + n.h, hsz); heads += '<polygon points="' + sh.poly + '" fill="' + c + '"/>'; x1 = sh.bx; y1 = sh.by; }
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
      if (e.key === "Escape") { setSelected(null); setMultiSel([]); setShapePanel(false); return; }
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

    // alças de redimensionamento (só com 1 nó selecionado)
    if (canEdit && selected && selected.type === "node" && multiSel.length <= 1) {
      const n = nodeById(selected.id);
      if (n) {
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
    if (g.kind === "drag" && g.moved) { commitFrom(g.snap, nodesRef.current, edgesRef.current); }
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
      let x1 = n.x, y1 = n.y + n.h, x2 = n.x + n.w, y2 = n.y;
      const heads: any[] = [];
      if (n.shape !== "line") { const ah = arrowHeadAt(x1, y1, x2, y2, hsz); heads.push(<polygon key="he" points={ah.poly} fill={c} />); x2 = ah.bx; y2 = ah.by; }
      if (n.shape === "darrow") { const sh = arrowHeadAt(n.x + n.w, n.y, n.x, n.y + n.h, hsz); heads.push(<polygon key="hs" points={sh.poly} fill={c} />); x1 = sh.bx; y1 = sh.by; }
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
    <div ref={wrapRef} className="relative w-full overflow-hidden select-none" style={{ height: "calc(100vh - 48px)", WebkitUserSelect: "none" }}>
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: "none", cursor: effTool === "pan" ? "grab" : "default", backgroundColor: "hsl(var(--background))" }}
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
          {/* caixa de seleção do nó */}
          {selNode && canEdit && effTool === "select" && multiSel.length <= 1 && (
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
          className="bg-transparent outline-none text-sm font-semibold text-foreground flex-1 min-w-[4rem] placeholder:text-muted-foreground/50"
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

      {/* Dica em diagrama vazio */}
      {canEdit && nodes.length === 0 && !editing && (
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
    <div ref={wrapRef} className="relative w-full overflow-hidden select-none" style={{ height: "calc(100vh - 48px)", WebkitTouchCallout: "none", WebkitUserSelect: "none" }}>
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
          className="bg-transparent outline-none text-sm font-semibold text-foreground flex-1 min-w-[4rem] placeholder:text-muted-foreground/50"
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
  const shownIcons = filteredList.map((it) => it.n);
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
            {filteredList.length + " ícones planos"}
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

function BlocksEditor({ blocks, onChange, canEdit, files, pages, onSelectPage, onCreateEmbed }: any) {
  const [focusId, setFocusId] = useState<string | null>(null);
  const [slash, setSlash] = useState<{ blockId: string; rect: DOMRect; query: string } | null>(null);
  const [mention, setMention] = useState<{ blockId: string; rect: DOMRect; query: string } | null>(null);

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
    const realType = patch.type || type;
    const next = [...list]; next[idx] = { ...cur, ...patch };

    if (realType === "divider" || realType === "sketch") {
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

  return (
    <div className="space-y-1 relative">
      {(Array.isArray(list)?list:[]).map((block, i) => (
        <div key={block.id} className="group/block relative flex items-start -ml-10 pl-10 pr-2 py-0.5">
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
              onSelectPage={onSelectPage} pages={pages} onCreateEmbed={onCreateEmbed}
              onIndent={() => indentBlock(block.id)}
              onOutdent={() => outdentBlock(block.id)}
              canEdit={canEdit} files={files} listIndex={i} allBlocks={list}
            />
          </div>
        </div>
      ))}
      {slash && (<SlashMenu triggerRect={slash.rect} query={slash.query} onSelect={(t: string) => { if (slash) convertBlock(slash.blockId, t, slash.query); }} onClose={() => setSlash(null)} />)}
      {mention && (<MentionMenu triggerRect={mention.rect} query={mention.query} pages={pages} onSelect={insertMention} onClose={() => setMention(null)} />)}
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
          let x1 = n.x, y1 = n.y + n.h, x2 = n.x + n.w, y2 = n.y;
          const heads: any[] = [];
          if (n.shape !== "line") { const ah = arrowHeadAt(x1, y1, x2, y2, hsz); heads.push(<polygon key="he" points={ah.poly} fill={c} />); x2 = ah.bx; y2 = ah.by; }
          if (n.shape === "darrow") { const sh = arrowHeadAt(n.x + n.w, n.y, n.x, n.y + n.h, hsz); heads.push(<polygon key="hs" points={sh.poly} fill={c} />); x1 = sh.bx; y1 = sh.by; }
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
    h1: "text-3xl font-bold text-foreground py-2 mt-4",
    h2: "text-2xl font-bold text-foreground py-2 mt-3",
    h3: "text-xl font-bold text-foreground py-1.5 mt-2",
    bullet: "text-[15px] leading-7 text-foreground py-0.5",
    numbered: "text-[15px] leading-7 text-foreground py-0.5",
    quote: "text-[15px] leading-7 text-foreground py-1 italic border-l-4 border-primary pl-4 my-1 bg-muted/30 rounded-r-md",
  };
  const placeholders: any = {
    paragraph: (listIndex === 0 && allBlocks?.length === 1) ? "Digite '/' para comandos, '@' para páginas" : "",
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

function ToggleBlock({ block, autoFocus, onAutoFocused, onUpdate, onSplit, onBackspace, onSlashOpen, onSlashClose, onMentionOpen, onMentionClose, onSelectPage, onPasteBlocks, canEdit, files, pages, onCreateEmbed }: any) {
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
          <BlocksEditor blocks={block.children || [newBlock()]} onChange={(next: any[]) => onUpdate({ children: next })} canEdit={canEdit} files={files} pages={pages} onSelectPage={onSelectPage} onCreateEmbed={onCreateEmbed} />
        </div>
      )}
    </div>
  );
}

function MentionMenu({ triggerRect, query, pages, onSelect, onClose }: any) {
  const q = (query || "").toLowerCase();
  const filtered = (Array.isArray(pages)?pages:[]).filter((p: any) => !p.deleted_at && (p.title || "Sem título").toLowerCase().includes(q)).slice(0, 10);
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

function SlashMenu({ triggerRect, query, onSelect, onClose }: any) {
  const filtered = SLASH_ITEMS.filter((it: any) => { if (!query) return true; const q = query.toLowerCase(); return it.label.toLowerCase().includes(q) || it.type.includes(q); });
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
      const title = (p.title || "Sem título").toLowerCase();
      const body = blocksToText(p.content || []).toLowerCase().slice(0, 500);
      const ql = q.toLowerCase().trim();
      if (!ql) return { p, score: 0, hit: "" };
      if (title.includes(ql)) return { p, score: 10, hit: p.title || "Sem título" };
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
