var name = "Jubayer";
var lastName = " Khan"
console.log(name.length);

if (name.length > 4) {
    name = "Jubu" + lastName;
    console.log(name);
}

else {
    console.log("name is within size")
}
// 'const' is the way to declare unchangeable variable (const stands for Constant)

const country = "Bangladesh";
console.log(country);

// country = 12;
// console.log(country); // it will show error

// "let" is used declare a variable which is destined to change 

let age = 17;
console.log(age);
age = 18;
age = 19;
console.log(age);
