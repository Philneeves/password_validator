function hasUppercase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      return true;
    }
  }
}

function hasLowercase(input) {
  for (var i = 0; i < input.length; i++) {
    if(input[i] === input[i].toLowerCase()) {
      return true;
    }
  }
}

function isLongEnough(input) {
  for (var i = 0; i <input.length; i++) {
    if(input.length >= 8) {
      return true;
    }
  }
}

function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '%', '&', '*', '@', '#', '$', '^'];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < specialCharacters.length; j++) {
     if (input[i] === specialCharacters[j]) {
       return true;
     }
    }
  }
}

function isPasswordValid(input) {
  if (hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    console.log('Password is valid');
  }
  if (!hasUppercase(input)) {
    console.log('Password needs a Capital letter');
  }
  if (!hasLowercase(input)) {
    console.log('Password needs a Lowercase Letter');
  }
  if (!isLongEnough(input)) {
    console.log('Password needs to be at least 8 characters');
  }
  if (!hasSpecialCharacter(input)) {
    console.log('Password needs a special character');
  }
}

isPasswordValid('Beliveit$');