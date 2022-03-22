function commonLetters(firstword,secondword){
     const word1 = Array.from(new Set(firstword.toLowerCase().split('')));
     const word2 = Array.from(new Set(secondword.toLowerCase().split('')));
     let tempArray = [];
     
     for(i=0; i<word1.length;i++){
         for(j=0;j<word2.length;j++){
             if(word2[j] === word1[i])
             {tempArray.push(word2[j])}
         }
     } console.log(`common letters: ${tempArray}`)
 }
 commonLetters("tObey", "thobi")