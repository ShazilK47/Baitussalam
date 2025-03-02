// Function to revesrse the integer

function revesrseInteger(num) {
  let numStr = num.toString();
  let reverseStr = "";

  for (let i = numStr.length - 1; i >= 0; i--) {
    reverseStr += numStr[i];
  }

  let reverseInt = parseInt(reverseStr);
  if (reverseInt < 0) {
    reverseInt *= -1;
  }
  return reverseInt;
}

console.log(revesrseInteger(981));
console.log(revesrseInteger(500));
console.log(revesrseInteger(-15));
console.log(revesrseInteger(-60));
