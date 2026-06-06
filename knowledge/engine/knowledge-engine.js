/* ═══════════════════════════════════════════════════════
   VAXINXBOT · knowledge-engine.js
   Implementation: 010 — Phase 1 (Mock Provider)
   Checkpoint: VLA-010
   Provider: mock — no API calls
   Build → Test → Document → Deploy
═══════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════════════
   KNOWLEDGE BANK
   Mock content store keyed by topic slug.
   Extend per topic — provider layer swaps in later.
══════════════════════════════════════════════════════ */

const KNOWLEDGE_BANK = {

  /* ── CS50 ──────────────────────────────────────────── */
  cs50: {
    title: 'CS50',
    concepts: [
      'CS50 covers C, Python, SQL, HTML, CSS, JavaScript, and Flask',
      'Week 0: Scratch — computational thinking, pseudocode, algorithms',
      'Week 1: C — variables, loops, functions, conditions',
      'Week 2: Arrays — strings, command-line args, cryptography',
      'Week 3: Algorithms — sorting, searching, Big O notation',
      'Week 4: Memory — pointers, malloc, valgrind, file I/O',
      'Week 5: Data Structures — linked lists, trees, hash tables, tries',
      'Week 6: Python — syntax, files, libraries',
      'Week 7: SQL — databases, queries, joins',
      'Week 8: HTML/CSS/JS — web structure, styling, interactivity',
      'Week 9: Flask — web apps, routes, sessions, APIs',
    ],
    quiz: [
      { q: 'What does Big O notation describe?',            a: 'The worst-case time complexity of an algorithm.' },
      { q: 'What is the purpose of `malloc` in C?',         a: 'To dynamically allocate memory on the heap at runtime.' },
      { q: 'What does `valgrind` check for?',               a: 'Memory leaks and invalid memory access in C programs.' },
      { q: 'What is the difference between `=` and `==`?',  a: '`=` assigns a value; `==` compares two values.' },
      { q: 'What is a pointer in C?',                       a: 'A variable that stores the memory address of another variable.' },
      { q: 'What does `check50` do?',                       a: 'Runs automated tests against your pset submission.' },
      { q: 'What is a hash table?',                         a: 'A data structure that maps keys to values using a hash function for O(1) average lookup.' },
    ],
    lesson: [
      'Start with computational thinking — break any problem into inputs, outputs, and steps.',
      'Learn C syntax: variables, conditions, loops, functions — these transfer to every language.',
      'Understand memory: stack vs heap, pointers, addresses — CS50 Week 4 is the hardest but most rewarding.',
      'Practice algorithms: implement bubble sort and binary search by hand before using library functions.',
      'Move to Python: notice how much C taught you — Python feels easier because you understand what it abstracts.',
      'Build with Flask: combine SQL + Python + HTML into a real web application (Finance pset).',
    ],
    tutor: [
      'What part of CS50 are you working on right now?',
      'Can you describe what your code is supposed to do, in plain English?',
      'Where does the code stop doing what you expect?',
      'What does the error message say exactly?',
      'Have you tried adding `printf` statements to trace the value of your variables?',
    ],
  },

  /* ── JavaScript ────────────────────────────────────── */
  javascript: {
    title: 'JavaScript',
    concepts: [
      'JavaScript is the language of the browser — it makes pages interactive',
      '`let` and `const` are block-scoped; `var` is function-scoped (avoid `var`)',
      'Functions: declarations, expressions, and arrow functions `() => {}`',
      'DOM: `document.querySelector()` selects elements; `.addEventListener()` attaches events',
      'Arrays: `.map()` `.filter()` `.reduce()` are the core functional methods',
      'Objects: key-value pairs — `{ name: "Alice", age: 20 }`',
      'Promises and `async/await` handle asynchronous operations',
      '`fetch()` is the browser API for HTTP requests',
      '`localStorage` stores data across page reloads (string only)',
      'ES6+ features: destructuring, spread, template literals, optional chaining',
    ],
    quiz: [
      { q: 'What is the difference between `==` and `===` in JavaScript?', a: '`==` compares with type coercion; `===` compares value AND type (strict equality).' },
      { q: 'What does `Array.prototype.map()` return?',                    a: 'A new array with each element transformed by the callback function.' },
      { q: 'What is a closure?',                                           a: 'A function that retains access to its outer scope even after the outer function has returned.' },
      { q: 'What does `async/await` do?',                                  a: 'Makes asynchronous Promise-based code look and behave like synchronous code.' },
      { q: 'What is the DOM?',                                             a: 'The Document Object Model — a tree representation of the HTML page that JavaScript can read and modify.' },
      { q: 'What does `JSON.stringify()` do?',                             a: 'Converts a JavaScript object to a JSON string.' },
      { q: 'What is event bubbling?',                                      a: 'When an event on a child element propagates up through parent elements in the DOM.' },
    ],
    lesson: [
      'Understand that JavaScript is single-threaded — one thing runs at a time.',
      'Master the DOM first: select elements, change text, listen for clicks.',
      'Learn the event loop: sync code runs first, then microtasks (Promises), then macrotasks (setTimeout).',
      'Use `const` by default; only use `let` when you need to reassign.',
      'Arrow functions do not have their own `this` — important for event handlers and classes.',
      'Practice `fetch` + `async/await` — this is how modern JS talks to servers.',
      'Understand closures — they appear in callbacks, event listeners, and module patterns.',
    ],
    tutor: [
      'What are you trying to build with JavaScript right now?',
      'Is the issue with the DOM, events, data, or async code?',
      'What does your browser console show — any errors?',
      'Can you paste the function that is not working as expected?',
      'Have you checked whether the element exists in the DOM before you query it?',
    ],
  },

  /* ── Python ─────────────────────────────────────────── */
  python: {
    title: 'Python',
    concepts: [
      'Python uses indentation instead of `{}` braces — consistency is required',
      'Dynamic typing: variables have no declared type — `x = 5` just works',
      'Lists `[]`, tuples `()`, dicts `{}`, sets `{}` — four core collections',
      '`for item in list` iterates directly over values, not indices',
      'Functions: `def name(params):` — default args and `*args`/`**kwargs` are common',
      'List comprehensions: `[x*2 for x in range(10)]` — Pythonic one-liner',
      '`with open("file") as f:` — safe file handling (auto-closes)',
      'Modules: `import os`, `import sys`, `import re`, `import csv`',
      '`pip install package` — installs from PyPI',
      'CS50 Week 6: Python ports of C psets — notice the difference in brevity',
    ],
    quiz: [
      { q: 'What is a list comprehension?',                      a: 'A compact syntax to create a new list by transforming or filtering an iterable: `[expr for x in iterable]`.' },
      { q: 'What does `enumerate()` do?',                        a: 'Returns an iterator of `(index, value)` pairs — avoids manual counter variables.' },
      { q: 'What is the difference between a list and a tuple?', a: 'Lists are mutable (changeable); tuples are immutable (fixed after creation).' },
      { q: 'How do you open and read a file safely in Python?',  a: 'Use `with open("file.txt", "r") as f: content = f.read()` — the `with` block auto-closes the file.' },
      { q: 'What does `**kwargs` do in a function signature?',   a: 'Collects any keyword arguments into a dictionary called `kwargs`.' },
      { q: 'How do you check a key exists in a dict?',           a: '`if "key" in my_dict:` — the `in` operator checks dict keys.' },
    ],
    lesson: [
      'Python philosophy: "There should be one obvious way to do it." Prefer the Pythonic style.',
      'Indentation is syntax — 4 spaces per level, never mix tabs and spaces.',
      'Master the four collections: list (ordered, mutable), tuple (ordered, immutable), dict (key-value), set (unique values).',
      'Functions are first-class objects — you can pass them as arguments, return them, store them in variables.',
      'The standard library is huge — before writing something from scratch, check if `os`, `re`, `csv`, `json`, or `pathlib` already does it.',
      'For CS50: Week 6 re-implements your C psets in Python — use it to see how much the language does for you.',
    ],
    tutor: [
      'Which Python concept are you working on?',
      'Is the issue a syntax error, a logic error, or unexpected output?',
      'What does the traceback say — what line and what error type?',
      'Can you show me the function or loop that is not behaving as expected?',
      'Have you checked the type of your variable with `print(type(x))`?',
    ],
  },

  /* ── HTML ────────────────────────────────────────────── */
  html: {
    title: 'HTML',
    concepts: [
      'HTML is the structure of a web page — not styling, not logic',
      'Elements: opening tag + content + closing tag: `<p>text</p>`',
      'Semantic tags: `<header>` `<main>` `<nav>` `<section>` `<article>` `<footer>`',
      'Block elements take full width: `<div>` `<p>` `<h1>`',
      'Inline elements sit in line: `<span>` `<a>` `<strong>` `<em>`',
      'Links: `<a href="url">text</a>` — use relative paths for internal links',
      'Images: `<img src="path" alt="description">` — `alt` is required for accessibility',
      'Forms: `<form>` `<input>` `<label>` `<button>` `<select>` `<textarea>`',
      'The DOM tree: `<html>` > `<head>` + `<body>` — every element is a node',
      '`id` is unique per page; `class` can repeat — use both for targeting with CSS/JS',
    ],
    quiz: [
      { q: 'What is the purpose of the `alt` attribute on an `<img>` tag?',    a: 'It provides a text description for screen readers and shows when the image fails to load — required for accessibility.' },
      { q: 'What is the difference between `<div>` and `<span>`?',             a: '`<div>` is a block-level container; `<span>` is an inline container.' },
      { q: 'What does a `<label for="id">` do?',                               a: 'Associates the label with a form input by matching `for` to the input\'s `id` — improves accessibility and click area.' },
      { q: 'What is the correct DOCTYPE declaration for HTML5?',               a: '`<!DOCTYPE html>` — tells the browser this is an HTML5 document.' },
      { q: 'What is the difference between `id` and `class` attributes?',      a: '`id` must be unique per page; `class` can be shared across multiple elements.' },
      { q: 'What does `<meta charset="UTF-8">` do?',                           a: 'Declares the character encoding — ensures special characters and emoji display correctly.' },
    ],
    lesson: [
      'Think of HTML as bones — it gives the page structure, not appearance.',
      'Always start with semantic elements: `<header>`, `<main>`, `<nav>`, `<footer>` before reaching for `<div>`.',
      'Validate your HTML — use the W3C validator to catch unclosed tags and missing attributes.',
      'Accessibility first: every image needs `alt`, every input needs `<label>`, use heading hierarchy `h1` → `h2` → `h3`.',
      'Understand the DOM tree — every element is a node that CSS and JavaScript can target.',
      'For CS50 Week 8: your HTML structure determines how your CSS and JS will work — clean structure makes everything easier.',
    ],
    tutor: [
      'What HTML element or structure are you trying to build?',
      'Is the page rendering as expected — what does it look like vs what you expected?',
      'Have you validated your HTML — any unclosed tags or missing attributes?',
      'Are you targeting this element with CSS or JavaScript — what selector are you using?',
      'Can you share the relevant HTML block?',
    ],
  },

  /* ── CSS ─────────────────────────────────────────────── */
  css: {
    title: 'CSS',
    concepts: [
      'CSS selects elements and applies visual rules — selector `{` property: value `}`',
      'Selectors: `tag` · `.class` · `#id` · `tag > child` · `:hover` · `::before`',
      'Box model: content → padding → border → margin (outside-in)',
      'Flexbox: `display: flex` — one-dimensional layout, row or column',
      'Grid: `display: grid` — two-dimensional layout with rows and columns',
      'Responsive: `@media (max-width: 600px) { }` — mobile-first breakpoints',
      'CSS variables: `:root { --color: #3ab5f5; }` then `var(--color)`',
      'Specificity order: inline styles > `#id` > `.class` > `tag`',
      'Cascade: later rules override earlier ones at the same specificity',
      '`transition` for smooth changes; `animation` with `@keyframes` for motion',
    ],
    quiz: [
      { q: 'What does `box-sizing: border-box` do?',               a: 'Makes padding and border included in the element\'s total width/height — prevents layout overflow surprises.' },
      { q: 'What is the difference between `flexbox` and `grid`?', a: 'Flexbox is one-dimensional (row OR column); Grid is two-dimensional (rows AND columns).' },
      { q: 'What does `position: absolute` do?',                   a: 'Removes the element from normal flow and positions it relative to its nearest positioned ancestor.' },
      { q: 'What is specificity in CSS?',                          a: 'The weight of a selector that determines which rule wins when multiple rules target the same element. `#id` beats `.class` beats `tag`.' },
      { q: 'How do CSS variables work?',                           a: 'Declare with `--name: value` in `:root {}`, use with `var(--name)` — they cascade and can be overridden.' },
      { q: 'What does `z-index` control?',                         a: 'The stacking order of positioned elements — higher values appear in front.' },
    ],
    lesson: [
      'Learn the box model first — every layout bug comes from misunderstanding margin, padding, and border.',
      'Master Flexbox: `display: flex`, `justify-content`, `align-items`, `gap` — this solves 80% of layout problems.',
      'Use CSS variables for any value you use more than twice — colors, spacing, font sizes.',
      'Mobile-first: write styles for small screens first, then use `@media (min-width: 768px)` to add desktop styles.',
      'Understand the cascade: more specific rules win; same specificity = last rule wins.',
      'DevTools (F12) → Elements panel → hover over any element to see its box model live.',
    ],
    tutor: [
      'What layout or visual effect are you trying to achieve?',
      'Is it a layout issue (positioning/spacing) or a visual issue (colors/fonts)?',
      'What does the element look like in DevTools — can you see the box model?',
      'Are you using Flexbox, Grid, or normal flow?',
      'What selector are you using to target the element?',
    ],
  },

  /* ── Git ─────────────────────────────────────────────── */
  git: {
    title: 'Git',
    concepts: [
      'Git tracks changes to files over time — it stores snapshots, not diffs',
      'Three areas: Working Directory → Staging Area (`git add`) → Repository (`git commit`)',
      '`git init` creates a new repo; `git clone <url>` copies an existing one',
      '`git add .` stages all changes; `git add file` stages one file',
      '`git commit -m "message"` saves a snapshot with a description',
      '`git push` sends commits to the remote; `git pull` fetches and merges',
      'Branches: `git branch name` creates; `git checkout name` switches; `git merge name` merges',
      '`git log --oneline` shows commit history compactly',
      '`git status` shows current state of working directory and staging area',
      '`git reset --soft HEAD~1` undoes the last commit but keeps changes staged',
    ],
    quiz: [
      { q: 'What is the difference between `git fetch` and `git pull`?',    a: '`git fetch` downloads remote changes without merging; `git pull` fetches AND merges into your current branch.' },
      { q: 'What does `git stash` do?',                                     a: 'Temporarily saves uncommitted changes so you can switch branches with a clean working directory.' },
      { q: 'What is a merge conflict?',                                     a: 'When two branches change the same part of the same file — Git cannot auto-merge and asks you to resolve manually.' },
      { q: 'What does `HEAD` refer to in Git?',                             a: 'A pointer to the current commit — usually the tip of your current branch.' },
      { q: 'What is `.gitignore` used for?',                                a: 'Listing files and folders Git should not track — e.g. `node_modules/`, `.env`, build outputs.' },
      { q: 'What is the difference between `git reset` and `git revert`?',  a: '`reset` rewrites history (removes commits); `revert` creates a new commit that undoes a previous one — safer for shared branches.' },
    ],
    lesson: [
      'Understand the three areas: working directory (your files) → staging area (what you\'ve `git add`ed) → repository (committed history).',
      'Commit often with meaningful messages — `feat: add login form` not `update stuff`.',
      'Branch for every feature: `git checkout -b feature-name` — never work directly on `main`.',
      'Before pushing: `git status` then `git log --oneline` to confirm what you\'re about to send.',
      '`.gitignore` should be the first file you create — add `node_modules/`, `.env`, and OS files.',
      'For CS50/VLA: use the format `vla: checkpoint XXX — description` for checkpoint commits.',
    ],
    tutor: [
      'What are you trying to do with Git right now?',
      'Is this a local issue (staging/committing) or a remote issue (push/pull/clone)?',
      'What does `git status` currently show?',
      'Are you on the correct branch — what does `git branch` output?',
      'What error message are you seeing exactly?',
    ],
  },

  /* ── SQL ─────────────────────────────────────────────── */
  sql: {
    title: 'SQL',
    concepts: [
      'SQL (Structured Query Language) manages relational databases',
      'Tables: rows = records, columns = fields',
      '`SELECT` retrieves data; `INSERT` adds rows; `UPDATE` modifies; `DELETE` removes',
      '`WHERE` filters rows; `ORDER BY` sorts; `LIMIT` caps results',
      '`JOIN` combines tables: `INNER`, `LEFT`, `RIGHT`, `FULL`',
      'Aggregate functions: `COUNT()` `SUM()` `AVG()` `MAX()` `MIN()`',
      '`GROUP BY` groups rows for aggregation; `HAVING` filters groups',
      'Primary key: unique row identifier; Foreign key: reference to another table',
      'CS50 uses SQLite — `sqlite3 database.db` to open',
      'Indexes speed up queries — `CREATE INDEX` on frequently filtered columns',
    ],
    quiz: [
      { q: 'What is the difference between `WHERE` and `HAVING`?',                    a: '`WHERE` filters rows before grouping; `HAVING` filters groups after `GROUP BY`.' },
      { q: 'What does `INNER JOIN` return?',                                          a: 'Only rows where there is a match in BOTH tables.' },
      { q: 'What is a primary key?',                                                  a: 'A column (or combination) that uniquely identifies each row in a table — cannot be NULL or duplicate.' },
      { q: 'What does `COUNT(*)` vs `COUNT(column)` do differently?',                 a: '`COUNT(*)` counts all rows including NULLs; `COUNT(column)` only counts non-NULL values in that column.' },
      { q: 'What does `LEFT JOIN` return that `INNER JOIN` does not?',                a: 'All rows from the left table, even if there is no matching row in the right table (NULLs for missing right values).' },
      { q: 'What is SQL injection and how do you prevent it?',                        a: 'Injecting malicious SQL through user input. Prevent with parameterized queries / prepared statements — never string-concatenate user input into SQL.' },
    ],
    lesson: [
      'Think in tables and relationships — draw an ER diagram before writing any SQL.',
      'Master `SELECT` first: columns, `WHERE`, `ORDER BY`, `LIMIT` — 80% of SQL is reading data.',
      '`JOIN` is the most powerful feature — understand that it combines tables on a shared key.',
      'Use `GROUP BY` with aggregate functions: `SELECT department, COUNT(*) FROM employees GROUP BY department`.',
      'Always use parameterized queries in application code — never concatenate user input into SQL strings.',
      'For CS50: the Movies pset (Week 7) is the best SQL practice — work through all 13 queries.',
    ],
    tutor: [
      'What are you trying to query or build with SQL?',
      'Can you describe the table structure — what columns do the relevant tables have?',
      'What result are you getting vs what you expected?',
      'Have you checked your `JOIN` condition — are the keys matching correctly?',
      'What does the query look like right now?',
    ],
  },

  /* ── PowerShell ──────────────────────────────────────── */
  powershell: {
    title: 'PowerShell',
    concepts: [
      'PowerShell is an object-oriented shell — commands return objects, not text',
      'Cmdlets follow Verb-Noun pattern: `Get-Item`, `Set-Location`, `New-Item`',
      '`Get-Location` (pwd) · `Set-Location` (cd) · `Get-ChildItem` (ls/dir)',
      'Variables: `$var = "value"` — always prefixed with `$`',
      'Strings: double quotes expand variables `"Hello $name"`; single quotes are literal',
      'Pipeline `|`: passes output of one command as input to the next',
      '`Where-Object` filters pipeline objects; `Select-Object` picks properties',
      'Scripts: `.ps1` files — run with `./script.ps1`',
      '`code .` opens VS Code in the current directory',
      'Execution Policy: `Set-ExecutionPolicy RemoteSigned` to allow local scripts',
    ],
    quiz: [
      { q: 'What is the PowerShell equivalent of `ls` in Bash?',      a: '`Get-ChildItem` (aliased as `gci`, `ls`, or `dir`).' },
      { q: 'How do you create a new directory in PowerShell?',        a: '`New-Item -ItemType Directory -Name "foldername"` or `mkdir foldername`.' },
      { q: 'What does the pipeline `|` do in PowerShell?',            a: 'Passes the output object(s) of the left command as input to the right command.' },
      { q: 'How do you filter files by extension in PowerShell?',     a: '`Get-ChildItem -Filter "*.js"` or `Get-ChildItem | Where-Object { $_.Extension -eq ".js" }`.' },
      { q: 'What is `$_` in a pipeline?',                             a: 'The current object in the pipeline — used inside `Where-Object`, `ForEach-Object`, etc.' },
      { q: 'How do you run a PowerShell script?',                     a: '`./script.ps1` from the directory it\'s in, after setting execution policy to allow local scripts.' },
    ],
    lesson: [
      'PowerShell thinks in objects, not text — `Get-ChildItem` returns file objects with properties, not just names.',
      'Learn the aliases: `ls`, `cd`, `pwd`, `cat`, `echo` all work — but know the real cmdlet names.',
      'The pipeline is the power: `Get-ChildItem | Where-Object { $_.Length -gt 1MB } | Sort-Object Length`.',
      'Variables are always `$prefixed` — `$files`, `$count`, `$result`.',
      'For VS Code workflow: `code .` opens the current folder; `Get-Location` confirms where you are.',
      'Write scripts in `.ps1` files — start with `param()` to accept arguments.',
    ],
    tutor: [
      'What are you trying to do in PowerShell?',
      'Is it a navigation, file operation, scripting, or automation task?',
      'What does the current error say?',
      'What directory are you in — does `Get-Location` confirm the right path?',
      'Can you share the command that is not working?',
    ],
  },

  /* ── Node.js ─────────────────────────────────────────── */
  node: {
    title: 'Node.js',
    concepts: [
      'Node.js runs JavaScript outside the browser — on the server or command line',
      '`node file.js` runs a script; `node` alone opens the REPL',
      'npm: Node Package Manager — `npm install`, `npm init`, `package.json`',
      'CommonJS modules: `const x = require("module")` · `module.exports = x`',
      'ES Modules: `import x from "module"` · `export default x` (with `"type": "module"` in package.json)',
      '`process.argv` accesses command-line arguments',
      '`process.env.VARIABLE` reads environment variables',
      'Built-in modules: `fs` (files), `path`, `http`, `os`, `events`',
      'Express: `npm install express` — minimalist web framework',
      '`async/await` works in Node — same as browser JS',
    ],
    quiz: [
      { q: 'What is `package.json`?',                                   a: 'The manifest file for a Node project — stores name, version, scripts, and dependencies.' },
      { q: 'What is the difference between `dependencies` and `devDependencies`?', a: '`dependencies` are needed at runtime; `devDependencies` are only needed during development (linters, test runners).' },
      { q: 'What does `npm install` do when run in a project folder?',  a: 'Reads `package.json` and installs all listed dependencies into `node_modules/`.' },
      { q: 'What is the Node.js event loop?',                           a: 'The mechanism that handles async callbacks — Node checks for completed I/O, timers, etc. between each tick.' },
      { q: 'How do you read a file in Node.js?',                        a: '`const fs = require("fs"); fs.readFileSync("file.txt", "utf8")` or the async `fs.promises.readFile()`.' },
      { q: 'What does `__dirname` refer to?',                           a: 'The absolute path of the directory containing the currently executing script.' },
    ],
    lesson: [
      'Node is JavaScript, but without the DOM — `window`, `document`, and browser APIs don\'t exist.',
      'Understand `require` vs `import` — most older tutorials use CommonJS (`require`); modern Node uses ES Modules.',
      'npm is your toolbox — `npm install` adds packages, `npm run dev` runs scripts defined in `package.json`.',
      'Always add `node_modules/` to `.gitignore` — never commit it.',
      'Learn `fs.promises` for async file operations — reading, writing, listing directories.',
      'Express in three lines: `const app = require("express")(); app.get("/", (req, res) => res.send("Hello")); app.listen(3000);`',
    ],
    tutor: [
      'What are you building with Node.js?',
      'Is it a CLI script, a web server, or a utility?',
      'What does the error message or stack trace say?',
      'Are you using CommonJS (`require`) or ES Modules (`import`)?',
      'What does your `package.json` scripts section look like?',
    ],
  },

  /* ── Bash ────────────────────────────────────────────── */
  bash: {
    title: 'Bash',
    concepts: [
      'Bash is the default shell on Linux and macOS — the primary CLI interface',
      '`pwd` prints working directory; `ls -la` lists all files with permissions',
      '`cd folder` changes directory; `cd ..` goes up one level; `cd ~` goes home',
      '`mkdir name` creates directory; `rm -rf folder` removes directory (careful!)',
      '`cp source dest` copies; `mv source dest` moves or renames',
      '`cat file` prints contents; `less file` pages through; `head`/`tail` show start/end',
      '`chmod +x file` makes executable; `./script.sh` runs it',
      '`grep "pattern" file` searches text; `|` pipes output; `>` redirects to file',
      'Variables: `NAME="value"` (no spaces); access with `$NAME`',
      '`&&` chains commands (run next only if previous succeeded); `||` runs if previous failed',
    ],
    quiz: [
      { q: 'What does `chmod 755 file` do?',                         a: 'Sets permissions: owner can read/write/execute (7); group and others can read/execute (5).' },
      { q: 'What is the difference between `>` and `>>`?',           a: '`>` overwrites the file; `>>` appends to the file.' },
      { q: 'What does `grep -r "text" .` do?',                       a: 'Recursively searches for "text" in all files in the current directory and subdirectories.' },
      { q: 'What does `echo $PATH` show?',                           a: 'The list of directories the shell searches when you type a command — colon-separated.' },
      { q: 'How do you make a Bash script executable and run it?',   a: '`chmod +x script.sh` then `./script.sh`.' },
      { q: 'What does `&&` do between two commands?',                a: 'Runs the second command only if the first exits with code 0 (success).' },
    ],
    lesson: [
      'Navigate first: `pwd`, `ls`, `cd` — know where you are at all times.',
      'Master the pipe `|`: `ls -la | grep ".js"` chains commands into powerful one-liners.',
      'Permissions: `r` (read=4), `w` (write=2), `x` (execute=1) — `chmod 755` = `rwxr-xr-x`.',
      'Use `man command` to read the manual for any built-in command.',
      'Write scripts: start with `#!/bin/bash`, add `set -e` to exit on errors, use `$1` `$2` for arguments.',
      'For CS50: the codespace terminal runs Bash — `make`, `./program`, `valgrind` all run here.',
    ],
    tutor: [
      'What are you trying to do in the terminal?',
      'Is it navigation, file manipulation, permissions, or scripting?',
      'What is the exact error message?',
      'What directory are you in — what does `pwd` return?',
      'Can you share the command you ran?',
    ],
  },

};

/* ══════════════════════════════════════════════════════
   UTILITY HELPERS
══════════════════════════════════════════════════════ */

function normalizeTopic(raw) {
  if (!raw) return 'cs50';
  const t = raw.trim().toLowerCase()
    .replace(/javascript|js\b/, 'javascript')
    .replace(/node\.?js|nodejs/, 'node')
    .replace(/powershell|ps\b/, 'powershell')
    .replace(/python|py\b/, 'python');
  return KNOWLEDGE_BANK[t] ? t : 'cs50';
}

function getBank(topic) {
  return KNOWLEDGE_BANK[normalizeTopic(topic)];
}

/* ══════════════════════════════════════════════════════
   KNOWLEDGE ENGINE API
══════════════════════════════════════════════════════ */

/**
 * generateNotes(topic)
 * Returns structured study notes for a topic.
 */
function generateNotes(topic) {
  const b = getBank(topic);
  const lines = b.concepts.map((c, i) => `  ${i + 1}. ${c}`).join('\n');
  return `📒 **NOTES — ${b.title}**

\`\`\`
${lines}
\`\`\`

**How to use these notes:**
- Read each concept once, then close the list and try to recall it
- For each concept you can't recall, re-read and note it in your quick-note panel
- Type \`/quiz ${normalizeTopic(topic)}\` when you're ready to test yourself`;
}

/**
 * generateQuiz(topic)
 * Returns multiple-choice/short-answer quiz questions.
 */
function generateQuiz(topic) {
  const b   = getBank(topic);
  const qs  = [...b.quiz].sort(() => Math.random() - 0.5).slice(0, 5);
  const out = qs.map((item, i) => `**Q${i + 1}.** ${item.q}\n\n<details>\n<summary>Show answer</summary>\n\n> ${item.a}\n\n</details>`).join('\n\n---\n\n');
  return `📝 **QUIZ — ${b.title}** *(${qs.length} questions)*

${out}

---
*Type \`/lesson ${normalizeTopic(topic)}\` for a guided walkthrough of this topic.*`;
}

/**
 * generateLesson(topic)
 * Returns a step-by-step lesson walkthrough.
 */
function generateLesson(topic) {
  const b     = getBank(topic);
  const steps = b.lesson.map((s, i) => `**Step ${i + 1}:** ${s}`).join('\n\n');
  return `🎓 **LESSON — ${b.title}**

${steps}

---
**Next:** Type \`/quiz ${normalizeTopic(topic)}\` to test what you've learned, or \`/teach ${normalizeTopic(topic)}\` to enter guided tutor mode.`;
}

/**
 * tutorMode(topic)
 * Returns Socratic guiding questions to scaffold learning.
 */
function tutorMode(topic) {
  const b = getBank(topic);
  const q = b.tutor[Math.floor(Math.random() * b.tutor.length)];
  return `🧑‍🏫 **TUTOR MODE — ${b.title}**

I'll guide you through this rather than just give you the answer.

${q}

*(Answer in the chat and I'll help you work through it step by step.)*

**Available topics:** ${Object.keys(KNOWLEDGE_BANK).join(' · ')}`;
}

/* ══════════════════════════════════════════════════════
   EXPORTS
   Compatible with browser globals (no bundler required)
   and future CommonJS / ES Module extraction.
══════════════════════════════════════════════════════ */

const knowledgeEngine = {
  generateNotes,
  generateQuiz,
  generateLesson,
  tutorMode,
  topics: () => Object.keys(KNOWLEDGE_BANK),
  hasTopicFor: (t) => !!KNOWLEDGE_BANK[normalizeTopic(t)],
};

// Browser global — loaded via <script src="knowledge/engine/knowledge-engine.js">
if (typeof window !== 'undefined') {
  window.knowledgeEngine = knowledgeEngine;
}

// CommonJS — future module extraction
if (typeof module !== 'undefined' && module.exports) {
  module.exports = knowledgeEngine;
}
