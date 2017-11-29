// **ask Joe/Greg about arguments in these functions ie event and clickEvent


// TARGETS DOM ELEMENTS:

// Get a reference to the button element in the DOM
let button = document.getElementById("submitValue");
let clearButton = document.getElementById("clearButton");
// To target text field of user entry
let locateTempInput = document.getElementById("tempInput");
// To target radio buttons
let convertToF = document.getElementById("tempTypeF");
let convertToC = document.getElementById("tempTypeC");
// to target calculation field
let calculation = document.getElementById("calculation");

// EVENT LISTENERS:
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearInput);
// targets text input and listens for keydown specifically to the enter key, if enter is pressed, runs converter found at  - https://stackoverflow.com/questions/7060750/detect-the-enter-key-in-a-text-input-field
locateTempInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        determineConverter();
    }
});
// This function should determine which conversion should
// happen based on which radio button is selected. also includes if statemenets to color conversion temps appropriately

function determineConverter (clickEvent) {
    let tempInput = locateTempInput.value;
    console.log('This is the entered temp to convert', tempInput);
    let convertedTemp;
    if (convertToF.checked) {
        convertedTemp = (tempInput * 1.8) + 32; 
        console.log(convertedTemp);
        if (convertedTemp > 90) {
            console.log("this should be red");
            calculation.style.color = "red";
            }
        else if (convertedTemp < 32) {
            console.log("this should be blue");            
            calculation.style.color = "blue";
            }
        else {
            calculation.style.color = "green";
            };
        }
    else if (convertToC.checked) {
        convertedTemp = (tempInput - 32) * .5556;   
        console.log(convertedTemp);
        if (convertedTemp > 32) {
            console.log("this should be red");
            calculation.style.color = "red";
            }
        else if (convertedTemp < 0) {
            console.log("this should be blue");            
            calculation.style.color = "blue";
            }
        else {
            calculation.style.color = "green";
            };
        };     
    calculation.innerHTML = convertedTemp;
}; 

// clears user input when clear button is pushed
function clearInput() {
    let clearTempInput = locateTempInput;
    console.log("clear button pushed");
    clearTempInput.value = " ";
};

// 7. -If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// 8. -If the temperature is less than 32F/0C the color of the converted temperature should be blue. 
// 9. -For any other temperature, the color should be green.-->