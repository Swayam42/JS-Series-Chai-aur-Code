console.log(2>1); //true
console.log(2!=2);
console.log(2>=1);
console.log(1<=2);

console.log("2">1);//js automatically converts "2" to num and compares
//js is not stric as typescript
 console.log("02">1);//js automatically converts "02" to num and compares


//avoid these type of comparisons : 
 console.log(null<0);//false
 console.log(null==0);//false "==" is loose equality (but NOT numeric comparison directly)
 console.log(null<=0);//true
console.log(undefined==0);//false
console.log(undefined<=0);//false
 

 //=== strict equality (triple equals)
console.log("3"===1);//checks the data type


 
 
 
 


