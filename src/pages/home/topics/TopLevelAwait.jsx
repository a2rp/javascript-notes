// TopLevelAwait.jsx
import React from "react";
import { Styled } from "./styled";

const TopLevelAwait = () => {
    return (
        <Styled.Page>
            <Styled.H1>Top-level <code>await</code></Styled.H1>

            <Styled.Lead>
                Top-level <code>await</code> (TLA) lets modules pause their own evaluation while
                awaiting a Promise. Importers automatically wait until the awaited work
                completes. This is allowed only in ES <em>modules</em> (not classic scripts or CJS).
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Where allowed:</strong> Only in ES modules (including worker modules).
                        Classic scripts and CommonJS do not support TLA.
                    </li>
                    <li>
                        <strong>Semantics:</strong> When a module hits <code>await</code> at top level,
                        its evaluation is suspended; any module that imports it waits until it resumes and finishes.
                    </li>
                    <li>
                        <strong>Graph effect:</strong> One module's TLA can delay the whole dependency graph
                        downstream. Prefer parallelization to avoid waterfalls.
                    </li>
                    <li>
                        <strong>Error propagation:</strong> If a top-level <code>await</code> rejects and you don't handle it,
                        the module's evaluation fails and static <code>import</code> of that module throws during load.
                    </li>
                    <li>
                        <strong>Handling errors:</strong> Catch inside the module (with <code>try/catch</code>) or
                        load via <code>import()</code> and handle the returned Promise.
                    </li>
                    <li>
                        <strong>Lives with live bindings:</strong> Exports updated after TLA settle are visible to importers (live bindings).
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Basic TLA in a browser module</Styled.H3>
                <Styled.Code>{`<!-- index.html -->
<script type="module" src="./main.js"></script>

// main.js (module)
const res = await fetch("/data.json");
const data = await res.json();
console.log(Array.isArray(data)); // e.g., true

// Output:
// true (after the network completes)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Importers automatically wait</Styled.H3>
                <Styled.Code>{`// config.js (module)
export let config = { ready: false };
const res = await fetch("/config.json");
config = await res.json();         // rebind export after await

// app.js (module)
import { config } from "./config.js";
console.log(!!config.ready); // true (by the time this runs, config resolved)

// Output:
// true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Avoiding waterfalls with parallel awaits</Styled.H3>
                <Styled.Code>{`// slow (serial):
const a = await fetch("/a.json").then(r => r.json());
const b = await fetch("/b.json").then(r => r.json());

// faster (parallel):
const [a2, b2] = await Promise.all([
  fetch("/a.json").then(r => r.json()),
  fetch("/b.json").then(r => r.json())
]);

console.log(!!a2 && !!b2); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — TLA across module boundaries</Styled.H3>
                <Styled.Code>{`// userService.js (module)
export const users = await fetch("/api/users").then(r => r.json());

// app.js (module)
import { users } from "./userService.js";
console.log(Array.isArray(users)); // true

// Output:
// true (app waits until userService finishes)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Handling errors inside the module</Styled.H3>
                <Styled.Code>{`// settings.js (module)
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
console.log(settings.theme); // "dark" or value from JSON`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Catching load failures via <code>import()</code></Styled.H3>
                <Styled.Code>{`// main.js (module)
try {
  const mod = await import("./might-fail.js"); // TLA inside might reject
  mod.run();
} catch (e) {
  console.error("Module load failed:", e.constructor.name);
}
// Output example:
// Module load failed: TypeError`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Node.js (ESM) with <code>fs/promises</code></Styled.H3>
                <Styled.Code>{`// package.json
// { "type": "module" }

/// config.mjs (or .js under "type":"module")
import { readFile } from "node:fs/promises";
export const config = JSON.parse(
  await readFile(new URL("./config.json", import.meta.url), "utf8")
);

// app.mjs
import { config } from "./config.mjs";
console.log(!!config); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Classic script: no TLA (use an async IIFE)</Styled.H3>
                <Styled.Code>{`<!-- index.html -->
<script>
  (async () => {
    const ns = await import("./math.js"); // dynamic import returns a Promise
    console.log(ns.add(2, 3)); // 5
  })();
</script>`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Top-level <code>for await...of</code> in a module</Styled.H3>
                <Styled.Code>{`// stream.js (module)
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
console.log(sum); // 6 (after the async loop completes)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Don't create dependency deadlocks</Styled.H3>
                <Styled.Code>{`// a.js
import "./b.js";
await new Promise(r => setTimeout(r, 100));
// export something...

// b.js
import "./a.js";
await new Promise(r => setTimeout(r, 100));

// Depending on loader order, circular awaits can deadlock or stall the graph.
// Avoid circular dependencies that both block on top-level awaits.`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default TopLevelAwait;
