# PROJECT: CS50-CHATBOT-001

Role:
You are the implementation engineer.

Goal:
Build a local-first HTML chatbot called:

CS50-CHATBOT-001

Purpose:
Create a lightweight learning companion for CS50.

Functions:

- Explain CS50 topics
- Generate README sections
- Create VLA entries
- Debug notes
- Track checkpoints
- Git helper commands
- Store local progress

---

## EXISTING ROOT

Use this structure exactly.

CS50-CHATBOT-001/

├── assets/
│   ├── vaxinxdoppio_chatbot.png
│   └── vaxinxdoppio1.png
│
├── css/
│   └── style.css
│
├── docs/
│   ├── BOT_MEMORY.md
│   ├── ROADMAP.md
│   └── USER_GUIDE.md
│
├── js/
│   └── app.js
│
├── memory/
│   ├── messages.json
│   ├── notes.json
│   └── checkpoints.json
│
├── modules/
│   ├── cs50/
│   ├── debug/
│   ├── githelper/
│   ├── jaglotl/
│   ├── readme/
│   └── vla/
│
├── prompts/
│   ├── cs50_prompt.md
│   ├── debug_prompt.md
│   ├── readme_prompt.md
│   └── vla_prompt.md
│
├── VLA/
│   ├── checkpoint_001_boot.png
│   ├── checkpoint_002_ui.png
│   ├── checkpoint_003_logic.jpeg
│   ├── checkpoint_004_terminal_awakened.jpeg
│   ├── checkpoint_005_code_dot_unlock.jpeg
│   ├── checkpoint_006_cs50_first_contact.png
│   ├── checkpoint_007_chatbot_birth.jpeg
│   ├── VLA.md
│   └── VLA_INDEX.md
│
├── config.json
├── index.html
└── README.md

---

## PHASE 1 — UI

Create:

- index.html
- style.css
- app.js

Layout:

LEFT PANEL

Show:

- mascot image
- mode buttons

Buttons:

[Explain CS50]
[README]
[VLA]
[Debug]
[Git]

CENTER

Chat window

Header:

CS50-CHATBOT-001

Subtitle:

Tree Structure + VLA

Bottom:

Input field

Send button

RIGHT PANEL

Checkpoint viewer

Display:

VLA-001
VLA-002
VLA-003
VLA-004
VLA-005
VLA-006
VLA-007

---

## PHASE 2 — LOCAL MEMORY

Create memory objects:

messages[]
notes[]
checkpoints[]

Use:

localStorage

Persist:

- chat history
- notes
- checkpoints

---

## PHASE 3 — MODE LOGIC

Explain CS50

Return:

- CS50 topic helper
- beginner explanation
- study notes

README

Generate:

markdown blocks

VLA

Generate:

## VLA-XXX

File:

Notes:

Debug

Return:

- debugging checklist
- test flow
- issue review

Git

Return:

git add .
git commit -m ""
git push

---

## PHASE 4 — VISUAL STYLE

Theme:

Dark UI

Accent:

Blue

Mascot:

vaxinxdoppio_chatbot.png

Character role:

Friendly tutor

NOT:

- Cyber dashboard
- NetGuard
- SOC interface

This is:

CS50 companion mode

---

## PHASE 5 — ROADMAP

Prepare:

v0.1

Static tutor UI

v0.2

Local memory

v0.3

Notes

v0.4

History

v0.5

Tutor mode

v1.0

CS50-CHATBOT-001

Future:

GitHub Pages
API mode
Expanded tutor logic

---

## RULES

Keep:

Tree Structure

VLA indexing

Checkpoint logic

Project-first learning

Workflow:

Build → Test → Document → Deploy

Do NOT:

- redesign folders
- rename assets
- delete VLA files
- remove checkpoints

Reuse:

- VLA_INDEX.md
- VLA.md
- existing screenshots
- mascot assets

Implementation mode:

Generate only:

1. index.html
2. style.css
3. app.js

Stop after each file.

Wait for approval before continuing.

Target deployment path:

Local
→ GitHub
→ Pages
→ Future API

Start with:

index.html