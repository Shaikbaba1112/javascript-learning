// async-await-day14-examples.js
// All examples from JavaScript Day 14: Async & Await notes
// Uncomment calls to test one by one

// Placeholder functions used in examples (simulate async ops)
function makeCoffee() {
    return new Promise(resolve => setTimeout(() => resolve("Coffee ready"), 1500));
}
function fetchUsers() {
    return new Promise(resolve => setTimeout(() => resolve(["User1", "User2"]), 1000));
}
function fetchData() { // Used in mistakes
    return new Promise(resolve => setTimeout(() => resolve("Data fetched"), 1000));
}

// 1. Promise Chain (old way)

console.log("1. Promise chain example");
// Define sim functions
function fetchUserData() {
    return new Promise(resolve => setTimeout(() => resolve({ id: 101 }), 500));
}
function fetchUserPosts(id) {
    return new Promise(resolve => setTimeout(() => resolve(["Post1"]), 500));
}
function fetchPostComments(id) {
    return new Promise(resolve => setTimeout(() => resolve(["Comment"]), 500));
}

fetchUserData()
    .then((user) => {
        console.log("User:", user);
        return fetchUserPosts(user.id);
    })
    .then((posts) => {
        console.log("Posts:", posts);
        return fetchPostComments(posts[0]);
    })
    .then((comments) => {
        console.log("Comments:", comments);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// 2. Async/Await (new way)

console.log("\n2. Async/Await example");

async function getUserContent() {
    try {
        const user = await fetchUserData();
        console.log("User:", user);

        const posts = await fetchUserPosts(user.id);
        console.log("Posts:", posts);

        const comments = await fetchPostComments(posts[0]);
        console.log("Comments:", comments);
    } catch (error) {
        console.log("Error:", error);
    }
}
// getUserContent(); // Uncomment

// 3. Normal vs Async function

console.log("\n3. Normal vs async function");

function normalGreeting() {
    return "Hello, Student!";
}
console.log(normalGreeting());

async function asyncGreeting() {
    return "Hello, Student!";
}
console.log(asyncGreeting());

asyncGreeting().then((message) => {
    console.log(message);
});

// 4. Async returning different values

console.log("\n4. Async returning different values");

async function getCourseName() {
    return "JavaScript Fundamentals";
}
getCourseName().then(name => console.log(name));

async function getStudentCount() {
    return 50;
}
getStudentCount().then(count => console.log(count));

async function getStudentInfo() {
    return {
        name: "Ali",
        rollNo: 101,
        course: "Web Development"
    };
}
getStudentInfo().then(info => console.log(info));

// 5. Async with errors

console.log("\n5. Async with errors");

async function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

divideNumbers(10, 2)
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error.message));

divideNumbers(10, 0)
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error.message));

// 6. Coffee shop without await

console.log("\n6. Coffee without await");

function orderCoffee() {
    console.log("Order placed");
    makeCoffee();
    console.log("Do other things while coffee is being made");
}
// orderCoffee(); // Uncomment

// 7. Coffee with await

console.log("\n7. Coffee with await");

async function orderCoffeeAwait() {
    console.log("Order placed");
    await makeCoffee();
    console.log("Coffee received, now I can drink it");
}
// orderCoffeeAwait(); // Uncomment

// 8. Basic await usage (student data)

console.log("\n8. Basic await student data");

function fetchStudentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Ahmed", grade: "A" });
        }, 2000);
    });
}

async function displayStudent() {
    console.log("Fetching student data...");
    const student = await fetchStudentData();
    console.log("Student Name:", student.name);
    console.log("Student Grade:", student.grade);
}
// displayStudent(); // Uncomment

// 9. Multiple await (bake cake)

console.log("\n9. Bake cake with multiple await");

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1: Gathering ingredients");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2: Mixing ingredients");
            resolve();
        }, 1000);
    });
}

function step3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3: Baking in oven");
            resolve();
        }, 1000);
    });
}

async function bakeCake() {
    console.log("Starting to bake...");
    await step1();
    await step2();
    await step3();
    console.log("Cake is ready!");
}
// bakeCake(); // Uncomment

// 10. Difference with/without await (slow task)

console.log("\n10. With/without await (slow task)");

function slowTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task completed");
        }, 2000);
    });
}

async function withoutAwait() {
    console.log("Start (without await)");
    slowTask();
    console.log("End (without await)");
}
// withoutAwait(); // Uncomment

async function withAwait() {
    console.log("Start (with await)");
    await slowTask();
    console.log("End (with await)");
}
// withAwait(); // Uncomment

// 11. Unpredictable order (roll numbers chaotic)

console.log("\n11. Chaotic roll numbers (no await)");

function generateRollNumber() {
    return new Promise((resolve) => {
        const delay = Math.random() * 2000;
        setTimeout(() => {
            const rollNo = Math.floor(Math.random() * 100) + 1;
            console.log("Generated Roll No:", rollNo);
            resolve();
        }, delay);
    });
}

async function assignRollNumbersChaotic() {
    console.log("--- Starting Assignment (chaotic) ---");
    generateRollNumber();
    generateRollNumber();
    generateRollNumber();
    console.log("--- Assignment Complete ---");
}
// assignRollNumbersChaotic(); // Uncomment

// 12. Sequential order (roll numbers ordered)

console.log("\n12. Ordered roll numbers (with await)");

async function assignRollNumbersOrdered() {
    console.log("--- Starting Assignment (ordered) ---");
    await generateRollNumber();
    await generateRollNumber();
    await generateRollNumber();
    console.log("--- Assignment Complete ---");
}
// assignRollNumbersOrdered(); // Uncomment

// 13. Processing exam submissions

console.log("\n13. Grade exams");

function processExam(studentName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const score = Math.floor(Math.random() * 100);
            console.log(`${studentName}: ${score} marks`);
            resolve(score);
        }, 1000);
    });
}

async function gradeExams() {
    console.log("Grading started...");
    const score1 = await processExam("Ali");
    const score2 = await processExam("Sara");
    const score3 = await processExam("Ahmed");
    const average = (score1 + score2 + score3) / 3;
    console.log("Class Average:", average.toFixed(2));
}
// gradeExams(); // Uncomment

// 14. Traffic light promise chain

console.log("\n14. Traffic light chain");

function changeLight(color, duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Traffic Light: ${color}`);
            resolve();
        }, duration);
    });
}

changeLight("RED", 3000)
    .then(() => changeLight("YELLOW", 1000))
    .then(() => changeLight("GREEN", 3000))
    .then(() => console.log("Traffic cycle complete"))
    .catch((error) => console.log("Error:", error));

// 15. Traffic light async/await

console.log("\n15. Traffic light async");

async function trafficLightCycle() {
    try {
        await changeLight("RED", 3000);
        await changeLight("YELLOW", 1000);
        await changeLight("GREEN", 3000);
        console.log("Traffic cycle complete");
    } catch (error) {
        console.log("Error:", error);
    }
}
// trafficLightCycle(); // Uncomment

// 16. User registration promise chain

console.log("\n16. Registration chain");

function validateEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes("@")) {
                resolve(email);
            } else {
                reject("Invalid email");
            }
        }, 1000);
    });
}

function checkEmailExists(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exists = false;
            if (exists) {
                reject("Email already registered");
            } else {
                resolve(email);
            }
        }, 1000);
    });
}

function createUser(email) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 123, email: email });
        }, 1000);
    });
}

validateEmail("user@example.com")
    .then((email) => checkEmailExists(email))
    .then((email) => createUser(email))
    .then((user) => console.log("User created:", user))
    .catch((error) => console.log("Registration failed:", error));

// 17. User registration async/await

console.log("\n17. Registration async");

async function registerUser(email) {
    try {
        await validateEmail(email);
        await checkEmailExists(email);
        const user = await createUser(email);
        console.log("User created:", user);
    } catch (error) {
        console.log("Registration failed:", error);
    }
}
// registerUser("user@example.com"); // Uncomment

// 18. Data processing chain

console.log("\n18. Data pipeline chain");

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([1, 2, 3, 4, 5]), 1000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processed = data.map(num => num * 2);
            resolve(processed);
        }, 1000);
    });
}

function saveData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Saved:", data);
            resolve("Success");
        }, 1000);
    });
}

fetchData()
    .then((data) => {
        console.log("Fetched:", data);
        return processData(data);
    })
    .then((processed) => {
        console.log("Processed:", processed);
        return saveData(processed);
    })
    .then((result) => console.log("Result:", result))
    .catch((error) => console.log("Error:", error));

// 19. Data processing async

console.log("\n19. Data pipeline async");

async function dataPipeline() {
    try {
        const data = await fetchData();
        console.log("Fetched:", data);

        const processed = await processData(data);
        console.log("Processed:", processed);

        const result = await saveData(processed);
        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}
// dataPipeline(); // Uncomment

// 20. Basic error handling

console.log("\n20. Basic error (risky op)");

function riskyOperation() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            if (success) {
                resolve("Operation successful!");
            } else {
                reject("Operation failed!");
            }
        }, 1000);
    });
}

async function performOperation() {
    try {
        console.log("Starting operation...");
        const result = await riskyOperation();
        console.log(result);
    } catch (error) {
        console.log("Caught error:", error);
    }
}
// performOperation(); // Uncomment (run multiple times for random result)

// 21. Multiple ops error handling (download install)

console.log("\n21. Download and install");

function checkInternet() {
    return new Promise((resolve, reject) => {
        const isOnline = true; // Change to false to test reject
        setTimeout(() => {
            if (isOnline) {
                resolve("Internet connected");
            } else {
                reject("No internet connection");
            }
        }, 500);
    });
}

function downloadFile(filename) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fileExists = true; // Change to false to test
            if (fileExists) {
                resolve(`Downloaded: ${filename}`);
            } else {
                reject(`File not found: ${filename}`);
            }
        }, 1500);
    });
}

function installFile(filename) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Installed: ${filename}`);
        }, 1000);
    });
}

async function downloadAndInstall(filename) {
    try {
        const internetStatus = await checkInternet();
        console.log(internetStatus);

        const downloadStatus = await downloadFile(filename);
        console.log(downloadStatus);

        const installStatus = await installFile(filename);
        console.log(installStatus);

        console.log("All done!");
    } catch (error) {
        console.log("Process failed:", error);
        console.log("Please try again later");
    }
}
// downloadAndInstall("ReactJS-Setup.exe"); // Uncomment

// 22. Handling specific errors (age validation)

console.log("\n22. Specific errors (student register)");

function validateAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age < 0) {
                reject({ type: "INVALID_AGE", message: "Age cannot be negative" });
            } else if (age < 18) {
                reject({ type: "UNDERAGE", message: "Must be 18 or older" });
            } else {
                resolve("Age verified");
            }
        }, 1000);
    });
}

async function registerStudent(name, age) {
    try {
        console.log(`Registering ${name}...`);
        await validateAge(age);
        console.log("Registration successful!");
    } catch (error) {
        if (error.type === "INVALID_AGE") {
            console.log("Error:", error.message);
            console.log("Please enter a valid age");
        } else if (error.type === "UNDERAGE") {
            console.log("Error:", error.message);
            console.log("Parent consent required");
        } else {
            console.log("Unknown error:", error);
        }
    }
}
// registerStudent("Ali", 16); // Uncomment

// 23. Try/catch with finally (payment)

console.log("\n23. Try/catch finally (payment)");

function processPayment(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = amount <= 1000;
            if (success) {
                resolve(`Payment of $${amount} processed`);
            } else {
                reject(`Payment of $${amount} failed: Insufficient balance`);
            }
        }, 2000);
    });
}

async function makePayment(amount) {
    console.log("Processing payment...");
    try {
        const result = await processPayment(amount);
        console.log("Success:", result);
    } catch (error) {
        console.log("Failed:", error);
    } finally {
        console.log("Transaction complete");
        console.log("Receipt sent to email");
    }
}
// makePayment(500); // success
// makePayment(1500); // failure

// 24. Practice 1: Weather app

console.log("\n24. Weather practice");

function fetchWeatherData(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const weatherData = {
                Lahore: { temp: 25, condition: "Sunny" },
                Karachi: { temp: 30, condition: "Hot" },
                Islamabad: { temp: 20, condition: "Pleasant" }
            };

            if (weatherData[city]) {
                resolve(weatherData[city]);
            } else {
                reject(`Weather data not found for ${city}`);
            }
        }, 1500);
    });
}

async function getWeather() {
    try {
        const weather = await fetchWeatherData("Lahore");
        console.log(`Temperature: ${weather.temp}°C`);
        console.log(`Condition: ${weather.condition}`);
    } catch (error) {
        console.log("Error:", error);
    }
}
// getWeather(); // Uncomment

// 25. Practice 2: Student grade

console.log("\n25. Student grade practice");

function fetchStudentGrades(studentId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const grades = {
                math: 85,
                english: 90,
                science: 88
            };
            resolve(grades);
        }, 1000);
    });
}

function calculateAverage(grades) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const subjects = Object.keys(grades);
            const total = subjects.reduce((sum, subject) => sum + grades[subject], 0);
            const average = total / subjects.length;
            resolve(average);
        }, 500);
    });
}

async function getStudentReport(studentId) {
    try {
        const grades = await fetchStudentGrades(studentId);
        console.log("Grades:", grades);

        const average = await calculateAverage(grades);
        console.log("Average:", average);

        if (average >= 90) {
            console.log("Grade: A");
        } else if (average >= 80) {
            console.log("Grade: B");
        } else {
            console.log("Grade: C");
        }
    } catch (error) {
        console.log("Error:", error);
    }
}
// getStudentReport(101); // Uncomment

// 26. Practice 3: File upload

console.log("\n26. File upload practice");

function validateFile(file) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (file.size > 5000000) {
                reject("File too large (max 5MB)");
            } else if (!file.name.endsWith(".pdf")) {
                reject("Only PDF files allowed");
            } else {
                resolve("File validated");
            }
        }, 1000);
    });
}

function uploadFile(file) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${file.name} uploaded successfully`);
        }, 2000);
    });
}

function sendNotification(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Notification sent: ${message}`);
        }, 500);
    });
}

async function handleFileUpload(file) {
    try {
        const validation = await validateFile(file);
        console.log(validation);

        const upload = await uploadFile(file);
        console.log(upload);

        const notification = await sendNotification("Upload complete!");
        console.log(notification);
    } catch (error) {
        console.log("Upload failed:", error);
    }
}
// handleFileUpload({ name: "report.pdf", size: 3000000 }); // valid
// handleFileUpload({ name: "image.jpg", size: 2000000 }); // invalid

// 27. Mistake 1: Forgetting async

console.log("\n27. Mistake: No async with await");

// Wrong (commented to avoid syntax error)
// function getData() {
//     const data = await fetchData();
//     return data;
// }

// Correct
async function getDataCorrect() {
    const data = await fetchData();
    return data;
}
// getDataCorrect().then(console.log);

// 28. Mistake 2: No await when needed

console.log("\n28. Mistake: No await");

function slowOperation() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Done"), 2000);
    });
}

// Wrong
async function processDataWrong() {
    const result = slowOperation(); // Promise <pending>
    console.log(result);
}
// processDataWrong(); // Uncomment

// Correct
async function processDataCorrect() {
    const result = await slowOperation();
    console.log(result); // "Done"
}
// processDataCorrect(); // Uncomment

// 29. Mistake 3: No try/catch

console.log("\n29. Mistake: No try/catch");

function riskyTask() {
    return new Promise((resolve, reject) => {
        reject("Something went wrong!");
    });
}

// Wrong (will crash if uncommented)
// async function doTaskWrong() {
//     const result = await riskyTask();
//     console.log(result);
// }
// doTaskWrong();

// Correct
async function doTaskCorrect() {
    try {
        const result = await riskyTask();
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}
// doTaskCorrect(); // Uncomment

// 30. Mistake 4: await in non-async

console.log("\n30. Mistake: await non-async");

// Wrong (syntax error)
// function getDataNonAsync() {
//     const users = await fetchUsers();
//     return users;
// }

// Wrong top-level (not in modules)
// const dataTop = await fetchData();

// Correct wrap
async function getDataWrapped() {
    const users = await fetchUsers();
    return users;
}

// IIFE
(async () => {
    const data = await fetchData();
    console.log(data);
})(); // Runs immediately
