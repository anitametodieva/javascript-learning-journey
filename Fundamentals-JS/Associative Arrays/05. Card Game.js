function cardGame(arr){
    let players = {};

    for(let line of arr){
        let [name, cards] = line.split(': ');
        let cardsArr = cards.split(', ');

        if(!players[name]){
            players[name] = [];
        }

        for(let card of cardsArr){
            if(!players[name].includes(card)){
                players[name].push(card);
            }
        }
    }

    let powers = {J: 11, Q: 12, K: 13, A: 14};
    let types = {S: 4, H: 3, D: 2, C: 1};

    for(let name in players){
        let total = 0;

        for(let card of players[name]){
            let type = card.slice(-1);
            let power = card.slice(0, -1);

            if(powers[power]){
                power = powers[power];
            } else {
                power = Number(power);
            }
            total += power * types[type];
        }
        console.log(`${name}: ${total}`);
    }
}

cardGame([

'Peter: 2C, 4H, 9H, AS, QS',

'Tomas: 3H, 10S, JC, KD, 5S, 10S',

'Andrea: QH, QC, QS, QD',

'Tomas: 6H, 7S, KC, KD, 5S, 10C',

'Andrea: QH, QC, JS, JD, JC',

'Peter: JD, JD, JD, JD, JD, JD'

])