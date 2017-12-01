
let convertBtn = document.getElementById("convertBtn");
let clearBtn = document.getElementById("clearBtn");
let tempToConvert = document.getElementById("tempToConvert");
let convertToF = document.getElementById("convertToF");
let convertToC = document.getElementById("convertToC");
let displayTemp = document.getElementById("convertedAmount");

convertBtn.addEventListener("click", determineConverter);
clearBtn.addEventListener("click", clearContents);
tempToConvert.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        determineConverter();
    }
});


function determineConverter (clickEvent) {
    if (convertToF.checked) {
        toFahrenheit(tempToConvert);
    }
    else if (convertToC.checked) {
        toCelsius(tempToConvert);
    };
}

function toCelsius (tempToConvert) {
    convertedTempValue = (tempToConvert.value - 32) * .5556;
    if (convertedTempValue > 32) {
        displayTemp.style.color = "red";
        }
    else if (convertedTempValue < 0) {
        displayTemp.style.color = "blue";
        }
    else {
        displayTemp.style.color = "green";
        };
    displayTemp.innerHTML = convertedTempValue;
}
    
function toFahrenheit (tempToConvert) {
    convertedTempValue = (tempToConvert.value * 1.8) + 32;
    if (convertedTempValue > 90) {
        displayTemp.style.color = "red";
        }
    else if (convertedTempValue < 32) {            
        displayTemp.style.color = "blue";
        }
    else {
        displayTemp.style.color = "green";
        };
    displayTemp.innerHTML = convertedTempValue; 
}

function clearContents () {
    tempToConvert.value = " ";
}