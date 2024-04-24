import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatTextDocument = HydratedDocument<CatText>;

@Schema()
export class CatText {
  @Prop()
  modules_id: number;

  @Prop()
  name: string;

  @Prop({ type: Object })
  texts: any;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop()
  deletedAt: Date;
}

export const CatTextSchema = SchemaFactory.createForClass(CatText);
