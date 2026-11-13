# Make Incremental Changes

## Task
A request includes five UI changes and may be difficult to review as one patch.

## Main concept
Claude Code workflow

## Expected result
Each patch is small and independently testable.

## Explanation
Ask Claude Code to implement only the first small change, verify it, then stop for review.

## Try it yourself
Apply the remaining changes one at a time.

## How to run
1. Open this problem folder in VS Code.
2. Read `TASK.md` and `PROMPT.md` first.
3. Open `sample-project/index.html` with Live Server to see the sample page.
4. Copy the prompt into Claude Code only after reviewing the working rules.
5. Check the proposed diff and complete `ACCEPTANCE_CHECKLIST.md` yourself.
