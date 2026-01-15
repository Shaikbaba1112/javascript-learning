console.log("hello world");

//e 2
alert("welcome to js world");

//e 3
let text1 = "JavaScript";
text1.toUpperCase();

// Example 4: Methods can return values
let message = " hello ";
let cleaned = message.trim();
console.log(cleaned); 

// Example 5: Some methods take arguments
let word = "Mountains";
word.slice(0, 5); // "Mount"


// Trim Method Examples
// Example 1: Basic trimming
let username = " coding_wizard ";
let clean = username.trim();
console.log(clean); // "coding_wizard"
// Example 2: Trimming user input
let email = " user@example.com ";
let cleanEmail = email.trim();
console.log(cleanEmail); // "user@example.com"
// Example 3: Only removes leading and trailing spaces
let text = " hello world ";
console.log(text.trim()); // "hello world" (middle spaces remain)
// Example 4: Original string unchanged
let original = " test ";
let trimmed = original.trim();
console.log(original); // " test " (still has spaces)
console.log(trimmed); // "test"
// Example 5: Trimming empty spaces
let input = " ";
console.log(input.trim()); // "" (empty string)


// String Immutability Examples
// Example 1: String methods return new strings
let greeting = "hello";
greeting.toUpperCase();
console.log(greeting); // "hello" (unchanged)
// Example 2: Must store the result
let message1 = "javascript";
let upper = message1.toUpperCase();
console.log(message1); // "javascript" (original unchanged)
console.log(upper); // "JAVASCRIPT" (new string)
// Example 3: Cannot change individual characters
let word1 = "cat";
word1[0] = "b"; // This doesn't work!
console.log(word1); // "cat" (still unchanged)
// Example 4: Multiple operations create multiple strings
let text2 = " HELLO ";
let result = text2.trim().toLowerCase();
console.log(text2); // " HELLO " (original)
console.log(result); // "hello" (new string)
// Example 5: Concatenation creates new strings
let first = "Hello";
let second = " World";
let combined = first + second;
console.log(first); // "Hello" (unchanged)
console.log(combined); // "Hello World" (new string)


// Case Conversion Method Examples
// Example 1: Converting to uppercase
let msg = "JavaScript is Fun";
console.log(msg.toUpperCase()); // "JAVASCRIPT IS FUN"
// Example 2: Converting to lowercase
let shout = "STOP YELLING";
console.log(shout.toLowerCase()); // "stop yelling"
// Example 3: Comparing user input (case-insensitive)
let userInput = "YeS";
if (userInput.toLowerCase() === "yes") {
 console.log("User agreed!");
}
// Example 4: Mixed case conversion
let mixed = "HeLLo WoRLd";
console.log(mixed.toLowerCase()); // "hello world"
console.log(mixed.toUpperCase()); // "HELLO WORLD"
// Example 5: Working with email addresses
let email1 = "User@EXAMPLE.COM";
console.log(email1.toLowerCase()); // "user@example.com"



// IndexOf Method Examples
// Example 1: Finding a character
let str = "Hello World";
console.log(str.indexOf("W")); // 6
console.log(str.indexOf("o")); // 4 (first occurrence)
// Example 2: Finding a substring
let sentence = "I love JavaScript";
console.log(sentence.indexOf("love")); // 2
console.log(sentence.indexOf("Java")); // 7
// Example 3: Character not found
let text3 = "Hello World";
console.log(text3.indexOf("z")); // -1
// Example 4: Case sensitivity
let word3 = "JavaScript";
console.log(word3.indexOf("java")); // -1 (case matters!)
console.log(word3.indexOf("Java")); // 0
// Example 5: Checking if substring exists
let message2 = "Welcome to coding";
if (message2.indexOf("coding") !== -1) {
 console.log("Found the word coding!");
}



// Method Chaining Examples
// Example 1: Basic chaining
let msg2 = " hello ";
let result2 = msg2.trim().toUpperCase();
console.log(result2); // "HELLO"
// Example 2: Three methods chained
let input1 = " JAVASCRIPT ";
let clean1 = input1.trim().toLowerCase().slice(0, 4);
console.log(clean1); // "java"
// Example 3: Cleaning user input
let username2 = " UserName123 ";
let processed = username2.trim().toLowerCase();
console.log(processed); // "username123"
// Example 4: Complex chaining
let text4 = " Hello World ";
let output = text4.trim().toUpperCase().replace("HELLO", "HI");
console.log(output); // "HI WORLD"
// Example 5: Order matters in chaining
let word4 = "javascript";
console.log(word4.slice(0, 4).toUpperCase()); // "JAVA"
console.log(word4.toUpperCase().slice(0, 4)); // "JAVA" (same result)



//sclicing string examples
// Example 1: Basic slicing
let word5 = "Mountains";
console.log(word5.slice(0, 5)); // "Mount"
console.log(word5.slice(5)); // "ains"
// Example 2: Extracting middle portion
let text5 = "JavaScript";
console.log(text5.slice(4, 10)); // "Script"
// Example 3: Slicing from an index to end
let message4 = "Hello World";
console.log(message4.slice(6)); // "World"
// Example 4: Using negative indices (from end)
let lang = "JavaScript";
console.log(lang.slice(--6)); // "Script"
console.log(lang.slice(0, --6)); // "Java"
// Example 5: Getting first and last characters
let name = "Alexander";
console.log(name.slice(0, 1)); // "A" (first)
console.log(name.slice(--1)); // "r" (last)




// Replace Method Examples
// Example 1: Basic replacement
let fruit = "I love apple pie";
console.log(fruit.replace("apple", "cherry")); // "I love cherry pie"
// Example 2: Only first occurrence is replaced
let text6 = "I love apple pie and apple juice";
console.log(text6.replace("apple", "orange"));
// "I love orange pie and apple juice"
// Example 3: Case sensitivity
let message6 = "Hello hello HELLO";
console.log(message6.replace("hello", "hi")); // "Hello hi HELLO"
// Example 4: Replacing spaces
let sentence1 = "Hello World";
console.log(sentence1.replace(" ", "-")); // "Hello-World"
// Example 5: Chaining with replace
let str1 = " javascript ";
let result1 = str1.trim().replace("java", "type");
console.log(result1); // "typescript"