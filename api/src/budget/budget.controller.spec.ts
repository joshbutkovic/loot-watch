import { Test, TestingModule } from '@nestjs/testing';
import { BudgetsController } from './budgets.controller';

describe('Budget Controller', () => {
  let controller: BudgetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetsController],
    }).compile();

    controller = module.get<BudgetsController>(BudgetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
