import React from "react";
import { Styled } from "./styled";

const EcmaScriptEditions = () => {
    return (
        <Styled.Page>
            <Styled.H1>ECMAScript Editions & Specs</Styled.H1>
            <Styled.Lead>
                ECMAScript is the official standard that defines the JavaScript language. New editions are published on a
                yearly cadence, and features land when they complete the TC39 process and enter the specification.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>ECMAScript (ECMA-262):</strong> The language spec for JavaScript — syntax, types, semantics, built-ins (e.g., <code>Promise</code>, <code>Map</code>, <code>Array</code> methods).</li>
                    <li><strong>Editions:</strong> Historical names “ES1…ES5”; from ES2015 onward, editions are named by year (ES2015, ES2016, …). Each edition snapshots finished features.</li>
                    <li><strong>TC39:</strong> The committee that designs JS. Proposals advance through stages (0→4). Only Stage 4 proposals are included in an edition.</li>
                    <li><strong>Hosts vs Spec:</strong> The language spec excludes I/O and environment APIs. Browsers and Node.js add those (DOM, <code>fetch</code>, <code>fs</code>, etc.).</li>
                    <li><strong>Shipping reality:</strong> Engines often ship features before the edition is finalized (behind flags or early), but only Stage 4 is “standard”.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Specification family</Styled.H3>
                <Styled.UL>
                    <li><strong>ECMA-262:</strong> ECMAScript Language Specification (the core JS language).</li>
                    <li><strong>ECMA-402:</strong> Internationalization APIs (<code>Intl.*</code> formatting, collation, etc.).</li>
                    <li><strong>ECMA-404:</strong> JSON specification (syntax of JSON text).</li>
                    <li><strong>Web specs (separate):</strong> DOM, HTML, Web APIs are defined outside ECMAScript (WHATWG/W3C).</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>TC39 proposal stages</Styled.H3>
                <Styled.UL>
                    <li><strong>Stage 0:</strong> Strawman — ideas being collected.</li>
                    <li><strong>Stage 1:</strong> Proposal — problem statement, potential solution, examples.</li>
                    <li><strong>Stage 2:</strong> Draft — syntax/semantics largely shaped; spec text begins.</li>
                    <li><strong>Stage 3:</strong> Candidate — spec complete, seeking implementation feedback.</li>
                    <li><strong>Stage 4:</strong> Finished — approved; will ship in the next edition.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Release model & naming</Styled.H3>
                <Styled.UL>
                    <li>Annual editions (e.g., ES2015, ES2016, …). “ES6” is the colloquial name for ES2015.</li>
                    <li>Features land when they hit Stage 4; the edition is a snapshot of all Stage 4 items that year.</li>
                    <li>Transpilers (Babel) and polyfills help use newer features on older engines.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Modern syntax (ES2015+)</Styled.H3>
                <Styled.Code>{`// let/const, arrow functions, default params, destructuring, template literals, spread
const greet = (name = "World") => \`Hello, \${name}!\`;

const person = { name: "Ash", city: "Bengaluru" };
const { name, city } = person;

const nums = [1, 2, 3];
const more = [...nums, 4];

console.log(greet());             // "Hello, World!"
console.log(\`\${name} @ \${city}\`); // "Ash @ Bengaluru"
console.log(more.join(","));      // "1,2,3,4"

// Output:
// "Hello, World!"
// "Ash @ Bengaluru"
// "1,2,3,4"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Promises and async/await</Styled.H3>
                <Styled.Code>{`function getValue() {
  return Promise.resolve(42);
}

async function run() {
  const x = await getValue();
  console.log("value:", x);
}

console.log("start");
run();
console.log("end");

// Output (typical):
// start
// end
// value: 42`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Optional chaining and nullish coalescing</Styled.H3>
                <Styled.Code>{`const user = { profile: null };

const city = user?.profile?.address?.city ?? "unknown";
console.log(city); // "unknown"

// Output:
// "unknown"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — BigInt for large integers</Styled.H3>
                <Styled.Code>{`const maxSafe = 9007199254740991n;   // BigInt (note the 'n' suffix)
const next = maxSafe + 1n;

console.log(typeof maxSafe);  // "bigint"
console.log(next);            // 9007199254740992n

// Output:
// "bigint"
// 9007199254740992n`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — ESM modules (illustrative)</Styled.H3>
                <Styled.Code>{`// math.js (module)
// export function add(a, b) { return a + b; }

// app.js (module)
// import { add } from "./math.js";
// console.log(add(2, 3)); // 5

// Output when run as modules in a host that supports ESM:
// 5`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default EcmaScriptEditions;
