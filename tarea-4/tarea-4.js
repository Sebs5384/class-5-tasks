const $elements = document.querySelectorAll("li");
displayResults($elements);

function displayResults($numbers) {
  const numbers = getNumbers($numbers);
  const validation = validateNumbers(numbers);
  const $results = document.querySelector("#display-results");
  if (validation !== "arrayValidated") {
    return ($results.innerText = "There's a non-numeric value in this array");
  }
  $results.innerText = `The minimum value in this <li> is ${findMinimumNumber(numbers)}, the maximum value is ${findMaximumNumber(numbers)}, the average is ${findAverage(numbers)} and the most repeated is ${findMostRepeated(numbers)}`;
}

function getNumbers($numbers) {
  let numbers = [];
  for (let i = 0; i < $numbers.length; i++) {
    let number = Number($numbers[i].innerText);
    numbers.push(number);
  }
  return numbers;
}

function validateNumbers(number) {
  if (number.length === 0) {
    return "This array is empty";
  }
  for (let i = 0; i < number.length; i++) {
    const numbers = number[i];
    if (isNaN(numbers)) {
      return "This array has non-numeric values";
    }
  }
  return "arrayValidated";
}

function findMinimumNumber(number) {
  let minimumNumber = number[0];
  for (let i = 0; i < number.length; i++) {
    const numbers = number[i];
    if (numbers < minimumNumber) {
      minimumNumber = numbers;
    }
  }
  return minimumNumber;
}

function findMaximumNumber(number) {
  let maximumNumber = number[0];
  for (let i = 0; i < number.length; i++) {
    const numbers = number[i];
    if (numbers > maximumNumber) {
      maximumNumber = numbers;
    }
  }
  return maximumNumber;
}

function findAverage(number) {
  let totalNumbers = 0;
  for (let i = 0; i < number.length; i++) {
    const numbers = number[i];
    totalNumbers += numbers;
  }
  const average = totalNumbers / number.length;
  return parseFloat(average.toFixed(1));
}

function findMostRepeated(number) {
  let frequency = 0;
  let mostFrequent = 0;
  let mostRepeated;
  for (let i = 0; i < number.length; i++) {
    const numbers = number[i];
    for (let j = 0; j < number.length; j++) {
      const $numbers = number[j];
      if (numbers === $numbers) {
        frequency++;
      }
      if (frequency > mostFrequent) {
        mostFrequent = frequency;
        mostRepeated = numbers;
      }
    }
    frequency = 0;
  }
  return mostRepeated;
}
