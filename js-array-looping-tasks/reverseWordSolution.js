// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output: 'person working hard a am I'

const statement = 'I am a hard working person';

let statArray = statement.split(' ');

console.log( typeof statArray);

revStatement=[];

for(const element of statArray){
    revStatement.unshift(element);
}
console.log(revStatement);