// CommentsAndPragmas.jsx
import React from "react";
import { Styled } from "./styled";

const CommentsAndPragmas = () => {
    return (
        <Styled.Page>
            <Styled.H1>Comments (line, block, pragmas)</Styled.H1>

            <Styled.Lead>
                JavaScript supports single-line and block comments. Some special
                comments or top-of-file string directives act like <em>pragmas</em> for
                engines and tools (e.g., strict mode, source maps, shebang).
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Single-line comments:</strong> start with <code>//</code> and
                        run to the end of the line.
                    </li>
                    <li>
                        <strong>Block comments:</strong> wrap any text between{" "}
                        <code>/*</code> and <code>*/</code>. They can span lines but{" "}
                        <em>do not nest</em>.
                    </li>
                    <li>
                        <strong>Directive prologue (pragmas):</strong> a sequence of{" "}
                        <em>literal string statements</em> at the top of a script or
                        function. The only standardized directive is{" "}
                        <code>"use strict"</code> (enables strict mode).
                    </li>
                    <li>
                        <strong>Shebang:</strong> a first-line <code>#!</code> is treated as
                        a comment by modern JS parsers; used by CLIs (e.g., Node) to choose
                        an interpreter.
                    </li>
                    <li>
                        <strong>Tooling pragmas (in comments):</strong> special{" "}
                        <code>//# ...</code> or <code>/* ... */</code> are read by tools
                        (e.g., <code>sourceMappingURL</code>, linters). They are not part of
                        the language semantics.
                    </li>
                    <li>
                        <strong>Legacy HTML comment tokens:</strong>{" "}
                        <code>&lt;!--</code> and <code>--&gt;</code> may be treated as
                        single-line comments in some environments for web-compatibility.
                        Avoid in modern code.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Single-line comments</Styled.H3>
                <Styled.Code>{`// This is a single-line comment
const a = 1; // trailing comment after code
console.log(a); // 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Block comments (not nested)</Styled.H3>
                <Styled.Code>{`/* This is a block comment
spanning multiple lines */
const x = 10;
/*
  const y = 20;
  /* nested? */           // <- This inner opener doesn't start a new comment!
*/
console.log(x); // 10

// Output:
// 10`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — JSDoc-style block comments</Styled.H3>
                <Styled.Code>{`/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>
                    Example 4 — Directive prologue and <code>"use strict"</code>
                </Styled.H3>
                <Styled.Code>{`"use strict";           // a literal string at top → strict mode is ON

// Comments can appear after/between directives and still keep the prologue:
"use strict";
/* keep strict */ "use strict";

function sloppyHere() {
  // no directive here → this function is NOT automatically strict
  return this; // in non-strict, this may be globalThis when called plainly
}

(function () {
  "use strict"; // function-scoped strict
  // ...
})();

// Non-directive (does NOT enable strict):
("use strict"); // wrapped in parentheses → just an expression, not a directive
// "use" + " strict"   // concatenation → not a single literal, not a directive`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Shebang for CLI scripts</Styled.H3>
                <Styled.Code>{`#!/usr/bin/env node
// ^ must be the very first line; parsers treat it as a comment.
// Useful to make a JS file directly executable on POSIX systems.

console.log("Hello from a CLI script!");
// Output (when run as an executable):
// Hello from a CLI script!`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>
                    Example 6 — Tooling pragmas: <code>sourceURL</code> &{" "}
                    <code>sourceMappingURL</code>
                </Styled.H3>
                <Styled.Code>{`// Useful in devtools and bundlers:

//# sourceURL=my-script.js
//# sourceMappingURL=my-script.js.map

// These are read by environments/tools to label eval'd code or attach sourcemaps.
// They do not change JS runtime semantics.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Legacy HTML comment tokens</Styled.H3>
                <Styled.Code>{`// In some environments (browsers), the following can behave like single-line comments:
<!-- hidden from old HTML parsers
console.log("This may not run depending on environment");
// --> also treated like a line comment when at line start

// Modern advice: avoid <!-- and --> in JS. Use // or /* ... */ instead.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>
                    Example 8 — Comments inside template literals (use expressions)
                </Styled.H3>
                <Styled.Code>{`const name = "Ada";
// You can't put // or /* */ inside the raw template text to comment it out,
// but you can comment inside an expression:
const msg = \`Hello, \${/* inline comment */ name}!\`;
console.log(msg); // "Hello, Ada!"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Comments and regex literals</Styled.H3>
                <Styled.Code>{`// JavaScript regex does NOT support an 'x' (extended) flag for inline comments.
// Use non-capturing groups or whitespace where allowed, or build regexes from strings.
const re = /\\d{3}-\\d{2}-\\d{4}/; // simple form
console.log(re.test("123-45-6789")); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Commenting out blocks of code safely</Styled.H3>
                <Styled.Code>{`// Prefer line comments for large temporary blocks to avoid accidental */ issues:
//// const config = {
////   url: "https://api.example.com",
////   retries: 3,
//// };

// Or use a block comment but ensure no '*/' appears inside:
 /*
  const config = {
    url: "https://api.example.com",
    retries: 3,
  };
 */
console.log("OK"); // "OK"`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default CommentsAndPragmas;
