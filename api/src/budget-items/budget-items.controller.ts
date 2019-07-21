import {
    Controller,
    Post,
    Body,
    Put,
} from '@nestjs/common';
import { CrudController } from '../base/crud.controller';
import { BudgetItem } from './budget-item.entity';
// import { CreateBudgetDto } from './dtos/create-budget.dto';
// import { UpdateBudgetDto } from './dtos/update-budget.dto';
import { BudgetItemsService } from './budget-items.service';

@Controller('budget-items')
export class BudgetItemsController extends CrudController<BudgetItem>{

    constructor(private readonly budgetItemsService: BudgetItemsService) {
        super(budgetItemsService)
    }

    @Post('create')
    async create(@Body() budgetItemData: BudgetItem): Promise<BudgetItem> {
        return await this.budgetItemsService.create(budgetItemData);
    }

    // @Put()
    // async update(
    //     @Body() budgetData: UpdateBudgetDto,
    // ): Promise<number> {
    //     return this.budgetsService.update(budgetData);
    // }

}
