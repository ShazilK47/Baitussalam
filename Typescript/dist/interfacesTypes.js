"use strict";
const add = (a, b) => a + b;
console.log(add(5, 6));
const user = {
    name: "shazil khan",
    age: 20,
    username: "shazilkhan",
};
console.log(user);
function getStudentdetails(student) {
    console.log(`Student Name: ${student.name}}`);
    console.log(`Student Id: ${student.id}`);
}
getStudentdetails({ name: "shazil Khan", id: "CSC-23F-089" });
const data = {
    id: 101,
    name: "shazil",
    score: 98,
};
console.log(data.id);
function printProducts(products) {
    products.forEach((product) => console.log(`${product.name}: $${product.price}`));
}
const items = [
    { name: "laptop", price: 1200 },
    { name: "mouse", price: 25 },
];
printProducts(items);
