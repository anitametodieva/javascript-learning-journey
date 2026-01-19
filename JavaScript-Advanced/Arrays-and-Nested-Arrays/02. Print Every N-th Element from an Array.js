function printEveryNElement(arr, N){
    let result = [];

    for(let i = 0; i < arr.length; i += N){
        result.push(arr[i]);
    }
    return result;
}

console.log(printEveryNElement(
['5',
'20',
'31',
'4',
'20'],
2))
