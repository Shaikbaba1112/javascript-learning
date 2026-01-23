// Problem 1 (reduce)

let nums = [1,2,3,4,5,6,7,8,9,10];
let evenSum = nums.reduce((sum, n) => n % 2 === 0 ? sum + n : sum, 0);
console.log(evenSum); // 30

// Problem 2 (reduce - max)

let products = [
  { name: "Pen", price: 20 },
  { name: "Bag", price: 800 },
  { name: "Book", price: 150 },
  { name: "Shoes", price: 1200 }
];
let expensive = products.reduce((max, p) => p.price > max.price ? p : max);
console.log(expensive);

// Problem 3 (Default Parameters)

function calculateArea(length, width = length) {
  return length * width;
}
console.log(calculateArea(5, 3)); // 15
console.log(calculateArea(4));    // 16

// Problem 4 (Spread - Arrays)
let fruits = ["Apple", "Banana"];
let vegetables = ["Carrot", "Potato"];
let dairy = ["Milk", "Cheese"];
let groceries = [...fruits, ...vegetables, ...dairy];
console.log(groceries);

// Problem 5 (Spread - Objects)
let user = { name: "Baba", email: "baba@email.com" };
let fullProfile = { ...user, age: 21, city: "Hyderabad", country: "India" };
console.log(fullProfile);

// Problem 6 (Rest)
function findMax(...numbers) {
  return numbers.reduce((m, n) => n > m ? n : m);
}
console.log(findMax(3, 9, 2, 15, 7)); // 15

// API Response Destructuring Example
let apiResponse = {
  status: "success",
  data: {
    user: "john_doe",
    posts: 150,
    followers: 1200
  },
  timestamp: "2024-01-15"
};

let {
  status,
  data: { user: apiUser, followers },
  timestamp
} = apiResponse;

console.log(status);
console.log(apiUser);
console.log(followers);
console.log(timestamp);

// Problem 7 (Array Destructuring)
let colors = ["Red", "Green", "Blue", "Yellow", "Black"];
let [first, , third, , last] = colors;
console.log(first, third, last);

// Problem 8 (Object Destructuring)
let book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2018,
  pages: 320
};
let { title, author: writtenBy } = book;
console.log(title, writtenBy);

// Problem 9 (Combining Concepts)
let students = [
  { name: "Amit", marks: 85 },
  { name: "Riya", marks: 90 },
  { name: "Karan", marks: 78 },
  { name: "Neha", marks: 88 }
];

let names = students.map(s => s.name);
let [n1, n2, n3] = names;
console.log(n1, n2, n3);

// Problem 10 (Advanced)
function printStudent({ name, marks, email = "Not Given" }) {
  console.log(`Name: ${name}, Marks: ${marks}, Email: ${email}`);
}

printStudent({ name: "Rahul", marks: 92, email: "rahul@mail.com" });
printStudent({ name: "Anita", marks: 87 });
