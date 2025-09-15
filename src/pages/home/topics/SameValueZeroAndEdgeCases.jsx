// SameValueZeroAndEdgeCases.jsx
import React from "react";
import { Styled } from "./styled";

const SameValueZeroAndEdgeCases = () => {
    return (
        <Styled.Page>
            <Styled.H1>SameValueZero (e.g., NaN, -0) — edge cases</Styled.H1>

            <Styled.Lead>
                <em>SameValueZero</em> is an equality algorithm used by several JS APIs.
                It’s like strict equality (<code>===</code>) except it treats{" "}
                <code>NaN</code> as equal to <code>NaN</code> and it does not distinguish{" "}
                <code>+0</code> from <code>-0</code> (they are equal).
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Rule:</strong>{" "}
                        <code>SameValueZero(x, y)</code> is <code>true</code> when{" "}
                        <code>x === y</code> <em>or</em> both are <code>NaN</code>. It considers{" "}
                        <code>+0</code> and <code>-0</code> equal.
                    </li>
                    <li>
                        <strong>Where used:</strong>{" "}
                        <code>Array.prototype.includes</code>, <code>TypedArray.prototype.includes</code>,
                        <code>Set</code>/<code>Map</code> key equality, and a few other spec ops.
                        (Contrast: <code>indexOf</code>/<code>lastIndexOf</code> use <code>===</code>.)
                    </li>
                    <li>
                        <strong>Contrast:</strong>{" "}
                        <code>Object.is</code> uses <em>SameValue</em> (distinguishes <code>+0</code>/<code>-0</code>,
                        treats <code>NaN</code> equal to <code>NaN</code>).
                    </li>
                    <li>
                        <strong>Objects &amp; references:</strong> As with <code>===</code>, objects are equal
                        only by identity (same reference).
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Quick comparison table</Styled.H3>
                <Styled.Code>{`console.log(NaN === NaN);           // false
console.log([NaN].includes(NaN)); // true   (SameValueZero)
console.log(Object.is(NaN, NaN)); // true   (SameValue)

console.log(+0 === -0);           // true   (strict considers them equal)
console.log([+0].includes(-0));   // true   (SameValueZero equal)
console.log(Object.is(+0, -0));   // false  (SameValue distinguishes)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — <code>includes</code> vs <code>indexOf</code></Styled.H3>
                <Styled.Code>{`const xs = [NaN, 0, -0, 1];

console.log(xs.includes(NaN)); // true   (SameValueZero)
console.log(xs.indexOf(NaN));  // -1     (=== cannot find NaN)

console.log(xs.includes(-0));  // true
console.log(xs.indexOf(-0));   // 1 or 2 depending on array but finds 0/-0 equally? 
// Actually indexOf uses ===, and +0 === -0 is true, so it can match either.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Sets de-duplicate using SameValueZero</Styled.H3>
                <Styled.Code>{`const s = new Set([NaN, NaN, +0, -0, 1, 1]);
console.log([...s]); // [NaN, 0, 1]  (NaN collapsed; +0 and -0 collapsed)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Map key equality</Styled.H3>
                <Styled.Code>{`const m = new Map();
m.set(NaN, "A");
console.log(m.get(NaN)); // "A" (NaN matches NaN)

m.set(-0, "neg zero");
console.log(m.get(+0));  // "neg zero" (+0 and -0 are the same key under SameValueZero)

// Object keys are strings/symbols; Map keys can be anything and use SameValueZero.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Typed arrays: <code>includes</code> honors NaN</Styled.H3>
                <Styled.Code>{`const ta = new Float64Array([NaN, 1, 2]);
console.log(ta.includes(NaN)); // true
console.log(ta.indexOf(NaN));  // -1 (typed array indexOf also uses ===)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Polyfill-style function</Styled.H3>
                <Styled.Code>{`const sameValueZero = (a, b) => a === b || (a !== a && b !== b);
// Explanation: only NaN is not equal to itself, so (a !== a) detects NaN.
console.log(sameValueZero(NaN, NaN)); // true
console.log(sameValueZero(+0, -0));   // true
console.log(sameValueZero({}, {}));   // false (different objects)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Wrapper objects are not primitives</Styled.H3>
                <Styled.Code>{`const boxedNaN = new Number(NaN);
console.log([boxedNaN].includes(NaN)); // false (object !== number; not NaN primitive)
console.log([boxedNaN].includes(boxedNaN)); // true (same reference)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Choosing the right check</Styled.H3>
                <Styled.UL>
                    <li>
                        Need to know if a collection <em>contains</em> a value (including <code>NaN</code>)? Use{" "}
                        <code>includes</code> or a <code>Set</code>.
                    </li>
                    <li>
                        Need to distinguish <code>+0</code> from <code>-0</code> or detect <code>NaN</code> precisely? Use{" "}
                        <code>Object.is</code> or sign tricks like <code>1/x === -Infinity</code>.
                    </li>
                    <li>
                        Need predictable, no-coercion equality? Prefer <code>===</code> for general logic.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Practical patterns</Styled.H3>
                <Styled.Code>{`// Deduplicate array, preserving NaN and normalizing ±0:
const uniq = arr => [...new Set(arr)];
console.log(uniq([NaN, NaN, -0, +0, 2, 2])); // [NaN, 0, 2]

// Check presence (handles NaN):
const has = (arr, v) => arr.includes(v);
console.log(has([1, 2, NaN], NaN)); // true

// Detect negative zero specifically:
const isNegZero = x => x === 0 && 1/x === -Infinity;
console.log(isNegZero(-0)); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Summary cheat sheet</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong><code>===</code>:</strong> No coercion, <code>NaN !== NaN</code>, <code>+0 === -0</code>.
                    </li>
                    <li>
                        <strong>SameValueZero (this topic):</strong> <code>NaN === NaN</code> (true),{" "}
                        <code>+0</code> equals <code>-0</code>.
                    </li>
                    <li>
                        <strong>Object.is (SameValue):</strong> <code>NaN === NaN</code> (true),{" "}
                        <code>+0</code> <em>not</em> equal <code>-0</code>.
                    </li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default SameValueZeroAndEdgeCases;
