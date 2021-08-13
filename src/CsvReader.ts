import fs from 'fs';
import { datesToString } from './utils';
import { MatchResults } from './matchResults';

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResults,
  string
];
export class CsvReader {
  data: MatchData[] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync('football.csv', {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): MatchData => {
        return [
          datesToString(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResults,
          row[6],
        ];
      });
  }
}
