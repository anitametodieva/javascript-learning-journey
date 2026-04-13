function argumentInfo(...args){
    const result = {};

    for(let el of args){
        const type = typeof(el);
        console.log(`${type}: ${el}`);
        if(!result.hasOwnProperty(type)){
            result[type] = 0;
        }

        result[type] += 1;
    }

    Object.entries(result)
    .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
    .forEach(([type, count]) => console.log(`${type} = ${count}`));
}

argumentInfo('cat', 42, function () { 
    console.log('Hello world!'); 
})