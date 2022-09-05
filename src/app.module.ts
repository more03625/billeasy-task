import { Module } from '@nestjs/common';
import { ArrayModule } from './array';
import { EmployeeModule } from './employee';
import { KnexModule } from 'nest-knexjs';
import { ConfigModule } from '@nestjs/config';
@Module({

  imports: [EmployeeModule, ArrayModule,
    ConfigModule.forRoot({}),
    KnexModule.forRoot({
      config: {
        client: 'postgresql',
        version: '5.7',
        useNullAsDefault: true,
        connection: {
          host: process.env.DB_HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
        },
      },
    }),
  ],

  controllers: [],
  providers: [],
})
export class AppModule { }