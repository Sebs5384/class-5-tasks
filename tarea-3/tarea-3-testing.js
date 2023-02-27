function testCalculateVideoTime() {
  const hours = [{ value: 1 }, { value: 2 }, { value: 3 }];
  const minutes = [{ value: 4 }, { value: 5 }, { value: 6 }];
  const seconds = [{ value: 7 }, { value: 8 }, { value: 9 }];
  console.assert(calculateVideoTime(hours, minutes, seconds) === "6 hours 15 minutes and 24 seconds", "calculateVideoTime isn't calculating videos time correctly");
}

function testValidateVideoTime() {
  const hours = [{ value: 1 }, { value: 2 }, { value: 3 }];
  const minutes = [{ value: 4 }, { value: 5 }, { value: 6 }];
  const seconds = [{ value: 7 }, { value: 8 }, { value: 9 }];
  console.assert(validateVideoTime(hours, minutes, seconds) === "videoTimeValidated", "validateVideoTime is not working as expected");
}

function testValidateVideoHours() {
  console.assert(validateVideoHours([-1]) === "Hours is a negative number", "validateVideoHours is not handling negative numbers correctly");
  console.assert(validateVideoHours([NaN]) === "Hours is not a number", "validateVideoHours isn't handling non-numeric values correctly");
  console.assert(validateVideoHours([2.3]) === "Hours is a decimal number", "validateVideoHours isn't handling decimal numbers correctly");
}

function testValidateVideoMinutes() {
  console.assert(validateVideoMinutes([-1]) === "Minutes is a negative number", "validateVideoMinutes is not handling negative numbers correctly");
  console.assert(validateVideoMinutes([NaN]) === "Minutes is not a number", "validateVideoMinutes is not handling non-numeric values correctly ");
  console.assert(validateVideoMinutes([2.3]) === "Minutes is not handling decimals correctly", "validateVideoMinutes is not handling decimal numbers correctly");
}

function testValidateVideoSeconds() {
  console.assert(validateVideoSeconds([-1]) === "Seconds is a negative number", "validateVideoSeconds is not handling negative numbers correctly");
  console.assert(validateVideoSeconds([NaN]) === "Seconds is not a number", "validateVideoSeconds is not handling non-numeric values correctly");
  console.assert(validateVideoSeconds([2.3]) === "Seconds is not handling decimals correctly", "validateVideoSeconds is not handling decimal numbers correctly");
}

testCalculateVideoTime();
testValidateVideoTime();
testValidateVideoHours();
testValidateVideoMinutes();
testValidateVideoSeconds();
