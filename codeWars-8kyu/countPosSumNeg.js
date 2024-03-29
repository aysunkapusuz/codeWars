// Given an array of integers.
// 
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// 
// If the input is an empty array or is null, return an empty array.
// 
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}
console.log(counPosSumNeg([12,2,3,-1,-3,-2]))

//PREP 
//Parameter : is an array with numbers
//Return : is an array
//Example : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] =>  [10, -65]
//Pseudocode : write a function that takes an array with integers and return the array, where the first element is the count of pos numbs ands second element is sum of neg numbers.