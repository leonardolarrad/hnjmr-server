import { Injectable } from '@nestjs/common';
import { CreateNationalAssetDto } from './dto/create-national-asset.dto';
import { UpdateNationalAssetDto } from './dto/update-national-asset.dto';

@Injectable()
export class NationalAssetService {
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
