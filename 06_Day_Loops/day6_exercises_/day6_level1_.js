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

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// 1 - Iterate 0 to 10 using for loop, do the same using while and do while loop
function level1day6ex1a() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}
// level1day6ex1a();

function level1day6ex1b() {
  let i = 0;
  while (i >= 10) {
    console.log(i);
    i++;
  }
}
// level1day6ex1b()

function level1day6ex1c() {
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
}
// level1day6ex1c()

// 2 - Iterate 10 to 0 using for loop, do the same using while and do while loop
function level1day6ex2a() {
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
}
// level1day6ex2a()
function level1day6ex2b() {
  let i = 10;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
// level1day6ex2b();

function level1day6ex2c() {
  let i = 10;
  do {
    console.log(i);
    i--;
  } while (i >= 0);
}
// level1day6ex2c();
// 3 - Iterate 0 to n using for loop

// 4 - Write a loop that makes the following pattern using console.log():
function level1day6ex4() {
  for (let i = 1; i <= 7; i++) {
    console.log('#'.repeat(i));
  }
}
// level1day6ex4()
// 5 - Use loop to print the following pattern:
function level1day6ex5() {
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${'x'} ${i} = ${i * i}`);
  }
}
// level1day6ex5()
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// 6 - Using loop print the following pattern
function level1day6ex6() {
  for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i * i} = ${i * i * i}`);
  }
}
// level1day6ex6();
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// 7 - Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }
// 8 - Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }
// 9 - Use for loop to iterate from 0 to 100 and print only prime numbers
// for (let i = 1; i <= 100; i++) {
//   if ((i = i + 2 / 2)) {
//     console.log(i);
//   }
// }
// function primo(num) {
//   if (num < 2) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) return false;
//   }
//   return true;
// }
// for (let i = 0; i < 100; i++) {
//   if (primo(i)) console.log(i);
// }

// 10 - Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// The sum of all numbers from 0 to 100 is 5050.
// let soma = 0;
// for (let i = 1; i <= 100; i++) {
//   soma += i;
// }
// console.log(soma);

// 11 - Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// let sum = 0;
// for (let i = 0; i <= 100; i += 2) {
//   sum += i;
// }
// console.log(sum);

// 12 - Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// [2550, 2500]
// let sum = 0;
// for (let i = 0; i <= 100; i += 2) {
//   sum += i;
// }
// let sum2 = 0;
// for (let i = 1; i <= 99; i += 2) {
//   sum2 += i;
// }
// console.log(`${sum}, ${sum2}`);

// 13 - Develop a small script which generate array of 5 random numbers
// for (let i = 1; i <= 5; i++) {
//   console.log(Math.random() * 10);
// }

// 14 - Develop a small script which generate array of 5 random numbers and the numbers must be unique

// function generateRan() {
//   let max = 5;
//   let random = [];
//   for (let i = 0; i < max; i++) {
//     let temp = Math.floor(Math.random() * max);
//     if (random.indexOf(temp) == -1) {
//       random.push(temp);
//     } else i--;
//   }
//   console.log(random);
// }
// console.log(generateRan());

// 15 - Develop a small script which generate a six characters random id:
// 5j2khz

let texto = '';
const aleat = 'abcdefghijklmnopqrstuvwxyz0123456789';

for (let i = 0; i < 6; i++) {
  texto += aleat.charAt(Math.floor(Math.random() * aleat.length));
}
console.log(texto);
