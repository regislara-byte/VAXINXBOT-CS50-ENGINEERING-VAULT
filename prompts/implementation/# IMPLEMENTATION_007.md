# IMPLEMENTATION_007

Status:
READY AFTER IMPLEMENTATION_006

Current state:

Theme system
pending

---

## TARGET

Add companion behavior + typing personality.

Generate:

app.js patch only

---

## GOAL

Make vaxinxdoppio feel more like a friendly CS50 study companion.

---

## FEATURES

### 1. COMPANION MICRO-RESPONSES

Add small optional messages before longer answers.

Examples:

CS50 mode:

"Let’s break it down."

README mode:

"I’ll structure this cleanly."

VLA mode:

"Checkpoint ready."

Debug mode:

"Let’s isolate the issue."

Git mode:

"Commit path prepared."

---

## 2. RANDOMIZED BOOT GREETINGS

On first load, show one of:

- CS50-CHATBOT-001 initialized.
- vaxinxdoppio online.
- Study shell ready.
- Tree Structure + VLA loaded.
- Local tutor mode active.

Do not remove the existing boot message structure.

---

## 3. TYPING PERSONALITY

Update typing indicator text based on mode:

CS50:
vaxinxdoppio is thinking…

README:
structuring markdown…

VLA:
indexing checkpoint…

Debug:
tracing issue…

Git:
preparing command…

---

## 4. RESPONSE FOOTER

For generated responses, add a small ending line depending on mode:

CS50:
Study → Build → Test

README:
Copy → Polish → Commit

VLA:
Capture → Index → Push

Debug:
Isolate → Test → Fix

Git:
Stage → Commit → Push

Keep it subtle.

---

## 5. SAFETY

Do not make responses too long.

Do not overwrite core engines.

Do not break README copy/download buttons.

Do not break VLA generator.

---

## RULES

Do NOT:

- edit index.html
- edit style.css unless absolutely necessary
- rename classes
- rename assets
- remove localStorage
- remove existing slash commands

Patch app.js only.

Output:

app.js only

Stop after completion.