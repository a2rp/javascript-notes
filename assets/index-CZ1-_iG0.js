import{d as n,j as e}from"./index-D9xA2zEb.js";const i={Wrapper:n.div`
        padding: 24px;

        h1 {
            margin-bottom: 30px;
        }

        fieldset {
            padding: 15px;
            margin: 15px 0;
            border: 1px solid #333;

            legend {
                padding: 0 15px;
                font-size: 16px;
                color: #64493d;
            }
            p {
                margin-bottom: 15px;
                max-width: 900px;
            }
        }
    `},o="1px solid hsl(0 0% 100% / 0.12)",s={Page:n.article`
        /* padding: 24px; */
    `,H1:n.h1`
        margin: 0 0 8px;
        font-size: clamp(20px, 3vw, 28px);
        line-height: 1.2;
    `,Lead:n.p`
        margin: 0 0 16px;
        opacity: 0.9;
        max-width: 920px;
    `,Section:n.section`
        border: ${o};
        border-radius: 14px;
        background: hsl(0 0% 100% / 0.03);
        padding: 14px 16px;
        margin: 18px 0;
    `,H3:n.h3`
        margin: 0 0 8px;
        font-size: 16px;
    `,UL:n.ul`
        margin: 0;
        padding-left: 20px;
        li {
            margin: 6px 0;
            max-width: 920px;
        }
    `,Code:n.pre`
        margin: 0;
        padding: 12px 14px;
        border-radius: 10px;
        border: ${o};
        background: hsl(0 0% 100% / 0.04);
        overflow: auto;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        font-size: 13px;
        line-height: 1.5;
        white-space: pre;
    `},r=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"ECMAScript Editions & Specs"}),e.jsx(s.Lead,{children:"ECMAScript is the official standard that defines the JavaScript language. New editions are published on a yearly cadence, and features land when they complete the TC39 process and enter the specification."}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ECMAScript (ECMA-262):"})," The language spec for JavaScript — syntax, types, semantics, built-ins (e.g., ",e.jsx("code",{children:"Promise"}),", ",e.jsx("code",{children:"Map"}),", ",e.jsx("code",{children:"Array"})," methods)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Editions:"})," Historical names “ES1…ES5”; from ES2015 onward, editions are named by year (ES2015, ES2016, …). Each edition snapshots finished features."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"TC39:"})," The committee that designs JS. Proposals advance through stages (0→4). Only Stage 4 proposals are included in an edition."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hosts vs Spec:"})," The language spec excludes I/O and environment APIs. Browsers and Node.js add those (DOM, ",e.jsx("code",{children:"fetch"}),", ",e.jsx("code",{children:"fs"}),", etc.)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shipping reality:"})," Engines often ship features before the edition is finalized (behind flags or early), but only Stage 4 is “standard”."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Specification family"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ECMA-262:"})," ECMAScript Language Specification (the core JS language)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ECMA-402:"})," Internationalization APIs (",e.jsx("code",{children:"Intl.*"})," formatting, collation, etc.)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ECMA-404:"})," JSON specification (syntax of JSON text)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Web specs (separate):"})," DOM, HTML, Web APIs are defined outside ECMAScript (WHATWG/W3C)."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"TC39 proposal stages"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Stage 0:"})," Strawman — ideas being collected."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stage 1:"})," Proposal — problem statement, potential solution, examples."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stage 2:"})," Draft — syntax/semantics largely shaped; spec text begins."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stage 3:"})," Candidate — spec complete, seeking implementation feedback."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stage 4:"})," Finished — approved; will ship in the next edition."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Release model & naming"}),e.jsxs(s.UL,{children:[e.jsx("li",{children:"Annual editions (e.g., ES2015, ES2016, …). “ES6” is the colloquial name for ES2015."}),e.jsx("li",{children:"Features land when they hit Stage 4; the edition is a snapshot of all Stage 4 items that year."}),e.jsx("li",{children:"Transpilers (Babel) and polyfills help use newer features on older engines."})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Modern syntax (ES2015+)"}),e.jsx(s.Code,{children:`// let/const, arrow functions, default params, destructuring, template literals, spread
const greet = (name = "World") => \`Hello, \${name}!\`;

const person = { name: "Ash", city: "Bengaluru" };
const { name, city } = person;

const nums = [1, 2, 3];
const more = [...nums, 4];

console.log(greet());             // "Hello, World!"
console.log(\`\${name} @ \${city}\`); // "Ash @ Bengaluru"
console.log(more.join(","));      // "1,2,3,4"

// Output:
// "Hello, World!"
// "Ash @ Bengaluru"
// "1,2,3,4"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Promises and async/await"}),e.jsx(s.Code,{children:`function getValue() {
  return Promise.resolve(42);
}

async function run() {
  const x = await getValue();
  console.log("value:", x);
}

console.log("start");
run();
console.log("end");

// Output (typical):
// start
// end
// value: 42`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Optional chaining and nullish coalescing"}),e.jsx(s.Code,{children:`const user = { profile: null };

const city = user?.profile?.address?.city ?? "unknown";
console.log(city); // "unknown"

// Output:
// "unknown"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — BigInt for large integers"}),e.jsx(s.Code,{children:`const maxSafe = 9007199254740991n;   // BigInt (note the 'n' suffix)
const next = maxSafe + 1n;

console.log(typeof maxSafe);  // "bigint"
console.log(next);            // 9007199254740992n

// Output:
// "bigint"
// 9007199254740992n`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — ESM modules (illustrative)"}),e.jsx(s.Code,{children:`// math.js (module)
// export function add(a, b) { return a + b; }

// app.js (module)
// import { add } from "./math.js";
// console.log(add(2, 3)); // 5

// Output when run as modules in a host that supports ESM:
// 5`})]})]}),l=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Engine vs Runtime vs Host"}),e.jsxs(s.Lead,{children:["JavaScript runs inside an ",e.jsx("em",{children:"engine"})," that implements ECMAScript, inside a ",e.jsx("em",{children:"runtime"})," that wires scheduling and built-ins, embedded by a ",e.jsx("em",{children:"host"})," (browser, Node.js, etc.) that provides I/O and platform APIs."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition (bullet points)"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Engine"}),": Implements the ECMAScript language (parser, compiler/JIT, executor, GC). Examples: V8, SpiderMonkey, JavaScriptCore. It knows numbers, strings, objects, functions—",e.jsx("em",{children:"not"})," DOM, files, or network."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Runtime"}),": The execution environment around the engine: event loop, task/microtask queues, module loader, job scheduling, and a selection of globals. In browsers this is the “web runtime”; in Node.js it’s “Node runtime”."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Host"}),": The embedding application that provides platform capabilities and globals (e.g., ",e.jsx("code",{children:"document"}),", ",e.jsx("code",{children:"window"}),", timers, fetch, filesystem, process, console). Hosts define what I/O is possible and how modules are resolved."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boundary"}),": ECMAScript spec defines core language; host specs (WHATWG HTML/Web IDL; Node’s docs) define environment APIs and event loop details."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Portability"}),": Same JS code can run on different hosts, but availability/behavior of host APIs (DOM, FS, fetch, URL resolution) can differ by host and version."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Core language vs host globals"}),e.jsx(s.Code,{children:`// These are language-level:
typeof 42;          // "number"
typeof (() => {});  // "function"
typeof Symbol();    // "symbol"

// These depend on the host:
typeof document;    // "object"   (browser)
                    // "undefined" (Node.js)

typeof process;     // "undefined" (browser)
                    // "object"    (Node.js)

// Output depends on where you run it (host determines availability).`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — No I/O in the engine itself"}),e.jsx(s.Code,{children:`// ECMAScript doesn't define file/network/DOM.
// File read is host-specific (Node.js example):
// const data = require('fs').readFileSync('notes.txt', 'utf8'); // Node.js only

// In a browser, you'd use fetch (host API) and DOM:
// fetch('/notes.txt').then(r => r.text()).then(t => console.log(t)); // Browser host

// Output:
// Node.js: reads from filesystem (if allowed).
// Browser: fetches over HTTP(s).
// Pure engine (no host): neither API exists.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Event loop ownership (tasks vs microtasks)"}),e.jsx(s.Code,{children:`console.log("A");

setTimeout(() => console.log("C (timer task)"), 0);   // task (host scheduling)
Promise.resolve().then(() => console.log("B (microtask)")); // microtask (engine job queue surfaced by host)

console.log("D");

// Typical output order (both browser and Node.js):
// A
// D
// B (microtask)
// C (timer task)

// Note: The host integrates the engine's job queue (microtasks) with its task scheduler.`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 4 — Global object differences (unified via ",e.jsx("code",{children:"globalThis"}),")"]}),e.jsx(s.Code,{children:`// Browser:
typeof window;               // "object"
globalThis === window;       // true

// Node.js:
typeof global;               // "object"
globalThis === global;       // true

// Output:
// In each host, globalThis points to that host's global object.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Module loading differs by host"}),e.jsx(s.Code,{children:`// Browser ESM (URL-based, usually with file extensions):
// <script type="module" src="/app.js"><\/script>
// import utils from "/utils.js";

// Node.js ESM (specifier resolution + package "type"/"exports"):
// // package.json: { "type": "module" }
// import utils from "./utils.js";      // file URL-like
// import _ from "lodash";              // resolves via Node rules

// Output:
// Both are ESM, but the host decides how specifiers are resolved and loaded.`})]})]}),t=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"What is JavaScript?"}),e.jsxs(s.Lead,{children:["A high-level, multi-paradigm programming language standardized as ECMAScript. It runs in many ",e.jsx("em",{children:"hosts"})," (browsers, Node.js) where the host provides I/O, timers, and platform APIs."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Language:"})," JavaScript is an ECMAScript-compliant language; the spec defines its syntax, types, and core behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Host-provided power:"})," JS itself has no I/O (no file/network/DOM). Browsers, Node.js, etc., supply APIs to interact with the outside world."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Execution:"})," JS engines (V8, SpiderMonkey, JavaScriptCore) parse/compile/execute code; hosts embed these engines."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Model:"})," Single-threaded run-to-completion semantics with an event loop that processes tasks/microtasks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Style:"})," Multi-paradigm - supports imperative, functional, and object-oriented patterns; functions are first-class values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Distribution:"})," In browsers it's the de-facto client-side language; in Node.js it powers servers, CLIs, tooling."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 - Core language vs host APIs"}),e.jsx(s.Code,{children:`// JavaScript core (language) gives you numbers, strings, objects, functions, etc.
const n = 42;
const user = { name: "Ash" };
const greet = (u) => \`Hello, \${u.name}\`;

// Host provides I/O and platform features:
// In a browser, 'window' and 'document' are host objects.
// In Node.js, 'process' and 'fs' are host-provided.

typeof n;                  // "number"
typeof user;               // "object"
typeof greet;              // "function"

// (Browser) typeof window   // "object"
// (Node)    typeof process  // "object"

// Output (conceptual):
// "number"
// "object"
// "function"
`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 - Single-threaded + event loop intuition"}),e.jsx(s.Code,{children:`console.log("A");

setTimeout(() => {
  console.log("C (timer)");
}, 0);

Promise.resolve().then(() => {
  console.log("B (microtask)");
});

console.log("D");

// Output order:
// A
// D
// B (microtask)   <-- microtasks run before timers
// C (timer)
`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 - First-class functions (multi-paradigm)"}),e.jsx(s.Code,{children:`// Functions can be passed around, stored, and returned.
function twice(fn) {
  return (x) => fn(fn(x));
}

const inc = (x) => x + 1;
const incTwice = twice(inc);

console.log(incTwice(10)); // 12

// Output:
// 12
`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Quick takeaways"}),e.jsxs(s.UL,{children:[e.jsx("li",{children:"ECMAScript defines the language; hosts define environment APIs."}),e.jsx("li",{children:"JS is single-threaded per execution context but highly concurrent via the event loop and async primitives."}),e.jsx("li",{children:"Use the right paradigm per problem: functional transforms, OO composition, or imperative steps."})]})]})]}),c=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Statements vs Expressions"}),e.jsxs(s.Lead,{children:["JavaScript code is built from ",e.jsx("em",{children:"statements"})," (do something) and ",e.jsx("em",{children:"expressions"})," (produce a value). Expressions can appear where a value is expected; some statements exist only for control flow and structure."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Statement:"})," Performs an action or forms control flow. Examples: ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"switch"}),", ",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"while"}),", ",e.jsx("code",{children:"try"}),", variable declarations, ",e.jsx("code",{children:"function"}),"/",e.jsx("code",{children:"class"})," declarations, ",e.jsx("code",{children:"import"}),"/",e.jsx("code",{children:"export"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Expression:"})," Evaluates to a value. Examples: literals, identifiers, property access, calls, ",e.jsx("code",{children:"new"}),", operators, arrow functions, object/array literals, template literals, ",e.jsx("code",{children:"await"}),", ",e.jsx("code",{children:"yield"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Expression statement:"})," A statement that is just an expression followed by ",e.jsx("code",{children:";"})," (value is computed then discarded). Commonly function calls or assignments."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Declaration vs expression forms:"})," Functions/classes have both forms. Declarations are statements; expressions can be used where values are needed (often parenthesized)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not interchangeable:"})," Some constructs exist only as statements (e.g., ",e.jsx("code",{children:"if"}),"), others only as expressions (e.g., ",e.jsx("code",{children:"a ? b : c"})," returns a value). You cannot write ",e.jsx("code",{children:"const x = if (...) ..."}),"."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Classifying common code"}),e.jsx(s.Code,{children:`// Statement (control flow):
if (true) { /* ... */ }

// Statement (declaration):
function f() { return 1; }

// Expression (produces a value):
1 + 2                          // value: 3

// Expression statement (value is discarded):
1 + 2;                         // computes 3, then ignores it

// Output (conceptual):
// - 'if' and 'function f() {}' are statements.
// - '1 + 2' is an expression; with ';' it becomes an expression statement.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Assignment is an expression"}),e.jsx(s.Code,{children:`let a = 1;
let b;
b = (a = 5);                   // both assignments are expressions; whole thing evaluates to 5

console.log(a);                // 5
console.log(b);                // 5

// Output:
// 5
// 5`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Ternary expression vs if-statement"}),e.jsx(s.Code,{children:`const n = 7;

// Expression form (returns a value):
const parity = (n % 2 === 0) ? "even" : "odd";
console.log(parity);           // "odd"

// Statement form (no value to assign directly):
// const x = if (n % 2 === 0) { "even" } else { "odd" }; // ❌ SyntaxError

// Output:
// "odd"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Function: declaration vs expression (IIFE)"}),e.jsx(s.Code,{children:`// Statement (declaration):
function add(x, y) { return x + y; }
console.log(add(2, 3));        // 5

// Expression (anonymous function) used as a value:
const mul = function (x, y) { return x * y; };
console.log(mul(2, 3));        // 6

// IIFE (expression wrapped in parentheses, executed immediately):
const result = (function () { return 10 })();
console.log(result);           // 10

// Output:
// 5
// 6
// 10`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Arrow functions are expressions"}),e.jsx(s.Code,{children:`// Arrow function creates a function value (expression):
const inc = (x) => x + 1;      // expression produces a function
console.log(inc(10));          // 11

// Cannot declare an arrow function as a statement by itself:
// (x) => x + 1; // valid as an expression statement, but value is discarded

// Output:
// 11`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Comma operator (single expression, last value wins)"}),e.jsx(s.Code,{children:`let x = 0;
const y = (x += 1, x += 2, x); // comma evaluates left→right, returns last sub-expression's value
console.log(x);                // 3
console.log(y);                // 3

// Common in for-loops' update clause:
// for (let i = 0, j = 3; i < j; i++, j--) { /* ... */ }

// Output:
// 3
// 3`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Top-level 'this' differs; blocks are not expressions"}),e.jsx(s.Code,{children:`// Top-level 'this' is:
// - global object in scripts
// - undefined in modules

// A bare block '{}' is a statement, not an object literal in expression position:
{
  // a block statement (no value)
}

// To force an object literal as an expression in ambiguous positions, use parentheses:
const obj = ({ a: 1, b: 2 });
console.log(obj.a + obj.b);    // 3

// Output:
// 3`})]})]}),d=()=>e.jsxs(s.Page,{children:[e.jsxs(s.H1,{children:["Strict mode (",e.jsx("code",{children:'"use strict"'}),")"]}),e.jsx(s.Lead,{children:"A stricter variant of JavaScript that removes confusing behaviors, turns silent errors into thrown errors, and forbids hazardous syntax. Modules and class bodies are strict by default."}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"What:"})," A semantic mode defined in ECMAScript that tightens language rules (no extra APIs)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"How to enable:"})," Add the directive ",e.jsx("code",{children:'"use strict"'})," at the start of a script or a function body. ",e.jsx("em",{children:"ES modules and class bodies are always strict"}),"; no directive needed there."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"this"})," binding:"]})," In simple function calls, ",e.jsx("code",{children:"this"})," is ",e.jsx("code",{children:"undefined"})," (not auto-bound to the global object)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Implicit globals:"})," Assigning to an undeclared identifier throws ",e.jsx("code",{children:"ReferenceError"})," (instead of creating a global)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Write errors surface:"})," Writing to non-writable properties or to non-extensible objects throws ",e.jsx("code",{children:"TypeError"})," (instead of silently failing)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forbidden syntax:"})," ",e.jsx("code",{children:"with"})," statement; legacy octal literals (like ",e.jsx("code",{children:"0755"}),"); duplicate parameter names."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"eval"})," and ",e.jsx("code",{children:"arguments"}),":"]})," Direct ",e.jsx("code",{children:"eval"})," doesn’t leak bindings outward; ",e.jsx("code",{children:"arguments"})," is decoupled from parameters; ",e.jsx("code",{children:"arguments.callee"}),"/",e.jsx("code",{children:".caller"})," are forbidden."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Identifiers:"})," You cannot bind/assign ",e.jsx("code",{children:"eval"})," or ",e.jsx("code",{children:"arguments"})," as variable/parameter names."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"delete"})," changes:"]})," Deleting unqualified identifiers is a ",e.jsx("code",{children:"SyntaxError"}),"; deleting non-configurable properties throws."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Block functions:"})," Function declarations inside blocks are block-scoped in strict code (avoid for clarity; prefer function expressions or ",e.jsx("code",{children:"let"}),"/",e.jsx("code",{children:"const"}),")."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Enabling strict mode"}),e.jsx(s.Code,{children:`"use strict"; // file-level (must be the first statement)

function f() {
  "use strict";   // function-level (applies only inside f)
  return 1;
}

// In ES modules and class bodies, code is strict by default.
// Output: (no runtime output; directives change semantics)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — No implicit globals"}),e.jsx(s.Code,{children:`// Sloppy (non-strict):
// x = 10;            // creates a global (bad)

// Strict:
"use strict";
try {
  x = 10;            // ReferenceError: x is not defined
} catch (e) {
  console.log(e.name); // "ReferenceError"
}

// Output:
// "ReferenceError"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 3 — ",e.jsx("code",{children:"this"})," is ",e.jsx("code",{children:"undefined"})," in simple calls"]}),e.jsx(s.Code,{children:`function sloppy() { return this; }      // not strict
function strictFn() { "use strict"; return this; }

console.log(sloppy() === globalThis); // true in many hosts (browser/Node)

// In strict:
console.log(strictFn());               // undefined

// Output (typical):
// true
// undefined`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Duplicate parameters are forbidden"}),e.jsx(s.Code,{children:`// Sloppy (pre-ES2015 engines allowed this, last param wins):
// function g(a, a) { return a; }

// Strict:
"use strict";
// function g(a, a) { return a; } // SyntaxError in strict code

// Output:
// SyntaxError (if you try to declare duplicate parameter names)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Writes to non-writable properties throw"}),e.jsx(s.Code,{children:`"use strict";
const obj = {};
Object.defineProperty(obj, "id", { value: 1, writable: false });

try {
  obj.id = 2; // TypeError in strict; silently ignored in sloppy
} catch (e) {
  console.log(e.name); // "TypeError"
}

// Output:
// "TypeError"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 6 — ",e.jsx("code",{children:"with"})," is disallowed"]}),e.jsx(s.Code,{children:`"use strict";
// with ({ a: 1 }) { console.log(a); } // SyntaxError in strict

// Output:
// SyntaxError (if you try to use 'with')`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Legacy octal vs modern octal"}),e.jsx(s.Code,{children:`"use strict";
// const m = 0755;   // SyntaxError in strict (legacy octal)
// Use modern ES2015 octal literal:
const m = 0o755;
console.log(m); // 493

// Output:
// 493`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 8 — ",e.jsx("code",{children:"eval"})," doesn’t leak bindings; ",e.jsx("code",{children:"arguments"})," decoupled"]}),e.jsx(s.Code,{children:`function testEval() {
  "use strict";
  eval("var t = 1;");  // 't' is local to the eval code, not the surrounding scope
  console.log(typeof t); // "undefined"
}

function testArgs(a) {
  "use strict";
  arguments[0] = 99;   // does NOT modify 'a' in strict mode
  console.log(a);      // original value remains
}

testEval();
testArgs(1);

// Output:
// "undefined"
// 1`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 9 — ",e.jsx("code",{children:"delete"})," restrictions"]}),e.jsx(s.Code,{children:`"use strict";
let x = 1;
// delete x; // SyntaxError: deleting an unqualified identifier is not allowed

const o = {};
Object.defineProperty(o, "p", { value: 10, configurable: false });
try {
  delete o.p; // TypeError in strict (silently fails in sloppy)
} catch (e) {
  console.log(e.name); // "TypeError"
}

// Output:
// "TypeError"`})]})]}),a=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Automatic Semicolon Insertion (ASI)"}),e.jsx(s.Lead,{children:"JavaScript can insert semicolons during parsing to recover from certain line breaks. ASI helps code parse but can also change meaning in surprising ways."}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"What ASI does:"})," When the parser would otherwise fail, a semicolon may be inserted at specific points (e.g., before a closing ",e.jsx("code",{children:"}"}),", at end of input, or after certain tokens)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Restricted keywords:"})," A line terminator ",e.jsx("em",{children:"cannot"})," appear immediately after ",e.jsx("code",{children:"return"}),", ",e.jsx("code",{children:"throw"}),", ",e.jsx("code",{children:"break"}),", ",e.jsx("code",{children:"continue"}),", or ",e.jsx("code",{children:"yield"}),". If you put a newline there, ASI ends the statement right after the keyword."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not magical:"})," ASI does ",e.jsx("em",{children:"not"})," insert semicolons before tokens like ",e.jsx("code",{children:"("}),", ",e.jsx("code",{children:"["}),", ",e.jsx("code",{children:"+"}),", ",e.jsx("code",{children:"-"}),", ",e.jsx("code",{children:"/"}),", or template backticks if the previous line can continue — lines may “glue together”."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Postfix operators:"})," Postfix ",e.jsx("code",{children:"++"}),"/",e.jsx("code",{children:"--"})," cannot be split by a newline from their operand; the newline turns them into separate statements (or changes to prefix form)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Safe practice:"})," Prefer explicit semicolons or ensure lines starting with ",e.jsx("code",{children:"("})," / ",e.jsx("code",{children:"["})," / ",e.jsx("code",{children:"+"})," / ",e.jsx("code",{children:"-"})," / ",e.jsx("code",{children:"/"})," / ",e.jsx("code",{children:"`"})," are prefixed by a semicolon when concatenation or minification is possible."]})]})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 1 — ",e.jsx("code",{children:"return"})," followed by a newline"]}),e.jsx(s.Code,{children:`function f() {
  return
  { ok: true }
}

console.log(f()); // undefined

// Explanation:
// ASI inserts a semicolon right after 'return' because of the newline.
// So it's 'return; { ok: true }' and the block is a separate (dead) statement.`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 2 — ",e.jsx("code",{children:"throw"})," followed by a newline"]}),e.jsx(s.Code,{children:`function g() {
  // SyntaxError at parse time:
  // throw
  // new Error("boom")
}

// Output:
// SyntaxError (a newline may not appear immediately after 'throw').`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 3 — Postfix ",e.jsx("code",{children:"++"})," split across lines"]}),e.jsx(s.Code,{children:`let i = 0;
i++;
console.log(i); // 1

let j = 0;
j
++
j;
console.log(j); // 1

// Explanation:
// 'j ++' cannot be split by a newline for postfix form.
// The parser treats it as: 'j;' then '++j;' then 'j;'. Final value is 1.`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 4 — Leading ",e.jsx("code",{children:"("})," can attach to the previous line"]}),e.jsx(s.Code,{children:`// File A (no trailing semicolon):
console.log("A")
// File B starting with an IIFE:
(function(){ console.log("IIFE"); })()

// Parsed as:
console.log("A")(function(){ console.log("IIFE"); })()
// TypeError at runtime: console.log(...) is not a function

// Fix by ensuring a boundary:
// console.log("A");            // end File A with ';'
// ;(function(){ console.log("IIFE"); })()  // or start next line with ';'`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 5 — Leading ",e.jsx("code",{children:"["})," can become indexing"]}),e.jsx(s.Code,{children:`// Previous line ends with an expression (no ';'):
doSomething()
// Next line begins with '[':
[1, 2, 3].forEach(n => doSomethingElse(n))

// Parsed as: doSomething()[1, 2, 3].forEach(...)
// Likely TypeError (indexing the result of doSomething()).

// Safer:
;[1, 2, 3].forEach(n => doSomethingElse(n))`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 6 — Unary ",e.jsx("code",{children:"+"}),"/",e.jsx("code",{children:"-"})," across lines"]}),e.jsx(s.Code,{children:`let a = 1;
let b = 2;

// Developers sometimes expect a semicolon after 'a', but ASI doesn't insert one here:
const s = a
+ b;

console.log(s); // 3

// Explanation:
// The '+' begins a continuation of the previous expression; it becomes 'a + b'.`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 7 — ASI before ",e.jsx("code",{children:"}"})," or end-of-file"]}),e.jsx(s.Code,{children:`function h() {
  const x = 1   // no explicit ';'
  const y = 2   // ASI inserts ';' at line ends/'}'
  return x + y  // also safe here
}

// Output:
// 3 (behavior unchanged); ASI inserted semicolons at statement boundaries.`})]})]}),h=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Identifiers & reserved words"}),e.jsx(s.Lead,{children:"Identifiers are names you give to variables, functions, classes, etc. JavaScript follows Unicode rules for what characters are allowed, and it reserves certain words for language syntax."}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["An ",e.jsx("strong",{children:"identifier"})," is a name for a binding (variable, function, class, parameter)."]}),e.jsxs("li",{children:["Valid characters follow Unicode identifier rules: the first character must be"," ",e.jsx("em",{children:"ID_Start"})," (letters and many non-Latin letters) or ",e.jsx("code",{children:"$"})," or"," ",e.jsx("code",{children:"_"}),"; subsequent characters may be ",e.jsx("em",{children:"ID_Continue"})," (letters, digits, some marks), or ",e.jsx("code",{children:"$"})," or ",e.jsx("code",{children:"_"}),"."]}),e.jsxs("li",{children:["Identifiers ",e.jsx("em",{children:"cannot"})," start with a digit, contain spaces, or use characters that are not allowed by the spec (e.g., most emoji are not valid identifier characters)."]}),e.jsxs("li",{children:["You can use ",e.jsx("strong",{children:"Unicode escapes"})," in names:",e.jsx("code",{children:"\\u0061"}),' ("a"), ',e.jsxs("code",{children:["\\u","03C0"]})," (π). The resulting character must still be a valid identifier character."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reserved words"})," (keywords like ",e.jsx("code",{children:"if"}),", ",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"class"}),", ",e.jsx("code",{children:"import"}),"…) can’t be used as identifiers. Some words are reserved only in certain contexts (e.g., ",e.jsx("code",{children:"await"})," inside async code; ",e.jsx("code",{children:"yield"})," inside generators)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Restricted in strict mode:"})," ",e.jsx("code",{children:"eval"})," and ",e.jsx("code",{children:"arguments"})," cannot be used as binding names in strict mode."]}),e.jsxs("li",{children:["Property names are more flexible: keywords and strings are allowed as ",e.jsx("em",{children:"property keys"})," (e.g., ",e.jsx("code",{children:"obj.default"})," or ",e.jsx("code",{children:'{ "class": 1 }'}),")."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Valid identifier names"}),e.jsx(s.Code,{children:`const $dollar = 1;
const _under = 2;
const café = 3;          // non-ASCII letter is fine
const π = 3.14159;       // Greek letter
const क = 5;             // Devanagari letter

console.log($dollar + _under);       // 3
console.log(café);                    // 3
console.log(π.toFixed(2));           // "3.14"
console.log(क);                       // 5`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Invalid identifier forms"}),e.jsx(s.Code,{children:`// const 1st = 10;         // ❌ SyntaxError (cannot start with a digit)
// const user-name = 10;   // ❌ SyntaxError (hyphen not allowed)
// const hello world = 1;   // ❌ SyntaxError (space not allowed)
// const 😀 = 1;            // ❌ Most emoji are not valid identifier characters`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Unicode escapes in identifiers"}),e.jsx(s.Code,{children:`const \\u0061\\u0062 = 10;    // "ab"
console.log(ab);               // 10

const \\u{03C0} = 3.14;       // π via code point escape
console.log(π);                // 3.14

// Note: the escaped code point must itself be valid for an identifier.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Reserved words (always keywords)"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Always reserved: ",e.jsx("code",{children:"break"}),", ",e.jsx("code",{children:"case"}),", ",e.jsx("code",{children:"catch"}),", ",e.jsx("code",{children:"class"}),","," ",e.jsx("code",{children:"const"}),", ",e.jsx("code",{children:"continue"}),", ",e.jsx("code",{children:"debugger"}),", ",e.jsx("code",{children:"default"}),","," ",e.jsx("code",{children:"delete"}),", ",e.jsx("code",{children:"do"}),", ",e.jsx("code",{children:"else"}),", ",e.jsx("code",{children:"export"}),", ",e.jsx("code",{children:"extends"}),","," ",e.jsx("code",{children:"false"}),", ",e.jsx("code",{children:"finally"}),", ",e.jsx("code",{children:"for"}),", ",e.jsx("code",{children:"function"}),", ",e.jsx("code",{children:"if"}),","," ",e.jsx("code",{children:"import"}),", ",e.jsx("code",{children:"in"}),", ",e.jsx("code",{children:"instanceof"}),", ",e.jsx("code",{children:"new"}),", ",e.jsx("code",{children:"null"}),","," ",e.jsx("code",{children:"return"}),", ",e.jsx("code",{children:"super"}),", ",e.jsx("code",{children:"switch"}),", ",e.jsx("code",{children:"this"}),", ",e.jsx("code",{children:"throw"}),","," ",e.jsx("code",{children:"true"}),", ",e.jsx("code",{children:"try"}),", ",e.jsx("code",{children:"typeof"}),", ",e.jsx("code",{children:"var"}),", ",e.jsx("code",{children:"void"}),","," ",e.jsx("code",{children:"while"}),", ",e.jsx("code",{children:"with"}),", ",e.jsx("code",{children:"yield"})," (contextual; see below)."]}),e.jsxs("li",{children:["Also reserved: ",e.jsx("code",{children:"let"}),", ",e.jsx("code",{children:"static"}),", ",e.jsx("code",{children:"enum"}),", ",e.jsx("code",{children:"await"})," (contextual)."]})]}),e.jsx(s.Code,{children:`// ❌ All of these would be SyntaxError if uncommented:
// const for = 1;
// let class = 1;
// function import() {} 
// const default = 3;`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 5 — Contextual reservations: ",e.jsx("code",{children:"await"})," and ",e.jsx("code",{children:"yield"})]}),e.jsx(s.Code,{children:`// 'yield' is reserved inside generator functions:
function* gen() {
  // let yield = 1; // ❌ SyntaxError in a generator
  yield 42;
}

// 'await' is reserved inside async functions and in ES modules:
async function run() {
  // let await = 1; // ❌ SyntaxError in async context
  return await Promise.resolve(1);
}

// In a non-async, non-module function (script goal), using 'await' as a name is allowed:
function plain() {
  let await = 2;      // ✅ allowed here
  return await + 1;
}
console.log(plain());  // 3`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 6 — Strict mode: ",e.jsx("code",{children:"eval"})," and ",e.jsx("code",{children:"arguments"})]}),e.jsx(s.Code,{children:`"use strict";
// let eval = 1;        // ❌ SyntaxError in strict mode
// function f(arguments) {} // ❌ SyntaxError in strict mode

// Outside strict mode these names are special but may not throw at parse-time;
// still, avoid them as identifiers for clarity and compatibility.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Property keys can be keywords"}),e.jsx(s.Code,{children:`const obj = {
  default: 1,           // keyword ok as a property key
  class: 2,
  "function": 3,        // quoted string key
  [ "let" ]: 4          // computed key
};

console.log(obj.default);       // 1
console.log(obj.class + obj["function"] + obj.let); // 2 + 3 + 4 = 9`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Identifier vs IdentifierName (dot access)"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["After a dot (",e.jsx("code",{children:"."}),"), property access uses an ",e.jsx("em",{children:"IdentifierName"})," — this allows keywords:",e.jsx("code",{children:"obj.default"}),", ",e.jsx("code",{children:"obj.class"})," are valid."]}),e.jsxs("li",{children:["For bindings (variables, parameters, function/class names), you must use a valid ",e.jsx("em",{children:"Identifier"})," that is not a reserved word."]})]}),e.jsx(s.Code,{children:`const data = { default: 10 };
console.log(data.default); // 10   (property access ok)

// const default = 10;     // ❌ not allowed as a binding name`})]})]}),x=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Comments (line, block, pragmas)"}),e.jsxs(s.Lead,{children:["JavaScript supports single-line and block comments. Some special comments or top-of-file string directives act like ",e.jsx("em",{children:"pragmas"})," for engines and tools (e.g., strict mode, source maps, shebang)."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Single-line comments:"})," start with ",e.jsx("code",{children:"//"})," and run to the end of the line."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Block comments:"})," wrap any text between"," ",e.jsx("code",{children:"/*"})," and ",e.jsx("code",{children:"*/"}),". They can span lines but"," ",e.jsx("em",{children:"do not nest"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Directive prologue (pragmas):"})," a sequence of"," ",e.jsx("em",{children:"literal string statements"})," at the top of a script or function. The only standardized directive is"," ",e.jsx("code",{children:'"use strict"'})," (enables strict mode)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shebang:"})," a first-line ",e.jsx("code",{children:"#!"})," is treated as a comment by modern JS parsers; used by CLIs (e.g., Node) to choose an interpreter."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tooling pragmas (in comments):"})," special"," ",e.jsx("code",{children:"//# ..."})," or ",e.jsx("code",{children:"/* ... */"})," are read by tools (e.g., ",e.jsx("code",{children:"sourceMappingURL"}),", linters). They are not part of the language semantics."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Legacy HTML comment tokens:"})," ",e.jsx("code",{children:"<!--"})," and ",e.jsx("code",{children:"-->"})," may be treated as single-line comments in some environments for web-compatibility. Avoid in modern code."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Single-line comments"}),e.jsx(s.Code,{children:`// This is a single-line comment
const a = 1; // trailing comment after code
console.log(a); // 1`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Block comments (not nested)"}),e.jsx(s.Code,{children:`/* This is a block comment
spanning multiple lines */
const x = 10;
/*
  const y = 20;
  /* nested? */           // <- This inner opener doesn't start a new comment!
*/
console.log(x); // 10

// Output:
// 10`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — JSDoc-style block comments"}),e.jsx(s.Code,{children:`/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 4 — Directive prologue and ",e.jsx("code",{children:'"use strict"'})]}),e.jsx(s.Code,{children:`"use strict";           // a literal string at top → strict mode is ON

// Comments can appear after/between directives and still keep the prologue:
"use strict";
/* keep strict */ "use strict";

function sloppyHere() {
  // no directive here → this function is NOT automatically strict
  return this; // in non-strict, this may be globalThis when called plainly
}

(function () {
  "use strict"; // function-scoped strict
  // ...
})();

// Non-directive (does NOT enable strict):
("use strict"); // wrapped in parentheses → just an expression, not a directive
// "use" + " strict"   // concatenation → not a single literal, not a directive`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Shebang for CLI scripts"}),e.jsx(s.Code,{children:`#!/usr/bin/env node
// ^ must be the very first line; parsers treat it as a comment.
// Useful to make a JS file directly executable on POSIX systems.

console.log("Hello from a CLI script!");
// Output (when run as an executable):
// Hello from a CLI script!`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 6 — Tooling pragmas: ",e.jsx("code",{children:"sourceURL"})," &"," ",e.jsx("code",{children:"sourceMappingURL"})]}),e.jsx(s.Code,{children:`// Useful in devtools and bundlers:

//# sourceURL=my-script.js
//# sourceMappingURL=my-script.js.map

// These are read by environments/tools to label eval'd code or attach sourcemaps.
// They do not change JS runtime semantics.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Legacy HTML comment tokens"}),e.jsx(s.Code,{children:`// In some environments (browsers), the following can behave like single-line comments:
<!-- hidden from old HTML parsers
console.log("This may not run depending on environment");
// --> also treated like a line comment when at line start

// Modern advice: avoid <!-- and --> in JS. Use // or /* ... */ instead.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Comments inside template literals (use expressions)"}),e.jsx(s.Code,{children:`const name = "Ada";
// You can't put // or /* */ inside the raw template text to comment it out,
// but you can comment inside an expression:
const msg = \`Hello, \${/* inline comment */ name}!\`;
console.log(msg); // "Hello, Ada!"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Comments and regex literals"}),e.jsx(s.Code,{children:`// JavaScript regex does NOT support an 'x' (extended) flag for inline comments.
// Use non-capturing groups or whitespace where allowed, or build regexes from strings.
const re = /\\d{3}-\\d{2}-\\d{4}/; // simple form
console.log(re.test("123-45-6789")); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Commenting out blocks of code safely"}),e.jsx(s.Code,{children:`// Prefer line comments for large temporary blocks to avoid accidental */ issues:
//// const config = {
////   url: "https://api.example.com",
////   retries: 3,
//// };

// Or use a block comment but ensure no '*/' appears inside:
 /*
  const config = {
    url: "https://api.example.com",
    retries: 3,
  };
 */
console.log("OK"); // "OK"`})]})]}),j=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Script vs Module"}),e.jsxs(s.Lead,{children:["JavaScript can run as a classic ",e.jsx("em",{children:"script"})," or as an ES ",e.jsx("em",{children:"module"}),". Scripts are the old, global-oriented form; modules add import/export, strict semantics, scoped top-level, and better loading behavior."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Parsing/goal:"})," A ",e.jsx("em",{children:"script"})," uses the Script goal (classic); a ",e.jsx("em",{children:"module"})," uses the Module goal (ESM)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Strictness:"})," Scripts are ",e.jsx("em",{children:"sloppy"})," by default (unless ",e.jsx("code",{children:'"use strict"'}),"); modules are ",e.jsx("em",{children:"always strict"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Top-level scope:"})," Script top-level vars live in the global scope (and ",e.jsx("code",{children:"var"})," creates a global property). Module top-level is ",e.jsx("em",{children:"module-scoped"}),"(no global properties even for ",e.jsx("code",{children:"var"}),")."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Top-level ",e.jsx("code",{children:"this"}),":"]})," In scripts (sloppy) it’s the global object; in modules it’s ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Imports/exports:"})," Only modules allow ",e.jsx("code",{children:"import"}),"/",e.jsx("code",{children:"export"})," syntax."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Loading in browsers:"})," ",e.jsx("code",{children:'<script type="module">'})," is ",e.jsx("em",{children:"deferred by default"}),", runs after parsing and after its dependency graph is fetched. Classic scripts run immediately unless marked ",e.jsx("code",{children:"defer"}),"/",e.jsx("code",{children:"async"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Top-level ",e.jsx("code",{children:"await"}),":"]})," Allowed in modules, not in classic scripts."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Singleton modules:"})," Each module URL is evaluated once and cached; multiple imports don’t re-run it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Env notes:"})," In Node.js, ESM is enabled via ",e.jsx("code",{children:".mjs"})," or ",e.jsx("code",{children:'"type":"module"'})," in ",e.jsx("code",{children:"package.json"})," (CJS vs ESM interop is a later topic)."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Loading in the browser"}),e.jsx(s.Code,{children:`<!-- index.html -->
<!-- Classic script (runs immediately when encountered unless defer/async) -->
<script src="./classic.js"><\/script>

<!-- Module script (deferred by default; runs after parsing & after fetching deps) -->
<script type="module" src="./main.js"><\/script>

<!-- Inline module is also deferred relative to parsing -->
<script type="module">
  import { hello } from './lib.js';
  hello();
<\/script>`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 2 — Strictness & top-level ",e.jsx("code",{children:"this"})]}),e.jsx(s.Code,{children:`// classic.js (script goal)
console.log(this === window); // true (sloppy mode)
"use strict";
console.log(this);            // undefined (strict inside script file after directive)

// main.js (module goal)
console.log(this);            // undefined (modules are always strict)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Top-level scope & globals"}),e.jsx(s.Code,{children:`// classic.js (script)
var a = 1;           // creates window.a
let b = 2;           // block-scoped; not a window property
console.log(window.a); // 1
console.log(window.b); // undefined

// main.js (module)
var x = 10;          // NOT added to globalThis in modules
let y = 20;
console.log(globalThis.x); // undefined
// x and y are module-scoped only`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Import/export only in modules"}),e.jsx(s.Code,{children:`// lib.js (module)
export const add = (a, b) => a + b;

// main.js (module)
import { add } from './lib.js';
console.log(add(2, 3)); // 5

// classic.js (script)
// import { add } from './lib.js'; // ❌ SyntaxError in script goal (no imports)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 5 — Top-level ",e.jsx("code",{children:"await"})," (modules only)"]}),e.jsx(s.Code,{children:`// main.js (module)
const res = await fetch('https://example.com/data.json');
const data = await res.json();
console.log(Array.isArray(data)); // e.g., true

// classic.js (script)
// const res = await fetch(...); // ❌ SyntaxError: await only valid in async functions (and top-level only in modules)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Evaluation once per module URL"}),e.jsx(s.Code,{children:`// counter.js (module)
console.log('counter module evaluated');
let n = 0;
export const inc = () => ++n;
export const value = () => n;

// a.js (module)
import { inc, value } from './counter.js';
inc();
console.log('A sees', value()); // A sees 1

// b.js (module)
import { inc, value } from './counter.js';
console.log('B sees', value()); // B sees 1 (same instance)
inc();

// main.js (module)
import './a.js';
import './b.js';
// Output order includes:
// counter module evaluated
// A sees 1
// B sees 1`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Defer vs immediate execution"}),e.jsx(s.Code,{children:`<!-- index.html -->
<h1>Order demo</h1>
<script>
  console.log('classic inline before'); // runs immediately
<\/script>

<script src="./classic.js"><\/script>
<!-- classic.js runs here (unless you add defer/async) -->

<script type="module" src="./mod.js"><\/script>
<script type="module">
  console.log('inline module'); // runs after parsing & after mod.js and its deps are fetched
<\/script>

<script>
  console.log('classic inline after'); // runs immediately at this point in parsing
<\/script>

/* Possible console order (network timing aside):
classic inline before
// contents of classic.js
classic inline after
// then module graph executes:
// contents of mod.js
inline module
*/`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Small Node.js note (context only)"}),e.jsx(s.Code,{children:`// package.json
// { "type": "module" }  // makes .js files load as ESM in Node
// Alternatively, use .mjs for modules and .cjs for CommonJS.
// (Full CJS vs ESM interop is covered in a later topic.)`})]})]}),u=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Module scope & live bindings"}),e.jsxs(s.Lead,{children:["ES modules have their own top-level scope (not global) and export"," ",e.jsx("em",{children:"live bindings"}),": imports are read-only views onto variables in the exporting module, so when the exporter’s variable changes, importers see the new value automatically."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Module scope:"})," Top-level ",e.jsx("code",{children:"var/let/const/function/class"})," in a module are",e.jsx("em",{children:"module-scoped"}),", not properties of ",e.jsx("code",{children:"globalThis"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Evaluation:"})," A module is evaluated exactly once per URL and then cached. All importers share that single instance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Live bindings:"})," ",e.jsx("em",{children:"Named exports"})," are bindings. Importers get a read-only view into the exporter’s current variable, updated after each change."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Read-only in importer:"})," You cannot reassign an imported binding in the importing module. Change must happen in the exporting module (e.g., via exported functions)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default export:"})," If done as ",e.jsxs("code",{children:["export ","{ x as default }"]})," or"," ",e.jsx("code",{children:"export default function …"}),", it’s a binding. With"," ",e.jsx("code",{children:"export default (expression)"}),", consumers get that value, not a reassignable binding."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cycles:"})," Circular dependencies work thanks to live bindings but can hit",e.jsx("em",{children:"temporal dead zone"})," if a module reads a binding before it’s initialized."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Module scope is not global"}),e.jsx(s.Code,{children:`// a.js (module)
var a = 1;
let b = 2;
const c = 3;
console.log(globalThis.a); // undefined (even for var in modules)

// Output:
// undefined`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Basic live binding"}),e.jsx(s.Code,{children:`// counter.js (module)
export let n = 0;
export function inc() { n += 1; }

// app.js (module)
import { n, inc } from "./counter.js";
console.log(n); // 0
inc();
console.log(n); // 1  ← importer sees updated value automatically

// Output:
// 0
// 1`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Import is read-only in importer"}),e.jsx(s.Code,{children:`// app.js (module)
import { n } from "./counter.js";
// n = 5; // ❌ SyntaxError: Cannot assign to import 'n'

// Correct approach: call an exported mutator or re-export a setter:
import { inc } from "./counter.js";
inc(); // OK`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Namespace import also reflects updates"}),e.jsx(s.Code,{children:`// app.js (module)
import * as Counter from "./counter.js";
console.log(Counter.n); // 1 (assuming a prior inc)
Counter.inc();
console.log(Counter.n); // 2

// Output:
// 1
// 2`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Objects vs rebinding"}),e.jsx(s.Code,{children:`// store.js
export const state = { count: 0 };
export function bump() { state.count++; }

// app.js
import { state, bump } from "./store.js";
console.log(state.count); // 0
bump();
console.log(state.count); // 1

// Trying to rebind in importer is illegal:
// state = { count: 999 }; // ❌ SyntaxError
// But mutating the object inside the exporter (via bump) is visible to importers.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Re-exports preserve liveness"}),e.jsx(s.Code,{children:`// source.js
export let value = 0;
export const inc = () => { value++; };

// bridge.js
export { value, inc } from "./source.js"; // re-export live bindings

// app.js
import { value, inc } from "./bridge.js";
console.log(value); // 0
inc();
console.log(value); // 1

// Output:
// 0
// 1`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Default export nuances"}),e.jsx(s.Code,{children:`// mode A: default is a binding (via alias)
let current = 1;
export { current as default };   // default aliases binding 'current'
export const set = v => { current = v; };

// mode B: default is the value of an expression (not a binding you can reassign)
export default 42;                // takes a snapshot value at export time

// Consumers:
// import cur, { set } from "./a.js"; // if using mode A
// console.log(cur); // 1
// set(5);
// console.log(cur); // 5 (live through the alias)

// import val from "./b.js"; // if using mode B
// console.log(val); // 42 (a value, not a changing binding)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Single evaluation shared by all importers"}),e.jsx(s.Code,{children:`// once.js
console.log("evaluated once");
export let hits = 0;
export const ping = () => { hits++; };

// a.js
import { hits, ping } from "./once.js";
ping();
console.log("A:", hits); // A: 1

// b.js
import { hits } from "./once.js";
console.log("B:", hits); // B: 1 (same instance)

// main.js
import "./a.js";
import "./b.js";

// Output:
// evaluated once
// A: 1
// B: 1`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Cycles & temporal dead zone"}),e.jsx(s.Code,{children:`// a.js
import { b } from "./b.js";
console.log("a reads b =", b); // ❗ may throw if 'b' not initialized yet
export const a = 1;

// b.js
import { a } from "./a.js";
export const b = a + 1;

// Depending on order, 'a' might be uninitialized when read in a.js:
// Runtime:
// ReferenceError: Cannot access 'b' before initialization (or similar)
// Fix: avoid reading imported bindings during module top-level initialization;
// move reads into functions or after both sides initialize.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Top-level await and liveness"}),e.jsx(s.Code,{children:`// config.js (module with TLA)
export let config = { ready: false };
const res = await fetch("/config.json");
config = await res.json();          // rebinds the exported binding
// Importers will observe the updated binding after this module finishes evaluating.

// app.js
import { config } from "./config.js";
console.log(config.ready ?? false); // by the time this runs, config is resolved

// Note: in many bundlers/environments, TLA in one module can delay the whole graph.
// Liveness still holds: importers see the final binding value.`})]})]}),m=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Import/Export forms (default, named, namespace)"}),e.jsxs(s.Lead,{children:["ES modules let us expose values from one file and use them in another. We can export ",e.jsx("em",{children:"named"})," bindings, a single ",e.jsx("em",{children:"default"})," export, or re-group everything via a ",e.jsx("em",{children:"namespace"})," import. All imports are read-only views of the exporter’s live bindings."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Named exports:"})," Export one or more bindings by name and import with"," ",e.jsx("code",{children:"{ ... }"}),". You may rename with ",e.jsx("code",{children:"as"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default export:"})," At most one per module. Import it without braces; the importer chooses any local name. You can also re-export a module’s default under a name."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Namespace import:"})," ",e.jsx("code",{children:'import * as ns from "…"'})," gives a frozen namespace object whose properties reflect the module’s live exports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Re-exports:"})," ",e.jsx("code",{children:'export { name } from "…"'}),","," ",e.jsx("code",{children:'export * from "…"'}),", and ",e.jsx("code",{children:'export * as ns from "…"'})," forward exports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Side-effect import:"})," ",e.jsx("code",{children:'import "…"'})," only runs a module for its side effects; it imports nothing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Top-level only:"})," ",e.jsx("code",{children:"import"}),"/",e.jsx("code",{children:"export"})," syntax must be at top level (not inside blocks/functions). Dynamic ",e.jsx("code",{children:"import()"})," is separate."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Read-only & live:"})," You cannot reassign an imported binding; updates must happen in the exporter. Importers observe the new values."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Named exports & imports"}),e.jsx(s.Code,{children:`// math.js
export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;

// app.js (module)
import { add, mul } from "./math.js";
console.log(add(2, 3)); // 5
console.log(mul(2, 3)); // 6`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Default export & default import"}),e.jsx(s.Code,{children:`// greeter.js
export default function greet(name) {
  return "Hi, " + name;
}

// app.js
import greet from "./greeter.js";  // any local name works
console.log(greet("Ada")); // "Hi, Ada"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Namespace import"}),e.jsx(s.Code,{children:`// counter.js
export let n = 0;
export function inc() { n += 1; }

// app.js
import * as Counter from "./counter.js";
console.log(Counter.n); // 0
Counter.inc();
console.log(Counter.n); // 1
// Counter.n = 42; // ❌ TypeError in strict mode (read-only view)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Mixed: default + named"}),e.jsx(s.Code,{children:`// user.js
export default class User { constructor(name){ this.name = name; } }
export const VERSION = "1.0.0";

// app.js
import User, { VERSION } from "./user.js";
console.log(new User("Ash").name); // "Ash"
console.log(VERSION);              // "1.0.0"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 5 — Renaming with ",e.jsx("code",{children:"as"})," (both sides)"]}),e.jsx(s.Code,{children:`// lib.js
const internalAdd = (a, b) => a + b;
export { internalAdd as add };     // rename when exporting

// app.js
import { add as sum } from "./lib.js"; // rename when importing
console.log(sum(4, 5)); // 9`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Re-exports (forwarding)"}),e.jsx(s.Code,{children:`// math.js
export const sub = (a, b) => a - b;

// ops.js — collect & forward
export { add, mul } from "./mathA.js";
export * from "./math.js";                // forwards all named (sub)
export * as extra from "./extras.js";     // namespace re-export
export { default as Greeter } from "./greeter.js"; // re-export default under a name

// app.js
import { add, sub, Greeter, extra } from "./ops.js";
console.log(typeof Greeter); // "function" (class is a function)
console.log(add(1, 2), sub(5, 3)); // 3 2
console.log(Object.keys(extra).length >= 0); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Side-effect-only import"}),e.jsx(s.Code,{children:`// setup.js
console.log("setup run once");

// main.js
import "./setup.js"; // runs setup; imports nothing
import "./setup.js"; // cached; no second log

// Output:
// setup run once`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Import is read-only; mutate via exporter"}),e.jsx(s.Code,{children:`// store.js
export const state = { count: 0 };
export const bump = () => { state.count++; };

// app.js
import { state, bump } from "./store.js";
// state = { count: 999 }; // ❌ SyntaxError: Cannot assign to import
console.log(state.count); // 0
bump();
console.log(state.count); // 1`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Common mistakes"}),e.jsx(s.Code,{children:`// ❌ 1) default export duplicates
// export default 1;
// export default 2; // SyntaxError (only one default allowed)

// ❌ 2) import inside a block/function (static syntax must be top level)
// if (true) { import { add } from "./math.js"; } // SyntaxError

// ✅ Use dynamic import() if you need conditional loading (covered later).
// if (needMath) { const { add } = await import("./math.js"); }`})]})]}),p=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Dynamic import()"}),e.jsxs(s.Lead,{children:[e.jsx("code",{children:"import()"})," is an expression that loads a module at runtime and returns a Promise that resolves to the module namespace object. It enables conditional loading, on-demand code, and parallel preloading. It works in both classic scripts and ES modules (top-level ",e.jsx("code",{children:"await"})," only in modules)."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Signature:"})," ",e.jsx("code",{children:"import(specifier)"})," returns a"," ",e.jsx("code",{children:"Promise<ModuleNamespace>"}),". The namespace exposes"," ","live bindings for the module’s exports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Specifier:"})," usually a string (relative/absolute URL or bare specifier in supported environments). It can be any expression that evaluates to a string at runtime."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When it runs:"})," Fetches, parses and evaluates the requested module (once per URL). Subsequent calls reuse the cached module instance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default vs named:"})," Access default via"," ",e.jsx("code",{children:"ns.default"}),"; named via ",e.jsx("code",{children:"ns.name"})," or destructuring."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Top-level ",e.jsx("code",{children:"await"}),":"]})," Allowed only inside modules. In classic scripts, use ",e.jsx("code",{children:".then"}),"/",e.jsx("code",{children:"catch"})," or an async IIFE."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error handling:"})," Rejection on network/parse/evaluation failure. Use ",e.jsx("code",{children:"try/catch"})," with ",e.jsx("code",{children:"await"})," or"," ",e.jsx("code",{children:".catch()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Interop note:"})," Importing a CommonJS module (e.g., in Node) typically yields its ",e.jsx("code",{children:"module.exports"})," on ",e.jsx("code",{children:"default"}),"."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Basic usage"}),e.jsx(s.Code,{children:`// main.js (module)
const ns = await import('./math.js');
console.log(typeof ns.add, typeof ns.mul); // "function" "function"

const { add } = await import('./math.js'); // destructure from namespace
console.log(add(2, 3)); // 5`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 2 — Default export via ",e.jsx("code",{children:"ns.default"})]}),e.jsx(s.Code,{children:`// greeter.js
export default function greet(name){ return \`Hi, \${name}\`; }

// main.js (module)
const mod = await import('./greeter.js');
console.log(mod.default('Ada')); // "Hi, Ada"

// Or with destructuring:
const { default: greet } = await import('./greeter.js');
console.log(greet('Lin')); // "Hi, Lin"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Conditional loading (feature flag)"}),e.jsx(s.Code,{children:`// main.js (module)
const heavy = Math.random() > 0.5 ? './charts.js' : './table.js';
const ui = await import(heavy);
ui.render(); // calls whichever module's render()

// Output (example):
// "rendering charts..."  OR  "rendering table..."`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — In classic script (no top-level await)"}),e.jsx(s.Code,{children:`<!-- index.html -->
<script>
  import('./math.js')
    .then(ns => {
      console.log(ns.add(1, 2)); // 3
    })
    .catch(err => {
      console.error('Failed to load', err);
    });
<\/script>`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Parallel loading"}),e.jsx(s.Code,{children:`// main.js (module)
const [math, util] = await Promise.all([
  import('./math.js'),
  import('./util.js')
]);
console.log(math.add(1, 2), util.capitalize('ash')); // 3 "Ash"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 6 — Error handling with ",e.jsx("code",{children:"try/catch"})]}),e.jsx(s.Code,{children:`// main.js (module)
try {
  const ns = await import('./missing-or-bad.js');
  ns.run();
} catch (e) {
  console.log('Load failed:', e.constructor.name); 
  // Output example: "Load failed: TypeError" (environment-dependent)
}`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Event-driven lazy load (on demand)"}),e.jsx(s.Code,{children:`// main.js (module)
document.getElementById('open-chart').addEventListener('click', async () => {
  const { renderChart } = await import('./charts.js');
  renderChart(); // loaded only when needed
});`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Mapping names to modules safely"}),e.jsx(s.Code,{children:`// main.js (module)
const routes = {
  home: './pages/home.js',
  about: './pages/about.js',
  contact: './pages/contact.js',
};

async function loadPage(key) {
  const path = routes[key];         // whitelist lookup
  if (!path) throw new Error('Unknown page');
  const page = await import(path);  // dynamic import of known module
  page.render();
}

await loadPage('home'); // renders home page`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 9 — URL resolution with ",e.jsx("code",{children:"import.meta.url"})]}),e.jsx(s.Code,{children:`// utils/loader.js (module)
const mod = await import(new URL('./math.js', import.meta.url));
console.log(mod.add(4, 5)); // 9

// Useful when constructing absolute URLs relative to the current module file.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Single evaluation & caching"}),e.jsx(s.Code,{children:`// once.js
console.log('evaluated once');
export let hits = 0;
export const ping = () => { hits++; };

// main.js (module)
const a = await import('./once.js');
a.ping();
const b = await import('./once.js'); // cached instance
console.log(a.hits, b.hits); // 1 1
// Console includes:
// evaluated once
// 1 1`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 11 — Node interop (CommonJS via ",e.jsx("code",{children:"default"}),")"]}),e.jsx(s.Code,{children:`// In Node.js, importing a CJS module:
const { default: cjs } = await import('./legacy.cjs');
console.log(typeof cjs); // depends on what module.exports was
// Named exports are not synthesized from CJS; use default.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 12 — Fallback load (progressive enhancement)"}),e.jsx(s.Code,{children:`// main.js (module)
let engine;
try {
  engine = await import('./fast-engine.js');     // try modern impl
} catch {
  engine = await import('./compat-engine.js');   // fallback
}
engine.run();`})]})]}),g=()=>e.jsxs(s.Page,{children:[e.jsxs(s.H1,{children:["Top-level ",e.jsx("code",{children:"await"})]}),e.jsxs(s.Lead,{children:["Top-level ",e.jsx("code",{children:"await"})," (TLA) lets modules pause their own evaluation while awaiting a Promise. Importers automatically wait until the awaited work completes. This is allowed only in ES ",e.jsx("em",{children:"modules"})," (not classic scripts or CJS)."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Where allowed:"})," Only in ES modules (including worker modules). Classic scripts and CommonJS do not support TLA."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Semantics:"})," When a module hits ",e.jsx("code",{children:"await"})," at top level, its evaluation is suspended; any module that imports it waits until it resumes and finishes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Graph effect:"})," One module's TLA can delay the whole dependency graph downstream. Prefer parallelization to avoid waterfalls."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error propagation:"})," If a top-level ",e.jsx("code",{children:"await"})," rejects and you don't handle it, the module's evaluation fails and static ",e.jsx("code",{children:"import"})," of that module throws during load."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Handling errors:"})," Catch inside the module (with ",e.jsx("code",{children:"try/catch"}),") or load via ",e.jsx("code",{children:"import()"})," and handle the returned Promise."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Lives with live bindings:"})," Exports updated after TLA settle are visible to importers (live bindings)."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Basic TLA in a browser module"}),e.jsx(s.Code,{children:`<!-- index.html -->
<script type="module" src="./main.js"><\/script>

// main.js (module)
const res = await fetch("/data.json");
const data = await res.json();
console.log(Array.isArray(data)); // e.g., true

// Output:
// true (after the network completes)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Importers automatically wait"}),e.jsx(s.Code,{children:`// config.js (module)
export let config = { ready: false };
const res = await fetch("/config.json");
config = await res.json();         // rebind export after await

// app.js (module)
import { config } from "./config.js";
console.log(!!config.ready); // true (by the time this runs, config resolved)

// Output:
// true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Avoiding waterfalls with parallel awaits"}),e.jsx(s.Code,{children:`// slow (serial):
const a = await fetch("/a.json").then(r => r.json());
const b = await fetch("/b.json").then(r => r.json());

// faster (parallel):
const [a2, b2] = await Promise.all([
  fetch("/a.json").then(r => r.json()),
  fetch("/b.json").then(r => r.json())
]);

console.log(!!a2 && !!b2); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — TLA across module boundaries"}),e.jsx(s.Code,{children:`// userService.js (module)
export const users = await fetch("/api/users").then(r => r.json());

// app.js (module)
import { users } from "./userService.js";
console.log(Array.isArray(users)); // true

// Output:
// true (app waits until userService finishes)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Handling errors inside the module"}),e.jsx(s.Code,{children:`// settings.js (module)
export let settings = { theme: "dark" };
try {
  const res = await fetch("/settings.json");
  if (!res.ok) throw new Error("Bad response");
  settings = await res.json();
} catch (e) {
  console.warn("Using fallback settings"); // handled here, import won't fail
}

// app.js
import { settings } from "./settings.js";
console.log(settings.theme); // "dark" or value from JSON`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 6 — Catching load failures via ",e.jsx("code",{children:"import()"})]}),e.jsx(s.Code,{children:`// main.js (module)
try {
  const mod = await import("./might-fail.js"); // TLA inside might reject
  mod.run();
} catch (e) {
  console.error("Module load failed:", e.constructor.name);
}
// Output example:
// Module load failed: TypeError`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 7 — Node.js (ESM) with ",e.jsx("code",{children:"fs/promises"})]}),e.jsx(s.Code,{children:`// package.json
// { "type": "module" }

/// config.mjs (or .js under "type":"module")
import { readFile } from "node:fs/promises";
export const config = JSON.parse(
  await readFile(new URL("./config.json", import.meta.url), "utf8")
);

// app.mjs
import { config } from "./config.mjs";
console.log(!!config); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Classic script: no TLA (use an async IIFE)"}),e.jsx(s.Code,{children:`<!-- index.html -->
<script>
  (async () => {
    const ns = await import("./math.js"); // dynamic import returns a Promise
    console.log(ns.add(2, 3)); // 5
  })();
<\/script>`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 9 — Top-level ",e.jsx("code",{children:"for await...of"})," in a module"]}),e.jsx(s.Code,{children:`// stream.js (module)
async function* numbers() {
  for (let i = 1; i <= 3; i++) {
    await new Promise(r => setTimeout(r, 100));
    yield i;
  }
}

let sum = 0;
for await (const n of numbers()) {
  sum += n;
}
export { sum };

// app.js
import { sum } from "./stream.js";
console.log(sum); // 6 (after the async loop completes)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Don't create dependency deadlocks"}),e.jsx(s.Code,{children:`// a.js
import "./b.js";
await new Promise(r => setTimeout(r, 100));
// export something...

// b.js
import "./a.js";
await new Promise(r => setTimeout(r, 100));

// Depending on loader order, circular awaits can deadlock or stall the graph.
// Avoid circular dependencies that both block on top-level awaits.`})]})]}),f=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"CJS vs ESM interop (concepts)"}),e.jsxs(s.Lead,{children:["Node.js supports both CommonJS (CJS) and ES Modules (ESM). Interop rules decide how one side loads the other, how ",e.jsx("code",{children:"default"}),"/named exports appear, and what features are available in each format."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Module types:"})," ",e.jsx("em",{children:"CommonJS"})," uses ",e.jsx("code",{children:"require"}),","," ",e.jsx("code",{children:"module.exports"}),". ",e.jsx("em",{children:"ESM"})," uses ",e.jsx("code",{children:"import"}),"/",e.jsx("code",{children:"export"}),","," ","file-based live bindings, and top-level ",e.jsx("code",{children:"await"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"How Node picks mode:"})," ",e.jsx("code",{children:".cjs"})," → CJS; ",e.jsx("code",{children:".mjs"})," → ESM."," ",e.jsx("code",{children:".js"})," follows ",e.jsx("code",{children:"package.json"}),"’s ",e.jsx("code",{children:'"type"'})," (",e.jsx("code",{children:'"commonjs"'})," default,"," ",e.jsx("code",{children:'"module"'})," for ESM)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"CJS → ESM:"})," You ",e.jsx("em",{children:"cannot"})," ",e.jsx("code",{children:"require()"})," an ES module. Use"," ",e.jsx("code",{children:"import()"})," (dynamic import) from CJS to load ESM asynchronously."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ESM → CJS:"})," You ",e.jsx("em",{children:"can"})," ",e.jsx("code",{children:"import"})," a CJS module. The CJS"," ",e.jsx("code",{children:"module.exports"})," value appears on the ESM side as the"," ",e.jsx("code",{children:"default"})," export (named exports are not spec-guaranteed)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"JSON:"})," CJS can ",e.jsx("code",{children:"require()"})," JSON directly. ESM imports JSON with"," ",e.jsx("code",{children:'assert { type: "json" }'})," (modern Node)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Paths & meta:"})," CJS has ",e.jsx("code",{children:"__filename"}),", ",e.jsx("code",{children:"__dirname"}),". ESM uses"," ",e.jsx("code",{children:"import.meta.url"})," (convert via ",e.jsx("code",{children:"fileURLToPath"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dual packages:"})," Publish both forms using conditional exports so each ecosystem gets native format without brittle interop shims."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Choosing CJS vs ESM via file/packaging"}),e.jsx(s.Code,{children:`// package.json (ESM-by-default in this package)
{
  "type": "module"
}
// index.js -> treated as ESM
// index.cjs -> always CJS
// index.mjs -> always ESM

// Without "type":"module", .js defaults to CJS.`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 2 — Importing CJS from ESM (use ",e.jsx("code",{children:"default"}),")"]}),e.jsx(s.Code,{children:`// common.cjs  (CJS)
module.exports = {
  add(a,b){ return a+b; },
  version: "1.0.0"
};

// main.mjs (ESM)
import cjs from "./common.cjs";    // cjs === module.exports
console.log(cjs.add(2,3));         // 5
console.log(cjs.version);          // "1.0.0"

// ❌ Not guaranteed (avoid):
// import { add } from "./common.cjs"; // may throw or be undefined in pure ESM semantics`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 3 — Loading ESM from CJS (use dynamic ",e.jsx("code",{children:"import()"}),")"]}),e.jsx(s.Code,{children:`// lib.mjs (ESM)
export const x = 42;
export default function greet(n){ return "Hi, " + n; }

// app.cjs (CJS)
(async () => {
  const mod = await import("./lib.mjs"); // Promise -> ESM namespace
  console.log(mod.x);            // 42
  console.log(mod.default("Ada"));// "Hi, Ada"
})();

// ❌ This fails:
// const lib = require("./lib.mjs"); // Error: Must use import to load ES Module`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Default vs named shapes across the boundary"}),e.jsx(s.Code,{children:`// CJS exporting a function directly:
module.exports = function add(a,b){ return a+b; };

// ESM side:
import add from "./add.cjs";
console.log(add(1,2)); // 3

// CJS exporting an object of functions:
module.exports = { add(a,b){return a+b;}, sub(a,b){return a-b;} };

// ESM side:
import ops from "./ops.cjs";
const { add, sub } = ops;    // destructure from default
console.log(add(4,1), sub(4,1)); // 3 3`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — JSON interop"}),e.jsx(s.Code,{children:`// data.json
{ "name": "demo", "n": 7 }

// CJS:
const data = require("./data.json");
console.log(data.n); // 7

// ESM:
import data2 from "./data.json" assert { type: "json" };
console.log(data2.name); // "demo"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — __dirname/__filename (CJS) vs import.meta.url (ESM)"}),e.jsx(s.Code,{children:`// CJS:
console.log(__filename.endsWith(".cjs")); // true
console.log(__dirname.includes("/"));     // true (platform-dependent)

// ESM:
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
console.log(__filename.endsWith(".mjs")); // true
console.log(!!__dirname);                 // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Top-level await only in ESM (CJS must async)"}),e.jsx(s.Code,{children:`// fetcher.mjs (ESM)
export const txt = await Promise.resolve("ready");

// cjs-app.cjs (CJS)
(async () => {
  const { txt } = await import("./fetcher.mjs");
  console.log(txt); // "ready"
})();`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Dual package via conditional exports"}),e.jsx(s.Code,{children:`// package.json (publish both ESM and CJS builds)
{
  "name": "mypkg",
  "exports": {
    "import": "./dist/index.mjs",   // ESM consumers get this
    "require": "./dist/index.cjs"   // CJS consumers get this
  }
}
// ESM user:
// import { fn } from "mypkg";
// CJS user:
// const { fn } = require("mypkg");`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Avoid brittle interop assumptions"}),e.jsx(s.Code,{children:`// ❌ Don't rely on 'named' imports from CJS:
// import { add } from "./common.cjs"; // may be undefined / error

// ✅ Do this instead:
import common from "./common.cjs";
const { add } = common;
console.log(add(2,2)); // 4

// ❌ Don't try to require() an ES module:
// const x = require("./esm.mjs"); // throws

// ✅ Use dynamic import() from CJS:
(async () => {
  const esm = await import("./esm.mjs");
  console.log(typeof esm.default); // "function" (if default exported)
})();`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 10 — Note on transpiler interop (",e.jsx("code",{children:"__esModule"}),")"]}),e.jsx(s.Code,{children:`// Some bundlers/transpilers emit '__esModule' and put the ESM default at .default:
// CJS:
const mod = require("./built-esm.js");
console.log(!!mod.__esModule, typeof mod.default); // true, "function" (typical)
// This is tooling-specific sugar; do not assume it in pure ESM/CJS without a bundler.`})]})]}),b=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Primitive types — overview"}),e.jsx(s.Lead,{children:"JavaScript has seven primitive types. They are not objects (no internal mutable fields) and are compared/copied by value. Objects (including arrays and functions) are non-primitive."}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["The seven primitives are: ",e.jsx("strong",{children:"undefined"}),", ",e.jsx("strong",{children:"null"}),","," ",e.jsx("strong",{children:"boolean"}),", ",e.jsx("strong",{children:"number"}),", ",e.jsx("strong",{children:"bigint"}),","," ",e.jsx("strong",{children:"string"}),", ",e.jsx("strong",{children:"symbol"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Immutability:"})," Primitive values cannot be changed in place (e.g., strings are immutable). Reassigning a variable replaces the value."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"typeof"})," results:"]})," ",e.jsx("code",{children:'"undefined"'}),","," ",e.jsx("code",{children:'"boolean"'}),", ",e.jsx("code",{children:'"number"'}),", ",e.jsx("code",{children:'"bigint"'}),","," ",e.jsx("code",{children:'"string"'}),", ",e.jsx("code",{children:'"symbol"'}),". Note: ",e.jsx("code",{children:"typeof null"})," ","is ",e.jsx("code",{children:'"object"'})," (historical quirk)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Auto-boxing:"})," When we access properties on a primitive (e.g., ",e.jsx("code",{children:'"hi".length'}),"), the engine briefly creates a wrapper object (",e.jsx("code",{children:"String"}),", ",e.jsx("code",{children:"Number"}),", ",e.jsx("code",{children:"Boolean"}),") and then discards it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Numbers:"})," IEEE-754 double precision; includes"," ",e.jsx("code",{children:"NaN"}),", ",e.jsx("code",{children:"Infinity"}),", and ",e.jsx("code",{children:"-0"}),". (",e.jsx("em",{children:"Details later."}),")"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"BigInt:"})," Arbitrary-precision integers written with"," ",e.jsx("code",{children:"n"})," suffix (e.g., ",e.jsx("code",{children:"9007199254740993n"}),"). Cannot be mixed with ",e.jsx("code",{children:"number"})," in arithmetic."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Symbols:"})," Unique identifiers; often used as non-string property keys."]})]})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 1 — All primitive kinds & ",e.jsx("code",{children:"typeof"})]}),e.jsx(s.Code,{children:`console.log(typeof undefined);  // "undefined"
console.log(typeof true);       // "boolean"
console.log(typeof 42);         // "number"
console.log(typeof 10n);        // "bigint"
console.log(typeof "hello");    // "string"
console.log(typeof Symbol());   // "symbol"
console.log(typeof null);       // "object"  <-- historical quirk

// Output:
// "undefined"
// "boolean"
// "number"
// "bigint"
// "string"
// "symbol"
// "object"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Immutability & copy-by-value"}),e.jsx(s.Code,{children:`let a = "hi";
let b = a;          // copy the value
b = b + "!";
console.log(a);     // "hi"   (original unchanged)
console.log(b);     // "hi!"

let x = 7;
let y = x;
y = y + 1;
console.log(x, y);  // 7 8`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Auto-boxing for property access"}),e.jsx(s.Code,{children:`console.log("abc".length);     // 3  (temporary String object)
console.log((42).toFixed(1));   // "42.0" (temporary Number object)
console.log(true.toString());    // "true"

// But wrapper instances are objects:
console.log(typeof new String("x")); // "object"
console.log(typeof "x");             // "string"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 4 — ",e.jsx("code",{children:"null"})," vs ",e.jsx("code",{children:"undefined"})]}),e.jsx(s.Code,{children:`let u;                 // declared, not assigned
const n = null;         // explicit "no value"

console.log(u === undefined); // true
console.log(n === null);      // true

// Typical uses:
// undefined → "not provided" / uninitialized
// null      → "intentionally empty"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Number peculiarities (quick look)"}),e.jsx(s.Code,{children:`console.log(Number.isNaN(NaN));  // true
console.log(1 / 0);               // Infinity
console.log(-1 / 0);              // -Infinity
console.log(Object.is(+0, -0));   // false (they're different signs)
console.log(typeof NaN);          // "number"

// Details on precision, NaN, Infinity, and -0 appear in dedicated topics.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — BigInt basics (no mixing with Number)"}),e.jsx(s.Code,{children:`const big = 9007199254740993n; // > Number.MAX_SAFE_INTEGER
console.log(big + 2n);           // 9007199254740995n
// console.log(big + 2);         // ❌ TypeError: Cannot mix BigInt and other types
console.log(2n === 2);           // false (different types)
console.log(2n == 2);            // true  (loose equality coerces)

// Arithmetic mixing throws; comparisons are allowed (with care).`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Symbols as unique keys"}),e.jsx(s.Code,{children:`const k = Symbol("id");
const obj = { [k]: 123, id: 456 };
console.log(obj[k]);     // 123
console.log(obj.id);     // 456
console.log(Object.keys(obj));       // ["id"]  (symbol keys are skipped)
console.log(Object.getOwnPropertySymbols(obj).length > 0); // true`})]})]}),y=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Object type — overview"}),e.jsx(s.Lead,{children:"Objects are dynamic collections of key–value pairs with prototype-based inheritance. Arrays, functions, dates, maps, sets, and most built-ins are objects. Primitives are not objects (though they can be auto-boxed)."}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["An ",e.jsx("strong",{children:"object"})," maps ",e.jsx("em",{children:"property keys"})," to values. Keys are strings or symbols (not numbers; numeric literals are stringified)."]}),e.jsxs("li",{children:["Objects have a hidden ",e.jsx("strong",{children:"[[Prototype]]"})," (their parent in the prototype chain). Property reads walk up this chain if not found on the object."]}),e.jsxs("li",{children:["Properties have ",e.jsx("strong",{children:"attributes"})," (writable, enumerable, configurable) and can be ",e.jsx("em",{children:"data"})," properties or ",e.jsx("em",{children:"accessors"})," (get/set)."]}),e.jsxs("li",{children:["Objects are ",e.jsx("strong",{children:"reference values"}),": variables hold references. Equality (",e.jsx("code",{children:"==="}),") compares identity, not structure."]}),e.jsxs("li",{children:["Common creation forms: object literal ",e.jsx("code",{children:"{...}"}),","," ",e.jsx("code",{children:"Object.create(proto)"}),", class/constructor with ",e.jsx("code",{children:"new"}),"."]}),e.jsxs("li",{children:["Specializations: ",e.jsx("code",{children:"Array"}),", ",e.jsx("code",{children:"Function"}),", ",e.jsx("code",{children:"Date"}),","," ",e.jsx("code",{children:"RegExp"}),", typed arrays, collections, proxies… all are objects with different behaviors."]}),e.jsxs("li",{children:[e.jsx("code",{children:"typeof obj"})," is ",e.jsx("code",{children:'"object"'})," (for functions,"," ",e.jsx("code",{children:'"function"'}),"—a historical special case, but functions are still objects)."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Creating objects"}),e.jsx(s.Code,{children:`const user = { name: "Ash", city: "Bengaluru" }; // literal
const anon = Object.create(null); // no prototype (pure dictionary)
const base = { kind: "base" };
const child = Object.create(base); // prototype-linked

console.log(user.name);            // "Ash"
console.log(Object.getPrototypeOf(anon)); // null
console.log(child.kind);           // "base" (found via prototype)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Keys: string vs symbol"}),e.jsx(s.Code,{children:`const s = Symbol("id");
const obj = { regular: 1, "1": "one" };
obj[s] = 99;

console.log(Object.keys(obj));     // ["regular","1"]  (symbols are skipped)
console.log(Object.getOwnPropertySymbols(obj).length); // 1
console.log(obj[s]);               // 99
console.log(obj[1]);               // "one" (numeric literal → "1")`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Property access & computed names"}),e.jsx(s.Code,{children:`const key = "score";
const o = { ["first"+"Name"]: "Ada", [key]: 42 };
console.log(o.firstName); // "Ada"
console.log(o[key]);      // 42
console.log(o.score);     // 42`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Identity vs structure"}),e.jsx(s.Code,{children:`const a = { x: 1 };
const b = { x: 1 };
const c = a;

console.log(a === b); // false  (different references)
console.log(a === c); // true   (same reference)
console.log(JSON.stringify(a) === JSON.stringify(b)); // true (same structure, but identity still differs)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Reference semantics"}),e.jsx(s.Code,{children:`function touch(p) { p.hit = true; }
const obj = {};
touch(obj);
console.log(obj.hit); // true  (function mutated the same referenced object)

let x = { n: 1 };
let y = x;       // copy the reference
y.n = 2;
console.log(x.n); // 2 (both names point to the same object)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Descriptors (data vs accessor)"}),e.jsx(s.Code,{children:`const box = {};
Object.defineProperty(box, "locked", {
  value: true, writable: false, enumerable: true, configurable: false
});

let _v = 0;
Object.defineProperty(box, "value", {
  get() { return _v; },
  set(n) { _v = n; },
  enumerable: true
});

try { box.locked = false; } catch(e){ /* TypeError in strict mode */ }
box.value = 10;
console.log(box.locked, box.value); // true 10`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Prototype lookup & shadowing"}),e.jsx(s.Code,{children:`const proto = { greet(){ return "hi"; } };
const inst = Object.create(proto);
console.log(inst.greet()); // "hi"  (found on prototype)

inst.greet = function(){ return "hello"; }; // shadow override
console.log(inst.greet()); // "hello"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Arrays & functions are objects"}),e.jsx(s.Code,{children:`const arr = [10, 20];
arr.extra = "ok";
console.log(typeof arr, Array.isArray(arr)); // "object" true
console.log(arr.extra); // "ok" (arrays are objects with special index behavior)

function f(){ return 1; }
f.meta = "info";
console.log(typeof f); // "function" (but it's an object)
console.log(f.meta);   // "info"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Cloning (shallow) vs deep"}),e.jsx(s.Code,{children:`const state = { a: 1, nested: { k: 9 } };
const shallow1 = { ...state };
const shallow2 = Object.assign({}, state);

console.log(shallow1.nested === state.nested); // true  (still same inner object)

// naive deep (NOT robust for all types):
const deep = JSON.parse(JSON.stringify(state));
console.log(deep.nested === state.nested);     // false (different object)

// For structured cloning (handles more cases):
// const clone = structuredClone(state); // modern API (see dedicated topic)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Deleting & existence checks"}),e.jsx(s.Code,{children:`const settings = { theme: "dark" };
console.log("theme" in settings); // true
console.log(settings.hasOwnProperty("theme")); // true (own only)
// console.log(Object.hasOwn(settings, "theme")); // modern own check

delete settings.theme;
console.log("theme" in settings); // false`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 11 — Freezing & extensibility (preview)"}),e.jsx(s.Code,{children:`const cfg = { a: 1 };
console.log(Object.isExtensible(cfg)); // true
Object.preventExtensions(cfg);
cfg.b = 2; // silently ignored (or TypeError in strict)

Object.freeze(cfg);     // makes existing props non-writable, non-configurable
// cfg.a = 10;          // TypeError in strict
console.log(Object.isFrozen(cfg)); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 12 — Safe dictionary objects"}),e.jsx(s.Code,{children:`// Object.create(null) avoids prototype collisions with keys like "constructor"
const dict = Object.create(null);
dict["__proto__"] = "safe";
dict["toString"] = "also safe";
console.log(Object.getPrototypeOf(dict)); // null
console.log(dict.toString); // "also safe"`})]})]}),S=()=>e.jsxs(s.Page,{children:[e.jsxs(s.H1,{children:[e.jsx("code",{children:"typeof"})," nuances (null, functions, symbols)"]}),e.jsxs(s.Lead,{children:[e.jsx("code",{children:"typeof"})," returns a string describing a value’s broad category, but it has a few historical quirks and special cases. Know these before using it for checks or guards."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Primitive results:"})," ",e.jsx("code",{children:'"undefined"'}),", ",e.jsx("code",{children:'"boolean"'}),","," ",e.jsx("code",{children:'"number"'}),", ",e.jsx("code",{children:'"bigint"'}),", ",e.jsx("code",{children:'"string"'}),", ",e.jsx("code",{children:'"symbol"'}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objects:"})," Most objects (arrays, dates, regexps, plain objects, errors, module namespaces) return ",e.jsx("code",{children:'"object"'}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Callable objects:"})," Anything with [[Call]] (functions, async/generator/arrow/bound functions, callable proxies, classes) returns ",e.jsx("code",{children:'"function"'}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Quirk:"})," ",e.jsx("code",{children:"typeof null"})," is ",e.jsx("code",{children:'"object"'})," (legacy bug)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Safe on undeclared names:"})," ",e.jsx("code",{children:"typeof notDefined"})," is ",e.jsx("code",{children:'"undefined"'})," (no ReferenceError)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Environment oddities:"})," Some hosts (browsers) make ",e.jsx("code",{children:"typeof document.all"})," be ",e.jsx("code",{children:'"undefined"'})," for web-compat."]})]})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 1 — The ",e.jsx("code",{children:"null"})," quirk"]}),e.jsx(s.Code,{children:`console.log(typeof null); // "object"  <-- historical bug
console.log(null === null);     // true (use direct comparison)
console.log(Object.prototype.toString.call(null)); // "[object Null]"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Functions (incl. arrows, async, generators)"}),e.jsx(s.Code,{children:`function f() {}
const g = () => {};
async function h() {}
function* gen() {}

console.log(typeof f);   // "function"
console.log(typeof g);   // "function"
console.log(typeof h);   // "function"
console.log(typeof gen); // "function"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 3 — Classes report ",e.jsx("code",{children:'"function"'})]}),e.jsx(s.Code,{children:`class C { static s(){} m(){} }
console.log(typeof C); // "function"
// But calling without 'new' throws:
// C(); // TypeError: Class constructor C cannot be invoked without 'new'`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Symbols"}),e.jsx(s.Code,{children:`const s = Symbol("id");
console.log(typeof s);              // "symbol"
console.log(typeof Symbol.iterator); // "symbol"

// No 'new Symbol()':
// new Symbol(); // TypeError

// A wrapper object can exist via Object():
const w = Object(s);
console.log(typeof w);              // "object" (a Symbol wrapper object)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 5 — Arrays, dates, regexps are still ",e.jsx("code",{children:'"object"'})]}),e.jsx(s.Code,{children:`console.log(typeof [1,2,3]);          // "object"
console.log(typeof new Date());       // "object"
console.log(typeof /abc/);            // "object"
// Use precise checks:
console.log(Array.isArray([1,2,3]));  // true
console.log(Object.prototype.toString.call(new Date())); // "[object Date]"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Numbers: NaN, Infinity, -0"}),e.jsx(s.Code,{children:`console.log(typeof NaN);      // "number"
console.log(typeof Infinity); // "number"
console.log(typeof -0);       // "number"
console.log(Object.is(+0, -0)); // false (distinct signs)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — BigInt"}),e.jsx(s.Code,{children:`console.log(typeof 10n);           // "bigint"
console.log(typeof BigInt(10));   // "bigint"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Safe checks for undeclared variables"}),e.jsx(s.Code,{children:`// console.log(notDeclared); // ❌ ReferenceError
console.log(typeof notDeclared);   // "undefined" (safe)
let x;
console.log(typeof x);             // "undefined"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 9 — Callable Proxy still reports ",e.jsx("code",{children:'"function"'})]}),e.jsx(s.Code,{children:`const target = () => "ok";
const prox = new Proxy(target, {});
console.log(typeof prox); // "function"
console.log(prox());      // "ok"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 10 — Module namespace objects & ",e.jsx("code",{children:"import.meta"})]}),e.jsx(s.Code,{children:`// In modules:
// const ns = await import('./some-module.js');
// console.log(typeof ns);      // "object" (module namespace is an exotic object)
// console.log(typeof import.meta); // "object" (host-provided meta info)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 11 — Host oddity: ",e.jsx("code",{children:"document.all"})," (browser)"]}),e.jsx(s.Code,{children:`// In browsers (for legacy web-compat):
// typeof document.all === "undefined"  → true
// Yet Boolean(document.all) === false and it's also loosely equal to undefined/null.
// Treat it as a historical quirk; do not rely on it.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 12 — Practical guard patterns"}),e.jsx(s.Code,{children:`// 1) Distinguish null from objects:
const isObject = v => v !== null && typeof v === "object";

// 2) Function check (works for all callable kinds):
const isFunction = v => typeof v === "function";

// 3) Symbol check:
const isSymbol = v => typeof v === "symbol";

console.log(isObject({}));     // true
console.log(isObject(null));   // false
console.log(isFunction(async ()=>{})); // true
console.log(isSymbol(Symbol()));       // true`})]})]}),v=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Value vs reference"}),e.jsxs(s.Lead,{children:["Primitives are copied and compared by ",e.jsx("em",{children:"value"}),". Objects (arrays, functions, dates, etc.) are handled by ",e.jsx("em",{children:"reference"}),": variables hold pointers to the same underlying object unless you create a new copy."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Value (primitive):"})," ",e.jsx("code",{children:"undefined"}),", ",e.jsx("code",{children:"null"}),","," ",e.jsx("code",{children:"boolean"}),", ",e.jsx("code",{children:"number"}),", ",e.jsx("code",{children:"bigint"}),","," ",e.jsx("code",{children:"string"}),", ",e.jsx("code",{children:"symbol"})," — assigning or passing makes an independent copy of the value."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Reference (object):"})," plain objects, arrays, functions, dates, regexps, maps/sets, typed arrays — assigning or passing copies the",e.jsx("em",{children:"reference"}),", so multiple names can view/mutate the same object."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Equality:"})," ",e.jsx("code",{children:"==="})," compares primitive values directly; for objects it compares identity (same reference), not structure."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mutation vs rebinding:"})," Changing object contents mutates through all references; assigning a new object is just rebinding that one variable."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Function parameters:"})," JavaScript passes arguments by value; for objects the “value” being copied is the reference (a.k.a. pass-by-sharing)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cloning:"})," Spread/assign are shallow. Use"," ",e.jsx("code",{children:"structuredClone"})," for deep clone of many built-ins (not functions)."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Primitives copy by value"}),e.jsx(s.Code,{children:`let a = "hi";
let b = a;        // copy the value
b += "!";
console.log(a);   // "hi"
console.log(b);   // "hi!"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Objects assign by reference"}),e.jsx(s.Code,{children:`const obj1 = { n: 1 };
const obj2 = obj1;      // copy the reference (both point to same object)
obj2.n = 2;
console.log(obj1.n);    // 2  (mutation visible through both)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Rebinding vs mutating"}),e.jsx(s.Code,{children:`let user = { name: "Ash" };
let alias = user;              // same reference
alias.name = "Ada";
console.log(user.name);        // "Ada" (mutated)

// Rebinding 'alias' does not affect 'user':
alias = { name: "Lin" };       // new object bound to alias
console.log(user.name);        // "Ada"
console.log(alias.name);       // "Lin"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 4 — ",e.jsx("code",{children:"const"})," freezes the binding, not the object"]}),e.jsx(s.Code,{children:`const cfg = { dark: true };
cfg.dark = false;      // OK (mutating the same object)
// cfg = {}            // ❌ TypeError: Assignment to constant variable`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Function parameters: pass-by-sharing"}),e.jsx(s.Code,{children:`function bump(counter) {
  counter.value++;         // mutates caller's object
  counter = { value: 999 }; // rebinding local param only
}

const box = { value: 0 };
bump(box);
console.log(box.value); // 1  (not 999)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Equality: identity vs structure"}),e.jsx(s.Code,{children:`const a = { x: 1 };
const b = { x: 1 };
const c = a;

console.log(a === b);           // false (different references)
console.log(a === c);           // true  (same reference)
console.log(JSON.stringify(a) === JSON.stringify(b)); // true (same shape, but identity differs)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Shallow copy with spread/assign"}),e.jsx(s.Code,{children:`const state = { count: 0, nested: { k: 1 } };
const s1 = { ...state };
const s2 = Object.assign({}, state);

s1.count = 1;
s1.nested.k = 2;

console.log(state.count);      // 0  (top-level copied)
console.log(state.nested.k);   // 2  (inner object shared → shallow copy)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 8 — Deep copy with ",e.jsx("code",{children:"structuredClone"})," (modern)"]}),e.jsx(s.Code,{children:`const src = { d: new Date("2024-01-01"), arr: [1, { y: 2 }] };
const deep = structuredClone(src);

deep.arr[1].y = 9;
console.log(src.arr[1].y);        // 2  (separate)
console.log(src.d instanceof Date, deep.d instanceof Date); // true true

// Note: functions, DOM nodes, and some types are not cloneable.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — JSON clone caveats"}),e.jsx(s.Code,{children:`const src = { n: 1, f(){}, u: undefined, d: new Date("2024-01-01") };
const clone = JSON.parse(JSON.stringify(src));
console.log(clone); // { n: 1 } — functions/undefined dropped; Date became string`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Arrays: new container, same inner references"}),e.jsx(s.Code,{children:`const inner = { k: 1 };
const a1 = [inner, 2, 3];
const a2 = a1.slice();      // shallow copy of array container
a2[0].k = 9;
console.log(a1[0].k);       // 9 (inner object shared)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 11 — Maps/Sets use identity of references"}),e.jsx(s.Code,{children:`const k1 = { id: 1 };
const k2 = { id: 1 };
const m = new Map();
m.set(k1, "A");
console.log(m.get(k1)); // "A"
console.log(m.get(k2)); // undefined (different object, despite same shape)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 12 — Freezing to prevent mutation"}),e.jsx(s.Code,{children:`const config = Object.freeze({ mode: "prod", opts: Object.freeze({ cache: true }) });
// config.mode = "dev";          // ❌ TypeError in strict mode
// config.opts.cache = false;    // ❌ also frozen (because we froze nested too)`})]})]}),w=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Mutability vs immutability"}),e.jsx(s.Lead,{children:"Primitives are immutable; objects are mutable by default. Immutability is a discipline of producing new values instead of changing existing ones, which improves predictability and reduces side-effects."}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Immutable value:"})," cannot be changed in place. All primitives (",e.jsx("code",{children:"undefined"}),", ",e.jsx("code",{children:"null"}),", ",e.jsx("code",{children:"boolean"}),", ",e.jsx("code",{children:"number"}),", ",e.jsx("code",{children:"bigint"}),", ",e.jsx("code",{children:"string"}),", ",e.jsx("code",{children:"symbol"}),") are immutable."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mutable value:"})," objects (plain objects, arrays, functions, dates, maps/sets, typed arrays, etc.) can be changed by adding/removing/updating properties or elements."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rebinding vs mutation:"})," Reassigning a variable points it to a new value; mutating changes the same underlying object seen by all references."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Benefits of immutability:"})," easier reasoning, fewer hidden side-effects, simpler change detection, potential for time-travel/undo, safer concurrency."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Costs/tradeoffs:"})," extra allocations and GC pressure if overused; deep copies can be expensive—prefer ",e.jsx("em",{children:"structural sharing"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Enforcing immutability:"})," ",e.jsx("code",{children:"Object.freeze"})," (shallow), deep-freeze helpers, disciplined update patterns (spread/concat/slice, object rest, Maps cloned with ",e.jsx("code",{children:"new Map(old)"}),", etc.)."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Primitives are immutable"}),e.jsx(s.Code,{children:`let s = "Ash";
s[0] = "X";          // no effect (strings immutable)
console.log(s);      // "Ash"

let n = 5;
n.toFixed = () => "hack"; // no effect on the primitive value
console.log(n + 1); // 6`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Objects are mutable by default"}),e.jsx(s.Code,{children:`const user = { name: "Ash", skills: ["JS"] };
user.name = "Ada";
user.skills.push("React");
console.log(user); // { name: "Ada", skills: ["JS","React"] }`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Rebinding (new object) vs mutating (same object)"}),e.jsx(s.Code,{children:`let a = { x: 1 };
let b = a;           // both point to same object
b.x = 2;             // mutate
console.log(a.x);    // 2

b = { x: 3 };        // rebind b to a new object
console.log(a.x);    // 2
console.log(b.x);    // 3`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:'Example 4 — "const" freezes the binding, not the object'}),e.jsx(s.Code,{children:`const cfg = { dark: true };
cfg.dark = false;        // OK (object still mutable)
// cfg = {}              // ❌ TypeError: Assignment to constant variable
console.log(cfg.dark);    // false`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Shallow immutable updates (objects)"}),e.jsx(s.Code,{children:`const state = { a: 1, nested: { k: 9 } };

// Update 'a' without touching the original object:
const next = { ...state, a: 2 };
console.log(state.a, next.a);            // 1 2
console.log(state.nested === next.nested); // true (shallow copy shares nested)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Shallow immutable updates (arrays)"}),e.jsx(s.Code,{children:`const arr = [1, 2, 3];

// add
const arrAdd = [...arr, 4];              // [1,2,3,4]
// insert at start
const arrPre = [0, ...arr];              // [0,1,2,3]
// remove index 1
const arrRem = [...arr.slice(0,1), ...arr.slice(2)]; // [1,3]
// replace index 2
const arrRep = arr.map((v,i) => i === 2 ? 99 : v);   // [1,2,99]

console.log(arr);     // [1,2,3] (unchanged)
console.log(arrAdd);  // [1,2,3,4]`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Deep updates with structural sharing"}),e.jsx(s.Code,{children:`const state = { profile: { name: "Ash", addr: { city: "BLR" } } };

// update city immutably:
const next = {
  ...state,
  profile: {
    ...state.profile,
    addr: { ...state.profile.addr, city: "Bengaluru" }
  }
};

console.log(state.profile.addr.city); // "BLR"
console.log(next.profile.addr.city);  // "Bengaluru"
// Shared parts:
console.log(state.profile === next.profile);        // false
console.log(state.profile.addr === next.profile.addr); // false
console.log(state.profile.name === next.profile.name); // true (reused)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Freezing to prevent mutation (shallow)"}),e.jsx(s.Code,{children:`const obj = Object.freeze({ a: 1, inner: { k: 1 } });
// obj.a = 2;           // ❌ TypeError in strict mode
obj.inner.k = 9;         // allowed (freeze is shallow)
console.log(obj.inner.k); // 9`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Deep freeze helper (simple)"}),e.jsx(s.Code,{children:`function deepFreeze(o) {
  Object.getOwnPropertyNames(o).forEach(k => {
    const v = o[k];
    if (v && typeof v === "object") deepFreeze(v);
  });
  return Object.freeze(o);
}

const config = deepFreeze({ theme: { dark: true } });
// config.theme.dark = false; // ❌ TypeError in strict mode
console.log(config.theme.dark); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Dates, Maps, Sets are mutable objects"}),e.jsx(s.Code,{children:`const d = new Date("2024-01-01");
d.setFullYear(2025);
console.log(d.getFullYear()); // 2025

const m = new Map([["a",1]]);
m.set("a", 2);
console.log(m.get("a")); // 2

// Immutable update style:
const m2 = new Map(m); // clone entries (shallow)
m2.set("b", 3);
console.log(m.has("b"), m2.has("b")); // false true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 11 — Pure vs impure functions"}),e.jsx(s.Code,{children:`// impure: mutates its input
function addTagImpure(post, tag) {
  post.tags.push(tag);
  return post;
}

// pure: returns a new object, input untouched
function addTagPure(post, tag) {
  return { ...post, tags: [...post.tags, tag] };
}

const p1 = { title: "JS", tags: ["lang"] };
const p2 = addTagImpure(p1, "notes");
console.log(p1.tags.join(",")); // "lang,notes" (p1 changed)

const p3 = addTagPure(p1, "best");
console.log(p1.tags.join(",")); // "lang,notes" (unchanged further)
console.log(p3.tags.join(",")); // "lang,notes,best"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 12 — Copy pitfalls: nested references"}),e.jsx(s.Code,{children:`const src = { items: [{ id: 1 }, { id: 2 }] };
const shallow = { ...src };               // shallow
shallow.items[0].id = 99;                 // mutates inner object shared with src
console.log(src.items[0].id); // 99

// Safer (new array + cloned elements):
const safe = { items: src.items.map(it => ({ ...it })) };
safe.items[0].id = 1;
console.log(src.items[0].id, safe.items[0].id); // 99 1`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 13 — Structured clone: deep, but not for everything"}),e.jsx(s.Code,{children:`const original = { d: new Date(), arr: [1, { n: 2 }] };
const cloned = structuredClone(original);
cloned.arr[1].n = 9;

console.log(original.arr[1].n); // 2 (separate)
// Note: functions, DOM nodes, and some exotic types are not cloneable.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 14 — When mutation is okay"}),e.jsxs(s.UL,{children:[e.jsx("li",{children:"Local objects with no shared references outside a function."}),e.jsx("li",{children:"Performance-critical hot paths where profiling shows immutable patterns are too costly."}),e.jsx("li",{children:"Controlled mutation during construction, then freeze for read-only use."})]})]})]}),N=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Object freezing/sealing/extensibility"}),e.jsxs(s.Lead,{children:["JavaScript lets you control whether objects can have properties added, removed, or changed. ",e.jsx("code",{children:"Object.preventExtensions"}),", ",e.jsx("code",{children:"Object.seal"}),", and ",e.jsx("code",{children:"Object.freeze"})," progressively lock an object down."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Extensible:"})," An object that can gain new own properties. Check with"," ",e.jsx("code",{children:"Object.isExtensible(obj)"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"Object.preventExtensions(obj)"}),":"]})," Disallows adding new own properties. Existing properties are untouched."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"Object.seal(obj)"}),":"]})," Calls ",e.jsx("code",{children:"preventExtensions"})," and also sets all ",e.jsx("em",{children:"own"})," properties’ ",e.jsx("code",{children:"configurable:false"})," (cannot delete or reconfigure). ",e.jsx("em",{children:"Writable stays as-is."})," Check with ",e.jsx("code",{children:"Object.isSealed(obj)"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"Object.freeze(obj)"}),":"]})," Seals the object and also sets all"," ",e.jsx("em",{children:"data"})," properties’ ",e.jsx("code",{children:"writable:false"})," (values cannot change). Accessor properties (get/set) keep their getter/setter but become ",e.jsx("code",{children:"configurable:false"}),". Check with ",e.jsx("code",{children:"Object.isFrozen(obj)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Shallow only:"})," All three operations affect only the object itself, not nested objects. Deep locking requires a helper (see below)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Strict-mode behavior:"})," Violations throw ",e.jsx("code",{children:"TypeError"}),". In sloppy mode they fail silently (return ",e.jsx("code",{children:"false"}),", ignore assignment, etc.)."]})]})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 1 — ",e.jsx("code",{children:"preventExtensions"})]}),e.jsx(s.Code,{children:`const a = { x: 1 };
console.log(Object.isExtensible(a)); // true
Object.preventExtensions(a);
console.log(Object.isExtensible(a)); // false

// Adding new props now fails:
a.y = 2;                 // ignored (or TypeError in strict)
console.log(a.y);        // undefined

// Existing props unaffected:
a.x = 9;
console.log(a.x);        // 9`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 2 — ",e.jsx("code",{children:"seal"})," (no add, no delete, no reconfigure)"]}),e.jsx(s.Code,{children:`const b = { k: 1 };
Object.seal(b);
console.log(Object.isExtensible(b)); // false
console.log(Object.isSealed(b));     // true

// Can't add or delete:
b.newKey = 123;          // ignored / TypeError (strict)
delete b.k;              // false / TypeError (strict)
console.log(b.k);        // 1

// But writable stays the same:
b.k = 7;                 // allowed if 'k' was writable
console.log(b.k);        // 7`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 3 — ",e.jsx("code",{children:"freeze"})," (values fixed, accessors unchanged)"]}),e.jsx(s.Code,{children:`const c = { p: 1 };
Object.freeze(c);
console.log(Object.isFrozen(c)); // true

// Data properties cannot change:
c.p = 99;                // ignored / TypeError (strict)
console.log(c.p);        // 1

// Accessor nuance: getters/setters remain callable, but the
// property itself is non-configurable (shape locked):
let _v = 0;
const d = {};
Object.defineProperty(d, "val", {
  get(){ return _v; },
  set(n){ _v = n; },     // setter still runs even if object is frozen
  enumerable: true, configurable: true
});
Object.freeze(d);
// d.val's descriptor now has configurable:false; setter still exists:
d.val = 42;              // setter runs, mutating _v outside the object
console.log(d.val);      // 42`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Descriptors before/after"}),e.jsx(s.Code,{children:`const obj = {};
Object.defineProperty(obj, "x", {
  value: 10, writable: true, enumerable: true, configurable: true
});

// Seal:
Object.seal(obj);
// descriptor: { value:10, writable:true, enumerable:true, configurable:false }

// Freeze:
Object.freeze(obj);
// descriptor: { value:10, writable:false, enumerable:true, configurable:false }`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Arrays under the three locks"}),e.jsx(s.Code,{children:`// preventExtensions: no new indices
const A = [1, 2];
Object.preventExtensions(A);
A.push(3);        // fails (cannot add index 2) — ignored / TypeError (strict)
A[0] = 9;         // OK (existing index still writable)
console.log(A);   // [9, 2]

// seal: also makes existing indices non-configurable (can't delete/reconfigure)
const B = [1, 2, 3];
Object.seal(B);
delete B[1];      // false / TypeError (strict); index non-configurable
B[0] = 7;         // OK (writable stays)
console.log(B.length); // 3
// Reducing length may fail if it would need to delete non-configurable indices.

// freeze: existing indices become non-writable + non-configurable
const C = [1, 2];
Object.freeze(C);
C[0] = 5;         // ignored / TypeError (strict)
C.push(3);        // ignored / TypeError (strict)
console.log(C);   // [1, 2]`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Shallow: nested objects still mutable"}),e.jsx(s.Code,{children:`const cfg = Object.freeze({ theme: { dark: true } });
cfg.theme.dark = false;    // allowed: inner object wasn't frozen
console.log(cfg.theme.dark); // false`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Simple deep freezer"}),e.jsx(s.Code,{children:`function deepFreeze(o) {
  // Freeze children first
  for (const k of Object.getOwnPropertyNames(o)) {
    const v = o[k];
    if (v && typeof v === "object") deepFreeze(v);
  }
  return Object.freeze(o);
}
const locked = deepFreeze({ a: { b: 1 } });
// locked.a.b = 2; // ❌ TypeError in strict
console.log(locked.a.b);   // 1`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Reconfiguration is blocked"}),e.jsx(s.Code,{children:`const e = {};
Object.defineProperty(e, "x", {
  value: 1, writable: true, configurable: true
});
Object.seal(e);
// Now configurable:false → cannot change descriptor shape:
try {
  Object.defineProperty(e, "x", { enumerable: false }); // TypeError
} catch (err) { /* TypeError in strict */ }
console.log(Object.getOwnPropertyDescriptor(e, "x").enumerable); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Quick reference"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("code",{children:"preventExtensions"}),": ❌ add, ✅ delete, ✅ reconfigure, ✅/❌ write (unchanged)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"seal"}),": ❌ add, ❌ delete, ❌ reconfigure, ✅/❌ write (unchanged)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"freeze"}),": ❌ add, ❌ delete, ❌ reconfigure, ❌ write (data props)"]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Detecting state"}),e.jsx(s.Code,{children:`const o = { a: 1 };
console.log(Object.isExtensible(o)); // true
Object.preventExtensions(o);
console.log(Object.isExtensible(o)); // false
console.log(Object.isSealed(o));     // false
Object.seal(o);
console.log(Object.isSealed(o));     // true
console.log(Object.isFrozen(o));     // false
Object.freeze(o);
console.log(Object.isFrozen(o));     // true`})]})]}),E=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Boxing & unboxing (wrapper objects)"}),e.jsxs(s.Lead,{children:["Primitives aren’t objects, but when you access properties like"," ",e.jsx("code",{children:'"hi".length'})," the engine temporarily ",e.jsx("em",{children:"boxes"})," them into a wrapper object (",e.jsx("code",{children:"String"}),"/",e.jsx("code",{children:"Number"}),"/",e.jsx("code",{children:"Boolean"}),", etc.). When a wrapper is used in arithmetic/concatenation, it is ",e.jsx("em",{children:"unboxed"})," back to a primitive via ",e.jsx("code",{children:"ToPrimitive"})," (using ",e.jsx("code",{children:"valueOf"}),"/",e.jsx("code",{children:"toString"}),")."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Autoboxing:"})," Accessing a property/method on a primitive implicitly creates a temporary wrapper object so the operation can proceed; it’s discarded immediately after."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Wrapper objects:"})," ",e.jsx("code",{children:"new String(...)"}),","," ",e.jsx("code",{children:"new Number(...)"}),", ",e.jsx("code",{children:"new Boolean(...)"})," create ",e.jsx("em",{children:"objects"}),", not primitives. They compare by identity and are almost always a bad idea."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Unboxing:"})," When an object is used where a primitive is needed, the engine applies ",e.jsx("code",{children:"ToPrimitive"}),", typically calling"," ",e.jsx("code",{children:"obj.valueOf()"})," then ",e.jsx("code",{children:"obj.toString()"}),". Results feed coercion."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Function vs constructor:"})," ",e.jsx("code",{children:"String(x)"}),","," ",e.jsx("code",{children:"Number(x)"}),", ",e.jsx("code",{children:"Boolean(x)"})," (called ",e.jsx("em",{children:"without"})," ",e.jsx("code",{children:"new"}),") ",e.jsx("em",{children:"convert"})," to primitives. With ",e.jsx("code",{children:"new"})," they create wrappers."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Special cases:"})," ",e.jsx("code",{children:"new Symbol()"})," ❌ TypeError;"," ",e.jsx("code",{children:"Symbol()"})," returns a primitive symbol. ",e.jsx("code",{children:"BigInt()"})," converts to a primitive BigInt; ",e.jsx("code",{children:"new BigInt()"})," ❌ TypeError. ",e.jsx("code",{children:"Object(primitive)"})," creates a wrapper object."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Truthiness trap:"})," Any object (including"," ",e.jsx("code",{children:"new Boolean(false)"}),") is truthy in conditionals."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Autoboxing lets methods work on primitives"}),e.jsx(s.Code,{children:`console.log("abc".toUpperCase()); // "ABC"
console.log((42).toFixed(1));       // "42.0"
console.log(true.toString());        // "true"

// Behind the scenes, temporary String/Number/Boolean objects are created and discarded.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Writes to boxed primitives don’t stick"}),e.jsx(s.Code,{children:`let s = "hi";
s.x = 123;                 // ignored (assigned on a temporary wrapper)
// In strict mode this may throw TypeError.
// "use strict"; s.x = 123; // ❌ TypeError
console.log(s.x);          // undefined`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Converters (functions) vs wrappers (constructors)"}),e.jsx(s.Code,{children:`console.log(Number("42"));   // 42        (primitive)
console.log(String(99));   // "99"      (primitive)
console.log(Boolean(0));   // false     (primitive)

console.log(typeof new Number(5));  // "object"  (wrapper)
console.log(typeof new String("x")); // "object"
console.log(typeof new Boolean(0));  // "object"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Equality differences"}),e.jsx(s.Code,{children:`console.log(new Number(5) === 5);   // false (object vs primitive)
console.log(new Number(5) == 5);    // true  (unboxed via valueOf during ==)
console.log(Object.is(new Number(0), 0)); // false

// Prefer primitives. Wrappers make comparisons and APIs confusing.`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 5 — Truthiness trap with ",e.jsx("code",{children:"new Boolean(false)"})]}),e.jsx(s.Code,{children:`if (new Boolean(false)) {
  console.log("I run"); // runs, because objects are truthy
}

const b = new Boolean(false);
console.log(b.valueOf()); // false (primitive inside)
console.log(Boolean(b));  // true  (because b is an object)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Arithmetic/concat cause unboxing"}),e.jsx(s.Code,{children:`const n = new Number(7);
console.log(n + 1);      // 8   (valueOf() -> 7)
console.log("v=" + n);   // "v=7" (toString() used in string context)

const str = new String("ok");
console.log(str + "!");  // "ok!" (toString())`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Detecting wrappers & getting primitives"}),e.jsx(s.Code,{children:`const x = new Number(3);
console.log(x instanceof Number); // true (wrapper)
console.log(typeof x);            // "object"
console.log(x.valueOf());         // 3  (primitive)
console.log(typeof x.valueOf());  // "number"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Symbols & BigInts"}),e.jsx(s.Code,{children:`// Symbols:
const s = Symbol("id");
// new Symbol("id");     // ❌ TypeError (not a constructor)
const sw = Object(s);     // wrapper object
console.log(typeof sw);   // "object"
console.log(sw.valueOf() === s); // true

// BigInt:
const bi = BigInt(10);    // 10n (primitive)
// new BigInt(10);        // ❌ TypeError (not a constructor)
const biw = Object(10n);  // BigInt wrapper object
console.log(typeof biw, typeof bi); // "object" "bigint"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Objects are always truthy; avoid wrappers as Map keys"}),e.jsx(s.Code,{children:`const m = new Map();
m.set(new Number(5), "A");
console.log(m.get(5));           // undefined (different identity & type)
const key = [...m.keys()][0];
console.log(key.valueOf());      // 5 (but still a distinct object key)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 10 — Custom unboxing via ",e.jsx("code",{children:"Symbol.toPrimitive"})," (FYI)"]}),e.jsx(s.Code,{children:`const obj = {
  x: 10,
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? "[obj]" : this.x;
  }
};
console.log(obj + 5);          // 15   (number hint → 10)
console.log(String(obj));      // "[obj]" (string hint)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 11 — Practical guidance"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"Number(x)"}),", ",e.jsx("code",{children:"String(x)"}),", ",e.jsx("code",{children:"Boolean(x)"})," for conversion."]}),e.jsxs("li",{children:["Avoid ",e.jsx("code",{children:"new Number"}),"/",e.jsx("code",{children:"new String"}),"/",e.jsx("code",{children:"new Boolean"}),"—prefer primitives."]}),e.jsx("li",{children:"Never rely on setting properties on primitives; they won’t persist (and may throw in strict mode)."}),e.jsx("li",{children:"Be careful with truthiness: wrapper objects are always truthy."})]})]})]}),C=()=>e.jsxs(s.Page,{children:[e.jsxs(s.H1,{children:["ToPrimitive (",e.jsx("code",{children:"valueOf"}),", ",e.jsx("code",{children:"toString"}),", ",e.jsx("code",{children:"Symbol.toPrimitive"}),")"]}),e.jsxs(s.Lead,{children:["When JavaScript needs a primitive (number/string/symbol/bigint) but has an object, it runs the abstract operation ",e.jsx("em",{children:"ToPrimitive"}),". You can influence this using",e.jsx("code",{children:"Symbol.toPrimitive"}),", ",e.jsx("code",{children:"valueOf"}),", and ",e.jsx("code",{children:"toString"}),"."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Order of preference:"})," If present, call ",e.jsx("code",{children:"obj[Symbol.toPrimitive](hint)"}),". Otherwise try ",e.jsx("code",{children:"valueOf()"}),", then ",e.jsx("code",{children:"toString()"})," until a primitive is produced."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hints:"})," The engine passes a ",e.jsx("em",{children:"hint"})," — ",e.jsx("code",{children:'"number"'}),", ",e.jsx("code",{children:'"string"'}),", or ",e.jsx("code",{children:'"default"'}),". Most objects treat ",e.jsx("code",{children:'"default"'})," like ",e.jsx("code",{children:'"number"'}),", but ",e.jsx("code",{children:"Date"})," prefers ",e.jsx("code",{children:'"string"'}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Failure:"})," If none of the methods return a primitive, the coercion throws ",e.jsx("code",{children:"TypeError"})," when a primitive is required."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Common triggers:"})," arithmetic (",e.jsx("code",{children:"+"})," (numeric side), ",e.jsx("code",{children:"-"}),", ",e.jsx("code",{children:"*"}),", ",e.jsx("code",{children:"/"}),", unary ",e.jsx("code",{children:"+"}),"), string contexts (",e.jsx("code",{children:"String(x)"}),", template literals), loose equality (",e.jsx("code",{children:"obj == prim"}),"), relational (",e.jsx("code",{children:"<"}),", ",e.jsx("code",{children:">"}),"), and property keys via ",e.jsx("em",{children:"ToPropertyKey"}),"."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Resolution order & the hint"}),e.jsx(s.Code,{children:`const obj = {
  [Symbol.toPrimitive](hint) {
    // hint is "number" | "string" | "default"
    if (hint === "number") return 10;
    if (hint === "string") return "ten";
    return 100; // default
  },
  valueOf() { return 1; },
  toString() { return "one"; }
};

console.log(+obj);           // 10      (number hint via unary +)
console.log(String(obj));    // "ten"   (string hint)
console.log(obj + 1);        // 101     (default hint → 100, then + 1 → 101)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 2 — Without ",e.jsx("code",{children:"Symbol.toPrimitive"}),": valueOf then toString"]}),e.jsx(s.Code,{children:`const noSym = {
  valueOf() { return 7; },      // primitive → used first for number/default hints
  toString() { return "seven"; }
};

console.log(noSym + 3);      // 10  (default/number hint → 7 + 3)
console.log(String(noSym));  // "seven" (string hint → toString())`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:'Example 3 — Date prefers string for "default"'}),e.jsx(s.Code,{children:`const d = new Date("2024-01-02T00:00:00Z");
console.log(String(d)); // e.g., "Tue Jan 02 2024 ..." (string hint)
console.log(d + "");    // same as above (default hint behaves like string for Date)
console.log(+d);        // 1704153600000  (number hint → timestamp in ms)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Failure to produce a primitive throws"}),e.jsx(s.Code,{children:`const bad = {
  valueOf(){ return {}; },   // not primitive
  toString(){ return {}; }   // not primitive
};
try {
  Number(bad);               // needs a primitive → TypeError
} catch (e) {
  console.log(e instanceof TypeError); // true
}`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Operators that trigger ToPrimitive"}),e.jsx(s.Code,{children:`const box = { valueOf(){ return 5; }, toString(){ return "five"; } };

console.log(1 + box);     // 6    (default/number hint)
console.log(box - 1);     // 4    (number hint)
console.log(\`\${box}\`); // "five" (template literal → ToString → string hint)
console.log(box > 3);     // true (relational → number hint)
console.log(box == "5");  // true (loose eq: object coerces with default hint)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 6 — The ",e.jsx("code",{children:"+"})," operator: string vs numeric"]}),e.jsx(s.Code,{children:`const a = { toString(){ return "A"; }, valueOf(){ return 1; } };
const b = { toString(){ return "B"; }, valueOf(){ return 2; } };

console.log(a + b);     // 3        (both sides yield numbers → numeric +)
console.log(a + "X");   // "AX"     (right is string → string concatenation)
console.log("" + a + b); // "AB"    (once string context starts, both ToString)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Property keys use ToPropertyKey (string-ish)"}),e.jsx(s.Code,{children:`const keyObj = { toString(){ return "id"; } };
const o = {};
o[keyObj] = 123;                 // key becomes "id"
console.log(o.id);               // 123

// If a Symbol is produced, it becomes a symbol key:
const sKeyObj = { [Symbol.toPrimitive](){ return Symbol("k"); } };
const o2 = {};
o2[sKeyObj] = 1;
console.log(Object.getOwnPropertySymbols(o2).length > 0); // true`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 8 — Custom formatting via ",e.jsx("code",{children:"Symbol.toPrimitive"})]}),e.jsx(s.Code,{children:`const money = {
  amount: 2500,
  currency: "INR",
  [Symbol.toPrimitive](hint){
    if (hint === "string") return \`\${this.currency} \${this.amount}\`;
    return this.amount; // number/default
  }
};
console.log(String(money)); // "INR 2500"
console.log(money + 500);   // 3000`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 9 — Wrappers unbox via ",e.jsx("code",{children:"valueOf()"})]}),e.jsx(s.Code,{children:`console.log(+new Number(4));   // 4   (valueOf → 4)
console.log("" + new String("hi")); // "hi" (toString)
console.log(Boolean(new Boolean(false))); // true (object truthy; unboxing differs from truthiness)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Practical guard patterns"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Prefer defining ",e.jsx("code",{children:"Symbol.toPrimitive"})," on custom numeric/string-like objects for clarity."]}),e.jsxs("li",{children:["Ensure your conversion methods return a ",e.jsx("em",{children:"primitive"})," (number/string/bigint/symbol/boolean)."]}),e.jsxs("li",{children:["Avoid relying on quirky cases like ",e.jsx("code",{children:"Date"}),"'s default-to-string unless intentional."]}),e.jsxs("li",{children:["Be explicit: use ",e.jsx("code",{children:"Number(x)"}),", ",e.jsx("code",{children:"String(x)"}),", or template literals instead of implicit coercion when readability matters."]})]})]})]}),H=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Truthy & falsy (ToBoolean)"}),e.jsxs(s.Lead,{children:["JavaScript converts values to a boolean using the abstract operation",e.jsx("em",{children:" ToBoolean"}),". Some values are ",e.jsx("em",{children:"falsy"})," and become ",e.jsx("code",{children:"false"}),"; everything else is ",e.jsx("em",{children:"truthy"})," and becomes ",e.jsx("code",{children:"true"}),"."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Falsy values (exact list):"})," ",e.jsx("code",{children:"false"}),", ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:"-0"}),", ",e.jsx("code",{children:"0n"})," (BigInt zero),",e.jsx("code",{children:"NaN"}),", ",e.jsx("code",{children:'""'})," (empty string), ",e.jsx("code",{children:"null"}),", ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Everything else is truthy:"})," all objects (including"," ",e.jsx("code",{children:"{}"}),", ",e.jsx("code",{children:"[]"}),", functions, ",e.jsx("code",{children:"new Boolean(false)"}),"), non-empty strings (even ",e.jsx("code",{children:'"0"'})," and ",e.jsx("code",{children:'"false"'}),"), non-zero numbers, non-zero BigInts."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boolean conversion:"})," Use ",e.jsx("code",{children:"Boolean(x)"})," or ",e.jsx("code",{children:"!!x"})," to get a real boolean."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Short-circuiting:"})," ",e.jsx("code",{children:"||"})," returns the first truthy operand,",e.jsx("code",{children:"&&"})," returns the first falsy operand; they return the actual operand value, not a strict boolean."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"??"})," vs ",e.jsx("code",{children:"||"}),":"]})," ",e.jsx("code",{children:"??"})," treats only ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," as “empty”;",e.jsx("code",{children:"||"})," treats any falsy value as “empty”."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Environment quirk:"})," In browsers, ",e.jsx("code",{children:"document.all"})," is a special web-compat oddity that behaves ",e.jsx("em",{children:"falsy"})," even though it’s an object."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Converting to boolean"}),e.jsx(s.Code,{children:`console.log(Boolean(false));   // false
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("0"));     // true  (non-empty string)
console.log(Boolean("false")); // true  (non-empty string)
console.log(Boolean([]));      // true  (objects are truthy)
console.log(Boolean({}));      // true
console.log(Boolean(0n));      // false (BigInt zero)
console.log(Boolean(NaN));     // false`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Objects are truthy (even empty ones)"}),e.jsx(s.Code,{children:`if ([]) { console.log("[] is truthy"); }
if ({}) { console.log("{} is truthy"); }
if (function(){}) { console.log("functions are truthy"); }

// Output:
// [] is truthy
// {} is truthy
// functions are truthy`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Wrapper objects vs primitives"}),e.jsx(s.Code,{children:`if (new Boolean(false)) {
  console.log("Runs, because objects are truthy"); // runs
}
console.log(Boolean(new Boolean(false))); // true`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 4 — ",e.jsx("code",{children:"||"})," returns first truthy; ",e.jsx("code",{children:"&&"})," first falsy"]}),e.jsx(s.Code,{children:`console.log("" || "fallback");     // "fallback"  ("" is falsy)
console.log("hi" || "fallback");   // "hi"

console.log(0 && "next");          // 0  (falsy short-circuit)
console.log(2 && "next");          // "next" (both truthy → returns last)

const cached = 0;
const a = cached || 10;            // 10  (0 is falsy)
const b = cached ?? 10;            // 0   (nullish only) 
console.log(a, b);                 // 10 0`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 5 — ",e.jsx("code",{children:"??"})," vs ",e.jsx("code",{children:"||"})," for defaults"]}),e.jsx(s.Code,{children:`const input = "";
const usingOr  = input || "default";   // "default" ("" is falsy)
const usingNN  = input ?? "default";   // ""        (non-nullish, so keep "")
console.log(usingOr, usingNN);         // "default" ""`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — BigInt zero is falsy; other BigInts truthy"}),e.jsx(s.Code,{children:`console.log(Boolean(0n));     // false
console.log(Boolean(12n));    // true
console.log(0n || 99n);       // 99n`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 7 — Numbers: ",e.jsx("code",{children:"-0"})," and ",e.jsx("code",{children:"NaN"})," are falsy"]}),e.jsx(s.Code,{children:`console.log(Boolean(-0));     // false
console.log(Boolean(NaN));    // false
console.log(-0 || 1);         // 1
console.log(NaN || 1);        // 1`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Common pitfalls"}),e.jsx(s.Code,{children:`if ("0") { console.log("string '0' is truthy"); } // runs
if (" ")  { console.log("space is truthy"); }           // runs
if ([])   { console.log("[] is truthy but Number([]) == 0"); } // runs
console.log(Number([])); // 0 (different coercion, not ToBoolean)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Filtering truthy items"}),e.jsx(s.Code,{children:`const mixed = [0, 1, "", "hi", null, undefined, "ok", NaN, 2];
const truthies = mixed.filter(Boolean);
console.log(truthies); // [1, "hi", "ok", 2]`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 10 — Browser quirk: ",e.jsx("code",{children:"document.all"})," is falsy"]}),e.jsx(s.Code,{children:`// In browsers for legacy reasons:
console.log(Boolean(document.all)); // false
// Treat this as a historical special case; avoid using it in logic.`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 11 — Force real booleans with ",e.jsx("code",{children:"!!"})]}),e.jsx(s.Code,{children:`const v = "hello";
const bool1 = Boolean(v);
const bool2 = !!v;
console.log(bool1, bool2); // true true`})]})]}),k=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Coercion to number/string"}),e.jsxs(s.Lead,{children:["JavaScript converts values using abstract operations ",e.jsx("em",{children:"ToNumber"})," and"," ",e.jsx("em",{children:"ToString"}),". Operators trigger these conversions implicitly (e.g., unary"," ",e.jsx("code",{children:"+"}),", arithmetic, string concatenation). Know the exact rules and edge cases."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ToNumber (primitives):"})," ",e.jsx("code",{children:"undefined → NaN"}),","," ",e.jsx("code",{children:"null → +0"}),", ",e.jsx("code",{children:"true → 1"}),", ",e.jsx("code",{children:"false → 0"}),","," ",e.jsx("code",{children:"string"})," is parsed as a numeric literal (Unicode whitespace trimmed; supports ",e.jsx("code",{children:"Infinity"}),", hex ",e.jsx("code",{children:"0x"}),", binary"," ",e.jsx("code",{children:"0b"}),", octal ",e.jsx("code",{children:"0o"}),"); ",e.jsx("em",{children:"Symbols throw"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ToString (primitives):"})," ",e.jsx("code",{children:'undefined → "undefined"'}),","," ",e.jsx("code",{children:'null → "null"'}),", booleans → ",e.jsx("code",{children:'"true"/"false"'}),", numbers to decimal form (",e.jsx("code",{children:"NaN"})," → ",e.jsx("code",{children:'"NaN"'}),","," ",e.jsx("code",{children:"Infinity"})," → ",e.jsx("code",{children:'"Infinity"'}),", ",e.jsx("code",{children:"-0"})," →"," ",e.jsx("code",{children:'"0"'}),"), BigInt → its digits; ",e.jsx("em",{children:"implicit ToString on symbols throws"}),", though ",e.jsx("code",{children:"String(symbol)"})," is allowed."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objects/arrays:"})," First go through ",e.jsx("em",{children:"ToPrimitive"})," (usually"," ",e.jsx("code",{children:"valueOf"})," then ",e.jsx("code",{children:"toString"}),") and then convert that primitive."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Operators:"})," ",e.jsx("code",{children:"+"})," is special: if either side becomes a string, it ",e.jsx("em",{children:"concatenates"}),"; otherwise it does numeric addition. Other arithmetic (",e.jsx("code",{children:"- * / % **"}),", unary ",e.jsx("code",{children:"+"}),"/",e.jsx("code",{children:"-"}),") do numeric coercion."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"BigInt:"})," Cannot mix with ",e.jsx("code",{children:"number"})," in arithmetic; many numeric operators with BigInt are separate. Unary ",e.jsx("code",{children:"+"})," on BigInt is a"," ",e.jsx("code",{children:"TypeError"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Prefer explicit casts:"})," Use ",e.jsx("code",{children:"Number(x)"}),","," ",e.jsx("code",{children:"String(x)"})," when intent matters; avoid relying on implicit coercion in tricky code paths."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — ToNumber basics"}),e.jsx(s.Code,{children:`console.log(Number(undefined));   // NaN
console.log(Number(null));        // 0
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number("42"));        // 42
console.log(Number("  \\t\\n 42 ")); // 42 (trimmed)
console.log(Number(""));          // 0
console.log(Number("Infinity"));  // Infinity
console.log(Number("0x10"));      // 16 (hex)
console.log(Number("0b1010"));    // 10 (binary)
console.log(Number("0o11"));      // 9  (octal)
console.log(Number("1_000"));     // NaN (underscore not allowed in strings)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — ToString basics"}),e.jsx(s.Code,{children:`console.log(String(undefined));  // "undefined"
console.log(String(null));       // "null"
console.log(String(true));       // "true"
console.log(String(12.34));      // "12.34"
console.log(String(NaN));        // "NaN"
console.log(String(-0));         // "0"
console.log(String(10n));        // "10"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Symbols: explicit ok, implicit throws"}),e.jsx(s.Code,{children:`const s = Symbol("id");
console.log(String(s));    // "Symbol(id)"
// "" + s;                 // ❌ TypeError: Cannot convert a Symbol value to a string
// Number(s);              // ❌ TypeError: Cannot convert a Symbol value to a number`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 4 — Unary ",e.jsx("code",{children:"+"})," and numeric operators"]}),e.jsx(s.Code,{children:`console.log(+"42");          // 42
console.log(+"  \\n  ");     // 0
console.log(+true);          // 1
console.log(+null);          // 0
console.log(+undefined);     // NaN
// console.log(+10n);        // ❌ TypeError (BigInt cannot be converted by unary +)
console.log("6" * "7");      // 42 (both ToNumber then multiply)
console.log("8" - 3);        // 5
console.log("10" / 2);       // 5`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 5 — ",e.jsx("code",{children:"+"}),": concatenation vs addition"]}),e.jsx(s.Code,{children:`console.log("a" + 1);     // "a1" (string concatenation)
console.log(1 + "a");       // "1a"
console.log(1 + 2 + "3");   // "33"  (1+2 → 3, then "3" → "3"; 3 + "3" → "33")
console.log("3" + 1 + 2);   // "312" (string context from the start)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Arrays/objects via ToPrimitive → ToNumber/ToString"}),e.jsx(s.Code,{children:`console.log(Number([]));           // 0   ("" → 0)
console.log(Number([""]));         // 0
console.log(Number([" 5 "]));      // 5
console.log(Number([1,2]));        // NaN (joins to "1,2" → NaN)
console.log(Number({}));           // NaN (no numeric primitive)
console.log(String({}));           // "[object Object]"
console.log(String([1,2,3]));      // "1,2,3"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Dates: number vs string"}),e.jsx(s.Code,{children:`const d = new Date("2024-01-01T00:00:00Z");
console.log(+d);           // 1704067200000  (ms since epoch; numeric coercion)
console.log(String(d));    // e.g., "Mon Jan 01 2024 ..." (string coercion)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — parseInt/parseFloat vs Number"}),e.jsx(s.Code,{children:`console.log(parseInt("42px"));   // 42      (stops at non-digit)
console.log(Number("42px"));        // NaN     (whole string must be numeric)
console.log(parseFloat("3.14rad")); // 3.14
console.log(parseInt("08"));        // 8       (decimal by default; "0x" → hex)
console.log(Number("08"));          // 8
console.log(parseInt("0b1010"));    // 0       (parseInt doesn't understand "0b")
console.log(Number("0b1010"));      // 10      (ToNumber understands binary/octal)
console.log(parseInt("1010", 2));   // 10      (use radix for bases)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — BigInt & number mixing rules"}),e.jsx(s.Code,{children:`const bi = 10n;
// console.log(bi + 1);      // ❌ TypeError (can't mix BigInt and Number)
console.log(bi + 2n);        // 12n
console.log(10n == 10);      // true  (loose equality coerces)
console.log(10n === 10);     // false (different types)
console.log(Number(10n) + 1); // 11   (explicit, but beware precision for large BigInts)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Custom objects controlling coercion"}),e.jsx(s.Code,{children:`const price = {
  amount: 2500,
  currency: "INR",
  valueOf(){ return this.amount; },     // numeric contexts
  toString(){ return \`\${this.currency} \${this.amount}\`; } // string contexts
};
console.log(price + 500);     // 3000  (valueOf → number)
console.log(String(price));   // "INR 2500"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 11 — Whitespace & empty string nuances"}),e.jsx(s.Code,{children:`console.log(Number("\\u00A0\\t\\n")); // 0   (Unicode whitespace trims to empty → 0)
console.log(Number("\\u2003 5 "));   // 5   (em space trimmed)
console.log("" + 0);                 // "0" (ToString on number)
console.log(Number(""));             // 0`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 12 — Practical guidance"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Need a number? Prefer ",e.jsx("code",{children:"Number(x)"})," or ",e.jsx("code",{children:"parseInt/parseFloat"})," (with radix) over implicit coercion."]}),e.jsxs("li",{children:["Need a string? Prefer template literals or ",e.jsx("code",{children:"String(x)"})," instead of relying on ",e.jsx("code",{children:"+"})," concatenation with non-strings."]}),e.jsx("li",{children:"Avoid implicit symbol/string or BigInt/number coercions—they often throw or surprise."}),e.jsxs("li",{children:["Be mindful that arrays/objects first go through ",e.jsx("em",{children:"ToPrimitive"}),"; ",e.jsx("code",{children:"[]"})," becomes ",e.jsx("code",{children:"0"})," via ",e.jsx("code",{children:'""'}),"."]})]})]})]}),I=()=>e.jsxs(s.Page,{children:[e.jsxs(s.H1,{children:["Equality: ",e.jsx("code",{children:"=="})," vs ",e.jsx("code",{children:"==="})," vs ",e.jsx("code",{children:"Object.is"})]}),e.jsxs(s.Lead,{children:["JavaScript has three main equality notions. ",e.jsx("code",{children:"==="})," (strict) does no type coercion. ",e.jsx("code",{children:"=="})," (loose) coerces types using specific rules. ",e.jsx("code",{children:"Object.is"}),"follows ",e.jsx("em",{children:"SameValue"})," semantics (like ",e.jsx("code",{children:"==="})," except it distinguishes ",e.jsx("code",{children:"+0"}),"/",e.jsx("code",{children:"-0"}),"and treats ",e.jsx("code",{children:"NaN"})," as equal to itself)."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Strict equality ",e.jsx("code",{children:"==="}),":"]})," No coercion. Different types → ",e.jsx("code",{children:"false"}),". For numbers: ",e.jsx("code",{children:"NaN"})," is not equal to anything (even itself), and ",e.jsx("code",{children:"+0 === -0"})," is ",e.jsx("code",{children:"true"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Loose equality ",e.jsx("code",{children:"=="}),":"]})," May coerce: booleans → numbers; strings ↔ numbers; objects → primitives (via ToPrimitive); ",e.jsx("code",{children:"null"})," and ",e.jsx("code",{children:"undefined"})," are only equal to each other. BigInt has special cases with numbers/strings (see examples)."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"Object.is(a, b)"})," (SameValue):"]})," Like ",e.jsx("code",{children:"==="})," but",e.jsx("em",{children:"distinguishes"})," ",e.jsx("code",{children:"+0"})," and ",e.jsx("code",{children:"-0"})," and considers ",e.jsx("code",{children:"NaN"})," equal to ",e.jsx("code",{children:"NaN"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SameValueZero:"})," Used by ",e.jsx("code",{children:"Array.prototype.includes"}),", ",e.jsx("code",{children:"Set"}),", ",e.jsx("code",{children:"Map"}),". Treats ",e.jsx("code",{children:"NaN"})," as equal to ",e.jsx("code",{children:"NaN"})," and ",e.jsx("code",{children:"+0"})," equal to ",e.jsx("code",{children:"-0"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Guidance:"})," Prefer ",e.jsx("code",{children:"==="}),"/",e.jsx("code",{children:"!=="}),". Use ",e.jsx("code",{children:"Object.is"})," when distinguishing ",e.jsx("code",{children:"-0/+0"})," or matching ",e.jsx("code",{children:"NaN"}),". Use ",e.jsx("code",{children:"=="})," narrowly (e.g., ",e.jsx("code",{children:"x == null"})," to check ",e.jsx("code",{children:"null"})," or ",e.jsx("code",{children:"undefined"}),")."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Quick contrasts"}),e.jsx(s.Code,{children:`console.log(1 == "1");    // true  (coerces string → number)
console.log(1 === "1");   // false (different types)
console.log(Object.is(1, "1")); // false

console.log(null == undefined); // true  (special case)
console.log(null === undefined);// false
`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 2 — ",e.jsx("code",{children:"null"}),"/",e.jsx("code",{children:"undefined"})," with ",e.jsx("code",{children:"=="})]}),e.jsx(s.Code,{children:`const v1 = null;
const v2 = undefined;
console.log(v1 == v2);     // true
console.log(v1 == 0);      // false
console.log(v2 == 0);      // false

// Handy nullish check:
function getOrDefault(x, d) { return x == null ? d : x; }
console.log(getOrDefault(undefined, 10)); // 10
console.log(getOrDefault(null, 10));      // 10
console.log(getOrDefault(0, 10));         // 0 (kept)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 3 — ",e.jsx("code",{children:"NaN"})," and signed zero"]}),e.jsx(s.Code,{children:`console.log(NaN === NaN);           // false
console.log(Object.is(NaN, NaN));    // true
console.log([NaN].includes(NaN));    // true (SameValueZero)

console.log(+0 === -0);              // true
console.log(Object.is(+0, -0));      // false
console.log(1 / +0, 1 / -0);         // Infinity -Infinity (sign matters)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 4 — BigInt interop with ",e.jsx("code",{children:"=="})," and ",e.jsx("code",{children:"==="})]}),e.jsx(s.Code,{children:`console.log(10n == 10);       // true   (numeric compare)
console.log(10n === 10);      // false  (different types)
console.log(10n == "10");     // true   (string → BigInt)
console.log(10n == 10.1);     // false  (fractional number)
console.log(9007199254740993n == 9007199254740993); // false (number is rounded)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 5 — Booleans with ",e.jsx("code",{children:"=="})," coerce to numbers"]}),e.jsx(s.Code,{children:`console.log(true == 1);    // true
console.log(false == 0);   // true
console.log("0" == false); // true ("0" → 0, false → 0)
// Prefer explicit: Number(flag) === 1 or Boolean(num)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Objects vs primitives"}),e.jsx(s.Code,{children:`console.log([1] == 1);         // true (["1"].toString() → "1" → 1)
console.log(["1","2"] == "1,2"); // true (array → "1,2")
console.log({} == "[object Object]"); // true-ish? No → false ({} → "[object Object]" <> string; "==" doesn't flip both sides)

// With "==", objects use ToPrimitive (valueOf/toString) before comparing.`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 7 — Arrays: ",e.jsx("code",{children:"indexOf"})," vs ",e.jsx("code",{children:"includes"})]}),e.jsx(s.Code,{children:`const xs = [NaN, 0, -0];
console.log(xs.indexOf(NaN));   // -1  (uses ===; NaN !== NaN)
console.log(xs.includes(NaN));  // true (SameValueZero)
console.log(xs.includes(-0));   // true (SameValueZero treats +0/-0 equal)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Map/Set key equality (SameValueZero)"}),e.jsx(s.Code,{children:`const s = new Set([NaN]);
console.log(s.has(NaN)); // true (NaN equals NaN)

const m = new Map([[+0, "a"]]);
console.log(m.has(-0));  // true (+0 and -0 treated equal)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Practical patterns"}),e.jsx(s.Code,{children:`// 1) Prefer strict equality:
const isUser = id => typeof id === "string" && id === "user_123";

// 2) Nullish check with '==':
if (value == null) { /* handle null or undefined */ }

// 3) Need to detect NaN or -0 specifically:
const isNegZero = x => x === 0 && 1/x === -Infinity;
console.log(Object.is(NaN, NaN)); // true
console.log(isNegZero(-0));       // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — DIY semantics snippets"}),e.jsx(s.Code,{children:`// SameValueZero (used by includes/Set/Map):
const sameValueZero = (a, b) => a === b || (a !== a && b !== b);
// SameValue (Object.is):
const sameValue = (a, b) =>
  a === b ? (a !== 0 || 1/a === 1/b) : (a !== a && b !== b);

console.log(sameValueZero(NaN, NaN)); // true
console.log(sameValue(+0, -0));       // false`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 11 — Common pitfalls to avoid"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("code",{children:'"" == 0'})," is ",e.jsx("code",{children:"true"})," (empty string → 0). Prefer explicit casts."]}),e.jsxs("li",{children:[e.jsx("code",{children:"[] == 0"})," is ",e.jsx("code",{children:"true"})," (",e.jsx("code",{children:"[]"})," → ",e.jsx("code",{children:'""'})," → ",e.jsx("code",{children:"0"}),"), but ",e.jsx("code",{children:"[] === 0"})," is ",e.jsx("code",{children:"false"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"null"})," only equals ",e.jsx("code",{children:"undefined"})," with ",e.jsx("code",{children:"=="}),'; it never equals 0/""/false.']}),e.jsxs("li",{children:["Don’t rely on ",e.jsx("code",{children:"=="})," for business logic unless you really want its coercions."]})]})]})]}),A=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"SameValueZero (e.g., NaN, -0) — edge cases"}),e.jsxs(s.Lead,{children:[e.jsx("em",{children:"SameValueZero"})," is an equality algorithm used by several JS APIs. It’s like strict equality (",e.jsx("code",{children:"==="}),") except it treats"," ",e.jsx("code",{children:"NaN"})," as equal to ",e.jsx("code",{children:"NaN"})," and it does not distinguish"," ",e.jsx("code",{children:"+0"})," from ",e.jsx("code",{children:"-0"})," (they are equal)."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Rule:"})," ",e.jsx("code",{children:"SameValueZero(x, y)"})," is ",e.jsx("code",{children:"true"})," when"," ",e.jsx("code",{children:"x === y"})," ",e.jsx("em",{children:"or"})," both are ",e.jsx("code",{children:"NaN"}),". It considers"," ",e.jsx("code",{children:"+0"})," and ",e.jsx("code",{children:"-0"})," equal."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Where used:"})," ",e.jsx("code",{children:"Array.prototype.includes"}),", ",e.jsx("code",{children:"TypedArray.prototype.includes"}),",",e.jsx("code",{children:"Set"}),"/",e.jsx("code",{children:"Map"})," key equality, and a few other spec ops. (Contrast: ",e.jsx("code",{children:"indexOf"}),"/",e.jsx("code",{children:"lastIndexOf"})," use ",e.jsx("code",{children:"==="}),".)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Contrast:"})," ",e.jsx("code",{children:"Object.is"})," uses ",e.jsx("em",{children:"SameValue"})," (distinguishes ",e.jsx("code",{children:"+0"}),"/",e.jsx("code",{children:"-0"}),", treats ",e.jsx("code",{children:"NaN"})," equal to ",e.jsx("code",{children:"NaN"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objects & references:"})," As with ",e.jsx("code",{children:"==="}),", objects are equal only by identity (same reference)."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Quick comparison table"}),e.jsx(s.Code,{children:`console.log(NaN === NaN);           // false
console.log([NaN].includes(NaN)); // true   (SameValueZero)
console.log(Object.is(NaN, NaN)); // true   (SameValue)

console.log(+0 === -0);           // true   (strict considers them equal)
console.log([+0].includes(-0));   // true   (SameValueZero equal)
console.log(Object.is(+0, -0));   // false  (SameValue distinguishes)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 2 — ",e.jsx("code",{children:"includes"})," vs ",e.jsx("code",{children:"indexOf"})]}),e.jsx(s.Code,{children:`const xs = [NaN, 0, -0, 1];

console.log(xs.includes(NaN)); // true   (SameValueZero)
console.log(xs.indexOf(NaN));  // -1     (=== cannot find NaN)

console.log(xs.includes(-0));  // true
console.log(xs.indexOf(-0));   // 1 or 2 depending on array but finds 0/-0 equally? 
// Actually indexOf uses ===, and +0 === -0 is true, so it can match either.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Sets de-duplicate using SameValueZero"}),e.jsx(s.Code,{children:`const s = new Set([NaN, NaN, +0, -0, 1, 1]);
console.log([...s]); // [NaN, 0, 1]  (NaN collapsed; +0 and -0 collapsed)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Map key equality"}),e.jsx(s.Code,{children:`const m = new Map();
m.set(NaN, "A");
console.log(m.get(NaN)); // "A" (NaN matches NaN)

m.set(-0, "neg zero");
console.log(m.get(+0));  // "neg zero" (+0 and -0 are the same key under SameValueZero)

// Object keys are strings/symbols; Map keys can be anything and use SameValueZero.`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 5 — Typed arrays: ",e.jsx("code",{children:"includes"})," honors NaN"]}),e.jsx(s.Code,{children:`const ta = new Float64Array([NaN, 1, 2]);
console.log(ta.includes(NaN)); // true
console.log(ta.indexOf(NaN));  // -1 (typed array indexOf also uses ===)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Polyfill-style function"}),e.jsx(s.Code,{children:`const sameValueZero = (a, b) => a === b || (a !== a && b !== b);
// Explanation: only NaN is not equal to itself, so (a !== a) detects NaN.
console.log(sameValueZero(NaN, NaN)); // true
console.log(sameValueZero(+0, -0));   // true
console.log(sameValueZero({}, {}));   // false (different objects)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Wrapper objects are not primitives"}),e.jsx(s.Code,{children:`const boxedNaN = new Number(NaN);
console.log([boxedNaN].includes(NaN)); // false (object !== number; not NaN primitive)
console.log([boxedNaN].includes(boxedNaN)); // true (same reference)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Choosing the right check"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Need to know if a collection ",e.jsx("em",{children:"contains"})," a value (including ",e.jsx("code",{children:"NaN"}),")? Use"," ",e.jsx("code",{children:"includes"})," or a ",e.jsx("code",{children:"Set"}),"."]}),e.jsxs("li",{children:["Need to distinguish ",e.jsx("code",{children:"+0"})," from ",e.jsx("code",{children:"-0"})," or detect ",e.jsx("code",{children:"NaN"})," precisely? Use"," ",e.jsx("code",{children:"Object.is"})," or sign tricks like ",e.jsx("code",{children:"1/x === -Infinity"}),"."]}),e.jsxs("li",{children:["Need predictable, no-coercion equality? Prefer ",e.jsx("code",{children:"==="})," for general logic."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Practical patterns"}),e.jsx(s.Code,{children:`// Deduplicate array, preserving NaN and normalizing ±0:
const uniq = arr => [...new Set(arr)];
console.log(uniq([NaN, NaN, -0, +0, 2, 2])); // [NaN, 0, 2]

// Check presence (handles NaN):
const has = (arr, v) => arr.includes(v);
console.log(has([1, 2, NaN], NaN)); // true

// Detect negative zero specifically:
const isNegZero = x => x === 0 && 1/x === -Infinity;
console.log(isNegZero(-0)); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Summary cheat sheet"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"==="}),":"]})," No coercion, ",e.jsx("code",{children:"NaN !== NaN"}),", ",e.jsx("code",{children:"+0 === -0"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"SameValueZero (this topic):"})," ",e.jsx("code",{children:"NaN === NaN"})," (true),"," ",e.jsx("code",{children:"+0"})," equals ",e.jsx("code",{children:"-0"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Object.is (SameValue):"})," ",e.jsx("code",{children:"NaN === NaN"})," (true),"," ",e.jsx("code",{children:"+0"})," ",e.jsx("em",{children:"not"})," equal ",e.jsx("code",{children:"-0"}),"."]})]})]})]}),O=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Number literals & separators"}),e.jsxs(s.Lead,{children:["JavaScript supports decimal, binary (",e.jsx("code",{children:"0b"}),"), octal (",e.jsx("code",{children:"0o"}),"), and hexadecimal (",e.jsx("code",{children:"0x"}),") numeric literals, with optional fractional and exponent parts for decimal. Numeric separators (",e.jsx("code",{children:"_"}),") improve readability."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forms:"})," Decimal integers (",e.jsx("code",{children:"123"}),"), decimals (",e.jsx("code",{children:"12.34"}),"), scientific notation (",e.jsx("code",{children:"1.2e3"}),"), binary (",e.jsx("code",{children:"0b1010"}),"), octal (",e.jsx("code",{children:"0o755"}),"), hex (",e.jsx("code",{children:"0xFF"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"BigInt:"})," Append ",e.jsx("code",{children:"n"})," to an integer literal (",e.jsx("code",{children:"9007199254740993n"}),"). Works with binary/octal/hex as well (",e.jsx("code",{children:"0b1010n"}),", ",e.jsx("code",{children:"0xFFn"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Numeric separators:"})," Underscore ",e.jsx("code",{children:"_"})," may appear ",e.jsx("em",{children:"between digits"})," to group them (e.g., ",e.jsx("code",{children:"1_000_000"}),", ",e.jsx("code",{children:"0xCA_FE"}),", ",e.jsx("code",{children:"1_234.56_78"}),", ",e.jsx("code",{children:"1e1_0"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Separator rules (invalid if violated):"})," not at the start/end of digits, not next to a decimal point (",e.jsx("code",{children:"1_.0"}),", ",e.jsx("code",{children:"1._0"})," ❌), not directly after a base prefix (",e.jsx("code",{children:"0x_FF"})," ❌), not before the ",e.jsx("code",{children:"n"})," suffix (",e.jsx("code",{children:"123_ n"})," ❌), not adjacent to another underscore."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Legacy octal:"})," Leading-zero octal like ",e.jsx("code",{children:"077"})," is a ",e.jsx("em",{children:"SyntaxError"})," in strict mode; use ",e.jsx("code",{children:"0o77"})," instead."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Infinity/NaN:"})," Not literals—identifiers on ",e.jsx("code",{children:"globalThis"})," (e.g., ",e.jsx("code",{children:"Infinity"}),", ",e.jsx("code",{children:"NaN"}),").",e.jsx("code",{children:"-Infinity"})," is the unary ",e.jsx("code",{children:"-"})," operator applied to ",e.jsx("code",{children:"Infinity"}),"."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Decimal, fraction, exponent"}),e.jsx(s.Code,{children:`console.log(123);        // 123
console.log(12.34);      // 12.34
console.log(.5);         // 0.5 (leading 0 optional)
console.log(2.);         // 2   (trailing dot ok)
console.log(1e3);        // 1000
console.log(1.5e-3);     // 0.0015`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Binary, octal, hex"}),e.jsx(s.Code,{children:`console.log(0b1010);     // 10
console.log(0o755);      // 493
console.log(0xFF);       // 255

// With separators:
console.log(0b1010_0110); // 166
console.log(0o12_34);     // 668
console.log(0xCA_FE);     // 51966`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — BigInt literals"}),e.jsx(s.Code,{children:`console.log(10n + 2n);            // 12n
console.log(0xFFn);                 // 255n
console.log(1_000_000_000_000n);    // 1000000000000n

// Mixing BigInt with Number throws:
// 10n + 1; // ❌ TypeError`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Numeric separators: valid vs invalid"}),e.jsx(s.Code,{children:`// ✅ Valid uses:
console.log(1_000_000);         // 1000000
console.log(123_456.78_90);     // 123456.789
console.log(1e1_0);             // 1e10 → 10000000000
console.log(0xFF_FF_FF);        // 16777215

// ❌ Invalid (SyntaxError if uncommented):
// const a = _123;       // starts with underscore
// const b = 123_;       // ends with underscore
// const c = 1_.0;       // next to decimal point
// const d = 1._0;       // next to decimal point
// const e = 0x_FF;      // right after base prefix
// const f = 1__0;       // double underscore
// const g = 123_n;      // right before BigInt suffix`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Legacy octal vs modern octal"}),e.jsx(s.Code,{children:`// Non-strict (historical):
// console.log(077);   // 63  (legacy octal)
// Strict mode:
"use strict";
// const x = 077;      // ❌ SyntaxError in strict mode
const y = 0o77;        // 63 (use this form)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Separators don’t affect numeric value"}),e.jsx(s.Code,{children:`console.log(1000000 === 1_000_000); // true
console.log(0xDEAD_BEEF === 0xDEADBEEF); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Readability patterns"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Group decimal digits by thousands: ",e.jsx("code",{children:"1_234_567_890"}),"."]}),e.jsxs("li",{children:["Group hex by bytes/words: ",e.jsx("code",{children:"0xDE_AD_BE_EF"})," or ",e.jsx("code",{children:"0xFFFF_FFFF"}),"."]}),e.jsxs("li",{children:["Group binary by nibbles/bytes: ",e.jsx("code",{children:"0b1101_1111_0000"}),"."]}),e.jsxs("li",{children:["For decimals with exponents, grouping exponent digits is allowed: ",e.jsx("code",{children:"1e1_2"}),"."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Numbers vs identifiers (Infinity/NaN)"}),e.jsx(s.Code,{children:`console.log(Infinity);     // Infinity (identifier, not a literal)
console.log(-Infinity);    // -Infinity (unary minus + Infinity)
console.log(NaN);          // NaN (identifier)
console.log(Number.isNaN(NaN)); // true`})]})]}),T=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Floating-point precision & NaN/Infinity"}),e.jsxs(s.Lead,{children:["JavaScript ",e.jsx("code",{children:"number"})," values use IEEE-754 double-precision (64-bit) floating point: ~15–17 decimal digits of precision, a 53-bit significand, and special values like ",e.jsx("code",{children:"NaN"}),", ",e.jsx("code",{children:"Infinity"}),", and ",e.jsx("code",{children:"-0"}),". This brings rounding quirks and edge cases you must handle explicitly."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Representation:"})," 1 sign bit, 11-bit exponent, 52-bit fraction (giving a 53-bit significand with the implicit leading 1 for normals)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Precision:"})," About 15–17 decimal digits. Safe integer range is",e.jsx("code",{children:"[-(2^53-1), +(2^53-1)]"})," →"," ",e.jsx("code",{children:"[-9007199254740991, 9007199254740991]"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Rounding:"})," Many decimals (e.g., 0.1) are not exactly representable; arithmetic is rounded to nearest representable value (ties to even)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Special values:"})," ",e.jsx("code",{children:"NaN"})," (not-a-number),"," ",e.jsx("code",{children:"Infinity"}),", ",e.jsx("code",{children:"-Infinity"}),", and signed zero ",e.jsx("code",{children:"-0"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Limits:"})," ",e.jsx("code",{children:"Number.MAX_VALUE"})," (~1.79e308),"," ",e.jsx("code",{children:"Number.MIN_VALUE"})," (~5e-324, smallest ",e.jsx("em",{children:"positive"})," subnormal),",e.jsx("code",{children:"Number.EPSILON"})," (~2.22e-16, the gap around 1)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Under/overflow:"})," Too small → underflow to 0; too big →"," ",e.jsx("code",{children:"±Infinity"}),"."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Classic rounding surprise"}),e.jsx(s.Code,{children:`console.log(0.1 + 0.2);          // 0.30000000000000004
console.log((0.1 + 0.2) === 0.3); // false`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Compare with a tolerance (EPSILON)"}),e.jsx(s.Code,{children:`const nearlyEqual = (a, b, tol = Number.EPSILON) =>
  Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));

console.log(nearlyEqual(0.1 + 0.2, 0.3)); // true (within EPSILON-scaled tolerance)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Safe integer range and bit limits"}),e.jsx(s.Code,{children:`console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

const two53 = 2 ** 53;
console.log(two53);                 // 9007199254740992
console.log(two53 + 1 === two53 + 2); // true (precision lost past 2^53)
console.log(two53 + 3 === two53 + 4); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Non-associativity"}),e.jsx(s.Code,{children:`const a = (0.1 + 0.2) + 0.3;  // 0.6000000000000001
const b = 0.1 + (0.2 + 0.3);  // 0.6
console.log(a === b);         // false`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Underflow, overflow, subnormals"}),e.jsx(s.Code,{children:`console.log(Number.MAX_VALUE * 2);   // Infinity (overflow)
console.log(Number.MIN_VALUE / 2);   // 0 (underflow to zero)
console.log(Number.MIN_VALUE);       // ~5e-324 (smallest positive subnormal)
console.log(1e-324);                 // 0  (too small to represent)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 6 — ",e.jsx("code",{children:"NaN"})," rules"]}),e.jsx(s.Code,{children:`console.log(NaN === NaN);            // false
console.log(Number.isNaN(NaN));       // true
console.log(isNaN("foo"));            // true  (coerces → NaN)  ← prefer Number.isNaN
console.log(Number.isNaN("foo"));     // false (no coercion)

console.log(0 / 0);                   // NaN
console.log(Infinity - Infinity);     // NaN
console.log(0 * Infinity);            // NaN`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 7 — ",e.jsx("code",{children:"Infinity"})," rules"]}),e.jsx(s.Code,{children:`console.log(1 / 0);         // Infinity
console.log(-1 / 0);        // -Infinity
console.log(Infinity + 1);  // Infinity
console.log(1 / Infinity);  // 0
console.log(-1 / Infinity); // -0 (signed zero)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Signed zero matters"}),e.jsx(s.Code,{children:`console.log(+0 === -0);         // true (strict equality)
console.log(Object.is(+0, -0));  // false (SameValue distinguishes)
console.log(1 / +0, 1 / -0);     // Infinity -Infinity (different signs)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Rounding & formatting numbers"}),e.jsx(s.Code,{children:`console.log(Math.round(2.5));   // 3
console.log(Math.floor(-1.2));  // -2
console.log(Math.trunc(-1.2));  // -1

console.log((1.005).toFixed(2));     // "1.01" (rounded)
console.log((1234.5678).toPrecision(5)); // "1234.6"

// Avoid floating money with cents; use integers or a decimal lib:
const cents = 1999; // ₹19.99 stored as 1999 paise
const add = (a,b) => a + b;
console.log(add(1999, 1) / 100); // 20.0`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Summation error & Kahan compensation (brief)"}),e.jsx(s.Code,{children:`// Naive sum can accumulate error:
const xs = Array(1000).fill(0.1);
const naive = xs.reduce((s, x) => s + x, 0);
console.log(naive); // ~99.99999999997

// Kahan summation improves accuracy:
function kahanSum(arr){
  let sum = 0, c = 0;
  for (const x of arr) {
    const y = x - c;
    const t = sum + y;
    c = (t - sum) - y;
    sum = t;
  }
  return sum;
}
console.log(kahanSum(xs)); // 100`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 11 — Parsing & literals vs conversion"}),e.jsx(s.Code,{children:`console.log(parseFloat("3.14rad")); // 3.14 (stops at 'r')
console.log(Number("3.14rad"));   // NaN  (whole string must be numeric)
console.log(Number("Infinity"));   // Infinity
console.log(Number("-0"));         // -0 (signed zero preserved)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 12 — BigInt for precise integers"}),e.jsx(s.Code,{children:`// For integers beyond 2^53-1, use BigInt (no decimals):
const big = 9007199254740993n; // > MAX_SAFE_INTEGER
console.log(big + 2n);         // 9007199254740995n
// console.log(big + 2);       // ❌ TypeError: cannot mix BigInt and Number`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 13 — Practical guidance"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Use ",e.jsx("code",{children:"Number.isNaN"})," (not global ",e.jsx("code",{children:"isNaN"}),") to check NaN without coercion."]}),e.jsxs("li",{children:["Compare floats with a tolerance (",e.jsx("code",{children:"Number.EPSILON"})," scaled to magnitude)."]}),e.jsx("li",{children:"Keep money/points as integers (paise/cents) or use a decimal library."}),e.jsx("li",{children:"Avoid relying on evaluation order for floating math; sums are not associative."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"BigInt"})," for exact, large integers; never mix with ",e.jsx("code",{children:"number"})," arithmetic."]})]})]})]}),F=()=>e.jsxs(s.Page,{children:[e.jsxs(s.H1,{children:["Parsing numbers: ",e.jsx("code",{children:"Number"}),", ",e.jsx("code",{children:"parseInt"}),", ",e.jsx("code",{children:"parseFloat"})]}),e.jsxs(s.Lead,{children:["Three common ways to turn strings into numbers behave differently."," ",e.jsx("code",{children:"Number(x)"})," requires the entire string to be a valid numeric literal;"," ",e.jsx("code",{children:"parseInt(x, radix)"})," parses an ",e.jsx("em",{children:"integer prefix"}),";"," ",e.jsx("code",{children:"parseFloat(x)"})," parses a ",e.jsx("em",{children:"floating-point prefix"}),"."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition & guidance"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"Number(str)"}),":"]})," Trims whitespace, then expects a full JavaScript numeric literal (supports ",e.jsx("code",{children:"0x"}),"/",e.jsx("code",{children:"0b"}),"/",e.jsx("code",{children:"0o"}),", exponents, ",e.jsx("code",{children:"Infinity"}),"). If any non-numeric junk remains → ",e.jsx("code",{children:"NaN"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"parseInt(str, radix)"}),":"]})," Reads as many valid digits as possible (optional sign allowed) and stops at first invalid char. Always pass a"," ",e.jsx("em",{children:"radix"})," (2–36). Without a radix, decimal is used except a ",e.jsx("code",{children:"0x"})," prefix → hex."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"parseFloat(str)"}),":"]})," Like ",e.jsx("code",{children:"parseInt"})," but accepts a decimal point and exponent (",e.jsx("code",{children:"1.2e3"}),"). Stops at first invalid char; no radix."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Objects/arrays:"})," All three first convert their input with ",e.jsx("code",{children:"ToString"}),". E.g., ",e.jsx("code",{children:"parseInt([15], 10)"})," → ",e.jsx("code",{children:"15"}),"; ",e.jsx("code",{children:"Number([1,2])"})," → ",e.jsx("code",{children:"NaN"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Big numbers:"})," Results are ",e.jsx("em",{children:"Number"})," (floating 64-bit). Large integers may lose precision. Use ",e.jsx("code",{children:"BigInt(str)"})," for exact big integers."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Whole string vs prefix"}),e.jsx(s.Code,{children:`console.log(Number("42"));          // 42
console.log(parseInt("42", 10));    // 42
console.log(parseFloat("42"));      // 42

console.log(Number("42px"));        // NaN (junk present)
console.log(parseInt("42px", 10));  // 42  (stops at "p")
console.log(parseFloat("42.5kg"));  // 42.5 (stops at "k")`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Trimming & special tokens"}),e.jsx(s.Code,{children:`console.log(Number("  \\t\\n 123 ")); // 123 (whitespace trimmed)
console.log(parseInt("   123", 10)); // 123
console.log(parseFloat("   -3.5"));  // -3.5

console.log(Number("Infinity"));     // Infinity
console.log(parseFloat("Infinity")); // Infinity
console.log(parseInt("Infinity",10));// NaN (first char not a digit/sign)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Radix rules (always pass it)"}),e.jsx(s.Code,{children:`console.log(parseInt("08", 10));   // 8  (explicit decimal)
console.log(parseInt("0x10", 16)); // 16 (hex with radix)
console.log(parseInt("0x10", 10)); // 0  (parses "0" then stops at "x")

// Binary/octal prefixes are NOT understood by parseInt without stripping:
console.log(parseInt("0b1010", 2)); // 0  (stops at "b")
// Do this instead:
console.log(parseInt("1010", 2));   // 10`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Number supports 0x / 0b / 0o (both cases)"}),e.jsx(s.Code,{children:`console.log(Number("0xFF"));  // 255
console.log(Number("0b1010")); // 10
console.log(Number("0B1010")); // 10
console.log(Number("0o11"));   // 9
console.log(Number("0O11"));   // 9

console.log(parseFloat("0x10")); // 0  (stops at "x"; float doesn't do hex)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Empty strings & oddities"}),e.jsx(s.Code,{children:`console.log(Number(""));     // 0    (empty string → 0)
console.log(parseFloat(""));  // NaN
console.log(parseInt("", 10)); // NaN

console.log(Number("\\u2003 5 "));  // 5 (Unicode whitespace trimmed)
console.log(parseInt("   -0", 10)); // 0 (sign handled)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Arrays/objects first stringify"}),e.jsx(s.Code,{children:`console.log(parseInt([15], 10));   // 15   (["15"] -> "15")
console.log(parseFloat(["3.14"])); // 3.14
console.log(Number([1,2]));        // NaN  ("1,2" not a numeric literal)
console.log(parseInt({ toString(){ return "123"; } }, 10)); // 123`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Precision limits (Number vs BigInt)"}),e.jsx(s.Code,{children:`// Exceeds Number's safe integer:
const s = "9007199254740993";              // 2^53 + 1
console.log(parseInt(s, 10));              // 9007199254740992 (rounded)
console.log(Number(s));                    // 9007199254740992 (rounded)
console.log(BigInt(s));                    // 9007199254740993n (exact)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Exponents & decimals"}),e.jsx(s.Code,{children:`console.log(parseFloat("1.2e3")); // 1200
console.log(Number("1.2e3"));   // 1200
console.log(parseInt("1.2e3",10)); // 1 (stops at ".")`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Base 36 and alphabet digits"}),e.jsx(s.Code,{children:`console.log(parseInt("zzz", 36));  // 46655
console.log(parseInt("FACE", 16)); // 64206
console.log(parseInt("101", 2));   // 5`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Locale-formatted numbers are not parsed"}),e.jsx(s.Code,{children:`console.log(Number("1,234.56"));   // NaN (comma invalid)
console.log(parseFloat("1,234.56")); // 1  (stops at comma)
// Clean or use Intl.NumberFormat for locale-aware parsing/formatting.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 11 — Practical patterns"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Need a strict numeric conversion? Use ",e.jsx("code",{children:"Number(x)"}),". It fails fast on junk."]}),e.jsxs("li",{children:["Need to read an integer prefix from a mixed string? Use"," ",e.jsx("code",{children:"parseInt(x, radix)"})," with an explicit radix."]}),e.jsxs("li",{children:["Need a decimal prefix (with exponent)? Use ",e.jsx("code",{children:"parseFloat(x)"}),"."]}),e.jsxs("li",{children:["Parsing binary/oct/hex strings? Prefer ",e.jsx("code",{children:'Number("0b…")'}),"/",e.jsx("code",{children:'"0o…"'}),"/",e.jsx("code",{children:'"0x…"'})," ","or strip the prefix and use ",e.jsx("code",{children:"parseInt(clean, base)"}),"."]}),e.jsxs("li",{children:["Dealing with huge integers? Use ",e.jsx("code",{children:"BigInt(str)"})," to avoid precision loss."]})]})]})]}),P=()=>e.jsxs(s.Page,{children:[e.jsxs(s.H1,{children:["Number checks: ",e.jsx("code",{children:"isNaN"}),", ",e.jsx("code",{children:"Number.isNaN"}),", ",e.jsx("code",{children:"isFinite"})]}),e.jsxs(s.Lead,{children:["There are two families of numeric predicates. The ",e.jsx("em",{children:"global"})," versions (",e.jsx("code",{children:"isNaN"}),", ",e.jsx("code",{children:"isFinite"}),") ",e.jsx("strong",{children:"coerce"})," their argument to a number first. The ",e.jsx("em",{children:"Number.*"})," versions (",e.jsx("code",{children:"Number.isNaN"}),", ",e.jsx("code",{children:"Number.isFinite"}),") do ",e.jsx("strong",{children:"no coercion"}),". Prefer the ",e.jsx("em",{children:"Number.*"})," forms for reliable checks."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition & guidance"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"isNaN(x)"})," (global):"]})," returns ",e.jsx("code",{children:"true"})," if"," ",e.jsx("code",{children:"ToNumber(x)"})," is ",e.jsx("code",{children:"NaN"}),". This means non-numeric strings/objects can become ",e.jsx("code",{children:"true"})," after coercion. ",e.jsx("em",{children:"Surprising."})]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"Number.isNaN(x)"}),":"]})," returns ",e.jsx("code",{children:"true"})," only if ",e.jsx("code",{children:"x"})," is the ",e.jsx("em",{children:"actual"})," ",e.jsx("code",{children:"NaN"})," value (no coercion). ",e.jsx("em",{children:"Use this."})]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"isFinite(x)"})," (global):"]})," returns ",e.jsx("code",{children:"true"})," if"," ",e.jsx("code",{children:"ToNumber(x)"})," is a finite number (not ",e.jsx("code",{children:"NaN"}),", ",e.jsx("code",{children:"±Infinity"}),"). Coerces strings like ",e.jsx("code",{children:'"0"'})," to ",e.jsx("code",{children:"0"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"Number.isFinite(x)"}),":"]})," returns ",e.jsx("code",{children:"true"})," only for values that are already of type ",e.jsx("code",{children:"number"})," and finite. ",e.jsx("em",{children:"Use this."})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Practical guard:"})," to accept only real numbers you can compute with, check ",e.jsx("code",{children:'typeof x === "number" && Number.isFinite(x)'}),"."]})]})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 1 — ",e.jsx("code",{children:"isNaN"})," vs ",e.jsx("code",{children:"Number.isNaN"})]}),e.jsx(s.Code,{children:`console.log(isNaN(NaN));            // true
console.log(Number.isNaN(NaN));   // true

console.log(isNaN("foo"));        // true  (coerces "foo" -> NaN)
console.log(Number.isNaN("foo")); // false (no coercion)

console.log(isNaN(undefined));        // true  (undefined -> NaN)
console.log(Number.isNaN(undefined)); // false`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 2 — Arrays/objects trigger coercion in global ",e.jsx("code",{children:"isNaN"})]}),e.jsx(s.Code,{children:`console.log(isNaN([]));        // false (Number([]) -> 0)
console.log(isNaN([1]));       // false (-> 1)
console.log(isNaN([1,2]));     // true  (-> "1,2" -> NaN)
console.log(isNaN({}));        // true  (-> "[object Object]" -> NaN)

// No coercion with Number.isNaN:
console.log(Number.isNaN([]));      // false
console.log(Number.isNaN({}));      // false`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 3 — ",e.jsx("code",{children:"isFinite"})," vs ",e.jsx("code",{children:"Number.isFinite"})]}),e.jsx(s.Code,{children:`console.log(isFinite("0"));          // true  ("0" -> 0)
console.log(Number.isFinite("0"));   // false (string, not number)

console.log(isFinite(null));         // true  (null -> 0)
console.log(Number.isFinite(null));  // false

console.log(isFinite(1/0));          // false (Infinity)
console.log(Number.isFinite(1/0));   // false
console.log(Number.isFinite(42));    // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Recommended numeric guard"}),e.jsx(s.Code,{children:`const isRealNumber = x => typeof x === "number" && Number.isFinite(x);

console.log(isRealNumber(12.3));     // true
console.log(isRealNumber(NaN));      // false
console.log(isRealNumber(Infinity)); // false
console.log(isRealNumber("12.3"));   // false`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Detecting NaN (alternatives)"}),e.jsx(s.Code,{children:`console.log(Number.isNaN(NaN));  // true
console.log(Object.is(NaN, NaN));  // true (SameValue)
console.log((x => x !== x)(NaN));  // true (only NaN is not equal to itself)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Form/input handling patterns"}),e.jsx(s.Code,{children:`const raw = "42px";
const n1 = Number(raw);               // NaN (strict)
const n2 = parseFloat(raw);           // 42
if (!Number.isNaN(n1)) {
  // use n1
} else if (Number.isFinite(n2)) {
  // fallback to prefix parse (n2)
}
console.log(n1, n2); // NaN 42`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Avoid pitfalls with globals"}),e.jsx(s.Code,{children:`// Want to validate numeric strings?
// DON'T:
console.log(isNaN("  "));   // false (-> 0)  ← misleading
console.log(isFinite("  ")); // true (-> 0)  ← misleading

// DO:
const s = "  ";
const parsed = Number(s.trim());
console.log(Number.isFinite(parsed)); // false ("" -> NaN after trim)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Quick polyfills (spec-accurate enough)"}),e.jsx(s.Code,{children:`if (!Number.isNaN) {
  Number.isNaN = x => typeof x === "number" && x !== x;
}
if (!Number.isFinite) {
  Number.isFinite = x => typeof x === "number" && isFinite(x);
}`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Infinity & signed zero notes"}),e.jsx(s.Code,{children:`console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(-0));        // true   (-0 is a finite number)
console.log(1 / -0);                     // -Infinity (sign preserved)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Cheat sheet"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Number.isNaN(x)"})," — best way to test for the actual ",e.jsx("code",{children:"NaN"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Number.isFinite(x)"})," — best way to ensure ",e.jsx("code",{children:"x"})," is a finite ",e.jsx("em",{children:"number"}),"."]}),e.jsxs("li",{children:["Avoid relying on global ",e.jsx("code",{children:"isNaN"}),"/",e.jsx("code",{children:"isFinite"})," due to coercion."]}),e.jsxs("li",{children:["Accept only “safe to compute” numbers with ",e.jsx("code",{children:'typeof x === "number" && Number.isFinite(x)'}),"."]})]})]})]}),M=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Math essentials (rounding, clamp, random)"}),e.jsx(s.Lead,{children:"Common math tasks in JS revolve around rounding, clamping values into a range, and generating random numbers. Here are the precise behaviors, pitfalls, and battle-tested snippets."}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Rounding — ",e.jsx("code",{children:"Math.round"}),", ",e.jsx("code",{children:"floor"}),", ",e.jsx("code",{children:"ceil"}),", ",e.jsx("code",{children:"trunc"}),", ",e.jsx("code",{children:"fround"})]}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Math.round(x)"}),": nearest integer; halves (±0.5) round toward ",e.jsx("em",{children:"+∞"}),". Examples: ",e.jsx("code",{children:"round(0.5)=1"}),", ",e.jsx("code",{children:"round(-1.5)=-1"}),", ",e.jsx("code",{children:"round(-0.5)=-0"})," (negative zero)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Math.floor(x)"}),": largest integer ≤ ",e.jsx("code",{children:"x"}),". ",e.jsx("code",{children:"floor(-1.2) = -2"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Math.ceil(x)"}),": smallest integer ≥ ",e.jsx("code",{children:"x"}),". ",e.jsx("code",{children:"ceil(-1.2) = -1"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Math.trunc(x)"}),": drop the fractional part (toward 0). ",e.jsx("code",{children:"trunc(-1.9) = -1"}),"."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Math.fround(x)"}),": round to nearest 32-bit float (single precision). Useful for WebGL/typed-array parity."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Math.sign(x)"}),": returns ",e.jsx("code",{children:"1"}),", ",e.jsx("code",{children:"-1"}),", ",e.jsx("code",{children:"0"}),", or ",e.jsx("code",{children:"-0"})," (note the possible ",e.jsx("code",{children:"-0"}),")."]}),e.jsxs("li",{children:[e.jsx("code",{children:"Math.abs(x)"}),": absolute value; ",e.jsx("code",{children:"abs(-0)"})," is ",e.jsx("code",{children:"0"}),"."]})]}),e.jsx(s.Code,{children:`console.log(Math.round(0.5));   // 1
console.log(Math.round(-1.5));  // -1 (ties toward +∞)
console.log(Object.is(Math.round(-0.5), -0)); // true

console.log(Math.floor(-1.2));  // -2
console.log(Math.ceil(-1.2));   // -1
console.log(Math.trunc(-1.2));  // -1
console.log(Math.fround(1/3));  // ~0.33333334 (single-precision)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Round to N decimals (beware FP error)"}),e.jsx(s.Code,{children:`// Simple, readable (string result):
console.log((1.005).toFixed(2)); // "1.01"

// Numeric helper with epsilon to reduce edge errors:
const roundTo = (x, n = 0) => {
  const p = 10 ** n;
  return Math.round((x + Number.EPSILON) * p) / p;
};
console.log(roundTo(1.005, 2)); // 1.01`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Clamp — keep a value within [min, max]"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["No built-in ",e.jsx("code",{children:"Math.clamp"})," (write your own)."]}),e.jsx("li",{children:"Handle swapped bounds defensively if inputs are untrusted."}),e.jsxs("li",{children:["Propagate ",e.jsx("code",{children:"NaN"})," if the input is not a real number (optional)."]})]}),e.jsx(s.Code,{children:`// Minimal, fast:
const clamp = (x, min, max) => Math.min(max, Math.max(min, x));
console.log(clamp(10, 0, 5));  // 5
console.log(clamp(-3, 0, 5));  // 0
console.log(clamp(3, 0, 5));   // 3

// Defensive version (swapped bounds / NaN guard):
const clampSafe = (x, a, b) => {
  let min = Math.min(a, b), max = Math.max(a, b);
  if (!(typeof x === "number" && Number.isFinite(x))) return NaN;
  return Math.min(max, Math.max(min, x));
};`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Random — ",e.jsx("code",{children:"Math.random()"})," basics"]}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("code",{children:"Math.random()"})," returns a float in ",e.jsx("code",{children:"[0, 1)"}),"."]}),e.jsxs("li",{children:["It’s ",e.jsx("em",{children:"not"})," cryptographically secure; do not use for tokens/passwords."]}),e.jsxs("li",{children:["For secure randomness use ",e.jsx("code",{children:"crypto.getRandomValues"})," (browser) or ",e.jsx("code",{children:"crypto.randomBytes"})," (Node)."]})]}),e.jsx(s.Code,{children:`// Uniform float in [min, max):
const randomFloat = (min, max) => Math.random() * (max - min) + min;
console.log(randomFloat(5, 10)); // e.g., 7.23

// Uniform int in [min, max] (inclusive):
const randomInt = (min, max) => {
  min = Math.ceil(min); max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomInt(1, 6)); // 1..6`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Secure random integers (no modulo bias)"}),e.jsxs(s.UL,{children:[e.jsx("li",{children:"Use rejection sampling with a secure source."}),e.jsxs("li",{children:["Browser: ",e.jsx("code",{children:"crypto.getRandomValues"}),". Node: ",e.jsx("code",{children:'require("node:crypto").randomBytes'}),"."]})]}),e.jsx(s.Code,{children:`// Browser secure int in [min, max] inclusive, unbiased:
function secureRandomInt(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max) || max < min) throw new Error("bad range");
  const range = max - min + 1;
  if (range <= 0) throw new Error("range too large");

  // 32-bit space
  const maxUnbiased = Math.floor(0x100000000 / range) * range - 1;
  const buf = new Uint32Array(1);
  while (true) {
    crypto.getRandomValues(buf);
    const x = buf[0];
    if (x <= maxUnbiased) return min + (x % range);
  }
}
// console.log(secureRandomInt(1, 6));`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Shuffling (Fisher–Yates)"}),e.jsx(s.Code,{children:`function shuffleInPlace(arr, rng = Math.random) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1)); // 0..i
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(shuffleInPlace([1,2,3,4])); // e.g., [3,1,4,2]`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Other handy snippets"}),e.jsx(s.Code,{children:`// Map a value from one range to another:
const mapRange = (x, inMin, inMax, outMin, outMax) =>
  ( (x - inMin) * (outMax - outMin) ) / (inMax - inMin) + outMin;

// Wrap into [0, n) (positive modulo):
const wrap = (x, n) => ((x % n) + n) % n;

// Generate ~normal (Gaussian) via Box–Muller (mean=0, stdev=1):
function randomNormal() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random(); // (0,1)
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
console.log(mapRange(5, 0, 10, 0, 100));  // 50
console.log(wrap(-1, 5));                 // 4
console.log(randomNormal());              // e.g., -0.23`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Gotchas & tips"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Rounding halves: ",e.jsx("code",{children:"Math.round"})," ties go toward ",e.jsx("em",{children:"+∞"}),"; for “bankers’ rounding” (ties to even), implement it yourself."]}),e.jsxs("li",{children:[e.jsx("code",{children:"floor"})," vs ",e.jsx("code",{children:"trunc"})," differ for negatives: ",e.jsx("code",{children:"floor(-1.2)=-2"}),", ",e.jsx("code",{children:"trunc(-1.2)=-1"}),"."]}),e.jsxs("li",{children:["When mapping or clamping user input, validate with ",e.jsx("code",{children:'typeof x === "number" && Number.isFinite(x)'}),"."]}),e.jsxs("li",{children:["Don’t use ",e.jsx("code",{children:"Math.random"})," for security; use the crypto APIs."]}),e.jsx("li",{children:"Be mindful of floating-point error when rounding to decimals; consider integer cents or decimal libraries for money."})]})]})]}),B=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"BigInt basics (ops, mixing rules)"}),e.jsxs(s.Lead,{children:[e.jsx("code",{children:"BigInt"})," represents whole numbers of arbitrary size. It’s a distinct primitive type (",e.jsx("code",{children:'typeof 10n === "bigint"'}),") with its own operators and rules. You can’t mix it with ",e.jsx("code",{children:"number"})," in arithmetic."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Create via a literal with ",e.jsx("code",{children:"n"})," (",e.jsx("code",{children:"123n"}),", ",e.jsx("code",{children:"0xFFn"}),", ",e.jsx("code",{children:"0b1010n"}),") or with"," ",e.jsx("code",{children:"BigInt(value)"})," (string or integral number)."]}),e.jsxs("li",{children:["Arithmetic operators supported with ",e.jsx("em",{children:"both"})," operands BigInt:"," ",e.jsx("code",{children:"+"})," ",e.jsx("code",{children:"-"})," ",e.jsx("code",{children:"*"})," ",e.jsx("code",{children:"/"})," ",e.jsx("code",{children:"%"})," ",e.jsx("code",{children:"**"}),". Division truncates toward 0."]}),e.jsxs("li",{children:["Bitwise for BigInt only: ",e.jsx("code",{children:"&"})," ",e.jsx("code",{children:"|"})," ",e.jsx("code",{children:"^"})," ",e.jsx("code",{children:"~"})," ",e.jsx("code",{children:"<<"})," ",e.jsx("code",{children:">>"}),"."," ","No unsigned right shift ",e.jsx("code",{children:">>>"})," for BigInt."]}),e.jsxs("li",{children:["Mixing rule: arithmetic/bitwise with a ",e.jsx("code",{children:"number"})," throws ",e.jsx("code",{children:"TypeError"}),". Use explicit conversion."]}),e.jsxs("li",{children:["Comparisons: ",e.jsx("code",{children:"<"}),", ",e.jsx("code",{children:">"}),", etc. can compare BigInt with Number; ",e.jsx("code",{children:"==="})," does ",e.jsx("em",{children:"not"})," coerce; ",e.jsx("code",{children:"=="})," does."]}),e.jsxs("li",{children:["Boolean coercion: ",e.jsx("code",{children:"0n"})," is falsy; any other BigInt is truthy."]}),e.jsxs("li",{children:["No decimals: ",e.jsx("code",{children:"BigInt(1.5)"}),", ",e.jsx("code",{children:"BigInt(NaN)"}),", ",e.jsx("code",{children:"BigInt(Infinity)"})," throw (non-integral)."]}),e.jsxs("li",{children:["Not compatible with ",e.jsx("code",{children:"Math.*"}),". Format via ",e.jsx("code",{children:"toString()"})," / ",e.jsx("code",{children:"toLocaleString()"}),"."]}),e.jsxs("li",{children:["JSON: ",e.jsx("code",{children:"JSON.stringify"})," on a BigInt throws; serialize as string (via replacer) if needed."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Creating BigInts"}),e.jsx(s.Code,{children:`const a = 123n;         // literal
const b = 0xFFn;        // hex literal → 255n
const c = BigInt("9007199254740993"); // from string (> Number.MAX_SAFE_INTEGER)
const d = BigInt(42);   // from integral number

console.log(typeof a, a); // "bigint" 123n`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Arithmetic (truncating division)"}),e.jsx(s.Code,{children:`console.log(5n + 7n);   // 12n
console.log(5n - 7n);   // -2n
console.log(5n * 7n);   // 35n
console.log(5n / 2n);   // 2n  (truncates toward 0)
console.log(-5n / 2n);  // -2n (truncates toward 0)
console.log(5n % 2n);   // 1n
console.log((-5n) % 2n);// -1n (JS remainder keeps left operand's sign)
console.log(2n ** 63n); // 9223372036854775808n`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Bitwise with BigInt"}),e.jsx(s.Code,{children:`console.log(0b1010n & 0b1100n); // 0b1000n (8n)
console.log(0b1010n | 0b1100n); // 0b1110n (14n)
console.log(0b1010n ^ 0b1100n); // 0b0110n (6n)
console.log(~0b1010n);          // bitwise NOT (two's-complement style)
console.log(1n << 8n);          // 256n
console.log(-2n >> 1n);         // -1n (arithmetic shift)
// 1n >>> 1n; // ❌ SyntaxError: unsigned right shift not defined for BigInt`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Mixing throws; convert explicitly"}),e.jsx(s.Code,{children:`// 10n + 1;           // ❌ TypeError: Cannot mix BigInt and other types
console.log(10n + BigInt(1));    // 11n
console.log(Number(10n) + 1);    // 11  (possible precision loss for huge BigInts)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Comparisons"}),e.jsx(s.Code,{children:`console.log(10n === 10);   // false  (different types)
console.log(10n == 10);     // true   (loose equality)
console.log(10n < 20);      // true   (relational comparison allowed)
console.log(9007199254740993n == 9007199254740993); // false (number rounded)
console.log(Object.is(0n, -0n)); // true (BigInt has no signed zero)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Coercion rules & errors"}),e.jsx(s.Code,{children:`// Valid:
console.log(BigInt("0xFF")); // 255n
console.log(BigInt(true));   // 1n
console.log(BigInt(false));  // 0n

// Errors (non-integral / non-finite):
try { BigInt(1.5); } catch (e) { console.log(e.name); }        // RangeError
try { BigInt(NaN); } catch (e) { console.log(e.name); }         // RangeError
try { BigInt(Infinity); } catch (e) { console.log(e.name); }    // RangeError

// Unary plus is NOT allowed:
try { /* eslint-disable no-unsafe-unary */ console.log(+10n); } 
catch (e) { console.log(e.name); } // TypeError`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Formatting & JSON"}),e.jsx(s.Code,{children:`const x = 12345678901234567890n;
console.log(x.toString());           // "12345678901234567890"
console.log(x.toLocaleString("en-IN")); // locale string

try { JSON.stringify({ x }); } 
catch (e) { console.log(e.name); }   // TypeError (BigInt not JSON-serializable)

// Workaround: stringify as string
const json = JSON.stringify({ x: x.toString() });
console.log(json); // {"x":"12345678901234567890"}`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Bit-width truncation helpers"}),e.jsx(s.Code,{children:`// Constrain a BigInt to N bits:
console.log(BigInt.asUintN(8, 300n)); // 44n  (300 mod 2^8)
console.log(BigInt.asIntN(8, 300n));  // 44n  (interpreted as signed 8-bit)
console.log(BigInt.asIntN(8, 0xFFn)); // -1n  (two's-complement)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Typed arrays for 64-bit lanes"}),e.jsx(s.Code,{children:`const a = new BigInt64Array([1n, 2n, -3n]);
const b = new BigUint64Array([1n, 2n, 3n]);
console.log(a[2], b[2]); // -3n 3n`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Practical tips"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Use BigInt for ",e.jsx("em",{children:"integers"})," that must be exact (IDs, counters, cryptography math)."]}),e.jsxs("li",{children:["Avoid mixing with ",e.jsx("code",{children:"number"}),"; convert at boundaries only."]}),e.jsxs("li",{children:["No ",e.jsx("code",{children:"Math.*"})," support—roll your own integer math or use libraries."]}),e.jsx("li",{children:"Beware performance: BigInt operations are generally slower than on small Numbers."}),e.jsxs("li",{children:["When storing/transmitting, convert to decimal or hex strings; parse back with ",e.jsx("code",{children:"BigInt(str)"}),"."]})]})]})]}),L=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"String literals & escapes"}),e.jsxs(s.Lead,{children:["JavaScript strings can be written with single quotes ",e.jsx("code",{children:"'…'"}),", double quotes"," ",e.jsx("code",{children:'"…"'}),", or backticks ",e.jsx("code",{children:"`…`"})," (template literals). Escape sequences let you embed special characters and Unicode code points."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Forms & when to use"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Single/Double quoted:"})," ",e.jsx("code",{children:'"text"'})," or ",e.jsx("code",{children:"'text'"}),". Use escapes for quotes/newlines. Convenient for simple, single-line strings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Template literals:"})," ",e.jsx("code",{children:"`text`"})," supports real newlines,"," ",e.jsxs("code",{children:["$","{","expr","}"]})," interpolation, and easier multi-line formatting."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Raw text:"})," ",e.jsx("code",{children:"String.raw"})," (as a tag) returns ",e.jsx("em",{children:"unescaped"})," contents (backslashes preserved)."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Escape sequences (cheat sheet)"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Common: ",e.jsx("code",{children:"\\n"})," (LF), ",e.jsx("code",{children:"\\r"})," (CR), ",e.jsx("code",{children:"\\t"})," (tab), ",e.jsx("code",{children:"\\b"})," (backspace),",e.jsx("code",{children:"\\f"})," (form feed), ",e.jsx("code",{children:"\\v"})," (vertical tab), ",e.jsx("code",{children:"\\\\"})," (backslash), ",e.jsx("code",{children:"\\'"}),", ",e.jsx("code",{children:'\\"'}),"."]}),e.jsxs("li",{children:["NUL: ",e.jsx("code",{children:"\\0"})," (only if ",e.jsx("strong",{children:"not"})," followed by a digit)."]}),e.jsxs("li",{children:["Hex: ",e.jsx("code",{children:"\\xNN"})," (two hex digits). Unicode BMP: ",e.jsx("code",{children:"\\uFFFF"}),". Code point:"," ",e.jsx("code",{children:"\\u{1F600}"})," (any Unicode scalar)."]}),e.jsx("li",{children:"Line continuation (classic strings): backslash at end of line + newline → removed."}),e.jsxs("li",{children:[e.jsx("em",{children:"Legacy octal"})," escapes like ",e.jsx("code",{children:"\\123"})," are ",e.jsx("strong",{children:"invalid in strict mode"}),"; avoid entirely."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:`Example 1 — Basics " vs ' and escaping`}),e.jsx(s.Code,{children:`console.log("She said \\"hi\\"."); // She said "hi".
console.log('It\\'s fine.');       // It's fine.
console.log("Path: C:\\\\tmp\\\\file.txt"); // Path: C:\\tmp\\file.txt

// Newlines in classic strings require \\n or line continuation:
const a = "line1\\nline2";
const b = "line1\\
line2"; // backslash-newline removed
console.log(a); // two lines
console.log(b); // "line1line2"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Template literals: multiline & interpolation"}),e.jsx(s.Code,{children:`const name = "Ada";
const multi = \`Hello, \${name}!
This is on the next line.\`;
console.log(multi);
/*
Hello, Ada!
This is on the next line.
*/

// Escape backtick or "\${" literally:
console.log(\`Use a backtick: \\\` and a literal \\\${ value }\`);`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Unicode escapes"}),e.jsx(s.Code,{children:`// BMP escape (4 hex):
console.log("\\u0041");     // "A"

// Code point escape (any Unicode scalar):
console.log("\\u{1F680}");  // "🚀"

// Hex byte:
console.log("\\x41");       // "A"

// NUL (not followed by digit):
console.log("\\0");         // "\\u0000"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Code points beyond BMP (surrogates vs \\u{…})"}),e.jsx(s.Code,{children:`const rocket1 = "\\uD83D\\uDE80";  // surrogate pair
const rocket2 = "\\u{1F680}";     // direct code point (preferred)
console.log(rocket1 === rocket2); // true
console.log(rocket2.length);      // 2 code units (one visible emoji)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — String.raw for unescaped backslashes"}),e.jsx(s.Code,{children:'console.log(String.raw`C:\\new\\file\\nnot-a-newline`);\n// "C:\\new\\file\\nnot-a-newline"\n\nconst re = String.raw`^\\d+\\.\\d+$\\n`;\nconsole.log(re); // ^\\d+\\.\\d+$\\n (useful for writing regex source text)'})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Strict mode vs legacy octal escapes"}),e.jsx(s.Code,{children:`"use strict";
// const s = "\\123"; // ❌ SyntaxError in strict mode (legacy octal escape)
// Safe alternatives:
const ok1 = "\\x53";         // "S"
const ok2 = "\\u0053";       // "S"
const ok3 = "\\u{53}";       // "S"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Invalid escapes throw (early error)"}),e.jsx(s.Code,{children:`// These are syntax errors if uncommented:
// "\\xG1"         // invalid hex
// "\\u12G4"       // invalid Unicode escape
// "\\u{110000}"   // out of Unicode range (max 0x10FFFF)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Useful non-breaking & invisible chars"}),e.jsx(s.Code,{children:`const nbsp = "\\u00A0"; // non-breaking space
const zwnbsp = "\\uFEFF"; // BOM / zero-width no-break space
console.log("A" + nbsp + "B"); // "A B"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Paths & regex strings need double escaping"}),e.jsx(s.Code,{children:`// Windows path:
const path = "C:\\\\Users\\\\Ada\\\\file.txt";

// Regex source in a *string*:
const numberRe = "^\\\\d+(?:\\\\.\\\\d+)?$"; // becomes /^\\d+(?:\\.\\d+)?$/
console.log(numberRe);`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — JSON vs JS string escapes"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["JSON is stricter: only allows ",e.jsx("code",{children:'\\\\b \\\\f \\\\n \\\\r \\\\t \\\\\\\\ \\\\/ \\\\\\"'})," and ",e.jsx("code",{children:"\\\\uXXXX"}),"."]}),e.jsxs("li",{children:["JavaScript allows more (",e.jsx("code",{children:"\\\\v"}),", ",e.jsx("code",{children:"\\\\0"}),", ",e.jsx("code",{children:"\\\\xNN"}),", ",e.jsx("code",{children:"\\\\u{…}"}),", etc.)."]})]}),e.jsx(s.Code,{children:`// Valid JS string, but not valid JSON string content:
const jsOnly = "\\x41\\v"; // "A" + vertical tab`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Practical tips"}),e.jsxs(s.UL,{children:[e.jsx("li",{children:"Prefer template literals for multi-line and interpolation-heavy text."}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"\\\\u{…}"})," for Unicode beyond BMP; avoid manual surrogate pairs."]}),e.jsx("li",{children:"Avoid legacy octal escapes entirely; they’re error-prone and banned in strict mode."}),e.jsx("li",{children:"When writing regex or paths inside strings, remember backslashes need escaping."}),e.jsxs("li",{children:["Need literal backslashes/newlines preserved? Use ",e.jsx("code",{children:"String.raw\\`…\\`"}),"."]})]})]})]}),U=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Template literals"}),e.jsxs(s.Lead,{children:["Template literals use backticks ",e.jsx("code",{children:"`"})," to create strings with real newlines and embedded expressions via ",e.jsxs("code",{children:["$","{expr}"]}),". They can also be"," ",e.jsx("em",{children:"tagged"})," (a function processes the template parts) and used as",e.jsx("code",{children:"String.raw"})," to avoid interpreting escapes."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Syntax:"})," ",e.jsxs("code",{children:["`text $","{","expression","}","`"]}),". Newlines and spaces are taken literally."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Evaluation:"})," Expressions are evaluated left-to-right and converted with ",e.jsx("em",{children:"ToString"})," (e.g., ",e.jsx("code",{children:"null"})," → ",e.jsx("code",{children:'"null"'}),", ",e.jsx("code",{children:"undefined"})," → ",e.jsx("code",{children:'"undefined"'}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Symbols:"})," Interpolating a ",e.jsx("code",{children:"Symbol"})," throws (because ToString(Symbol) throws). Use ",e.jsx("code",{children:"String(sym)"})," or ",e.jsx("code",{children:"sym.description"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tagged templates:"})," ",e.jsxs("code",{children:["tag\\`Hello $","{","x","}","\\`"]})," calls ",e.jsx("code",{children:"tag(strings, ...values)"}),". The tag can return any value (not just a string)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Raw text:"})," ",e.jsx("code",{children:"String.raw\\`...\\`"})," exposes backslashes literally (no escape processing in the string parts)."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Basics: interpolation & multiline"}),e.jsx(s.Code,{children:`const name = "Ada";
const n = 3;
const msg = \`Hello, \${name}! You have \${n} new messages.\`;
console.log(msg);
/*
Hello, Ada! You have 3 new messages.
*/

const poem = \`Roses are red
Violets are blue\`;
console.log(poem.split("\\n").length); // 2 (real newline in the string)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Any expressions (calls, ops, ternaries)"}),e.jsx(s.Code,{children:'const price = 1999;\nconst fmt = n => (n/100).toFixed(2);\nconsole.log(`Pay ₹${fmt(price)} now`);   // "Pay ₹19.99 now"\n\nconst x = 5;\nconsole.log(`${x} is ${x % 2 ? "odd" : "even"}`); // "5 is odd"'})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 3 — Escaping backtick and ",e.jsx("code",{children:"\\$"})]}),e.jsx(s.Code,{children:"console.log(`Use a backtick: \\\\` and a literal \\$\\{expr\\}`);\n// Output: Use a backtick: ` and a literal ${expr}"})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Interpolating objects: ToString is used"}),e.jsx(s.Code,{children:'const u = { toString(){ return "[User Ada]"; } };\nconsole.log(`User: ${u}`); // "User: [User Ada]"\n\nconst sym = Symbol("id");\n// console.log(`${sym}`); // ❌ TypeError\nconsole.log(`${String(sym)}`); // "Symbol(id)"'})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Whitespace is literal; trim if desired"}),e.jsx(s.Code,{children:`const html = \`
  <ul>
    <li>One</li>
  </ul>
\`.trim();
console.log(html.startsWith("<ul>")); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Tagged templates (basic)"}),e.jsx(s.Code,{children:`function tag(strings, ...values) {
  // strings: array of literal parts; strings.raw keeps backslashes
  // Return anything; here we interleave with brackets:
  return strings.reduce((out, s, i) => out + s + (i < values.length ? "[" + values[i] + "]" : ""), "");
}
const a = 2, b = 3;
console.log(tag\`sum(\${a}, \${b}) = \${a + b}\`); 
// "sum([2], [3]) = [5]"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Security/tag use-case: HTML escaping"}),e.jsx(s.Code,{children:`const escape = s => String(s)
  .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");

function html(strings, ...vals) {
  return strings.reduce((acc, s, i) => acc + s + (i < vals.length ? escape(vals[i]) : ""), "");
}

const user = "<img onerror=alert(1)>";
console.log(html\`<p>Hello \${user}</p>\`);
// "<p>Hello &lt;img onerror=alert(1)&gt;</p>" (safe)`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 8 — ",e.jsx("code",{children:"String.raw"})," for literal backslashes"]}),e.jsx(s.Code,{children:`console.log(String.raw\`C:\\temp\\new\\file\\nnot-a-newline\`);
// "C:\\temp\\new\\file\\nnot-a-newline"

function dump(strings) {
  console.log(strings[0]);      // cooked: escapes processed
  console.log(strings.raw[0]);  // raw: backslashes preserved
}
dump\`\\n\\t\`; // cooked: newline+tab; raw: "\\n\\t"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Dedenting helper for nicely indented blocks"}),e.jsx(s.Code,{children:`function dedent(strings, ...vals) {
  const full = strings.reduce((acc, s, i) => acc + s + (i < vals.length ? vals[i] : ""), "");
  const lines = full.replace(/^\\n/, "").replace(/\\n\\s*$/, "").split("\\n");
  const indent = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^\\s*/)[0].length));
  return lines.map(l => l.slice(indent)).join("\\n");
}
const out = dedent\`
    function add(a, b) {
      return a + b;
    }
\`;
console.log(out.startsWith("function")); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Nesting templates inside expressions"}),e.jsx(s.Code,{children:'const who = "Ada";\nconst greet = msg => `<< ${msg} >>`;\nconsole.log(`${greet(`Hello, ${who}`)}`); // "<< Hello, Ada >>"'})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 11 — Building regex/text with clarity"}),e.jsx(s.Code,{children:`// Using backticks doesn't change RegExp escaping needs,
// but String.raw helps when writing pattern source strings:
const source = String.raw\`^\\d+(?:\\.\\d+)?$\\n\`;
const re = new RegExp(source, "m");
console.log(re.test("3.14\\n")); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 12 — Tagged templates can return non-strings"}),e.jsx(s.Code,{children:`function json(strings, ...vals) {
  const text = strings.reduce((acc, s, i) => acc + s + (i < vals.length ? JSON.stringify(vals[i]) : ""), "");
  return JSON.parse(text);
}
const obj = json\`{"n": \${42}, "arr": \${[1,2,3]}}\`;
console.log(obj.n + obj.arr[0]); // 43`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Gotchas & tips"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["Template literals are still ",e.jsx("em",{children:"strings"})," (unless a tag returns something else)."]}),e.jsxs("li",{children:["Interpolating ",e.jsx("code",{children:"Symbol"})," throws — wrap with ",e.jsx("code",{children:"String(sym)"})," or use ",e.jsx("code",{children:"sym.description"}),"."]}),e.jsxs("li",{children:["Whitespace and newlines are preserved; use ",e.jsx("code",{children:".trim()"})," or a dedent tag to tidy."]}),e.jsxs("li",{children:["Prefer a tag (e.g., ",e.jsx("code",{children:"html"}),") to escape untrusted content and prevent injection."]}),e.jsxs("li",{children:[e.jsx("code",{children:"String.raw"})," is great for regex sources, Windows paths, and docs where backslashes must survive."]})]})]})]}),D=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Tagged templates"}),e.jsx(s.Lead,{children:"Tagged templates let us call a function with the literal parts and the interpolated values of a template. The tag decides how to combine (or transform) them and can even return non-string results."}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Call form:"})," ",e.jsxs("code",{children:["tag\\`Hello $","{name}","!\\`"]})," calls"," ",e.jsx("code",{children:"tag(strings, ...values)"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"strings"})," array:"]})," Frozen, reused (one per callsite), contains the ",e.jsx("em",{children:"cooked"})," string parts;"," ",e.jsx("code",{children:"strings.raw"})," has the ",e.jsx("em",{children:"raw"})," text (backslashes preserved)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Return value:"})," Anything (string, number, object, JSX, etc.). Not limited to strings."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Use-cases:"})," Safe HTML escaping, i18n formatting, dedent/trim helpers, SQL/GraphQL DSLs, building regex sources, etc."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — What a tag receives"}),e.jsx(s.Code,{children:`function inspect(strings, ...vals) {
  console.log(strings);       // cooked parts
  console.log(strings.raw);   // raw parts (escapes intact)
  console.log(vals);          // evaluated values
  return strings.join("|") + "|" + vals.join("|");
}
const who = "Ada";
console.log(inspect\\\`Hi \\\\n \${who}!\\\`);
// strings -> ["Hi \\n ", "!"]
// strings.raw -> ["Hi \\\\n ", "!"]
// vals -> ["Ada"]
// Output: "Hi \\n |!|Ada"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Safe HTML escaping"}),e.jsx(s.Code,{children:`const escape = (s) => String(s)
  .replace(/&/g,"&amp;").replace(/</g,"&lt;")
  .replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");

function html(strings, ...vals) {
  return strings.reduce((out, s, i) =>
    out + s + (i < vals.length ? escape(vals[i]) : ""), "");
}

const user = '<img src=x onerror=alert(1)>';
console.log(html\\\`<p>Hello, \${user}</p>\\\`);
// "<p>Hello, &lt;img src=x onerror=alert(1)&gt;</p>" (safe)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — i18n formatting"}),e.jsx(s.Code,{children:'const dict = {\n  en: (l, v) => `${l[0]}${v[0]}${l[1]}${v[1]}${l[2]}`,\n  fr: (l, v) => `${l[0]}${v[1]} ${l[1]}${v[0]}${l[2]}`, // swap order\n};\nfunction i18n(lang) {\n  return (strings, ...vals) => dict[lang](strings, vals);\n}\nconst en = i18n("en");\nconst fr = i18n("fr");\nconst n = 3, item = "messages";\nconsole.log(en\\`${n} new ${item}\\`); // "3 new messages"\nconsole.log(fr\\`${n} new ${item}\\`); // "messages 3 new"'})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Dedent helper (clean indentation)"}),e.jsx(s.Code,{children:`function dedent(strings, ...vals) {
  const text = strings.reduce((a, s, i) => a + s + (i < vals.length ? vals[i] : ""), "");
  const lines = text.replace(/^\\n/, "").replace(/\\n\\s*$/, "").split("\\n");
  const indent = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^\\s*/)[0].length));
  return lines.map(l => l.slice(indent)).join("\\n");
}
const block = dedent\\\`
      line one
        line two
\\\`;
console.log(block);
// "line one\\n  line two"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Returning non-strings"}),e.jsx(s.Code,{children:`function json(strings, ...vals) {
  const text = strings.reduce((a, s, i) =>
    a + s + (i < vals.length ? JSON.stringify(vals[i]) : ""), "");
  return JSON.parse(text);
}
const obj = json\\\`{"ok": \${true}, "nums": \${[1,2,3]}}\\\`;
console.log(Array.isArray(obj.nums), obj.ok); // true true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Template object is cached (same identity)"}),e.jsx(s.Code,{children:`let firstStringsRef;
function remember(strings) {
  if (!firstStringsRef) firstStringsRef = strings;
  return firstStringsRef === strings;
}
console.log(remember\\\`X=\${1}\\\`); // true
console.log(remember\\\`X=\${2}\\\`); // true (same callsite -> same strings object)
// Note: strings and strings.raw are frozen.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — SQL-like DSL (illustrative)"}),e.jsx(s.Code,{children:`function sql(strings, ...vals) {
  // Build parameterized query: "SELECT * FROM t WHERE id = $1"
  const text = strings.reduce((a, s, i) => a + s + (i < vals.length ? \`$\${i+1}\` : ""), "");
  const params = vals;
  return { text: text.trim(), params };
}
const id = 42, active = true;
const q = sql\\\`
  SELECT * FROM users
  WHERE id = \${id} AND active = \${active}
\\\`;
console.log(q.text);   // "SELECT * FROM users WHERE id = $1 AND active = $2"
console.log(q.params); // [42, true]`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Raw vs cooked difference in one place"}),e.jsx(s.Code,{children:`function showRaw(strings) {
  return { cooked: strings[0], raw: strings.raw[0] };
}
console.log(showRaw\\\`\\n\\t\\\`);
// { cooked: "
// 	", raw: "\\\\n\\\\t" }`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Gotchas & tips"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:["The ",e.jsx("code",{children:"strings"})," array and ",e.jsx("code",{children:"strings.raw"})," are"," ",e.jsx("em",{children:"frozen"}),"; don’t try to mutate them."]}),e.jsxs("li",{children:["The same template ",e.jsx("em",{children:"callsite"})," reuses its strings object (useful for caching/optimization)."]}),e.jsx("li",{children:"Tags run before concatenation; prefer them for escaping untrusted values (XSS prevention)."}),e.jsx("li",{children:"Tags can return any type — you can parse JSON, build ASTs, or return config objects."}),e.jsxs("li",{children:["When you only need literal backslashes (no escape processing), use"," ",e.jsx("code",{children:"String.raw\\\\\\`...\\\\\\`"})," or inspect"," ",e.jsx("code",{children:"strings.raw"})," inside the tag."]})]})]})]}),R=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Unicode & code points"}),e.jsxs(s.Lead,{children:["JavaScript strings are sequences of ",e.jsx("strong",{children:"UTF-16 code units"})," (16-bit values). Unicode defines ",e.jsx("strong",{children:"code points"})," (abstract characters like U+0041 “A”, U+1F600 “😀”). Most BMP characters (U+0000–U+FFFF) are one code unit; non-BMP characters (U+10000–U+10FFFF) use a",e.jsx("em",{children:"surrogate pair"})," (two code units). This is why ",e.jsx("code",{children:"length"})," can differ from the number of visible characters. We’ll handle code points correctly using ",e.jsx("code",{children:"codePointAt"}),",",e.jsx("code",{children:"fromCodePoint"}),", ",e.jsx("code",{children:"for…of"}),", spread, and Unicode-aware regex."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Code point:"})," A Unicode scalar value like U+0041 or U+1F600."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Code unit (UTF-16):"})," A 16-bit value. Non-BMP code points are encoded as two units (high surrogate 0xD800–0xDBFF + low surrogate 0xDC00–0xDFFF)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Escapes:"})," ",e.jsx("code",{children:"\\uXXXX"})," (BMP) and ",e.jsxs("code",{children:["\\u","{","X...","}"]})," (code point escape, works for any code point, e.g. ",e.jsxs("code",{children:["\\u","{1F600}"]}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"APIs:"})," ",e.jsx("code",{children:"String.prototype.codePointAt"})," / ",e.jsx("code",{children:"String.fromCodePoint"})," ","(code point safe) vs ",e.jsx("code",{children:"charCodeAt"})," / ",e.jsx("code",{children:"fromCharCode"})," (code units)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Iteration:"})," ",e.jsx("code",{children:"for…of"})," and ",e.jsx("code",{children:"[...str]"})," iterate by code points."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Normalization:"})," ",e.jsx("code",{children:'str.normalize("NFC" | "NFD" | "NFKC" | "NFKD")'})," to unify canonically equivalent sequences (e.g., composed vs decomposed accents)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Regex Unicode mode:"})," Use the ",e.jsx("code",{children:"u"})," flag for proper code point handling and",e.jsxs("code",{children:["\\p","{...}"]})," property escapes (e.g., ",e.jsxs("code",{children:["/\\p","{Emoji}","/u"]}),")."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Code units vs code points"}),e.jsx(s.Code,{children:`const A = "A";          // U+0041 (BMP)
const face = "😀";    // U+1F600 (non-BMP, surrogate pair)

// length counts UTF-16 code units
console.log(A.length);     // 1
console.log(face.length);  // 2  (two code units)

// charCodeAt -> code unit; codePointAt -> full code point
console.log(A.charCodeAt(0).toString(16));       // "41"
console.log(A.codePointAt(0).toString(16));      // "41"

console.log(face.charCodeAt(0).toString(16));    // "d83d" (high surrogate)
console.log(face.charCodeAt(1).toString(16));    // "de00" (low surrogate)
console.log(face.codePointAt(0).toString(16));   // "1f600"  (correct code point)

// WRONG: indexing splits the surrogate pair
console.log(face[0]); // "\uD83D" (half)
console.log(face[1]); // "\uDE00" (half)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Creating characters"}),e.jsx(s.Code,{children:`// BMP via \\uXXXX
const snow = "\\u2744"; // "❄"
console.log(snow); // "❄"

// Any code point via \\u{...} (code point escape)
const grin = "\\u{1F600}";
console.log(grin); // "😀"

// Programmatic construction
console.log(String.fromCharCode(0x41));   // "A"  (code unit)
console.log(String.fromCodePoint(0x1F680)); // "🚀" (code point)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Iterating & counting by code points"}),e.jsx(s.Code,{children:`const str = "A😀B";
for (const ch of str) {
  console.log(ch);
}
// A
// 😀
// B

console.log([...str]);         // ["A","😀","B"]
console.log([...str].length);  // 3 (code points)
console.log(str.length);       // 4 (code units)

// charAt/at read code units (note: at supports negatives)
console.log(str.charAt(1)); // first half of 😀
console.log(str.at(-2));    // second half of 😀`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — Combining marks & normalization (NFC/NFD)"}),e.jsx(s.Code,{children:`// "ñ" as composed vs decomposed
const nTilde1 = "\\u00F1";          // "ñ" (NFC single code point)
const nTilde2 = "n\\u0303";         // "n" + COMBINING TILDE (NFD)

console.log(nTilde1 === nTilde2);                     // false (different code units)
console.log(nTilde1.length, nTilde2.length);          // 1 2

// Normalize to compare logically-equal text
console.log(nTilde1.normalize("NFC") === nTilde2.normalize("NFC")); // true

// Display is the same, but sequences differ until normalized
console.log(nTilde1); // "ñ"
console.log(nTilde2); // "ñ"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Grapheme clusters (emoji sequences)"}),e.jsx(s.Code,{children:`// Some visible characters are sequences of multiple code points
const family = "👨‍👩‍👧‍👦"; // ZWJ sequence (multiple code points)
const flagIN = "🇮🇳";        // two regional indicators

console.log([...family].length); // code points count (e.g., 7+)
console.log([...flagIN].length); // 2 (two code points)

// Count user-visible characters (grapheme clusters) with Intl.Segmenter
if (typeof Intl !== "undefined" && Intl.Segmenter) {
  const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  const clusterCount = [...seg.segment(family)].length;
  console.log(clusterCount); // 1 (one visible family glyph)
}`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Regex with Unicode mode & properties"}),e.jsx(s.Code,{children:`// Without 'u', '.' matches code units (splits surrogate pair)
console.log("😀".match(/./g));   // ["\\uD83D","\\uDE00"] (two halves)

// With 'u', '.' matches full code points
console.log("😀".match(/./gu));  // ["😀"]

// Property escapes require 'u'
console.log(/\\p{Emoji}/u.test("😀"));            // true
console.log("naïve".match(/\\p{Letter}+/gu));     // ["naïve"]

// Using \\u{...} in regex needs 'u'
console.log(/\\u{1F680}/u.test("🚀")); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Safe slicing by code points"}),e.jsx(s.Code,{children:`const s = "Hi 😀 World";
const cp = [...s];        // array of code points (grapheme-ish for simple cases)
console.log(cp.slice(0, 4).join("")); // "Hi 😀"
// Direct substring could split pairs if not careful:
console.log(s.slice(0, 4)); // Might cut into surrogate depending on positions`})]})]}),J=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"String operations: slice, at, includes, pad, trim"}),e.jsxs(s.Lead,{children:["We practice everyday string tasks: taking substrings with ",e.jsx("code",{children:"slice"}),", reading a single character with ",e.jsx("code",{children:"at"})," (supports negative indexes), finding substrings with ",e.jsx("code",{children:"includes"}),", left/right padding with ",e.jsx("code",{children:"padStart"}),"/",e.jsx("code",{children:"padEnd"}),", and cleaning edges with ",e.jsx("code",{children:"trim"}),"/",e.jsx("code",{children:"trimStart"}),"/",e.jsx("code",{children:"trimEnd"}),"."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"slice(start, end?)"}),":"]})," returns the part from ",e.jsx("em",{children:"start"})," (inclusive) to ",e.jsx("em",{children:"end"})," (exclusive). Negative indexes count from the end. Original string is unchanged."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"at(index)"}),":"]})," returns the one-unit string at ",e.jsx("em",{children:"index"}),"; accepts negatives. Returns ",e.jsx("code",{children:"undefined"})," if out of range."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"includes(search, fromIndex=0)"}),":"]})," case-sensitive substring check; not regex."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:'padStart(targetLen, pad=" ")'})," / ",e.jsx("code",{children:"padEnd(...)"}),":"]})," repeats/truncates ",e.jsx("em",{children:"pad"})," to reach target length; returns a new string."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"trim()"}),", ",e.jsx("code",{children:"trimStart()"}),", ",e.jsx("code",{children:"trimEnd()"}),":"]})," remove whitespace from both/start/end."]})]})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 1 — ",e.jsx("code",{children:"slice"})," basics"]}),e.jsx(s.Code,{children:`const s = "JavaScript";

// start..end (end excluded)
console.log(s.slice(0, 4));   // "Java"
console.log(s.slice(4, 10));  // "Script"

// omit end -> till the end
console.log(s.slice(4));      // "Script"

// negative indexes count from the end
console.log(s.slice(-6));     // "Script"
console.log(s.slice(-6, -3)); // "Scr"

// original is unchanged
console.log(s);               // "JavaScript"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 2 — ",e.jsx("code",{children:"at"})," (with negatives)"]}),e.jsx(s.Code,{children:`const t = "ABCDE";

console.log(t.at(0));   // "A"
console.log(t.at(2));   // "C"
console.log(t.at(-1));  // "E" (last char)
console.log(t.at(-3));  // "C"

// Out of range -> undefined
console.log(t.at(99));  // undefined

// Contrast: charAt doesn't support negatives and returns ""
console.log(t.charAt(-1)); // ""`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 3 — ",e.jsx("code",{children:"includes"})," with start position"]}),e.jsx(s.Code,{children:`const u = "apple";

// basic checks (case-sensitive)
console.log(u.includes("pp"));     // true
console.log(u.includes("Pp"));     // false

// start searching from index
console.log(u.includes("p", 2));   // true (the second "p" at index 2)
console.log(u.includes("ap", 1));  // false

// Note: passing a RegExp throws
// u.includes(/pp/); // TypeError`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 4 — ",e.jsx("code",{children:"padStart"})," for numbers & IDs"]}),e.jsx(s.Code,{children:`// zero-pad
const n = 7;
console.log(String(n).padStart(3, "0")); // "007"

// left pad with custom pattern (repeated then truncated)
console.log("abc".padStart(10, "123"));  // "1231231abc"

// Masking example (last 4 visible)
const card = "1234567812345678";
const masked = card.slice(-4).padStart(card.length, "•");
console.log(masked); // "••••••••••••5678"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 5 — ",e.jsx("code",{children:"padEnd"})," for simple column layout"]}),e.jsx(s.Code,{children:`const rows = [
  ["Name", "Qty", "Price"],
  ["Apples", "3", "₹120"],
  ["Bananas", "10", "₹99"]
];

const out = rows.map(([a,b,c]) =>
  a.padEnd(10, " ") + b.padStart(5, " ") + "  " + c.padStart(7, " ")
).join("\\n");

console.log("\\n" + out);
/*
Name        Qty    Price
Apples        3     ₹120
Bananas      10      ₹99
*/`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 6 — ",e.jsx("code",{children:"trim"}),", ",e.jsx("code",{children:"trimStart"}),", ",e.jsx("code",{children:"trimEnd"})]}),e.jsx(s.Code,{children:`const raw = "  \\n	 Hello World \\t\\n  ";
console.log(raw.length);                 // includes spaces/tabs/newlines

const both = raw.trim();
console.log(both);                       // "Hello World"
console.log(both.length);                // 11

console.log(raw.trimStart());            // "Hello World \\t\\n  "
console.log(raw.trimEnd());              // "  \\n\\t Hello World"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Combine operations"}),e.jsx(s.Code,{children:`// Clean, check, and take a preview
function preview(input) {
  const clean = input.trim();
  const ok = clean.includes("@");
  const head = clean.slice(0, 8);
  return { ok, head, shown: head.padEnd(8, "·") };
}

console.log(preview("   hello@js.dev   "));
/*
{ ok: true, head: "hello@js", shown: "hello@js" }
*/

console.log(preview("   no-at-symbol   "));
/*
{ ok: false, head: "no-at-sy", shown: "no-at-sy" }
*/`})]})]}),z=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"String iteration & normalization"}),e.jsxs(s.Lead,{children:["We iterate strings correctly (code points and user-visible characters) and normalize text so canonically equivalent sequences compare the same. We’ll use",e.jsx("code",{children:"for…of"}),", spread (",e.jsx("code",{children:"[...str]"}),"), ",e.jsx("code",{children:"Array.from"}),",",e.jsx("code",{children:"codePointAt"}),"/",e.jsx("code",{children:"fromCodePoint"}),", and",e.jsx("code",{children:"Intl.Segmenter"})," for grapheme clusters, plus",e.jsx("code",{children:"String.prototype.normalize"})," (",e.jsx("code",{children:"NFC"}),", ",e.jsx("code",{children:"NFD"}),", ",e.jsx("code",{children:"NFKC"}),", ",e.jsx("code",{children:"NFKD"}),")."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Iteration by code points:"})," ",e.jsx("code",{children:"for…of"})," and ",e.jsx("code",{children:"[...str]"})," step over full code points (surrogate pairs stay intact)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Grapheme clusters:"})," What users see as one character (e.g., family emoji, accented letters) may be multiple code points; segment with ",e.jsxs("code",{children:["Intl.Segmenter(…, ","{",' granularity: "grapheme" ',"}"," )"]}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Normalization:"})," ",e.jsx("code",{children:"NFC"})," (composed) vs ",e.jsx("code",{children:"NFD"})," (decomposed); ",e.jsx("code",{children:"NFKC"}),"/",e.jsx("code",{children:"NFKD"})," also fold compatibility characters (e.g., “①” → “1”)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"APIs:"})," ",e.jsx("code",{children:"str.normalize(form)"}),", ",e.jsx("code",{children:"codePointAt"}),", ",e.jsx("code",{children:"String.fromCodePoint"}),", ",e.jsx("code",{children:"Array.from(str, mapFn)"}),"."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Iterate code points safely"}),e.jsx(s.Code,{children:`const s = "A😀B";
for (const ch of s) {
  console.log(ch);
}
/*
A
😀
B
*/

// Spread also iterates by code points
console.log([...s]); // ["A","😀","B"]`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Map to code point values (hex)"}),e.jsx(s.Code,{children:`const word = "Go🚀";
const hex = Array.from(word, ch => ch.codePointAt(0).toString(16));
console.log(hex.join(" ")); // "47 6f 1f680"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 3 — Rebuilding from code points"}),e.jsx(s.Code,{children:`const cps = [0x41, 0x1F600, 0x42]; // A, 😀, B
const rebuilt = String.fromCodePoint(...cps);
console.log(rebuilt); // "A😀B"`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 4 — Grapheme clusters with ",e.jsx("code",{children:"Intl.Segmenter"})]}),e.jsx(s.Code,{children:`const family = "👨‍👩‍👧‍👦"; // multiple code points joined by ZWJ
if (typeof Intl !== "undefined" && Intl.Segmenter) {
  const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  const clusters = [...seg.segment(family)].map(x => x.segment);
  console.log(clusters);      // ["👨‍👩‍👧‍👦"] (1 visible character)
  console.log(clusters.length); // 1
} else {
  console.log("Intl.Segmenter not available");
}`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Slice by grapheme clusters"}),e.jsx(s.Code,{children:`const text = "Hi 👋🏽, family: 👨‍👩‍👧‍👦!";
function sliceGraphemes(str, n) {
  if (!Intl.Segmenter) return [...str].slice(0, n).join(""); // fallback by code points
  const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  const clusters = [...seg.segment(str)].map(s => s.segment);
  return clusters.slice(0, n).join("");
}
console.log(sliceGraphemes(text, 5)); // e.g., "Hi 👋🏽" (emoji stays intact)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — NFC vs NFD equality"}),e.jsx(s.Code,{children:`const composed = "\\u00E9";     // "é" as single code point
const decomposed = "e\\u0301";  // "e" + COMBINING ACUTE
console.log(composed === decomposed); // false (different sequences)
console.log(composed.normalize("NFC") === decomposed.normalize("NFC")); // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Strip diacritics (accent removal)"}),e.jsx(s.Code,{children:`// NFD splits base letters and combining marks; then drop marks
const removeDiacritics = (str) =>
  str.normalize("NFD").replace(/\\p{M}+/gu, "");
console.log(removeDiacritics("naïvé résumé")); // "naive resume"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Normalized search"}),e.jsx(s.Code,{children:`function includesNormalized(haystack, needle, form = "NFC") {
  const H = haystack.normalize(form);
  const N = needle.normalize(form);
  return H.includes(N);
}
console.log(includesNormalized("café", "cafe\\u0301")); // true (after NFC)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Case-insensitive & accent-insensitive compare"}),e.jsx(s.Code,{children:`function equalLoose(a, b) {
  const strip = s => s.normalize("NFD").replace(/\\p{M}+/gu, "");
  return strip(a).toLocaleLowerCase() === strip(b).toLocaleLowerCase();
}
console.log(equalLoose("São Paulo", "sao paulo")); // true
console.log(equalLoose("Résumé", "resume"));       // true`})]})]}),q=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Logical operators: &&, ||, !"}),e.jsxs(s.Lead,{children:["We use logical operators for control flow and value selection. In JavaScript,",e.jsx("code",{children:"&&"})," and ",e.jsx("code",{children:"||"})," don’t force boolean results — they return one of the original operands after applying truthiness rules and short-circuiting. ",e.jsx("code",{children:"!"})," negates after converting with ToBoolean."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Truthiness:"})," falsy values are ",e.jsx("code",{children:"false"}),", ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:"-0"}),", ",e.jsx("code",{children:"0n"}),", ",e.jsx("code",{children:'""'}),", ",e.jsx("code",{children:"null"}),", ",e.jsx("code",{children:"undefined"}),", ",e.jsx("code",{children:"NaN"}),". Everything else is truthy."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"a && b"}),":"]})," if ",e.jsx("em",{children:"a"})," is falsy, returns ",e.jsx("em",{children:"a"}),"; otherwise returns ",e.jsx("em",{children:"b"}),". Evaluates ",e.jsx("em",{children:"b"})," only when ",e.jsx("em",{children:"a"})," is truthy (short-circuit)."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"a || b"}),":"]})," if ",e.jsx("em",{children:"a"})," is truthy, returns ",e.jsx("em",{children:"a"}),"; otherwise returns ",e.jsx("em",{children:"b"}),". Evaluates ",e.jsx("em",{children:"b"})," only when ",e.jsx("em",{children:"a"})," is falsy."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"!a"}),":"]})," converts ",e.jsx("em",{children:"a"})," to boolean and negates it; ",e.jsx("code",{children:"!!a"})," is a common boolean cast."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Precedence:"})," ",e.jsx("code",{children:"!"})," > ",e.jsx("code",{children:"&&"})," > ",e.jsx("code",{children:"||"}),". Use parentheses to make intent clear."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Basic behavior & returned operand"}),e.jsx(s.Code,{children:`console.log(true && "ok");    // "ok"   (first truthy -> returns second)
console.log(false && "ok");   // false  (first falsy -> returns first)
console.log("hi" || "bye");   // "hi"   (first truthy -> returns first)
console.log("" || "fallback"); // "fallback" (first falsy -> returns second)

console.log(!0);              // true
console.log(!!"text");        // true`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Short-circuit evaluation order"}),e.jsx(s.Code,{children:`const L = (v) => (console.log("L"), v);
const R = (v) => (console.log("R"), v);

console.log(L(true) && R("go"));
/*
L
R
"go"
*/

console.log(L(false) && R("nope"));
/*
L
false     // R never runs
*/

console.log(L("") || R("fallback"));
/*
L
R
"fallback"
*/`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 3 — Conditional execution with ",e.jsx("code",{children:"&&"})]}),e.jsx(s.Code,{children:`const isLoggedIn = true;
isLoggedIn && console.log("Show dashboard"); // prints

const hasToken = "";
hasToken && console.log("This won't print"); // "" is falsy`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 4 — Defaulting with ",e.jsx("code",{children:"||"})," (falsy pitfall)"]}),e.jsx(s.Code,{children:`const page = 0;
const p1 = page || 1;
console.log(p1); // 1 (0 is falsy, so || falls back)

// If 0 or "" are valid values, || may be wrong.
// We'll see nullish coalescing (??) next, which treats only null/undefined as empty.`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Chaining"}),e.jsx(s.Code,{children:`// && returns the first falsy, else the last
console.log(1 && "a" && 0 && "b"); // 0
console.log("x" && 5 && true);     // true

// || returns the first truthy, else the last
console.log(null || 0 || "" || "go" || "stop"); // "go"
console.log(undefined || 0 || "");              // ""`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Precedence and parentheses"}),e.jsx(s.Code,{children:`const A = false, B = true, C = true;

console.log(A || B && C);     // true  (&& first -> A || (B && C))
console.log((A || B) && C);   // true  (here also true, but grouping differs)

console.log(!A && B);         // true  (! before &&)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Pattern: safe property access (pre-optional chaining)"}),e.jsx(s.Code,{children:`const obj = { user: { name: "Ada" } };

const name =
  obj && obj.user && obj.user.name || "Anonymous";
console.log(name); // "Ada"

// If obj.user.name were "", || would pick "Anonymous" (falsy pitfall).`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Combining with functions"}),e.jsx(s.Code,{children:`function getUser() { return { name: "Lin" }; }
function fallbackUser() { return { name: "Guest" }; }

const user = getUser() || fallbackUser(); // fallbackUser runs only if getUser() returns a falsy value
console.log(user.name); // "Lin"

const debug = false;
debug && console.log("Only logs when debug is truthy");`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 9 — Coercion with ",e.jsx("code",{children:"!"})," and ",e.jsx("code",{children:"!!"})]}),e.jsx(s.Code,{children:`console.log(![]);        // false  ([] is truthy)
console.log(!!0);        // false
console.log(!!"0");      // true
console.log(!!null);     // false
console.log(!!{ });      // true`})]})]}),_=()=>e.jsxs(s.Page,{children:[e.jsxs(s.H1,{children:["Nullish coalescing ",e.jsx("code",{children:"??"})]}),e.jsxs(s.Lead,{children:["We use ",e.jsx("code",{children:"a ?? b"})," to choose a default ",e.jsx("em",{children:"only"})," when ",e.jsx("code",{children:"a"})," is",e.jsx("strong",{children:" null or undefined"}),". Values like ",e.jsx("code",{children:"0"}),", ",e.jsx("code",{children:'""'}),", ",e.jsx("code",{children:"false"}),", ",e.jsx("code",{children:"NaN"}),", and ",e.jsx("code",{children:"0n"})," are treated as “present” and are returned as-is."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Rule:"})," ",e.jsx("code",{children:"a ?? b"})," returns ",e.jsx("code",{children:"a"})," if ",e.jsx("code",{children:"a"})," is not ",e.jsx("code",{children:"null"})," or ",e.jsx("code",{children:"undefined"}),"; otherwise returns ",e.jsx("code",{children:"b"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Short-circuit:"})," If ",e.jsx("code",{children:"a"})," is non-nullish, ",e.jsx("code",{children:"b"})," is not evaluated."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Precedence:"})," Same as ",e.jsx("code",{children:"||"}),". We must use parentheses when mixing with ",e.jsx("code",{children:"&&"})," or ",e.jsx("code",{children:"||"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Result type:"})," Returns one of the original operands (not forced to boolean)."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Basics"}),e.jsx(s.Code,{children:`console.log(null ?? "fallback");      // "fallback"
console.log(undefined ?? "fallback"); // "fallback"
console.log(0 ?? 42);                 // 0      (0 is not nullish)
console.log("" ?? "text");            // ""     (empty string kept)
console.log(false ?? true);           // false
console.log(NaN ?? 99);               // NaN    (still returned)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 2 — Short-circuit evaluation"}),e.jsx(s.Code,{children:`const left = 5;
const right = () => { console.log("evaluated"); return 10; };

console.log(left ?? right()); // 5
// "evaluated" is not printed because left is non-nullish

console.log(null ?? right());
// prints "evaluated"
// result: 10`})]}),e.jsxs(s.Section,{children:[e.jsxs(s.H3,{children:["Example 3 — Difference from ",e.jsx("code",{children:"||"})]}),e.jsx(s.Code,{children:`const page = 0;
console.log(page || 1); // 1   (|| treats 0 as falsy -> falls back)
console.log(page ?? 1); // 0   (?? keeps 0)

const name = "";
console.log(name || "Anonymous"); // "Anonymous"
console.log(name ?? "Anonymous"); // ""  (kept as provided)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 4 — With optional chaining"}),e.jsx(s.Code,{children:`const user = { settings: { theme: "dark" } };
const theme1 = user.settings?.theme ?? "light";
console.log(theme1); // "dark"

const user2 = {};
const theme2 = user2.settings?.theme ?? "light";
console.log(theme2); // "light" (settings is undefined)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 5 — Chaining defaults"}),e.jsx(s.Code,{children:`const a = null, b = undefined, c = 0, d = 7;
console.log(a ?? b ?? c ?? d); // 0 (first non-nullish wins)
console.log(a ?? b ?? d);      // 7`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 6 — Environment/config defaults"}),e.jsx(s.Code,{children:`// Keep 0 if explicitly provided, else default to 3000
const env = { PORT: 0, HOST: undefined };
const port = env.PORT ?? 3000;
const host = env.HOST ?? "127.0.0.1";
console.log({ port, host }); // { port: 0, host: "127.0.0.1" }`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 7 — Parentheses when mixing"}),e.jsx(s.Code,{children:`const A = null, B = "x", C = "y";

// ❌ SyntaxError if we try to mix without parentheses:
// A ?? B || C

// ✅ Use parentheses to be explicit:
console.log((A ?? B) || C); // "x"
console.log(A ?? (B || C)); // "x"`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 8 — Working with functions"}),e.jsx(s.Code,{children:`function greet(name) {
  const n = name ?? "(no name)";
  return \`Hello, \${n}!\`;
}
console.log(greet("Ada"));   // "Hello, Ada!"
console.log(greet(null));    // "Hello, (no name)!"
console.log(greet(""));      // "Hello, !" (empty string preserved)`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 9 — Arrays/objects with explicit empty values"}),e.jsx(s.Code,{children:`const list = [];
const map = {};

console.log(list ?? ["fallback"]); // []
console.log(map ?? { a: 1 });      // {}

// Beware: if you wanted to replace only when list is null/undefined, ?? is correct.
// If you wanted to replace when list is empty, check length instead:
console.log((list.length ? list : ["fallback"])); // ["fallback"]`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 10 — Interaction with numbers and NaN"}),e.jsx(s.Code,{children:`function toNumber(s) {
  const n = Number(s);
  // If parsing failed -> NaN (still non-nullish), so ?? won't swap it.
  // Fall back only when result is null/undefined, not when NaN.
  return n ?? 0;
}
console.log(toNumber("x")); // NaN
// If we want to handle NaN too, we must add an explicit check:
function toNumberSafe(s, fallback = 0) {
  const n = Number(s);
  return Number.isNaN(n) ? fallback : n;
}
console.log(toNumberSafe("x", 99)); // 99`})]})]}),$=()=>e.jsx(e.Fragment,{children:e.jsxs(i.Wrapper,{children:[e.jsxs("fieldset",{children:[e.jsx("legend",{children:"From Wikipedia, the free encyclopedia - last updated: Sep 15, 2025"}),e.jsx("p",{children:"JavaScript (JS) is a programming language and core technology of the web platform, alongside HTML and CSS. Ninety-nine percent of websites on the World Wide Web use JavaScript on the client side for webpage behavior."}),e.jsx("p",{children:"Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js[citation needed]."}),e.jsx("p",{children:"JavaScript is a high-level, often just-in-time-compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)."}),e.jsx("p",{children:"The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O."}),e.jsx("p",{children:"Although Java and JavaScript are similar in name and syntax, the two languages are distinct and differ greatly in design."})]}),e.jsx(t,{}),e.jsx(l,{}),e.jsx(r,{}),e.jsx(d,{}),e.jsx(c,{}),e.jsx(a,{}),e.jsx(h,{}),e.jsx(x,{}),e.jsx(j,{}),e.jsx(u,{}),e.jsx(m,{}),e.jsx(p,{}),e.jsx(g,{}),e.jsx(f,{}),e.jsx(b,{}),e.jsx(y,{}),e.jsx(S,{}),e.jsx(v,{}),e.jsx(w,{}),e.jsx(N,{}),e.jsx(E,{}),e.jsx(C,{}),e.jsx(H,{}),e.jsx(k,{}),e.jsx(I,{}),e.jsx(A,{}),e.jsx(O,{}),e.jsx(T,{}),e.jsx(F,{}),e.jsx(P,{}),e.jsx(M,{}),e.jsx(B,{}),e.jsx(L,{}),e.jsx(U,{}),e.jsx(D,{}),e.jsx(R,{}),e.jsx(J,{}),e.jsx(z,{}),e.jsx(q,{}),e.jsx(_,{})]})});export{$ as default};
