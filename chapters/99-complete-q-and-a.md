# 99. Complete questions and answers

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: All code samples](./98-all-code-samples.md) | [Notes index](../README.md) | End of notes |

## Source chapter: [Start with JavaScript](./01-start-with-javascript.md)

1. What is JavaScript used for?
   **Answer:** JavaScript adds behavior and interaction to web pages and also runs in servers and other environments.
2. What does ECMAScript define?
   **Answer:** ECMAScript defines the standardized syntax and behavior of the JavaScript language.
3. What is a runtime?
   **Answer:** A runtime is an environment that executes JavaScript and supplies host-specific features.
4. Which browser tool can run a short JavaScript expression?
   **Answer:** The browser developer console can evaluate a short JavaScript expression.
5. Which command runs main.js with Node.js?
   **Answer:** Run node main.js in a terminal from the folder containing the file.
6. Does Node.js provide the browser's document object by default?
   **Answer:** No. document belongs to the browser DOM and is not provided by Node.js by default.
7. What does console.log do?
   **Answer:** console.log writes values to the console or runtime output for inspection.
8. What should you inspect first when an error message points to a source line?
   **Answer:** Start with the reported file and line, then inspect the surrounding code and values.

## Source chapter: [Values, variables, and types](./02-values-variables-and-types.md)

1. What does dynamically typed mean in JavaScript?
   **Answer:** Dynamically typed means a variable can hold values of different types at different times, and its current type comes from its value.
2. When should you use let instead of const?
   **Answer:** Use let when a binding must be assigned a new value later. Use const when it will not be reassigned.
3. Does const make an object immutable?
   **Answer:** No. const prevents rebinding the variable but does not freeze an object stored in it.
4. What are JavaScript's seven primitive types?
   **Answer:** The seven primitive types are string, number, bigint, boolean, undefined, null, and symbol.
5. Why does typeof null return "object"?
   **Answer:** It is a historical behavior of typeof. Check null with a strict comparison to null.
6. What happens when an object reference is assigned to another variable?
   **Answer:** The second variable receives a copy of the reference, so both can refer to the same object.
7. How do undefined and null differ?
   **Answer:** undefined commonly means a value is missing or not assigned. null is an explicit no-object value.
8. Why should input conversion be explicit?
   **Answer:** Explicit conversion makes the intended type clear and allows the program to validate the result.

## Source chapter: [Operators and control flow](./03-operators-and-control-flow.md)

1. What does 10 % 3 evaluate to?
   **Answer:** It evaluates to 1, the remainder after dividing 10 by 3.
2. Why is === usually preferred to ==?
   **Answer:** Strict equality compares without converting different types and avoids surprising coercion.
3. Is an empty array falsy?
   **Answer:** No. An empty array is truthy in JavaScript.
4. Which values trigger the fallback in a ?? expression?
   **Answer:** The fallback runs only when the left value is null or undefined.
5. What does short-circuit evaluation mean for &&?
   **Answer:** With &&, a false left operand skips evaluation of the right operand.
6. When is a switch statement useful?
   **Answer:** A switch statement is useful for choosing among several fixed cases based on one value.
7. What does for...of provide on each iteration?
   **Answer:** It provides the next value from the iterable on each pass.
8. What is the difference between break and continue?
   **Answer:** break exits the loop. continue skips the rest of the current pass and starts the next.

## Source chapter: [Functions and closures](./04-functions-and-closures.md)

1. What is the difference between a parameter and an argument?
   **Answer:** A parameter is a named input in a function declaration. An argument is the value passed at a call.
2. What does a function return when it has no return statement?
   **Answer:** It returns undefined.
3. When is a default parameter used?
   **Answer:** The default is used when the argument is omitted or is undefined.
4. What is one important difference between an arrow function and a regular function?
   **Answer:** An arrow function takes this from its surrounding scope and cannot be called as a constructor.
5. What is a callback?
   **Answer:** A callback is a function passed to another function so it can be called later.
6. What does higher-order function mean?
   **Answer:** A higher-order function accepts a function, returns a function, or both.
7. What does a closure retain access to?
   **Answer:** A closure retains access to variables from the lexical scope where its function was created.
8. Why is a focused function easier to test?
   **Answer:** A focused function has a clear, small responsibility, so its inputs and result are easier to check.

## Source chapter: [Arrays and iteration](./05-arrays-and-iteration.md)

1. What index identifies the first array element?
   **Answer:** Index zero identifies the first array element.
2. What does push return and change?
   **Answer:** push adds values to the end of the original array and returns its new length.
3. When is for...of a good choice?
   **Answer:** Use for...of when you need each value and do not need to manage an index.
4. What does map return?
   **Answer:** map returns a new array containing the callback result for each source element.
5. What does find return if there is no match?
   **Answer:** It returns undefined.
6. How do some and every differ?
   **Answer:** some is true if at least one item passes. every is true only if all items pass.
7. Why should numeric sort use a comparator?
   **Answer:** Without a comparator, sort compares as strings, which gives unexpected numeric ordering.
8. What does a shallow array copy still share?
   **Answer:** A shallow copy still shares nested object references with the original array.

## Source chapter: [Objects and properties](./06-objects-and-properties.md)

1. What does an object literal group together?
   **Answer:** An object groups related values and behavior under named properties.
2. When should bracket notation be used?
   **Answer:** Use bracket notation for computed names or names that are not valid dot-property identifiers.
3. What value does reading a missing property return?
   **Answer:** Reading a missing property returns undefined.
4. What does optional chaining do when its left side is null?
   **Answer:** It stops the access and returns undefined if the value before it is null or undefined.
5. When does a destructuring default apply?
   **Answer:** A destructuring default applies when the property value is undefined.
6. What does object spread copy?
   **Answer:** Object spread copies enumerable own properties into a new object.
7. Why is object spread called a shallow copy?
   **Answer:** It copies only top-level properties, so nested objects remain shared references.
8. How does Object.hasOwn differ from the in operator?
   **Answer:** Object.hasOwn checks only a direct property. The in operator also searches the prototype chain.

## Source chapter: [Prototypes and classes](./07-prototypes-and-classes.md)

1. Where does JavaScript look after an object does not have a requested property?
   **Answer:** JavaScript checks the object's prototype and continues through the prototype chain until it finds the property or reaches null.
2. What does Object.create do in the example?
   **Answer:** It creates a new object whose prototype is the supplied animal object.
3. Where are class methods placed?
   **Answer:** They are placed on the class prototype and shared by instances.
4. What must a subclass constructor call before it uses this?
   **Answer:** It must call super before using this.
5. How is a private field written?
   **Answer:** A private field starts with the number sign followed by its name inside a class.
6. What does method overriding mean?
   **Answer:** A subclass method with the same name replaces the inherited behavior for that method.
7. When is inheritance a good fit?
   **Answer:** Inheritance fits when a child can truly be used wherever its parent is expected.
8. What does composition mean in the car example?
   **Answer:** Composition means an object uses or contains cooperating parts, such as a car using an engine.

## Source chapter: [Built-in collections](./08-built-in-collections.md)

1. Which collection stores key-value pairs and remembers insertion order?
   **Answer:** Map stores key-value pairs and preserves insertion order.
2. Can a Map use an object as a key?
   **Answer:** Yes. A Map can use any value, including an object, as a key.
3. Why can a new object with the same fields fail to find a Map entry?
   **Answer:** Map compares object keys by identity, so a different object with the same fields is not the stored key.
4. What happens when the same value is added to a Set twice?
   **Answer:** The Set keeps only one entry for that value.
5. How can a Set remove duplicate primitive values from an array?
   **Answer:** Construct a Set from the array and spread its values into a new array.
6. Why can WeakMap entries not be listed?
   **Answer:** WeakMap does not expose iteration or size, which allows keys to be collected when otherwise unused.
7. When is a plain object a suitable data structure?
   **Answer:** A plain object suits a small record with known property names.
8. Which collection should you choose when values must be unique?
   **Answer:** Choose Set when each stored value should be unique.

## Source chapter: [Strings, numbers, dates, and regular expressions](./09-strings-numbers-dates-and-regex.md)

1. Do string methods such as trim change the original string?
   **Answer:** No. Methods such as trim return a new string and leave the original unchanged.
2. What does String.length count?
   **Answer:** It counts UTF-16 code units, which can differ from visible characters.
3. Why can 0.1 + 0.2 differ from 0.3?
   **Answer:** Numbers use binary floating point, and some decimal fractions cannot be represented exactly.
4. Which method checks whether a number is finite?
   **Answer:** Number.isFinite checks whether a value is a finite number.
5. Why should parseInt receive a radix?
   **Answer:** A radix tells parseInt which number base to use.
6. Which API formats currency for a locale?
   **Answer:** Intl.NumberFormat formats numbers and currencies for a locale.
7. Why should an instant include an explicit time zone?
   **Answer:** An explicit time zone identifies a precise instant and avoids local-time ambiguity.
8. What do the ^ and $ anchors check in a regular expression?
   **Answer:** The anchors require a match to begin at the input start and finish at its end.

## Source chapter: [Errors and debugging](./10-errors-and-debugging.md)

1. How does a logic error differ from a runtime error?
   **Answer:** A logic error produces the wrong result. A runtime error occurs during execution and can interrupt the program.
2. When should input validation happen?
   **Answer:** Validate data where it enters the program, before relying on it in operations.
3. What kind of value should throw usually receive?
   **Answer:** An Error object is preferred because it carries a message, name, and stack details.
4. When is a catch block useful?
   **Answer:** Catch when this code can recover, report a useful message, or add context.
5. When does finally run?
   **Answer:** finally runs after try and catch whether the operation succeeds or fails.
6. Why might a custom error class help?
   **Answer:** A specific error type lets callers recognize one known failure separately.
7. Which browser DevTools panel can pause at a breakpoint?
   **Answer:** The Sources panel can pause execution at a breakpoint and inspect values.
8. Why is returning an empty value after every error risky?
   **Answer:** Returning an empty value for every failure hides the cause and can make failure look successful.

## Source chapter: [The DOM and page updates](./11-dom-and-page-updates.md)

1. What does the DOM represent?
   **Answer:** The DOM represents an HTML document as nodes and objects that browser code can inspect and update.
2. What does querySelector return when nothing matches?
   **Answer:** It returns null when no element matches.
3. How does querySelectorAll differ from querySelector?
   **Answer:** querySelector returns the first match. querySelectorAll returns a static list of all matches.
4. Why is textContent preferred for plain user text?
   **Answer:** textContent inserts plain text without parsing it as markup.
5. How can JavaScript create a new list item?
   **Answer:** Create an element with document.createElement, set its textContent, and append it to a parent.
6. What risk comes from putting untrusted text into innerHTML?
   **Answer:** innerHTML parses input as markup, so untrusted content can create unsafe elements or script behavior.
7. What does classList.add do?
   **Answer:** classList.add adds the named CSS class to the element.
8. Why should page updates consider assistive technology?
   **Answer:** Accessible updates use semantic HTML and announce important changes to assistive technology.

## Source chapter: [Events and forms](./12-events-and-forms.md)

1. What does addEventListener do?
   **Answer:** It registers a function to run when the specified event occurs on that target.
2. What does event.target identify?
   **Answer:** event.target identifies the element where the event began.
3. How does event.currentTarget differ from event.target?
   **Answer:** currentTarget is the element whose listener is running. target is the event origin.
4. What is event delegation?
   **Answer:** Event delegation uses a parent listener to handle events from matching child elements.
5. Which event should usually handle a form submission?
   **Answer:** The submit event handles both button and keyboard form submission.
6. What does preventDefault cancel?
   **Answer:** It cancels the browser's default action for that event.
7. Why must server-side code validate submitted data?
   **Answer:** Client-side checks can be bypassed, so the server must also validate received data.
8. What is needed to remove a listener later?
   **Answer:** Keep the same callback function reference and use matching listener options when removing it.

## Source chapter: [Asynchronous JavaScript](./13-asynchronous-javascript.md)

1. Why does a timer callback run after synchronous statements?
   **Answer:** The event loop can run the scheduled callback after the current synchronous stack finishes.
2. What are the three common states of a promise?
   **Answer:** Pending, fulfilled, and rejected.
3. What does a promise's then method receive?
   **Answer:** It receives the fulfillment value from the promise.
4. What does an async function always return?
   **Answer:** An async function always returns a promise.
5. What does await pause?
   **Answer:** await pauses the current async function until the promise settles; other work can continue.
6. When should Promise.all be used?
   **Answer:** Use Promise.all when independent operations should start together and all results are needed.
7. What happens to Promise.all if one input promise rejects?
   **Answer:** The combined promise rejects when an input rejects, but it does not cancel the other operations.
8. Why should a promise rejection be handled?
   **Answer:** Handling rejection lets the program report or recover from failure instead of leaving it unobserved.

## Source chapter: [JavaScript modules](./14-javascript-modules.md)

1. What problem do modules help solve?
   **Answer:** They split code into files with explicit dependencies and exports, while keeping top-level names scoped.
2. How does a named import identify the exported value?
   **Answer:** A named import uses the exported name, unless the importer renames it with as.
3. How many default exports can a module have?
   **Answer:** A module can have one default export.
4. What does script type="module" enable in a browser?
   **Answer:** It enables import and export syntax and runs as a browser module.
5. How are relative import paths resolved?
   **Answer:** A relative import path is resolved relative to the importing module's location.
6. What does dynamic import return?
   **Answer:** Dynamic import returns a promise for the module namespace object.
7. Can an importing module assign to an imported binding?
   **Answer:** No. An imported binding is read-only to the importing module.
8. What can help simplify a circular dependency?
   **Answer:** Move shared code into a third module or redesign the dependency boundary.

## Source chapter: [HTTP requests with Fetch](./15-http-requests-with-fetch.md)

1. What does fetch return?
   **Answer:** It returns a promise that fulfills with a Response when an HTTP response is received.
2. Does a 404 response normally reject the fetch promise?
   **Answer:** No. HTTP error statuses such as 404 normally fulfill with a Response; they do not reject the fetch promise.
3. What does response.ok indicate?
   **Answer:** response.ok is true when the HTTP status indicates success, generally in the 200 to 299 range.
4. What does response.json do?
   **Answer:** It reads the response body and asynchronously parses it as JSON.
5. Why use URLSearchParams?
   **Answer:** URLSearchParams safely encodes query names and values, including spaces and special characters.
6. Which method and body format are common for sending JSON?
   **Answer:** A POST request commonly sends JSON text made with JSON.stringify and a Content-Type header.
7. How can a request be cancelled?
   **Answer:** Call AbortController.abort using the signal supplied to the request.
8. Why should a secret API key not be stored in browser JavaScript?
   **Answer:** Browser JavaScript is visible to users and can be read by injected page scripts, so it cannot protect a private key.

## Source chapter: [Browser storage and safe patterns](./16-browser-storage-and-safe-patterns.md)

1. What type of value does Web Storage store?
   **Answer:** Web Storage stores string values.
2. How does sessionStorage differ from localStorage?
   **Answer:** localStorage normally persists for the same origin across browser sessions. sessionStorage is scoped to a tab session.
3. What does JSON.parse validate?
   **Answer:** JSON.parse checks whether the text is valid JSON, not whether its structure or values match what the program expects.
4. Why should data from storage be checked before use?
   **Answer:** Saved values can be missing, changed, outdated, malformed, or untrusted.
5. Which API is suited to larger structured browser data?
   **Answer:** IndexedDB is designed for larger structured browser data and asynchronous access.
6. Why should a private API key not be stored in localStorage?
   **Answer:** Page JavaScript can read localStorage, so an exposed key can be copied or stolen.
7. What does the HttpOnly cookie attribute prevent?
   **Answer:** HttpOnly prevents page JavaScript from reading the cookie.
8. Which DOM property should display untrusted plain text?
   **Answer:** Use textContent to display untrusted plain text safely.
