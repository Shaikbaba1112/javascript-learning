//Section 1: String Methods (.trim(), Case Conversion)
//Question 1
let userInput = "   HeLLo JaVaScRiPt   ";

let cleanInput = userInput.trim().toLowerCase();

console.log(userInput);
console.log(cleanInput);

//Question 2
let email = "  USER@EXAMPLE.COM  ";

let formattedEmail = email.trim().toLowerCase();

console.log(formattedEmail);

//Section 2: indexOf() Method
//Question 1
let sentence = "JavaScript is awesome and JavaScript is fun";

let awesomeIndex = sentence.indexOf("awesome");
let jsIndex = sentence.indexOf("JavaScript");
let pythonIndex = sentence.indexOf("Python");

console.log("Position of 'awesome':", awesomeIndex);
console.log("First 'JavaScript':", jsIndex);
console.log("Position of 'Python':", pythonIndex);

//Question 2
let message = "Welcome to coding class";

if (message.indexOf("coding") !== -1) {
    console.log("Found coding!");
} else {
    console.log("Coding not found");
}

//Section 3: Method Chaining
//Question 1
let rawData = "   MESSY iNpuT   ";

let processedData = rawData.trim().toLowerCase();

console.log(rawData);
console.log(processedData);

//Question 2
let password = "  MyP@ssw0rd123  ";

let securePassword = password.trim().toUpperCase().slice(0, 8);

console.log(securePassword);

//Section 4: String Slicing
//Question 1
let fullName = "Alexander Hamilton";

let firstName = fullName.slice(0, 9);
let lastName = fullName.slice(10);

console.log(firstName);
console.log(lastName);

//Question 2
let phone = "9876543210";

let areaCode = phone.slice(0, 3);
let lastFour = phone.slice(-4);

console.log("Area code:", areaCode, ", Last four:", lastFour);

//Section 5: Replace Method
//Question 1
let announcement = "The event will happen on Monday and Monday only";

let updatedAnnouncement = announcement.replace("Monday", "Friday");

console.log(announcement);
console.log(updatedAnnouncement);

//Question 2
let template = "Hello NAME, welcome to our website";

let personalizedMessage = template.replace("NAME", "Alice");

console.log(personalizedMessage);

//Section 6: Basic Arrays
//Question 1
let colors = ["red", "green", "blue", "yellow"];

console.log(colors);
console.log(colors[0]);
console.log(colors[colors.length - 1]);
console.log(colors.length);

//Question 2
let scores = [85, 92, 78, 90, 88];

console.log(scores[2]);

scores[0] = 95;
console.log(scores);

console.log(scores[0] + scores[1]);

//Section 7: Array Methods (push, pop, shift, unshift)
//Question 1
let playlist = [];

playlist.push("Song1");
playlist.push("Song2");

let removedSong = playlist.pop();

playlist.unshift("Song0");

console.log(playlist);
console.log(removedSong);

//Question 2
let queue = ["First", "Second", "Third"];

let served1 = queue.shift();
queue.push("Fourth");
let served2 = queue.shift();

console.log(queue);
console.log(served1, served2);

//Section 8: Search Methods (indexOf, includes)
//Question 1
let fruits = ["apple", "banana", "mango", "orange", "banana"];

console.log(fruits.indexOf("mango"));
console.log(fruits.indexOf("banana"));
console.log(fruits.indexOf("grape"));

//Question 2
let inventory = ["laptop", "mouse", "keyboard", "monitor"];

if (inventory.includes("mouse")) {
    console.log("Mouse is available");
} else {
    console.log("Mouse is not available");
}

if (inventory.includes("printer")) {
    console.log("Printer is available");
} else {
    console.log("Printer is not available");
}

//Section 9: Concat and Reverse
//Question 1
let morningClasses = ["Math", "English", "Science"];
let afternoonClasses = ["History", "Art", "PE"];

let fullSchedule = morningClasses.concat(afternoonClasses);

console.log(fullSchedule);
console.log(fullSchedule.length);

//Question 2
let numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers);

//Section 10: The splice() Method
//Question 1
let months = ["Jan", "Feb", "Mar", "May", "Jun"];

months.splice(3, 0, "Apr");

console.log(months);

//Question 2
let students = ["Alice", "Bob", "Charlie", "David", "Eve"];

students.splice(2, 1);
students.splice(2, 0, "Frank", "Grace");

console.log(students);