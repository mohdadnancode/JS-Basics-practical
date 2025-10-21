(function() {
  console.log("Hello, Adnan!");
})();

function fname() {
  console.log("Hello, Adnan!");
}
fname()

let result = (function(a, b) {
  return a + b;
})(5, 10);

console.log(result);

// (function() {
//   let secret = "hidden";
//   console.log(secret);
// })();
// console.log(secret); // ❌ Error: secret is not defined

// function fname() {
//   let a = "Hello, Adnan!";
//   console.log(a)
// }
// console.log(a)


