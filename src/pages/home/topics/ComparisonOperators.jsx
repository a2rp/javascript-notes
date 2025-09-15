// ComparisonOperators.jsx
import React from "react";
import { Styled } from "./styled";

const ComparisonOperators = () => {
    return (
        <Styled.Page>
            <Styled.H1>Comparison operators: &lt;, &lt;=, &gt;, &gt;=</Styled.H1>

            <Styled.Lead>
                We compare values with the relational operators <code>&lt;</code>, <code>&lt;=</code>,
                <code>&gt;</code>, and <code>&gt;=</code>. JavaScript first converts operands to
                primitives; if both are strings it does a <em>lexicographic (code-unit)</em> compare,
                otherwise it converts to numbers (or BigInt/Number mix) and compares numerically.
                Any comparison involving <code>NaN</code> is <code>false</code>.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Abstract Relational Comparison:</strong> Convert operands to primitives. If both are strings → compare lexicographically by UTF-16 code units; else → convert to numeric (Number/BigInt) and compare.
                    </li>
                    <li>
                        <strong>NaN:</strong> If either side is <code>NaN</code>, all four operators return <code>false</code>.
                    </li>
                    <li>
                        <strong><code>&lt;=</code> / <code>&gt;=</code> are defined via negation:</strong> <code>a &lt;= b</code> is <code>!(a &gt; b)</code>; <code>a &gt;= b</code> is <code>!(a &lt; b)</code>.
                    </li>
                    <li>
                        <strong>BigInt &amp; Number:</strong> Relational comparison can mix them (unlike arithmetic). Fractions compare as expected (e.g., <code>2n &lt; 2.5</code> → <code>true</code>).
                    </li>
                    <li>
                        <strong>Objects/Dates:</strong> Objects use <code>valueOf</code>/<code>toString</code>. Dates compare by their millisecond timestamp.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 - Numeric comparisons &amp; NaN</Styled.H3>
                <Styled.Code>{`console.log(5 < 10);     // true
console.log(5 <= 5);     // true
console.log(10 > 7);     // true
console.log(10 >= 11);   // false

console.log(NaN < 3);    // false
console.log(NaN >= 3);   // false
console.log(3 < NaN);    // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 - String vs numeric comparison</Styled.H3>
                <Styled.Code>{`// Both strings -> lexicographic (by UTF-16 code units)
console.log("2" < "10");   // false ("2" comes after "1")
console.log("10" < "2");   // true

// Mixed or non-strings -> numeric
console.log("2" < 10);     // true  (2 < 10)
console.log(2 < "10");     // true

// Case matters and uses code unit order
console.log("B" < "a");    // true ('B' (0x42) < 'a' (0x61))`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 - Locale-aware ordering needs <code>localeCompare</code></Styled.H3>
                <Styled.Code>{`console.log("ä" < "z");                // true or false depends on code units (0x00E4 > 0x007A -> false here)
console.log("ä".localeCompare("z", "de")); // -1, 0, or 1 (German collation)
console.log(["ä","z","a"].sort((a,b)=>a.localeCompare(b,"de"))); // locale sort`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 - Dates compare by time value</Styled.H3>
                <Styled.Code>{`const d1 = new Date("2020-01-01");
const d2 = new Date("2021-01-01");
console.log(d1 < d2);                // true
console.log(+d1, +d2);               // milliseconds since epoch`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 - BigInt with Number</Styled.H3>
                <Styled.Code>{`console.log(2n < 3);       // true
console.log(2n < 2.5);     // true
console.log(5n >= 5);       // true
console.log(5n > 5.1);      // false
console.log(0n > NaN);      // false (NaN => comparisons are false)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 - Objects convert via ToPrimitive</Styled.H3>
                <Styled.Code>{`const box = { valueOf(){ return 7; } };
console.log(box < 10);      // true (valueOf -> 7)

const obj = { toString(){ return "20"; } };
console.log(obj > 15);      // true ("20" -> 20)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 - Chained comparison pitfall</Styled.H3>
                <Styled.Code>{`const x = 7;
console.log(0 < x < 10);    // true?  -> true in this case, but for the wrong reason!
// Explanation: (0 < x) -> true, then true < 10 -> 1 < 10 -> true
console.log(0 < x && x < 10); // true (correct)

// Another case:
console.log(10 < x < 20);   // true?? -> (10 < 7) -> false; false < 20 -> 0 < 20 -> true (WRONG)
console.log(10 < x && x < 20); // false (correct)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 - &lt;= and &g;= via negation and NaN effect</Styled.H3>
                <Styled.Code>{`console.log(3 <= 3);   // true  (not (3 > 3))
console.log(3 >= 4);   // false (not (3 < 4))

console.log(NaN <= 5); // false (since (NaN > 5) is false, but spec defines result as false when comparison is undefined)
console.log(NaN >= 5); // false`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default ComparisonOperators;
