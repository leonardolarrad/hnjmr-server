import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NationalAssetService } from './national-asset.service';
import { CreateNationalAssetDto } from './dto/create-national-asset.dto';
import { UpdateNationalAssetDto } from './dto/update-national-asset.dto';

@Controller('national-asset')
export class NationalAssetController {
  constructor(private readonly nationalAssetService: NationalAssetService) {}

  @Post()
  create(@Body() createNationalAssetDto: CreateNationalAssetDto) {
    return this.nationalAssetService.create(createNationalAssetDto);
  }

  @Get()
  findAll() {
    return this.nationalAssetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nationalAssetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNationalAssetDto: UpdateNationalAssetDto) {
    return this.nationalAssetService.update(+id, updateNationalAssetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nationalAssetService.remove(+id);
  }
}
