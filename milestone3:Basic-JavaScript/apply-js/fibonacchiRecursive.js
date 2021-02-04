function fibonacchiRecursive(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fibonacchiRecursive(n-1) + fibonacchiRecursive(n -2);
    }
}

var result = fibonacchiRecursive(10);
console.log(result);