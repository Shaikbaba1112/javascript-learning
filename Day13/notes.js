// 1. Synchronous Execution

console.log("1. Synchronous example:");
console.log("Step 1: Starting the program");
console.log("Step 2: Doing some work");
console.log("Step 3: Finishing up\n");

// 2. Blocking Problem (heavy loop – this may slow your console!)

console.log("2. Blocking loop example:");
console.log("Before the long calculation");
// Uncomment below to test – it will block for ~seconds depending on machine
// for (let i = 0; i < 5000000000; i++) {} // Heavy calculation (WARNING: May freeze)
console.log("After the long calculation\n"); // If blocked, this delays

// 3. Synchronous Operations (instant)

console.log("3. Sync ops:");
let x = 10;
let y = 20;
let sum = x + y;
console.log(sum); // 30

let name = "Alice";
let greeting = "Hello, " + name;
console.log(greeting); // Hello, Alice\n

// 4. Asynchronous setTimeout Basic

console.log("4. Async setTimeout:");
console.log("Starting");
setTimeout(() => {
    console.log("This appears after 2 seconds");
}, 2000);
console.log("Ending\n");

// 5. CPU Bound (Fibonacci – recursive, slow for large n!)

console.log("5. CPU Bound Fibonacci:");
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Calculating...");
// let result = fibonacci(40); // WARNING: This is slow/blocking! Uncomment to test
// console.log("Result:", result);
console.log("Done! (if not blocked)\n");

// 6. I/O Bound (fetch – browser only)

console.log("6. I/O Bound fetch:");
// fetch('https://api.example.com/data') // Uncomment in browser
//     .then(response => response.json())
//     .then(data => console.log(data));
console.log("Request sent, but not waiting!\n");

// 7. setTimeout First Async

console.log("7. setTimeout program flow:");
console.log("1. Program starts");
setTimeout(() => {
    console.log("2. This runs after 2 seconds");
}, 2000);
console.log("3. Program continues immediately\n");

// 8. Multiple Timers (CGC Portal)

console.log("8. Multiple timers:");
console.log("Open CGC Portal");
setTimeout(() => console.log("Header loaded"), 1000);
setTimeout(() => console.log("Student data loaded"), 2000);
setTimeout(() => console.log("Footer loaded"), 500);
console.log("Portal structure ready\n");

// 9. Form Submission Simulation (setTimeout)

console.log("9. Form submission sim:");
function submitForm() {
    console.log("Submitting form...");
    setTimeout(() => {
        console.log("Form submitted successfully!");
        console.log("Redirecting to dashboard...");
    }, 1500);
    console.log("Please wait...");
}
submitForm();

// 10. Basic Callback

console.log("\n10. Basic callback:");
function greetCallback(name, callback) {
    console.log("Hello, " + name);
    callback();
}
function sayGoodbyeCallback() {
    console.log("Goodbye!");
}
greetCallback("Alice", sayGoodbyeCallback);

// 11. Async Callback (fetch student)

console.log("\n11. Async callback (student data):");
function fetchStudentData(studentId, callback) {
    console.log("Fetching data for student ID:", studentId);
    setTimeout(() => {
        let studentData = {
            id: studentId,
            name: "Rahul Sharma",
            course: "Computer Science"
        };
        console.log("Data fetched successfully!");
        callback(studentData);
    }, 2000);
}
function displayStudent(data) {
    console.log("Displaying student:");
    console.log("Name:", data.name);
    console.log("Course:", data.course);
}
fetchStudentData(101, displayStudent);

// 12. Car Service Callback Analogy

console.log("\n12. Car service callback:");
function serviceVehicle(carModel, phoneNumber) {
    console.log("Received", carModel, "for service");
    console.log("Customer can leave now");
    setTimeout(() => {
        console.log("Service complete!");
        phoneNumber(); // Call back
    }, 3000);
}
function customerCallback() {
    console.log("📞 Ring ring! Your car is ready!");
    console.log("Customer returns to pick up car");
}
serviceVehicle("Honda City", customerCallback);

// 13. Callback Hell (color change pyramid)

console.log("\n13. Callback Hell (colors):");
function changeColor(color, delay, callback) {
    setTimeout(() => {
        // document.body.style.backgroundColor = color; // Browser only
        console.log("Changed to", color);
        if (callback) callback();
    }, delay);
}
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("blue", 1000, () => {
                console.log("All colors done!");
            });
        });
    });
});

// 14. Callback Hell (user registration)

console.log("\n14. Callback Hell (registration):");
function registerUser(username, callback) {
    setTimeout(() => {
        console.log("User registered:", username);
        callback();
    }, 1000);
}
function sendVerificationEmail(callback) {
    setTimeout(() => {
        console.log("Verification email sent");
        callback();
    }, 1000);
}
function updateDatabase(callback) {
    setTimeout(() => {
        console.log("Database updated");
        callback();
    }, 1000);
}
function sendWelcomeSMS(callback) {
    setTimeout(() => {
        console.log("Welcome SMS sent");
        callback();
    }, 1000);
}
registerUser("john_doe", () => {
    sendVerificationEmail(() => {
        updateDatabase(() => {
            sendWelcomeSMS(() => {
                console.log("Registration complete!");
            });
        });
    });
});

// 15. Callback Hell Error Handling

console.log("\n15. Callback Hell with errors:");
// Functions not defined in notes, but pyramid shown – here's a sim
// getData((err, data) => {
//     if (err) { console.error("Error in getData"); } else {
//         processData(data, (err, result) => {
//             if (err) { console.error("Error in processData"); } else {
//                 saveData(result, (err, saved) => {
//                     if (err) { console.error("Error in saveData"); } else {
//                         console.log("Success!");
//                     }
//                 });
//             }
//         });
//     }
// });

// 16. Basic Promise Creation

console.log("\n16. Basic Promise:");
let basicPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

// 17. Download File Promise

console.log("\n17. Download file Promise:");
let internetSpeed = "fast";
let downloadFile = new Promise((resolve, reject) => {
    console.log("Download started...");
    setTimeout(() => {
        if (internetSpeed === "fast") {
            resolve("File downloaded successfully!");
        } else {
            reject("Download failed: Slow internet");
        }
    }, 2000);
});
console.log("Download initiated");
console.log(downloadFile); // Shows Promise object

// 18. Save to Database Promise

console.log("\n18. Save database Promise:");
function saveToDatabase(data) {
    return new Promise((resolve, reject) => {
        console.log("Saving to database...");
        setTimeout(() => {
            let dbAvailable = true;
            if (dbAvailable) {
                resolve({
                    message: "Data saved successfully",
                    id: 12345,
                    timestamp: new Date()
                });
            } else {
                reject("Database connection failed");
            }
        }, 1500);
    });
}
let savePromise = saveToDatabase({ name: "John", age: 25 });
console.log(savePromise); // Promise object

// 19. .then() Basic

console.log("\n19. .then basic:");
let thenPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success! Data is here.");
    }, 1000);
});
thenPromise.then((message) => {
    console.log(message);
});

// 20. .catch() Basic

console.log("\n20. .catch basic:");
let catchPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error! Something went wrong.");
    }, 1000);
});
catchPromise.catch((error) => {
    console.log(error);
});

// 21. .then + .catch Together (login)

console.log("\n21. Then/catch login:");
let loginStatus = "success"; // Change to "failure" to test reject
let loginPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (loginStatus === "success") {
            resolve("Login successful! Welcome back.");
        } else {
            reject("Login failed! Invalid credentials.");
        }
    }, 1500);
});
loginPromise
    .then((message) => {
        console.log("✅ ", message);
        console.log("Redirecting to dashboard...");
    })
    .catch((error) => {
        console.log("❌ ", error);
        console.log("Please try again.");
    });

// 22. Fetch User Profile (success/fail)

console.log("\n22. Fetch user profile:");
function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching user profile...");
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "Priya Sharma",
                    email: "priya@example.com",
                    role: "Student"
                });
            } else {
                reject("Invalid user ID");
            }
        }, 2000);
    });
}
// Success
fetchUserProfile(101)
    .then((user) => {
        console.log("User found!");
        console.log("Name:", user.name);
        console.log("Email:", user.email);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
// Failure
fetchUserProfile(-1)
    .then((user) => {
        console.log("User found!", user);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// 23. .finally() (bonus)

console.log("\n23. Finally example:");
let loadingSpinner = true;
// Assume fetchData returns a Promise – sim here
let fetchDataPromise = new Promise((resolve) => resolve("data"));
fetchDataPromise
    .then((data) => {
        console.log("Data:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        loadingSpinner = false;
        console.log("Loading complete - hide spinner");
    });

// 24. Promise Chaining (steps)

console.log("\n24. Promise chaining steps:");
function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 complete");
            resolve("Data from step 1");
        }, 1000);
    });
}
function step2(previousData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 2 complete");
            console.log("Received:", previousData);
            resolve("Data from step 2");
        }, 1000);
    });
}
function step3(previousData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 3 complete");
            console.log("Received:", previousData);
            resolve("Final result");
        }, 1000);
    });
}
step1()
    .then((result1) => step2(result1))
    .then((result2) => step3(result2))
    .then((finalResult) => {
        console.log("All done!", finalResult);
    })
    .catch((error) => {
        console.log("Error at some step:", error);
    });

// 25. Color Change Refactored (Promise chain)

console.log("\n25. Color change Promise chain:");
function changeColorPromise(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // document.body.style.backgroundColor = color;
            console.log("Changed to", color);
            resolve();
        }, delay);
    });
}
changeColorPromise("red", 1000)
    .then(() => changeColorPromise("orange", 1000))
    .then(() => changeColorPromise("green", 1000))
    .then(() => changeColorPromise("blue", 1000))
    .then(() => {
        console.log("All colors complete!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// 26. User Registration Refactored (Promise chain)

console.log("\n26. Registration Promise chain:");
function registerUserPromise(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ User registered:", username);
            resolve(username);
        }, 1000);
    });
}
function sendVerificationEmailPromise(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ Verification email sent to", username);
            resolve(username);
        }, 1000);
    });
}
function updateDatabasePromise(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ Database updated for", username);
            resolve(username);
        }, 1000);
    });
}
function sendWelcomeSMSPromise(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("✅ Welcome SMS sent to", username);
            resolve(username);
        }, 1000);
    });
}
registerUserPromise("john_doe")
    .then(sendVerificationEmailPromise)
    .then(updateDatabasePromise)
    .then(sendWelcomeSMSPromise)
    .then((username) => {
        console.log("🎉 Registration complete for", username);
    })
    .catch((error) => {
        console.log("❌ Registration failed:", error);
    });

// 27. Passing Data Through Chain (user orders)

console.log("\n27. Chain with data passing (orders):");
function getUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "Alice" });
        }, 1000);
    });
}
function getUserOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user: user,
                orders: ["Order1", "Order2", "Order3"]
            });
        }, 1000);
    });
}
function calculateTotal(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user: data.user,
                orders: data.orders,
                total: 2500
            });
        }, 1000);
    });
}
getUser(101)
    .then((user) => {
        console.log("Got user:", user.name);
        return getUserOrders(user);
    })
    .then((data) => {
        console.log("Got orders:", data.orders);
        return calculateTotal(data);
    })
    .then((finalData) => {
        console.log("User:", finalData.user.name);
        console.log("Total orders:", finalData.orders.length);
        console.log("Total amount:", finalData.total);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// 28. Practice 1: Simple Promise (check result)

console.log("\n28. Practice: Check result Promise");
function checkResult(marks) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks >= 40) {
                resolve("Passed! Congratulations!");
            } else {
                reject("Failed. Better luck next time.");
            }
        }, 1000);
    });
}
checkResult(75)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

// 29. Practice 2: Chain (login → profile → posts)

console.log("\n29. Practice: Login chain");
function login(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Logged in as", username);
            resolve(username);
        }, 1000);
    });
}
function fetchProfile(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ username: username, bio: "Web Developer" });
        }, 1000);
    });
}
function fetchPosts(profile) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                profile: profile,
                posts: ["Post 1", "Post 2", "Post 3"]
            });
        }, 1000);
    });
}
login("alice_dev")
    .then(fetchProfile)
    .then(fetchPosts)
    .then((data) => {
        console.log("Profile:", data.profile);
        console.log("Posts:", data.posts);
    })
    .catch((error) => console.log("Error:", error));

// 30. Practice 3: Random Operation

console.log("\n30. Practice: Random op");
function randomOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.random();
            if (random > 0.5) {
                resolve("Success! Random value: " + random);
            } else {
                reject("Failed! Random value: " + random);
            }
        }, 1000);
    });
}
randomOperation()
    .then((message) => console.log("✅ ", message))
    .catch((error) => console.log("❌ ", error));
