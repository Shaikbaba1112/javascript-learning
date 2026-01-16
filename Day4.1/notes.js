// Example 1: Basic slicing
let numbers0 = [1, 2, 3, 4, 5];
let sliced = numbers0.slice(1, 4);
console.log(sliced); // [2, 3, 4]
console.log(numbers0); // [1, 2, 3, 4, 5] (unchanged)
// Example 2: Slicing from index to end
let fruits = ["apple", "banana", "mango", "orange", "grape"];
let lastThree = fruits.slice(2);
console.log(lastThree); // ["mango", "orange", "grape"]
// Example 3: Getting first few elements
let colors = ["red", "green", "blue", "yellow", "purple"];
let firstTwo = colors.slice(0, 2);
console.log(firstTwo); // ["red", "green"]
// Example 4: Using negative indices
let letters = ["a", "b", "c", "d", "e"];
console.log(letters.slice(--2)); // ["d", "e"] (last 2)
console.log(letters.slice(1, --1)); // ["b", "c", "d"] (exclude first and last)
// Example 5: Creating a copy of entire array
let original = [10, 20, 30];
let copy = original.slice();
copy[0] = 99;
console.log(original); // [10, 20, 30] (unchanged)
console.log(copy); // [99, 20, 30]


// Example 1: Removing and capturing deleted elements
let colors0 = ["red", "green", "blue", "yellow", "purple"];
let removed = colors0.splice(1, 2);
console.log(removed); // ["green", "blue"]
console.log(colors0); // ["red", "yellow", "purple"]
// Example 2: Replacing multiple elements
let numbers9 = [1, 2, 3, 4, 5];
numbers9.splice(1, 3, 10, 20, 30);
console.log(numbers9); // [1, 10, 20, 30, 5]
// Example 3: Inserting multiple elements without deletion
let arr = [1, 5];
arr.splice(1, 0, 2, 3, 4);
console.log(arr); // [1, 2, 3, 4, 5]
// Example 4: Removing from end using negative index
let items = ["a", "b", "c", "d", "e"];
items.splice(--2, 2);
console.log(items); // ["a", "b", "c"]
// Example 5: Replacing single element
let fruits8 = ["apple", "banana", "mango"];
fruits8.splice(1, 1, "orange");
console.log(fruits8); // ["apple", "orange", "mango"]






// Example 1: Sorting strings alphabetically
let fruits6 = ["banana", "apple", "mango", "cherry"];
fruits6.sort();
console.log(fruits6); // ["apple", "banana", "cherry", "mango"]
// Example 2: Sorting numbers (WARNING: unexpected behavior!)
let numbers8 = [10, 5, 40, 25, 1000];
numbers8.sort();
console.log(numbers8); // [10, 1000, 25, 40, 5] (sorted as strings!)
// Example 3: Sorting numbers correctly with compare function
let scores = [85, 92, 78, 95, 88];
scores.sort((a, b2) => a - b2);
console.log(scores); // [78, 85, 88, 92, 95]
// Example 4: Sorting in descending order
let values = [3, 1, 4, 1, 5, 9, 2, 6];
values.sort((a3, b) => b - a3);
console.log(values); // [9, 6, 5, 4, 3, 2, 1, 1]
// Example 5: Case-insensitive string sorting
let names = ["charlie", "Alice", "bob", "David"];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names); // ["Alice", "bob", "charlie", "David"]






// Example 1: Basic join with default separator
let colors6 = ["red", "green", "blue"];
let result = colors6.join();
console.log(result); // "red,green,blue"
// Example 2: Join with space separator
let words = ["Hello", "World", "JavaScript"];
let sentence = words.join(" ");
console.log(sentence); // "Hello World JavaScript"
// Example 3: Join with hyphen
let date = ["2024", "12", "25"];
let formatted = date.join("-");
console.log(formatted); // "2024-12-25"
// Example 4: Join with empty string
let letters6 = ["J", "a", "v", "a"];
let word = letters6.join("");
console.log(word); // "Java"
// Example 5: Join with custom separator
let items6 = ["apple", "banana", "mango"];
let list = items6.join(" | ");
console.log(list); // "apple | banana | mango"








// Example 1: Basic toString
let numbers4 = [1, 2, 3, 4, 5];
let str = numbers4.toString();
console.log(str); // "1,2,3,4,5"
console.log(typeof str); // "string"
// Example 2: toString with nested arrays
let nested = [[1, 2], [3, 4]];
console.log(nested.toString()); // "1,2,3,4"
// Example 3: toString vs join
let fruits3 = ["apple", "banana", "mango"];
console.log(fruits3.toString()); // "apple,banana,mango"
console.log(fruits3.join()); // "apple,banana,mango" (same result)
// Example 4: toString with mixed types
let mixed = [1, "hello", true, 3.14];
console.log(mixed.toString()); // "1,hello,true,3.14"
// Example 5: Using toString for display
let colors3 = ["red", "green", "blue"];
console.log("Colors: " + colors3.toString()); // "Colors: red,green,blue"








// Example 1: Creating empty array
let arr1 = new Array();
console.log(arr1); // []
console.log(arr1.length); // 0
// Example 2: Creating array with specific length
let arr7 = new Array(5);
console.log(arr7); // [empty × 5]
console.log(arr7.length); // 5
// Example 3: Creating array with elements
let arr3 = new Array(1, 2, 3, 4);
console.log(arr3); // [1, 2, 3, 4]
// Example 4: Array literal vs constructor
let literal = [5]; // Array with one element: 5
let constructor = new Array(5); // Array with length 5
console.log(literal); // [5]
console.log(constructor); // [empty × 5]
// Example 5: Filling array after creation
let numbers5 = new Array(3);
numbers5[0] = 10;
numbers5[1] = 20;
numbers5[2] = 30;
console.log(numbers5); // [10, 20, 30]








// Example 1: Basic array check
let arr4 = [1, 2, 3];
console.log(Array.isArray(arr4)); // true
// Example 2: Checking non-arrays
console.log(Array.isArray("hello")); // false
console.log(Array.isArray(123)); // false
console.log(Array.isArray(true)); // false
// Example 3: Why typeof doesn't work
let numbers12 = [1, 2, 3];
console.log(typeof numbers12); // "object" (not helpful!)
console.log(Array.isArray(numbers12)); // true (correct!)
// Example 4: Checking empty array
let empty = [];
console.log(Array.isArray(empty)); // true
// Example 5: Using in conditional
let data = [10, 20, 30];
if (Array.isArray(data)) {
 console.log("It's an array with " + data.length + " elements");
} else {
 console.log("Not an array");
}










// Example 1: 2D array - Simple grid
let grid = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
];
console.log(grid[0][0]); // 1
console.log(grid[1][2]); // 6
console.log(grid[2][1]); // 8
// Example 2: Student records with multiple data
let students = [
 ["Alice", 20, [85, 90, 92]],
 ["Bob", 21, [78, 85, 88]],
 ["Charlie", 19, [92, 88, 95]]
];
console.log(students[0][0]); // "Alice"
console.log(students[1][2][0]); // 78 (Bob's first score)
// Example 3: Seating arrangement
let classroom = [
 ["Alice", "Bob", "Charlie"],
 ["David", "Eve", "Frank"],
 ["Grace", "Henry", "Iris"]
];
console.log(classroom[0][1]); // "Bob" (front row, middle seat)
console.log(classroom[2][2]); // "Iris" (back row, right seat)
// Example 4: Modifying nested arrays
let matrix = [
 [1, 2],
 [3, 4]
];
matrix[0][1] = 20;
matrix[1][0] = 30;
console.log(matrix); // [[1, 20], [30, 4]]
// Example 5: Iterating through 2D array
let numbers23 = [
 [1, 2, 3],
 [4, 5, 6]
];
console.log("Row 0:", numbers23[0]); // [1, 2, 3]
console.log("Row 1:", numbers23[1]); // [4, 5, 6]










// Example 1: Length property
let arr2 = [10, 20, 30, 40];
console.log(arr2.length); // 4
// Example 2: Changing length manually (truncates array)
let numbers = [1, 2, 3, 4, 5];
numbers.length = 3;
console.log(numbers); // [1, 2, 3]
// Example 3: Increasing length creates empty slots
let items2 = [1, 2];
items2.length = 5;
console.log(items2); // [1, 2, empty × 3]
console.log(items2[3]); // undefined
// Example 4: Adding element beyond current length
let colors2 = ["red", "green"];
colors2[5] = "blue";
console.log(colors2); // ["red", "green", empty × 3, "blue"]
console.log(colors2.length); // 6
// Example 5: Clearing an array
let data2 = [1, 2, 3, 4, 5];
data2.length = 0;
console.log(data2); // []








// Example 1: Clean, sort, and join
let tags = [" javascript ", " HTML ", " css ", " React "];
let cleaned = [];
cleaned.push(tags[0].trim().toLowerCase());
cleaned.push(tags[1].trim().toLowerCase());
cleaned.push(tags[2].trim().toLowerCase());
cleaned.push(tags[3].trim().toLowerCase());
cleaned.sort();
let result1 = cleaned.join(", ");
console.log(result1); // "css, html, javascript, react"
// Example 2: Slice and reverse
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let middle = numbers.slice(2, 6); // [3, 4, 5, 6]
middle.reverse();
console.log(middle); // [6, 5, 4, 3]
// Example 3: Concat and sort
let list1 = ["zebra", "apple"];
let list2 = ["mango", "banana"];
let combined = list1.concat(list2);
combined.sort();
console.log(combined); // ["apple", "banana", "mango", "zebra"]
// Example 4: Splice and push
let queue = ["first", "second", "third"];
let removed1 = queue.splice(0, 1); // Remove first
queue.push(removed1[0]); // Add to end
console.log(queue); // ["second", "third", "first"]
// Example 5: Multiple operations on array
let scores1 = [85, 92, 78, 95, 88];
scores1.push(90); // Add new score
scores1.sort((a, b) => b - a); // Sort descending
let top3 = scores1.slice(0, 3); // Get top 3
console.log(top3); // [95, 92, 90]