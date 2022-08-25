import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LotService } from './lot.service';
import { LotController } from './lot.controller';
import { Lot } from './entities/lot.entity';
import { Supplier } from './entities/supplier.entity';
import { MedicalSupplyModule } from '../medical-supply.module';
import { CommonModule } from '../../common/common.module';

@Module({
  controllers: [LotController],
  providers: [LotService],
  imports: [
    TypeOrmModule.forFeature([Lot, Supplier]),
    MedicalSupplyModule,
    CommonModule,
  ],
})
export class LotModule {}
