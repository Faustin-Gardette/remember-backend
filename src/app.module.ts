import { Module } from '@nestjs/common';
import { CardModule } from './card/card.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { SectionModule } from './section/section.module';

@Module({
  imports: [
    CardModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    SectionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
