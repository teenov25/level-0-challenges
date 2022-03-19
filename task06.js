function findMaximumNumber (){
   //create an argument object to store multple parameter values 
    let maximumNumber = arguments[0];

    for (var i = 0; i < arguments.length;  i++){
        if (arguments[i] > maximumNumber ){
            maximumNumber = arguments[i];
        } 
    }
    return maximumNumber;
} 

console.log(findMaximumNumber(12,17,3,5,9,90,67))
    