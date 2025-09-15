import{d as n,j as e}from"./index-D-LIWgri.js";const i={Wrapper:n.div`
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
        padding: 24px;
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
// 5`})]})]}),t=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Engine vs Runtime vs Host"}),e.jsxs(s.Lead,{children:["JavaScript runs inside an ",e.jsx("em",{children:"engine"})," that implements ECMAScript, inside a ",e.jsx("em",{children:"runtime"})," that wires scheduling and built-ins, embedded by a ",e.jsx("em",{children:"host"})," (browser, Node.js, etc.) that provides I/O and platform APIs."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition (bullet points)"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Engine"}),": Implements the ECMAScript language (parser, compiler/JIT, executor, GC). Examples: V8, SpiderMonkey, JavaScriptCore. It knows numbers, strings, objects, functions—",e.jsx("em",{children:"not"})," DOM, files, or network."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Runtime"}),": The execution environment around the engine: event loop, task/microtask queues, module loader, job scheduling, and a selection of globals. In browsers this is the “web runtime”; in Node.js it’s “Node runtime”."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Host"}),": The embedding application that provides platform capabilities and globals (e.g., ",e.jsx("code",{children:"document"}),", ",e.jsx("code",{children:"window"}),", timers, fetch, filesystem, process, console). Hosts define what I/O is possible and how modules are resolved."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boundary"}),": ECMAScript spec defines core language; host specs (WHATWG HTML/Web IDL; Node’s docs) define environment APIs and event loop details."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Portability"}),": Same JS code can run on different hosts, but availability/behavior of host APIs (DOM, FS, fetch, URL resolution) can differ by host and version."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Core language vs host globals"}),e.jsx(s.Code,{children:`// These are language-level:
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
// Both are ESM, but the host decides how specifiers are resolved and loaded.`})]})]}),l=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"What is JavaScript?"}),e.jsxs(s.Lead,{children:["A high-level, multi-paradigm programming language standardized as ECMAScript. It runs in many ",e.jsx("em",{children:"hosts"})," (browsers, Node.js) where the host provides I/O, timers, and platform APIs."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Language:"})," JavaScript is an ECMAScript-compliant language; the spec defines its syntax, types, and core behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Host-provided power:"})," JS itself has no I/O (no file/network/DOM). Browsers, Node.js, etc., supply APIs to interact with the outside world."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Execution:"})," JS engines (V8, SpiderMonkey, JavaScriptCore) parse/compile/execute code; hosts embed these engines."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Model:"})," Single-threaded run-to-completion semantics with an event loop that processes tasks/microtasks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Style:"})," Multi-paradigm - supports imperative, functional, and object-oriented patterns; functions are first-class values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Distribution:"})," In browsers it's the de-facto client-side language; in Node.js it powers servers, CLIs, tooling."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 - Core language vs host APIs"}),e.jsx(s.Code,{children:`// JavaScript core (language) gives you numbers, strings, objects, functions, etc.
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
console.log("OK"); // "OK"`})]})]}),m=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Script vs Module"}),e.jsxs(s.Lead,{children:["JavaScript can run as a classic ",e.jsx("em",{children:"script"})," or as an ES ",e.jsx("em",{children:"module"}),". Scripts are the old, global-oriented form; modules add import/export, strict semantics, scoped top-level, and better loading behavior."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Parsing/goal:"})," A ",e.jsx("em",{children:"script"})," uses the Script goal (classic); a ",e.jsx("em",{children:"module"})," uses the Module goal (ESM)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Strictness:"})," Scripts are ",e.jsx("em",{children:"sloppy"})," by default (unless ",e.jsx("code",{children:'"use strict"'}),"); modules are ",e.jsx("em",{children:"always strict"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Top-level scope:"})," Script top-level vars live in the global scope (and ",e.jsx("code",{children:"var"})," creates a global property). Module top-level is ",e.jsx("em",{children:"module-scoped"}),"(no global properties even for ",e.jsx("code",{children:"var"}),")."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Top-level ",e.jsx("code",{children:"this"}),":"]})," In scripts (sloppy) it’s the global object; in modules it’s ",e.jsx("code",{children:"undefined"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Imports/exports:"})," Only modules allow ",e.jsx("code",{children:"import"}),"/",e.jsx("code",{children:"export"})," syntax."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Loading in browsers:"})," ",e.jsx("code",{children:'<script type="module">'})," is ",e.jsx("em",{children:"deferred by default"}),", runs after parsing and after its dependency graph is fetched. Classic scripts run immediately unless marked ",e.jsx("code",{children:"defer"}),"/",e.jsx("code",{children:"async"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Top-level ",e.jsx("code",{children:"await"}),":"]})," Allowed in modules, not in classic scripts."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Singleton modules:"})," Each module URL is evaluated once and cached; multiple imports don’t re-run it."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Env notes:"})," In Node.js, ESM is enabled via ",e.jsx("code",{children:".mjs"})," or ",e.jsx("code",{children:'"type":"module"'})," in ",e.jsx("code",{children:"package.json"})," (CJS vs ESM interop is a later topic)."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Loading in the browser"}),e.jsx(s.Code,{children:`<!-- index.html -->
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
// (Full CJS vs ESM interop is covered in a later topic.)`})]})]}),p=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Module scope & live bindings"}),e.jsxs(s.Lead,{children:["ES modules have their own top-level scope (not global) and export"," ",e.jsx("em",{children:"live bindings"}),": imports are read-only views onto variables in the exporting module, so when the exporter’s variable changes, importers see the new value automatically."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Module scope:"})," Top-level ",e.jsx("code",{children:"var/let/const/function/class"})," in a module are",e.jsx("em",{children:"module-scoped"}),", not properties of ",e.jsx("code",{children:"globalThis"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Evaluation:"})," A module is evaluated exactly once per URL and then cached. All importers share that single instance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Live bindings:"})," ",e.jsx("em",{children:"Named exports"})," are bindings. Importers get a read-only view into the exporter’s current variable, updated after each change."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Read-only in importer:"})," You cannot reassign an imported binding in the importing module. Change must happen in the exporting module (e.g., via exported functions)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default export:"})," If done as ",e.jsxs("code",{children:["export ","{ x as default }"]})," or"," ",e.jsx("code",{children:"export default function …"}),", it’s a binding. With"," ",e.jsx("code",{children:"export default (expression)"}),", consumers get that value, not a reassignable binding."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cycles:"})," Circular dependencies work thanks to live bindings but can hit",e.jsx("em",{children:"temporal dead zone"})," if a module reads a binding before it’s initialized."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Module scope is not global"}),e.jsx(s.Code,{children:`// a.js (module)
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
// Liveness still holds: importers see the final binding value.`})]})]}),j=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Import/Export forms (default, named, namespace)"}),e.jsxs(s.Lead,{children:["ES modules let us expose values from one file and use them in another. We can export ",e.jsx("em",{children:"named"})," bindings, a single ",e.jsx("em",{children:"default"})," export, or re-group everything via a ",e.jsx("em",{children:"namespace"})," import. All imports are read-only views of the exporter’s live bindings."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Named exports:"})," Export one or more bindings by name and import with"," ",e.jsx("code",{children:"{ ... }"}),". You may rename with ",e.jsx("code",{children:"as"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default export:"})," At most one per module. Import it without braces; the importer chooses any local name. You can also re-export a module’s default under a name."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Namespace import:"})," ",e.jsx("code",{children:'import * as ns from "…"'})," gives a frozen namespace object whose properties reflect the module’s live exports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Re-exports:"})," ",e.jsx("code",{children:'export { name } from "…"'}),","," ",e.jsx("code",{children:'export * from "…"'}),", and ",e.jsx("code",{children:'export * as ns from "…"'})," forward exports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Side-effect import:"})," ",e.jsx("code",{children:'import "…"'})," only runs a module for its side effects; it imports nothing."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Top-level only:"})," ",e.jsx("code",{children:"import"}),"/",e.jsx("code",{children:"export"})," syntax must be at top level (not inside blocks/functions). Dynamic ",e.jsx("code",{children:"import()"})," is separate."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Read-only & live:"})," You cannot reassign an imported binding; updates must happen in the exporter. Importers observe the new values."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Named exports & imports"}),e.jsx(s.Code,{children:`// math.js
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
// if (needMath) { const { add } = await import("./math.js"); }`})]})]}),u=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Dynamic import()"}),e.jsxs(s.Lead,{children:[e.jsx("code",{children:"import()"})," is an expression that loads a module at runtime and returns a Promise that resolves to the module namespace object. It enables conditional loading, on-demand code, and parallel preloading. It works in both classic scripts and ES modules (top-level ",e.jsx("code",{children:"await"})," only in modules)."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Signature:"})," ",e.jsx("code",{children:"import(specifier)"})," returns a"," ",e.jsx("code",{children:"Promise<ModuleNamespace>"}),". The namespace exposes"," ","live bindings for the module’s exports."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Specifier:"})," usually a string (relative/absolute URL or bare specifier in supported environments). It can be any expression that evaluates to a string at runtime."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"When it runs:"})," Fetches, parses and evaluates the requested module (once per URL). Subsequent calls reuse the cached module instance."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Default vs named:"})," Access default via"," ",e.jsx("code",{children:"ns.default"}),"; named via ",e.jsx("code",{children:"ns.name"})," or destructuring."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Top-level ",e.jsx("code",{children:"await"}),":"]})," Allowed only inside modules. In classic scripts, use ",e.jsx("code",{children:".then"}),"/",e.jsx("code",{children:"catch"})," or an async IIFE."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Error handling:"})," Rejection on network/parse/evaluation failure. Use ",e.jsx("code",{children:"try/catch"})," with ",e.jsx("code",{children:"await"})," or"," ",e.jsx("code",{children:".catch()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Interop note:"})," Importing a CommonJS module (e.g., in Node) typically yields its ",e.jsx("code",{children:"module.exports"})," on ",e.jsx("code",{children:"default"}),"."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Basic usage"}),e.jsx(s.Code,{children:`// main.js (module)
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
// This is tooling-specific sugar; do not assume it in pure ESM/CJS without a bundler.`})]})]}),y=()=>e.jsx(e.Fragment,{children:e.jsxs(i.Wrapper,{children:[e.jsxs("fieldset",{children:[e.jsx("legend",{children:"From Wikipedia, the free encyclopedia - last updated: Sep 15, 2025"}),e.jsx("p",{children:"JavaScript (JS) is a programming language and core technology of the web platform, alongside HTML and CSS. Ninety-nine percent of websites on the World Wide Web use JavaScript on the client side for webpage behavior."}),e.jsx("p",{children:"Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js[citation needed]."}),e.jsx("p",{children:"JavaScript is a high-level, often just-in-time-compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)."}),e.jsx("p",{children:"The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O."}),e.jsx("p",{children:"Although Java and JavaScript are similar in name and syntax, the two languages are distinct and differ greatly in design."})]}),e.jsx(l,{}),e.jsx(t,{}),e.jsx(r,{}),e.jsx(d,{}),e.jsx(c,{}),e.jsx(a,{}),e.jsx(h,{}),e.jsx(x,{}),e.jsx(m,{}),e.jsx(p,{}),e.jsx(j,{}),e.jsx(u,{}),e.jsx(g,{}),e.jsx(f,{})]})});export{y as default};
