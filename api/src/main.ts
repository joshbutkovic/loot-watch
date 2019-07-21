import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exceptions/http.exception.filter';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            transform: true,
            // disableErrorMessages: true,
            // dismissDefaultMessages: true,
        }),
    );
    // app.useGlobalFilters(new HttpExceptionFilter());
    await app.listen(5000);
}
bootstrap();
