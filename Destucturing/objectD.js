// // Normal Way
// let user = { name: "Adnan", age: 21, country: "India" };
// let namee = user.name;
// let age = user.age;
// let country = user.country;
// console.log(namee, age, country);


// // Using destucturing

// let user = { name: "Adnan", age: 21, country: "India" };
// let { name, age, country } = user;
// console.log(name, age, country);

// // Renaming variables while destructuring

// let { name: userName, age: userAge } = user;
// console.log(userName, userAge); // Adnan 21


// // Set default values

// let { city = "Unknown" } = user;
// console.log(city); // Unknown


// Nested Destructuring
let person = {
  name: "Adnan",
  address: {
    city: "Kozhikode",
    country: "India"
  }
};

// normal way
// let city = person.address.city;
// let country = person.address.country;

// destructuring way
let { address: { city, country } } = person;

console.log(city, country); // Kozhikode India



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
