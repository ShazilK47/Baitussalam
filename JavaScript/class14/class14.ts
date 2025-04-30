let age: number = 18;

let canVote: string = age >= 18 ? 'Yes' : 'No'

console.log(canVote)

function isEven(num: number): boolean {
    let isEven: boolean = num % 2 == 0 ? true : false;
    return isEven;
};

console.log(`The given number is even ?: ${isEven(33)}`)

// Rest and spread operator (...)\

const colors: string[] = ['red', 'green', 'blue']

const favColors: string[] = ['orange', 'purple']

const lightColor: string = 'white'

const allColors: any = [lightColor, ...favColors, ...colors]

console.log(allColors)


// Clonning and updating object

interface User {
    id: number
    name: string
    email: string
    age: number
}

const user: User = {
    id: 1,
    name: 'Shazil Khan',
    email: 'shazil.akn@gmail.com',
    age: 20
}

console.log(user)

const updatedUser = { ...user, email: 'akn.shazil@gamil.com', age: 21 }
console.log(updatedUser)


//  spread operator with functions

function sum(x: number, y: number, z: number): number {
    return x + y + z;
}

let numbers: [number, number, number] = [1, 2, 3]
console.log(sum(...numbers))


// Rest parameters Example

function bio(...args) {
    return args;
}

console.log(bio('Shazil', 21, 'Developer'))

function sumUp(...numbers) {
    let sum = 0
    numbers.forEach((num) => {
        sum += num
    })
    return sum
}

console.log(sumUp(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


//Reduce method

const shoppingCart = [
    { name: 'bread', price: 120 },
    { name: 'eggs', price: 100 },
    { name: 'Milk', price: 200 }
]

const result = shoppingCart.reduce((acc, curr) => {
    return (acc += curr.price)
}, 0)

console.log(result)