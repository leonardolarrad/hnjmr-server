import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MedicalSupplyService } from './medical-supply.service';
import { MedicalSupplyController } from './medical-supply.controller';
import { MedicalSupply } from './entities/medical-supply.entity';
import { CommonModule } from '../common/common.module';
import { AuthModule } from '../auth/auth.module';


@Module({
  controllers: [MedicalSupplyController],
  providers: [MedicalSupplyService],
  imports: [
    TypeOrmModule.forFeature([MedicalSupply]),
    CommonModule,
    AuthModule
  ],
  exports: [MedicalSupplyService, TypeOrmModule],
})
export class MedicalSupplyModule {}
