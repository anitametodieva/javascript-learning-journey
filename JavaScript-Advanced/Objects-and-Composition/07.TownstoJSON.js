function townsToJSON(arr){
    let result = [];
    const [headerA, headerB, headerC] = arr.shift().split(/\s?\|\s?/).filter(x => !!x);

    for(let el of arr){
        let [town, la, lo] = el.split(/\s?\|\s?/).filter(x => !!x);
        la = Number(la).toFixed(2);
        lo = Number(lo).toFixed(2);
        const info = {};
        info[headerA] = town;
        info[headerB] = Number(la);
        info[headerC] = Number(lo);

        result.push(info);
    }

    console.log(JSON.stringify(result));
}

townsToJSON(
['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])