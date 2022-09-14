import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { Department } from './entities/department.entity';
import { CommonModule } from '.././common/common.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService],
  imports: [
    TypeOrmModule.forFeature([Department]),
    CommonModule,
    AuthModule
  ],
  exports: [DepartmentService, TypeOrmModule],
})
export class DepartmentModule {}
