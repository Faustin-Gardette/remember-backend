import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PushCard } from './card.controller';

@Injectable()
export class CardService {
  constructor(private readonly prisma: PrismaService) {}

  async getCard() {
    return await this.prisma.card.findMany();
  }

  async createCard(data: {
    userId: string;
    recto: string;
    verso: string;
    nameDeck: string | null;
    nameCat: string | null;
    nameSub: string | null;
  }) {
    const createdCard = await this.prisma.card.create({
      data: {
        userId: data.userId,
        recto: data.recto,
        verso: data.verso,
      },
    });

    await this.prisma.learnSection.update({
      where: {
        userId: data.userId,
      },
      data: {
        card: {
          connect: {
            id: createdCard.id,
          },
        },
      },
    });
  }

  async pushCardInSection(data: PushCard) {
    console.log('data', data);

    if (data.sectionCardId === null || data.success === false) {
      const section = await this.prisma.section.findFirst({
        where: {
          position: 1,
        },
      });

      await this.prisma.card.update({
        where: {
          id: Number(data.cardId),
        },
        data: {
          section: {
            connect: {
              id: section.id,
            },
          },
          learnSection: {
            disconnect: true,
          },
        },
      });
    }
  }
}
