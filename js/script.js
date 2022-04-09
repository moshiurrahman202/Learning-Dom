// Create Element
let olItem = document.createElement("li");

// Add Class and Id
olItem.className = "this-is-class another-class";
olItem.id = "this-is-id";

// Add Attribute
olItem.setAttribute("title", "A title to new element");

// push element and create text content
olItem.appendChild(document.createTextNode("JavaScript"));
document.querySelector("ol").appendChild(olItem);

// for unordered list
let ulItem = document.createElement("li");
let link = document.createElement("a");

link.appendChild(document.createTextNode("Instagram"));
link.setAttribute("href", "https://www.instagram.com");
ulItem.appendChild(link);

document.querySelector("ul").appendChild(ulItem);


// Replace Element
//Create New Heading
let newHeading = document.createElement("h1");
newHeading.appendChild(document.createTextNode("Replace element as this h1 new heading!"));

// get old heading
let oldHeading = document.querySelector("h3");

// Get parent element of heading
let parent = oldHeading.parentElement;

//Finaly replace the element
parent.replaceChild(newHeading, oldHeading);

// Remove Element
let ulList = document.querySelector("ul");
ulList.removeChild(ulList.children[0]);

// Add class,attribute and remove
ulList.classList.add("test-class");
ulList.classList.remove("test-class");

ulList.setAttribute("title", "new-title");
ulList.removeAttribute("title");

// Event listner
let button = document.createElement("button");
button.id = "btn-even";
button.appendChild(document.createTextNode("Click me!"));
document.querySelector(".container").appendChild(button);

document.getElementById("btn-even").addEventListener("click", message);
function message(){
    let crediv = document.createElement("div");
    crediv.innerHTML = "<h2>List of dom event!</h2><p>mouseover,change,focus,submit,keydown,mousedown,mouseout,mouseover,clickdblclic,load,error,unload,resize.</p>";
    document.querySelector(".container").appendChild(crediv);
    // let crepara = document.createElement("p");
    // crepara.appendChild(document.createTextNode())

}

