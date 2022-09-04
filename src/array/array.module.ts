import { Module } from '@nestjs/common';
import { ArrayController } from './controllers';
import { ArrayService } from './services';

@Module({
  imports: [],
  controllers: [ArrayController],
  providers: [ArrayService],
})
export class ArrayModule {}
