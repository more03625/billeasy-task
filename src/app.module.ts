import { Module } from '@nestjs/common';
import { ArrayModule } from './array';
import { EmployeeModule } from './employee';

@Module({
  imports: [EmployeeModule, ArrayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
