import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CatText } from './schemas/cat-texts.schema';
import { Model } from 'mongoose';
import { CreateCatTextDTO } from './dto/create-cat-text.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(CatText.name) private catTextModel: Model<CatText>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  createCatText(data: CreateCatTextDTO) {
    const createdCatText = new this.catTextModel(data);
    return createdCatText.save();
  }

  getCatTextById(id: string) {
    return this.catTextModel.findById({ _id: id });
  }

  getProdCatTextById(id: string) {
    return this.catTextModel.find({ modules_id: id, is_prod: true });
  }

  getDevCatTextById(id: string) {
    return this.catTextModel.find({ modules_id: id, is_prod: false });
  }

  getCatTexts() {
    return this.catTextModel.find();
  }

  updateCatTextById(id: number, data: CreateCatTextDTO) {
    const updatedTexts: Partial<CreateCatTextDTO> = {
      modules_id: data.modules_id,
      name: data.name,
      texts: data.texts,
    };
    return this.catTextModel.updateMany({ modules_id: id }, updatedTexts);
  }

  updateCatTextDevById(id: number, data: CreateCatTextDTO) {
    const updatedTexts: Partial<CreateCatTextDTO> = {
      modules_id: data.modules_id,
      name: data.name,
      texts: data.texts,
    };
    return this.catTextModel.updateMany(
      { modules_id: id, is_prod: false },
      updatedTexts,
    );
  }

  getCatTextByModuleId(id: number) {
    return this.catTextModel.find({ modules_id: id });
  }
}
