function solve(input){
    let inputType = typeof(input);
    console.log(inputType);

    if(inputType === 'string' || inputType === 'number'){
        console.log(input);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

solve('Hallo, JavaScript!');
solve(18);
solve(null);