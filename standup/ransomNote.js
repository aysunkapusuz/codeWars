// Given a magazine of words and a ransom note, determine if it's possible to "cut out" and create the ransom note from the magazine words.

const magazine = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do etusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sit occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";


function ransomNote(note, magazine){
    const noteWords = note.split("")
    const magazineWords = magazine.split("")
    const magazineHash = {}
    let possible = true

    for(const word of magazineWords){
        magazineHash[word] = magazineHash[word] + 1 || 1
    }

    for(const word of noteWords){
        if(magazineHash[word]){
            magazineHash[word]--
            if(magazineHash[word] < 0) return false
        }else{
            possible = false
        }
    }
    return possible

}
// I got everything true ???
console. log(ransomNote( "sit ad est sint", magazine), true)
console. log(ransomNote( "sit ad est love", magazine), false)
console. log(ransomNote("sit ad est sint in in", magazine), true)
console.log(ransomNote("sit ad est sint in in in in", magazine), false)
