// Time to test your basic knowledge in functions! Return the odds from a list:
// 
// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []


 function returnOdds (val){
     return val.filter(v => v%2)
 }
 console.log(returnOdds([2,3,4,5]))
