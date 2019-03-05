const sumAll = function(num1, num2) {
    var result = 0;
    if(num1 < 0 || num2 < 0){
        return "ERROR."
    }
    if(num1 < num2){
        for(let i = num1; i == num2; i++){
            result += i;
        }
    }
    else if(num1 > num2){
        for(let i = num2; i == num1; i++){
            result += i;
        }
    }
    return result;
}

module.exports = sumAll
