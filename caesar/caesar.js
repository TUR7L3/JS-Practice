const caesar = function(input, Shift) {
    let alphaCodes = [];
    let cypher = [];
    let shift = Shift%26;

    const UPPER_LOW = 65, UPPER_HIGH = 90;
    const LOWER_LOW = 97, LOWER_HIGH = 122;


    for(index in input){
        alphaCodes.push(input.charCodeAt(index));

        if(alphaCodes[index] >= UPPER_LOW && alphaCodes[index] <= UPPER_HIGH){
            alphaCodes[index] = (((alphaCodes[index] - UPPER_LOW) + shift)%26) + UPPER_LOW;
            if(alphaCodes[index] < LOWER_LOW && alphaCodes[index] > UPPER_HIGH){
                alphaCodes[index] += 26;
            }
            else if(alphaCodes[index] < UPPER_LOW){
                alphaCodes[index] += 26;
            }
        }
        else if(alphaCodes[index] >= LOWER_LOW && alphaCodes[index] <= LOWER_HIGH  ){
            alphaCodes[index] = (((alphaCodes[index] - LOWER_LOW) + shift)%26) + LOWER_LOW;
            if(alphaCodes[index] < LOWER_LOW && alphaCodes[index] > UPPER_HIGH){
                alphaCodes[index] += 26;
            }
            else if(alphaCodes[index] < UPPER_LOW){
                alphaCodes[index] += 26;
            }
        }
        
        
        cypher[index] = String.fromCharCode(alphaCodes[index]);
    }

    console.table(alphaCodes);
    console.table(cypher);

    return cypher.join('');

}

caesar("AZ az",1);

module.exports = caesar
