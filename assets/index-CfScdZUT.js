import{d as i,j as e}from"./index-CpLxF77b.js";const n={Wrapper:i.div`
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
    `},t="1px solid hsl(0 0% 100% / 0.12)",s={Page:i.article`
        padding: 24px;
    `,H1:i.h1`
        margin: 0 0 8px;
        font-size: clamp(20px, 3vw, 28px);
        line-height: 1.2;
    `,Lead:i.p`
        margin: 0 0 16px;
        opacity: 0.9;
        max-width: 920px;
    `,Section:i.section`
        border: ${t};
        border-radius: 14px;
        background: hsl(0 0% 100% / 0.03);
        padding: 14px 16px;
        margin: 18px 0;
    `,H3:i.h3`
        margin: 0 0 8px;
        font-size: 16px;
    `,UL:i.ul`
        margin: 0;
        padding-left: 20px;
        li {
            margin: 6px 0;
            max-width: 920px;
        }
    `,Code:i.pre`
        margin: 0;
        padding: 12px 14px;
        border-radius: 10px;
        border: ${t};
        background: hsl(0 0% 100% / 0.04);
        overflow: auto;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
            "Liberation Mono", monospace;
        font-size: 13px;
        line-height: 1.5;
        white-space: pre;
    `},o=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"Engine vs Runtime vs Host"}),e.jsxs(s.Lead,{children:["JavaScript runs inside an ",e.jsx("em",{children:"engine"})," that implements ECMAScript, inside a ",e.jsx("em",{children:"runtime"})," that wires scheduling and built-ins, embedded by a ",e.jsx("em",{children:"host"})," (browser, Node.js, etc.) that provides I/O and platform APIs."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition (bullet points)"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Engine"}),": Implements the ECMAScript language (parser, compiler/JIT, executor, GC). Examples: V8, SpiderMonkey, JavaScriptCore. It knows numbers, strings, objects, functions—",e.jsx("em",{children:"not"})," DOM, files, or network."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Runtime"}),": The execution environment around the engine: event loop, task/microtask queues, module loader, job scheduling, and a selection of globals. In browsers this is the “web runtime”; in Node.js it’s “Node runtime”."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Host"}),": The embedding application that provides platform capabilities and globals (e.g., ",e.jsx("code",{children:"document"}),", ",e.jsx("code",{children:"window"}),", timers, fetch, filesystem, process, console). Hosts define what I/O is possible and how modules are resolved."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Boundary"}),": ECMAScript spec defines core language; host specs (WHATWG HTML/Web IDL; Node’s docs) define environment APIs and event loop details."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Portability"}),": Same JS code can run on different hosts, but availability/behavior of host APIs (DOM, FS, fetch, URL resolution) can differ by host and version."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 — Core language vs host globals"}),e.jsx(s.Code,{children:`// These are language-level:
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
// Both are ESM, but the host decides how specifiers are resolved and loaded.`})]})]}),r=()=>e.jsxs(s.Page,{children:[e.jsx(s.H1,{children:"What is JavaScript?"}),e.jsxs(s.Lead,{children:["A high-level, multi-paradigm programming language standardized as ECMAScript. It runs in many ",e.jsx("em",{children:"hosts"})," (browsers, Node.js) where the host provides I/O, timers, and platform APIs."]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Definition"}),e.jsxs(s.UL,{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Language:"})," JavaScript is an ECMAScript-compliant language; the spec defines its syntax, types, and core behavior."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Host-provided power:"})," JS itself has no I/O (no file/network/DOM). Browsers, Node.js, etc., supply APIs to interact with the outside world."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Execution:"})," JS engines (V8, SpiderMonkey, JavaScriptCore) parse/compile/execute code; hosts embed these engines."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Model:"})," Single-threaded run-to-completion semantics with an event loop that processes tasks/microtasks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Style:"})," Multi-paradigm - supports imperative, functional, and object-oriented patterns; functions are first-class values."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Distribution:"})," In browsers it's the de-facto client-side language; in Node.js it powers servers, CLIs, tooling."]})]})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Example 1 - Core language vs host APIs"}),e.jsx(s.Code,{children:`// JavaScript core (language) gives you numbers, strings, objects, functions, etc.
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
`})]}),e.jsxs(s.Section,{children:[e.jsx(s.H3,{children:"Quick takeaways"}),e.jsxs(s.UL,{children:[e.jsx("li",{children:"ECMAScript defines the language; hosts define environment APIs."}),e.jsx("li",{children:"JS is single-threaded per execution context but highly concurrent via the event loop and async primitives."}),e.jsx("li",{children:"Use the right paradigm per problem: functional transforms, OO composition, or imperative steps."})]})]})]}),d=()=>e.jsx(e.Fragment,{children:e.jsxs(n.Wrapper,{children:[e.jsxs("fieldset",{children:[e.jsx("legend",{children:"From Wikipedia, the free encyclopedia - last updated: Sep 15, 2025"}),e.jsx("p",{children:"JavaScript (JS) is a programming language and core technology of the web platform, alongside HTML and CSS. Ninety-nine percent of websites on the World Wide Web use JavaScript on the client side for webpage behavior."}),e.jsx("p",{children:"Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js[citation needed]."}),e.jsx("p",{children:"JavaScript is a high-level, often just-in-time-compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)."}),e.jsx("p",{children:"The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O."}),e.jsx("p",{children:"Although Java and JavaScript are similar in name and syntax, the two languages are distinct and differ greatly in design."})]}),e.jsx(r,{}),e.jsx(o,{})]})});export{d as default};
