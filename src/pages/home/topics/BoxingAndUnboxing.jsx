// BoxingAndUnboxing.jsx
import React from "react";
import { Styled } from "./styled";

const BoxingAndUnboxing = () => {
    return (
        <Styled.Page>
            <Styled.H1>Boxing &amp; unboxing (wrapper objects)</Styled.H1>

            <Styled.Lead>
                Primitives aren’t objects, but when you access properties like{" "}
                <code>"hi".length</code> the engine temporarily <em>boxes</em> them into a
                wrapper object (<code>String</code>/<code>Number</code>/<code>Boolean</code>, etc.). When a
                wrapper is used in arithmetic/concatenation, it is <em>unboxed</em> back to
                a primitive via <code>ToPrimitive</code> (using <code>valueOf</code>/<code>toString</code>).
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Autoboxing:</strong> Accessing a property/method on a primitive implicitly
                        creates a temporary wrapper object so the operation can proceed; it’s
                        discarded immediately after.
                    </li>
                    <li>
                        <strong>Wrapper objects:</strong> <code>new String(...)</code>,{" "}
                        <code>new Number(...)</code>, <code>new Boolean(...)</code> create <em>objects</em>, not
                        primitives. They compare by identity and are almost always a bad idea.
                    </li>
                    <li>
                        <strong>Unboxing:</strong> When an object is used where a primitive is needed, the
                        engine applies <code>ToPrimitive</code>, typically calling{" "}
                        <code>obj.valueOf()</code> then <code>obj.toString()</code>. Results feed coercion.
                    </li>
                    <li>
                        <strong>Function vs constructor:</strong> <code>String(x)</code>,{" "}
                        <code>Number(x)</code>, <code>Boolean(x)</code> (called <em>without</em>{" "}
                        <code>new</code>) <em>convert</em> to primitives. With <code>new</code> they create
                        wrappers.
                    </li>
                    <li>
                        <strong>Special cases:</strong> <code>new Symbol()</code> ❌ TypeError;{" "}
                        <code>Symbol()</code> returns a primitive symbol. <code>BigInt()</code> converts to a
                        primitive BigInt; <code>new BigInt()</code> ❌ TypeError. <code>Object(primitive)</code> creates a wrapper object.
                    </li>
                    <li>
                        <strong>Truthiness trap:</strong> Any object (including{" "}
                        <code>new Boolean(false)</code>) is truthy in conditionals.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Autoboxing lets methods work on primitives</Styled.H3>
                <Styled.Code>{`console.log("abc".toUpperCase()); // "ABC"
console.log((42).toFixed(1));       // "42.0"
console.log(true.toString());        // "true"

// Behind the scenes, temporary String/Number/Boolean objects are created and discarded.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Writes to boxed primitives don’t stick</Styled.H3>
                <Styled.Code>{`let s = "hi";
s.x = 123;                 // ignored (assigned on a temporary wrapper)
// In strict mode this may throw TypeError.
// "use strict"; s.x = 123; // ❌ TypeError
console.log(s.x);          // undefined`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Converters (functions) vs wrappers (constructors)</Styled.H3>
                <Styled.Code>{`console.log(Number("42"));   // 42        (primitive)
console.log(String(99));   // "99"      (primitive)
console.log(Boolean(0));   // false     (primitive)

console.log(typeof new Number(5));  // "object"  (wrapper)
console.log(typeof new String("x")); // "object"
console.log(typeof new Boolean(0));  // "object"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Equality differences</Styled.H3>
                <Styled.Code>{`console.log(new Number(5) === 5);   // false (object vs primitive)
console.log(new Number(5) == 5);    // true  (unboxed via valueOf during ==)
console.log(Object.is(new Number(0), 0)); // false

// Prefer primitives. Wrappers make comparisons and APIs confusing.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Truthiness trap with <code>new Boolean(false)</code></Styled.H3>
                <Styled.Code>{`if (new Boolean(false)) {
  console.log("I run"); // runs, because objects are truthy
}

const b = new Boolean(false);
console.log(b.valueOf()); // false (primitive inside)
console.log(Boolean(b));  // true  (because b is an object)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Arithmetic/concat cause unboxing</Styled.H3>
                <Styled.Code>{`const n = new Number(7);
console.log(n + 1);      // 8   (valueOf() -> 7)
console.log("v=" + n);   // "v=7" (toString() used in string context)

const str = new String("ok");
console.log(str + "!");  // "ok!" (toString())`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Detecting wrappers & getting primitives</Styled.H3>
                <Styled.Code>{`const x = new Number(3);
console.log(x instanceof Number); // true (wrapper)
console.log(typeof x);            // "object"
console.log(x.valueOf());         // 3  (primitive)
console.log(typeof x.valueOf());  // "number"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Symbols & BigInts</Styled.H3>
                <Styled.Code>{`// Symbols:
const s = Symbol("id");
// new Symbol("id");     // ❌ TypeError (not a constructor)
const sw = Object(s);     // wrapper object
console.log(typeof sw);   // "object"
console.log(sw.valueOf() === s); // true

// BigInt:
const bi = BigInt(10);    // 10n (primitive)
// new BigInt(10);        // ❌ TypeError (not a constructor)
const biw = Object(10n);  // BigInt wrapper object
console.log(typeof biw, typeof bi); // "object" "bigint"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Objects are always truthy; avoid wrappers as Map keys</Styled.H3>
                <Styled.Code>{`const m = new Map();
m.set(new Number(5), "A");
console.log(m.get(5));           // undefined (different identity & type)
const key = [...m.keys()][0];
console.log(key.valueOf());      // 5 (but still a distinct object key)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Custom unboxing via <code>Symbol.toPrimitive</code> (FYI)</Styled.H3>
                <Styled.Code>{`const obj = {
  x: 10,
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? "[obj]" : this.x;
  }
};
console.log(obj + 5);          // 15   (number hint → 10)
console.log(String(obj));      // "[obj]" (string hint)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 — Practical guidance</Styled.H3>
                <Styled.UL>
                    <li>Use <code>Number(x)</code>, <code>String(x)</code>, <code>Boolean(x)</code> for conversion.</li>
                    <li>Avoid <code>new Number</code>/<code>new String</code>/<code>new Boolean</code>—prefer primitives.</li>
                    <li>Never rely on setting properties on primitives; they won’t persist (and may throw in strict mode).</li>
                    <li>Be careful with truthiness: wrapper objects are always truthy.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default BoxingAndUnboxing;
