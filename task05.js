function calculateArea(sideA,sideB,sideC){
    const semiPerimeter = (1/2)*(sideA + sideB + sideC);
    const area  = Math.sqrt(semiPerimeter * ((semiPerimeter - sideA)*(semiPerimeter - sideB)*(semiPerimeter - sideAC)))
    return area;
}

