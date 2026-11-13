# Claude Code Prompt — Make Incremental Changes

**Context:** A request includes five UI changes and may be difficult to review as one patch.

**Request:** Do not bundle unrelated refactors. Show the diff after each step.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** Each patch is small and independently testable.
