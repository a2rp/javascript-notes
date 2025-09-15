import React from "react";
import { Styled } from "./styled";

const AutomaticSemicolonInsertion = () => {
    return (
        <Styled.Page>
            <Styled.H1>Automatic Semicolon Insertion (ASI)</Styled.H1>
            <Styled.Lead>
                JavaScript can insert semicolons during parsing to recover from certain line breaks.
                ASI helps code parse but can also change meaning in surprising ways.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>What ASI does:</strong> When the parser would otherwise fail, a semicolon may be inserted at specific points (e.g., before a closing <code>{`}`}</code>, at end of input, or after certain tokens).</li>
                    <li><strong>Restricted keywords:</strong> A line terminator <em>cannot</em> appear immediately after <code>return</code>, <code>throw</code>, <code>break</code>, <code>continue</code>, or <code>yield</code>. If you put a newline there, ASI ends the statement right after the keyword.</li>
                    <li><strong>Not magical:</strong> ASI does <em>not</em> insert semicolons before tokens like <code>(</code>, <code>[</code>, <code>+</code>, <code>-</code>, <code>/</code>, or template backticks if the previous line can continue — lines may “glue together”.</li>
                    <li><strong>Postfix operators:</strong> Postfix <code>++</code>/<code>--</code> cannot be split by a newline from their operand; the newline turns them into separate statements (or changes to prefix form).</li>
                    <li><strong>Safe practice:</strong> Prefer explicit semicolons or ensure lines starting with <code>(</code> / <code>[</code> / <code>+</code> / <code>-</code> / <code>/</code> / <code>`</code> are prefixed by a semicolon when concatenation or minification is possible.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — <code>return</code> followed by a newline</Styled.H3>
                <Styled.Code>{`function f() {
  return
  { ok: true }
}

console.log(f()); // undefined

// Explanation:
// ASI inserts a semicolon right after 'return' because of the newline.
// So it's 'return; { ok: true }' and the block is a separate (dead) statement.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — <code>throw</code> followed by a newline</Styled.H3>
                <Styled.Code>{`function g() {
  // SyntaxError at parse time:
  // throw
  // new Error("boom")
}

// Output:
// SyntaxError (a newline may not appear immediately after 'throw').`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Postfix <code>++</code> split across lines</Styled.H3>
                <Styled.Code>{`let i = 0;
i++;
console.log(i); // 1

let j = 0;
j
++
j;
console.log(j); // 1

// Explanation:
// 'j ++' cannot be split by a newline for postfix form.
// The parser treats it as: 'j;' then '++j;' then 'j;'. Final value is 1.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Leading <code>(</code> can attach to the previous line</Styled.H3>
                <Styled.Code>{`// File A (no trailing semicolon):
console.log("A")
// File B starting with an IIFE:
(function(){ console.log("IIFE"); })()

// Parsed as:
console.log("A")(function(){ console.log("IIFE"); })()
// TypeError at runtime: console.log(...) is not a function

// Fix by ensuring a boundary:
// console.log("A");            // end File A with ';'
// ;(function(){ console.log("IIFE"); })()  // or start next line with ';'`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Leading <code>[</code> can become indexing</Styled.H3>
                <Styled.Code>{`// Previous line ends with an expression (no ';'):
doSomething()
// Next line begins with '[':
[1, 2, 3].forEach(n => doSomethingElse(n))

// Parsed as: doSomething()[1, 2, 3].forEach(...)
// Likely TypeError (indexing the result of doSomething()).

// Safer:
;[1, 2, 3].forEach(n => doSomethingElse(n))`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Unary <code>+</code>/<code>-</code> across lines</Styled.H3>
                <Styled.Code>{`let a = 1;
let b = 2;

// Developers sometimes expect a semicolon after 'a', but ASI doesn't insert one here:
const s = a
+ b;

console.log(s); // 3

// Explanation:
// The '+' begins a continuation of the previous expression; it becomes 'a + b'.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — ASI before <code>{`}`}</code> or end-of-file</Styled.H3>
                <Styled.Code>{`function h() {
  const x = 1   // no explicit ';'
  const y = 2   // ASI inserts ';' at line ends/'}'
  return x + y  // also safe here
}

// Output:
// 3 (behavior unchanged); ASI inserted semicolons at statement boundaries.`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default AutomaticSemicolonInsertion;
