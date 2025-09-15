// ModuleScopeAndLiveBindings.jsx
import React from "react";
import { Styled } from "./styled";

const ModuleScopeAndLiveBindings = () => {
    return (
        <Styled.Page>
            <Styled.H1>Module scope &amp; live bindings</Styled.H1>

            <Styled.Lead>
                ES modules have their own top-level scope (not global) and export{" "}
                <em>live bindings</em>: imports are read-only views onto variables in the
                exporting module, so when the exporter’s variable changes, importers see the
                new value automatically.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Module scope:</strong> Top-level <code>var/let/const/function/class</code> in a module are
                        <em>module-scoped</em>, not properties of <code>globalThis</code>.
                    </li>
                    <li>
                        <strong>Evaluation:</strong> A module is evaluated exactly once per URL and then cached. All
                        importers share that single instance.
                    </li>
                    <li>
                        <strong>Live bindings:</strong> <em>Named exports</em> are bindings. Importers get a read-only view
                        into the exporter’s current variable, updated after each change.
                    </li>
                    <li>
                        <strong>Read-only in importer:</strong> You cannot reassign an imported binding in the importing
                        module. Change must happen in the exporting module (e.g., via exported functions).
                    </li>
                    <li>
                        <strong>Default export:</strong> If done as <code>export {"{ x as default }"}</code> or{" "}
                        <code>export default function …</code>, it’s a binding. With{" "}
                        <code>export default (expression)</code>, consumers get that value, not a
                        reassignable binding.
                    </li>
                    <li>
                        <strong>Cycles:</strong> Circular dependencies work thanks to live bindings but can hit
                        <em>temporal dead zone</em> if a module reads a binding before it’s initialized.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Module scope is not global</Styled.H3>
                <Styled.Code>{`// a.js (module)
var a = 1;
let b = 2;
const c = 3;
console.log(globalThis.a); // undefined (even for var in modules)

// Output:
// undefined`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Basic live binding</Styled.H3>
                <Styled.Code>{`// counter.js (module)
export let n = 0;
export function inc() { n += 1; }

// app.js (module)
import { n, inc } from "./counter.js";
console.log(n); // 0
inc();
console.log(n); // 1  ← importer sees updated value automatically

// Output:
// 0
// 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Import is read-only in importer</Styled.H3>
                <Styled.Code>{`// app.js (module)
import { n } from "./counter.js";
// n = 5; // ❌ SyntaxError: Cannot assign to import 'n'

// Correct approach: call an exported mutator or re-export a setter:
import { inc } from "./counter.js";
inc(); // OK`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Namespace import also reflects updates</Styled.H3>
                <Styled.Code>{`// app.js (module)
import * as Counter from "./counter.js";
console.log(Counter.n); // 1 (assuming a prior inc)
Counter.inc();
console.log(Counter.n); // 2

// Output:
// 1
// 2`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Objects vs rebinding</Styled.H3>
                <Styled.Code>{`// store.js
export const state = { count: 0 };
export function bump() { state.count++; }

// app.js
import { state, bump } from "./store.js";
console.log(state.count); // 0
bump();
console.log(state.count); // 1

// Trying to rebind in importer is illegal:
// state = { count: 999 }; // ❌ SyntaxError
// But mutating the object inside the exporter (via bump) is visible to importers.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Re-exports preserve liveness</Styled.H3>
                <Styled.Code>{`// source.js
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
// 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Default export nuances</Styled.H3>
                <Styled.Code>{`// mode A: default is a binding (via alias)
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
// console.log(val); // 42 (a value, not a changing binding)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Single evaluation shared by all importers</Styled.H3>
                <Styled.Code>{`// once.js
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
// B: 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Cycles & temporal dead zone</Styled.H3>
                <Styled.Code>{`// a.js
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
// move reads into functions or after both sides initialize.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Top-level await and liveness</Styled.H3>
                <Styled.Code>{`// config.js (module with TLA)
export let config = { ready: false };
const res = await fetch("/config.json");
config = await res.json();          // rebinds the exported binding
// Importers will observe the updated binding after this module finishes evaluating.

// app.js
import { config } from "./config.js";
console.log(config.ready ?? false); // by the time this runs, config is resolved

// Note: in many bundlers/environments, TLA in one module can delay the whole graph.
// Liveness still holds: importers see the final binding value.`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default ModuleScopeAndLiveBindings;
