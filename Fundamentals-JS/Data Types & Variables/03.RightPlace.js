function rightPlace(word1, char, word2){
    let result = word1.replace('_', char);
    // let output = result === word2? 'Matched': 'Not Matched';
    // console.log(output);
     if(result === word2){
        console.log('Matched');
     } else {
        console.log('Not Matched');
     }
}

rightPlace('Str_ng', 'I','Strong');
rightPlace('Str_ng', 'i','String');