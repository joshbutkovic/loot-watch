import { Entity, Column, ManyToOne, TableForeignKey } from 'typeorm';
import { CrudEntity } from '../base/crud.entity';
import { Budget } from '../budget/budget.entity';

@Entity()
export class BudgetItem extends CrudEntity {
    @Column({ length: '64' })
    name: string;

    @Column({ length: '500' })
    description: string;

    @Column()
    amount: number;

    @Column()
    budgetId: number;

    @ManyToOne(type => Budget, budget => budget.budgetItems)
    budget: Budget;

}
