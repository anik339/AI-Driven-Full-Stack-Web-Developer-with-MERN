# Claude Code Prompt — Resolve a Merge Conflict

**Context:** Two branches changed the same lines in a README file.

**Request:** Do not automatically choose ours or theirs. Ask what each side means.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** Conflict markers are removed and the final content preserves the intended information.
