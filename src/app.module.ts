import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetsModule } from './components/budgets/budgets.module';
import { BudgetItemsModule } from './components/budget-items/budget-items.module';
import { TagsModule } from './components/tags/tags.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { AuthModule } from './components/auth/auth.module';
// import { AuthService } from './auth/auth.service';

// https://github.com/lujakob/nestjs-realworld-example-app
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            // dropSchema: true
        }),
        BudgetsModule,
        BudgetItemsModule,
        TagsModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({ path: '/budgets', method: RequestMethod.POST });
    }
}
