1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:getElementById() selects one element,getElementsByClassName() selects elements by class name,querySelector() selects the first element and querySelectorAll() selects all elements


2. How do you create and insert a new element into the DOM?
Ans:Use document.createElement() to create the element then add text using textContent then use appendChild() to add it to the page.

3. What is Event Bubbling? And how does it work?
Ans:Event Bubbling is a process where an event starts from the target element and then moves above to its parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:Event Delegation is a technique where you add an event listener to a parent element instead of adding it to multiple child elements.
   It is usefull beacuase:
    1:Its make code clean

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault() stops the default action and stopPropagation() stops the event flow