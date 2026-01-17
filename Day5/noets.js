for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 1; i <= 15; i += 2) {
  console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let sum = 0;
let num = 1;

while (sum <= 50) {
  sum += num;
  num++;
}
console.log(sum);

let count = 0;

do {
  console.log(count);
  count++;
} while (count < 1);

for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(i);
    break;
  }
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

let secret = 7;
let guess;

while (guess !== secret) {
  guess = Number(prompt("Guess number"));
  if (guess < secret) console.log("Too low");
  else if (guess > secret) console.log("Too high");
  else console.log("Correct!");
}

