const reverseString = function(str) {
    var result = "";
    for (i=0; i < str.length; i++){
        let char = str.length - i - 1;
        result += str[char];    
    }
    return result;
}

module.exports = reverseString
