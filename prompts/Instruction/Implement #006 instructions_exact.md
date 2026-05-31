Implement # IMPLEMENTATION_006 exactly.

Rules:
- Output app.js only.
- Do not edit index.html.
- Do not remove existing functions.
- Preserve localStorage, mode switching, VLA, README engine, notes, export, and checkpoint modal.
- Add theme system only by patching app.js.

Required:
- Add theme key to KEYS.
- Add state.theme default: dark.
- Add THEME_MODES: dark, focus, soft.
- Add injectThemeStyles().
- Add applyTheme(theme).
- Add saveTheme/load theme.
- Add slash commands:
  /theme
  /theme dark
  /theme focus
  /theme soft
- /theme lists Dark, Focus, Soft.
- Theme applies body classes:
  theme-dark
  theme-focus
  theme-soft
- Store selected theme in localStorage.
- Call injectThemeStyles() and applyTheme(state.theme) during boot().
- Reply: Theme switched to: focus / soft / dark.