import CodeEditor from "../../components/CodeEditor";

export default function JsIntroTopic() {
    return (
        <div>
            <h2>JavaScript Intro</h2>
            <p>
                JavaScript runs both in the <b>browser</b> (controls the DOM) and in
                <b> Node.js</b> (server-side: files, network, etc.). This primer covers core program structure pieces you'll use everywhere.
            </p>

            <h3>Statements vs Expressions</h3>
            <p>
                An <b>expression</b> evaluates to a value (e.g., <code>3 + 4</code>,
                <code>"A" + "B"</code>, <code>user.name</code>).
                <br />
                A <b>statement</b> performs an action (e.g., <code>let x = 10;</code>, <code>if (cond) ...</code>).
                <br />
                Expressions can live inside statements.
            </p>

            <CodeEditor
                defaultCode={`// Expressions produce values:
console.log("Expr:", 3 + 4);      // 7
console.log("Expr:", "A" + "B");  // "AB"

// Statements do actions:
let x = 10;                       // declaration statement
x = x + 5;                        // assignment statement
console.log("x =", x);            // 15

// Expression inside a statement:
if (x > 10) console.log("x is big");`}
            />

            <h3>'use strict'</h3>
            <p>
                <code>'use strict'</code> catches common mistakes early (e.g., assigning to undeclared variables, duplicate params).
                <br /> Use it for safer code.
            </p>

            <CodeEditor
                defaultCode={`'use strict';

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
}`}
            />

            <h3>Comments & ASI (Automatic Semicolon Insertion)</h3>
            <p>
                Comments: <code>// single-line</code> and{' '}
                <code>/* multi-line */</code>.
                <br />
                ASI inserts semicolons you omit; the
                main pitfall is <code>return</code> followed by a newline.
            </p>

            <CodeEditor
                defaultCode={`// Comments
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
console.log("getUserFixed() =>", getUserFixed());`}
            />

            <h3>Async taste: why the order is “Start, A, B, End”</h3>
            <p>
                With <code>async/await</code>, the code after <code>await</code> resumes
                as a <b>microtask</b>. We see microtasks run after the current synchronous
                work completes.
            </p>

            <CodeEditor
                defaultCode={`async function demo() {
  console.log("A");
  await Promise.resolve(); // microtask continuation
  console.log("B");
}

console.log("Start");
await demo();
console.log("End"); // Start, A, B, End`}
            />

            <h4>Contrast: without <code>await</code></h4>
            <p>
                Here, we don’t wait for the microtask; the main thread continues to{" "}
                <code>End</code> before <code>B</code>.
            </p>

            <CodeEditor
                defaultCode={`function demo() {
  console.log("A");
  Promise.resolve().then(() => console.log("B")); // microtask queued
}

console.log("Start");
demo();
console.log("End"); // Start, A, End, B`}
            />
        </div>
    );
}
