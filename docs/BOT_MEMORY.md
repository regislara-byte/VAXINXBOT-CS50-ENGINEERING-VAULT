# BOT_MEMORY.md

## Project
CS50-CHATBOT-001 / VAXINXBOT CS50 Engineering Vault

## Purpose
Build a local-first CS50 engineering companion that helps with:

- CS50 study
- README generation
- VLA checkpoint logging
- Git workflow
- Debug support
- PowerShell / Bash / Node / Python / Web / SQL guidance
- Future AI API integration

## Core Workflow
Learn → Build → Capture → Document → Commit → Push

## Current Architecture

```text
VAXINXBOT/
├── assets/
├── css/
│   └── style.css
├── docs/
│   ├── BOT_MEMORY.md
│   ├── ROADMAP.md
│   └── USER_GUIDE.md
├── js/
│   └── app.js
├── modules/
│   ├── cs50/
│   ├── debug/
│   ├── githelper/
│   ├── jaglotl/
│   ├── readme/
│   └── vla/
├── prompts/
│   ├── implementation/
│   └── Instruction/
└── updates/
