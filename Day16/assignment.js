// ===============================
// Day 16: Event Loop – IMPORTANT PROBLEMS
// ===============================


// -------------------------------
// Problem 1: Basic Order
// -------------------------------
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");


// -------------------------------
// Problem 2: Promise vs setTimeout
// -------------------------------
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");


// -------------------------------
// Problem 3: Multiple Promises
// -------------------------------
Promise.resolve().then(() => console.log("P1"));
Promise.resolve().then(() => console.log("P2"));
console.log("Main");


// -------------------------------
// Problem 4: Nested setTimeout
// -------------------------------
setTimeout(() => {
  console.log("Outer");
  setTimeout(() => console.log("Inner"), 0);
}, 0);


// -------------------------------
// Problem 5: Promise inside setTimeout
// -------------------------------
setTimeout(() => {
  console.log("Timeout");
  Promise.resolve().then(() => console.log("Promise inside Timeout"));
}, 0);
console.log("End");


// -------------------------------
// Problem 6: setTimeout inside Promise
// -------------------------------
Promise.resolve().then(() => {
  console.log("Promise");
  setTimeout(() => console.log("Timeout inside Promise"), 0);
});
console.log("Start");


// -------------------------------
// Problem 7: async / await
// -------------------------------
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}
console.log("3");
test();
console.log("4");


// -------------------------------
// Problem 8: Multiple await
// -------------------------------
async function demo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
  await Promise.resolve();
  console.log("C");
}
demo();
console.log("D");


// -------------------------------
// Problem 9: Promise Chain Order
// -------------------------------
Promise.resolve()
  .then(() => console.log("1"))
  .then(() => console.log("2"));

Promise.resolve().then(() => console.log("3"));


// -------------------------------
// Problem 10: Tricky Combination (Interview Favorite)
// -------------------------------
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve();
  })
  .then(() => console.log("Promise 2"));

console.log("End");
