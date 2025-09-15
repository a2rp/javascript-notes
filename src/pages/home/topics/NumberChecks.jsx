// NumberChecks.jsx
import React from "react";
import { Styled } from "./styled";

const NumberChecks = () => {
    return (
        <Styled.Page>
            <Styled.H1>Number checks: <code>isNaN</code>, <code>Number.isNaN</code>, <code>isFinite</code></Styled.H1>

            <Styled.Lead>
                There are two families of numeric predicates. The <em>global</em> versions
                (<code>isNaN</code>, <code>isFinite</code>) <strong>coerce</strong> their argument to a number first.
                The <em>Number.*</em> versions (<code>Number.isNaN</code>, <code>Number.isFinite</code>) do <strong>no coercion</strong>.
                Prefer the <em>Number.*</em> forms for reliable checks.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition & guidance</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong><code>isNaN(x)</code> (global):</strong> returns <code>true</code> if{" "}
                        <code>ToNumber(x)</code> is <code>NaN</code>. This means non-numeric strings/objects
                        can become <code>true</code> after coercion. <em>Surprising.</em>
                    </li>
                    <li>
                        <strong><code>Number.isNaN(x)</code>:</strong> returns <code>true</code> only if <code>x</code> is
                        the <em>actual</em> <code>NaN</code> value (no coercion). <em>Use this.</em>
                    </li>
                    <li>
                        <strong><code>isFinite(x)</code> (global):</strong> returns <code>true</code> if{" "}
                        <code>ToNumber(x)</code> is a finite number (not <code>NaN</code>, <code>±Infinity</code>).
                        Coerces strings like <code>"0"</code> to <code>0</code>.
                    </li>
                    <li>
                        <strong><code>Number.isFinite(x)</code>:</strong> returns <code>true</code> only for values that are
                        already of type <code>number</code> and finite. <em>Use this.</em>
                    </li>
                    <li>
                        <strong>Practical guard:</strong> to accept only real numbers you can compute with,
                        check <code>typeof x === "number" &amp;&amp; Number.isFinite(x)</code>.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — <code>isNaN</code> vs <code>Number.isNaN</code></Styled.H3>
                <Styled.Code>{`console.log(isNaN(NaN));            // true
console.log(Number.isNaN(NaN));   // true

console.log(isNaN("foo"));        // true  (coerces "foo" -> NaN)
console.log(Number.isNaN("foo")); // false (no coercion)

console.log(isNaN(undefined));        // true  (undefined -> NaN)
console.log(Number.isNaN(undefined)); // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Arrays/objects trigger coercion in global <code>isNaN</code></Styled.H3>
                <Styled.Code>{`console.log(isNaN([]));        // false (Number([]) -> 0)
console.log(isNaN([1]));       // false (-> 1)
console.log(isNaN([1,2]));     // true  (-> "1,2" -> NaN)
console.log(isNaN({}));        // true  (-> "[object Object]" -> NaN)

// No coercion with Number.isNaN:
console.log(Number.isNaN([]));      // false
console.log(Number.isNaN({}));      // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — <code>isFinite</code> vs <code>Number.isFinite</code></Styled.H3>
                <Styled.Code>{`console.log(isFinite("0"));          // true  ("0" -> 0)
console.log(Number.isFinite("0"));   // false (string, not number)

console.log(isFinite(null));         // true  (null -> 0)
console.log(Number.isFinite(null));  // false

console.log(isFinite(1/0));          // false (Infinity)
console.log(Number.isFinite(1/0));   // false
console.log(Number.isFinite(42));    // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Recommended numeric guard</Styled.H3>
                <Styled.Code>{`const isRealNumber = x => typeof x === "number" && Number.isFinite(x);

console.log(isRealNumber(12.3));     // true
console.log(isRealNumber(NaN));      // false
console.log(isRealNumber(Infinity)); // false
console.log(isRealNumber("12.3"));   // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Detecting NaN (alternatives)</Styled.H3>
                <Styled.Code>{`console.log(Number.isNaN(NaN));  // true
console.log(Object.is(NaN, NaN));  // true (SameValue)
console.log((x => x !== x)(NaN));  // true (only NaN is not equal to itself)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Form/input handling patterns</Styled.H3>
                <Styled.Code>{`const raw = "42px";
const n1 = Number(raw);               // NaN (strict)
const n2 = parseFloat(raw);           // 42
if (!Number.isNaN(n1)) {
  // use n1
} else if (Number.isFinite(n2)) {
  // fallback to prefix parse (n2)
}
console.log(n1, n2); // NaN 42`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Avoid pitfalls with globals</Styled.H3>
                <Styled.Code>{`// Want to validate numeric strings?
// DON'T:
console.log(isNaN("  "));   // false (-> 0)  ← misleading
console.log(isFinite("  ")); // true (-> 0)  ← misleading

// DO:
const s = "  ";
const parsed = Number(s.trim());
console.log(Number.isFinite(parsed)); // false ("" -> NaN after trim)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Quick polyfills (spec-accurate enough)</Styled.H3>
                <Styled.Code>{`if (!Number.isNaN) {
  Number.isNaN = x => typeof x === "number" && x !== x;
}
if (!Number.isFinite) {
  Number.isFinite = x => typeof x === "number" && isFinite(x);
}`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Infinity & signed zero notes</Styled.H3>
                <Styled.Code>{`console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(-0));        // true   (-0 is a finite number)
console.log(1 / -0);                     // -Infinity (sign preserved)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Cheat sheet</Styled.H3>
                <Styled.UL>
                    <li><code>Number.isNaN(x)</code> — best way to test for the actual <code>NaN</code>.</li>
                    <li><code>Number.isFinite(x)</code> — best way to ensure <code>x</code> is a finite <em>number</em>.</li>
                    <li>Avoid relying on global <code>isNaN</code>/<code>isFinite</code> due to coercion.</li>
                    <li>Accept only “safe to compute” numbers with <code>typeof x === "number" &amp;&amp; Number.isFinite(x)</code>.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default NumberChecks;
