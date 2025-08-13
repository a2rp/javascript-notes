export const notes = [
    {
        id: 1,
        title: "Hoisting",
        content: [
            "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.",
            "This means variables and functions can be used before they are declared.",
        ],
        examples: [
            {
                description: "Example of variable hoisting",
                code: `console.log(a); // undefined
var a = 5;`,
            },
            {
                description: "Example of function hoisting",
                code: `sayHello(); // Hello
function sayHello() {
  console.log("Hello");
}`,
            },
        ],
    },
    {
        id: 2,
        title: "Closure",
        content: [
            "A closure is the combination of a function and the lexical environment within which that function was declared.",
            "Closures allow a function to access variables from an enclosing scope, even after that scope has closed.",
        ],
        examples: [
            {
                description: "Example of closure in action",
                code: `function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}
const add = outer();
add(); // 1
add(); // 2`,
            },
        ],
    },
];
