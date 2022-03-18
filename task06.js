function findMaximumNumber (){
   //create an argument object to store parameter values 
    let maximumNumber = arguments[0];

    for (var i = 0; i < arguments.length;  i++){
        if (arguments[i] > maximumNumber ){
            maximumNumber = arguments[i];
        } 
    }
    return maximumNumber;
    
} 
    