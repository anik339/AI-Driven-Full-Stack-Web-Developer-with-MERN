# Stage Only Intended Files

## Task
You changed source code and generated output, but only source files should be committed.

## Main concept
Staging

## Expected result
Only the intended source files are staged.

## Explanation
Ask Claude Code to inspect git status and recommend exact files to stage.

## Try it yourself
Run git diff --cached to inspect what will be committed.

## How to run
1. Open this problem folder in VS Code.
2. Read `TASK.md` and `PROMPT.md` first.
3. Open `sample-project/index.html` with Live Server to see the sample page.
4. Copy the prompt into Claude Code only after reviewing the working rules.
5. Check the proposed diff and complete `ACCEPTANCE_CHECKLIST.md` yourself.
