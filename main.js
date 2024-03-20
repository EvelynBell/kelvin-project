//Today's forecasted temperature in Kelvin
const kelvin = 293;

//Today's temperature in Celsius is equal to temp in Kelvin less 273
const celsius = kelvin - 273;

//variable converts celsius forecast into integer fahrenheit
var fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
