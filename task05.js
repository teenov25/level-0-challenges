function calculateArea(sideA,sideB,sideC){
    const semiPerimeter = (1/2)*(sideA + sideB + sideC);
    const area  = Math.sqrt(semiPerimeter * ((semiPerimeter - sideA)*(semiPerimeter - sideB)*(semiPerimeter - sideC)))
    return area;
}

console.log(calculateArea(5,6,8))