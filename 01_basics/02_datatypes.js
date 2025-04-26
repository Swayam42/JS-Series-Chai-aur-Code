"use strict"; //this line treats all JS code as newer version
/*
javascript ka engine, browser ke andar chupa hua hai
Every browser (like Chrome, Firefox, Safari) has a built-in JavaScript engine.

Chrome → V8 Engine
Firefox → SpiderMonkey
Safari → JavaScriptCore

alert(3+3); runs only in browser, not in Node.js
alert() is a browser-specific function → it shows a pop-up.
Node.js is a JavaScript runtime outside the browser — it doesn’t have alert() because there’s no window or browser.
In Node.js, you can use console.log(3+3); instead.
*/

//2 important docs to refer while learning 
// [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
// [ecma Script](https://tc39.es/)

//7 primitive data-types
let name="Swayam" //1.string- Sequence of characters
let age=19 //2.number- can be Integer/Float...can store value upto 2^53
let isDumb=true //3.boolean
let memory=null //4.null- a special keyword denoting null value (standalone value) 
let phoneNo=34240928044545356n //5.bigint (after writing a number, mention n to represent it as bigint)
let address //6.undefined- the variable whose value is not defined 
//7.symbol -a data type whose instance is unique and immutable

//object-collection of properties

console.log(typeof phoneNo); //typeof - an operator that tells the type of value / variable stored in it

console.log(typeof null); //null- object type 
console.log(typeof undefined); // undefined- undefined type

 

