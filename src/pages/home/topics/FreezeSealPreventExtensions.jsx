// FreezeSealPreventExtensions.jsx
import React from "react";
import { Styled } from "./styled";

const FreezeSealPreventExtensions = () => {
    return (
        <Styled.Page>
            <Styled.H1>Object freezing/sealing/extensibility</Styled.H1>

            <Styled.Lead>
                JavaScript lets you control whether objects can have properties added,
                removed, or changed. <code>Object.preventExtensions</code>, <code>Object.seal</code>,
                and <code>Object.freeze</code> progressively lock an object down.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Extensible:</strong> An object that can gain new own properties. Check with{" "}
                        <code>Object.isExtensible(obj)</code>.
                    </li>
                    <li>
                        <strong><code>Object.preventExtensions(obj)</code>:</strong> Disallows adding new own
                        properties. Existing properties are untouched.
                    </li>
                    <li>
                        <strong><code>Object.seal(obj)</code>:</strong> Calls <code>preventExtensions</code> and
                        also sets all <em>own</em> properties’ <code>configurable:false</code> (cannot delete or
                        reconfigure). <em>Writable stays as-is.</em> Check with <code>Object.isSealed(obj)</code>.
                    </li>
                    <li>
                        <strong><code>Object.freeze(obj)</code>:</strong> Seals the object and also sets all{" "}
                        <em>data</em> properties’ <code>writable:false</code> (values cannot change). Accessor
                        properties (get/set) keep their getter/setter but become <code>configurable:false</code>.
                        Check with <code>Object.isFrozen(obj)</code>.
                    </li>
                    <li>
                        <strong>Shallow only:</strong> All three operations affect only the object itself, not
                        nested objects. Deep locking requires a helper (see below).
                    </li>
                    <li>
                        <strong>Strict-mode behavior:</strong> Violations throw <code>TypeError</code>. In sloppy
                        mode they fail silently (return <code>false</code>, ignore assignment, etc.).
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — <code>preventExtensions</code></Styled.H3>
                <Styled.Code>{`const a = { x: 1 };
console.log(Object.isExtensible(a)); // true
Object.preventExtensions(a);
console.log(Object.isExtensible(a)); // false

// Adding new props now fails:
a.y = 2;                 // ignored (or TypeError in strict)
console.log(a.y);        // undefined

// Existing props unaffected:
a.x = 9;
console.log(a.x);        // 9`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — <code>seal</code> (no add, no delete, no reconfigure)</Styled.H3>
                <Styled.Code>{`const b = { k: 1 };
Object.seal(b);
console.log(Object.isExtensible(b)); // false
console.log(Object.isSealed(b));     // true

// Can't add or delete:
b.newKey = 123;          // ignored / TypeError (strict)
delete b.k;              // false / TypeError (strict)
console.log(b.k);        // 1

// But writable stays the same:
b.k = 7;                 // allowed if 'k' was writable
console.log(b.k);        // 7`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — <code>freeze</code> (values fixed, accessors unchanged)</Styled.H3>
                <Styled.Code>{`const c = { p: 1 };
Object.freeze(c);
console.log(Object.isFrozen(c)); // true

// Data properties cannot change:
c.p = 99;                // ignored / TypeError (strict)
console.log(c.p);        // 1

// Accessor nuance: getters/setters remain callable, but the
// property itself is non-configurable (shape locked):
let _v = 0;
const d = {};
Object.defineProperty(d, "val", {
  get(){ return _v; },
  set(n){ _v = n; },     // setter still runs even if object is frozen
  enumerable: true, configurable: true
});
Object.freeze(d);
// d.val's descriptor now has configurable:false; setter still exists:
d.val = 42;              // setter runs, mutating _v outside the object
console.log(d.val);      // 42`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Descriptors before/after</Styled.H3>
                <Styled.Code>{`const obj = {};
Object.defineProperty(obj, "x", {
  value: 10, writable: true, enumerable: true, configurable: true
});

// Seal:
Object.seal(obj);
// descriptor: { value:10, writable:true, enumerable:true, configurable:false }

// Freeze:
Object.freeze(obj);
// descriptor: { value:10, writable:false, enumerable:true, configurable:false }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Arrays under the three locks</Styled.H3>
                <Styled.Code>{`// preventExtensions: no new indices
const A = [1, 2];
Object.preventExtensions(A);
A.push(3);        // fails (cannot add index 2) — ignored / TypeError (strict)
A[0] = 9;         // OK (existing index still writable)
console.log(A);   // [9, 2]

// seal: also makes existing indices non-configurable (can't delete/reconfigure)
const B = [1, 2, 3];
Object.seal(B);
delete B[1];      // false / TypeError (strict); index non-configurable
B[0] = 7;         // OK (writable stays)
console.log(B.length); // 3
// Reducing length may fail if it would need to delete non-configurable indices.

// freeze: existing indices become non-writable + non-configurable
const C = [1, 2];
Object.freeze(C);
C[0] = 5;         // ignored / TypeError (strict)
C.push(3);        // ignored / TypeError (strict)
console.log(C);   // [1, 2]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Shallow: nested objects still mutable</Styled.H3>
                <Styled.Code>{`const cfg = Object.freeze({ theme: { dark: true } });
cfg.theme.dark = false;    // allowed: inner object wasn't frozen
console.log(cfg.theme.dark); // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Simple deep freezer</Styled.H3>
                <Styled.Code>{`function deepFreeze(o) {
  // Freeze children first
  for (const k of Object.getOwnPropertyNames(o)) {
    const v = o[k];
    if (v && typeof v === "object") deepFreeze(v);
  }
  return Object.freeze(o);
}
const locked = deepFreeze({ a: { b: 1 } });
// locked.a.b = 2; // ❌ TypeError in strict
console.log(locked.a.b);   // 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Reconfiguration is blocked</Styled.H3>
                <Styled.Code>{`const e = {};
Object.defineProperty(e, "x", {
  value: 1, writable: true, configurable: true
});
Object.seal(e);
// Now configurable:false → cannot change descriptor shape:
try {
  Object.defineProperty(e, "x", { enumerable: false }); // TypeError
} catch (err) { /* TypeError in strict */ }
console.log(Object.getOwnPropertyDescriptor(e, "x").enumerable); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Quick reference</Styled.H3>
                <Styled.UL>
                    <li><code>preventExtensions</code>: ❌ add, ✅ delete, ✅ reconfigure, ✅/❌ write (unchanged)</li>
                    <li><code>seal</code>: ❌ add, ❌ delete, ❌ reconfigure, ✅/❌ write (unchanged)</li>
                    <li><code>freeze</code>: ❌ add, ❌ delete, ❌ reconfigure, ❌ write (data props)</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Detecting state</Styled.H3>
                <Styled.Code>{`const o = { a: 1 };
console.log(Object.isExtensible(o)); // true
Object.preventExtensions(o);
console.log(Object.isExtensible(o)); // false
console.log(Object.isSealed(o));     // false
Object.seal(o);
console.log(Object.isSealed(o));     // true
console.log(Object.isFrozen(o));     // false
Object.freeze(o);
console.log(Object.isFrozen(o));     // true`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default FreezeSealPreventExtensions;
