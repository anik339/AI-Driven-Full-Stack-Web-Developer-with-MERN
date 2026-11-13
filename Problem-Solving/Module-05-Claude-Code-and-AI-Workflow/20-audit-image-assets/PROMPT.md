# Claude Code Prompt — Audit Image Assets

**Context:** A project has many image files with unclear dimensions and alt text.

**Request:** Do not delete images. Do not invent image descriptions when the image is not visible.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The report maps image path, usage, dimensions if known and suggested action.
