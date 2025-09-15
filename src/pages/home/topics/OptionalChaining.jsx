// OptionalChaining.jsx
import React from "react";
import { Styled } from "./styled";

const OptionalChaining = () => {
    return (
        <Styled.Page>
            <Styled.H1>Optional chaining <code>?.</code></Styled.H1>

            <Styled.Lead>
                We use <code>?.</code> to safely read properties, index into objects/arrays, or call
                functions <em>only if</em> the left side is <strong>not null or undefined</strong>.
                If the left side is nullish, the whole expression evaluates to <code>undefined</code>
                without throwing and without evaluating the rest.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Property access:</strong> <code>obj?.prop</code> and <code>obj?.["prop"]</code>.</li>
                    <li><strong>Method/func call:</strong> <code>obj.method?.(args)</code> or <code>fnRef?.(args)</code>.</li>
                    <li><strong>Element access:</strong> <code>arr?.[i]</code> (safe indexing).</li>
                    <li><strong>Short-circuit:</strong> Triggers only for <code>null</code> / <code>undefined</code> on the left side of each <code>?.</code>.</li>
                    <li><strong>Result:</strong> Yields <code>undefined</code> when it short-circuits; otherwise behaves like normal access/call.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Property &amp; bracket access</Styled.H3>
                <Styled.Code>{`const user = null;

console.log(user?.name);        // undefined (no throw)
console.log(user?.["email"]);   // undefined

const cfg = { nested: { mode: "dark" } };
console.log(cfg?.nested?.mode); // "dark"
console.log(cfg?.bad?.prop);    // undefined`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Optional call (method and function refs)</Styled.H3>
                <Styled.Code>{`const api = {
  log(msg) { return "OK: " + msg; }
};

console.log(api.log?.("hello")); // "OK: hello"

const missing = {};
console.log(missing.log?.("x")); // undefined (no call, no throw)

let cb = null;
console.log(cb?.(42));           // undefined

// this-binding is preserved for obj.method?.()
const counter = {
  n: 0,
  inc() { this.n++; }
};
counter.inc?.();
console.log(counter.n); // 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Array/Map safe access</Styled.H3>
                <Styled.Code>{`const arr = null;
console.log(arr?.[0]); // undefined (no throw)

const ok = ["A","B"];
console.log(ok?.[1]);  // "B"

const m = new Map([["k", 123]]);
console.log(m.get?.("k")); // 123
console.log(m.get?.("z")); // undefined`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Only null/undefined short-circuit</Styled.H3>
                <Styled.Code>{`const obj = { toFixed: Number.prototype.toFixed };
const zero = 0;

// 0 is not nullish, so call proceeds
console.log(zero.toFixed?.(2)); // "0.00"

// false/"": still not nullish
console.log(("".toUpperCase?.())); // "" -> "" (method exists, returns "")
console.log((false.toString?.()));  // "false"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — With nullish coalescing (defaults)</Styled.H3>
                <Styled.Code>{`const settings = { theme: { name: "solarized" } };
const theme = settings?.theme?.name ?? "light";
console.log(theme); // "solarized"

const settings2 = null;
const theme2 = settings2?.theme?.name ?? "light";
console.log(theme2); // "light"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Short-circuit also skips argument evaluation</Styled.H3>
                <Styled.Code>{`function sideEffect() { console.log("ARG EVALUATED"); return 1; }

const maybe = null;
maybe?.call(sideEffect()); // nothing printed; sideEffect not called

const sure = { call(x){ return x*2; } };
console.log(sure.call?.(sideEffect())); 
// prints "ARG EVALUATED"
// 2`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Safe deep reads with dynamic keys</Styled.H3>
                <Styled.Code>{`const data = { user: { profile: { socials: { x: "@a2rp" } } } };
const key = "socials";
console.log(data.user?.profile?.[key]?.x); // "@a2rp"

const missing = {};
console.log(missing.user?.profile?.[key]?.x); // undefined`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Optional chaining with <code>delete</code></Styled.H3>
                <Styled.Code>{`const bag = null;
// delete returns true when operand is missing or unconfigurable check passes
console.log(delete bag?.prop); // true (safe, no throw)

const o = { a: 1 };
console.log(delete o?.a);      // true
console.log(o.a);              // undefined`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Common patterns</Styled.H3>
                <Styled.Code>{`// DOM example
const title = document.querySelector("h1")?.textContent ?? "(no title)";
console.log(title);

// Callback if provided
function run(task, cb) {
  const result = task();
  cb?.(result);
  return result;
}

// Optional chaining + defaulting
const env = {};
const port = env.config?.server?.port ?? 3000;
console.log(port); // 3000`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Invalid uses (showing as comments)</Styled.H3>
                <Styled.Code>{`const obj2 = {};

// ❌ Left-hand assignment is not allowed with ?.
// obj2?.x = 1; // SyntaxError

// ❌ Use parentheses if you need to combine with ||/&& to avoid precedence confusion:
// (obj2?.x) || 42; // ok (as an expression)`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default OptionalChaining;
