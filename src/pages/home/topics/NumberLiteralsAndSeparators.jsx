// NumberLiteralsAndSeparators.jsx
import React from "react";
import { Styled } from "./styled";

const NumberLiteralsAndSeparators = () => {
    return (
        <Styled.Page>
            <Styled.H1>Number literals &amp; separators</Styled.H1>

            <Styled.Lead>
                JavaScript supports decimal, binary (<code>0b</code>), octal (<code>0o</code>), and
                hexadecimal (<code>0x</code>) numeric literals, with optional fractional and exponent
                parts for decimal. Numeric separators (<code>_</code>) improve readability.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Forms:</strong> Decimal integers (<code>123</code>), decimals (<code>12.34</code>), scientific
                        notation (<code>1.2e3</code>), binary (<code>0b1010</code>), octal (<code>0o755</code>), hex (<code>0xFF</code>).
                    </li>
                    <li>
                        <strong>BigInt:</strong> Append <code>n</code> to an integer literal (<code>9007199254740993n</code>).
                        Works with binary/octal/hex as well (<code>0b1010n</code>, <code>0xFFn</code>).
                    </li>
                    <li>
                        <strong>Numeric separators:</strong> Underscore <code>_</code> may appear <em>between digits</em> to group them
                        (e.g., <code>1_000_000</code>, <code>0xCA_FE</code>, <code>1_234.56_78</code>, <code>1e1_0</code>).
                    </li>
                    <li>
                        <strong>Separator rules (invalid if violated):</strong> not at the start/end of digits,
                        not next to a decimal point (<code>1_.0</code>, <code>1._0</code> ❌), not directly after a base prefix
                        (<code>0x_FF</code> ❌), not before the <code>n</code> suffix (<code>123_ n</code> ❌), not adjacent to another underscore.
                    </li>
                    <li>
                        <strong>Legacy octal:</strong> Leading-zero octal like <code>077</code> is a <em>SyntaxError</em> in strict mode;
                        use <code>0o77</code> instead.
                    </li>
                    <li>
                        <strong>Infinity/NaN:</strong> Not literals—identifiers on <code>globalThis</code> (e.g., <code>Infinity</code>, <code>NaN</code>).
                        <code>-Infinity</code> is the unary <code>-</code> operator applied to <code>Infinity</code>.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Decimal, fraction, exponent</Styled.H3>
                <Styled.Code>{`console.log(123);        // 123
console.log(12.34);      // 12.34
console.log(.5);         // 0.5 (leading 0 optional)
console.log(2.);         // 2   (trailing dot ok)
console.log(1e3);        // 1000
console.log(1.5e-3);     // 0.0015`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Binary, octal, hex</Styled.H3>
                <Styled.Code>{`console.log(0b1010);     // 10
console.log(0o755);      // 493
console.log(0xFF);       // 255

// With separators:
console.log(0b1010_0110); // 166
console.log(0o12_34);     // 668
console.log(0xCA_FE);     // 51966`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — BigInt literals</Styled.H3>
                <Styled.Code>{`console.log(10n + 2n);            // 12n
console.log(0xFFn);                 // 255n
console.log(1_000_000_000_000n);    // 1000000000000n

// Mixing BigInt with Number throws:
// 10n + 1; // ❌ TypeError`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Numeric separators: valid vs invalid</Styled.H3>
                <Styled.Code>{`// ✅ Valid uses:
console.log(1_000_000);         // 1000000
console.log(123_456.78_90);     // 123456.789
console.log(1e1_0);             // 1e10 → 10000000000
console.log(0xFF_FF_FF);        // 16777215

// ❌ Invalid (SyntaxError if uncommented):
// const a = _123;       // starts with underscore
// const b = 123_;       // ends with underscore
// const c = 1_.0;       // next to decimal point
// const d = 1._0;       // next to decimal point
// const e = 0x_FF;      // right after base prefix
// const f = 1__0;       // double underscore
// const g = 123_n;      // right before BigInt suffix`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Legacy octal vs modern octal</Styled.H3>
                <Styled.Code>{`// Non-strict (historical):
// console.log(077);   // 63  (legacy octal)
// Strict mode:
"use strict";
// const x = 077;      // ❌ SyntaxError in strict mode
const y = 0o77;        // 63 (use this form)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Separators don’t affect numeric value</Styled.H3>
                <Styled.Code>{`console.log(1000000 === 1_000_000); // true
console.log(0xDEAD_BEEF === 0xDEADBEEF); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Readability patterns</Styled.H3>
                <Styled.UL>
                    <li>Group decimal digits by thousands: <code>1_234_567_890</code>.</li>
                    <li>Group hex by bytes/words: <code>0xDE_AD_BE_EF</code> or <code>0xFFFF_FFFF</code>.</li>
                    <li>Group binary by nibbles/bytes: <code>0b1101_1111_0000</code>.</li>
                    <li>For decimals with exponents, grouping exponent digits is allowed: <code>1e1_2</code>.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Numbers vs identifiers (Infinity/NaN)</Styled.H3>
                <Styled.Code>{`console.log(Infinity);     // Infinity (identifier, not a literal)
console.log(-Infinity);    // -Infinity (unary minus + Infinity)
console.log(NaN);          // NaN (identifier)
console.log(Number.isNaN(NaN)); // true`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default NumberLiteralsAndSeparators;
