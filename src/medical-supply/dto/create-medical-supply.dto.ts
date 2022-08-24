import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMedicalSupplyDto {
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    name_material: string;
    @IsString()
    @IsOptional()
    @MaxLength(250)
    description?: string;
}
