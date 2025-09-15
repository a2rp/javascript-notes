// ImportExportForms.jsx
import React from "react";
import { Styled } from "./styled";

const ImportExportForms = () => {
    return (
        <Styled.Page>
            <Styled.H1>Import/Export forms (default, named, namespace)</Styled.H1>

            <Styled.Lead>
                ES modules let us expose values from one file and use them in another.
                We can export <em>named</em> bindings, a single <em>default</em> export, or
                re-group everything via a <em>namespace</em> import. All imports are read-only
                views of the exporter’s live bindings.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Named exports:</strong> Export one or more bindings by name and import with{" "}
                        <code>{"{ ... }"}</code>. You may rename with <code>as</code>.
                    </li>
                    <li>
                        <strong>Default export:</strong> At most one per module. Import it without braces; the
                        importer chooses any local name. You can also re-export a module’s default under a name.
                    </li>
                    <li>
                        <strong>Namespace import:</strong> <code>import * as ns from "…"</code> gives a frozen
                        namespace object whose properties reflect the module’s live exports.
                    </li>
                    <li>
                        <strong>Re-exports:</strong> <code>export &#123; name &#125; from "…"</code>,{" "}
                        <code>export * from "…"</code>, and <code>export * as ns from "…"</code> forward exports.
                    </li>
                    <li>
                        <strong>Side-effect import:</strong> <code>import "…"</code> only runs a module for its
                        side effects; it imports nothing.
                    </li>
                    <li>
                        <strong>Top-level only:</strong> <code>import</code>/<code>export</code> syntax must be at
                        top level (not inside blocks/functions). Dynamic <code>import()</code> is separate.
                    </li>
                    <li>
                        <strong>Read-only &amp; live:</strong> You cannot reassign an imported binding; updates must
                        happen in the exporter. Importers observe the new values.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Named exports &amp; imports</Styled.H3>
                <Styled.Code>{`// math.js
export const add = (a, b) => a + b;
export const mul = (a, b) => a * b;

// app.js (module)
import { add, mul } from "./math.js";
console.log(add(2, 3)); // 5
console.log(mul(2, 3)); // 6`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Default export &amp; default import</Styled.H3>
                <Styled.Code>{`// greeter.js
export default function greet(name) {
  return "Hi, " + name;
}

// app.js
import greet from "./greeter.js";  // any local name works
console.log(greet("Ada")); // "Hi, Ada"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Namespace import</Styled.H3>
                <Styled.Code>{`// counter.js
export let n = 0;
export function inc() { n += 1; }

// app.js
import * as Counter from "./counter.js";
console.log(Counter.n); // 0
Counter.inc();
console.log(Counter.n); // 1
// Counter.n = 42; // ❌ TypeError in strict mode (read-only view)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Mixed: default + named</Styled.H3>
                <Styled.Code>{`// user.js
export default class User { constructor(name){ this.name = name; } }
export const VERSION = "1.0.0";

// app.js
import User, { VERSION } from "./user.js";
console.log(new User("Ash").name); // "Ash"
console.log(VERSION);              // "1.0.0"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Renaming with <code>as</code> (both sides)</Styled.H3>
                <Styled.Code>{`// lib.js
const internalAdd = (a, b) => a + b;
export { internalAdd as add };     // rename when exporting

// app.js
import { add as sum } from "./lib.js"; // rename when importing
console.log(sum(4, 5)); // 9`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Re-exports (forwarding)</Styled.H3>
                <Styled.Code>{`// math.js
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
console.log(Object.keys(extra).length >= 0); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Side-effect-only import</Styled.H3>
                <Styled.Code>{`// setup.js
console.log("setup run once");

// main.js
import "./setup.js"; // runs setup; imports nothing
import "./setup.js"; // cached; no second log

// Output:
// setup run once`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Import is read-only; mutate via exporter</Styled.H3>
                <Styled.Code>{`// store.js
export const state = { count: 0 };
export const bump = () => { state.count++; };

// app.js
import { state, bump } from "./store.js";
// state = { count: 999 }; // ❌ SyntaxError: Cannot assign to import
console.log(state.count); // 0
bump();
console.log(state.count); // 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Common mistakes</Styled.H3>
                <Styled.Code>{`// ❌ 1) default export duplicates
// export default 1;
// export default 2; // SyntaxError (only one default allowed)

// ❌ 2) import inside a block/function (static syntax must be top level)
// if (true) { import { add } from "./math.js"; } // SyntaxError

// ✅ Use dynamic import() if you need conditional loading (covered later).
// if (needMath) { const { add } = await import("./math.js"); }`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default ImportExportForms;
