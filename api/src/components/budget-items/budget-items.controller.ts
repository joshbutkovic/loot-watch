import {
    Controller,
    Post,
    Body,
    Put,
    HttpException,
    HttpStatus,
    UsePipes,
} from '@nestjs/common';
import { CrudController } from '../../shared/base/crud.controller';
import { ValidationPipe } from '../../shared/pipes/validation.pipe';
import { BudgetItem } from './budget-item.entity';
import { BudgetItemsService } from './budget-items.service';
import { CreateBudgetItemDto } from './dtos/create-budget-item.dto';
import { UpdateBudgetItemDto } from './dtos/update-budget-item.dto';

@Controller('budget-items')
export class BudgetItemsController extends CrudController<BudgetItem> {
    constructor(private readonly budgetItemsService: BudgetItemsService) {
        super(budgetItemsService);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(
        @Body() budgetItemData: CreateBudgetItemDto,
    ): Promise<BudgetItem> {
        return await this.budgetItemsService.create(budgetItemData);
    }

    @Put()
    @UsePipes(ValidationPipe)
    async update(@Body() budgetItemData: UpdateBudgetItemDto): Promise<number> {
        return this.budgetItemsService.update(budgetItemData);
    }
}
