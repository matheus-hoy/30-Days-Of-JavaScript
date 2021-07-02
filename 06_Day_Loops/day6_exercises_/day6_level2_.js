// 1 - Develop a small script which generate any number of characters random id:
function level2ex1() {
  let textoaleat = '';
  const caracdotexto = 'abcdefghijklmnopqrstuvxwyz0123456789';
  for (let i = 0; i < 14; i++) {
    textoaleat += caracdotexto.charAt(
      Math.floor(Math.random() * caracdotexto.length)
    );
  }
  console.log(textoaleat);
}

// 2 - Write a script which generates a random hexadecimal number.
let aleatorio = '0123456789ABCDEF';
let cor = '#';
for (let i = 0; i < 6; i++) {
  cor += aleatorio[Math.floor(Math.random() * 16)];
}
console.log(cor);

// 3 - Write a script which generates a random rgb color number.
function aleatrgb() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = (num >> 8) & 255;
  let b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
for (var i = 0; i < 1; i++) {
  console.log(aleatrgb());
}

// 4 - Using the above countries array, create the following new array.
const pais = [
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

for (let i = 0; i < pais.length; i++) {
  pais[i] = pais[i].toUpperCase();
}
console.log(pais);

// 5 - Using the above countries array, create an array for countries length'.
//[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let num = [];
for (let i = 0; i < pais.length; i++) {
  let arr = pais[i].length;
  num.push(arr);
}
console.log(num);
