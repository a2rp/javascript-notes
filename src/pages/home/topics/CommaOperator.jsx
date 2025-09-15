// CommaOperator.jsx
import React from "react";
import { Styled } from "./styled";

const CommaOperator = () => {
    return (
        <Styled.Page>
            <Styled.H1>Comma operator</Styled.H1>

            <Styled.Lead>
                The comma operator evaluates multiple expressions <em>left to right</em> and
                returns the value of the <strong>last</strong> one. It has the
                <em>lowest precedence</em> of all operators, so we usually wrap it in parentheses.
                It’s commonly used in <code>for</code> loop clauses and inlined sequencing.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Form:</strong> <code>(expr1, expr2, ..., exprN)</code> → evaluates each in order; result is <code>exprN</code>.</li>
                    <li><strong>Order &amp; side effects:</strong> Left side effects happen before right ones.</li>
                    <li><strong>Precedence:</strong> Lowest; parentheses are recommended in complex expressions.</li>
                    <li><strong>Not the same as commas in syntax:</strong> Function argument lists, array/object literals, and variable declarations also use commas, but those are <em>not</em> the comma operator.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Basics: result is the last expression</Styled.H3>
                <Styled.Code>{`console.log( (1, 2, 3) ); // 3

// Contrast with function arguments (three separate args, not a comma operator result):
console.log(1, 2, 3); // prints 1 2 3 as three arguments`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Evaluation order and side effects</Styled.H3>
                <Styled.Code>{`let a = 0, b = 0;
const out = (a = 1, b = a + 2, a + b);
console.log(a, b, out);
// a=1 (after first expr), b=3 (second expr), out = a + b = 4 (last expr)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Precedence: use parentheses</Styled.H3>
                <Styled.Code>{`// Comma has the lowest precedence; without parentheses it splits expressions.
let x = 1, y = 2;
const r1 = (x += 1, y += 2, x + y);
console.log(r1); // 6  (x=2, y=4, sum=6)

// Mixed with conditional: the comma applies after the whole ?: unless parenthesized.
const t = true ? 10 : 20, z = 99; // declaration comma (syntax), not operator
console.log(t, z); // 10 99

// In expression context:
const r2 = (true ? 10 : 20, 99);
console.log(r2); // 99 (result is last expression)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — In conditions (only the last value decides)</Styled.H3>
                <Styled.Code>{`let i = 0, j = 0;
if ((i++, j++, j > i)) {
  console.log("j greater"); // j++ runs after i++; then j>i is tested
} else {
  console.log("i >= j");
}
console.log(i, j); // 1 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Arrow functions: sequence then return last</Styled.H3>
                <Styled.Code>{`const nextDouble = (n) => (n++, n * 2);
console.log(nextDouble(3)); // 8  (n++ executed, then n*2 returned)

const sqLog = (x) => (console.log("squaring", x), x * x);
console.log(sqLog(5)); // logs, then returns 25`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — <code>for</code> loop: multiple init/update expressions</Styled.H3>
                <Styled.Code>{`for (let i = 0, j = 5; i < j; i++, j--) {
  // i increments, j decrements each iteration
  console.log(i, j);
}
// Also useful for doing two updates in the update clause.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Map/filter with a tiny side effect, then value</Styled.H3>
                <Styled.Code>{`const logs = [];
const xs = [1,2,3];
const squares = xs.map(x => (logs.push(x), x * x));
console.log(squares); // [1,4,9]
console.log(logs);    // [1,2,3] (side effect happened first)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Returning last while discarding earlier results</Styled.H3>
                <Styled.Code>{`function compute() {
  // do two calls, return only the last result
  return (doSideEffect(), heavyCalc());
}
function doSideEffect(){ /* ... */ }
function heavyCalc(){ return 42; }
console.log(compute()); // 42`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — With <code>delete</code>, <code>void</code>, etc.</Styled.H3>
                <Styled.Code>{`const obj = { flag: true };
const result = (delete obj.flag, void 0, "done");
console.log("flag" in obj, result); // false "done"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Compare with array/destructuring commas (not the operator)</Styled.H3>
                <Styled.Code>{`// Array/param commas are syntax separators, not the comma operator:
const arr = [ (1, 2, 3) ]; // array with a single element: 3 (comma operator inside parentheses)
console.log(arr); // [3]

const arr2 = [1, 2, 3];    // three elements (no comma operator involved)
console.log(arr2.length);   // 3`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default CommaOperator;
