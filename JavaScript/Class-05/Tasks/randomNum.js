// Function to generate a randome whole number wihtin a specified range

function getRandomInteger(min, max) {
  let randomeNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomeNum;
}

console.log(getRandomInteger(2, 3));
