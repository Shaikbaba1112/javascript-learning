{
    let solarImg = document.querySelector("img");
    let idName = solarImg.getAttribute("id");
    console.log(idName);    // Get the ID of an element
}

{
    let solarImg = document.querySelector("img");
    solarImg.setAttribute("id","galaxyImg");   // Change the ID
}

{
    let solarImg = document.querySelector("img");
    solarImg.setAttribute("src","assets/earth.jpg");  // Change the image source
}

{
    let link = document.querySelector("a");
    console.log(link.getAttribute("href"));
    link.setAttribute("href", "https://nasa.gov");  // Get and change a links href 
}

{
    let heading = document.querySelector("h1");
    let headId = heading.getAttribute("id");
    console.log(headId);  // Check if an attribute exists
}

{
    let heading = document.querySelector("h1");
    heading.style.color = "orange";  // Change text color
}

{
    let heading = document.querySelector("h1");
    heading.style.backgroundColor = "black";  // Change background color (camelCase!)
}

{
    let para = document.querySelector("p");
    para.style.color = "white";
    para.style.fontSize = "20px";
    para.style.padding = "15px";  // Change multiple styles
}

{
    let img = document.querySelector("img");
    img.style.width = "500px";
    img.style.borderRadius = "10px";   // Change image size
}

{
    let box = document.querySelector(".box");
    box.style.display = "none"; // Hide an element
}

{
    let para = document.querySelector("p");
    para.classList.add("green"); // Add a class 
}

{
    let para = document.querySelector("p");
    para.classList.remove("green");  // Remove a class
}

{
    let para = document.querySelector("p");
    console.log(para.classList.contains("green")); // Check if a class exists
}

{
    let para = document.querySelector("p");
    para.classList.toggle("green"); // Adds if missing
    para.classList.toggle("green"); // Removes if present   // Toggle a class
}

{
    let box = document.querySelector(".box");
    let btn = document.querySelector("button");
    btn.addEventListener("click", function(){
        box.classList.toggle("highlight");
    });    // Toggle on button click
}

{
    let box = document.querySelector(".box");
    let boxChildren = box.children;
    console.log(boxChildren);  // Find all children of an element
}

{
    let list = document.querySelector("ul");
    console.log(list.parentElement); // Navigate from child to parent
}

{
    let list = document.querySelector("ul");
    let firstItem = list.children[0];
    let secondItem = firstItem.nextElementSibling;
    console.log(secondItem.innerText);  // Get the next sibling
}

{
    let box = document.querySelector(".box");
    console.log(box.children[0]);
    console.log(box.childNodes[box.children.length-1]);  // Access first and last child
}

{
    let heading1 = document.querySelector("#heading1");
    let nextEl = heading1.nextElementSibling;
    let afterThat = nextEl.nextElementSibling;  
    console.log(afterThat.innerText);  // Navigate through multiple siblings
}

{
    let newBtn = document.createElement("button"); // Create element
    newBtn.innerText = "Explore Universe!";
    let box = document.querySelector(".box"); // Adding to page  
    box.appendChild(newBtn);  // Create and add a button 
}

{
    let heading = document.createElement("h3");
    heading.innerText = "Welcome to Space";
    let body = document.querySelector("body");
    body.prepend(heading);  // Add element to the start
}

{
    let newPara = document.createElement("p");
    newPara.innerText = "The universe is vast and mysterious.";
    newPara.style.color ="cyan";
    newPara.style.fontSize = "18px"; 
    let box = document.querySelector(".box");
    box.appendChild(newPara);  // Create a paragraph with styling
}

{
    let badge = document.createElement("span");
    badge.innerText = "New";
    let heading = document.querySelector("h1");
    heading.insertAdjacentElement("beforeend",badge);  // Using insetAdjacentElement
}

{
    let list = Document.querySelector("ul");
    let item1 = document.createElement("li");
    item1.innerText = "Neptune: Ice Giant";
    let item2 = document.createElement("li");
    item2.innerText = "Uranus: Ice Giant";
    list.appendChild(item1);
    LucideStamp.appendChild(item2);  // Add multiple elements
}

{
    let warning = document.createElement("p");
    warning.innerText = "Content may change";
    let desc = document.querySelector("#description");
    desc.insertAdjacentElement("beforebegin", warning);  // Add before an element
}

{
    let icon = document.createElement("span")
    icon.innerText = "EARTH";
    let heading = document.querySelector("h1");
    heading.insertAdjacentElement("afterBegin", icon);  // Add inside, at the Start
}

{
    let arrow = document.createElement("span");
    arrow.innerText = "  ";
    let heading = document.querySelector("h2");
    heading.insertAdjacentElement("beforeed",arrow);  // Add inside, at the end
}

{
    let oldImg = document.querySelector(".oldImg");
    oldImg.remove();  // Remove an element Modern way  
}

{
    let imageContainer = document.querySelector(".images");
    let oldImg = document.querySelector(".oldImg");
    imageContainer.removeChild(oldImg);  // Remove using parent 
}

{
    let oldImages = document.querySelector(".oldImg");
    for(let img of oldImages){
        img.remove();
    }  // Remove all images with a class
}

{
    let btn = document.querySelector("button");
    let box = document.querySelector(".box");
    btn.addEventListener("click", function(){
        box.remove();
    });  // Remove on button click
}

{
    let list = document.querySelector("ul");
    let firstItem = list.children[0];
    firstItem.remove();  // Remove a specific child
}