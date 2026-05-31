# IMPLEMENTATION_006

Status:
APPROVED

Current state:

index.html
✅ complete

style.css
✅ complete

app.js
✅ v0.2 active

README engine
✅ active

---

## TARGET

Add theme toggle + shell polish.

Generate:

app.js patch only

---

## GOAL

Add a lightweight theme system without redesigning the UI.

---

## FEATURES

### 1. THEME MODES

Add:

- dark mode
- focus mode
- soft mode

Default:

dark mode

Store selected theme in:

localStorage

---

## 2. SLASH COMMANDS

Add:

/theme
/theme dark
/theme focus
/theme soft

---

## 3. THEME BEHAVIOR

/theme

Returns available themes.

Example:

Dark
Focus
Soft

/theme dark

Applies default dark shell.

/theme focus

Applies reduced distraction mode:

- slightly darker center
- softer side panels
- less glow

/theme soft

Applies softer companion mode:

- slightly warmer background
- less contrast
- friendlier reading mode

---

## 4. VISUAL APPLICATION

Apply theme by adding class to body:

theme-dark
theme-focus
theme-soft

Do not require index.html changes.

Use JavaScript only.

If CSS variables need to change, inject a small style tag from app.js.

---

## 5. STATUS RESPONSE

After theme change, bot replies:

Theme switched to: focus

or:

Theme switched to: soft

---

## RULES

Do NOT:

- edit index.html
- rename assets
- remove existing functions
- break localStorage
- break mode switching
- remove VLA
- remove README engine

Keep current app.js structure.

Patch only what is needed.

Output:

app.js only

Stop after completion.