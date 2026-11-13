# Claude Code Prompt — Use Plan-Then-Implement Workflow

**Context:** You want Claude Code to plan a change before touching the code.

**Request:** Planning phase must not modify files. Implementation begins only after approval.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The plan names exact files, risks and tests.
