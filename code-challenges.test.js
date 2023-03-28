// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { log } = require("console");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// Psuedo Code:
// Takes in a string as a parameter.
// I will define the mapping of the object.
// call the function with each variable as an argument.
// Iterate over each charate in the string.
// return the encoded message as a string.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical";
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook";
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric";
// // Expected output: "3cc3ntr1c"

// console.log(hiddenMessage(secretCodeWord1));
// console.log(hiddenMessage(secretCodeWord2));
// console.log(hiddenMessage(secretCodeWord3));

// // b) Create the function that makes the test pass.

// // can't seem to get this to run

// const hiddenMessage = (message) => {
//   message = message.replace(/a/g, "4");
//   message = message.replace(/e/g, "3");
//   message = message.replace(/I/g, "1");
//   message = message.replace(/o/g, "0");
//   return message;
//   return message.replace(/[aeio]/g, (c) => ({ a: 4, e: 3, I: 1, o: 0 }[c]));
// };

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// Pseudo Code
// Create a function that takes in an array of words and a single letter.
// returns an array of all the words containing that specific letter
//  attempt to use the .filter method on the input array
//  will use the .includes metyhod to check if it contains letter

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"];

const letterA = "a";
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e";
// Expected output: ["Cherry", "Blueberry", "Peach"]

// Solve for 'A'
const solve1 = missingLetter(fruitArray, letterA);
console.log(solve1);

// Solve for 'E'
const solve2 = missingLetter(fruitArray, letterE);
console.log(solve2);
// b) Create the function that makes the test pass.

const missingLetter = (words, letter) => {
  return words.filter((words) => words.includes(letter));
};

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// Pseudo Code
// Create a function that takes in an array of 5 numbers
// sort the array
// if either condition is true, return true, else return false.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3];
// Expected output: true
const hand2 = [5, 5, 3, 3, 4];
// Expected output: false
const hand3 = [5, 5, 5, 5, 4];
// Expected output: false
const hand4 = [7, 2, 7, 2, 7];
// Expected output: true

expect(sitCom(hand1)).toBe(true);
expect(sitCom(hand2)).toBe(false);
expect(sitCom(hand3)).toBe(false);
expect(sitCom(hand4)).toBe(true);

// b) Create the function that makes the test pass.

const sitCom = (hand) => {
  const counts = {};
  for (const num of hand) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  const values = Object.values(counts);
  return values.includes(2) && values.includes(3);
};
