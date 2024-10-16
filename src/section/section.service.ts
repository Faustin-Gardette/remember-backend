import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SectionService {
  constructor(private readonly prisma: PrismaService) {}

  async getLearnSection(id: string) {
    return await this.prisma.learnSection.findUnique({
      where: {
        userId: id,
      },
      select: {
        id: true,
        card: true,
      },
    });
  }

  //   @Cron('0 19 * * *')
  //   async handleSections() {
  //     const today = new Date();
  //     const currentDay = today.getDate(); // Jour du mois (1-31)
  //     const currentMonth = today.getMonth() + 1; // Mois (1-12)
  //     const currentDayOfWeek = today.getDay(); // Jour de la semaine (0-6)

  // ------------ Surement mieux de récup via user les sections pour avoir learnsectionId et co les cards

  //     // Récupérer toutes les sections actives
  //     const sections = await this.prisma.section.findMany();

  //     for (const section of sections) {
  //       let shouldTrigger = false;

  //       // Vérifier intervalDays
  //       if (section.intervalDays && section.lastTriggeredAt) {
  //         const daysSinceLastTrigger = Math.floor(
  //           (today.getTime() - new Date(section.lastTriggeredAt).getTime()) /
  //             (1000 * 60 * 60 * 24),
  //         );
  //         if (daysSinceLastTrigger >= section.intervalDays) {
  //           shouldTrigger = true;
  //         }
  //       }

  //       // Vérifier daysOfMonth
  //       if (section.daysOfMonth && section.daysOfMonth.includes(currentDay)) {
  //         shouldTrigger = true;
  //       }

  //       // Vérifier months
  //       if (section.months && section.months.includes(currentMonth)) {
  //         shouldTrigger = true;
  //       }

  //       // Vérifier daysOfWeek
  //       if (section.daysOfWeek && section.daysOfWeek.includes(currentDayOfWeek)) {
  //         shouldTrigger = true;
  //       }

  //       if (shouldTrigger) {
  //         // // Déclencher la section (par exemple, envoyer des notifications ou préparer les cartes)
  //         // await this.sectionService.triggerSection(section);
  //         // // Mettre à jour la date du dernier déclenchement
  //         // await this.sectionService.updateLastTriggeredAt(section.id, today);
  //       }
  //     }
  //   }
}
