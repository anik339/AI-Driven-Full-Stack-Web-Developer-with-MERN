# Repair a Broken Relative Path

## Task
An image or stylesheet does not load after a file was moved into a subfolder.

## Main concept
Debugging

## Expected result
The referenced file loads and no unrelated links are changed.

## Explanation
Ask Claude Code to check the file tree and correct the relative path from the page that references it.

## Try it yourself
Move a page one folder deeper and update its paths.

## How to run
1. Open this problem folder in VS Code.
2. Read `TASK.md` and `PROMPT.md` first.
3. Open `sample-project/index.html` with Live Server to see the sample page.
4. Copy the prompt into Claude Code only after reviewing the working rules.
5. Check the proposed diff and complete `ACCEPTANCE_CHECKLIST.md` yourself.
