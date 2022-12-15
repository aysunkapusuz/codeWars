// Write a program that outputs the top n elements from a list.

// Example:
// 
// largest(2, [7,6,5,4,3,2,1])
// => [6,7]


function largestElement(n, xs){
    return n ? xs.sort((a,b)=> a-b).slice(-n) : []
}

console.log(largestElement(2, [7,6,5,4,3,2,1]), [6,7])