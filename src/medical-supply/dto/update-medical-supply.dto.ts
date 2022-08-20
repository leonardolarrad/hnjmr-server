import { PartialType } from '@nestjs/mapped-types';
import { CreateMedicalSupplyDto } from './create-medical-supply.dto';

export class UpdateMedicalSupplyDto extends PartialType(CreateMedicalSupplyDto) {}
