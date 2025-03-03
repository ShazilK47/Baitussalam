let dateSection = document.getElementById("date-section");

let currentDate = new Date();

let btn4 = document.getElementById("btn4");

btn4.addEventListener("click", function () {
  let p = document.createElement("p");
  p.innerText = currentDate.toLocaleDateString();

  let p2 = document.createElement("p");
  p2.innerText = currentDate.toLocaleTimeString();

  dateSection.appendChild(p);
  dateSection.appendChild(p2);
});
