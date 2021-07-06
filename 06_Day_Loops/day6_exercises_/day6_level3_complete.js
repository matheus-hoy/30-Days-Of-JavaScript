// 1 - Copy countries array(Avoid mutation)
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

// 2 - Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// const SortedCountries = countries.sort();
// console.log(SortedCountries);

// 3 - Sort the webTechs array and mernStack array
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ];

// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// console.log(webTechs.sort());
// console.log(mernStack.sort());

// 4 - Extract all the countries contain the word 'land' from the countries array and print it as array
// let arr = [];
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].match(/land/gi)) {
//     arr.push(countries[i]);
//   }
// }
// console.log(arr);

// 5 - Find the country containing the hightest number of characters in the countries array
// let maior = '';
// for (let i = 0; i < countries.length; i++) {
//   if (maior.length < countries[i].length) {
//     maior = countries[i];
//   }
// }
// console.log(maior);

// 6 - Repetiu a 4

// 7 - Extract all the countries containing only four characters from the countries array and print it as array
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length == 4) {
//     console.log(countries[i]);
//   }
// }

// 8 - Extract all the countries containing two or more words from the countries array and print it as array
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i].length >= 2) {
//     console.log(countries[i]);
//   }
// }

// 9 - Reverse the countries array and capitalize each country and stored it as an array
// const newArray = countries.reverse();
// console.log(newArray);
