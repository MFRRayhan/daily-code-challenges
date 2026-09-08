// ==========================================
// JavaScript Daily Challenges
// ==========================================

// ==========================================
// Task 01 — Reverse a String
// ==========================================

// Question:
// একটি function তৈরি করো যা একটি string নিয়ে
// সেটার reverse return করবে.

// Example:
// Input: "hello"
// Output: "olleh"

// Answer:

function reverseString(str) {
  return str.split("").reverse().join("");
}

// ==========================================
// Task 02 — Check Even or Odd
// ==========================================

// Question:
// একটি number even নাকি odd সেটা check করো.

// Example:
// Input: 7
// Output: "Odd"

// Answer:

function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// ==========================================
// Task 03 — Find the Largest Number
// ==========================================

// Question:
// একটি array থেকে সবচেয়ে বড় number বের করো.

// Example:
// Input: [10, 5, 25, 8, 15]
// Output: 25

// Answer:

function findLargest(numbers) {
  return Math.max(...numbers);
}

// ==========================================
// Task 04 — Count Vowels
// ==========================================

// Question:
// একটি string-এর মধ্যে কতগুলো vowel আছে সেটা count করো.

// Example:
// Input: "javascript"
// Output: 3

// Answer:

function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// ==========================================
// Task 05 — Remove Duplicates
// ==========================================

// Question:
// একটি array থেকে duplicate values remove করো.

// Example:
// Input: [1, 2, 2, 3, 3, 4]
// Output: [1, 2, 3, 4]

// Answer:

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// ==========================================
// Task 06 — Sum of Array
// ==========================================

// Question:
// একটি array-এর সব numbers-এর sum বের করো.

// Example:
// Input: [10, 20, 30, 40]
// Output: 100

// Answer:

function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// ==========================================
// Task 07 — Find the Second Largest Number
// ==========================================

// Question:
// একটি array থেকে দ্বিতীয় সর্বোচ্চ number বের করো.

// Example:
// Input: [10, 20, 5, 30, 25]
// Output: 25

// Answer:

function secondLargest(numbers) {
  const uniqueNumbers = [...new Set(numbers)];

  uniqueNumbers.sort((a, b) => b - a);

  return uniqueNumbers[1];
}

// ==========================================
// Task 08 — Check Palindrome
// ==========================================

// Question:
// একটি string palindrome কিনা check করো.

// Example:
// Input: "madam"
// Output: true

// Input: "hello"
// Output: false

// Answer:

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

// ==========================================
// Task 09 — Find Missing Number
// ==========================================

// Question:
// ১ থেকে n পর্যন্ত numbers-এর মধ্যে একটি number missing.
// Missing number খুঁজে বের করো.

// Example:
// Input: [1, 2, 3, 5]
// Output: 4

// Answer:

function findMissingNumber(numbers) {
  const n = numbers.length + 1;

  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = numbers.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

// ==========================================
// Task 10 — Character Frequency
// ==========================================

// Question:
// একটি string-এর প্রতিটি character কতবার এসেছে
// সেটা object হিসেবে return করো.

// Example:
// Input: "hello"

// Output:
// {
//   h: 1,
//   e: 1,
//   l: 2,
//   o: 1
// }

// Answer:

function charFrequency(str) {
  const frequency = {};

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  return frequency;
}

// ==========================================
// Task 11 — Find the Smallest Number
// ==========================================

// Question:
// একটি array থেকে সবচেয়ে ছোট number বের করো.

// Example:
// Input: [10, 5, 25, 8, 15]
// Output: 5

// Answer:

function findSmallest(numbers) {
  return Math.min(...numbers);
}

// ==========================================
// Task 12 — Calculate Factorial
// ==========================================

// Question:
// একটি number-এর factorial বের করো.

// Example:
// Input: 5
// Output: 120
//
// 5! = 5 × 4 × 3 × 2 × 1 = 120

// Answer:

function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

// ==========================================
// Task 13 — Check Prime Number
// ==========================================

// Question:
// একটি number prime number কিনা check করো.

// Example:
// Input: 7
// Output: true
//
// Input: 10
// Output: false

// Answer:

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// ==========================================
// Task 14 — Capitalize First Letter
// ==========================================

// Question:
// একটি string-এর প্রথম letter capital করো.

// Example:
// Input: "javascript"
// Output: "Javascript"

// Answer:

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ==========================================
// Task 15 — Count Words
// ==========================================

// Question:
// একটি sentence-এর মধ্যে মোট কতগুলো word আছে
// সেটা count করো.

// Example:
// Input: "I love JavaScript"
// Output: 3

// Answer:

function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}

// ==========================================
// Task 16 — Find Even Numbers
// ==========================================

// Question:
// একটি array থেকে সব even numbers বের করো.

// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

// Answer:

function findEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

// ==========================================
// Task 17 — Find Odd Numbers
// ==========================================

// Question:
// একটি array থেকে সব odd numbers বের করো.

// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [1, 3, 5]

// Answer:

function findOddNumbers(numbers) {
  return numbers.filter((num) => num % 2 !== 0);
}

// ==========================================
// Task 18 — Reverse Words
// ==========================================

// Question:
// একটি sentence-এর wordগুলোর order reverse করো,
// কিন্তু প্রতিটি word-এর spelling একই থাকবে.

// Example:
// Input: "I love JavaScript"
// Output: "JavaScript love I"

// Answer:

function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

// ==========================================
// Task 19 — Find Common Elements
// ==========================================

// Question:
// দুটি array-এর মধ্যে common elements বের করো.

// Example:
// Input:
// [1, 2, 3, 4]
// [3, 4, 5, 6]
//
// Output:
// [3, 4]

// Answer:

function findCommonElements(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

// ==========================================
// Task 20 — FizzBuzz
// ==========================================

// Question:
// 1 থেকে 20 পর্যন্ত numbers print করো.
//
// যদি number 3 দিয়ে divisible হয় → "Fizz"
// যদি number 5 দিয়ে divisible হয় → "Buzz"
// যদি 3 এবং 5 দুটো দিয়েই divisible হয় → "FizzBuzz"
// অন্যথায় number নিজেই print করো.

// Expected Output:
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// ...

// Answer:

function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// ==========================================
// Task 21 — Find the Longest Word
// ==========================================

// Question:
// একটি sentence থেকে সবচেয়ে বড় word বের করো.

// Example:
// Input: "I love learning JavaScript"
// Output: "JavaScript"

// Answer:

function findLongestWord(sentence) {
  const words = sentence.split(" ");

  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

// ==========================================
// Task 22 — Count Occurrences
// ==========================================

// Question:
// একটি array-তে নির্দিষ্ট একটি value কতবার এসেছে
// সেটা count করো.

// Example:
// Input:
// [1, 2, 2, 3, 2, 4], 2
//
// Output:
// 3

// Answer:

function countOccurrences(arr, value) {
  return arr.filter((item) => item === value).length;
}

// ==========================================
// Task 23 — Merge Two Arrays
// ==========================================

// Question:
// দুটি array merge করে একটি নতুন array return করো.

// Example:
// Input:
// [1, 2]
// [3, 4]
//
// Output:
// [1, 2, 3, 4]

// Answer:

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// ==========================================
// Task 24 — Check Anagram
// ==========================================

// Question:
// দুটি string anagram কিনা check করো.

// Example:
// Input:
// "listen"
// "silent"
//
// Output:
// true

// Answer:

function isAnagram(str1, str2) {
  const format = (str) =>
    str.toLowerCase().split("").sort().join("");

  return format(str1) === format(str2);
}

// ==========================================
// Task 25 — Find Maximum Occurring Character
// ==========================================

// Question:
// একটি string-এর সবচেয়ে বেশি বার আসা character বের করো.

// Example:
// Input:
// "javascript"
//
// Output:
// "a"

// Answer:

function maxOccurringCharacter(str) {
  const frequency = {};

  let maxChar = "";
  let maxCount = 0;

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;

    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// ==========================================
// Task 26 — Remove Falsy Values
// ==========================================

// Question:
// একটি array থেকে সব falsy values remove করো.

// Example:
// Input:
// [0, 1, false, 2, "", 3, null, undefined]
//
// Output:
// [1, 2, 3]

// Answer:

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

// ==========================================
// Task 27 — Flatten One Level Array
// ==========================================

// Question:
// Nested array-এর এক লেভেল flatten করো.

// Example:
// Input:
// [1, [2, 3], [4, 5], 6]
//
// Output:
// [1, 2, 3, 4, 5, 6]

// Answer:

function flattenArray(arr) {
  return arr.flat();
}

// ==========================================
// Task 28 — Generate Random Number
// ==========================================

// Question:
// min এবং max-এর মধ্যে একটি random integer generate করো.

// Example:
// Input:
// 1, 10
//
// Output:
// 7 (random)

// Answer:

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ==========================================
// Task 29 — Check Leap Year
// ==========================================

// Question:
// একটি year leap year কিনা check করো.

// Example:
// Input:
// 2024
//
// Output:
// true

// Answer:

function isLeapYear(year) {
  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0
  );
}

// ==========================================
// Task 30 — Rotate Array
// ==========================================

// Question:
// একটি array-কে k positions ডানদিকে rotate করো.

// Example:
// Input:
// [1, 2, 3, 4, 5], 2
//
// Output:
// [4, 5, 1, 2, 3]

// Answer:

function rotateArray(arr, k) {
  k %= arr.length;

  return [
    ...arr.slice(-k),
    ...arr.slice(0, -k),
  ];
}

// ==========================================
// Task 31 — Remove Falsy Values
// ==========================================

// Question:
// একটি array থেকে সব falsy values remove করো.
//
// Falsy values:
// false, 0, "", null, undefined, NaN
//
// Example:
// Input: [0, 1, false, 2, "", 3, null]
// Output: [1, 2, 3]

// Answer:

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}


// ==========================================
// Task 32 — Capitalize Every Word
// ==========================================

// Question:
// একটি sentence-এর প্রতিটি word-এর প্রথম letter
// capital করো.
//
// Example:
// Input: "hello world javascript"
// Output: "Hello World Javascript"

// Answer:

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}


// ==========================================
// Task 33 — Find the Sum of Digits
// ==========================================

// Question:
// একটি number-এর প্রতিটি digit-এর sum বের করো.
//
// Example:
// Input: 12345
// Output: 15
//
// 1 + 2 + 3 + 4 + 5 = 15

// Answer:

function sumOfDigits(num) {
  return String(Math.abs(num))
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
}


// ==========================================
// Task 34 — Check Anagram
// ==========================================

// Question:
// দুটি string anagram কিনা check করো.
//
// Example:
// Input:
// "listen"
// "silent"
//
// Output:
// true

// Answer:

function isAnagram(str1, str2) {
  const cleanStr1 = str1.toLowerCase().split("").sort().join("");
  const cleanStr2 = str2.toLowerCase().split("").sort().join("");

  return cleanStr1 === cleanStr2;
}


// ==========================================
// Task 35 — Find Numbers Greater Than Average
// ==========================================

// Question:
// একটি array-এর average-এর চেয়ে বড় numbers বের করো.
//
// Example:
// Input: [10, 20, 30, 40, 50]
//
// Average: 30
//
// Output:
// [40, 50]

// Answer:

function greaterThanAverage(numbers) {
  const average =
    numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

  return numbers.filter(num => num > average);
}


// ==========================================
// Task 36 — Flatten a Nested Array
// ==========================================

// Question:
// একটি nested array-কে single-level array-তে convert করো.
//
// Example:
// Input:
// [1, [2, 3], [4, [5, 6]]]
//
// Output:
// [1, 2, 3, 4, 5, 6]

// Answer:

function flattenArray(arr) {
  return arr.flat(Infinity);
}


// ==========================================
// Task 37 — Find the Missing Letter
// ==========================================

// Question:
// একটি alphabet sequence থেকে missing letter খুঁজে বের করো.
//
// Example:
// Input:
// ["a", "b", "c", "e", "f"]
//
// Output:
// "d"

// Answer:

function findMissingLetter(letters) {
  for (let i = 0; i < letters.length - 1; i++) {
    const current = letters[i].charCodeAt(0);
    const next = letters[i + 1].charCodeAt(0);

    if (next - current > 1) {
      return String.fromCharCode(current + 1);
    }
  }

  return null;
}


// ==========================================
// Task 38 — Rotate an Array
// ==========================================

// Question:
// একটি array-এর elements-গুলোকে নির্দিষ্ট সংখ্যক position
// ডানদিকে rotate করো.
//
// Example:
// Input:
// [1, 2, 3, 4, 5]
// Rotate: 2
//
// Output:
// [4, 5, 1, 2, 3]

// Answer:

function rotateArray(arr, positions) {
  const result = [...arr];

  for (let i = 0; i < positions; i++) {
    result.unshift(result.pop());
  }

  return result;
}


// ==========================================
// Task 39 — Find Pairs With Given Sum
// ==========================================

// Question:
// একটি array এবং একটি target number দেওয়া থাকবে.
// যেসব pair-এর sum target-এর সমান হয়,
// সেই pairগুলো বের করো.
//
// Example:
// Input:
// [2, 4, 3, 5, 7]
// Target: 7
//
// Output:
// [[2, 5], [4, 3]]

// Answer:

function findPairs(numbers, target) {
  const pairs = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        pairs.push([numbers[i], numbers[j]]);
      }
    }
  }

  return pairs;
}


// ==========================================
// Task 40 — Find the Longest Consecutive Sequence
// ==========================================

// Question:
// একটি unsorted array-তে সবচেয়ে বড় consecutive
// number sequence-এর length বের করো.
//
// Example:
// Input:
// [100, 4, 200, 1, 3, 2]
//
// Output:
// 4
//
// কারণ:
// [1, 2, 3, 4] → length = 4

// Answer:

function longestConsecutive(numbers) {
  const set = new Set(numbers);
  let longest = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}


// ==========================================
// Task 41 — Find the Intersection of Two Arrays
// ==========================================

// Question:
// দুটি array-এর মধ্যে common values বের করো.
//
// Example:
// Input:
// [1, 2, 3, 4]
// [3, 4, 5, 6]
//
// Output:
// [3, 4]

// Answer:

function findIntersection(arr1, arr2) {
  return [...new Set(arr1.filter(item => arr2.includes(item)))];
}


// ==========================================
// Task 42 — Find the Difference Between Two Arrays
// ==========================================

// Question:
// প্রথম array-তে আছে কিন্তু দ্বিতীয় array-তে নেই,
// এমন values বের করো.
//
// Example:
// Input:
// [1, 2, 3, 4]
// [2, 4, 6]
//
// Output:
// [1, 3]

// Answer:

function findDifference(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}


// ==========================================
// Task 43 — Find the Largest Difference
// ==========================================

// Question:
// একটি array-তে দুটি number-এর মধ্যে সবচেয়ে বড়
// possible difference বের করো.
//
// Example:
// Input:
// [10, 3, 15, 7, 2]
//
// Output:
// 13
//
// কারণ:
// 15 - 2 = 13

// Answer:

function largestDifference(numbers) {
  const largest = Math.max(...numbers);
  const smallest = Math.min(...numbers);

  return largest - smallest;
}


// ==========================================
// Task 44 — Count Positive, Negative and Zero
// ==========================================

// Question:
// একটি array-তে কতগুলো positive, negative এবং zero
// আছে সেটা count করো.
//
// Example:
// Input:
// [1, -2, 0, 5, -7, 0, 3]
//
// Output:
// {
//   positive: 3,
//   negative: 2,
//   zero: 2
// }

// Answer:

function countNumbers(numbers) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (const num of numbers) {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      negative++;
    } else {
      zero++;
    }
  }

  return {
    positive,
    negative,
    zero
  };
}


// ==========================================
// Task 45 — Find the First Non-Repeating Character
// ==========================================

// Question:
// একটি string-এর প্রথম এমন character খুঁজে বের করো
// যেটি শুধুমাত্র একবার এসেছে.
//
// Example:
// Input:
// "aabbcdd"
//
// Output:
// "c"

// Answer:

function firstNonRepeatingChar(str) {
  const frequency = {};

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (const char of str) {
    if (frequency[char] === 1) {
      return char;
    }
  }

  return null;
}


// ==========================================
// Task 46 — Find the First Repeating Character
// ==========================================

// Question:
// একটি string-এর প্রথম repeating character খুঁজে বের করো.
//
// Example:
// Input:
// "abcdde"
//
// Output:
// "d"

// Answer:

function firstRepeatingChar(str) {
  const seen = new Set();

  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }

    seen.add(char);
  }

  return null;
}


// ==========================================
// Task 47 — Move Zeros to the End
// ==========================================

// Question:
// একটি array-এর সব zero-কে array-এর শেষে নিয়ে যাও.
// অন্য numbers-এর order একই রাখতে হবে.
//
// Example:
// Input:
// [0, 1, 0, 3, 12]
//
// Output:
// [1, 3, 12, 0, 0]

// Answer:

function moveZerosToEnd(numbers) {
  const nonZeros = numbers.filter(num => num !== 0);
  const zeros = numbers.filter(num => num === 0);

  return [...nonZeros, ...zeros];
}


// ==========================================
// Task 48 — Find the Maximum Sum Subarray
// ==========================================

// Question:
// একটি array-এর consecutive elements-এর মধ্যে
// সবচেয়ে বড় possible sum বের করো.
//
// Example:
// Input:
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//
// Output:
// 6
//
// কারণ:
// [4, -1, 2, 1] → 6

// Answer:

function maxSubarraySum(numbers) {
  let currentSum = numbers[0];
  let maxSum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    currentSum = Math.max(numbers[i], currentSum + numbers[i]);

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}


// ==========================================
// Task 49 — Chunk an Array
// ==========================================

// Question:
// একটি array এবং একটি size দেওয়া থাকবে.
// Array-টিকে নির্দিষ্ট size-এর ছোট ছোট array-তে ভাগ করো.
//
// Example:
// Input:
// [1, 2, 3, 4, 5, 6, 7]
// Size: 3
//
// Output:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7]
// ]

// Answer:

function chunkArray(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}


// ==========================================
// Task 50 — Find the Second Smallest Number
// ==========================================

// Question:
// একটি array থেকে দ্বিতীয় সবচেয়ে ছোট unique number
// বের করো.
//
// Example:
// Input:
// [10, 5, 8, 5, 3, 10]
//
// Output:
// 5

// Answer:

function secondSmallest(numbers) {
  const uniqueNumbers = [...new Set(numbers)];

  uniqueNumbers.sort((a, b) => a - b);

  return uniqueNumbers[1];
}


// ==========================================
// Task 51 — Reverse an Array Without reverse()
// ==========================================

// Question:
// built-in reverse() method ব্যবহার না করে একটি array
// reverse করো.
//
// Example:
// Input:
// [1, 2, 3, 4, 5]
//
// Output:
// [5, 4, 3, 2, 1]

// Answer:

function reverseArray(arr) {
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}


// ==========================================
// Task 52 — Check if Array is Sorted
// ==========================================

// Question:
// একটি array ascending order-এ sorted কিনা check করো.
//
// Example:
// Input:
// [1, 2, 3, 4, 5]
//
// Output:
// true
//
// Input:
// [1, 3, 2, 4, 5]
//
// Output:
// false

// Answer:

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}


// ==========================================
// Task 53 — Find the Most Frequent Character
// ==========================================

// Question:
// একটি string-এর মধ্যে সবচেয়ে বেশি বার আসা
// character খুঁজে বের করো.
//
// Example:
// Input:
// "javascript"
//
// Output:
// "a"

// Answer:

function mostFrequentChar(str) {
  const frequency = {};
  let mostFrequent = "";
  let maxCount = 0;

  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;

    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      mostFrequent = char;
    }
  }

  return mostFrequent;
}


// ==========================================
// Task 54 — Remove a Specific Value
// ==========================================

// Question:
// একটি array থেকে নির্দিষ্ট একটি value-এর সব occurrence
// remove করো.
//
// Example:
// Input:
// [1, 2, 3, 2, 4, 2]
// Remove: 2
//
// Output:
// [1, 3, 4]

// Answer:

function removeValue(arr, value) {
  return arr.filter(item => item !== value);
}


// ==========================================
// Task 55 — Find the Longest Common Prefix
// ==========================================

// Question:
// একটি array of strings থেকে সব string-এর মধ্যে
// common starting part খুঁজে বের করো.
//
// Example:
// Input:
// ["flower", "flow", "flight"]
//
// Output:
// "fl"

// Answer:

function longestCommonPrefix(words) {
  if (words.length === 0) {
    return "";
  }

  let prefix = words[0];

  for (let i = 1; i < words.length; i++) {
    while (!words[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}


// ==========================================
// Task 56 — Find All Prime Numbers
// ==========================================

// Question:
// 1 থেকে একটি নির্দিষ্ট number পর্যন্ত সব prime number
// বের করো.
//
// Example:
// Input:
// 20
//
// Output:
// [2, 3, 5, 7, 11, 13, 17, 19]

// Answer:

function findPrimes(limit) {
  const primes = [];

  for (let num = 2; num <= limit; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }
  }

  return primes;
}


// ==========================================
// Task 57 — Generate Fibonacci Sequence
// ==========================================

// Question:
// প্রথম n সংখ্যার Fibonacci sequence তৈরি করো.
//
// Example:
// Input:
// 7
//
// Output:
// [0, 1, 1, 2, 3, 5, 8]

// Answer:

function fibonacci(n) {
  const result = [];

  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);

    const next = a + b;

    a = b;
    b = next;
  }

  return result;
}


// ==========================================
// Task 58 — Find the Largest Sum of Two Numbers
// ==========================================

// Question:
// একটি array থেকে দুটি সবচেয়ে বড় number-এর sum
// বের করো.
//
// Example:
// Input:
// [10, 5, 20, 8, 15]
//
// Output:
// 35
//
// কারণ:
// 20 + 15 = 35

// Answer:

function largestPairSum(numbers) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of numbers) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  }

  return largest + secondLargest;
}


// ==========================================
// Task 59 — Convert First Letter of Each Word
// ==========================================

// Question:
// একটি sentence-এর প্রতিটি word-এর প্রথম letter
// uppercase করো.
//
// Example:
// Input:
// "javascript is awesome"
//
// Output:
// "Javascript Is Awesome"

// Answer:

function capitalizeSentence(sentence) {
  return sentence
    .split(" ")
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}


// ==========================================
// Task 60 — Find the Majority Element
// ==========================================

// Question:
// একটি array-তে এমন কোনো element আছে কিনা খুঁজে বের করো
// যেটি array-এর অর্ধেকের বেশি সময় এসেছে.
//
// Example:
// Input:
// [2, 2, 1, 1, 1, 2, 2]
//
// Output:
// 2

// Answer:

function findMajorityElement(numbers) {
  const frequency = {};

  for (const num of numbers) {
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > numbers.length / 2) {
      return num;
    }
  }

  return null;
}

// ==========================================
// Task 61 — Find the Lowest Missing Positive
// ==========================================

// Question:
// একটি array থেকে সবচেয়ে ছোট positive integer খুঁজে বের করো
// যেটি array-তে নেই.
//
// Example:
// Input:
// [3, 4, -1, 1]
//
// Output:
// 2

// Answer:

function findSmallestMissingPositive(numbers) {
  let num = 1;

  while (numbers.includes(num)) {
    num++;
  }

  return num;
}


// ==========================================
// Task 62 — Check if Two Arrays Are Equal
// ==========================================

// Question:
// দুটি array-এর values এবং order একই কিনা check করো.
//
// Example:
// Input:
// [1, 2, 3]
// [1, 2, 3]
//
// Output:
// true
//
// Input:
// [1, 2, 3]
// [3, 2, 1]
//
// Output:
// false

// Answer:

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((value, index) => value === arr2[index]);
}


// ==========================================
// Task 63 — Find the Median
// ==========================================

// Question:
// একটি array-এর median value বের করো.
//
// Example:
// Input:
// [1, 3, 5, 7, 9]
//
// Output:
// 5
//
// Input:
// [1, 2, 3, 4]
//
// Output:
// 2.5

// Answer:

function findMedian(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 !== 0) {
    return sorted[middle];
  }

  return (sorted[middle - 1] + sorted[middle]) / 2;
}


// ==========================================
// Task 64 — Find the Longest Word Length
// ==========================================

// Question:
// একটি sentence-এর সবচেয়ে বড় word-এর length বের করো.
//
// Example:
// Input:
// "I love programming"
//
// Output:
// 11

// Answer:

function longestWordLength(sentence) {
  const words = sentence.split(" ");

  return Math.max(...words.map(word => word.length));
}


// ==========================================
// Task 65 — Swap Two Variables
// ==========================================

// Question:
// একটি temporary variable ব্যবহার না করে
// দুটি variables-এর value swap করো.
//
// Example:
// Input:
// a = 10
// b = 20
//
// Output:
// a = 20
// b = 10

// Answer:

function swapValues(a, b) {
  [a, b] = [b, a];

  return { a, b };
}


// ==========================================
// Task 66 — Find Numbers That Appear Only Once
// ==========================================

// Question:
// একটি array থেকে যেসব number শুধুমাত্র একবার এসেছে,
// সেগুলো বের করো.
//
// Example:
// Input:
// [1, 2, 2, 3, 4, 4, 5]
//
// Output:
// [1, 3, 5]

// Answer:

function findUniqueNumbers(numbers) {
  const frequency = {};

  for (const num of numbers) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  return numbers.filter(num => frequency[num] === 1);
}


// ==========================================
// Task 67 — Find the Longest Increasing Subsequence
// ==========================================

// Question:
// একটি array-এর মধ্যে increasing order-এ থাকা
// সবচেয়ে বড় subsequence-এর length বের করো.
//
// Example:
// Input:
// [10, 9, 2, 5, 3, 7, 101, 18]
//
// Output:
// 4
//
// কারণ:
// [2, 3, 7, 101] → length 4

// Answer:

function longestIncreasingSubsequence(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const dp = new Array(numbers.length).fill(1);

  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}


// ==========================================
// Task 68 — Group Words by Length
// ==========================================

// Question:
// একটি array of words-কে তাদের length অনুযায়ী group করো.
//
// Example:
// Input:
// ["cat", "dog", "apple", "hi", "car"]
//
// Output:
// {
//   2: ["hi"],
//   3: ["cat", "dog", "car"],
//   5: ["apple"]
// }

// Answer:

function groupWordsByLength(words) {
  const result = {};

  for (const word of words) {
    const length = word.length;

    if (!result[length]) {
      result[length] = [];
    }

    result[length].push(word);
  }

  return result;
}


// ==========================================
// Task 69 — Find the Most Common Word
// ==========================================

// Question:
// একটি sentence-এর মধ্যে সবচেয়ে বেশি বার আসা word
// খুঁজে বের করো.
//
// Example:
// Input:
// "I love coding and I love JavaScript"
//
// Output:
// "love"

// Answer:

function mostCommonWord(sentence) {
  const words = sentence.toLowerCase().split(/\s+/);
  const frequency = {};

  let mostCommon = "";
  let maxCount = 0;

  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;

    if (frequency[word] > maxCount) {
      maxCount = frequency[word];
      mostCommon = word;
    }
  }

  return mostCommon;
}


// ==========================================
// Task 70 — Validate Parentheses
// ==========================================

// Question:
// একটি string-এর parentheses সঠিকভাবে balanced কিনা
// check করো.
//
// Example:
// Input:
// "({[]})"
//
// Output:
// true
//
// Input:
// "({[})"
//
// Output:
// false

// Answer:

function isValidParentheses(str) {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for (const char of str) {
    if (["(", "{", "["].includes(char)) {
      stack.push(char);
    } else if ([")", "}", "]"].includes(char)) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// ==========================================
// 71. Find the Smallest Difference Between Two Arrays
// ==========================================
// Question:
// Given two arrays, find the smallest absolute difference
// between any number from the first array and any number
// from the second array.
//
// Example:
// [1, 5, 10] and [2, 8, 20]
// Output: 1

function smallestDifference(arr1, arr2) {
  let minDiff = Infinity;

  for (let num1 of arr1) {
    for (let num2 of arr2) {
      minDiff = Math.min(minDiff, Math.abs(num1 - num2));
    }
  }

  return minDiff;
}

console.log(smallestDifference([1, 5, 10], [2, 8, 20]));


// ==========================================
// 72. Count Even and Odd Numbers
// ==========================================
// Question:
// Count how many even and odd numbers are present in an array.
//
// Example:
// [1, 2, 3, 4, 5, 6]
// Output: { even: 3, odd: 3 }

function countEvenOdd(numbers) {
  let even = 0;
  let odd = 0;

  for (let num of numbers) {
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return { even, odd };
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));


// ==========================================
// 73. Find the Longest Substring Without Repeating Characters
// ==========================================
// Question:
// Find the length of the longest substring that contains
// no repeated characters.
//
// Example:
// "abcabcbb"
// Output: 3

function longestUniqueSubstring(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }

    set.add(str[right]);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb"));


// ==========================================
// 74. Find the Product of All Numbers
// ==========================================
// Question:
// Return the product of all numbers in an array.
//
// Example:
// [2, 3, 4]
// Output: 24

function productOfArray(numbers) {
  let product = 1;

  for (let num of numbers) {
    product *= num;
  }

  return product;
}

console.log(productOfArray([2, 3, 4]));


// ==========================================
// 75. Find Numbers Between Two Values
// ==========================================
// Question:
// Given an array and a range, return all numbers
// that are between the minimum and maximum values.
//
// Example:
// [1, 5, 8, 12, 15], min = 5, max = 12
// Output: [5, 8, 12]

function numbersInRange(numbers, min, max) {
  return numbers.filter(num => num >= min && num <= max);
}

console.log(numbersInRange([1, 5, 8, 12, 15], 5, 12));


// ==========================================
// 76. Find the Longest Number
// ==========================================
// Question:
// Given an array of numbers, find the number
// that contains the most digits.
//
// Example:
// [12, 345, 67, 8901]
// Output: 8901

function longestNumber(numbers) {
  let result = numbers[0];

  for (let num of numbers) {
    if (String(Math.abs(num)).length > String(Math.abs(result)).length) {
      result = num;
    }
  }

  return result;
}

console.log(longestNumber([12, 345, 67, 8901]));


// ==========================================
// 77. Find Common Characters
// ==========================================
// Question:
// Given two strings, return the characters that appear
// in both strings.
//
// Example:
// "hello", "world"
// Output: ["l", "o"]

function commonCharacters(str1, str2) {
  let set1 = new Set(str1);
  let result = [];

  for (let char of new Set(str2)) {
    if (set1.has(char)) {
      result.push(char);
    }
  }

  return result;
}

console.log(commonCharacters("hello", "world"));


// ==========================================
// 78. Check if a Number is Perfect
// ==========================================
// Question:
// A perfect number is a number whose positive divisors
// excluding itself add up to the number.
//
// Example:
// 6 → 1 + 2 + 3 = 6
// Output: true

function isPerfectNumber(num) {
  if (num <= 1) return false;

  let sum = 1;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;

      if (i !== num / i) {
        sum += num / i;
      }
    }
  }

  return sum === num;
}

console.log(isPerfectNumber(6));


// ==========================================
// 79. Find the Longest Repeated Character
// ==========================================
// Question:
// Find the character that appears consecutively
// for the longest time.
//
// Example:
// "aabbbccccd"
// Output: "c"

function longestRepeatedCharacter(str) {
  if (str.length === 0) return null;

  let currentChar = str[0];
  let currentCount = 1;

  let longestChar = str[0];
  let longestCount = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      currentCount++;
    } else {
      currentChar = str[i];
      currentCount = 1;
    }

    if (currentCount > longestCount) {
      longestCount = currentCount;
      longestChar = currentChar;
    }
  }

  return longestChar;
}

console.log(longestRepeatedCharacter("aabbbccccd"));


// ==========================================
// 80. Find Two Numbers With the Largest Product
// ==========================================
// Question:
// Find the two numbers in an array whose product is largest.
//
// Example:
// [-10, -5, 2, 3]
// Output: [-10, -5]
// Product: 50

function largestProductPair(numbers) {
  let maxProduct = -Infinity;
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let product = numbers[i] * numbers[j];

      if (product > maxProduct) {
        maxProduct = product;
        result = [numbers[i], numbers[j]];
      }
    }
  }

  return result;
}

console.log(largestProductPair([-10, -5, 2, 3]));


// ==========================================
// 81. Find the Sum of Even Numbers
// ==========================================
// Question:
// Return the sum of all even numbers in an array.
//
// Example:
// [1, 2, 3, 4, 5, 6]
// Output: 12

function sumOfEvenNumbers(numbers) {
  let sum = 0;

  for (let num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));


// ==========================================
// 82. Find the Sum of Odd Numbers
// ==========================================
// Question:
// Return the sum of all odd numbers in an array.
//
// Example:
// [1, 2, 3, 4, 5]
// Output: 9

function sumOfOddNumbers(numbers) {
  let sum = 0;

  for (let num of numbers) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }

  return sum;
}

console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));


// ==========================================
// 83. Reverse a Number
// ==========================================
// Question:
// Reverse the digits of a number.
//
// Example:
// 12345
// Output: 54321

function reverseNumber(num) {
  return Number(String(num).split("").reverse().join(""));
}

console.log(reverseNumber(12345));


// ==========================================
// 84. Check if a Number is a Palindrome
// ==========================================
// Question:
// Check whether a number reads the same forward and backward.
//
// Example:
// 121
// Output: true

function isNumberPalindrome(num) {
  let str = String(num);
  let reversed = str.split("").reverse().join("");

  return str === reversed;
}

console.log(isNumberPalindrome(121));


// ==========================================
// 85. Find the GCD of Two Numbers
// ==========================================
// Question:
// Find the Greatest Common Divisor (GCD) of two numbers.
//
// Example:
// 12, 18
// Output: 6

function findGCD(a, b) {
  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return Math.abs(a);
}

console.log(findGCD(12, 18));


// ==========================================
// 86. Find the LCM of Two Numbers
// ==========================================
// Question:
// Find the Least Common Multiple (LCM) of two numbers.
//
// Example:
// 4, 6
// Output: 12

function findLCM(a, b) {
  function gcd(x, y) {
    while (y !== 0) {
      let remainder = x % y;
      x = y;
      y = remainder;
    }

    return Math.abs(x);
  }

  return Math.abs(a * b) / gcd(a, b);
}

console.log(findLCM(4, 6));


// ==========================================
// 87. Count Digits in a Number
// ==========================================
// Question:
// Count how many digits a number contains.
//
// Example:
// 123456
// Output: 6

function countDigits(num) {
  return Math.abs(num).toString().length;
}

console.log(countDigits(123456));


// ==========================================
// 88. Find the Sum of Digits
// ==========================================
// Question:
// Find the sum of all digits in a number.
//
// Example:
// 12345
// Output: 15

function sumOfDigits(num) {
  let digits = Math.abs(num).toString();
  let sum = 0;

  for (let digit of digits) {
    sum += Number(digit);
  }

  return sum;
}

console.log(sumOfDigits(12345));


// ==========================================
// 89. Find the Missing Number
// ==========================================
// Question:
// An array contains numbers from 1 to n with one number missing.
// Find the missing number.
//
// Example:
// [1, 2, 3, 5, 6]
// Output: 4

function findMissingNumber(numbers) {
  let n = numbers.length + 1;
  let expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let num of numbers) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 3, 5, 6]));


// ==========================================
// 90. Find the Duplicate Number
// ==========================================
// Question:
// An array contains numbers where one number appears more than once.
// Find the duplicate number.
//
// Example:
// [1, 3, 4, 2, 2]
// Output: 2

function findDuplicate(numbers) {
  let seen = new Set();

  for (let num of numbers) {
    if (seen.has(num)) {
      return num;
    }

    seen.add(num);
  }

  return null;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
