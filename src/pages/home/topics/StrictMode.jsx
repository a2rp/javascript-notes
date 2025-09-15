import React from "react";
import { Styled } from "./styled";

const StrictMode = () => {
    return (
        <Styled.Page>
            <Styled.H1>Strict mode (<code>"use strict"</code>)</Styled.H1>
            <Styled.Lead>
                A stricter variant of JavaScript that removes confusing behaviors, turns silent errors into thrown errors,
                and forbids hazardous syntax. Modules and class bodies are strict by default.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>What:</strong> A semantic mode defined in ECMAScript that tightens language rules (no extra APIs).</li>
                    <li><strong>How to enable:</strong> Add the directive <code>"use strict"</code> at the start of a script or a function body. <em>ES modules and class bodies are always strict</em>; no directive needed there.</li>
                    <li><strong><code>this</code> binding:</strong> In simple function calls, <code>this</code> is <code>undefined</code> (not auto-bound to the global object).</li>
                    <li><strong>Implicit globals:</strong> Assigning to an undeclared identifier throws <code>ReferenceError</code> (instead of creating a global).</li>
                    <li><strong>Write errors surface:</strong> Writing to non-writable properties or to non-extensible objects throws <code>TypeError</code> (instead of silently failing).</li>
                    <li><strong>Forbidden syntax:</strong> <code>with</code> statement; legacy octal literals (like <code>0755</code>); duplicate parameter names.</li>
                    <li><strong><code>eval</code> and <code>arguments</code>:</strong> Direct <code>eval</code> doesn’t leak bindings outward; <code>arguments</code> is decoupled from parameters; <code>arguments.callee</code>/<code>.caller</code> are forbidden.</li>
                    <li><strong>Identifiers:</strong> You cannot bind/assign <code>eval</code> or <code>arguments</code> as variable/parameter names.</li>
                    <li><strong><code>delete</code> changes:</strong> Deleting unqualified identifiers is a <code>SyntaxError</code>; deleting non-configurable properties throws.</li>
                    <li><strong>Block functions:</strong> Function declarations inside blocks are block-scoped in strict code (avoid for clarity; prefer function expressions or <code>let</code>/<code>const</code>).</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Enabling strict mode</Styled.H3>
                <Styled.Code>{`"use strict"; // file-level (must be the first statement)

function f() {
  "use strict";   // function-level (applies only inside f)
  return 1;
}

// In ES modules and class bodies, code is strict by default.
// Output: (no runtime output; directives change semantics)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — No implicit globals</Styled.H3>
                <Styled.Code>{`// Sloppy (non-strict):
// x = 10;            // creates a global (bad)

// Strict:
"use strict";
try {
  x = 10;            // ReferenceError: x is not defined
} catch (e) {
  console.log(e.name); // "ReferenceError"
}

// Output:
// "ReferenceError"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — <code>this</code> is <code>undefined</code> in simple calls</Styled.H3>
                <Styled.Code>{`function sloppy() { return this; }      // not strict
function strictFn() { "use strict"; return this; }

console.log(sloppy() === globalThis); // true in many hosts (browser/Node)

// In strict:
console.log(strictFn());               // undefined

// Output (typical):
// true
// undefined`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Duplicate parameters are forbidden</Styled.H3>
                <Styled.Code>{`// Sloppy (pre-ES2015 engines allowed this, last param wins):
// function g(a, a) { return a; }

// Strict:
"use strict";
// function g(a, a) { return a; } // SyntaxError in strict code

// Output:
// SyntaxError (if you try to declare duplicate parameter names)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Writes to non-writable properties throw</Styled.H3>
                <Styled.Code>{`"use strict";
const obj = {};
Object.defineProperty(obj, "id", { value: 1, writable: false });

try {
  obj.id = 2; // TypeError in strict; silently ignored in sloppy
} catch (e) {
  console.log(e.name); // "TypeError"
}

// Output:
// "TypeError"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — <code>with</code> is disallowed</Styled.H3>
                <Styled.Code>{`"use strict";
// with ({ a: 1 }) { console.log(a); } // SyntaxError in strict

// Output:
// SyntaxError (if you try to use 'with')`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Legacy octal vs modern octal</Styled.H3>
                <Styled.Code>{`"use strict";
// const m = 0755;   // SyntaxError in strict (legacy octal)
// Use modern ES2015 octal literal:
const m = 0o755;
console.log(m); // 493

// Output:
// 493`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — <code>eval</code> doesn’t leak bindings; <code>arguments</code> decoupled</Styled.H3>
                <Styled.Code>{`function testEval() {
  "use strict";
  eval("var t = 1;");  // 't' is local to the eval code, not the surrounding scope
  console.log(typeof t); // "undefined"
}

function testArgs(a) {
  "use strict";
  arguments[0] = 99;   // does NOT modify 'a' in strict mode
  console.log(a);      // original value remains
}

testEval();
testArgs(1);

// Output:
// "undefined"
// 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — <code>delete</code> restrictions</Styled.H3>
                <Styled.Code>{`"use strict";
let x = 1;
// delete x; // SyntaxError: deleting an unqualified identifier is not allowed

const o = {};
Object.defineProperty(o, "p", { value: 10, configurable: false });
try {
  delete o.p; // TypeError in strict (silently fails in sloppy)
} catch (e) {
  console.log(e.name); // "TypeError"
}

// Output:
// "TypeError"`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default StrictMode;
