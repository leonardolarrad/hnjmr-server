import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from '../common/dtos/pagination.dto';
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


  async create(createNationalAssetDto: CreateNationalAssetDto) {
    try {
      const asset = this.assetRepository.create(createNationalAssetDto);
      await this.assetRepository.save(asset);
      this.logger.log(`Created asset with id ${asset.id_asset}`, 'National-AssetService');
      return asset;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 20 , offset = 0} = paginationDto;
    const assets = await this.assetRepository.find({
      take: limit,
      skip: offset,
      order: {
        name: "ASC",
        id_asset: "ASC"
      }
    });
    this.logger.log(`Found ${assets.length} assets`, 'National-AssetService');
    return assets;
  }

  async find(paginationDto: PaginationDto){

    if (paginationDto.search) {
      return await this.findByTerm(paginationDto);
    } else {
      return await this.findAll(paginationDto);
    }
  }



  async findOne(id: number) {
    const asset = await this.assetRepository.findOne({ where: { id_asset: id } });
    if (!asset) {
      throw new NotFoundException('Asset not found');
    }
    return asset;
  }

  async findByTerm(paginationDto: PaginationDto) {
    const { limit = 20 , offset = 0} = paginationDto;
    const term = paginationDto.search;
    const query = this.assetRepository.createQueryBuilder()
                  .where('upper(name) LIKE :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('UPPER(description) LIKE :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('UPPER(status) LIKE :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('UPPER(storage) LIKE :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('UPPER(destination) LIKE :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('UPPER(source) LIKE :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('date_acquisition::text LIKE :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('date_discontinued::text LIKE :term', { term: `%${term.toUpperCase()}%` })
                  .take(limit)
                  .skip(offset)
    const assets =  await query.getMany();
    this.logger.log(`Found ${assets.length} assets`, 'National-AssetService');
    return assets;
  }

  async update(id: number, updateNationalAssetDto: UpdateNationalAssetDto) {
    const asset = await this.assetRepository.preload({
      id_asset: id,
      ...updateNationalAssetDto,
    })
    if (!asset) {
      throw new NotFoundException('Asset not found');
    }
    try {
      await this.assetRepository.save(asset);
      this.logger.log(`Updated asset with id ${asset.id_asset}`, 'National-AssetService');
      return asset;
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    const asset = await this.findOne(id);
    this.assetRepository.remove(asset);
    this.logger.log(`Removed asset with id ${asset.id_asset}`, 'National-AssetService');
  }

  private handleError(error: any) {
    this.logger.error(error.message, 'National-AssetService');
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException('Error check logs ');
  }

  async deleteAllAssets() {
    const query = this.assetRepository.createQueryBuilder();
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleError(error);
    }
  }
}
