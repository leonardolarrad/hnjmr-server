import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { LoggerAdapter } from '../../common/adapters/logger.adapter';
import { MedicalSupplyService } from '../medical-supply.service';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';
import { Lot } from './entities/lot.entity';
import { Supplier } from './entities/supplier.entity';
import { PaginationDto } from '../../common/dtos/pagination.dto';

@Injectable()
export class LotService {

  constructor(
    private readonly medicalSupplyService: MedicalSupplyService,
    @InjectRepository(Lot)
    private readonly lotRepository : Repository<Lot>,
    @InjectRepository(Supplier)
    private readonly supplierRepository : Repository<Supplier>,
    private readonly logger: LoggerAdapter,
  ) {}

  async create(createLotDto: CreateLotDto) {
    try {
      const { id_medical_supplies, id_suppliers, ...lotDetails } = createLotDto;
      const medicalSupply = await this.medicalSupplyService.findOneById(id_medical_supplies);
      const supplier = await this.supplierRepository.findOne({ where: { id_suppliers: id_suppliers } });
      const lot = this.lotRepository.create({ ...lotDetails, medicalSupply, supplier });
      await this.lotRepository.save(lot);
      this.logger.log(`Created Lot with id ${lot.id_lots}`, 'LotService')
      return lot;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 20 , offset = 0} = paginationDto;
    const lots = await this.lotRepository.find({
      take: limit,
      skip: offset,
      relations: ['medicalSupply', 'supplier'],
      order: {
        medicalSupply:{
          id_medical_supplies: 'ASC',
        },
      }
    })
    this.logger.log(`Found ${lots.length} lots`, 'LotService')
    return lots;
  }

  async findOneById(id: number) {
    const lot = await this.lotRepository.findOne({ where: { id_lots: id } });
    if (!lot) {
      throw new BadRequestException(`Lot with id ${id} not found`);
    }
    return lot;
  }


  async findByName(name: string, paginationDto: PaginationDto) {
    const { limit = 20 , offset = 0} = paginationDto;
    const lots = await this.lotRepository.createQueryBuilder('lots')
                     .leftJoin('lots.medicalSupply', 'medicalSupply')
                     .leftJoinAndSelect('lots.medicalSupply', 'medicalSupplyType')
                     .where('UPPER(medicalSupply.name_material) LIKE :name', { name: `%${name.toUpperCase()}%` })
                     .take(limit)
                     .skip(offset)
                     .getMany();
    this.logger.log(`Found ${lots.length} lots`, 'LotService')
    return lots;
  }

  async update(id: number, updateLotDto: UpdateLotDto) {
    const lot = await this.lotRepository.preload({
      id_lots: id,
      ...updateLotDto,
    })
    if (!lot) {
      throw new NotFoundException('Lot not found');
    }
    try {
      await this.lotRepository.save(lot);
      this.logger.log(`Updated lot with id ${id}`, 'LotService');
      return lot;
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    const lot = await this.findOneById(id);
    this.lotRepository.remove(lot);
    this.logger.log(`Removed Lot with id ${id}`, 'LotService');
  }


  private handleError(error: any) {
    this.logger.error(error.message, 'LotService');
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException('Error check logs ');
  }
}
