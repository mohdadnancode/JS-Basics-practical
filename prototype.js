const person = {
  greet() {
    console.log("Hello!");
  }
};

const adnan = Object.create(person); // adnan inherits from person
adnan.greet(); // ✅ Hello!
