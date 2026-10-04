# 11. The DOM and page updates

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Errors and debugging](./10-errors-and-debugging.md) | [Notes index](../README.md) | [Next: Events and forms](./12-events-and-forms.md) |

The Document Object Model, or DOM, is the browser's object representation of an HTML document. JavaScript can find DOM nodes and update them so a page reflects current data or user actions.

These examples require a browser page. They do not run in a plain Node.js process because Node.js does not provide document by default.

## Select an element

Use querySelector to find the first element that matches a CSS selector. It returns null when nothing matches, so check the result before using it.

~~~html
<h1 id="page-title">Welcome</h1>
<p class="status">Loading</p>
~~~

~~~js
const title = document.querySelector("#page-title");
const status = document.querySelector(".status");

if (title && status) {
  title.textContent = "JavaScript notes";
  status.textContent = "Ready";
}
~~~

Use querySelectorAll to find every matching element. It returns a static NodeList that can be iterated.

~~~js
const items = document.querySelectorAll(".note");

for (const item of items) {
  item.classList.add("is-visible");
}
~~~

## Change text, classes, and attributes

Use textContent for plain text. It treats assigned content as text rather than parsing it as HTML. classList provides methods to add, remove, and toggle CSS classes.

~~~js
const message = document.querySelector("#message");

if (message) {
  message.textContent = "Saved successfully";
  message.classList.add("success");
  message.setAttribute("aria-live", "polite");
}
~~~

Use setAttribute or a specific DOM property for attributes and form-related state. The right API depends on what the value represents.

## Create nodes from data

Create elements with document.createElement, set text with textContent, then add them to the document. This avoids interpreting data as markup.

~~~html
<ul id="note-list"></ul>
~~~

~~~js
const notes = ["Variables", "Functions", "Arrays"];
const list = document.querySelector("#note-list");

if (list) {
  for (const note of notes) {
    const item = document.createElement("li");
    item.textContent = note;
    list.append(item);
  }
}
~~~

When rendering new results, remove or replace the previous content intentionally. For small lists, replaceChildren clears children and appends the provided nodes.

~~~js
const list = document.querySelector("#note-list");

if (list) {
  const item = document.createElement("li");
  item.textContent = "New note";
  list.replaceChildren(item);
}
~~~

## Avoid unsafe HTML insertion

Do not put untrusted user text into innerHTML. The browser parses it as markup, so attacker-controlled input could become executable content. Use textContent when the intended result is text.

~~~js
const comment = document.querySelector("#comment");
const userText = "<img src=x onerror=alert(1)>";

if (comment) {
  comment.textContent = userText;
}
~~~

If an application must display trusted or user-authored rich HTML, use a well-maintained sanitizer and understand which markup is allowed. Avoid writing a sanitizer with string replacements.

## Keep page updates accessible

A visual update should also be understandable to people using assistive technology. Use semantic HTML for controls, provide labels, and use a live region when a status message should be announced.

~~~html
<p id="save-status" role="status" aria-live="polite"></p>
~~~

~~~js
const saveStatus = document.querySelector("#save-status");

if (saveStatus) {
  saveStatus.textContent = "Your changes are saved";
}
~~~

Do not add ARIA roles that repeat the meaning of a native element. A button should be a button, and a heading should be a heading.

## Key points

- The DOM represents an HTML document as nodes and objects.
- querySelector may return null, so check before using its result.
- Use textContent for plain text and createElement for data-driven nodes.
- Avoid placing untrusted text into innerHTML.
- Use semantic elements, labels, and status regions to keep interactions accessible.
- DOM examples require a browser environment.

## Practice questions

1. What does the DOM represent?
2. What does querySelector return when nothing matches?
3. How does querySelectorAll differ from querySelector?
4. Why is textContent preferred for plain user text?
5. How can JavaScript create a new list item?
6. What risk comes from putting untrusted text into innerHTML?
7. What does classList.add do?
8. Why should page updates consider assistive technology?

## Main references

- [MDN: Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN: Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- [MDN: Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
- [MDN: Element.innerHTML security considerations](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations)
- [W3C: WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
