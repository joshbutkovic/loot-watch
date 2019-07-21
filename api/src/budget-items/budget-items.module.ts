import { Module } from '@nestjs/common';
import { BudgetItemsController } from './budget-items.controller';
import { BudgetItemsService } from './budget-items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetItem } from './budget-item.entity';
import { Budget } from '../budget/budget.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BudgetItem, Budget])],
    controllers: [BudgetItemsController],
    providers: [BudgetItemsService],
})
export class BudgetItemsModule {}
