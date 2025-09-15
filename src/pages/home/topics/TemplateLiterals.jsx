// TemplateLiterals.jsx
import React from "react";
import { Styled } from "./styled";

const TemplateLiterals = () => {
    return (
        <Styled.Page>
            <Styled.H1>Template literals</Styled.H1>

            <Styled.Lead>
                Template literals use backticks <code>`</code> to create strings with real newlines
                and embedded expressions via <code>${"{expr}"}</code>. They can also be{" "}
                <em>tagged</em> (a function processes the template parts) and used as
                <code>String.raw</code> to avoid interpreting escapes.
            </Styled.Lead>

            <Styled.Section>
                <Styled.H3>Definition</Styled.H3>
                <Styled.UL>
                    <li><strong>Syntax:</strong> <code>`text ${"{"}expression{"}"}`</code>. Newlines and spaces are taken literally.</li>
                    <li><strong>Evaluation:</strong> Expressions are evaluated left-to-right and converted with <em>ToString</em> (e.g., <code>null</code> → <code>"null"</code>, <code>undefined</code> → <code>"undefined"</code>).</li>
                    <li><strong>Symbols:</strong> Interpolating a <code>Symbol</code> throws (because ToString(Symbol) throws). Use <code>String(sym)</code> or <code>sym.description</code>.</li>
                    <li><strong>Tagged templates:</strong> <code>tag\`Hello ${"{"}x{"}"}\`</code> calls <code>tag(strings, ...values)</code>. The tag can return any value (not just a string).</li>
                    <li><strong>Raw text:</strong> <code>String.raw\`...\`</code> exposes backslashes literally (no escape processing in the string parts).</li>
                </Styled.UL>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 1 — Basics: interpolation &amp; multiline</Styled.H3>
                <Styled.Code>{`const name = "Ada";
const n = 3;
const msg = \`Hello, \${name}! You have \${n} new messages.\`;
console.log(msg);
/*
Hello, Ada! You have 3 new messages.
*/

const poem = \`Roses are red
Violets are blue\`;
console.log(poem.split("\\n").length); // 2 (real newline in the string)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 2 — Any expressions (calls, ops, ternaries)</Styled.H3>
                <Styled.Code>{`const price = 1999;
const fmt = n => (n/100).toFixed(2);
console.log(\`Pay ₹\${fmt(price)} now\`);   // "Pay ₹19.99 now"

const x = 5;
console.log(\`\${x} is \${x % 2 ? "odd" : "even"}\`); // "5 is odd"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 3 — Escaping backtick and <code>\${ }</code></Styled.H3>
                <Styled.Code>{`console.log(\`Use a backtick: \\\\\` and a literal \\$\\{expr\\}\`);
// Output: Use a backtick: \` and a literal \${expr}`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 4 — Interpolating objects: ToString is used</Styled.H3>
                <Styled.Code>{`const u = { toString(){ return "[User Ada]"; } };
console.log(\`User: \${u}\`); // "User: [User Ada]"

const sym = Symbol("id");
// console.log(\`\${sym}\`); // ❌ TypeError
console.log(\`\${String(sym)}\`); // "Symbol(id)"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 5 — Whitespace is literal; trim if desired</Styled.H3>
                <Styled.Code>{`const html = \`
  <ul>
    <li>One</li>
  </ul>
\`.trim();
console.log(html.startsWith("<ul>")); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 6 — Tagged templates (basic)</Styled.H3>
                <Styled.Code>{`function tag(strings, ...values) {
  // strings: array of literal parts; strings.raw keeps backslashes
  // Return anything; here we interleave with brackets:
  return strings.reduce((out, s, i) => out + s + (i < values.length ? "[" + values[i] + "]" : ""), "");
}
const a = 2, b = 3;
console.log(tag\`sum(\${a}, \${b}) = \${a + b}\`); 
// "sum([2], [3]) = [5]"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 7 — Security/tag use-case: HTML escaping</Styled.H3>
                <Styled.Code>{`const escape = s => String(s)
  .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");

function html(strings, ...vals) {
  return strings.reduce((acc, s, i) => acc + s + (i < vals.length ? escape(vals[i]) : ""), "");
}

const user = "<img onerror=alert(1)>";
console.log(html\`<p>Hello \${user}</p>\`);
// "<p>Hello &lt;img onerror=alert(1)&gt;</p>" (safe)`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 8 — <code>String.raw</code> for literal backslashes</Styled.H3>
                <Styled.Code>{`console.log(String.raw\`C:\\temp\\new\\file\\nnot-a-newline\`);
// "C:\\temp\\new\\file\\nnot-a-newline"

function dump(strings) {
  console.log(strings[0]);      // cooked: escapes processed
  console.log(strings.raw[0]);  // raw: backslashes preserved
}
dump\`\\n\\t\`; // cooked: newline+tab; raw: "\\n\\t"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 9 — Dedenting helper for nicely indented blocks</Styled.H3>
                <Styled.Code>{`function dedent(strings, ...vals) {
  const full = strings.reduce((acc, s, i) => acc + s + (i < vals.length ? vals[i] : ""), "");
  const lines = full.replace(/^\\n/, "").replace(/\\n\\s*$/, "").split("\\n");
  const indent = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^\\s*/)[0].length));
  return lines.map(l => l.slice(indent)).join("\\n");
}
const out = dedent\`
    function add(a, b) {
      return a + b;
    }
\`;
console.log(out.startsWith("function")); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 10 — Nesting templates inside expressions</Styled.H3>
                <Styled.Code>{`const who = "Ada";
const greet = msg => \`<< \${msg} >>\`;
console.log(\`\${greet(\`Hello, \${who}\`)}\`); // "<< Hello, Ada >>"`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 11 — Building regex/text with clarity</Styled.H3>
                <Styled.Code>{`// Using backticks doesn't change RegExp escaping needs,
// but String.raw helps when writing pattern source strings:
const source = String.raw\`^\\d+(?:\\.\\d+)?$\\n\`;
const re = new RegExp(source, "m");
console.log(re.test("3.14\\n")); // true`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Example 12 — Tagged templates can return non-strings</Styled.H3>
                <Styled.Code>{`function json(strings, ...vals) {
  const text = strings.reduce((acc, s, i) => acc + s + (i < vals.length ? JSON.stringify(vals[i]) : ""), "");
  return JSON.parse(text);
}
const obj = json\`{"n": \${42}, "arr": \${[1,2,3]}}\`;
console.log(obj.n + obj.arr[0]); // 43`}</Styled.Code>
            </Styled.Section>

            <Styled.Section>
                <Styled.H3>Gotchas &amp; tips</Styled.H3>
                <Styled.UL>
                    <li>Template literals are still <em>strings</em> (unless a tag returns something else).</li>
                    <li>Interpolating <code>Symbol</code> throws — wrap with <code>String(sym)</code> or use <code>sym.description</code>.</li>
                    <li>Whitespace and newlines are preserved; use <code>.trim()</code> or a dedent tag to tidy.</li>
                    <li>Prefer a tag (e.g., <code>html</code>) to escape untrusted content and prevent injection.</li>
                    <li><code>String.raw</code> is great for regex sources, Windows paths, and docs where backslashes must survive.</li>
                </Styled.UL>
            </Styled.Section>
        </Styled.Page>
    );
};

export default TemplateLiterals;
