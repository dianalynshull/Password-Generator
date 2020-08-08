// Assignment Code
let generateBtn = document.querySelector("#generate");
let upperCase = false;
let lowerCase = false;
let numbers = false;
let specialChar = false;

function generateConditions() {
  let charLimit = prompt("Select password length between 8 and 128 characters");
  console.log(charLimit);

  if (charLimit < 8 || charLimit > 128) {
    generateConditions();
  } else {
    let optionLowerCase = confirm("Do you want lowercase letters in your password?");
    lowerCase = optionLowerCase;
    console.log(lowerCase);
  
    let optionUpperCase = confirm("Do you want upperCase letters in your password?");
    upperCase = optionUpperCase;
    console.log(upperCase);
  
    let optionNumbers = confirm("Do you want numbers in your password?");
    numbers = optionNumbers;
    console.log(numbers);
  
    let optionSpecialChar = confirm("Do you want special characters in your password?");
    specialChar = optionSpecialChar;
    console.log(specialChar);
  };  
};

console.log(numbers);


generateConditions();

// define the function that is called when we press generateBtn

function generatePassword() {

  
  
  // code to run

  console.log("function generatePassword is running");

  // generates numbers, letters, and symbols

}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log("function writePassword is working");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// CONSOLE LOG EVERY FUNCTION AND VARIABLE DURING CODING TO SEE WHAT YOUR CODE IS DOING AND BEING DEFINED AS
// MAKE SURE TO REMOVE BEFORE POSTING
