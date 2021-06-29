// _______________LEVEL 1________________
// this is your main.js script
// 1 - Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
function exercise3() {
  const idade = prompt('Digite sua idade: ');

  if (idade >= 18) {
    console.log('Você pode dirigir!');
  } else {
    console.log('Para você dirigir faltam', Math.abs(idade - 18), ' anos');
  }
}
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

// _______________LEVEL 2________________

// - 2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
function exercise2level2() {
  let monthName = prompt('Digite o mês atual:');
  monthName.toLowerCase();
  if (
    monthName === 'setembro' ||
    monthName === 'outubro' ||
    monthName === 'novembro'
  ) {
    console.log('outono');
  } else if (
    monthName === 'dezembro' ||
    monthName === 'janeiro' ||
    monthName === 'fevereiro'
  ) {
    console.log('Inverno');
  } else if (
    monthName === 'março' ||
    monthName === 'abril' ||
    monthName === 'maio'
  ) {
    console.log('Primavera');
  } else if (
    monthName === 'junho' ||
    monthName === 'julho' ||
    monthName === 'agosto'
  ) {
    console.log('Verão');
  }
}

// 3 - Check if a day is weekend day or a working day. Your script will take day as an input.
function exercise3level2() {
  let dia = prompt('Digite um dia: ');
  dia = dia.toLowerCase();
  if (dia === 'sábado' || dia === 'domingo') {
    console.log('Fim de semana');
  } else if (
    dia === 'segunda-feira' ||
    dia === 'terça-feira' ||
    dia == 'quarta-feira' ||
    dia == 'quinta-feira' ||
    dia == 'sexta-feira'
  ) {
    console.log('Dia de Semana');
  } else {
    console.log('Dia inválido, digite corretamente!');
  }
}
console.log(exercise3level2());
// // ******************* (USE IN MAIN.JS) *********************
