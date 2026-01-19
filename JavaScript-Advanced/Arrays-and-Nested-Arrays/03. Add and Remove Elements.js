function addAndRemoveElements(arr){
let num = 1;
let result = [];

for(let el of arr){
    switch(el){
        case "add":
            result.push(num);
            num++;
            break;
            case "remove":
                result.pop(num);
                num++;
                break;
    }
}

result.length > 0 ? console.log(result.join("\n")) : console.log("Empty");
}

addAndRemoveElements(['add', 'add', 'add', 'add'])
