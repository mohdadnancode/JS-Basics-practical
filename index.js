const myArr = [1, 2, 3];
const newArr = myArr.map(x => [x, x * 10]);
console.log(newArr)

let sentences = ["hi there", "how are you"];
let words = sentences.map(sentence => sentence.split(" "));
console.log(words);
// ["hi", "there", "how", "are", "you"]
