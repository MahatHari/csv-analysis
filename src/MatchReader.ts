import { CsvReader } from './CsvReader';
import { MatchResults } from './matchResults';
import { datesToString } from './utils';

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResults,
  string
];
export class MatchReader extends CsvReader<MatchData> {
  rowData(row: string[]): MatchData {
    return [
      datesToString(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults,
      row[6],
    ];
  }
}
