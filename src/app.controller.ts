import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatTextDTO } from './dto/create-cat-text.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTexts() {
    return this.appService.getCatTexts();
  }

  @Post()
  createCatText(@Body() data: CreateCatTextDTO) {
    return this.appService.createCatText(data);
  }

  @Get(':id')
  getCatTextById(@Param() param: { id: string }) {
    return this.appService.getCatTextById(param.id);
  }

  @Patch(':id')
  updateCatTextById(
    @Param() param: { id: string },
    @Body() data: CreateCatTextDTO,
  ) {
    return this.appService.updateCatTextById(param.id, data);
  }
}
