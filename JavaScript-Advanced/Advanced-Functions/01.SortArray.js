function sortArray(numArray, string){
    if(string === "asc"){
        return numArray.sort((a, b) => a - b);
    } else {
        return (numArray.sort((a, b) => b - a));
    }
}

const result = sortArray([14, 7, 17, 6, 8], 'desc');
console.log(result);