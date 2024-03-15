// Q24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
//  write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// //  loWER CASE
let titleCase="Sadaf"
console.log(titleCase.toLowerCase()=="sadaf")
// // numerical test  EQUALITY
let a=3
let b=5

console.log(a==b)
// // numerical test  INEQUALITY
let a1=3
let b1=5

console.log(a1!==b1)
// // numerical test  greater than
let c:number=3
let d:number=4
console.log(c<= d)


//.....// • Tests using "and" and "or" operators

const condition1:boolean=true
 const condition2:boolean=false
 console.log(condition1||condition2)



 const condition3:boolean=true
 const condition4:boolean=false
 console.log(condition3&&condition4)

 //// • Test whether an item is in a array
 let people:string[]=['sana','sara','ali']
console.log(people)
console.log(people.indexOf('ali'))
//-1 means not include in arry 
let peoples:string[]=['sana','sara','ali']
console.log(peoples)
console.log(peoples.indexOf('atif')==-1)