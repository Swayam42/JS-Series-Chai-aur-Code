/*datatypes divided on the basis of how they are stored in memory and accessed 
2 categories : primitive and non-primitive

Primitive (call by value)(7 categories):
1.String
2.Number
3.Boolean
4.Null
5.Undefined
6.Symbol - to make any value unique 
7.BigInt- larger than Number 

Non-Primitive(Reference Type)
1.Arrays
2.Objects
3.Functions

*/

//JavaScript is dynamically typed
//coz we dont need to declare the datatype of variable as JS figures it out at run-time

let x=34; // here we stored 34 in x
x="String" // here we stored a String value in x
//so a variable can hold any type of data and change its type afterward

//syntax of Symbol :
 const Id=Symbol("123");
 const anotherId=Symbol("123");
console.log(Id===anotherId);//false -as Symbols are guaranteed to be unique, even if their descriptions are the same.



const a="123"
const b="123"
console.log(a===b);//true

//Array :
const heroes=["shaktiman","naagraj"];

//Object :
let myObj={
    
    name:"Swayam",
    age: 19,
}

//function
//can be treated as a variable
const myFunction=function(){
    console.log("kyaa re");
}

console.log(typeof heroes);
//arrays and objects : type of object
//function :type of functionObject
