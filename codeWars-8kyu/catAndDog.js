// I have a cat and a dog.
// 
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// 
// Return their respective ages now as [humanYears,catYears,dogYears]
// 
// NOTES:
// 
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

let humYearsCatYearsDogYears = function(humanYears){
    let catYears = humanYears < 2 ? 15 : humanYears <3 ? 24 : (humanYears - 2)*4 + 24
    let dogYears = humanYears <2 ? 15 : humanYears < 3 ? 24 : (humanYears - 2)*5 + 24
    return [humanYears,catYears,dogYears]   
}

//prep 
//parameter is a number (humanYears)
//returns are 3 numbs (humanYears,catYears,dogYears)
//example (10), [10,56,64]


