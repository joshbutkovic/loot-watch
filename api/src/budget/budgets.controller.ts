import {
    Controller,
    Post,
    Body,
    Put,
} from '@nestjs/common';
import { CrudController } from '../base/crud.controller';
import { Budget } from './budget.entity';
import { CreateBudgetDto } from './dtos/create-budget.dto';
import { UpdateBudgetDto } from './dtos/update-budget.dto';
import { BudgetsService } from './budgets.service';

@Controller('budgets')
export class BudgetsController extends CrudController<Budget>{

    constructor(private readonly budgetsService: BudgetsService) {
        super(budgetsService)
    }

    @Post('create')
    async create(@Body() budgetData: CreateBudgetDto): Promise<Budget> {
        return await this.budgetsService.create(budgetData);
    }

    @Put()
    async update(
        @Body() budgetData: UpdateBudgetDto,
    ): Promise<number> {
        return this.budgetsService.update(budgetData);
    }

}