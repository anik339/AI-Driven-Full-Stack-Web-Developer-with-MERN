# Claude Code Prompt — Run an Accessibility Review

**Context:** A landing page needs a basic accessibility review before publishing.

**Request:** Report findings first. Do not silently change the code. Separate confirmed problems from items needing manual testing.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The report lists issue, location, impact, proposed fix and verification step.
