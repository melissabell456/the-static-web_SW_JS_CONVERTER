
// Get a reference to the button element in the DOM
let button = document.getElementById("submitValue");

// To target text field and get value of user entry
let locateTempInput = document.getElementById("tempInput");
let tempInput = parseInt(locateTempInput.value);
console.log('This is the entered temp to convert', tempInput);

// To target radio buttons
let convertToF = document.getElementById("tempTypeF");
let convertToC = document.getElementById("tempTypeC");


// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// This function should determine which conversion should
// happen based on which radio button is selected.

function determineConverter (clickEvent) {
    let convertedTemp;
    if (convertToF.checked) {
        convertedTemp = tempInput * 1.8 + 32 
        console.log(convertedTemp);
    }
    else if (convertToC.checked) {
        convertedTemp = (tempInput - 32) * .5556   
        console.log(convertedTemp); 
    }
};
