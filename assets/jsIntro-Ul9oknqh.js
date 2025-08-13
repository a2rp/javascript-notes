import{j as e}from"./index-BD-dhyAQ.js";import{C as s}from"./CodeEditor-B-vvOjsZ.js";function r(){return e.jsxs("div",{children:[e.jsx("h2",{children:"JavaScript Intro"}),e.jsxs("p",{children:["JavaScript runs both in the ",e.jsx("b",{children:"browser"})," (controls the DOM) and in",e.jsx("b",{children:" Node.js"})," (server-side: files, network, etc.). This primer covers core program structure pieces you'll use everywhere."]}),e.jsx("h3",{children:"Statements vs Expressions"}),e.jsxs("p",{children:["An ",e.jsx("b",{children:"expression"})," evaluates to a value (e.g., ",e.jsx("code",{children:"3 + 4"}),",",e.jsx("code",{children:'"A" + "B"'}),", ",e.jsx("code",{children:"user.name"}),").",e.jsx("br",{}),"A ",e.jsx("b",{children:"statement"})," performs an action (e.g., ",e.jsx("code",{children:"let x = 10;"}),", ",e.jsx("code",{children:"if (cond) ..."}),").",e.jsx("br",{}),"Expressions can live inside statements."]}),e.jsx(s,{defaultCode:`// Expressions produce values:
console.log("Expr:", 3 + 4);      // 7
console.log("Expr:", "A" + "B");  // "AB"

// Statements do actions:
let x = 10;                       // declaration statement
x = x + 5;                        // assignment statement
console.log("x =", x);            // 15

// Expression inside a statement:
if (x > 10) console.log("x is big");`}),e.jsx("h3",{children:"'use strict'"}),e.jsxs("p",{children:[e.jsx("code",{children:"'use strict'"})," catches common mistakes early (e.g., assigning to undeclared variables, duplicate params).",e.jsx("br",{})," Use it for safer code."]}),e.jsx(s,{defaultCode:`'use strict';

// ❌ Undeclared variable assignment (throws in strict mode)
try {
  y = 42;
} catch (e) {
  console.error(e.message); // ReferenceError: y is not defined
}

// ✅ Correct
let y = 42;
console.log("y =", y);

// ❌ Duplicate parameter names (syntax error in strict mode)
try {
  function bad(a, a) { return a; }
  console.log(bad(1, 2));
} catch (e) {
  console.error(e.message);
}`}),e.jsx("h3",{children:"Comments & ASI (Automatic Semicolon Insertion)"}),e.jsxs("p",{children:["Comments: ",e.jsx("code",{children:"// single-line"})," and"," ",e.jsx("code",{children:"/* multi-line */"}),".",e.jsx("br",{}),"ASI inserts semicolons you omit; the main pitfall is ",e.jsx("code",{children:"return"})," followed by a newline."]}),e.jsx(s,{defaultCode:`// Comments
let name = "Ashish";  // single-line
/* multi
   line
   comment */
console.log(name);

// ⚠️ ASI pitfall: newline after return
function getUser() {
  return
  { name: "Ashish" }   // ASI inserts a semicolon after 'return'
}
console.log("getUser() =>", getUser()); // undefined

// ✅ Correct: keep the object on the same line
function getUserFixed() {
  return { name: "Ashish" };
}
console.log("getUserFixed() =>", getUserFixed());`}),e.jsx("h3",{children:"Async taste: why the order is “Start, A, B, End”"}),e.jsxs("p",{children:["With ",e.jsx("code",{children:"async/await"}),", the code after ",e.jsx("code",{children:"await"})," resumes as a ",e.jsx("b",{children:"microtask"}),". We see microtasks run after the current synchronous work completes."]}),e.jsx(s,{defaultCode:`async function demo() {
  console.log("A");
  await Promise.resolve(); // microtask continuation
  console.log("B");
}

console.log("Start");
await demo();
console.log("End"); // Start, A, B, End`}),e.jsxs("h4",{children:["Contrast: without ",e.jsx("code",{children:"await"})]}),e.jsxs("p",{children:["Here, we don’t wait for the microtask; the main thread continues to"," ",e.jsx("code",{children:"End"})," before ",e.jsx("code",{children:"B"}),"."]}),e.jsx(s,{defaultCode:`function demo() {
  console.log("A");
  Promise.resolve().then(() => console.log("B")); // microtask queued
}

console.log("Start");
demo();
console.log("End"); // Start, A, End, B`})]})}export{r as default};
