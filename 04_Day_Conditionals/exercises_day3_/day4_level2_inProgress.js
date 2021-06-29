// 1 - Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F*/
function exercise1level2() {
  let nota = 50;
  if (nota >= 80 && nota <= 100) {
    console.log('Sua nota foi: A');
  } else if (nota >= 70 && nota <= 89) {
    console.log('Sua nota foi: B');
  } else if (nota >= 60 && nota <= 69) {
    console.log('Sua nota foi: C');
  } else if (nota >= 50 && nota <= 59) {
    console.log('Sua nota foi: D');
  } else {
    console.log('Sua nota foi: F');
  }
}

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
console.log(exercise2level2());
// // ******************* (USE IN MAIN.JS) *********************

// 3 - Check if a day is weekend day or a working day. Your script will take day as an input.
function exercise3level2() {
  let day = 'sábado';
  day = day.toLowerCase();
  if (day === 'sábado' || day === 'domingo') {
    console.log('Fim de semana');
  } else if (
    day === 'segunda-feira' ||
    day === 'terça-feira' ||
    day == 'quarta-feira' ||
    day == 'quinta-feira' ||
    day == 'sexta-feira'
  ) {
    console.log('Dia de Semana');
  } else {
    console.log('Dia inválido, digite corretamente!');
  }
}
console.log(exercise3level2());
// // ******************* (USE IN MAIN.JS) *********************
