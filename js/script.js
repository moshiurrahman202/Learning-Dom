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


console.log(parent);