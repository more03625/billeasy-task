import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateEmployeeDto } from '../dtos';

@Injectable()
export class EmployeeService {

  constructor(
    @InjectModel() private readonly knex: Knex
  ) { }
  async addEmployee(payload: CreateEmployeeDto): Promise<Record<string, any>> {
    try {
      const employees = await this.knex.table('employees').insert({
        'first_name': payload.first_name,
        'department_id': payload.department_id,
        'doj': payload.doj,
      })

      if (employees) {
        return { status: HttpStatus.OK, message: 'Employee has been inserted successfully!', error: false }
      }
    } catch (err) {
      // Use sentry.io over here to log all the things.
      throw new HttpException(err, HttpStatus.BAD_REQUEST)
    }
  }
}
