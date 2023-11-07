console.log("hello world");
var bannaPrice = 12;
console.log(bannaPrice);
var seenAfter = "days";
console.log(typeof seenAfter);

var name = "Jubayer";
console.log(name);
var promise = "I promise I will work hard to become a programmer.";
console.log(promise.split(' '));
var country = 'Bangladesh';
console.log(country.indexOf('desh'));
console.log(typeof promise);

var number1 = 25;
var number2 =15.5;
console.log(number1+number2);
console.log(typeof number2);

var number3 = "113.32";
number3 = parseFloat(number3);
console.log(number3);
number3 = parseInt(number3);
console.log(number3);
var number4 = 34;
number4 = ''+number4;
console.log(typeof number4);

var number5 = 0.1;
var number6 = 0.4;

var total = number5+number6;
total = total.toFixed(4);
console.log(total);
console.log(number5+number6);

var price1 = 25;
var price2 = 35;

var total = price2+price1;
console.log(total);
console.log(total.toFixed(4));

var total = price2-price1;
console.log(total);
console.log(total.toFixed(4));

var total = price2*price1;
console.log(total);
console.log(total.toFixed(4));

var total = price2/price1;
console.log(total);
console.log(total.toFixed(4));

var total = price2%price1;
console.log(total);
console.log(total.toFixed(4));

var absNumber= -5.53243;
var result = Math.abs(absNumber);
console.log(result);

var absNumber= 5.53243;
var result = Math.round(absNumber);
console.log(result);

var absNumber= 5.13243;
var result = Math.ceil(absNumber);
console.log(result);

var absNumber= 5.93243;
var result = Math.floor(absNumber);
console.log(result);

var absNumber= 5.53243;
var result = Math.random(absNumber);
console.log(result.toFixed(3));

var randomNumber= Math.random()*100;
var randomResult = Math.round(randomNumber);
console.log(randomResult);