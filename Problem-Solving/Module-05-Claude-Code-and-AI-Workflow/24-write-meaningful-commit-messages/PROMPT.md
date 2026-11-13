# Claude Code Prompt — Write Meaningful Commit Messages

**Context:** Your commit history contains vague messages such as update and fix.

**Request:** Do not invent changes. Use imperative, concise messages that explain the change.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** Each message accurately summarizes one logical change.
