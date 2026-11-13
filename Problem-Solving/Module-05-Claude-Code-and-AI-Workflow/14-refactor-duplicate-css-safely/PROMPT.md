# Claude Code Prompt — Refactor Duplicate CSS Safely

**Context:** Several selectors repeat identical declarations.

**Request:** Do not change computed appearance. Show the files and selectors that will be edited.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** Duplicate declarations are reduced and the page remains visually consistent.
