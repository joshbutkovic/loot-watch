import { IsNotEmpty } from 'class-validator';

export class UpdateBudgetItemDto {
    readonly id: number;
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly description: string;
    @IsNotEmpty()
    readonly amount: number;

    readonly updatedAt: Date;
    // readonly updatedBy: string;
}