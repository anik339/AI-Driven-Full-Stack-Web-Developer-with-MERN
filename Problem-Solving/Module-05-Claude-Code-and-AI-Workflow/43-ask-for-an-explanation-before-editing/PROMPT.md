# Claude Code Prompt — Ask for an Explanation Before Editing

**Context:** You are unsure why a component is structured in a particular way.

**Request:** Explanation only. State uncertainty instead of guessing.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The explanation follows the actual source code.
