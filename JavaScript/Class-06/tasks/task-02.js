let paragraph = document.getElementById("paragraph");
let heading = document.getElementById("heading");
let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function () {
  paragraph.textContent = "New paragraph text";
  heading.innerText = "New Heading Text";
  heading.innerHTML = "This is<strong>bold</strong>";
});
