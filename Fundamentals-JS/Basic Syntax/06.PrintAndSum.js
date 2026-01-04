function printAndSum(number1, number2){
    let sum = 0;
    let allNum = '';
    
    for(let i = number1; i <= number2; i++){
        allNum += i + ' ';
        sum += i;
    }

    console.log(allNum);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)