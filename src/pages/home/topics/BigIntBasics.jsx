// BigIntBasics.jsx
import React from "react";
import { Styled } from "./styled";

const BigIntBasics = () => {
    return (
        <Styled.Page>
            <Styled.H1>BigInt basics (ops, mixing rules)</Styled.H1>

            <Styled.Lead>
                <code>BigInt</code> represents whole numbers of arbitrary size. It’s a distinct
                primitive type (<code>typeof 10n === "bigint"</code>) with its own operators and rules.
                You can’t mix it with <code>number</code> in arithmetic.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        Create via a literal with <code>n</code> (<code>123n</code>, <code>0xFFn</code>, <code>0b1010n</code>) or with{" "}
                        <code>BigInt(value)</code> (string or integral number).
                    </li>
                    <li>
                        Arithmetic operators supported with <em>both</em> operands BigInt:{" "}
                        <code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>%</code> <code>**</code>. Division truncates toward 0.
                    </li>
                    <li>
                        Bitwise for BigInt only: <code>&amp;</code> <code>|</code> <code>^</code> <code>~</code> <code>&lt;&lt;</code> <code>&gt;&gt;</code>.{" "}
                        No unsigned right shift <code>&gt;&gt;&gt;</code> for BigInt.
                    </li>
                    <li>
                        Mixing rule: arithmetic/bitwise with a <code>number</code> throws <code>TypeError</code>. Use explicit conversion.
                    </li>
                    <li>
                        Comparisons: <code>&lt;</code>, <code>&gt;</code>, etc. can compare BigInt with Number; <code>===</code> does <em>not</em> coerce; <code>==</code> does.
                    </li>
                    <li>
                        Boolean coercion: <code>0n</code> is falsy; any other BigInt is truthy.
                    </li>
                    <li>
                        No decimals: <code>BigInt(1.5)</code>, <code>BigInt(NaN)</code>, <code>BigInt(Infinity)</code> throw (non-integral).
                    </li>
                    <li>
                        Not compatible with <code>Math.*</code>. Format via <code>toString()</code> / <code>toLocaleString()</code>.
                    </li>
                    <li>
                        JSON: <code>JSON.stringify</code> on a BigInt throws; serialize as string (via replacer) if needed.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Creating BigInts</Styled.H3>
                <Styled.Code>{`const a = 123n;         // literal
const b = 0xFFn;        // hex literal → 255n
const c = BigInt("9007199254740993"); // from string (> Number.MAX_SAFE_INTEGER)
const d = BigInt(42);   // from integral number

console.log(typeof a, a); // "bigint" 123n`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Arithmetic (truncating division)</Styled.H3>
                <Styled.Code>{`console.log(5n + 7n);   // 12n
console.log(5n - 7n);   // -2n
console.log(5n * 7n);   // 35n
console.log(5n / 2n);   // 2n  (truncates toward 0)
console.log(-5n / 2n);  // -2n (truncates toward 0)
console.log(5n % 2n);   // 1n
console.log((-5n) % 2n);// -1n (JS remainder keeps left operand's sign)
console.log(2n ** 63n); // 9223372036854775808n`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Bitwise with BigInt</Styled.H3>
                <Styled.Code>{`console.log(0b1010n & 0b1100n); // 0b1000n (8n)
console.log(0b1010n | 0b1100n); // 0b1110n (14n)
console.log(0b1010n ^ 0b1100n); // 0b0110n (6n)
console.log(~0b1010n);          // bitwise NOT (two's-complement style)
console.log(1n << 8n);          // 256n
console.log(-2n >> 1n);         // -1n (arithmetic shift)
// 1n >>> 1n; // ❌ SyntaxError: unsigned right shift not defined for BigInt`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Mixing throws; convert explicitly</Styled.H3>
                <Styled.Code>{`// 10n + 1;           // ❌ TypeError: Cannot mix BigInt and other types
console.log(10n + BigInt(1));    // 11n
console.log(Number(10n) + 1);    // 11  (possible precision loss for huge BigInts)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Comparisons</Styled.H3>
                <Styled.Code>{`console.log(10n === 10);   // false  (different types)
console.log(10n == 10);     // true   (loose equality)
console.log(10n < 20);      // true   (relational comparison allowed)
console.log(9007199254740993n == 9007199254740993); // false (number rounded)
console.log(Object.is(0n, -0n)); // true (BigInt has no signed zero)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Coercion rules & errors</Styled.H3>
                <Styled.Code>{`// Valid:
console.log(BigInt("0xFF")); // 255n
console.log(BigInt(true));   // 1n
console.log(BigInt(false));  // 0n

// Errors (non-integral / non-finite):
try { BigInt(1.5); } catch (e) { console.log(e.name); }        // RangeError
try { BigInt(NaN); } catch (e) { console.log(e.name); }         // RangeError
try { BigInt(Infinity); } catch (e) { console.log(e.name); }    // RangeError

// Unary plus is NOT allowed:
try { /* eslint-disable no-unsafe-unary */ console.log(+10n); } 
catch (e) { console.log(e.name); } // TypeError`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Formatting & JSON</Styled.H3>
                <Styled.Code>{`const x = 12345678901234567890n;
console.log(x.toString());           // "12345678901234567890"
console.log(x.toLocaleString("en-IN")); // locale string

try { JSON.stringify({ x }); } 
catch (e) { console.log(e.name); }   // TypeError (BigInt not JSON-serializable)

// Workaround: stringify as string
const json = JSON.stringify({ x: x.toString() });
console.log(json); // {"x":"12345678901234567890"}`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Bit-width truncation helpers</Styled.H3>
                <Styled.Code>{`// Constrain a BigInt to N bits:
console.log(BigInt.asUintN(8, 300n)); // 44n  (300 mod 2^8)
console.log(BigInt.asIntN(8, 300n));  // 44n  (interpreted as signed 8-bit)
console.log(BigInt.asIntN(8, 0xFFn)); // -1n  (two's-complement)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Typed arrays for 64-bit lanes</Styled.H3>
                <Styled.Code>{`const a = new BigInt64Array([1n, 2n, -3n]);
const b = new BigUint64Array([1n, 2n, 3n]);
console.log(a[2], b[2]); // -3n 3n`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Practical tips</Styled.H3>
                <Styled.UL>
                    <li>Use BigInt for <em>integers</em> that must be exact (IDs, counters, cryptography math).</li>
                    <li>Avoid mixing with <code>number</code>; convert at boundaries only.</li>
                    <li>No <code>Math.*</code> support—roll your own integer math or use libraries.</li>
                    <li>Beware performance: BigInt operations are generally slower than on small Numbers.</li>
                    <li>When storing/transmitting, convert to decimal or hex strings; parse back with <code>BigInt(str)</code>.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default BigIntBasics;
