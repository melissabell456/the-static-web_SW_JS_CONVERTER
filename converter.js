
// Get a reference to the button element in the DOM
let button = document.getElementById("submitValue");
let clearButton = document.getElementById("clearButton");

// To target text field and get value of user entry
let locateTempInput = document.getElementById("tempInput");

// To target radio buttons
let convertToF = document.getElementById("tempTypeF");
let convertToC = document.getElementById("tempTypeC");

let calculation = document.getElementById("calculation");


// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearInput);
// clearButton.onclick = clearInput();
// This function should determine which conversion should
// happen based on which radio button is selected.

function determineConverter (clickEvent) {
    let tempInput = locateTempInput.value;
    console.log('This is the entered temp to convert', tempInput);
    let convertedTemp;
    if (convertToF.checked) {
        convertedTemp = tempInput * 1.8 + 32; 
        console.log(convertedTemp);
    }
    else if (convertToC.checked) {
        convertedTemp = (tempInput - 32) * .5556;   
        console.log(convertedTemp); 
    }
    calculation.innerHTML += convertedTemp;
};

function clearInput() {
    let clearTempInput = locateTempInput.value;
    console.log("clear button pushed");
    console.log(clearTempInput);
    clearTempInput.innerHTML = 0;
}