import {
    Controller,
    Post,
    Body,
    Put,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { CrudController } from '../base/crud.controller';
import { BudgetItem } from './budget-item.entity';
// import { CreateBudgetDto } from './dtos/create-budget.dto';
// import { UpdateBudgetDto } from './dtos/update-budget.dto';
import { BudgetItemsService } from './budget-items.service';
import { CreateBudgetItemDto } from './dtos/create-budget-item.dto';
import { UpdateBudgetItemDto } from './dtos/update-budget-item.dto';

@Controller('budget-items')
export class BudgetItemsController extends CrudController<BudgetItem> {
    constructor(private readonly budgetItemsService: BudgetItemsService) {
        super(budgetItemsService);
    }

    @Post('create')
    async create(
        @Body() budgetItemData: CreateBudgetItemDto,
    ): Promise<BudgetItem> {
        console.log(budgetItemData.budgetId);
        const createdBudgetItem = await this.budgetItemsService.create(
            budgetItemData,
        );
        if (!createdBudgetItem) {
            throw new HttpException(`Bad Request`, HttpStatus.NOT_FOUND);
        }
        return createdBudgetItem;
    }

    @Put()
    async update(
        @Body() budgetItemData: UpdateBudgetItemDto,
    ): Promise<number> {
        return this.budgetItemsService.update(budgetItemData);
    }
}
