// 1 - Check if a day is weekend day or a working day. Your script will take day as an input.
// What is the day  today? Saturday
// Saturday is a weekend.

// What is the day today? saturDaY
// Saturday is a weekend.

// What is the day today? Friday
// Friday is a working day.

// What is the day today? FrIDAy
// Friday is a working day.
function exercise1level3() {
  let mes = 'fevereiro';
  let ano = new Date();
  ano = ano.getFullYear();
  mes = mes.toLowerCase();

  if (
    mes === 'janeiro' ||
    mes === 'março' ||
    mes === 'maio' ||
    mes === 'julho' ||
    mes === 'agosto' ||
    mes === 'outubro' ||
    mes === 'dezembro'
  ) {
    console.log('Este mês tem 31 dias');
  } else if (
    mes === 'abril' ||
    mes === 'junho' ||
    mes === 'setembro' ||
    mes === 'novembro'
  ) {
    console.log('Este mês tem 30 dias');
  } else if (mes === 'fevereiro') {
    console.log('Fevereiro tem 28 dias');
  } else if (ano % 4 == 0 && month == 'february') {
    console.log('Fevereiro tem 29 dias neste ano');
  } else {
    console.log('Mês inválido, digite corretamente.');
  }
}
console.log(exercise1level3());
