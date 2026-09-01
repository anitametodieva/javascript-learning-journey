enum DaysOfTheWeek {
    "Monday" = 1,
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
}

function daysOfTheWeek(day: number) {
   // if (day in DaysOfTheWeek) {
   //     console.log(DaysOfTheWeek[day])
   // } else {
   //     console.log("error")
   // }
   console.log(DaysOfTheWeek[day] || "error")
}

daysOfTheWeek(1)
daysOfTheWeek(5)
daysOfTheWeek(-1)