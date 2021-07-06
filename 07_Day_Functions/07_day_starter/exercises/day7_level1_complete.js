// 1 - Declare a function fullName and it print out your full name.
function fullname1() {
  console.log('Matheus Hoy');
}

// 2 - Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName2() {
  const firstName = 'Matheus';
  const lastName = 'Hoy';
  const space = ' ';
  const printFullName = firstName + space + lastName;
  console.log(printFullName);
}

// 3 - Declare a function addNumbers and it takes two two parameters and it returns sum.
function addTwoNumbers() {
  let numOne = 2;
  let numTwo = 3;
  let total = numOne + numTwo;
  return total;
}
// console.log(addTwoNumbers());

// 4 - An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle() {
  let comprimento = 5;
  let largura = 10;
  area = comprimento * largura;
  return area;
}
// console.log(areaOfRectangle());

// 5 - A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle() {
  let comprimento = 5;
  let largura = 10;
  let perimeter = 2 * (comprimento + largura);
  return perimeter;
}
// console.log(perimeterOfRectangle());

// 6 - A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism() {
  let comprimento = 5;
  let largura = 10;
  let altura = 2;
  let volume = comprimento * (largura * altura);
  return volume;
}
// console.log(volumeOfRectPrism());

// 7 - Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle() {
  let raio = 1.2;
  let area = Math.PI * (raio * raio);
  return area;
}
// console.log(areaOfCircle());

// 8 - Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle() {
  let raio = 1.2;
  let circum = 2 * (Math.PI * raio);
  return circum;
}
// console.log(circumOfCircle());

// 9 - Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density() {
  let massa = 10;
  let volume = 5;
  let densidade = massa / volume;
  console.log(densidade);
}
// density();
// 10 - Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function velocidade() {
  let distancia = 1000;
  let tempogasto = 20;
  let speed = distancia / tempogasto;
  return speed;
}
// console.log(velocidade());
// 11 - Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight() {
  let massa = 100;
  let gravidade = 0.5;
  let peso = massa * gravidade;
  return peso;
}
// console.log(weight());
// 12 - Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit() {
  let oC = 20;
  let oF = (oC * 9) / 5 + 32;
  return oF;
}
// console.log(convertCelciusToFahrenheit());

// 13 - Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// Baixo peso : o IMC é inferior a 18,5
// Peso normal : o IMC é de 18,5 a 24,9
// Sobrepeso : o IMC é de 25 a 29,9
// Obeso : o IMC é 30 ou mais
function imcCalculator() {
  let peso = 75;
  let altura = 1.78;
  imc = peso / (altura * altura);

  if (imc < 18.5) {
    console.log('Baixo peso');
  } else if (imc > 18.5 && imc < 24.9) {
    console.log('Peso normal');
  } else if (imc > 25 && imc < 30) {
    console.log('sobrepeso');
  } else if (imc > 30) {
    console.log('Obeso');
  }
}
// console.log(imcCalculator());

// 14 - Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason() {
  let monthName = 'janeiro';

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
// console.log(checkSeason());

// 15 - Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3) {
  let result = Math.max(num1, num2, num3);
  return result;
}
// console.log(findMax(12, 8, -6));
