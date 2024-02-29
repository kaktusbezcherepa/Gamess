#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { generateRandomNumber, greetings } from '../src/cli.js';

const geoProgression = () => {
  const name = greetings();
  let result = 0;
  console.log('What number is missing in the progression?');
  while (result < 3) {
    const length = generateRandomNumber(5, 8);
    let startNum = generateRandomNumber(2, 3);
    const progression = [];
    const difference = generateRandomNumber(2, 5);
    let countOfProgression = 0;
    while (countOfProgression !== length) {
      progression.push(startNum * difference);
      startNum *= difference;
      countOfProgression += 1;
    }
    const hiddenNumberIndex = generateRandomNumber(0, length - 1);
    const question = [...progression];
    question[hiddenNumberIndex] = '..';
    console.log(`Question: ${question.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = progression[hiddenNumberIndex];
    if (parseInt(answer, 10) !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    result += 1;
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

geoProgression();
