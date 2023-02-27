function validateIncome(income) {
  if (income.length === 0) {
    return "This field can't be empty";
  }
  if (income.length >= 20) {
    return "This field should have less than 20 characters";
  }
  if (income <= 0) {
    return "Your income can't be 0";
  }
  if (isNaN(income)) {
    return "This field should only contain numbers, not letters";
  }
  return "anualIncomeValidated";
}
