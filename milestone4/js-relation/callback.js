function explain_callback(name, age, task){
    console.log('Hello', name);
    console.log('your age', age);
    // console.log(task);
    task();


}

function washHand(){
    console.log('wash your hand');
}
function takeShower(){
    console.log('take shower');
}

explain_callback('sogir', 15, washHand);
explain_callback('mogir', 20, takeShower);
explain_callback('togir', 25, takeShower);
