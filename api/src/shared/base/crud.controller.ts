import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { CrudServiceInterface } from './crud.service.interface'
import { CrudEntity } from './crud.entity';

export class CrudController<T extends CrudEntity>{

    constructor(private readonly crudServiceInterface: CrudServiceInterface<T>) { }

    @Get()
    async findAll(): Promise<T[]> {
        return this.crudServiceInterface.getAll()
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<T> {
        return this.crudServiceInterface.findById(id)
    }

    // @Post()
    // @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    // @ApiResponse({ status: 403, description: 'Forbidden.' })
    // @ApiResponse({ status: 400, description: 'Bad Request.' })
    // async create(@Body() entity: T): Promise<number> {
    //     return this.IBaseService.create(entity);
    // }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<number> {
        return this.crudServiceInterface.delete(id);
    }

    // @Put()
    // @ApiResponse({ status: 400, description: 'Bad Request.' })
    // @ApiResponse({ status: 200, description: 'Entity deleted successfully.' })
    // async update(@Body() entity: T): Promise<T> {
    //     return this.IBaseService.update(entity);
    // }

}