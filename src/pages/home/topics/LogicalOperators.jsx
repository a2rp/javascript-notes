// LogicalOperators.jsx
import React from "react";
import { Styled } from "./styled";

const LogicalOperators = () => {
    return (
        <Styled.Page>
            <Styled.H1>Logical operators: &&, ||, !</Styled.H1>

            <Styled.Lead>
                We use logical operators for control flow and value selection. In JavaScript,
                <code>&amp;&amp;</code> and <code>||</code> don’t force boolean results — they
                return one of the original operands after applying truthiness rules and
                short-circuiting. <code>!</code> negates after converting with ToBoolean.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Truthiness:</strong> falsy values are <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Everything else is truthy.
                    </li>
                    <li>
                        <strong><code>a &amp;&amp; b</code>:</strong> if <em>a</em> is falsy, returns <em>a</em>; otherwise returns <em>b</em>.
                        Evaluates <em>b</em> only when <em>a</em> is truthy (short-circuit).
                    </li>
                    <li>
                        <strong><code>a || b</code>:</strong> if <em>a</em> is truthy, returns <em>a</em>; otherwise returns <em>b</em>.
                        Evaluates <em>b</em> only when <em>a</em> is falsy.
                    </li>
                    <li>
                        <strong><code>!a</code>:</strong> converts <em>a</em> to boolean and negates it; <code>!!a</code> is a common boolean cast.
                    </li>
                    <li>
                        <strong>Precedence:</strong> <code>!</code> &gt; <code>&amp;&amp;</code> &gt; <code>||</code>. Use parentheses to make intent clear.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Basic behavior &amp; returned operand</Styled.H3>
                <Styled.Code>{`console.log(true && "ok");    // "ok"   (first truthy -> returns second)
console.log(false && "ok");   // false  (first falsy -> returns first)
console.log("hi" || "bye");   // "hi"   (first truthy -> returns first)
console.log("" || "fallback"); // "fallback" (first falsy -> returns second)

console.log(!0);              // true
console.log(!!"text");        // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Short-circuit evaluation order</Styled.H3>
                <Styled.Code>{`const L = (v) => (console.log("L"), v);
const R = (v) => (console.log("R"), v);

console.log(L(true) && R("go"));
/*
L
R
"go"
*/

console.log(L(false) && R("nope"));
/*
L
false     // R never runs
*/

console.log(L("") || R("fallback"));
/*
L
R
"fallback"
*/`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Conditional execution with <code>&amp;&amp;</code></Styled.H3>
                <Styled.Code>{`const isLoggedIn = true;
isLoggedIn && console.log("Show dashboard"); // prints

const hasToken = "";
hasToken && console.log("This won't print"); // "" is falsy`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Defaulting with <code>||</code> (falsy pitfall)</Styled.H3>
                <Styled.Code>{`const page = 0;
const p1 = page || 1;
console.log(p1); // 1 (0 is falsy, so || falls back)

// If 0 or "" are valid values, || may be wrong.
// We'll see nullish coalescing (??) next, which treats only null/undefined as empty.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Chaining</Styled.H3>
                <Styled.Code>{`// && returns the first falsy, else the last
console.log(1 && "a" && 0 && "b"); // 0
console.log("x" && 5 && true);     // true

// || returns the first truthy, else the last
console.log(null || 0 || "" || "go" || "stop"); // "go"
console.log(undefined || 0 || "");              // ""`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Precedence and parentheses</Styled.H3>
                <Styled.Code>{`const A = false, B = true, C = true;

console.log(A || B && C);     // true  (&& first -> A || (B && C))
console.log((A || B) && C);   // true  (here also true, but grouping differs)

console.log(!A && B);         // true  (! before &&)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Pattern: safe property access (pre-optional chaining)</Styled.H3>
                <Styled.Code>{`const obj = { user: { name: "Ada" } };

const name =
  obj && obj.user && obj.user.name || "Anonymous";
console.log(name); // "Ada"

// If obj.user.name were "", || would pick "Anonymous" (falsy pitfall).`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Combining with functions</Styled.H3>
                <Styled.Code>{`function getUser() { return { name: "Lin" }; }
function fallbackUser() { return { name: "Guest" }; }

const user = getUser() || fallbackUser(); // fallbackUser runs only if getUser() returns a falsy value
console.log(user.name); // "Lin"

const debug = false;
debug && console.log("Only logs when debug is truthy");`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Coercion with <code>!</code> and <code>!!</code></Styled.H3>
                <Styled.Code>{`console.log(![]);        // false  ([] is truthy)
console.log(!!0);        // false
console.log(!!"0");      // true
console.log(!!null);     // false
console.log(!!{ });      // true`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default LogicalOperators;
