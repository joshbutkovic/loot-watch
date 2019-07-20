import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateBudgetDto {
    readonly id: number;
    @IsNotEmpty()
    readonly title: string;
    @IsNotEmpty()
    readonly description: string;
    readonly createdAt: Date;
    // readonly creadtedBy: string;
    readonly updatedAt: Date;
    // readonly updatedBy: string;
}