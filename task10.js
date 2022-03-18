function commonLetters(word1,word2){
    // splitting string parameters into array and initialising them as sets to remove duplicate values in array
     const word1 = Array.from(new Set(word1.split('')));
     const word2 = Array.from(new Set(word2.split('')));
     let tempArray = [];
     //iterate into first set then second set then push common index to array
     for(i=0; i<word1.length;i++){
         for(j=0;j<word2.length;j++){
             if(word2[j] === word1[i])
             {tempArray.push(word2[j])}
         }
     } console.log("common letters: " +tempArray)
 }