// Using an Object Literal (Most Common Way)

const car = {
  brand: "Tesla",
  model: "Model 3",
  color: "White"
};

console.log(car.brand);      // Tesla
console.log(car["model"]);   // Model 3


// Using the new Object() Keyword

const user = new Object();
user.name = "Adnan";
user.age = 21;
user.country = "India";

console.log(user);


// Using an Object Constructor Function

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const person1 = new Person("Adnan", 21, "Kozhikode");
const person2 = new Person("Ayaan", 22, "Malappuram");

console.log(person1.name); // Adnan
console.log(person2.city); // Malappuram
