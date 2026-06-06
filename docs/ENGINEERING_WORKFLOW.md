# ENGINEERING_WORKFLOW.md

# VAXINXBOT Engineering Workflow

Version:
1.0

Last Updated:
2026-05-29

Owner:
Regis Lara

Project:
VAXINXBOT CS50 Engineering Vault

---

## Purpose

Provide a repeatable implementation lifecycle
for all VAXINXBOT development.

This workflow is mandatory for all future
IMPLEMENTATION_xxx milestones.

---

## Source of Truth

This document defines the official development workflow.

If conflicts occur between implementation files,
roadmaps, notes, or future specifications,
this workflow takes precedence.

---

## Engineering Lifecycle

Every implementation follows the same lifecycle.

```text
Idea
↓
Architecture Review
↓
Implementation_xxx.md
↓
Claude / AI Implementation
↓
Code Patch
↓
Testing
↓
VLA Screenshot
↓
CHANGELOG Update
↓
IMPLEMENTATION_REGISTRY Update
↓
Git Commit
↓
Push.bat
↓
GitHub Archive
```

---

## Documentation Rule

Before adding new features, review:

```text
BOT_MEMORY.md
ARCHITECTURE.md
ROADMAP.md
IMPLEMENTATION_REGISTRY.md
SKILLS.md
CHANGELOG.md
ENGINEERING_WORKFLOW.md
```

---

## VLA Rule

Every completed implementation requires:

```text
VLA Screenshot
Implementation Reference
Git Commit
Registry Update
```

VLA serves as visual evidence of project evolution.

---

## Engineering Rule

Structure before features.

Documentation before expansion.

Architecture before implementation.

Consistency before complexity.

---

## Deployment Rule

Final deployment sequence:

```text
Implement
↓
Test
↓
Capture VLA
↓
Update Docs
↓
Git Commit
↓
Push.bat
↓
GitHub
```

---

## Documentation Stack

```text
BOT_MEMORY.md
     ↓
ARCHITECTURE.md
     ↓
ENGINEERING_WORKFLOW.md
     ↓
IMPLEMENTATION_REGISTRY.md
     ↓
IMPLEMENTATION_xxx.md
     ↓
CHANGELOG.md
```

Purpose:

```text
BOT_MEMORY.md
    = Project Brain

ARCHITECTURE.md
    = System Brain

ENGINEERING_WORKFLOW.md
    = Process Brain

IMPLEMENTATION_REGISTRY.md
    = Project History

IMPLEMENTATION_xxx.md
    = Engineering Specifications

CHANGELOG.md
    = Release History
```

---

## Motto

Learn
→ Build
→ Capture
→ Document
→ Commit
→ Push

---

## VAXINXBOT Principle

Markdown is the specification.

Code is the implementation.

VLA is the evidence.

GitHub is the archive.

---

## Workflow Seal

No feature is considered complete until:

* Implementation is documented
* Testing is completed
* VLA evidence exists
* Registry is updated
* Changelog is updated
* Code is pushed to GitHub

Implementation without documentation is incomplete.

Documentation without deployment is incomplete.

Deployment without history is incomplete.

---

## Final Principle

Build systems that can grow.

Document systems that can be understood.

Preserve systems that can be improved.

Ship systems that can be used.

---

Status:

LOCKED

Reference:

Required for all future implementations.
