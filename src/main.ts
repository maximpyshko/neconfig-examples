import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigReader } from 'neconfig';
import { AppModule } from './app.module';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigReader);
  const port = config.getIntOrThrow('PORT');
  const host = config.getStringOrThrow('HOST');

  await app.listen(port, host);
  Logger.log(`Listening on http://${host}:${port}`);
})();
