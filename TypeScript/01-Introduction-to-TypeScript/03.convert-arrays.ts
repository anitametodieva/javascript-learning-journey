function convertArrays(array: string[]): [string, number] {
    const concatenatedText = array.join("");
    const textLength = concatenatedText.length;

    return [concatenatedText, textLength];
}

console.log(convertArrays(['How', 'are', 'you?']))