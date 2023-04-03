// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var charLength = confirm("Have a password length of at least 8 characters?");
  var randNum = confirm("Have a password with numeric characters?");
  var randUp = confirm("Have a password with uppercase characters?");
  var randLow = confirm("Have a password with lowercase characters?");
  var randSpec = confirm("Have a password with special characters?");

  const char = {
    num:"0123456789",
    upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower:"abcdefghijklmnopqrstuvwxyz",
    special:"!@#$%^&*()_+~`|}{[]:;?><,./-=",
  }

  const randSet = [

    function num() {
      return char.num[Math.floor(Math.random()*char.num.length)];
    },

    function upper() {
      return char.upper[Math.floor(Math.random()*char.upper.length)];
    },

    function lower() {
      return char.lower[Math.floor(Math.random()*char.lower.length)];
    },

    function special() {
      return char.special[Math.floor(Math.random()*char.special.length)];
    }
  ];
 
//At least 8 characters//
  if (charLength) {
    confirm(randNum);


  //No more than 128 characters//
  if (!charLength) {
    window.alert("Im false")
  }

}
}

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
