// const year = 1700;
// const leapYear = year % 4;
// console.log(year % 4);
// if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) ) {
//     console.log("it's a leap year");
// }
// else {
//     console.log(year + " is not a leap year");
// }
function isLeapYear(year) {
    let remainder = year % 4;
    console.log(remainder);
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " is a leap year");

    }
    else {
        console.log(year + " is not a leap year");

    }
}

const result = isLeapYear(1700);
