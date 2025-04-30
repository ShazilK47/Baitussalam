"use strict";
// 1
function findLength(str) {
    return str.length;
}
console.log(findLength("shazil"));
//2
let numArr = [1, 2, 3, 4, 5, 6];
function calSum(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum;
}
console.log(calSum(numArr));
//3
function toCombine(values) {
    return values[0] + values[1];
}
let values = [10, "shazil"];
console.log(toCombine(values));
// 4
function toStringSq(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * value;
    }
}
console.log(toStringSq(5));
console.log(toStringSq("sk"));
//5
function showInfo(obj) {
    if (obj.name !== undefined) {
        console.log("Name: ", obj.name);
    }
    else {
        console.log("Name not provided");
    }
    if (obj.age !== undefined) {
        console.log("Age: ", obj.age);
    }
    else {
        console.log("Age not provided");
    }
}
showInfo({ name: "shazil khan" });
//6
function sumUp(...args) {
    let sum = args.reduce((acc, curr) => acc + curr, 0);
    return sum;
}
console.log(sumUp(1, 2, 3, 4, 5, 5));
