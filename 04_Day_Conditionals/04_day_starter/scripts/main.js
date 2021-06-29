// this is your main.js script
// 1 - Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.
const idade = prompt('Digite sua idade: ');

if (idade >= 18) {
  console.log('Você pode dirigir!');
} else {
  console.log('Para você dirigir faltam', Math.abs(idade - 18), ' anos');
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
