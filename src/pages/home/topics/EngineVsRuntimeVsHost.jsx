import React from "react";
import { Styled } from "./styled";

const EngineVsRuntimeVsHost = () => {
    return (
        <Styled.Page>
            <Styled.H1>Engine vs Runtime vs Host</Styled.H1>
            <Styled.Lead>
                JavaScript runs inside an <em>engine</em> that implements ECMAScript, inside a <em>runtime</em> that wires scheduling and built-ins,
                embedded by a <em>host</em> (browser, Node.js, etc.) that provides I/O and platform APIs.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition (bullet points)</Styled.H3>
                <Styled.UL>
                    <li><strong>Engine</strong>: Implements the ECMAScript language (parser, compiler/JIT, executor, GC). Examples: V8, SpiderMonkey, JavaScriptCore. It knows numbers, strings, objects, functions—<em>not</em> DOM, files, or network.</li>
                    <li><strong>Runtime</strong>: The execution environment around the engine: event loop, task/microtask queues, module loader, job scheduling, and a selection of globals. In browsers this is the “web runtime”; in Node.js it’s “Node runtime”.</li>
                    <li><strong>Host</strong>: The embedding application that provides platform capabilities and globals (e.g., <code>document</code>, <code>window</code>, timers, fetch, filesystem, process, console). Hosts define what I/O is possible and how modules are resolved.</li>
                    <li><strong>Boundary</strong>: ECMAScript spec defines core language; host specs (WHATWG HTML/Web IDL; Node’s docs) define environment APIs and event loop details.</li>
                    <li><strong>Portability</strong>: Same JS code can run on different hosts, but availability/behavior of host APIs (DOM, FS, fetch, URL resolution) can differ by host and version.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Core language vs host globals</Styled.H3>
                <Styled.Code>{`// These are language-level:
typeof 42;          // "number"
typeof (() => {});  // "function"
typeof Symbol();    // "symbol"

// These depend on the host:
typeof document;    // "object"   (browser)
                    // "undefined" (Node.js)

typeof process;     // "undefined" (browser)
                    // "object"    (Node.js)

// Output depends on where you run it (host determines availability).`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — No I/O in the engine itself</Styled.H3>
                <Styled.Code>{`// ECMAScript doesn't define file/network/DOM.
// File read is host-specific (Node.js example):
// const data = require('fs').readFileSync('notes.txt', 'utf8'); // Node.js only

// In a browser, you'd use fetch (host API) and DOM:
// fetch('/notes.txt').then(r => r.text()).then(t => console.log(t)); // Browser host

// Output:
// Node.js: reads from filesystem (if allowed).
// Browser: fetches over HTTP(s).
// Pure engine (no host): neither API exists.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Event loop ownership (tasks vs microtasks)</Styled.H3>
                <Styled.Code>{`console.log("A");

setTimeout(() => console.log("C (timer task)"), 0);   // task (host scheduling)
Promise.resolve().then(() => console.log("B (microtask)")); // microtask (engine job queue surfaced by host)

console.log("D");

// Typical output order (both browser and Node.js):
// A
// D
// B (microtask)
// C (timer task)

// Note: The host integrates the engine's job queue (microtasks) with its task scheduler.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Global object differences (unified via <code>globalThis</code>)</Styled.H3>
                <Styled.Code>{`// Browser:
typeof window;               // "object"
globalThis === window;       // true

// Node.js:
typeof global;               // "object"
globalThis === global;       // true

// Output:
// In each host, globalThis points to that host's global object.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Module loading differs by host</Styled.H3>
                <Styled.Code>{`// Browser ESM (URL-based, usually with file extensions):
// <script type="module" src="/app.js"></script>
// import utils from "/utils.js";

// Node.js ESM (specifier resolution + package "type"/"exports"):
// // package.json: { "type": "module" }
// import utils from "./utils.js";      // file URL-like
// import _ from "lodash";              // resolves via Node rules

// Output:
// Both are ESM, but the host decides how specifiers are resolved and loaded.`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default EngineVsRuntimeVsHost;
