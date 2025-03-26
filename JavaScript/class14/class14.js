"use strict";
let age = 18;
let canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote);
function isEven(num) {
    let isEven = num % 2 == 0 ? true : false;
    return isEven;
}
;
console.log(`The given number is even ?: ${isEven(33)}`);
// Rest and spread operator (...)\
const colors = ['red', 'green', 'blue'];
const favColors = ['orange', 'purple'];
const lightColor = 'white';
const allColors = [lightColor, ...favColors, ...colors];
console.log(allColors);
const user = {
    id: 1,
    name: 'Shazil Khan',
    email: 'shazil.akn@gmail.com',
    age: 20
};
console.log(user);
const updatedUser = Object.assign(Object.assign({}, user), { email: 'akn.shazil@gamil.com', age: 21 });
console.log(updatedUser);
//  spread operator with functions
function sum(x, y, z) {
    return x + y + z;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers));
// Rest parameters Example
function bio(...args) {
    return args;
}
console.log(bio('Shazil', 21, 'Developer'));
function sumUp(...numbers) {
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    });
    return sum;
}
console.log(sumUp(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//Reduce method
const shoppingCart = [
    { name: 'bread', price: 120 },
    { name: 'eggs', price: 100 },
    { name: 'Milk', price: 200 }
];
const result = shoppingCart.reduce((acc, curr) => {
    return (acc += curr.price);
}, 0);
console.log(result);
