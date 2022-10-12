import { IsInt, IsNotEmpty, IsOptional, IsString, Length, Min } from "class-validator";

export class CreateAssetDto {
    
    @IsString()
    @Length(1, 512)
    @IsOptional()
    group?: string;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    subgroup?: string;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    section?: string;

    @IsString()
    @Length(1, 128)
    @IsOptional()
    num?: string;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    desc?: string;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    tower?: string;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    floor?: string;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    room?: string;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    serial?: string;

    @IsString()
    @Length(1, 512)
    @IsOptional()
    cin?: string;

    @IsInt()
    @Min(0)
    @IsOptional()
    unit_value?: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    quantity?: number;
}
