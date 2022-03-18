function calculateArea(sideA,sideB,sideC){
    //area of triangle using sides
    const semiperimeter = (1/2)*(sideA + sideB + sideC);
    const area  = Math.sqrt(semiperimeter * ((semiperimeter - sideA)*(semiperimeter - sideB)*(semiperimeter - sideAC)))
    return area;

    
}

