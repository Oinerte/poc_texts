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

  getCatTexts() {
    return this.catTextModel.find();
  }

  updateCatTextById(id: number, data: CreateCatTextDTO) {
    const updatedTexts: Partial<CreateCatTextDTO> = {
      modules_id: data.modules_id,
      name: data.name,
      texts: data.texts,
    };
    const allTextModules = this.catTextModel.find({ modules_id: id });
    allTextModules.updateMany(updatedTexts);
    return this.catTextModel.find({ modules_id: id });
  }

  getCatTextByModuleId(id: number) {
    return this.catTextModel.find({ modules_id: id });
  }
}
