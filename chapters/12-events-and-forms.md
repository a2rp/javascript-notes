# 12. Events and forms

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: The DOM and page updates](./11-dom-and-page-updates.md) | [Notes index](../README.md) | [Next: Asynchronous JavaScript](./13-asynchronous-javascript.md) |

An event represents something that happened, such as a click, a key press, or a form submission. JavaScript can listen for events and respond to them. Native HTML controls already provide keyboard behavior and accessibility, so use them instead of recreating controls from generic elements.

## Listen for an event

Use addEventListener to register a function for an event. The event object provides information about what happened and which element was involved.

~~~html
<button id="save-button" type="button">Save</button>
<p id="save-status" role="status"></p>
~~~

~~~js
const button = document.querySelector("#save-button");
const status = document.querySelector("#save-status");

button?.addEventListener("click", (event) => {
  status.textContent = "Saved";
  console.log(event.currentTarget);
});
~~~

The optional chaining avoids calling addEventListener when the button is missing. In a larger page, a missing required element may indicate a programming error, so check it and report a useful message during setup.

## Understand event bubbling

Many DOM events bubble from the event target through its ancestors. This means a parent can observe events that began on its children. event.target is where the event began. event.currentTarget is the element whose listener is currently running.

~~~html
<ul id="topics">
  <li><button data-topic="arrays">Arrays</button></li>
  <li><button data-topic="objects">Objects</button></li>
</ul>
~~~

~~~js
const topics = document.querySelector("#topics");

topics?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-topic]");

  if (!button || !topics.contains(button)) {
    return;
  }

  console.log(button.dataset.topic);
});
~~~

This pattern is event delegation. One listener handles clicks from current and future matching child buttons. Use it when a list has many items or its items are created dynamically.

stopPropagation prevents an event from continuing through the event path. Use it only when stopping that behavior is part of the intended interaction. It can prevent other code from receiving the event.

## Handle a form submission

A form's submit event fires for both the submit button and keyboard submission. Use it instead of listening only for a button click. Browser validation can help with required fields and built-in input types.

~~~html
<form id="signup-form">
  <label>
    Email
    <input name="email" type="email" required>
  </label>
  <button type="submit">Join</button>
  <p id="form-status" role="status"></p>
</form>
~~~

~~~js
const form = document.querySelector("#signup-form");
const formStatus = document.querySelector("#form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = String(formData.get("email") ?? "").trim();

  if (!email) {
    formStatus.textContent = "Enter an email address.";
    return;
  }

  formStatus.textContent = "Ready to submit " + email;
});
~~~

preventDefault stops the browser's default form navigation so this example can process the values on the current page. It does not stop event bubbling. A real application should also validate data on its server because browser-side checks can be bypassed.

## Read and validate user input

Use the input event when a result should update while a person types. Keep the feedback specific and associate inputs with visible labels.

~~~html
<label for="display-name">Display name</label>
<input id="display-name" name="displayName" maxlength="30">
<p id="name-count" aria-live="polite"></p>
~~~

~~~js
const nameInput = document.querySelector("#display-name");
const nameCount = document.querySelector("#name-count");

nameInput?.addEventListener("input", () => {
  nameCount.textContent = nameInput.value.length + " of 30 characters";
});
~~~

The input event fires as a value changes. The change event typically fires after an edit is committed, such as when a control loses focus.

## Remove listeners when needed

If a listener should run once, pass the once option. If a long-lived component must remove a listener, keep a reference to the callback and pass the same function to removeEventListener.

~~~js
function handleKeydown(event) {
  if (event.key === "Escape") {
    console.log("Close the panel");
  }
}

document.addEventListener("keydown", handleKeydown);

// Later, when this behavior is no longer needed:
document.removeEventListener("keydown", handleKeydown);
~~~

## Key points

- addEventListener connects a function to an event.
- target is the event origin, while currentTarget is the listener element.
- Bubbling allows event delegation on a stable parent.
- Handle a form's submit event so keyboard submission works too.
- preventDefault cancels the browser action but does not stop bubbling.
- Client-side checks improve feedback, but the server must validate submitted data too.

## Practice questions

1. What does addEventListener do?
2. What does event.target identify?
3. How does event.currentTarget differ from event.target?
4. What is event delegation?
5. Which event should usually handle a form submission?
6. What does preventDefault cancel?
7. Why must server-side code validate submitted data?
8. What is needed to remove a listener later?

## Main references

- [MDN: Introduction to events](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events)
- [MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: Event bubbling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [MDN: FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
