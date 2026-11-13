# Claude Code Prompt — Debug a Console Error

**Context:** The browser console shows an error after a recent code change.

**Request:** Do not rewrite unrelated files. Explain the root cause before applying a patch.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The error is reproduced, fixed and verified with a clear test.
