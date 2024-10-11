import { Module } from '@nestjs/common';
import { BoxModule } from './box/box.module';
import { DeckModule } from './deck/deck.module';
import { CardModule } from './card/card.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AutController } from './aut/aut.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BoxModule,
    DeckModule,
    CardModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AutController],
  providers: [],
})
export class AppModule {}
