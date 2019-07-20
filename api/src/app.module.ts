import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BudgetsModule } from './budget/budgets.module';
import { BudgetItemsModule } from './budget-items/budget-items.module';

// https://github.com/lujakob/nestjs-realworld-example-app
@Module({
  imports: [
    BudgetsModule,
    BudgetItemsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      // dropSchema: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
