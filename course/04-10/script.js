function giveMeEms(pixels) {
    var baseValue = 16;

    function doTheMath(){
        return pixels/baseValue;

    }

    return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var kingSize = giveMeEms(32);

console.log("Small Size ", smallSize());
console.log("Medium Size ", mediumSize());
console.log("Large Size ", largeSize());
console.log("King Size ", kingSize());





// function dosomeMath() {
//     var a = 5; 
//     var b = 4; 
    
//     function multiply() {
//         var result = a*b; 
//         return result;
//     }
//     return multiply;
// }

// var theResult = dosomeMath();

// console.log("The Result ", theResult());