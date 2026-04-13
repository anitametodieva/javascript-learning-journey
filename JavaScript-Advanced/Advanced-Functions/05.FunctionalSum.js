function add(num){
    let state = 0;
    stateManipulation(num);

    function stateManipulation(num){
        state += num;
        return stateManipulation;
    }

    stateManipulation.toString = () => state;
    return stateManipulation;
}


console.log(add(1)(6)(-3).toString())