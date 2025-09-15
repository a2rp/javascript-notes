// ValueVsReference.jsx
import React from "react";
import { Styled } from "./styled";

const ValueVsReference = () => {
  return (
    <Styled.Page>
      <Styled.H1>Value vs reference</Styled.H1>

      <Styled.Lead>
        Primitives are copied and compared by <em>value</em>. Objects (arrays, functions,
        dates, etc.) are handled by <em>reference</em>: variables hold pointers to the same
        underlying object unless you create a new copy.
      </Styled.Lead>

      <Styled.Section>
        <Styled.H3>Definition</Styled.H3>
        <Styled.UL>
          <li>
            <strong>Value (primitive):</strong> <code>undefined</code>, <code>null</code>,{" "}
            <code>boolean</code>, <code>number</code>, <code>bigint</code>,{" "}
            <code>string</code>, <code>symbol</code> — assigning or passing makes an
            independent copy of the value.
          </li>
          <li>
            <strong>Reference (object):</strong> plain objects, arrays, functions, dates,
            regexps, maps/sets, typed arrays — assigning or passing copies the
            <em>reference</em>, so multiple names can view/mutate the same object.
          </li>
          <li>
            <strong>Equality:</strong> <code>===</code> compares primitive values directly;
            for objects it compares identity (same reference), not structure.
          </li>
          <li>
            <strong>Mutation vs rebinding:</strong> Changing object contents mutates through all
            references; assigning a new object is just rebinding that one variable.
          </li>
          <li>
            <strong>Function parameters:</strong> JavaScript passes arguments by value; for objects
            the “value” being copied is the reference (a.k.a. pass-by-sharing).
          </li>
          <li>
            <strong>Cloning:</strong> Spread/assign are shallow. Use{" "}
            <code>structuredClone</code> for deep clone of many built-ins (not functions).
          </li>
        </Styled.UL>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 1 — Primitives copy by value</Styled.H3>
        <Styled.Code>{`let a = "hi";
let b = a;        // copy the value
b += "!";
console.log(a);   // "hi"
console.log(b);   // "hi!"`}</Styled.Code>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 2 — Objects assign by reference</Styled.H3>
        <Styled.Code>{`const obj1 = { n: 1 };
const obj2 = obj1;      // copy the reference (both point to same object)
obj2.n = 2;
console.log(obj1.n);    // 2  (mutation visible through both)`}</Styled.Code>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 3 — Rebinding vs mutating</Styled.H3>
        <Styled.Code>{`let user = { name: "Ash" };
let alias = user;              // same reference
alias.name = "Ada";
console.log(user.name);        // "Ada" (mutated)

// Rebinding 'alias' does not affect 'user':
alias = { name: "Lin" };       // new object bound to alias
console.log(user.name);        // "Ada"
console.log(alias.name);       // "Lin"`}</Styled.Code>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 4 — <code>const</code> freezes the binding, not the object</Styled.H3>
        <Styled.Code>{`const cfg = { dark: true };
cfg.dark = false;      // OK (mutating the same object)
// cfg = {}            // ❌ TypeError: Assignment to constant variable`}</Styled.Code>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 5 — Function parameters: pass-by-sharing</Styled.H3>
        <Styled.Code>{`function bump(counter) {
  counter.value++;         // mutates caller's object
  counter = { value: 999 }; // rebinding local param only
}

const box = { value: 0 };
bump(box);
console.log(box.value); // 1  (not 999)`}</Styled.Code>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 6 — Equality: identity vs structure</Styled.H3>
        <Styled.Code>{`const a = { x: 1 };
const b = { x: 1 };
const c = a;

console.log(a === b);           // false (different references)
console.log(a === c);           // true  (same reference)
console.log(JSON.stringify(a) === JSON.stringify(b)); // true (same shape, but identity differs)`}</Styled.Code>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 7 — Shallow copy with spread/assign</Styled.H3>
        <Styled.Code>{`const state = { count: 0, nested: { k: 1 } };
const s1 = { ...state };
const s2 = Object.assign({}, state);

s1.count = 1;
s1.nested.k = 2;

console.log(state.count);      // 0  (top-level copied)
console.log(state.nested.k);   // 2  (inner object shared → shallow copy)`}</Styled.Code>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 8 — Deep copy with <code>structuredClone</code> (modern)</Styled.H3>
        <Styled.Code>{`const src = { d: new Date("2024-01-01"), arr: [1, { y: 2 }] };
const deep = structuredClone(src);

deep.arr[1].y = 9;
console.log(src.arr[1].y);        // 2  (separate)
console.log(src.d instanceof Date, deep.d instanceof Date); // true true

// Note: functions, DOM nodes, and some types are not cloneable.`}</Styled.Code>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 9 — JSON clone caveats</Styled.H3>
        <Styled.Code>{`const src = { n: 1, f(){}, u: undefined, d: new Date("2024-01-01") };
const clone = JSON.parse(JSON.stringify(src));
console.log(clone); // { n: 1 } — functions/undefined dropped; Date became string`}</Styled.Code>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 10 — Arrays: new container, same inner references</Styled.H3>
        <Styled.Code>{`const inner = { k: 1 };
const a1 = [inner, 2, 3];
const a2 = a1.slice();      // shallow copy of array container
a2[0].k = 9;
console.log(a1[0].k);       // 9 (inner object shared)`}</Styled.Code>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 11 — Maps/Sets use identity of references</Styled.H3>
        <Styled.Code>{`const k1 = { id: 1 };
const k2 = { id: 1 };
const m = new Map();
m.set(k1, "A");
console.log(m.get(k1)); // "A"
console.log(m.get(k2)); // undefined (different object, despite same shape)`}</Styled.Code>
      </Styled.Section>

      <Styled.Section>
        <Styled.H3>Example 12 — Freezing to prevent mutation</Styled.H3>
        <Styled.Code>{`const config = Object.freeze({ mode: "prod", opts: Object.freeze({ cache: true }) });
// config.mode = "dev";          // ❌ TypeError in strict mode
// config.opts.cache = false;    // ❌ also frozen (because we froze nested too)`}</Styled.Code>
      </Styled.Section>
    </Styled.Page>
  );
};

export default ValueVsReference;
