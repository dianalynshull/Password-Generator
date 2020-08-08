// Global Variables
let generateBtn = document.querySelector("#generate");

// creating password
function generatePassword() {

    // Ask user desired length of password between 8 & 128
    charLimit = prompt("Enter desired password length. (Must be between 8 - 128 characters)");
    console.log(charLimit);

    // Verify password length requirements are met
    if (charLimit < 8 || charLimit > 128) {
        alert("Password length requirement not met, please try again")
        generatePassword();
    }

    // When requirements are met, ask for password conditions
    let lowerCase = confirm("Do you want lowercase letters in your password?");
    console.log(lowerCase);

    let upperCase = confirm("Do you want upperCase letters in your password?");
    console.log(upperCase);

    let numbers = confirm("Do you want numbers in your password?");
    console.log(numbers);

    let specialChar = confirm("Do you want special characters in your password?");
    console.log(specialChar);  
}

generatePassword();



