Implement # IMPLEMENTATION_007 as app.js patch only.

Important current state:
- Implementation 006 theme engine is already active.
- Do not rebuild the theme system.
- Only update THEME_MODES palette values and add companion behavior.

Theme palette update:
Dark  → Tokyo Night
Focus → Matrix Green Terminal
Soft  → Dracula Moon

Required:
1. Update THEME_MODES variables only:
   - dark = Tokyo Night palette
   - focus = Matrix green terminal palette
   - soft = Dracula Moon palette

2. Add companion micro-responses before longer answers:
   CS50: Let’s break it down.
   README: I’ll structure this cleanly.
   VLA: Checkpoint ready.
   Debug: Let’s isolate the issue.
   Git: Commit path prepared.

3. Randomize boot greeting text only inside existing boot message structure.

4. Typing indicator text by mode:
   CS50: vaxinxdoppio is thinking…
   README: structuring markdown…
   VLA: indexing checkpoint…
   Debug: tracing issue…
   Git: preparing command…

5. Add subtle response footer:
   CS50: Study → Build → Test
   README: Copy → Polish → Commit
   VLA: Capture → Index → Push
   Debug: Isolate → Test → Fix
   Git: Stage → Commit → Push

Rules:
- Output app.js only.
- Do not edit index.html.
- Do not edit style.css.
- Do not remove slash commands.
- Do not break README copy/download buttons.
- Do not break VLA generator.
- Keep responses short and clean.