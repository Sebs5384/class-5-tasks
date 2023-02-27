function testDisplayUserInformation() {
  console.assert(displayUserInformation("Sebastian", "Araya", 27) === "Sebastian\nAraya\n27", "displayUserInformation is not handling inputs correctly");
}

function testValidateUserInformation() {
  console.assert(validateUserInformation("Sebastian", "Araya", 27) === "userInformationValidated", "validateUserInformation is not handling user's info correctly");
}

function testValidateUserName() {
  console.assert(validateUserName("") === "This field should contain atleast one character", "validateUserName has failed to check if the user's input is empty");
  console.assert(validateUserName("11111111111111111111") === "This field should contain less than 20 characters", "validateUserName has failed to check if the user's input has more than 20 characters");
  console.assert(validateUserName(10) === "A number is being put as input", "validateUserName is not checking if the userName is a number");
}

function testValidateLastName() {
  console.assert(validateLastName("") === "This field should contain atleast one character", "validateLastName has failed to check if the user input is valid");
  console.assert(validateLastName("11111111111111111111") === "This field should contain less than 20 characters", "validateLastName has failed to check if the user's input has more than 20 characters");
  console.assert(validateLastName(10) === "A number is being put as input", "validateLastName is not checking if the lastName is a number");
}

function testValidateAge() {
  console.assert(validateAge(0) === "User's age should be greater than 0", "validateAge has failed to check if the user's input is valid");
  console.assert(validateAge("3333") === "This field shouldn't contain more than 3 digits", "validateAge has failed to check if the user age has more than 3 digits");
  console.assert(validateAge("pepe") === "Age should be a number", "validateAge is not checking that the user's input is a valid number");
}

function testValidateTextarea() {
  console.assert(validateTextarea("") === "Textarea can't be empty", "validateTextarea has failed to check if textarea is empty");
  console.assert(validateTextarea("55555555555555555555555555555555555555555555555555") === "Textarea can't contain more than 50 characters", "validateTextarea has failed to check if textarea has less than 50 characters");
}

testValidateUserInformation();
testValidateUserName();
testValidateLastName();
testValidateAge();
testValidateTextarea();
