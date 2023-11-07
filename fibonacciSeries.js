
// var fibo = [0,1];
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo [3-2];
// fibo[4] = fibo[4-1] + fibo [4-2];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fobp[i] = fibo[i-1]+fibo[i-2];


function fibonacci(num) {
    let fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo
}
console.log(fibonacci(12));

// fibonacci elemnt in recursive way

function recursiveFibonacci(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    else {
        return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
    }
}
console.log(recursiveFibonacci(12));

// fibonacci series in recursive way

function fibonacciseries(n2) {
    if (n2 == 0) {
        return [0];
    } else if (n2 == 1) {
        return [0, 1];
    } else {
        let fibo2 = fibonacciseries(n2 - 1);
        let nextElemnt = fibo2[n2 - 1] + fibo2[n2 - 2];
        fibo2.push(nextElemnt);
        return fibo2;
    }
} 
console.log(fibonacciseries(12));