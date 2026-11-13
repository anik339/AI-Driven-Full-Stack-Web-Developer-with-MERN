# Claude Code Prompt — Break a Feature into Small Tasks

**Context:** A feature request is too broad to implement safely in one change.

**Request:** Planning only. Do not edit code until the plan is approved. Identify assumptions and edge cases.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The plan is small, testable and ordered by dependency.
