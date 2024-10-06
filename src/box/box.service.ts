import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BoxService {
  constructor(private readonly prisma: PrismaService) {}

  async getMyBoxes() {
    const myboxes = await this.prisma.box.findMany();
    return myboxes;
  }

  async createBox(data: { name: string }) {
    await this.prisma.box.create({
      data: {
        name: data.name,
      },
    });
  }
}
