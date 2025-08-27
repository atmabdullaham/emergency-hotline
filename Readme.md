## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: finds the one element.
getElementsByClassName: finds all elements based on class name.
querySelector: Selects the first element that matches a specified CSS selector.
querySelectorAll: Selects all elements that match a specified CSS selector.

## How do you create and insert a new element into the DOM?

- 1st, create a new element.
  const paragraphElement = document.createElement("p");

- 2nd, insert text in the new paragraphElement.
  p.innerText= "This is new paragraph text"

- 3rd, catch the dom element where i want to insert it.
  const domElement = document.getElementById("add-here");

- 4th, append the new element as a child of the catched element.
  domElement.appendChild(paragraphElement)

## What is Event Bubbling and how does it work?

Ans: Event Bubbling is a process where an event triggers on a target element and then propagate up to its parent element.

Event Bubbling Works:

- 1st, capture phase: goes through root to target element. when user does an event, like, clicking button etc
- 2nd, target phase: The event handler on the target element is executed first.
- 3rd, Bubbling Up: The event then moves from the target element to its parent, then to the parent's parent, and so on, up the DOM tree.

## What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event Delegation: Event delegation is a process in JavaScript where add a single event listener to a common parent element, rather than attaching separate listeners to many individual child elements.
Event Delegation is useful: Event delegation is a strategy that leads to more efficient and maintainable code.

## What is the difference between preventDefault() and stopPropagation() methods?

Ans:
preventDefault(): This method prevents the default action associated with an event from occurring.
stopPropagation(): This method prevents an event from propagating (bubbling up or capturing down) through the DOM tree to parent or child elements.
