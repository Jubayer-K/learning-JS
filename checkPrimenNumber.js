let n = 13;
for (i = 2; i < n; i++) {
    // console.log(i,n%i);
    if (n % i == 0) {
        console.log("not a prime number");
        break;
    } else {
        console.log('your number is a prime number ');
    }

}
