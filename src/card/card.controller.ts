import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CardService } from './card.service';

export type PushCard = {
  cardId: string;
  success: boolean;
  sectionCardId: string | undefined;
};

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  getCard() {
    return this.cardService.getCard();
  }

  @Get('learn/:id')
  getLearnSection(@Param('id') id: string) {
    return this.cardService.getLearnSection(id);
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

  @Post('/section')
  pushCardInSection(@Body() data: PushCard) {
    return this.cardService.pushCardInSection(data);
  }
}
