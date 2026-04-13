function calorieObject(data){
    const result = {};

    for(let i = 0; i < data.length; i += 2){
        let key = data[i];
        let value = data[i + 1];
        result[key] = Number(value);
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])