import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './budget.entity';
import { CrudService } from '../base/crud.service';
import { CreateBudgetDto } from './dtos/create-budget.dto';
import { UpdateBudgetDto } from './dtos/update-budget.dto';

@Injectable()
export class BudgetsService extends CrudService<Budget> {
    constructor(
        @InjectRepository(Budget)
        private readonly budgetsRepository: Repository<Budget>,
    ) {
        super(budgetsRepository);
    }

    async create(budget: CreateBudgetDto): Promise<Budget> {
        return await this.budgetsRepository.save(budget);
    }

    async update(budget: UpdateBudgetDto): Promise<number> {
        const budgetToUpdate = await this.budgetsRepository.findOne(budget.id);
        if (!budgetToUpdate) {
            throw new HttpException(
                `Budget with an ID of ${budget.id} is not found`,
                HttpStatus.NOT_FOUND,
            );
        }
        await this.budgetsRepository.update(budget.id, budget);
        return await budget.id;
    }
}
