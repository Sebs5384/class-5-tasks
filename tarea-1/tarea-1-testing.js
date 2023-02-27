function testDisplayMonthlyIncome() {
  console.assert(displayMonthlyIncome(12) === `$1.0 is a great monthly income !`, "displayMonthlyIncome is not working as intended");
}

function testValidateIncome() {
  console.assert(validateIncome("") === "This field can't be empty", "Validate income has failed in checking if the income is empty");
  console.assert(validateIncome("55555555555555555555") === "This field should have less than 20 characters", "Validate income has failed to avoid user from inserting less than 20 characters");
  console.assert(validateIncome(isNaN) === "This field should only contain numbers, not letters", "Validate income has failed in retrieving only numbers from the income input");
  console.assert(validateIncome(0) === "Your income can't be 0", "Validate income has failed in checking if the user's income is 0");
}

function testCalculateMonthlyIncome() {
  console.assert(calculateMonthlyIncome(12) === 1, "calcualteMonthlyIncome isn't working as intended");
  console.assert(calculateMonthlyIncome(10.0) === 0.8333333333333334, "calculateMonthlyIncome isn't handling decimal numbers correctly");
}

testDisplayMonthlyIncome();
testValidateIncome();
testCalculateMonthlyIncome();
