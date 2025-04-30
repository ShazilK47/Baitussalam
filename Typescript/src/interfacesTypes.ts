// 1
interface Mathoperation {
  (a: number, b: number): number;
}

const add: Mathoperation = (a, b) => a + b;

console.log(add(5, 6));

// 2
interface Person {
  name: string;
  age: number;
}

interface User extends Person {
  username: string;
  email?: string;
}

const user: User = {
  name: "shazil khan",
  age: 20,
  username: "shazilkhan",
};

console.log(user);

//3
interface Student {
  name: string;
  id: string;
  semester?: number;
}

function getStudentdetails(student: Student): void {
  console.log(`Student Name: ${student.name}}`);
  console.log(`Student Id: ${student.id}`);
}

getStudentdetails({ name: "shazil Khan", id: "CSC-23F-089" });

//4
interface Data {
  [key: string]: string | number;
}
const data: Data = {
  id: 101,
  name: "shazil",
  score: 98,
};
console.log(data.id);

//5
interface Product {
  name: string;
  price: number;
}

function printProducts(products: Product[]): void {
  products.forEach((product) =>
    console.log(`${product.name}: $${product.price}`)
  );
}

const items: Product[] = [
  { name: "laptop", price: 1200 },
  { name: "mouse", price: 25 },
];
printProducts(items);
