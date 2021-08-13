import fs from 'fs';
import { CsvReader } from './CsvReader';
import { MatchReader } from './MatchReader';

const reader = new MatchReader('football.csv');
reader.read();
const matches = reader.data;

/* fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => row.split(',')); */

let manuWins = 0;
console.log(matches[0]);
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manuWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manuWins++;
  }
}
console.log(`Man United won ${manuWins} games`);
