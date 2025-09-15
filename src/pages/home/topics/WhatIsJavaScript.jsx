import React from "react";
import { Styled } from "./styled";

const WhatIsJavaScript = () => {
    return (
        <Styled.Page>
            <Styled.H1>What is JavaScript?</Styled.H1>
            <Styled.Lead>
                A high-level, multi-paradigm programming language standardized as ECMAScript.
                It runs in many <em>hosts</em> (browsers, Node.js) where the host provides I/O, timers, and platform APIs.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Language:</strong> JavaScript is an ECMAScript-compliant language; the spec defines its syntax, types, and core behavior.</li>
                    <li><strong>Host-provided power:</strong> JS itself has no I/O (no file/network/DOM). Browsers, Node.js, etc., supply APIs to interact with the outside world.</li>
                    <li><strong>Execution:</strong> JS engines (V8, SpiderMonkey, JavaScriptCore) parse/compile/execute code; hosts embed these engines.</li>
                    <li><strong>Model:</strong> Single-threaded run-to-completion semantics with an event loop that processes tasks/microtasks.</li>
                    <li><strong>Style:</strong> Multi-paradigm - supports imperative, functional, and object-oriented patterns; functions are first-class values.</li>
                    <li><strong>Distribution:</strong> In browsers it's the de-facto client-side language; in Node.js it powers servers, CLIs, tooling.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 - Core language vs host APIs</Styled.H3>
                <Styled.Code>{`// JavaScript core (language) gives you numbers, strings, objects, functions, etc.
const n = 42;
const user = { name: "Ash" };
const greet = (u) => \`Hello, \${u.name}\`;

// Host provides I/O and platform features:
// In a browser, 'window' and 'document' are host objects.
// In Node.js, 'process' and 'fs' are host-provided.

typeof n;                  // "number"
typeof user;               // "object"
typeof greet;              // "function"

// (Browser) typeof window   // "object"
// (Node)    typeof process  // "object"

// Output (conceptual):
// "number"
// "object"
// "function"
`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 - Single-threaded + event loop intuition</Styled.H3>
                <Styled.Code>{`console.log("A");

setTimeout(() => {
  console.log("C (timer)");
}, 0);

Promise.resolve().then(() => {
  console.log("B (microtask)");
});

console.log("D");

// Output order:
// A
// D
// B (microtask)   <-- microtasks run before timers
// C (timer)
`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 - First-class functions (multi-paradigm)</Styled.H3>
                <Styled.Code>{`// Functions can be passed around, stored, and returned.
function twice(fn) {
  return (x) => fn(fn(x));
}

const inc = (x) => x + 1;
const incTwice = twice(inc);

console.log(incTwice(10)); // 12

// Output:
// 12
`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Quick takeaways</Styled.H3>
                <Styled.UL>
                    <li>ECMAScript defines the language; hosts define environment APIs.</li>
                    <li>JS is single-threaded per execution context but highly concurrent via the event loop and async primitives.</li>
                    <li>Use the right paradigm per problem: functional transforms, OO composition, or imperative steps.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default WhatIsJavaScript;
