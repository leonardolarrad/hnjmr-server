import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerAdapter } from './common/adapters/logger.adapter';
import { LoggingInterceptor } from './common/interceptors/logger.interceptor';
import { AllExceptionFilter } from './common/middleware/Excepcion.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  app.useGlobalFilters(new AllExceptionFilter(new LoggerAdapter()));
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerAdapter()));
  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
