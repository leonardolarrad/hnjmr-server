import { Module } from '@nestjs/common';
import { ConfigModule } from './common/config/config.module';
import { ConfigService } from './common/config/config.service';
import { DatabaseModule } from './common/database/database.module';
import { MedicalSupplyModule } from './medical-supply/medical-supply.module';
import { NationalAssetModule } from './national-asset/national-asset.module';
import { PatientModule } from './patient/patient.module';
import { CommonModule } from './common/common.module';




@Module({
  imports: [
    DatabaseModule,
    ConfigModule,
    MedicalSupplyModule,
    NationalAssetModule,
    PatientModule,
    CommonModule,],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get('PORT');
  }
}
