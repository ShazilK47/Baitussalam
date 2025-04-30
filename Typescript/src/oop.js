var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hi! ".concat(this.name);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = this;
        _this = _super.call(this, name, age) || this, (_this.grade = grade);
        return _this;
    }
    return Student;
}(Person));
var std1 = new Student("shazil", 20, "A+");
console.log(std1.name);
console.log(std1.greet());
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sound = function () {
        return "Woof!";
    };
    return Dog;
}());
var dog = new Dog("Rex");
console.log(dog.sound());
// 3 : private property
var BankAccount = /** @class */ (function () {
    function BankAccount(initial) {
        this.balance = initial;
    }
    Object.defineProperty(BankAccount.prototype, "Balance", {
        get: function () {
            return this.balance;
        },
        set: function (amount) {
            if (amount >= 0)
                this.balance = amount;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var account = new BankAccount(1000);
account.Balance = -1;
console.log(account.Balance); // 2000
//4 static method and property
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.circleArea = function (radius) {
        return this.PI * radius * radius;
    };
    MathUtils.PI = 3.14159;
    return MathUtils;
}());
console.log(MathUtils.PI);
console.log(MathUtils.circleArea(5));
// 5 method overriding
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.move = function () {
        console.log("The Vehicle is moving");
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.move = function () {
        console.log("The Car is driving on the road");
    };
    return Car;
}(Vehicle));
var myCar = new Car();
myCar.move();
// 6. parameter properties in constructor
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.show = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old.");
    };
    return User;
}());
var user = new User("Ali", 25);
console.log(user.show());
