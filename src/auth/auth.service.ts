import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto';
import { User } from './entities/auth.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { LoggerAdapter, BcryptAdapter } from '../common/adapters';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly bcrypt : BcryptAdapter,
    private readonly logger : LoggerAdapter
  ) {}


  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...userData } = createUserDto;
      const user = this.userRepository.create({
        ...userData,
        password: this.bcrypt.encrypt(password, 10)
      });
      await this.userRepository.save(user);
      this.logger.log(`User ${user.email} created`, 'AuthService');
      return {
        ...user,
        token: this.getJWTToken({id: user.id})
      };
    } catch (error) {
      this.handleDBError(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.userRepository.findOne({ 
      where: { email },
      select: {email: true, password: true, id: true}
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials (email)');
    }

    if (!this.bcrypt.compare(password, user.password)) {
      throw new UnauthorizedException('Invalid credentials (password)');
    }
    this.logger.log(`User ${user.email} logged in`, 'AuthService');
    return {
      ...user,
      token: this.getJWTToken({id: user.id})
    };
  }

  async updateUser( user: User, updateUserDto: UpdateUserDto) {
    
    if (updateUserDto.password) {
      updateUserDto.password = this.bcrypt.encrypt(updateUserDto.password, 10);
    }
    const userDB = await this.userRepository.preload({
      id: user.id,
      ...updateUserDto
    });

    try {
      await this.userRepository.save(userDB);
      this.logger.log(`User ${userDB.email} updated`, 'AuthService');
      return userDB;
    } catch (error) {
      this.handleDBError(error);
    }
  }

  checkAuthStatus(user: User) {
    return {
      ...user,
      token: this.getJWTToken({id: user.id})
    };
  }

  private getJWTToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }


  private handleDBError(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException('User already exists');
    }
    console.log(error);
    throw new InternalServerErrorException('Please check server logs');
  }
 
}
