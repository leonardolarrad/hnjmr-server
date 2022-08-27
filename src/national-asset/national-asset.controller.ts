import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { NationalAssetService } from './national-asset.service';
import { CreateNationalAssetDto } from './dto/create-national-asset.dto';
import { UpdateNationalAssetDto } from './dto/update-national-asset.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Controller('national-asset')
export class NationalAssetController {
  constructor(private readonly nationalAssetService: NationalAssetService) {}

  @Post()
  create(@Body() createNationalAssetDto: CreateNationalAssetDto) {
    return this.nationalAssetService.create(createNationalAssetDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.nationalAssetService.findAll(paginationDto);
  }

  @Get(':term')
  findByTerm(@Param('term') term: string, @Query() paginationDto : PaginationDto) {
    return this.nationalAssetService.findByTerm(term, paginationDto);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateNationalAssetDto: UpdateNationalAssetDto) {
    return this.nationalAssetService.update(+id, updateNationalAssetDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.nationalAssetService.remove(+id);
  }
}
