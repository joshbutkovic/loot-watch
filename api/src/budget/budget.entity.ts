import { Entity, Column, OneToMany, JoinTable } from 'typeorm';
import { CrudEntity } from '../base/crud.entity';
import { BudgetItem } from '../budget-items/budget-item.entity';

@Entity()
export class Budget extends CrudEntity {
    @Column({ length: '256' })
    title: string;

    @Column({ length: '256' })
    description: string;

    @OneToMany(type => BudgetItem, budgetItem => budgetItem.budget, {
        eager: true,
    })
    @JoinTable()
    budgetItems: BudgetItem[];
}
