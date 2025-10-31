// // "use strict";
// function showThis() {
//     console.log(this);
// }

// showThis(); // window (in browser)



// 'this in arrow function'

const obj1 = {
    name : "Adnan",
    x : () => {
        console.log(this)
    }
}


const obj2 = {
    name : "Adnan",
    x : function(){
        // Enclosing lexical contest
        let y = () => {
        console.log(this)
    }
    y();
    }
}

obj1.x() //Refer to the globalObject (Window)
obj2.x() // Refer to object(obj2)