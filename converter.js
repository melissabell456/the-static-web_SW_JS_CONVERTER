//     // Get a reference to the button element in the DOM
var button = document.getElementById("converter");
    // Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

function determineConverter() {    
    var userTemp = parseInt(document.getElementById("tempInput"))
    console.log(userTemp);
    if (document.getElementById("determineConverter") === Fahrenheit) {
        var celciusToFahrenheit = userTemp * 1.8 + 32;
        console.log(celciusToFahrenheit);    
    }
    else (document.getElementById("determineConverter") === Celcius) {
        var fahrenheitToCelsius = (userTemp - 32) * .5556;  
        console.log(fahrenheitToCelsius);  
    };


    // if radio button was Fahrenheit
function toFahrenheit () {
    var celciusToFahrenheit = userTemp * 1.8 + 32
    
}
// if radio button was Celcius
function toCelsius () {
    var fahrenheitToCelsius = (userTemp - 32) * .5556    
}

    
