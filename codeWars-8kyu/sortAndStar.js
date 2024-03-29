// DESCRIPTION:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// 
// The returned value must be a string, and have "***" between each of its letters.
// 
// You should not remove or add elements from/to the array.

function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }
  
  //prep
  //parameter is an array with strings
  //sort the array and return the first element with *** between each char.
  //example ["bitcoin", "take", "over", "the", "world"]), 'b***i***t***c***o***i***n'