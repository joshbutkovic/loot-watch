import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateBudgetDto {
    @IsNotEmpty()
    readonly id: number;
    @IsNotEmpty()
    readonly title: string;
    @IsNotEmpty()
    readonly description: string;
    readonly updatedAt: Date;
    // readonly updatedBy: string;
}