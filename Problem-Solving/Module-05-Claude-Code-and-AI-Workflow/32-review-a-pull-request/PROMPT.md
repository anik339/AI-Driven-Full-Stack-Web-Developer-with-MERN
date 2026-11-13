# Claude Code Prompt — Review a Pull Request

**Context:** A teammate has submitted a pull request with a UI change.

**Request:** Report findings with file and line references. Do not approve automatically or invent bugs.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** Findings are actionable and distinguish blockers from suggestions.
