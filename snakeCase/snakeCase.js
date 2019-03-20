const snakeCase = function(phrase) {
    let aphrase = phrase;
    aphrase = aphrase.replace(/[^\w\s]|_/g, " ")
    .replace(/\s{2,}/g," ");
    
    aphrase = splitCap(aphrase);

    
    
    if(aphrase[aphrase.length-1] == ' '){
        aphrase = aphrase.slice(0,-1);
    }

    aphrase = aphrase.split(' ').join('_');
    //console.log(aphrase);
    return aphrase;
    


}

function splitCap(phrase){
    let indexArr = [];
    
    for(let i = 0;i < phrase.length; i++){
        if(phrase.charAt(i) === phrase.charAt(i).toUpperCase() && !(phrase.charAt(i) == ' ')){
            indexArr.push(i);
            //console.log(i);
        }
    }
    let aPhrase = phrase;
    if(indexArr[0] != undefined){
        aPhrase = phrase.slice(0 ,indexArr[0]);
    }
    for (index in indexArr){
        if(indexArr[index + 1]){
            aPhrase = aPhrase.concat(' ', phrase.slice(indexArr[index],indexArr[index+1]));  
        }
        else{
            aPhrase = aPhrase.concat(' ',phrase.slice(indexArr[index],(phrase.length)));
            //console.log(aPhrase);
        }
    }

    if(aPhrase.charAt(0) === ' '){
        aPhrase = aPhrase.slice(1,phrase.length+1);
    }

    //console.log(aPhrase);
    return aPhrase.toLowerCase();
}

//snakeCase("This is the song that never ends");

module.exports = snakeCase
