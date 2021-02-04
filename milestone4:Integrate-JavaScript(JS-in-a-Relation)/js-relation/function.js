function evenify(num){
    if(num % 2 == 0){
        console.log(num, 'is even number');
    }
    else{
        console.log(num, 'is odd number')
    }
}

function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        evenify(num);
    }
}

nums = [5, 12, 14, 89, 100, 20];
evenify_all(nums);

friend_age = [20, 22, 20, 25, 27, 24];
evenify_all(friend_age);
