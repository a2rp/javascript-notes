// TernaryOperator.jsx
import React from "react";
import { Styled } from "./styled";

const TernaryOperator = () => {
    return (
        <Styled.Page>
            <Styled.H1>Ternary operator <code>?:</code> (conditional expression)</Styled.H1>

            <Styled.Lead>
                We choose between two expressions with <code>condition ? whenTrue : whenFalse</code>.
                It returns the value of the selected branch and evaluates only that branch.
                Ternaries are right-associative; use parentheses when nesting or mixing with other operators.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Syntax:</strong> <code>cond ? x : y</code></li>
                    <li><strong>Result:</strong> evaluates <em>cond</em> with truthiness; returns <em>x</em> if truthy, else <em>y</em>.</li>
                    <li><strong>Evaluation:</strong> Only the chosen branch is evaluated (the other is skipped).</li>
                    <li><strong>Associativity:</strong> Right-associative — <code>a ? b : c ? d : e</code> ≡ <code>a ? b : (c ? d : e)</code>.</li>
                    <li><strong>Expressions:</strong> Both <em>x</em> and <em>y</em> must be expressions (not statements like <code>if</code>). For multi-steps, compute before or call a function.</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Basics</Styled.H3>
                <Styled.Code>{`const isOnline = true;
const label = isOnline ? "🟢 Online" : "⚪ Offline";
console.log(label); 
// "🟢 Online"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Only one branch runs</Styled.H3>
                <Styled.Code>{`const L = () => (console.log("LEFT"), "L");
const R = () => (console.log("RIGHT"), "R");

console.log(true ? L() : R());
// LEFT
// "L"

console.log(false ? L() : R());
// RIGHT
// "R"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Nesting &amp; right-associativity</Styled.H3>
                <Styled.Code>{`const grade = (score) =>
  score >= 90 ? "A"
: score >= 75 ? "B"
: score >= 60 ? "C"
: "D";

console.log(grade(82)); // "B"

// Equivalent explicit grouping:
const grade2 = (s) => s >= 90 ? "A" : (s >= 75 ? "B" : (s >= 60 ? "C" : "D"));`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Inlined selection for values</Styled.H3>
                <Styled.Code>{`const isDark = false;
const fg = isDark ? "#fff" : "#000";
const pad = (compact) => (compact ? 8 : 16);
console.log(fg, pad(true)); 
// "#000" 8`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — With function calls</Styled.H3>
                <Styled.Code>{`function loadCache(){ return "from-cache"; }
function fetchRemote(){ return "from-network"; }

const useCache = Math.random() > 0.5;
const data = useCache ? loadCache() : fetchRemote();
console.log(data); // one of the two strings`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Defaulting vs truthiness</Styled.H3>
                <Styled.Code>{`const page = 0;

// Using ternary keeps valid falsy values:
const p = (page !== null && page !== undefined) ? page : 1;
console.log(p); // 0

// Compare:
// page || 1 -> 1 (because 0 is falsy)
// page ?? 1 -> 0 (keeps 0)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Parentheses when mixing</Styled.H3>
                <Styled.Code>{`const ok = false, msg = "hi", alt = "bye";

// Be explicit with grouping:
const out1 = ok ? msg : alt || "(none)";
console.log(out1); // "bye" (alt || "(none)" evaluated in the false branch)

const out2 = (ok ? msg : alt) || "(none)";
console.log(out2); // "bye"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Equivalent if/else</Styled.H3>
                <Styled.Code>{`// Ternary
const speed = 55;
const tag = speed > 60 ? "fast" : "ok";

// if/else
let tag2;
if (speed > 60) {
  tag2 = "fast";
} else {
  tag2 = "ok";
}
console.log(tag, tag2); // "ok" "ok"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Avoid heavy work in both branches</Styled.H3>
                <Styled.Code>{`// Compute once if both branches would repeat work
const input = "  Ada  ";
const trimmed = input.trim();
const user = trimmed ? trimmed : "(no name)";
console.log(user); // "Ada"`}</Styled.Code>
            </Styled.Section>
        </Styled.Page>
    );
};

export default TernaryOperator;
