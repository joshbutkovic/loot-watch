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
        const parentBudget = await this.budgetRepository.findOne(budgetItem.budgetId);
        if(!parentBudget) {
            throw new HttpException(
                `Parent budget with ID ${budgetItem.id} is not found`,
                HttpStatus.NOT_FOUND,
            );
        }
        return await this.budgetItemsRepository.save(budgetItem);
    }

    async update(budgetItem: UpdateBudgetItemDto): Promise<number> {
        const budgetItemToUpdate = await this.budgetItemsRepository.findOne(budgetItem.id);
        if (!budgetItemToUpdate) {
            throw new HttpException(
                `Budget with an ID of ${budgetItem.id} is not found`,
                HttpStatus.NOT_FOUND,
            );
        }
        await this.budgetItemsRepository.update(budgetItem.id, budgetItem);
        return await budgetItem.id;
    }

}
