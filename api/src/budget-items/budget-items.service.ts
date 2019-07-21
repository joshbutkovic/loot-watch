import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BudgetItem } from './budget-item.entity';
import { Budget } from '../budget/budget.entity';
import { CrudService } from '../base/crud.service';
import { CreateBudgetItemDto } from './dtos/create-budget-item.dto';
import { UpdateBudgetItemDto } from './dtos/update-budget-item.dto';

@Injectable()
export class BudgetItemsService extends CrudService<BudgetItem> {
    constructor(
        @InjectRepository(BudgetItem)
        private readonly budgetItemsRepository: Repository<BudgetItem>,
        @InjectRepository(Budget)
        private readonly budgetRepository: Repository<Budget>
    ) {
        super(budgetItemsRepository);
    }

    async create(budgetItem: CreateBudgetItemDto): Promise<BudgetItem> {
        try {
            const budget = await this.budgetRepository.findOneOrFail({id: budgetItem.budgetId});
            return await this.budgetItemsRepository.save(budgetItem);
        } catch(err) {
            return err;
        }
    }

    async update(budgetItem: UpdateBudgetItemDto): Promise<number> {
        try {
            const budgetToUpdate = await this.budgetItemsRepository.findOneOrFail(budgetItem.id);
            await this.budgetItemsRepository.update(budgetToUpdate.id, budgetItem);
            return await budgetItem.id;
        } catch(err) {
            return err;
        }
    }
}
