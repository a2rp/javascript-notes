// ScriptVsModule.jsx
import React from "react";
import { Styled } from "./styled";

const ScriptVsModule = () => {
    return (
        <Styled.Page>
            <Styled.H1>Script vs Module</Styled.H1>

            <Styled.Lead>
                JavaScript can run as a classic <em>script</em> or as an ES <em>module</em>.
                Scripts are the old, global-oriented form; modules add import/export,
                strict semantics, scoped top-level, and better loading behavior.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Parsing/goal:</strong> A <em>script</em> uses the Script goal (classic);
                        a <em>module</em> uses the Module goal (ESM).
                    </li>
                    <li>
                        <strong>Strictness:</strong> Scripts are <em>sloppy</em> by default (unless <code>"use strict"</code>);
                        modules are <em>always strict</em>.
                    </li>
                    <li>
                        <strong>Top-level scope:</strong> Script top-level vars live in the global scope
                        (and <code>var</code> creates a global property). Module top-level is <em>module-scoped</em>
                        (no global properties even for <code>var</code>).
                    </li>
                    <li>
                        <strong>Top-level <code>this</code>:</strong> In scripts (sloppy) it’s the global object; in modules it’s <code>undefined</code>.
                    </li>
                    <li>
                        <strong>Imports/exports:</strong> Only modules allow <code>import</code>/<code>export</code> syntax.
                    </li>
                    <li>
                        <strong>Loading in browsers:</strong> <code>&lt;script type="module"&gt;</code> is <em>deferred by default</em>, runs after parsing and after its dependency graph is fetched. Classic scripts run immediately unless marked <code>defer</code>/<code>async</code>.
                    </li>
                    <li>
                        <strong>Top-level <code>await</code>:</strong> Allowed in modules, not in classic scripts.
                    </li>
                    <li>
                        <strong>Singleton modules:</strong> Each module URL is evaluated once and cached; multiple imports don’t re-run it.
                    </li>
                    <li>
                        <strong>Env notes:</strong> In Node.js, ESM is enabled via <code>.mjs</code> or <code>"type":"module"</code> in <code>package.json</code> (CJS vs ESM interop is a later topic).
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Loading in the browser</Styled.H3>
                <Styled.Code>{`<!-- index.html -->
<!-- Classic script (runs immediately when encountered unless defer/async) -->
<script src="./classic.js"></script>

<!-- Module script (deferred by default; runs after parsing & after fetching deps) -->
<script type="module" src="./main.js"></script>

<!-- Inline module is also deferred relative to parsing -->
<script type="module">
  import { hello } from './lib.js';
  hello();
</script>`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Strictness & top-level <code>this</code></Styled.H3>
                <Styled.Code>{`// classic.js (script goal)
console.log(this === window); // true (sloppy mode)
"use strict";
console.log(this);            // undefined (strict inside script file after directive)

// main.js (module goal)
console.log(this);            // undefined (modules are always strict)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Top-level scope & globals</Styled.H3>
                <Styled.Code>{`// classic.js (script)
var a = 1;           // creates window.a
let b = 2;           // block-scoped; not a window property
console.log(window.a); // 1
console.log(window.b); // undefined

// main.js (module)
var x = 10;          // NOT added to globalThis in modules
let y = 20;
console.log(globalThis.x); // undefined
// x and y are module-scoped only`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Import/export only in modules</Styled.H3>
                <Styled.Code>{`// lib.js (module)
export const add = (a, b) => a + b;

// main.js (module)
import { add } from './lib.js';
console.log(add(2, 3)); // 5

// classic.js (script)
// import { add } from './lib.js'; // ❌ SyntaxError in script goal (no imports)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Top-level <code>await</code> (modules only)</Styled.H3>
                <Styled.Code>{`// main.js (module)
const res = await fetch('https://example.com/data.json');
const data = await res.json();
console.log(Array.isArray(data)); // e.g., true

// classic.js (script)
// const res = await fetch(...); // ❌ SyntaxError: await only valid in async functions (and top-level only in modules)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Evaluation once per module URL</Styled.H3>
                <Styled.Code>{`// counter.js (module)
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
// B sees 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Defer vs immediate execution</Styled.H3>
                <Styled.Code>{`<!-- index.html -->
<h1>Order demo</h1>
<script>
  console.log('classic inline before'); // runs immediately
</script>

<script src="./classic.js"></script>
<!-- classic.js runs here (unless you add defer/async) -->

<script type="module" src="./mod.js"></script>
<script type="module">
  console.log('inline module'); // runs after parsing & after mod.js and its deps are fetched
</script>

<script>
  console.log('classic inline after'); // runs immediately at this point in parsing
</script>

/* Possible console order (network timing aside):
classic inline before
// contents of classic.js
classic inline after
// then module graph executes:
// contents of mod.js
inline module
*/`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Small Node.js note (context only)</Styled.H3>
                <Styled.Code>{`// package.json
// { "type": "module" }  // makes .js files load as ESM in Node
// Alternatively, use .mjs for modules and .cjs for CommonJS.
// (Full CJS vs ESM interop is covered in a later topic.)`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default ScriptVsModule;
