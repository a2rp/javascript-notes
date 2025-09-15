// StringLiteralsAndEscapes.jsx
import React from "react";
import { Styled } from "./styled";

const StringLiteralsAndEscapes = () => {
    return (
        <Styled.Page>
            <Styled.H1>String literals &amp; escapes</Styled.H1>

            <Styled.Lead>
                JavaScript strings can be written with single quotes <code>'…'</code>, double quotes{" "}
                <code>"…"</code>, or backticks <code>`…`</code> (template literals). Escape sequences let you
                embed special characters and Unicode code points.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Forms &amp; when to use</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Single/Double quoted:</strong> <code>"text"</code> or <code>'text'</code>. Use escapes for
                        quotes/newlines. Convenient for simple, single-line strings.
                    </li>
                    <li>
                        <strong>Template literals:</strong> <code>`text`</code> supports real newlines,{" "}
                        <code>${"{"}expr{"}"}</code> interpolation, and easier multi-line formatting.
                    </li>
                    <li>
                        <strong>Raw text:</strong> <code>String.raw</code> (as a tag) returns <em>unescaped</em> contents (backslashes preserved).
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Escape sequences (cheat sheet)</Styled.H3>
                <Styled.UL>
                    <li>
                        Common: <code>\n</code> (LF), <code>\r</code> (CR), <code>\t</code> (tab), <code>\b</code> (backspace),
                        <code>\f</code> (form feed), <code>\v</code> (vertical tab), <code>\\</code> (backslash), <code>\'</code>, <code>\"</code>.
                    </li>
                    <li>
                        NUL: <code>\0</code> (only if <strong>not</strong> followed by a digit).
                    </li>
                    <li>
                        Hex: <code>\xNN</code> (two hex digits). Unicode BMP: <code>\uFFFF</code>. Code point:{" "}
                        <code>\u&#123;1F600&#125;</code> (any Unicode scalar).
                    </li>
                    <li>
                        Line continuation (classic strings): backslash at end of line + newline → removed.
                    </li>
                    <li>
                        <em>Legacy octal</em> escapes like <code>\123</code> are <strong>invalid in strict mode</strong>; avoid entirely.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Basics &quot; vs ' and escaping</Styled.H3>
                <Styled.Code>{`console.log("She said \\"hi\\"."); // She said "hi".
console.log('It\\'s fine.');       // It's fine.
console.log("Path: C:\\\\tmp\\\\file.txt"); // Path: C:\\tmp\\file.txt

// Newlines in classic strings require \\n or line continuation:
const a = "line1\\nline2";
const b = "line1\\
line2"; // backslash-newline removed
console.log(a); // two lines
console.log(b); // "line1line2"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Template literals: multiline & interpolation</Styled.H3>
                <Styled.Code>{`const name = "Ada";
const multi = \`Hello, \${name}!
This is on the next line.\`;
console.log(multi);
/*
Hello, Ada!
This is on the next line.
*/

// Escape backtick or "\${" literally:
console.log(\`Use a backtick: \\\` and a literal \\\${ value }\`);`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Unicode escapes</Styled.H3>
                <Styled.Code>{`// BMP escape (4 hex):
console.log("\\u0041");     // "A"

// Code point escape (any Unicode scalar):
console.log("\\u{1F680}");  // "🚀"

// Hex byte:
console.log("\\x41");       // "A"

// NUL (not followed by digit):
console.log("\\0");         // "\\u0000"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Code points beyond BMP (surrogates vs \u&#123;…&#125;)</Styled.H3>
                <Styled.Code>{`const rocket1 = "\\uD83D\\uDE80";  // surrogate pair
const rocket2 = "\\u{1F680}";     // direct code point (preferred)
console.log(rocket1 === rocket2); // true
console.log(rocket2.length);      // 2 code units (one visible emoji)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — String.raw for unescaped backslashes</Styled.H3>
                <Styled.Code>{`console.log(String.raw\`C:\\new\\file\\nnot-a-newline\`);
// "C:\\new\\file\\nnot-a-newline"

const re = String.raw\`^\\d+\\.\\d+\$\\n\`;
console.log(re); // ^\\d+\\.\\d+$\\n (useful for writing regex source text)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Strict mode vs legacy octal escapes</Styled.H3>
                <Styled.Code>{`"use strict";
// const s = "\\123"; // ❌ SyntaxError in strict mode (legacy octal escape)
// Safe alternatives:
const ok1 = "\\x53";         // "S"
const ok2 = "\\u0053";       // "S"
const ok3 = "\\u{53}";       // "S"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Invalid escapes throw (early error)</Styled.H3>
                <Styled.Code>{`// These are syntax errors if uncommented:
// "\\xG1"         // invalid hex
// "\\u12G4"       // invalid Unicode escape
// "\\u{110000}"   // out of Unicode range (max 0x10FFFF)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Useful non-breaking & invisible chars</Styled.H3>
                <Styled.Code>{`const nbsp = "\\u00A0"; // non-breaking space
const zwnbsp = "\\uFEFF"; // BOM / zero-width no-break space
console.log("A" + nbsp + "B"); // "A B"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Paths & regex strings need double escaping</Styled.H3>
                <Styled.Code>{`// Windows path:
const path = "C:\\\\Users\\\\Ada\\\\file.txt";

// Regex source in a *string*:
const numberRe = "^\\\\d+(?:\\\\.\\\\d+)?$"; // becomes /^\\d+(?:\\.\\d+)?$/
console.log(numberRe);`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — JSON vs JS string escapes</Styled.H3>
                <Styled.UL>
                    <li>JSON is stricter: only allows <code>\\b \\f \\n \\r \\t \\\\ \\/ \\\"</code> and <code>\\uXXXX</code>.</li>
                    <li>JavaScript allows more (<code>\\v</code>, <code>\\0</code>, <code>\\xNN</code>, <code>\\u&#123;…&#125;</code>, etc.).</li>
                </Styled.UL>
                <Styled.Code>{`// Valid JS string, but not valid JSON string content:
const jsOnly = "\\x41\\v"; // "A" + vertical tab`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Practical tips</Styled.H3>
                <Styled.UL>
                    <li>Prefer template literals for multi-line and interpolation-heavy text.</li>
                    <li>Use <code>\\u&#123;…&#125;</code> for Unicode beyond BMP; avoid manual surrogate pairs.</li>
                    <li>Avoid legacy octal escapes entirely; they’re error-prone and banned in strict mode.</li>
                    <li>When writing regex or paths inside strings, remember backslashes need escaping.</li>
                    <li>Need literal backslashes/newlines preserved? Use <code>String.raw\`…\`</code>.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default StringLiteralsAndEscapes;
