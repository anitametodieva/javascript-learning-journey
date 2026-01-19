function sameNumbers(number){
    let numAsString = number.toString();
    let firstNum = Number(numAsString[0]);
    let isSame = true;
    let sum = firstNum;

    for(let i = 1; i < numAsString.length; i++){
        let currentNum = Number(numAsString[i]);

        if(currentNum !== firstNum){
            isSame = false;
        }
        sum += currentNum;
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(1234)
