// Checking scope

console.log(name) //accessing before declaring will results in 'undefined'
console.log(abc) // cannot acccess before initialization
console.log(class_2); // can access before initialization


function class_2(){
    console.log('Studying...')
}

var name = 'shazil';
//var name; // can access before initialization
//let name; -> can't acces before initialization


// Arrow function
const abc = () => {} //


// control flow
/* Syntax:
        if(condition){
            statement1;
        }

        //with an else clause
        if(condition){
        statement1;
        } else {
            statement2; 
        }
*/

//Logical Operator

    // &&   -> Logical And
    // ||    -> OR
    // !=     -> Not


// Truthy and Falsy values

// any non-zero numbers
// any non-empty string
// any object

/* falsy values

    false
        0
       -0
        0n: BigInt zero.
        ""
        null
        undefined
        NaN: Not a Number

*/
console.log(true == 1)   // true
console.log(true === 1)  // false 
console.log({} == 2); //false
console.log("" == false); // true
console.log("" === false); //false

console.log(NaN);
console.log(2/0); // Infinity
console.log(0/0); // NaN
console.log(true == Infinity); // false
console.log(typeof Infinity); // number
console.log(typeof 2 === typeof Infinity); //true
console.log(true == NaN); //false
console.log(true == -1); // false
console.log(false == -1); // false
console.log(true == 0);  // false
console.log(true == -0);  // false
console.log(true == null); // false
console.log(false === false); // true


