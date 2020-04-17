import { IsNotEmpty } from 'class-validator';

export class RegisterUserDto {
    readonly id: number;

    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    password: string | undefined;

    @IsNotEmpty()
    passwordHash: string | undefined;

    @IsNotEmpty()
    readonly email: string;

    readonly createdAt: Date;

    readonly updatedAt: Date;

    // readonly creadtedBy: string;
    // readonly updatedBy: string;

    // @Column({ length: 50, unique: true })
    // username: string;

    // @Column({ length: 100 })
    // name: string;

    // @Column({ length: 100, nullable: true })
    // password: string | undefined;

    // @Column({ length: 100, nullable: true })
    // passwordHash: string | undefined;

    // @Column({ length: 500 })
    // email: string;
}
