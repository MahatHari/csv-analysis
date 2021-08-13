import fs from 'fs';

export abstract class CsvReader<T> {
  data: T[] = [];
  constructor(public fileName: string) {}
  abstract rowData(row: string[]): T;

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
