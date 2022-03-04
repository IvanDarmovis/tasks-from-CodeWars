// #1 Convert a Number to a String!         8 kyu
// We need a function that can transform a number into a string.

// My code
// function numberToString(num) {
//   // Return a string of the number here!
//   return num.toString();
// }

// const a = numberToString(999);
// console.log(a);
// console.log(typeof a);

// ----------------------------------------------------

// 2 Counting sheep...         8 kyu
// describe("Tests", () => {
//   it("test", () => {
// var array1 = [true,  true,  true,  false,
//           true,  true,  true,  true ,
//           true,  false, true,  false,
//           true,  false, false, true ,
//           true,  true,  true,  true ,
//           false, false, true,  true ];

//     Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total");
//   });
// });

// My code
// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   return arrayOfSheep.filter((el) => el).length;
// }

// console.log(countSheeps(array1));

// ----------------------------------------------------
// #3 Vowel Count         7 kyu

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let vowelsCount = str.split("").filter((el) => vowels.includes(el)).length;
//   return vowelsCount;
// }

// console.log(getCount("abracadabra"));

// ----------------------------------------------------
// #4 Remove First and Last Character         8 kyu
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.You don't have to worry with strings with less than two characters.

// function removeChar(str) {
//   const arr = str.split("");
//   arr.pop();
//   arr.shift();
//   return arr.join("");
// }

// console.log(removeChar("eloquent"));

// ----------------------------------------------------
// #5 Century From Year         8 kyu
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// function century(year) {
//   return Math.ceil(year / 100);
// }

// century(1705);

// ----------------------------------------------------
// #6 Highest and Lowest         7 kyu
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// function highAndLow(numbers) {
//   const arr = numbers.split(" ");
//   const num = arr.map((el) => Number(el));
//   const min = Math.min(...num);
//   const max = Math.max(...num);

//   return `${max} ${min}`;
// }

// console.log(highAndLow("1 2 3 4 5"));

// ----------------------------------------------------
// #7 Exes and Ohs         7 kyu
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// function XO(str) {
//   const arr = str.toLowerCase().split("");
//   const x = arr.filter((el) => el === "x").length;
//   const o = arr.filter((el) => el === "o").length;
//   if (x === o) return true;
//   return false;
// }

// ----------------------------------------------------
// #8 Grasshopper - Summation         8 kyu
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// var summation = function (num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i += 1) {
//     sum += i;
//   }
//   return sum;
// };

// ----------------------------------------------------
// #9 Beginner Series #3 Sum of Numbers         7 kyu

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// function getSum(a, b) {
//   const min = a >= b ? b : a;
//   const max = a >= b ? a : b;
//   let result = 0;
//   for (let i = min; i <= max; i += 1) result += i;
//   return result;
// }

// ----------------------------------------------------
// #10 Is this a triangle?        7 kyu

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a, b, c) {
//   const max = Math.max(a, b, c);
//   return a + b + c - max > max;
// }

// ----------------------------------------------------
// #11 You're a square!     7 kyu

// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// var isSquare = function (n) {
//   const num = Math.floor(Math.sqrt(n));
//   return num ** 2 === n;
// };

// ----------------------------------------------------
// #12 Find the smallest integer in the array    8 kyu
// Given an array of integers your solution should find the smallest integer.

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args);
//   }
// }

// ----------------------------------------------------
// #13 Regex validate PIN code    7 kyu
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// function validatePIN(pin) {
//   const arr = pin.trim().split("");
//   if (pin.length !== arr.length) return false;
//   if (arr.length === 4 || (arr.length === 6 && pin.length === arr.length)) {
//     for (let i = 0; i < arr.length; i += 1) {
//       console.log(arr[i]);
//       if (!Number(arr[i]) && Number(arr[i]) !== 0) return false;
//     }
//     return true;
//   }
//   return false;
// }
