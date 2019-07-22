import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { Budget } from '../budgets/budget.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Tag, Budget])],
    controllers: [TagsController],
    providers: [TagsService],
})
export class TagsModule {}
