import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BudgetItem } from './budget-item.entity';
import { Budget } from '../budgets/budget.entity';
import { CrudService } from '../../shared/base/crud.service';
import { CreateBudgetItemDto } from './dtos/create-budget-item.dto';
import { UpdateBudgetItemDto } from './dtos/update-budget-item.dto';

@Injectable()
export class BudgetItemsService extends CrudService<BudgetItem> {
    constructor(
        @InjectRepository(BudgetItem)
        private readonly budgetItemsRepository: Repository<BudgetItem>,
        @InjectRepository(Budget)
        private readonly budgetRepository: Repository<Budget>,
    ) {
        super(budgetItemsRepository);
    }

    async create(budgetItem: CreateBudgetItemDto): Promise<BudgetItem> {
        try {
            await this.budgetRepository.findOneOrFail(budgetItem.budgetId);
            return await this.budgetItemsRepository.save(budgetItem);
        } catch (error) {
            throw new HttpException(`Bad Request`, HttpStatus.BAD_REQUEST);
        }
    }

    async update(budgetItem: UpdateBudgetItemDto): Promise<number> {
        try {
            await this.budgetItemsRepository.findOneOrFail(budgetItem.id);
            await this.budgetItemsRepository.update(budgetItem.id, budgetItem);
            return await budgetItem.id;
        } catch (error) {
            throw new HttpException(`Bad Request`, HttpStatus.BAD_REQUEST);
        }
    }
}
