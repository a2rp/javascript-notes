# 8. Built-in collections

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Prototypes and classes](./07-prototypes-and-classes.md) | [Notes index](../README.md) | [Next: Strings, numbers, dates, and regular expressions](./09-strings-numbers-dates-and-regex.md) |

JavaScript has built-in collections for common ways of organizing data. Arrays store ordered values. Objects store named properties. Map and Set are useful when you need keys of any type or a collection of unique values.

## Use Map for key-value associations

A Map stores key-value pairs and remembers insertion order. Keys can be values of any type, including objects. Use set to add or replace an entry, get to read one, and has to check for a key.

~~~js
const visits = new Map();

visits.set("home", 12);
visits.set("notes", 5);

console.log(visits.get("home"));
console.log(visits.has("about"));
console.log(visits.size);
~~~

Map avoids treating user-provided text as special object property names. It also provides clear methods for adding and removing entries.

~~~js
const userVisits = new Map();
const firstUser = { id: 1 };

userVisits.set(firstUser, 3);
console.log(userVisits.get(firstUser));
~~~

Object keys in a Map are compared by identity. A different object with the same fields is a different key.

~~~js
const counts = new Map();
counts.set({ id: 1 }, 10);

console.log(counts.get({ id: 1 }));
~~~

The last result is undefined because the lookup object is not the same object that was inserted as a key.

## Use Set for unique values

A Set stores unique values and remembers insertion order. Adding a duplicate value does not create another entry.

~~~js
const tags = new Set(["javascript", "web", "javascript"]);

tags.add("browser");
tags.add("web");

console.log(tags.size);
console.log([...tags]);
~~~

Set is useful for removing duplicates or quickly checking whether a value has already appeared.

~~~js
const requestedIds = [4, 8, 4, 2, 8];
const uniqueIds = [...new Set(requestedIds)];

console.log(uniqueIds);
~~~

Set compares values using SameValueZero. In practical terms, NaN matches NaN, while objects match only when they are the same object reference.

## Iterate through collection entries

Map and Set can be used with for...of. A Map yields a pair containing its key and value. A Set yields each stored value.

~~~js
const stock = new Map([
  ["notebooks", 12],
  ["pens", 30],
]);

for (const [item, quantity] of stock) {
  console.log(item, quantity);
}
~~~

Map can also provide entries, keys, or values explicitly. Set provides keys and values that both iterate its values.

## Use weak collections for object-associated data

WeakMap and WeakSet accept object keys or values and do not keep those objects alive just because they are in the collection. They are not enumerable, so you cannot loop over their entries or read a size.

~~~js
const privateDetails = new WeakMap();
const account = { name: "Mira" };

privateDetails.set(account, { tokenLabel: "primary" });
console.log(privateDetails.get(account));
~~~

A weak collection is useful when metadata should follow an object's lifetime. Use Map or Set for ordinary collections that your code needs to inspect or iterate.

## Choose the right structure

- Choose an array when order and indexed positions matter.
- Choose an object for a small record with known property names.
- Choose a Map for a collection of key-value pairs with dynamic keys.
- Choose a Set when each value should appear only once.
- Choose a weak collection when associating data with object lifetimes and you do not need iteration.

## Key points

- Map has explicit operations for keys, values, lookup, and size.
- A Map object key is identified by object identity.
- Set keeps unique values and preserves insertion order.
- WeakMap and WeakSet cannot be iterated or inspected by size.
- Pick a data structure based on the operations the program needs.

## Practice questions

1. Which collection stores key-value pairs and remembers insertion order?
2. Can a Map use an object as a key?
3. Why can a new object with the same fields fail to find a Map entry?
4. What happens when the same value is added to a Set twice?
5. How can a Set remove duplicate primitive values from an array?
6. Why can WeakMap entries not be listed?
7. When is a plain object a suitable data structure?
8. Which collection should you choose when values must be unique?

## Main references

- [MDN: Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)
- [MDN: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN: Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN: WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
