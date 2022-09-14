import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { User } from '../auth/entities/auth.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoggerAdapter } from '../common/adapters';
import { Order } from '../common/enums/order.enum';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly logger: LoggerAdapter
  ){}

  async findAll(paginationDto: PaginationDto) {
    const { limit = 20 , offset = 0 } = paginationDto;
    const users = await this.userRepository.find({ take: limit, skip: offset });
    this.logger.log(`Found ${users.length} users`, 'UserService');
    return users;
  }

  async find(paginationDto: PaginationDto){

    if (paginationDto.search) {
      return await this.findByTerm(paginationDto);
    } else {
      return await this.findAll(paginationDto);
    }
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findByTerm(paginationDto: PaginationDto) {
    const { limit = 20 , offset = 0, sort = 'id', order = Order.ASC} = paginationDto;
    const term = paginationDto.search;
    const query = this.userRepository.createQueryBuilder()
                  .where('upper(fullName) LIKE :term', { term: `%${term.toUpperCase()}%` })
                  .orderBy(sort, order)
                  .take(limit)
                  .skip(offset)
    const users =  await query.getMany();
    this.logger.log(`Found ${users.length} assets`, 'UserService');
    return users;
  }


  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id: id,
      ...updateUserDto
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    try {
      await this.userRepository.save(user);
      this.logger.log(`Updated user with id ${user.id}`, 'UserService');
      return user;
    } catch (error) {
      this.handleDBError(error);
    }
  }

  private handleDBError(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException('User already exists');
    }
    console.log(error);
    throw new InternalServerErrorException('Please check server logs');
  }

 
}
