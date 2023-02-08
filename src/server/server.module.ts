import { Module } from '@nestjs/common';

import { AppModule } from './app/app.module';
import { NextModule } from './next/next.module';

@Module({
  imports: [AppModule, NextModule],
})
export class ServerModule {}
