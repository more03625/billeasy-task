import { Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from '../services';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  getHello(): string {
    return this.employeeService.getHello();
  }

  @Post()
  async post(){
    
  }
}
