import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from '../medical-supply/lot/entities/supplier.entity';
import { LoggerAdapter } from '../common/adapters/logger.adapter';
import { DepartmentService } from '../department/department.service';
import { LotService } from '../medical-supply/lot/lot.service';
import { NationalAssetService } from '../national-asset/national-asset.service';
import { initialData } from './data/seed-data';




@Injectable()
export class SeedService{

  constructor(
    private readonly lotService: LotService,
    private readonly departmentService: DepartmentService,
    private readonly nationalAssetService: NationalAssetService,
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
    private readonly logger : LoggerAdapter
  ) {}
  

  async executeSeed() {
    await this.deleteAll();
    await this.insertNewAsset();
    await this.insertNewDepartment();
    await this.insertNewSuppliers();
    await this.insertNewLot();
    return `SEED EXECUTED`;
  }

  private async insertNewAsset(){
    const assets = initialData.seedAssets;
    const insertPromises = [];
    assets.forEach(asset => {
      insertPromises.push(this.nationalAssetService.create(asset));
    });
    await Promise.all(insertPromises);
    this.logger.log(`Inserted ${assets.length} assets`, 'SeedService');
  }

  private async insertNewDepartment(){
    const departments = initialData.seedDepartments;
    const insertPromises = [];
    departments.forEach(department => {
      insertPromises.push(this.departmentService.create(department));
    });
    await Promise.all(insertPromises);
    this.logger.log(`Inserted ${departments.length} departments`, 'SeedService');
  }

  private async insertNewLot(){
    const lots = initialData.seedLots;
    const insertPromises = [];
    lots.forEach(lot => {
      insertPromises.push(this.lotService.create(lot));
    });
    await Promise.all(insertPromises);
    this.logger.log(`Inserted ${lots.length} lots`, 'SeedService');
  }

  private async insertNewSuppliers(){
    const Suppliers = initialData.seedSuppliers;
    const insertPromises = [];
    Suppliers.forEach(supplier => {
      insertPromises.push(this.supplierRepository.save(supplier));
    });
    await Promise.all(insertPromises);
    this.logger.log(`Inserted ${Suppliers.length} suppliers`, 'SeedService');
  }

  

  private async deleteAll(){
    await this.lotService.deleteAllLots();
    await this.supplierRepository.delete({});
    await this.departmentService.deleteAllDepartments();
    await this.nationalAssetService.deleteAllAssets();
  }

  

}
