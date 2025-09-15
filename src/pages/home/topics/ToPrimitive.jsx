// ToPrimitive.jsx
import React from "react";
import { Styled } from "./styled";

const ToPrimitive = () => {
    return (
        <Styled.Page>
            <Styled.H1>ToPrimitive (<code>valueOf</code>, <code>toString</code>, <code>Symbol.toPrimitive</code>)</Styled.H1>

            <Styled.Lead>
                When JavaScript needs a primitive (number/string/symbol/bigint) but has an object,
                it runs the abstract operation <em>ToPrimitive</em>. You can influence this using
                <code>Symbol.toPrimitive</code>, <code>valueOf</code>, and <code>toString</code>.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Order of preference:</strong> If present, call <code>obj[Symbol.toPrimitive](hint)</code>. Otherwise try <code>valueOf()</code>, then <code>toString()</code> until a primitive is produced.</li>
                    <li><strong>Hints:</strong> The engine passes a <em>hint</em> — <code>"number"</code>, <code>"string"</code>, or <code>"default"</code>. Most objects treat <code>"default"</code> like <code>"number"</code>, but <code>Date</code> prefers <code>"string"</code>.</li>
                    <li><strong>Failure:</strong> If none of the methods return a primitive, the coercion throws <code>TypeError</code> when a primitive is required.</li>
                    <li><strong>Common triggers:</strong> arithmetic (<code>+</code> (numeric side), <code>-</code>, <code>*</code>, <code>/</code>, unary <code>+</code>), string contexts (<code>String(x)</code>, template literals), loose equality (<code>obj == prim</code>), relational (<code>&lt;</code>, <code>&gt;</code>), and property keys via <em>ToPropertyKey</em>.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Resolution order &amp; the hint</Styled.H3>
                <Styled.Code>{`const obj = {
  [Symbol.toPrimitive](hint) {
    // hint is "number" | "string" | "default"
    if (hint === "number") return 10;
    if (hint === "string") return "ten";
    return 100; // default
  },
  valueOf() { return 1; },
  toString() { return "one"; }
};

console.log(+obj);           // 10      (number hint via unary +)
console.log(String(obj));    // "ten"   (string hint)
console.log(obj + 1);        // 101     (default hint → 100, then + 1 → 101)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Without <code>Symbol.toPrimitive</code>: valueOf then toString</Styled.H3>
                <Styled.Code>{`const noSym = {
  valueOf() { return 7; },      // primitive → used first for number/default hints
  toString() { return "seven"; }
};

console.log(noSym + 3);      // 10  (default/number hint → 7 + 3)
console.log(String(noSym));  // "seven" (string hint → toString())`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Date prefers string for "default"</Styled.H3>
                <Styled.Code>{`const d = new Date("2024-01-02T00:00:00Z");
console.log(String(d)); // e.g., "Tue Jan 02 2024 ..." (string hint)
console.log(d + "");    // same as above (default hint behaves like string for Date)
console.log(+d);        // 1704153600000  (number hint → timestamp in ms)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Failure to produce a primitive throws</Styled.H3>
                <Styled.Code>{`const bad = {
  valueOf(){ return {}; },   // not primitive
  toString(){ return {}; }   // not primitive
};
try {
  Number(bad);               // needs a primitive → TypeError
} catch (e) {
  console.log(e instanceof TypeError); // true
}`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Operators that trigger ToPrimitive</Styled.H3>
                <Styled.Code>{`const box = { valueOf(){ return 5; }, toString(){ return "five"; } };

console.log(1 + box);     // 6    (default/number hint)
console.log(box - 1);     // 4    (number hint)
console.log(\`\${box}\`); // "five" (template literal → ToString → string hint)
console.log(box > 3);     // true (relational → number hint)
console.log(box == "5");  // true (loose eq: object coerces with default hint)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — The <code>+</code> operator: string vs numeric</Styled.H3>
                <Styled.Code>{`const a = { toString(){ return "A"; }, valueOf(){ return 1; } };
const b = { toString(){ return "B"; }, valueOf(){ return 2; } };

console.log(a + b);     // 3        (both sides yield numbers → numeric +)
console.log(a + "X");   // "AX"     (right is string → string concatenation)
console.log("" + a + b); // "AB"    (once string context starts, both ToString)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Property keys use ToPropertyKey (string-ish)</Styled.H3>
                <Styled.Code>{`const keyObj = { toString(){ return "id"; } };
const o = {};
o[keyObj] = 123;                 // key becomes "id"
console.log(o.id);               // 123

// If a Symbol is produced, it becomes a symbol key:
const sKeyObj = { [Symbol.toPrimitive](){ return Symbol("k"); } };
const o2 = {};
o2[sKeyObj] = 1;
console.log(Object.getOwnPropertySymbols(o2).length > 0); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Custom formatting via <code>Symbol.toPrimitive</code></Styled.H3>
                <Styled.Code>{`const money = {
  amount: 2500,
  currency: "INR",
  [Symbol.toPrimitive](hint){
    if (hint === "string") return \`\${this.currency} \${this.amount}\`;
    return this.amount; // number/default
  }
};
console.log(String(money)); // "INR 2500"
console.log(money + 500);   // 3000`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Wrappers unbox via <code>valueOf()</code></Styled.H3>
                <Styled.Code>{`console.log(+new Number(4));   // 4   (valueOf → 4)
console.log("" + new String("hi")); // "hi" (toString)
console.log(Boolean(new Boolean(false))); // true (object truthy; unboxing differs from truthiness)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Practical guard patterns</Styled.H3>
                <Styled.UL>
                    <li>Prefer defining <code>Symbol.toPrimitive</code> on custom numeric/string-like objects for clarity.</li>
                    <li>Ensure your conversion methods return a <em>primitive</em> (number/string/bigint/symbol/boolean).</li>
                    <li>Avoid relying on quirky cases like <code>Date</code>'s default-to-string unless intentional.</li>
                    <li>Be explicit: use <code>Number(x)</code>, <code>String(x)</code>, or template literals instead of implicit coercion when readability matters.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default ToPrimitive;
