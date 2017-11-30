
let convertBtn = document.getElementById("convertBtn");
let clearBtn = document.getElementById("clearBtn");
let tempToConvert = document.getElementById("tempToConvert");
let convertToF = document.getElementById("convertToF");
let convertToC = document.getElementById("convertToC");
let displayTemp = document.getElementById("convertedAmount");

convertBtn.addEventListener("click", determineConverter);
clearBtn.addEventListener("click", clearContents);

function determineConverter (clickEvent) {
    if (convertToF.checked) {
        console.log('convert to F', tempToConvert.value),
        toFahrenheit(tempToConvert);
    }
    else if (convertToC.checked) {
        console.log('convert to C', tempToConvert.value);
        toCelsius(tempToConvert);
    };
}

function determineColor () {
    
}

function toCelsius (tempToConvert) {
    convertedTempValue = (tempToConvert.value - 32) * .5556;
    displayTemp.innerHTML = convertedTempValue;
}
    
function toFahrenheit (tempToConvert) {
    convertedTempValue = (tempToConvert.value * 1.8) + 32;
    displayTemp.innerHTML = convertedTempValue; 
}

function clearContents () {
    tempToConvert.value = " ";
}