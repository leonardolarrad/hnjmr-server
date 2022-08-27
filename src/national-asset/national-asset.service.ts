import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoggerAdapter } from '../common/adapters/logger.adapter';
import { CreateNationalAssetDto } from './dto/create-national-asset.dto';
import { UpdateNationalAssetDto } from './dto/update-national-asset.dto';
import { NationalAsset } from './entities/national-asset.entity';

@Injectable()
export class NationalAssetService {

  constructor(
    @InjectRepository(NationalAsset)
    private readonly assetRepository : Repository<NationalAsset>,
    private readonly logger: LoggerAdapter,
  ) {}


  create(createNationalAssetDto: CreateNationalAssetDto) {
    return 'This action adds a new nationalAsset';
  }

  findAll() {
    return `This action returns all nationalAsset`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nationalAsset`;
  }

  update(id: number, updateNationalAssetDto: UpdateNationalAssetDto) {
    return `This action updates a #${id} nationalAsset`;
  }

  remove(id: number) {
    return `This action removes a #${id} nationalAsset`;
  }
}
