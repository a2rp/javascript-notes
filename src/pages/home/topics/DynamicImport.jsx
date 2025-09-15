// DynamicImport.jsx
import React from "react";
import { Styled } from "./styled";

const DynamicImport = () => {
    return (
        <Styled.Page>
            <Styled.H1>Dynamic import()</Styled.H1>

            <Styled.Lead>
                <code>import()</code> is an expression that loads a module at runtime and
                returns a Promise that resolves to the module namespace object. It enables
                conditional loading, on-demand code, and parallel preloading. It works in
                both classic scripts and ES modules (top-level <code>await</code> only in modules).
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Signature:</strong> <code>import(specifier)</code> returns a{" "}
                        <code>Promise&lt;ModuleNamespace&gt;</code>. The namespace exposes{" "}
                        live bindings for the module’s exports.
                    </li>
                    <li>
                        <strong>Specifier:</strong> usually a string (relative/absolute URL or
                        bare specifier in supported environments). It can be any expression that
                        evaluates to a string at runtime.
                    </li>
                    <li>
                        <strong>When it runs:</strong> Fetches, parses and evaluates the
                        requested module (once per URL). Subsequent calls reuse the cached
                        module instance.
                    </li>
                    <li>
                        <strong>Default vs named:</strong> Access default via{" "}
                        <code>ns.default</code>; named via <code>ns.name</code> or destructuring.
                    </li>
                    <li>
                        <strong>Top-level <code>await</code>:</strong> Allowed only inside modules.
                        In classic scripts, use <code>.then</code>/<code>catch</code> or an async IIFE.
                    </li>
                    <li>
                        <strong>Error handling:</strong> Rejection on network/parse/evaluation
                        failure. Use <code>try/catch</code> with <code>await</code> or{" "}
                        <code>.catch()</code>.
                    </li>
                    <li>
                        <strong>Interop note:</strong> Importing a CommonJS module (e.g., in Node)
                        typically yields its <code>module.exports</code> on <code>default</code>.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Basic usage</Styled.H3>
                <Styled.Code>{`// main.js (module)
const ns = await import('./math.js');
console.log(typeof ns.add, typeof ns.mul); // "function" "function"

const { add } = await import('./math.js'); // destructure from namespace
console.log(add(2, 3)); // 5`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Default export via <code>ns.default</code></Styled.H3>
                <Styled.Code>{`// greeter.js
export default function greet(name){ return \`Hi, \${name}\`; }

// main.js (module)
const mod = await import('./greeter.js');
console.log(mod.default('Ada')); // "Hi, Ada"

// Or with destructuring:
const { default: greet } = await import('./greeter.js');
console.log(greet('Lin')); // "Hi, Lin"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Conditional loading (feature flag)</Styled.H3>
                <Styled.Code>{`// main.js (module)
const heavy = Math.random() > 0.5 ? './charts.js' : './table.js';
const ui = await import(heavy);
ui.render(); // calls whichever module's render()

// Output (example):
// "rendering charts..."  OR  "rendering table..."`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — In classic script (no top-level await)</Styled.H3>
                <Styled.Code>{`<!-- index.html -->
<script>
  import('./math.js')
    .then(ns => {
      console.log(ns.add(1, 2)); // 3
    })
    .catch(err => {
      console.error('Failed to load', err);
    });
</script>`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Parallel loading</Styled.H3>
                <Styled.Code>{`// main.js (module)
const [math, util] = await Promise.all([
  import('./math.js'),
  import('./util.js')
]);
console.log(math.add(1, 2), util.capitalize('ash')); // 3 "Ash"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Error handling with <code>try/catch</code></Styled.H3>
                <Styled.Code>{`// main.js (module)
try {
  const ns = await import('./missing-or-bad.js');
  ns.run();
} catch (e) {
  console.log('Load failed:', e.constructor.name); 
  // Output example: "Load failed: TypeError" (environment-dependent)
}`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Event-driven lazy load (on demand)</Styled.H3>
                <Styled.Code>{`// main.js (module)
document.getElementById('open-chart').addEventListener('click', async () => {
  const { renderChart } = await import('./charts.js');
  renderChart(); // loaded only when needed
});`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Mapping names to modules safely</Styled.H3>
                <Styled.Code>{`// main.js (module)
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

await loadPage('home'); // renders home page`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — URL resolution with <code>import.meta.url</code></Styled.H3>
                <Styled.Code>{`// utils/loader.js (module)
const mod = await import(new URL('./math.js', import.meta.url));
console.log(mod.add(4, 5)); // 9

// Useful when constructing absolute URLs relative to the current module file.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Single evaluation & caching</Styled.H3>
                <Styled.Code>{`// once.js
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
// 1 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 — Node interop (CommonJS via <code>default</code>)</Styled.H3>
                <Styled.Code>{`// In Node.js, importing a CJS module:
const { default: cjs } = await import('./legacy.cjs');
console.log(typeof cjs); // depends on what module.exports was
// Named exports are not synthesized from CJS; use default.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 12 — Fallback load (progressive enhancement)</Styled.H3>
                <Styled.Code>{`// main.js (module)
let engine;
try {
  engine = await import('./fast-engine.js');     // try modern impl
} catch {
  engine = await import('./compat-engine.js');   // fallback
}
engine.run();`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default DynamicImport;
