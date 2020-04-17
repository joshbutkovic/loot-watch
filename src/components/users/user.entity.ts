import { Entity, Column } from 'typeorm';
import { CrudEntity } from '../../shared/base/crud.entity';

@Entity()
export class User extends CrudEntity {
    @Column({ length: 50, unique: true })
    username: string;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 100, nullable: true })
    password: string | undefined;

    @Column({ length: 100, nullable: true })
    passwordHash: string | undefined;

    @Column({ length: 500 })
    email: string;
}
