# 12. Todo App — Bad Way vs Good Way

## What you will learn
- Why one large event handler becomes hard to maintain.
- How to separate state, element creation, rendering and user actions.
- Why `textContent` is safer than inserting user input with `innerHTML`.
- How event delegation handles dynamically created controls.

## Run
Open `index.html` with VS Code Live Server. Add and delete tasks in both versions. Compare the two JavaScript files.

## Practice
1. Add a completed-task filter to Version B.
2. Add localStorage persistence to Version B.
3. Explain why the good version has one delegated listener.

Version A is intentionally less maintainable, but it avoids inserting user input as HTML. It is a learning comparison, not a recommended production pattern.
