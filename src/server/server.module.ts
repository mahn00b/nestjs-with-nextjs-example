import { Module } from '@nestjs/common';

import { AppModule } from './app/app.module';
import { NextModule } from './next/next.module';
import { QuotesController } from './quotes/quotes.controller';
import { QuotesService } from './quotes/quotes.service';

@Module({
  imports: [AppModule, NextModule],
  controllers: [QuotesController],
  providers: [QuotesService],
})
export class ServerModule {}
