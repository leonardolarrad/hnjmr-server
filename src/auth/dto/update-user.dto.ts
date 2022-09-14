import { PartialType } from "@nestjs/mapped-types";
import { IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { CreateUserDto } from ".";


export class UpdateUserDto extends PartialType(CreateUserDto) {
}