import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEmployeeDto } from '../dtos';
import { EmployeeService } from '../services';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async addEmployee(@Body() createUserDto: CreateEmployeeDto): Promise<Record<string, any>>{
    return await this.employeeService.addEmployee(createUserDto)
  }
}
