# Claude Code Prompt — Create a Useful .gitignore

**Context:** The repository should not track dependencies, secrets or generated files.

**Request:** Do not ignore source files, package manifests or lockfiles. Never add real secrets to examples.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The ignore file matches actual project tools and preserves required source files.
