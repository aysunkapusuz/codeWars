// We want an array, but not just any old array, an array with contents!
// 
// Write a function that produces an array with the numbers 0 to N-1 in it.
// 
// For example, the following code will result in an array containing the numbers 0 to 4:
// 
// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

function fillArray (arr){
    let array = []
    for(let i=0; i<arr; i++){
        array.push(i)
    }
    return array
}

console.log(fillArray(5))

//have a num
//create an array from 0 until the num and return it
// example (4)=> [0,1,2,3]