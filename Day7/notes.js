// 1. Introduction to Functions
function sayHello() {
    console.log("Hello, World!");
}
sayHello(); // Hello, World!

function greet() {
    console.log("Welcome to JavaScript!");
}
greet(); // Welcome to JavaScript!

function showMessage() {
    console.log("Learning functions is fun!");
}
showMessage(); // Learning functions is fun!

function introduction() {
    console.log("My name is JavaScript");
    console.log("I was created in 1995");
    console.log("I run in browsers");
}
introduction();

// 2. Functions with Arguments
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("Alice");
greetUser("Bob");
greetUser("Charlie");

function addNumbers(a, b) {
    let sum = a + b;
    console.log("Sum is: " + sum);
}
addNumbers(5, 3);
addNumbers(10, 20);

function calcAverage(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}
calcAverage(10, 20, 30);
calcAverage(85, 90, 95);

function createMessage(name, age) {
    console.log(name + " is " + age + " years old");
}
createMessage("Sarah", 25);
createMessage("Tom", 30);

function calculateArea(length, width) {
    let area = length * width;
    console.log("Area is: " + area);
}
calculateArea(5, 10);
calculateArea(7, 3);

// 3. The return Keyword
function sum(a, b) {
    return a + b;
}
let result = sum(10, 5);
console.log(result);
let total = sum(100, 200);
console.log(total);

function multiply(x, y) {
    return x * y;
}
let answer = multiply(4, 5);
console.log(answer);
console.log(multiply(3, 7));

function test() {
    return 10;
    return 20; // ignored
}
let value = test();
console.log(value);

function getPrice() {
    return 50;
}
let price = getPrice();
let tax = price * 0.1;
let totalPrice = price + tax;
console.log(totalPrice);

// 4. Understanding Scope
function getGreeting(name) {
    return "Hello, " + name;
}
let message = getGreeting("Alice");
console.log(message);
console.log(getGreeting("Bob"));

function showScore() {
    let score = 100;
    console.log(score);
}
showScore();
// console.log(score); // Error

function func1() {
    let x = 10;
    console.log(x);
}
function func2() {
    let x = 20;
    console.log(x);
}
func1();
func2();

if (true) {
    let temp = 42;
    console.log(temp);
}
// console.log(temp); // Error

for (let i = 0; i < 3; i++) {
    console.log(i);
}
// console.log(i); // Error

// 5. Lexical Scope
function outer() {
    let x = 5;
    function inner() {
        console.log(x);
    }
    inner();
}
outer();

function level1() {
    let a = 10;
    function level2() {
        let b = 20;
        function level3() {
            console.log(a); // 10
            console.log(b); // 20
        }
        level3();
    }
    level2();
}
level1();

function greetLexical(name) {
    function createMessage() {
        return "Hello, " + name;
    }
    console.log(createMessage());
}
greetLexical("Alice");

// 6. Function Expressions
const multiplyExpr = function(a, b) {
    return a * b;
};
console.log(multiplyExpr(4, 5));
console.log(multiplyExpr(10, 3));

const sayHi = function(name) {
    console.log("Hi, " + name + "!");
};
sayHi("Tom");
sayHi("Sarah");

const square = (num) => num * num;
console.log(square(5));
console.log(square(10));

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log(add(10, 5));
console.log(subtract(10, 5));

// Higher-Order Functions
function repeatTask(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}
const alertUser = () => console.log("Alert!");
repeatTask(alertUser, 3);

function applyDiscount(price, discountFunc) {
    return discountFunc(price);
}
const tenPercent = (price) => price * 0.9;
const twentyPercent = (price) => price * 0.8;
console.log(applyDiscount(100, tenPercent));
console.log(applyDiscount(100, twentyPercent));

function calculate(a, b, operation) {
    return operation(a, b);
}
const multiplyOp = (x, y) => x * y;
console.log(calculate(5, 3, add));
console.log(calculate(5, 3, multiplyOp));

function processArray(arr, processor) {
    for (let i = 0; i < arr.length; i++) {
        processor(arr[i]);
    }
}
const printDouble = (num) => console.log(num * 2);
processArray([1, 2, 3], printDouble);

// 8. Methods
const car = {
    brand: "Tesla",
    start: function() { console.log("Engine on"); },
    stop: function() { console.log("Engine off"); }
};
car.start();
car.stop();

const mathTools = {
    add(a, b) { return a + b; },
    subtract(a, b) { return a - b; }
};
console.log(mathTools.add(5, 3));
console.log(mathTools.subtract(10, 4));

const calculator = {
    add(a, b) { return a + b; },
    multiply(a, b) { return a * b; }
};
console.log(calculator.add(10, 5));
console.log(calculator.multiply(4, 7));

const person = {
    name: "Alice",
    greet() { console.log("Hello, I am " + this.name); },
    sayAge(age) { console.log("I am " + age + " years old"); }
};
person.greet();
person.sayAge(25);

const account = {
    balance: 1000,
    deposit(amount) {
        this.balance += amount;
        console.log("New balance: " + this.balance);
    },
    withdraw(amount) {
        this.balance -= amount;
        console.log("New balance: " + this.balance);
    }
};
account.deposit(500);
account.withdraw(200);

const formatter = {
    toUpper(str) { return str.toUpperCase(); },
    toLower(str) { return str.toLowerCase(); },
    trim(str) { return str.trim(); }
};
console.log(formatter.toUpper("hello"));
console.log(formatter.toLower("WORLD"));
console.log(formatter.trim("  spaces  "));

const counter = {
    count: 0,
    increment() {
        this.count++;
        console.log("Count: " + this.count);
    },
    reset() {
        this.count = 0;
        console.log("Counter reset");
    }
};
counter.increment();
counter.increment();
counter.reset();
