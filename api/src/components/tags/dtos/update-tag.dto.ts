import { IsNotEmpty } from 'class-validator';

export class UpdateTagDto {
    @IsNotEmpty()
    readonly id: number;

    @IsNotEmpty()
    readonly name: string;

    readonly updatedAt: Date;
}
