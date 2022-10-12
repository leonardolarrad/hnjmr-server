import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { Auth } from '../auth/decorators';
import { ValidRoles } from '../auth/interfaces';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { AssetService } from './asset.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Controller('assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetService.create(createAssetDto);
  }

  @Get()
  find(@Query() paginationDto: PaginationDto){
    return this.assetService.find(paginationDto);
  }

  @Get(':id')
  findByTerm(@Param('id', ParseIntPipe) id: string) {
    return this.assetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateAssetDto: UpdateAssetDto) {
    return this.assetService.update(+id, updateAssetDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.ADMIN)
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.assetService.remove(+id);
  }
}
