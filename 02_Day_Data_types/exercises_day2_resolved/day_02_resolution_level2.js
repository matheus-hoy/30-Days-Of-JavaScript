// 1 - Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
const paragraf1 =
  "There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(paragraf1);

// 2 - Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
const paragraf2 =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(paragraf2);

// 3 - Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let number = 10;
if (typeof '10' == typeof number) {
  console.log('igual');
} else {
  console.log('diferente,', typeof number.toString());
}

// 4 - Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let number2 = '9.8';

if (parseFloat(number2) !== 10) {
  number2 = 10;
  console.log(number2);
}

// 5 - Check if 'on' is found in both python and jargon
let words = 'python jargon';
words.includes('on');
if (words.includes('on')) {
  console.log('TEM');
} else {
  console.log('N TEM');
}

// 6 - I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon';
sentence.includes('jargon');
if (sentence.includes('jargon')) {
  console.log('TEM jargon');
} else {
  console.log('N TEM jargon');
}

// 7 - Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));

// 8 - Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * (100 - 50)) + 50);

// 9 - Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * (255 - 0)) + 0);

// 10 - Access the 'JavaScript' string characters using a random number.
const acces = 'JavaScript';
const aleatorio = Math.floor(Math.random() * acces.length);
console.log(acces.charAt(aleatorio));

// 11 - Use console.log() and escape characters to print the following pattern.
//  1 1 1 1 1
//  2 1 2 4 8
//  3 1 3 9 27
//  4 1 4 16 64
//  5 1 5 25 125
console.log('1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125');

// 12 - Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'.
let strinBecause =
  'You cannot end a sentence with because because because is a conjunction';
console.log(strinBecause.substr(31, 23));
