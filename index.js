//OnlyOdds
// Create an arry to store numbers
// Loop through the array
// chech if number is odd
// If its odd, push to new arrayfor odd numbers
// If its even it will go back
// show the odd numbers result

// function filterOddNumbers(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       result.push(arr[i]);
//     }
//   }

//   if (result.length === 1) {
//     return [result[0]];
//   }

//   return result;
// }

// console.log(filterOddNumbers([2, 4, 6, 8, 11, 20, 15, 22]));
// console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(filterOddNumbers([70, 42, 55, 81, 21, 91, 34]));
// console.log(filterOddNumbers([2, 4, 6, 8, 10, 11, 12]));

//vowel vs Consonant
//make variables for consonants and vowels and count them
//make a string for the vowels so js knows what to look for
// loop through each vowel to check words
//check if letter is a vowel or consonant

// function countConsonantsAndVowels(inputString) {
//   let consonants = 0;
//   let vowels = 0;

//   const vowelString = "aeiou";

//   for (let i = 0; i < inputString.length; i++) {
//     const char = inputString[i];

//     if (vowelString.includes(char)) {
//       vowels++;
//     } else if (char >= "a" && char <= "z") {
//       consonants++;
//     }
//   }

//   console.log(
//     `${inputString} has ${consonants} consonants and ${vowels} vowels`
//   );
// }

// countConsonantsAndVowels("hello");
// countConsonantsAndVowels("ukelele");
// countConsonantsAndVowels("awesome");
// countConsonantsAndVowels("onomonopia");
// countConsonantsAndVowels("textbook");

// Reverse Array
// make array for different order
// go throug 1st array to reverse
//pushg to new array

// function reverseArray(arr) {
//   let reversedArray = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }

//   return reversedArray;
// }

// console.log(reverseArray([1, 2, 3]));
// console.log(reverseArray([1, 3, 5, 7, 9, 11]));
// console.log(reverseArray([20, 50, 30, 60, 200]));
// console.log(reverseArray([1, -1, 2, -3, 5, -8, 13]));

//FizzBuzz
//Create a JavaScript code that prints each number from 1 to 100 on a new line.
//For each multiple of 3, print "Fizz" instead of the number.
//For each multiple of 5, print "Buzz" instead of the number.
//For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
}
