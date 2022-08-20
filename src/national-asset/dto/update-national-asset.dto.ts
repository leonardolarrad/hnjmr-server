import { PartialType } from '@nestjs/mapped-types';
import { CreateNationalAssetDto } from './create-national-asset.dto';

export class UpdateNationalAssetDto extends PartialType(CreateNationalAssetDto) {}
