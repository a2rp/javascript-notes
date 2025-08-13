import{j as o}from"./index-BD-dhyAQ.js";import{C as e}from"./CodeEditor-B-vvOjsZ.js";function s(){return o.jsxs("div",{children:[o.jsx("h2",{children:"JavaScript Data Types"}),o.jsxs("p",{children:["JS me ",o.jsx("b",{children:"primitive"})," (string, number, boolean, undefined, null, symbol, bigint) aur ",o.jsx("b",{children:"reference"})," (object, array, function, date, etc.) types hote hain."]}),o.jsxs("p",{children:["⚠️ Quirk: ",o.jsx("code",{children:"typeof null"})," ",o.jsx("b",{children:'"object"'})," deta hai. Arrays ke liye"," ",o.jsx("code",{children:"Array.isArray()"})," use karo."]}),o.jsx(e,{defaultCode:`// Primitive
const s = "Ashish";       // string
const n = 42;             // number
const bi = 123n;          // bigint
const b = true;           // boolean
let u;                    // undefined
const nl = null;          // null
const sym = Symbol("id"); // symbol

// Reference
const arr = [1,2,3];      // array (object)
const obj = { a: 1 };     // object
function fn() {}          // function (callable object)

// typeof checks
console.log(typeof s);    // string
console.log(typeof n);    // number
console.log(typeof bi);   // bigint
console.log(typeof b);    // boolean
console.log(typeof u);    // undefined
console.log(typeof nl);   // object   <-- quirk
console.log(typeof sym);  // symbol

console.log(typeof arr);  // object
console.log(Array.isArray(arr)); // true
console.log(typeof obj);  // object
console.log(typeof fn);   // function`})]})}export{s as default};
