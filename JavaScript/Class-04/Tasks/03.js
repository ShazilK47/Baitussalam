// Count Vowels in a String

// let str = prompt("Enter String to Count Vowels ");
function countVowels(str) {
  let count = 0;

  for (i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() == "a" ||
      str[i].toLowerCase() == "e" ||
      str[i].toLowerCase() == "i" ||
      str[i].toLowerCase() == "o" ||
      str[i].toLowerCase() == "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello"));
console.log(countVowels("HELLO"));
console.log(countVowels("Javascript"));
console.log(countVowels(""));
// alert(`Number of Vowels in the given string: ${countVowels(str)}`);

let btn3 = document.getElementById("ex-3");

btn3.addEventListener("click", () => {
  let str = prompt("Enter String to Count Vowels ");
  alert(`Number of Vowels in the given string: ${countVowels(str)}`);
});
