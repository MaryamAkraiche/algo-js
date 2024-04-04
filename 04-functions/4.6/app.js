function factorial(a){
    if (a == 1){
        return 1;
    }
    return a * factorial(a - 1);
}
let result = factorial(6);
console.log(result);