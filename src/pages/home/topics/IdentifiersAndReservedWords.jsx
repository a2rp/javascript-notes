// identifiers-and-reserved-words.jsx
import React from "react";
import { Styled } from "./styled";

const IdentifiersAndReservedWords = () => {
    return (
        <Styled.Page>
            <Styled.H1>Identifiers &amp; reserved words</Styled.H1>

            <Styled.Lead>
                Identifiers are names you give to variables, functions, classes, etc.
                JavaScript follows Unicode rules for what characters are allowed, and it
                reserves certain words for language syntax.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        An <strong>identifier</strong> is a name for a binding (variable, function, class, parameter).
                    </li>
                    <li>
                        Valid characters follow Unicode identifier rules: the first character must be{" "}
                        <em>ID_Start</em> (letters and many non-Latin letters) or <code>$</code> or{" "}
                        <code>_</code>; subsequent characters may be <em>ID_Continue</em> (letters, digits, some marks),
                        or <code>$</code> or <code>_</code>.
                    </li>
                    <li>
                        Identifiers <em>cannot</em> start with a digit, contain spaces, or use characters that are not allowed by the spec
                        (e.g., most emoji are not valid identifier characters).
                    </li>
                    <li>
                        You can use <strong>Unicode escapes</strong> in names:
                        <code>\u0061</code> (&#34;a&#34;), <code>\u{`03C0`}</code> (π). The resulting character must still be a valid identifier character.
                    </li>
                    <li>
                        <strong>Reserved words</strong> (keywords like <code>if</code>, <code>for</code>, <code>class</code>, <code>import</code>…) can’t be used as identifiers.
                        Some words are reserved only in certain contexts (e.g., <code>await</code> inside async code; <code>yield</code> inside generators).
                    </li>
                    <li>
                        <strong>Restricted in strict mode:</strong> <code>eval</code> and <code>arguments</code> cannot be used as binding names in strict mode.
                    </li>
                    <li>
                        Property names are more flexible: keywords and strings are allowed as <em>property keys</em> (e.g., <code>obj.default</code> or <code>{`{ "class": 1 }`}</code>).
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Valid identifier names</Styled.H3>
                <Styled.Code>{`const $dollar = 1;
const _under = 2;
const café = 3;          // non-ASCII letter is fine
const π = 3.14159;       // Greek letter
const क = 5;             // Devanagari letter

console.log($dollar + _under);       // 3
console.log(café);                    // 3
console.log(π.toFixed(2));           // "3.14"
console.log(क);                       // 5`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Invalid identifier forms</Styled.H3>
                <Styled.Code>{`// const 1st = 10;         // ❌ SyntaxError (cannot start with a digit)
// const user-name = 10;   // ❌ SyntaxError (hyphen not allowed)
// const hello world = 1;   // ❌ SyntaxError (space not allowed)
// const 😀 = 1;            // ❌ Most emoji are not valid identifier characters`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Unicode escapes in identifiers</Styled.H3>
                <Styled.Code>{`const \\u0061\\u0062 = 10;    // "ab"
console.log(ab);               // 10

const \\u{03C0} = 3.14;       // π via code point escape
console.log(π);                // 3.14

// Note: the escaped code point must itself be valid for an identifier.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Reserved words (always keywords)</Styled.H3>
                <Styled.UL>
                    <li>
                        Always reserved: <code>break</code>, <code>case</code>, <code>catch</code>, <code>class</code>,{" "}
                        <code>const</code>, <code>continue</code>, <code>debugger</code>, <code>default</code>,{" "}
                        <code>delete</code>, <code>do</code>, <code>else</code>, <code>export</code>, <code>extends</code>,{" "}
                        <code>false</code>, <code>finally</code>, <code>for</code>, <code>function</code>, <code>if</code>,{" "}
                        <code>import</code>, <code>in</code>, <code>instanceof</code>, <code>new</code>, <code>null</code>,{" "}
                        <code>return</code>, <code>super</code>, <code>switch</code>, <code>this</code>, <code>throw</code>,{" "}
                        <code>true</code>, <code>try</code>, <code>typeof</code>, <code>var</code>, <code>void</code>,{" "}
                        <code>while</code>, <code>with</code>, <code>yield</code> (contextual; see below).
                    </li>
                    <li>
                        Also reserved: <code>let</code>, <code>static</code>, <code>enum</code>, <code>await</code> (contextual).
                    </li>
                </Styled.UL>
                <Styled.Code>{`// ❌ All of these would be SyntaxError if uncommented:
// const for = 1;
// let class = 1;
// function import() {} 
// const default = 3;`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Contextual reservations: <code>await</code> and <code>yield</code></Styled.H3>
                <Styled.Code>{`// 'yield' is reserved inside generator functions:
function* gen() {
  // let yield = 1; // ❌ SyntaxError in a generator
  yield 42;
}

// 'await' is reserved inside async functions and in ES modules:
async function run() {
  // let await = 1; // ❌ SyntaxError in async context
  return await Promise.resolve(1);
}

// In a non-async, non-module function (script goal), using 'await' as a name is allowed:
function plain() {
  let await = 2;      // ✅ allowed here
  return await + 1;
}
console.log(plain());  // 3`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Strict mode: <code>eval</code> and <code>arguments</code></Styled.H3>
                <Styled.Code>{`"use strict";
// let eval = 1;        // ❌ SyntaxError in strict mode
// function f(arguments) {} // ❌ SyntaxError in strict mode

// Outside strict mode these names are special but may not throw at parse-time;
// still, avoid them as identifiers for clarity and compatibility.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Property keys can be keywords</Styled.H3>
                <Styled.Code>{`const obj = {
  default: 1,           // keyword ok as a property key
  class: 2,
  "function": 3,        // quoted string key
  [ "let" ]: 4          // computed key
};

console.log(obj.default);       // 1
console.log(obj.class + obj["function"] + obj.let); // 2 + 3 + 4 = 9`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Identifier vs IdentifierName (dot access)</Styled.H3>
                <Styled.UL>
                    <li>
                        After a dot (<code>.</code>), property access uses an <em>IdentifierName</em> — this allows keywords:
                        <code>obj.default</code>, <code>obj.class</code> are valid.
                    </li>
                    <li>
                        For bindings (variables, parameters, function/class names), you must use a valid <em>Identifier</em> that is not a reserved word.
                    </li>
                </Styled.UL>
                <Styled.Code>{`const data = { default: 10 };
console.log(data.default); // 10   (property access ok)

// const default = 10;     // ❌ not allowed as a binding name`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default IdentifiersAndReservedWords;
