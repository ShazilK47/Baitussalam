// sum of all numbers in array

let numbers = [9, 9, 13, 13, 5, 6, 17, 8, 9, 10, 99, 99, 99];
console.log(numbers);
function arraySum(arr) {
  let newArr = [...arr];
  let sum = 0;

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  console.log("Total sum: ", sum);
}

arraySum(numbers);
console.log(numbers);

//to find the largest number

function findLargest(arr) {
  let newArr = [...arr];
  let temp;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > newArr[i + 1]) {
      temp = newArr[i];
      newArr[i + 1] = temp;
    }
    temp = newArr[i];
  }

  console.log("Largest Number", temp);
}

findLargest(numbers);
console.log(numbers);

// remove all duplicate values from array and print new array with all unique value;
function removeDuplicate(arr) {
  let newArray = [];

  for (let i = 0; i <= arr.length; i++) {
    // console.log(arr[i] == arr[i + 1]);

    if (arr[i] !== arr[i + 1]) {
      newArray.push(arr[i]);
    }
  }

  console.log("Unique Array:", newArray);
}

removeDuplicate(numbers);
