// 1 - Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge = '30 Days Of JavaScript';

// 2 - Print the string on the browser console using console.log().
console.log(challenge);

// 3 - Print the length of the string on the browser console using console.log().
let size = challenge.length
console.log(size)

// 4 - Change all the string characters to capital letters using toUpperCase() method. 
console.log(challenge.toUpperCase());

// 5 - Change all the string characters to lowercase letters using toLowerCase() method.
console.log(challenge.toLowerCase());

// 6 - Cut (slice) out the first word of the string using substr() or substring() method.
console.log(challenge.substr(10));

// 7 - Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(7));

// 8 - Check if the string contains a word Script using includes() method.
console.log(challenge.includes('a'));

// 9 - Split the string into an array using split() method.
console.log(challenge.split(""));

// 10 - Split the string 30 Days Of JavaScript at the space using split() method.
console.log(challenge.split(""));       //????????

// 11 - 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let empresas = ['Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'];
console.log(empresas);

// 12 - Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
var changed = challenge.replace(/JavaScript/g, "Python");
console.log(changed);

// 13 - What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// 14 - What is the character code of J in '30 Days Of JavaScript' string using charCodeAt().
console.log(challenge.charCodeAt('J'));

// 15 - Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript.
console.log(challenge.indexOf('a'));

// 16 - Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));





