// JavaScript DOM Events - All Examples

// Example 1: Basic Button Click
function example1_basicButtonClick() {
    let btn = document.querySelector("button");
    if (btn) {
        btn.addEventListener("click", function() {
            console.log("Button was clicked!");
            alert("You clicked me!");
        });
        console.log("Example 1: Basic Button Click - Ready");
    }
}

// Example 2: Multiple Listeners on Same Element
function example2_multipleListeners() {
    let button = document.querySelector("#myBtn");
    if (button) {
        // First listener
        button.addEventListener("click", function() {
            console.log("First action");
        });
        
        // Second listener (doesn't overwrite the first!)
        button.addEventListener("click", function() {
            console.log("Second action");
        });
        console.log("Example 2: Multiple Listeners - Ready");
    }
}

// Example 3: Paragraph Click Counter
function example3_paragraphClickCounter() {
    let para = document.querySelector("p");
    if (para) {
        let count = 0;
        para.addEventListener("click", function() {
            count++;
            para.innerHTML = `You clicked me ${count} times`;
        });
        console.log("Example 3: Paragraph Click Counter - Ready");
    }
}

// Example 4: Hover Color Change
function example4_hoverColorChange() {
    let box = document.querySelector(".box");
    if (box) {
        box.addEventListener("mouseenter", function() {
            box.style.backgroundColor = "yellow";
            console.log("Mouse entered!");
        });
        
        box.addEventListener("mouseleave", function() {
            box.style.backgroundColor = "white";
            console.log("Mouse left!");
        });
        console.log("Example 4: Hover Color Change - Ready");
    }
}

// Example 5: Click to Toggle Visibility
function example5_toggleVisibility() {
    let hideBtn = document.querySelector("#hideBtn");
    let content = document.querySelector("#content");
    
    if (hideBtn && content) {
        hideBtn.addEventListener("click", function() {
            if (content.style.display === "none") {
                content.style.display = "block";
                hideBtn.innerHTML = "Hide";
            } else {
                content.style.display = "none";
                hideBtn.innerHTML = "Show";
            }
        });
        console.log("Example 5: Toggle Visibility - Ready");
    }
}

// Example 6: Double Click to Edit
function example6_doubleClickEdit() {
    let heading = document.querySelector("h1");
    if (heading) {
        heading.addEventListener("dblclick", function() {
            heading.innerHTML = "You double-clicked me!";
            heading.style.color = "red";
        });
        console.log("Example 6: Double Click Edit - Ready");
    }
}

// Example 7: Interactive Card Hover
function example7_interactiveCardHover() {
    let card = document.querySelector(".card");
    if (card) {
        card.addEventListener("mouseenter", function() {
            card.style.transform = "scale(1.1)";
            card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
        });
        
        card.addEventListener("mouseleave", function() {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
        });
        console.log("Example 7: Interactive Card Hover - Ready");
    }
}

// Example 8: Universal Color Changer
function example8_universalColorChanger() {
    let h1 = document.querySelector("h1");
    let h2 = document.querySelector("h2");
    let button = document.querySelector("button");
    
    function changeColor() {
        this.style.backgroundColor = "lightblue";
        console.log(this.innerText + " was clicked!");
    }
    
    if (h1) h1.addEventListener("click", changeColor);
    if (h2) h2.addEventListener("click", changeColor);
    if (button) button.addEventListener("click", changeColor);
    
    console.log("Example 8: Universal Color Changer - Ready");
}

// Example 9: Toggle Class on Click
function example9_toggleClass() {
    let boxes = document.querySelectorAll(".box");
    
    function toggleActive() {
        this.classList.toggle("active");
    }
    
    for (let box of boxes) {
        box.addEventListener("click", toggleActive);
    }
    console.log("Example 9: Toggle Class - Ready");
}

// Example 10: Delete Button
function example10_deleteButton() {
    let deleteButtons = document.querySelectorAll(".delete-btn");
    
    function removeItem() {
        this.parentElement.remove(); // Remove the parent div
        console.log("Item deleted!");
    }
    
    for (let btn of deleteButtons) {
        btn.addEventListener("click", removeItem);
    }
    console.log("Example 10: Delete Button - Ready");
}

// Example 11: Highlight on Hover
function example11_highlightOnHover() {
    let menuItems = document.querySelectorAll(".menu-item");
    
    function highlight() {
        // Remove highlight from all items first
        for (let item of menuItems) {
            item.style.fontWeight = "normal";
        }
        // Highlight only the clicked one
        this.style.fontWeight = "bold";
    }
    
    for (let item of menuItems) {
        item.addEventListener("click", highlight);
    }
    console.log("Example 11: Highlight on Hover - Ready");
}

// Example 12: Display Typed Character
function example12_displayTypedCharacter() {
    let input = document.querySelector('input');
    if (input) {
        input.addEventListener('keydown', function(event) {
            console.log("Key:", event.key);
            console.log("Code:", event.code);
        });
        console.log("Example 12: Display Typed Character - Ready");
    }
}

// Example 13: Arrow Key Navigation
function example13_arrowKeyNavigation() {
    let player = document.querySelector('#player');
    
    if (player) {
        // Initialize player position if not set
        if (!player.style.top) player.style.top = "0px";
        if (!player.style.left) player.style.left = "0px";
        
        document.addEventListener('keydown', function(event) {
            if (event.code === "ArrowUp") {
                console.log("Move Up");
                player.style.top = (parseInt(player.style.top) - 10) + "px";
            } else if (event.code === "ArrowDown") {
                console.log("Move Down");
                player.style.top = (parseInt(player.style.top) + 10) + "px";
            } else if (event.code === "ArrowLeft") {
                console.log("Move Left");
                player.style.left = (parseInt(player.style.left) - 10) + "px";
            } else if (event.code === "ArrowRight") {
                console.log("Move Right");
                player.style.left = (parseInt(player.style.left) + 10) + "px";
            }
        });
        console.log("Example 13: Arrow Key Navigation - Ready");
    }
}

// Example 14: Enter Key to Submit
function example14_enterKeySubmit() {
    let searchBox = document.querySelector("#search");
    if (searchBox) {
        searchBox.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                console.log("Searching for:", searchBox.value);
                alert("You searched for: " + searchBox.value);
            }
        });
        console.log("Example 14: Enter Key Submit - Ready");
    }
}

// Example 15: Keyboard Shortcut
function example15_keyboardShortcut() {
    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && event.key === "s") {
            event.preventDefault(); // Stop browser from saving page
            console.log("Custom save triggered!");
            alert("Content saved!");
        }
    });
    console.log("Example 15: Keyboard Shortcut - Ready");
}

// Example 16: Character Limit Warning
function example16_characterLimitWarning() {
    let textarea = document.querySelector("textarea");
    let counter = document.querySelector("#counter");
    
    if (textarea && counter) {
        textarea.addEventListener("keyup", function() {
            let length = textarea.value.length;
            counter.innerHTML = length + "/100 characters";
            
            if (length > 100) {
                counter.style.color = "red";
            } else {
                counter.style.color = "black";
            }
        });
        console.log("Example 16: Character Limit Warning - Ready");
    }
}

// Example 17: Basic Form Submission Prevention
function example17_formSubmissionPrevention() {
    let form = document.querySelector("form");
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // STOP the page reload!
            console.log("Form submitted!");
        });
        console.log("Example 17: Form Submission Prevention - Ready");
    }
}

// Example 18: Login Form Handler
function example18_loginFormHandler() {
    let loginForm = document.querySelector("#loginForm");
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let username = document.querySelector("#username").value;
            let password = document.querySelector("#password").value;
            
            console.log("Username:", username);
            console.log("Password:", password);
            
            alert("Welcome, " + username + "!");
        });
        console.log("Example 18: Login Form Handler - Ready");
    }
}

// Example 19: Form Validation
function example19_formValidation() {
    let signupForm = document.querySelector("#signup");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            let email = document.querySelector("#email").value;
            let age = document.querySelector("#age").value;
            
            if (age < 18) {
                alert("You must be 18 or older to sign up!");
            } else if (!email.includes("@")) {
                alert("Please enter a valid email!");
            } else {
                alert("Signup successful!");
                console.log("User registered:", email);
            }
        });
        console.log("Example 19: Form Validation - Ready");
    }
}

// Example 20: Search Form with Results Display
function example20_searchFormDisplay() {
    let searchForm = document.querySelector("#searchForm");
    let results = document.querySelector("#results");
    
    if (searchForm && results) {
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            let query = document.querySelector("#searchInput").value;
            results.innerHTML = `You searched for: ${query}`;
            
            // Clear the input
            document.querySelector("#searchInput").value = "";
        });
        console.log("Example 20: Search Form Display - Ready");
    }
}

// Example 21: Get Input Value
function example21_getInputValue() {
    let nameInput = document.querySelector("#name");
    let btn = document.querySelector("#submitBtn");
    
    if (nameInput && btn) {
        btn.addEventListener("click", function() {
            let userName = nameInput.value; // Use .value for inputs!
            console.log("Name entered:", userName);
        });
        console.log("Example 21: Get Input Value - Ready");
    }
}

// Example 22: Multiple Input Fields
function example22_multipleInputFields() {
    let form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            
            let firstName = document.querySelector("#firstName").value;
            let lastName = document.querySelector("#lastName").value;
            let email = document.querySelector("#email").value;
            
            console.log("Full Name:", firstName + " " + lastName);
            console.log("Email:", email);
        });
        console.log("Example 22: Multiple Input Fields - Ready");
    }
}

// Example 23: Dropdown Selection
function example23_dropdownSelection() {
    let dropdown = document.querySelector("#country");
    let btn = document.querySelector("#selectBtn");
    
    if (dropdown && btn) {
        btn.addEventListener("click", function() {
            let selected = dropdown.value;
            console.log("Selected country:", selected);
            alert("You selected: " + selected);
        });
        console.log("Example 23: Dropdown Selection - Ready");
    }
}

// Example 24: Live Character Counter
function example24_liveCharacterCounter() {
    let textArea = document.querySelector("textarea");
    let counter = document.querySelector("#charCount");
    
    if (textArea && counter) {
        textArea.addEventListener("input", function() {
            let count = textArea.value.length;
            counter.innerText = count + " characters";
        });
        console.log("Example 24: Live Character Counter - Ready");
    }
}

// Example 25: Final Submission
function example25_finalSubmission() {
    let nameField = document.querySelector("#name");
    if (nameField) {
        nameField.addEventListener("change", function() {
            console.log("Final name:", nameField.value);
            alert("Name saved: " + nameField.value);
        });
        console.log("Example 25: Final Submission - Ready");
    }
}

// Example 26: Live Search Suggestions
function example26_liveSearchSuggestions() {
    let searchBox = document.querySelector("#search");
    let suggestions = document.querySelector("#suggestions");
    
    if (searchBox && suggestions) {
        searchBox.addEventListener("input", function() {
            let query = searchBox.value;
            if (query.length > 0) {
                suggestions.innerHTML = `
                    <p>Searching for: ${query}</p>
                    <p>Result 1: ${query} tutorial</p>
                    <p>Result 2: ${query} guide</p>
                `;
            } else {
                suggestions.innerHTML = "";
            }
        });
        console.log("Example 26: Live Search Suggestions - Ready");
    }
}

// Example 27: Password Strength Meter
function example27_passwordStrengthMeter() {
    let password = document.querySelector("#password");
    let strength = document.querySelector("#strength");
    
    if (password && strength) {
        password.addEventListener("input", function() {
            let length = password.value.length;
            
            if (length < 4) {
                strength.innerText = "Weak";
                strength.style.color = "red";
            } else if (length < 8) {
                strength.innerText = "Medium";
                strength.style.color = "orange";
            } else {
                strength.innerText = "Strong";
                strength.style.color = "green";
            }
        });
        console.log("Example 27: Password Strength Meter - Ready");
    }
}

// Example 28: Both Events Comparison
function example28_bothEventsComparison() {
    let input = document.querySelector("#myInput");
    if (input) {
        // Fires on every keystroke
        input.addEventListener("input", function() {
            console.log("Typing...", input.value);
        });
        
        // Fires only when done (blur or Enter)
        input.addEventListener("change", function() {
            console.log("Final value:", input.value);
            alert("You entered: " + input.value);
        });
        console.log("Example 28: Both Events Comparison - Ready");
    }
}

// Example 29: Interactive Text Editor - Basic
function example29_interactiveTextEditor() {
    let input = document.querySelector("#textInput");
    let display = document.querySelector("#display");
    
    if (input && display) {
        input.addEventListener("input", function() {
            display.innerHTML = input.value;
        });
        console.log("Example 29: Interactive Text Editor - Ready");
    }
}

// Example 30: Interactive Text Editor - Challenge
function example30_textEditorChallenge() {
    let input = document.querySelector("#textInput");
    let display = document.querySelector("#display");
    let clearBtn = document.querySelector("#clearBtn");
    let boldBtn = document.querySelector("#boldBtn");
    
    if (input && display) {
        // Live update
        input.addEventListener("input", function() {
            display.innerHTML = input.value;
        });
    }
    
    if (clearBtn && input && display) {
        // Clear button
        clearBtn.addEventListener("click", function() {
            input.value = "";
            display.innerHTML = "Your text will appear here...";
        });
    }
    
    if (boldBtn && display) {
        // Bold toggle
        boldBtn.addEventListener("click", function() {
            if (display.style.fontWeight === "bold") {
                display.style.fontWeight = "normal";
            } else {
                display.style.fontWeight = "bold";
            }
        });
    }
    console.log("Example 30: Text Editor Challenge - Ready");
}

