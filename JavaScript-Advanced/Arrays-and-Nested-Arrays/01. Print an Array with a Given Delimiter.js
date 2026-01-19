function printArray(arr, delimiter){
    let buff = "";

    arr.forEach((x, i, self) => {
        if(i === self.length - 1){
            return buff += x;
        }
        return buff += x + delimiter
    });

    console.log(buff)
}

printArray(['One', 'Two', 'Three', 'Four', 'Five'], '-')
