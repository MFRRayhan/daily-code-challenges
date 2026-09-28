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


// ==============================
// Task 211: Find Numbers With Mixed Even and Odd Digits
// ==============================
// Question:
// Return numbers that contain at least one even digit and one odd digit.
//
// Example:
// Input: [123, 246, 135, 808, 4567]
// Output: [123, 4567]

function mixedEvenOddDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    const hasEven = digits.some((digit) => Number(digit) % 2 === 0);
    const hasOdd = digits.some((digit) => Number(digit) % 2 !== 0);

    return hasEven && hasOdd;
  });
}

console.log(mixedEvenOddDigits([123, 246, 135, 808, 4567]));


// ==============================
// Task 212: Find Numbers With More Even Digits
// ==============================
// Question:
// Return numbers that contain more even digits than odd digits.
//
// Example:
// Input: [246, 123, 4567, 808, 135]
// Output: [246, 808]

function moreEvenDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    let evenCount = 0;
    let oddCount = 0;

    for (const digit of digits) {
      if (Number(digit) % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }

    return evenCount > oddCount;
  });
}

console.log(moreEvenDigits([246, 123, 4567, 808, 135]));


// ==============================
// Task 213: Find Numbers With More Odd Digits
// ==============================
// Question:
// Return numbers that contain more odd digits than even digits.
//
// Example:
// Input: [135, 123, 4567, 808, 579]
// Output: [135, 123, 579]

function moreOddDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    let evenCount = 0;
    let oddCount = 0;

    for (const digit of digits) {
      if (Number(digit) % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }

    return oddCount > evenCount;
  });
}

console.log(moreOddDigits([135, 123, 4567, 808, 579]));


// ==============================
// Task 214: Find Numbers With Equal Even and Odd Digits
// ==============================
// Question:
// Return numbers that contain an equal number of even and odd digits.
//
// Example:
// Input: [1234, 2468, 1357, 12345, 5678]
// Output: [1234, 5678]

function equalEvenOddDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    let evenCount = 0;
    let oddCount = 0;

    for (const digit of digits) {
      if (Number(digit) % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }

    return evenCount === oddCount;
  });
}

console.log(equalEvenOddDigits([1234, 2468, 1357, 12345, 5678]));


// ==============================
// Task 215: Find Numbers With Digit 5 More Than Once
// ==============================
// Question:
// Return numbers that contain the digit 5 at least twice.
//
// Example:
// Input: [155, 525, 123, 555, 505, 678]
// Output: [155, 525, 555, 505]

function containsFiveAtLeastTwice(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    return digits.split("5").length - 1 >= 2;
  });
}

console.log(containsFiveAtLeastTwice([155, 525, 123, 555, 505, 678]));


// ==============================
// Task 216: Find Numbers With No Repeated Digits
// ==============================
// Question:
// Return numbers where every digit is different.
//
// Example:
// Input: [123, 112, 456, 778, 901]
// Output: [123, 456, 901]

function noRepeatedDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    return new Set(digits).size === digits.length;
  });
}

console.log(noRepeatedDigits([123, 112, 456, 778, 901]));


// ==============================
// Task 217: Find the Number With the Most Repeated Digit
// ==============================
// Question:
// Find the number that has the highest frequency of any single digit.
//
// Example:
// Input: [123, 111, 4555, 777, 890]
// Output: 4555

function numberWithMostRepeatedDigit(arr) {
  let result = arr[0];
  let highestFrequency = 0;

  for (const num of arr) {
    const frequency = {};

    for (const digit of Math.abs(num).toString()) {
      frequency[digit] = (frequency[digit] || 0) + 1;
    }

    const maxFrequency = Math.max(...Object.values(frequency));

    if (maxFrequency > highestFrequency) {
      highestFrequency = maxFrequency;
      result = num;
    }
  }

  return result;
}

console.log(numberWithMostRepeatedDigit([123, 111, 4555, 777, 890]));


// ==============================
// Task 218: Find the Number With the Lowest Digit
// ==============================
// Question:
// Find the number that contains the smallest digit.
//
// Example:
// Input: [583, 742, 965, 321]
// Output: 321

function numberWithLowestDigit(arr) {
  let result = arr[0];
  let lowestDigit = Infinity;

  for (const num of arr) {
    const digits = Math.abs(num).toString();

    for (const digit of digits) {
      const value = Number(digit);

      if (value < lowestDigit) {
        lowestDigit = value;
        result = num;
      }
    }
  }

  return result;
}

console.log(numberWithLowestDigit([583, 742, 965, 321]));


// ==============================
// Task 219: Find the Number With the Highest Digit
// ==============================
// Question:
// Find the number that contains the highest digit.
//
// Example:
// Input: [123, 456, 789, 321]
// Output: 789

function numberWithHighestDigit(arr) {
  let result = arr[0];
  let highestDigit = -Infinity;

  for (const num of arr) {
    const digits = Math.abs(num).toString();

    for (const digit of digits) {
      const value = Number(digit);

      if (value > highestDigit) {
        highestDigit = value;
        result = num;
      }
    }
  }

  return result;
}

console.log(numberWithHighestDigit([123, 456, 789, 321]));


// ==============================
// Task 220: Find Numbers Whose Digit Sum Is Even
// ==============================
// Question:
// Return numbers whose digit sum is even.
//
// Example:
// Input: [123, 456, 789, 111, 222]
// Output: [123, 456, 789, 222]

function evenDigitSumNumbers(arr) {
  return arr.filter((num) => {
    const digitSum = Math.abs(num)
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);

    return digitSum % 2 === 0;
  });
}

console.log(evenDigitSumNumbers([123, 456, 789, 111, 222]));

// ==============================
// Task 221: Find Numbers Whose Digit Sum Is Odd
// ==============================
// Question:
// Return numbers whose digit sum is odd.
//
// Example:
// Input: [123, 456, 789, 111, 222]
// Output: [111]

function oddDigitSumNumbers(arr) {
  return arr.filter((num) => {
    const digitSum = Math.abs(num)
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);

    return digitSum % 2 !== 0;
  });
}

console.log(oddDigitSumNumbers([123, 456, 789, 111, 222]));


// ==============================
// Task 222: Find Numbers With Digit Sum Equal to 10
// ==============================
// Question:
// Return numbers whose digits add up exactly to 10.
//
// Example:
// Input: [1234, 145, 235, 901, 55]
// Output: [145, 235, 901, 55]

function digitSumEqualToTen(arr) {
  return arr.filter((num) => {
    const digitSum = Math.abs(num)
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);

    return digitSum === 10;
  });
}

console.log(digitSumEqualToTen([1234, 145, 235, 901, 55]));


// ==============================
// Task 223: Find Numbers With Digit Sum Divisible by 3
// ==============================
// Question:
// Return numbers whose digit sum is divisible by 3.
//
// Example:
// Input: [123, 145, 222, 501, 789]
// Output: [123, 222, 501, 789]

function digitSumDivisibleByThree(arr) {
  return arr.filter((num) => {
    const digitSum = Math.abs(num)
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);

    return digitSum % 3 === 0;
  });
}

console.log(digitSumDivisibleByThree([123, 145, 222, 501, 789]));


// ==============================
// Task 224: Find Numbers With First Digit Greater Than Last
// ==============================
// Question:
// Return numbers where the first digit is greater than the last digit.
//
// Example:
// Input: [321, 456, 789, 981, 542]
// Output: [321, 981, 542]

function firstDigitGreaterThanLast(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    return Number(digits[0]) > Number(digits[digits.length - 1]);
  });
}

console.log(firstDigitGreaterThanLast([321, 456, 789, 981, 542]));


// ==============================
// Task 225: Find Numbers With Last Digit Greater Than First
// ==============================
// Question:
// Return numbers where the last digit is greater than the first digit.
//
// Example:
// Input: [123, 456, 789, 981, 542]
// Output: [123, 456, 789]

function lastDigitGreaterThanFirst(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    return Number(digits[digits.length - 1]) > Number(digits[0]);
  });
}

console.log(lastDigitGreaterThanFirst([123, 456, 789, 981, 542]));


// ==============================
// Task 226: Find Numbers With Same First and Last Digit Sum
// ==============================
// Question:
// Return numbers where the first and last digits have the same sum as the middle digits.
//
// Example:
// Input: [123, 132, 246, 404, 505]
// Output: [132, 246]

function matchingDigitSum(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    if (digits.length < 3) return false;

    const firstLastSum =
      Number(digits[0]) + Number(digits[digits.length - 1]);

    const middleSum = digits
      .slice(1, -1)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);

    return firstLastSum === middleSum;
  });
}

console.log(matchingDigitSum([123, 132, 246, 404, 505]));


// ==============================
// Task 227: Find Numbers With Zero in the Middle
// ==============================
// Question:
// Return numbers that contain at least one zero that is not the first or last digit.
//
// Example:
// Input: [102, 120, 405, 500, 123]
// Output: [102, 405]

function zeroInTheMiddle(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    if (digits.length < 3) return false;

    return digits.slice(1, -1).includes("0");
  });
}

console.log(zeroInTheMiddle([102, 120, 405, 500, 123]));


// ==============================
// Task 228: Find Numbers With Exactly One Zero
// ==============================
// Question:
// Return numbers that contain exactly one zero.
//
// Example:
// Input: [10, 100, 205, 300, 450, 123]
// Output: [10, 205, 450]

function exactlyOneZero(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    return digits.split("").filter((digit) => digit === "0").length === 1;
  });
}

console.log(exactlyOneZero([10, 100, 205, 300, 450, 123]));


// ==============================
// Task 229: Find Numbers With No Zero
// ==============================
// Question:
// Return numbers that do not contain the digit 0.
//
// Example:
// Input: [123, 405, 567, 100, 789]
// Output: [123, 567, 789]

function numbersWithoutZero(arr) {
  return arr.filter((num) => {
    return !Math.abs(num).toString().includes("0");
  });
}

console.log(numbersWithoutZero([123, 405, 567, 100, 789]));


// ==============================
// Task 230: Find the Number With the Highest Digit Product
// ==============================
// Question:
// Find the number whose digits have the highest product.
//
// Example:
// Input: [123, 234, 345, 111]
// Output: 345

function highestDigitProductNumber(arr) {
  let result = arr[0];
  let highestProduct = -Infinity;

  for (const num of arr) {
    const product = Math.abs(num)
      .toString()
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    if (product > highestProduct) {
      highestProduct = product;
      result = num;
    }
  }

  return result;
}

console.log(highestDigitProductNumber([123, 234, 345, 111]));
