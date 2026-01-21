// // Example 1: Student Object
// const student = {
//   name: "Alex",
//   eng: 95,
//   math: 93,
//   phy: 97,
//   getAvg() {
//     let avg = (this.eng + this.math + this.phy) / 3;
//     console.log(`${this.name} got avg marks = ${avg}`);
//   }
// };
// student.getAvg();

// // Example 2: Bank Account
// const account = {
//   holder: "Sarah",
//   balance: 5000,
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`${this.holder} deposited $${amount}. New balance: $${this.balance}`);
//   }
// };
// account.deposit(500);

// // Example 3: Shopping Cart
// const cart = {
//   items: ["Apple", "Banana"],
//   total: 2,
//   addItem(item) {
//     this.items.push(item);
//     this.total = this.items.length;
//     console.log(`Added ${item}. Total items: ${this.total}`);
//   }
// };
// cart.addItem("Orange");


// // ---------- 2. try-catch ----------

// // Example 1: Missing Variable
// console.log("Program starts");
// try {
//   console.log(undefinedVariable);
// } catch (err) {
//   console.log("Caught an error: Variable not found");
// }
// console.log("Program continues");

// // Example 2: Division Error
// function divide(a, b) {
//   try {
//     if (b === 0) {
//       throw "Cannot divide by zero!";
//     }
//     return a / b;
//   } catch (err) {
//     console.log("Error:", err);
//     return null;
//   }
// }
// console.log(divide(10, 2));
// console.log(divide(10, 0));

// // Example 3: User Input Validation
// function validateAge(age) {
//   try {
//     if (age < 0) throw "Age cannot be negative!";
//     if (age > 150) throw "Age seems unrealistic!";
//     console.log(`Valid age: ${age}`);
//   } catch (err) {
//     console.log("Validation Error:", err);
//   }
// }
// validateAge(25);
// validateAge(-5);
// validateAge(200);


// // ---------- 3. Arrow Functions ----------

// // Basic Arrow Function
// const greet = name => `Hello, ${name}!`;
// console.log(greet("John"));

// // Implicit Return
// const square = num => num * num;
// console.log(square(5));
// console.log(square(10));

// // Single Parameter
// const double = num => num * 2;
// console.log(double(7));

// // Multiple Statements
// const calculateTotal = (price, tax) => {
//   let total = price + (price * tax);
//   return total;
// };
// console.log(calculateTotal(100, 0.1));

// // Array Methods
// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);

// let evens = numbers.filter(num => num % 2 === 0);
// console.log(evens);


// // ---------- 4. setTimeout & setInterval ----------

// // setTimeout Example
// console.log("Starting...");
// setTimeout(() => {
//   console.log("This appears after 3 seconds");
// }, 3000);
// console.log("Continuing...");

// // Delayed Greeting
// function greetUser(name) {
//   setTimeout(() => {
//     console.log(`Welcome back, ${name}!`);
//   }, 2000);
// }
// greetUser("Alice");

// // setInterval Counter
// let count = 0;
// let id = setInterval(() => {
//   count++;
//   console.log(`Count: ${count}`);
//   if (count === 5) {
//     clearInterval(id);
//     console.log("Counter stopped!");
//   }
// }, 1000);

// // Clock Display
// let seconds = 0;
// setInterval(() => {
//   seconds++;
//   console.log(`Elapsed time: ${seconds} seconds`);
// }, 1000);

// // Stop Interval
// let intervalId = setInterval(() => {
//   console.log("Repeating message...");
// }, 2000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval stopped!");
// }, 10000);


// // ---------- 5. this with Arrow Functions ----------

// // Problem Example
// const student2 = {
//   name: "Alex",
//   marks: 95,
//   getName: function () {
//     return this.name;
//   },
//   getMarks: () => {
//     return this.marks;
//   }
// };
// console.log(student2.getName());
// console.log(student2.getMarks());

// // Arrow Function in Callback (Problem)
// const user1 = {
//   name: "Sarah",
//   greet: function () {
//     setTimeout(function () {
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   }
// };
// user1.greet();

// // Arrow Function Solution
// const user2 = {
//   name: "Sarah",
//   greet: function () {
//     setTimeout(() => {
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   }
// };
// user2.greet();

// // Practical Use Case
// const counter = {
//   count: 0,
//   start: function () {
//     setInterval(() => {
//       this.count++;
//       console.log(this.count);
//     }, 1000);
//   }
// };
// counter.start();

// // When NOT to Use Arrow Functions
// const calculator = {
//   value: 0,
//   add: (num) => {
//     this.value += num;
//   },
//   subtract: function (num) {
//     this.value -= num;
//   }
// };
// calculator.subtract(5);
// console.log(calculator.value);
