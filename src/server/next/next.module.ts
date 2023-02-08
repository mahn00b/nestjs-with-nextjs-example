import { Module } from '@nestjs/common';
import { NextService } from './next.service';
import { NextController } from './next.controller';

@Module({
  providers: [NextService],
  controllers: [NextController],
})
export class NextModule {}
