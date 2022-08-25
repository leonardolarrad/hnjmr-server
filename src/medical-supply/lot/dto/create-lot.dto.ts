import { IsInt, IsNotEmpty, IsOptional, Min } from "class-validator";
import { IsOnlyDate } from "../../../common/decorators/date.decorator";


export class CreateLotDto {
    @IsOnlyDate()
    @IsNotEmpty()
    date_delivery: Date;

    @IsInt()
    @Min(1)
    stock: number;

    @IsOptional()
    @IsOnlyDate()
    due_date?: Date;

    @IsInt()
    @IsNotEmpty()
    id_medical_supplies: number;

    @IsInt()
    @IsOptional()
    id_suppliers?: number;

}

