// Assignment Code
let generateBtn = document.querySelector("#generate");
const passwordParams = [];

// Generating password

generateConditions();
function generateConditions() {
  let charLimit = prompt("Select password length between 8 and 128 characters");
  console.log(charLimit);

  if (charLimit < 8 || charLimit > 128) {
    generateConditions();
  };
};

let lowerCase = confirm("Do you want lowercase letters in your password?");
console.log(lowerCase);

let upperCase = confirm("Do you want upperCase letters in your password?");
console.log(upperCase);

let numbers = confirm("Do you want numbers in your password?");
console.log(numbers);

let specialChar = confirm("Do you want special characters in your password?");
console.log(specialChar);  

if (lowerCase = true) {
  passwordParams.push
}
  
  
//   // code to run

//   console.log("function generatePassword is running");

//   // generates numbers, letters, and symbols

// }

// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   console.log("function writePassword is working");

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



// // CONSOLE LOG EVERY FUNCTION AND VARIABLE DURING CODING TO SEE WHAT YOUR CODE IS DOING AND BEING DEFINED AS
// // MAKE SURE TO REMOVE BEFORE POSTING
