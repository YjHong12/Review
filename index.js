// Only Odds
let input = [2, 4, 6, 8, 11, 20, 15, 22];
let odd = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 !== 0) {
    odd.push(input[i]);
  }
}
console.log(odd);

// Vowel vs Consonant -------------------
let input2 = "hello";
let vowels = 0;
let consonant = 0;

for (let x = 0; x < input2.length; x++) {
  if (
    input2[x] === "a" ||
    input2[x] === "e" ||
    input2[x] === "i" ||
    input2[x] === "o" ||
    input2[x] === "u"
  ) {
    vowels++;
  } else {
    consonant++;
  }
}
console.log(
  input2 + " has " + consonant + " consonants and " + vowels + " vowels"
);

// Reverse Array -------------------
let input3 = [1, 2, 3];
let reverse = [];

for (let n = 0; n < input3.length; n++) {
  reverse.unshift(input3[n]);
}
console.log(reverse);

// FizzBuzz --------------------
// Print Fizz for multiples of 3, Buzz for multiples of 5, and FizzBuzz for multiples of both
for (let y = 1; y <= 100; y++) {
  if (y % 3 !== 0 && y % 5 !== 0) {
    console.log(y);
  } else if (y % 3 === 0 && y % 5 === 0) {
    console.log("FizzBuzz");
  } else if (y % 3 === 0) {
    console.log("Fizz");
  } else if (y % 5 === 0) {
    console.log("Buzz");
  }
}

// Reverse String: -------------
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Find the Largest Number: ------

function findLargestNumber(numbers) { 
    let largestNumber = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
         if (numbers[i] > largestNumber) { 
            largestNumber = numbers[i]; 
        } 
    } return largestNumber; 
} 

// Find Missing Number: ------------------
function findMissingNumber(nums) {
  const n = nums.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

// Factorial: -------------
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Find Prime:
function isPrime(number) { 
    if (number <= 1) { 
        return false; } 
        for (let i = 2; i <= Math.sqrt(number); i++) { 
            if (number % i === 0) 
            { 
                return false; 
            } 
        } 
            return true; 
        } 

// Remove Duplicates: ----------
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// 'map' function new array ------
function myMap(arr, callback) {
    const mappedArray = [];
    for (let i=0; i<arr.length; i++) {
        mappedArray.push(callback(arr[i], i, arr));
    }
    return mappedArray
}

// Check for Palindrome: -------------
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}
// [^A-Z] matches anything that is not enclosed between A and Z
// [^a-z] matches anything that is not enclosed between a and z
// [^0-9] matches anything that is not enclosed between 0 and 9
// [^_] matches anything that does not enclose _

// Two Sum: -----
function twoSum(nums, target) {
  const numToIndex = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex.hasOwnProperty(complement)) {
      return [numToIndex[complement], i];
    }
    numToIndex[nums[i]] = i;
  }
  return null;
}

// Anagram Check: ----------
function areAnagrams(str1, str2) {
  const sortedStr1 = str.split("").sort().join("");
  const sortedStr2 = str.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

// Fibonacci Sequence: -------
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

// Merge Two Arrays: -----
function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Object Manipulation ----------
function removeNullProperties(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && (obj[key] === null obj[key] === undefined)) {
            delete obj[key];
        }
    }
}

// Promise Handling: chain promises to handle async operations
function fetchData(url) {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
}