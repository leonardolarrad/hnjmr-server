import { IsArray, IsBoolean, IsOptional, IsString } from "class-validator";


export class UpdateUserDto {

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;

    @IsString({ each: true })
    @IsOptional()
    @IsArray()
    roles?: string[];
}
