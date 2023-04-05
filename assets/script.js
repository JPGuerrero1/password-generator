
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var passwordText = document.querySelector("#password");
var char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {

  const leng = prompt("Enter a numerical character length, must be in between 8-128 characters");
  const numeric = confirm("Include numerics?");
  const upperCase = confirm("Include uppercase letters?");
  const lowerCase = confirm("Include lowercase letters?");
  const spec = confirm("Include special characters?");

//Password parameters all true//
  if (generatePassword) {
  var password = '';

  for (let i=0; i<leng; i++) {
    let randNum = Math.floor(Math.random()*char.length);
    password += char.substring(randNum, randNum + 1);   
  }
  document.getElementById("password").value = password;

//Length inputs//
  if (Math.floor(leng) < 8) {
    alert("Insufficient length, please enter a longer character length");
    return
  } else if (Math.floor(leng) > 128) {
    alert("Length is too long, please enter a shorter character length.");
    return
  } else if (isNaN(Math.floor(leng))) {
    alert("Invalid length input, please enter a numerical value");
    return
  } else if (Math.floor(leng) === false) {
    alert("Cancelling generation due to cancelled length input or length input as 0")
    return
  }
  }

  //No numbers input//
  if (!numeric) {
    var noNumPass = '';
    noNum = char.replace(/\d+/g,'');
    
    for (let i=0; i<leng; i++) {
      let randNum = Math.floor(Math.random()*noNum.length);
      noNumPass += noNum.substring(randNum, randNum + 1);   
    }
     document.getElementById("password").value = noNumPass;
  }

  //No caps input//
  if (!upperCase) {
    var noCapPass = '';
    noCap = char.replace(/[A-Z]+/g, '');
    
    for (let i=0; i<leng; i++) {
      let randNum = Math.floor(Math.random()*noCap.length);
      noCapPass += noCap.substring(randNum, randNum + 1);   
    }
     document.getElementById("password").value = noCapPass;
  }

  //No lowercase input//
  if (!lowerCase) {
    var noLowPass = '';
    noLow = char.replace(/[a-z]+/g, '');
    
    for (let i=0; i<leng; i++) {
      let randNum = Math.floor(Math.random()*noLow.length);
      noLowPass += noLow.substring(randNum, randNum + 1);   
    }
     document.getElementById("password").value = noLowPass;
  }

  //No specials input//
  if (!spec) {
    var noSpecPass = '';
    noSpec = char.replace(/[^a-zA-Z0-9]/g, '');
    
    for (let i=0; i<leng; i++) {
      let randNum = Math.floor(Math.random()*noSpec.length);
      noSpecPass += noSpec.substring(randNum, randNum + 1);   
    }
     document.getElementById("password").value = noSpecPass;
  }

}

//Event listener//
generateBtn.addEventListener("click", generatePassword);
