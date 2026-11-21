# Task 35 — Create and Handle Custom Error Classes

**Track:** JavaScript reliability  
**Focus:** extends Error · custom errors · try/catch

## Problem

Create an InsufficientFundsError and use it in a BankAccount withdrawal method. Catch the error and display its name and message.

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

The catch block identifies InsufficientFundsError and prints the requested and available amounts.

## Stretch challenge

Add InvalidAmountError for zero, negative, or non-numeric withdrawal amounts.

## Professional note

Prefer small, readable functions, meaningful names, explicit validation, and behavior that can be tested independently.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.
