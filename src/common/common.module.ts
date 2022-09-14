import { Module } from '@nestjs/common';
import { LoggerAdapter, BcryptAdapter } from './adapters';


@Module({
  providers: [ LoggerAdapter, BcryptAdapter ],
  exports: [ LoggerAdapter, BcryptAdapter ],
})
export class CommonModule {}
