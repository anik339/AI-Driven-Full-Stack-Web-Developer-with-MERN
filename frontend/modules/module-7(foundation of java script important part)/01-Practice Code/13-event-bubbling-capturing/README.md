# 13. Event Bubbling, Capturing and Delegation — Optional Self-study

This topic is not explicitly listed in the supplied class screenshot. It is an additional DOM concept that helps explain event delegation.

## Concepts
- Capturing phase: event travels from outer ancestors toward the target.
- Target phase: event reaches the clicked element.
- Bubbling phase: event travels back toward ancestors.
- `stopPropagation()` stops further propagation.
- Event delegation attaches a listener to a parent and checks `event.target`/`closest()`.

Run `index.html` with Live Server and click the nested button.
