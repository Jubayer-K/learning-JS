// using temporary variable

var a = 5;
var b = 7;
console.log('before swap a=', a, 'b=', b);
var temp = a;
a = b;
b = temp;
console.log('after swap a=', a, 'b=', b,);

// without using another variable
var x = 10;
var y = 20;
console.log('before swap x=', x, 'y=', y);
x = x + y;
y = x - y;
x = x - y;
console.log('after swap x=', x, 'y=', y);

var p = 100;
var q = 200;
console.log('before swap p=', p, 'q=', q);

[p, q] = [q, p];

console.log('after swap p=', p, 'q=', q);
