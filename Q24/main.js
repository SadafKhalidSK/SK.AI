// Q24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
//  write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// //  loWER CASE
var titleCase = "Sadaf";
console.log(titleCase.toLowerCase() == "sadaf");
// // numerical test  EQUALITY
var a = 3;
var b = 5;
console.log(a == b);
// // numerical test  INEQUALITY
var a1 = 3;
var b1 = 5;
console.log(a1 !== b1);
// // numerical test  greater than
var c = 3;
var d = 4;
console.log(c <= d);
//.....// • Tests using "and" and "or" operators
var condition1 = true;
var condition2 = false;
console.log(condition1 || condition2);
var condition3 = true;
var condition4 = false;
console.log(condition3 && condition4);
//// • Test whether an item is in a array
var people = ['sana', 'sara', 'ali'];
console.log(people);
console.log(people.indexOf('ali'));
//-1 means not include in arry 
var peoples = ['sana', 'sara', 'ali'];
console.log(peoples);
console.log(peoples.indexOf('atif') == -1);
