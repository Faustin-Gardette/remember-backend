import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoxService } from './box.service';

@Controller('box')
export class BoxController {
  constructor(private readonly boxService: BoxService) {}

  @Get('/:userId')
  getMyBoxe(@Param('userId') userId: string) {
    return this.boxService.getMyBoxe(userId);
  }
}
