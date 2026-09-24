// SpreadAndRest.jsx
import React from "react";
import { Styled } from "./styled";

const SpreadAndRest = () => {
    return (
        <Styled.Page>
            <Styled.H1>Spread &amp; rest syntax <code>...</code></Styled.H1>

            <Styled.Lead>
                The token <code>...</code> has two roles:
                <strong> spread</strong> (expand an iterable or object into places that expect
                multiple items) and <strong>rest</strong> (gather remaining items into an array or object).
                Spread appears in <em>calls</em>, <em>array literals</em>, and <em>object literals</em>.
                Rest appears in <em>function parameters</em> and <em>destructuring patterns</em>.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Array/iterable spread:</strong> <code>fn(...iterable)</code>, <code>[...iterable]</code>. Requires an <em>iterable</em> (e.g., array, string, Set, Map, generator).</li>
                    <li><strong>Object spread:</strong> <code>{`{ ...obj }`}</code> copies <em>own enumerable</em> string &amp; symbol keys (shallow copy). Later properties win on key collisions.</li>
                    <li><strong>Rest parameter:</strong> <code>function f(a, ...rest) { }</code> collects extra args into an array (must be last).</li>
                    <li><strong>Rest in destructuring:</strong> <code>const [a, ...rest] = arr</code>, <code>const {`a, ...rest `} = obj</code> collects the “remaining” elements/props (rest must be last in the pattern).</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 - Function calls (expand args)</Styled.H3>
                <Styled.Code>{`const nums = [3, 7, 2];
console.log(Math.max(...nums)); // 7

function sum(a, b, c) { return a + b + c; }
console.log(sum(...nums)); // 12`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 - Array literals &amp; concatenation</Styled.H3>
                <Styled.Code>{`const a = [1, 2], b = [3, 4];
const c = [0, ...a, ...b, 5];
console.log(c); // [0, 1, 2, 3, 4, 5]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 - Spreading strings (iterable by code points)</Styled.H3>
                <Styled.Code>{`const s = "A😀B";
console.log([...s]); // ["A","😀","B"]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 - Convert array-like/iterable to array</Styled.H3>
                <Styled.Code>{`function demo() {
  const args = [...arguments]; // arguments is array-like, but iterable -> ok
  return args.join("-");
}
console.log(demo("x","y","z")); // "x-y-z"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 - Rest parameter (collect)</Styled.H3>
                <Styled.Code>{`function joinWith(sep, ...parts) {
  return parts.join(sep);
}
console.log(joinWith(" · ", "JS", "ES6+", "React"));
// "JS · ES6+ · React"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 - Array destructuring with rest</Styled.H3>
                <Styled.Code>{`const xs = [10, 20, 30, 40];
const [head, ...tail] = xs;
console.log(head); // 10
console.log(tail); // [20, 30, 40]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 - Object spread: clone &amp; merge (shallow)</Styled.H3>
                <Styled.Code>{`const base = { a: 1, nested: { x: 10 } };
const extra = { b: 2 };
const clone = { ...base };
const merged = { ...base, ...extra, a: 9 }; // later wins

console.log(clone);   // { a:1, nested:{ x:10 } }
console.log(merged);  // { a:9, nested:{ x:10 }, b:2 }

// Shallow copy: nested stays shared
clone.nested.x = 99;
console.log(base.nested.x); // 99 (same reference)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 - Object destructuring with rest (exclude some keys)</Styled.H3>
                <Styled.Code>{`const user = { id: 1, name: "Ada", role: "admin" };
const { role, ...publicInfo } = user; // drop 'role'
console.log(role);       // "admin"
console.log(publicInfo); // { id: 1, name: "Ada" }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 - Order matters: later props overwrite earlier</Styled.H3>
                <Styled.Code>{`const left = { id: 1, name: "Left" };
const right = { name: "Right", ok: true };
const out = { ...left, name: "Middle", ...right };
console.log(out); // { id:1, name:"Right", ok:true }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 - With Sets/Maps</Styled.H3>
                <Styled.Code>{`// Deduplicate via Set
const uniq = [...new Set([1,2,2,3])];
console.log(uniq); // [1,2,3]

// Map to object (via entries)
const m = new Map([["k1", 10], ["k2", 20]]);
const obj = Object.fromEntries([...m]);
console.log(obj); // { k1:10, k2:20 }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 - Parameter defaults + rest</Styled.H3>
                <Styled.Code>{`function format(prefix = "> ", ...lines) {
  return lines.map(l => prefix + l).join("\\n");
}
console.log("\\n" + format(undefined, "one", "two"));
/*
> one
> two
*/`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 12 - Common errors (commented)</Styled.H3>
                <Styled.Code>{`// Spread needs an iterable in calls/arrays:
// [...null];             // ❌ TypeError: null is not iterable
// Math.max(...123);      // ❌ 123 is not iterable

// Object spread requires a non-null/undefined value:
// ({ ...null });         // ❌ TypeError: Cannot convert undefined or null to object
// ({ ...undefined });    // ❌ same

// Rest must be last:
// const [a, ...r, b] = [1,2,3]; // ❌ SyntaxError
// function f(...xs, y){}         // ❌ SyntaxError`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default SpreadAndRest;
