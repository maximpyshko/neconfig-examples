import { Module } from "@nestjs/common";
import { NeconfigModule } from 'neconfig';
import * as path from 'path';

@Module({
  imports: [
    NeconfigModule.register({
      readers: [
        { name: 'hash', data: { HOST: 'localhost', PORT: 3000 } }, // default values
        { name: 'env', file: path.resolve(process.cwd(), '.env') }, // read from file and process.env
      ],
    }),
  ],
})
export class AppModule { }
