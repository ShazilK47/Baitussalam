// Truncate a String

// Method 1
// function truncateString(str, length) {
//   truncStr = "";
//   for (i = 0; i < length; i++) {
//     truncStr += str[i];
//   }

//   truncStr += "...";
//   return truncStr;
// }

// console.log(truncateString("Hello, world!", 8));

// Method 2

function truncateString(str, length) {
  let truncStr = str.slice(0, length);
  if (str.length > length) {
    truncStr += "...";
  }
  return truncStr;
}

console.log(truncateString("Lorem ipsum dolor sit amet", 10));
console.log(truncateString("Hello, world!", 8));
console.log(truncateString("JavaScript", 15));

let str = prompt("Enter the string to truncate: ");
let length = parseInt(prompt("Enter the length: "));
alert(`${truncateString(str, length)}`);
