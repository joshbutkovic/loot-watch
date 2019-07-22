import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { Budget } from '../budgets/budget.entity';
import { CrudService } from '../../shared/base/crud.service';
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
        try {
            await this.budgetRepository.findOneOrFail(tag.budgetId);
            return await this.tagRepository.save(budgetItem);
        } catch (error) {
            throw new HttpException(`Bad Request`, HttpStatus.BAD_REQUEST);
        }
    }

    async update(tag: UpdateTagDto): Promise<number> {
        try {
            await this.tagRepository.findOneOrFail(tag.id);
            await this.tagRepository.update(tag.id, tag);
            return await tag.id;
        } catch (error) {
            throw new HttpException(`Bad Request`, HttpStatus.BAD_REQUEST);
        }
    }
}
