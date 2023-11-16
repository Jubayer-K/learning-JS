function addNumbers(num1, num2) {
  var sum = 0;
  console.log(arguments);
  for (var i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    sum = sum + num;
  }
  return sum;
}
var result = addNumbers(2, 343, 53, 5);
console.log(result);
