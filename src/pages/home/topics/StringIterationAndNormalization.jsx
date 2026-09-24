// StringIterationAndNormalization.jsx
import React from "react";
import { Styled } from "./styled";

const StringIterationAndNormalization = () => {
    return (
        <Styled.Page>
            <Styled.H1>String iteration &amp; normalization</Styled.H1>

            <Styled.Lead>
                We iterate strings correctly (code points and user-visible characters) and
                normalize text so canonically equivalent sequences compare the same. We’ll use
                <code>for…of</code>, spread (<code>[...str]</code>), <code>Array.from</code>,
                <code>codePointAt</code>/<code>fromCodePoint</code>, and
                <code>Intl.Segmenter</code> for grapheme clusters, plus
                <code>String.prototype.normalize</code> (<code>NFC</code>, <code>NFD</code>, <code>NFKC</code>, <code>NFKD</code>).
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Iteration by code points:</strong> <code>for…of</code> and <code>[...str]</code> step over full code points (surrogate pairs stay intact).</li>
                    <li><strong>Grapheme clusters:</strong> What users see as one character (e.g., family emoji, accented letters) may be multiple code points; segment with <code>Intl.Segmenter(…, {"{"} granularity: "grapheme" {"}"} )</code>.</li>
                    <li><strong>Normalization:</strong> <code>NFC</code> (composed) vs <code>NFD</code> (decomposed); <code>NFKC</code>/<code>NFKD</code> also fold compatibility characters (e.g., “①” → “1”).</li>
                    <li><strong>APIs:</strong> <code>str.normalize(form)</code>, <code>codePointAt</code>, <code>String.fromCodePoint</code>, <code>Array.from(str, mapFn)</code>.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 - Iterate code points safely</Styled.H3>
                <Styled.Code>{`const s = "A😀B";
for (const ch of s) {
  console.log(ch);
}
/*
A
😀
B
*/

// Spread also iterates by code points
console.log([...s]); // ["A","😀","B"]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 - Map to code point values (hex)</Styled.H3>
                <Styled.Code>{`const word = "Go🚀";
const hex = Array.from(word, ch => ch.codePointAt(0).toString(16));
console.log(hex.join(" ")); // "47 6f 1f680"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 - Rebuilding from code points</Styled.H3>
                <Styled.Code>{`const cps = [0x41, 0x1F600, 0x42]; // A, 😀, B
const rebuilt = String.fromCodePoint(...cps);
console.log(rebuilt); // "A😀B"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 - Grapheme clusters with <code>Intl.Segmenter</code></Styled.H3>
                <Styled.Code>{`const family = "👨‍👩‍👧‍👦"; // multiple code points joined by ZWJ
if (typeof Intl !== "undefined" && Intl.Segmenter) {
  const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  const clusters = [...seg.segment(family)].map(x => x.segment);
  console.log(clusters);      // ["👨‍👩‍👧‍👦"] (1 visible character)
  console.log(clusters.length); // 1
} else {
  console.log("Intl.Segmenter not available");
}`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 - Slice by grapheme clusters</Styled.H3>
                <Styled.Code>{`const text = "Hi 👋🏽, family: 👨‍👩‍👧‍👦!";
function sliceGraphemes(str, n) {
  if (!Intl.Segmenter) return [...str].slice(0, n).join(""); // fallback by code points
  const seg = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  const clusters = [...seg.segment(str)].map(s => s.segment);
  return clusters.slice(0, n).join("");
}
console.log(sliceGraphemes(text, 5)); // e.g., "Hi 👋🏽" (emoji stays intact)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 - NFC vs NFD equality</Styled.H3>
                <Styled.Code>{`const composed = "\\u00E9";     // "é" as single code point
const decomposed = "e\\u0301";  // "e" + COMBINING ACUTE
console.log(composed === decomposed); // false (different sequences)
console.log(composed.normalize("NFC") === decomposed.normalize("NFC")); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 - Strip diacritics (accent removal)</Styled.H3>
                <Styled.Code>{`// NFD splits base letters and combining marks; then drop marks
const removeDiacritics = (str) =>
  str.normalize("NFD").replace(/\\p{M}+/gu, "");
console.log(removeDiacritics("naïvé résumé")); // "naive resume"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 - Normalized search</Styled.H3>
                <Styled.Code>{`function includesNormalized(haystack, needle, form = "NFC") {
  const H = haystack.normalize(form);
  const N = needle.normalize(form);
  return H.includes(N);
}
console.log(includesNormalized("café", "cafe\\u0301")); // true (after NFC)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 - Case-insensitive &amp; accent-insensitive compare</Styled.H3>
                <Styled.Code>{`function equalLoose(a, b) {
  const strip = s => s.normalize("NFD").replace(/\\p{M}+/gu, "");
  return strip(a).toLocaleLowerCase() === strip(b).toLocaleLowerCase();
}
console.log(equalLoose("São Paulo", "sao paulo")); // true
console.log(equalLoose("Résumé", "resume"));       // true`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default StringIterationAndNormalization;
