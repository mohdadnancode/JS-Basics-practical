const myMap = new Map();

myMap.set("name", "Adnan");
myMap.set("age", 21);

console.log(myMap.get("name")); // Adnan
console.log(myMap.has("age"));  // true
console.log(myMap.size);        // 2

myMap.delete("age");
console.log(myMap.size);        // 1

myMap.clear();
console.log(myMap.size);        // 0
console.log(myMap);
