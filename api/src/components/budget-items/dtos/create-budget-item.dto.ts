import { IsNotEmpty } from 'class-validator';

export class CreateBudgetItemDto {
    readonly id: number;

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly description: string;

    @IsNotEmpty()
    readonly amount: number;

    @IsNotEmpty()
    readonly budgetId: number;

    readonly createdAt: Date;

    readonly updatedAt: Date;

    // readonly creadtedBy: string;
    // readonly updatedBy: string;
}
