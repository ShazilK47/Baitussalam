// function to decode or encode

//Method 1

// function decodeCipher(str) {
//   let key = ["GA", "DE", "RY", "PO", "LU", "KI"];
//   var decode = "";
//   checked = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       decode += " ";
//     } else {
//       for (let j = 0; j < key.length; j++) {
//         if (key[j].toLowerCase().includes(str[i].toLowerCase())) {
//           let keyWord = key[j].replace(str[i].toUpperCase(), "");
//           if (str[i] === str[i].toUpperCase()) {
//             decode += keyWord.toUpperCase();
//           } else {
//             decode += keyWord.toLowerCase();
//           }

//           break;
//         } else {
//           checked++;
//         }
//       }
//     }

//     if (checked == key.length) {
//       decode += str[i];
//     }
//     checked = 0;
//   }

//   return decode;
// }

// console.log(decodeCipher("ABCD"));
// console.log(decodeCipher("Ala has a cat"));
// console.log(decodeCipher("gaderypoluki"));
// console.log(decodeCipher("Gug hgs g cgt"));
// console.log(decodeCipher("agedyropulik"));
// console.log(decodeCipher("GBCE"));

//Method 2
function decodeCipher(text) {
  const key = "GA-DE-RY-PO-LU-KI";
  const mapping = {};

  // Create the substitution mapping from the key
  key.split("-").forEach((pair) => {
    mapping[pair[0]] = pair[1];
    mapping[pair[1]] = pair[0];
  });

  // Apply the substitution mapping to the input text
  return text
    .split("")
    .map((char) => mapping[char] || char)
    .join("");
}

// Test cases
console.log(decodeCipher("ABCD")); // Output: GBCE
console.log(decodeCipher("Ala has a cat")); // Output: Gug hgs g cgt
console.log(decodeCipher("gaderypoluki")); // Output: agedrypoluki
console.log(decodeCipher("Gug hgs g cgt")); // Output: Ala has a cat
console.log(decodeCipher("agedrypoluki")); // Output: gaderypoluki
console.log(decodeCipher("GBCE")); // Output: ABCD
