import {
    Controller,
    Post,
    Body,
    Put,
    UseFilters,
    UsePipes,
} from '@nestjs/common';
import { CrudController } from '../../shared/base/crud.controller';
// import { AllExceptionsFilter } from '../../shared/exceptions/all-exceptions.filter';
import { ValidationPipe } from '../../shared/pipes/validation.pipe';
import { Budget } from './budget.entity';
import { CreateBudgetDto } from './dtos/create-budget.dto';
import { UpdateBudgetDto } from './dtos/update-budget.dto';
import { BudgetsService } from './budgets.service';

@Controller('budgets')
// @UseFilters(new AllExceptionsFilter())
export class BudgetsController extends CrudController<Budget> {
    constructor(private readonly budgetsService: BudgetsService) {
        super(budgetsService);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() budgetData: CreateBudgetDto): Promise<Budget> {
        return await this.budgetsService.create(budgetData);
    }

    @Put()
    @UsePipes(ValidationPipe)
    async update(@Body() budgetData: UpdateBudgetDto): Promise<number> {
        return this.budgetsService.update(budgetData);
    }
}
