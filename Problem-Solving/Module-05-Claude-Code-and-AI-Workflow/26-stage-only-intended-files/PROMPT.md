# Claude Code Prompt — Stage Only Intended Files

**Context:** You changed source code and generated output, but only source files should be committed.

**Request:** Do not use git add . without reviewing the file list. Never stage credentials.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** Only the intended source files are staged.
