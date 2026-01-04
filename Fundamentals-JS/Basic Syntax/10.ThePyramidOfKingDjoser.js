function pyramidOfKingDjoser(base, increment){
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let step = 0;
    let side = base;

    while(side > 2){
        step++;

        let area = side * side;
        let outer = side * 4 - 4;
        let inner = area - outer;

        stone += inner;

        if(step % 5 === 0){
            lapis += outer;
        } else {
            marble += outer;
        }

        side -= 2;
    }

    step++;
    gold += side * side;

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}

pyramidOfKingDjoser(11, 1)