
import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './budget.entity';
import { CreateBudgetDto } from './dtos/create-budget.dto';
import { UpdateBudgetDto } from './dtos/update-budget.dto';

@Injectable()
export class BudgetsService {
    constructor(
        @InjectRepository(Budget)
        private readonly budgetRepository: Repository<Budget>,
    ) { }

    async all(): Promise<Budget[]> {
        return await this.budgetRepository.find();
    }

    async findById(id: number): Promise<Budget> {
        try {
            return await this.budgetRepository.findOneOrFail(id);
        } catch (err) {
            throw new HttpException(
                {
                    status: HttpStatus.UNPROCESSABLE_ENTITY,
                    error: `There is no budget with an ID of ${id}`,
                },
                422,
            );
        }
    }

    async create(budget: CreateBudgetDto): Promise<Budget> {
        try {
            return await new Promise<Budget>((resolve, reject) => {
                this.budgetRepository
                    .save(budget)
                    .then(created => resolve(created))
                    .catch(err => reject(err));
            });
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error,
                },
                400,
            );
        }
    }

    async update(id: number, budget: UpdateBudgetDto): Promise<number> {
        const budgetToUpdate = await this.budgetRepository.findOne(id);
        if (budgetToUpdate) {
            this.budgetRepository.update(id, budget);
            return id;
        } else {
            throw new HttpException(
                {
                    status: HttpStatus.UNPROCESSABLE_ENTITY,
                    error: `There is no budget with an ID of ${id} to update`,
                },
                422,
            );
        }
    }

    async delete(id: number): Promise<number> {
        try {
            const deletedBudget = await this.budgetRepository.findOneOrFail(id);
            this.budgetRepository.delete(id);
            return deletedBudget.id;
        } catch (err) {
            throw new HttpException(
                {
                    status: HttpStatus.UNPROCESSABLE_ENTITY,
                    error: `There is no budget with an ID of ${id} to delete`,
                },
                422,
            );
        }
    }
}