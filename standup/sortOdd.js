// You will be given an array of numbers. You have to sort the odd numbers in ascednding order while leaving the even numbers at their original positionas.


//Examples
// [7,1] => [1,7]
// [5,8,6,3,4] => [3,8,6,5,4]
// [,9,8,7,6,5,4,3,2,1,0] => [1,8,3,6,5,4,7,2,9,0]

function sortArray(arr){
    //filter -> sort
    const oddNums = arr.filter(n=> n%2 !==0).sort((a,b)=> a-b)

    //console.log(oddNums)
    //map
    return arr.map(n => n%2 === 0 ? n : oddNums.shift())
}

console.log(sortArray([5,8,6,3,4]), '[3, 8, 6, 5, 4]')