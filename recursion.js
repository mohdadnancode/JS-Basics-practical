// function findFact(n){
//     let fact = 1
//     for(i=n;i>=1;i--){
//         fact*= i
//     }
//     return fact;
// }
// console.log(findFact(5))


function findFact(n){
    if(n>1){
        return n * findFact(n-1);
    }
    
        return 1
}

console.log(findFact(5))