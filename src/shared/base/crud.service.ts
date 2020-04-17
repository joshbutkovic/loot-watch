import { Injectable, BadGatewayException } from '@nestjs/common';
import { HttpStatus, HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CrudServiceInterface } from './crud.service.interface';
import { CrudEntity } from './crud.entity';

@Injectable()
export class CrudService<T extends CrudEntity>
    implements CrudServiceInterface<T> {
    constructor(private readonly genericRepository: Repository<T>) {}

    // async create(dto: any): Promise<number> {
    //     try {
    //         return new Promise<number>((resolve, reject) => {
    //             this.genericRepository.save(dto)
    //                 .then(created => resolve(created.id))
    //                 .catch(err => reject(err))
    //         })
    //     }
    //     catch (error) {
    //         throw new BadGatewayException(error);
    //     }
    // }

    async getAll(): Promise<T[]> {
        const items = await this.genericRepository.find();
        if (items.length === 0) {
            throw new HttpException('No items found', HttpStatus.NOT_FOUND);
        }
        return items;
    }

    async findById(id: number): Promise<T> {
        const item = await this.genericRepository.findOne(id);
        if (!item) {
            throw new HttpException(
                `Entity with an ID of ${id} is not found`,
                HttpStatus.NOT_FOUND,
            );
        }
        return item;
    }

    async delete(id: number): Promise<number> {
        const itemToDelete = await this.genericRepository.findOne(id);
        if (!itemToDelete) {
            throw new HttpException(
                `Entity with a ID of ${id} is not found`,
                HttpStatus.NOT_FOUND,
            );
        }
        await this.genericRepository.delete(id);
        return await id;
    }

    // update(entity: any): Promise<any> {
    //     try {
    //         return new Promise<any>((resolve, reject) => {
    //             this.genericRepository.findOneById(entity.id)
    //                 .then(responseGet => {
    //                     try {
    //                         if (responseGet == null) reject('Not existing')
    //                         let retrievedEntity: any = responseGet as any
    //                         this.genericRepository.save(retrievedEntity)
    //                             .then(response => resolve(response))
    //                             .catch(err => reject(err))
    //                     }
    //                     catch (e) {
    //                         reject(e)
    //                     }
    //                 })
    //                 .catch(err => reject(err))
    //         })
    //     } catch (error) {
    //         throw new BadGatewayException(error);
    //     }
    // }
}
