# 9. Strings, numbers, dates, and regular expressions

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Built-in collections](./08-built-in-collections.md) | [Notes index](../README.md) | [Next: Errors and debugging](./10-errors-and-debugging.md) |

JavaScript includes built-in tools for common text, numeric, date, and pattern-matching work. These values look simple, but their rules matter when data comes from users or when an application displays it.

## Work with strings

Strings are immutable sequences of UTF-16 code units. Methods such as trim, includes, slice, and replace return values without changing the original string.

~~~js
const rawName = "  Mira Ranjan  ";
const name = rawName.trim();

console.log(name);
console.log(name.toLowerCase());
console.log(name.includes("Ranjan"));
console.log(rawName);
~~~

String length counts UTF-16 code units, not necessarily user-perceived characters. For example, some emoji use more than one code unit. Avoid assuming that length always equals the number of visible symbols.

Template literals use backtick delimiters and can insert expressions into a string. For simple concatenation, the plus operator is also available.

~~~js
const item = "notebook";
const quantity = 3;
const message = "You have " + quantity + " " + item + "s";

console.log(message);
~~~

For user-facing text, use the locale formatting APIs rather than building dates or numbers manually.

## Understand numbers and conversion

JavaScript's Number type uses floating-point representation. Some decimal fractions cannot be stored exactly in binary, so a calculation may have a small rounding difference.

~~~js
const total = 0.1 + 0.2;
console.log(total);
console.log(Number.isFinite(total));
~~~

For money, store an integer number of the smallest currency unit when that model fits, or use a carefully chosen decimal arithmetic approach. Do not assume floating-point decimals are exact.

Convert input explicitly and validate the result:

~~~js
const rawQuantity = "12";
const quantity = Number(rawQuantity);

if (Number.isFinite(quantity) && quantity >= 0) {
  console.log(quantity);
} else {
  console.log("Enter a valid quantity");
}
~~~

Number("12 items") gives NaN. parseInt and parseFloat can read a numeric prefix, but always pass the radix to parseInt when parsing an integer.

~~~js
console.log(Number("12 items"));
console.log(parseInt("101", 2));
console.log(parseFloat("12.5px"));
~~~

Use Number.isNaN to test for NaN. A direct comparison such as value === NaN is always false.

## Format values for people

Intl.NumberFormat formats numbers for a locale and an optional currency. The browser or runtime applies the appropriate separators and currency placement.

~~~js
const amount = 1234567.5;
const formatted = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
}).format(amount);

console.log(formatted);
~~~

Use Intl.DateTimeFormat for localized date display. Keep stored values in a well-defined format, then format them for the user's locale when displaying them.

~~~js
const date = new Date("2026-10-04T12:30:00Z");
const formattedDate = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Kolkata",
}).format(date);

console.log(formattedDate);
~~~

## Represent dates and times

Date represents an instant as milliseconds from the Unix epoch. A Date can be created from a timestamp or a standard date-time string. Include an explicit time zone in date-time strings when the value represents a precise moment.

~~~js
const createdAt = new Date("2026-10-04T12:30:00Z");

console.log(createdAt.toISOString());
console.log(createdAt.getTime());
~~~

A date-only string such as 2026-10-04 is interpreted as UTC by JavaScript's standard date-time format rules. Displaying it in a local time zone can show a different calendar day. If the value represents a calendar date rather than an instant, keep that distinction clear in your data model.

Date arithmetic can be affected by daylight-saving transitions and local time zones. For critical scheduling, store the intended time zone along with the local date and time.

## Match text with regular expressions

A regular expression describes a text pattern. The test method returns whether a string matches. Use anchors when the entire string should match rather than a substring.

~~~js
const postalCodePattern = /^\d{6}$/;
const postalCode = "560001";

console.log(postalCodePattern.test(postalCode));
~~~

The pattern above checks six digits from start to finish. A regular expression can validate a simple format, but it cannot fully validate complex standards such as every valid email address.

Use capture groups when parts of a match are useful:

~~~js
const orderPattern = /^ORDER-(\d+)$/;
const match = "ORDER-204".match(orderPattern);

if (match) {
  console.log(match[1]);
}
~~~

Regular expressions can become hard to maintain. Give a complicated pattern a name, explain its expected input, and test normal, missing, and malformed cases.

## Key points

- String methods return new strings because strings are immutable.
- Number uses binary floating-point, so decimal arithmetic can have rounding differences.
- Validate conversions with checks such as Number.isFinite.
- Use Intl APIs to format numbers and dates for people.
- Include a time zone when a date-time represents a precise instant.
- Keep a regular expression limited to a pattern it can explain and test.

## Practice questions

1. Do string methods such as trim change the original string?
2. What does String.length count?
3. Why can 0.1 + 0.2 differ from 0.3?
4. Which method checks whether a number is finite?
5. Why should parseInt receive a radix?
6. Which API formats currency for a locale?
7. Why should an instant include an explicit time zone?
8. What do the ^ and $ anchors check in a regular expression?

## Main references

- [MDN: Text formatting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting)
- [MDN: Numbers and strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [MDN: Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN: Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [MDN: Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
