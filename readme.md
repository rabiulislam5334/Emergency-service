1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

ans. getElementById:Only return one uniqe element.
getElementsByClassName:return one & more html collection element.
querySelector:it looking for css selector & return first element.
querySelectorAll:matching all css selector element.

2. How do you **create and insert a new element into the DOM**?
   ans. create element:document.createElement("tagName")
   insert element:appendChild() or append()

3. What is **Event Bubbling** and how does it work?
   ans.Event bubbling stars from target element.
   it works child-parent-grandparents
4. What is **Event Delegation** in JavaScript? Why is it useful?
   ans.event delegation hold parent element and works chilid element.
   useful:handle dynamic elements, easy to maintance code
5. What is the difference between **preventDefault() and stopPropagation()** methods?
   preventDefault() :stop any elements defual behavior.
   stopPropagation():stop go to parent element.
