# 13. Asynchronous JavaScript

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Events and forms](./12-events-and-forms.md) | [Notes index](../README.md) | [Next: JavaScript modules](./14-javascript-modules.md) |

JavaScript often starts work that takes time, such as a network request or a timer, and continues with other work while it waits. Asynchronous code lets an application stay responsive instead of blocking all later work until the result is ready.

## The call stack and event loop

JavaScript runs synchronous statements on a call stack. A browser or runtime handles many waiting operations outside that stack. When an operation is ready, its callback is scheduled so JavaScript can run it when the current work allows.

~~~js
console.log("First");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

console.log("Second");
~~~

The output is First, Second, then Timer callback. A zero delay does not mean the callback runs immediately. It becomes eligible after the current synchronous work completes.

Promise callbacks use the microtask queue. In common cases, a promise callback runs after the current synchronous code and before a pending timer callback. Understanding this ordering helps explain logs, but avoid depending on subtle scheduling details when a simpler sequence is possible.

~~~js
console.log("Start");

Promise.resolve().then(() => console.log("Promise callback"));
setTimeout(() => console.log("Timer callback"), 0);

console.log("Finish");
~~~

## Use promises to represent future results

A Promise represents an operation that may be pending, fulfilled with a value, or rejected with a reason. Use then for a successful result and catch for a failure.

~~~js
function waitForMessage() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Ready"), 300);
  });
}

waitForMessage()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
~~~

A promise chain passes each result to the next then callback. Throwing inside a then callback turns the chain into a rejected promise. A catch can handle a rejection and may return a recovery value.

~~~js
Promise.resolve(5)
  .then((value) => value * 2)
  .then((value) => {
    if (value > 8) {
      throw new Error("Value is too large");
    }
    return value;
  })
  .catch((error) => {
    console.error(error.message);
    return 0;
  })
  .then((value) => console.log(value));
~~~

## Write asynchronous functions with async and await

An async function always returns a promise. Inside it, await pauses that function until a promise settles, while other JavaScript work can continue.

~~~js
function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function showStatus() {
  console.log("Working");
  await wait(300);
  console.log("Done");
}

showStatus();
~~~

Use try and catch to handle errors from awaited operations. Keep a catch near the code that can make a useful decision about the failure.

~~~js
async function loadMessage() {
  try {
    const message = await waitForMessage();
    console.log(message);
  } catch (error) {
    console.error("Could not load the message", error);
  }
}

loadMessage();
~~~

A surrounding function does not wait just because it calls an async function. If its result matters, return or await the promise.

## Run independent work together

If two operations do not depend on each other's results, Promise.all can start them together and wait for both. It fulfills with results in input order. If one promise rejects, the combined promise rejects.

~~~js
function loadProfile() {
  return Promise.resolve({ name: "Mira" });
}

function loadPreferences() {
  return Promise.resolve({ theme: "dark" });
}

async function loadPageData() {
  const [profile, preferences] = await Promise.all([
    loadProfile(),
    loadPreferences(),
  ]);

  console.log(profile.name, preferences.theme);
}

loadPageData();
~~~

Use sequential await when the second operation needs the first result. Use Promise.allSettled when each result should be inspected even if some operations fail.

## Avoid unhandled failures

Always handle a promise rejection at a boundary that can respond. A rejected promise that has no catch may be reported as an unhandled rejection by the runtime.

~~~js
async function main() {
  try {
    await loadPageData();
  } catch (error) {
    console.error("Page setup failed", error);
  }
}

main();
~~~

The example above catches errors that reach main. In a browser interface, error handling should also give a person a useful message and leave the page in a valid state.

## Key points

- Synchronous JavaScript runs on a call stack.
- Timers and host operations schedule callbacks for later work.
- A promise represents a future result or failure.
- async functions return promises, and await pauses only the current async function.
- Use Promise.all for independent operations that should run together.
- Handle rejections at the layer that can make a useful decision.

## Practice questions

1. Why does a timer callback run after synchronous statements?
2. What are the three common states of a promise?
3. What does a promise's then method receive?
4. What does an async function always return?
5. What does await pause?
6. When should Promise.all be used?
7. What happens to Promise.all if one input promise rejects?
8. Why should a promise rejection be handled?

## Main references

- [MDN: Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS)
- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN: Event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)
