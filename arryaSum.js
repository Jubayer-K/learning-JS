var numbers = [23, 3, 5, 32, 23, 4, 34, 3, 4, 35, 3, 52, 3, 25];
var sum = 0;

function getArraySum(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
var result = getArraySum(numbers);
console.log("total of all of the numbers in this array is ", result);
