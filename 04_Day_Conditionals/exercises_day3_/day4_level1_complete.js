// 1 - Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.
function exercise1() {
  const idade = prompt('Digite sua idade: ');

  if (idade >= 18) {
    console.log('Você pode dirigir!');
  } else {
    console.log('Para você dirigir faltam', Math.abs(idade - 18), ' anos');
  }
}
// // ******************* (USE IN MAIN.JS) *********************

// 2 - Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.
function exercise2() {
  const myAge = 26;
  let yourAge = prompt('Digite sua idade: ');

  if (myAge > yourAge) {
    console.log('Eu sou', Math.abs(myAge - yourAge), 'mais velho que você');
  } else if (myAge < yourAge) {
    console.log('você é', Math.abs(yourAge - myAge), 'mais velho do que eu');
  } else {
    console.log('Nós temos a mesma idade.');
  }
}
// // ******************* (USE IN MAIN.JS) *********************

// 3 - If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// *using if else
// *ternary operator.
//   let a = 4
//   let b = 3
//   4 is greater than 3
function exercise3maneira1() {
  const a = 4;
  const b = 3;
  let condition =
    a > b ? console.log('A é maior que B.') : console.log('A é menor que B.');
}

function exercise3maneira2() {
  const a = 4;
  const b = 5;
  if (a > 3) {
    console.log('a é maior que 3');
  } else if (a < 3) {
    console.log('a é menor que 3');
  } else {
    console.log('a e 3 são iguais');
  }
}
console.log(exercise3maneira2());

// 4 - Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.
function exercise4() {
  const parOuImpar = 6;
  if (parOuImpar % 2 == 0) {
    console.log('O numero é Par');
  } else {
    console.log('O número é Impar');
  }
}
