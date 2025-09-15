// CjsVsEsmInterop.jsx
import React from "react";
import { Styled } from "./styled";

const CjsVsEsmInterop = () => {
    return (
        <Styled.Page>
            <Styled.H1>CJS vs ESM interop (concepts)</Styled.H1>

            <Styled.Lead>
                Node.js supports both CommonJS (CJS) and ES Modules (ESM). Interop rules
                decide how one side loads the other, how <code>default</code>/named exports
                appear, and what features are available in each format.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Module types:</strong> <em>CommonJS</em> uses <code>require</code>,{" "}
                        <code>module.exports</code>. <em>ESM</em> uses <code>import</code>/<code>export</code>,{" "}
                        file-based live bindings, and top-level <code>await</code>.
                    </li>
                    <li>
                        <strong>How Node picks mode:</strong> <code>.cjs</code> → CJS; <code>.mjs</code> → ESM.{" "}
                        <code>.js</code> follows <code>package.json</code>’s <code>"type"</code> (<code>"commonjs"</code> default,{" "}
                        <code>"module"</code> for ESM).
                    </li>
                    <li>
                        <strong>CJS → ESM:</strong> You <em>cannot</em> <code>require()</code> an ES module. Use{" "}
                        <code>import()</code> (dynamic import) from CJS to load ESM asynchronously.
                    </li>
                    <li>
                        <strong>ESM → CJS:</strong> You <em>can</em> <code>import</code> a CJS module. The CJS{" "}
                        <code>module.exports</code> value appears on the ESM side as the{" "}
                        <code>default</code> export (named exports are not spec-guaranteed).
                    </li>
                    <li>
                        <strong>JSON:</strong> CJS can <code>require()</code> JSON directly. ESM imports JSON with{" "}
                        <code>assert &#123; type: "json" &#125;</code> (modern Node).
                    </li>
                    <li>
                        <strong>Paths & meta:</strong> CJS has <code>__filename</code>, <code>__dirname</code>. ESM uses{" "}
                        <code>import.meta.url</code> (convert via <code>fileURLToPath</code>).
                    </li>
                    <li>
                        <strong>Dual packages:</strong> Publish both forms using conditional exports so each ecosystem
                        gets native format without brittle interop shims.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Choosing CJS vs ESM via file/packaging</Styled.H3>
                <Styled.Code>{`// package.json (ESM-by-default in this package)
{
  "type": "module"
}
// index.js -> treated as ESM
// index.cjs -> always CJS
// index.mjs -> always ESM

// Without "type":"module", .js defaults to CJS.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Importing CJS from ESM (use <code>default</code>)</Styled.H3>
                <Styled.Code>{`// common.cjs  (CJS)
module.exports = {
  add(a,b){ return a+b; },
  version: "1.0.0"
};

// main.mjs (ESM)
import cjs from "./common.cjs";    // cjs === module.exports
console.log(cjs.add(2,3));         // 5
console.log(cjs.version);          // "1.0.0"

// ❌ Not guaranteed (avoid):
// import { add } from "./common.cjs"; // may throw or be undefined in pure ESM semantics`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Loading ESM from CJS (use dynamic <code>import()</code>)</Styled.H3>
                <Styled.Code>{`// lib.mjs (ESM)
export const x = 42;
export default function greet(n){ return "Hi, " + n; }

// app.cjs (CJS)
(async () => {
  const mod = await import("./lib.mjs"); // Promise -> ESM namespace
  console.log(mod.x);            // 42
  console.log(mod.default("Ada"));// "Hi, Ada"
})();

// ❌ This fails:
// const lib = require("./lib.mjs"); // Error: Must use import to load ES Module`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Default vs named shapes across the boundary</Styled.H3>
                <Styled.Code>{`// CJS exporting a function directly:
module.exports = function add(a,b){ return a+b; };

// ESM side:
import add from "./add.cjs";
console.log(add(1,2)); // 3

// CJS exporting an object of functions:
module.exports = { add(a,b){return a+b;}, sub(a,b){return a-b;} };

// ESM side:
import ops from "./ops.cjs";
const { add, sub } = ops;    // destructure from default
console.log(add(4,1), sub(4,1)); // 3 3`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — JSON interop</Styled.H3>
                <Styled.Code>{`// data.json
{ "name": "demo", "n": 7 }

// CJS:
const data = require("./data.json");
console.log(data.n); // 7

// ESM:
import data2 from "./data.json" assert { type: "json" };
console.log(data2.name); // "demo"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — __dirname/__filename (CJS) vs import.meta.url (ESM)</Styled.H3>
                <Styled.Code>{`// CJS:
console.log(__filename.endsWith(".cjs")); // true
console.log(__dirname.includes("/"));     // true (platform-dependent)

// ESM:
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);
console.log(__filename.endsWith(".mjs")); // true
console.log(!!__dirname);                 // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Top-level await only in ESM (CJS must async)</Styled.H3>
                <Styled.Code>{`// fetcher.mjs (ESM)
export const txt = await Promise.resolve("ready");

// cjs-app.cjs (CJS)
(async () => {
  const { txt } = await import("./fetcher.mjs");
  console.log(txt); // "ready"
})();`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Dual package via conditional exports</Styled.H3>
                <Styled.Code>{`// package.json (publish both ESM and CJS builds)
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
// const { fn } = require("mypkg");`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Avoid brittle interop assumptions</Styled.H3>
                <Styled.Code>{`// ❌ Don't rely on 'named' imports from CJS:
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
})();`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Note on transpiler interop (<code>__esModule</code>)</Styled.H3>
                <Styled.Code>{`// Some bundlers/transpilers emit '__esModule' and put the ESM default at .default:
// CJS:
const mod = require("./built-esm.js");
console.log(!!mod.__esModule, typeof mod.default); // true, "function" (typical)
// This is tooling-specific sugar; do not assume it in pure ESM/CJS without a bundler.`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default CjsVsEsmInterop;
