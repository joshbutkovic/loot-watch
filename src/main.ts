import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { LoggerMiddleware } from './shared/middleware/logger.middleware';
// import { HttpExceptionFilter } from './shared/exceptions/http.exception.filter';
// import { ValidationPipe } from '@nestjs/common';
// import * as helmet from 'helmet';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // app.useGlobalPipes(
    //     new ValidationPipe({
    //         whitelist: true,
    //         transform: true,
    //         // disableErrorMessages: true,
    //         // dismissDefaultMessages: true,
    //     }),
    // );
    // app.useGlobalFilters(new HttpExceptionFilter());
    // app.use(helmet());
    app.enableCors();
    await app.listen(5000);
}
bootstrap();
