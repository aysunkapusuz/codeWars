// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.
// 
// Input :: "a"
// 
// Ouput :: "Position of alphabet: 1"

function positionInTheAlphabet(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwyz'
    return 'Position of the alphabet: ' + (alphabet.indexOf(letter)+1)
}

console.log(positionInTheAlphabet('z'))

//prep
//parameter is a string
//return is a number(position of the given string)
//example b => 2