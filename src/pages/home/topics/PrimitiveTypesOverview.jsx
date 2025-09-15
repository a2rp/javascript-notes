// PrimitiveTypesOverview.jsx
import React from "react";
import { Styled } from "./styled";

const PrimitiveTypesOverview = () => {
    return (
        <Styled.Page>
            <Styled.H1>Primitive types — overview</Styled.H1>

            <Styled.Lead>
                JavaScript has seven primitive types. They are not objects (no internal
                mutable fields) and are compared/copied by value. Objects (including arrays
                and functions) are non-primitive.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        The seven primitives are: <strong>undefined</strong>, <strong>null</strong>,{" "}
                        <strong>boolean</strong>, <strong>number</strong>, <strong>bigint</strong>,{" "}
                        <strong>string</strong>, <strong>symbol</strong>.
                    </li>
                    <li>
                        <strong>Immutability:</strong> Primitive values cannot be changed in place
                        (e.g., strings are immutable). Reassigning a variable replaces the value.
                    </li>
                    <li>
                        <strong><code>typeof</code> results:</strong> <code>"undefined"</code>,{" "}
                        <code>"boolean"</code>, <code>"number"</code>, <code>"bigint"</code>,{" "}
                        <code>"string"</code>, <code>"symbol"</code>. Note: <code>typeof null</code>{" "}
                        is <code>"object"</code> (historical quirk).
                    </li>
                    <li>
                        <strong>Auto-boxing:</strong> When we access properties on a primitive
                        (e.g., <code>"hi".length</code>), the engine briefly creates a wrapper
                        object (<code>String</code>, <code>Number</code>, <code>Boolean</code>) and
                        then discards it.
                    </li>
                    <li>
                        <strong>Numbers:</strong> IEEE-754 double precision; includes{" "}
                        <code>NaN</code>, <code>Infinity</code>, and <code>-0</code>.
                        (<em>Details later.</em>)
                    </li>
                    <li>
                        <strong>BigInt:</strong> Arbitrary-precision integers written with{" "}
                        <code>n</code> suffix (e.g., <code>9007199254740993n</code>). Cannot be
                        mixed with <code>number</code> in arithmetic.
                    </li>
                    <li>
                        <strong>Symbols:</strong> Unique identifiers; often used as non-string
                        property keys.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — All primitive kinds & <code>typeof</code></Styled.H3>
                <Styled.Code>{`console.log(typeof undefined);  // "undefined"
console.log(typeof true);       // "boolean"
console.log(typeof 42);         // "number"
console.log(typeof 10n);        // "bigint"
console.log(typeof "hello");    // "string"
console.log(typeof Symbol());   // "symbol"
console.log(typeof null);       // "object"  <-- historical quirk

// Output:
// "undefined"
// "boolean"
// "number"
// "bigint"
// "string"
// "symbol"
// "object"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Immutability & copy-by-value</Styled.H3>
                <Styled.Code>{`let a = "hi";
let b = a;          // copy the value
b = b + "!";
console.log(a);     // "hi"   (original unchanged)
console.log(b);     // "hi!"

let x = 7;
let y = x;
y = y + 1;
console.log(x, y);  // 7 8`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Auto-boxing for property access</Styled.H3>
                <Styled.Code>{`console.log("abc".length);     // 3  (temporary String object)
console.log((42).toFixed(1));   // "42.0" (temporary Number object)
console.log(true.toString());    // "true"

// But wrapper instances are objects:
console.log(typeof new String("x")); // "object"
console.log(typeof "x");             // "string"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — <code>null</code> vs <code>undefined</code></Styled.H3>
                <Styled.Code>{`let u;                 // declared, not assigned
const n = null;         // explicit "no value"

console.log(u === undefined); // true
console.log(n === null);      // true

// Typical uses:
// undefined → "not provided" / uninitialized
// null      → "intentionally empty"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Number peculiarities (quick look)</Styled.H3>
                <Styled.Code>{`console.log(Number.isNaN(NaN));  // true
console.log(1 / 0);               // Infinity
console.log(-1 / 0);              // -Infinity
console.log(Object.is(+0, -0));   // false (they're different signs)
console.log(typeof NaN);          // "number"

// Details on precision, NaN, Infinity, and -0 appear in dedicated topics.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — BigInt basics (no mixing with Number)</Styled.H3>
                <Styled.Code>{`const big = 9007199254740993n; // > Number.MAX_SAFE_INTEGER
console.log(big + 2n);           // 9007199254740995n
// console.log(big + 2);         // ❌ TypeError: Cannot mix BigInt and other types
console.log(2n === 2);           // false (different types)
console.log(2n == 2);            // true  (loose equality coerces)

// Arithmetic mixing throws; comparisons are allowed (with care).`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Symbols as unique keys</Styled.H3>
                <Styled.Code>{`const k = Symbol("id");
const obj = { [k]: 123, id: 456 };
console.log(obj[k]);     // 123
console.log(obj.id);     // 456
console.log(Object.keys(obj));       // ["id"]  (symbol keys are skipped)
console.log(Object.getOwnPropertySymbols(obj).length > 0); // true`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default PrimitiveTypesOverview;
