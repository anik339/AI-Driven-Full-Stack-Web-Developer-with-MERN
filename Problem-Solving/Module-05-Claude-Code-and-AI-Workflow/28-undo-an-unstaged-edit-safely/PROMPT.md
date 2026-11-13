# Claude Code Prompt — Undo an Unstaged Edit Safely

**Context:** You accidentally changed one line in a practice file and want to understand safe recovery.

**Request:** Do not run destructive commands. First inspect the diff and make a backup if the work may matter.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The explanation distinguishes restore, checkout and reset and warns about data loss.
