function optionalMultiplier(
    param1?: string | number, 
    param2?: string | number, 
    param3?: string | number,
) {
   // const first = param1 ? Number(param1) : 1
   // const second = param2 ? Number(param2) : 1
   // const third = param3 ? Number(param3) : 1

   // return first * second * third
    return Number(param1 || 1) * Number(param2 || 1) * Number(param3 || 1);
}

console.log(optionalMultiplier("3", 5, "10"));
console.log(optionalMultiplier("2", "2"));
console.log(optionalMultiplier(undefined, 2, 3));
console.log(optionalMultiplier(7, undefined, '2'));
console.log(optionalMultiplier());




