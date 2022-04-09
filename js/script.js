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

console.log(ulItem);