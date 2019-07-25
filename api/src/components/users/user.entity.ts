import { Entity, Column } from 'typeorm';
import { CrudEntity } from '../../shared/base/crud.entity';

@Entity()
export class User extends CrudEntity {
    @Column({ length: 128 })
    name: string;

    @Column({ length: 128 })
    email: string;

    @Column({ length: 64, unique: true })
    username: string;

    @Column({ length: 16, nullable: true })
    password: string | undefined;

    @Column({ length: 16, nullable: true })
    passwordHash: string | undefined;
}
