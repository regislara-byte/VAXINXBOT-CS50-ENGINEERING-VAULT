# USER_GUIDE.md

## VAXINXBOT CS50 Engineering Vault

Version:
v0.6

Purpose:

A local-first engineering companion for learning, documenting, and shipping software projects.

---

## Quick Start

Open:

```text
index.html
```

The application runs locally in the browser.

No installation required.

---

## Main Features

## CS50 Tutor

Provides study assistance for:

* Scratch
* Binary
* C
* Memory
* Algorithms
* Data Structures

---

## README Engine

Generate project documentation.

Commands:

```text
/readme
```

Purpose:

Create structured project documentation.

---

## VLA Engine

Visual Learning Archive support.

Commands:

```text
/vla
```

Purpose:

Track learning checkpoints using screenshots and documentation.

---

## Debug Helper

Commands:

```text
/debug
```

Purpose:

Assist with troubleshooting and code analysis.

---

## Git Helper

Commands:

```text
/git
```

Purpose:

Provide Git workflow guidance.

---

## Theme Engine

Commands:

```text
/theme
/theme dark
/theme focus
/theme soft
```

Profiles:

## Dark

Tokyo Night

Purpose:

General development.

---

## Focus

Matrix Green

Purpose:

Terminal and engineering work.

---

## Soft

Dracula Moon

Purpose:

Reading and documentation.

---

## Font Engine

Commands:

```text
/font
/font coding
/font terminal
/font reading
```

Profiles:

## Coding

JetBrains Mono

Purpose:

Programming and development.

---

## Terminal

Cascadia Code / Fira Code

Purpose:

PowerShell, Bash, Git.

---

## Reading

Inter / Segoe UI

Purpose:

Documentation and study.

---

## Chat Type Engine

Commands:

```text
/chat
/chat normal
/chat md
/chat concise
/chat explain
```

Modes:

## Normal

Balanced responses.

---

## Markdown

GitHub-ready output.

---

## Concise

Short responses.

---

## Explain

Learning-focused responses.

---

## Preset Engine

Commands:

```text
/preset
/preset tokyo
/preset matrix
/preset dracula
```

Profiles:

## Tokyo

```text
Theme     : Dark
Font      : Coding
Chat Type : Normal
```

---

## Matrix

```text
Theme     : Focus
Font      : Terminal
Chat Type : Concise
```

---

## Dracula

```text
Theme     : Soft
Font      : Reading
Chat Type : Markdown
```

---

## Notes System

Features:

* Auto-save
* Persistent storage
* Quick notes panel
* Export support

Data stored in:

```text
localStorage
```

---

## VLA Workflow

Recommended process:

```text
Learn
↓
Build
↓
Screenshot
↓
VLA Entry
↓
README Update
↓
Git Commit
↓
Push
```

---

## Documentation

Repository documents:

```text
docs/
├── ARCHITECTURE.md
├── BOT_MEMORY.md
├── CHANGELOG.md
├── IMPLEMENTATION_REGISTRY.md
├── ROADMAP.md
├── SKILLS.md
└── USER_GUIDE.md
```

---

## Deployment

Use:

```text
vaxinxbot_push.bat
```

Workflow:

```text
Double Click
↓
Git Add
↓
Git Commit
↓
Git Push
↓
GitHub Updated
```

---

## Current Version

```text
v0.6
```

Implemented:

```text
Theme Engine
Companion Layer
Typography Engine
Chat Type Engine
Preset Engine
README Engine
VLA Engine
Debug Helper
Git Helper
```

---

## Planned

```text
IMPLEMENTATION_009
Skill Engine

IMPLEMENTATION_010
File Engine

IMPLEMENTATION_011
OpenAI Provider

IMPLEMENTATION_012
Claude Provider

IMPLEMENTATION_013
MCP Connectors
```

---

## Philosophy

```text
Learn
→ Build
→ Capture
→ Document
→ Commit
→ Push
```

VAXINXBOT is designed as an engineering learning workstation, not just a chatbot.
