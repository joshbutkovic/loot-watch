import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BudgetItem } from './budget-item.entity';
import { CrudService } from '../base/crud.service';
import { CreateBudgetItemDto } from './dtos/create-budget-item.dto';
// import { CreateBudgetDto } from './dtos/create-budget.dto';
// import { UpdateBudgetDto } from './dtos/update-budget.dto';

@Injectable()
export class BudgetItemsService extends CrudService<BudgetItem> {
    constructor(
        @InjectRepository(BudgetItem)
        private readonly budgetItemsRepository: Repository<BudgetItem>,
    ) {
        super(budgetItemsRepository);
    }

    async create(budgetItem: CreateBudgetItemDto): Promise<BudgetItem> {
        console.log(budgetItem);
        return await this.budgetItemsRepository.save(budgetItem);
    }

    // async update(budget: UpdateBudgetDto): Promise<number> {
    //     const budgetToUpdate = await this.budgetsRepository.findOne(budget.id);
    //     if (!budgetToUpdate) {
    //         throw new HttpException(`Budget with an ID of ${budget.id} is not found`, HttpStatus.NOT_FOUND);
    //     }
    //     await this.budgetsRepository.update(budget.id, budget);
    //     return await budget.id;
    // }
}
