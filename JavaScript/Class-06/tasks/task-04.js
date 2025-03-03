let btn3 = document.getElementById("btn3");
let contsec = document.getElementById("content-section");

btn3.addEventListener("click", function () {
  let p = document.createElement("p");
  p.innerText = "Hello Students!";
  console.log(p);
  p.style.color = "red";
  p.style.fontSize = "20px";
  contsec.appendChild(p);
});
