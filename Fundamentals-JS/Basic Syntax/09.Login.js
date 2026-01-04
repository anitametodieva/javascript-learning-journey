function login(array){
    let username = array[0];
    let correctPassword = username.split('').reverse().join('');
    let attempts = 0;

    for(let i = 1; i < array.length; i++){
        let currentTry = array[i];

        if(currentTry === correctPassword){
            console.log(`User ${username} logged in.`);
            return;
        } 
        attempts++;
        if(attempts === 4){
            console.log(`User ${username} blocked!`);
            return;
        } else{
            console.log(`Incorrect password. Try again.`);
        }
    }
}

login(['momo', 'omom'])