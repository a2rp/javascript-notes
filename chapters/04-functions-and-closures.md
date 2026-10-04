# 4. Functions and closures

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Operators and control flow](./03-operators-and-control-flow.md) | [Notes index](../README.md) | [Next: Arrays and iteration](./05-arrays-and-iteration.md) |

A function groups work under a name and can accept input values. It can return a result to its caller. Functions are values in JavaScript, so a program can store them, pass them to other functions, and return them.

## Declare and call a function

A function declaration names the function and its parameters. Call it by writing the name followed by parentheses and arguments.

~~~js
function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(12.5, 3);
console.log(total);
~~~

Parameters are names in the declaration. Arguments are the values supplied at the call site. JavaScript does not require callers to pass every argument. A missing parameter has the value undefined unless the function provides a default.

~~~js
function greet(name = "friend") {
  return "Hello, " + name;
}

console.log(greet("Mira"));
console.log(greet());
~~~

A return statement sends a value back and stops the current function. A function with no return statement returns undefined.

~~~js
function logMessage(message) {
  console.log(message);
}

const result = logMessage("Saved");
console.log(result);
~~~

## Function expressions and arrow functions

A function expression creates a function value that can be assigned to a variable. An arrow function is a shorter function expression, useful for small callbacks and transformations.

~~~js
const double = function (number) {
  return number * 2;
};

const triple = (number) => number * 3;

console.log(double(4));
console.log(triple(4));
~~~

When an arrow function has one parameter, parentheses may be omitted. A single expression can use an implicit return. Use braces and return when the work needs multiple statements.

~~~js
const isLongName = (name) => name.length > 8;
const makeLabel = (name) => {
  const cleaned = name.trim();
  return "Member: " + cleaned;
};

console.log(isLongName("JavaScript"));
console.log(makeLabel(" Mira "));
~~~

Arrow functions do not create their own this value and cannot be called with new. Use a regular function when the function needs its own this binding or must act as a constructor.

## Functions can receive functions

A callback is a function passed to another function so it can be called later. This pattern lets the caller provide a behavior without the receiving function needing to know all possible behaviors in advance.

~~~js
function applyDiscount(price, discountRule) {
  return discountRule(price);
}

const salePrice = applyDiscount(100, (price) => price * 0.8);
console.log(salePrice);
~~~

A function that accepts another function or returns one is often called a higher-order function. Array methods such as map and filter use callbacks. The arrays chapter explains those methods in more detail.

## Lexical scope and closures

A function can read variables from the surrounding scope where it was created. If the function continues to use those variables after the outer function returns, the function retains access to them. This behavior is called a closure.

~~~js
function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const nextCount = createCounter();

console.log(nextCount());
console.log(nextCount());
~~~

The count variable remains available to increment even though createCounter has finished. Each call to createCounter creates a separate count.

~~~js
function createGreeter(greeting) {
  return (name) => greeting + ", " + name;
}

const sayHello = createGreeter("Hello");
console.log(sayHello("Mira"));
~~~

Closures are useful for keeping related state private, creating customized callbacks, and remembering configuration. Avoid retaining large objects longer than needed, because a closure keeps referenced values reachable.

## Keep functions focused

A focused function has a clear name, a small responsibility, and inputs that make its behavior easy to check. Prefer returning a result over changing unrelated outer variables.

~~~js
function formatPrice(amount, currency = "USD") {
  return currency + " " + amount.toFixed(2);
}

console.log(formatPrice(19.5));
console.log(formatPrice(19.5, "EUR"));
~~~

This function depends only on its inputs, so the same arguments produce the same result. Such a function is easy to test and reuse.

## Key points

- Parameters receive arguments, and return sends a result back to the caller.
- Function declarations, function expressions, and arrow functions have different syntax and behavior.
- Arrow functions use this from their surrounding scope.
- A callback is a function passed to another function.
- A closure retains access to variables from the scope where it was created.
- Focused functions are easier to test and reuse.

## Practice questions

1. What is the difference between a parameter and an argument?
2. What does a function return when it has no return statement?
3. When is a default parameter used?
4. What is one important difference between an arrow function and a regular function?
5. What is a callback?
6. What does higher-order function mean?
7. What does a closure retain access to?
8. Why is a focused function easier to test?

## Main references

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
