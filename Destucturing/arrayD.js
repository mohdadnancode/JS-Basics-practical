// // Normal Way
// let arr = [10, 20, 30];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// console.log(a, b, c); // 10 20 30


// Using destucturing
let [e, f, g] = [10, 20, 30];
console.log(e, f, g); // 10 20 30


// Skipping Elements
const data = [10, 20, 30, 40];

// Skips the second element (20)
const [a, , c, d] = data; 

console.log(a); // Output: 10
console.log(c); // Output: 30


// Using Rest Parameter
const numbers = [1, 2, 3, 4, 5];

const [start, ...rest] = numbers;
console.log(start);
console.log(rest);


// Using default value if an array element is undefined or missing.

const names = ["Alice"];

// 'b' will default to 'Bob' since there's no second element
const [x, y = "Bob"] = names;

console.log(y); // Output: Bob

// Also

let [s = 5, t = 10] = [7];
console.log(s, t); // 7 10



// Nested Array Destructuring

let num = [1, [2, 3], 4];

// normal way
// let a = numbers[0];
// let b = numbers[1][0];
// let c = numbers[1][1];
// let d = numbers[2];

// destructuring way
let [q, [w, r], u] = num;

console.log(q, w, r, u); // 1 2 3 4



// Mixing Object + Array Destructuring

let user = {
  name: "Adnan",
  hobbies: ["Gaming", "Coding", "Fitness"]
};

// extract 1st and 2nd hobby
let { hobbies: [hobby1, hobby2] } = user;

console.log(hobby1, hobby2); // Gaming Coding

// Or another one:

let users = [
  { name: "Adnan", age: 21 },
  { name: "Ameer", age: 22 }
];

let [{ name: firstUser }, { age: secondAge }] = users;
console.log(firstUser, secondAge); // Adnan 22
