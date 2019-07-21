import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { Budget } from '../budget/budget.entity';
import { CrudService } from '../base/crud.service';
import { CreateTagDto } from './dtos/create-tag.dto';
import { UpdateTagDto } from './dtos/update-tag.dto';

@Injectable()
export class TagsService extends CrudService<Tag> {
    constructor(
        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>,
        @InjectRepository(Budget)
        private readonly budgetRepository: Repository<Budget>,
    ) {
        super(tagRepository);
    }

    async create(tag: CreateTagDto): Promise<Tag> {
        const parentBudget = await this.budgetRepository.findOne(tag.budgetId);
        if (!parentBudget) {
            throw new HttpException(
                `Parent budget with ID ${tag.id} is not found`,
                HttpStatus.NOT_FOUND,
            );
        }
        return await this.tagRepository.save(tag);
    }

    async update(tag: UpdateTagDto): Promise<number> {
        const tagToUpdate = await this.tagRepository.findOne(tag.id);
        if (!tagToUpdate) {
            throw new HttpException(
                `Budget with an ID of ${tag.id} is not found`,
                HttpStatus.NOT_FOUND,
            );
        }
        await this.tagRepository.update(tag.id, tag);
        return await tag.id;
    }
}
