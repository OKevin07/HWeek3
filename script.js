// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ['!', "@", "#", "$", "%", "^", "&", "*", "+", "?"];
// Write password to the #password input
function writePassword(password) {
var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
};

//function to validate password length
var length;
function validatePass() {

  length = parseInt(
    prompt("how many characters would you like your password to contain")
  );

  if ((parseInt(length) < 8) || (parseInt(length) > 50)) {
    prompt("Please select between 8 and 50 characters")

  } else {
    includeChar()
  }
};

function includeChar() {
  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumber = confirm("Include numbers?");
  var includeSpecialChar = confirm("include special characters?"); 
}

//joining values
var passChar = upperCase.concat(lowerCase,numbers,specialChar);

 function ranPass() {

  var rand = passChar[Math.floor(Math.random()* passChar.length)];
  return rand;
  
  };
//value from prompt that asks them for how many characters their password should be.

  function generatePassword () {
  validatePass();
  var passwordArr = [];
  for (var i = 0; i < length; i++) {
      passwordArr[i]=ranPass();
  }
  writePassword(passwordArr);
}
  //console.log(generatePassword());
// Add event listener to generate button
 generateBtn.addEventListener("click", generatePassword());