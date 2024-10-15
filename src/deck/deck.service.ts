import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DeckService {
  constructor(private readonly prisma: PrismaService) {}

  // async getMyDecks() {
  //   const mydecks = await this.prisma.deck.findMany();
  //   return mydecks;
  // }
}
