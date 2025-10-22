// Call

function greet(city) {
  console.log(`Hello, my name is ${this.name} from ${city}`);
}

const person1 = { name: "Adnan" };

greet.call(person1, "Kozhikode");
// Output: Hello, my name is Adnan from Kozhikode



// // Apply

// function greet(city, country) {
//   console.log(`Hello, I'm ${this.name} from ${city}, ${country}`);
// }

// const person = { name: "Adnan" };

// greet.apply(person, ["Kozhikode", "India"]);
// // Output: Hello, I'm Adnan from Kozhikode, India


// // Bind

// function greet() {
//   console.log(`Hey, ${this.name}`);
// }

// const person2 = { name: "Adnan" };

// const sayHello = greet.bind(person2);
// sayHello(); // Output: Hey, Adnan
