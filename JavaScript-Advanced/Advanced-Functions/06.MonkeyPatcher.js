function monkeyPatcher(action){
    let result;

    switch(action){
        case "upvote": this.upvotes++; break;
            case "downvote": this.downvotes++; break;
                case "score": result = getScore.call(this); break;
    }

    function getScore(){
        let positiveVote = this.upvotes;
        let negativeVote = this.downvotes;
        let total = positiveVote + negativeVote;
        let score = positiveVote - negativeVote;

        if(total > 50){
            let extraValue = Math.ceil(Math.max(positiveVote, negativeVote) * 0.25);
            positiveVote += extraValue;
            negativeVote += extraValue;
        }

        let rating = "new";
         if(total < 10){
            rating = "new";
         } else if (this.upvotes > total * 0.66){
            rating = "hot";
         } else if(score >= 0 && total > 100){
            rating = "controversial";
         } else if(score < 0){
            rating = "unpopular";
         }

         return [positiveVote, negativeVote, score, rating];
    }
    return result;
}

let post = {

id: '3',

author: 'emil',

content: 'wazaaaaa',

upvotes: 100,

downvotes: 100

};

monkeyPatcher.call(post, 'upvote');

monkeyPatcher.call(post, 'downvote');

let score = monkeyPatcher.call(post, 'score'); 
console.log(score);
for(let i = 0; i < 50; i++){
monkeyPatcher.call(post, 'downvote');
} 

score = monkeyPatcher.call(post, 'score');
console.log(score);