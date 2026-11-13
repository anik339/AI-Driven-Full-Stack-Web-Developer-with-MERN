# Claude Code Prompt — Review Changes Before Commit

**Context:** You have modified several files and want to understand the impact.

**Request:** Read-only review. Do not stage, commit or reset files.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The review references actual changed files and lines and identifies untested behaviour.
