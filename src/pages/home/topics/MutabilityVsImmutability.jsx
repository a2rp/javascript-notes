// MutabilityVsImmutability.jsx
import React from "react";
import { Styled } from "./styled";

const MutabilityVsImmutability = () => {
    return (
        <Styled.Page>
            <Styled.H1>Mutability vs immutability</Styled.H1>

            <Styled.Lead>
                Primitives are immutable; objects are mutable by default. Immutability is a
                discipline of producing new values instead of changing existing ones, which
                improves predictability and reduces side-effects.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Immutable value:</strong> cannot be changed in place. All primitives (<code>undefined</code>, <code>null</code>, <code>boolean</code>, <code>number</code>, <code>bigint</code>, <code>string</code>, <code>symbol</code>) are immutable.</li>
                    <li><strong>Mutable value:</strong> objects (plain objects, arrays, functions, dates, maps/sets, typed arrays, etc.) can be changed by adding/removing/updating properties or elements.</li>
                    <li><strong>Rebinding vs mutation:</strong> Reassigning a variable points it to a new value; mutating changes the same underlying object seen by all references.</li>
                    <li><strong>Benefits of immutability:</strong> easier reasoning, fewer hidden side-effects, simpler change detection, potential for time-travel/undo, safer concurrency.</li>
                    <li><strong>Costs/tradeoffs:</strong> extra allocations and GC pressure if overused; deep copies can be expensive—prefer <em>structural sharing</em>.</li>
                    <li><strong>Enforcing immutability:</strong> <code>Object.freeze</code> (shallow), deep-freeze helpers, disciplined update patterns (spread/concat/slice, object rest, Maps cloned with <code>new Map(old)</code>, etc.).</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Primitives are immutable</Styled.H3>
                <Styled.Code>{`let s = "Ash";
s[0] = "X";          // no effect (strings immutable)
console.log(s);      // "Ash"

let n = 5;
n.toFixed = () => "hack"; // no effect on the primitive value
console.log(n + 1); // 6`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Objects are mutable by default</Styled.H3>
                <Styled.Code>{`const user = { name: "Ash", skills: ["JS"] };
user.name = "Ada";
user.skills.push("React");
console.log(user); // { name: "Ada", skills: ["JS","React"] }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Rebinding (new object) vs mutating (same object)</Styled.H3>
                <Styled.Code>{`let a = { x: 1 };
let b = a;           // both point to same object
b.x = 2;             // mutate
console.log(a.x);    // 2

b = { x: 3 };        // rebind b to a new object
console.log(a.x);    // 2
console.log(b.x);    // 3`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — "const" freezes the binding, not the object</Styled.H3>
                <Styled.Code>{`const cfg = { dark: true };
cfg.dark = false;        // OK (object still mutable)
// cfg = {}              // ❌ TypeError: Assignment to constant variable
console.log(cfg.dark);    // false`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Shallow immutable updates (objects)</Styled.H3>
                <Styled.Code>{`const state = { a: 1, nested: { k: 9 } };

// Update 'a' without touching the original object:
const next = { ...state, a: 2 };
console.log(state.a, next.a);            // 1 2
console.log(state.nested === next.nested); // true (shallow copy shares nested)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Shallow immutable updates (arrays)</Styled.H3>
                <Styled.Code>{`const arr = [1, 2, 3];

// add
const arrAdd = [...arr, 4];              // [1,2,3,4]
// insert at start
const arrPre = [0, ...arr];              // [0,1,2,3]
// remove index 1
const arrRem = [...arr.slice(0,1), ...arr.slice(2)]; // [1,3]
// replace index 2
const arrRep = arr.map((v,i) => i === 2 ? 99 : v);   // [1,2,99]

console.log(arr);     // [1,2,3] (unchanged)
console.log(arrAdd);  // [1,2,3,4]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Deep updates with structural sharing</Styled.H3>
                <Styled.Code>{`const state = { profile: { name: "Ash", addr: { city: "BLR" } } };

// update city immutably:
const next = {
  ...state,
  profile: {
    ...state.profile,
    addr: { ...state.profile.addr, city: "Bengaluru" }
  }
};

console.log(state.profile.addr.city); // "BLR"
console.log(next.profile.addr.city);  // "Bengaluru"
// Shared parts:
console.log(state.profile === next.profile);        // false
console.log(state.profile.addr === next.profile.addr); // false
console.log(state.profile.name === next.profile.name); // true (reused)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Freezing to prevent mutation (shallow)</Styled.H3>
                <Styled.Code>{`const obj = Object.freeze({ a: 1, inner: { k: 1 } });
// obj.a = 2;           // ❌ TypeError in strict mode
obj.inner.k = 9;         // allowed (freeze is shallow)
console.log(obj.inner.k); // 9`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Deep freeze helper (simple)</Styled.H3>
                <Styled.Code>{`function deepFreeze(o) {
  Object.getOwnPropertyNames(o).forEach(k => {
    const v = o[k];
    if (v && typeof v === "object") deepFreeze(v);
  });
  return Object.freeze(o);
}

const config = deepFreeze({ theme: { dark: true } });
// config.theme.dark = false; // ❌ TypeError in strict mode
console.log(config.theme.dark); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Dates, Maps, Sets are mutable objects</Styled.H3>
                <Styled.Code>{`const d = new Date("2024-01-01");
d.setFullYear(2025);
console.log(d.getFullYear()); // 2025

const m = new Map([["a",1]]);
m.set("a", 2);
console.log(m.get("a")); // 2

// Immutable update style:
const m2 = new Map(m); // clone entries (shallow)
m2.set("b", 3);
console.log(m.has("b"), m2.has("b")); // false true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 — Pure vs impure functions</Styled.H3>
                <Styled.Code>{`// impure: mutates its input
function addTagImpure(post, tag) {
  post.tags.push(tag);
  return post;
}

// pure: returns a new object, input untouched
function addTagPure(post, tag) {
  return { ...post, tags: [...post.tags, tag] };
}

const p1 = { title: "JS", tags: ["lang"] };
const p2 = addTagImpure(p1, "notes");
console.log(p1.tags.join(",")); // "lang,notes" (p1 changed)

const p3 = addTagPure(p1, "best");
console.log(p1.tags.join(",")); // "lang,notes" (unchanged further)
console.log(p3.tags.join(",")); // "lang,notes,best"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 12 — Copy pitfalls: nested references</Styled.H3>
                <Styled.Code>{`const src = { items: [{ id: 1 }, { id: 2 }] };
const shallow = { ...src };               // shallow
shallow.items[0].id = 99;                 // mutates inner object shared with src
console.log(src.items[0].id); // 99

// Safer (new array + cloned elements):
const safe = { items: src.items.map(it => ({ ...it })) };
safe.items[0].id = 1;
console.log(src.items[0].id, safe.items[0].id); // 99 1`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 13 — Structured clone: deep, but not for everything</Styled.H3>
                <Styled.Code>{`const original = { d: new Date(), arr: [1, { n: 2 }] };
const cloned = structuredClone(original);
cloned.arr[1].n = 9;

console.log(original.arr[1].n); // 2 (separate)
// Note: functions, DOM nodes, and some exotic types are not cloneable.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 14 — When mutation is okay</Styled.H3>
                <Styled.UL>
                    <li>Local objects with no shared references outside a function.</li>
                    <li>Performance-critical hot paths where profiling shows immutable patterns are too costly.</li>
                    <li>Controlled mutation during construction, then freeze for read-only use.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default MutabilityVsImmutability;
