import { IsNotEmpty } from 'class-validator';

export class CreateTagDto {
    readonly id: number;

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly budgetId: number;

    readonly createdAt: Date;

    readonly updatedAt: Date;
}
