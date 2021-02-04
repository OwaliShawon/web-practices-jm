function isPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
            return 'NOT Prime';
            
        }else{
            return 'PRIME';
            
        }
    }
}

var result = isPrime(57);
console.log(result);