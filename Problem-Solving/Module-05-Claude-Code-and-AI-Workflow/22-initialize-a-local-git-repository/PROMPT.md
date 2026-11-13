# Claude Code Prompt — Initialize a Local Git Repository

**Context:** A new project folder is not yet tracked by Git.

**Request:** Use git init, inspect git status, add only intended files and create a descriptive initial commit. Do not push yet.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The project has a local repository and a clean working tree after commit.
