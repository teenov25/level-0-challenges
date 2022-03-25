function convertToFahrenheit(tempInCelcius) {
  const fahrenheit = tempInCelcius * 1.8 + 32;
  return fahrenheit;
}
console.log(convertToFahrenheit(0));

function convertToCelcius(tempInFahrenheit) {
  const celcius = (tempInFahrenheit - 32) * (5 / 9);
  return celcius;
}
console.log(convertToCelcius(32));
