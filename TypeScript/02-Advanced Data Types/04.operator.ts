function operator(
    param: string | number | string[],
    operation: 'Index' | 'Length' | 'Add',
    operand: number
) {
    switch(operation) {
        case "Index":
            if (typeof param !== "number") return param[operand];
            break;
        case "Length":
             if (typeof param !== "number") return param.length % operand;
            break;
        case "Add":
            if (!Array.isArray(param)) return Number(param) + operand;
            break;
    }
}

console.log(operator(['First', 'Second', 'Third'], 'Index', 1));
console.log(operator('string', 'Index', 1));
console.log(operator(['Just', 'Two'], 'Length', 5));


