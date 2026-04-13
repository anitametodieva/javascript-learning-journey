function storeCatalogue(data){
     const store = {};

  for(let el of data){
    let [name, price] = el.split(" : ");
    price = Number(price);
    let groupChar = name[0];

    if(!store.hasOwnProperty(groupChar)){
        store[groupChar] = [];
    }
    store[groupChar].push({name, price});
    }

    const keys = Object.keys(store).sort((a, b) => a.localeCompare(b));

  for(let groupChar of keys){
    console.log(groupChar);
    store[groupChar].sort((a, b) => a.name.localeCompare(b.name))
    .forEach(el => console.log(`  ${el.name}: ${el.price}`));
    }
}

storeCatalogue(
['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])