# Claude Code Prompt — Preserve Existing API Behaviour

**Context:** A refactor should improve readability without changing function inputs or outputs.

**Request:** Identify existing callers and tests first. Do not change the API contract.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** Existing tests pass and the public behaviour remains unchanged.
