// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.
// 
// Example:
// 
// get_char(65)
// should return:
// 
// 'A'

function getChar(c){
    return String.fromCharCode(c)
}

console.log(getChar(70))

//parameter is a number
//return ASCII char for that number
//example // get_char(65) => 'A'