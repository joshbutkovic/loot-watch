import { Entity, Column, ManyToOne } from 'typeorm';
import { CrudEntity } from '../base/crud.entity';
import { Budget } from '../budget/budget.entity';

@Entity()
export class Tag extends CrudEntity {
    @Column({ length: '64' })
    name: string;

    @Column()
    budgetId: number;

    @ManyToOne(type => Budget, budget => budget.budgetItems)
    budget: Budget;
}
