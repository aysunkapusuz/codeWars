// DESCRIPTION:
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
// 
// Return as a number.

function divCon (arr){
    return arr.reduce((a, b)=> a + (b === +b ? b : -b), 0)
}
