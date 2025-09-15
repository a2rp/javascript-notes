// LogicalAssignmentOperators.jsx
import React from "react";
import { Styled } from "./styled";

const LogicalAssignmentOperators = () => {
    return (
        <Styled.Page>
            <Styled.H1>Logical assignment operators: <code>&amp;&amp;=</code>, <code>||=</code>, <code>??=</code></Styled.H1>

            <Styled.Lead>
                We combine short-circuit logic with assignment. These operators update the left
                variable/property only when a condition on its current value is met, and they
                evaluate the left side exactly once.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong><code>a ||= b</code></strong>: if <code>a</code> is <em>falsy</em>, assign <code>b</code> to <code>a</code>; otherwise keep <code>a</code>.
                        (Equivalent to <code>a || (a = b)</code> but with single evaluation of <code>a</code>.)
                    </li>
                    <li>
                        <strong><code>a &amp;&amp;= b</code></strong>: if <code>a</code> is <em>truthy</em>, assign <code>b</code> to <code>a</code>; otherwise keep <code>a</code>.
                    </li>
                    <li>
                        <strong><code>a ??= b</code></strong>: if <code>a</code> is <em>null or undefined</em>, assign <code>b</code> to <code>a</code>; otherwise keep <code>a</code>.
                    </li>
                    <li>
                        <strong>Targets:</strong> variables, object properties, and array elements (a valid assignable reference). Optional chaining cannot appear on the left (e.g., <code>obj?.x ||= 1</code> is invalid).
                    </li>
                    <li>
                        <strong>Evaluation:</strong> The left side is evaluated once; the right side is evaluated only if assignment will occur.
                    </li>
                    <li>
                        <strong>Precedence:</strong> These are assignment operators (low precedence, right-associative). Use parentheses when mixing with <code>&amp;&amp;</code>, <code>||</code>, <code>??</code>, or comparisons.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — <code>||=</code> for defaults (falsy triggers)</Styled.H3>
                <Styled.Code>{`let title = "";
title ||= "Untitled";
console.log(title); // "Untitled"  ("" is falsy)

let tries = 0;
tries ||= 3;
console.log(tries); // 3  (0 is falsy)

let flag = false;
flag ||= true;
console.log(flag); // true  (false is falsy)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — <code>??=</code> for null/undefined only</Styled.H3>
                <Styled.Code>{`let port = 0;
port ??= 3000;
console.log(port); // 0  (kept; 0 is not nullish)

let name = "";
name ??= "Anonymous";
console.log(name); // ""  (kept)

let timeout;
timeout ??= 5000;
console.log(timeout); // 5000  (was undefined)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — <code>&amp;&amp;=</code> to update only when present</Styled.H3>
                <Styled.Code>{`let token = "abc123";
token &&= token.toUpperCase();
console.log(token); // "ABC123"

let perms = 0;
perms &&= 4;
console.log(perms); // 0  (unchanged; 0 is falsy)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Single evaluation of the left side</Styled.H3>
                <Styled.Code>{`const o = {
  _v: 0,
  get v() { console.log("get"); return this._v; },
  set v(x) { console.log("set", x); this._v = x; }
};

o.v ||= 1;
// get
// set 1
console.log(o._v); // 1

// Classic pattern evaluates getter twice:
o.v || (o.v = 2);
// get
// get
// set 2
console.log(o._v); // 2`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Properties and dynamic keys</Styled.H3>
                <Styled.Code>{`const user = {};
user.name ||= "Guest";
console.log(user.name); // "Guest"

const key = "items";
const cart = {};
cart[key] ??= [];
cart[key].push("ID-1");
console.log(cart.items); // ["ID-1"]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Right side runs only when needed</Styled.H3>
                <Styled.Code>{`const make = (v) => (console.log("compute"), v);

let a = "has";
a ||= make("new");
// (no "compute" printed) -> no assignment
console.log(a); // "has"

let b = null;
b ??= make("default");
// compute
console.log(b); // "default"

let c = 0;
c &&= make(99);
// (no "compute" printed)
console.log(c); // 0`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Chaining is right-associative</Styled.H3>
                <Styled.Code>{`let x = null, y = 0, z = 5;
x ??= y ??= z;
console.log({ x, y, z });
// { x: 0, y: 0, z: 5 }
// y ??= z runs first -> y becomes 0 (kept, not nullish), then x ??= y -> x becomes 0

let p = "", q = "Q";
p ||= q ||= "R";
console.log({ p, q });
// q ||= "R" -> "Q" (kept, truthy), then p ||= q -> "Q"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Initializing nested config</Styled.H3>
                <Styled.Code>{`const cfg = {};
cfg.server ??= {};
cfg.server.host ??= "127.0.0.1";
cfg.server.port ??= 0;      // keep explicit 0 later if set
cfg.server.name ||= "api";  // fallback only if empty/falsy
console.log(cfg);
// { server: { host: "127.0.0.1", port: 0, name: "api" } }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Invalid left sides (as comments)</Styled.H3>
                <Styled.Code>{`const obj = { x: 1 };
// obj?.x ||= 2;   // ❌ SyntaxError (optional chaining not allowed on assignment target)
// (obj?.x) ||= 2; // ❌ still invalid
// Use a normal check if needed:
if (obj && obj.x == null) obj.x = 2;`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Numbers, NaN, and BigInt zero</Styled.H3>
                <Styled.Code>{`let n = NaN;
n ||= 10;
console.log(n); // 10  (NaN is falsy)

let bign = 0n;
bign ||= 1n;
console.log(bign); // 1n (0n is falsy)

let n2 = NaN;
n2 ??= 99;
console.log(n2); // NaN (kept; not nullish)`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default LogicalAssignmentOperators;
