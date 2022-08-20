import { Module } from '@nestjs/common';
import { ConfigModule } from './common/config/config.module';
import { ConfigService } from './common/config/config.service';
import { DatabaseModule } from './common/database/database.module';




@Module({
  imports: [
    DatabaseModule,
    ConfigModule,],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get('PORT');
  }
}
