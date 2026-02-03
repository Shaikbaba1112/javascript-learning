// JavaScript Hoisting – ASSIGNMENT PROGRAMS


//  Assignment 1: var Hoisting
console.log(a);
var a = 10;
console.log(a);


//  Assignment 2: let Hoisting
// console.log(b);
let b = 20;
console.log(b);


//  Assignment 3: const Hoisting
// console.log(c);
const c = 30;
console.log(c);


//  Assignment 4: Function Declaration
hello();
function hello() {
  console.log("Hello World");
}


//  Assignment 5: Function Expression 
/*
welcome();
*/
var welcome = function () {
  console.log("Welcome");
};


//  Assignment 6: Arrow Function 
/*
sayHi();
*/
var sayHi = () => {
  console.log("Hi");
};


//  Assignment 7: Mixed Hoisting 
console.log(x);
var x = 5;

console.log(y);
let y = 15;


//  Assignment 8: TDZ Example 
/*
console.log(z);
*/
let z = 100;


//  Assignment 9: Redeclaration 
var p = 1;
var p = 2;
console.log(p);

/*
let q = 1;
let q = 2;
*/


//  Assignment 10: Reassignment 
let counter = 0;
counter = 1;
console.log(counter);

const MAX = 10;
/*
MAX = 20;
*/


//  Assignment 11: Global Object 
var gv = "Global Var";
let lv = "Let Var";
const cv = "Const Var";

console.log(window.gv);
// console.log(window.lv);
// console.log(window.cv);


//  Assignment 12: Function vs Variable 
console.log(testFunc);
function testFunc() {
  console.log("Test Function");
}

console.log(testVar);
var testVar = function () {
  console.log("Test Variable");
};


//  Assignment 13: Order Prediction 
console.log("Start");
var num = 10;
function show() {
  console.log(num);
}
show();
console.log("End");


//  Assignment 14: Block Scope 
{
  var a1 = 10;
  let b1 = 20;
  const c1 = 30;
}
console.log(a1);
// console.log(b1);
// console.log(c1);


//  Assignment 15: const Object 
const student = { name: "Baba", marks: 90 };
student.marks = 95;
console.log(student);
// student = {}; // Error
