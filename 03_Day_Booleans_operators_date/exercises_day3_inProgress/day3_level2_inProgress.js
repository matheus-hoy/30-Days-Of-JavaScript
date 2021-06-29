// 1 - Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const base = prompt('insira a base: ');
const altura = prompt('insira a altura:');
const area = 0.5 * base * altura;

console.log('A área do triangulo é: ', area);
// // ******************* (USE IN MAIN.JS) *********************

// 2 - Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
const ladoA = prompt('Insira lado A: ');
const ladoB = prompt('Insira lado B: ');
const ladoC = prompt('Insira lado C: ');
const perimetro = ladoA + ladoB + ladoC;

console.log('Perímetro do triângulo: ', perimetro);
// // ******************* (USE IN MAIN.JS) *********************

// 3 - Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
const comprimento = prompt('Insira o comprimento: '); //20
const largura = prompt('Insira a largura: '); //10
const areaDoRetangulo = comprimento * largura;
const perimetroRetangulo = 2 * (comprimento + largura);

console.log('A área do retângulo é: ', areaDoRetangulo);
console.log('O perímetro do retângulo é: ', perimetroRetangulo);
// // ******************* (USE IN MAIN.JS) *********************

// 4 - Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const raio = prompt('Insira o raio: '); //10
const pi = 3.14;
const areaDoCirculo = pi * raio * raio;
const circumfDoCirculo = 2 * pi * raio;

console.log('Área do circulo:', areaDoCirculo);
console.log('Circunferencia do circulo: ', circumfDoCirculo);
// // ******************* (USE IN MAIN.JS) *********************

// 5 - Calculate the slope, x-intercept and y-intercept of y = 2x -2

// 6 - Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)

// 7 - Compare the slope of above two questions.

// 8 - Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// 9 - Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
const horasSemanais = prompt('Insira as horas semanais: ');
const valorHora = prompt('Insira o valor hora: ');
const ganhoSemanal = horasSemanais * valorHora;

console.log('Seu ganho semanal é de: ', ganhoSemanal);
// // ******************* (USE IN MAIN.JS) *********************

// 10 - If the length of your name is greater than 7 say, your name is long else say your name is short.
const insertName = prompt('Insira seu nome: ');
if (insertName.length > 7) {
  console.log('Seu nome é LONGO!');
} else {
  console.log('Seu nome é CURTO!');
}
// // ******************* (USE IN MAIN.JS) *********************

// 11 - Compare your first name length and your family name length and you should get this output.
const firstName = 'Asabeneh';
const lastName = 'Yetayeh';
if (firstName.length > lastName) {
  console.log(
    'Your first name',
    firstName,
    'is longer than your family name',
    lastName
  );
} else {
  console.log(
    'your famili name',
    lastName,
    'is a longer than your first name',
    firstName
  );
}

//12 - Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let minhaIdade = prompt('Minha idade = ');
let tuaIdade = prompt('Sua idade = ');

console.log(`Sua idade É ${minhaIdade - tuaIdade} maior que a minha !`);
// // ******************* (USE IN MAIN.JS) *********************

// 13 - Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
const birtYear = 2005;
year = 2021 - birtYear;

if (year >= 18) {
  console.log('Sua idade é: ', year, 'e você pode dirigir!');
} else {
  console.log(
    'Sua idade é: ',
    year,
    'e você NÃO pode dirigir, volte daqui a: ',
    year - 18
  );
}

// 14 - Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
const idade = prompt('digite sua idade: ');
const anoNascimento = 2021 - idade;
const bornAno = `"${anoNascimento}"`;
const nascimento = new Date(bornAno);
const now = new Date();
if (idade <= 100) {
  const resultado = now.getTime() - nascimento.getTime();
  const totalSegundos = resultado / 1000;
  console.log(`Você viveu${totalSegundos} segundos`);
}
// // ******************* (USE IN MAIN.JS) *********************

// 15 - Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm
function dataAtualFormatada1() {
  let data = new Date(),
    dia = data.getDate().toString().padStart(2, '0');
  mes = (data.getMonth() + 1).toString().padStart(2, '0');
  ano = data.getFullYear();
  hora = data.getHours();
  minuto = data.getMinutes();
  return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

console.log(dataAtualFormatada1());

function dataAtualFormatada2() {
  let data = new Date(),
    dia = data.getDate().toString().padStart(2, '0');
  mes = (data.getMonth() + 1).toString().padStart(2, '0');
  ano = data.getFullYear();
  hora = data.getHours();
  minuto = data.getMinutes();
  return `${dia}-${mes}-${ano} ${hora}:${minuto}`;
}

console.log(dataAtualFormatada2());

function dataAtualFormatada3() {
  let data = new Date(),
    dia = data.getDate().toString().padStart(2, '0');
  mes = (data.getMonth() + 1).toString().padStart(2, '0');
  ano = data.getFullYear();
  hora = data.getHours();
  minuto = data.getMinutes();
  return `${ano}-${mes}-${dia} ${hora}:${minuto}`;
}

console.log(dataAtualFormatada3());
