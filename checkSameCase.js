// Write a function that will check if two given characters are the same case.
// 
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 
// 'A' and 'C' returns 1
// 
// 'b' and 'G' returns 0
// 
// 'B' and 'g' returns 0
// 
// '0' and '?' returns -1

function isItSame (a,b){
    if(a.toUpperCase()=== a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
        return -1
    }else if (a === a.toLowerCase() && b=== b.toLowerCase() || a===a.toUpperCase()&& b===b.toUpperCase()){
        return 1
    }else {
        return 0 
    }
}
console.log(isItSame('a', 'b'))
// another solution
sameCase = (a,b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1

// have two parameters as numbers
//return 1 if both chars are the same case, return 0 if the chars are letters but not same case, return -1 if one of the chars is not a letter
// example // 'A' and 'C' returns 1
          // 'b' and 'G' returns 0
          // '0' and '?' returns -1