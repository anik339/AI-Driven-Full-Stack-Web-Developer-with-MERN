# Task 25 — Explore the Prototype Chain

**Track:** JavaScript object model  
**Focus:** Object.create · prototype chain · hasOwn

## Problem

Create a vehicle prototype with a start method. Create a car object that inherits from it and distinguish own from inherited properties.

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

start is inherited, while brand and model are own properties of car.

## Stretch challenge

Add a second vehicle object and compare its prototype with the first car.

## Professional note

Prefer small, readable functions, meaningful names, explicit validation, and behavior that can be tested independently.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.
