// ArithmeticOperators.jsx
import React from "react";
import { Styled } from "./styled";

const ArithmeticOperators = () => {
    return (
        <Styled.Page>
            <Styled.H1>Arithmetic operators</Styled.H1>

            <Styled.Lead>
                We perform numeric math with <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code>,
                and update numbers with <code>++</code>/<code>--</code>. The <code>+</code> operator also performs string
                concatenation when one side is (or becomes) a string; the others always coerce to numbers.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Addition / concatenation:</strong> <code>a + b</code> → if either side is a string (after ToPrimitive), concatenates; otherwise adds numbers.</li>
                    <li><strong>Subtraction, multiplication, division:</strong> <code>- * /</code> coerce both sides to number; <code>1/0 → Infinity</code>, <code>0/0 → NaN</code>.</li>
                    <li><strong>Remainder:</strong> <code>a % b</code> is the remainder of truncating division; result has the same sign as <em>a</em> (the dividend).</li>
                    <li><strong>Exponentiation:</strong> <code>a ** b</code> (right-associative). Unary <code>-</code> cannot be directly on the left of <code>**</code>; use parentheses.</li>
                    <li><strong>Increment / decrement:</strong> <code>++x</code>/<code>--x</code> (prefix: returns updated), <code>x++</code>/<code>x--</code> (postfix: returns old). Target must be assignable.</li>
                    <li><strong>Coercion:</strong> Most operators use ToNumber; objects use <code>valueOf</code>/<code>toString</code>. <code>Symbol</code> in arithmetic throws.</li>
                    <li><strong>BigInt:</strong> works with <code>+ - * / % ** ++ --</code> but cannot mix with Number (TypeError). <code>/</code> truncates toward 0.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Basic math</Styled.H3>
                <Styled.Code>{`console.log(10 + 2);   // 12
console.log(10 - 2);   // 8
console.log(10 * 2);   // 20
console.log(10 / 4);   // 2.5
console.log(10 % 4);   // 2
console.log(2 ** 3);   // 8`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Addition vs concatenation</Styled.H3>
                <Styled.Code>{`console.log("2" + 3);          // "23" (string concatenation)
console.log(2 + "3");          // "23"
console.log(2 + true);         // 3   (true -> 1)
console.log(2 + null);         // 2   (null -> 0)
console.log(2 + undefined);    // NaN (undefined -> NaN)
const obj = { toString(){ return "X"; } };
console.log("A" + obj);        // "AX" (becomes string)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Other ops always numeric</Styled.H3>
                <Styled.Code>{`console.log("6" - "2");   // 4
console.log("3" * "2");   // 6
console.log("10" / 2);    // 5
console.log("7" % 4);     // 3
// Symbols can't be converted:
try { console.log(1 + Symbol()); } catch(e){ console.log("TypeError"); }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Division by zero, NaN propagation</Styled.H3>
                <Styled.Code>{`console.log(1 / 0);     // Infinity
console.log(-1 / 0);    // -Infinity
console.log(0 / 0);     // NaN
console.log(NaN * 5);   // NaN
console.log(Infinity - Infinity); // NaN`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Remainder sign (follows dividend)</Styled.H3>
                <Styled.Code>{`console.log(5 % 2);     // 1
console.log(-5 % 2);    // -1
console.log(5 % -2);    // 1
console.log(-5 % -2);   // -1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Exponentiation details</Styled.H3>
                <Styled.Code>{`console.log(2 ** 3 ** 2); // 512  (2 ** (3 ** 2))
try { eval("-2 ** 2"); } catch (e) { console.log("SyntaxError"); }
console.log((-2) ** 2);       // 4
console.log(-(2 ** 2));       // -4
console.log(0 ** 0);          // 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Increment & decrement (prefix vs postfix)</Styled.H3>
                <Styled.Code>{`let x = 5;
console.log(x++); // 5  (returns old, then x becomes 6)
console.log(x);   // 6
console.log(++x); // 7  (increments, returns 7)

let s = "1";
s++;              // ToNumber("1") -> 1, then +1 -> 2
console.log(s);   // 2

// Target must be assignable:
// (++10); // SyntaxError`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Objects and ToPrimitive for arithmetic</Styled.H3>
                <Styled.Code>{`const a = { valueOf(){ return 3; } };
const b = { toString(){ return "4"; } };
console.log(a * 2);      // 6 (valueOf used)
console.log(b - 1);      // 3 (toString -> "4" -> 4, then 4 - 1)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — BigInt arithmetic (no mixing with Number)</Styled.H3>
                <Styled.Code>{`console.log(10n + 2n);     // 12n
console.log(7n * 3n);      // 21n
console.log(7n / 3n);      // 2n   (truncates toward 0)
console.log(7n % 3n);      // 1n
console.log(2n ** 5n);     // 32n
try { console.log(1n + 1); } catch(e){ console.log("TypeError: cannot mix BigInt and Number"); }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Compound with <code>+=</code> follows <code>+</code> rules</Styled.H3>
                <Styled.Code>{`let msg = "Count: ";
let n = 2;
msg += n;          // concatenation ("Count: 2")
console.log(msg);

let total = 1;
total += 2;        // numeric addition -> 3
console.log(total);`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default ArithmeticOperators;
