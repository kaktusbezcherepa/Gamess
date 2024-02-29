#!/usr/bin/env node
import { greetings }from '../src/cli.js';

const name = greetings();

console.log(`${name}, select game\nbrain-progression or brain-scm`);
console.log(`If u wanna start game \nwrite name of game in terminal`);
