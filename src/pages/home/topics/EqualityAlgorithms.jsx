// EqualityAlgorithms.jsx
import React from "react";
import { Styled } from "./styled";

const EqualityAlgorithms = () => {
    return (
        <Styled.Page>
            <Styled.H1>Equality: <code>==</code> vs <code>===</code> vs <code>Object.is</code></Styled.H1>

            <Styled.Lead>
                JavaScript has three main equality notions. <code>===</code> (strict) does no type
                coercion. <code>==</code> (loose) coerces types using specific rules. <code>Object.is</code>
                follows <em>SameValue</em> semantics (like <code>===</code> except it distinguishes <code>+0</code>/<code>-0</code>
                and treats <code>NaN</code> as equal to itself).
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Strict equality <code>===</code>:</strong> No coercion. Different types → <code>false</code>.
                        For numbers: <code>NaN</code> is not equal to anything (even itself), and <code>+0 === -0</code> is <code>true</code>.
                    </li>
                    <li>
                        <strong>Loose equality <code>==</code>:</strong> May coerce: booleans → numbers; strings ↔ numbers;
                        objects → primitives (via ToPrimitive); <code>null</code> and <code>undefined</code> are only equal to each other.
                        BigInt has special cases with numbers/strings (see examples).
                    </li>
                    <li>
                        <strong><code>Object.is(a, b)</code> (SameValue):</strong> Like <code>===</code> but
                        <em>distinguishes</em> <code>+0</code> and <code>-0</code> and considers <code>NaN</code> equal to <code>NaN</code>.
                    </li>
                    <li>
                        <strong>SameValueZero:</strong> Used by <code>Array.prototype.includes</code>, <code>Set</code>, <code>Map</code>.
                        Treats <code>NaN</code> as equal to <code>NaN</code> and <code>+0</code> equal to <code>-0</code>.
                    </li>
                    <li>
                        <strong>Guidance:</strong> Prefer <code>===</code>/<code>!==</code>. Use <code>Object.is</code> when distinguishing <code>-0/+0</code> or matching <code>NaN</code>.
                        Use <code>==</code> narrowly (e.g., <code>x == null</code> to check <code>null</code> or <code>undefined</code>).
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Quick contrasts</Styled.H3>
                <Styled.Code>{`console.log(1 == "1");    // true  (coerces string → number)
console.log(1 === "1");   // false (different types)
console.log(Object.is(1, "1")); // false

console.log(null == undefined); // true  (special case)
console.log(null === undefined);// false
`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — <code>null</code>/<code>undefined</code> with <code>==</code></Styled.H3>
                <Styled.Code>{`const v1 = null;
const v2 = undefined;
console.log(v1 == v2);     // true
console.log(v1 == 0);      // false
console.log(v2 == 0);      // false

// Handy nullish check:
function getOrDefault(x, d) { return x == null ? d : x; }
console.log(getOrDefault(undefined, 10)); // 10
console.log(getOrDefault(null, 10));      // 10
console.log(getOrDefault(0, 10));         // 0 (kept)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — <code>NaN</code> and signed zero</Styled.H3>
                <Styled.Code>{`console.log(NaN === NaN);           // false
console.log(Object.is(NaN, NaN));    // true
console.log([NaN].includes(NaN));    // true (SameValueZero)

console.log(+0 === -0);              // true
console.log(Object.is(+0, -0));      // false
console.log(1 / +0, 1 / -0);         // Infinity -Infinity (sign matters)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — BigInt interop with <code>==</code> and <code>===</code></Styled.H3>
                <Styled.Code>{`console.log(10n == 10);       // true   (numeric compare)
console.log(10n === 10);      // false  (different types)
console.log(10n == "10");     // true   (string → BigInt)
console.log(10n == 10.1);     // false  (fractional number)
console.log(9007199254740993n == 9007199254740993); // false (number is rounded)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Booleans with <code>==</code> coerce to numbers</Styled.H3>
                <Styled.Code>{`console.log(true == 1);    // true
console.log(false == 0);   // true
console.log("0" == false); // true ("0" → 0, false → 0)
// Prefer explicit: Number(flag) === 1 or Boolean(num)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Objects vs primitives</Styled.H3>
                <Styled.Code>{`console.log([1] == 1);         // true (["1"].toString() → "1" → 1)
console.log(["1","2"] == "1,2"); // true (array → "1,2")
console.log({} == "[object Object]"); // true-ish? No → false ({} → "[object Object]" <> string; "==" doesn't flip both sides)

// With "==", objects use ToPrimitive (valueOf/toString) before comparing.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Arrays: <code>indexOf</code> vs <code>includes</code></Styled.H3>
                <Styled.Code>{`const xs = [NaN, 0, -0];
console.log(xs.indexOf(NaN));   // -1  (uses ===; NaN !== NaN)
console.log(xs.includes(NaN));  // true (SameValueZero)
console.log(xs.includes(-0));   // true (SameValueZero treats +0/-0 equal)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Map/Set key equality (SameValueZero)</Styled.H3>
                <Styled.Code>{`const s = new Set([NaN]);
console.log(s.has(NaN)); // true (NaN equals NaN)

const m = new Map([[+0, "a"]]);
console.log(m.has(-0));  // true (+0 and -0 treated equal)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Practical patterns</Styled.H3>
                <Styled.Code>{`// 1) Prefer strict equality:
const isUser = id => typeof id === "string" && id === "user_123";

// 2) Nullish check with '==':
if (value == null) { /* handle null or undefined */ }

// 3) Need to detect NaN or -0 specifically:
const isNegZero = x => x === 0 && 1/x === -Infinity;
console.log(Object.is(NaN, NaN)); // true
console.log(isNegZero(-0));       // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — DIY semantics snippets</Styled.H3>
                <Styled.Code>{`// SameValueZero (used by includes/Set/Map):
const sameValueZero = (a, b) => a === b || (a !== a && b !== b);
// SameValue (Object.is):
const sameValue = (a, b) =>
  a === b ? (a !== 0 || 1/a === 1/b) : (a !== a && b !== b);

console.log(sameValueZero(NaN, NaN)); // true
console.log(sameValue(+0, -0));       // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 — Common pitfalls to avoid</Styled.H3>
                <Styled.UL>
                    <li><code>"" == 0</code> is <code>true</code> (empty string → 0). Prefer explicit casts.</li>
                    <li><code>[] == 0</code> is <code>true</code> (<code>[]</code> → <code>""</code> → <code>0</code>), but <code>[] === 0</code> is <code>false</code>.</li>
                    <li><code>null</code> only equals <code>undefined</code> with <code>==</code>; it never equals 0/""/false.</li>
                    <li>Don’t rely on <code>==</code> for business logic unless you really want its coercions.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default EqualityAlgorithms;
