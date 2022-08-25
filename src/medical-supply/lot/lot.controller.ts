import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { LotService } from './lot.service';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';
import { PaginationDto } from '../../common/dtos/pagination.dto';

@Controller('lot')
export class LotController {
  constructor(private readonly lotService: LotService) {}

  @Post()
  create(@Body() createLotDto: CreateLotDto) {
    return this.lotService.create(createLotDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.lotService.findAll(paginationDto);
  }

  @Get(':name')
  findByName(@Param('name') name: string, @Query() paginationDto: PaginationDto) {
    return this.lotService.findByName(name, paginationDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateLotDto: UpdateLotDto) {
    return this.lotService.update(+id, updateLotDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.lotService.remove(+id);
  }
}
