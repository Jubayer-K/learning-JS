var num = 2.499;
var result = Math.floor(num);
console.log(result);
var result2 = Math.ceil(num);
console.log(result2);
var result3 = Math.round(num);
console.log(result3);
var dice = Math.random() * 10;
console.log(dice);
var randomNum = Math.round(dice);
console.log(randomNum);

for (var i = 0; i < 10; i++) {
    var rNum = Math.random() * 6;
    var output = Math.round(rNum);
    console.log(output)
}