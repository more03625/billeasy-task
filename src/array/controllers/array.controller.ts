import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ArrayDto } from '../dtos';
import { ArrayService } from '../services';

@Controller('array')
export class ArrayController {
  constructor(private readonly arrayService: ArrayService) { }

  @Get()
  async getSizeOfMaxiulSubset(@Body() arrayDto: ArrayDto): Promise<Record<string, any>> {
    const finalResult = await this.arrayService.getSizeOfMaxiulSubset(arrayDto.number, arrayDto.array)
    return finalResult
  }
}
