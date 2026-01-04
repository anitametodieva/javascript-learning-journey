function wordTracker(arr){
    let wordOccurrences = {};
    let wordsToTrack = arr.shift().split(' ');

    for(let word of wordsToTrack){
        wordOccurrences[word] = 0;
    }

    for(let word of arr){
        if(word in wordOccurrences){
            wordOccurrences[word]++;
        }
    }

    let entries = Object.entries(wordOccurrences).sort((a, b) => b[1] - a[1]);

    for(let [word, occurrences] of entries){
        console.log(`${word} - ${occurrences}`);
    }
}

wordTracker([

'this sentence',

'In', 'this', 'sentence', 'you', 'have',

'to', 'count', 'the', 'occurrences', 'of',

'the', 'words', 'this', 'and', 'sentence',

'because', 'this', 'is', 'your', 'task'

])