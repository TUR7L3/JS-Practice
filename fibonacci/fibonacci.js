const fibonacci = function(x) {
    let result = 0;
    let fibArr = [];
    fibArr[0] = 1;
    fibArr[1] = 1;
    let n = 2;
    if(x < 0){
        return 'OOPS';
    }
    for(let i = 0; i < x; i++){
        fibArr[n] = fibArr[n-1] + fibArr[n-2];
        n++;
    }
    return fibArr[x - 1];
    
}

module.exports = fibonacci
