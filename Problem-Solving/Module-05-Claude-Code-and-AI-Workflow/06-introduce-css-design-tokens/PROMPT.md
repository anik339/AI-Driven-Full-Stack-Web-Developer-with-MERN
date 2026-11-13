# Claude Code Prompt — Introduce CSS Design Tokens

**Context:** A stylesheet repeats the same colours, spacing and border radii in many places.

**Request:** Keep the existing visual appearance. Do not add a CSS framework.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** Repeated values use named custom properties and the page still renders the same.
