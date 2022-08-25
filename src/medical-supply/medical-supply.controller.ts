import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { MedicalSupplyService } from './medical-supply.service';
import { CreateMedicalSupplyDto } from './dto/create-medical-supply.dto';
import { UpdateMedicalSupplyDto } from './dto/update-medical-supply.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Controller('medical-supply')
export class MedicalSupplyController {
  constructor(private readonly medicalSupplyService: MedicalSupplyService) {}

  @Post()
  create(@Body() createMedicalSupplyDto: CreateMedicalSupplyDto) {
    return this.medicalSupplyService.create(createMedicalSupplyDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.medicalSupplyService.findAll(paginationDto);
  }

  @Get(':id')
  findOneById(@Param('id',ParseIntPipe) id: string) {
    return this.medicalSupplyService.findOneById(+id);
  }

  @Get('name/:name')
  findByName(@Param('name') name: string, @Query() paginationDto: PaginationDto) {
    return this.medicalSupplyService.findByName(name, paginationDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateMedicalSupplyDto: UpdateMedicalSupplyDto) {
    return this.medicalSupplyService.update(+id, updateMedicalSupplyDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.medicalSupplyService.remove(+id);
  }
}
