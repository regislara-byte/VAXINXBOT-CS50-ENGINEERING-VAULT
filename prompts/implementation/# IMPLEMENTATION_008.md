# IMPLEMENTATION_008

Status:
READY

Version:
Foundation Locked Edition v2

Prerequisites:

* IMPLEMENTATION_006 complete
* IMPLEMENTATION_007 complete

Theme Engine already active.

Companion Personality already active.

---

# TARGET

Add:

Typography Engine
+
Chat Type Engine
+
Preset Engine

Generate:

app.js patch only

---

# GOAL

Improve:

* readability
* coding comfort
* workspace personality
* output control

Typography should help distinguish:

0 vs O

1 vs l vs I

Chat Type should isolate response style from chatbot intelligence.

---

# FEATURES

## 1. FONT ENGINE

Add commands:

```text
/font
/font coding
/font terminal
/font reading
```

Default:

```text
coding
```

---

## 2. STORAGE

Store:

```text
localStorage
```

Key:

```text
cs50bot_font
```

Add:

```text
saveFont()
loadFont()
```

Restore automatically on startup.

Must behave exactly like Theme Engine persistence.

---

## 3. STATE

Add:

```text
state.font
```

Default:

```text
coding
```

---

## 4. FONT PROFILES

### coding

Purpose:

General development

Use:

```text
JetBrains Mono
```

Focus:

* clear zero
* clear O
* clear one
* clear l
* clear I

Best for:

```text
CS50
HTML
CSS
JavaScript
Python
GitHub
```

---

### terminal

Purpose:

PowerShell
Git
Bash
Matrix workspace

Use:

```text
Cascadia Code
Fira Code
monospace
```

Best for:

```text
Terminal
Commands
Automation
```

---

### reading

Purpose:

CS50 study
README generation
Documentation

Use:

```text
Inter
Segoe UI
sans-serif
```

Best for:

```text
Notes
Documentation
Learning
```

---

## 5. BODY CLASSES

Apply:

```text
font-coding
font-terminal
font-reading
```

Requirements:

* No index.html changes
* No style.css changes
* app.js only
* Inject style block if required

---

# CHAT TYPE ENGINE

## 6. CHAT TYPES

Add commands:

```text
/chat
/chat normal
/chat md
/chat concise
/chat explain
```

Default:

```text
normal
```

---

## 7. CHAT STORAGE

Store:

```text
localStorage
```

Key:

```text
cs50bot_chatType
```

State:

```text
state.chatType
```

Add:

```text
saveChatType()
loadChatType()
```

Restore automatically on startup.

---

## 8. CHAT MODES

### normal

Purpose:

Balanced chatbot replies.

Behavior:

* friendly
* useful
* moderate length

---

### md

Purpose:

Markdown-first output.

Behavior:

* headings
* bullet lists
* fenced code blocks
* GitHub-ready output

Best for:

```text
README
VLA
Documentation
GitHub
```

---

### concise

Purpose:

Fast response mode.

Behavior:

* short answers
* command-first
* reduced explanation

Best for:

```text
Terminal
Debug
Git
```

---

### explain

Purpose:

Learning mode.

Behavior:

* explain concepts
* show examples
* step-by-step breakdowns

Rules:

Do not reveal internal chain-of-thought.

Only provide concise educational explanations.

Best for:

```text
CS50
Debugging
Learning
```

---

## 9. CHAT BODY CLASSES

Apply:

```text
chat-normal
chat-md
chat-concise
chat-explain
```

No index.html changes.

No style.css changes.

Patch app.js only.

---

# PRESET ENGINE

## 10. PRESETS

Add commands:

```text
/preset
/preset tokyo
/preset matrix
/preset dracula
```

---

### tokyo

Apply:

```text
theme dark
font coding
chat normal
```

Description:

```text
VS Code Development Mode
```

---

### matrix

Apply:

```text
theme focus
font terminal
chat concise
```

Description:

```text
Terminal Engineering Mode
```

---

### dracula

Apply:

```text
theme soft
font reading
chat md
```

Description:

```text
Study & Documentation Mode
```

---

## 11. PRESET PERSISTENCE

Presets must update:

```text
theme
font
chatType
```

and save immediately.

Example:

```text
/preset matrix

theme    = focus
font     = terminal
chatType = concise
```

---

## 12. COMMAND RESPONSES

/font

Returns:

```text
Coding
Terminal
Reading
```

Show:

```text
Current Font
```

---

/chat

Returns:

```text
Normal
Markdown
Concise
Explain
```

Show:

```text
Current Chat Type
```

---

Examples:

```text
Font switched to: terminal

Chat type switched to: md

Preset activated: matrix
```

---

## 13. BOOT RESTORE

On startup restore:

```text
theme
font
chatType
```

from localStorage.

Must follow Theme Engine architecture.

---

## 14. SUMMARY

Update:

```text
/summary
```

Include:

```text
Theme
Font
Chat Type
Preset
```

Example:

```text
Theme     : focus
Font      : terminal
Chat Type : concise
Preset    : matrix
```

---

## 15. VLA CHECKPOINT

Create support for:

```text
VLA-008
Typography Engine Online
```

Suggested screenshot:

```text
/font coding
/font terminal
/font reading

/chat normal
/chat md
/chat concise
/chat explain

/preset matrix
```

Status:

```text
ACTIVE
```

---

# SAFETY

Do NOT:

* edit index.html
* edit style.css
* rename assets
* remove slash commands
* break Theme Engine
* break Companion Layer
* break README Engine
* break VLA Engine
* break Notes
* break Export
* break localStorage

Patch:

```text
app.js only
```

---

# FUTURE COMPATIBILITY

Reserve for:

```text
IMPLEMENTATION_009
```

Planned commands:

```text
/skill powershell
/skill bash
/skill git
/skill node
/skill python
/skill web
/skill sql
```

Do NOT implement Skill Engine yet.

Only prepare compatibility.

---

## Future Modules

```text
modules/
├── theme/
├── typography/
├── chattypes/
├── presets/
└── skills/
```

Implementation_008 must remain compatible with future module extraction.

---

## Reserved Fonts

Current:

```text
JetBrains Mono
Cascadia Code
Fira Code
Inter
```

Future:

```text
Source Code Pro
IBM Plex Mono
Roboto Mono
```

Reserve only.

Do not implement.

---

# OUTPUT

Generate:

```text
app.js only
```

Stop after completion.
