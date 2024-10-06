import { Module } from '@nestjs/common';
import { BoxModule } from './box/box.module';
import { DeckModule } from './deck/deck.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [BoxModule, DeckModule, CardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
