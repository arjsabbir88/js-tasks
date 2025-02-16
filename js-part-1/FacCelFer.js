// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(cel){
    // °F = (°C × 9/5) + 32
    const celsius = cel * (9/5);
    const Fahrenheit = celsius + 32;

    return Fahrenheit ;
    
}

const cel = 35;
const callFunction = celsiusToFahrenheit(cel);

console.log(callFunction);