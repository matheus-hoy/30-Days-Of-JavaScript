// 1 - Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
const { countries } = require('../data/countries');
const { webTechs } = require('../data/web_techs');

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

for (let index = 0; index < webTechs.length; index++) {
  console.log(webTechs[index]);
}

// 4 - In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const existePais = countries.includes('Ethiopia');

if (existePais == true) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}

// 5 - In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const existesass = webTechs.includes('Sass');
const addsass = webTechs.push('Sass');
if (existesass === true) {
  console.log('Sass');
} else {
  console.log('Sass');
}

// 1 - level 3 - Slice the first ten countries from the countries array
console.log(countries.splice(0, 10));

// 2 - level 3 - Find the middle country(ies) in the countries array
let middleCountries = Math.floor(countries.length / 2);
console.log(middleCountries);
console.log(countries.splice(91, 1));

// 3 - level 3 - Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const firstHalf = countries.splice(0, middleCountries);
const secondHalf = countries.splice(-middleCountries);
console.log(firstHalf, secondHalf);
