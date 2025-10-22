function x(){
    let a = 7;
    function y(){
        console.log(a);
    }
     a = 10
    return y;
}
x()();
// let close = x();
// close()


// var z = x();
// console.log(z);
// z()


