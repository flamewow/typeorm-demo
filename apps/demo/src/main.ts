import { NestFactory } from '@nestjs/core';
import { DemoModule } from './demo.module';
import { Logger } from '@nestjs/common';

const PORT = 3000;
async function bootstrap() {
  const app = await NestFactory.create(DemoModule);
  await app.listen(PORT);
  Logger.log(`app started at http://localhost:${PORT}`);
}
bootstrap();
