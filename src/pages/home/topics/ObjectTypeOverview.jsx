// ObjectTypeOverview.jsx
import React from "react";
import { Styled } from "./styled";

const ObjectTypeOverview = () => {
    return (
        <Styled.Page>
            <Styled.H1>Object type — overview</Styled.H1>

            <Styled.Lead>
                Objects are dynamic collections of key–value pairs with prototype-based
                inheritance. Arrays, functions, dates, maps, sets, and most built-ins are
                objects. Primitives are not objects (though they can be auto-boxed).
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        An <strong>object</strong> maps <em>property keys</em> to values. Keys are
                        strings or symbols (not numbers; numeric literals are stringified).
                    </li>
                    <li>
                        Objects have a hidden <strong>[[Prototype]]</strong> (their parent in the
                        prototype chain). Property reads walk up this chain if not found on the object.
                    </li>
                    <li>
                        Properties have <strong>attributes</strong> (writable, enumerable, configurable)
                        and can be <em>data</em> properties or <em>accessors</em> (get/set).
                    </li>
                    <li>
                        Objects are <strong>reference values</strong>: variables hold references.
                        Equality (<code>===</code>) compares identity, not structure.
                    </li>
                    <li>
                        Common creation forms: object literal <code>&#123;...&#125;</code>,{" "}
                        <code>Object.create(proto)</code>, class/constructor with <code>new</code>.
                    </li>
                    <li>
                        Specializations: <code>Array</code>, <code>Function</code>, <code>Date</code>,{" "}
                        <code>RegExp</code>, typed arrays, collections, proxies… all are objects with
                        different behaviors.
                    </li>
                    <li>
                        <code>typeof obj</code> is <code>"object"</code> (for functions,{" "}
                        <code>"function"</code>—a historical special case, but functions are still objects).
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Creating objects</Styled.H3>
                <Styled.Code>{`const user = { name: "Ash", city: "Bengaluru" }; // literal
const anon = Object.create(null); // no prototype (pure dictionary)
const base = { kind: "base" };
const child = Object.create(base); // prototype-linked

console.log(user.name);            // "Ash"
console.log(Object.getPrototypeOf(anon)); // null
console.log(child.kind);           // "base" (found via prototype)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Keys: string vs symbol</Styled.H3>
                <Styled.Code>{`const s = Symbol("id");
const obj = { regular: 1, "1": "one" };
obj[s] = 99;

console.log(Object.keys(obj));     // ["regular","1"]  (symbols are skipped)
console.log(Object.getOwnPropertySymbols(obj).length); // 1
console.log(obj[s]);               // 99
console.log(obj[1]);               // "one" (numeric literal → "1")`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Property access & computed names</Styled.H3>
                <Styled.Code>{`const key = "score";
const o = { ["first"+"Name"]: "Ada", [key]: 42 };
console.log(o.firstName); // "Ada"
console.log(o[key]);      // 42
console.log(o.score);     // 42`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Identity vs structure</Styled.H3>
                <Styled.Code>{`const a = { x: 1 };
const b = { x: 1 };
const c = a;

console.log(a === b); // false  (different references)
console.log(a === c); // true   (same reference)
console.log(JSON.stringify(a) === JSON.stringify(b)); // true (same structure, but identity still differs)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Reference semantics</Styled.H3>
                <Styled.Code>{`function touch(p) { p.hit = true; }
const obj = {};
touch(obj);
console.log(obj.hit); // true  (function mutated the same referenced object)

let x = { n: 1 };
let y = x;       // copy the reference
y.n = 2;
console.log(x.n); // 2 (both names point to the same object)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Descriptors (data vs accessor)</Styled.H3>
                <Styled.Code>{`const box = {};
Object.defineProperty(box, "locked", {
  value: true, writable: false, enumerable: true, configurable: false
});

let _v = 0;
Object.defineProperty(box, "value", {
  get() { return _v; },
  set(n) { _v = n; },
  enumerable: true
});

try { box.locked = false; } catch(e){ /* TypeError in strict mode */ }
box.value = 10;
console.log(box.locked, box.value); // true 10`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Prototype lookup & shadowing</Styled.H3>
                <Styled.Code>{`const proto = { greet(){ return "hi"; } };
const inst = Object.create(proto);
console.log(inst.greet()); // "hi"  (found on prototype)

inst.greet = function(){ return "hello"; }; // shadow override
console.log(inst.greet()); // "hello"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Arrays & functions are objects</Styled.H3>
                <Styled.Code>{`const arr = [10, 20];
arr.extra = "ok";
console.log(typeof arr, Array.isArray(arr)); // "object" true
console.log(arr.extra); // "ok" (arrays are objects with special index behavior)

function f(){ return 1; }
f.meta = "info";
console.log(typeof f); // "function" (but it's an object)
console.log(f.meta);   // "info"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Cloning (shallow) vs deep</Styled.H3>
                <Styled.Code>{`const state = { a: 1, nested: { k: 9 } };
const shallow1 = { ...state };
const shallow2 = Object.assign({}, state);

console.log(shallow1.nested === state.nested); // true  (still same inner object)

// naive deep (NOT robust for all types):
const deep = JSON.parse(JSON.stringify(state));
console.log(deep.nested === state.nested);     // false (different object)

// For structured cloning (handles more cases):
// const clone = structuredClone(state); // modern API (see dedicated topic)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Deleting & existence checks</Styled.H3>
                <Styled.Code>{`const settings = { theme: "dark" };
console.log("theme" in settings); // true
console.log(settings.hasOwnProperty("theme")); // true (own only)
// console.log(Object.hasOwn(settings, "theme")); // modern own check

delete settings.theme;
console.log("theme" in settings); // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 — Freezing & extensibility (preview)</Styled.H3>
                <Styled.Code>{`const cfg = { a: 1 };
console.log(Object.isExtensible(cfg)); // true
Object.preventExtensions(cfg);
cfg.b = 2; // silently ignored (or TypeError in strict)

Object.freeze(cfg);     // makes existing props non-writable, non-configurable
// cfg.a = 10;          // TypeError in strict
console.log(Object.isFrozen(cfg)); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 12 — Safe dictionary objects</Styled.H3>
                <Styled.Code>{`// Object.create(null) avoids prototype collisions with keys like "constructor"
const dict = Object.create(null);
dict["__proto__"] = "safe";
dict["toString"] = "also safe";
console.log(Object.getPrototypeOf(dict)); // null
console.log(dict.toString); // "also safe"`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default ObjectTypeOverview;
