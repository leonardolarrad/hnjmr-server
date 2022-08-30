import { Type } from "class-transformer";
import { IsEnum, IsOptional, IsPositive, IsString, Min } from "class-validator";
import { Order } from "../enums/order.enum";


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

    @IsOptional()
    @IsString()
    sort?: string;

    @IsEnum(Order)
    @IsOptional()
    order?: Order ;
}