import { Module } from '@nestjs/common';
import { BoxModule } from './box/box.module';
import { DeckModule } from './deck/deck.module';
import { CardModule } from './card/card.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BoxModule, DeckModule, CardModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
