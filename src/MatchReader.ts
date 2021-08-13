import { CsvReader, MatchData } from './CsvReader';
import { MatchResults } from './matchResults';
import { datesToString } from './utils';

export class MatchReader extends CsvReader {
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
