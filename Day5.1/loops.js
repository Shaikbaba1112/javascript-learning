for(let i = 1; i<=3; i++){
    for(let j = 1; j<=3; j++){
        console.log(`i=${i}, j=${j}`)
    }
}

for(let i = 1; i<=5; i++){
    for(let j = 1; j<=5; j++){
        console.log(`${i}*${j}=${i*j}`)
    }
}

for(let i = 1; i<=5; i++){
    let row = "";
    for(let j = 1; j<=i; j++){
        row += "* ";
    }
    console.log(row);
}

for(let row = 1; row <=5; row ++){
    let line ="";
    for(let col = 1; col <= 5; col ++){
        line += row;
    }
    console.log(line);
}

let size = 4;
for(let i = 1; i <= size; i++){
    let row = "";
    for(let j = 1; j <= size; j++){
        row += "# ";
    }
    console.log(row);
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j]);
    }
}

let teams = [
    ["Alice", "Bob"],
    ["Charlie", "David"],
    ["Eve", "Frank"]
];
for(let i = 0; i < teams.length; i++){
    console.log(`Team ${i + 1}:`);
    for(let j = 0; j < teams[i].length; j++){
        console.log(` - ${teams[i][j]}`);
    }
}

let grades = [
    [85, 90, 78],
    [88, 92, 80],
    [90, 85, 87]
];
for(let i = 0; i < grades.length; i++){
    let sum = 0;
    for(let j = 0; j < grades[i].length; j++){
        sum += grades[i][j];
    }
    let average = sum/grades[i].length;
    console.log(`Student ${i + 1} Average ${average.toFixed(2)}`);
}

let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let total = 0;
for(let i = 0; i < numbers.length; i++){
    for(let j = 0; j < numbers[i].length; j++){
        total += numbers[i][j];
}
}
console.log(`Total Sum: ${total}`);

let data = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
let searchFor = 50;
let found = false;
for(let i = 0; i < data.length; i++){
    for(let j = 0; j < data[i].length; j++){
if(data[i][j] === searchFor){
    console.log(`Found ${searchFor} at [${i}][${j}]`);
    found = true;
    break;
}
    }
    if(found) break;
}

let groups = [
    ["Anna", "Ben"],
    ["Cathy", "Dan"],
    ["Eva", "Frank"]
];
for(let group of groups){
    for( let item of group){
        console.log(item);
    }
}

let company =[
    ["HR", "Finance"],
    ["Engineering", "Marketing"],
    ["Sales", "Support"]
];
for(let department of company){
    for(let employee of department){
        console.log(employee);
    }
}


let nested = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

let flat = [];
for (let arr of nested) {
  for (let val of arr) {
    flat.push(val);
  }
}
console.log(flat);


let paragraphs = [
  ["Hello", "world"],
  ["JavaScript", "is", "awesome"],
  ["Loops", "are", "powerful"]
];

for (let sentence of paragraphs) {
  let line = "";
  for (let word of sentence) {
    line += word + " ";
  }
  console.log(line.trim());
}



let scores = [
  [78, 92, 85],
  [88, 95, 79],
  [90, 87, 93]
];

let max = scores[0][0];
for (let row of scores) {
  for (let score of row) {
    if (score > max) {
      max = score;
    }
  }
}
console.log(max);


let board = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"]
];

for (let row of board) {
  let line = "";
  for (let cell of row) {
    line += cell + " ";
  }
  console.log(line);
}


