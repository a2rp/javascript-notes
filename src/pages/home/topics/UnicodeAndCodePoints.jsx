// UnicodeAndCodePoints.jsx
import React from "react";
import { Styled } from "./styled";

const UnicodeAndCodePoints = () => {
    return (
        <Styled.Page>
            <Styled.H1>Unicode &amp; code points</Styled.H1>

            <Styled.Lead>
                JavaScript strings are sequences of <strong>UTF-16 code units</strong> (16-bit values).
                Unicode defines <strong>code points</strong> (abstract characters like U+0041 “A”, U+1F600 “😀”).
                Most BMP characters (U+0000–U+FFFF) are one code unit; non-BMP characters (U+10000–U+10FFFF) use a
                <em>surrogate pair</em> (two code units). This is why <code>length</code> can differ from the number
                of visible characters. We’ll handle code points correctly using <code>codePointAt</code>,
                <code>fromCodePoint</code>, <code>for…of</code>, spread, and Unicode-aware regex.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Code point:</strong> A Unicode scalar value like U+0041 or U+1F600.
                    </li>
                    <li>
                        <strong>Code unit (UTF-16):</strong> A 16-bit value. Non-BMP code points are encoded as two units
                        (high surrogate 0xD800–0xDBFF + low surrogate 0xDC00–0xDFFF).
                    </li>
                    <li>
                        <strong>Escapes:</strong> <code>\uXXXX</code> (BMP) and <code>\u{"{"}X...{"}"}</code> (code point escape,
                        works for any code point, e.g. <code>\u{"{1F600}"}</code>).
                    </li>
                    <li>
                        <strong>APIs:</strong> <code>String.prototype.codePointAt</code> / <code>String.fromCodePoint</code>{" "}
                        (code point safe) vs <code>charCodeAt</code> / <code>fromCharCode</code> (code units).
                    </li>
                    <li>
                        <strong>Iteration:</strong> <code>for…of</code> and <code>[...str]</code> iterate by code points.
                    </li>
                    <li>
                        <strong>Normalization:</strong> <code>str.normalize("NFC" | "NFD" | "NFKC" | "NFKD")</code> to unify
                        canonically equivalent sequences (e.g., composed vs decomposed accents).
                    </li>
                    <li>
                        <strong>Regex Unicode mode:</strong> Use the <code>u</code> flag for proper code point handling and
                        <code>\p{"{...}"}</code> property escapes (e.g., <code>/\p{"{Emoji}"}/u</code>).
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Code units vs code points</Styled.H3>
                <Styled.Code>{`const A = "A";          // U+0041 (BMP)
const face = "😀";    // U+1F600 (non-BMP, surrogate pair)

// length counts UTF-16 code units
console.log(A.length);     // 1
console.log(face.length);  // 2  (two code units)

// charCodeAt -> code unit; codePointAt -> full code point
console.log(A.charCodeAt(0).toString(16));       // "41"
console.log(A.codePointAt(0).toString(16));      // "41"

console.log(face.charCodeAt(0).toString(16));    // "d83d" (high surrogate)
console.log(face.charCodeAt(1).toString(16));    // "de00" (low surrogate)
console.log(face.codePointAt(0).toString(16));   // "1f600"  (correct code point)

// WRONG: indexing splits the surrogate pair
console.log(face[0]); // "\uD83D" (half)
console.log(face[1]); // "\uDE00" (half)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Creating characters</Styled.H3>
                <Styled.Code>{`// BMP via \\uXXXX
const snow = "\\u2744"; // "❄"
console.log(snow); // "❄"

// Any code point via \\u{...} (code point escape)
const grin = "\\u{1F600}";
console.log(grin); // "😀"

// Programmatic construction
console.log(String.fromCharCode(0x41));   // "A"  (code unit)
console.log(String.fromCodePoint(0x1F680)); // "🚀" (code point)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Iterating &amp; counting by code points</Styled.H3>
                <Styled.Code>{`const str = "A😀B";
for (const ch of str) {
  console.log(ch);
}
// A
// 😀
// B

console.log([...str]);         // ["A","😀","B"]
console.log([...str].length);  // 3 (code points)
console.log(str.length);       // 4 (code units)

// charAt/at read code units (note: at supports negatives)
console.log(str.charAt(1)); // first half of 😀
console.log(str.at(-2));    // second half of 😀`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Combining marks &amp; normalization (NFC/NFD)</Styled.H3>
                <Styled.Code>{`// "ñ" as composed vs decomposed
const nTilde1 = "\\u00F1";          // "ñ" (NFC single code point)
const nTilde2 = "n\\u0303";         // "n" + COMBINING TILDE (NFD)

console.log(nTilde1 === nTilde2);                     // false (different code units)
console.log(nTilde1.length, nTilde2.length);          // 1 2

// Normalize to compare logically-equal text
console.log(nTilde1.normalize("NFC") === nTilde2.normalize("NFC")); // true

// Display is the same, but sequences differ until normalized
console.log(nTilde1); // "ñ"
console.log(nTilde2); // "ñ"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Grapheme clusters (emoji sequences)</Styled.H3>
                <Styled.Code>{`// Some visible characters are sequences of multiple code points
const family = "👨‍👩‍👧‍👦"; // ZWJ sequence (multiple code points)
const flagIN = "🇮🇳";        // two regional indicators

console.log([...family].length); // code points count (e.g., 7+)
console.log([...flagIN].length); // 2 (two code points)

// Count user-visible characters (grapheme clusters) with Intl.Segmenter
if (typeof Intl !== "undefined" && Intl.Segmenter) {
  const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  const clusterCount = [...seg.segment(family)].length;
  console.log(clusterCount); // 1 (one visible family glyph)
}`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Regex with Unicode mode &amp; properties</Styled.H3>
                <Styled.Code>{`// Without 'u', '.' matches code units (splits surrogate pair)
console.log("😀".match(/./g));   // ["\\uD83D","\\uDE00"] (two halves)

// With 'u', '.' matches full code points
console.log("😀".match(/./gu));  // ["😀"]

// Property escapes require 'u'
console.log(/\\p{Emoji}/u.test("😀"));            // true
console.log("naïve".match(/\\p{Letter}+/gu));     // ["naïve"]

// Using \\u{...} in regex needs 'u'
console.log(/\\u{1F680}/u.test("🚀")); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Safe slicing by code points</Styled.H3>
                <Styled.Code>{`const s = "Hi 😀 World";
const cp = [...s];        // array of code points (grapheme-ish for simple cases)
console.log(cp.slice(0, 4).join("")); // "Hi 😀"
// Direct substring could split pairs if not careful:
console.log(s.slice(0, 4)); // Might cut into surrogate depending on positions`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default UnicodeAndCodePoints;
