function rounding(num, precision){
    if(precision > 15){
        precision = 15;
    }

    let fixedNum = num.toFixed(precision);
    let formattedNum = parseFloat(fixedNum);
    console.log(formattedNum);
}

rounding(10.5, 3)