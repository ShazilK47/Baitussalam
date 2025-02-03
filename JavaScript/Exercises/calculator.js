// npm i readline-sync
const rl = require('readline-sync');  // readline-sync : a library use to achive functionality to take inputs in console




// basic calculator
let num_1;
let num_2;
let operation;

//prompt -> for input
// alert() -> for output
// confirm() -> a confirmation box 

num_1 = parseInt(rl.question("Enter first number: "));
num_2 = parseInt(rl.question("Enter second number: "))
operation = rl.question("Enter operation: + , - , / , * , square : ")
let add;
let substract;
let multiple;
let divide;

if(operation == "+"){
    add = num_1 + num_2
    console.log(`Output: ${add}`);
}else if(operation == "-"){
    substract = num_1 - num_2;
    console.log(`Output: ${substract}`);
}else if(operation == "*"){
    multiple = num_1 * num_2;
    console.log(`Output: ${multiple}`);
}else if(operation == "/"){
    divide = num_1 / num_2;
    console.log(`Output: ${divide}`);
}

