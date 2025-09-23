function binaryToDecimal(binaryNumber){
    // let decimal = parseInt(binaryNumber, 2);
    //console.log(decimal);
    let decimal = 0;
    let power = 0;

    for(let i = binaryNumber.length - 1; i >= 0; i--){
        let digit = Number(binaryNumber[i]);
        decimal += digit * Math.pow(2, power);
        power++;
    }

    console.log(decimal);
}

binaryToDecimal('00001001')