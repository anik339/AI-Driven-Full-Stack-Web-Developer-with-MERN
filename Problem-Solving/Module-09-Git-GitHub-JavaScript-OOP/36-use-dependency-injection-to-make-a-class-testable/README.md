# Task 36 — Use Dependency Injection to Make a Class Testable

**Track:** Application architecture  
**Focus:** dependency injection · constructor parameters · test doubles

## Problem

Create a GreetingService that receives a user repository. Test it with a fake repository that does not use a database.

## Requirements

1. Read the problem and write down your own plan before opening the solution.
2. Complete the requested behavior and test at least one normal case.
3. Test one edge case or invalid input where relevant.
4. Explain why the solution works in your own words.

## Run and review

- Open `index.html` with VS Code Live Server.
- Click **Run example** to see the reference output, then inspect `script.js` line by line.
- Read the comments before copying or adapting the reference solution.

## Reference result

The service greets user 1 and returns User not found for an unknown id.

## Stretch challenge

Inject a logger too, and verify the service can run with a no-op logger.

## Professional note

Prefer small, readable functions, meaningful names, explicit validation, and behavior that can be tested independently.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.
