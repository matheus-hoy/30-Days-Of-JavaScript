// 1 - 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const love =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let timesLove = love.match(/love/gi);
console.log(timesLove.length, 'Vezes na frase do love');

// 2 - Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const because =
  'You cannot end a sentence with because because because is a conjunction';
let timesBecause = because.match(/because/gi);
console.log(timesBecause.length, 'Vezes na frase do because');

// 3 - Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const forbbidenChars = /[%@&$#;']/gi;
const clearText = sentence.replace(forbbidenChars, '');

const wordCount = {};
const words = clearText.split(' ');

let mostFrequentWord = null;
let mostFrequentNumber = 0;

for (let word of words) {
  // verifica se a palavra ja foi contada antes
  if (wordCount[word]) {
    // se foi, acrecestar +1 na contagem
    wordCount[word] = wordCount[word] + 1;
  } else {
    // se não foi, iniciar a contagem com 1
    wordCount[word] = 1;
  }

  // verificar se a franquency da palavra atual é maior do que a ultima palavra analisada
  if (wordCount[word] > mostFrequentNumber) {
    // se for, definir a palavra mais franquente como a palavra atual
    mostFrequentWord = word;

    // atualizar o contador de franquecia para a palavra atual
    mostFrequentNumber = wordCount[word];
  }
}
console.log(mostFrequentWord);

// 4 - Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salarioMes = 5000;
let bonusAno = 10000;
let ganhoCurso = 15000;
let rendaanual = salarioMes * 12 + bonusAno + ganhoCurso * 12;
console.log(rendaanual, 'Euros é sua renda anual');
