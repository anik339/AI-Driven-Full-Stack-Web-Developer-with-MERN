# Task 39 — Build a Small Event Emitter

**Track:** Application architecture  
**Focus:** observer pattern · publish/subscribe · unsubscribe

## Problem

Implement an EventEmitter with on, emit, and off methods. Register two listeners, emit an event, and remove one listener.

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

Both listeners run for order 101; only the toast listener runs for order 102.

## Stretch challenge

Add a once(eventName, callback) method that automatically unsubscribes after the first event.

## Professional note

Prefer small, readable functions, meaningful names, explicit validation, and behavior that can be tested independently.

## Self-review

- [ ] I attempted the task before reading the reference solution.
- [ ] I can explain the important code lines without reading the comments.
- [ ] I tested a normal case and an edge case.
- [ ] I completed or documented the stretch challenge.
