import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BoxService {
  constructor(private readonly prisma: PrismaService) {}

  async getMyBoxe(userId: string) {
    return await this.prisma.box.findUnique({
      where: {
        userId,
      },
      include: {
        sections: true,
      },
    });
  }

 
}
