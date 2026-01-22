// ---------- forEach Examples ----------

// Example 1: Print all elements
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach(fruit => console.log(fruit));

// Example 2: Print with index
let colors = ["Red", "Green", "Blue"];
colors.forEach((color, index) => {
  console.log(`${index}: ${color}`);
});

// Example 3: Calculate sum using external variable
let numbers1 = [10, 20, 30, 40, 50];
let sum = 0;
numbers1.forEach(num => sum += num);
console.log(`Total: ${sum}`);

// Example 4: Add formatted prices
let prices1 = [99, 149, 299, 499];
prices1.forEach(price => {
  console.log(`₹${price}.00`);
});

// Example 5: Push to another array
let names1 = ["alice", "bob", "charlie"];
let upperNames1 = [];
names1.forEach(name => upperNames1.push(name.toUpperCase()));
console.log(upperNames1);

// Example 6: Print multiplication table
let tableNums = [1, 2, 3, 4, 5];
tableNums.forEach(num => {
  console.log(`5 x ${num} = ${5 * num}`);
});

// Example 7: Working with objects
let students1 = [
  { name: "Rahul", age: 20 },
  { name: "Priya", age: 22 },
  { name: "Arjun", age: 19 }
];
students1.forEach(s => {
  console.log(`${s.name} is ${s.age} years old`);
});

// Example 8: Checking conditions
let scores = [85, 92, 78, 45, 90];
scores.forEach(score => {
  if (score >= 80) console.log(`${score} - Excellent!`);
  else console.log(`${score} - Keep trying!`);
});


// ---------- map Examples ----------

// Example 1: Double all numbers
let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(n => n * 2);
console.log(doubled);

// Example 2: Convert to uppercase
let names2 = ["alice", "bob", "charlie"];
let upperNames2 = names2.map(n => n.toUpperCase());
console.log(upperNames2);

// Example 3: Square all numbers
let nums2 = [2, 3, 4, 5];
let squares = nums2.map(n => n ** 2);
console.log(squares);

// Example 4: Extract object properties
let students2 = [
  { name: "John", marks: 85 },
  { name: "Sarah", marks: 92 },
  { name: "Mike", marks: 78 }
];
let studentNames = students2.map(s => s.name);
console.log(studentNames);

// Example 5: Add GST to prices
let prices2 = [100, 200, 150, 300];
let pricesWithGST = prices2.map(p => p * 1.18);
console.log(pricesWithGST);

// Example 6: Create full names
let firstNames = ["Raj", "Priya", "Amit"];
let lastNames = ["Sharma", "Patel", "Kumar"];
let fullNames = firstNames.map((f, i) => `${f} ${lastNames[i]}`);
console.log(fullNames);

// Example 7: Format as currency
let amounts = [100, 250, 500, 1000];
let formatted = amounts.map(a => `₹${a}.00`);
console.log(formatted);

// Example 8: Create HTML elements
let items = ["Home", "About", "Services", "Contact"];
let menuItems = items.map(item => `<li>${item}</li>`);
console.log(menuItems);

// Example 9: Temperature conversion
let celsius = [0, 10, 20, 30, 40];
let fahrenheit = celsius.map(t => (t * 9/5) + 32);
console.log(fahrenheit);

// Example 10: Add index to items
let fruits2 = ["Apple", "Banana", "Mango"];
let numberedList = fruits2.map((f, i) => `${i + 1}. ${f}`);
console.log(numberedList);


// ---------- filter Examples ----------

// Example 1: Get even numbers
let numbers2 = [1,2,3,4,5,6,7,8,9,10];
let evens = numbers2.filter(n => n % 2 === 0);
console.log(evens);

// Example 2: Get odd numbers
let numbers3 = [15, 22, 31, 44, 57, 60];
let odds = numbers3.filter(n => n % 2 !== 0);
console.log(odds);

// Example 3: Get passing grades
let grades = [45, 78, 89, 34, 92, 56, 67];
let passing = grades.filter(g => g >= 50);
console.log(passing);

// Example 4: Filter by string length
let words = ["hi", "hello", "bye", "goodbye", "hey"];
let longWords = words.filter(w => w.length > 3);
console.log(longWords);

// Example 5: Get adults only
let people = [
  { name: "John", age: 17 },
  { name: "Sarah", age: 22 },
  { name: "Mike", age: 15 },
  { name: "Emma", age: 25 }
];
let adults = people.filter(p => p.age >= 18);
console.log(adults);

// Example 6: Names starting with 'A'
let names3 = ["Alice", "Bob", "Andrew", "Charlie", "Amanda"];
let aNames = names3.filter(n => n[0] === "A");
console.log(aNames);

// Example 7: Affordable items
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Monitor", price: 15000 }
];
let affordable = products.filter(p => p.price <= 2000);
console.log(affordable);

// Example 8: Remove specific items
let cart = ["apple", "banana", "apple", "mango", "apple", "orange"];
let withoutApples = cart.filter(i => i !== "apple");
console.log(withoutApples);

// Example 9: Get positive numbers
let numbers4 = [5, -3, 8, -1, 0, 12, -7, 4];
let positives = numbers4.filter(n => n > 0);
console.log(positives);

// Example 10: Get completed tasks
let tasks = [
  { task: "Buy milk", done: true },
  { task: "Clean room", done: false },
  { task: "Study", done: true },
  { task: "Exercise", done: false }
];
let completed = tasks.filter(t => t.done === true);
console.log(completed);


// ---------- every Examples ----------

let ages1 = [20, 25, 18, 30, 22];
console.log(ages1.every(a => a >= 18));

let ages2 = [20, 25, 17, 30, 22];
console.log(ages2.every(a => a >= 18));

let numbers5 = [5, 10, 15, 20];
console.log(numbers5.every(n => n > 0));

let marks = [78, 85, 92, 67, 89];
console.log(marks.every(m => m >= 50));

let products2 = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: true },
  { name: "Keyboard", inStock: false }
];
console.log(products2.every(p => p.inStock === true));


// ---------- some Examples ----------

let ages3 = [20, 25, 17, 30, 22];
console.log(ages3.some(a => a < 18));

let numbers6 = [5, 10, -3, 20, 15];
console.log(numbers6.some(n => n < 0));

let marks2 = [78, 85, 92, 45, 89];
console.log(marks2.some(m => m < 50));

let prices3 = [1500, 2000, 450, 3000];
console.log(prices3.some(p => p < 500));

let tasks2 = [
  { task: "Buy milk", done: true },
  { task: "Clean room", done: false },
  { task: "Study", done: true }
];
console.log(tasks2.some(t => t.done === false));


// ---------- Practice Problems ----------

// Problem 1 (forEach)
let cities = ["Delhi", "Mumbai", "Chennai", "Hyderabad", "Bengaluru"];
cities.forEach(c => console.log(`I want to visit ${c}`));

// Problem 2 (map)
let numsP2 = [10, 20, 30, 40, 50];
let plus100 = numsP2.map(n => n + 100);
console.log(plus100);

// Problem 3 (filter)
let oneTo20 = Array.from({ length: 20 }, (_, i) => i + 1);
let divBy3 = oneTo20.filter(n => n % 3 === 0);
console.log(divBy3);

// Problem 4 (map + objects)
let studentsP4 = [
  { name: "Ravi", marks: 92 },
  { name: "Anu", marks: 78 },
  { name: "Kiran", marks: 65 },
  { name: "Sita", marks: 40 }
];
let withGrade = studentsP4.map(s => {
  let grade;
  if (s.marks >= 90) grade = "A";
  else if (s.marks >= 75) grade = "B";
  else if (s.marks >= 50) grade = "C";
  else grade = "F";
  return { ...s, grade };
});
console.log(withGrade);

// Problem 5 (filter + objects)
let productsP5 = [
  { name: "Phone", price: 1200 },
  { name: "Charger", price: 300 },
  { name: "Headset", price: 800 },
  { name: "Laptop", price: 55000 }
];
let midRange = productsP5.filter(p => p.price >= 500 && p.price <= 2000);
console.log(midRange);

// Problem 6 (every)
let numsP6 = [12, 15, 20, 18, 25];
console.log(numsP6.every(n => n > 10));

// Problem 7 (some)
let wordsP7 = ["cat", "dog", "zebra", "lion"];
console.log(wordsP7.some(w => w.includes("z")));

// Problem 8 (combine)
let numsP8 = [1,2,3,4,5,6,7,8,9,10];
let evenSquares = numsP8.filter(n => n % 2 === 0).map(n => n * n);
console.log(evenSquares);
