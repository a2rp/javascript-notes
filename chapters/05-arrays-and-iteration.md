# 5. Arrays and iteration

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Functions and closures](./04-functions-and-closures.md) | [Notes index](../README.md) | [Next: Objects and properties](./06-objects-and-properties.md) |

An array stores an ordered collection of values. Use it when the order matters or when a group of related values should be processed together. Arrays can contain values of different types, although using one consistent shape usually makes a program easier to understand.

## Create, read, and update

Array indexes start at zero. The length property tells how many elements the array contains. An index outside the current range returns undefined when read.

~~~js
const colors = ["black", "white", "orange"];

console.log(colors[0]);
console.log(colors[colors.length - 1]);

colors[1] = "gray";
console.log(colors);
~~~

Use push to add to the end and pop to remove from the end. Both methods change the original array.

~~~js
const tasks = ["read", "practise"];

tasks.push("review");
const lastTask = tasks.pop();

console.log(tasks);
console.log(lastTask);
~~~

Other mutating methods include splice, sort, reverse, shift, and unshift. Check the method behavior before using it when other code shares the same array.

## Choose an iteration style

Use for...of when you need each value. Use the regular for loop when the index or a custom step matters.

~~~js
const scores = [72, 85, 91];

for (const score of scores) {
  console.log(score);
}
~~~

~~~js
const letters = ["a", "b", "c"];

for (let index = 0; index < letters.length; index += 1) {
  console.log(index, letters[index]);
}
~~~

Avoid using for...in for array values. It iterates over enumerable property names, which is intended mainly for object properties rather than ordered array elements.

## Transform and select values

map creates a new array by transforming each element. It keeps the same number of positions as the source array.

~~~js
const prices = [10, 20, 30];
const pricesWithTax = prices.map((price) => price * 1.1);

console.log(pricesWithTax);
console.log(prices);
~~~

filter creates a new array containing only elements that pass a test. find returns the first matching element or undefined if no element matches.

~~~js
const scores = [48, 76, 91, 65];
const passingScores = scores.filter((score) => score >= 60);
const firstHighScore = scores.find((score) => score >= 90);

console.log(passingScores);
console.log(firstHighScore);
~~~

some checks whether at least one element passes a test. every checks whether all elements pass it.

~~~js
const ages = [22, 31, 27];

console.log(ages.some((age) => age < 18));
console.log(ages.every((age) => age >= 18));
~~~

Use reduce when each element contributes to one accumulated result, such as a sum. Give the accumulator an initial value so empty input has a defined result.

~~~js
const expenses = [12, 8, 15];
const total = expenses.reduce((sum, amount) => sum + amount, 0);

console.log(total);
~~~

Do not force a complex loop into reduce. If a named loop explains the steps more clearly, use the loop.

## Copy and sort safely

Spread syntax makes a shallow copy of an array. Nested objects inside the copy are still shared references.

~~~js
const original = ["a", "b"];
const copy = [...original];

copy.push("c");

console.log(original);
console.log(copy);
~~~

sort changes the array and, without a comparator, sorts values as strings. For numeric order, provide a comparison function. Copy first if the original order must stay unchanged.

~~~js
const values = [40, 5, 100, 12];
const sortedValues = [...values].sort((left, right) => left - right);

console.log(sortedValues);
console.log(values);
~~~

For objects, sort can compare a selected property:

~~~js
const members = [
  { name: "Mira", score: 88 },
  { name: "Noor", score: 95 },
  { name: "Kai", score: 72 },
];

const rankedMembers = [...members].sort((a, b) => b.score - a.score);
console.log(rankedMembers);
~~~

## Work through a small example

A cart can be represented as an array of objects. Filter selects items, map computes their line totals, and reduce adds those totals.

~~~js
const cart = [
  { name: "Notebook", price: 5, quantity: 2 },
  { name: "Pen", price: 2, quantity: 3 },
];

const lineTotals = cart.map((item) => item.price * item.quantity);
const cartTotal = lineTotals.reduce((sum, lineTotal) => sum + lineTotal, 0);

console.log(lineTotals);
console.log(cartTotal);
~~~

Each operation has one job. This makes the data transformation easier to read and change.

## Key points

- Array indexes start at zero and the length property counts elements.
- for...of is a clear way to visit array values.
- map transforms, filter selects, and find returns the first match.
- some and every answer yes-or-no questions about elements.
- reduce can create one accumulated result.
- Many array methods mutate the array. Copy first when shared state must stay unchanged.

## Practice questions

1. What index identifies the first array element?
2. What does push return and change?
3. When is for...of a good choice?
4. What does map return?
5. What does find return if there is no match?
6. How do some and every differ?
7. Why should numeric sort use a comparator?
8. What does a shallow array copy still share?

## Main references

- [MDN: Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Array iteration methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iteration_methods)
