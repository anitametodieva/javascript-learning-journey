function requiredReading(pagesNum, pagesRead1Hour, daysReadTheBook){
    let totalTime = pagesNum / pagesRead1Hour;
    let dayTime = totalTime / daysReadTheBook;
    console.log(dayTime);
}

requiredReading(212, 20, 2);