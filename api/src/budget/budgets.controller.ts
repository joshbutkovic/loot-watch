import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Delete,
    Put,
} from '@nestjs/common';
import { Budget } from './budget.entity';
import { CreateBudgetDto } from './dtos/create-budget.dto';
import { UpdateBudgetDto } from './dtos/update-budget.dto';
import { BudgetsService } from './budgets.service';

@Controller('budgets')
export class BudgetsController {
    constructor(private readonly budgetsService: BudgetsService) { }

    @Get('all')
    async all(): Promise<Budget[]> {
        return await this.budgetsService.all();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<Budget> {
        return await this.budgetsService.findById(id);
    }

    @Post('create')
    async create(@Body() budgetData: CreateBudgetDto): Promise<Budget> {
        return await this.budgetsService.create(budgetData);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() budgetData: UpdateBudgetDto,
    ): Promise<number> {
        return this.budgetsService.update(id, budgetData);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<number> {
        return this.budgetsService.delete(id);
    }
}