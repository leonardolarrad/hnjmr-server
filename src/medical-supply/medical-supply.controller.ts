import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalSupplyService } from './medical-supply.service';
import { CreateMedicalSupplyDto } from './dto/create-medical-supply.dto';
import { UpdateMedicalSupplyDto } from './dto/update-medical-supply.dto';

@Controller('medical-supply')
export class MedicalSupplyController {
  constructor(private readonly medicalSupplyService: MedicalSupplyService) {}

  @Post()
  create(@Body() createMedicalSupplyDto: CreateMedicalSupplyDto) {
    return this.medicalSupplyService.create(createMedicalSupplyDto);
  }

  @Get()
  findAll() {
    return this.medicalSupplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalSupplyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalSupplyDto: UpdateMedicalSupplyDto) {
    return this.medicalSupplyService.update(+id, updateMedicalSupplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalSupplyService.remove(+id);
  }
}
