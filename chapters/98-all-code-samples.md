# 98. All code samples

[Back to notes index](../README.md)

| Previous | Notes index | Next |
| --- | --- | --- |
| [Previous: Browser storage and safe patterns](./16-browser-storage-and-safe-patterns.md) | [Notes index](../README.md) | [Next: Complete questions and answers](./99-complete-q-and-a.md) |

## Source chapter: [Start with JavaScript](./01-start-with-javascript.md)

### Sample 1

~~~js
console.log("Hello, JavaScript!");
2 + 3
~~~

### Sample 2

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

### Sample 3

~~~js
const pageTitle = "My first page";
const message = "Welcome to " + pageTitle;

console.log(message);
~~~

### Sample 4

~~~sh
node --version
node main.js
~~~

### Sample 5

~~~js
const price = 12.5;
const quantity = 3;
const total = price * quantity;

console.log("Total: $" + total.toFixed(2));
~~~

### Sample 6

~~~js
function calculateTotal(price, quantity) {
  return price * quantity;
}

const orderTotal = calculateTotal(12.5, 3);
console.log(orderTotal);
~~~

### Sample 7

~~~js
const greeting = "Hello";
console.log(greetng);
~~~

## Source chapter: [Values, variables, and types](./02-values-variables-and-types.md)

### Sample 1

~~~js
const siteName = "Study Notes";
let visitCount = 0;

visitCount += 1;

console.log(siteName);
console.log(visitCount);
~~~

### Sample 2

~~~js
const learner = { name: "Ashish" };
learner.name = "A. Ranjan";

console.log(learner.name);
~~~

### Sample 3

~~~js
const learner = { name: "Ashish" };
learner = { name: "Sam" };
~~~

### Sample 4

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

### Sample 5

~~~js
const result = Number("not a number");
const count = 9_007_199_254_740_993n;

console.log(Number.isNaN(result));
console.log(count + 1n);
~~~

### Sample 6

~~~js
const first = { points: 10 };
const second = first;

second.points += 5;

console.log(first.points);
~~~

### Sample 7

~~~js
let currentUser = { name: "Mira" };
const savedUser = currentUser;

currentUser = { name: "Noor" };

console.log(savedUser.name);
console.log(currentUser.name);
~~~

### Sample 8

~~~js
let selectedItem;
const profile = { name: "Mira" };

console.log(selectedItem);
console.log(profile.email);
console.log(profile === null);
~~~

### Sample 9

~~~js
const rawAge = "28";
const age = Number(rawAge);
const label = String(age);
const hasName = Boolean("Mira");

console.log(age + 1);
console.log(label);
console.log(hasName);
~~~

### Sample 10

~~~js
if (true) {
  const greeting = "Hello";
  console.log(greeting);
}

// greeting is not available here
~~~

## Source chapter: [Operators and control flow](./03-operators-and-control-flow.md)

### Sample 1

~~~js
const subtotal = 18 * 3;
const remainder = 10 % 3;
const doubled = 2 ** 3;

console.log(subtotal, remainder, doubled);
console.log(Number("18") + 2);
console.log("18" + 2);
~~~

### Sample 2

~~~js
let total = 10;
total += 5;
total *= 2;

console.log(total);
~~~

### Sample 3

~~~js
console.log(5 === "5");
console.log(5 !== "5");
console.log(5 == "5");
~~~

### Sample 4

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

### Sample 5

~~~js
const tasks = [];

if (tasks.length === 0) {
  console.log("There are no tasks yet");
}
~~~

### Sample 6

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

### Sample 7

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

### Sample 8

~~~js
const itemCount = 3;
const label = itemCount === 1 ? "item" : "items";

console.log(itemCount + " " + label);
~~~

### Sample 9

~~~js
const account = { active: true };

function hasPermission() {
  console.log("Permission check ran");
  return true;
}

const canOpenPage = account.active && hasPermission();
console.log(canOpenPage);
~~~

### Sample 10

~~~js
const savedPageSize = 0;
const pageSize = savedPageSize ?? 20;

console.log(pageSize);
~~~

### Sample 11

~~~js
const prices = [4, 7, 9];
let total = 0;

for (const price of prices) {
  total += price;
}

console.log(total);
~~~

### Sample 12

~~~js
let attempts = 0;

while (attempts < 3) {
  console.log("Attempt " + (attempts + 1));
  attempts += 1;
}
~~~

## Source chapter: [Functions and closures](./04-functions-and-closures.md)

### Sample 1

~~~js
function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(12.5, 3);
console.log(total);
~~~

### Sample 2

~~~js
function greet(name = "friend") {
  return "Hello, " + name;
}

console.log(greet("Mira"));
console.log(greet());
~~~

### Sample 3

~~~js
function logMessage(message) {
  console.log(message);
}

const result = logMessage("Saved");
console.log(result);
~~~

### Sample 4

~~~js
const double = function (number) {
  return number * 2;
};

const triple = (number) => number * 3;

console.log(double(4));
console.log(triple(4));
~~~

### Sample 5

~~~js
const isLongName = (name) => name.length > 8;
const makeLabel = (name) => {
  const cleaned = name.trim();
  return "Member: " + cleaned;
};

console.log(isLongName("JavaScript"));
console.log(makeLabel(" Mira "));
~~~

### Sample 6

~~~js
function applyDiscount(price, discountRule) {
  return discountRule(price);
}

const salePrice = applyDiscount(100, (price) => price * 0.8);
console.log(salePrice);
~~~

### Sample 7

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

### Sample 8

~~~js
function createGreeter(greeting) {
  return (name) => greeting + ", " + name;
}

const sayHello = createGreeter("Hello");
console.log(sayHello("Mira"));
~~~

### Sample 9

~~~js
function formatPrice(amount, currency = "USD") {
  return currency + " " + amount.toFixed(2);
}

console.log(formatPrice(19.5));
console.log(formatPrice(19.5, "EUR"));
~~~

## Source chapter: [Arrays and iteration](./05-arrays-and-iteration.md)

### Sample 1

~~~js
const colors = ["black", "white", "orange"];

console.log(colors[0]);
console.log(colors[colors.length - 1]);

colors[1] = "gray";
console.log(colors);
~~~

### Sample 2

~~~js
const tasks = ["read", "practise"];

tasks.push("review");
const lastTask = tasks.pop();

console.log(tasks);
console.log(lastTask);
~~~

### Sample 3

~~~js
const scores = [72, 85, 91];

for (const score of scores) {
  console.log(score);
}
~~~

### Sample 4

~~~js
const letters = ["a", "b", "c"];

for (let index = 0; index < letters.length; index += 1) {
  console.log(index, letters[index]);
}
~~~

### Sample 5

~~~js
const prices = [10, 20, 30];
const pricesWithTax = prices.map((price) => price * 1.1);

console.log(pricesWithTax);
console.log(prices);
~~~

### Sample 6

~~~js
const scores = [48, 76, 91, 65];
const passingScores = scores.filter((score) => score >= 60);
const firstHighScore = scores.find((score) => score >= 90);

console.log(passingScores);
console.log(firstHighScore);
~~~

### Sample 7

~~~js
const ages = [22, 31, 27];

console.log(ages.some((age) => age < 18));
console.log(ages.every((age) => age >= 18));
~~~

### Sample 8

~~~js
const expenses = [12, 8, 15];
const total = expenses.reduce((sum, amount) => sum + amount, 0);

console.log(total);
~~~

### Sample 9

~~~js
const original = ["a", "b"];
const copy = [...original];

copy.push("c");

console.log(original);
console.log(copy);
~~~

### Sample 10

~~~js
const values = [40, 5, 100, 12];
const sortedValues = [...values].sort((left, right) => left - right);

console.log(sortedValues);
console.log(values);
~~~

### Sample 11

~~~js
const members = [
  { name: "Mira", score: 88 },
  { name: "Noor", score: 95 },
  { name: "Kai", score: 72 },
];

const rankedMembers = [...members].sort((a, b) => b.score - a.score);
console.log(rankedMembers);
~~~

### Sample 12

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

## Source chapter: [Objects and properties](./06-objects-and-properties.md)

### Sample 1

~~~js
const member = {
  name: "Mira",
  role: "developer",
  active: true,
};

console.log(member.name);
console.log(member["role"]);
~~~

### Sample 2

~~~js
const settings = { theme: "dark" };
settings.fontSize = 16;
settings.theme = "monochrome";
delete settings.fontSize;

console.log(settings);
~~~

### Sample 3

~~~js
const field = "email";
const profile = {
  name: "Kai",
  [field]: "kai@example.com",
};

console.log(profile.email);
~~~

### Sample 4

~~~js
const order = { customer: { name: "Noor" } };

console.log(order.customer.name);
console.log(order.delivery?.city);
~~~

### Sample 5

~~~js
const preferences = { pageSize: 0 };
const pageSize = preferences.pageSize ?? 20;

console.log(pageSize);
~~~

### Sample 6

~~~js
const product = { name: "Notebook", price: 5 };
const { name, price } = product;

console.log(name);
console.log(price);
~~~

### Sample 7

~~~js
const account = { displayName: "Sam" };
const { displayName: label, avatar = "default.png" } = account;

console.log(label);
console.log(avatar);
~~~

### Sample 8

~~~js
const defaults = { theme: "dark", pageSize: 20 };
const preferences = { ...defaults, pageSize: 10 };

console.log(preferences);
console.log(defaults);
~~~

### Sample 9

~~~js
const user = {
  name: "Mira",
  settings: { theme: "dark" },
};

const renamedUser = { ...user, name: "Mira R." };

console.log(renamedUser.name);
console.log(renamedUser.settings === user.settings);
~~~

### Sample 10

~~~js
const settings = { theme: "dark" };

console.log("theme" in settings);
console.log(Object.hasOwn(settings, "theme"));
console.log(Object.hasOwn(settings, "toString"));
~~~

### Sample 11

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

## Source chapter: [Prototypes and classes](./07-prototypes-and-classes.md)

### Sample 1

~~~js
const animal = {
  speak() {
    return "A sound";
  },
};

const dog = Object.create(animal);
dog.name = "Rex";

console.log(dog.name);
console.log(dog.speak());
console.log(Object.getPrototypeOf(dog) === animal);
~~~

### Sample 2

~~~js
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  describe() {
    return this.title + " by " + this.author;
  }
}

const book = new Book("Small Steps", "Mira");
console.log(book.describe());
~~~

### Sample 3

~~~js
class Counter {
  #value = 0;

  increment() {
    this.#value += 1;
  }

  get value() {
    return this.#value;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.value);
~~~

### Sample 4

~~~js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a sound";
  }
}

class Dog extends Animal {
  speak() {
    return this.name + " barks";
  }
}

const pet = new Dog("Rex");
console.log(pet.speak());
~~~

### Sample 5

~~~js
const engine = {
  start() {
    return "Engine started";
  },
};

const car = {
  engine,
  start() {
    return this.engine.start();
  },
};

console.log(car.start());
~~~

## Source chapter: [Built-in collections](./08-built-in-collections.md)

### Sample 1

~~~js
const visits = new Map();

visits.set("home", 12);
visits.set("notes", 5);

console.log(visits.get("home"));
console.log(visits.has("about"));
console.log(visits.size);
~~~

### Sample 2

~~~js
const userVisits = new Map();
const firstUser = { id: 1 };

userVisits.set(firstUser, 3);
console.log(userVisits.get(firstUser));
~~~

### Sample 3

~~~js
const counts = new Map();
counts.set({ id: 1 }, 10);

console.log(counts.get({ id: 1 }));
~~~

### Sample 4

~~~js
const tags = new Set(["javascript", "web", "javascript"]);

tags.add("browser");
tags.add("web");

console.log(tags.size);
console.log([...tags]);
~~~

### Sample 5

~~~js
const requestedIds = [4, 8, 4, 2, 8];
const uniqueIds = [...new Set(requestedIds)];

console.log(uniqueIds);
~~~

### Sample 6

~~~js
const stock = new Map([
  ["notebooks", 12],
  ["pens", 30],
]);

for (const [item, quantity] of stock) {
  console.log(item, quantity);
}
~~~

### Sample 7

~~~js
const privateDetails = new WeakMap();
const account = { name: "Mira" };

privateDetails.set(account, { tokenLabel: "primary" });
console.log(privateDetails.get(account));
~~~

## Source chapter: [Strings, numbers, dates, and regular expressions](./09-strings-numbers-dates-and-regex.md)

### Sample 1

~~~js
const rawName = "  Mira Ranjan  ";
const name = rawName.trim();

console.log(name);
console.log(name.toLowerCase());
console.log(name.includes("Ranjan"));
console.log(rawName);
~~~

### Sample 2

~~~js
const item = "notebook";
const quantity = 3;
const message = "You have " + quantity + " " + item + "s";

console.log(message);
~~~

### Sample 3

~~~js
const total = 0.1 + 0.2;
console.log(total);
console.log(Number.isFinite(total));
~~~

### Sample 4

~~~js
const rawQuantity = "12";
const quantity = Number(rawQuantity);

if (Number.isFinite(quantity) && quantity >= 0) {
  console.log(quantity);
} else {
  console.log("Enter a valid quantity");
}
~~~

### Sample 5

~~~js
console.log(Number("12 items"));
console.log(parseInt("101", 2));
console.log(parseFloat("12.5px"));
~~~

### Sample 6

~~~js
const amount = 1234567.5;
const formatted = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
}).format(amount);

console.log(formatted);
~~~

### Sample 7

~~~js
const date = new Date("2026-10-04T12:30:00Z");
const formattedDate = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Asia/Kolkata",
}).format(date);

console.log(formattedDate);
~~~

### Sample 8

~~~js
const createdAt = new Date("2026-10-04T12:30:00Z");

console.log(createdAt.toISOString());
console.log(createdAt.getTime());
~~~

### Sample 9

~~~js
const postalCodePattern = /^\d{6}$/;
const postalCode = "560001";

console.log(postalCodePattern.test(postalCode));
~~~

### Sample 10

~~~js
const orderPattern = /^ORDER-(\d+)$/;
const match = "ORDER-204".match(orderPattern);

if (match) {
  console.log(match[1]);
}
~~~

## Source chapter: [Errors and debugging](./10-errors-and-debugging.md)

### Sample 1

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

### Sample 2

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

### Sample 3

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

### Sample 4

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

### Sample 5

~~~js
function calculateAverage(values) {
  const total = values.reduce((sum, value) => sum + value, 0);
  return total / values.length;
}

console.log(calculateAverage([4, 8]));
console.log(calculateAverage([]));
~~~

## Source chapter: [The DOM and page updates](./11-dom-and-page-updates.md)

### Sample 1

~~~html
<h1 id="page-title">Welcome</h1>
<p class="status">Loading</p>
~~~

### Sample 2

~~~js
const title = document.querySelector("#page-title");
const status = document.querySelector(".status");

if (title && status) {
  title.textContent = "JavaScript notes";
  status.textContent = "Ready";
}
~~~

### Sample 3

~~~js
const items = document.querySelectorAll(".note");

for (const item of items) {
  item.classList.add("is-visible");
}
~~~

### Sample 4

~~~js
const message = document.querySelector("#message");

if (message) {
  message.textContent = "Saved successfully";
  message.classList.add("success");
  message.setAttribute("aria-live", "polite");
}
~~~

### Sample 5

~~~html
<ul id="note-list"></ul>
~~~

### Sample 6

~~~js
const notes = ["Variables", "Functions", "Arrays"];
const list = document.querySelector("#note-list");

if (list) {
  for (const note of notes) {
    const item = document.createElement("li");
    item.textContent = note;
    list.append(item);
  }
}
~~~

### Sample 7

~~~js
const list = document.querySelector("#note-list");

if (list) {
  const item = document.createElement("li");
  item.textContent = "New note";
  list.replaceChildren(item);
}
~~~

### Sample 8

~~~js
const comment = document.querySelector("#comment");
const userText = "<img src=x onerror=alert(1)>";

if (comment) {
  comment.textContent = userText;
}
~~~

### Sample 9

~~~html
<p id="save-status" role="status" aria-live="polite"></p>
~~~

### Sample 10

~~~js
const saveStatus = document.querySelector("#save-status");

if (saveStatus) {
  saveStatus.textContent = "Your changes are saved";
}
~~~

## Source chapter: [Events and forms](./12-events-and-forms.md)

### Sample 1

~~~html
<button id="save-button" type="button">Save</button>
<p id="save-status" role="status"></p>
~~~

### Sample 2

~~~js
const button = document.querySelector("#save-button");
const status = document.querySelector("#save-status");

button?.addEventListener("click", (event) => {
  status.textContent = "Saved";
  console.log(event.currentTarget);
});
~~~

### Sample 3

~~~html
<ul id="topics">
  <li><button data-topic="arrays">Arrays</button></li>
  <li><button data-topic="objects">Objects</button></li>
</ul>
~~~

### Sample 4

~~~js
const topics = document.querySelector("#topics");

topics?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-topic]");

  if (!button || !topics.contains(button)) {
    return;
  }

  console.log(button.dataset.topic);
});
~~~

### Sample 5

~~~html
<form id="signup-form">
  <label>
    Email
    <input name="email" type="email" required>
  </label>
  <button type="submit">Join</button>
  <p id="form-status" role="status"></p>
</form>
~~~

### Sample 6

~~~js
const form = document.querySelector("#signup-form");
const formStatus = document.querySelector("#form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = String(formData.get("email") ?? "").trim();

  if (!email) {
    formStatus.textContent = "Enter an email address.";
    return;
  }

  formStatus.textContent = "Ready to submit " + email;
});
~~~

### Sample 7

~~~html
<label for="display-name">Display name</label>
<input id="display-name" name="displayName" maxlength="30">
<p id="name-count" aria-live="polite"></p>
~~~

### Sample 8

~~~js
const nameInput = document.querySelector("#display-name");
const nameCount = document.querySelector("#name-count");

nameInput?.addEventListener("input", () => {
  nameCount.textContent = nameInput.value.length + " of 30 characters";
});
~~~

### Sample 9

~~~js
function handleKeydown(event) {
  if (event.key === "Escape") {
    console.log("Close the panel");
  }
}

document.addEventListener("keydown", handleKeydown);

// Later, when this behavior is no longer needed:
document.removeEventListener("keydown", handleKeydown);
~~~

## Source chapter: [Asynchronous JavaScript](./13-asynchronous-javascript.md)

### Sample 1

~~~js
console.log("First");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

console.log("Second");
~~~

### Sample 2

~~~js
console.log("Start");

Promise.resolve().then(() => console.log("Promise callback"));
setTimeout(() => console.log("Timer callback"), 0);

console.log("Finish");
~~~

### Sample 3

~~~js
function waitForMessage() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Ready"), 300);
  });
}

waitForMessage()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
~~~

### Sample 4

~~~js
Promise.resolve(5)
  .then((value) => value * 2)
  .then((value) => {
    if (value > 8) {
      throw new Error("Value is too large");
    }
    return value;
  })
  .catch((error) => {
    console.error(error.message);
    return 0;
  })
  .then((value) => console.log(value));
~~~

### Sample 5

~~~js
function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function showStatus() {
  console.log("Working");
  await wait(300);
  console.log("Done");
}

showStatus();
~~~

### Sample 6

~~~js
async function loadMessage() {
  try {
    const message = await waitForMessage();
    console.log(message);
  } catch (error) {
    console.error("Could not load the message", error);
  }
}

loadMessage();
~~~

### Sample 7

~~~js
function loadProfile() {
  return Promise.resolve({ name: "Mira" });
}

function loadPreferences() {
  return Promise.resolve({ theme: "dark" });
}

async function loadPageData() {
  const [profile, preferences] = await Promise.all([
    loadProfile(),
    loadPreferences(),
  ]);

  console.log(profile.name, preferences.theme);
}

loadPageData();
~~~

### Sample 8

~~~js
async function main() {
  try {
    await loadPageData();
  } catch (error) {
    console.error("Page setup failed", error);
  }
}

main();
~~~

## Source chapter: [JavaScript modules](./14-javascript-modules.md)

### Sample 1

~~~js
// math.js
export function add(left, right) {
  return left + right;
}

export const taxRate = 0.1;
~~~

### Sample 2

~~~js
// app.js
import { add, taxRate } from "./math.js";

console.log(add(20, 5));
console.log(taxRate);
~~~

### Sample 3

~~~js
// greeting.js
export default function greet(name) {
  return "Hello, " + name;
}
~~~

### Sample 4

~~~js
// app.js
import greet from "./greeting.js";

console.log(greet("Mira"));
~~~

### Sample 5

~~~html
<script type="module" src="./app.js"></script>
~~~

### Sample 6

~~~js
import { taxRate as defaultTaxRate } from "./math.js";

console.log(defaultTaxRate);
~~~

### Sample 7

~~~js
export { add, taxRate } from "./math.js";
~~~

### Sample 8

~~~js
async function openAdvancedPanel() {
  const panelModule = await import("./advanced-panel.js");
  panelModule.showPanel();
}

openAdvancedPanel();
~~~

### Sample 9

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

## Source chapter: [HTTP requests with Fetch](./15-http-requests-with-fetch.md)

### Sample 1

~~~js
async function loadProfile(id) {
  const response = await fetch("/api/profiles/" + id);

  if (!response.ok) {
    throw new Error("Request failed with status " + response.status);
  }

  return response.json();
}

loadProfile(42)
  .then((profile) => console.log(profile))
  .catch((error) => console.error(error.message));
~~~

### Sample 2

~~~js
async function searchProducts(searchTerm) {
  const url = new URL("/api/products", window.location.origin);
  url.searchParams.set("search", searchTerm);
  url.searchParams.set("limit", "10");

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Search failed with status " + response.status);
  }

  return response.json();
}

searchProducts("dark notebooks").then(console.log);
~~~

### Sample 3

~~~js
async function createNote(note) {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(note),
  });

  if (!response.ok) {
    throw new Error("Could not save the note");
  }

  return response.json();
}

createNote({ title: "Arrays", pinned: false }).then(console.log);
~~~

### Sample 4

~~~js
const controller = new AbortController();

fetch("/api/search?q=arrays", { signal: controller.signal })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Search failed");
    }
    return response.json();
  })
  .then(console.log)
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("The request was cancelled");
    } else {
      console.error(error);
    }
  });

// Call this when the result is no longer needed:
controller.abort();
~~~

### Sample 5

~~~js
async function refreshNotes() {
  setLoading(true);
  setError("");

  try {
    const response = await fetch("/api/notes");

    if (!response.ok) {
      throw new Error("Could not load notes");
    }

    const notes = await response.json();
    renderNotes(notes);
  } catch (error) {
    setError(error.message);
  } finally {
    setLoading(false);
  }
}
~~~

## Source chapter: [Browser storage and safe patterns](./16-browser-storage-and-safe-patterns.md)

### Sample 1

~~~js
localStorage.setItem("theme", "dark");

const theme = localStorage.getItem("theme");
console.log(theme);

localStorage.removeItem("theme");
~~~

### Sample 2

~~~js
const preferences = { theme: "dark", pageSize: 20 };
localStorage.setItem("preferences", JSON.stringify(preferences));

const savedText = localStorage.getItem("preferences");
const savedPreferences = savedText ? JSON.parse(savedText) : null;

console.log(savedPreferences);
~~~

### Sample 3

~~~js
function readTheme() {
  try {
    const saved = localStorage.getItem("theme");

    if (saved === "dark" || saved === "light") {
      return saved;
    }
  } catch (error) {
    console.warn("Browser storage is unavailable", error);
  }

  return "dark";
}

console.log(readTheme());
~~~

### Sample 4

~~~js
const noteTitle = localStorage.getItem("note-title") ?? "Untitled";
const heading = document.querySelector("#note-title");

if (heading) {
  heading.textContent = noteTitle;
}
~~~

### Sample 5

~~~js
function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

const savedFilters = readJson("filters", {});
console.log(savedFilters);
~~~
