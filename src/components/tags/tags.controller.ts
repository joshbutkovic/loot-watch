import {
    Controller,
    Post,
    Body,
    Put,
    HttpException,
    HttpStatus,
    UsePipes,
} from '@nestjs/common';
import { CrudController } from '../../shared/base/crud.controller';
import { ValidationPipe } from '../../shared/pipes/validation.pipe';
import { Tag } from './tag.entity';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dtos/create-tag.dto';
import { UpdateTagDto } from './dtos/update-tag.dto';

@Controller('tags')
export class TagsController extends CrudController<Tag> {
    constructor(private readonly tagsService: TagsService) {
        super(tagsService);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() tagData: CreateTagDto): Promise<Tag> {
        const createdTag = await this.tagsService.create(tagData);
        if (!createdTag) {
            throw new HttpException(`Bad Request`, HttpStatus.NOT_FOUND);
        }
        return createdTag;
    }

    @Put()
    @UsePipes(ValidationPipe)
    async update(@Body() tagData: UpdateTagDto): Promise<number> {
        return this.tagsService.update(tagData);
    }
}
