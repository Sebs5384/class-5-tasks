function validateUserInformation(userName, lastName, age) {
  if (validateUserName(userName) !== "userNameValidated") {
    return alert("Insert a valid name");
  }
  if (validateLastName(lastName) !== "lastNameValidated") {
    return alert("Insert a valid last name");
  }
  if (validateAge(age) !== "ageValidated") {
    return alert("Insert a valid age");
  }
  return "userInformationValidated";
}

function validateUserName(userName) {
  if (userName.length === 0) {
    return "This field should contain atleast one character";
  }
  if (userName.length >= 20) {
    return "This field should contain less than 20 characters";
  }
  if (!isNaN(userName)) {
    return "A number is being put as input";
  }
  return "userNameValidated";
}

function validateLastName(lastName) {
  if (lastName.length === 0) {
    return "This field should contain atleast one character";
  }
  if (lastName.length >= 20) {
    return "This field should contain less than 20 characters";
  }
  if (!isNaN(lastName)) {
    return "A number is being put as input";
  }
  return "lastNameValidated";
}

function validateAge(age) {
  if (isNaN(age)) {
    return "Age should be a number";
  }
  if (age.length >= 4) {
    return "This field shouldn't contain more than 3 digits";
  }
  if (age <= 0) {
    return "User's age should be greater than 0";
  }
  return "ageValidated";
}

function validateTextarea(textarea) {
  if (textarea.length === 0) {
    return "Textarea can't be empty";
  }
  if (textarea.length >= 50) {
    return "Textarea can't contain more than 50 characters";
  }
  return "textAreaValidated";
}
