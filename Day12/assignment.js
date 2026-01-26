element.addEventListener(eventType,callbackFunction);  //addEventListener

let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    console.log("Button was chicked");
    alert("You clicked me");
});   // Basic Button Click

let button = document.querySelector("#myBtn");
button.addEventListener("click", function(){
    console.log("First action");
});
button.addEventListener("click" , function(){
    console.log("Second action");
});   // Multiple Listeners on Same Element

let para = document.querySelector("p");
let count = 0;
para.addEventListener("click" , function(){
    count++;
    para.innerText = `You clicked me${count} times!`;
});    // Paragraph Click Counter

let box = document.querySelector(".box");
box.addEventListener("mousenter", function(){
    box.style.backgroundColor = "yellow";
    console.log("Mouse entered!");
});
box.addEventListener("mouseleave", function(){
    box.style.backgroundColor = "white";
    console.log("Mouse left!");
});    // Hover Color Change

let hideBtn = document.querySelector("#hideBtn");
let content = document.querySelector("#content");
hideBtn.addEventListener("click", function(){
    if(content.style.display === "none"){
        content.style.display = "block";
        hideBtn.innerText = "Hide";
    } else {
        content.style.display = "none";
        hideBtn.innerText = "Show";
    }
});    // Click to Toggle Visibility

let heading = document.querySelector("h1");
heading.addEventListener("dblclick", function(){
    heading.innerText = "You double-clicked me!";
    heading.style.color = "red";
});    // Double Click to Edit

let card = document.querySelector(".card");
card.addEventListener("mouseenter", function(){
    card.style.transform = "scale(1.1)";
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3";
});
card.addEventListener("mouseleave", function(){
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1";
});  // Interactive Card Hover

// ================================
// Initialize Examples
// ================================

// Run all examples when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded. Initializing examples...");
    
    // You can comment/uncomment which examples to run
    example1_basicButtonClick();
    example2_multipleListeners();
    example3_paragraphClickCounter();
    example4_hoverColorChange();
    example5_toggleVisibility();
    example6_doubleClickEdit();
    example7_interactiveCardHover();
    example8_universalColorChanger();
    example9_toggleClass();
    example10_deleteButton();
    example11_highlightOnHover();
    example12_displayTypedCharacter();
    example13_arrowKeyNavigation();
    example14_enterKeySubmit();
    example15_keyboardShortcut();
    example16_characterLimitWarning();
    example17_formSubmissionPrevention();
    example18_loginFormHandler();
    example19_formValidation();
    example20_searchFormDisplay();
    example21_getInputValue();
    example22_multipleInputFields();
    example23_dropdownSelection();
    example24_liveCharacterCounter();
    example25_finalSubmission();
    example26_liveSearchSuggestions();
    example27_passwordStrengthMeter();
    example28_bothEventsComparison();
    example29_interactiveTextEditor();
    example30_textEditorChallenge();
    
    console.log("All examples initialized. Check console for details.");
});

// ================================
// Utility Functions
// ================================

// Function to run a specific example by number
function runExample(exampleNumber) {
    console.log(`Running example ${exampleNumber}...`);
    
    switch(exampleNumber) {
        case 1: example1_basicButtonClick(); break;
        case 2: example2_multipleListeners(); break;
        case 3: example3_paragraphClickCounter(); break;
        case 4: example4_hoverColorChange(); break;
        case 5: example5_toggleVisibility(); break;
        case 6: example6_doubleClickEdit(); break;
        case 7: example7_interactiveCardHover(); break;
        case 8: example8_universalColorChanger(); break;
        case 9: example9_toggleClass(); break;
        case 10: example10_deleteButton(); break;
        case 11: example11_highlightOnHover(); break;
        case 12: example12_displayTypedCharacter(); break;
        case 13: example13_arrowKeyNavigation(); break;
        case 14: example14_enterKeySubmit(); break;
        case 15: example15_keyboardShortcut(); break;
        case 16: example16_characterLimitWarning(); break;
        case 17: example17_formSubmissionPrevention(); break;
        case 18: example18_loginFormHandler(); break;
        case 19: example19_formValidation(); break;
        case 20: example20_searchFormDisplay(); break;
        case 21: example21_getInputValue(); break;
        case 22: example22_multipleInputFields(); break;
        case 23: example23_dropdownSelection(); break;
        case 24: example24_liveCharacterCounter(); break;
        case 25: example25_finalSubmission(); break;
        case 26: example26_liveSearchSuggestions(); break;
        case 27: example27_passwordStrengthMeter(); break;
        case 28: example28_bothEventsComparison(); break;
        case 29: example29_interactiveTextEditor(); break;
        case 30: example30_textEditorChallenge(); break;
        default: console.log("Invalid example number");
    }
}

// Quick reference functions for common operations
const EventUtils = {
    addClickListener: function(elementId, callback) {
        const element = document.querySelector(elementId);
        if (element) {
            element.addEventListener("click", callback);
        }
    },
    
    addHoverEffect: function(elementId, hoverCallback, leaveCallback) {
        const element = document.querySelector(elementId);
        if (element) {
            element.addEventListener("mouseenter", hoverCallback);
            element.addEventListener("mouseleave", leaveCallback);
        }
    },
    
    preventFormSubmit: function(formId) {
        const form = document.querySelector(formId);
        if (form) {
            form.addEventListener("submit", function(e) {
                e.preventDefault();
            });
        }
    }
};

console.log("script.js loaded successfully!");