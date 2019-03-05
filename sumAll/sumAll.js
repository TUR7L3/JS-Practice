const sumAll = function(arg1, arg2) {
    var result = 0;
    var num1 = Number(arg1);
    var num2 = Number(arg2);
    if(num1 < 0 || num2 < 0 || typeof(arg1) != "number" || typeof(arg2) != "number") {
        return "ERROR";
    }
    if(num1 < num2){
        for(let i = num1; i < num2 + 1; i++){
            result += i;
        }
    }
    else if(num1 > num2){
        for(let i = num2; i < num1 + 1; i++){
            result += i;
        }
    }
    return result;
}

module.exports = sumAll
