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

  @Get('/module/:id/prod')
  getProdCatTextById(@Param() param: { id: string }) {
    return this.appService.getProdCatTextById(param.id);
  }

  @Get('/module/:id/dev')
  getDevCatTextById(@Param() param: { id: string }) {
    return this.appService.getDevCatTextById(param.id);
  }

  @Patch(':id')
  updateCatTextById(
    @Param() param: { id: number },
    @Body() data: CreateCatTextDTO,
  ) {
    return this.appService.updateCatTextById(param.id, data);
  }

  @Patch('/dev/:id')
  updateCatTextDevById(
    @Param() param: { id: number },
    @Body() data: CreateCatTextDTO,
  ) {
    return this.appService.updateCatTextDevById(param.id, data);
  }

  @Get('/module/:id')
  getCatTextByModuleId(@Param() param: { id: number }) {
    return this.appService.getCatTextByModuleId(param.id);
  }
}
