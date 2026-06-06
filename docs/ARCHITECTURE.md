# ARCHITECTURE.md

## VAXINXBOT CS50 Engineering Vault

Version:
v0.2+

Purpose:

A local-first engineering companion designed to support:

* CS50 learning
* Documentation
* Git workflows
* VLA tracking
* Future AI integration

---

## Philosophy

Learn
→ Build
→ Capture
→ Document
→ Commit
→ Push

---

## Current Architecture

```text
VAXINXBOT/
│
├── assets/
│
├── css/
│   └── style.css
│
├── js/
│   └── app.js
│
├── docs/
│   ├── BOT_MEMORY.md
│   ├── ROADMAP.md
│   ├── ARCHITECTURE.md
│   └── CLAUDE_RULES.md
│
├── modules/
│   ├── cs50/
│   ├── readme/
│   ├── vla/
│   ├── debug/
│   └── githelper/
│
├── prompts/
│   ├── implementation/
│   └── instruction/
│
└── VLA/
```

---

## Layer Model

Layer 1

UI Layer

Responsibilities:

* Chat interface
* Notes
* Checkpoints
* Navigation

---

Layer 2

Workspace Layer

Responsibilities:

* Modes
* Themes
* Typography
* Presets

Components:

```text
Theme Engine
Typography Engine
Preset Engine
```

---

Layer 3

Engineering Layer

Planned

Components:

```text
PowerShell Mode
Bash Mode
Git Mode
Python Mode
Node Mode
Web Mode
SQL Mode
```

Purpose:

Provide workspace-specific engineering assistance.

---

Layer 4

Documentation Layer

Components:

```text
README Engine
VLA Engine
Export Engine
```

Purpose:

Transform learning into reusable artifacts.

---

Layer 5

AI Layer

Planned

Providers:

```text
OpenAI
Claude
Local Provider
```

Purpose:

Provide AI-assisted engineering workflows.

---

Layer 6

MCP Layer

Planned

Integrations:

```text
GitHub MCP
Filesystem MCP
Browser MCP
Documentation MCP
```

Purpose:

Allow actions beyond chat.

---

Layer 7

React Layer

Future

```text
src/
├── components/
├── providers/
├── engines/
└── App.jsx
```

Purpose:

Replace monolithic app.js architecture.

---

## Implementation Registry

```text
001 Foundation UI            ✅
002 Local Storage            ✅
003 README Engine            ✅
004 VLA Engine               ✅
005 Study Logic              ✅
006 Theme Engine             ✅
007 Companion Personality    ✅
008 Typography + Presets     🔄
009 Engineering Modes        Planned
010 Documentation Layer      Planned
011 OpenAI Provider          Planned
012 Claude Provider          Planned
013 MCP Layer                Planned
014 React Migration          Planned
```

---

## Engineering Rule

Do not build features randomly.

All new implementations must fit:

```text
UI
↓
Workspace
↓
Engineering
↓
Documentation
↓
AI
↓
MCP
↓
React
```

---

## Final Vision

VAXINXBOT

=

CS50 Tutor

*

Engineering Workspace

*

Documentation Forge

*

VLA Archive

*

AI Assistant

*

GitHub Companion

Goal:

A personal engineering operating system for learning, documenting, and shipping projects.
