# IMPLEMENTATION_009.md

TITLE:

Skill Engine + Workspace Modes

---

MISSION:

Transform CS50-CHATBOT-001 from a chatbot into an Engineering Learning Workstation.

---

STATUS:

PLANNED

---

## GOAL

Introduce a Skill Engine that allows VAXINXBOT to switch between engineering disciplines.

Each skill provides:

* shortcuts
* examples
* cheat sheets
* recommended commands
* contextual companion responses

---

## STORAGE

State:

```text
skill: "cs50"
```

localStorage:

```text
cs50bot_skill
```

Functions:

```text
saveSkill()
loadSkill()
```

Restore automatically during boot.

Must follow the same architecture used by:

```text
Theme Engine
Font Engine
Chat Type Engine
```

---

## SKILL COMMANDS

Add:

```text
/skill
/skill cs50
/skill powershell
/skill bash
/skill git
/skill html
/skill css
/skill javascript
/skill python
/skill sql
/skill node
```

Default:

```text
/skill cs50
```

---

## SKILL CATEGORIES

### Learning

```text
CS50
```

---

### Engineering

```text
PowerShell
Bash
Git
Node.js
```

---

### Web Development

```text
HTML
CSS
JavaScript
```

---

### Programming

```text
Python
SQL
```

---

## SKILL BEHAVIOR

### CS50

Purpose:

Course guidance and learning support.

Focus:

```text
Algorithms
Data Structures
Memory
Problem Solving
```

---

### PowerShell

Purpose:

Windows automation and navigation.

Focus:

```text
Folders
VS Code
Scripts
Automation
```

---

### Bash

Purpose:

Linux shell operations.

Focus:

```text
Commands
Permissions
Automation
```

---

### Git

Purpose:

Version control.

Focus:

```text
Clone
Commit
Push
Branch
Merge
```

---

### HTML

Purpose:

Web structure.

Focus:

```text
Semantic HTML
Accessibility
Layout
```

---

### CSS

Purpose:

Visual styling.

Focus:

```text
Flexbox
Grid
Responsive Design
```

---

### JavaScript

Purpose:

Frontend logic.

Focus:

```text
DOM
Events
localStorage
Modules
```

---

### Python

Purpose:

Automation and scripting.

Focus:

```text
Files
Parsing
Automation
Cybersecurity Tools
```

---

### SQL

Purpose:

Data management.

Focus:

```text
Queries
Filters
Joins
Aggregations
```

---

### Node.js

Purpose:

Backend JavaScript.

Focus:

```text
npm
Packages
Express
Servers
```

---

## SUMMARY INTEGRATION

Update:

```text
/summary
```

Display:

```text
Theme
Font
Chat Type
Preset
Skill
```

Example:

```text
Theme     : Tokyo Night
Font      : Coding
Chat Type : Explain
Preset    : Student
Skill     : CS50
```

---

## PRESET INTEGRATION

### Engineer

```text
Theme   : Matrix
Font    : Terminal
Chat    : Concise
Skill   : PowerShell
```

---

### Developer

```text
Theme   : Tokyo Night
Font    : Coding
Chat    : Normal
Skill   : JavaScript
```

---

### Student

```text
Theme   : Dracula Moon
Font    : Reading
Chat    : Explain
Skill   : CS50
```

---

## SUCCESS CRITERIA

Implementation_009 is complete when:

* /skill command exists
* Skill state persists
* Skill restores on boot
* Skill appears in /summary
* Presets update skill correctly
* Existing commands remain functional
* Theme Engine remains functional
* Font Engine remains functional
* Chat Type Engine remains functional

---

## VLA CHECKPOINT

Checkpoint:

```text
VLA-009
Skill Engine Foundation
```

Suggested Screenshot:

```text
/skill cs50
/skill powershell
/skill git
/skill javascript
```

Status:

```text
ACTIVE
```

---

## SAFETY

Do NOT:

* break Theme Engine
* break Font Engine
* break Chat Type Engine
* break Preset Engine
* break Notes
* break Export
* break localStorage

---

## FUTURE COMPATIBILITY

Reserved for:

```text
IMPLEMENTATION_010
```

Planned:

```text
File Engine
PDF Summaries
Lesson Generator
Quiz Generator
Markdown Export
```

Do not implement yet.

---

## OUTPUT

Generate:

```text
app.js only
```

Stop after completion.
