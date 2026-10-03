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

// ==============================
// Task 231: Find the Number With the Lowest Digit Product
// ==============================
// Question:
// Find the number whose digits have the lowest product.
//
// Example:
// Input: [123, 234, 305, 456]
// Output: 305

function lowestDigitProductNumber(arr) {
  let result = arr[0];
  let lowestProduct = Infinity;

  for (const num of arr) {
    const product = Math.abs(num)
      .toString()
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    if (product < lowestProduct) {
      lowestProduct = product;
      result = num;
    }
  }

  return result;
}

console.log(lowestDigitProductNumber([123, 234, 305, 456]));


// ==============================
// Task 232: Find Numbers With Digit Product Greater Than 50
// ==============================
// Question:
// Return numbers whose digit product is greater than 50.
//
// Example:
// Input: [123, 234, 145, 222, 305]
// Output: [234, 145, 222]

function digitProductGreaterThan50(arr) {
  return arr.filter((num) => {
    const product = Math.abs(num)
      .toString()
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    return product > 50;
  });
}

console.log(digitProductGreaterThan50([123, 234, 145, 222, 305]));


// ==============================
// Task 233: Find Numbers With Digit Product Equal to 0
// ==============================
// Question:
// Return numbers whose digit product is 0.
//
// Example:
// Input: [123, 405, 234, 100, 567]
// Output: [405, 100]

function digitProductEqualToZero(arr) {
  return arr.filter((num) => {
    return Math.abs(num).toString().includes("0");
  });
}

console.log(digitProductEqualToZero([123, 405, 234, 100, 567]));


// ==============================
// Task 234: Find Numbers With All Different Digits
// ==============================
// Question:
// Return numbers where every digit is different.
//
// Example:
// Input: [123, 112, 456, 455, 789]
// Output: [123, 456, 789]

function allDifferentDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    return new Set(digits).size === digits.length;
  });
}

console.log(allDifferentDigits([123, 112, 456, 455, 789]));


// ==============================
// Task 235: Find Numbers With Exactly Two Repeated Digits
// ==============================
// Question:
// Return numbers where exactly one digit appears twice and all other digits appear once.
//
// Example:
// Input: [112, 123, 1223, 445, 567]
// Output: [112, 445]

function exactlyOneRepeatedDigit(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();
    const frequency = {};

    for (const digit of digits) {
      frequency[digit] = (frequency[digit] || 0) + 1;
    }

    const repeatedCounts = Object.values(frequency).filter(
      (count) => count === 2
    );

    return repeatedCounts.length === 1 &&
      Object.values(frequency).every((count) => count <= 2);
  });
}

console.log(exactlyOneRepeatedDigit([112, 123, 1223, 445, 567]));


// ==============================
// Task 236: Find Numbers That Are Multiples of 10
// ==============================
// Question:
// Return all numbers that are multiples of 10.
//
// Example:
// Input: [10, 15, 20, 33, 40, 55]
// Output: [10, 20, 40]

function multiplesOfTen(arr) {
  return arr.filter((num) => num % 10 === 0);
}

console.log(multiplesOfTen([10, 15, 20, 33, 40, 55]));


// ==============================
// Task 237: Find Numbers That Are Powers of 2
// ==============================
// Question:
// Return all numbers that are powers of 2.
//
// Example:
// Input: [1, 2, 3, 4, 6, 8, 10, 16]
// Output: [1, 2, 4, 8, 16]

function powersOfTwo(arr) {
  return arr.filter((num) => {
    return num > 0 && (num & (num - 1)) === 0;
  });
}

console.log(powersOfTwo([1, 2, 3, 4, 6, 8, 10, 16]));


// ==============================
// Task 238: Find Perfect Squares
// ==============================
// Question:
// Return all numbers that are perfect squares.
//
// Example:
// Input: [1, 2, 4, 6, 9, 10, 16, 20]
// Output: [1, 4, 9, 16]

function perfectSquares(arr) {
  return arr.filter((num) => {
    if (num < 0) return false;

    const root = Math.sqrt(num);

    return Number.isInteger(root);
  });
}

console.log(perfectSquares([1, 2, 4, 6, 9, 10, 16, 20]));


// ==============================
// Task 239: Find Numbers With Equal First Two Digits
// ==============================
// Question:
// Return numbers whose first two digits are the same.
//
// Example:
// Input: [112, 223, 345, 455, 667, 789]
// Output: [112, 223, 667]

function sameFirstTwoDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    return digits.length >= 2 && digits[0] === digits[1];
  });
}

console.log(sameFirstTwoDigits([112, 223, 345, 455, 667, 789]));


// ==============================
// Task 240: Find Numbers With Consecutive Digits
// ==============================
// Question:
// Return numbers whose digits increase consecutively by 1.
//
// Example:
// Input: [123, 234, 345, 456, 135, 789]
// Output: [123, 234, 345, 456, 789]

function consecutiveDigitNumbers(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    if (digits.length < 2) return false;

    for (let i = 1; i < digits.length; i++) {
      if (Number(digits[i]) !== Number(digits[i - 1]) + 1) {
        return false;
      }
    }

    return true;
  });
}

console.log(consecutiveDigitNumbers([123, 234, 345, 456, 135, 789]));

// ==============================
// Task 241: Find Numbers With Decreasing Consecutive Digits
// ==============================
// Question:
// Return numbers whose digits decrease consecutively by 1.
//
// Example:
// Input: [321, 432, 543, 456, 210, 135]
// Output: [321, 432, 543, 210]

function decreasingConsecutiveDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    if (digits.length < 2) return false;

    for (let i = 1; i < digits.length; i++) {
      if (Number(digits[i]) !== Number(digits[i - 1]) - 1) {
        return false;
      }
    }

    return true;
  });
}

console.log(decreasingConsecutiveDigits([321, 432, 543, 456, 210, 135]));


// ==============================
// Task 242: Find Numbers With All Same Digits
// ==============================
// Question:
// Return numbers where all digits are the same.
//
// Example:
// Input: [111, 222, 123, 444, 555, 678]
// Output: [111, 222, 444, 555]

function allSameDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    return digits.length > 1 && new Set(digits).size === 1;
  });
}

console.log(allSameDigits([111, 222, 123, 444, 555, 678]));


// ==============================
// Task 243: Find Numbers With Alternating Digits
// ==============================
// Question:
// Return numbers where digits alternate between even and odd.
//
// Example:
// Input: [123, 456, 214, 135, 789]
// Output: [123, 456, 214, 135]

function alternatingEvenOddDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    if (digits.length < 2) return false;

    for (let i = 1; i < digits.length; i++) {
      const current = Number(digits[i]) % 2;
      const previous = Number(digits[i - 1]) % 2;

      if (current === previous) {
        return false;
      }
    }

    return true;
  });
}

console.log(alternatingEvenOddDigits([123, 456, 214, 135, 789]));


// ==============================
// Task 244: Find Numbers With No Consecutive Digits
// ==============================
// Question:
// Return numbers that do not contain the same digit consecutively.
//
// Example:
// Input: [121, 112, 345, 455, 678]
// Output: [121, 345, 678]

function noConsecutiveSameDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    for (let i = 1; i < digits.length; i++) {
      if (digits[i] === digits[i - 1]) {
        return false;
      }
    }

    return true;
  });
}

console.log(noConsecutiveSameDigits([121, 112, 345, 455, 678]));


// ==============================
// Task 245: Find Numbers With Exactly Three Unique Digits
// ==============================
// Question:
// Return numbers containing exactly three unique digits.
//
// Example:
// Input: [123, 112, 1234, 456, 777, 121]
// Output: [123, 1234, 456]

function exactlyThreeUniqueDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    return new Set(digits).size === 3;
  });
}

console.log(exactlyThreeUniqueDigits([123, 112, 1234, 456, 777, 121]));


// ==============================
// Task 246: Find Numbers With Exactly Two Unique Digits
// ==============================
// Question:
// Return numbers containing exactly two unique digits.
//
// Example:
// Input: [121, 112, 123, 455, 777, 101]
// Output: [121, 112, 455, 101]

function exactlyTwoUniqueDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    return new Set(digits).size === 2;
  });
}

console.log(exactlyTwoUniqueDigits([121, 112, 123, 455, 777, 101]));


// ==============================
// Task 247: Find Numbers With Digit Sum Greater Than Digit Product
// ==============================
// Question:
// Return numbers where the sum of digits is greater than the product of digits.
//
// Example:
// Input: [123, 234, 105, 111]
// Output: [123, 105, 111]

function digitSumGreaterThanProduct(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    const sum = digits.reduce(
      (total, digit) => total + Number(digit),
      0
    );

    const product = digits.reduce(
      (total, digit) => total * Number(digit),
      1
    );

    return sum > product;
  });
}

console.log(digitSumGreaterThanProduct([123, 234, 105, 111]));


// ==============================
// Task 248: Find Numbers With Digit Product Greater Than Digit Sum
// ==============================
// Question:
// Return numbers where the product of digits is greater than the sum of digits.
//
// Example:
// Input: [123, 234, 145, 111]
// Output: [234, 145]

function digitProductGreaterThanSum(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    const sum = digits.reduce(
      (total, digit) => total + Number(digit),
      0
    );

    const product = digits.reduce(
      (total, digit) => total * Number(digit),
      1
    );

    return product > sum;
  });
}

console.log(digitProductGreaterThanSum([123, 234, 145, 111]));


// ==============================
// Task 249: Find Numbers With Palindromic Digits
// ==============================
// Question:
// Return numbers whose digits form a palindrome.
//
// Example:
// Input: [121, 123, 444, 567, 1221]
// Output: [121, 444, 1221]

function palindromicNumbers(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    return digits === digits.split("").reverse().join("");
  });
}

console.log(palindromicNumbers([121, 123, 444, 567, 1221]));


// ==============================
// Task 250: Find the Longest Palindromic Number
// ==============================
// Question:
// Find the palindromic number with the most digits.
//
// Example:
// Input: [121, 12321, 444, 567, 1221]
// Output: 12321

function longestPalindromicNumber(arr) {
  let result = null;

  for (const num of arr) {
    const digits = Math.abs(num).toString();
    const reversed = digits.split("").reverse().join("");

    if (digits === reversed) {
      if (
        result === null ||
        digits.length > Math.abs(result).toString().length
      ) {
        result = num;
      }
    }
  }

  return result;
}

console.log(longestPalindromicNumber([121, 12321, 444, 567, 1221]));

// ==============================
// Task 251: Find the Smallest Palindromic Number
// ==============================
// Question:
// Find the smallest palindromic number in an array.
//
// Example:
// Input: [121, 44, 333, 567, 222]
// Output: 44

function smallestPalindromicNumber(arr) {
  const palindromes = arr.filter((num) => {
    const str = Math.abs(num).toString();

    return str === str.split("").reverse().join("");
  });

  return palindromes.length ? Math.min(...palindromes) : null;
}

console.log(smallestPalindromicNumber([121, 44, 333, 567, 222]));


// ==============================
// Task 252: Count Palindromic Numbers
// ==============================
// Question:
// Count how many palindromic numbers are in an array.
//
// Example:
// Input: [121, 123, 44, 567, 777]
// Output: 3

function countPalindromicNumbers(arr) {
  return arr.filter((num) => {
    const str = Math.abs(num).toString();

    return str === str.split("").reverse().join("");
  }).length;
}

console.log(countPalindromicNumbers([121, 123, 44, 567, 777]));


// ==============================
// Task 253: Find Numbers Whose Reverse Is Greater
// ==============================
// Question:
// Return numbers where the reversed number is greater than the original.
//
// Example:
// Input: [123, 321, 456, 654, 129]
// Output: [123, 456, 129]

function reverseGreaterNumbers(arr) {
  return arr.filter((num) => {
    const reversed = Number(
      Math.abs(num).toString().split("").reverse().join("")
    );

    return reversed > Math.abs(num);
  });
}

console.log(reverseGreaterNumbers([123, 321, 456, 654, 129]));


// ==============================
// Task 254: Find Numbers Whose Reverse Is Smaller
// ==============================
// Question:
// Return numbers where the reversed number is smaller than the original.
//
// Example:
// Input: [123, 321, 456, 654, 129]
// Output: [321, 654]

function reverseSmallerNumbers(arr) {
  return arr.filter((num) => {
    const reversed = Number(
      Math.abs(num).toString().split("").reverse().join("")
    );

    return reversed < Math.abs(num);
  });
}

console.log(reverseSmallerNumbers([123, 321, 456, 654, 129]));


// ==============================
// Task 255: Find Numbers Whose Reverse Is Equal
// ==============================
// Question:
// Return numbers where the reversed number is equal to the original.
//
// Example:
// Input: [121, 123, 454, 567, 777]
// Output: [121, 454, 777]

function reverseEqualNumbers(arr) {
  return arr.filter((num) => {
    const value = Math.abs(num);
    const reversed = Number(value.toString().split("").reverse().join(""));

    return value === reversed;
  });
}

console.log(reverseEqualNumbers([121, 123, 454, 567, 777]));


// ==============================
// Task 256: Find Numbers With Digit Sum Equal to Digit Product
// ==============================
// Question:
// Return numbers where the sum of digits equals the product of digits.
//
// Example:
// Input: [123, 145, 222, 111, 24]
// Output: [123, 145, 222, 24]

function equalDigitSumAndProduct(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    const sum = digits.reduce(
      (total, digit) => total + Number(digit),
      0
    );

    const product = digits.reduce(
      (total, digit) => total * Number(digit),
      1
    );

    return sum === product;
  });
}

console.log(equalDigitSumAndProduct([123, 145, 222, 111, 24]));


// ==============================
// Task 257: Find Numbers With Exactly One Even Digit
// ==============================
// Question:
// Return numbers that contain exactly one even digit.
//
// Example:
// Input: [123, 135, 246, 579, 701]
// Output: [123, 135, 579, 701]

function exactlyOneEvenDigit(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    const evenCount = digits.filter(
      (digit) => Number(digit) % 2 === 0
    ).length;

    return evenCount === 1;
  });
}

console.log(exactlyOneEvenDigit([123, 135, 246, 579, 701]));


// ==============================
// Task 258: Find Numbers With Exactly One Odd Digit
// ==============================
// Question:
// Return numbers that contain exactly one odd digit.
//
// Example:
// Input: [246, 248, 123, 456, 802]
// Output: [246, 248, 456, 802]

function exactlyOneOddDigit(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString().split("");

    const oddCount = digits.filter(
      (digit) => Number(digit) % 2 !== 0
    ).length;

    return oddCount === 1;
  });
}

console.log(exactlyOneOddDigit([246, 248, 123, 456, 802]));


// ==============================
// Task 259: Find Numbers With More Than Two Unique Digits
// ==============================
// Question:
// Return numbers containing more than two unique digits.
//
// Example:
// Input: [112, 123, 455, 1234, 777, 121]
// Output: [123, 1234]

function moreThanTwoUniqueDigits(arr) {
  return arr.filter((num) => {
    const digits = Math.abs(num).toString();

    return new Set(digits).size > 2;
  });
}

console.log(moreThanTwoUniqueDigits([112, 123, 455, 1234, 777, 121]));


// ==============================
// Task 260: Find Number With the Most Unique Digits
// ==============================
// Question:
// Find the number that contains the highest number of unique digits.
//
// Example:
// Input: [112, 123, 4567, 777, 12345]
// Output: 12345

function numberWithMostUniqueDigits(arr) {
  let result = arr[0];
  let highestUniqueCount = 0;

  for (const num of arr) {
    const digits = Math.abs(num).toString();
    const uniqueCount = new Set(digits).size;

    if (uniqueCount > highestUniqueCount) {
      highestUniqueCount = uniqueCount;
      result = num;
    }
  }

  return result;
}

console.log(numberWithMostUniqueDigits([112, 123, 4567, 777, 12345]));

// ==================================================
// 261. Find Numbers With Increasing Digit Sum
// Example: [12, 34, 45, 56]
// Output: [12, 34, 45, 56]
// ==================================================

function increasingDigitSum(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);
    return digits.every((digit, i) => i === 0 || digit > digits[i - 1]);
  });
}

console.log(increasingDigitSum([12, 34, 45, 56, 321, 123]));


// ==================================================
// 262. Find Numbers With Decreasing Digit Sum
// Example: [21, 32, 43, 321]
// Output: [21, 32, 43, 321]
// ==================================================

function decreasingDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);
    return digits.every((digit, i) => i === 0 || digit < digits[i - 1]);
  });
}

console.log(decreasingDigits([21, 32, 43, 321, 123, 987]));


// ==================================================
// 263. Find Numbers With Alternating Even/Odd Digits
// Example: [1234, 2143, 2468]
// Output: [1234, 2143]
// ==================================================

function alternatingEvenOdd(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits.every(
      (digit, i) =>
        i === 0 || digit % 2 !== digits[i - 1] % 2
    );
  });
}

console.log(alternatingEvenOdd([1234, 2143, 2468, 1357, 1212]));


// ==================================================
// 264. Find Numbers With Consecutive Digits
// Example: [123, 456, 135, 789]
// Output: [123, 456, 789]
// ==================================================

function consecutiveDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits.every(
      (digit, i) =>
        i === 0 || digit === digits[i - 1] + 1
    );
  });
}

console.log(consecutiveDigits([123, 456, 135, 789, 321]));


// ==================================================
// 265. Find Numbers With Reverse Consecutive Digits
// Example: [321, 654, 987, 123]
// Output: [321, 654, 987]
// ==================================================

function reverseConsecutiveDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits.every(
      (digit, i) =>
        i === 0 || digit === digits[i - 1] - 1
    );
  });
}

console.log(reverseConsecutiveDigits([321, 654, 987, 123, 432]));


// ==================================================
// 266. Find Numbers With Only Prime Digits
// Example: [235, 247, 777, 123]
// Output: [235, 777]
// ==================================================

function onlyPrimeDigits(numbers) {
  const primeDigits = new Set([2, 3, 5, 7]);

  return numbers.filter((num) =>
    String(num)
      .split("")
      .every((digit) => primeDigits.has(Number(digit)))
  );
}

console.log(onlyPrimeDigits([235, 247, 777, 123, 357, 222]));


// ==================================================
// 267. Find Numbers With Only Composite Digits
// Example: [468, 248, 123]
// Output: [468, 248]
// ==================================================

function onlyCompositeDigits(numbers) {
  const compositeDigits = new Set([4, 6, 8, 9]);

  return numbers.filter((num) =>
    String(num)
      .split("")
      .every((digit) => compositeDigits.has(Number(digit)))
  );
}

console.log(onlyCompositeDigits([468, 248, 123, 888, 999]));


// ==================================================
// 268. Find Numbers With Prime Digit Sum
// Example: [12, 23, 45, 111]
// Output: [12, 23]
// ==================================================

function primeDigitSum(numbers) {
  function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return isPrime(sum);
  });
}

console.log(primeDigitSum([12, 23, 45, 111, 234]));


// ==================================================
// 269. Find Numbers With Perfect Digit Sum
// Example: [28, 36, 123, 10]
// Output: [28, 36]
// ==================================================

function perfectDigitSum(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    let divisorSum = 0;

    for (let i = 1; i < sum; i++) {
      if (sum % i === 0) {
        divisorSum += i;
      }
    }

    return sum > 0 && divisorSum === sum;
  });
}

console.log(perfectDigitSum([28, 36, 123, 10, 45, 100]));


// ==================================================
// 270. Find Numbers With Equal First and Last Digit
// Example: [121, 232, 456, 787]
// Output: [121, 232, 787]
// ==================================================

function equalFirstLastDigit(numbers) {
  return numbers.filter((num) => {
    const str = String(num);

    return str[0] === str[str.length - 1];
  });
}

console.log(equalFirstLastDigit([121, 232, 456, 787, 123, 909]));

// ==================================================
// 271. Find Numbers With Different First and Last Digit
// Example: [123, 454, 789, 111]
// Output: [123, 789]
// ==================================================

function differentFirstLast(numbers) {
  return numbers.filter((num) => {
    const str = String(num);
    return str[0] !== str[str.length - 1];
  });
}

console.log(differentFirstLast([123, 454, 789, 111, 232]));


// ==================================================
// 272. Find Numbers With Exactly Two Repeated Digits
// Example: [1122, 1223, 1112, 1234]
// Output: [1122]
// ==================================================

function exactlyTwoRepeatedDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("");
    const counts = {};

    digits.forEach((digit) => {
      counts[digit] = (counts[digit] || 0) + 1;
    });

    return Object.values(counts).filter((count) => count > 1).length === 2;
  });
}

console.log(exactlyTwoRepeatedDigits([1122, 1223, 1112, 1234, 112233]));


// ==================================================
// 273. Find Numbers With One Unique Digit
// Example: [111, 222, 123, 444]
// Output: [111, 222, 444]
// ==================================================

function oneUniqueDigit(numbers) {
  return numbers.filter((num) => {
    const uniqueDigits = new Set(String(num));
    return uniqueDigits.size === 1;
  });
}

console.log(oneUniqueDigit([111, 222, 123, 444, 5555, 121]));


// ==================================================
// 274. Find Numbers With Digits in Ascending Order
// Example: [123, 145, 321, 246]
// Output: [123, 145, 246]
// ==================================================

function ascendingDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits.every(
      (digit, index) =>
        index === 0 || digit >= digits[index - 1]
    );
  });
}

console.log(ascendingDigits([123, 145, 321, 246, 112, 135]));


// ==================================================
// 275. Find Numbers With Digits in Descending Order
// Example: [321, 543, 123, 987]
// Output: [321, 543, 987]
// ==================================================

function descendingDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits.every(
      (digit, index) =>
        index === 0 || digit <= digits[index - 1]
    );
  });
}

console.log(descendingDigits([321, 543, 123, 987, 221, 654]));


// ==================================================
// 276. Find Numbers With Equal First and Middle Digit
// Example: [121, 232, 345, 454]
// Output: [121, 232, 454]
// ==================================================

function equalFirstMiddle(numbers) {
  return numbers.filter((num) => {
    const str = String(num);

    if (str.length % 2 === 0) return false;

    const middle = Math.floor(str.length / 2);

    return str[0] === str[middle];
  });
}

console.log(equalFirstMiddle([121, 232, 345, 454, 12321]));


// ==================================================
// 277. Find Numbers With Equal Middle and Last Digit
// Example: [121, 232, 345, 454]
// Output: [121, 232, 454]
// ==================================================

function equalMiddleLast(numbers) {
  return numbers.filter((num) => {
    const str = String(num);

    if (str.length % 2 === 0) return false;

    const middle = Math.floor(str.length / 2);

    return str[middle] === str[str.length - 1];
  });
}

console.log(equalMiddleLast([121, 232, 345, 454, 12321]));


// ==================================================
// 278. Find Numbers With Digit Sum Equal to 20
// Example: [299, 389, 1234, 5555]
// Output: [299, 389, 5555]
// ==================================================

function digitSumEqual20(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum === 20;
  });
}

console.log(digitSumEqual20([299, 389, 1234, 5555, 191]));


// ==================================================
// 279. Find Numbers With Digit Sum Divisible by 5
// Example: [10, 23, 45, 111]
// Output: [10, 23, 45, 111]
// ==================================================

function digitSumDivisibleBy5(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum % 5 === 0;
  });
}

console.log(digitSumDivisibleBy5([10, 23, 45, 111, 234, 500]));


// ==================================================
// 280. Find Number With the Highest Digit Product
// Example: [123, 234, 999, 456]
// Output: 999
// ==================================================

function highestDigitProduct(numbers) {
  let highestNumber = numbers[0];
  let highestProduct = -Infinity;

  numbers.forEach((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    if (product > highestProduct) {
      highestProduct = product;
      highestNumber = num;
    }
  });

  return highestNumber;
}

console.log(highestDigitProduct([123, 234, 999, 456, 888]));
