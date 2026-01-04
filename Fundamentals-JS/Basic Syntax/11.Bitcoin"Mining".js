function bitcoin(array){
    let bitcoinsBought = 0;
    let firstBitcoinDay = 0;
    let money = 0;
    let day = 1;

    for(let gold of array){
        if(day % 3 === 0){
            gold *= 0.7;
        }
        money += gold * 67.51;

        while(money >= 11949.16){
            bitcoinsBought++;
            money -= 11949.16;

            if(bitcoinsBought === 1){
                firstBitcoinDay = day;
            }
        }

        day++;
    }
    console.log(`Bought bitcoins: ${bitcoinsBought}`);

    if(bitcoinsBought > 0){
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}

bitcoin([100, 200, 300])