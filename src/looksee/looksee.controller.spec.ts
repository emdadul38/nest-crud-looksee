import { Test, TestingModule } from '@nestjs/testing';
import { LookseeController } from './looksee.controller';

describe('LookseeController', () => {
  let controller: LookseeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LookseeController],
    }).compile();

    controller = module.get<LookseeController>(LookseeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
