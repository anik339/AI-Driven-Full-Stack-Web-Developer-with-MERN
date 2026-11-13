# Claude Code Prompt — Verify Dependencies Before Installing

**Context:** A tutorial suggests installing a package, but the project may already have it.

**Request:** Do not install or upgrade dependencies without approval. Explain why the package is needed.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The recommendation is based on the existing dependency list.
