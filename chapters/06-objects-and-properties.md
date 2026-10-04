# 6. Objects and properties

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Arrays and iteration](./05-arrays-and-iteration.md) | [Notes index](../README.md) | [Next: Prototypes and classes](./07-prototypes-and-classes.md) |

An object groups related values under named properties. Objects are useful for representing records such as a person, a product, or a task. A property can contain a value or a function.

## Create and read an object

An object literal uses braces and key-value pairs. Use dot notation when the property name is a valid identifier. Use bracket notation when the name is stored in a variable or contains characters that cannot appear in dot notation.

~~~js
const member = {
  name: "Mira",
  role: "developer",
  active: true,
};

console.log(member.name);
console.log(member["role"]);
~~~

You can add, update, or delete a property. Use deletion sparingly in application data because a stable object shape is easier to reason about.

~~~js
const settings = { theme: "dark" };
settings.fontSize = 16;
settings.theme = "monochrome";
delete settings.fontSize;

console.log(settings);
~~~

A property name can be computed from a variable:

~~~js
const field = "email";
const profile = {
  name: "Kai",
  [field]: "kai@example.com",
};

console.log(profile.email);
~~~

## Read optional properties safely

Reading a missing property returns undefined. Optional chaining stops a property access when the value before ?. is null or undefined.

~~~js
const order = { customer: { name: "Noor" } };

console.log(order.customer.name);
console.log(order.delivery?.city);
~~~

Use nullish coalescing to provide a default only when a value is null or undefined.

~~~js
const preferences = { pageSize: 0 };
const pageSize = preferences.pageSize ?? 20;

console.log(pageSize);
~~~

Do not use optional chaining to hide data that the program requires. Validate required data and report a clear error instead.

## Destructure properties

Destructuring copies selected property values into local bindings. It can make code shorter when several fields are used.

~~~js
const product = { name: "Notebook", price: 5 };
const { name, price } = product;

console.log(name);
console.log(price);
~~~

Rename a local binding or provide a default in the pattern:

~~~js
const account = { displayName: "Sam" };
const { displayName: label, avatar = "default.png" } = account;

console.log(label);
console.log(avatar);
~~~

A default applies only when the property value is undefined. It does not replace null or other falsy values.

## Copy and combine objects

Object spread copies enumerable own properties into a new object. It is a shallow copy, so nested objects remain shared references.

~~~js
const defaults = { theme: "dark", pageSize: 20 };
const preferences = { ...defaults, pageSize: 10 };

console.log(preferences);
console.log(defaults);
~~~

Later properties overwrite earlier properties with the same key. Use spread to create an updated top-level object while retaining the other values.

~~~js
const user = {
  name: "Mira",
  settings: { theme: "dark" },
};

const renamedUser = { ...user, name: "Mira R." };

console.log(renamedUser.name);
console.log(renamedUser.settings === user.settings);
~~~

The last comparison is true because the nested settings object was not copied. A deep copy requires a deliberate strategy that matches the data. JSON serialization loses values such as undefined, functions, and special object types, so it is not a general deep-copy method.

## Check properties and define behavior

The in operator checks whether a property exists on the object or anywhere on its prototype chain. Object.hasOwn checks only an own property.

~~~js
const settings = { theme: "dark" };

console.log("theme" in settings);
console.log(Object.hasOwn(settings, "theme"));
console.log(Object.hasOwn(settings, "toString"));
~~~

Methods are function-valued properties. A method can use this to refer to the object it is called on. Arrow functions do not have their own this, so use a regular method or function when the method needs this.

~~~js
const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
};

counter.increment();
console.log(counter.value);
~~~

## Key points

- Objects group related values under named properties.
- Use dot notation for known names and bracket notation for computed names.
- Optional chaining avoids reading beyond null or undefined.
- Destructuring copies selected property values into local bindings.
- Object spread makes a shallow copy and later properties overwrite earlier ones.
- Object.hasOwn checks for a direct property without searching the prototype chain.

## Practice questions

1. What does an object literal group together?
2. When should bracket notation be used?
3. What value does reading a missing property return?
4. What does optional chaining do when its left side is null?
5. When does a destructuring default apply?
6. What does object spread copy?
7. Why is object spread called a shallow copy?
8. How does Object.hasOwn differ from the in operator?

## Main references

- [MDN: Working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
- [MDN: Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring)
- [MDN: Object.hasOwn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
