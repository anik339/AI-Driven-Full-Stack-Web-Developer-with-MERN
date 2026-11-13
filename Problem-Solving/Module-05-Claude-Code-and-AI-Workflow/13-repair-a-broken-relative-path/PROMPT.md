# Claude Code Prompt — Repair a Broken Relative Path

**Context:** An image or stylesheet does not load after a file was moved into a subfolder.

**Request:** Do not rename or move assets unless necessary. Verify case-sensitive paths.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The referenced file loads and no unrelated links are changed.
