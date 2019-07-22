import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './budget.entity';
import { CrudService } from '../../shared/base/crud.service';
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
        try {
            return await this.budgetsRepository.save(budget);
        } catch (error) {
            throw new HttpException(`Bad Request`, HttpStatus.BAD_REQUEST);
        }
    }

    async update(budget: UpdateBudgetDto): Promise<number> {
        try {
            await this.budgetsRepository.findOneOrFail(budget.id);
            await this.budgetsRepository.update(budget.id, budget);
            return await budget.id;
        } catch (error) {
            throw new HttpException(`Bad Request`, HttpStatus.BAD_REQUEST);
        }
    }
}
