import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { IsOnlyDate } from "../../common/decorators/date.decorator";

export class CreateNationalAssetDto {
    
    @IsNotEmpty()
    @IsString()
    @Length(1, 512)
    name: string;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    description?: string;

    @IsNotEmpty()
    @IsString()
    @Length(1, 128)
    status: string;

    @IsString()
    @Length(1, 1024)
    @IsOptional()
    note?: string;

    @IsNotEmpty()
    @IsOnlyDate()
    date_acquisition: Date;

    @IsNotEmpty()
    @IsOnlyDate()
    date_discontinued: Date;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    storage?: string;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    source?: string;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    destination?: string;

}
