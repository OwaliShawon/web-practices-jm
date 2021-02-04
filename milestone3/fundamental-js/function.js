function sayLoveYou(){
    console.log('i love you');
    console.log('jaan o baby');
}
sayLoveYou();
console.log('yeeees baby');
sayLoveYou();

// parameter function

function dounbleIt(num){
    var result = num * 2;
    console.log(result);

    return result;
}
var first = dounbleIt(5);
var second = dounbleIt(10);
console.log(first, second);
var total = first + second;
// console.log(total);

function add(num1, num2){
    var result = num1 + num2;
    return result;
}

var sum = add(15, 17);
console.log(sum);




