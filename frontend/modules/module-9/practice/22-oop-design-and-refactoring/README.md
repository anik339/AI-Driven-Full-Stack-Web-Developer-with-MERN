# OOP Design Principles and Refactoring

Separate responsibilities, keep classes focused, and prefer composition when it produces simpler designs.

## Example
Open `index.html` with VS Code Live Server. The example runs from `script.js` and prints its result on the page and in DevTools Console.

## Expected result
A TaskService creates tasks through TaskRepository; each class has one clear responsibility.

## Challenge
Refactor one large class into a model, repository, service, and UI/controller layer. Explain the single-responsibility principle and why each class exists.

## Review questions
1. What problem does this concept solve?
2. What would happen if you changed one input or method?
3. Can you explain the example without reading the code?
