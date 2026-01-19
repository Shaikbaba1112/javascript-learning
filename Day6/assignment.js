let car = {
    brand: "Tesla",
    model: "Model 3",
    year: 2024,
    color: "white"
};
console.log("car brand is:" + car.brand);
console.log("year of car is:" + car.year);

let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8
};
console.log(movie["director"]);
console.log(movie.rating);

let student = {
    name: "John",
    age: 20,
    grade: "B"
};
student.grade = "A";
student.city = "Mumbai";
delete student.age;
console.log(student);

let product = {
    name: "Laptop",
    price: 50000
};
product.price = 45000;
product.brand = "Dell";
product.inStock = true;
console.log(product);

let classroom = {
    teacher: {name: "Ms.Smith",subject: "Math"},
    student1:{name: "Alice",grade: "A"},
    student2:{name: "Bob",grade: "B+"}
};
console.log(classroom.teacher.name);
console.log(classroom.student1.grade);
console.log(classroom.student2.name);

let compony = {
    engineering: {emplyoees: 40, manager: "John"},
    sales: {emplyoees: 25, manager: "Sarah"}
};
console.log(compony.engineering.emplyoees);
console.log(compony.sales.manager);
compony.engineering.emplyoees = 45;
console.log(compony.engineering.emplyoees);

let students = [
    student1 ={name: "Emma", age: 20, grade: "A"},
    student2 ={name: "Liam", age: 21, grade: "B"},
    student3 = {name: "Olivia", age: 19, grade: "A+"}
];
console.log(students[0].name);
console.log(students[2].grade);
console.log(students.length);

let products =[
    product1 ={id: 101, name: "Phone", price: 30000},
    product2 ={id: 102, name: "Laptop", price: 55000},
    product3 ={id: 103, name: "Tablet", price: 20000}
];
console.log(products[1].name);
console.log(products[0].price);
products.push({id: 104, name: "Smartwatch", price: 15000});
console.log(products);
console.log(products.length);


let posts = [
  post1 = {username: "tech_guru", content: "Learning JavaScript", likes: 150},
  post2 = {username: "code_ninja", content: "Arrays are awesome", likes: 200}
];
console.log(posts[0].content);
console.log(posts[1].likes);
posts[0].likes = 175;
console.log(posts[0].likes);

let courses = [
  Course1 = {name: "JavaScript", duration: 40, instructor: "John"},
  Course2 = {name: "Python", duration: 35, instructor: "Sarah"},
  Course3 = {name: "React", duration: 30, instructor: "Mike"}
];
console.log(courses[1].instructor);
console.log(courses[0].duration);
courses[2].duration = 32;
console.log(courses);
console.log(courses[0].name);
console.log(courses[1].name);
console.log(courses[2].name);

console.log(Math.PI);

console.log(Math.pow(5, 2));

console.log(Math.abs(-25));

console.log(Math.floor(7.8));

console.log(Math.ceil(7.2));

console.log(Math.pow(3, 4));

console.log(Math.abs(-100));

console.log(Math.random());

console.log(Math.random()*10);

console.log(Math.random()*100);

console.log(Math.random()*5);

console.log(Math.random()*20);

let colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors[Math.floor(Math.random()*colors.length)]);

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits[Math.floor(Math.random()*fruits.length)]);

let players = [
  {name: "Alice", score: 0},
  {name: "Bob", score: 0},
  {name: "Charlie", score: 0}
];
players[0].score = Math.floor(Math.random()*6);
players[1].score = Math.floor(Math.random()*6);
players[2].score = Math.floor(Math.random()*6);
console.log(players);

let productss = [
  {name: "Phone", price: 20000, discount: 0},
  {name: "Laptop", price: 50000, discount: 0}
];
productss[0].discount = Math.floor(Math.random()*20);
productss[1].discount = Math.floor(Math.random()*20);
console.log(productss);

let game = {
  player1: {name: "Alice", health: 100, damage: 0},
  player2: {name: "Bob", health: 100, damage: 0}
};
game.player1.damage = Math.floor(Math.random()*30);
game.player2.damage = Math.floor(Math.random()*30);
console.log(game);

let weather = {
  monday: {temp: 0, humidity: 0},
  tuesday: {temp: 0, humidity: 0}
};
weather.monday.temp = Math.floor(Math.random()*(35-20)+20);
weather.monday.humidity = Math.floor(Math.random()*(80-40)+40);
weather.tuesday.temp = Math.floor(Math.random()*(35-20)+20);
weather.tuesday.humidity = Math.floor(Math.random()*(80-40)+40);
console.log(weather);

let studentsss = [
  {name: "Emma", math: 0, science: 0},
  {name: "Liam", math: 0, science: 0},
  {name: "Olivia", math: 0, science: 0}
];

studentsss[0].math = Math.floor(Math.random()*(100-60)+60);
studentsss[1].math = Math.floor(Math.random()*(100-60)+60);
studentsss[2].math = Math.floor(Math.random()*(100-60)+60);
studentsss[0].science = Math.floor(Math.random()*(100-60)+60);
studentsss[1].science = Math.floor(Math.random()*(100-60)+60);
studentsss[2].science = Math.floor(Math.random()*(100-60)+60);
console.log(studentsss);

let tickets = [
  t1 = {number: 100},
  t2 = {number: 200},
  t3 = {number: 300},
  t4 = {number: 400},
  t5 = {number: 500}  
];
console.log(tickets);
tickets.forEach(ticket => {
  ticket.number = Math.floor(Math.random()*1000);
});
console.log(tickets);