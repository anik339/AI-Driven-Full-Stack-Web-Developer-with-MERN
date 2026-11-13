# Claude Code Prompt — Inspect a Git Diff

**Context:** You want to verify what changed before committing.

**Request:** Read-only. Do not stage or commit.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The review accurately describes additions, deletions and modifications.
