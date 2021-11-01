console.log('------------- #4')

function sum(a, b) {
    return a + b;
}
let result = sum (5, 25);
console.log(result);

function sub(a, b) {
    return b - a;
}
let result2 = sub(6, 10);
console.log(result2);

function multiply(k, n) {
    return k * n;
}
let result3 = multiply(3, 4);
console.log(result3);

function division(m, t) {
    return m / t;
}
let result4 = division(36, 6);
console.log(result4);

console.log('------------- #5')

function printNumDecrease(n) {
    for (let i = 1; i <=n; i++) {
        console.log(i);
    }
}
printNumDecrease(5);

console.log('------------- #6')

function printNumIncrease(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
printNumIncrease(5);

console.log('------------- #7')

function pow(x, n) {
    return x**n;
}
let result5 = pow(7, 3);
console.log(result5);

console.log('------------- #8')

function isBigger(a, b) {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}
console.log(isBigger(5, -1));

console.log('------------- #9')

function isSmaller(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
console.log(isSmaller(5, -1));
