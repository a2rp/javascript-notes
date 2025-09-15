// UnaryOperators.jsx
import React from "react";
import { Styled } from "./styled";

const UnaryOperators = () => {
    return (
        <Styled.Page>
            <Styled.H1>Unary operators: +, -, !, ~, typeof, void, delete</Styled.H1>

            <Styled.Lead>
                Unary operators act on a single operand. We’ll coerce values to numbers (<code>+</code>, <code>-</code>),
                flip booleans (<code>!</code>), flip bits on 32-bit ints (<code>~</code>), inspect types (<code>typeof</code>),
                discard results (<code>void</code>), and remove object properties (<code>delete</code>).
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Unary plus <code>+x</code>:</strong> ToNumber coercion. Strings parsed as numbers; <code>null→0</code>, <code>true→1</code>, <code>undefined→NaN</code>. On <code>Symbol</code> or <code>BigInt</code> → <em>TypeError</em> for BigInt.</li>
                    <li><strong>Unary minus <code>-x</code>:</strong> Numerical negation after ToNumber. Works with <code>BigInt</code> (e.g., <code>-10n</code>).</li>
                    <li><strong>Logical NOT <code>!x</code>:</strong> ToBoolean, then negate. <code>!!x</code> is a boolean cast.</li>
                    <li><strong>Bitwise NOT <code>~x</code>:</strong> Convert to 32-bit <em>signed</em> int, flip all bits: <code>~x === -(x+1)</code>.</li>
                    <li><strong><code>typeof x</code>:</strong> Returns a string like <code>"number"</code>, <code>"string"</code>, <code>"boolean"</code>, <code>"undefined"</code>, <code>"object"</code>, <code>"function"</code>, <code>"symbol"</code>, <code>"bigint"</code>. Safe on undeclared identifiers.</li>
                    <li><strong><code>void x</code>:</strong> Evaluate <em>x</em> and produce <code>undefined</code>.</li>
                    <li><strong><code>delete ref</code>:</strong> Remove a property (if configurable). Returns <code>true</code> if deletion succeeds or the property doesn’t exist; can affect arrays by creating holes.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Unary plus (ToNumber)</Styled.H3>
                <Styled.Code>{`console.log(+"42");          // 42
console.log(+"  3.14\\n");    // 3.14
console.log(+true, +false);   // 1 0
console.log(+null, +undefined); // 0 NaN
try { console.log(+Symbol()); } catch (e) { console.log("TypeError"); }
try { console.log(+10n); } catch (e) { console.log("TypeError (BigInt + not allowed)"); }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Unary minus (negation)</Styled.H3>
                <Styled.Code>{`console.log(-"8");     // -8
console.log(-(-5));      // 5
console.log(-0);         // -0 (distinct signed zero exists)
console.log(-10n);       // -10n (BigInt allowed)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Logical NOT <code>!</code> and boolean cast</Styled.H3>
                <Styled.Code>{`console.log(!"");        // true
console.log(!"hi");      // false
console.log(!!123);      // true
console.log(!!0);        // false
console.log(!!{});       // true
console.log(!!NaN);      // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Bitwise NOT <code>~</code> (32-bit)</Styled.H3>
                <Styled.Code>{`console.log(~5);          // -6  (-(5+1))
console.log(~-1);         // 0
// Double NOT (~~) is a truncation trick to 32-bit int:
console.log(~~3.9);       // 3
console.log(~~(-3.9));    // -3`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — <code>typeof</code> results</Styled.H3>
                <Styled.Code>{`console.log(typeof 123);              // "number"
console.log(typeof 10n);              // "bigint"
console.log(typeof "x");              // "string"
console.log(typeof true);             // "boolean"
console.log(typeof undefined);        // "undefined"
console.log(typeof Symbol());         // "symbol"
console.log(typeof function(){});     // "function"
console.log(typeof class C {});       // "function"
console.log(typeof null);             // "object" (historical quirk)

// Safe on undeclared:
console.log(typeof notDeclared);      // "undefined"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — <code>void</code> to force <code>undefined</code></Styled.H3>
                <Styled.Code>{`console.log(void 0);           // undefined
console.log(void ("value"));   // undefined

// Arrow-IIFE without using the returned value:
void (function(){ console.log("side effect, result discarded"); })();

// In links (legacy pattern): href="javascript:void 0" to avoid navigation (not recommended in modern apps).`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — <code>delete</code> object properties</Styled.H3>
                <Styled.Code>{`const user = { name: "Ada", role: "admin" };
console.log(delete user.role);  // true (removed)
console.log(user.role);         // undefined
console.log(delete user.missing); // true (no-op, still true)

const locked = Object.defineProperty({}, "x", { value: 1, configurable: false });
try {
  console.log(delete locked.x); // false in sloppy; throws in strict modes
} catch (e) {
  console.log("TypeError in strict mode");
}`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — <code>delete</code> with arrays (creates holes)</Styled.H3>
                <Styled.Code>{`const arr = ["A","B","C"];
console.log(arr.length);     // 3
delete arr[1];
console.log(arr[1]);         // undefined (hole)
console.log(arr.length);     // 3 (length unchanged)
console.log(arr);            // ["A", empty, "C"]  // hole, not "undefined"
 // Prefer splice to remove and shift:
const xs = ["A","B","C"]; xs.splice(1,1);
console.log(xs);             // ["A","C"]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — <code>delete</code> on variables/bindings</Styled.H3>
                <Styled.Code>{`// In modules/strict mode, deleting a plain identifier is a SyntaxError.
// The following lines are comments to illustrate:
// let a = 1; delete a; // ❌ SyntaxError
// function f(){}; delete f; // ❌ SyntaxError

// Deleting a global property (if it is actually a property and configurable) can work:
// On some environments, globalThis.temp = 1; then:
globalThis.temp = 1;
console.log(delete globalThis.temp); // true (if configurable)
console.log("temp" in globalThis);   // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Combining ideas</Styled.H3>
                <Styled.Code>{`// Ensure numeric input:
const qty = +("07");         // 7
// Guarantee boolean:
const ready = !!"ok";        // true
// Throw away a promise result intentionally:
void fetch?.("/ping");
// Remove a flag:
const flags = { debug: true }; delete flags.debug;`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default UnaryOperators;
