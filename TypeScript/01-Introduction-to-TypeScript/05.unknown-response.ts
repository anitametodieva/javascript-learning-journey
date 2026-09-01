function unknownResponse(parameter: unknown): string {
    if (
        parameter && typeof parameter === "object" && "value" in parameter && typeof parameter.value === "string"
    ) {
        return parameter.value;
    }
    return "-";
}

console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));