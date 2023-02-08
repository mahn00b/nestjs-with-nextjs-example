import { Test, TestingModule } from '@nestjs/testing';
import { NextController } from './next.controller';
import { NextService } from './next.service';

describe('NextController', () => {
  let controller: NextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NextService],
      controllers: [NextController],
    }).compile();

    controller = module.get<NextController>(NextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
