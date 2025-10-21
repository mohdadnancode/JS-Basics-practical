// const numbers = [1, 2, 3];
// numbers.forEach((a, b) => {
//   console.log(`Element at index ${b} is ${a}`);
//   // Output: Element at index 0 is 1, etc.
// });

// const nums = [1, 2, 3, 4];
// nums.map(num => console.log(num * 2));

// const words = ["hello world", "goodbye sun"];
// const letters = words.map(sentence => sentence.split(" "));
// console.log(letters);

// const nums = [1, 2, 3];
// const result = nums.flatMap(x => [x, x * 10]);
// console.log(result); // [1, 10, 2, 20, 3, 30]


// const nums = [1, 2, 3, 5];
// const even = nums.filter(n => n % 2 === 0);
// console.log(even); // [2, 4]

// const words = ["thecvsd", "ywa9u", "yjaiowdy98", "jj", "thejkwkwijfre"]
// const word = words.filter(n => n.length>5)
// console.log(word)

// console.log(Array.from([1, 2, 3], x => x * 2));
//   // [2, 4, 6]


//   const fruits = ["Apple", "Banana", "Mango"];
// for (let key of fruits.entries()) {
//     console.log(key);
// }

// const fruits = ["Apple", "Banana", "Mango"];
// for (let [index, value] of fruits.entries()) {
//   console.log(index, value);
// }

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = [...arr1, ...arr2]; // combined is [1, 2, 3, 4]
// console.log(combined);

// function sum(nums) {
//   return nums.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3)); // 6


// // Define a destructuring object with two regular variables and one rest variable:
// const {...otherInfo } = {
//   firstName: "Oluwatobi",
//   lastName: "Sofela", 
//   companyName: "CodeSweetly",
//   profession: "Web Developer",
//   gender: "Male"
// }

// // Invoke the otherInfo variable:
// console.log(otherInfo);

// // The invocation above will return:


// const person = { name: "Adnan", age: 21, city: "Hyderabad" };

// for (let key in person) {
//   console.log(key, ":", person[key]);
// }

// const arr = ["a", "b", "c"];
// for (let value of arr) {
//   console.log(value);
// }


// const x = [45, 4, 9, 16, 25];
// let y = x.filter(myfunc);
// function myfunc(val) {
//   return val > 20;
// }
// console.log(y);


// function calculateArea(length, width) {
//   const area = length * width;
//   return area; // Returns the calculated value (e.g., 20)
//   console.log("This line is never executed.");
// }

// const result = calculateArea();
// console.log(result);

// result holds the value 20


// function greet(name, call){
//     console.log("Hello " + name);
//     call();
    
// }

// function gudby(){
//     console.log("Goodbye")
// }

// greet("Adnan",gudby)


// let globalVar = "Welcome to the Global Context";

// function outerFunction() {
//     let outerVar = "I'm in the Outer Function";

//     function innerFunction() {
//         let innerVar = "I'm in the Inner Function";
//         console.log(innerVar);
//         console.log(outerVar);
//         console.log(globalVar);
//     }

//    innerFunction();
// }

// outerFunction();



// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

// function countDown(number) {
//   console.log(number);
  
//   // Base condition to stop recursion
//   if (number > 1) {
//     countDown(number - 1);
//   }
// }

// countDown(5);


// function factorial(n) {
//   if (n === 1) {
//     return 1; // Base case
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(5)); // Output: 120


// function opq(startNum, endNum) {
//   if (endNum - startNum === 0) {
//     return [startNum];
//   } else {
//     var numbers = opq(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }

// console.log(opq(1,5));


let arr = [1,2,3,4,5];
console.log(arr)
console.log(...arr);

let aArr =  "js"
console.log(aArr);
console.log(...aArr);

