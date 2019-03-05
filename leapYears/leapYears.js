const leapYears = function(arg) {
    var year = Number(arg);
    if (year%4 === 0){
        if(year%100 === 0){
            if(year%400 === 0)
            {
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return true;
        }
    }
    else{
        return false;
    }
}

module.exports = leapYears