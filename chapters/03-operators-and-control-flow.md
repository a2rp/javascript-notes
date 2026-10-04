# 3. Operators and control flow

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Values, variables, and types](./02-values-variables-and-types.md) | [Notes index](../README.md) | [Next: Functions and closures](./04-functions-and-closures.md) |

Operators combine values into expressions. Control-flow statements choose which statements run and how often. Learning to read both helps you understand most everyday JavaScript code.

## Arithmetic and assignment

The arithmetic operators include addition, subtraction, multiplication, division, remainder, and exponentiation. The plus operator also joins strings, so convert values when the intended operation is numeric.

~~~js
const subtotal = 18 * 3;
const remainder = 10 % 3;
const doubled = 2 ** 3;

console.log(subtotal, remainder, doubled);
console.log(Number("18") + 2);
console.log("18" + 2);
~~~

The final two results differ because the plus operator joins strings when one operand is a string. Compound assignment updates an existing binding:

~~~js
let total = 10;
total += 5;
total *= 2;

console.log(total);
~~~

## Compare values carefully

Prefer strict equality, ===, and strict inequality, !==. They compare values without first converting different types.

~~~js
console.log(5 === "5");
console.log(5 !== "5");
console.log(5 == "5");
~~~

The first two results are true because the values have different types. The loose equality result is true after coercion. Avoid relying on that conversion in ordinary comparisons.

Relational operators compare numbers or strings. When comparing strings, JavaScript uses their UTF-16 code units, which may not match human language sorting. Use locale-aware comparison for user-facing alphabetical order.

## Truthy and falsy values

Conditions convert their expressions to booleans. Values such as false, 0, -0, 0n, an empty string, null, undefined, and NaN are falsy. Most other values, including empty arrays and empty objects, are truthy.

~~~js
const names = [];
const displayName = "";

if (names) {
  console.log("An empty array is still truthy");
}

if (!displayName) {
  console.log("The name is empty");
}
~~~

Use a direct length check when you mean to test whether an array has items.

~~~js
const tasks = [];

if (tasks.length === 0) {
  console.log("There are no tasks yet");
}
~~~

## Choose a path with conditions

Use if and else when a decision has a few clear branches. Use else if for additional conditions.

~~~js
const score = 82;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Keep practising");
}
~~~

A switch statement works well when one value is compared with several fixed choices. Remember to end each branch with break unless you intentionally want execution to continue into the next branch.

~~~js
const status = "ready";

switch (status) {
  case "loading":
    console.log("Please wait");
    break;
  case "ready":
    console.log("You can continue");
    break;
  default:
    console.log("Unknown status");
}
~~~

A conditional expression can choose a value in a short expression. If either branch becomes complex, use an if statement instead.

~~~js
const itemCount = 3;
const label = itemCount === 1 ? "item" : "items";

console.log(itemCount + " " + label);
~~~

## Combine conditions

The logical operators are && for AND, || for OR, and ! for NOT. The first two use short-circuit evaluation: the right side runs only when needed to determine the result.

~~~js
const account = { active: true };

function hasPermission() {
  console.log("Permission check ran");
  return true;
}

const canOpenPage = account.active && hasPermission();
console.log(canOpenPage);
~~~

The nullish coalescing operator, ??, uses the fallback only when the left side is null or undefined. This preserves meaningful values such as 0 and an empty string.

~~~js
const savedPageSize = 0;
const pageSize = savedPageSize ?? 20;

console.log(pageSize);
~~~

Use || only when all falsy values should trigger the fallback.

## Repeat work with loops

Use a for loop when you need an index or a known progression. Use for...of to visit values from an iterable such as an array.

~~~js
const prices = [4, 7, 9];
let total = 0;

for (const price of prices) {
  total += price;
}

console.log(total);
~~~

Use while when repetition depends on a condition that changes during the loop. Make sure every path eventually changes the condition, or the loop may never stop.

~~~js
let attempts = 0;

while (attempts < 3) {
  console.log("Attempt " + (attempts + 1));
  attempts += 1;
}
~~~

break exits the nearest loop. continue skips the remainder of the current iteration. Use them when they make the exit condition easier to see, not to hide complicated branching.

## Key points

- Strict equality avoids automatic type conversion.
- Conditions convert values to booleans, and empty arrays are truthy.
- Choose if, switch, or a conditional expression based on how much logic is needed.
- &&, ||, and ?? have different fallback behavior.
- for...of reads each value in an iterable.
- Every loop needs a clear way to finish.

## Practice questions

1. What does 10 % 3 evaluate to?
2. Why is === usually preferred to ==?
3. Is an empty array falsy?
4. Which values trigger the fallback in a ?? expression?
5. What does short-circuit evaluation mean for &&?
6. When is a switch statement useful?
7. What does for...of provide on each iteration?
8. What is the difference between break and continue?

## Main references

- [MDN: Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [MDN: Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [MDN: Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN: Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
