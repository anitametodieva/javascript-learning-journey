function partyReservationLists(arr){
    let vipGuests = [];
    let regularGuests = [];
    let current = arr.shift();

    while(current !== 'PARTY'){
        if(!isNaN(current[0])){
            vipGuests.push(current);
        } else {
            regularGuests.push(current);
        }
        current = arr.shift();
    }

    for(let guest of arr){
        let index = vipGuests.indexOf(guest);
        if(index !== -1){
            vipGuests.splice(index, 1);
        } else {
            index = regularGuests.indexOf(guest);
            if(index !== -1){
                regularGuests.splice(index, 1);
            }
        }
    }

    console.log(vipGuests.length + regularGuests.length);
    vipGuests.forEach(g => console.log(g));
    regularGuests.forEach(g => console.log(g));
    
}

partyReservationLists(['m8rfQBvl', 'fc1oZCE0','UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ])