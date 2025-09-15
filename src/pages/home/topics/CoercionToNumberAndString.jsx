// CoercionToNumberAndString.jsx
import React from "react";
import { Styled } from "./styled";

const CoercionToNumberAndString = () => {
    return (
        <Styled.Page>
            <Styled.H1>Coercion to number/string</Styled.H1>

            <Styled.Lead>
                JavaScript converts values using abstract operations <em>ToNumber</em> and{" "}
                <em>ToString</em>. Operators trigger these conversions implicitly (e.g., unary{" "}
                <code>+</code>, arithmetic, string concatenation). Know the exact rules and
                edge cases.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>ToNumber (primitives):</strong> <code>undefined → NaN</code>,{" "}
                        <code>null → +0</code>, <code>true → 1</code>, <code>false → 0</code>,{" "}
                        <code>string</code> is parsed as a numeric literal (Unicode whitespace
                        trimmed; supports <code>Infinity</code>, hex <code>0x</code>, binary{" "}
                        <code>0b</code>, octal <code>0o</code>); <em>Symbols throw</em>.
                    </li>
                    <li>
                        <strong>ToString (primitives):</strong> <code>undefined → "undefined"</code>,{" "}
                        <code>null → "null"</code>, booleans → <code>"true"/"false"</code>, numbers
                        to decimal form (<code>NaN</code> → <code>"NaN"</code>,{" "}
                        <code>Infinity</code> → <code>"Infinity"</code>, <code>-0</code> →{" "}
                        <code>"0"</code>), BigInt → its digits; <em>implicit ToString on symbols throws</em>,
                        though <code>String(symbol)</code> is allowed.
                    </li>
                    <li>
                        <strong>Objects/arrays:</strong> First go through <em>ToPrimitive</em> (usually{" "}
                        <code>valueOf</code> then <code>toString</code>) and then convert that primitive.
                    </li>
                    <li>
                        <strong>Operators:</strong> <code>+</code> is special: if either side becomes a
                        string, it <em>concatenates</em>; otherwise it does numeric addition. Other
                        arithmetic (<code>- * / % **</code>, unary <code>+</code>/<code>-</code>) do numeric coercion.
                    </li>
                    <li>
                        <strong>BigInt:</strong> Cannot mix with <code>number</code> in arithmetic; many
                        numeric operators with BigInt are separate. Unary <code>+</code> on BigInt is a{" "}
                        <code>TypeError</code>.
                    </li>
                    <li>
                        <strong>Prefer explicit casts:</strong> Use <code>Number(x)</code>,{" "}
                        <code>String(x)</code> when intent matters; avoid relying on implicit coercion
                        in tricky code paths.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — ToNumber basics</Styled.H3>
                <Styled.Code>{`console.log(Number(undefined));   // NaN
console.log(Number(null));        // 0
console.log(Number(true));        // 1
console.log(Number(false));       // 0
console.log(Number("42"));        // 42
console.log(Number("  \\t\\n 42 ")); // 42 (trimmed)
console.log(Number(""));          // 0
console.log(Number("Infinity"));  // Infinity
console.log(Number("0x10"));      // 16 (hex)
console.log(Number("0b1010"));    // 10 (binary)
console.log(Number("0o11"));      // 9  (octal)
console.log(Number("1_000"));     // NaN (underscore not allowed in strings)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — ToString basics</Styled.H3>
                <Styled.Code>{`console.log(String(undefined));  // "undefined"
console.log(String(null));       // "null"
console.log(String(true));       // "true"
console.log(String(12.34));      // "12.34"
console.log(String(NaN));        // "NaN"
console.log(String(-0));         // "0"
console.log(String(10n));        // "10"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Symbols: explicit ok, implicit throws</Styled.H3>
                <Styled.Code>{`const s = Symbol("id");
console.log(String(s));    // "Symbol(id)"
// "" + s;                 // ❌ TypeError: Cannot convert a Symbol value to a string
// Number(s);              // ❌ TypeError: Cannot convert a Symbol value to a number`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Unary <code>+</code> and numeric operators</Styled.H3>
                <Styled.Code>{`console.log(+"42");          // 42
console.log(+"  \\n  ");     // 0
console.log(+true);          // 1
console.log(+null);          // 0
console.log(+undefined);     // NaN
// console.log(+10n);        // ❌ TypeError (BigInt cannot be converted by unary +)
console.log("6" * "7");      // 42 (both ToNumber then multiply)
console.log("8" - 3);        // 5
console.log("10" / 2);       // 5`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — <code>+</code>: concatenation vs addition</Styled.H3>
                <Styled.Code>{`console.log("a" + 1);     // "a1" (string concatenation)
console.log(1 + "a");       // "1a"
console.log(1 + 2 + "3");   // "33"  (1+2 → 3, then "3" → "3"; 3 + "3" → "33")
console.log("3" + 1 + 2);   // "312" (string context from the start)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Arrays/objects via ToPrimitive → ToNumber/ToString</Styled.H3>
                <Styled.Code>{`console.log(Number([]));           // 0   ("" → 0)
console.log(Number([""]));         // 0
console.log(Number([" 5 "]));      // 5
console.log(Number([1,2]));        // NaN (joins to "1,2" → NaN)
console.log(Number({}));           // NaN (no numeric primitive)
console.log(String({}));           // "[object Object]"
console.log(String([1,2,3]));      // "1,2,3"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Dates: number vs string</Styled.H3>
                <Styled.Code>{`const d = new Date("2024-01-01T00:00:00Z");
console.log(+d);           // 1704067200000  (ms since epoch; numeric coercion)
console.log(String(d));    // e.g., "Mon Jan 01 2024 ..." (string coercion)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — parseInt/parseFloat vs Number</Styled.H3>
                <Styled.Code>{`console.log(parseInt("42px"));   // 42      (stops at non-digit)
console.log(Number("42px"));        // NaN     (whole string must be numeric)
console.log(parseFloat("3.14rad")); // 3.14
console.log(parseInt("08"));        // 8       (decimal by default; "0x" → hex)
console.log(Number("08"));          // 8
console.log(parseInt("0b1010"));    // 0       (parseInt doesn't understand "0b")
console.log(Number("0b1010"));      // 10      (ToNumber understands binary/octal)
console.log(parseInt("1010", 2));   // 10      (use radix for bases)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — BigInt & number mixing rules</Styled.H3>
                <Styled.Code>{`const bi = 10n;
// console.log(bi + 1);      // ❌ TypeError (can't mix BigInt and Number)
console.log(bi + 2n);        // 12n
console.log(10n == 10);      // true  (loose equality coerces)
console.log(10n === 10);     // false (different types)
console.log(Number(10n) + 1); // 11   (explicit, but beware precision for large BigInts)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Custom objects controlling coercion</Styled.H3>
                <Styled.Code>{`const price = {
  amount: 2500,
  currency: "INR",
  valueOf(){ return this.amount; },     // numeric contexts
  toString(){ return \`\${this.currency} \${this.amount}\`; } // string contexts
};
console.log(price + 500);     // 3000  (valueOf → number)
console.log(String(price));   // "INR 2500"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 — Whitespace & empty string nuances</Styled.H3>
                <Styled.Code>{`console.log(Number("\\u00A0\\t\\n")); // 0   (Unicode whitespace trims to empty → 0)
console.log(Number("\\u2003 5 "));   // 5   (em space trimmed)
console.log("" + 0);                 // "0" (ToString on number)
console.log(Number(""));             // 0`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 12 — Practical guidance</Styled.H3>
                <Styled.UL>
                    <li>Need a number? Prefer <code>Number(x)</code> or <code>parseInt/parseFloat</code> (with radix) over implicit coercion.</li>
                    <li>Need a string? Prefer template literals or <code>String(x)</code> instead of relying on <code>+</code> concatenation with non-strings.</li>
                    <li>Avoid implicit symbol/string or BigInt/number coercions—they often throw or surprise.</li>
                    <li>Be mindful that arrays/objects first go through <em>ToPrimitive</em>; <code>[]</code> becomes <code>0</code> via <code>""</code>.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default CoercionToNumberAndString;
