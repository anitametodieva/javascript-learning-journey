function lowestPricesInCities(arr){
    const result = [];

    for(let el of arr){
        let [town, product, price] = el.split(" | ");
        price = Number(price);

        if(!result.hasOwnProperty(product)){
            result[product] = {town, price};
        }

        if(result[product].price > price){
            result[product] = {town, price};
        }
    }

    for(let [key, value] of Object.entries(result)){
        console.log(`${key} -> ${value.price} (${value.town})`);
    }
}

lowestPricesInCities(
['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])