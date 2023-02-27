function testFindMinimumNumber() {
  console.assert(findMinimumNumber([1, 2, 3, 4, 5]) === 1, "findMinimumNumber is not returning the lowest number in the array");
  console.assert(findMinimumNumber([1]) === 1, "findMinimumNumber isn't handling arrays with single numbers correctly");
  console.assert(findMinimumNumber([-1, 0, 1, 2, 3, 4, 5]) === -1, "findMinimumNumber isn't handling negative numbers correctly");
  console.assert(findMinimumNumber([1, 1, 1, 1, 1, 1]) === 1, "findMinimumNumber isn't handling arrays with duplicated numbers correctly");
  console.assert(findMinimumNumber([]) === undefined, "findMinimumNumber isn't handling empty arrays correctly");
}

function testFindMaximumNumber() {
  console.assert(findMaximumNumber([1, 2, 3, 4, 5]) === 5, "findMaximumNumber is not returning the highest number in the array");
  console.assert(findMaximumNumber([5]) === 5, "findMaximumNumber isn't handling arrays with single numbers correctly");
  console.assert(findMaximumNumber([1, 1, 1, 1, 1, 1]) === 1, "findMaximumNumber isn't handling arrays with duplicated numbers correctly");
  console.assert(findMaximumNumber([]) === undefined, "findMaximumNumber isn't handling empty arrays correctly");
}

function testFindAverage() {
  console.assert(findAverage([10, 10, 10, 10]) === 10, "findAverage is not returning the average from the array correctly");
  console.assert(findAverage([-5, -5, -5]) === -5, "findAverage isn't handling negative numbers correctly");
  console.assert(findAverage([10]) === 10, "findAverage isn't handling single numeric arrays properly");
  console.assert(findAverage([2.5, 2.5, 2.5, 2.5]) === 2.5, "findAverage isn't handling decimal numbers correctly");
  console.assert(isNaN(findAverage([])), "findAverage isn't handling empty arrays correctly");
}

function testFindMostRepeated() {
  console.assert(findMostRepeated([2, 2, 2, 2, 2, 1]) === 2, "findMostRepeated isn't returning the most repeated number in the array");
  console.assert(findMostRepeated([-1, -1, -2, -3]) === -1, "findMostRepeated isn't handling negative numbers correctly");
  console.assert(findMostRepeated([5]) === 5, "findMostRepeated isn't handling arrays with single numeric values correctly");
  console.assert(findMostRepeated([]) === undefined, "findMostRepeated isn't handling empty arrays correctly");
}

function testValidateNumbers() {
  console.assert(validateNumbers([]) === "This array is empty", "validateNumbers has failed in checking if the array is empty");
  console.assert(validateNumbers(["s", 2]) === "This array has non-numeric values", "validateNumbers has failed to check if the array contains non-numeric values");
}

function testGetNumbers() {
  console.assert(JSON.stringify(getNumbers($elements)) === JSON.stringify([10, 5, 5, 2]), "getNumbers isn't handling DOM elements convertion correctly");
}

testFindMinimumNumber();
testFindMaximumNumber();
testFindAverage();
testFindMostRepeated();
testValidateNumbers();
testGetNumbers();
