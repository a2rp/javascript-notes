# 15. HTTP requests with Fetch

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: JavaScript modules](./14-javascript-modules.md) | [Notes index](../README.md) | [Next: Browser storage and safe patterns](./16-browser-storage-and-safe-patterns.md) |

The Fetch API sends HTTP requests and gives JavaScript a promise for the response. A browser page can use it to load or submit data without navigating away from the current page.

## Send a GET request

Call fetch with a URL. The promise fulfills with a Response when the server returns an HTTP response. Check response.ok because a 404 or 500 response does not automatically reject the fetch promise.

~~~js
async function loadProfile(id) {
  const response = await fetch("/api/profiles/" + id);

  if (!response.ok) {
    throw new Error("Request failed with status " + response.status);
  }

  return response.json();
}

loadProfile(42)
  .then((profile) => console.log(profile))
  .catch((error) => console.error(error.message));
~~~

response.json reads the response body and parses JSON asynchronously. It can reject if the body is not valid JSON. A response body is consumed when read, so do not try to parse the same body twice.

## Add query parameters safely

Use URL and URLSearchParams to build a URL with user-provided values. This encodes spaces and special characters correctly.

~~~js
async function searchProducts(searchTerm) {
  const url = new URL("/api/products", window.location.origin);
  url.searchParams.set("search", searchTerm);
  url.searchParams.set("limit", "10");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Search failed with status " + response.status);
  }

  return response.json();
}

searchProducts("dark notebooks").then(console.log);
~~~

A relative path uses the current site origin. The server must provide the matching endpoint and allow the request under its same-origin or CORS rules.

## Send JSON data

For a POST request, set the method, headers, and body. JSON.stringify converts a JavaScript value into JSON text.

~~~js
async function createNote(note) {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(note),
  });

  if (!response.ok) {
    throw new Error("Could not save the note");
  }

  return response.json();
}

createNote({ title: "Arrays", pinned: false }).then(console.log);
~~~

Do not put credentials or private keys in browser code. Browser code is visible to the person using the page. Authentication and authorization must be handled by the application server.

## Cancel a request

AbortController can cancel a request that is no longer needed, such as a search that has been replaced by newer input.

~~~js
const controller = new AbortController();

fetch("/api/search?q=arrays", { signal: controller.signal })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Search failed");
    }
    return response.json();
  })
  .then(console.log)
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("The request was cancelled");
    } else {
      console.error(error);
    }
  });

// Call this when the result is no longer needed:
controller.abort();
~~~

Cancellation rejects the fetch promise with an AbortError. Handle that expected case separately from other failures.

## Show loading and error states

A page should show the person whether a request is loading, complete, or failed. Always reset a loading indicator even when the request rejects.

~~~js
async function refreshNotes() {
  setLoading(true);
  setError("");

  try {
    const response = await fetch("/api/notes");

    if (!response.ok) {
      throw new Error("Could not load notes");
    }

    const notes = await response.json();
    renderNotes(notes);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}
~~~

This example expects the page to provide setLoading, setError, and renderNotes functions. Keep request code separate from DOM rendering when that makes each responsibility easier to test.

## Key points

- Fetch is promise-based and sends HTTP requests.
- Check response.ok for HTTP status failures.
- Parse a response body once with methods such as json.
- Use URLSearchParams for query values and JSON.stringify for JSON request bodies.
- AbortController cancels work that is no longer needed.
- Never place private credentials in browser code.

## Practice questions

1. What does fetch return?
2. Does a 404 response normally reject the fetch promise?
3. What does response.ok indicate?
4. What does response.json do?
5. Why use URLSearchParams?
6. Which method and body format are common for sending JSON?
7. How can a request be cancelled?
8. Why should a secret API key not be stored in browser JavaScript?

## Main references

- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: Response.ok](https://developer.mozilla.org/en-US/docs/Web/API/Response/ok)
- [MDN: AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
