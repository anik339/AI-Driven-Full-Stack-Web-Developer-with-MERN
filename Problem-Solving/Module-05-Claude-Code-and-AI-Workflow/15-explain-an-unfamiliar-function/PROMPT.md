# Claude Code Prompt — Explain an Unfamiliar Function

**Context:** You need to understand a function before editing it.

**Request:** Explanation only. Do not change the code. If context is missing, state what file is needed.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The explanation includes a plain-language summary and a small example.
