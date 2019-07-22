import { Entity, Column, ManyToOne } from 'typeorm';
import { CrudEntity } from '../../shared/base/crud.entity';
import { Budget } from '../budgets/budget.entity';

@Entity()
export class Tag extends CrudEntity {
    @Column({ length: '64' })
    name: string;

    @Column()
    budgetId: number;

    @ManyToOne(type => Budget, budget => budget.budgetItems)
    budget: Budget;
}
