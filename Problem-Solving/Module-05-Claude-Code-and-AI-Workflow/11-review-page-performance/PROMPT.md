# Claude Code Prompt — Review Page Performance

**Context:** A page contains large images, unnecessary assets and render-blocking resources.

**Request:** Do not delete assets or change image URLs until usage is confirmed. Do not invent Lighthouse scores.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The report identifies measurable checks and safe optimizations.
