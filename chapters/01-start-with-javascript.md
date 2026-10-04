# 1. Start with JavaScript

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Notes index](../README.md) | [Notes index](../README.md) | [Next: Values, variables, and types](./02-values-variables-and-types.md) |

JavaScript is a programming language used in web browsers, servers, command-line tools, and other environments. It can respond to user actions, calculate results, work with data, and connect an application to the services provided by its host environment.

The language itself is standardized as ECMAScript. A browser adds web APIs such as the DOM, timers, and Fetch. Node.js adds server and file-system APIs. This distinction matters: the language syntax is shared, while some features are available only in a particular environment.

## What you need

You can start with a modern browser and its developer console. Open the console, type a JavaScript expression, and press Enter. A console is useful for checking a small idea without creating a project.

~~~js
console.log("Hello, JavaScript!");
2 + 3
~~~

The first line prints a message. The second expression evaluates to 5. The console usually displays the result of the last expression.

For a saved program, create a plain text file named main.js. A JavaScript file is just text with the .js extension. You do not need React or a package to run these first examples.

## Run a script in a browser

Create an HTML file beside main.js. A module script is a good default for a modern browser project. The browser loads it as a module and makes its imports and exports available.

~~~html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>First JavaScript page</title>
    <script type="module" src="./main.js"></script>
  </head>
  <body>
    <h1>Open the browser console</h1>
  </body>
</html>
~~~

Now put JavaScript in main.js and open the HTML file in a browser.

~~~js
const pageTitle = "My first page";
const message = "Welcome to " + pageTitle;

console.log(message);
~~~

A module script is deferred by default. The browser parses the HTML before it runs the module, so placing the script in the head is safe here. Module files also run in strict mode automatically.

## Run a script with Node.js

Node.js is a JavaScript runtime that runs outside a browser. If it is installed, use a terminal in the directory containing main.js.

~~~sh
node --version
node main.js
~~~

The first command prints the installed Node.js version. The second runs the file. Browser objects such as document and window are not built into Node.js, because they belong to the browser environment.

## Make a small useful program

Start with a short function that calculates a shopping total. This example uses a function, a number, and a string. Later chapters explain each of those pieces carefully.

~~~js
const price = 12.5;
const quantity = 3;
const total = price * quantity;

console.log("Total: $" + total.toFixed(2));
~~~

The program stores two values, multiplies them, and prints the result with two decimal places. Try changing the price and quantity. When you can predict the output before running the code, you are practising the right habit.

You can also write a reusable function:

~~~js
function calculateTotal(price, quantity) {
  return price * quantity;
}

const orderTotal = calculateTotal(12.5, 3);
console.log(orderTotal);
~~~

A function gives a name to a piece of work. The values inside the parentheses are inputs. The return statement gives a result back to the caller.

## Read errors as clues

If the browser or Node.js cannot understand a line, it reports an error. The message usually includes a file and line number. Read that location first, then check the spelling, punctuation, and surrounding code.

~~~js
const greeting = "Hello";
console.log(greetng);
~~~

This example refers to greetng, but the declared variable is greeting. JavaScript reports a ReferenceError because no variable with that name exists. Fix the spelling, then run the code again.

A program can also run without a syntax error and still produce the wrong answer. Printing intermediate values with console.log is a simple way to inspect what the program is doing.

## A practical first-session routine

1. Open the browser developer console or a terminal with Node.js.
2. Run one small expression.
3. Save a few lines in main.js.
4. Change one input and predict the result.
5. Run the program and compare the result with your prediction.
6. Read any error from its first useful line and correct one issue at a time.

Keep examples small while learning. Small examples make it easier to see which change caused a different result.

## Key points

- JavaScript is the language. ECMAScript defines its standard behavior.
- A runtime provides a place to run JavaScript.
- Browser APIs and Node.js APIs come from their host environments.
- A browser console is useful for quick experiments.
- A .js file can be run by a browser page or by Node.js.
- Read error messages and test small changes instead of guessing.

## Practice questions

1. What is JavaScript used for?
2. What does ECMAScript define?
3. What is a runtime?
4. Which browser tool can run a short JavaScript expression?
5. Which command runs main.js with Node.js?
6. Does Node.js provide the browser's document object by default?
7. What does console.log do?
8. What should you inspect first when an error message points to a source line?

## Main references

- [MDN: JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [MDN: JavaScript language overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview)
- [ECMAScript language specification](https://tc39.es/ecma262/)
- [Node.js command-line options](https://nodejs.org/api/cli.html)
