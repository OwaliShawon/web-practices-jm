var name = 'kuddus';

function add (num1, num2){
    var result = num1 + num2;
    console.log('result inside', name);
    return result;
}

var sum = add(13, 21);
console.log(name, sum);