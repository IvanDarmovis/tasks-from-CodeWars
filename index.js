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
