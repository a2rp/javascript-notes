// OperatorPrecedenceAndAssociativity.jsx
import React from "react";
import { Styled } from "./styled";

const OperatorPrecedenceAndAssociativity = () => {
    return (
        <Styled.Page>
            <Styled.H1>Operator precedence &amp; associativity</Styled.H1>

            <Styled.Lead>
                Precedence decides <em>which operators bind first</em> when no parentheses are present.
                Associativity decides <em>how operators of the same precedence group</em> (left→right or right→left).
                We’ll compare common groups, show safe parenthesizing, and demo special cases like
                exponentiation and mixing <code>??</code> with <code>&amp;&amp;</code>/<code>||</code>.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Parentheses</strong> <code>( ... )</code> override everything.</li>
                    <li>
                        <strong>High → low (selected groups):</strong> member/call/index/optional-chain → postfix <code>++ --</code> → unary
                        <code>(! ~ + - typeof void delete await)</code> → exponentiation <code>**</code> (right-assoc) → multiplicative <code>* / %</code> → additive <code>+ -</code> → shifts <code>&lt;&lt; &gt;&gt; &gt;&gt;&gt;</code> → relational <code>&lt; &gt; &lt;= &gt;= in instanceof</code> → equality <code>== != === !==</code> → bitwise <code>&amp; ^ |</code> → logical AND <code>&amp;&amp;</code> → logical OR <code>||</code> / nullish <code>??</code> (require parens when mixed) → conditional <code>?:</code> → assignment (including <code>||= &amp;&amp;= ??=</code>) → comma <code>,</code>.
                    </li>
                    <li><strong>Associativity:</strong> most binary operators are left-assoc; <code>**</code>, assignment operators, and the conditional <code>?:</code> are right-assoc.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Parentheses win</Styled.H3>
                <Styled.Code>{`console.log(2 + 3 * 4);     // 14  (* before +)
console.log((2 + 3) * 4);   // 20  (parentheses first)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Member/call/index bind tight</Styled.H3>
                <Styled.Code>{`const obj = { xs: [10, 20], f(){ return n => n * 2; } };
console.log(obj.xs[1]);     // 20
console.log(obj.f()(7));    // 14
// Optional chaining is in the same high-precedence zone:
console.log(obj?.xs?.[0]);  // 10`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Unary vs exponentiation</Styled.H3>
                <Styled.Code>{`console.log(2 ** 3 ** 2);     // 512  (2 ** (3 ** 2)), right-assoc
// Unary - cannot be directly on the left of **:
try { eval("-2 ** 2"); } catch (e) { console.log("SyntaxError"); }
// Use parentheses:
console.log((-2) ** 2);     // 4
console.log(-(2 ** 2));     // -4`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Left- vs right-associative chains</Styled.H3>
                <Styled.Code>{`// Left-assoc (most binary ops)
console.log(10 - 3 - 2);    // (10 - 3) - 2 -> 5
// Right-assoc (assignment)
let a, b, c;
a = b = c = 5;              // a= (b= (c=5))
console.log(a, b, c);       // 5 5 5
// Right-assoc (conditional)
const tag = (n) => n>0 ? "pos" : n<0 ? "neg" : "zero";
console.log(tag(-1));       // "neg"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Logical AND before OR</Styled.H3>
                <Styled.Code>{`console.log(false && true || true);   // true  -> (false && true) || true
console.log(true || false && false); // true  -> true || (false && false)
// Always add parentheses for clarity in complex conditions.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Mixing <code>??</code> with <code>&amp;&amp;</code>/<code>||</code></Styled.H3>
                <Styled.Code>{`// JavaScript requires parentheses when mixing ?? with || or &&.
// The following would be a syntax error:
// const x = a ?? b || c;

// Be explicit:
const a = null, b = "", c = "C";
console.log((a ?? b) || c);   // "C"  (a is null -> b is "", then "" || "C" -> "C")
console.log(a ?? (b || c));   // "C"  (b || c -> "C", then a ?? "C" -> "C")`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Conditional vs logical</Styled.H3>
                <Styled.Code>{`const n = 0;
// Logical OR falls back on falsy:
console.log(n || 1);               // 1
// Conditional can preserve explicit 0:
console.log(n !== null && n !== undefined ? n : 1); // 0`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Comma operator has the lowest precedence</Styled.H3>
                <Styled.Code>{`let x = (1, 2, 3);   // evaluates left-to-right, result is last -> 3
console.log(x); // 3
// Beware in for-loops: comma often used intentionally in the update clause.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — When in doubt, parenthesize</Styled.H3>
                <Styled.Code>{`// Readability and correctness:
const ok = isReady && (count > 0 || hasBypass);
const out = (cfg?.port ?? 0) || 3000; // force a number but keep explicit 0
// Parentheses document intent and prevent subtle precedence mistakes.`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default OperatorPrecedenceAndAssociativity;
