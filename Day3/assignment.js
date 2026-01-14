// P 1
let num = -5;

if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

// P 2
let age = 17;

if (age >= 18) {
  console.log("Eligible for license");
} else {
  console.log("Not eligible for license");
}

// P 3
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else if (marks >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// P 4
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

// P 5
let day = "Monday";

if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend");
} else {
  console.log("Weekday");
}

// P 6
let ages = 25;
let price;

if (age < 12) {
  price = 5;
} else if (age >= 12 && age < 60) {
  price = 8;
} else {
  price = 6;
}

console.log("Ticket price: $" + price);

// P 7
let orderTotal = 40;
let isPremium = true;

if (orderTotal > 50 || isPremium) {
  console.log("Free shipping");
} else {
  console.log("Shipping charges apply");
}

// P 8
let Marks = 75;

if (marks >= 33) {
  if (marks >= 80) {
    console.log("Pass with distinction");
  } else {
    console.log("Pass");
  }
} else {
  console.log("Fail");
}

// P 9
let temperature = 25;
let isRaining = false;

if (temperature > 30) {
  console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
  if (isRaining) {
    console.log("Pleasant but rainy");
  } else {
    console.log("Perfect weather");
  }
} else {
  console.log("Cold day");
}

// P 10
let dayNum = 3;

switch (dayNum) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}

// P 11
let signal = "yellow";

switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid signal");
}

// P 12
let month = 7;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Fall");
    break;
}

// P 13
let usernames = "";

if (username) {
  console.log("Welcome " + username);
} else {
  console.log("Please enter a username");
}

// P 14
let score = 0;

if (score) {
  console.log(score);
} else {
  console.log("No score yet");
}

// P 15
let Age = 20;
let isCitizen = true;
let hasVoted = false;

if (age >= 18 && isCitizen && !hasVoted) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// P 16
let total = 120;
let isPremiumm = false;
let discount = 0;

if (isPremium) {
  discount = 0.20;
} else if (total > 100) {
  discount = 0.15;
} else if (total > 50) {
  discount = 0.10;
}

let finalAmount = total - total * discount;
console.log("Final amount: " + finalAmount);

// P 17
let numm = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("FizzBuzz");
} else if (num % 3 === 0) {
  console.log("Fizz");
} else if (num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
}

// P 18
let agee = Number(prompt("Enter your age"));

if (age >= 18) {
  alert("You can vote");
} else {
  alert("You cannot vote");
}

// P 19
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let operator = prompt("Enter operator (+, -, *, /)");

switch (operator) {
  case "+":
    alert(num1 + num2);
    break;
  case "-":
    alert(num1 - num2);
    break;
  case "*":
    alert(num1 * num2);
    break;
  case "/":
    alert(num1 / num2);
    break;
  default:
    alert("Invalid operator");
}

// P 20
let secret = 7;
let guess = Number(prompt("Guess the number"));

if (guess === secret) {
  alert("Congratulations!");
} else if (guess > secret) {
  alert("Too high!");
} else {
  alert("Too low!");
}

// P 21
let str = "Amazing";

if ((str[0] === "A" || str[0] === "a") && str.length > 5) {
  console.log("Golden string");
} else {
  console.log("Not a golden string");
}

// P 22
let Num1 = 45;
let Num2 = 67;
let Num3 = 52;

if (num1 > num2 && num1 > num3) {
  console.log("Largest: " + num1);
} else if (num2 > num3) {
  console.log("Largest: " + num2);
} else {
  console.log("Largest: " + num3);
}

// P 23
let quarter = 2;

switch (quarter) {
  case 1:
    console.log("January, February, March");
    break;
  case 2:
    console.log("April, May, June");
    break;
  case 3:
    console.log("July, August, September");
    break;
  case 4:
    console.log("October, November, December");
    break;
}

// P 24
let Num = Number(prompt("Enter a number"));

if (num % 10 === 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

// P 25
let nuM = 14;

if (num % 7 === 0 && num % 2 === 0) {
  console.log("Special number");
} else if (num % 7 === 0) {
  console.log("Lucky number");
} else {
  console.log("Regular number");
}
