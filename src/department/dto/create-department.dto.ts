import { IsNotEmpty, Length } from "class-validator";

export class CreateDepartmentDto {
    @IsNotEmpty()
    @Length(1, 100)
    name_department: string;
    
    @IsNotEmpty()
    @Length(1, 15)
    phone_department: string;
}
