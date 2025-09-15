// NullishCoalescing.jsx
import React from "react";
import { Styled } from "./styled";

const NullishCoalescing = () => {
    return (
        <Styled.Page>
            <Styled.H1>Nullish coalescing <code>??</code></Styled.H1>

            <Styled.Lead>
                We use <code>a ?? b</code> to choose a default <em>only</em> when <code>a</code> is
                <strong> null or undefined</strong>. Values like <code>0</code>, <code>""</code>, <code>false</code>, <code>NaN</code>, and <code>0n</code> are treated as
                “present” and are returned as-is.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Rule:</strong> <code>a ?? b</code> returns <code>a</code> if <code>a</code> is not <code>null</code> or <code>undefined</code>; otherwise returns <code>b</code>.</li>
                    <li><strong>Short-circuit:</strong> If <code>a</code> is non-nullish, <code>b</code> is not evaluated.</li>
                    <li><strong>Precedence:</strong> Same as <code>||</code>. We must use parentheses when mixing with <code>&amp;&amp;</code> or <code>||</code>.</li>
                    <li><strong>Result type:</strong> Returns one of the original operands (not forced to boolean).</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Basics</Styled.H3>
                <Styled.Code>{`console.log(null ?? "fallback");      // "fallback"
console.log(undefined ?? "fallback"); // "fallback"
console.log(0 ?? 42);                 // 0      (0 is not nullish)
console.log("" ?? "text");            // ""     (empty string kept)
console.log(false ?? true);           // false
console.log(NaN ?? 99);               // NaN    (still returned)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Short-circuit evaluation</Styled.H3>
                <Styled.Code>{`const left = 5;
const right = () => { console.log("evaluated"); return 10; };

console.log(left ?? right()); // 5
// "evaluated" is not printed because left is non-nullish

console.log(null ?? right());
// prints "evaluated"
// result: 10`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Difference from <code>||</code></Styled.H3>
                <Styled.Code>{`const page = 0;
console.log(page || 1); // 1   (|| treats 0 as falsy -> falls back)
console.log(page ?? 1); // 0   (?? keeps 0)

const name = "";
console.log(name || "Anonymous"); // "Anonymous"
console.log(name ?? "Anonymous"); // ""  (kept as provided)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — With optional chaining</Styled.H3>
                <Styled.Code>{`const user = { settings: { theme: "dark" } };
const theme1 = user.settings?.theme ?? "light";
console.log(theme1); // "dark"

const user2 = {};
const theme2 = user2.settings?.theme ?? "light";
console.log(theme2); // "light" (settings is undefined)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Chaining defaults</Styled.H3>
                <Styled.Code>{`const a = null, b = undefined, c = 0, d = 7;
console.log(a ?? b ?? c ?? d); // 0 (first non-nullish wins)
console.log(a ?? b ?? d);      // 7`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Environment/config defaults</Styled.H3>
                <Styled.Code>{`// Keep 0 if explicitly provided, else default to 3000
const env = { PORT: 0, HOST: undefined };
const port = env.PORT ?? 3000;
const host = env.HOST ?? "127.0.0.1";
console.log({ port, host }); // { port: 0, host: "127.0.0.1" }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Parentheses when mixing</Styled.H3>
                <Styled.Code>{`const A = null, B = "x", C = "y";

// ❌ SyntaxError if we try to mix without parentheses:
// A ?? B || C

// ✅ Use parentheses to be explicit:
console.log((A ?? B) || C); // "x"
console.log(A ?? (B || C)); // "x"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Working with functions</Styled.H3>
                <Styled.Code>{`function greet(name) {
  const n = name ?? "(no name)";
  return \`Hello, \${n}!\`;
}
console.log(greet("Ada"));   // "Hello, Ada!"
console.log(greet(null));    // "Hello, (no name)!"
console.log(greet(""));      // "Hello, !" (empty string preserved)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Arrays/objects with explicit empty values</Styled.H3>
                <Styled.Code>{`const list = [];
const map = {};

console.log(list ?? ["fallback"]); // []
console.log(map ?? { a: 1 });      // {}

// Beware: if you wanted to replace only when list is null/undefined, ?? is correct.
// If you wanted to replace when list is empty, check length instead:
console.log((list.length ? list : ["fallback"])); // ["fallback"]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Interaction with numbers and NaN</Styled.H3>
                <Styled.Code>{`function toNumber(s) {
  const n = Number(s);
  // If parsing failed -> NaN (still non-nullish), so ?? won't swap it.
  // Fall back only when result is null/undefined, not when NaN.
  return n ?? 0;
}
console.log(toNumber("x")); // NaN
// If we want to handle NaN too, we must add an explicit check:
function toNumberSafe(s, fallback = 0) {
  const n = Number(s);
  return Number.isNaN(n) ? fallback : n;
}
console.log(toNumberSafe("x", 99)); // 99`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default NullishCoalescing;
