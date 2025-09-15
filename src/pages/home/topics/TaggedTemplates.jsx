// TaggedTemplates.jsx
import React from "react";
import { Styled } from "./styled";

const TaggedTemplates = () => {
    return (
        <Styled.Page>
            <Styled.H1>Tagged templates</Styled.H1>

            <Styled.Lead>
                Tagged templates let us call a function with the literal parts and the
                interpolated values of a template. The tag decides how to combine (or
                transform) them and can even return non-string results.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li>
                        <strong>Call form:</strong>{" "}
                        <code>tag\`Hello ${"{name}"}!\`</code> calls{" "}
                        <code>tag(strings, ...values)</code>.
                    </li>
                    <li>
                        <strong><code>strings</code> array:</strong> Frozen, reused (one per
                        callsite), contains the <em>cooked</em> string parts;{" "}
                        <code>strings.raw</code> has the <em>raw</em> text (backslashes
                        preserved).
                    </li>
                    <li>
                        <strong>Return value:</strong> Anything (string, number, object,
                        JSX, etc.). Not limited to strings.
                    </li>
                    <li>
                        <strong>Use-cases:</strong> Safe HTML escaping, i18n formatting,
                        dedent/trim helpers, SQL/GraphQL DSLs, building regex sources, etc.
                    </li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — What a tag receives</Styled.H3>
                <Styled.Code>{`function inspect(strings, ...vals) {
  console.log(strings);       // cooked parts
  console.log(strings.raw);   // raw parts (escapes intact)
  console.log(vals);          // evaluated values
  return strings.join("|") + "|" + vals.join("|");
}
const who = "Ada";
console.log(inspect\\\`Hi \\\\n \${who}!\\\`);
// strings -> ["Hi \\n ", "!"]
// strings.raw -> ["Hi \\\\n ", "!"]
// vals -> ["Ada"]
// Output: "Hi \\n |!|Ada"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Safe HTML escaping</Styled.H3>
                <Styled.Code>{`const escape = (s) => String(s)
  .replace(/&/g,"&amp;").replace(/</g,"&lt;")
  .replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");

function html(strings, ...vals) {
  return strings.reduce((out, s, i) =>
    out + s + (i < vals.length ? escape(vals[i]) : ""), "");
}

const user = '<img src=x onerror=alert(1)>';
console.log(html\\\`<p>Hello, \${user}</p>\\\`);
// "<p>Hello, &lt;img src=x onerror=alert(1)&gt;</p>" (safe)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — i18n formatting</Styled.H3>
                <Styled.Code>{`const dict = {
  en: (l, v) => \`\${l[0]}\${v[0]}\${l[1]}\${v[1]}\${l[2]}\`,
  fr: (l, v) => \`\${l[0]}\${v[1]} \${l[1]}\${v[0]}\${l[2]}\`, // swap order
};
function i18n(lang) {
  return (strings, ...vals) => dict[lang](strings, vals);
}
const en = i18n("en");
const fr = i18n("fr");
const n = 3, item = "messages";
console.log(en\\\`\${n} new \${item}\\\`); // "3 new messages"
console.log(fr\\\`\${n} new \${item}\\\`); // "messages 3 new"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Dedent helper (clean indentation)</Styled.H3>
                <Styled.Code>{`function dedent(strings, ...vals) {
  const text = strings.reduce((a, s, i) => a + s + (i < vals.length ? vals[i] : ""), "");
  const lines = text.replace(/^\\n/, "").replace(/\\n\\s*$/, "").split("\\n");
  const indent = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^\\s*/)[0].length));
  return lines.map(l => l.slice(indent)).join("\\n");
}
const block = dedent\\\`
      line one
        line two
\\\`;
console.log(block);
// "line one\\n  line two"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Returning non-strings</Styled.H3>
                <Styled.Code>{`function json(strings, ...vals) {
  const text = strings.reduce((a, s, i) =>
    a + s + (i < vals.length ? JSON.stringify(vals[i]) : ""), "");
  return JSON.parse(text);
}
const obj = json\\\`{"ok": \${true}, "nums": \${[1,2,3]}}\\\`;
console.log(Array.isArray(obj.nums), obj.ok); // true true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Template object is cached (same identity)</Styled.H3>
                <Styled.Code>{`let firstStringsRef;
function remember(strings) {
  if (!firstStringsRef) firstStringsRef = strings;
  return firstStringsRef === strings;
}
console.log(remember\\\`X=\${1}\\\`); // true
console.log(remember\\\`X=\${2}\\\`); // true (same callsite -> same strings object)
// Note: strings and strings.raw are frozen.`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — SQL-like DSL (illustrative)</Styled.H3>
                <Styled.Code>{`function sql(strings, ...vals) {
  // Build parameterized query: "SELECT * FROM t WHERE id = $1"
  const text = strings.reduce((a, s, i) => a + s + (i < vals.length ? \`$\${i+1}\` : ""), "");
  const params = vals;
  return { text: text.trim(), params };
}
const id = 42, active = true;
const q = sql\\\`
  SELECT * FROM users
  WHERE id = \${id} AND active = \${active}
\\\`;
console.log(q.text);   // "SELECT * FROM users WHERE id = $1 AND active = $2"
console.log(q.params); // [42, true]`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — Raw vs cooked difference in one place</Styled.H3>
                <Styled.Code>{`function showRaw(strings) {
  return { cooked: strings[0], raw: strings.raw[0] };
}
console.log(showRaw\\\`\\n\\t\\\`);
// { cooked: "
// \t", raw: "\\\\n\\\\t" }`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Gotchas & tips</Styled.H3>
                <Styled.UL>
                    <li>
                        The <code>strings</code> array and <code>strings.raw</code> are{" "}
                        <em>frozen</em>; don’t try to mutate them.
                    </li>
                    <li>
                        The same template <em>callsite</em> reuses its strings object
                        (useful for caching/optimization).
                    </li>
                    <li>
                        Tags run before concatenation; prefer them for escaping untrusted
                        values (XSS prevention).
                    </li>
                    <li>
                        Tags can return any type — you can parse JSON, build ASTs, or return
                        config objects.
                    </li>
                    <li>
                        When you only need literal backslashes (no escape processing), use{" "}
                        <code>String.raw\\\`...\\\`</code> or inspect{" "}
                        <code>strings.raw</code> inside the tag.
                    </li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default TaggedTemplates;
