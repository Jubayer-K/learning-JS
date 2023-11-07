// if else condition practice 
var number1 = 19;
var number2 = 46;
if (number1 < 20) {
    console.log("number is less then 20")
}
else {
    console.log(number2);
}

var biscuitPrice = 10;
if (biscuitPrice <= 10) {
    console.log("I would like to have a biscuite please.");
}
else {
    console.log("biscuite price too high.")
}

var traveler = 8;
if (traveler == 4) {
    console.log("Goa is On!!!!!");
}
else {
    console.log("nammai popporo chennai express le !! ")
}

var cocacolaPrice = 25;
if (cocacolaPrice != 25) {
    console.log("I like coke :)");
}
else {
    console.log("Mojo is better!");
}

// all condition needs to be matched (&&)

var getJob = true;
var savingAmount = 5000;

if ( getJob == true && savingAmount > 200000) {
    console.log("You are ready to get married :).");
}
else{
    console.log("Improve your financial situation.")
}
//  only one condition needs to be matched (||) 

if ( getJob == true || savingAmount > 200000) {
    console.log("You are ready to get married :).");
}
else{
    console.log("Improve your financial situation.")
}

// else if conditions 

if ( getJob == true && savingAmount > 200000) {
    console.log("You are ready to get married :).");
}
else if(getJob==true){
    console.log("You are almost ready.");
}
else{
    console.log("Improve your financial situation.")
}
