enum Months {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

function friday13th(parameter: unknown[]) {
    parameter.forEach((el) => {
        if (el instanceof Date && el.getDate() === 13 && el.getDay() === 5) {
            console.log(`${el.getDate()}-${Months[el.getMonth()]}-${el.getFullYear()}`);
        }
    })
}

friday13th([
{},
new Date(2025, 4, 13),
null,
new Date(2025, 5, 13),
'13-09-2023',
new Date(2025, 6, 13),
]);