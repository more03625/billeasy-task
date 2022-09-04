import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { ArrayService } from '../services';

@Controller('array')
export class ArrayController {
  constructor(private readonly arrayService: ArrayService) {}

  @Get()
  async getSizeOfMaxiulSubset(@Req() request: Request): Promise<number> {
    return await this.arrayService.getSizeOfMaxiulSubset(request.body.number, request.body.array);
  }
}
