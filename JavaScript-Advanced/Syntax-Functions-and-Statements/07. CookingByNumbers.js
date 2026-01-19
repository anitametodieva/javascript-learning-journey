function cookingByNumbers(number, ...params){
    const operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.80
    };
    let num = Number(number);

    for(let i = 0; i < params.length; i++){
        let command = params[i];
        num = operations[command](num);

        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
