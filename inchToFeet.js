var inputInch = 5;
var inFeet = inputInch / 12;

console.log(inFeet.toFixed(4));

// in function :

function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;

}
var multipleInches =[123,45,655,43,232,];

var result0 = inchToFeet(multipleInches[3]);
console.log(result0);

var result = inchToFeet(156); 
console.log(result);
var result2 = inchToFeet(300);
console.log(result2);
