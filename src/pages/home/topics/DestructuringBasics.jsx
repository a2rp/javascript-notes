// DestructuringBasics.jsx
import React from "react";
import { Styled } from "./styled";

const DestructuringBasics = () => {
    return (
        <Styled.Page>
            <Styled.H1>Destructuring: basics</Styled.H1>

            <Styled.Lead>
                Destructuring lets us unpack values from arrays/iterables and properties from
                objects into distinct variables using patterns. Arrays are <em>position-based</em>
                (<code>[a, b]</code>), objects are <em>name-based</em> (<code>{`{ x, y }`}</code>).
                We can skip items, set defaults, rename properties, and collect the “rest”.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Array pattern:</strong> <code>[a, b]</code>, skip with commas <code>[, second]</code>,
                        collect rest with <code>...rest</code>, supports any <em>iterable</em> (arrays, strings, Sets, etc.).
                    </li>
                    <li>
                        <strong>Object pattern:</strong> <code>{`{ x, y }`}</code>; rename with <code>{`{ x: x1 }`}</code>;
                        default values with <code>{`{ x = 10 }`}</code>; collect remaining props with <code>{`{ x, ...rest }`}</code>.
                    </li>
                    <li>
                        <strong>Defaults apply only when the extracted value is <code>undefined</code></strong> (not when it is <code>null</code> or other falsy).
                    </li>
                    <li>
                        <strong>Nested patterns:</strong> patterns can contain other patterns, e.g. <code>{`{ loc: { city } }`}</code> or <code>[head, [x, y]]</code>.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Array basics</Styled.H3>
                <Styled.Code>{`const arr = [10, 20, 30, 40];
const [a, b] = arr;
console.log(a, b); // 10 20

// Skip items with commas and collect the rest
const [, second, , fourth] = arr;
console.log(second, fourth); // 20 40

const [head, ...tail] = arr;
console.log(head, tail); // 10 [20, 30, 40]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Array defaults &amp; iterables</Styled.H3>
                <Styled.Code>{`const xs = [1];
const [p = 100, q = 200] = xs;
console.log(p, q); // 1 200  (q default used because xs[1] is undefined)

const [c1, c2] = "A😀"; // strings are iterable by code points with for...of/spread contexts
console.log(c1, c2); // "A" "😀"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Object basics &amp; renaming</Styled.H3>
                <Styled.Code>{`const user = { id: 7, name: "Ada" };
const { id, name } = user;
console.log(id, name); // 7 "Ada"

// Rename local variables
const { id: userId, name: displayName } = user;
console.log(userId, displayName); // 7 "Ada"

// Missing properties become undefined
const { role } = user;
console.log(role); // undefined`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Object defaults (only for undefined)</Styled.H3>
                <Styled.Code>{`const cfg1 = { port: undefined };
const { port = 3000 } = cfg1;
console.log(port); // 3000 (default used because value is undefined)

const cfg2 = { retries: null };
const { retries = 5 } = cfg2;
console.log(retries); // null (default NOT used because value is null, not undefined)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Nested destructuring</Styled.H3>
                <Styled.Code>{`const profile = { name: "Lin", loc: { city: "Bengaluru", pin: 560001 } };
const { loc: { city } } = profile;
console.log(city); // "Bengaluru"

// Array inside array
const nested = [1, [2, 3]];
const [one, [two, three]] = nested;
console.log(one, two, three); // 1 2 3`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Rest properties</Styled.H3>
                <Styled.Code>{`const obj = { a: 1, b: 2, c: 3 };
const { a, ...restObj } = obj;
console.log(a, restObj); // 1 { b: 2, c: 3 }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Function parameters with destructuring</Styled.H3>
                <Styled.Code>{`// Object param with defaults
function connect({ host = "127.0.0.1", port = 3000 } = {}) {
  return host + ":" + port;
}
console.log(connect());                       // "127.0.0.1:3000"
console.log(connect({ port: 0 }));            // "127.0.0.1:0"

// Array param
function firstTwo([x = 0, y = 0] = []) {
  return x + y;
}
console.log(firstTwo([3, 4]));                // 7
console.log(firstTwo());                      // 0`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Destructuring assignment to existing variables</Styled.H3>
                <Styled.Code>{`let x, y;
({ x, y } = { x: 5, y: 9 }); // parentheses required around object pattern in assignment
console.log(x, y); // 5 9

// Swap values quickly
let a1 = "left", b1 = "right";
[a1, b1] = [b1, a1];
console.log(a1, b1); // "right" "left"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Pulling from function returns</Styled.H3>
                <Styled.Code>{`function getPair() { return [10, 20]; }
const [m, n] = getPair();
console.log(m, n); // 10 20

function getUser() { return { id: 1, name: "Eve" }; }
const { name: userName } = getUser();
console.log(userName); // "Eve"`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default DestructuringBasics;
