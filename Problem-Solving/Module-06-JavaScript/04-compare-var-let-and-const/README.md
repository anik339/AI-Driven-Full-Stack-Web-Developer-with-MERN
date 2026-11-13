# Compare var, let and const

## Task
Observe how let can be reassigned while const cannot.

## Main concept
variable declarations and reassignment

## Expected result
var: var; let after change: second; const: constant.

## Explanation
let and const are block-scoped. const prevents reassignment of the binding, but an object declared with const can still have its properties changed.

## Try it yourself
Try to reassign fixedValue in a separate copy and read the error.

## How to run
1. Open this problem folder in VS Code.
2. Open `index.html` with Live Server.
3. Read the source file and comments before changing anything.
4. Make your own version of the challenge and test it in the browser.
