import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            // put in env file
            secretOrPrivateKey: 'secret12356789',
        }),
    ],
    providers: [UserService, AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
