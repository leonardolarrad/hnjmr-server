import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerAdapter } from '../common/adapters/logger.adapter';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {

  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    private readonly logger : LoggerAdapter,
  ){}

  async create(createDepartmentDto: CreateDepartmentDto) {
    try {
      const department = this.departmentRepository.create(createDepartmentDto);
      await this.departmentRepository.save(department);
      this.logger.log(`Created department with id ${department.id_department}`, 'DepartmentService');
      return department;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    const departments = await this.departmentRepository.find();
    this.logger.log(`Found ${departments.length} departments`, 'DepartmentService');
    return departments;
  }

  async findOne(id: number) {
    const department = await this.departmentRepository.findOne({ where: { id_department: id } });
    if (!department) {
      throw new NotFoundException('Department not found');
    }
    this.logger.log(`Found department with id ${department.id_department}`, 'DepartmentService');
    return department;
  }

  async findByName(name: string) {
    const query = this.departmentRepository.createQueryBuilder()
                  .where('UPPER(name_department) LIKE :name', { name: `%${name.toUpperCase()}%` })
                  .orderBy('name_department', 'ASC');
    const departments = await query.getMany();
    this.logger.log(`Found ${departments.length} departments`, 'DepartmentService');
    return departments;
  }  

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.departmentRepository.preload({
      id_department : id,
      ...updateDepartmentDto,
    })
    if (!department) {
      throw new NotFoundException('Department not found');
    }
    try {
      await this.departmentRepository.save(department);
      this.logger.log(`Updated department with id ${department.id_department}`, 'DepartmentService');
      return department;
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    const department = await this.findOne(id);
    this.departmentRepository.remove(department);
    this.logger.log(`Removed department with id ${department.id_department}`, 'DepartmentService');
  }

  private handleError(error: any) {
    this.logger.error(error.message, 'DepartamentService');
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException('Error check logs ');
  }

  async deleteAllDepartments() {
    const query = this.departmentRepository.createQueryBuilder();
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleError(error);
    }
  }


}
