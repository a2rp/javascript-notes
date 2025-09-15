// BitwiseOperators.jsx
import React from "react";
import { Styled } from "./styled";

const BitwiseOperators = () => {
    return (
        <Styled.Page>
            <Styled.H1>Bitwise operators</Styled.H1>

            <Styled.Lead>
                JavaScript bitwise operators work on 32-bit integers. Operands are converted to
                32-bit signed integers (<code>ToInt32</code>) except <code>&gt;&gt;&gt;</code> which uses
                unsigned (<code>ToUint32</code>) and produces an unsigned 32-bit result. Operators:
                <code>&amp;</code> AND, <code>|</code> OR, <code>^</code> XOR, <code>~</code> NOT,
                shifts <code>&lt;&lt;</code>, <code>&gt;&gt;</code>, <code>&gt;&gt;&gt;</code>.
                BigInt also supports bitwise ops (except <code>&gt;&gt;&gt;</code>), but Number and BigInt can’t be mixed.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong><code>a &amp; b</code></strong>: bitwise AND (1 only where both have 1).</li>
                    <li><strong><code>a | b</code></strong>: bitwise OR (1 where either has 1).</li>
                    <li><strong><code>a ^ b</code></strong>: bitwise XOR (1 where bits differ).</li>
                    <li><strong><code>~a</code></strong>: bitwise NOT (flip bits). On 32-bit ints, <code>~x === -(x+1)</code>.</li>
                    <li><strong><code>a &lt;&lt; n</code></strong>: left shift (fills with 0).</li>
                    <li><strong><code>a &gt;&gt; n</code></strong>: arithmetic right shift (sign-extended).</li>
                    <li><strong><code>a &gt;&gt;&gt; n</code></strong>: logical right shift (zero-filled, unsigned result).</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — AND, OR, XOR, NOT</Styled.H3>
                <Styled.Code>{`const a = 0b0101; // 5
const b = 0b0011; // 3

console.log(a & b, (a & b).toString(2)); // 1 "1"
console.log(a | b, (a | b).toString(2)); // 7 "111"
console.log(a ^ b, (a ^ b).toString(2)); // 6 "110"
console.log(~5);                         // -6  (two's complement: ~x === -(x+1))`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Shifts (signed vs unsigned)</Styled.H3>
                <Styled.Code>{`console.log(5 << 1);         // 10   (0b0101 -> 0b1010)
console.log(5 >> 1);         // 2    (0b0101 -> 0b0010)
console.log(5 >>> 1);        // 2    (same for positive numbers)

console.log(-5 >> 1);        // -3   (sign bit preserved)
console.log(-5 >>> 1);       // 2147483645  (0x7FFFFFFD, zero-filled)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Bit flags pattern</Styled.H3>
                <Styled.Code>{`const READ  = 1 << 0; // 0b001
const WRITE = 1 << 1; // 0b010
const EXEC  = 1 << 2; // 0b100

let perms = READ | EXEC;   // 0b101
console.log((perms & WRITE) !== 0); // false (WRITE not set)

perms |= WRITE;            // set
console.log((perms & WRITE) !== 0); // true

perms &= ~EXEC;            // clear
console.log(perms, perms.toString(2)); // 3 "11"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — 32-bit integer coercion tricks</Styled.H3>
                <Styled.Code>{`console.log(3.9 | 0);     // 3   (truncate toward 0)
console.log(-3.9 | 0);    // -3

console.log(1e20 | 0);    // 0   (wraps modulo 2^32)
console.log((-1 >>> 0));  // 4294967295 (unsigned view)
console.log((0xFFFFFFFF >>> 0)); // 4294967295`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Extract bytes (RGBA)</Styled.H3>
                <Styled.Code>{`const rgba = 0x11223344; // 0xRR_GG_BB_AA
const r = (rgba >>> 24) & 0xFF;
const g = (rgba >>> 16) & 0xFF;
const b = (rgba >>> 8)  & 0xFF;
const a = rgba & 0xFF;

console.log(r, g, b, a);                   // 17 34 51 68
console.log(r.toString(16), g.toString(16), b.toString(16), a.toString(16));
// "11" "22" "33" "44"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — BigInt bitwise (no mixing types)</Styled.H3>
                <Styled.Code>{`const x = 0b1010n, y = 0b1100n;
console.log((x & y).toString(2));   // "1000"
console.log(1n << 5n);              // 32n
try { console.log(1n | 1); } catch (e) { console.log("TypeError"); } // mixing not allowed
// 1n >>> 1n  // ❌ not supported for BigInt`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Small utilities with masks</Styled.H3>
                <Styled.Code>{`const n = 13;              // 0b1101
console.log(n & 1);          // 1   (odd check)
console.log(n ^ 1);          // 12  (toggle LSB)
console.log(n & ~1);         // 12  (clear LSB)

const byte = 0b11110000;
const low4 = byte & 0b1111;
console.log(low4.toString(2)); // "0"`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default BitwiseOperators;
