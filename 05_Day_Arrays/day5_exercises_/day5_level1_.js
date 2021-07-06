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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

// 1 - Declare an empty array;
const arrayVazio = [];
console.log(arrayVazio);

// 2 - Declare an array with more than 5 number of elements
const morethan5 = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
console.log(morethan5);

// 3 - Find the length of your array
console.log(morethan5.length);

// 4 - Get the first item, the middle item and the last item of the array
console.log(morethan5['0']);
console.log(morethan5['2']);
console.log(morethan5['4']);

// 5 - Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedData = [
  40,
  '40',
  'vscode',
  true,
  { email: 'matheus@startaideia.com.br' },
];
console.log(mixedData);

// // 6 - Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = new Array(
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
);
// 7 - Print the array using console.log()
console.log(itCompanies);

// 8 - Print the number of companies in the array
console.log(itCompanies.length);

// 9 - Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

// 10 - Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11 - Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// 12 - Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const frase =
  itCompanies.slice(0, itCompanies.length - 1).join(', ') +
  ', and ' +
  itCompanies.slice(-1) +
  ' são empresas de T1';

console.log(frase);

// 13 - Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes('Startaideia')) {
  console.log('Startaideia se encontra na lista');
} else {
  console.log('Empresa não encontrada');
}

// 14 - Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i].includes('oo')) {
    console.log("companias com mais de um 'o':", itCompanies[i]);
  }
}
// 15 - Sort the array using sort() method
console.log(itCompanies.sort());

// 16 - Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 17 - Slice out the first 3 companies from the array
console.log(itCompanies.shift(3));

// 18 - Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, -3));

// 19 - Slice out the middle IT company or companies from the array
console.log(itCompanies.shift());

// 20 - Remove the first IT company from the array
console.log(itCompanies.shift());
// 21 - Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3, 2));
// 22 - Remove the last IT company from the array
console.log(itCompanies.pop());

// 23 - Remove all IT companies
console.log(itCompanies.slice());
