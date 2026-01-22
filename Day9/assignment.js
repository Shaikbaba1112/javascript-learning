let cities = ["Hyderabad", "Mumbai", "Pune", "Goa", "Andrapradesh"];
cities.forEach((elem)=>{
    console.log(`I want to visit ${elem}`)
});

let numbers = [1,2,3,4,5];
let increase = numbers.map((num)=> num + 100);
console.log(increase);

let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let num = number.filter((elem)=>elem%3===0);
console.log(num);

const numm = Array.from({length:20}, (_, i) => i + 1);
const divisibleBy3 = numm.filter((num)=>num%3===0);
console.log(divisibleBy3);

const students = [
  { name: "Ravi", marks: 92 },
  { name: "Anu", marks: 78 },
  { name: "Kiran", marks: 65 },
  { name: "Sita", marks: 40 }
];

const studentsWithGrade = students.map(student => {
  let grade;

  if (student.marks >= 90) grade = "A";
  else if (student.marks >= 75) grade = "B";
  else if (student.marks >= 50) grade = "C";
  else grade = "F";

  return { ...student, grade };
});

console.log(studentsWithGrade);

const products = [
    {name: "Watch", price: 400},
    {name: "PC", price: 15000},
    {name: "TV",price: 1000},
    {name: "Phone", price: 2000}
];
const filterProducts = products.filter(product => product.price>=500 && product.price <= 2000);
console.log(filterProducts);

let numberss = [1,2,3,4,5];
let fiterNum = numberss.every((num) => num >=1);
console.log(fiterNum);

let words = ["zone"];
let existWord = words.some((char) => char.includes("z"));
console.log(existWord);

const combining = [1,2,3,4,5,6,7,8,9,10];
const result = combining.filter(num => num%2===0)
.map(num => num*num);
console.log(result);