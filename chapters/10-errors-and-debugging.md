# 10. Errors and debugging

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Strings, numbers, dates, and regular expressions](./09-strings-numbers-dates-and-regex.md) | [Notes index](../README.md) | [Next: The DOM and page updates](./11-dom-and-page-updates.md) |

An error is information that something went wrong. JavaScript can report syntax errors before a program runs, runtime errors while it runs, and a program can also produce an incorrect result without throwing any error. Good debugging starts by identifying which kind of problem you have.

## Validate expected input

Check ordinary user input at the boundary where it enters the program. A normal validation result is often easier to handle than throwing an exception for an expected condition.

~~~js
function parseQuantity(input) {
  const quantity = Number(input);

  if (!Number.isInteger(quantity) || quantity < 1) {
    return { ok: false, message: "Enter a whole number greater than zero." };
  }

  return { ok: true, value: quantity };
}

console.log(parseQuantity("3"));
console.log(parseQuantity("0"));
~~~

This function returns an explicit result for success or failure. The caller can show the message or continue with the value.

## Throw and catch exceptional failures

Use throw when an operation cannot continue according to its contract. A thrown value should usually be an Error object because it includes a name, message, and stack trace.

~~~js
function getRequiredMember(members, id) {
  const member = members.find((item) => item.id === id);

  if (!member) {
    throw new Error("Member was not found");
  }

  return member;
}

try {
  const member = getRequiredMember([], 7);
  console.log(member.name);
} catch (error) {
  console.error(error.message);
}
~~~

Catch an error only when the current code can handle it or add useful context. Otherwise, let it reach a layer that can make the right decision.

## Use finally for cleanup

A finally block runs after try and catch whether the operation succeeded or failed. It is useful for cleanup that must always happen.

~~~js
let isBusy = true;

try {
  console.log("Working");
} catch (error) {
  console.error(error);
} finally {
  isBusy = false;
}

console.log(isBusy);
~~~

For browser requests, update a loading state in finally so the interface does not remain busy after a failed request.

## Create a specific error type

A custom error class gives callers a clear way to recognize a specific failure while retaining standard error details.

~~~js
class MissingMemberError extends Error {
  constructor(memberId) {
    super("Member " + memberId + " was not found");
    this.name = "MissingMemberError";
  }
}

try {
  throw new MissingMemberError(7);
} catch (error) {
  if (error instanceof MissingMemberError) {
    console.log(error.message);
  } else {
    throw error;
  }
}
~~~

Do not catch every error and return an empty value. That hides the reason the operation failed and can make later behavior confusing.

## Inspect the program with DevTools

In a browser, open developer tools and check the Console for error messages. The Sources panel lets you place a breakpoint, pause execution, inspect local variables, and step through code line by line.

~~~js
function calculateAverage(values) {
  const total = values.reduce((sum, value) => sum + value, 0);
  return total / values.length;
}

console.log(calculateAverage([4, 8]));
console.log(calculateAverage([]));
~~~

The second result is not a thrown error, but it is not a useful average either. Decide what an empty input should mean, then validate or handle it explicitly.

Use console.log for a quick check. Use console.table for a small collection of records. Remove temporary logs once the issue is fixed, or replace them with intentional application logging.

## A repeatable debugging method

1. Reproduce the issue with the smallest input that still fails.
2. Read the first useful error and its file and line.
3. Inspect the values before the failing operation.
4. Check assumptions about types, missing values, and array length.
5. Change one thing, rerun the case, and confirm the expected result.
6. Add a regression check for the behavior if it is likely to return.

## Key points

- Syntax errors prevent code from parsing. Runtime errors occur while code runs.
- Incorrect logic may produce a wrong value without throwing.
- Validate expected input and reserve exceptions for exceptional failures.
- Catch an error only when you can handle it or add context.
- Use finally for cleanup that must always happen.
- Breakpoints and small reproducible cases make debugging more reliable.

## Practice questions

1. How does a logic error differ from a runtime error?
2. When should input validation happen?
3. What kind of value should throw usually receive?
4. When is a catch block useful?
5. When does finally run?
6. Why might a custom error class help?
7. Which browser DevTools panel can pause at a breakpoint?
8. Why is returning an empty value after every error risky?

## Main references

- [MDN: Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN: Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [Chrome DevTools: JavaScript debugging](https://developer.chrome.com/docs/devtools/javascript)
