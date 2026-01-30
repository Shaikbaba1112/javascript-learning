// Q 1 
// C number 
// NaN (Not a Number) is technically of type "number" in javaScript, which is paradoxical but correct.

// Q 2
// B 2anPlace
// Identifies cannot start with a digit. valid identifies must start with a letter, underscore(_),or dollar sign($).

// Q 3
// A 3
// Following order of operations: (5 + 2) / 7 + 1 * 2 = 7/7 + 2 = 1 + 2 = 3

// Q 4
// C **
// The double asterisk () is the exponentiation operator. for example 5 ** 2 equals 25.

// Q 5
// B 23
// The expression age + 2 calculates but doesn't assign the result back to age. To change age, you'd need age = age + 2 or age += 2.

// Q 6
// A true
// The == operator performs type coercion, converting the string "5" to number 5 before comparison.

// Q 7
// D 0
// Falsy values in javascript are false, 0, "", null, undefined, and NaN. All other values are truthy.

// Q 8
// B The string "25"
// The prompt() method always returns a string, regardless of what the user types.

// Q 9
// B Beta
// x > 5 is true (10 > 5), but y < 15 is false (20 is not < 15). Since AND (&&) requires both to be true, the condition fails and "Beta" is printed

// Q 10
// C 
// Without break, execution continues into the next case block, which is called "fall-through" behavior.

// Q 11
// B .trim()
// The trim() method removes whitespace from both ends of a string.

// Q 12
// C
// Once created, their characters cannot be changed in memory
// String immutability means you can't modify individual characters. Any "change" creates a new string.

// Q 13
// A Mount 
// slice(0, 5) extracts characters from index 0 up to (but not including) index 5.

// Q 14
// D .unshift()
// unshift() adds elements to the beginning of an array. push() adds to the end.

// Q 15
// B 99
// Arrays are reference types. arr2 points to the same array as arr1, so modifying arr2 also modifies arr1.

// Q 16
// B .splice()
// splice() is the versatile method for adding, removing, or replacing elements at any position.

// Q 17
// B false
// Arrays are objects and compared by reference, not by value. These are two different arrays in memory.

// Q 18
// B 5 times
// Loop runs with i = 1, 3, 5, 7, 9 (5 iterations). When i = 11, the condition i <= 10 becomes false.

// Q 19
// C for of 
// for...of iterates over values of iterables (arrays, strings). for...in iterates over keys/indices.

// Q 20
// C 3

// After i becomes 3, the condition i < 3 is false, so the loop stops. i retains the value 3.

// Q 21
// B user.name
// Dot notation is used to access object properties. user["name"] with quotes would also work.

// Q 22
// C delete
// The delete operator removes a property from an object: delete user.name

// Q 23
// A Math.floor()
// Math.floor() rounds down to the nearest integer.

// Q 24
// C Math.random()
// Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

// Q 25
// B Math.max()
// Math.max() returns the largest of the given numbers.

// Q 26
// B BigInt
// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1.

// Q 27
// C NaN
// NaN stands for "Not a Number" and represents an invalid or unrepresentable number result.

// Q 28
// C Parentheses(())
// Parentheses have the highest precedence, followed by exponentiation, then multiplication/division, then addition/subtraction.

// Q 29
// B
//  The value is used first, then changed
// Post-increment (age++) uses the current value in the expression, then increments. Pre-increment (++age) increments first.

// Q 30
// C camelCase
// camelCase is the convention where the first word is lowercase and subsequent words are capitalized, e.g., myVariableName.

// Q 31
// C undefined
// A variable declared but not assigned a value has the value undefined by default.

// Q 32
// A true
// The strict equality operator (===) checks both value and type without type coercion.

// Q 33
// B false
// The strict equality operator (===) checks both value and type without type coercion. Here, types differ (number vs. string).

// Q 34
// C ${expression}
// Template literals use ${} to embed expressions within backticks (` `) for string interpolation.

// Q 35
// B || (Logical OR)
// The || operator returns true if at least one operand is true; both must be false to return false.

// Q 36
// A 
// NOT > AND > OR
// Logical NOT (!) has highest precedence, then AND (&&), then OR (||).

// Q 37
// B .indexOf()
// indexOf() returns the first index at which a given element can be found in the array, or -1 if not present.

// Q 38
// B 
// Replaces only the first occurrence
// replace() replaces only the first match. Use replaceAll() or regex with g flag for all occurrences./

// Q 39
// C students.length
// The length property gives the number of elements in an array.

// Q 40
// B .pop()
// pop() removes and returns the last element of an array.

// Q 41
// B 
// true
// includes() returns true if the array contains the specified value.

// Q 42
// C do...while loop
// A do...while loop executes the block at least once before checking the condition.

// Q 43
// B Nested loops
// Nested loops are loops inside other loops, allowing iteration over multi-dimensional data structures.

// Q 44
// C 
//  continue
// continue skips the rest of the current iteration and moves to the next one.

// Q 45
// C 
// It creates an Infinite Loop
// Without a way to make the condition false, the loop runs forever.

// Q 46
// B 
// Arrays use ordered indices; Objects use keyed collections (key-value pairs)
// Arrays have numeric indices (0, 1, 2...), objects have named keys.

// Q 47
// B
// student[1] (using bracket notation)
// When keys are numeric or non-standard identifiers, use bracket notation.

// Q 48
// C Math.ceil()
// Math.ceil() rounds a number up to the nearest integer.

// Q 49
// C
// Math.ceil(Math.random() * 10)
// This generates 1-10 inclusive. Math.random() * 10 gives 0-9.99..., ceil() rounds up.

// Q 50
// C Math.PI
// Math.PI provides the value of π (pi) to high precision.(approximately 3.14159).

