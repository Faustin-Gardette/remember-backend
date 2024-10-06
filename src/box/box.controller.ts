import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoxService } from './box.service';

@Controller('box')
export class BoxController {
  constructor(private readonly boxService: BoxService) {}

  @Get()
  getMyBoxes() {
    return this.boxService.getMyBoxes();
  }

  @Post()
  createBox(@Body() data: { name: string }) {
    return this.boxService.createBox(data);
  }
}
