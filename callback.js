// //  program that shows the delay in execution

// function greet() {
//     console.log('Hello world');
// }

// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(greet, 2000);
// sayName('John');

function greet(name, myFunc){
    console.log("Hello World");
    myFunc(name)
}

function sayHello(name){
    console.log("Hello" + " "+ name);
}

setTimeout(greet, 2000, "John", sayHello)