import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.useWebSocketAdapter(new IoAdapter(app));
  app.enableCors({
    origin: [
      'http://100.29.178.172',
      'http://100.29.178.172:3000',
      'http://100.29.178.172:3001',
      'http://localhost:3000',
      'http://localhost:3001',
    ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
    preflightContinue: true,
  });
  await app.listen(3000);
}
bootstrap();
