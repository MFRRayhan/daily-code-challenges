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

// ==================================================
// 281. Find Number With the Lowest Digit Product
// Example: [123, 234, 105, 456]
// Output: 105
// ==================================================

function lowestDigitProduct(numbers) {
  let lowestNumber = numbers[0];
  let lowestProduct = Infinity;

  numbers.forEach((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    if (product < lowestProduct) {
      lowestProduct = product;
      lowestNumber = num;
    }
  });

  return lowestNumber;
}

console.log(lowestDigitProduct([123, 234, 105, 456]));


// ==================================================
// 282. Find Numbers With Digit Product Equal to 10
// Example: [25, 52, 125, 234]
// Output: [25, 52]
// ==================================================

function digitProductEqual10(numbers) {
  return numbers.filter((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    return product === 10;
  });
}

console.log(digitProductEqual10([25, 52, 125, 234, 101]));


// ==================================================
// 283. Find Numbers With Digit Product Divisible by 5
// Example: [125, 234, 555, 123]
// Output: [125, 555]
// ==================================================

function digitProductDivisibleBy5(numbers) {
  return numbers.filter((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    return product % 5 === 0;
  });
}

console.log(digitProductDivisibleBy5([125, 234, 555, 123, 105]));


// ==================================================
// 284. Find Numbers With Digit Product Greater Than 100
// Example: [555, 234, 999, 123]
// Output: [555, 234, 999]
// ==================================================

function digitProductGreaterThan100(numbers) {
  return numbers.filter((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    return product > 100;
  });
}

console.log(digitProductGreaterThan100([555, 234, 999, 123, 111]));


// ==================================================
// 285. Find Numbers With Digit Product Less Than 20
// Example: [123, 112, 234, 105]
// Output: [123, 112, 105]
// ==================================================

function digitProductLessThan20(numbers) {
  return numbers.filter((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    return product < 20;
  });
}

console.log(digitProductLessThan20([123, 112, 234, 105, 555]));


// ==================================================
// 286. Find Numbers With More Even Than Odd Digits
// Example: [246, 1234, 135, 2221]
// Output: [246, 1234, 2221]
// ==================================================

function moreEvenThanOdd(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    let evenCount = 0;
    let oddCount = 0;

    digits.forEach((digit) => {
      if (digit % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    });

    return evenCount > oddCount;
  });
}

console.log(moreEvenThanOdd([246, 1234, 135, 2221, 777]));


// ==================================================
// 287. Find Numbers With More Odd Than Even Digits
// Example: [135, 123, 246, 1112]
// Output: [135, 123, 1112]
// ==================================================

function moreOddThanEven(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    let evenCount = 0;
    let oddCount = 0;

    digits.forEach((digit) => {
      if (digit % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    });

    return oddCount > evenCount;
  });
}

console.log(moreOddThanEven([135, 123, 246, 1112, 2222]));


// ==================================================
// 288. Find Numbers With Equal Digit Sum and Product
// Example: [22, 123, 111]
// Output: [22, 123]
// ==================================================

function equalDigitSumProduct(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    const sum = digits.reduce((total, digit) => total + digit, 0);

    const product = digits.reduce(
      (total, digit) => total * digit,
      1
    );

    return sum === product;
  });
}

console.log(equalDigitSumProduct([22, 123, 111, 234, 112]));


// ==================================================
// 289. Find Numbers With Digit Sum Greater Than 30
// Example: [999, 987, 555, 123]
// Output: [999, 987]
// ==================================================

function digitSumGreaterThan30(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum > 30;
  });
}

console.log(digitSumGreaterThan30([999, 987, 555, 123, 9999]));


// ==================================================
// 290. Find Number With the Lowest Digit Sum
// Example: [123, 111, 505, 999]
// Output: 111
// ==================================================

function lowestDigitSumNumber(numbers) {
  let lowestNumber = numbers[0];
  let lowestSum = Infinity;

  numbers.forEach((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    if (sum < lowestSum) {
      lowestSum = sum;
      lowestNumber = num;
    }
  });

  return lowestNumber;
}

console.log(lowestDigitSumNumber([123, 111, 505, 999, 222]));

// ==================================================
// 291. Find Numbers With Exactly Three Even Digits
// Example: [2468, 1234, 2222, 1357]
// Output: [2468, 2222]
// ==================================================

function exactlyThreeEvenDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    const evenCount = digits.filter(
      (digit) => digit % 2 === 0
    ).length;

    return evenCount === 3;
  });
}

console.log(exactlyThreeEvenDigits([2468, 1234, 2222, 1357, 8641]));


// ==================================================
// 292. Find Numbers With Exactly Three Odd Digits
// Example: [1357, 1234, 1112, 2468]
// Output: [1357, 1112]
// ==================================================

function exactlyThreeOddDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    const oddCount = digits.filter(
      (digit) => digit % 2 !== 0
    ).length;

    return oddCount === 3;
  });
}

console.log(exactlyThreeOddDigits([1357, 1234, 1112, 2468, 9753]));


// ==================================================
// 293. Find Numbers With Exactly Two Zeros
// Example: [1002, 2003, 1000, 1200]
// Output: [1002, 1200]
// ==================================================

function exactlyTwoZeros(numbers) {
  return numbers.filter((num) => {
    const zeroCount = String(num)
      .split("")
      .filter((digit) => digit === "0").length;

    return zeroCount === 2;
  });
}

console.log(exactlyTwoZeros([1002, 2003, 1000, 1200, 1020]));


// ==================================================
// 294. Find Numbers With No Repeated Digits
// Example: [123, 456, 112, 121]
// Output: [123, 456]
// ==================================================

function noRepeatedDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num);

    return new Set(digits).size === digits.length;
  });
}

console.log(noRepeatedDigits([123, 456, 112, 121, 987, 1234]));


// ==================================================
// 295. Find Numbers With Exactly One Repeated Digit
// Example: [112, 121, 122, 1234]
// Output: [112, 121, 122]
// ==================================================

function exactlyOneRepeatedDigit(numbers) {
  return numbers.filter((num) => {
    const counts = {};

    String(num)
      .split("")
      .forEach((digit) => {
        counts[digit] = (counts[digit] || 0) + 1;
      });

    const repeatedDigits = Object.values(counts).filter(
      (count) => count > 1
    ).length;

    return repeatedDigits === 1;
  });
}

console.log(exactlyOneRepeatedDigit([112, 121, 122, 1234, 1122]));


// ==================================================
// 296. Find Numbers With All Unique Digits
// Example: [123, 456, 112, 789]
// Output: [123, 456, 789]
// ==================================================

function allUniqueDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num);

    return new Set(digits).size === digits.length;
  });
}

console.log(allUniqueDigits([123, 456, 112, 789, 1223]));


// ==================================================
// 297. Find Numbers Containing Both 0 and 5
// Example: [105, 205, 123, 500]
// Output: [105, 205, 500]
// ==================================================

function containsZeroAndFive(numbers) {
  return numbers.filter((num) => {
    const digits = String(num);

    return digits.includes("0") && digits.includes("5");
  });
}

console.log(containsZeroAndFive([105, 205, 123, 500, 150, 555]));


// ==================================================
// 298. Find Numbers Containing Both Even and Odd Digits
// Example: [12, 246, 135, 1234]
// Output: [12, 1234]
// ==================================================

function containsEvenAndOdd(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    const hasEven = digits.some((digit) => digit % 2 === 0);
    const hasOdd = digits.some((digit) => digit % 2 !== 0);

    return hasEven && hasOdd;
  });
}

console.log(containsEvenAndOdd([12, 246, 135, 1234, 222, 777]));


// ==================================================
// 299. Find Numbers Whose First Digit Is the Highest
// Example: [987, 123, 543, 876]
// Output: [987, 876]
// ==================================================

function firstDigitIsHighest(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits[0] === Math.max(...digits);
  });
}

console.log(firstDigitIsHighest([987, 123, 543, 876, 999, 321]));


// ==================================================
// 300. Find Numbers Whose Last Digit Is the Highest
// Example: [129, 321, 456, 789]
// Output: [129, 456, 789]
// ==================================================

function lastDigitIsHighest(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits[digits.length - 1] === Math.max(...digits);
  });
}

console.log(lastDigitIsHighest([129, 321, 456, 789, 555, 234]));

// ==================================================
// 291. Find Numbers With Exactly Three Even Digits
// Example: [2468, 1234, 2222, 1357]
// Output: [2468, 2222]
// ==================================================

function exactlyThreeEvenDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    const evenCount = digits.filter(
      (digit) => digit % 2 === 0
    ).length;

    return evenCount === 3;
  });
}

console.log(exactlyThreeEvenDigits([2468, 1234, 2222, 1357, 8641]));


// ==================================================
// 292. Find Numbers With Exactly Three Odd Digits
// Example: [1357, 1234, 1112, 2468]
// Output: [1357, 1112]
// ==================================================

function exactlyThreeOddDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    const oddCount = digits.filter(
      (digit) => digit % 2 !== 0
    ).length;

    return oddCount === 3;
  });
}

console.log(exactlyThreeOddDigits([1357, 1234, 1112, 2468, 9753]));


// ==================================================
// 293. Find Numbers With Exactly Two Zeros
// Example: [1002, 2003, 1000, 1200]
// Output: [1002, 1200]
// ==================================================

function exactlyTwoZeros(numbers) {
  return numbers.filter((num) => {
    const zeroCount = String(num)
      .split("")
      .filter((digit) => digit === "0").length;

    return zeroCount === 2;
  });
}

console.log(exactlyTwoZeros([1002, 2003, 1000, 1200, 1020]));


// ==================================================
// 294. Find Numbers With No Repeated Digits
// Example: [123, 456, 112, 121]
// Output: [123, 456]
// ==================================================

function noRepeatedDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num);

    return new Set(digits).size === digits.length;
  });
}

console.log(noRepeatedDigits([123, 456, 112, 121, 987, 1234]));


// ==================================================
// 295. Find Numbers With Exactly One Repeated Digit
// Example: [112, 121, 122, 1234]
// Output: [112, 121, 122]
// ==================================================

function exactlyOneRepeatedDigit(numbers) {
  return numbers.filter((num) => {
    const counts = {};

    String(num)
      .split("")
      .forEach((digit) => {
        counts[digit] = (counts[digit] || 0) + 1;
      });

    const repeatedDigits = Object.values(counts).filter(
      (count) => count > 1
    ).length;

    return repeatedDigits === 1;
  });
}

console.log(exactlyOneRepeatedDigit([112, 121, 122, 1234, 1122]));


// ==================================================
// 296. Find Numbers With All Unique Digits
// Example: [123, 456, 112, 789]
// Output: [123, 456, 789]
// ==================================================

function allUniqueDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num);

    return new Set(digits).size === digits.length;
  });
}

console.log(allUniqueDigits([123, 456, 112, 789, 1223]));


// ==================================================
// 297. Find Numbers Containing Both 0 and 5
// Example: [105, 205, 123, 500]
// Output: [105, 205, 500]
// ==================================================

function containsZeroAndFive(numbers) {
  return numbers.filter((num) => {
    const digits = String(num);

    return digits.includes("0") && digits.includes("5");
  });
}

console.log(containsZeroAndFive([105, 205, 123, 500, 150, 555]));


// ==================================================
// 298. Find Numbers Containing Both Even and Odd Digits
// Example: [12, 246, 135, 1234]
// Output: [12, 1234]
// ==================================================

function containsEvenAndOdd(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    const hasEven = digits.some((digit) => digit % 2 === 0);
    const hasOdd = digits.some((digit) => digit % 2 !== 0);

    return hasEven && hasOdd;
  });
}

console.log(containsEvenAndOdd([12, 246, 135, 1234, 222, 777]));


// ==================================================
// 299. Find Numbers Whose First Digit Is the Highest
// Example: [987, 123, 543, 876]
// Output: [987, 876]
// ==================================================

function firstDigitIsHighest(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits[0] === Math.max(...digits);
  });
}

console.log(firstDigitIsHighest([987, 123, 543, 876, 999, 321]));


// ==================================================
// 300. Find Numbers Whose Last Digit Is the Highest
// Example: [129, 321, 456, 789]
// Output: [129, 456, 789]
// ==================================================

function lastDigitIsHighest(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits[digits.length - 1] === Math.max(...digits);
  });
}

console.log(lastDigitIsHighest([129, 321, 456, 789, 555, 234]));

// ==================================================
// 311. Find the Number With the Most Odd Digits
// Example: [123, 1357, 2468, 97531]
// Output: 97531
// ==================================================

function numberWithMostOddDigits(numbers) {
  let result = numbers[0];
  let maxOddCount = -1;

  numbers.forEach((num) => {
    const oddCount = String(num)
      .split("")
      .filter((digit) => Number(digit) % 2 !== 0).length;

    if (oddCount > maxOddCount) {
      maxOddCount = oddCount;
      result = num;
    }
  });

  return result;
}

console.log(numberWithMostOddDigits([123, 1357, 2468, 97531]));


// ==================================================
// 312. Find the Number With the Most Zeros
// Example: [1002, 2000, 5050, 1234]
// Output: 2000
// ==================================================

function numberWithMostZeros(numbers) {
  let result = numbers[0];
  let maxZeroCount = -1;

  numbers.forEach((num) => {
    const zeroCount = String(num)
      .split("")
      .filter((digit) => digit === "0").length;

    if (zeroCount > maxZeroCount) {
      maxZeroCount = zeroCount;
      result = num;
    }
  });

  return result;
}

console.log(numberWithMostZeros([1002, 2000, 5050, 1234]));


// ==================================================
// 313. Find the Number With the Most Unique Digits
// Example: [1122, 1234, 5555, 9876]
// Output: 1234
// ==================================================

function numberWithMostUniqueDigits(numbers) {
  let result = numbers[0];
  let maxUniqueCount = -1;

  numbers.forEach((num) => {
    const uniqueCount = new Set(String(num)).size;

    if (uniqueCount > maxUniqueCount) {
      maxUniqueCount = uniqueCount;
      result = num;
    }
  });

  return result;
}

console.log(numberWithMostUniqueDigits([1122, 1234, 5555, 9876]));


// ==================================================
// 314. Find the Number With the Fewest Unique Digits
// Example: [1234, 1111, 1222, 5555]
// Output: 1111
// ==================================================

function numberWithFewestUniqueDigits(numbers) {
  let result = numbers[0];
  let minUniqueCount = Infinity;

  numbers.forEach((num) => {
    const uniqueCount = new Set(String(num)).size;

    if (uniqueCount < minUniqueCount) {
      minUniqueCount = uniqueCount;
      result = num;
    }
  });

  return result;
}

console.log(numberWithFewestUniqueDigits([1234, 1111, 1222, 5555]));


// ==================================================
// 315. Find Numbers With a Digit Sum Greater Than 15
// Example: [789, 555, 123, 999]
// Output: [789, 555, 999]
// ==================================================

function digitSumGreaterThan15(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum > 15;
  });
}

console.log(digitSumGreaterThan15([789, 555, 123, 999, 456]));


// ==================================================
// 316. Find Numbers With a Digit Product Equal to 0
// Example: [102, 203, 456, 500]
// Output: [102, 203, 500]
// ==================================================

function digitProductEqualZero(numbers) {
  return numbers.filter((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    return product === 0;
  });
}

console.log(digitProductEqualZero([102, 203, 456, 500, 123]));


// ==================================================
// 317. Find Numbers Whose Digits Are All Different
// Example: [123, 456, 112, 789]
// Output: [123, 456, 789]
// ==================================================

function allDigitsDifferent(numbers) {
  return numbers.filter((num) => {
    const digits = String(num);

    return new Set(digits).size === digits.length;
  });
}

console.log(allDigitsDifferent([123, 456, 112, 789, 121, 9876]));


// ==================================================
// 318. Find Numbers With Exactly Three Unique Digits
// Example: [1234, 1123, 1112, 5555]
// Output: [1123, 1112]
// ==================================================

function exactlyThreeUniqueDigits(numbers) {
  return numbers.filter((num) => {
    return new Set(String(num)).size === 3;
  });
}

console.log(exactlyThreeUniqueDigits([1234, 1123, 1112, 5555, 1223]));


// ==================================================
// 319. Find the Largest Number With an Even Digit Sum
// Example: [123, 246, 555, 808]
// Output: 808
// ==================================================

function largestNumberWithEvenDigitSum(numbers) {
  const filteredNumbers = numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum % 2 === 0;
  });

  return filteredNumbers.length > 0
    ? Math.max(...filteredNumbers)
    : null;
}

console.log(largestNumberWithEvenDigitSum([123, 246, 555, 808]));


// ==================================================
// 320. Find the Smallest Number With an Odd Digit Sum
// Example: [123, 246, 555, 808]
// Output: 123
// ==================================================

function smallestNumberWithOddDigitSum(numbers) {
  const filteredNumbers = numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum % 2 !== 0;
  });

  return filteredNumbers.length > 0
    ? Math.min(...filteredNumbers)
    : null;
}

console.log(smallestNumberWithOddDigitSum([123, 246, 555, 808]));

// ==================================================
// 321. Find Numbers With Digit Sum Less Than Digit Count
// Example: [100, 101, 200, 111]
// Output: [100, 200]
// ==================================================

function digitSumLessThanDigitCount(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    const sum = digits.reduce((total, digit) => total + digit, 0);

    return sum < digits.length;
  });
}

console.log(digitSumLessThanDigitCount([100, 101, 200, 111, 1000]));


// ==================================================
// 322. Find Numbers With Digit Sum Equal to 15
// Example: [678, 789, 555, 123]
// Output: [678, 555]
// ==================================================

function digitSumEqual15(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum === 15;
  });
}

console.log(digitSumEqual15([678, 789, 555, 123, 456]));


// ==================================================
// 323. Count Numbers With More Even Than Odd Digits
// Example: [1234, 2468, 1357, 1122]
// Output: 3
// ==================================================

function countMoreEvenThanOdd(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    const evenCount = digits.filter((digit) => digit % 2 === 0).length;
    const oddCount = digits.filter((digit) => digit % 2 !== 0).length;

    return evenCount > oddCount;
  }).length;
}

console.log(countMoreEvenThanOdd([1234, 2468, 1357, 1122]));


// ==================================================
// 324. Find Numbers Whose First Digit Is Even
// Example: [234, 567, 812, 345]
// Output: [234, 812]
// ==================================================

function firstDigitIsEven(numbers) {
  return numbers.filter((num) => {
    const firstDigit = Number(String(num)[0]);

    return firstDigit % 2 === 0;
  });
}

console.log(firstDigitIsEven([234, 567, 812, 345, 642]));


// ==================================================
// 325. Find Numbers Whose Last Digit Is Odd
// Example: [123, 456, 789, 240]
// Output: [123, 789]
// ==================================================

function lastDigitIsOdd(numbers) {
  return numbers.filter((num) => {
    const lastDigit = Number(String(num).at(-1));

    return lastDigit % 2 !== 0;
  });
}

console.log(lastDigitIsOdd([123, 456, 789, 240, 551]));


// ==================================================
// 326. Find Numbers With Digits Summing to a Multiple of 4
// Example: [112, 123, 222, 345]
// Output: [112, 123, 345]
// ==================================================

function digitSumMultipleOf4(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum % 4 === 0;
  });
}

console.log(digitSumMultipleOf4([112, 123, 222, 345, 444]));


// ==================================================
// 327. Find Numbers With a Digit Product Less Than 10
// Example: [123, 112, 234, 105]
// Output: [123, 112, 105]
// ==================================================

function digitProductLessThan10(numbers) {
  return numbers.filter((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    return product < 10;
  });
}

console.log(digitProductLessThan10([123, 112, 234, 105, 111]));


// ==================================================
// 328. Find Numbers With Exactly Four Unique Digits
// Example: [1234, 1123, 5678, 9999]
// Output: [1234, 5678]
// ==================================================

function exactlyFourUniqueDigits(numbers) {
  return numbers.filter((num) => {
    return new Set(String(num)).size === 4;
  });
}

console.log(exactlyFourUniqueDigits([1234, 1123, 5678, 9999, 12345]));


// ==================================================
// 329. Find Numbers Whose Digits Are in Non-Increasing Order
// Example: [321, 332, 987, 123]
// Output: [321, 332, 987]
// ==================================================

function nonIncreasingDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits.every(
      (digit, index) => index === 0 || digit <= digits[index - 1]
    );
  });
}

console.log(nonIncreasingDigits([321, 332, 987, 123, 554, 111]));


// ==================================================
// 330. Find the Number With the Greatest Digit Sum
// Example: [123, 987, 456, 789]
// Output: 987
// ==================================================

function greatestDigitSumNumber(numbers) {
  if (numbers.length === 0) return null;

  let result = numbers[0];
  let maxSum = -1;

  numbers.forEach((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    if (sum > maxSum) {
      maxSum = sum;
      result = num;
    }
  });

  return result;
}

console.log(greatestDigitSumNumber([123, 987, 456, 789]));

// ==================================================
// 331. Find Numbers With Digit Sum Equal to 12
// Example: [345, 678, 129, 555]
// Output: [345, 678, 129]
// ==================================================

function digitSumEqual12(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum === 12;
  });
}

console.log(digitSumEqual12([345, 678, 129, 555, 444]));


// ==================================================
// 332. Find Numbers With Exactly Two Zeros
// Example: [1002, 2003, 1000, 1200]
// Output: [1002, 1200]
// ==================================================

function exactlyTwoZeros(numbers) {
  return numbers.filter((num) => {
    const zeroCount = String(num)
      .split("")
      .filter((digit) => digit === "0").length;

    return zeroCount === 2;
  });
}

console.log(exactlyTwoZeros([1002, 2003, 1000, 1200, 1020]));


// ==================================================
// 333. Find Numbers Whose First Digit Is Greater Than the Last
// Example: [321, 456, 987, 234]
// Output: [321, 987]
// ==================================================

function firstDigitGreaterThanLast(numbers) {
  return numbers.filter((num) => {
    const digits = String(num);

    return Number(digits[0]) > Number(digits.at(-1));
  });
}

console.log(firstDigitGreaterThanLast([321, 456, 987, 234, 841]));


// ==================================================
// 334. Find Numbers With an Even Digit Sum
// Example: [123, 246, 555, 808]
// Output: [123, 246, 555, 808]
// ==================================================

function evenDigitSum(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum % 2 === 0;
  });
}

console.log(evenDigitSum([123, 246, 555, 808, 111]));


// ==================================================
// 335. Find Numbers With an Odd Digit Product
// Example: [135, 246, 357, 123]
// Output: [135, 357]
// ==================================================

function oddDigitProduct(numbers) {
  return numbers.filter((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    return product % 2 !== 0;
  });
}

console.log(oddDigitProduct([135, 246, 357, 123, 579]));


// ==================================================
// 336. Find Numbers With Exactly One Even Digit
// Example: [123, 135, 246, 789]
// Output: [123, 246]
// ==================================================

function exactlyOneEvenDigit(numbers) {
  return numbers.filter((num) => {
    const evenCount = String(num)
      .split("")
      .filter((digit) => Number(digit) % 2 === 0).length;

    return evenCount === 1;
  });
}

console.log(exactlyOneEvenDigit([123, 135, 246, 789, 222, 101]));


// ==================================================
// 337. Find Numbers With Exactly One Odd Digit
// Example: [246, 123, 222, 456]
// Output: [246, 123, 222, 456]
// ==================================================

function exactlyOneOddDigit(numbers) {
  return numbers.filter((num) => {
    const oddCount = String(num)
      .split("")
      .filter((digit) => Number(digit) % 2 !== 0).length;

    return oddCount === 1;
  });
}

console.log(exactlyOneOddDigit([246, 123, 222, 456, 135, 888]));


// ==================================================
// 338. Find Numbers With Digits in Strictly Increasing Order
// Example: [123, 145, 112, 246]
// Output: [123, 145, 246]
// ==================================================

function strictlyIncreasingDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits.every(
      (digit, index) =>
        index === 0 || digit > digits[index - 1]
    );
  });
}

console.log(strictlyIncreasingDigits([123, 145, 112, 246, 135, 122]));


// ==================================================
// 339. Find Numbers With Digits in Strictly Decreasing Order
// Example: [321, 543, 987, 332]
// Output: [321, 543, 987]
// ==================================================

function strictlyDecreasingDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits.every(
      (digit, index) =>
        index === 0 || digit < digits[index - 1]
    );
  });
}

console.log(strictlyDecreasingDigits([321, 543, 987, 332, 654, 111]));


// ==================================================
// 340. Find the Number With the Lowest Digit Product
// Example: [123, 234, 105, 456]
// Output: 105
// ==================================================

function lowestDigitProductNumber(numbers) {
  if (numbers.length === 0) return null;

  let result = numbers[0];
  let minProduct = Infinity;

  numbers.forEach((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    if (product < minProduct) {
      minProduct = product;
      result = num;
    }
  });

  return result;
}

console.log(lowestDigitProductNumber([123, 234, 105, 456]));

// ==================================================
// 341. Find Numbers With Digit Product Equal to 24
// Example: [38, 46, 234, 123]
// Output: [38, 46, 234]
// ==================================================

function digitProductEqual24(numbers) {
  return numbers.filter((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    return product === 24;
  });
}

console.log(digitProductEqual24([38, 46, 234, 123, 88]));


// ==================================================
// 342. Find Numbers With Digit Sum Divisible by 9
// Example: [18, 27, 36, 123, 456]
// Output: [18, 27, 36, 123, 456]
// ==================================================

function digitSumDivisibleBy9(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum % 9 === 0;
  });
}

console.log(digitSumDivisibleBy9([18, 27, 36, 123, 456, 111]));


// ==================================================
// 343. Find Numbers With Exactly Two Unique Digits
// Example: [121, 1122, 123, 4554]
// Output: [121, 1122, 4554]
// ==================================================

function exactlyTwoUniqueDigits(numbers) {
  return numbers.filter((num) => {
    return new Set(String(num)).size === 2;
  });
}

console.log(exactlyTwoUniqueDigits([121, 1122, 123, 4554, 777]));


// ==================================================
// 344. Find Numbers Whose Digits Are All Odd
// Example: [135, 246, 579, 111]
// Output: [135, 579, 111]
// ==================================================

function allOddDigits(numbers) {
  return numbers.filter((num) => {
    return String(num)
      .split("")
      .every((digit) => Number(digit) % 2 !== 0);
  });
}

console.log(allOddDigits([135, 246, 579, 111, 3579]));


// ==================================================
// 345. Find Numbers Whose Digits Are All Even
// Example: [246, 135, 824, 688]
// Output: [246, 824, 688]
// ==================================================

function allEvenDigits(numbers) {
  return numbers.filter((num) => {
    return String(num)
      .split("")
      .every((digit) => Number(digit) % 2 === 0);
  });
}

console.log(allEvenDigits([246, 135, 824, 688, 222]));


// ==================================================
// 346. Find Numbers With Equal First and Last Digits
// Example: [121, 232, 345, 454]
// Output: [121, 232, 454]
// ==================================================

function equalFirstAndLastDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num);

    return digits[0] === digits.at(-1);
  });
}

console.log(equalFirstAndLastDigits([121, 232, 345, 454, 123]));


// ==================================================
// 347. Count Numbers With Repeated Digits
// Example: [112, 123, 455, 789, 999]
// Output: 3
// ==================================================

function countNumbersWithRepeatedDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num);

    return new Set(digits).size < digits.length;
  }).length;
}

console.log(
  countNumbersWithRepeatedDigits([112, 123, 455, 789, 999])
);


// ==================================================
// 348. Find Numbers With Digit Sum Greater Than 20
// Example: [987, 555, 789, 123]
// Output: [987, 789]
// ==================================================

function digitSumGreaterThan20(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum > 20;
  });
}

console.log(digitSumGreaterThan20([987, 555, 789, 123, 999]));


// ==================================================
// 349. Find Numbers Whose Reverse Is Greater Than the Original
// Example: [123, 456, 321, 789]
// Output: [123, 456, 789]
// ==================================================

function reverseGreaterThanOriginal(numbers) {
  return numbers.filter((num) => {
    const reversed = Number(String(num).split("").reverse().join(""));

    return reversed > num;
  });
}

console.log(reverseGreaterThanOriginal([123, 456, 321, 789, 120]));


// ==================================================
// 350. Find the Number With the Highest Digit Sum
// Example: [123, 987, 456, 789]
// Output: 987
// ==================================================

function highestDigitSumNumber(numbers) {
  if (numbers.length === 0) return null;

  let result = numbers[0];
  let maxSum = -1;

  numbers.forEach((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    if (sum > maxSum) {
      maxSum = sum;
      result = num;
    }
  });

  return result;
}

console.log(highestDigitSumNumber([123, 987, 456, 789]));

// ==================================================
// 351. Find Numbers With Digit Sum Equal to 18
// Example: [189, 567, 999, 234]
// Output: [189, 567, 999]
// ==================================================

function digitSumEqual18(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum === 18;
  });
}

console.log(digitSumEqual18([189, 567, 999, 234, 888]));


// ==================================================
// 352. Find Numbers With Exactly Three Zeros
// Example: [1000, 2003, 10020, 50000]
// Output: [1000, 10020]
// ==================================================

function exactlyThreeZeros(numbers) {
  return numbers.filter((num) => {
    const zeroCount = String(num)
      .split("")
      .filter((digit) => digit === "0").length;

    return zeroCount === 3;
  });
}

console.log(exactlyThreeZeros([1000, 2003, 10020, 50000, 3001]));


// ==================================================
// 353. Find Numbers With Alternating Digits
// Example: [1212, 1234, 1010, 2323]
// Output: [1212, 1010, 2323]
// ==================================================

function alternatingDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("");

    return digits.every(
      (digit, index) =>
        index === 0 || digit !== digits[index - 1]
    );
  });
}

console.log(alternatingDigits([1212, 1234, 1010, 2323, 1112]));


// ==================================================
// 354. Find Numbers With No Consecutive Equal Digits
// Example: [1234, 1123, 1212, 4556]
// Output: [1234, 1212]
// ==================================================

function noConsecutiveEqualDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num);

    for (let i = 1; i < digits.length; i++) {
      if (digits[i] === digits[i - 1]) {
        return false;
      }
    }

    return true;
  });
}

console.log(noConsecutiveEqualDigits([1234, 1123, 1212, 4556, 9876]));


// ==================================================
// 355. Find Numbers With Digit Product Equal to 6
// Example: [23, 16, 123, 222]
// Output: [23, 16, 123]
// ==================================================

function digitProductEqual6(numbers) {
  return numbers.filter((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    return product === 6;
  });
}

console.log(digitProductEqual6([23, 16, 123, 222, 321]));


// ==================================================
// 356. Find Numbers Whose First Digit Is Odd
// Example: [123, 246, 357, 864]
// Output: [123, 357]
// ==================================================

function firstDigitIsOdd(numbers) {
  return numbers.filter((num) => {
    const firstDigit = Number(String(num)[0]);

    return firstDigit % 2 !== 0;
  });
}

console.log(firstDigitIsOdd([123, 246, 357, 864, 987]));


// ==================================================
// 357. Find Numbers Whose Last Digit Is Even
// Example: [123, 246, 357, 864]
// Output: [246, 864]
// ==================================================

function lastDigitIsEven(numbers) {
  return numbers.filter((num) => {
    const lastDigit = Number(String(num).at(-1));

    return lastDigit % 2 === 0;
  });
}

console.log(lastDigitIsEven([123, 246, 357, 864, 980]));


// ==================================================
// 358. Find Numbers With More Than Three Unique Digits
// Example: [1234, 11234, 123, 56789]
// Output: [1234, 56789]
// ==================================================

function moreThanThreeUniqueDigits(numbers) {
  return numbers.filter((num) => {
    return new Set(String(num)).size > 3;
  });
}

console.log(moreThanThreeUniqueDigits([1234, 11234, 123, 56789, 9876]));


// ==================================================
// 359. Find Numbers Whose Digit Sum Is a Perfect Square
// Example: [13, 22, 123, 1111]
// Output: [13, 22, 123, 1111]
// ==================================================

function digitSumIsPerfectSquare(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    const root = Math.sqrt(sum);

    return Number.isInteger(root);
  });
}

console.log(digitSumIsPerfectSquare([13, 22, 123, 1111, 456]));


// ==================================================
// 360. Find the Number With the Fewest Odd Digits
// Example: [123, 2468, 1357, 8024]
// Output: 2468
// ==================================================

function numberWithFewestOddDigits(numbers) {
  if (numbers.length === 0) return null;

  let result = numbers[0];
  let minOddCount = Infinity;

  numbers.forEach((num) => {
    const oddCount = String(num)
      .split("")
      .filter((digit) => Number(digit) % 2 !== 0).length;

    if (oddCount < minOddCount) {
      minOddCount = oddCount;
      result = num;
    }
  });

  return result;
}

console.log(numberWithFewestOddDigits([123, 2468, 1357, 8024]));

// ==================================================
// 361. Find Numbers With Digit Sum Equal to 9
// Example: [123, 234, 405, 567]
// Output: [234, 405]
// ==================================================

function digitSumEqual9(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum === 9;
  });
}

console.log(digitSumEqual9([123, 234, 405, 567, 900]));


// ==================================================
// 362. Find Numbers With Exactly Two Repeated Digits
// Example: [1123, 1223, 1233, 1234]
// Output: [1123, 1223, 1233]
// ==================================================

function exactlyTwoRepeatedDigits(numbers) {
  return numbers.filter((num) => {
    const counts = {};

    for (const digit of String(num)) {
      counts[digit] = (counts[digit] || 0) + 1;
    }

    return Object.values(counts).filter(
      (count) => count > 1
    ).length === 1;
  });
}

console.log(exactlyTwoRepeatedDigits([1123, 1223, 1233, 1234, 1122]));


// ==================================================
// 363. Find Numbers With Digits in Strictly Increasing Order
// Example: [123, 135, 246, 321]
// Output: [123, 135, 246]
// ==================================================

function strictlyIncreasingDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits.every(
      (digit, index) =>
        index === 0 || digit > digits[index - 1]
    );
  });
}

console.log(strictlyIncreasingDigits([123, 135, 246, 321, 112]));


// ==================================================
// 364. Find Numbers With Digits in Strictly Decreasing Order
// Example: [321, 543, 987, 123]
// Output: [321, 543, 987]
// ==================================================

function strictlyDecreasingDigits(numbers) {
  return numbers.filter((num) => {
    const digits = String(num).split("").map(Number);

    return digits.every(
      (digit, index) =>
        index === 0 || digit < digits[index - 1]
    );
  });
}

console.log(strictlyDecreasingDigits([321, 543, 987, 123, 332]));


// ==================================================
// 365. Find Numbers Whose Digit Sum Is Divisible by 6
// Example: [123, 222, 345, 456]
// Output: [123, 222, 345, 456]
// ==================================================

function digitSumDivisibleBy6(numbers) {
  return numbers.filter((num) => {
    const sum = String(num)
      .split("")
      .reduce((total, digit) => total + Number(digit), 0);

    return sum % 6 === 0;
  });
}

console.log(digitSumDivisibleBy6([123, 222, 345, 456, 111]));


// ==================================================
// 366. Find Numbers With Digit Product Greater Than 50
// Example: [678, 567, 234, 999]
// Output: [678, 567, 999]
// ==================================================

function digitProductGreaterThan50(numbers) {
  return numbers.filter((num) => {
    const product = String(num)
      .split("")
      .reduce((total, digit) => total * Number(digit), 1);

    return product > 50;
  });
}

console.log(digitProductGreaterThan50([678, 567, 234, 999, 123]));


// ==================================================
// 367. Find Numbers With Exactly Four Even Digits
// Example: [2468, 1234, 86420, 2222]
// Output: [2468, 86420, 2222]
// ==================================================

function exactlyFourEvenDigits(numbers) {
  return numbers.filter((num) => {
    const evenCount = String(num)
      .split("")
      .filter((digit) => Number(digit) % 2 === 0).length;

    return evenCount === 4;
  });
}

console.log(exactlyFourEvenDigits([2468, 1234, 86420, 2222, 1357]));


// ==================================================
// 368. Find Numbers Containing a Specific Digit
// Example: numbers = [123, 456, 789, 120], digit = 2
// Output: [123, 120]
// ==================================================

function numbersContainingDigit(numbers, targetDigit) {
  return numbers.filter((num) =>
    String(num).includes(String(targetDigit))
  );
}

console.log(numbersContainingDigit([123, 456, 789, 120], 2));


// ==================================================
// 369. Find Numbers Whose Reverse Is a Palindrome
// Example: [121, 123, 454, 678]
// Output: [121, 454]
// ==================================================

function reverseIsPalindrome(numbers) {
  return numbers.filter((num) => {
    const reversed = String(num).split("").reverse().join("");

    return reversed === String(num);
  });
}

console.log(reverseIsPalindrome([121, 123, 454, 678, 1331]));


// ==================================================
// 370. Find the Number With the Highest Number of Even Digits
// Example: [1234, 2468, 1357, 8024]
// Output: 2468
// ==================================================

function numberWithMostEvenDigits(numbers) {
  if (numbers.length === 0) return null;

  let result = numbers[0];
  let maxEvenCount = -1;

  numbers.forEach((num) => {
    const evenCount = String(num)
      .split("")
      .filter((digit) => Number(digit) % 2 === 0).length;

    if (evenCount > maxEvenCount) {
      maxEvenCount = evenCount;
      result = num;
    }
  });

  return result;
}

console.log(numberWithMostEvenDigits([1234, 2468, 1357, 8024]));


// ==================================================
// 371. Find Numbers Whose First Digit Is Greater Than the Last Digit
// Example: [123, 542, 781, 456, 932]
// Output: [542, 781, 932]
// ==================================================

const numbers371 = [123, 542, 781, 456, 932];

const result371 = numbers371.filter((num) => {
  const digits = String(num);
  return Number(digits[0]) > Number(digits[digits.length - 1]);
});

console.log(result371);

// ==================================================
// 372. Find Numbers With Exactly Three Odd Digits
// Example: [12345, 24681, 13579, 1234, 56789]
// Output: [12345, 24681]
// ==================================================

const numbers372 = [12345, 24681, 13579, 1234, 56789];

const result372 = numbers372.filter((num) => {
  const oddCount = String(num)
    .split("")
    .filter((digit) => Number(digit) % 2 !== 0).length;

  return oddCount === 3;
});

console.log(result372);

// ==================================================
// 373. Find Numbers Whose First and Last Digits Are Equal
// Example: [121, 234, 454, 678, 989]
// Output: [121, 454, 989]
// ==================================================

const numbers373 = [121, 234, 454, 678, 989];

const result373 = numbers373.filter((num) => {
  const digits = String(num);
  return digits[0] === digits[digits.length - 1];
});

console.log(result373);

// ==================================================
// 374. Find Numbers With No Consecutive Repeated Digits
// Example: [1123, 1234, 1225, 4567, 7889]
// Output: [1234, 4567]
// ==================================================

const numbers374 = [1123, 1234, 1225, 4567, 7889];

const result374 = numbers374.filter((num) => {
  const digits = String(num);

  return digits.split("").every((digit, index) => {
    return index === 0 || digit !== digits[index - 1];
  });
});

console.log(result374);

// ==================================================
// 375. Find Numbers Whose Digit Sum Is Greater Than Their Digit Count
// Example: [123, 111, 456, 2222, 101]
// Output: [123, 456]
// ==================================================

const numbers375 = [123, 111, 456, 2222, 101];

const result375 = numbers375.filter((num) => {
  const digits = String(num).split("");
  const digitSum = digits.reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum > digits.length;
});

console.log(result375);

// ==================================================
// 376. Find Numbers Containing Only Even Digits
// Example: [2468, 1234, 8026, 4680, 1357]
// Output: [2468, 8026, 4680]
// ==================================================

const numbers376 = [2468, 1234, 8026, 4680, 1357];

const result376 = numbers376.filter((num) => {
  return String(num)
    .split("")
    .every((digit) => Number(digit) % 2 === 0);
});

console.log(result376);

// ==================================================
// 377. Find Numbers Whose Digits Have an Equal Sum of Even and Odd Digits
// Example: [1234, 1122, 2468, 1357, 2233]
// Output: [1234, 1122, 2233]
// ==================================================

const numbers377 = [1234, 1122, 2468, 1357, 2233];

const result377 = numbers377.filter((num) => {
  const digits = String(num).split("");

  const evenSum = digits
    .filter((digit) => Number(digit) % 2 === 0)
    .reduce((sum, digit) => sum + Number(digit), 0);

  const oddSum = digits
    .filter((digit) => Number(digit) % 2 !== 0)
    .reduce((sum, digit) => sum + Number(digit), 0);

  return evenSum === oddSum;
});

console.log(result377);

// ==================================================
// 378. Find Numbers With a Digit Difference of Exactly 1
// Example: [1234, 1357, 2468, 1213, 9876]
// Output: [1234, 1213, 9876]
// ==================================================

const numbers378 = [1234, 1357, 2468, 1213, 9876];

const result378 = numbers378.filter((num) => {
  const digits = String(num).split("");

  return digits.every((digit, index) => {
    if (index === digits.length - 1) return true;

    return Math.abs(Number(digit) - Number(digits[index + 1])) === 1;
  });
});

console.log(result378);

// ==================================================
// 379. Find Numbers Whose Middle Digit Is Even
// Example: [123, 246, 357, 482, 591]
// Output: [123, 482]
// ==================================================

const numbers379 = [123, 246, 357, 482, 591];

const result379 = numbers379.filter((num) => {
  const digits = String(num);

  if (digits.length % 2 === 0) return false;

  const middleIndex = Math.floor(digits.length / 2);

  return Number(digits[middleIndex]) % 2 === 0;
});

console.log(result379);

// ==================================================
// 380. Find the Number With the Smallest Digit Sum
// Example: [456, 123, 809, 222, 111]
// Output: 111
// ==================================================

const numbers380 = [456, 123, 809, 222, 111];

const result380 = numbers380.reduce((smallest, current) => {
  const getDigitSum = (num) =>
    String(num)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);

  return getDigitSum(current) < getDigitSum(smallest)
    ? current
    : smallest;
}, numbers380[0]);

console.log(result380);


// ==================================================
// 381. Find Numbers Whose Digit Sum Is a Prime Number
// Example: [123, 234, 145, 222, 111]
// Output: [123, 234, 145]
// ==================================================

const numbers381 = [123, 234, 145, 222, 111];

const isPrime381 = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const result381 = numbers381.filter((num) => {
  const digitSum = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  return isPrime381(digitSum);
});

console.log(result381);

// ==================================================
// 382. Find Numbers Whose Digits Alternate Between Even and Odd
// Example: [1234, 2468, 12345, 2143, 1357]
// Output: [1234, 2143]
// ==================================================

const numbers382 = [1234, 2468, 12345, 2143, 1357];

const result382 = numbers382.filter((num) => {
  const digits = String(num).split("");

  return digits.every((digit, index) => {
    if (index === 0) return true;

    return Number(digit) % 2 !== Number(digits[index - 1]) % 2;
  });
});

console.log(result382);

// ==================================================
// 383. Find Numbers Whose Digit Sum Equals Their Digit Product
// Example: [123, 112, 222, 111, 134]
// Output: [123, 112, 222, 111]
// ==================================================

const numbers383 = [123, 112, 222, 111, 134];

const result383 = numbers383.filter((num) => {
  const digits = String(num).split("").map(Number);

  const sum = digits.reduce((total, digit) => total + digit, 0);
  const product = digits.reduce((total, digit) => total * digit, 1);

  return sum === product;
});

console.log(result383);

// ==================================================
// 384. Find Numbers With Exactly Two Even Digits
// Example: [1234, 2468, 1357, 1023, 5678]
// Output: [1234, 1023]
// ==================================================

const numbers384 = [1234, 2468, 1357, 1023, 5678];

const result384 = numbers384.filter((num) => {
  const evenCount = String(num)
    .split("")
    .filter((digit) => Number(digit) % 2 === 0).length;

  return evenCount === 2;
});

console.log(result384);

// ==================================================
// 385. Find Numbers Whose Digits Are All Different
// Example: [1234, 1123, 5678, 9091, 2468]
// Output: [1234, 5678, 2468]
// ==================================================

const numbers385 = [1234, 1123, 5678, 9091, 2468];

const result385 = numbers385.filter((num) => {
  const digits = String(num);

  return new Set(digits).size === digits.length;
});

console.log(result385);

// ==================================================
// 386. Find Numbers With a Digit Sum Less Than 10
// Example: [123, 456, 809, 111, 999]
// Output: [123, 809, 111]
// ==================================================

const numbers386 = [123, 456, 809, 111, 999];

const result386 = numbers386.filter((num) => {
  const digitSum = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum < 10;
});

console.log(result386);

// ==================================================
// 387. Find Numbers Whose Digits Are in Non-Decreasing Order
// Example: [1234, 1123, 1357, 4321, 1224]
// Output: [1234, 1123, 1224]
// ==================================================

const numbers387 = [1234, 1123, 1357, 4321, 1224];

const result387 = numbers387.filter((num) => {
  const digits = String(num).split("").map(Number);

  return digits.every((digit, index) => {
    return index === 0 || digit >= digits[index - 1];
  });
});

console.log(result387);

// ==================================================
// 388. Find Numbers Whose First Digit Is Even
// Example: [123, 246, 357, 482, 591]
// Output: [246, 482]
// ==================================================

const numbers388 = [123, 246, 357, 482, 591];

const result388 = numbers388.filter((num) => {
  const firstDigit = Number(String(num)[0]);

  return firstDigit % 2 === 0;
});

console.log(result388);

// ==================================================
// 389. Find Numbers With More Odd Digits Than Even Digits
// Example: [123, 2468, 1357, 1122, 579]
// Output: [123, 1357, 579]
// ==================================================

const numbers389 = [123, 2468, 1357, 1122, 579];

const result389 = numbers389.filter((num) => {
  const digits = String(num).split("");

  const oddCount = digits.filter((digit) => Number(digit) % 2 !== 0).length;
  const evenCount = digits.length - oddCount;

  return oddCount > evenCount;
});

console.log(result389);

// ==================================================
// 390. Find the Number With the Most Unique Digits
// Example: [1123, 12345, 7788, 98765, 1111]
// Output: 12345
// ==================================================

const numbers390 = [1123, 12345, 7788, 98765, 1111];

const result390 = numbers390.reduce((best, current) => {
  const bestUniqueCount = new Set(String(best)).size;
  const currentUniqueCount = new Set(String(current)).size;

  return currentUniqueCount > bestUniqueCount ? current : best;
}, numbers390[0]);

console.log(result390);

// ==================================================
// 391. Find Numbers Whose Digit Sum Is a Multiple of 5
// Example: [123, 145, 222, 505, 789]
// Output: [145, 505]
// ==================================================

const numbers391 = [123, 145, 222, 505, 789];

const result391 = numbers391.filter((num) => {
  const digitSum = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum % 5 === 0;
});

console.log(result391);

// ==================================================
// 392. Find Numbers With Exactly One Zero
// Example: [1023, 1005, 2040, 1234, 5001]
// Output: [1023, 5001]
// ==================================================

const numbers392 = [1023, 1005, 2040, 1234, 5001];

const result392 = numbers392.filter((num) => {
  const zeroCount = String(num).split("").filter((digit) => digit === "0").length;

  return zeroCount === 1;
});

console.log(result392);

// ==================================================
// 393. Find Numbers Whose First Two Digits Have an Even Sum
// Example: [1234, 2468, 3579, 4821, 5912]
// Output: [1234, 3579, 5912]
// ==================================================

const numbers393 = [1234, 2468, 3579, 4821, 5912];

const result393 = numbers393.filter((num) => {
  const digits = String(num);

  if (digits.length < 2) return false;

  const firstTwoSum = Number(digits[0]) + Number(digits[1]);

  return firstTwoSum % 2 === 0;
});

console.log(result393);

// ==================================================
// 394. Find Numbers Whose Last Two Digits Are Equal
// Example: [1223, 4555, 6788, 9012, 3444]
// Output: [4555, 6788, 3444]
// ==================================================

const numbers394 = [1223, 4555, 6788, 9012, 3444];

const result394 = numbers394.filter((num) => {
  const digits = String(num);

  return digits.length >= 2 && digits.at(-1) === digits.at(-2);
});

console.log(result394);

// ==================================================
// 395. Find Numbers Whose Digit Product Is Zero
// Example: [123, 405, 678, 102, 999]
// Output: [405, 102]
// ==================================================

const numbers395 = [123, 405, 678, 102, 999];

const result395 = numbers395.filter((num) => {
  const digitProduct = String(num)
    .split("")
    .reduce((product, digit) => product * Number(digit), 1);

  return digitProduct === 0;
});

console.log(result395);

// ==================================================
// 396. Find Numbers With Exactly Three Unique Digits
// Example: [1123, 1234, 1212, 4566, 7778]
// Output: [1123, 1212, 4566]
// ==================================================

const numbers396 = [1123, 1234, 1212, 4566, 7778];

const result396 = numbers396.filter((num) => {
  return new Set(String(num)).size === 3;
});

console.log(result396);

// ==================================================
// 397. Find Numbers Whose Middle Digit Is Greater Than 5
// Example: [123, 167, 285, 394, 456]
// Output: [167, 285]
// ==================================================

const numbers397 = [123, 167, 285, 394, 456];

const result397 = numbers397.filter((num) => {
  const digits = String(num);

  if (digits.length % 2 === 0) return false;

  const middleDigit = Number(digits[Math.floor(digits.length / 2)]);

  return middleDigit > 5;
});

console.log(result397);

// ==================================================
// 398. Find Numbers Whose Digits Contain Exactly Two Different Values
// Example: [1122, 1212, 1234, 5555, 7788]
// Output: [1122, 1212, 7788]
// ==================================================

const numbers398 = [1122, 1212, 1234, 5555, 7788];

const result398 = numbers398.filter((num) => {
  return new Set(String(num)).size === 2;
});

console.log(result398);

// ==================================================
// 399. Find Numbers Whose Digit Sum Is Greater Than 15
// Example: [1234, 5678, 9099, 2468, 9999]
// Output: [5678, 9099, 9999]
// ==================================================

const numbers399 = [1234, 5678, 9099, 2468, 9999];

const result399 = numbers399.filter((num) => {
  const digitSum = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum > 15;
});

console.log(result399);

// ==================================================
// 400. Find the Number With the Longest Sequence of Repeated Adjacent Digits
// Example: [122234, 45555, 1112, 9876, 778899]
// Output: 45555
// ==================================================

const numbers400 = [122234, 45555, 1112, 9876, 778899];

const getLongestSequence400 = (num) => {
  const digits = String(num);
  let longest = 1;
  let current = 1;

  for (let i = 1; i < digits.length; i++) {
    if (digits[i] === digits[i - 1]) {
      current++;
      longest = Math.max(longest, current);
    } else {
      current = 1;
    }
  }

  return longest;
};

const result400 = numbers400.reduce((best, current) => {
  return getLongestSequence400(current) > getLongestSequence400(best)
    ? current
    : best;
}, numbers400[0]);

console.log(result400);

// ==================================================
// 401. Find Numbers Whose Digit Sum Is Equal to 12
// Example: [345, 456, 129, 555, 678]
// Output: [345, 129]
// ==================================================

const numbers401 = [345, 456, 129, 555, 678];

const result401 = numbers401.filter((num) => {
  const digitSum = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum === 12;
});

console.log(result401);

// ==================================================
// 402. Find Numbers Where Every Digit Is Greater Than 2
// Example: [3456, 1234, 5678, 2901, 789]
// Output: [3456, 5678, 789]
// ==================================================

const numbers402 = [3456, 1234, 5678, 2901, 789];

const result402 = numbers402.filter((num) => {
  return String(num)
    .split("")
    .every((digit) => Number(digit) > 2);
});

console.log(result402);

// ==================================================
// 403. Find Numbers With Exactly One Odd Digit
// Example: [1234, 2468, 1357, 2246, 5678]
// Output: [1234]
// ==================================================

const numbers403 = [1234, 2468, 1357, 2246, 5678];

const result403 = numbers403.filter((num) => {
  const oddCount = String(num)
    .split("")
    .filter((digit) => Number(digit) % 2 !== 0).length;

  return oddCount === 1;
});

console.log(result403);

// ==================================================
// 404. Find Numbers Whose First Digit Is the Largest Digit
// Example: [9123, 5678, 8765, 4321, 9881]
// Output: [9123, 8765, 9881]
// ==================================================

const numbers404 = [9123, 5678, 8765, 4321, 9881];

const result404 = numbers404.filter((num) => {
  const digits = String(num).split("").map(Number);

  return digits[0] === Math.max(...digits);
});

console.log(result404);

// ==================================================
// 405. Find Numbers Whose Last Digit Is the Smallest Digit
// Example: [1234, 5671, 8421, 9876, 3210]
// Output: [5671, 8421, 3210]
// ==================================================

const numbers405 = [1234, 5671, 8421, 9876, 3210];

const result405 = numbers405.filter((num) => {
  const digits = String(num).split("").map(Number);

  return digits.at(-1) === Math.min(...digits);
});

console.log(result405);

// ==================================================
// 406. Find Numbers Whose Digit Sum Is an Even Number
// Example: [123, 246, 357, 482, 591]
// Output: [123, 246, 357, 591]
// ==================================================

const numbers406 = [123, 246, 357, 482, 591];

const result406 = numbers406.filter((num) => {
  const digitSum = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum % 2 === 0;
});

console.log(result406);

// ==================================================
// 407. Find Numbers With No Repeated Digits
// Example: [1234, 1123, 5678, 9091, 2468]
// Output: [1234, 5678, 2468]
// ==================================================

const numbers407 = [1234, 1123, 5678, 9091, 2468];

const result407 = numbers407.filter((num) => {
  const digits = String(num);

  return new Set(digits).size === digits.length;
});

console.log(result407);

// ==================================================
// 408. Find Numbers Whose First and Last Digits Have the Same Parity
// Example: [1234, 2468, 3579, 4826, 5912]
// Output: [2468, 4826]
// ==================================================

const numbers408 = [1234, 2468, 3579, 4826, 5912];

const result408 = numbers408.filter((num) => {
  const digits = String(num);

  const firstDigit = Number(digits[0]);
  const lastDigit = Number(digits.at(-1));

  return firstDigit % 2 === lastDigit % 2;
});

console.log(result408);

// ==================================================
// 409. Find Numbers Whose Digits Have a Product Greater Than 100
// Example: [2345, 1234, 5678, 2222, 3456]
// Output: [2345, 5678, 3456]
// ==================================================

const numbers409 = [2345, 1234, 5678, 2222, 3456];

const result409 = numbers409.filter((num) => {
  const digitProduct = String(num)
    .split("")
    .reduce((product, digit) => product * Number(digit), 1);

  return digitProduct > 100;
});

console.log(result409);

// ==================================================
// 410. Find the Number With the Smallest Difference Between Its Largest and Smallest Digits
// Example: [1234, 5559, 2468, 7788, 9991]
// Output: 5559
// ==================================================

const numbers410 = [1234, 5559, 2468, 7788, 9991];

const getDigitRange410 = (num) => {
  const digits = String(num).split("").map(Number);

  return Math.max(...digits) - Math.min(...digits);
};

const result410 = numbers410.reduce((best, current) => {
  return getDigitRange410(current) < getDigitRange410(best)
    ? current
    : best;
}, numbers410[0]);

console.log(result410);

// ==================================================
// 411. Find Numbers Whose Digit Sum Is Greater Than Their Digit Product
// Example: [123, 234, 345, 222, 112]
// Output: [123, 234, 345, 112]
// ==================================================

const numbers411 = [123, 234, 345, 222, 112];

const result411 = numbers411.filter((num) => {
  const digits = String(num).split("").map(Number);

  const digitSum = digits.reduce((sum, digit) => sum + digit, 0);
  const digitProduct = digits.reduce((product, digit) => product * digit, 1);

  return digitSum > digitProduct;
});

console.log(result411);

// ==================================================
// 412. Find Numbers Whose Digits Are All Divisible by 2 or 3
// Example: [246, 369, 123, 482, 936]
// Output: [246, 369, 936]
// ==================================================

const numbers412 = [246, 369, 123, 482, 936];

const result412 = numbers412.filter((num) => {
  return String(num)
    .split("")
    .every((digit) => Number(digit) % 2 === 0 || Number(digit) % 3 === 0);
});

console.log(result412);

// ==================================================
// 413. Find Numbers With Exactly Two Different Odd Digits
// Example: [1234, 1357, 1123, 2468, 5791]
// Output: [1234, 1123, 5791]
// ==================================================

const numbers413 = [1234, 1357, 1123, 2468, 5791];

const result413 = numbers413.filter((num) => {
  const oddDigits = String(num)
    .split("")
    .filter((digit) => Number(digit) % 2 !== 0);

  return new Set(oddDigits).size === 2;
});

console.log(result413);

// ==================================================
// 414. Find Numbers Whose Digits Have No Consecutive Differences Greater Than 2
// Example: [1234, 1357, 2468, 1246, 9876]
// Output: [1234, 1246, 9876]
// ==================================================

const numbers414 = [1234, 1357, 2468, 1246, 9876];

const result414 = numbers414.filter((num) => {
  const digits = String(num).split("").map(Number);

  return digits.every((digit, index) => {
    if (index === 0) return true;

    return Math.abs(digit - digits[index - 1]) <= 2;
  });
});

console.log(result414);

// ==================================================
// 415. Find Numbers Whose Digit Sum Is Equal to the Number of Digits Squared
// Example: [123, 1122, 2222, 1234, 1111]
// Output: [123, 1122]
// ==================================================

const numbers415 = [123, 1122, 2222, 1234, 1111];

const result415 = numbers415.filter((num) => {
  const digits = String(num).split("");

  const digitSum = digits.reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum === digits.length ** 2;
});

console.log(result415);

// ==================================================
// 416. Find Numbers Whose Digits Are in Strict Alternating Order
// Example: [1234, 2143, 1324, 2468, 9876]
// Output: [1234, 2143, 1324]
// ==================================================

const numbers416 = [1234, 2143, 1324, 2468, 9876];

const result416 = numbers416.filter((num) => {
  const digits = String(num).split("").map(Number);

  const isIncreasing = digits.every((digit, index) => {
    return index === 0 || digit > digits[index - 1];
  });

  const isDecreasing = digits.every((digit, index) => {
    return index === 0 || digit < digits[index - 1];
  });

  const isAlternating = digits.every((digit, index) => {
    if (index < 2) return true;

    const previousDifference = digits[index - 1] - digits[index - 2];
    const currentDifference = digit - digits[index - 1];

    return previousDifference * currentDifference < 0;
  });

  return !isIncreasing && !isDecreasing && isAlternating;
});

console.log(result416);

// ==================================================
// 417. Find Numbers Whose Digits Have a Maximum Difference of 4
// Example: [1357, 2468, 1234, 5678, 9091]
// Output: [1357, 2468, 1234]
// ==================================================

const numbers417 = [1357, 2468, 1234, 5678, 9091];

const result417 = numbers417.filter((num) => {
  const digits = String(num).split("").map(Number);

  const difference = Math.max(...digits) - Math.min(...digits);

  return difference <= 4;
});

console.log(result417);

// ==================================================
// 418. Find Numbers Whose Digits Contain More Than One Zero
// Example: [1002, 1020, 1200, 1000, 2340]
// Output: [1002, 1020, 1200, 1000]
// ==================================================

const numbers418 = [1002, 1020, 1200, 1000, 2340];

const result418 = numbers418.filter((num) => {
  const zeroCount = String(num)
    .split("")
    .filter((digit) => digit === "0").length;

  return zeroCount > 1;
});

console.log(result418);

// ==================================================
// 419. Find Numbers Whose Digit Sum Is Equal to Their First Digit Plus Last Digit
// Example: [123, 121, 234, 343, 456]
// Output: [121, 343]
// ==================================================

const numbers419 = [123, 121, 234, 343, 456];

const result419 = numbers419.filter((num) => {
  const digits = String(num).split("").map(Number);

  const digitSum = digits.reduce((sum, digit) => sum + digit, 0);
  const firstAndLastSum = digits[0] + digits.at(-1);

  return digitSum === firstAndLastSum;
});

console.log(result419);

// ==================================================
// 420. Find the Number With the Highest Digit Product
// Example: [123, 234, 345, 222, 789]
// Output: 789
// ==================================================

const numbers420 = [123, 234, 345, 222, 789];

const getDigitProduct420 = (num) => {
  return String(num)
    .split("")
    .reduce((product, digit) => product * Number(digit), 1);
};

const result420 = numbers420.reduce((best, current) => {
  return getDigitProduct420(current) > getDigitProduct420(best)
    ? current
    : best;
}, numbers420[0]);

console.log(result420);


// ==================================================
// 421. Find Numbers Whose Digits Are All Prime Digits
// Example: [2357, 2468, 1379, 5723, 1112]
// Output: [2357, 5723]
// ==================================================

const numbers421 = [2357, 2468, 1379, 5723, 1112];

const primeDigits421 = new Set(["2", "3", "5", "7"]);

const result421 = numbers421.filter((num) => {
  return String(num)
    .split("")
    .every((digit) => primeDigits421.has(digit));
});

console.log(result421);

// ==================================================
// 422. Find Numbers Whose Digit Sum Is a Perfect Square
// Example: [123, 145, 222, 333, 456]
// Output: [123, 145, 222, 333]
// ==================================================

const numbers422 = [123, 145, 222, 333, 456];

const result422 = numbers422.filter((num) => {
  const digitSum = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  const squareRoot = Math.sqrt(digitSum);

  return Number.isInteger(squareRoot);
});

console.log(result422);

// ==================================================
// 423. Find Numbers Whose Digits Have an Equal Number of Even and Odd Digits
// Example: [1234, 2468, 1357, 1122, 12345]
// Output: [1234, 1122]
// ==================================================

const numbers423 = [1234, 2468, 1357, 1122, 12345];

const result423 = numbers423.filter((num) => {
  const digits = String(num).split("");

  const evenCount = digits.filter((digit) => Number(digit) % 2 === 0).length;
  const oddCount = digits.length - evenCount;

  return evenCount === oddCount;
});

console.log(result423);

// ==================================================
// 424. Find Numbers Whose Digits Are in a Zigzag Pattern
// Example: [3142, 1234, 5241, 9876, 3524]
// Output: [3142, 5241, 3524]
// ==================================================

const numbers424 = [3142, 1234, 5241, 9876, 3524];

const result424 = numbers424.filter((num) => {
  const digits = String(num).split("").map(Number);

  return digits.every((digit, index) => {
    if (index < 2) return true;

    const previous = digits[index - 1];
    const beforePrevious = digits[index - 2];

    const isPeak = previous > beforePrevious && previous > digit;
    const isValley = previous < beforePrevious && previous < digit;

    return isPeak || isValley;
  });
});

console.log(result424);

// ==================================================
// 425. Find Numbers Whose Digit Sum Is Greater Than 20
// Example: [5678, 1234, 9999, 7891, 2468]
// Output: [5678, 9999, 7891]
// ==================================================

const numbers425 = [5678, 1234, 9999, 7891, 2468];

const result425 = numbers425.filter((num) => {
  const digitSum = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum > 20;
});

console.log(result425);

// ==================================================
// 426. Find Numbers Whose Digits Are All Unique and Even
// Example: [2468, 2246, 8024, 4680, 1234]
// Output: [2468, 8024, 4680]
// ==================================================

const numbers426 = [2468, 2246, 8024, 4680, 1234];

const result426 = numbers426.filter((num) => {
  const digits = String(num);

  const allEven = [...digits].every((digit) => Number(digit) % 2 === 0);
  const allUnique = new Set(digits).size === digits.length;

  return allEven && allUnique;
});

console.log(result426);

// ==================================================
// 427. Find Numbers Whose Digit Sum Is Divisible by Their Digit Count
// Example: [123, 246, 1111, 1234, 2222]
// Output: [123, 246, 1111, 2222]
// ==================================================

const numbers427 = [123, 246, 1111, 1234, 2222];

const result427 = numbers427.filter((num) => {
  const digits = String(num).split("");

  const digitSum = digits.reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum % digits.length === 0;
});

console.log(result427);

// ==================================================
// 428. Find Numbers Whose Digits Contain Exactly One Prime Digit
// Example: [1234, 2468, 1357, 8910, 2224]
// Output: [1234, 8910]
// ==================================================

const numbers428 = [1234, 2468, 1357, 8910, 2224];

const primeDigits428 = new Set(["2", "3", "5", "7"]);

const result428 = numbers428.filter((num) => {
  const primeCount = String(num)
    .split("")
    .filter((digit) => primeDigits428.has(digit)).length;

  return primeCount === 1;
});

console.log(result428);

// ==================================================
// 429. Find Numbers Whose Digits Form a Repeating Pattern
// Example: [1212, 1231, 3434, 5656, 1234]
// Output: [1212, 3434, 5656]
// ==================================================

const numbers429 = [1212, 1231, 3434, 5656, 1234];

const result429 = numbers429.filter((num) => {
  const digits = String(num);

  if (digits.length % 2 !== 0) return false;

  const middle = digits.length / 2;

  return digits.slice(0, middle) === digits.slice(middle);
});

console.log(result429);

// ==================================================
// 430. Find the Number With the Most Even Digits
// Example: [1234, 2468, 1357, 8024, 1112]
// Output: 2468
// ==================================================

const numbers430 = [1234, 2468, 1357, 8024, 1112];

const getEvenCount430 = (num) => {
  return String(num)
    .split("")
    .filter((digit) => Number(digit) % 2 === 0).length;
};

const result430 = numbers430.reduce((best, current) => {
  return getEvenCount430(current) > getEvenCount430(best)
    ? current
    : best;
}, numbers430[0]);

console.log(result430);


// ==================================================
// 431. Find Numbers Whose Digits Have a Sum of 15 or More
// Example: [456, 789, 123, 987, 234]
// Output: [789, 987]
// ==================================================

const numbers431 = [456, 789, 123, 987, 234];

const result431 = numbers431.filter((num) => {
  const digitSum = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum >= 15;
});

console.log(result431);

// ==================================================
// 432. Find Numbers Whose Digits Are All Less Than 6
// Example: [1234, 5678, 5432, 1054, 6789]
// Output: [1234, 5432, 1054]
// ==================================================

const numbers432 = [1234, 5678, 5432, 1054, 6789];

const result432 = numbers432.filter((num) => {
  return String(num)
    .split("")
    .every((digit) => Number(digit) < 6);
});

console.log(result432);

// ==================================================
// 433. Find Numbers Whose First Digit Is Smaller Than Every Other Digit
// Example: [1234, 2345, 3456, 4567, 1123]
// Output: [1234, 2345, 3456, 4567]
// ==================================================

const numbers433 = [1234, 2345, 3456, 4567, 1123];

const result433 = numbers433.filter((num) => {
  const digits = String(num).split("").map(Number);

  return digits.slice(1).every((digit) => digits[0] < digit);
});

console.log(result433);

// ==================================================
// 434. Find Numbers Whose Digits Contain Exactly Two Even Digits
// Example: [1234, 2468, 1357, 1023, 5678]
// Output: [1234, 1023]
// ==================================================

const numbers434 = [1234, 2468, 1357, 1023, 5678];

const result434 = numbers434.filter((num) => {
  const evenCount = String(num)
    .split("")
    .filter((digit) => Number(digit) % 2 === 0).length;

  return evenCount === 2;
});

console.log(result434);

// ==================================================
// 435. Find Numbers Whose Digits Are in a Symmetrical Pattern
// Example: [1221, 1231, 3443, 4564, 9889]
// Output: [1221, 3443, 9889]
// ==================================================

const numbers435 = [1221, 1231, 3443, 4564, 9889];

const result435 = numbers435.filter((num) => {
  const digits = String(num);
  const reversed = digits.split("").reverse().join("");

  return digits === reversed;
});

console.log(result435);

// ==================================================
// 436. Find Numbers Whose Digit Sum Is Greater Than 10 and Less Than 20
// Example: [456, 123, 789, 555, 246]
// Output: [456, 789, 555]
// ==================================================

const numbers436 = [456, 123, 789, 555, 246];

const result436 = numbers436.filter((num) => {
  const digitSum = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum > 10 && digitSum < 20;
});

console.log(result436);

// ==================================================
// 437. Find Numbers Whose Digits Have No Repeated Values
// Example: [1234, 1123, 5678, 9091, 2468]
// Output: [1234, 5678, 2468]
// ==================================================

const numbers437 = [1234, 1123, 5678, 9091, 2468];

const result437 = numbers437.filter((num) => {
  const digits = String(num).split("");

  return digits.length === new Set(digits).size;
});

console.log(result437);

// ==================================================
// 438. Find Numbers Whose Digit Product Is an Even Number
// Example: [123, 234, 135, 246, 111]
// Output: [234, 246]
// ==================================================

const numbers438 = [123, 234, 135, 246, 111];

const result438 = numbers438.filter((num) => {
  const digitProduct = String(num)
    .split("")
    .reduce((product, digit) => product * Number(digit), 1);

  return digitProduct % 2 === 0;
});

console.log(result438);

// ==================================================
// 439. Find Numbers Whose Digits Are in a Strictly Alternating Parity Pattern
// Example: [1234, 2143, 1357, 2468, 3214]
// Output: [1234, 2143, 3214]
// ==================================================

const numbers439 = [1234, 2143, 1357, 2468, 3214];

const result439 = numbers439.filter((num) => {
  const digits = String(num).split("").map(Number);

  return digits.every((digit, index) => {
    if (index === 0) return true;

    return digit % 2 !== digits[index - 1] % 2;
  });
});

console.log(result439);

// ==================================================
// 440. Find the Number With the Smallest Digit Product
// Example: [123, 234, 105, 222, 345]
// Output: 105
// ==================================================

const numbers440 = [123, 234, 105, 222, 345];

const getDigitProduct440 = (num) => {
  return String(num)
    .split("")
    .reduce((product, digit) => product * Number(digit), 1);
};

const result440 = numbers440.reduce((smallest, current) => {
  return getDigitProduct440(current) < getDigitProduct440(smallest)
    ? current
    : smallest;
}, numbers440[0]);

console.log(result440);

// ==================================================
// 441. Find Numbers Whose Digits Are All Divisible by 3
// Example: [369, 123, 963, 456, 999]
// Output: [369, 963, 999]
// ==================================================

const numbers441 = [369, 123, 963, 456, 999];

const result441 = numbers441.filter((num) => {
  return String(num)
    .split("")
    .every((digit) => Number(digit) % 3 === 0);
});

console.log(result441);

// ==================================================
// 442. Find Numbers Whose Digit Sum Is a Multiple of Their Last Digit
// Example: [123, 246, 369, 482, 555]
// Output: [123, 246, 369, 555]
// ==================================================

const numbers442 = [123, 246, 369, 482, 555];

const result442 = numbers442.filter((num) => {
  const digits = String(num).split("");

  const digitSum = digits.reduce((sum, digit) => sum + Number(digit), 0);
  const lastDigit = Number(digits.at(-1));

  return lastDigit !== 0 && digitSum % lastDigit === 0;
});

console.log(result442);

// ==================================================
// 443. Find Numbers Whose Digits Have Exactly Three Unique Values
// Example: [1123, 1234, 4556, 7788, 1212]
// Output: [1123, 4556]
// ==================================================

const numbers443 = [1123, 1234, 4556, 7788, 1212];

const result443 = numbers443.filter((num) => {
  return new Set(String(num)).size === 3;
});

console.log(result443);

// ==================================================
// 444. Find Numbers Whose Digits Are Alternating Between Increasing and Decreasing
// Example: [3142, 5241, 1324, 1234, 9876]
// Output: [3142, 5241, 1324]
// ==================================================

const numbers444 = [3142, 5241, 1324, 1234, 9876];

const result444 = numbers444.filter((num) => {
  const digits = String(num).split("").map(Number);

  return digits.every((digit, index) => {
    if (index < 2) return true;

    const previousDifference = digits[index - 1] - digits[index - 2];
    const currentDifference = digit - digits[index - 1];

    return previousDifference * currentDifference < 0;
  });
});

console.log(result444);

// ==================================================
// 445. Find Numbers Whose Digit Sum Is Equal to 2 Raised to the Power of Their Digit Count
// Example: [123, 1111, 2222, 1234, 4444]
// Output: [123, 1111]
// ==================================================

const numbers445 = [123, 1111, 2222, 1234, 4444];

const result445 = numbers445.filter((num) => {
  const digits = String(num).split("");

  const digitSum = digits.reduce((sum, digit) => sum + Number(digit), 0);

  return digitSum === 2 ** digits.length;
});

console.log(result445);

// ==================================================
// 446. Find Numbers Whose Digits Have Exactly One Descending Pair
// Example: [1234, 1324, 1432, 2134, 1243]
// Output: [1324, 2134, 1243]
// ==================================================

const numbers446 = [1234, 1324, 1432, 2134, 1243];

const result446 = numbers446.filter((num) => {
  const digits = String(num).split("").map(Number);

  let descendingPairs = 0;

  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] > digits[i + 1]) {
      descendingPairs++;
    }
  }

  return descendingPairs === 1;
});

console.log(result446);

// ==================================================
// 447. Find Numbers Whose Digits Have a Sum of Even Digits Greater Than Odd Digits
// Example: [1234, 2468, 1357, 1122, 5678]
// Output: [2468, 1122, 5678]
// ==================================================

const numbers447 = [1234, 2468, 1357, 1122, 5678];

const result447 = numbers447.filter((num) => {
  const digits = String(num).split("").map(Number);

  const evenSum = digits
    .filter((digit) => digit % 2 === 0)
    .reduce((sum, digit) => sum + digit, 0);

  const oddSum = digits
    .filter((digit) => digit % 2 !== 0)
    .reduce((sum, digit) => sum + digit, 0);

  return evenSum > oddSum;
});

console.log(result447);

// ==================================================
// 448. Find Numbers Whose Digits Have a Difference of Exactly 5
// Example: [1234, 1592, 2468, 5071, 6789]
// Output: [1592, 5071]
// ==================================================

const numbers448 = [1234, 1592, 2468, 5071, 6789];

const result448 = numbers448.filter((num) => {
  const digits = String(num).split("").map(Number);

  const difference = Math.max(...digits) - Math.min(...digits);

  return difference === 5;
});

console.log(result448);

// ==================================================
// 449. Find Numbers Whose Digits Form a Palindrome After Removing the Middle Digit
// Example: [12321, 12345, 45654, 98789, 123321]
// Output: [12321, 45654, 98789]
// ==================================================

const numbers449 = [12321, 12345, 45654, 98789, 123321];

const result449 = numbers449.filter((num) => {
  const digits = String(num);

  if (digits.length % 2 === 0) return false;

  const middleIndex = Math.floor(digits.length / 2);

  const withoutMiddle =
    digits.slice(0, middleIndex) + digits.slice(middleIndex + 1);

  return withoutMiddle === withoutMiddle.split("").reverse().join("");
});

console.log(result449);

// ==================================================
// 450. Find the Number With the Highest Number of Distinct Prime Digits
// Example: [2357, 1234, 5779, 3578, 2225]
// Output: 2357
// ==================================================

const numbers450 = [2357, 1234, 5779, 3578, 2225];

const primeDigits450 = new Set(["2", "3", "5", "7"]);

const getDistinctPrimeCount450 = (num) => {
  return new Set(
    [...String(num)].filter((digit) => primeDigits450.has(digit))
  ).size;
};

const result450 = numbers450.reduce((best, current) => {
  return getDistinctPrimeCount450(current) > getDistinctPrimeCount450(best)
    ? current
    : best;
}, numbers450[0]);

console.log(result450);

// ==================================================
// 451. Find Numbers Whose Digits Are All Greater Than or Equal to 4
// Example: [4567, 1234, 4895, 6789, 3456]
// Output: [4567, 4895, 6789]
// ==================================================

const numbers451 = [4567, 1234, 4895, 6789, 3456];

const result451 = numbers451.filter((num) => {
  return String(num)
    .split("")
    .every((digit) => Number(digit) >= 4);
});

console.log(result451);

// ==================================================
// 452. Find Numbers Whose First Three Digits Have an Odd Sum
// Example: [1234, 2468, 3579, 4821, 5912]
// Output: [1234, 3579, 4821]
// ==================================================

const numbers452 = [1234, 2468, 3579, 4821, 5912];

const result452 = numbers452.filter((num) => {
  const digits = String(num).split("").map(Number);

  if (digits.length < 3) return false;

  const firstThreeSum = digits
    .slice(0, 3)
    .reduce((sum, digit) => sum + digit, 0);

  return firstThreeSum % 2 !== 0;
});

console.log(result452);

// ==================================================
// 453. Find Numbers Whose Digits Have Exactly Two Prime Digits
// Example: [2354, 2468, 1357, 5723, 1112]
// Output: [2354, 5723]
// ==================================================

const numbers453 = [2354, 2468, 1357, 5723, 1112];

const primeDigits453 = new Set(["2", "3", "5", "7"]);

const result453 = numbers453.filter((num) => {
  const primeCount = String(num)
    .split("")
    .filter((digit) => primeDigits453.has(digit)).length;

  return primeCount === 2;
});

console.log(result453);

// ==================================================
// 454. Find Numbers Whose Digits Have a Sum of Squares Greater Than 100
// Example: [3456, 1234, 5678, 2222, 9876]
// Output: [3456, 5678, 9876]
// ==================================================

const numbers454 = [3456, 1234, 5678, 2222, 9876];

const result454 = numbers454.filter((num) => {
  const squareSum = String(num)
    .split("")
    .reduce((sum, digit) => sum + Number(digit) ** 2, 0);

  return squareSum > 100;
});

console.log(result454);

// ==================================================
// 455. Find Numbers Whose Digits Contain No Zero and No Five
// Example: [1234, 2468, 1357, 7891, 2046]
// Output: [1234, 2468, 7891]
// ==================================================

const numbers455 = [1234, 2468, 1357, 7891, 2046];

const result455 = numbers455.filter((num) => {
  const digits = String(num);

  return !digits.includes("0") && !digits.includes("5");
});

console.log(result455);

// ==================================================
// 456. Find Numbers Whose Digit Sum Is Equal to Their Largest Digit
// Example: [1000, 1111, 1234, 2222, 3000]
// Output: [1000, 3000]
// ==================================================

const numbers456 = [1000, 1111, 1234, 2222, 3000];

const result456 = numbers456.filter((num) => {
  const digits = String(num).split("").map(Number);

  const digitSum = digits.reduce((sum, digit) => sum + digit, 0);
  const largestDigit = Math.max(...digits);

  return digitSum === largestDigit;
});

console.log(result456);

// ==================================================
// 457. Find Numbers Whose Digits Have Exactly One Pair of Identical Adjacent Digits
// Example: [1123, 1223, 1233, 1122, 1234]
// Output: [1123, 1223, 1233]
// ==================================================

const numbers457 = [1123, 1223, 1233, 1122, 1234];

const result457 = numbers457.filter((num) => {
  const digits = String(num);
  let matchingPairs = 0;

  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] === digits[i + 1]) {
      matchingPairs++;
    }
  }

  return matchingPairs === 1;
});

console.log(result457);

// ==================================================
// 458. Find Numbers Whose Digits Are All Divisible by Their Position
// Example: [1248, 2486, 3692, 1234, 2468]
// Output: [1248, 2486]
// ==================================================

const numbers458 = [1248, 2486, 3692, 1234, 2468];

const result458 = numbers458.filter((num) => {
  const digits = String(num).split("").map(Number);

  return digits.every((digit, index) => {
    const position = index + 1;

    return digit % position === 0;
  });
});

console.log(result458);

// ==================================================
// 459. Find Numbers Whose Reverse Is Greater Than the Original Number
// Example: [123, 456, 789, 321, 120]
// Output: [123, 456, 120]
// ==================================================

const numbers459 = [123, 456, 789, 321, 120];

const result459 = numbers459.filter((num) => {
  const reversedNumber = Number(String(num).split("").reverse().join(""));

  return reversedNumber > num;
});

console.log(result459);

// ==================================================
// 460. Find the Number With the Highest Sum of Even Digits
// Example: [1234, 2468, 1357, 8024, 5678]
// Output: 2468
// ==================================================

const numbers460 = [1234, 2468, 1357, 8024, 5678];

const getEvenDigitSum460 = (num) => {
  return String(num)
    .split("")
    .filter((digit) => Number(digit) % 2 === 0)
    .reduce((sum, digit) => sum + Number(digit), 0);
};

const result460 = numbers460.reduce((best, current) => {
  return getEvenDigitSum460(current) > getEvenDigitSum460(best)
    ? current
    : best;
}, numbers460[0]);

console.log(result460);
