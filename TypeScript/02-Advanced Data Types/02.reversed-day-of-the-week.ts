enum DaysOfTheWeek {
    "Monday" = 1,
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
}

function reversedDayOfTheWeek(day: string) {
    console.log(DaysOfTheWeek[day as keyof typeof DaysOfTheWeek] || "error")
}

reversedDayOfTheWeek("Monday");
reversedDayOfTheWeek("Friday");
reversedDayOfTheWeek("Invalid");
