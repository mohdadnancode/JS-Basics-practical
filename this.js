"use strict";
function showThis() {
    console.log(this);
}

showThis(); // window (in browser)
