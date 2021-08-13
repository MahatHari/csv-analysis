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
export abstract class CsvReader {
  data: MatchData[] = [];
  constructor(public fileName: string) {}
  abstract rowData(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync('football.csv', {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.rowData);
  }
}
