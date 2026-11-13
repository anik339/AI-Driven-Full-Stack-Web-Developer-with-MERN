# Claude Code Prompt — Check Responsive Breakpoints

**Context:** A page looks correct on desktop but breaks at tablet width.

**Request:** Do not use device-specific guesses. Check 320px, 375px, 768px, 1024px and 1280px.

**Working rules:**
- Inspect the relevant files before proposing changes.
- Explain the plan and identify files that may change.
- Do not edit unrelated files or add dependencies without approval.
- Do not invent test results, URLs, screenshots or project facts.
- Explain the important code changes in beginner-friendly language.

**Acceptance criteria:** The layout has no horizontal overflow and controls remain usable.
