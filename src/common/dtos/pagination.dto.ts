import { Type } from "class-transformer";
import { IsOptional, IsPositive, IsString, Min } from "class-validator";


export class PaginationDto {
    @IsOptional()
    @Type(() => Number)
    @Min(0)
    offset?: number;
    @IsPositive()
    @IsOptional()
    @Type(() => Number)
    limit?: number;
    @IsOptional()
    @IsString()
    search?: string;
}