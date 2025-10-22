const fruits = new Set();

fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // duplicate ignored

console.log(fruits); // Set(2) { 'apple', 'banana' }
console.log(fruits.has("apple")); // true
console.log(fruits.size); // 2

fruits.delete("banana");
console.log(fruits); // Set(1) { 'apple' }

fruits.clear();
console.log(fruits); // Set(0) {}


