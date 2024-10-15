import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

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

    // return 'success';
  }

  // async getCategory() {
  //   return await this.prisma.category.findMany();
  // }

  // async getSubCategory() {
  //   return await this.prisma.subCategory.findMany();
  // }

  // async createCard(data: {
  //   valueRecto: string;
  //   valueVerso: string;
  //   nameDeck: string | null;
  //   nameCat: string | null;
  //   nameSub: string | null;
  // }) {
  //   const valueDeck = data.nameDeck?.toLowerCase().trim();
  //   const valueCat = data.nameCat?.toLowerCase().trim();
  //   const valueSub = data.nameSub?.toLowerCase().trim();

  //   let deck = null;
  //   let category = null;
  //   let sub = null;

  //   // Vérification et création du deck si nécessaire
  //   if (valueDeck) {
  //     const existingDeck = await this.prisma.deck.findFirst({
  //       where: {
  //         value: valueDeck,
  //       },
  //     });

  //     if (existingDeck) {
  //       deck = { connect: { id: existingDeck.id } };
  //     } else {
  //       const newDeck = await this.prisma.deck.create({
  //         data: {
  //           name: data.nameDeck || '',
  //           value: valueDeck,
  //         },
  //       });
  //       deck = { connect: { id: newDeck.id } }; // Si le deck n'existe pas, on le crée et on le connecte
  //     }
  //   }

  //   // Vérification et création de la catégorie si nécessaire
  //   if (valueCat) {
  //     const existingCategory = await this.prisma.category.findFirst({
  //       where: {
  //         value: valueCat,
  //       },
  //     });

  //     if (existingCategory) {
  //       category = { connect: { id: existingCategory.id } }; // Si la catégorie existe, on la connecte
  //     } else {
  //       const newCategory = await this.prisma.category.create({
  //         data: {
  //           name: data.nameCat || '',
  //           value: valueCat,
  //         },
  //       });
  //       category = { connect: { id: newCategory.id } }; // Si la catégorie n'existe pas, on la crée et on la connecte
  //     }
  //   }

  //   // Vérification et création de la sous-catégorie si nécessaire
  //   if (valueSub) {
  //     const existingSubCategory = await this.prisma.subCategory.findFirst({
  //       where: {
  //         value: valueSub,
  //       },
  //     });

  //     if (existingSubCategory) {
  //       sub = { connect: { id: existingSubCategory.id } }; // Si la sous-catégorie existe, on la connecte
  //     } else {
  //       const newSubCategory = await this.prisma.subCategory.create({
  //         data: {
  //           name: data.nameSub || '',
  //           value: valueSub,
  //         },
  //       });
  //       sub = { connect: { id: newSubCategory.id } }; // Si la sous-catégorie n'existe pas, on la crée et on la connecte
  //     }
  //   }

  //   const createdCard = await this.prisma.card.create({
  //     data: {
  //       recto: data.valueRecto,
  //       verso: data.valueVerso,
  //       deckId: deck?.connect?.id,
  //       categoryId: category?.connect?.id,
  //       subCategoryId: sub?.connect?.id,
  //     },
  //   });

  //   console.log('createdcard', createdCard);

  //   return 'success';
  // }
}
