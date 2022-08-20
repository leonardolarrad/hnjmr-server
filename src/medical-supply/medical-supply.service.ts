import { Injectable } from '@nestjs/common';
import { CreateMedicalSupplyDto } from './dto/create-medical-supply.dto';
import { UpdateMedicalSupplyDto } from './dto/update-medical-supply.dto';

@Injectable()
export class MedicalSupplyService {
  create(createMedicalSupplyDto: CreateMedicalSupplyDto) {
    return 'This action adds a new medicalSupply';
  }

  findAll() {
    return `This action returns all medicalSupply`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalSupply`;
  }

  update(id: number, updateMedicalSupplyDto: UpdateMedicalSupplyDto) {
    return `This action updates a #${id} medicalSupply`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalSupply`;
  }
}
