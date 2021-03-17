import { Test, TestingModule } from '@nestjs/testing';
import { LookseeService } from './looksee.service';

describe('LookseeService', () => {
  let service: LookseeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LookseeService],
    }).compile();

    service = module.get<LookseeService>(LookseeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
