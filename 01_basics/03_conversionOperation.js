"use strict";
//we can use typeof in both ways :
let temp="Kya Haal Hai ?";
console.log("temp= "+temp);
//typecasting number as string to number
console.log("Type of temp : "+typeof temp);//"33" as a string
console.log("Type of temp : "+typeof (temp));//we can also use paranthesis to give parameter so that typeof acts as a function 
//Example 1:Converting a string number to actual Number
let score = "33";
console.log("\nScore (as string):", score);
console.log("Type of score:", typeof score);

let valueInNumber = Number(score);
console.log("After typecasting to Number:", valueInNumber);
console.log("Type of valueInNumber:", typeof valueInNumber);

// Example 2: Trying to convert alphanumeric string
let x = "33xyz";
console.log("\nAlphanumeric string x:", x);

let y = Number(x);
console.log("After typecasting x to Number:", y); // NaN-NotaNumber
console.log("Type of y:", typeof y); //type- number

// Example 3: Converting null to Number
let a = null;
console.log("\nValue of a:", a);

let b = Number(a);
console.log("After typecasting a to Number:", b); // 0
console.log("Type of b:", typeof b); //type : number

// Example 4: Converting undefined to Number
let guru = undefined;
console.log("\nValue of guru:", guru);
let sis = Number(guru);
console.log("After typecasting guru(undefined) to Number:", sis); // NaN
console.log("Type of sis:", typeof sis); //type : number

// Example 5: Converting boolean to Number
let khanaKhaya =false;
console.log("\nValue of khanaKhaya ?:", khanaKhaya);
let ji = Number(khanaKhaya);
console.log("After typecasting boolean to Number:", ji); // 0(for false) and 1(for true)
console.log("Type of sis:", typeof ji); //type : number

//number typecasted to boolean :  0 : false and Z - {0} : true
let loggedIn=1;
let booleanIsLoggedIn=Boolean(loggedIn);
console.log(booleanIsLoggedIn); //true

//string typecasted to boolean ... (empty str-false)  (str with val-true)
let loggedI="";
let booleanIsLoggedI=Boolean(loggedI);
console.log(booleanIsLoggedI); //false
