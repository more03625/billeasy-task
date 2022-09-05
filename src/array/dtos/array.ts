import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ArrayDto {
    @IsNotEmpty()
    @IsNumber()
    number: number;

    @IsNotEmpty()
    @IsString()
    array: string
}