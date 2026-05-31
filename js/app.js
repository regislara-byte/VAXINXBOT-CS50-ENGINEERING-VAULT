/* ═══════════════════════════════════════════════════════
   CS50-CHATBOT-001 · app.js  v0.2
   Phase: Upgraded Interaction + Smart Responses
   Build → Test → Document → Deploy
═══════════════════════════════════════════════════════ */

'use strict';

/* ── STORAGE KEYS ───────────────────────────────────── */
const KEYS = {
  messages:    'cs50bot_messages',
  notes:       'cs50bot_notes',
  checkpoints: 'cs50bot_checkpoints',
  activeMode:  'cs50bot_activeMode',
  theme:       'cs50bot_theme',
};

/* ── STATE ───────────────────────────────────────────── */
const state = {
  mode:        'cs50',
  messages:    [],
  notes:       '',
  checkpoints: {},
  theme:       'dark',
};

/* ── DOM REFS ────────────────────────────────────────── */
const $ = id => document.getElementById(id);

const DOM = {
  modeNav:         $('modeNav'),
  modeChip:        $('modeChip'),
  modeBadgeMini:   $('modeBadgeMini'),
  chatMessages:    $('chatMessages'),
  chatInput:       $('chatInput'),
  sendBtn:         $('sendBtn'),
  clearBtn:        $('clearBtn'),
  typingIndicator: $('typingIndicator'),
  checkpointList:  $('checkpointList'),
  checkpointCount: $('checkpointCount'),
  quickNote:       $('quickNote'),
  saveNoteBtn:     $('saveNoteBtn'),
  exportBtn:       $('exportBtn'),
  cpModal:         $('cpModal'),
  cpModalClose:    $('cpModalClose'),
  cpModalImg:      $('cpModalImg'),
  cpModalLabel:    $('cpModalLabel'),
};

/* ── MODE DEFINITIONS ────────────────────────────────── */
const MODES = {
  cs50:   { label: 'CS50',   chip: 'MODE: CS50'   },
  readme: { label: 'README', chip: 'MODE: README' },
  vla:    { label: 'VLA',    chip: 'MODE: VLA'    },
  debug:  { label: 'DEBUG',  chip: 'MODE: DEBUG'  },
  git:    { label: 'GIT',    chip: 'MODE: GIT'    },
};

/* ── VLA CHECKPOINT META ─────────────────────────────── */
const VLA_META = {
  '001': { name: 'Boot',              img: 'VLA/checkpoint_001_boot.png' },
  '002': { name: 'UI',                img: 'VLA/checkpoint_002_ui.png' },
  '003': { name: 'Logic',             img: 'VLA/checkpoint_003_logic.jpeg' },
  '004': { name: 'Terminal Awakened', img: 'VLA/checkpoint_004_terminal_awakened.jpeg' },
  '005': { name: 'Code.dot Unlock',   img: 'VLA/checkpoint_005_code_dot_unlock.jpeg' },
  '006': { name: 'CS50 First Contact',img: 'VLA/checkpoint_006_cs50_first_contact.png' },
  '007': { name: 'Chatbot Birth',     img: 'VLA/checkpoint_007_chatbot_birth.jpeg' },
};

/* ══════════════════════════════════════════════════════
   LOCAL STORAGE
══════════════════════════════════════════════════════ */
const store = {
  get(key, fallback = null) {
    try { const r = localStorage.getItem(key); return r !== null ? JSON.parse(r) : fallback; }
    catch { return fallback; }
  },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} },
};

const saveMessages    = () => store.set(KEYS.messages,    state.messages);
const saveNotes       = () => store.set(KEYS.notes,       state.notes);
const saveCheckpoints = () => store.set(KEYS.checkpoints, state.checkpoints);
const saveMode        = () => store.set(KEYS.activeMode,  state.mode);
const saveTheme       = () => store.set(KEYS.theme,       state.theme);

function loadAll() {
  state.messages    = store.get(KEYS.messages,    []);
  state.notes       = store.get(KEYS.notes,       '');
  state.checkpoints = store.get(KEYS.checkpoints, {});
  state.mode        = store.get(KEYS.activeMode,  'cs50');
  state.theme       = store.get(KEYS.theme,       'dark');
}

/* ══════════════════════════════════════════════════════
   THEME SYSTEM
══════════════════════════════════════════════════════ */

const THEME_MODES = {
  dark: {
    label: 'Dark',
    desc:  'Tokyo Night — deep navy, vivid cyan, crisp contrast.',
    vars: {
      '--bg-shell':      '#1a1b2e',
      '--bg-panel':      '#16213e',
      '--bg-panel-alt':  '#1a2344',
      '--bg-card':       '#1f2b50',
      '--bg-card-hover': '#253460',
      '--bg-input':      '#131729',
      '--blue':          '#7aa2f7',
      '--blue-glow':     'rgba(122,162,247,0.18)',
      '--blue-glow-md':  'rgba(122,162,247,0.36)',
      '--text-primary':  '#c0caf5',
      '--text-secondary':'#6b7db3',
      '--text-muted':    '#3b4a6b',
      '--border':        'rgba(122,162,247,0.13)',
      '--border-active': 'rgba(122,162,247,0.42)',
      '--shadow-blue':   '0 0 18px rgba(122,162,247,0.28)',
      '--amber':         '#e0af68',
      '--amber-glow':    'rgba(224,175,104,0.14)',
      '--border-amber':  'rgba(224,175,104,0.30)',
    },
  },
  focus: {
    label: 'Focus',
    desc:  'Matrix Green — terminal phosphor, pure concentration.',
    vars: {
      '--bg-shell':      '#0a0c0a',
      '--bg-panel':      '#0d100d',
      '--bg-panel-alt':  '#101410',
      '--bg-card':       '#141a14',
      '--bg-card-hover': '#182018',
      '--bg-input':      '#090b09',
      '--blue':          '#39ff14',
      '--blue-glow':     'rgba(57,255,20,0.10)',
      '--blue-glow-md':  'rgba(57,255,20,0.22)',
      '--text-primary':  '#b0ffb0',
      '--text-secondary':'#4a7a4a',
      '--text-muted':    '#254025',
      '--border':        'rgba(57,255,20,0.09)',
      '--border-active': 'rgba(57,255,20,0.30)',
      '--shadow-blue':   '0 0 12px rgba(57,255,20,0.18)',
      '--amber':         '#39ff14',
      '--amber-glow':    'rgba(57,255,20,0.10)',
      '--border-amber':  'rgba(57,255,20,0.25)',
    },
  },
  soft: {
    label: 'Soft',
    desc:  'Dracula Moon — purple dusk, warm reading light.',
    vars: {
      '--bg-shell':      '#191624',
      '--bg-panel':      '#1e1a2e',
      '--bg-panel-alt':  '#221d34',
      '--bg-card':       '#2a2440',
      '--bg-card-hover': '#312b4a',
      '--bg-input':      '#16132a',
      '--blue':          '#bd93f9',
      '--blue-glow':     'rgba(189,147,249,0.14)',
      '--blue-glow-md':  'rgba(189,147,249,0.28)',
      '--text-primary':  '#f8f8f2',
      '--text-secondary':'#8b85a8',
      '--text-muted':    '#4e4868',
      '--border':        'rgba(189,147,249,0.12)',
      '--border-active': 'rgba(189,147,249,0.38)',
      '--shadow-blue':   '0 0 16px rgba(189,147,249,0.22)',
      '--amber':         '#ffb86c',
      '--amber-glow':    'rgba(255,184,108,0.14)',
      '--border-amber':  'rgba(255,184,108,0.30)',
    },
  },
};

/* Inject a <style> tag that overrides CSS vars on :root */
function injectThemeStyles() {
  let tag = document.getElementById('cs50-theme-vars');
  if (!tag) {
    tag = document.createElement('style');
    tag.id = 'cs50-theme-vars';
    document.head.appendChild(tag);
  }
  const theme = THEME_MODES[state.theme] || THEME_MODES.dark;
  const rules = Object.entries(theme.vars)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n');
  tag.textContent = `:root {\n${rules}\n}`;
}

/* Apply theme: set body class + inject vars + save */
function applyTheme(theme) {
  if (!THEME_MODES[theme]) return;
  state.theme = theme;
  saveTheme();
  document.body.classList.remove('theme-dark', 'theme-focus', 'theme-soft');
  document.body.classList.add(`theme-${theme}`);
  injectThemeStyles();
}

/* ══════════════════════════════════════════════════════
   SLASH COMMANDS
══════════════════════════════════════════════════════ */
const SLASH_HELP = `**Slash Commands**

\`/help\`        — show this command list
\`/modes\`       — list all available modes
\`/theme\`       — list available themes
\`/theme dark\`  — default dark shell
\`/theme focus\` — reduced distraction mode
\`/theme soft\`  — warm companion mode
\`/clear\`       — clear chat history
\`/export\`      — export notes + chat to .txt
\`/summary\`     — show memory & project status
\`/vla\`         — switch to VLA mode
\`/git\`         — switch to Git mode
\`/readme\`      — switch to README mode
\`/debug\`       — switch to Debug mode
\`/cs50\`        — switch to CS50 mode

**Tips:**
- Press **F1–F5** to switch modes instantly
- **Enter** sends · **Shift+Enter** adds a newline
- Click any checkpoint card to preview the screenshot`;

const SLASH_MODES = `**Available Modes**

📘 **CS50** (F1) — explains topics: loops, pointers, algorithms, SQL, HTML, and more
📄 **README** (F2) — generates structured README.md blocks
🗂️ **VLA** (F3) — creates VLA checkpoint entries with git commit
🐛 **Debug** (F4) — step-by-step debug checklist + error review
🌿 **Git** (F5) — generates commit messages and common git commands

Switch by clicking the mode button or typing \`/modename\`.`;

function handleSlash(input) {
  const cmd = input.trim().toLowerCase();

  if (cmd === '/help')   return SLASH_HELP;
  if (cmd === '/modes')  return SLASH_MODES;
  if (cmd === '/summary') return buildSummary();

  // Theme commands
  if (cmd === '/theme') {
    const current = THEME_MODES[state.theme]?.label || 'Dark';
    return `**Available Themes** *(current: ${current})*

🌑 \`/theme dark\`  — ${THEME_MODES.dark.desc}
🔵 \`/theme focus\` — ${THEME_MODES.focus.desc}
🟣 \`/theme soft\`  — ${THEME_MODES.soft.desc}`;
  }
  if (cmd === '/theme dark')  { applyTheme('dark');  return '> Theme switched to: **dark**'; }
  if (cmd === '/theme focus') { applyTheme('focus'); return '> Theme switched to: **focus**'; }
  if (cmd === '/theme soft')  { applyTheme('soft');  return '> Theme switched to: **soft**'; }

  if (cmd === '/clear') {
    setTimeout(clearChat, 100);
    return '> Chat cleared.';
  }
  if (cmd === '/export') {
    setTimeout(exportNotes, 100);
    return '> Exporting notes to **CS50_NOTES_EXPORT.txt** …';
  }

  // Mode switches
  const modeMap = { '/cs50':'cs50', '/readme':'readme', '/vla':'vla', '/debug':'debug', '/git':'git' };
  if (modeMap[cmd]) {
    setTimeout(() => setMode(modeMap[cmd]), 80);
    return `> Mode switched to **${modeMap[cmd].toUpperCase()}**.`;
  }

  return `> Unknown command: \`${input}\`\nType \`/help\` to see all commands.`;
}

function buildSummary() {
  const msgCount  = state.messages.length;
  const noteState = state.notes.trim() ? `${state.notes.trim().slice(0, 60)}…` : '(empty)';
  const cpSeen    = Object.keys(state.checkpoints).length;
  const totalCp   = Object.keys(VLA_META).length;

  return `**Memory Summary**

\`\`\`
Project  : CS50-CHATBOT-001
Version  : v0.2
Mode     : ${(MODES[state.mode] || {label:'?'}).label}
─────────────────────────
Messages : ${msgCount}
Notes    : ${noteState}
Checkpoints seen : ${cpSeen} / ${totalCp}
Storage  : localStorage (local-first)
─────────────────────────
Status   : ACTIVE
\`\`\`

Type \`/help\` to see all commands.`;
}

/* ══════════════════════════════════════════════════════
   CS50 TOPIC DETECTION
══════════════════════════════════════════════════════ */
const CS50_TOPICS = [
  {
    keys: ['binary', 'bit', 'byte', 'base-2'],
    fn: () => `**Binary & Bits (Week 0)**

Computers store everything as **0s and 1s** (binary / base-2).

\`\`\`
Decimal  →  Binary
0        →  0000
1        →  0001
5        →  0101
10       →  1010
255      →  1111 1111  (1 byte = 8 bits)
\`\`\`

**Key terms:**
- **bit** — single 0 or 1
- **byte** — 8 bits (values 0–255)
- **nibble** — 4 bits

**CS50 tip:** Week 0 uses binary counting with fingers. Each finger = 1 bit.`
  },
  {
    keys: ['ascii', 'unicode', 'utf', 'character encoding', 'emoji encoding'],
    fn: () => `**ASCII & Unicode (Week 0–2)**

**ASCII** maps numbers to characters:
\`\`\`
65 → A    66 → B    90 → Z
97 → a    48 → 0    32 → (space)
\`\`\`

**Unicode** extends this to 100,000+ characters including emoji:
\`\`\`
U+0041  →  A
U+1F600 →  😀
\`\`\`

**UTF-8** is the most common encoding — uses 1–4 bytes per character.

In C: \`printf("%c", 65);\` prints **A** because 65 = 'A' in ASCII.`
  },
  {
    keys: ['scratch', 'week 0', 'block', 'sprite', 'mit scratch'],
    fn: () => `**Scratch (Week 0)**

CS50 starts with **Scratch** — a visual block-based language from MIT.

**Core concepts you learn:**
- **Sprites** — characters / objects on screen
- **Events** — "when green flag clicked"
- **Loops** — "repeat 10" / "forever"
- **Conditionals** — "if touching edge, bounce"
- **Variables** — "set score to 0"
- **Functions** — custom blocks

**Why Scratch?** It teaches computational thinking without syntax errors. The same logic transfers directly to C and Python.

**Pset 0:** Build a project in Scratch with ≥ 2 sprites, loops, conditions, and a custom block.`
  },
  {
    keys: ['pseudocode', 'pseudo code', 'algorithm design', 'flowchart'],
    fn: () => `**Pseudocode (Week 0)**

Pseudocode is plain-language code — no syntax rules, just logic.

**Example: find a name in a phonebook**
\`\`\`
Pick up phonebook
Open to middle
Look at page
If person is on page
    Call person
Else if person is earlier in book
    Open to middle of left half
    Go back to "Look at page"
Else if person is later in book
    Open to middle of right half
    Go back to "Look at page"
Else
    Give up
\`\`\`

**This is binary search in pseudocode.**

CS50 uses pseudocode before introducing C so you separate *what* to do from *how* to write it.`
  },
  {
    keys: ['conditional', 'if else', 'switch', 'ternary', 'boolean'],
    fn: () => `**Conditionals in C (Week 1)**

\`\`\`c
// if / else if / else
if (x > 0)
{
    printf("positive\\n");
}
else if (x < 0)
{
    printf("negative\\n");
}
else
{
    printf("zero\\n");
}
\`\`\`

**Switch** (for discrete values):
\`\`\`c
switch (grade)
{
    case 'A': printf("Excellent\\n"); break;
    case 'B': printf("Good\\n");      break;
    default:  printf("Keep going\\n");
}
\`\`\`

**Boolean** in C: use \`#include <stdbool.h>\` then \`true\` / \`false\`, or just \`1\` / \`0\`.`
  },
  {
    keys: ['loop', 'for loop', 'while loop', 'do while', 'iteration'],
    fn: () => `**Loops in C (Week 1)**

**for** — when you know the count:
\`\`\`c
for (int i = 0; i < 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

**while** — when you test a condition:
\`\`\`c
int i = 0;
while (i < 5)
{
    printf("%d\\n", i);
    i++;
}
\`\`\`

**do-while** — runs at least once (good for user input validation):
\`\`\`c
int n;
do
{
    n = get_int("Positive number: ");
}
while (n < 1);
\`\`\`

**CS50 psets:** Mario uses nested loops. Cash uses while loops for greedy coin counting.`
  },
  {
    keys: ['variable', 'int', 'float', 'char', 'string', 'data type', 'declare'],
    fn: () => `**Variables & Data Types in C (Week 1)**

\`\`\`c
int    age    = 20;        // whole number
float  gpa    = 3.85;      // decimal
double pi     = 3.14159;   // higher precision decimal
char   grade  = 'A';       // single character
string name   = "CS50";    // CS50 library (char *)
bool   done   = false;     // #include <stdbool.h>
\`\`\`

**Rules:**
- Always declare type before name
- Initialize before using
- \`string\` in CS50 = \`char *\` in standard C
- \`char\` uses single quotes: \`'A'\`
- \`string\` uses double quotes: \`"hello"\`

**sizeof:**
\`\`\`c
printf("%lu\\n", sizeof(int));    // 4 bytes
printf("%lu\\n", sizeof(char));   // 1 byte
\`\`\``
  },
  {
    keys: ['function', 'prototype', 'return', 'void', 'parameter', 'argument'],
    fn: () => `**Functions in C (Week 1–2)**

\`\`\`c
// 1. Prototype (before main)
int square(int n);

// 2. main
int main(void)
{
    printf("%d\\n", square(5));  // → 25
}

// 3. Definition (after main)
int square(int n)
{
    return n * n;
}
\`\`\`

**Return types:**
- \`int\` — returns a number
- \`void\` — returns nothing
- \`bool\` — returns true/false
- \`string\` — returns text

**Why prototypes?** C reads top-to-bottom. The prototype tells the compiler the function exists before its full definition appears.`
  },
  {
    keys: ['array', 'list', 'index', 'element', 'arr['],
    fn: () => `**Arrays in C (Week 2)**

\`\`\`c
// Declare and initialize
int scores[3] = {72, 85, 91};

// Access by index (0-based)
printf("%d\\n", scores[0]);  // 72
printf("%d\\n", scores[2]);  // 91

// Iterate
for (int i = 0; i < 3; i++)
{
    printf("%d\\n", scores[i]);
}
\`\`\`

**Key rules:**
- Index starts at **0**, ends at **length - 1**
- Going out of bounds causes undefined behavior / segfault
- Arrays in C are fixed-size at declaration
- Pass to a function: \`void print_scores(int arr[], int n)\``
  },
  {
    keys: ['memory', 'heap', 'stack', 'malloc', 'free', 'allocation'],
    fn: () => `**Memory in C (Week 4)**

**Stack** — automatic, managed by C, local variables live here
**Heap** — manual, you control it with \`malloc\` / \`free\`

\`\`\`c
// Allocate memory on the heap
int *arr = malloc(3 * sizeof(int));

if (arr == NULL)  // always check!
{
    return 1;
}

arr[0] = 10;
arr[1] = 20;
arr[2] = 30;

free(arr);  // always free!
arr = NULL; // prevent dangling pointer
\`\`\`

**Common memory bugs:**
- **Memory leak** — malloc without free → use \`valgrind\`
- **Buffer overflow** — writing past array bounds
- **Dangling pointer** — using memory after free
- **Null dereference** — not checking malloc return`
  },
  {
    keys: ['pointer', 'address', 'dereference', 'ampersand', '&n', '*ptr'],
    fn: () => `**Pointers in C (Week 4)**

A pointer stores a **memory address**.

\`\`\`c
int  n   = 50;
int *ptr = &n;    // ptr holds the address of n

printf("%p\\n", ptr);    // prints address, e.g. 0x7ffd...
printf("%d\\n", *ptr);   // dereference → prints 50
\`\`\`

**Symbols:**
- \`&\` — "address of" (gives you a pointer)
- \`*\` — "dereference" (gives you the value at that address)
- \`*\` in declaration — means "this is a pointer type"

\`\`\`c
// Swap using pointers
void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}
swap(&x, &y);
\`\`\`

**CS50 tip:** Pointers are hard. Draw boxes and arrows on paper — it helps.`
  },
  {
    keys: ['algorithm', 'sort', 'search', 'big o', 'complexity', 'binary search', 'bubble sort', 'merge sort'],
    fn: () => `**Algorithms & Big O (Week 3)**

**Search:**
\`\`\`
Linear search  O(n)      — check each element
Binary search  O(log n)  — halve the space each step (sorted only)
\`\`\`

**Sort:**
\`\`\`
Bubble sort    O(n²)      — compare adjacent, swap
Selection sort O(n²)      — find min, place at front
Insertion sort O(n²)      — build sorted list left to right
Merge sort     O(n log n) — divide, sort halves, merge
\`\`\`

**Big O cheat sheet:**
\`\`\`
O(1)       constant  — array lookup by index
O(log n)   log       — binary search
O(n)       linear    — linear search
O(n log n) efficient — merge sort
O(n²)      quadratic — bubble/selection sort
\`\`\`

**Ω (Omega)** = best case · **Θ (Theta)** = tight bound`
  },
  {
    keys: ['sql', 'database', 'select', 'insert', 'join', 'sqlite', 'table'],
    fn: () => `**SQL (Week 7)**

CS50 uses **SQLite** — a lightweight relational database.

\`\`\`sql
-- Select
SELECT name, grade FROM students WHERE grade = 'A';

-- Insert
INSERT INTO students (name, grade) VALUES ('Alice', 'A');

-- Update
UPDATE students SET grade = 'B' WHERE name = 'Alice';

-- Delete
DELETE FROM students WHERE name = 'Alice';

-- Join two tables
SELECT s.name, c.title
FROM students s
JOIN courses c ON s.course_id = c.id;
\`\`\`

**CS50 tools:**
- \`sqlite3 database.db\` — open database in terminal
- \`.schema\` — show table structure
- \`.tables\` — list all tables
- \`phpliteadmin\` — visual GUI in CS50 IDE

**Psets:** Movies (Week 7), Fiftyville mystery`
  },
  {
    keys: ['html', 'tag', 'element', 'attribute', 'dom', 'webpage', 'markup'],
    fn: () => `**HTML (Week 8)**

HTML structures web pages with **tags**:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
    <a href="https://cs50.harvard.edu">CS50</a>
    <img src="photo.jpg" alt="A photo">
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </body>
</html>
\`\`\`

**Key tags:**
- \`<h1>–<h6>\` headings · \`<p>\` paragraph · \`<a>\` link
- \`<div>\` block container · \`<span>\` inline container
- \`<form>\`, \`<input>\`, \`<button>\` — user input

**Pset 8:** Homepage — build a multi-page website`
  },
  {
    keys: ['css', 'style', 'selector', 'flexbox', 'grid', 'class', 'id selector'],
    fn: () => `**CSS (Week 8)**

CSS styles HTML elements:

\`\`\`css
/* by tag */
h1 { color: navy; font-size: 2rem; }

/* by class */
.card { background: #fff; border-radius: 8px; padding: 16px; }

/* by id */
#header { position: fixed; top: 0; width: 100%; }

/* Flexbox layout */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
\`\`\`

**Box model:** content → padding → border → margin

**Selectors:** \`tag\` · \`.class\` · \`#id\` · \`tag > child\` · \`tag:hover\`

**CS50 tip:** Use browser DevTools (F12) to inspect and live-edit styles.`
  },
  {
    keys: ['javascript', 'js', 'dom manipulation', 'event listener', 'fetch', 'ajax'],
    fn: () => `**JavaScript (Week 8–9)**

JS makes pages interactive:

\`\`\`javascript
// Variables
let name  = "Alice";
const age = 20;

// Function
function greet(name) {
  return \`Hello, \${name}!\`;
}

// DOM manipulation
document.querySelector('h1').textContent = 'Updated!';

// Event listener
document.querySelector('#btn').addEventListener('click', () => {
  alert('Clicked!');
});

// Fetch API (Week 9)
const res  = await fetch('/api/data');
const data = await res.json();
console.log(data);
\`\`\`

**CS50 topics:**
- DOM · Events · Forms · Fetch · JSON
- Week 9: Flask + JS together (Finance pset)`
  },
];

function detectCS50Topic(input) {
  const q = input.toLowerCase();
  for (const topic of CS50_TOPICS) {
    if (topic.keys.some(k => q.includes(k))) {
      return topic.fn();
    }
  }
  return null;
}

/* ══════════════════════════════════════════════════════
   COMPANION PERSONALITY
══════════════════════════════════════════════════════ */

const COMPANION = {
  micro: {
    cs50:   ['Let\'s break it down.', 'On it.', 'Good question.', 'Here we go.'],
    readme: ['I\'ll structure this cleanly.', 'Formatting now.', 'Building your README.'],
    vla:    ['Checkpoint ready.', 'Logging entry.', 'Indexing now.'],
    debug:  ['Let\'s isolate the issue.', 'Tracing the bug.', 'Checklist incoming.'],
    git:    ['Commit path prepared.', 'Git workflow ready.', 'Staging commands.'],
  },
  typing: {
    cs50:   'vaxinxdoppio is thinking…',
    readme: 'structuring markdown…',
    vla:    'indexing checkpoint…',
    debug:  'tracing issue…',
    git:    'preparing command…',
  },
  footer: {
    cs50:   'Study → Build → Test',
    readme: 'Copy → Polish → Commit',
    vla:    'Capture → Index → Push',
    debug:  'Isolate → Test → Fix',
    git:    'Stage → Commit → Push',
  },
  boot: [
    'CS50-CHATBOT-001 initialized.',
    'vaxinxdoppio online.',
    'Study shell ready.',
    'Tree Structure + VLA loaded.',
    'Local tutor mode active.',
  ],
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const README_HELP = `**README Mode — Commands**

Just type a project name or description to generate a full README:
\`finance tracker\` · \`my cs50 final project\` · \`chatbot 001\`

**Request a specific section:**
\`section: features\`
\`section: installation\`
\`section: vla\`
\`section: roadmap\`
\`section: folder structure\`
\`section: credits\`

**Project types auto-detected:**
C program · Python script · Flask app · Web page · React app · CS50 pset

**After generation:**
— A **[copy]** button appears in the response
— Type \`/export-md\` to download the last README as \`.md\``;

/* Detect project type from user input */
function detectProjectType(input) {
  const q = input.toLowerCase();
  if (q.match(/flask|web app|finance|sql|database|pset 9|week 9/))
    return 'flask';
  if (q.match(/react|component|jsx|node|npm|next\.?js/))
    return 'react';
  if (q.match(/html|css|homepage|webpage|website|pset 8|week 8/))
    return 'web';
  if (q.match(/python|\.py|pset 6|week 6|dna|script/))
    return 'python';
  if (q.match(/\.c|pset [1-5]|week [1-5]|mario|cash|caesar|speller|filter|recover/))
    return 'c';
  if (q.match(/chatbot|bot|ai|companion|cs50-chatbot/))
    return 'chatbot';
  return 'general';
}

/* Type-specific metadata */
const PROJECT_TYPES = {
  c: {
    lang: 'C',
    tools: 'GCC, Make, CS50 Library, Valgrind',
    run: './program',
    prereqs: ['GCC compiler', 'CS50 library (`libcs50`)', 'Make'],
    structure: (slug) =>
`${slug}/
├── ${slug}.c
├── Makefile
└── README.md`,
  },
  python: {
    lang: 'Python 3',
    tools: 'Python 3, pip, CS50 library',
    run: 'python3 program.py',
    prereqs: ['Python 3.x', 'pip packages (see requirements.txt)'],
    structure: (slug) =>
`${slug}/
├── ${slug}.py
├── requirements.txt
└── README.md`,
  },
  flask: {
    lang: 'Python / Flask',
    tools: 'Flask, SQLite, Jinja2, Bootstrap',
    run: 'flask run',
    prereqs: ['Python 3.x', 'Flask (`pip install flask`)', 'SQLite3'],
    structure: (slug) =>
`${slug}/
├── app.py
├── templates/
│   ├── layout.html
│   └── index.html
├── static/
│   ├── styles.css
│   └── script.js
├── ${slug}.db
└── README.md`,
  },
  web: {
    lang: 'HTML / CSS / JavaScript',
    tools: 'VS Code, Live Server, Browser DevTools',
    run: 'open index.html',
    prereqs: ['Any modern browser', 'VS Code (recommended)'],
    structure: (slug) =>
`${slug}/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
└── README.md`,
  },
  react: {
    lang: 'JavaScript / React',
    tools: 'Node.js, npm, Vite or CRA',
    run: 'npm install && npm run dev',
    prereqs: ['Node.js 18+', 'npm or yarn'],
    structure: (slug) =>
`${slug}/
├── src/
│   ├── App.jsx
│   └── components/
├── public/
├── package.json
└── README.md`,
  },
  chatbot: {
    lang: 'HTML / CSS / JavaScript',
    tools: 'VS Code, Git, GitHub Pages',
    run: 'open index.html',
    prereqs: ['Any modern browser', 'VS Code (recommended)'],
    structure: (slug) =>
`${slug}/
├── assets/
├── css/style.css
├── js/app.js
├── memory/
├── modules/
├── prompts/
├── VLA/
├── index.html
└── README.md`,
  },
  general: {
    lang: 'C / Python / JavaScript',
    tools: 'VS Code, Git',
    run: '# see usage section',
    prereqs: ['See tech stack below'],
    structure: (slug) =>
`${slug}/
├── src/
├── assets/
├── docs/
└── README.md`,
  },
};

/* Generate a single README section by name */
function generateReadmeSection(section) {
  const s = section.toLowerCase();
  const date = new Date().toISOString().split('T')[0];

  if (s.includes('feature')) return `**Section: Features**

\`\`\`markdown
## Features

- [ ] Core feature one — brief description
- [ ] Core feature two — brief description
- [ ] Core feature three — brief description

### Planned
- [ ] Future enhancement
- [ ] Stretch goal
\`\`\``;

  if (s.includes('install')) return `**Section: Installation**

\`\`\`markdown
## Installation

### Prerequisites
- Runtime / compiler version
- Any required tools or libraries

### Steps
\`\`\`bash
git clone https://github.com/username/repo-name
cd repo-name
# install dependencies if needed
\`\`\`
\`\`\``;

  if (s.includes('vla')) return `**Section: VLA**

\`\`\`markdown
## VLA — Visual Learning Archive

| Entry   | Title              | Date       | Status   |
|---------|--------------------|------------|----------|
| VLA-001 | Boot               | ${date}    | ✅ done  |
| VLA-007 | Chatbot Birth      | ${date}    | ✅ done  |
| VLA-008 | (next checkpoint)  |            | 🔄 active|

Screenshots stored in \`/VLA/\` · Index in \`VLA_INDEX.md\`
\`\`\``;

  if (s.includes('roadmap')) return `**Section: Roadmap**

\`\`\`markdown
## Roadmap

### v0.1 — Foundation
- [x] Project structure
- [x] Core UI

### v0.2 — Logic
- [x] Mode system
- [x] Local memory

### v0.3 — Features
- [ ] Expanded responses
- [ ] Export system

### v1.0 — Launch
- [ ] GitHub Pages deploy
- [ ] Full documentation
\`\`\``;

  if (s.includes('folder') || s.includes('structure') || s.includes('tree')) return `**Section: Folder Structure**

\`\`\`markdown
## Folder Structure

\`\`\`text
project-root/
├── assets/          # images, icons, mascot
├── css/             # stylesheets
├── js/              # application logic
├── docs/            # documentation
├── memory/          # localStorage fallback files
├── modules/         # feature modules
├── prompts/         # prompt templates
├── VLA/             # visual learning archive
└── README.md
\`\`\`
\`\`\``;

  if (s.includes('credit')) return `**Section: Credits**

\`\`\`markdown
## Credits

- **CS50** — Harvard's Introduction to Computer Science
  https://cs50.harvard.edu
- **CS50 Staff** — David J. Malan and team
- **vaxinxdoppio** — project mascot & companion identity
- **JetBrains Mono** — monospaced font
  https://www.jetbrains.com/lp/mono/

Built with: HTML · CSS · JavaScript · localStorage
\`\`\``;

  if (s.includes('usage')) return `**Section: Usage**

\`\`\`markdown
## Usage

\`\`\`bash
# Run the project
# (fill in the actual run command)
\`\`\`

### Examples

\`\`\`bash
# Example 1
# Example 2
\`\`\`

### Notes
- Note one
- Note two
\`\`\``;

  return `> Section **"${section}"** not recognised.\n\nAvailable: \`features\` · \`installation\` · \`usage\` · \`vla\` · \`roadmap\` · \`folder structure\` · \`credits\``;
}

/* Store last generated README for /export-md */
let _lastReadme = '';

/* Generate full README */
function generateFullReadme(raw) {
  const project = raw || 'MY-PROJECT';
  const slug    = project.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const title   = project.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const type    = detectProjectType(raw);
  const meta    = PROJECT_TYPES[type] || PROJECT_TYPES.general;
  const date    = new Date().toISOString().split('T')[0];
  const prereqs = meta.prereqs.map(p => `- ${p}`).join('\n');
  const tree    = meta.structure(slug);

  const md = `# ${title}

> CS50 learning project · Built with ${meta.lang}

## Description
${title} is a CS50 project that …
(Replace this with a 1–2 sentence description of what your project does.)

## Features
- [ ] Core feature one
- [ ] Core feature two
- [ ] Core feature three

## Installation

### Prerequisites
${prereqs}

### Setup
\`\`\`bash
git clone https://github.com/username/${slug}
cd ${slug}
\`\`\`

## Usage
\`\`\`bash
${meta.run}
\`\`\`

## Folder Structure
\`\`\`
${tree}
\`\`\`

## VLA — Visual Learning Archive

| Entry   | Title          | Date       | Status     |
|---------|----------------|------------|------------|
| VLA-001 | Boot           | ${date}    | ✅ done    |
| VLA-007 | Chatbot Birth  | ${date}    | ✅ done    |

Screenshots in \`/VLA/\` · Full index in \`VLA_INDEX.md\`

## Roadmap
- [x] v0.1 — Static UI
- [x] v0.2 — Local memory
- [ ] v0.3 — Tutor mode
- [ ] v1.0 — Final release

## Tech Stack
- **Language:** ${meta.lang}
- **Tools:** ${meta.tools}
- **Version control:** Git + GitHub

## CS50 Context
- **Course:** CS50x — Harvard University
- **Week / Pset:**
- **Submitted:**

## Credits
- [CS50](https://cs50.harvard.edu) — David J. Malan and team
- vaxinxdoppio — project mascot

## Author
**Your Name** · [@handle](https://github.com/handle)

## License
MIT`;

  _lastReadme = md;

  // Return with copy-button UI injected after the block
  return `**README.md — Generated** *(type detected: ${type})*

\`\`\`markdown
${md}
\`\`\`

<div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;">
  <button onclick="copyLastReadme()" style="background:var(--bg-card);border:1px solid var(--border-active);color:var(--blue);font-family:var(--font-mono);font-size:10px;font-weight:600;padding:5px 12px;border-radius:6px;cursor:pointer;letter-spacing:.05em;" title="Copy README to clipboard">📋 copy</button>
  <button onclick="exportLastReadme('${slug}')" style="background:var(--bg-card);border:1px solid var(--border-amber);color:var(--amber);font-family:var(--font-mono);font-size:10px;font-weight:600;padding:5px 12px;border-radius:6px;cursor:pointer;letter-spacing:.05em;" title="Download as README.md">↓ download .md</button>
</div>

**Tip:** Use \`section: vla\` or \`section: roadmap\` to regenerate individual sections.`;
}

/* Global helpers called by inline button onclick */
window.copyLastReadme = function () {
  if (!_lastReadme) return;
  navigator.clipboard.writeText(_lastReadme).then(() => {
    showToast('README copied to clipboard!');
  }).catch(() => {
    // Fallback for non-HTTPS
    const ta = document.createElement('textarea');
    ta.value = _lastReadme;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('README copied!');
  });
};

window.exportLastReadme = function (slug = 'readme') {
  if (!_lastReadme) return;
  const blob = new Blob([_lastReadme], { type: 'text/markdown' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `${slug}-README.md`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('README.md downloaded!');
};

/* Toast notification (auto-dismiss) */
function showToast(msg) {
  let toast = document.getElementById('cs50-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cs50-toast';
    toast.style.cssText = `
      position:fixed; bottom:24px; left:50%; transform:translateX(-50%);
      background:var(--bg-card); border:1px solid var(--border-active);
      color:var(--text-primary); font-family:var(--font-mono); font-size:11px;
      padding:8px 18px; border-radius:8px; z-index:9999;
      box-shadow:0 0 20px var(--blue-glow-md); letter-spacing:.04em;
      transition:opacity .3s ease; pointer-events:none;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 2200);
}

/* ══════════════════════════════════════════════════════
   MODE RESPONSE ENGINE
══════════════════════════════════════════════════════ */
const RESPONSES = {

  cs50(input) {
    // 1. Slash commands
    if (input.startsWith('/')) return handleSlash(input);

    // 2. Topic detection
    const topicResponse = detectCS50Topic(input);
    if (topicResponse) return topicResponse;

    // 3. Fallback topic menu
    return `**CS50 Tutor — vaxinxdoppio**

I can explain any CS50 topic. Try asking about:

**Week 0–1 (Fundamentals)**
\`binary\` · \`ascii\` · \`scratch\` · \`pseudocode\` · \`variables\` · \`loops\` · \`conditionals\` · \`functions\`

**Week 2–4 (C Deep Dive)**
\`arrays\` · \`memory\` · \`pointers\` · \`malloc\`

**Week 3 (Algorithms)**
\`sorting\` · \`searching\` · \`big o\`

**Week 7–9 (Web)**
\`sql\` · \`html\` · \`css\` · \`javascript\`

**Or type:** \`/help\` for commands · \`/summary\` for project status`;
  },

  readme(input) {
    if (input.startsWith('/')) return handleSlash(input);

    const raw = input.trim();

    // Sub-commands
    if (raw === '/readme help' || raw === 'help') {
      return README_HELP;
    }

    // Section-only requests
    const sectionMatch = raw.match(/^section[:\s]+(.+)/i) || raw.match(/^only[:\s]+(.+)/i);
    if (sectionMatch) {
      return generateReadmeSection(sectionMatch[1].trim());
    }

    // Full README generation
    return generateFullReadme(raw);
  },

  vla(input) {
    if (input.startsWith('/')) return handleSlash(input);

    // Count total VLA entries seen so far + base 007
    const base  = 7;
    const extra = Object.keys(state.checkpoints).filter(k => parseInt(k) > base).length;
    const num   = base + extra + 1;
    const padded = String(num).padStart(3, '0');

    const raw   = input.trim() || 'progress update';
    const title = raw.charAt(0).toUpperCase() + raw.slice(1);
    const slug  = raw.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
    const date  = new Date().toISOString().split('T')[0];

    // Register this checkpoint in state
    state.checkpoints[padded] = { title, date, status: 'ACTIVE' };
    saveCheckpoints();

    return `**VLA Entry — Generated**

\`\`\`markdown
## VLA-${padded} — ${title}

Date: ${date}
File: checkpoint_${padded}_${slug}.png

Purpose:
${title}

Notes:
(add your observations here)

Status:
ACTIVE

Next Action:
(describe what you will do next)
\`\`\`

**Git commit:**
\`\`\`bash
git add .
git commit -m "vla: checkpoint ${padded} — ${slug}"
git push
\`\`\`

**Checklist:**
- [ ] Screenshot taken
- [ ] File saved as \`checkpoint_${padded}_${slug}.png\` in \`/VLA/\`
- [ ] Entry added to \`VLA_INDEX.md\`
- [ ] Committed and pushed`;
  },

  debug(input) {
    if (input.startsWith('/')) return handleSlash(input);

    const ctx = input.trim() || 'general issue';

    // Detect error type for targeted advice
    const q = ctx.toLowerCase();
    let targeted = '';

    if (q.includes('segfault') || q.includes('segmentation')) {
      targeted = `\n**Segfault specific:**\n\`\`\`\n→ Check: uninitialized pointer\n→ Check: array out-of-bounds\n→ Check: freed memory still in use\n→ Run:   valgrind ./${ctx.split(' ')[0] || 'program'}\n\`\`\``;
    } else if (q.includes('undefined') || q.includes('not declared')) {
      targeted = `\n**Undeclared variable:**\n\`\`\`\n→ Check: typo in variable name\n→ Check: declared in wrong scope\n→ Check: missing #include\n\`\`\``;
    } else if (q.includes('syntax') || q.includes('expected')) {
      targeted = `\n**Syntax error:**\n\`\`\`\n→ Check: missing semicolon ;\n→ Check: mismatched { } or ( )\n→ Check: = vs == (assign vs compare)\n→ Check: missing closing quote\n\`\`\``;
    } else if (q.includes('infinite loop') || q.includes('hang') || q.includes('freeze')) {
      targeted = `\n**Infinite loop:**\n\`\`\`\n→ Check: loop condition never becomes false\n→ Check: i++ or i-- missing\n→ Check: off-by-one (i <= n vs i < n)\n→ Use:   Ctrl+C to kill in terminal\n\`\`\``;
    }

    return `**Debug Checklist — ${ctx}**

\`\`\`
[ ] 1. Read the full error message (file + line number)
[ ] 2. Reproduce the bug consistently — confirm it's repeatable
[ ] 3. Isolate: comment out sections until bug disappears
[ ] 4. Print variable values: printf("%d\\n", x);
[ ] 5. Verify logic flow — draw it out if needed
[ ] 6. Check types — mixing int/float/string?
[ ] 7. Check scope — is the variable accessible here?
[ ] 8. Check off-by-one: i < n vs i <= n
[ ] 9. Check null/undefined before using a value
[ ] 10. Search the exact error message (CS50 forum / Stack Overflow)
\`\`\`
${targeted}
**CS50 tools:**
- \`debug50 ./program\` — step through with breakpoints
- \`valgrind ./program\` — memory leak and segfault trace
- \`printf\` tracing — cheapest debugger, always works

Paste your exact error message and I'll help narrow it down.`;
  },

  git(input) {
    if (input.startsWith('/')) return handleSlash(input);

    const raw = input.trim();

    // Auto-detect VLA pattern
    const vlaMatch = raw.match(/vla[^\d]*(\d+)/i);
    if (vlaMatch) {
      const num = vlaMatch[1].padStart(3, '0');
      return `**Git — VLA Commit**

\`\`\`bash
git add .
git commit -m "vla: checkpoint ${num} — ${raw.replace(/vla[^\d]*\d+/i, '').trim() || 'update'}"
git push
\`\`\`

**Workflow:**
\`\`\`bash
git status          # confirm what's staged
git log --oneline   # verify commit was added
\`\`\``;
    }

    // Generate commit from user text
    const slug = raw
      ? raw.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, ' ')
      : 'update project';

    const prefix = raw.match(/fix|bug/i)   ? 'fix'
                 : raw.match(/add|new/i)   ? 'feat'
                 : raw.match(/doc|readme/i)? 'docs'
                 : raw.match(/style|css/i) ? 'style'
                 : raw.match(/refactor/i)  ? 'refactor'
                 : 'checkpoint';

    return `**Git Helper — Commit Generated**

\`\`\`bash
git add .
git commit -m "${prefix}: ${slug}"
git push
\`\`\`

**Common commands:**
\`\`\`bash
git status                  # see what changed
git diff                    # see exact line changes
git log --oneline           # recent commit history
git branch feature-name     # create a new branch
git checkout feature-name   # switch to branch
git merge feature-name      # merge into current branch
git reset --soft HEAD~1     # undo last commit (keep files)
git pull origin main        # pull latest from remote
\`\`\`

**VLA format:**
\`git commit -m "vla: checkpoint XXX — description"\``;
  },
};

function getBotResponse(input) {
  // Global slash commands (work in any mode)
  if (input.startsWith('/')) return handleSlash(input);
  const fn = RESPONSES[state.mode];
  return fn ? fn(input) : `> Unknown mode. Select a mode from the left panel or type \`/modes\`.`;
}

/* ══════════════════════════════════════════════════════
   MODE SYSTEM
══════════════════════════════════════════════════════ */
function setMode(mode) {
  if (!MODES[mode]) return;
  state.mode = mode;
  saveMode();
  DOM.modeChip.textContent     = MODES[mode].chip;
  DOM.modeBadgeMini.textContent = MODES[mode].label;
  DOM.modeNav.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
}

/* ══════════════════════════════════════════════════════
   CHAT RENDERING
══════════════════════════════════════════════════════ */
function formatText(raw) {
  return raw
    .replace(/```([\s\S]*?)```/g, '<pre style="background:var(--bg-shell);border:1px solid var(--border);border-radius:6px;padding:10px 12px;margin:8px 0;overflow-x:auto;font-family:var(--font-mono);font-size:11.5px;color:var(--text-code);line-height:1.65;white-space:pre;">$1</pre>')
    .replace(/`([^`\n]+)`/g, '<code style="background:var(--bg-shell);border:1px solid var(--border);border-radius:4px;padding:1px 5px;font-family:var(--font-mono);font-size:11.5px;color:var(--text-code);">$1</code>')
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text-primary);">$1</strong>')
    .replace(/\n/g, '<br/>');
}

function renderMessage({ role, text, ts }) {
  const isUser = role === 'user';
  const wrap   = document.createElement('div');
  wrap.className = `msg msg--${isUser ? 'user' : 'bot'}`;

  const avatar = document.createElement('div');
  avatar.className = 'msg__avatar';
  avatar.textContent = isUser ? '👤' : '🤖';

  const bubble = document.createElement('div');
  bubble.className = 'msg__bubble';

  const meta = document.createElement('div');
  meta.className = 'msg__meta';
  const timeStr = ts ? new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
  meta.textContent = isUser ? `you · ${timeStr}` : `vaxinxdoppio · ${timeStr}`;

  const textEl = document.createElement('div');
  textEl.className = 'msg__text';
  textEl.innerHTML = formatText(text);

  bubble.appendChild(meta);
  bubble.appendChild(textEl);
  wrap.appendChild(avatar);
  wrap.appendChild(bubble);
  DOM.chatMessages.appendChild(wrap);
  scrollToBottom();
}

function scrollToBottom() {
  DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

function showTyping() {
  const label = COMPANION.typing[state.mode] || 'vaxinxdoppio is thinking…';
  const small = DOM.typingIndicator.querySelector('small');
  if (small) small.textContent = label;
  DOM.typingIndicator.style.display = 'flex';
  scrollToBottom();
}
function hideTyping() { DOM.typingIndicator.style.display = 'none'; }

/* ══════════════════════════════════════════════════════
   SEND FLOW
══════════════════════════════════════════════════════ */
function sendMessage() {
  const text = DOM.chatInput.value.trim();
  if (!text) return;

  const userMsg = { role: 'user', text, ts: Date.now() };
  state.messages.push(userMsg);
  renderMessage(userMsg);
  saveMessages();

  DOM.chatInput.value = '';
  autoResizeInput();
  showTyping();

  const delay = 180 + Math.random() * 380;
  setTimeout(() => {
    hideTyping();

    // Micro-response (skip for slash commands)
    const isSlash = text.startsWith('/');
    if (!isSlash) {
      const micro = pick(COMPANION.micro[state.mode] || ['On it.']);
      const microMsg = { role: 'bot', text: micro, ts: Date.now() };
      state.messages.push(microMsg);
      renderMessage(microMsg);
    }

    // Main response + footer
    let botText = getBotResponse(text);
    if (!isSlash) {
      const footer = COMPANION.footer[state.mode];
      if (footer) botText += `\n\n<span style="font-family:var(--font-mono);font-size:9.5px;color:var(--text-muted);letter-spacing:.06em;">${footer}</span>`;
    }

    const botMsg = { role: 'bot', text: botText, mode: state.mode, ts: Date.now() };
    state.messages.push(botMsg);
    renderMessage(botMsg);
    saveMessages();
  }, delay);
}

/* ══════════════════════════════════════════════════════
   CLEAR CHAT
══════════════════════════════════════════════════════ */
function clearChat() {
  if (!confirm('Clear chat history?')) return;
  state.messages = [];
  saveMessages();
  DOM.chatMessages.querySelectorAll('.msg:not(.msg--boot)').forEach(m => m.remove());
}

/* ══════════════════════════════════════════════════════
   RESTORE HISTORY
══════════════════════════════════════════════════════ */
function restoreHistory() {
  if (!state.messages.length) return;
  state.messages.forEach(msg => renderMessage(msg));
}

/* ══════════════════════════════════════════════════════
   INPUT AUTO-RESIZE
══════════════════════════════════════════════════════ */
function autoResizeInput() {
  const el = DOM.chatInput;
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

/* ══════════════════════════════════════════════════════
   CHECKPOINT MODAL
══════════════════════════════════════════════════════ */
function openCheckpointModal(vlaId) {
  const meta = VLA_META[vlaId];
  if (!meta) return;
  DOM.cpModalImg.src      = meta.img;
  DOM.cpModalImg.alt      = `VLA-${vlaId}`;
  DOM.cpModalLabel.textContent = `VLA-${vlaId} · ${meta.name}`;
  DOM.cpModal.style.display = 'flex';
  state.checkpoints[vlaId] = { seen: true, ts: Date.now() };
  saveCheckpoints();
}

function closeCheckpointModal() {
  DOM.cpModal.style.display = 'none';
  DOM.cpModalImg.src = '';
}

/* ══════════════════════════════════════════════════════
   NOTES
══════════════════════════════════════════════════════ */
function restoreNote() { DOM.quickNote.value = state.notes; }

function saveNote() {
  state.notes = DOM.quickNote.value;
  saveNotes();
  const btn = DOM.saveNoteBtn;
  const orig = btn.textContent;
  btn.textContent = '✓ saved';
  btn.style.color = 'var(--green)';
  setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 1200);
}

/* ══════════════════════════════════════════════════════
   EXPORT
══════════════════════════════════════════════════════ */
function exportNotes() {
  const lines = [
    'CS50-CHATBOT-001 — Notes Export',
    '================================',
    `Exported : ${new Date().toLocaleString()}`,
    `Version  : v0.2`,
    `Mode     : ${(MODES[state.mode] || {label:'?'}).label}`,
    '',
    '── QUICK NOTE ──────────────────',
    state.notes || '(empty)',
    '',
    '── CHAT HISTORY ─────────────────',
    ...state.messages.map(m => {
      const role = m.role === 'user' ? 'YOU' : 'BOT';
      const time = m.ts ? new Date(m.ts).toLocaleString() : '';
      return `[${role}] ${time}\n${m.text}\n${'─'.repeat(40)}`;
    }),
  ];

  const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = 'CS50_NOTES_EXPORT.txt';
  a.click();
  URL.revokeObjectURL(url);
}

/* ══════════════════════════════════════════════════════
   KEYBOARD
══════════════════════════════════════════════════════ */
function handleKeyboard(e) {
  if (e.target === DOM.chatInput) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    return;
  }
  const modeKeys = { F1:'cs50', F2:'readme', F3:'vla', F4:'debug', F5:'git' };
  if (modeKeys[e.key]) { e.preventDefault(); setMode(modeKeys[e.key]); }
  if (e.key === 'Escape') closeCheckpointModal();
}

/* ══════════════════════════════════════════════════════
   EVENT BINDINGS
══════════════════════════════════════════════════════ */
function bindEvents() {
  DOM.sendBtn.addEventListener('click', sendMessage);
  DOM.clearBtn.addEventListener('click', clearChat);
  DOM.chatInput.addEventListener('input', autoResizeInput);
  document.addEventListener('keydown', handleKeyboard);

  DOM.modeNav.addEventListener('click', e => {
    const btn = e.target.closest('.mode-btn');
    if (btn?.dataset.mode) setMode(btn.dataset.mode);
  });

  DOM.checkpointList.addEventListener('click', e => {
    const item = e.target.closest('.checkpoint-item');
    if (item?.dataset.vla) openCheckpointModal(item.dataset.vla);
  });

  DOM.cpModalClose.addEventListener('click', closeCheckpointModal);
  DOM.cpModal.addEventListener('click', e => { if (e.target === DOM.cpModal) closeCheckpointModal(); });

  DOM.saveNoteBtn.addEventListener('click', saveNote);

  let noteTimer;
  DOM.quickNote.addEventListener('input', () => {
    clearTimeout(noteTimer);
    noteTimer = setTimeout(() => { state.notes = DOM.quickNote.value; saveNotes(); }, 800);
  });

  DOM.exportBtn.addEventListener('click', exportNotes);
}

/* ══════════════════════════════════════════════════════
   BOOT
══════════════════════════════════════════════════════ */
function boot() {
  loadAll();
  injectThemeStyles();
  applyTheme(state.theme);
  setMode(state.mode);

  // Randomize boot greeting inside existing .msg--boot block
  const bootLines = document.querySelectorAll('.boot-line');
  if (bootLines.length >= 1) {
    bootLines[0].textContent = '> ' + pick(COMPANION.boot);
  }

  restoreHistory();
  restoreNote();
  bindEvents();
  scrollToBottom();
  console.log('[CS50-CHATBOT-001 v0.4] boot · mode:', state.mode, '· theme:', state.theme);
}

document.addEventListener('DOMContentLoaded', boot);
