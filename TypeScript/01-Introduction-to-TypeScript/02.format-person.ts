function formatPerson(personData: [string, number]) {
    return `Hallo, my name is ${personData[0]} and my age is ${personData[1]}`;
}

console.log(formatPerson(["Alice", 31]));
console.log(formatPerson(["Bob", 20]));