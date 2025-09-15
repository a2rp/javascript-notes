import React from "react";
import LiveRunner from "../../../components/LiveRunner";
import { T } from "./styled";

const ex1 = `// A variable "holds a value", a binding "points to a value".
// With primitives (number, string, boolean), reassigning replaces the value.
let x = 10;
console.log("x =", x);    // LOG: 10
x = 20;                   // rebinding to a new number
console.log("x =", x);    // LOG: 20

// const prevents *rebinding* but not reading:
const y = 5;
console.log("y =", y);
// y = 6; // Uncomment to see: TypeError: Assignment to constant variable.
`;

const ex2 = `// With objects/arrays, const protects the *binding*, not the *inside*.
// The binding stays the same, but the object can be mutated.
const user = { name: "Ash", score: 10 };
console.log("before", user);

// Mutating the object (allowed):
user.score += 5;
console.log("after", user);

// Rebinding the const (not allowed):
// user = { name: "Ash", score: 999 }; // Uncomment to see the error

// If we want to protect the inside too:
Object.freeze(user);
try { user.level = 7; } catch (e) {}
console.log("frozen", user); // level is ignored
`;

export default function VariablesVsBindings() {
    return (
        <T.Page>
            <T.H1>Variables vs Bindings</T.H1>
            <T.Lead>
                A <em>variable</em> stores a value; a <em>binding</em> is the association between a name and that value.
                We reason about bugs by asking: “Did we mutate the value, or rebind the name?”
            </T.Lead>

            <T.Section>
                <T.H3>What & Why</T.H3>
                <T.UL>
                    <li><strong>Variable</strong> = a named slot that can reference a value.</li>
                    <li><strong>Binding</strong> = the link between the name and the current value.</li>
                    <li>Rebinding changes which value a name points to; mutation changes the value itself (if it’s an object).</li>
                </T.UL>
            </T.Section>

            <T.Section>
                <T.H3>Core Rules</T.H3>
                <T.UL>
                    <li><code>let</code> allows rebinding; <code>const</code> prevents rebinding.</li>
                    <li>For primitives, “change” means rebind (you can’t mutate a number/string/boolean).</li>
                    <li>For objects/arrays, you can mutate the inside even if the binding is <code>const</code>.</li>
                </T.UL>
            </T.Section>

            <T.Section>
                <T.H3>Pitfalls</T.H3>
                <T.UL>
                    <li>“<code>const</code> object cannot change” is a myth — the binding is constant, not the object.</li>
                    <li>Prefer <code>const</code> by default; switch to <code>let</code> only when rebinding is required.</li>
                    <li>Use <code>Object.freeze()</code> to prevent accidental mutation of object internals (shallow).</li>
                </T.UL>
            </T.Section>

            <T.Section>
                <LiveRunner title="Primitives: rebinding vs const" initialCode={ex1} autorunDefault />
            </T.Section>

            <T.Section>
                <LiveRunner title="Objects: const binding vs mutation" initialCode={ex2} autorunDefault />
            </T.Section>
        </T.Page>
    );
}
