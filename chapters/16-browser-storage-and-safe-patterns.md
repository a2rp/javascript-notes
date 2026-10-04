# 16. Browser storage and safe patterns

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: HTTP requests with Fetch](./15-http-requests-with-fetch.md) | [Notes index](../README.md) | [Next: All code samples](./98-all-code-samples.md) |

Browser storage can keep small values between page visits. It is useful for preferences and drafts, but it is not a secure place for secrets and it is not a replacement for a server database.

## Store simple values with Web Storage

localStorage keeps string values for the same origin across browser sessions. sessionStorage is limited to a browser tab's page session. Both expose a synchronous API, so keep values small.

~~~js
localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");
console.log(theme);

localStorage.removeItem("theme");
~~~

Values are stored as strings. Convert objects to JSON when saving and parse them when reading.

~~~js
const preferences = { theme: "dark", pageSize: 20 };
localStorage.setItem("preferences", JSON.stringify(preferences));

const savedText = localStorage.getItem("preferences");
const savedPreferences = savedText ? JSON.parse(savedText) : null;

console.log(savedPreferences);
~~~

Stored data may be missing, malformed, outdated, or edited by the person using the browser. Treat it as untrusted input and validate its shape before relying on it.

~~~js
function readTheme() {
  try {
    const saved = localStorage.getItem("theme");

    if (saved === "dark" || saved === "light") {
      return saved;
    }
  } catch (error) {
    console.warn("Browser storage is unavailable", error);
  }

  return "dark";
}

console.log(readTheme());
~~~

Storage access can fail because of browser privacy settings or storage limits. Handle those failures when saving important preferences.

## Choose storage for the data

- Use localStorage for small string preferences that should survive a browser restart.
- Use sessionStorage for temporary values scoped to a tab session.
- Use IndexedDB for larger structured data and asynchronous access.
- Use a server database when data must be shared, backed up, or tied to an account.

Browsers can clear client storage. Never treat it as the only copy of important information.

## Keep secrets out of browser storage

JavaScript running on the page can read localStorage and sessionStorage. Do not store passwords, private API keys, or long-lived authentication secrets there. A cross-site scripting flaw can let injected script read values available to the page.

For authentication, follow the security design of the application. A server-managed cookie can use HttpOnly so page JavaScript cannot read it, Secure so it is sent only over HTTPS, and SameSite to limit cross-site sending. Cookie settings need to match the application's login and request flows.

## Render untrusted data as text

Data from storage, a form, or a network response may contain markup. Use textContent when the intended result is text.

~~~js
const noteTitle = localStorage.getItem("note-title") ?? "Untitled";
const heading = document.querySelector("#note-title");

if (heading) {
  heading.textContent = noteTitle;
}
~~~

Avoid assigning untrusted text to innerHTML. Validate data before using it in URLs, HTML attributes, or application logic.

## Save data with a small wrapper

A small storage helper can keep parsing and error handling in one place. This example returns a fallback if reading fails or if the saved value cannot be parsed.

~~~js
function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

const savedFilters = readJson("filters", {});
console.log(savedFilters);
~~~

Validate the returned value before using it. JSON parsing confirms only that text is valid JSON, not that it has the fields or values your program expects.

## Key points

- localStorage persists small string values for the same origin.
- sessionStorage is intended for data scoped to a tab session.
- Convert structured data with JSON, then validate it after parsing.
- Browser storage can be cleared or unavailable, so handle failures.
- Never store secrets in storage that page JavaScript can read.
- Render untrusted text with textContent and use secure cookie settings for server-managed sessions.

## Practice questions

1. What type of value does Web Storage store?
2. How does sessionStorage differ from localStorage?
3. What does JSON.parse validate?
4. Why should data from storage be checked before use?
5. Which API is suited to larger structured browser data?
6. Why should a private API key not be stored in localStorage?
7. What does the HttpOnly cookie attribute prevent?
8. Which DOM property should display untrusted plain text?

## Main references

- [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN: Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [MDN: Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [OWASP: Cross Site Scripting Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
