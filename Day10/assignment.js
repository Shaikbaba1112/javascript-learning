// Inspect document
console.log(document);
console.dir(document);

// By ID
let mainImage = document.getElementById("mainImg");
console.log(mainImage);

let heading = document.getElementById("heading1");
console.log(heading);

let missing = document.getElementById("nonexistent");
console.log(missing); // null

// By Class
let oldImages = document.getElementsByClassName("oldImg");
console.log(oldImages, oldImages.length);
console.log(oldImages[0], oldImages[1], oldImages[2]);

for (let i = 0; i < oldImages.length; i++) {
    console.log(oldImages[i]);
}

let boxLinksByClass = document.getElementsByClassName("boxLink");
console.log(boxLinksByClass);

// By Tag
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs, paragraphs.length);

let allLinks = document.getElementsByTagName("a");
console.log(allLinks, allLinks.length);

let allImages = document.getElementsByTagName("img");
console.log(allImages);

// Query Selectors
let qHeading = document.querySelector("#heading1");
console.log(qHeading);

let firstOldImage = document.querySelector(".oldImg");
console.log(firstOldImage);

let allOldImages = document.querySelectorAll(".oldImg");
console.log(allOldImages);

let firstParagraph = document.querySelector("p");
console.log(firstParagraph);

let boxLinks = document.querySelectorAll(".box a");
console.log(boxLinks);

// innerText
let para = document.querySelector("#description");
console.log(para.innerText);

heading.innerText = "Our Amazing Solar System";

let firstPara = document.querySelector("p");
console.log(firstPara.innerText);

// textContent
console.log(para.textContent);
document.querySelector("h1").textContent = "Welcome to Space!";

console.log(para.innerText);
console.log(para.textContent);

// innerHTML
console.log(firstPara.innerHTML);

document.querySelector("#heading1").innerHTML = "<u>The Solar System</u>";
document.querySelector("h1").innerHTML ="The <span style='color: gold;'>Solar</span> System";
console.log(firstPara.innerHTML);

// Practice (implemented)
// Exercise 1
console.log(document.getElementById("mainImg"));
console.log(document.getElementsByClassName("oldImg"));
console.log(document.getElementsByTagName("p"));
console.log(document.querySelector("#description"));
console.log(document.querySelectorAll(".box a"));

// Exercise 2
console.log(document.querySelector("h1").innerText);
document.querySelector("h1").innerText = "Exploring Our Solar System";
console.log(document.querySelector("p").innerHTML);
let h2 = document.createElement("h2");
h2.innerText = "Planets ";
document.body.appendChild(h2);
console.log(document.querySelector("#description").innerText);

// Exercise 3
let imgs = document.querySelectorAll(".oldImg");
console.log(imgs.length);
console.log(document.querySelector("p").innerText);
document.querySelector("h1").innerHTML = "<strong>Solar System</strong>";
console.log(document.querySelectorAll(".boxLink").length);