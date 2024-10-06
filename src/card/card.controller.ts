import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('category')
  getCategory() {
    return this.cardService.getCategory();
  }

  @Get('sub-category')
  getSubCategory() {
    return this.cardService.getSubCategory();
  }

  @Post('create')
  createCard(
    @Body()
    data: {
      valueRecto: string;
      valueVerso: string;
      nameDeck: string | null;
      nameCat: string | null;
      nameSub: string | null;
    },
  ) {
    console.log(data);

    return this.cardService.createCard(data);
  }
}
