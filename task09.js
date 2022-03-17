function checkVowels(word){

    let result = 0;
    let tempArray =[]

    for (let i = 0; i < word.length; i++){
        result = word[i];
        if (result == "a" || result == "e" || result == "i" || result == "o" || result == "u" ||
            result == "A" ||result == "E" ||result == "I" ||result == "O" ||result == "U"){
            tempArray.push(result)
            }
    }console.log("Vowels: "+tempArray)
} 