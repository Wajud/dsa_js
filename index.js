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

console.log(writeInTitleCase("i am a boy"));
console.log(writeInTitleCase("Lonely at the top"));
console.log(
  writeInTitleCase("titles of books, songs, movies, plays and others")
);
