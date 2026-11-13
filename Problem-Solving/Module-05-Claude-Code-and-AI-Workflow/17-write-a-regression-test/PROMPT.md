# Claude Code Prompt — Write a Regression Test

**Context:** A bug has been fixed once, but the same problem could return later.

**Request:** Inspect the existing test setup first. Do not add a new testing library without approval. Do not claim the test passes unless it is run.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The test fails before the fix or reproduces the bug, then passes after the fix.
