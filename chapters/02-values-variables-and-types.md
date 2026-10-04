# 2. Values, variables, and types

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Start with JavaScript](./01-start-with-javascript.md) | [Notes index](../README.md) | [Next: Operators and control flow](./03-operators-and-control-flow.md) |

Every JavaScript expression produces a value. A variable gives a value a name so a program can use it again. JavaScript is dynamically typed: a binding can hold a value of any type, and the value's type is checked while the program runs.

## Declare values with const and let

Use const when a binding will not be assigned a different value. Use let when it must be reassigned. Both are block scoped, which means they are available only inside the braces where they are declared.

~~~js
const siteName = "Study Notes";
let visitCount = 0;

visitCount += 1;

console.log(siteName);
console.log(visitCount);
~~~

A const binding cannot be reassigned, but that does not freeze an object stored in it. The binding and the object's contents are separate ideas.

~~~js
const learner = { name: "Ashish" };
learner.name = "A. Ranjan";

console.log(learner.name);
~~~

The object property can change because the object is mutable. This assignment would fail because it tries to replace the const binding:

~~~js
const learner = { name: "Ashish" };
learner = { name: "Sam" };
~~~

Avoid var in new code unless you need to understand older examples. Its function scope and hoisting rules can make a variable visible in places that are surprising.

## Primitive values

JavaScript has seven primitive types: string, number, bigint, boolean, undefined, null, and symbol. Primitives are values, not collections of properties. Strings and numbers are immutable values.

~~~js
const language = "JavaScript";
const score = 42;
const largeCount = 9_000_000_000n;
const isReady = true;
const missingValue = undefined;
const emptyValue = null;
const uniqueKey = Symbol("key");

console.log(typeof language, typeof score, typeof largeCount);
console.log(typeof isReady, typeof missingValue, typeof uniqueKey);
console.log(typeof emptyValue);
~~~

The last line prints "object". This is a historical behavior of typeof null. Check for null with value === null rather than relying on typeof.

The number type handles ordinary integers and decimal values. It also includes special values such as NaN and Infinity. BigInt represents integers larger than the safe integer range and uses an n suffix.

~~~js
const result = Number("not a number");
const count = 9_007_199_254_740_993n;

console.log(Number.isNaN(result));
console.log(count + 1n);
~~~

Do not mix BigInt and Number in arithmetic without an explicit conversion. The two types represent numeric values with different rules.

## Objects and references

Arrays, functions, and ordinary object literals are objects. A variable holding an object contains a reference to it. Assigning that variable to another name copies the reference, so both names can reach the same object.

~~~js
const first = { points: 10 };
const second = first;

second.points += 5;

console.log(first.points);
~~~

The output is 15 because first and second refer to the same object. Changing the reference variable itself is different from changing the object.

~~~js
let currentUser = { name: "Mira" };
const savedUser = currentUser;

currentUser = { name: "Noor" };

console.log(savedUser.name);
console.log(currentUser.name);
~~~

The savedUser binding still refers to the first object. Reassigning currentUser does not redirect savedUser.

## Undefined and null

undefined commonly means a value has not been assigned or a property is absent. null is an explicit value that a program can use to represent no object or no result.

~~~js
let selectedItem;
const profile = { name: "Mira" };

console.log(selectedItem);
console.log(profile.email);
console.log(profile === null);
~~~

Both selectedItem and profile.email evaluate to undefined. profile itself is an object, so the final expression is false.

## Convert values deliberately

JavaScript can convert values implicitly, but implicit conversion may hide mistakes. Use clear conversions at the boundary where data enters a program.

~~~js
const rawAge = "28";
const age = Number(rawAge);
const label = String(age);
const hasName = Boolean("Mira");

console.log(age + 1);
console.log(label);
console.log(hasName);
~~~

Use Number.isNaN when you need to check whether a number conversion failed. Boolean conversion follows truthiness rules, which are covered with conditions in the next chapter.

## Scope in one example

A block creates a scope for let and const. A variable declared inside the block cannot be read after the closing brace.

~~~js
if (true) {
  const greeting = "Hello";
  console.log(greeting);
}

// greeting is not available here
~~~

Smaller scopes help keep values close to the code that uses them and reduce accidental changes.

## Key points

- Use const by default and let when a binding must be reassigned.
- JavaScript has seven primitive types. Arrays, functions, and object literals are objects.
- const prevents rebinding, but it does not make an object immutable.
- Assigning an object variable copies its reference.
- undefined and null have different meanings. typeof null returns "object" for historical reasons.
- Convert input explicitly when the intended type matters.

## Practice questions

1. What does dynamically typed mean in JavaScript?
2. When should you use let instead of const?
3. Does const make an object immutable?
4. What are JavaScript's seven primitive types?
5. Why does typeof null return "object"?
6. What happens when an object reference is assigned to another variable?
7. How do undefined and null differ?
8. Why should input conversion be explicit?

## Main references

- [MDN: Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
- [MDN: Data structures and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
