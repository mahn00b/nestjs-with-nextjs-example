import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class QuotesService {
  private db: Quote[] = [];

  constructor() {
    const data = readFileSync(
      join(process.cwd(), './src/server/data/office_quotes.json'),
      'utf-8',
    );

    this.db = JSON.parse(data) as Quote[];
  }

  getRandom() {
    const number = Math.floor(Math.random() * (this.db.length - 1));

    return this.db[number];
  }
}
