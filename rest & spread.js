// Using Rest to calculate total

function add(...nums) {
  return nums.reduce((total, n) => total + n);
}

console.log(add(10, 20, 30)); // 60


// Spread in function calls

function multiply(a, b, c) {
  return a * b * c;
}

let nums = [2, 3, 4];
console.log(multiply(...nums)); // 24


let user = { name: "Adnan", age: 21 };
let details = { ...user, country: "India" };

console.log(details);
