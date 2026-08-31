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
