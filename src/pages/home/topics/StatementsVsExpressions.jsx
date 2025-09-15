import React from "react";
import { Styled } from "./styled";

const StatementsVsExpressions = () => {
    return (
        <Styled.Page>
            <Styled.H1>Statements vs Expressions</Styled.H1>
            <Styled.Lead>
                JavaScript code is built from <em>statements</em> (do something) and <em>expressions</em> (produce a value).
                Expressions can appear where a value is expected; some statements exist only for control flow and structure.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Statement:</strong> Performs an action or forms control flow. Examples: <code>if</code>, <code>switch</code>, <code>for</code>, <code>while</code>, <code>try</code>, variable declarations, <code>function</code>/<code>class</code> declarations, <code>import</code>/<code>export</code>.</li>
                    <li><strong>Expression:</strong> Evaluates to a value. Examples: literals, identifiers, property access, calls, <code>new</code>, operators, arrow functions, object/array literals, template literals, <code>await</code>, <code>yield</code>.</li>
                    <li><strong>Expression statement:</strong> A statement that is just an expression followed by <code>;</code> (value is computed then discarded). Commonly function calls or assignments.</li>
                    <li><strong>Declaration vs expression forms:</strong> Functions/classes have both forms. Declarations are statements; expressions can be used where values are needed (often parenthesized).</li>
                    <li><strong>Not interchangeable:</strong> Some constructs exist only as statements (e.g., <code>if</code>), others only as expressions (e.g., <code>a ? b : c</code> returns a value). You cannot write <code>const x = if (...) ...</code>.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Classifying common code</Styled.H3>
                <Styled.Code>{`// Statement (control flow):
if (true) { /* ... */ }

// Statement (declaration):
function f() { return 1; }

// Expression (produces a value):
1 + 2                          // value: 3

// Expression statement (value is discarded):
1 + 2;                         // computes 3, then ignores it

// Output (conceptual):
// - 'if' and 'function f() {}' are statements.
// - '1 + 2' is an expression; with ';' it becomes an expression statement.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Assignment is an expression</Styled.H3>
                <Styled.Code>{`let a = 1;
let b;
b = (a = 5);                   // both assignments are expressions; whole thing evaluates to 5

console.log(a);                // 5
console.log(b);                // 5

// Output:
// 5
// 5`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Ternary expression vs if-statement</Styled.H3>
                <Styled.Code>{`const n = 7;

// Expression form (returns a value):
const parity = (n % 2 === 0) ? "even" : "odd";
console.log(parity);           // "odd"

// Statement form (no value to assign directly):
// const x = if (n % 2 === 0) { "even" } else { "odd" }; // ❌ SyntaxError

// Output:
// "odd"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Function: declaration vs expression (IIFE)</Styled.H3>
                <Styled.Code>{`// Statement (declaration):
function add(x, y) { return x + y; }
console.log(add(2, 3));        // 5

// Expression (anonymous function) used as a value:
const mul = function (x, y) { return x * y; };
console.log(mul(2, 3));        // 6

// IIFE (expression wrapped in parentheses, executed immediately):
const result = (function () { return 10 })();
console.log(result);           // 10

// Output:
// 5
// 6
// 10`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Arrow functions are expressions</Styled.H3>
                <Styled.Code>{`// Arrow function creates a function value (expression):
const inc = (x) => x + 1;      // expression produces a function
console.log(inc(10));          // 11

// Cannot declare an arrow function as a statement by itself:
// (x) => x + 1; // valid as an expression statement, but value is discarded

// Output:
// 11`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Comma operator (single expression, last value wins)</Styled.H3>
                <Styled.Code>{`let x = 0;
const y = (x += 1, x += 2, x); // comma evaluates left→right, returns last sub-expression's value
console.log(x);                // 3
console.log(y);                // 3

// Common in for-loops' update clause:
// for (let i = 0, j = 3; i < j; i++, j--) { /* ... */ }

// Output:
// 3
// 3`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Top-level 'this' differs; blocks are not expressions</Styled.H3>
                <Styled.Code>{`// Top-level 'this' is:
// - global object in scripts
// - undefined in modules

// A bare block '{}' is a statement, not an object literal in expression position:
{
  // a block statement (no value)
}

// To force an object literal as an expression in ambiguous positions, use parentheses:
const obj = ({ a: 1, b: 2 });
console.log(obj.a + obj.b);    // 3

// Output:
// 3`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default StatementsVsExpressions;
