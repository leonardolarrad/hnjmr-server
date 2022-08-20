import { Module } from '@nestjs/common';
import { MedicalSupplyService } from './medical-supply.service';
import { MedicalSupplyController } from './medical-supply.controller';

@Module({
  controllers: [MedicalSupplyController],
  providers: [MedicalSupplyService]
})
export class MedicalSupplyModule {}
