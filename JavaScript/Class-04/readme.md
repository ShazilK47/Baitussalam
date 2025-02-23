Here’s an in-depth explanation of each topic in an understandable way:

---

### **1. `console.log` vs `return`**

Both `console.log` and `return` are used in JavaScript, but they serve different purposes.

- **`console.log(value)`**

  - It prints the value to the console.
  - It does not affect the flow of the program.
  - It is mainly used for debugging.

  ```javascript
  function greet() {
    console.log("Hello, World!");
  }

  greet(); // Prints: Hello, World!
  ```

- **`return value`**

  - It returns a value from a function.
  - The returned value can be used elsewhere in the code.
  - It stops the function execution.

  ```javascript
  function add(a, b) {
    return a + b;
  }

  let result = add(5, 3);
  console.log(result); // Prints: 8
  ```

---

### **2. Function without Parameters**

A function without parameters is a function that does not take any input but performs a task.

```javascript
function sayHello() {
  console.log("Hello, World!");
}

sayHello(); // Output: Hello, World!
```

Here, `sayHello` is a function with no parameters, and every time it is called, it prints `"Hello, World!"`.

---

### **3. Function with Return Statement**

A function with a return statement sends a value back to the place where it was called.

```javascript
function square(num) {
  return num * num;
}

let result = square(4);
console.log(result); // Output: 16
```

- The `return` keyword sends the result back.
- The value is stored in `result` and can be used later.

---

### **4. Function with Multiple Return Statements**

A function can have multiple return statements, but only one will execute depending on the condition.

```javascript
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumber(10)); // Output: Positive
console.log(checkNumber(-5)); // Output: Negative
console.log(checkNumber(0)); // Output: Zero
```

- Only **one** `return` statement is executed.
- Once `return` is hit, the function stops.

---

### **5. Loop Over an Array with Proper Formatting & Index**

Looping through an array means accessing each element one by one.

#### **Using `for` loop**

```javascript
let colors = ["Red", "Green", "Blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(`Index ${i}: ${colors[i]}`);
}
```

**Output:**

```
Index 0: Red
Index 1: Green
Index 2: Blue
```

#### **Using `forEach` loop**

```javascript
colors.forEach((color, index) => {
  console.log(`Index ${index}: ${color}`);
});
```

Both loops iterate over the array and print each value with its index.

---

### **6. Function Exercises 1–3**

#### **Exercise 1: Function to Calculate Square**

Write a function that returns the square of a number.

```javascript
function square(num) {
  return num * num;
}

console.log(square(5)); // Output: 25
```

#### **Exercise 2: Function to Convert Celsius to Fahrenheit**

Formula: `F = (C × 9/5) + 32`

```javascript
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(toFahrenheit(30)); // Output: 86
```

#### **Exercise 3: Function to Find the Largest Number in an Array**

```javascript
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([4, 7, 1, 9])); // Output: 9
```

---

### **Summary**

- `console.log` prints, `return` sends back a value.
- Functions can have **no parameters** or **return statements**.
- Functions can have **multiple return statements**.
- **Looping through arrays** can be done with `for` and `forEach`.
- Function exercises help solidify these concepts.

Let me know if you need further clarification! 🚀
