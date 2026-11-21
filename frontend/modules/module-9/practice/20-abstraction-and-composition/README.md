# Abstraction and Composition

Hide implementation details behind a small public API and build behavior by composing focused objects.

## Example
Open `index.html` with VS Code Live Server. The example runs from `script.js` and prints its result on the page and in DevTools Console.

## Expected result
subtotal: 1000 | tax: 50 | total: 1050

## Challenge
Replace `TaxCalculator` with a different calculator object without changing `OrderSummary`. Explain how composition reduces direct dependency on implementation details.

## Review questions
1. What problem does this concept solve?
2. What would happen if you changed one input or method?
3. Can you explain the example without reading the code?
