function summarizePerson(
id: number, 
firstName: string, 
lastName: string, 
age: number, 
middleName?: string,
hobbies?: string[],
workInfo?: [string, number],
 ): [number, string, number, string, string] {
    const fullName = middleName 
    ? `${firstName} ${middleName} ${lastName}` 
    : `${firstName} ${lastName}`;

    const hobbyList = !hobbies || hobbies.length === 0
    ? "-" : hobbies.join(", ");

    const transformedWorkInfo = !workInfo ? "-" : `${workInfo[0]} -> ${workInfo[1]}`;

    return [id, fullName, age, hobbyList, transformedWorkInfo];
 }

 console.log(summarizePerson(12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['SalesConsultant', 2500]));