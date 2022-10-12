import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetService } from './asset.service';
import { AssetController } from './asset.controller';
import { Asset } from './entities/asset.entity';
import { CommonModule } from '../common/common.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [AssetController],
  providers: [AssetService],
  imports: [
    TypeOrmModule.forFeature([Asset]),
    CommonModule,
    AuthModule
  ],
})
export class AssetModule {}
