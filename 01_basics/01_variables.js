//we may or may not use semi-colon to end line 
const accountId=78792 //only way to declare constant value

/*
2 ways to declare variables :
var :(used in earlier times)an behave strangely and cause
     hidden errors, especially in loops or conditional blocks.
SO PREFER NOT TO USE var (issues in block scope )
let : (used now) its block scoped , safer and less buggy
*/

let accountEmail ="user@gmail.com" 
var accountPassword="123456"
accountCity ="Bhubaneswar"//another way to declare variable and reserve memory without mentioning anything ....this is also not preffered 
let accountState;
console.log("Initially : ");
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
/*accountId=2 //we cant change the value of const type of datas
console.log(accountId); //TypeError: Assignment to constant variable.
*/ 
//here updating the variables :
accountEmail="kya@gmail.com"
accountPassword="654321"
accountCity="Puri"
console.log("After Update (printing the values in tabular form): ");
console.table([accountId,accountEmail,accountPassword,accountPassword,accountState]);
/*
<-- Output -- > 

Initially : 
user@gmail.com
123456
Bhubaneswar
After Update (printing the values in tabular form): 
─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 78792           │
│ 1       │ 'kya@gmail.com' │
│ 2       │ '654321'        │
│ 3       │ '654321'        │
│ 4       │ undefined       │ // if we declare a variable and dont pass any value ... it is undefined
└─────────┴─────────────────┘
*/





