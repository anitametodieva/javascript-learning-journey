function minerTask(arr){
    let resourceQtys = {};

    for(let i = 0; i < arr.length; i += 2){
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        if(resource in resourceQtys){
            resourceQtys[resource] += qty;
        } else {
            resourceQtys[resource] = qty;
        }
    }

    let resourceEntries = Object.entries(resourceQtys);

    for(let [key, value] of resourceEntries){
        console.log(`${key} -> ${value}`);
        
    }
}

minerTask([

'Gold',

'155',

'Silver',

'10',

'Copper',

'17'

])