import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardService } from './card.service';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  getCard() {
    return this.cardService.getCard();
  }

  @Post('create')
  createCard(
    @Body()
    data: {
      userId: string;
      recto: string;
      verso: string;
      nameDeck: string | null;
      nameCat: string | null;
      nameSub: string | null;
    },
  ) {
    return this.cardService.createCard(data);
  }

  // @Get('category')
  // getCategory() {
  //   return this.cardService.getCategory();
  // }

  // @Get('sub-category')
  // getSubCategory() {
  //   return this.cardService.getSubCategory();
  // }
}
