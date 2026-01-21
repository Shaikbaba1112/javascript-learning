const car = {
  brand: "Toyota",
  model: "Camry",
  price: 25000,

  displayInfo() {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Price: $${this.price}`
    );
  },

  applyDiscount(percentage) {
    this.price -= (this.price * percentage) / 100;
    console.log(
      `After ${percentage}% discount, New Price: $${this.price}`
    );
  }
};

car.displayInfo();
car.applyDiscount(10);
car.displayInfo();

const student = {
    name: "Alice",
    math: 85,
    english: 90,
    science: 78
};
student.calculateAverage = function() {
    const total = this.math + this.english + this.science;
    return total / 3;
};

const averageScore = student.calculateAverage();
console.log(`Average Score of ${student.name}: ${averageScore}`);




function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);
  }
}
console.log(safeDivide(2,9));


function getElement(arr, index) {
  try {
    if (index < 0) {
      throw new Error("Index cannot be negative!");
    }
    if (index >= arr.length) {
      throw new Error("Index out of bounds!");
    }
    return arr[index];
  } catch (error) {
    console.log("Error:", error.message);
  }
}
const numbers = [10, 20, 30, 40];

console.log(getElement(numbers, 1));   // Valid index

// Arrow functions with implicit return
const celsiusToFahrenheit = celsius => (celsius * 9 / 5) + 32;

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

// Array of Celsius temperatures
const celsiusTemps = [0, 10, 20, 30, 40];

// Convert all Celsius temperatures to Fahrenheit using map()
const fahrenheitTemps = celsiusTemps.map(celsiusToFahrenheit);


console.log(fahrenheitTemps);

let numberss = [12, 5, 8, 21, 16, 3, 18, 9];

// Filter numbers >= 10 and square them in a single chain
const result = numberss
  .filter(num => num >= 10)
  .map(num => num * num);


console.log(result);

// let count = 10;

// const timer = setInterval(() => {
//   console.log(count);

//   if (count === 0) {
//     console.log("Time's up!");
//     clearInterval(timer);
//   }

//   count--;
// }, 1000);

// function animateText(text) {
//   for (let i = 1; i <= text.length; i++) {
//     setTimeout(() => {
//       console.log(text.slice(0, i));
//     }, i * 200);
//   }
// }

// animateText("SHAIKBABA");

// const timer = {
//   seconds: 0,
//   intervalId: null,

//   start() {
//     if (this.intervalId) return; // prevent multiple timers

//     this.intervalId = setInterval(() => {
//       this.seconds++;
//       console.log(this.seconds);
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//   },

//   reset() {
//     this.seconds = 0;
//     console.log("Timer reset to", this.seconds);
//   }
// };

// Test
// timer.start();

// Example usage:
// timer.stop();
// timer.reset();

const person = {
  firstName: "John",
  lastName: "Doe",

  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }, 2000);
  }
};


person.greet(); // Displays "Hello, John Doe" after 2 seconds



function userName(){
  console.log("abdul ghani");
};

