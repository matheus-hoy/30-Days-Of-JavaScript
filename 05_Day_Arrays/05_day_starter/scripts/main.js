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
