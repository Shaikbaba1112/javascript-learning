// B – 10 then ReferenceError

// B – They inherit this from parent (lexical scope)

// C – map returns new array, forEach returns undefined

// A – "Alice"

// B – document.querySelectorAll('.box')

// C – Adds if missing, removes if present

// B – Microtask Queue

// C – A, C, B

// C – innerText

// B – event.preventDefault()

// B – [6, 8]

// D – Rejected

// B – Pauses async function until Promise resolves

// B – Let/const exist but can’t be accessed before init

// B – [1, 2, 3, 4]

// C – parent.removeChild(child)

// C – undefined

// C – function keyword

// C – Reduce array to single value

// C – input

// B – Declarations moved to top during memory phase

// C – Refers to clicked button element

// B – document.createElement('h3')

// B – try...catch

// C – Collects arguments into array

// B – Running

// B – Function + lexical environment

// C – HTMLCollection of immediate children

// B – afterbegin

// B – function greet(name = "Guest")

// B – One Call Stack

// C – Entire function stored in memory

// C – undefined

// B – setInterval

// A – await internetConnectionCheck();
// Q36
const numbers = [4, 11, 2, 15, 8, 20];

const result = numbers
  .filter(n => n >= 10)
  .map(n => n * 5);

console.log(result);

// Q37
const box = document.getElementById("notification-box");

const p = document.createElement("p");
p.innerText = "Data Saved Successfully!";

box.appendChild(p);
box.style.backgroundColor = "lightgreen";

// Q38
async function getData() {
  try {
    const response = await fetchData();
    console.log("Response received:", response);

    const result = await processData(response);
    console.log("Processing complete:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Q39
function calculateTotal(cart) {
  return cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}

// Q40
// Event Loop Architecture

// Call Stack: Executes synchronous code line by line

// Web APIs: Handles async tasks (setTimeout, fetch)

// Callback Queue (Macrotask): Stores setTimeout callbacks

// Microtask Queue: Stores Promises (then, await)

//  Priority: Microtask Queue runs before Callback Queue
//  Promise vs setTimeout: Promises execute earlier

// 41
// var vs let vs const
// Feature	var	let	const
// Scope	Function	Block	Block
// Hoisting	Yes (undefined)	Yes (TDZ)	Yes (TDZ)
// Reassign	Yes	Yes	❌ No

// TDZ (Temporal Dead Zone)
// → Time between declaration and initialization where let and const cannot be accessed.