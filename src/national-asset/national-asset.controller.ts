import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { NationalAssetService } from './national-asset.service';
import { CreateNationalAssetDto } from './dto/create-national-asset.dto';
import { UpdateNationalAssetDto } from './dto/update-national-asset.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { Auth } from '../auth/decorators';
import { ValidRoles } from '../auth/interfaces';


@Controller('national-assets')
export class NationalAssetController {
  constructor(private readonly nationalAssetService: NationalAssetService) {}

  @Post()
  create(@Body() createNationalAssetDto: CreateNationalAssetDto) {
    return this.nationalAssetService.create(createNationalAssetDto);
  }

  @Get()
  find(@Query() paginationDto: PaginationDto) {
    return this.nationalAssetService.find(paginationDto);
  }

  @Get(':id')
  findByTerm(@Param('id', ParseIntPipe) id: string) {
    return this.nationalAssetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateNationalAssetDto: UpdateNationalAssetDto) {
    return this.nationalAssetService.update(+id, updateNationalAssetDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.ADMIN)
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.nationalAssetService.remove(+id);
  }
}
