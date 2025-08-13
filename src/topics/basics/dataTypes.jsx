import React from "react";
import CodeEditor from "../../components/CodeEditor";

export default function DataTypesTopic() {
    return (
        <div>
            <h2>JavaScript Data Types</h2>
            <p>
                JS me <b>primitive</b> (string, number, boolean, undefined, null, symbol, bigint)
                aur <b>reference</b> (object, array, function, date, etc.) types hote hain.
            </p>
            <p>
                ⚠️ Quirk: <code>typeof null</code> <b>"object"</b> deta hai. Arrays ke liye{" "}
                <code>Array.isArray()</code> use karo.
            </p>

            <CodeEditor
                defaultCode={`// Primitive
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
console.log(typeof fn);   // function`}
            />
        </div>
    );
}
