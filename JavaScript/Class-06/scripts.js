// selecting by ID
document.getElementById("someId");
// selecting by class name
document.getElementsByClassName("someClass");
// selecting by tag name
document.getElementsByTagName("div");
// selecting by query selector
document.querySelector(".someClass");
// selecting by query selector all
document.querySelectorAll(".someClass");

// JS can get and set attributes

const title = document.getElementById("title");

console.log(title);
const titleAttr = title.getAttribute("class");
console.log(titleAttr);

// setting attributes
title.setAttribute("class", "newClass");

// removing attributes
title.removeAttribute("class");
console.log(title.getAttribute("class"));

// getting and setting text content
console.log(title.textContent);
title.textContent = "New Title";

// getting and setting inner HTML
console.log(title.innerHTML);
title.innerHTML = "<span>Some New Title</span>";

// getting and setting styles
title.style.color = "red";
title.style.backgroundColor = "blue";

//adding multiple styles
title.style.cssText = "color: red; background-color: blue;";
