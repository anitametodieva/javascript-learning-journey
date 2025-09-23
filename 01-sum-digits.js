function sumDigits(number){
    let sum = 0;
    let numberAsString = String(number);

    // for(let char of numberAsString){
    //let currentDigit = Number(char);
    // sum += currentDigit;

    for(let i = 0; i < numberAsString.length; i++){
        let currentDigit = numberAsString[i];
        
        sum += Number(currentDigit);
        
    }

    console.log(sum);
}