import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CommonModule } from '../common/common.module';
import { LotModule } from '../medical-supply/lot/lot.module';
import { DepartmentModule } from '../department/department.module';
import { NationalAssetModule } from '../national-asset/national-asset.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    CommonModule,
    LotModule,
    DepartmentModule,
    NationalAssetModule,
    AuthModule,
  ],
})
export class SeedModule {}
