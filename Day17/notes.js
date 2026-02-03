// JavaScript Hoisting and Variable Declarations 


//  Part 1: Hoisting Basics 
getName();
console.log(x);

var x = 7;

function getName() {
  console.log("Namaste JavaScript");
}


//  undefined vs not defined 
getName2();
console.log(y);

var y = 10;

function getName2() {
  console.log("Hello");
}

// Uncomment to see ReferenceError
// console.log(z);


//  Part 2: Function Hoisting 
console.log(showName);
showName();

function showName() {
  console.log("Function Hoisted");
}


//  Arrow Function Hoisting 
console.log(arrowFunc);
// arrowFunc(); // TypeError

var arrowFunc = () => {
  console.log("Arrow Function");
};


//  Function Expression Hoisting 
console.log(exprFunc);
// exprFunc(); // TypeError

var exprFunc = function () {
  console.log("Function Expression");
};


//  Part 3: var vs let
console.log(a); // undefined
var a = 10;

// Uncomment to see TDZ error
// console.log(b);
let b = 20;


//  const Hoisting & TDZ 
// Uncomment to see TDZ error
// console.log(c);
const c = 30;


//  Global Object 
var globalVar = "I am global";
let blockVar = "I am block scoped";
const constVar = "I am const scoped";

console.log(window.globalVar);
// console.log(window.blockVar); // undefined
// console.log(window.constVar); // undefined


//  Temporal Dead Zone
/*
console.log(tdzVar); // ReferenceError
let tdzVar = 100;
*/
let tdzVar = 100;
console.log(tdzVar);


//  Redeclaration Rules 
var r = 1;
var r = 2;

let l = 1;
// let l = 2; // SyntaxError

const k = 5;
// const k = 10; // SyntaxError


//  Reassignment Rules 
let count = 0;
count = 1;

const PI = 3.14;
// PI = 3.1415; // TypeError


//  Const with Objects 
const person = {
  name: "John",
  age: 30
};

person.age = 31;
person.city = "New York";
console.log(person);

// person = { name: "Jane" }; // TypeError


//  Mixed Hoisting 
console.log(m); // undefined
// console.log(n); // ReferenceError

var m = 10;
let n = 20;


// Function Types Comparison 
greet();

function greet() {
  console.log("Hello!");
}

// sayHi(); // TypeError
var sayHi = () => {
  console.log("Hi!");
};

// welcome(); // TypeError
var welcome = function () {
  console.log("Welcome!");
};
