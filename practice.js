const name = "Jubayer";
// name = "Khan";
console.log(name);

const numbers = { num1: 34, num2: 234, num3: 55 };
numbers.num2 = 0;
console.log(numbers);

let firstName = "Jubayer";
let lastName = "Khan";
let age = 25;
let fullName = firstName + ' ' + lastName;
let nameAge = fullName + ' ' + age;
console.log(fullName);
console.log(nameAge);
let x = 5;
let y = 5;
let z = 6;
console.log(x == y);
console.log(x == z);

let year = 30;
year = 40;
const value = "hello" + (4 + 4) + "world";
console.log(value);

function sleep(person, time) {
    console.log(person + " is going to sleep at " + time);
};

sleep("Jubayer", 12);
sleep("Turag", "night");


function myFunction(a, b) {
    return a + b;
}
let l = myFunction("Jubayer ","Khan");
console.log(l);