import { Controller, Get } from '@nestjs/common';

import { QuotesService, Quote } from './quotes.service';
@Controller('/')
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Get('quotes')
  public getRandom(): Quote {
    return this.quotesService.getRandom();
  }
}
