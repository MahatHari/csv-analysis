"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvReader_1 = require("./CsvReader");
var reader = new CsvReader_1.CsvReader('football.csv');
reader.read();
var matches = reader.data;
/* fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => row.split(',')); */
var manuWins = 0;
console.log(matches[0]);
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === 'H') {
        manuWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manuWins++;
    }
}
console.log("Man United won " + manuWins + " games");
