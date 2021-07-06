// 1 - Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// 2 - Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a, b, c) {
  let raiz1, raiz2;
  let bhaskaraDescr = b * b - 4 * a * c;
  if (bhaskaraDescr > 0) {
    raiz1 = -b + Math.sqrt(bhaskaraDescr) / (2 * a);
    raiz2 = -b - Math.sqrt(bhaskaraDescr) / (2 * a);
    console.log(`as raizes quadraticas são ${raiz1} e ${raiz2}`);
  } else if (bhaskaraDescr == 0) {
    raiz1 = raiz2 = -b / (2 * a);
    console.log(`as raizes quadraticas são: ${raiz1} e ${raiz2}`);
  }
}
// solveQuadratic(1, 4, 4);

// console.log(solveQuadratic(1, 4, 4)); // {-2}
// console.log(solveQuadratic(1, -1, -2)); // {2, -1}
// console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)); //{2, -2}
// console.log(solveQuadratic(1, -1, 0)); //{1, 0}

// 3 - Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = console.log(arr[i]);
  }
  return result;
}
const array = [1, 2, 3, 4, 5];
// printArray(array);
// 4 - Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
function showDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
}
// showDateTime();

// 5 - Declare a function name swapValues. This function swaps value of x to y.
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
function swapValues(x, y) {
  return [y, x];
}
// console.log(swapValues(3, 4));

// 6 - Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
function reverseArray(arr) {
  let reversed = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reverse = reversed.push(arr[i]);
  }
  return reversed;
}
let arrayOfReverse = [1, 2, 3];
// console.log(reverseArray(arrayOfReverse));

// 7- Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray() {
  let array = ['capitalizeArray'];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].toUpperCase());
  }
}
// capitalizeArray();
// 8- Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem() {
  let arrItem = [];
  arrItem.push('banana');
  console.log(arrItem);
}
// addItem();
// 9 - Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem() {
  let arrRemov = ['banana', 'mandioca', 'feijao'];
  arrRemov.splice(0, 2);
  console.log(arrRemov);
}
// removeItem();
// 10 - Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// console.log(sumOfNumbers(1, 2, 3, 4, 5));

// 11 - Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(numberArr) {
  let sum = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] % 2 !== 0) {
      sum += numberArr[i];
      console.log('soma dos números impares: ');
    }
  }
  return sum;
}
sumOfOdds([1, 2, 3]);
// 12 - Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function numberEvens(numberEven) {
  let sum = 0;
  for (let i = 0; i < numberEven.length; i++) {
    if (numberEven[i] % 2 === 0) {
      sum = sum + numberEven[i];
      console.log('soma dos números pares: ');
    }
  }
  return sum;
}
// console.log(numberEvens([1, 2, 3, 4, 5]));
// 13 - Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// 14 - Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

// 15 - Writ a function which generates a randomUserIp.

// 16 - Write a function which generates a randomMacAddress

// 17 - Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// console.log(randomHexaNumberGenerator());
// '#ee33df'

// 18 - Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// console.log(userIdGenerator());
// 41XTDbE
