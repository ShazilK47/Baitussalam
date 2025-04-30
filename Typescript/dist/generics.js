"use strict";
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([10, 20, 30])); // 10
console.log(getFirstElement(["Shazil", "Ali"])); // "Shazil"
console.log(getFirstElement([]));
//2
class Box {
    constructor(intitialValue) {
        this.value = intitialValue;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
}
const numberBox = new Box(100);
numberBox.setValue(200);
console.log(numberBox.getValue());
const stringBox = new Box("Hello");
console.log(stringBox.getValue()); // "Hello"
//3 generic that return array o ftwo same type elements
function pair(a, b) {
    return [a, b];
}
console.log(pair(1, 2)); // [1, 2]
console.log(pair("a", "b")); // ["a", "b"]
// console.log(pair(1, "b"));
