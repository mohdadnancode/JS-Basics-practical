const points = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
function minVal(arr){
    return Math.min(...arr);
}
console.log(minVal(points));

console.log(myArrayMin(points));
