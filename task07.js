function convertToFahrenheit(tempInCelcius){

    var fahrenheit = (tempInCelcius *1.8) + 32;
    return fahrenheit;
} console.log(convertToFahrenheit(0))

function convertToCelcius(tempInFahrenheit){

    var celcius = (tempInFahrenheit - 32) * (5 / 9);
    return celcius;
} 