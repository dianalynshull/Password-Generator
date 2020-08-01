// Assignment Code
var generateBtn = document.querySelector("#generate");

// define the function that is called when we press generateBtn

function generatePassword() {
  // code to run

  console.log("function generatePassword is running")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log("function writePassword is working")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
