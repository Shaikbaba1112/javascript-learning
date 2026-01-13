let userName = "Alice";    
let _count = 10;           
let $price = 99;           

let totalAmount = 500;   
let amount123 = 200;

let userAge = 25;
function calculateTotal() {}

class StudentDetails {
  constructor(name) {
    this.name = name;
  }
}

const MAX_LIMIT = 100;

let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn);     // true
console.log(hasPermission); // false

let data = 10;        // number
data = "Hello";      // string
data = true;         // boolean

console.log(data);   // true

let name1 = 'Alice';
let name2 = "Bob";
let name3 = `Charlie`;

console.log(name1);
console.log(name2);
console.log(name3);

let word = "JavaScript";

console.log(word[0]);                 // J
console.log(word[4]);                 // S
console.log(word[word.length - 1]);   // t

let firstName = "Alice";
let lastName = "Smith";

let fullName = firstName + " " + lastName;
console.log(fullName);  // Alice Smith

let value1;
let value2 = null;

console.log(value1);        // undefined
console.log(value2);        // null
console.log(typeof value1); // undefined
console.log(typeof value2); // object

console.log("Normal message");
console.warn("Warning message");
console.error("Error message");

let name = "Baba";
let age = 21;

let message = `My name is ${name} and I am ${age} years old`;
console.log(message);

let a = 10;
let b = 20;

console.log(a > b);   // false
console.log(a < b);   // true
console.log(a >= 10); // true
console.log(b <= 15); // false

console.log(5 == "5");   // true (type conversion)
console.log(5 === "5"); // false (no type conversion)

console.log("apple" < "banana"); // true
console.log("cat" > "dog");      // false

let UserName = "Alice";
let Age = 20;
let isAdult = age >= 18;

if (isAdult) {
  console.log(`Welcome ${userName}, you are an adult.`);
} else {
  console.log(`Sorry ${userName}, access denied.`);
}
