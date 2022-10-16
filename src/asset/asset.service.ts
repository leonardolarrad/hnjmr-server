import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { Order } from '../common/enums/order.enum';
import { LoggerAdapter } from '../common/adapters';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetService {

  constructor(
    @InjectRepository(Asset)
    private readonly assetRepository: Repository<Asset>,
    private readonly logger: LoggerAdapter,
  ) {}


  async create(createAssetDto: CreateAssetDto) {
    try {
      const asset: Asset = this.assetRepository.create(createAssetDto);
      await this.assetRepository.save(asset);
      this.logger.log(`Created asset with id ${asset.id_asset}`, 'AssetService');
      return asset;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 20, offset = 0, sort = 'id_asset', order = Order.ASC } = paginationDto;
    const assets = await this.assetRepository.find({
      take: limit,
      skip: offset,
      order: {
        [sort]: order,
      },
    });
    this.logger.log(`Found ${assets.length} assets`, 'AssetService');
    return assets;
  }

  async find (paginationDto: PaginationDto) {
    if (paginationDto.search) {
      return await this.findByTerm(paginationDto);
    } else {
      return await this.findAll(paginationDto);
    }
  }

  async findByTerm(paginationDto: PaginationDto) {
    const { limit = 20 , offset = 0, sort = 'id_asset', order = Order.ASC} = paginationDto;
    const term = paginationDto.search;
    const query = this.assetRepository.createQueryBuilder()
                  .where('upper(Asset.group) like :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('upper(subgroup) like :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('upper(section) like :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('upper(num) like :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('upper(Asset.desc) like :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('upper(tower) like :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('upper(floor) like :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('upper(room) like :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('upper(serial) like :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('upper(cin) like :term', { term: `%${term.toUpperCase()}%` })
                  .orWhere('unit_value::text like :term', { term: `%${term}%` })
                  .orWhere('quantity::text like :term', { term: `%${term}%` })
                  .orderBy(sort, order)
                  .take(limit)
                  .skip(offset);
    console.log(query.getSql());
    const assets = await query.getMany();
    this.logger.log(`Found ${assets.length} assets`, 'AssetService');
    return assets;
  }


  async findOne(id: number) {
    const asset = await this.assetRepository.findOne({ where: { id_asset: id } });
    if (!asset) {
      throw new NotFoundException('Asset not found');
    }
    return asset;
  }

  async update(id: number, updateAssetDto: UpdateAssetDto) {
    const asset = await this.assetRepository.preload({
      id_asset: id,
      ...updateAssetDto,
    })
    if (!asset) {
      throw new NotFoundException('Asset not found');
    }
    try {
      await this.assetRepository.save(asset);
      this.logger.log(`Updated asset with id ${asset.id_asset}`, 'AssetService');
      return asset;
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    const asset = await this.findOne(id);
    this.assetRepository.remove(asset);
    this.logger.log(`Removed asset with id ${asset.id_asset}`, 'AssetService');
  }

  private handleError(error: any) {
    this.logger.error(error.message, 'National-AssetService');
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException('Error check logs ');
  }
}
