import { Controller, Get, Param } from '@nestjs/common';
import { SectionService } from './section.service';

@Controller('section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Get('learn/:id')
  getLearnSection(@Param('id') id: string) {
    return this.sectionService.getLearnSection(id);
  }
}
