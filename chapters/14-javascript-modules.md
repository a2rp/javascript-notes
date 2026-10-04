# 14. JavaScript modules

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Asynchronous JavaScript](./13-asynchronous-javascript.md) | [Notes index](../README.md) | [Next: HTTP requests with Fetch](./15-http-requests-with-fetch.md) |

Modules let a program split related code across files. Each module has its own scope, so top-level names do not automatically become global variables. Modules make it clear which values a file provides and which values it needs.

## Export and import named values

Use a named export for values that another module can import by name. The imported name must match an exported name unless it is renamed.

~~~js
// math.js
export function add(left, right) {
  return left + right;
}

export const taxRate = 0.1;
~~~

~~~js
// app.js
import { add, taxRate } from "./math.js";

console.log(add(20, 5));
console.log(taxRate);
~~~

The import path is relative to the importing module. In a browser, include the file extension in relative module paths.

## Use a default export

A module can have one default export. The importing file chooses the local name for it.

~~~js
// greeting.js
export default function greet(name) {
  return "Hello, " + name;
}
~~~

~~~js
// app.js
import greet from "./greeting.js";

console.log(greet("Mira"));
~~~

Named exports work well when a module provides related operations. A default export is useful when a module has one primary value. Keep one style consistent within a project.

## Load a module in a browser

Use a script element with type="module". Module scripts are deferred by default, run in strict mode, and support import and export syntax.

~~~html
<script type="module" src="./app.js"></script>
~~~

Browsers load modules over HTTP or HTTPS. Some browser security rules prevent module imports from working when an HTML file is opened directly from the file system. Use a local development server when the browser blocks local imports.

## Rename and re-export values

The as keyword can rename an imported or exported binding. A module can also re-export values from another module to create a focused public entry point.

~~~js
import { taxRate as defaultTaxRate } from "./math.js";

console.log(defaultTaxRate);
~~~

~~~js
export { add, taxRate } from "./math.js";
~~~

An import is a live binding to the exported value. If an exporting module updates an exported let binding, importers observe the current value. An importer cannot assign to an imported binding.

## Load a module only when needed

Dynamic import returns a promise that fulfills with the module namespace object. It can keep optional code out of the initial path until a person asks for it.

~~~js
async function openAdvancedPanel() {
  const panelModule = await import("./advanced-panel.js");
  panelModule.showPanel();
}

openAdvancedPanel();
~~~

Dynamic import is asynchronous, so handle possible loading errors at the call site.

~~~js
async function loadPanel() {
  try {
    const panelModule = await import("./advanced-panel.js");
    panelModule.showPanel();
  } catch (error) {
    console.error("The panel could not be loaded", error);
  }
}
~~~

## Keep module boundaries clear

A module should group a small set of related responsibilities. Avoid circular dependencies where two modules require each other's initialization. Move shared values to a third module when that makes the relationship simpler.

Use explicit exports instead of attaching application values to window. Explicit module boundaries make dependencies easier to find and code easier to test.

## Key points

- Modules split code across files and keep top-level names scoped.
- Named imports use the name provided by the exporting module.
- A default import can choose its local name.
- Browser modules use script type="module" and load over HTTP or HTTPS.
- Dynamic import returns a promise.
- Imported bindings are read-only to the importing module.

## Practice questions

1. What problem do modules help solve?
2. How does a named import identify the exported value?
3. How many default exports can a module have?
4. What does script type="module" enable in a browser?
5. How are relative import paths resolved?
6. What does dynamic import return?
7. Can an importing module assign to an imported binding?
8. What can help simplify a circular dependency?

## Main references

- [MDN: JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [MDN: export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
- [MDN: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [MDN: Dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
