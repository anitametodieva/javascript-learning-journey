function multiplicationTable(number){
    let product = 0;
    for(let times = 1; times <= 10; times++){
        product = number * times;
        console.log(`${number} X ${times} = ${product}`);
    }
    
}

multiplicationTable(5)