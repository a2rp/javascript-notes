// FloatingPointPrecision.jsx
import React from "react";
import { Styled } from "./styled";

const FloatingPointPrecision = () => {
    return (
        <Styled.Page>
            <Styled.H1>Floating-point precision &amp; NaN/Infinity</Styled.H1>

            <Styled.Lead>
                JavaScript <code>number</code> values use IEEE-754 double-precision (64-bit)
                floating point: ~15–17 decimal digits of precision, a 53-bit significand,
                and special values like <code>NaN</code>, <code>Infinity</code>, and <code>-0</code>.
                This brings rounding quirks and edge cases you must handle explicitly.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Representation:</strong> 1 sign bit, 11-bit exponent, 52-bit fraction
                        (giving a 53-bit significand with the implicit leading 1 for normals).
                    </li>
                    <li>
                        <strong>Precision:</strong> About 15–17 decimal digits. Safe integer range is
                        <code>[-(2^53-1), +(2^53-1)]</code> →{" "}
                        <code>[-9007199254740991, 9007199254740991]</code>.
                    </li>
                    <li>
                        <strong>Rounding:</strong> Many decimals (e.g., 0.1) are not exactly representable;
                        arithmetic is rounded to nearest representable value (ties to even).
                    </li>
                    <li>
                        <strong>Special values:</strong> <code>NaN</code> (not-a-number),{" "}
                        <code>Infinity</code>, <code>-Infinity</code>, and signed zero <code>-0</code>.
                    </li>
                    <li>
                        <strong>Limits:</strong> <code>Number.MAX_VALUE</code> (~1.79e308),{" "}
                        <code>Number.MIN_VALUE</code> (~5e-324, smallest <em>positive</em> subnormal),
                        <code>Number.EPSILON</code> (~2.22e-16, the gap around 1).
                    </li>
                    <li>
                        <strong>Under/overflow:</strong> Too small → underflow to 0; too big →{" "}
                        <code>±Infinity</code>.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Classic rounding surprise</Styled.H3>
                <Styled.Code>{`console.log(0.1 + 0.2);          // 0.30000000000000004
console.log((0.1 + 0.2) === 0.3); // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Compare with a tolerance (EPSILON)</Styled.H3>
                <Styled.Code>{`const nearlyEqual = (a, b, tol = Number.EPSILON) =>
  Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));

console.log(nearlyEqual(0.1 + 0.2, 0.3)); // true (within EPSILON-scaled tolerance)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Safe integer range and bit limits</Styled.H3>
                <Styled.Code>{`console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

const two53 = 2 ** 53;
console.log(two53);                 // 9007199254740992
console.log(two53 + 1 === two53 + 2); // true (precision lost past 2^53)
console.log(two53 + 3 === two53 + 4); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Non-associativity</Styled.H3>
                <Styled.Code>{`const a = (0.1 + 0.2) + 0.3;  // 0.6000000000000001
const b = 0.1 + (0.2 + 0.3);  // 0.6
console.log(a === b);         // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Underflow, overflow, subnormals</Styled.H3>
                <Styled.Code>{`console.log(Number.MAX_VALUE * 2);   // Infinity (overflow)
console.log(Number.MIN_VALUE / 2);   // 0 (underflow to zero)
console.log(Number.MIN_VALUE);       // ~5e-324 (smallest positive subnormal)
console.log(1e-324);                 // 0  (too small to represent)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — <code>NaN</code> rules</Styled.H3>
                <Styled.Code>{`console.log(NaN === NaN);            // false
console.log(Number.isNaN(NaN));       // true
console.log(isNaN("foo"));            // true  (coerces → NaN)  ← prefer Number.isNaN
console.log(Number.isNaN("foo"));     // false (no coercion)

console.log(0 / 0);                   // NaN
console.log(Infinity - Infinity);     // NaN
console.log(0 * Infinity);            // NaN`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — <code>Infinity</code> rules</Styled.H3>
                <Styled.Code>{`console.log(1 / 0);         // Infinity
console.log(-1 / 0);        // -Infinity
console.log(Infinity + 1);  // Infinity
console.log(1 / Infinity);  // 0
console.log(-1 / Infinity); // -0 (signed zero)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Signed zero matters</Styled.H3>
                <Styled.Code>{`console.log(+0 === -0);         // true (strict equality)
console.log(Object.is(+0, -0));  // false (SameValue distinguishes)
console.log(1 / +0, 1 / -0);     // Infinity -Infinity (different signs)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Rounding & formatting numbers</Styled.H3>
                <Styled.Code>{`console.log(Math.round(2.5));   // 3
console.log(Math.floor(-1.2));  // -2
console.log(Math.trunc(-1.2));  // -1

console.log((1.005).toFixed(2));     // "1.01" (rounded)
console.log((1234.5678).toPrecision(5)); // "1234.6"

// Avoid floating money with cents; use integers or a decimal lib:
const cents = 1999; // ₹19.99 stored as 1999 paise
const add = (a,b) => a + b;
console.log(add(1999, 1) / 100); // 20.0`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Summation error & Kahan compensation (brief)</Styled.H3>
                <Styled.Code>{`// Naive sum can accumulate error:
const xs = Array(1000).fill(0.1);
const naive = xs.reduce((s, x) => s + x, 0);
console.log(naive); // ~99.99999999997

// Kahan summation improves accuracy:
function kahanSum(arr){
  let sum = 0, c = 0;
  for (const x of arr) {
    const y = x - c;
    const t = sum + y;
    c = (t - sum) - y;
    sum = t;
  }
  return sum;
}
console.log(kahanSum(xs)); // 100`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 — Parsing & literals vs conversion</Styled.H3>
                <Styled.Code>{`console.log(parseFloat("3.14rad")); // 3.14 (stops at 'r')
console.log(Number("3.14rad"));   // NaN  (whole string must be numeric)
console.log(Number("Infinity"));   // Infinity
console.log(Number("-0"));         // -0 (signed zero preserved)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 12 — BigInt for precise integers</Styled.H3>
                <Styled.Code>{`// For integers beyond 2^53-1, use BigInt (no decimals):
const big = 9007199254740993n; // > MAX_SAFE_INTEGER
console.log(big + 2n);         // 9007199254740995n
// console.log(big + 2);       // ❌ TypeError: cannot mix BigInt and Number`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 13 — Practical guidance</Styled.H3>
                <Styled.UL>
                    <li>Use <code>Number.isNaN</code> (not global <code>isNaN</code>) to check NaN without coercion.</li>
                    <li>Compare floats with a tolerance (<code>Number.EPSILON</code> scaled to magnitude).</li>
                    <li>Keep money/points as integers (paise/cents) or use a decimal library.</li>
                    <li>Avoid relying on evaluation order for floating math; sums are not associative.</li>
                    <li>Use <code>BigInt</code> for exact, large integers; never mix with <code>number</code> arithmetic.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default FloatingPointPrecision;
