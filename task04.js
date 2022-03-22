function evenOrOdd(number){
    const evenResult = `"even"`;
    const oddResult =`"odd"`;
    if (number % 2 === 0){
        return evenResult;
    }else {
        return oddResult;
    }
} 

console.log(evenOrOdd(43))


