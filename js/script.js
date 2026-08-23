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
