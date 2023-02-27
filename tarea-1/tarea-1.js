const $form = document.querySelector("#income-calculator");
const $results = document.querySelector("#monthly-income-results");

document.querySelector("#calculate-button").onclick = function () {
  const $anualIncome = $form["anual-income"].value;
  $results.innerText = displayMonthlyIncome($anualIncome);
};

function displayMonthlyIncome(income) {
  const $monthlyIncome = $form["monthly-income"];
  const anualIncome = Number(income);
  const validation = validateIncome(income);
  if (validation !== "anualIncomeValidated") {
    return ($results.innerText = `Your anual income is not valid, reading: ' ${income}' `);
  }
  const monthlyIncome = calculateMonthlyIncome(anualIncome);
  $monthlyIncome.value = monthlyIncome.toFixed(1);
  return `$${monthlyIncome.toFixed(1)} is a great monthly income !`;
}

function calculateMonthlyIncome(income) {
  const numberOfMonths = 12;
  const montlyIncome = income / numberOfMonths;
  return montlyIncome;
}
