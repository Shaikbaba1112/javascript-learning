// Example 1: Sum of all numbers
let numbers1 = [1, 2, 3, 4, 5];
let sum1 = numbers1.reduce((total, num) => total + num, 0);
console.log(sum1); // 15

// Example 2: Product of all numbers
let numbers2 = [2, 3, 4, 5];
let product = numbers2.reduce((result, num) => result * num, 1);
console.log(product); // 120

// Example 3: Total price
let cart = [
  { item: "Shirt", price: 500 },
  { item: "Shoes", price: 1200 },
  { item: "Hat", price: 300 }
];
let total = cart.reduce((sum, p) => sum + p.price, 0);
console.log(total); // 2000

// Example 4: Count occurrences
let fruits = ["apple", "banana", "apple", "mango", "apple", "banana"];
let count = fruits.reduce((counter, fruit) => {
  counter[fruit] = (counter[fruit] || 0) + 1;
  return counter;
}, {});
console.log(count);

// Example 5: Flatten arrays
let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat);

// Example 6: Longest word
let words = ["hi", "hello", "hey", "goodbye"];
let longest = words.reduce((l, w) => w.length > l.length ? w : l, "");
console.log(longest);

// Example 7: Group by category
let items = [
  { name: "Apple", type: "fruit" },
  { name: "Carrot", type: "vegetable" },
  { name: "Banana", type: "fruit" },
  { name: "Potato", type: "vegetable" }
];
let grouped = items.reduce((res, item) => {
  if (!res[item.type]) res[item.type] = [];
  res[item.type].push(item.name);
  return res;
}, {});
console.log(grouped);

// Example 8: Average
let scores = [85, 90, 78, 92, 88];
let sumScores = scores.reduce((t, s) => t + s, 0);
let avg = sumScores / scores.length;
console.log(avg);

// 2. Find Max / Min with reduce

let nums = [45, 78, 23, 89, 34, 12];
let maxNum = nums.reduce((m, n) => n > m ? n : m);
let minNum = nums.reduce((m, n) => n < m ? n : m);
console.log(maxNum, minNum);

// 3. Default Parameters

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet("Alice");
greet();

function calculateTotal(price, tax = 0.18) {
  return price + price * tax;
}
console.log(calculateTotal(1000));
console.log(calculateTotal(1000, 0.10));

function power(base, exp = 2) {
  return base ** exp;
}
console.log(power(5));
console.log(power(5, 3));

// 4–6. Spread Operator

let original = [1, 2, 3, 4];
let copy = [...original];
console.log(copy);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [...arr1, ...arr2];
console.log(merged);

let word = "HELLO";
console.log([...word]);

function sum(a, b, c) {
  return a + b + c;
}
let nums2 = [1, 2, 3];
console.log(sum(...nums2));

let obj = { name: "John", age: 25 };
let objCopy = { ...obj, city: "Mumbai" };
console.log(objCopy);

// 7. Rest Operator

function sumAll(...numbers) {
  return numbers.reduce((t, n) => t + n, 0);
}
console.log(sumAll(1, 2, 3));

function announce(winner, ...others) {
  console.log("Winner:", winner);
  console.log("Others:", others.join(", "));
}
announce("Alice", "Bob", "Charlie");

function average(...nums) {
  return nums.reduce((t, n) => t + n, 0) / nums.length;
}
console.log(average(10, 20, 30));

// 9. Array Destructuring

let colors = ["Red", "Green", "Blue"];
let [first, second, third] = colors;
console.log(first, second, third);

let nums3 = [1, 2, 3, 4, 5];
let [a, b, ...rest] = nums3;
console.log(a, b, rest);

let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y);

// 10. Object Destructuring

let student = { name: "Rahul", age: 20, grade: "A" };
let { name, age, grade } = student;
console.log(name, age, grade);

let user = { username: "karan123", email: "karan@email.com" };
let { username: id, email: mail } = user;
console.log(id, mail);

let person = {
  name: "John",
  address: { city: "Mumbai", pin: 400001 }
};
let { address: { city, pin } } = person;
console.log(city, pin);

function displayUser({ name, age, city = "Unknown" }) {
  console.log(`${name} is ${age} years old and lives in ${city}`);
}
displayUser({ name: "Priya", age: 22, city: "Delhi" });
displayUser({ name: "Tom", age: 25 });
