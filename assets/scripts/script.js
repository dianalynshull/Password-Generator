// Assignment Code
var generateBtn = document.querySelector("#generate");

// define the function that is called when we press generateBtn

function generatePassword() {
  
  // code to run

  console.log("function generatePassword is running");

  // generates numbers, letters, and symbols

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log("function writePassword is working");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// CONSOLE LOG EVERY FUNCTION AND VARIABLE DURING CODING TO SEE WHAT YOUR CODE IS DOING AND BEING DEFINED AS
// MAKE SURE TO REMOVE BEFORE POSTING
