function registerForTheHeroes(data){
    let result = [];

    for(let iterator of data){
        if(!iterator.trim()) continue;
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({name, level, items});
    }

    console.log(JSON.stringify(result));
}

registerForTheHeroes(
['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])