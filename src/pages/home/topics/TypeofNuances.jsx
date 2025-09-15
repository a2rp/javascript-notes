// TypeofNuances.jsx
import React from "react";
import { Styled } from "./styled";

const TypeofNuances = () => {
    return (
        <Styled.Page>
            <Styled.H1><code>typeof</code> nuances (null, functions, symbols)</Styled.H1>

            <Styled.Lead>
                <code>typeof</code> returns a string describing a value’s broad category, but it
                has a few historical quirks and special cases. Know these before using it
                for checks or guards.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Primitive results:</strong> <code>"undefined"</code>, <code>"boolean"</code>,{" "}
                        <code>"number"</code>, <code>"bigint"</code>, <code>"string"</code>, <code>"symbol"</code>.
                    </li>
                    <li>
                        <strong>Objects:</strong> Most objects (arrays, dates, regexps, plain objects, errors, module namespaces)
                        return <code>"object"</code>.
                    </li>
                    <li>
                        <strong>Callable objects:</strong> Anything with [[Call]] (functions, async/generator/arrow/bound functions, callable proxies, classes)
                        returns <code>"function"</code>.
                    </li>
                    <li>
                        <strong>Quirk:</strong> <code>typeof null</code> is <code>"object"</code> (legacy bug).
                    </li>
                    <li>
                        <strong>Safe on undeclared names:</strong> <code>typeof notDefined</code> is <code>"undefined"</code> (no ReferenceError).
                    </li>
                    <li>
                        <strong>Environment oddities:</strong> Some hosts (browsers) make <code>typeof document.all</code> be <code>"undefined"</code> for web-compat.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — The <code>null</code> quirk</Styled.H3>
                <Styled.Code>{`console.log(typeof null); // "object"  <-- historical bug
console.log(null === null);     // true (use direct comparison)
console.log(Object.prototype.toString.call(null)); // "[object Null]"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Functions (incl. arrows, async, generators)</Styled.H3>
                <Styled.Code>{`function f() {}
const g = () => {};
async function h() {}
function* gen() {}

console.log(typeof f);   // "function"
console.log(typeof g);   // "function"
console.log(typeof h);   // "function"
console.log(typeof gen); // "function"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Classes report <code>"function"</code></Styled.H3>
                <Styled.Code>{`class C { static s(){} m(){} }
console.log(typeof C); // "function"
// But calling without 'new' throws:
// C(); // TypeError: Class constructor C cannot be invoked without 'new'`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Symbols</Styled.H3>
                <Styled.Code>{`const s = Symbol("id");
console.log(typeof s);              // "symbol"
console.log(typeof Symbol.iterator); // "symbol"

// No 'new Symbol()':
// new Symbol(); // TypeError

// A wrapper object can exist via Object():
const w = Object(s);
console.log(typeof w);              // "object" (a Symbol wrapper object)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Arrays, dates, regexps are still <code>"object"</code></Styled.H3>
                <Styled.Code>{`console.log(typeof [1,2,3]);          // "object"
console.log(typeof new Date());       // "object"
console.log(typeof /abc/);            // "object"
// Use precise checks:
console.log(Array.isArray([1,2,3]));  // true
console.log(Object.prototype.toString.call(new Date())); // "[object Date]"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Numbers: NaN, Infinity, -0</Styled.H3>
                <Styled.Code>{`console.log(typeof NaN);      // "number"
console.log(typeof Infinity); // "number"
console.log(typeof -0);       // "number"
console.log(Object.is(+0, -0)); // false (distinct signs)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — BigInt</Styled.H3>
                <Styled.Code>{`console.log(typeof 10n);           // "bigint"
console.log(typeof BigInt(10));   // "bigint"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Safe checks for undeclared variables</Styled.H3>
                <Styled.Code>{`// console.log(notDeclared); // ❌ ReferenceError
console.log(typeof notDeclared);   // "undefined" (safe)
let x;
console.log(typeof x);             // "undefined"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Callable Proxy still reports <code>"function"</code></Styled.H3>
                <Styled.Code>{`const target = () => "ok";
const prox = new Proxy(target, {});
console.log(typeof prox); // "function"
console.log(prox());      // "ok"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Module namespace objects & <code>import.meta</code></Styled.H3>
                <Styled.Code>{`// In modules:
// const ns = await import('./some-module.js');
// console.log(typeof ns);      // "object" (module namespace is an exotic object)
// console.log(typeof import.meta); // "object" (host-provided meta info)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 — Host oddity: <code>document.all</code> (browser)</Styled.H3>
                <Styled.Code>{`// In browsers (for legacy web-compat):
// typeof document.all === "undefined"  → true
// Yet Boolean(document.all) === false and it's also loosely equal to undefined/null.
// Treat it as a historical quirk; do not rely on it.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 12 — Practical guard patterns</Styled.H3>
                <Styled.Code>{`// 1) Distinguish null from objects:
const isObject = v => v !== null && typeof v === "object";

// 2) Function check (works for all callable kinds):
const isFunction = v => typeof v === "function";

// 3) Symbol check:
const isSymbol = v => typeof v === "symbol";

console.log(isObject({}));     // true
console.log(isObject(null));   // false
console.log(isFunction(async ()=>{})); // true
console.log(isSymbol(Symbol()));       // true`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default TypeofNuances;
