import { Module } from '@nestjs/common';
import { LoggerAdapter } from './adapters/logger.adapter';


@Module({
  providers: [ LoggerAdapter],
  exports: [ LoggerAdapter],
})
export class CommonModule {}
