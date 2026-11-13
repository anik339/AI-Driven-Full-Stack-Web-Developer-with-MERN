# Claude Code Prompt — Restrict the File Scope

**Context:** You want to change one component without touching the rest of the repository.

**Request:** If another file is required, stop and ask before changing it. Do not reformat unrelated files.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The diff contains only approved files.
