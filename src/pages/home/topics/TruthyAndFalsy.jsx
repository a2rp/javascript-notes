// TruthyAndFalsy.jsx
import React from "react";
import { Styled } from "./styled";

const TruthyAndFalsy = () => {
    return (
        <Styled.Page>
            <Styled.H1>Truthy &amp; falsy (ToBoolean)</Styled.H1>

            <Styled.Lead>
                JavaScript converts values to a boolean using the abstract operation
                <em> ToBoolean</em>. Some values are <em>falsy</em> and become <code>false</code>;
                everything else is <em>truthy</em> and becomes <code>true</code>.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Falsy values (exact list):</strong>{" "}
                        <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code> (BigInt zero),
                        <code>NaN</code>, <code>""</code> (empty string), <code>null</code>, <code>undefined</code>.
                    </li>
                    <li>
                        <strong>Everything else is truthy:</strong> all objects (including{" "}
                        <code>&#123;&#125;</code>, <code>[]</code>, functions, <code>new Boolean(false)</code>),
                        non-empty strings (even <code>"0"</code> and <code>"false"</code>), non-zero numbers,
                        non-zero BigInts.
                    </li>
                    <li>
                        <strong>Boolean conversion:</strong> Use <code>Boolean(x)</code> or <code>!!x</code> to get a real boolean.
                    </li>
                    <li>
                        <strong>Short-circuiting:</strong> <code>||</code> returns the first truthy operand,
                        <code>&amp;&amp;</code> returns the first falsy operand; they return the actual operand value,
                        not a strict boolean.
                    </li>
                    <li>
                        <strong><code>??</code> vs <code>||</code>:</strong> <code>??</code> treats only <code>null</code>/<code>undefined</code> as “empty”;
                        <code>||</code> treats any falsy value as “empty”.
                    </li>
                    <li>
                        <strong>Environment quirk:</strong> In browsers, <code>document.all</code> is a special
                        web-compat oddity that behaves <em>falsy</em> even though it’s an object.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Converting to boolean</Styled.H3>
                <Styled.Code>{`console.log(Boolean(false));   // false
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("0"));     // true  (non-empty string)
console.log(Boolean("false")); // true  (non-empty string)
console.log(Boolean([]));      // true  (objects are truthy)
console.log(Boolean({}));      // true
console.log(Boolean(0n));      // false (BigInt zero)
console.log(Boolean(NaN));     // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Objects are truthy (even empty ones)</Styled.H3>
                <Styled.Code>{`if ([]) { console.log("[] is truthy"); }
if ({}) { console.log("{} is truthy"); }
if (function(){}) { console.log("functions are truthy"); }

// Output:
// [] is truthy
// {} is truthy
// functions are truthy`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Wrapper objects vs primitives</Styled.H3>
                <Styled.Code>{`if (new Boolean(false)) {
  console.log("Runs, because objects are truthy"); // runs
}
console.log(Boolean(new Boolean(false))); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — <code>||</code> returns first truthy; <code>&amp;&amp;</code> first falsy</Styled.H3>
                <Styled.Code>{`console.log("" || "fallback");     // "fallback"  ("" is falsy)
console.log("hi" || "fallback");   // "hi"

console.log(0 && "next");          // 0  (falsy short-circuit)
console.log(2 && "next");          // "next" (both truthy → returns last)

const cached = 0;
const a = cached || 10;            // 10  (0 is falsy)
const b = cached ?? 10;            // 0   (nullish only) 
console.log(a, b);                 // 10 0`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — <code>??</code> vs <code>||</code> for defaults</Styled.H3>
                <Styled.Code>{`const input = "";
const usingOr  = input || "default";   // "default" ("" is falsy)
const usingNN  = input ?? "default";   // ""        (non-nullish, so keep "")
console.log(usingOr, usingNN);         // "default" ""`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — BigInt zero is falsy; other BigInts truthy</Styled.H3>
                <Styled.Code>{`console.log(Boolean(0n));     // false
console.log(Boolean(12n));    // true
console.log(0n || 99n);       // 99n`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Numbers: <code>-0</code> and <code>NaN</code> are falsy</Styled.H3>
                <Styled.Code>{`console.log(Boolean(-0));     // false
console.log(Boolean(NaN));    // false
console.log(-0 || 1);         // 1
console.log(NaN || 1);        // 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Common pitfalls</Styled.H3>
                <Styled.Code>{`if ("0") { console.log("string '0' is truthy"); } // runs
if (" ")  { console.log("space is truthy"); }           // runs
if ([])   { console.log("[] is truthy but Number([]) == 0"); } // runs
console.log(Number([])); // 0 (different coercion, not ToBoolean)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Filtering truthy items</Styled.H3>
                <Styled.Code>{`const mixed = [0, 1, "", "hi", null, undefined, "ok", NaN, 2];
const truthies = mixed.filter(Boolean);
console.log(truthies); // [1, "hi", "ok", 2]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Browser quirk: <code>document.all</code> is falsy</Styled.H3>
                <Styled.Code>{`// In browsers for legacy reasons:
console.log(Boolean(document.all)); // false
// Treat this as a historical special case; avoid using it in logic.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 — Force real booleans with <code>!!</code></Styled.H3>
                <Styled.Code>{`const v = "hello";
const bool1 = Boolean(v);
const bool2 = !!v;
console.log(bool1, bool2); // true true`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default TruthyAndFalsy;
