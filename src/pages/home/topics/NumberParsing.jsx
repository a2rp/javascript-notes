// NumberParsing.jsx
import React from "react";
import { Styled } from "./styled";

const NumberParsing = () => {
    return (
        <Styled.Page>
            <Styled.H1>Parsing numbers: <code>Number</code>, <code>parseInt</code>, <code>parseFloat</code></Styled.H1>

            <Styled.Lead>
                Three common ways to turn strings into numbers behave differently.{" "}
                <code>Number(x)</code> requires the entire string to be a valid numeric literal;{" "}
                <code>parseInt(x, radix)</code> parses an <em>integer prefix</em>;{" "}
                <code>parseFloat(x)</code> parses a <em>floating-point prefix</em>.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition &amp; guidance</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong><code>Number(str)</code>:</strong> Trims whitespace, then expects a full JavaScript
                        numeric literal (supports <code>0x</code>/<code>0b</code>/<code>0o</code>, exponents, <code>Infinity</code>).
                        If any non-numeric junk remains → <code>NaN</code>.
                    </li>
                    <li>
                        <strong><code>parseInt(str, radix)</code>:</strong> Reads as many valid digits as possible
                        (optional sign allowed) and stops at first invalid char. Always pass a{" "}
                        <em>radix</em> (2–36). Without a radix, decimal is used except a <code>0x</code> prefix → hex.
                    </li>
                    <li>
                        <strong><code>parseFloat(str)</code>:</strong> Like <code>parseInt</code> but accepts a
                        decimal point and exponent (<code>1.2e3</code>). Stops at first invalid char; no radix.
                    </li>
                    <li>
                        <strong>Objects/arrays:</strong> All three first convert their input with <code>ToString</code>.
                        E.g., <code>parseInt([15], 10)</code> → <code>15</code>; <code>Number([1,2])</code> → <code>NaN</code>.
                    </li>
                    <li>
                        <strong>Big numbers:</strong> Results are <em>Number</em> (floating 64-bit). Large integers may lose precision.
                        Use <code>BigInt(str)</code> for exact big integers.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Whole string vs prefix</Styled.H3>
                <Styled.Code>{`console.log(Number("42"));          // 42
console.log(parseInt("42", 10));    // 42
console.log(parseFloat("42"));      // 42

console.log(Number("42px"));        // NaN (junk present)
console.log(parseInt("42px", 10));  // 42  (stops at "p")
console.log(parseFloat("42.5kg"));  // 42.5 (stops at "k")`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Trimming & special tokens</Styled.H3>
                <Styled.Code>{`console.log(Number("  \\t\\n 123 ")); // 123 (whitespace trimmed)
console.log(parseInt("   123", 10)); // 123
console.log(parseFloat("   -3.5"));  // -3.5

console.log(Number("Infinity"));     // Infinity
console.log(parseFloat("Infinity")); // Infinity
console.log(parseInt("Infinity",10));// NaN (first char not a digit/sign)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Radix rules (always pass it)</Styled.H3>
                <Styled.Code>{`console.log(parseInt("08", 10));   // 8  (explicit decimal)
console.log(parseInt("0x10", 16)); // 16 (hex with radix)
console.log(parseInt("0x10", 10)); // 0  (parses "0" then stops at "x")

// Binary/octal prefixes are NOT understood by parseInt without stripping:
console.log(parseInt("0b1010", 2)); // 0  (stops at "b")
// Do this instead:
console.log(parseInt("1010", 2));   // 10`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Number supports 0x / 0b / 0o (both cases)</Styled.H3>
                <Styled.Code>{`console.log(Number("0xFF"));  // 255
console.log(Number("0b1010")); // 10
console.log(Number("0B1010")); // 10
console.log(Number("0o11"));   // 9
console.log(Number("0O11"));   // 9

console.log(parseFloat("0x10")); // 0  (stops at "x"; float doesn't do hex)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Empty strings & oddities</Styled.H3>
                <Styled.Code>{`console.log(Number(""));     // 0    (empty string → 0)
console.log(parseFloat(""));  // NaN
console.log(parseInt("", 10)); // NaN

console.log(Number("\\u2003 5 "));  // 5 (Unicode whitespace trimmed)
console.log(parseInt("   -0", 10)); // 0 (sign handled)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Arrays/objects first stringify</Styled.H3>
                <Styled.Code>{`console.log(parseInt([15], 10));   // 15   (["15"] -> "15")
console.log(parseFloat(["3.14"])); // 3.14
console.log(Number([1,2]));        // NaN  ("1,2" not a numeric literal)
console.log(parseInt({ toString(){ return "123"; } }, 10)); // 123`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Precision limits (Number vs BigInt)</Styled.H3>
                <Styled.Code>{`// Exceeds Number's safe integer:
const s = "9007199254740993";              // 2^53 + 1
console.log(parseInt(s, 10));              // 9007199254740992 (rounded)
console.log(Number(s));                    // 9007199254740992 (rounded)
console.log(BigInt(s));                    // 9007199254740993n (exact)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Exponents & decimals</Styled.H3>
                <Styled.Code>{`console.log(parseFloat("1.2e3")); // 1200
console.log(Number("1.2e3"));   // 1200
console.log(parseInt("1.2e3",10)); // 1 (stops at ".")`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Base 36 and alphabet digits</Styled.H3>
                <Styled.Code>{`console.log(parseInt("zzz", 36));  // 46655
console.log(parseInt("FACE", 16)); // 64206
console.log(parseInt("101", 2));   // 5`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Locale-formatted numbers are not parsed</Styled.H3>
                <Styled.Code>{`console.log(Number("1,234.56"));   // NaN (comma invalid)
console.log(parseFloat("1,234.56")); // 1  (stops at comma)
// Clean or use Intl.NumberFormat for locale-aware parsing/formatting.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 — Practical patterns</Styled.H3>
                <Styled.UL>
                    <li>
                        Need a strict numeric conversion? Use <code>Number(x)</code>. It fails fast on junk.
                    </li>
                    <li>
                        Need to read an integer prefix from a mixed string? Use{" "}
                        <code>parseInt(x, radix)</code> with an explicit radix.
                    </li>
                    <li>
                        Need a decimal prefix (with exponent)? Use <code>parseFloat(x)</code>.
                    </li>
                    <li>
                        Parsing binary/oct/hex strings? Prefer <code>Number("0b…")</code>/<code>"0o…"</code>/<code>"0x…"</code>{" "}
                        or strip the prefix and use <code>parseInt(clean, base)</code>.
                    </li>
                    <li>
                        Dealing with huge integers? Use <code>BigInt(str)</code> to avoid precision loss.
                    </li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default NumberParsing;
