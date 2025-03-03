//set time out

let btn5 = document.getElementById("btn5");
let count = document.getElementById("count");
let countDown = 5;

btn5.addEventListener("click", function () {
  count.innerHTML = countDown;
  let int = setInterval(() => {
    if (countDown === 0) {
      clearInterval(int);
      count.innerText = "done";
    } else {
      countDown--;
      count.innerText = countDown;
    }
  }, 1000);
});
