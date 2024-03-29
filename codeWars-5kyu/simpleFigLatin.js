// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// 
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function figIt (string){
    let marks = ['.', '?', ',', '!', '"']
    result = string.split(' ').map(word => words.slice[1] + word[0] + (marks.includes(word) ? '' : 'ay')).join(' ')
    console.log(result)
}

figIt('hello world')