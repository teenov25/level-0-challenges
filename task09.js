function checkVowels(word){
    const word1  =Array.from(new Set(word.toLowerCase().split(''))); // created new set that lowers case and split parameter into sperate chararcters
    let result = 0;
    let tempArray =[]

    for (let i = 0; i < word1.length; i++){
        result = word1[i];
        if (result == "a" || result == "e" || result == "i" || result == "o" || result == "u" ){
            tempArray.push(result)
            }
    }console.log("Vowels: "+tempArray)
}  