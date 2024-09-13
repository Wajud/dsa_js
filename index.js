//reverse a string or integer

const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

// console.log(reverseStr("Lonely at the top"));

//reverse an integer
const reverseInt = (int) => {
  if (int > 0) {
    return parseInt(int.toString().split("").reverse().join(""));
  } else {
    return Number((int * -1).toString().split("").reverse().join("")) * -1;
  }
};

// console.log(reverseInt(-123500));
// console.log(reverseInt(842));
//
//
//

//Palindrome checker
const isPalindrome = (str) => {
  return (
    str.toLowerCase().split(" ").join("") ===
    str.toLowerCase().split(" ").join("").split("").reverse().join("")
  );
};

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("Lonely"));
// console.log(isPalindrome("Do geese see God"));

//maximum character checker

//related questions:
// what is the most common character in a string?
// does string A have the same characters as string B (Anagram) ?
// Does the given string have any repeated characters in it ?

const findMaxChar = (str) => {
  const trimmedStr = str.split(" ").join("");
  const charMap = {};
  let maxCount = 0;
  let maxChar;
  for (let char of trimmedStr) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  //   for (const [key, value] of Object.entries(charMap)) {
  //     if (value > maxCount) {
  //       maxCount = value;
  //       maxChar = key;
  //     }
  //   }

  for (let key in charMap) {
    if (charMap[key] > maxCount) {
      maxCount = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
};

// console.log(findMaxChar("lonely at the top"));
//
//
//
//

// does string A have the same characters as string B (Anagram) ?

const doesStrHaveSameChar = (str1, str2) => {
  const trimmedStr1 = str1.toLowerCase().split(" ").join("");
  const trimmedStr2 = str2.toLowerCase().split(" ").join("");
  const str1CharMap = {};
  const str2CharMap = {};

  for (char of trimmedStr1) {
    if (str1CharMap.hasOwnProperty(char)) {
      str1CharMap[char]++;
    } else {
      str1CharMap[char] = 1;
    }
  }

  for (char of trimmedStr2) {
    if (str2CharMap.hasOwnProperty(char)) {
      str2CharMap[char]++;
    } else {
      str2CharMap[char] = 0;
    }
  }

  const allKeys = new Set([
    ...Object.keys(str1CharMap),
    ...Object.keys(str2CharMap),
  ]);

  return (
    allKeys.size === Object.keys(str1CharMap).length &&
    allKeys.size === Object.keys(str2CharMap).length
  );
};

// console.log(doesStrHaveSameChar("catfish", "hifsact"));
//
//
//
//

// Does the given string have any repeated characters in it ?
const isRepeatedCharacter = (str) => {
  const redStr = str.toLowerCase().split(" ").join("");
  const charMap = {};
  const repeatedChars = [];
  let maxCount = 0;
  let maxCountKey;
  for (char of redStr) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (key in charMap) {
    if (charMap[key] > 1) {
      repeatedChars.push({ key, count: charMap[key] });
    }
  }

  for (key in charMap) {
    if (charMap[key] > maxCount) {
      maxCount = charMap[key];
      maxCountKey = key;
    }
  }

  if (maxCount === 0) {
    return "No characters repeated";
  }

  return { repeatedChars, maxCountKey, maxCount };
};

// console.log(isRepeatedCharacter("Money on my mid"));
//
//
//

//Breaking an array in subarrays of given chunk size

const breakArr = (arr, size) => {
  const result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }
  return result;
};

// console.log(breakArr([12, 22, 3, 4, 5, 6, 7, 5, 3, 4, 5], 3));
// console.log(breakArr([12, 22, 3, 4, 5, 6, 7, 5, 3, 4, 5], 2));
// console.log(breakArr([12, 22, 3, 4, 5, 6, 7, 5, 3, 4, 5], 4));
//
//
//
// const writeInTitleCase = (str) => {
//   const strArr = str.trim().split("");
//   strArr[0] = strArr[0].toUpperCase();
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] === " ") {
//       strArr[i + 1] = strArr[i + 1].toUpperCase();
//     }
//   }
//   const retStr = strArr.join("");
//   console.log(retStr);
// };

//version 2
const writeInTitleCase = (str) => {
  const words = str.split(" ");
  const result = [];
  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(" ");
};

// console.log(writeInTitleCase("i am a boy"));
// console.log(writeInTitleCase("Lonely at the top"));
// console.log(
//   writeInTitleCase("titles of books, songs, movies, plays and others")
// );

//Anagrams: Strings containing the same characters in the same quantity e.g money coding and coding money, rail safety and fairy tales

const getCharMap = (str) => {
  //Step 1 : Build a Character Map for String
  const charMap = {};
  str = str.toLowerCase().replace(/[\W]/g, "");
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
};
const isAnagram = (str1, str2) => {
  //Step 1 : Build a Character Map for String1
  const charMap1 = getCharMap(str1);

  //Step 1 : Build a Character Map for String1
  const charMap2 = getCharMap(str2);

  //Step 3: Compare the length of the chacter maps
  if (Object.keys(charMap1).length !== Object.keys(charMap2).length)
    return false;
  for (let key in charMap1) {
    if (charMap1[key] !== charMap2[key]) {
      return false;
    }
  }
  return true;
};

// console.log(isAnagram("RAIL! SAFETY!", "fairy tales"));
// console.log(isAnagram("coding money", "money coding"));
// console.log(isAnagram("Happy hour", "is going"));

const sortedStr = (str) => {
  return (str = str
    .toLowerCase()
    .replace(/[\W]/g, "")
    .split("")
    .sort()
    .join(""));
};

const secondIsAnagram = (strA, strB) => {
  strA = sortedStr(strA);
  strB = sortedStr(strB);
  return strA === strB;
};

// console.log(secondIsAnagram("Rail Safety!", "fairy tales"));
//
//
//
//
//

// Write a function that returns the number of vowels in a string

const countVowels = (str) => {
  let count = 0;
  const vowelsHolder = ["a", "e", "i", "o", "u"];
  let arr = str.toLowerCase().split("");
  // for (let i = 0; i < arr.length; i++) {
  //   if (vowelsHolder.includes(arr[i])) {
  //     count++;
  //   }
  // }
  for (item of arr) {
    if (vowelsHolder.includes(item)) {
      count++;
    }
  }
  return count;
};

// console.log(countVowels("Happy Hour"));
// console.log(countVowels("Amaliora"));
// console.log(countVowels("coding money"));
// console.log(countVowels("sky myth"));

const secondCountVowels = (str) => {
  const matches = str.toLowerCase().match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

// console.log(secondCountVowels("Happy Hour"));
// console.log(secondCountVowels("Amaliora"));
// console.log(secondCountVowels("coding money"));
// console.log(secondCountVowels("sky myth"));
//
//
//
//
//

//Write a program that logs the numbers from 1 to n. But for multiples of 3, it prints "fizz" instead of the number, for multiples of 5, it prints "buzz" and for multiples of both 3 and 5, it prints "fizzbuzz"

const isfizzBuzz = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

// isfizzBuzz(17);
// isfizzBuzz(22);
// isfizzBuzz(35);
//
//
//
//
// Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character. Make sure the step has spaces on the RHS

const steps = (n) => {
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= n; col++) {
      if (col <= row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
};

// steps(5);
//
//
//
//
//
// Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the # character. Make sure the step has spaces on the both LHS and RHS

const pyramid = (n) => {
  for (let row = 0; row < n; row++) {
    line = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (
        col >= Math.floor((2 * n - 1) / 2) - row &&
        col <= Math.floor((2 * n - 1) / 2) + row
      ) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
};

// pyramid(3);
// pyramid(5)
//
//
//
//
// Write a function that accepts an integer N and returns a NxN spiral matrix
