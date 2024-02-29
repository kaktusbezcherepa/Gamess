import readlinesync from 'readline-sync';
// Общие функции
const greetings = () => {
  console.log('Welcome to the Brain');
  const name = readlinesync.question('What is your name? ');
  console.log(`Hello,${name}!`);
  return name;
};

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
//

// Функции для НОК'а
const findGDC = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const findLDC = (a, b) => (a * b) / findGDC(a, b);

const findLowestThreeNumbers = (a, b, c) => {
  const lcmAB = findLDC(a, b);
  const lcmBC = findLDC(b, c);
  const lcABC = findLDC(lcmAB, lcmBC);
  return lcABC;
};
//

// Функции для прогрессии

//

export {
  greetings, generateRandomNumber, findGDC, findLDC, findLowestThreeNumbers,
};
