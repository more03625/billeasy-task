import { IsNotEmpty,IsDate, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
    @IsNotEmpty()
    @IsString()
    first_name: string;

    @IsNumber()
    @IsNotEmpty()
    department_id: number

    doj:Date
}