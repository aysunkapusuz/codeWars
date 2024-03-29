// DESCRIPTION:
// Return the number (count) of vowels in the given string.
// 
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// 
// The input string will only consist of lower case letters and/or spaces.

function vowels (str){
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
console.log(vowels('MERHABA, DUNYA'))
//prep
//parameter is a string
//return is a number of vowels
//example ("abracadabra"), 5