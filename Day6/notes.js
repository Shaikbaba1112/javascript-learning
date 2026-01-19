// 1. Object Literals
let student = { name: "Alice", age: 20, grade: "A" };
let product = { title: "Laptop", price: 45000, inStock: true };
let location = { latitude: "28.7041° N", longitude: "77.1025° E", city: "Delhi" };
let book = { title: "JavaScript Guide", author: "John Doe", pages: 350, published: 2024 };
let post = { username: "coder_dev", content: "Learning JavaScript!", likes: 150, comments: 23 };

// 2. Accessing Object Properties
console.log(student.name);
console.log(product["price"]);

let person = { "first name": "John", "last name": "Doe" };
console.log(person["first name"]);

let key = "age";
console.log(student[key]);

// 3. Modify Object
student.age = 22;
student.city = "Boston";
student.grade = "A+";
delete student.city;

let car = { brand: "Honda" };
car["model"] = "Civic";
car["year"] = 2024;

// 4. Nested Objects
let userDatabase = {
  user1: { name: "Alice", grade: "A+", city: "Austin" },
  user2: { name: "Bob", grade: "B", city: "Denver" }
};
console.log(userDatabase.user1.name);

let company = {
  engineering: { employees: 50, manager: "John" },
  sales: { employees: 30, manager: "Sarah" }
};
console.log(company.sales.manager);

let school = {
  classA: { students: 30, teacher: "Ms. Smith" },
  classB: { students: 28, teacher: "Mr. Brown" }
};
school.classA.students = 32;

// 5. Array of Objects
let studentsArr = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 21, grade: "B" },
  { name: "Charlie", age: 19, grade: "A+" }
];
console.log(studentsArr[0].name);

let products = [
  { id: 101, name: "Laptop", price: 45000 },
  { id: 102, name: "Mouse", price: 500 }
];
console.log(products[1].price);

let cars = [
  { brand: "Toyota", model: "Camry", year: 2020 },
  { brand: "Honda", model: "Civic", year: 2021 }
];
cars[0].year = 2024;
cars.push({ brand: "Ford", model: "Mustang", year: 2023 });

// 6. Math Object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-42));
console.log(Math.pow(2, 3));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

// 7. Math.random()
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 100);

// 8. Random Integers
let random1to10 = Math.floor(Math.random() * 10) + 1;
let random1to100 = Math.floor(Math.random() * 100) + 1;
let diceRoll = Math.floor(Math.random() * 6) + 1;

// 9. Random Formula
let min = 5, max = 10;
let randomRange = Math.floor(Math.random() * (max - min + 1)) + min;

// 10. Practical Examples
let colors = ["red", "green", "blue", "yellow"];
let randomColor = colors[Math.floor(Math.random() * colors.length)];

let id = Math.floor(Math.random() * 9000) + 1000;

let percentage = Math.floor(Math.random() * 101);

console.log(randomColor, id, percentage);
