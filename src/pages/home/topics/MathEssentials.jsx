// MathEssentials.jsx
import React from "react";
import { Styled } from "./styled";

const MathEssentials = () => {
    return (
        <Styled.Page>
            <Styled.H1>Math essentials (rounding, clamp, random)</Styled.H1>

            <Styled.Lead>
                Common math tasks in JS revolve around rounding, clamping values into a
                range, and generating random numbers. Here are the precise behaviors,
                pitfalls, and battle-tested snippets.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Rounding — <code>Math.round</code>, <code>floor</code>, <code>ceil</code>, <code>trunc</code>, <code>fround</code></Styled.H3>
                <Styled.UL>
                    <li><code>Math.round(x)</code>: nearest integer; halves (±0.5) round toward <em>+∞</em>. Examples: <code>round(0.5)=1</code>, <code>round(-1.5)=-1</code>, <code>round(-0.5)=-0</code> (negative zero).</li>
                    <li><code>Math.floor(x)</code>: largest integer ≤ <code>x</code>. <code>floor(-1.2) = -2</code>.</li>
                    <li><code>Math.ceil(x)</code>: smallest integer ≥ <code>x</code>. <code>ceil(-1.2) = -1</code>.</li>
                    <li><code>Math.trunc(x)</code>: drop the fractional part (toward 0). <code>trunc(-1.9) = -1</code>.</li>
                    <li><code>Math.fround(x)</code>: round to nearest 32-bit float (single precision). Useful for WebGL/typed-array parity.</li>
                    <li><code>Math.sign(x)</code>: returns <code>1</code>, <code>-1</code>, <code>0</code>, or <code>-0</code> (note the possible <code>-0</code>).</li>
                    <li><code>Math.abs(x)</code>: absolute value; <code>abs(-0)</code> is <code>0</code>.</li>
                </Styled.UL>
                <Styled.Code>{`console.log(Math.round(0.5));   // 1
console.log(Math.round(-1.5));  // -1 (ties toward +∞)
console.log(Object.is(Math.round(-0.5), -0)); // true

console.log(Math.floor(-1.2));  // -2
console.log(Math.ceil(-1.2));   // -1
console.log(Math.trunc(-1.2));  // -1
console.log(Math.fround(1/3));  // ~0.33333334 (single-precision)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Round to N decimals (beware FP error)</Styled.H3>
                <Styled.Code>{`// Simple, readable (string result):
console.log((1.005).toFixed(2)); // "1.01"

// Numeric helper with epsilon to reduce edge errors:
const roundTo = (x, n = 0) => {
  const p = 10 ** n;
  return Math.round((x + Number.EPSILON) * p) / p;
};
console.log(roundTo(1.005, 2)); // 1.01`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Clamp — keep a value within [min, max]</Styled.H3>
                <Styled.UL>
                    <li>No built-in <code>Math.clamp</code> (write your own).</li>
                    <li>Handle swapped bounds defensively if inputs are untrusted.</li>
                    <li>Propagate <code>NaN</code> if the input is not a real number (optional).</li>
                </Styled.UL>
                <Styled.Code>{`// Minimal, fast:
const clamp = (x, min, max) => Math.min(max, Math.max(min, x));
console.log(clamp(10, 0, 5));  // 5
console.log(clamp(-3, 0, 5));  // 0
console.log(clamp(3, 0, 5));   // 3

// Defensive version (swapped bounds / NaN guard):
const clampSafe = (x, a, b) => {
  let min = Math.min(a, b), max = Math.max(a, b);
  if (!(typeof x === "number" && Number.isFinite(x))) return NaN;
  return Math.min(max, Math.max(min, x));
};`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Random — <code>Math.random()</code> basics</Styled.H3>
                <Styled.UL>
                    <li><code>Math.random()</code> returns a float in <code>[0, 1)</code>.</li>
                    <li>It’s <em>not</em> cryptographically secure; do not use for tokens/passwords.</li>
                    <li>For secure randomness use <code>crypto.getRandomValues</code> (browser) or <code>crypto.randomBytes</code> (Node).</li>
                </Styled.UL>
                <Styled.Code>{`// Uniform float in [min, max):
const randomFloat = (min, max) => Math.random() * (max - min) + min;
console.log(randomFloat(5, 10)); // e.g., 7.23

// Uniform int in [min, max] (inclusive):
const randomInt = (min, max) => {
  min = Math.ceil(min); max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomInt(1, 6)); // 1..6`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Secure random integers (no modulo bias)</Styled.H3>
                <Styled.UL>
                    <li>Use rejection sampling with a secure source.</li>
                    <li>Browser: <code>crypto.getRandomValues</code>. Node: <code>require("node:crypto").randomBytes</code>.</li>
                </Styled.UL>
                <Styled.Code>{`// Browser secure int in [min, max] inclusive, unbiased:
function secureRandomInt(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max) || max < min) throw new Error("bad range");
  const range = max - min + 1;
  if (range <= 0) throw new Error("range too large");

  // 32-bit space
  const maxUnbiased = Math.floor(0x100000000 / range) * range - 1;
  const buf = new Uint32Array(1);
  while (true) {
    crypto.getRandomValues(buf);
    const x = buf[0];
    if (x <= maxUnbiased) return min + (x % range);
  }
}
// console.log(secureRandomInt(1, 6));`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Shuffling (Fisher–Yates)</Styled.H3>
                <Styled.Code>{`function shuffleInPlace(arr, rng = Math.random) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1)); // 0..i
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(shuffleInPlace([1,2,3,4])); // e.g., [3,1,4,2]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Other handy snippets</Styled.H3>
                <Styled.Code>{`// Map a value from one range to another:
const mapRange = (x, inMin, inMax, outMin, outMax) =>
  ( (x - inMin) * (outMax - outMin) ) / (inMax - inMin) + outMin;

// Wrap into [0, n) (positive modulo):
const wrap = (x, n) => ((x % n) + n) % n;

// Generate ~normal (Gaussian) via Box–Muller (mean=0, stdev=1):
function randomNormal() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random(); // (0,1)
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
console.log(mapRange(5, 0, 10, 0, 100));  // 50
console.log(wrap(-1, 5));                 // 4
console.log(randomNormal());              // e.g., -0.23`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Gotchas & tips</Styled.H3>
                <Styled.UL>
                    <li>Rounding halves: <code>Math.round</code> ties go toward <em>+∞</em>; for “bankers’ rounding” (ties to even), implement it yourself.</li>
                    <li><code>floor</code> vs <code>trunc</code> differ for negatives: <code>floor(-1.2)=-2</code>, <code>trunc(-1.2)=-1</code>.</li>
                    <li>When mapping or clamping user input, validate with <code>typeof x === "number" &amp;&amp; Number.isFinite(x)</code>.</li>
                    <li>Don’t use <code>Math.random</code> for security; use the crypto APIs.</li>
                    <li>Be mindful of floating-point error when rounding to decimals; consider integer cents or decimal libraries for money.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default MathEssentials;
