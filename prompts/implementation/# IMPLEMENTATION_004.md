# IMPLEMENTATION_004

Status:
APPROVED

Current project state:

index.html
✅ complete

style.css
✅ complete

app.js
✅ complete

UI is alive in browser.

---

## TARGET

Upgrade CS50-CHATBOT-001 from static local tutor into improved learning companion.

Generate:

app.js update only

---

## GOAL

Improve the interaction logic.

Keep:

- existing HTML
- existing CSS
- existing folders
- current visual design
- mascot
- VLA checkpoint system

Do NOT redesign.

---

## REQUIRED FEATURES

### 1. BETTER MODE RESPONSES

Improve responses for:

- Explain CS50
- README
- VLA
- Debug
- Git

Make responses more useful, concise, and structured.

---

### 2. CS50 TOPIC DETECTION

Add better detection for:

- binary
- ASCII
- Unicode
- algorithm
- pseudocode
- Scratch
- C
- variables
- loops
- conditionals
- functions
- arrays
- memory
- pointers
- SQL
- HTML
- CSS
- JavaScript

---

### 3. VLA GENERATOR UPGRADE

When user asks in VLA mode, generate:

```md
## VLA-XXX — Title

File:
checkpoint_XXX_title.png

Purpose:

Notes:

Status:
ACTIVE

Next Action:
```

Also suggest:

```bash
git add .
git commit -m "vla: checkpoint XXX — title"
git push
```

---

### 4. GIT HELPER UPGRADE

Generate commit messages based on user text.

Examples:

If user says:
"first UI alive"

Return:

```bash
git add .
git commit -m "checkpoint: first UI alive"
git push
```

If user says:
"vla checkpoint 014"

Return:

```bash
git add .
git commit -m "vla: checkpoint 014"
git push
```

---

### 5. QUICK COMMANDS

Add slash-style helpers:

```text
/help
/modes
/clear
/export
/vla
/git
/readme
/debug
```

---

### 6. MEMORY SUMMARY

Add a simple memory summary function.

When user types:

```text
/summary
```

Return:

- current mode
- message count
- notes status
- checkpoint count
- project status

---

### 7. SAFETY

Do not execute code.

Only generate helper text.

This is local-first browser logic.

---

## RULES

Do NOT:

- edit index.html
- edit style.css
- rename assets
- remove VLA
- break existing IDs
- change folder structure

Use current app.js.

Output:

app.js only

Stop after completion.