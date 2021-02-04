function addNumber(num1, num2){
    console.log(arguments[1]);
    return num1 + num2;
}

var sum = addNumber(10, 20);
console.log(sum);
