const palindromes = function(phrase) {
    let isPal;
    let aphrase = phrase.replace(/[^\w\s]|_/g, "")
                   .replace(/ /g, "");
    aphrase = aphrase.toLowerCase();
    let len = aphrase.length;
    for(let i = 0; i < len; i++){
        if(aphrase.charAt(i) == aphrase.charAt(len - i - 1)){
            isPal = true;
        }
        else{
            isPal = false;
            return isPal;
        }
    }
    return isPal;

}

module.exports = palindromes
