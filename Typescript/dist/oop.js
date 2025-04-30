"use strict";
// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     return `Hi! ${this.name}`;
//   }
// }
// class Student extends Person {
//   grade: string;
//   constructor(name: string, age: number, grade: string) {
//     super(name, age), (this.grade = grade);
//   }
// }
// let std1 = new Student("shazil", 20, "A+");
// console.log(std1.name);
// console.log(std1.greet());
// // 2 class interface
// interface Animal {
//   name: string;
//   sound(): string;
// }
// class Dog implements Animal {
//   constructor(public name: string) {}
//   sound(): string {
//     return "Woof!";
//   }
// }
// const dog = new Dog("Rex");
// console.log(dog.sound());
// // 3 : private property
// class BankAccount {
//   private balance: number;
//   constructor(initial: number) {
//     this.balance = initial;
//   }
//   get Balance(): number {
//     return this.balance;
//   }
//   set Balance(amount: number) {
//     if (amount >= 0) this.balance = amount;
//   }
// }
// const account = new BankAccount(1000);
// account.Balance = -1;
// console.log(account.Balance); // 2000
// //4 static method and property
// class MathUtils {
//   static PI: number = 3.14159;
//   static circleArea(radius: number): number {
//     return this.PI * radius * radius;
//   }
// }
// console.log(MathUtils.PI);
// console.log(MathUtils.circleArea(5));
// // 5 method overriding
// class Vehicle {
//   move(): void {
//     console.log("The Vehicle is moving");
//   }
// }
// class Car extends Vehicle {
//   move(): void {
//     console.log("The Car is driving on the road");
//   }
// }
// const myCar = new Car();
// myCar.move();
// // 6. parameter properties in constructor
// class User {
//   constructor(private name: string, private age: number) {}
//   show(): string {
//     return `${this.name} is ${this.age} years old.`;
//   }
// }
// const user = new User("Ali", 25);
// console.log(user.show());
