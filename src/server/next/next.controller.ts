import { Controller, Get, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';

import { NextService } from './next.service';

@Controller('/')
export class NextController {
  constructor(private nextService: NextService) {}

  @Get('home')
  public async showHome(@Req() req: Request, @Res() res: Response) {
    await this.nextService.handler(req, res);
  }

  @Get('*_next*')
  public async assets(@Req() req: Request, @Res() res: Response) {
    await this.nextService.handler(req, res);
  }

  @Get('favicon.png')
  public async favicon(@Req() req: Request, @Res() res: Response) {
    await this.nextService.handler(req, res);
  }
}
