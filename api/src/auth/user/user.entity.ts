import { Entity, Column, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
import { CrudEntity } from '../../base/crud.entity';

@Entity()
export class User extends CrudEntity {
    @Column()
    name: string;

    @Column()
    email: string;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto
            .createHmac('sha256', this.password)
            .digest('hex');
    }
    @Column()
    password: string;
}
