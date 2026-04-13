function tickets(ticketsData, sortCriteria){
    let tickets = [];

    class Ticket {
        destination;
        price;
        status;
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    for(let el of ticketsData){
        let [destination, price, status] = el.split('|');
        const myTicket = new Ticket(destination, Number(price), status);
        tickets.push(myTicket);
    }

    return tickets.sort((a, b) => {
        if(sortCriteria === 'price'){
            return a.price - b.price;
        }
        return a[sortCriteria].localeCompare(b[sortCriteria]);
    })
}

const result = tickets(
['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')

console.log(result);