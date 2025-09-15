// StringOperations.jsx
import React from "react";
import { Styled } from "./styled";

const StringOperations = () => {
    return (
        <Styled.Page>
            <Styled.H1>String operations: slice, at, includes, pad, trim</Styled.H1>

            <Styled.Lead>
                We practice everyday string tasks: taking substrings with <code>slice</code>, reading a single character with <code>at</code> (supports negative indexes), finding substrings with <code>includes</code>, left/right padding with <code>padStart</code>/<code>padEnd</code>, and cleaning edges with <code>trim</code>/<code>trimStart</code>/<code>trimEnd</code>.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong><code>slice(start, end?)</code>:</strong> returns the part from <em>start</em> (inclusive) to <em>end</em> (exclusive). Negative indexes count from the end. Original string is unchanged.</li>
                    <li><strong><code>at(index)</code>:</strong> returns the one-unit string at <em>index</em>; accepts negatives. Returns <code>undefined</code> if out of range.</li>
                    <li><strong><code>includes(search, fromIndex=0)</code>:</strong> case-sensitive substring check; not regex.</li>
                    <li><strong><code>padStart(targetLen, pad=" ")</code> / <code>padEnd(...)</code>:</strong> repeats/truncates <em>pad</em> to reach target length; returns a new string.</li>
                    <li><strong><code>trim()</code>, <code>trimStart()</code>, <code>trimEnd()</code>:</strong> remove whitespace from both/start/end.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — <code>slice</code> basics</Styled.H3>
                <Styled.Code>{`const s = "JavaScript";

// start..end (end excluded)
console.log(s.slice(0, 4));   // "Java"
console.log(s.slice(4, 10));  // "Script"

// omit end -> till the end
console.log(s.slice(4));      // "Script"

// negative indexes count from the end
console.log(s.slice(-6));     // "Script"
console.log(s.slice(-6, -3)); // "Scr"

// original is unchanged
console.log(s);               // "JavaScript"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — <code>at</code> (with negatives)</Styled.H3>
                <Styled.Code>{`const t = "ABCDE";

console.log(t.at(0));   // "A"
console.log(t.at(2));   // "C"
console.log(t.at(-1));  // "E" (last char)
console.log(t.at(-3));  // "C"

// Out of range -> undefined
console.log(t.at(99));  // undefined

// Contrast: charAt doesn't support negatives and returns ""
console.log(t.charAt(-1)); // ""`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — <code>includes</code> with start position</Styled.H3>
                <Styled.Code>{`const u = "apple";

// basic checks (case-sensitive)
console.log(u.includes("pp"));     // true
console.log(u.includes("Pp"));     // false

// start searching from index
console.log(u.includes("p", 2));   // true (the second "p" at index 2)
console.log(u.includes("ap", 1));  // false

// Note: passing a RegExp throws
// u.includes(/pp/); // TypeError`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — <code>padStart</code> for numbers &amp; IDs</Styled.H3>
                <Styled.Code>{`// zero-pad
const n = 7;
console.log(String(n).padStart(3, "0")); // "007"

// left pad with custom pattern (repeated then truncated)
console.log("abc".padStart(10, "123"));  // "1231231abc"

// Masking example (last 4 visible)
const card = "1234567812345678";
const masked = card.slice(-4).padStart(card.length, "•");
console.log(masked); // "••••••••••••5678"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — <code>padEnd</code> for simple column layout</Styled.H3>
                <Styled.Code>{`const rows = [
  ["Name", "Qty", "Price"],
  ["Apples", "3", "₹120"],
  ["Bananas", "10", "₹99"]
];

const out = rows.map(([a,b,c]) =>
  a.padEnd(10, " ") + b.padStart(5, " ") + "  " + c.padStart(7, " ")
).join("\\n");

console.log("\\n" + out);
/*
Name        Qty    Price
Apples        3     ₹120
Bananas      10      ₹99
*/`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — <code>trim</code>, <code>trimStart</code>, <code>trimEnd</code></Styled.H3>
                <Styled.Code>{`const raw = "  \\n\t Hello World \\t\\n  ";
console.log(raw.length);                 // includes spaces/tabs/newlines

const both = raw.trim();
console.log(both);                       // "Hello World"
console.log(both.length);                // 11

console.log(raw.trimStart());            // "Hello World \\t\\n  "
console.log(raw.trimEnd());              // "  \\n\\t Hello World"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Combine operations</Styled.H3>
                <Styled.Code>{`// Clean, check, and take a preview
function preview(input) {
  const clean = input.trim();
  const ok = clean.includes("@");
  const head = clean.slice(0, 8);
  return { ok, head, shown: head.padEnd(8, "·") };
}

console.log(preview("   hello@js.dev   "));
/*
{ ok: true, head: "hello@js", shown: "hello@js" }
*/

console.log(preview("   no-at-symbol   "));
/*
{ ok: false, head: "no-at-sy", shown: "no-at-sy" }
*/`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default StringOperations;
