

// factorial using for loop

function factorialFunction(number) {
    
    let factorial = 1;
    for
        (let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
 
    return factorial;
}
console.log(factorialFunction(8));


// factorial using while loop

function factorialwhileFunction(n) {
    let j = 1;
    let factorialwhile = 1;
    while (j <= n) {
        factorialwhile = factorialwhile * j;
        j++;
    }
    return factorialwhile;
}
console.log(factorialwhileFunction(8));


// declare factorial in recursive way

function recursiveFactorial(num){
    if(num==0){
        return 1;
    }else{
        return num * recursiveFactorial(num-1);
    }
}
console.log(recursiveFactorial(8));








