var i = "test";
console.log(i);
function getEvenNum(num) {
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 == 0) {
      console.log(num, " is an even number.");
    } else {
      console.log(num, "is an odd number.");
    }
  }return num;
  
}

let numbers = [23, 5, 3, 2, 55, 32, 11];
let result = getEvenNum(numbers);
console.log(result);
