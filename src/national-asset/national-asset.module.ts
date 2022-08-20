import { Module } from '@nestjs/common';
import { NationalAssetService } from './national-asset.service';
import { NationalAssetController } from './national-asset.controller';

@Module({
  controllers: [NationalAssetController],
  providers: [NationalAssetService]
})
export class NationalAssetModule {}
