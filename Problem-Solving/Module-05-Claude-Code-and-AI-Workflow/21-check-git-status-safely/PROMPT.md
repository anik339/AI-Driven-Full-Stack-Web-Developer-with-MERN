# Claude Code Prompt — Check Git Status Safely

**Context:** Before starting work, you need to understand the current repository state.

**Request:** Do not run reset, clean, checkout or destructive commands.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** Every file is classified correctly and no work is discarded.
