import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PaginatonDto } from '../common/dtos/pagination.dto';
import { LoggerAdapter } from '../common/adapters/logger.adapter';
import { CreateMedicalSupplyDto } from './dto/create-medical-supply.dto';
import { UpdateMedicalSupplyDto } from './dto/update-medical-supply.dto';
import { MedicalSupply } from './entities/medical-supply.entity';

@Injectable()
export class MedicalSupplyService {

  constructor(
    @InjectRepository(MedicalSupply)
    private readonly medicalRepository : Repository<MedicalSupply>,
    private readonly logger: LoggerAdapter,
  ) {}

  async create(createMedicalSupplyDto: CreateMedicalSupplyDto) {
    try {
      const medicalSupply = this.medicalRepository.create(createMedicalSupplyDto);
      await this.medicalRepository.save(medicalSupply);
      this.logger.log(`Created medicalSupply with id ${medicalSupply.id_medical_supplies}`, 'Medical-SupplyService');
      return medicalSupply;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll(paginationDto: PaginatonDto) {
    const { limit = 20 , offset = 0} = paginationDto;
    const medical_supplies = await this.medicalRepository.find({
      take: limit,
      skip: offset,
      order: {
        name_material: "ASC",
        id_medical_supplies: "DESC"
      }
    });
    this.logger.log(`Found ${medical_supplies.length} medical_supplies`, 'Medical-SupplyService');
    return medical_supplies;
  }

  async findOneById(id: number) {
    const medicalSupply = await this.medicalRepository.findOne({ where: { id_medical_supplies: id } });
    if (!medicalSupply) {
      throw new NotFoundException('Medical Supply not found');
    }
    return medicalSupply;
  }

  async findByName(name: string, paginationDto: PaginatonDto) {
    const { limit = 20 , offset = 0} = paginationDto;
    const query = this.medicalRepository.createQueryBuilder()
                  .where('name_material LIKE :name', { name: `%${name}%` })
                  .take(limit)
                  .skip(offset)
                  .orderBy('name_material', 'ASC');
    const medical_supplies = await query.getMany();
    this.logger.log(`Found ${medical_supplies.length} medical_supplies`, 'Medical-SupplyService');
    return medical_supplies;
  }

  async update(id: number, updateMedicalSupplyDto: UpdateMedicalSupplyDto) {
    const medicalSupply = await this.medicalRepository.preload({
      id_medical_supplies: id,
      ...updateMedicalSupplyDto,
    })
    if (!medicalSupply) {
      throw new NotFoundException('Medical Supply not found');
    }
    try {
      await this.medicalRepository.save(medicalSupply);
      this.logger.log(`Updated medicalSupply with id ${id}`, 'Medical-SupplyService');
      return medicalSupply;
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    const medicalSupply = await this.findOneById(id);
    this.medicalRepository.remove(medicalSupply);
    this.logger.log(`Removed medicalSupply with id ${id}`, 'Medical-SupplyService');
  }

  private handleError(error: any) {
    this.logger.error(error.message, 'Medical-SupplyService');
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException('Error check logs ');
  }
}
