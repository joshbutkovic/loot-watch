
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class CrudEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // @Column()
    // createdBy: string;

    // @Column()
    // updatedBy: string;
}