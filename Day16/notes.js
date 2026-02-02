// Day 16: Event Loop – All code examples in ONE JS file

// ----------------------------
// Call Stack Example
// ----------------------------
function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

second();


// ----------------------------
// Microtask vs Macrotask Example
// ----------------------------
console.log("1. Start");

setTimeout(() => {
  console.log("2. Timer Callback");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Promise Resolved");
});

console.log("4. End");


// ----------------------------
// Detailed Event Loop Example
// ----------------------------
console.log("Script Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    return Promise.resolve();
  })
  .then(() => {
    console.log("Promise 2");
  });

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 3");
});

console.log("Script End");
