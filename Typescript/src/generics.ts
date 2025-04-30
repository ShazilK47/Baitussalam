function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(getFirstElement([10, 20, 30])); // 10
console.log(getFirstElement(["Shazil", "Ali"])); // "Shazil"
console.log(getFirstElement([]));

//2
class Box<T> {
  private value: T;

  constructor(intitialValue: T) {
    this.value = intitialValue;
  }

  getValue(): T {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}

const numberBox = new Box<number>(100);
numberBox.setValue(200);
console.log(numberBox.getValue());

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue()); // "Hello"

//3 generic that return array o ftwo same type elements

function pair<T>(a: T, b: T): T[] {
  return [a, b];
}

console.log(pair(1, 2)); // [1, 2]
console.log(pair("a", "b")); // ["a", "b"]
// console.log(pair(1, "b"));
