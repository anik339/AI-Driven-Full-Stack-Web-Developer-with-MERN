# Claude Code Prompt — Inspect a Repository Before Editing

**Context:** You have opened an unfamiliar web project. Understand its structure before changing any files.

**Request:** Read-only inspection only. Do not install packages or modify files. List unknowns and risks.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The report names the main folders, entry files, available scripts and a safe next step.
