// Global Variables
let generateBtn = document.querySelector("#generate");

// creating password
function generatePassword() {
    let password = "";

    // Ask user desired length of password between 8 & 128
    charLength = prompt("Enter desired password length. (Must be between 8 - 128 characters)");
    charLength = parseInt(charLength)
    console.log(charLength);

    // Verify password length requirements are met
    if (charLength < 8 || charLength > 128) {
        alert("Password length requirement not met, please try again")
        return "";
    }

    // When requirements are met, ask for password conditions
    const lowerCase = confirm("Do you want lowercase letters in your password?");
    console.log(lowerCase);

    const upperCase = confirm("Do you want upperCase letters in your password?");
    console.log(upperCase);

    const numbers = confirm("Do you want numbers in your password?");
    console.log(numbers);

    const specialChar = confirm("Do you want special characters in your password?");
    console.log(specialChar);  

    // define whie password conditions are true
    for (let i = 0; i < charLength;) {
        console.log(i);
        console.log("This is charLength " + charLength);
        console.log(typeof charLength);
        if (lowerCase) {
            let randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
            password += randomLower;
            console.log(password);
            i++
        }
    
        if (upperCase) {
            let randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            password += randomUpper;
            console.log(password);
            i++
        }
    
        if (numbers) {
            let randomNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
            password += randomNumber;
            console.log(password);
            i++
        }
    
        if (specialChar) {
            let randomSpecChar = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
            password += randomSpecChar;
            console.log(password);
            i++
        }
    }
    
    return password;
}

function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);