function validityChecker(...date){
    let x1 = Number(date[0]);
    let y1 = Number(date[1]);
    let x2 = Number(date[2]);
    let y2 = Number(date[3]);

    if (Number.isInteger(checkDistance(x1, y1, 0, 0))){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(checkDistance(x2, y2, 0 ,0))){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(checkDistance(x1, y1, x2, y2))){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function checkDistance(x1, y1, x2, y2){
        let distanceX = x1 - x2;
        let distanceY = y1 - y2;

        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }
}

validityChecker(3, 0, 0, 4)
