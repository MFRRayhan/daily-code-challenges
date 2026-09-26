// ==============================
// Task 201: Find the Number With the Fewest Digits
// ==============================
// Question:
// Find the number that contains the fewest digits.
//
// Example:
// Input: [1234, 56, 789, 5, 12345]
// Output: 5

function numberWithFewestDigits(arr) {
  let result = arr[0];

  for (const num of arr) {
    if (Math.abs(num).toString().length < Math.abs(result).toString().length) {
      result = num;
    }
  }

  return result;
}

console.log(numberWithFewestDigits([1234, 56, 789, 5, 12345]));


// ==============================
// Task 202: Find Numbers With Exactly Two Digits
// ==============================
// Question:
// Return numbers that contain exactly two digits.
//
// Example:
// Input: [5, 12, 45, 100, 78, 9]
// Output: [12, 45, 78]

function twoDigitNumbers(arr) {
  return arr.filter((num) => {
    return Math.abs(num) >= 10 && Math.abs(num) <= 99;
  });
}

console.log(twoDigitNumbers([5, 12, 45, 100, 78, 9]));


// ==============================
// Task 203: Find Numbers With Exactly Four Digits
// ==============================
// Question:
// Return numbers that contain exactly four digits.
//
// Example:
// Input: [123, 1234, 45, 5678, 999, 10000]
// Output: [1234, 5678]

function fourDigitNumbers(arr) {
  return arr.filter((num) => {
    return Math.abs(num) >= 1000 && Math.abs(num) <= 9999;
  });
}

console.log(fourDigitNumbers([123, 1234, 45, 5678, 999, 10000]));


// ==============================
// Task 204: Count Numbers With More Than Three Digits
// ==============================
// Question:
// Count numbers that contain more than three digits.
//
// Example:
// Input: [12, 123, 1234, 56789, 45]
// Output: 2

function countMoreThanThreeDigits(arr) {
  return arr.filter((num) => {
    return Math.abs(num).toString().length > 3;
  }).length;
}

console.log(countMoreThanThreeDigits([12, 123, 1234, 56789, 45]));


// ==============================
// Task 205: Find Numbers Starting With 5
// ==============================
// Question:
// Return numbers whose first digit is 5.
//
// Example:
// Input: [512, 123, 567, 89, 500]
// Output: [512, 567, 500]

function numbersStartingWithFive(arr) {
  return arr.filter((num) => {
    return Math.abs(num).toString()[0] === "5";
  });
}

console.log(numbersStartingWithFive([512, 123, 567, 89, 500]));


// ==============================
// Task 206: Find Numbers Ending With 0
// ==============================
// Question:
// Return numbers whose last digit is 0.
//
// Example:
// Input: [10, 25, 30, 45, 100, 123]
// Output: [10, 30, 100]

function numbersEndingWithZero(arr) {
  return arr.filter((num) => Math.abs(num) % 10 === 0);
}

console.log(numbersEndingWithZero([10, 25, 30, 45, 100, 123]));


// ==============================
// Task 207: Find Numbers Containing Digit 7
// ==============================
// Question:
// Return numbers that contain the digit 7.
//
// Example:
// Input: [17, 25, 70, 123, 47, 89]
// Output: [17, 70, 47]

function numbersContainingSeven(arr) {
  return arr.filter((num) => {
    return Math.abs(num).toString().includes("7");
  });
}

console.log(numbersContainingSeven([17, 25, 70, 123, 47, 89]));


// ==============================
// Task 208: Count Numbers Containing Digit 0
// ==============================
// Question:
// Count numbers that contain at least one zero.
//
// Example:
// Input: [10, 25, 100, 45, 203, 78]
// Output: 3

function countNumbersContainingZero(arr) {
  return arr.filter((num) => {
    return Math.abs(num).toString().includes("0");
  }).length;
}

console.log(countNumbersContainingZero([10, 25, 100, 45, 203, 78]));


// ==============================
// Task 209: Find Numbers With All Even Digits
// ==============================
// Question:
// Return numbers where every digit is even.
//
// Example:
// Input: [246, 123, 808, 555, 420]
// Output: [246, 808, 420]

function allEvenDigitNumbers(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    return digits.every((digit) => Number(digit) % 2 === 0);
  });
}

console.log(allEvenDigitNumbers([246, 123, 808, 555, 420]));


// ==============================
// Task 210: Find Numbers With All Odd Digits
// ==============================
// Question:
// Return numbers where every digit is odd.
//
// Example:
// Input: [135, 123, 579, 246, 777]
// Output: [135, 579, 777]

function allOddDigitNumbers(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    return digits.every((digit) => Number(digit) % 2 !== 0);
  });
}

console.log(allOddDigitNumbers([135, 123, 579, 246, 777]));
