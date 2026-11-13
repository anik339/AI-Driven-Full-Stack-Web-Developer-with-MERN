# Claude Code Prompt — Audit npm Scripts

**Context:** You need to know which commands are available to run and build the project.

**Request:** Do not invent commands. Do not execute a production build without checking its impact.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** Every documented command exists in package.json.
