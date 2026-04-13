function solve(input) {
    let quantities = {};
    let bottles = {};

    for (let line of input) {
        let [juice, qty] = line.split(' => ');
        qty = Number(qty);

        if (!quantities.hasOwnProperty(juice)) {
            quantities[juice] = 0;
        }

        quantities[juice] += qty;

        if (quantities[juice] >= 1000) {
            let produced = Math.floor(quantities[juice] / 1000);

            if (!bottles.hasOwnProperty(juice)) {
                bottles[juice] = 0;
            }

            bottles[juice] += produced;
            quantities[juice] -= produced * 1000;
        }
    }

    for (let juice in bottles) {
        console.log(`${juice} => ${bottles[juice]}`);
    }
}