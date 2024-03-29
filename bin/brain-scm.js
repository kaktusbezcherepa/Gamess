#!/usr/bin/env node
import readlinesync from 'readline-sync';
import { generateRandomNumber, greetings, findLowestThreeNumbers } from '../src/cli.js';

const leastCommonMultiple = () => {
  const name = greetings();
  let result = 0;
  console.log('Find the smallest common multiple of given numbers.');
  while (result < 3) {
    const firstNum = generateRandomNumber(1, 5);
    const secondNum = generateRandomNumber(6, 10);
    const thirdNum = generateRandomNumber(11, 15);
    console.log(`Question:${firstNum}, ${secondNum}, ${thirdNum}`);
    const answer = readlinesync.question('Your answer: ');
    const correctAnswer = findLowestThreeNumbers(firstNum, secondNum, thirdNum);
    if (answer === `${correctAnswer}`) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`);
      break;
    }
    console.log(`Congratulations, ${name}`);
  }
};

leastCommonMultiple();
