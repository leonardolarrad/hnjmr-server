import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { LotService } from './lot.service';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';
import { PaginationDto } from '../../common/dtos/pagination.dto';
import { Auth } from '../../auth/decorators';
import { ValidRoles } from '../../auth/interfaces';


@Controller('lots')
export class LotController {
  constructor(private readonly lotService: LotService) {}

  @Post()
  create(@Body() createLotDto: CreateLotDto) {
    return this.lotService.create(createLotDto);
  }

  @Get()
  find(@Query() paginationDto: PaginationDto) {
    return this.lotService.find(paginationDto);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: string) {
    return this.lotService.findOneById(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateLotDto: UpdateLotDto) {
    return this.lotService.update(+id, updateLotDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.ADMIN)
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.lotService.remove(+id);
  }

  @Get('/suppliers/all')
  findAllSuppliers() {
    return this.lotService.findAllSuppliers();
  }
}
