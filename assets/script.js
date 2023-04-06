
//list out all possible character options in an array
//Note to self: Don't use a string, code won't be able to have multiple false criterias

var num = ['0','1','2','3','4','5','6','7','8','9',];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var spec = ['!','@','#','$','%','^','&','*','(',')','_','+','~','|','}','{','[',']',':',';','?','>','<',',','.','/','-','=',];

var passMix = []; //empty array to add user's password criteria into
var leng = 8;

//creates an event listener that will call the writePassword() function when the generate button is clicked, causing passCrit() and randomPassword() to begin creating a password
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//Function prompts user to input a valid length, and asks for certain password criteria.
function passCrit () {  
    passMix = []; //blank array to reset password criteria

    //parseInt() changes input value into an integer value
    leng = parseInt(prompt("Enter a numerical character length, must be between 8-128 characters"));

    //if statements to determine if "leng" value is Nan, lower than 8, or larger than 128. Returns false if input is invalid
    if (isNaN(leng)) {
        alert("Invalid input type, only enter numeric characters.");
        return false;
        }
    if (leng<8) {
        alert("Length is too short, enter a value that is larger than or equal to 8 number characters.");
        return false;
        }
    if (leng>128) {
        alert("Length is too long, enter a value that is less than or equal to 128 number characters.");
        return false;
        }
    
    //if statements to determine which arrays to combine into a passMix. Confirm statements that are 'true' are added and returned
    if (confirm("Include numbers in your password?")) {
        passMix = passMix.concat(num);
        }
    if (confirm("Include uppercase letters in your password?")) {
        passMix = passMix.concat(upper);
        }
    if (confirm("Include lowercase letters in your password?")) {
        passMix = passMix.concat(lower);
        }   
    if (confirm("Include special characters in your password? (Ex.!@#$%?)")) {
        passMix = passMix.concat(spec);
        }
    return true; //the returned arrays are sent to the randomPassword() function to be randomized
}

//Creates a random password based off of the earlier criteria given by the user
function randomPassword() {
    var passwordRand = '';

//randomizes characters added to the passMix[] array in the passCrit() function
    for (let i=0; i<leng; i++) {
        var random = Math.floor(Math.random()*passMix.length);
        passwordRand = passwordRand + passMix[random];   
      }
       return passwordRand; //this becomes the 'passwordRand' variable in writePassword()
}

//function will write the final password if all of the criteria is met in the passCrit() function and has been randomized in the randomPassword() function
function writePassword() {
    var critMet = passCrit();
    var passwordRand = randomPassword();
    
    if (critMet && passwordRand) {
        var passwordText = document.querySelector("#password");
        passwordText.value = passwordRand; 
        //passwordRand is equal to the password generated in the randomPassword() function
    }   
}
